# Design de la Fiche de Préparation — Spécifications complètes

**Rappel (voir SKILL.md) : tout le contenu produit dans les cellules Enseignant/Apprenants doit être du contenu réel rédigé — consignes claires, réponses détaillées, exercices complets. Jamais une description de ce qu'il faudrait faire.**

---

## 1. Titre du document

| Langue | Titre |
|--------|-------|
| Français | **FICHE DE PRÉPARATION** |
| Malgache | **TAKELA-PANOMANAN-DESONA** |

- **Position** : AVANT la méta-table (au-dessus)
- **Police** : Times New Roman, gras, centré

---

## 2. Méta-table (informations générales)

Tableau en haut de la fiche, **après le titre**.
**Bordures invisibles** — aucun trait visible entre les cellules ni autour.

### Disposition : deux zones côte à côte

**Zone gauche :**

| Français | Malgache |
|---------|---------|
| Discipline : | Taranja : |
| Sous discipline : | Zana-taranja : |
| Thème : | Lohahevitra : |
| Titre : | Lohateny : |
| Objectif spécifique : | Tanjona manokana : |
| Documentation : | Fanovozan-kevitra : |
| Support et matériel : | Fitaovana : |

**Zone droite :**

| Français | Malgache |
|---------|---------|
| Date : _______ | Daty : _______ |
| Classe : | Kilasy : |
| Séance n° : | Seho n° : |
| Durée : … min | Faharetany : … minitra |

### Règle XML (Traitement A/B)

```xml
<!-- Bordures invisibles sur toutes les cellules de la méta-table -->
<w:tcBorders>
  <w:top    w:val="none" w:sz="0" w:space="0" w:color="auto"/>
  <w:left   w:val="none" w:sz="0" w:space="0" w:color="auto"/>
  <w:bottom w:val="none" w:sz="0" w:space="0" w:color="auto"/>
  <w:right  w:val="none" w:sz="0" w:space="0" w:color="auto"/>
</w:tcBorders>
```

### Règle Node.js (Traitement C)

```js
// Dans builders.js — noBorders() appliqué à la méta-table
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none,
           insideHorizontal: none, insideVertical: none };
}
new Table({ borders: noBorders(), rows: [...] });
```

---

## 3. Table de déroulement — Structure 6 colonnes

### Colonnes officielles (dans l'ordre)

| N° | Français | Malgache | Notes |
|----|---------|---------|-------|
| 1 | **Étapes et Durée** | **Dingana sy Faharetany** | **UNE seule colonne fusionnée** — pas deux séparées. Durée affichée seulement pour I. Révision, II. NOUVELLE LEÇON (globale) et III. Évaluation — jamais sur les sous-étapes 1-6 |
| 2 | **Enseignant** | **Mpampianatra** | Sous "Déroulement de la leçon" |
| 3 | **Apprenants** | **Mpianatra** | Sous "Déroulement de la leçon" |
| 4 | **Technique et Stratégie** | **Tetika Amam-paika** | |
| 5 | **Support et Matériel** | **Fitaovana** | Objet concret uniquement — jamais "Oral" |
| 6 | **Observation** | **Fanamarihana** | Laissé vide — rempli par l'enseignant en classe |

**Matériel didactique manipulable — une option, pas un défaut.** Le support d'une étape Observation/Analyse n'est pas obligatoirement une image : au primaire, et selon la matière et le contenu traité (courant en mathématiques, possible dans d'autres matières manipulables comme les sciences), nommer explicitement un matériel physique à préparer par l'enseignant (ex. "20 bâtonnets de comptage", "solides géométriques en bois", "balance à plateaux") est une alternative valable à une image — la manipulation concrète est pédagogiquement adaptée à ce niveau. Décider au cas par cas selon le contenu de la séance, jamais un choix systématique par défaut.

**Grande ardoise pour un travail de groupe** — une option documentée, parmi les autres déjà valides ("Asa iombonana"/collectif, "Asa tsirairay"/individuel, "tsiroaroa"/binôme, brainstorming), pour l'étape Analyse **et pour l'étape Application** (le gabarit Fampiharana autorise déjà "Asa isan-tarika"/travail en groupe comme technique — la grande ardoise en est le support naturel, à la place du cahier par défaut) : une grande ardoise partagée par groupe permet au travail de rester visible pendant que l'enseignant circule et corrige en direct. Ni un remplacement des autres techniques ni un défaut — un choix parmi d'autres selon ce qui convient à la séance.

### En-tête de la table — 2 lignes obligatoires

**Ligne 1 :**

| Étapes et Durée (rowspan=2) | Déroulement de la leçon (colspan=2) | Technique et Stratégie (rowspan=2) | Support et Matériel (rowspan=2) | Observation (rowspan=2) |
|-----------------------------|-------------------------------------|------------------------------------|--------------------------------|------------------------|

**Ligne 2 :**

| *(vMerge)* | Enseignant | Apprenants | *(vMerge)* | *(vMerge)* | *(vMerge)* |
|------------|-----------|-----------|-----------|-----------|-----------|

### XML de l'en-tête ligne 1 (Traitement A/B)

```xml
<w:tr>
  <!-- Col 1 : Étapes et Durée — rowspan via vMerge restart -->
  <w:tc>
    <w:tcPr><w:vMerge w:val="restart"/></w:tcPr>
    <w:p><w:r><w:t>Étapes et Durée</w:t></w:r></w:p>
  </w:tc>
  <!-- Col 2+3 : Déroulement de la leçon — colspan via gridSpan -->
  <w:tc>
    <w:tcPr><w:gridSpan w:val="2"/></w:tcPr>
    <w:p><w:r><w:t>Déroulement de la leçon</w:t></w:r></w:p>
  </w:tc>
  <!-- Col 4 : Technique et Stratégie — rowspan -->
  <w:tc>
    <w:tcPr><w:vMerge w:val="restart"/></w:tcPr>
    <w:p><w:r><w:t>Technique et Stratégie</w:t></w:r></w:p>
  </w:tc>
  <!-- Col 5 : Support et Matériel — rowspan -->
  <w:tc>
    <w:tcPr><w:vMerge w:val="restart"/></w:tcPr>
    <w:p><w:r><w:t>Support et Matériel</w:t></w:r></w:p>
  </w:tc>
  <!-- Col 6 : Observation — rowspan -->
  <w:tc>
    <w:tcPr><w:vMerge w:val="restart"/></w:tcPr>
    <w:p><w:r><w:t>Observation</w:t></w:r></w:p>
  </w:tc>
</w:tr>
```

### Node.js — en-tête 2 lignes (Traitement C)

```js
function deroulementHeader() {
  const row1 = new TableRow({ children: [
    cell([p("Étapes et Durée", { bold: true })],           { shading: "DDEEFF" }),
    cell([p("Déroulement de la leçon", { bold: true })],   { shading: "DDEEFF", colSpan: 2 }),
    cell([p("Technique et Stratégie", { bold: true })],    { shading: "DDEEFF" }),
    cell([p("Support et Matériel", { bold: true })],       { shading: "DDEEFF" }),
    cell([p("Observation", { bold: true })],               { shading: "DDEEFF" }),
  ]});
  const row2 = new TableRow({ children: [
    cell([p("")], { shading: "F5F5F5" }),
    cell([p("Enseignant",  { bold: true })], { shading: "F5F5F5" }),
    cell([p("Apprenant",   { bold: true })], { shading: "F5F5F5" }),
    cell([p("")], { shading: "F5F5F5" }),
    cell([p("")], { shading: "F5F5F5" }),
    cell([p("")], { shading: "F5F5F5" }),
  ]});
  return [row1, row2];
}
```

---

## 4. Contenu des étapes (cellules Enseignant / Apprenants)

**Structure unique à 3 grandes étapes — voir SKILL.md section "Structure des séances". Durée affichée seulement sur I / II / III, jamais sur les 6 sous-étapes de II.**

### Règles de rédaction

| Étape | Enseignant | Apprenants |
|-------|-----------|-----------|
| I. Révision | Questions simples rédigées : *"Quel est… ? / Cite… / Qu'est-ce que… ?"* | **R.A.** : réponse attendue complète |
| II.1 Mise en situation | Histoire contextualisée, ou question simple + R.A. (voir SKILL.md) | Les élèves écoutent et répondent à l'oral |
| II.2 Présentation | *"Aujourd'hui nous allons apprendre : « [titre] ». Après cette séance vous serez capables de [objectif]."* | Les élèves écoutent |
| II.3 Observation | *"Regardez et observez bien [support concret]."* | Les élèves observent silencieusement — aucune réponse à ce stade |
| II.4 Analyse | Série de questions dérivant la leçon, avec R.A. pour chacune (une ligne par couple Q/R.A.) | **R.A.** : réponse attendue pour chaque question |
| II.5 Synthèse | **L'enseignant énonce lui-même la synthèse**, commençant par *"Donc, …"* | Les élèves écoutent *(l'enseignant peut faire répéter oralement s'il le souhaite — voir note ci-dessous)* |
| II.6 Application | Exercices réels complets (≥2 types, ≥4 items chacun) : consigne rédigée directement, sans nommer le type. **Non notés à ce stade.** | Corrigé de chaque exercice — mots-clés en rose/bordeaux, reste en noir |
| III. Évaluation | Exercices écrits complets (≥2 types, ≥4 items chacun), consigne rédigée directement. **Non notés à ce stade** (le barème n'apparaît que dans la section EXERCICES après la leçon). | Corrigé de chaque exercice — mots-clés en rose/bordeaux, reste en noir |

### Règle Support et Matériel

**Principe : si un support réel est utilisé à une étape, c'est lui qui doit être mentionné — "Tableau noir" n'est qu'un filet de sécurité pour les étapes sans support physique, jamais une valeur par défaut systématique.**

- I. Révision → **vide ou "—"** (aucun support consultable, voir SKILL.md)
- II.1 Mise en situation → support réel si utilisé (image, objet, anecdote illustrée…), sinon **Tableau noir**
- II.2 Présentation → **Tableau noir, cahier**
- II.3 Observation → **[nom du support concret]** (image, carte, objet, texte…) — jamais "Tableau noir" si un vrai support est observé
- II.4 Analyse → même support que l'Observation
- II.5 Synthèse → **Tableau noir**
- II.6 Application → support réel si l'exercice en utilise un (image, carte muette…), sinon **Cahier, ardoise**
- III. Évaluation → **Cahier, feuille d'évaluation**

---

## 5. Couleurs dans le contenu de leçon (Traitement B et C)

**S'applique à la page LEÇON uniquement — jamais aux exercices (texte noir, sauf le corrigé).**

| Élément | Couleur | Code hex |
|---------|---------|----------|
| Titre de la leçon | Rouge | `#C00000` |
| Sous-titres de la leçon | Vert | `#1E7B34` |
| Mots clés de la leçon | Bleu + gras | `#1F4E79` |
| Texte courant de la leçon | Noir | `#000000` |
| Corrigé des exercices — mots-clés uniquement (reste en noir) | Rose/bordeaux | `#C2185B` |
| Police | Times New Roman | — |

```js
// Traitement C — pHighlight : met le mot clé en bleu+gras dans un paragraphe
function pHighlight(text, keyword, keyColor, opts = {}) {
  const { size = 20, spacingAfter = 80 } = opts;
  if (!keyword || !text.toLowerCase().includes(keyword.toLowerCase())) {
    return p(text, { size, spacingAfter });
  }
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  const runs = parts.map((part) =>
    part.toLowerCase() === keyword.toLowerCase()
      ? new TextRun({ text: part, bold: true, color: keyColor, size })
      : new TextRun({ text: part, size })
  );
  return new Paragraph({ spacing: { after: spacingAfter }, children: runs });
}
```

---

## 6. Rôle pédagogique détaillé des sous-étapes (guide de rédaction)

### II.1 — Mise en situation
Créer un lien entre le vécu des élèves et le thème nouveau. Histoire courte, ou question simple + R.A. (voir SKILL.md). Les élèves écoutent et répondent à l'oral.

### II.2 — Présentation
Formuler l'objectif de façon concrète et mesurable : *"vous serez capables de nommer / expliquer / calculer / distinguer…"* — pas *"vous comprendrez"*.

### II.3 — Observation
Décrire précisément le support : *"cette carte du relief de Madagascar"* pas *"ce document"*. **Les élèves observent seulement à cette étape — ils ne décrivent pas et ne répondent à aucune question.** Ce qu'ils sont censés remarquer va dans la colonne Observation/Fanamarihana (note pour l'enseignant), pas dans la colonne Apprenants. L'interprétation et les réponses arrivent uniquement à l'étape suivante (Analyse).

### II.4 — Analyse
Questions progressives : du plus simple (identifier) au plus complexe (expliquer, comparer). Chaque question a sa R.A. rédigée, une ligne par couple question/R.A.

### II.5 — Synthèse
**C'est l'enseignant qui énonce la synthèse**, jamais les élèves — commence obligatoirement par *"Donc, …"*. Les élèves écoutent. *Note : l'enseignant peut, s'il le souhaite, faire répéter la synthèse à voix haute par la classe pour en favoriser la mémorisation.*

### II.6 — Application
Exercices de consolidation immédiats, consigne rédigée directement sans nommer le type. Rédigés intégralement dans la cellule Enseignant, **sans barème à ce stade**. Corrigés (mots-clés en rose/bordeaux) dans la cellule Apprenants.

---

## 7. Structure à 3 grandes étapes (structure unique — plus de variante)

Tous les manuels J-Learn, sans exception, utilisent cette structure :

| Grande étape | Sous-étapes | Durée affichée |
|--------------|------------|:---:|
| I. RÉVISION | — | ✅ |
| II. NOUVELLE LEÇON | 1. Mise en situation → 6. Application | ✅ (globale sur II uniquement, rien sur 1-6) |
| III. ÉVALUATION | — | ✅ |

"II. NOUVELLE LEÇON" est une ligne de section fusionnée (colspan 6) au-dessus des 6 sous-étapes, qui gardent le tableau à 6 colonnes standard. Aucune durée individuelle n'apparaît sur les lignes 1 à 6.

**Fichiers source existants (Traitement A/B)** : si le fichier utilise encore l'ancienne numérotation "1 à 8 à plat", le convertir vers cette structure à 3 grandes étapes plutôt que la conserver telle quelle.

---

## 8. Profondeur et structure du contenu de leçon (page LEÇON)

**Le contenu à copier dans le cahier doit être substantiel** — couvrir toutes les idées essentielles du sujet, pas un résumé de 3-4 phrases. Structure hiérarchique obligatoire :

```
[Titre de la leçon]              (rouge)
1. [Première section]            (vert, gras — niveau "sous-titre")
   Texte explicatif…
   a. [Sous-section, si le sujet le justifie]
      Texte…
      Exemple :
      • Élément 1
      • Élément 2
2. [Deuxième section]            (vert, gras)
   …
```

- Sections numérotées (1, 2, 3…) = niveau sous-titre (vert), comme avant.
- Sous-sections lettrées (a, b, c…) = niveau de détail supplémentaire, texte noir, mise en retrait ou en gras pour se distinguer du texte courant.
- Exemples concrets avec listes à puces chaque fois que pertinent — pas seulement des définitions abstraites.
- Ne pas forcer artificiellement une sous-section ou un exemple si le sujet ne s'y prête pas : la profondeur suit le contenu, pas l'inverse.

---

## 9. Construction des exercices à pièges (QCM, Vrai/Faux)

**Un distracteur (mauvaise réponse de QCM, affirmation fausse de Vrai/Faux) doit être un piège pédagogique plausible sur le sujet même de la séance** :
- Confusion réaliste entre deux notions proches vues dans la même leçon
- Date, ordre chronologique ou étape inversée
- Terme correct mais mal appliqué au contexte
- Chiffre ou lieu légèrement modifié par rapport au contenu réel

**À éviter absolument :**
- Une information vraie mais hors-sujet, copiée d'une autre séance ou d'une autre matière : l'élève repère l'intrus par élimination sans avoir compris le contenu — l'exercice ne teste alors rien.
- Envelopper une phrase vraie dans une formule du type *"Il est inexact d'affirmer que : « … »"* : ça ne crée pas une vraie fausse affirmation testant la compréhension, seulement une négation artificielle et facilement repérable.

**Restriction stricte au contenu de cours lui-même** (Analyse, Synthèse, "À retenir" si présent) : il ne doit **jamais** contenir d'information inventée ou non vérifiée. Les distracteurs volontairement faux n'ont leur place que dans les exercices, toujours corrigés clairement comme faux dans le corrigé.
