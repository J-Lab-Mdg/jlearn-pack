# Préférences J-Learn — mémo de production des manuels

> Complément au skill `jlearn-manuel-scolaire` (v18, dossier voisin).
> Consigné à partir de la session de production **PC T6-T9 + Tantara T6 (sept. 2026)**.
> ⚠️ Avant d'appliquer un point à une nouvelle tâche, consulter `QUESTIONS-AVANT-TACHE.md` :
> certains choix sont propres à un manuel et doivent être re-validés avec J-Lab.

---

## 1. Identité visuelle — charte coverbook J-Learn

La couverture de **tout** livrable suit la charte maison (références réelles : covers
Math 9e, SVT 6e, Histoire 3e extraites des manuels du dépôt) :

| Zone | Contenu |
|---|---|
| En-tête | « FICHE DE PRÉPARATION » en noir gras — ou l'équivalent dans la langue du manuel (ex. « TAKELA-PANOMANAN-DESONA » pour le malgache) |
| Logo | J-Learn (livre bleu ouvert « JL » + feuille verte), en haut à droite |
| Titre | Très gros, **bleu marine**, court : « PC T6 », « TANTARA T6 », « MATH 9e »… + sous-titre éventuel (« Physique-Chimie ») |
| Slogan | *« Apprendre, c'est une vie, pas un choix. - J-Learn. »* en italique |
| Visuel | Photo réaliste d'un(e) enseignant(e) malgache avec baguette devant un tableau vert, salle de classe (globe, bureaux en bois) |
| Tableau | « **Contenu** » en rose néon + liste blanche : `* Fiche de préparation * Leçon * Exercices * Sujet d'examen et corrigés * Annexe` (traduite si manuel en MG : Takela-panomanan-desona / Lesona / Fanazaran-tena / Fanadinana sy valiny / Tovana) |
| Footer | « Contactez-nous » + Facebook **J-Learn** + Gmail **j.lab.mdg@gmail.com** + « Édition 2026 » |

**Méthode** : générer par IA en passant une cover J-Learn existante comme *image de
référence* et ne modifier **que les textes** (titre, en-tête, liste). Alterner
enseignant/enseignante selon les manuels. La cover est intégrée en pleine page A4
(image flottante 794×1123, derrière le texte, page 1 sans marge).

### Charte couleurs intérieure
- Vert `#2E7D32` (titres de sections, encadrés) — Rose `#C2185B` (**tous les corrigés/VALINY**)
- Ocre `#B25000`, Bleu `#1565C0` (diagrammes) — Liens internes `#0563C1` souligné
- Police : **Times New Roman** partout.
- Typo : guillemets « français » dans le contenu, jamais de guillemets droits `"`.

## 2. Terminologie (corrections J-Lab à respecter)

- **« Taranja »** suffit — ne pas ajouter de ligne « Discipline » dans le tableau méta.
- **« Seho »** (pas « Seansa ») pour les séances en malgache. Titres : `SEHO n / total`.
- Ordinaux MG : jamais **« faha-1 »** → dire **« voalohany »** ou chiffre romain **I**.
  (« faha-2 », « faha-19 », « taonjato faha-20 » restent corrects.)
- Dire **« bibliographie/webographie »** — jamais « Loharanom-Baovao ».
- En français : **« Le savais-tu ? »** (pas « Le sais-tu ? ») ; en malgache : « Fantatrao ve ? ».
- Pas d'encadré « À retenir » (option rejetée).
- Champ **Durée / Faharetany** : laissé vide (`________`).
- Langue d'un manuel MG : **tout en malgache sauf les termes officiels français non
  traduisibles** (Discipline d'état civil, sigles, noms d'institutions…).

## 3. Structure et contenu des fiches

- Squelette **LFK du FRP officiel** (fiche de préparation + lesona + tahirin-kevitra),
  enrichi : exercices (fanazaran-tena), rakibolana kely, « Fantatrao ve ? ».
- **AUCUNE image dans la fiche de préparation (Takela).** Les illustrations vont
  **uniquement dans Lesona** (et exercices si besoin) :
  - **2 images minimum par seho** : 1 en tête de leçon + 1 schéma de synthèse en fin ;
  - **3 images pour les leçons denses** ;
  - exercices illustrés en **bonus hors barème** (« FANAMPINY — tsy isaina isa ») :
    frise à compléter, carte muette, document à analyser — corrigé en rose dans VALINY.
- Barèmes : exercices `/10` par fiche, examens (fanadinana) `/20` — totaux vérifiés.
- Numérotation des figures **automatique** (compteur `Sary N`) + « lisitry ny sary »
  cliquable en dernière annexe. Ne jamais coder les numéros en dur.
- Manuel complet : bookcover → couverture interne → teny fampidirana → torolalana →
  **fizahan-takila cliquable** → fafan'ny mpianatra (tableau de suivi ☐) → unités
  (page de garde par lohahevitra) → examens intercalés → **8 annexes** (frise, tableau
  des dirigeants, sigles, rakibolana, cartes, auto-évaluation, index cliquable,
  biblio/webographie + liste des illustrations).
- Garder les leçons **hors PE** comme bonus pédagogique (ne pas les retirer).

## 4. Illustrations

- Deux sources : **IA** (scènes de classe, scènes historiques — max 10 générations/tour)
  et **SVG maison → PNG via sharp** (largeur 1100 px) pour frises, diagrammes en boîtes,
  tableaux comparatifs, cartes schématiques.
- **Jamais de portraits IA de personnes réelles** (présidents…) : scènes, drapeaux,
  frises, cartes, monuments uniquement.
- Pas d'optimisation/compression JPEG des images (« NON laisse »).
- Images de banques web : attention aux **watermarks/copyright** (une carte OnTheWorldMap
  a été rejetée) — préférer les SVG maison.
- Vigilance **homoglyphes cyrilliques** dans les textes générés (ex. « o » russe dans
  « Mariho ») — auditer.

## 5. Chaîne technique (Node.js)

- Génération DOCX par scripts Node (`docx` + `sharp`), un dossier par manuel :
  `src/` (builders, data par unité, assemble-manuel.js, images-svg.js) + `images/` +
  `livrables/`.
- **Audits systématiques après chaque build** (python zipfile sur le .docx) :
  - `sectPr` = 1 (un seul sectionnage) ;
  - 0 guillemet droit dans les textes ;
  - toutes les séances présentes (`SEHO n / total`) ;
  - aucun lien interne orphelin (hyperlink → bookmark) ;
  - numéros `Sary` sans trou ni doublon (chacun 2× : légende + liste) ;
  - totaux des barèmes.
- Vérification visuelle d'au moins 1-2 images/pages par lot.
- Livraison : commit + push, puis **lien raw.githubusercontent.com** vers le .docx.

## 6. Contexte à connaître

- PE officiels : `plateforme.education.mg` (+ copies PE_T*.docx dans le dépôt).
  **Vérifier si le PE a été mis à jour avant toute production.**
- Histoire contemporaine (à jour sept. 2026) : crise d'octobre 2025 — départ de
  Rajoelina (12 oct.), destitution (14 oct.), investiture du colonel **Michael
  Randrianirina** par la HCC (17 oct. 2025, « Fanorenana ifotony / Refondation »),
  PM Herintsalama Rajaonarivelo, transition annoncée 18-24 mois, suspension de
  Madagascar par l'UA. Les manuels d'histoire doivent intégrer ces faits.
- « Édition 2026 » sur toutes les covers. Contact : j.lab.mdg@gmail.com, FB J-Learn.

## 7. Manuels déjà produits avec ces préférences

| Manuel | Dossier | Particularités |
|---|---|---|
| PC T6-T9 (FR) | `manuel-pc-t6` … `manuel-pc-t9` | conformes PE/FRP, covers charte J-Learn |
| Tantara T6 (MG) | `manuel-tantara-t6` | 27 sehos, 57 illustrations, 8 tovana, compteur Sary auto |
