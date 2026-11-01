# Audit de conformité — mettre à jour un manuel existant

À suivre chaque fois qu'on reçoit un `.docx` de manuel **déjà produit** à améliorer, corriger, ou mettre à jour selon la version actuelle du skill — plutôt qu'une lecture passive du document qui ne détecte que ce qui saute aux yeux.

---

## Pourquoi cette procédure existe

Avec plusieurs fichiers de référence dans ce skill, une lecture rapide de `SKILL.md` seul ne suffit pas à repérer tous les écarts entre un ancien manuel et la version actuelle des règles. Cette procédure force un passage systématique, fichier par fichier et règle par règle, plutôt que de compter sur ce qui semble incorrect à l'œil.

---

## Procédure en 4 temps

### 1. Lire tous les fichiers du skill en entier, avant de toucher au docx

Ne pas se contenter de `SKILL.md`. Lire aussi : `manuel-structure.md`, `design-fiche.md`, `technical-notes.md`, `illustrations.md`, `vocabulaire-langues.md`, `fiabilite-malgache.md`, `mathematiques.md` (si matière concernée), `discipline-malagasy.md` (si matière concernée), et [`CHANGELOG.md`](CHANGELOG.md) pour un aperçu rapide des changements récents.

### 2. Extraire le texte du docx existant

Utiliser pandoc (comme pour tout fichier `.docx` fourni, voir `technical-notes.md`) plutôt que de se fier à un survol visuel — le texte complet est nécessaire pour comparer contre chaque règle.

### 3. Parcourir la checklist ci-dessous point par point, lister les écarts avant de corriger

Ne pas corriger au fil de la lecture — d'abord établir la liste complète des écarts trouvés, ensuite proposer les corrections à l'utilisateur (règle critique 14 : ne jamais appliquer une correction en bloc sans vérification).

### 4. Présenter les écarts trouvés à l'utilisateur avant d'agir

Même schéma que pour toute modification du skill lui-même dans ce projet : proposer, discuter, puis seulement appliquer sur confirmation — sauf instruction contraire explicite de l'utilisateur pour ce cas précis.

---

## Checklist — points à vérifier systématiquement

**Structure et rédaction**
- [ ] Sommaire : liens hypertexte internes vers signets, jamais un champ TOC natif
- [ ] Sur-précision : aucune mention de ce que l'élève ne fait pas ("n'écrivent rien à ce stade"), aucune action implicite ajoutée ("et notent le titre")
- [ ] Étape Fandinihana/Observation : élèves observent seulement, aucune réponse à ce stade
- [ ] Étape Fandravonana/Synthèse : c'est l'enseignant qui énonce, jamais les élèves ; commence par "Donc," (ou équivalent MG/EN)
- [ ] Volume minimum par exercice : au moins 4 items (sauf exception négociée explicitement avec l'utilisateur)
- [ ] Distracteurs : jamais dans le contenu de cours lui-même, uniquement dans les exercices ; erreur de calcul plausible en maths, faute grammaticale plausible en discipline Malagasy

**Vérifications techniques**
- [ ] sectPr = 1, pas de namespace ns0, pas de "Oral" résiduel, colonnes gridCol = 6
- [ ] Doubles espaces résiduels
- [ ] Cohérence après tout renommage/reformatage global déjà appliqué

**Langues**
- [ ] Terminologie malgache : V.A. jamais R.A., alphabet sans C/Q/U/W/X pour le lettrage
- [ ] Terminologie anglaise : E.A., alphabet complet
- [ ] Tout terme malgache ou anglais utilisé est bien dans `vocabulaire-langues.md` — sinon, vérification faite ou à faire (voir `fiabilite-malgache.md`)

**Mathématiques (si applicable)**
- [ ] Notation par équations natives Word (`Math`/`MathFraction`…), pas de texte brut "3/4"
- [ ] Séparateur décimal = virgule
- [ ] Corrigés numériques vérifiés par calcul
- [ ] VOAMBOLANA (11e/10e uniquement) sourcé des documents uploadés, pas inventé

**Discipline Malagasy (si applicable)**
- [ ] Sous-discipline confirmée par l'utilisateur, pas supposée
- [ ] Variété de référence (malagasy ofisialy) respectée, variantes régionales signalées explicitement si présentes

**Illustrations**
- [ ] Images redimensionnées (~1100px de large), pas de JPG pleine résolution
- [ ] Emplacement standard, nommage prévisible, mapping séance→image séparé du texte

**Droits et fiabilité**
- [ ] Aucun nom/situation fictif du manuel source réutilisé sans remplacement validé
- [ ] Aucune information de cours non sourcée quand elle dépasse le contenu du manuel source
