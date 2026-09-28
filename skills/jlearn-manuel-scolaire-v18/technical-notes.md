# Notes Techniques — J-Learn Manuels Scolaires

Deux approches selon la tâche :
- **Approche XML** : Traitement A/B — enrichissement/correction d'un `.docx` source existant.
- **Approche Node.js + docx** : Traitement C — génération d'un nouveau manuel de zéro.

---

## Approche XML (Traitement A/B)

### Dépendances

```bash
npm install adm-zip   # lecture/écriture du .docx (= zip)
# Pas de librairie XML — parsing par regex/string search
```

**Si `npm install` échoue** (réseau indisponible selon l'environnement) : utiliser `npm link` vers le paquet global déjà installé plutôt que de bloquer sur l'installation.
```bash
npm link adm-zip
```

### Sauvegarde obligatoire avant toute modification

```js
const fs = require("fs");
const AdmZip = require("adm-zip");

// 1. Copier le fichier source intact
fs.copyFileSync("source.docx", "source_BACKUP.docx");

// 2. Lire le XML
const zip = new AdmZip("source.docx");
let xml = zip.readAsText("word/document.xml");

// 3. Modifier xml ...

// 4. Réécrire dans le zip
zip.updateFile("word/document.xml", Buffer.from(xml, "utf-8"));
zip.writeZip("output.docx");
```

### Règles XML critiques

| Règle | Raison |
|-------|--------|
| **Ne jamais réécrire `<w:document …>`** | Contient 32 namespaces — les perdre corrompt le fichier |
| **`<w:sectPr>` = exactement 1** | Mise en page du document — doublon ou suppression = corruption |
| **0 occurrence de `ns0:`** | Indique une réécriture de namespace = fichier corrompu |
| **Ne jamais reconstruire le body depuis une liste parsée** | Perd `<w:sectPr>` |
| **Remplacements de droite à gauche** | Évite le décalage d'offset lors de remplacements multiples |

### Parsing XML simplifié (sans librairie)

```js
// Repères XML Word
// <w:tbl>  → tableau
// <w:tr>   → ligne de tableau
// <w:tc>   → cellule
// <w:p>    → paragraphe
// <w:t>    → texte

// Trouver la N-ième occurrence d'un tag
function findNthOccurrence(xml, tag, n) {
  let idx = -1;
  for (let i = 0; i < n; i++) {
    idx = xml.indexOf(tag, idx + 1);
    if (idx === -1) return -1;
  }
  return idx;
}
```

**Limitation** : ne gère pas les tableaux imbriqués. Si le docx source en contient, la détection de frontières peut échouer — traiter manuellement ou vérifier en amont.

### Vérifications post-génération (Traitement A/B)

```js
const zip2 = new AdmZip("output.docx");
const xml2 = zip2.readAsText("word/document.xml");

const sectPrCount   = (xml2.match(/<w:sectPr[\s>]/g) || []).length;
const ns0Count      = (xml2.match(/\bns0:/g) || []).length;
const fichesCount   = (xml2.match(/FICHE DE PR/g) || []).length;
const colsCount     = (xml2.match(/<w:gridCol /g) || []).length;
const tnrCount      = (xml2.match(/Times New Roman/gi) || []).length;
const doubleSpaces  = (xml2.match(/<w:t[^>]*>[^<]*  [^<]*<\/w:t>/g) || []).length; // doubles espaces résiduels

console.log({ sectPrCount, ns0Count, fichesCount, colsCount, tnrCount, doubleSpaces });

if (sectPrCount !== 1) throw new Error("sectPr count != 1 → fichier corrompu");
if (ns0Count > 0)      throw new Error("namespace ns0 détecté → fichier corrompu");
if (doubleSpaces > 0)  console.warn("Doubles espaces résiduels détectés → à corriger avant livraison");
```

### Scripts par manuel (architecture recommandée)

| Script | Rôle |
|--------|------|
| `transform_[niveau].cjs` | Enrichissement Application/Synthèse pour toutes les séances |
| `patch_[niveau].cjs` | Corrections sur séances à structure XML divergente |
| `fix_[niveau]_design.cjs` | Corrections design (titre, police, 6 colonnes, méta-table) |

**Séances spéciales** : certaines séances ont une structure XML différente (ex : 3e → S13, S18, S21, S25). Les identifier en inspectant le XML brut après le premier passage du script principal. Ces séances nécessitent un patch séparé.

**Après tout renommage ou reformatage global** (remplacement de terme en masse, correction de style appliquée à tout le document…) : relire manuellement un échantillon des zones touchées avant livraison — un remplacement automatique correct en général peut casser un cas particulier (ponctuation, casse, contexte grammatical) que les vérifications automatiques ci-dessus ne détectent pas.

**Vérification visuelle par conversion PDF** : en complément des vérifications XML automatiques, convertir en PDF (`soffice --headless --convert-to pdf`) et inspecter visuellement plusieurs pages représentatives (couverture, une fiche, une page leçon, la fin du document) avant de livrer — certains problèmes de mise en page ne sont visibles qu'à l'affichage.

### Procédure d'échec

Si une vérification échoue après **2 tentatives de correction** :
1. Arrêter — ne jamais livrer un fichier qui échoue.
2. Présenter le fichier source original intact (sauvegarde).
3. Expliquer clairement le blocage (quelle vérification, quelle(s) séance(s)).

---

## Approche Node.js + docx (Traitement C)

### Setup projet

```bash
# TOUJOURS dans /home/runner/workspace/ — jamais dans /tmp/ (ephémère, perdu au redémarrage)
mkdir -p /home/runner/workspace/<nom-projet>/src
mkdir -p /home/runner/workspace/<nom-projet>/output
cd /home/runner/workspace/<nom-projet>
npm init -y
npm install docx
```

**Si `npm install docx` échoue** (réseau indisponible selon l'environnement) : utiliser `npm link docx` vers le paquet global déjà installé, plutôt que de bloquer sur l'installation.

### Architecture des modules

```
src/
├── builders.js          # Fonctions docx réutilisables
├── exercise-bank.js     # Générateurs d'exercices
├── seance-generator.js  # Génère le contenu d'une séance
├── data-topics.js       # Contenu thématique Unité 1
├── data-topics2.js      # Contenu thématique Unité 2 …
├── data-revisions.js    # Révisions + sujets d'examen
└── assemble.js          # Assemblage final → écriture .docx
```

### builders.js — fonctions essentielles

```js
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  ShadingType, PageBreak,
} = require("docx");

const RED   = "C00000";
const GREEN = "1E7B34";
const BLUE  = "1F4E79";
const BLACK = "000000";

// Paragraphe simple
function p(text, opts = {}) { ... }

// Paragraphe avec mot clé coloré
function pHighlight(text, keyword, keyColor, opts = {}) { ... }

// Cellule de table avec options width, shading, colSpan
function cell(children, opts = {}) {
  return new TableCell({
    columnSpan: opts.colSpan || 1,
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children,
  });
}

// Méta-table à bordures invisibles
function metaTable(meta) {
  return new Table({ borders: noBorders(), rows: [...] });
}

// Convertit des exercices en Paragraphs pour cellule de table
function exosToParas(exos, fontSize) {
  const sz = fontSize || 15;
  return exos.flatMap((ex) => [
    p(ex.titre,   { bold: true, size: sz, color: BLUE, spacingAfter: 30 }),
    p(ex.consigne,{ italics: true, size: sz - 1, spacingAfter: 25 }),
    ...(ex.items || []).map((it) => p(it, { size: sz - 1, spacingAfter: 20 })),
    p("", { size: 14, spacingAfter: 20 }),
  ]);
}
```

### exercise-bank.js — générateurs disponibles

```js
// qcm(question, options[], correctIndex) → { consigne, lines, corrige }
// texteATrous(phraseAvecBlancs, motsAPlacer[], reponseComplete) → { consigne, lines, corrige }
// vraiFaux(affirmation, reponse) → { consigne, lines, corrige }
// appariement(gauche[], droite[], correspondance[]) → { consigne, lines, corrige }
// questionReponse(question, reponse) → { consigne, lines, corrige }
// completion(debutPhrase, reponse) → { consigne, lines, corrige }
// schema(consigne, elementsALegender[], corrigeLegende) → { consigne, lines, corrige }
```

**Construction des distracteurs (QCM, Vrai/Faux) — règle obligatoire :**
Un distracteur doit être un **piège plausible sur le sujet même de la séance** : confusion entre deux notions proches vues dans la leçon, date/ordre inversé, terme mal appliqué, chiffre ou lieu légèrement modifié. Ne jamais :
- réutiliser une phrase vraie mais hors-sujet tirée d'une autre séance/matière comme mauvaise réponse (l'élève élimine l'intrus sans avoir compris le contenu) ;
- fabriquer un "faux" en enveloppant une phrase vraie dans "Il est inexact d'affirmer que…" (négation artificielle, ne teste rien).

Le contenu de cours proprement dit (Analyse, Synthèse) reste, lui, strictement exact — seuls les distracteurs des exercices sont volontairement faux, et toujours corrigés comme tels.

### seance-generator.js — flux obligatoire

```js
function generateSeanceDocContent(topic, prevTopic, seanceNum, totalSeances, ...) {

  // 1. Générer les exercices EN PREMIER (avant les étapes de la fiche)
  const appExos  = buildApplicationExos(topic, allMotsCles);
  const evalExos = buildEvaluationExos(topic, prevTopic);

  // 2. Construire les 3 grandes étapes (Application et Évaluation reçoivent les vrais exercices,
  //    non notés à ce stade — le barème n'apparaît que dans la section EXERCICES finale)
  //    Durée affichée uniquement sur I / II / III — jamais sur les sous-étapes 1-6.
  const steps = [
    buildRevision(prevTopic),                 // I. Révision — durée affichée
    buildSectionRow("II. NOUVELLE LEÇON"),     // ligne de section fusionnée, durée globale affichée
    buildMiseEnSituation(topic),               // 1. — pas de durée ; élèves écoutent et répondent à l'oral
    buildPresentation(topic),                  // 2. — pas de durée
    buildObservation(topic),                   // 3. — pas de durée
    buildAnalyse(topic),                       // 4. — pas de durée
    buildSynthese(topic),                      // 5. — pas de durée ; énoncée par l'enseignant, élèves écoutent
    buildApplicationStep(appExos),             // 6. — pas de durée, pas de barème ; exosToParas() dans cellule Enseignant
    buildEvaluationStep(evalExos),             // III. Évaluation — durée affichée, pas de barème ; exosToParas() dans cellule Enseignant
  ];

  // 3. Fiche (page break + méta + déroulement)
  const ficheParas = B.buildFichePage(meta, steps, seanceNum, totalSeances);

  // 4. Leçon (page break + titre rouge + sous-titres verts + faits avec mots clés bleus)
  const leconParas = [
    new Paragraph({ children: [new PageBreak()] }),
    B.leconTitre(topic.titre),
    ...topic.faits.map((f) => B.pHighlight(f, topic.motCle, BLUE, { size: 21 })),
  ];

  // 5. EXERCICES (bloc unique après la leçon, consignes rédigées directement, pas de nom de type,
  //    corrigé avec mots-clés en rose/bordeaux #C2185B, reste du texte en noir)
  const exosSection = buildExosSection([...appExos, ...evalExos]);

  return [...ficheParas, ...leconParas, ...exosSection];
}
```

### Sommaire interactif — implémentation (Traitement C)

**Méthode : liens hypertexte internes vers des signets — jamais de champ `TableOfContents` natif** (celui-ci reste vide tant que l'utilisateur n'a pas ouvert le fichier dans Word et fait "Mettre à jour les champs" manuellement — inacceptable pour un manuel généré automatiquement et potentiellement reconverti sans jamais être ouvert dans Word).

```js
const { Bookmark, InternalHyperlink, Paragraph, TextRun, HeadingLevel } = require("docx");

// Poser un signet sur chaque titre de thème/séance
function heading(text, level, anchorId) {
  const run = new TextRun({ text, bold: true, size: 28 });
  return new Paragraph({
    heading: level,
    children: anchorId ? [new Bookmark({ id: anchorId, children: [run] })] : [run],
  });
}
// Exemple : heading("SÉANCE 12 — TITRE", HeadingLevel.HEADING_2, "seance12")

// Lien du sommaire pointant vers ce signet
function tocLink(label, anchor) {
  return new Paragraph({
    children: [new InternalHyperlink({
      anchor,
      children: [new TextRun({ text: label, style: "Hyperlink" })],
    })],
  });
}
// Exemple : tocLink("Séance 12 — Titre", "seance12")
```

**Vérification obligatoire après génération** — le nombre de signets doit être strictement égal au nombre de liens, et chaque `anchor` doit correspondre à un signet existant :

```js
const AdmZip = require("adm-zip");
const xml = new AdmZip("output/Manuel_....docx").readAsText("word/document.xml");
const bookmarks = new Set([...xml.matchAll(/<w:bookmarkStart[^>]*w:name="([^"]+)"/g)].map(m => m[1]));
const anchors   = new Set([...xml.matchAll(/w:anchor="([^"]+)"/g)].map(m => m[1]));
console.log("Signets sans lien :", [...bookmarks].filter(b => !anchors.has(b)));
console.log("Liens sans signet :", [...anchors].filter(a => !bookmarks.has(a)));
// Les deux listes doivent être vides avant livraison.
```

Cette méthode ne nécessite plus de calculer ou d'afficher de numéro de page dans le sommaire (le lien mène directement à l'endroit voulu) — plus besoin de générer le document deux fois pour mesurer la pagination réelle.

### assemble.js — structure du document final

```js
const children = [
  ...coverPage(),          // Couverture
  ...avantPropos(),        // Avant-propos
  ...modeEmploi(),         // Comment utiliser ce manuel
  ...tableDesMatieres(),   // Table des matières
];

UNITES.forEach((unite) => {
  children.push(...tableauDeBord(unite));  // Tableau de bord de l'unité
  unite.blocks.forEach((block) => {
    block.topics.forEach((topic, i) => {
      children.push(...generateSeanceDocContent(topic, ...));
    });
  });
  children.push(...revisionSeance(rev));   // Séance de révision
  children.push(...examenSeance(exam));    // Sujet d'examen [niveau]
});

children.push(
  ...glossaireAnnexe(),
  ...autoEvaluationAnnexe(),
  ...indexAnnexe(),
  ...evaluationsFormatExamen(),
);

const doc = new Document({
  styles: { default: { document: { run: { font: "Times New Roman", size: 20 } } } },
  sections: [{ properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } }, children }],
});
Packer.toBuffer(doc).then((buf) => fs.writeFileSync("output/Manuel_....docx", buf));
```

### Vérifications post-génération (Traitement C)

```js
// Dézipper et lire le XML pour vérifier
const AdmZip = require("adm-zip");
const zip = new AdmZip("output/Manuel_....docx");
const xml = zip.readAsText("word/document.xml");

const fiches  = (xml.match(/FICHE DE PR/g) || []).length;   // = nb séances core
const seances = (xml.match(/SÉANCE \d+/g) || []).length;    // = total avec révision/examen
const hatier  = (xml.match(/Hatier|MINESEB/gi) || []).length; // doit être 0
const oral    = (xml.match(/>Oral</g) || []).length;          // doit être 0

console.log({ fiches, seances, hatier, oral });
```

### Erreurs fréquentes à éviter

| Problème | Cause | Solution |
|---------|-------|---------|
| `TypeError: children is not iterable` | Spread d'une fonction qui renvoie un objet unique (Table) au lieu d'un tableau | Vérifier que les fonctions builder renvoient `[]` et non un élément unique |
| Fiche dupliquée | `buildFichePage()` appelé ET fiche reconstruite manuellement | Utiliser uniquement `buildFichePage()` |
| Méta-table avec bordures visibles | `noBorders()` non appliqué | Vérifier que `metaTable()` utilise `borders: noBorders()` |
| "Oral" dans Support et Matériel | Valeur par défaut non corrigée | Toujours fournir un support concret dans chaque step builder ; "Tableau noir" seulement si aucun support réel n'est utilisé |
| `exosToParas` retourne des strings au lieu de Paragraphs | Confusion type | `exosToParas` doit retourner `Paragraph[]`, pas `string[]` |
| Cellules Application/Évaluation très denses, tableau étalé sur plusieurs pages | Conséquence normale de la règle "2 types × ≥4 items" dans chaque étape | Comportement attendu, pas un bug — ne pas réduire le contenu pour "faire tenir" la table sur une page |
| Terme ou tournure qui sonne juste mais douteux (ex : un mot pédagogique rare, une date incertaine) | Improvisation sans vérification | Rechercher le terme/fait sur internet avant de l'utiliser ; citer la source en bibliographie/webographie si elle a servi à fiabiliser le contenu |
| Phrase grammaticalement cassée après réutilisation ailleurs (ex : minuscule après ":") | Un fragment de texte écrit pour un contexte précis (ex : synthèse pensée pour suivre "Donc,") est réutilisé tel quel dans un autre contexte (ex : après ":") | Tout texte réutilisable programmatiquement doit être écrit de façon grammaticalement autonome (majuscule initiale, phrase complète), ou capitalisé automatiquement au moment de la réutilisation |

---

## Fiabilité du contenu et du vocabulaire

Avant d'utiliser un terme technique, une date, un fait historique/scientifique ou une tournure pédagogique dont on n'est pas certain, **vérifier par une recherche internet** plutôt que de l'improviser — y compris pour des mots qui "sonnent" français mais pourraient être des néologismes ou des erreurs (ex : confondre un terme technique existant avec un sens courant différent). Toute source externe ayant servi à vérifier ou compléter le contenu du manuel doit être **citée en bibliographie/webographie**, avec son titre et, si disponible, son URL.
