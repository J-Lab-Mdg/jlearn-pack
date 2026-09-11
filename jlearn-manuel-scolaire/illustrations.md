# Illustrations — gestion des images dans les manuels

Applicable aux Traitements B et C, chaque fois qu'une séance appelle un support visuel (schéma, carte, photo, image à légender…).

---

## Ce qui n'existe pas

**Il n'existe pas de méthode technique pour télécharger une image depuis un lien et l'insérer automatiquement dans un `.docx`.** Ne pas proposer ni tenter cette piste — elle a été explorée et ne fonctionne pas dans cet environnement. Les trois approches valides sont ci-dessous.

---

## Les 3 approches valides

**Ordre de priorité : le SVG d'abord dès que l'illustration est géométrique.** La génération externe est réservée à ce que le SVG ne peut pas rendre (photos, scènes, personnages). Motif : les modèles de génération d'image restituent mal les chiffres, les données précises et les libellés d'une figure — un schéma géométrique y ressort faux ou illisible, alors que le SVG le rend exact et relisible.

### 1. Génération SVG → PNG (prioritaire pour tout schéma géométrique)

Dès que l'illustration se décrit en formes géométriques — diagrammes, cartes stylisées, figures de géométrie, frises, schémas annotés, plans, roses des vents, tableaux de données schématisés — générer un SVG par code puis le convertir en PNG avec **`sharp`** (déjà installé globalement — pas besoin de `npm install`).

```js
const sharp = require("sharp");
await sharp("schema.svg")
  .resize({ width: 1100 })   // voir règle de redimensionnement ci-dessous
  .png()
  .toFile("schema.png");
```

Fiable, gratuite et exacte : le texte et les valeurs affichés sont ceux qu'on a écrits, pas une approximation. Réservée en revanche à ce qui tient en formes géométriques — pas adaptée à une illustration réaliste ou une photo.

### 2. Génération externe (illustrations non géométriques, quand un outil est disponible)

Un outil de génération d'image n'est pas systématiquement disponible selon les projets — vérifier en début de tâche s'il y en a un à disposition. Si oui, l'utiliser pour les illustrations **non** géométriques (photos, scènes, personnages, paysages réalistes). Rédiger un prompt détaillé et contextualisé (sujet, style pédagogique sobre, éléments culturels malgaches si pertinent) plutôt qu'un prompt vague. **Ne pas l'utiliser pour une figure portant des chiffres, des mesures ou des libellés précis** — reprendre le SVG dans ce cas.

### 3. Insertion manuelle par l'utilisateur

Quand ni l'un ni l'autre n'est adapté (ou sur demande explicite), laisser un emplacement réservé clairement identifié dans le document (légende + note "image à insérer ici par l'utilisateur") plutôt qu'improviser un visuel de mauvaise qualité.

### 4. Prompt rédigé pour génération externe par l'utilisateur

Quand aucun outil de génération d'image n'est disponible en session, mais que l'utilisateur dispose d'un accès à un générateur externe (Gemini, Grok…) : rédiger un prompt détaillé et contextualisé (sujet, style pédagogique sobre, éléments à représenter précisément, dimensions/cadrage si pertinent) que l'utilisateur pourra copier-coller ailleurs, puis fournir l'image générée pour intégration. Différent de l'approche 2 (aucun appel d'outil n'a lieu en session ici) et de l'approche 3 (un prompt concret est fourni, pas seulement un emplacement réservé).

---

## Redimensionnement obligatoire avant intégration

**Toujours redimensionner une image avant de l'insérer dans le `.docx`.** Des images en pleine résolution (JPG bruts d'appareil photo ou de génération) peuvent faire passer un manuel de 250 Ko à plusieurs Mo pour un gain visuel nul (l'image est de toute façon affichée en petit dans une page A4).

- **Largeur cible : ~1100 px** (largeur d'affichage typique dans une page de manuel, marge comprise) — pas plus, sauf besoin explicite de haute résolution (couverture, affiche).
- Faire ce redimensionnement systématiquement, y compris pour des images fournies par génération externe.

---

## Convention d'emplacement et de nommage

- **Emplacement** : par défaut en haut de la page LEÇON, juste après le titre de la leçon — **mais pas systématiquement**. Placer l'image là où elle sert réellement la séance : un support d'observation va dans la fiche (étape 2.3 Observation) ou en tête de la leçon, une carte ou un document à interroger peut aller dans les exercices. Choisir l'emplacement séance par séance selon l'usage qui en est fait, plutôt que de tout regrouper en haut de la page LEÇON.
- **Nommage prévisible** : un schéma clair et cohérent sur tout le manuel, par exemple `img_seanceNN.png` (ou `img_[matière]_[niveau]_seanceNN.png` si plusieurs manuels partagent le dossier de travail). **Plusieurs images pour une même séance** : suffixer `_a`, `_b`, `_c`… (`img_seance07_a.png`, `img_seance07_b.png`) plutôt que d'inventer un nom différent par image.
- **Mapping séance → image séparé du contenu texte** : tenir une table de correspondance (ex. `image-mapping.json` ou équivalent) plutôt que de coder le nom de fichier en dur dans chaque générateur de séance — facilite le remplacement ultérieur d'une image sans toucher au texte.

---

## Annexe "Table des illustrations"

Une fois des illustrations ajoutées au manuel, généraliser une annexe **Table des illustrations** : liste des images avec liens cliquables (signets internes, même méthode que le sommaire — voir SKILL.md section "Sommaire interactif") vers la séance correspondante.
