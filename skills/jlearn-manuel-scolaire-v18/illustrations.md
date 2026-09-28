# Illustrations — gestion des images dans les manuels

Applicable aux Traitements B et C, chaque fois qu'une séance appelle un support visuel (schéma, carte, photo, image à légender…).

---

## Ce qui n'existe pas

**Il n'existe pas de méthode technique pour télécharger une image depuis un lien et l'insérer automatiquement dans un `.docx`.** Ne pas proposer ni tenter cette piste — elle a été explorée et ne fonctionne pas dans cet environnement. Les trois approches valides sont ci-dessous.

---

## Les 3 approches valides

### 1. Génération externe (quand un outil de génération d'image est disponible)

Un outil de génération d'image n'est pas systématiquement disponible selon les projets — vérifier en début de tâche s'il y en a un à disposition. Si oui, c'est l'approche à privilégier pour les illustrations riches (photos, scènes, personnages). Rédiger un prompt détaillé et contextualisé (sujet, style pédagogique sobre, éléments culturels malgaches si pertinent) plutôt qu'un prompt vague.

### 2. Génération SVG → PNG (fallback gratuit et fiable)

Quand aucun outil de génération d'image n'est disponible, ou pour des schémas simples (diagrammes, cartes stylisées, figures géométriques, frises), générer un SVG par code puis le convertir en PNG avec **`sharp`** (déjà installé globalement — pas besoin de `npm install`).

```js
const sharp = require("sharp");
await sharp("schema.svg")
  .resize({ width: 1100 })   // voir règle de redimensionnement ci-dessous
  .png()
  .toFile("schema.png");
```

Fiable et gratuite, mais limitée aux schémas qu'on peut raisonnablement décrire en formes géométriques — pas adaptée à une illustration réaliste ou une photo.

### 3. Insertion manuelle par l'utilisateur

Quand ni l'un ni l'autre n'est adapté (ou sur demande explicite), laisser un emplacement réservé clairement identifié dans le document (légende + note "image à insérer ici par l'utilisateur") plutôt qu'improviser un visuel de mauvaise qualité.

### 4. Prompt rédigé pour génération externe par l'utilisateur

Quand aucun outil de génération d'image n'est disponible en session, mais que l'utilisateur dispose d'un accès à un générateur externe (Gemini, Grok…) : rédiger un prompt détaillé et contextualisé (sujet, style pédagogique sobre, éléments à représenter précisément, dimensions/cadrage si pertinent) que l'utilisateur pourra copier-coller ailleurs, puis fournir l'image générée pour intégration. Différent de l'approche 1 (aucun appel d'outil n'a lieu en session ici) et de l'approche 3 (un prompt concret est fourni, pas seulement un emplacement réservé).

---

## Redimensionnement obligatoire avant intégration

**Toujours redimensionner une image avant de l'insérer dans le `.docx`.** Des images en pleine résolution (JPG bruts d'appareil photo ou de génération) peuvent faire passer un manuel de 250 Ko à plusieurs Mo pour un gain visuel nul (l'image est de toute façon affichée en petit dans une page A4).

- **Largeur cible : ~1100 px** (largeur d'affichage typique dans une page de manuel, marge comprise) — pas plus, sauf besoin explicite de haute résolution (couverture, affiche).
- Faire ce redimensionnement systématiquement, y compris pour des images fournies par génération externe.

---

## Convention d'emplacement et de nommage

- **Emplacement standard** : en haut de la page LEÇON, juste après le titre de la leçon.
- **Nommage prévisible** : un schéma clair et cohérent sur tout le manuel, par exemple `img_seanceNN.png` (ou `img_[matière]_[niveau]_seanceNN.png` si plusieurs manuels partagent le dossier de travail).
- **Mapping séance → image séparé du contenu texte** : tenir une table de correspondance (ex. `image-mapping.json` ou équivalent) plutôt que de coder le nom de fichier en dur dans chaque générateur de séance — facilite le remplacement ultérieur d'une image sans toucher au texte.

---

## Annexe "Table des illustrations"

Une fois des illustrations ajoutées au manuel, généraliser une annexe **Table des illustrations** : liste des images avec liens cliquables (signets internes, même méthode que le sommaire — voir SKILL.md section "Sommaire interactif") vers la séance correspondante.
