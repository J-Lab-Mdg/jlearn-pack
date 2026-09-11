# Changelog — skill jlearn-manuel-scolaire

Historique des changements du skill, version par version. Sert surtout à **mettre à jour un manuel `.docx` existant** produit avec une version plus ancienne du skill — voir [`audit-conformite.md`](audit-conformite.md) pour la procédure.

**Départ du suivi : v15.** Les versions antérieures (v1 à v14) ne sont pas détaillées ici — si un manuel semble ancien, faire l'audit complet plutôt que de chercher une version précise dans cet historique.

---

## v19

- `illustrations.md` : **SVG en priorité** — la génération SVG → PNG devient l'approche n°1 pour tout schéma géométrique (diagrammes, cartes stylisées, figures, frises, plans, roses des vents, schémas annotés) ; la génération externe passe en approche n°2 et se limite aux illustrations non géométriques (photos, scènes, personnages), les modèles d'image restituant mal les chiffres et les libellés précis.
- `illustrations.md` : **emplacement élargi** — l'image ne va plus systématiquement en haut de la page LEÇON, mais à l'endroit de la séance où elle sert (observation, leçon, exercices…).
- `illustrations.md` : **nommage multiple** — convention `_a`, `_b`, `_c`… quand une même séance comporte plusieurs images.

## v18

- `continuite-multi-session.md` : correction du point 5 — le lexique validé pendant un relais est livré via une mise à jour réelle de `vocabulaire-langues.md`/`fiabilite-malgache.md` (pas seulement une note dans la lettre).

## v16-v17

- Nouveau fichier `continuite-multi-session.md` : découpage du travail par bloc de thèmes complets (nombre variable, pas fixe) pour le travail réparti sur plusieurs comptes/sessions, gabarit de lettre de passation, gestion du lexique entre relais (noté dans la lettre par défaut, pas de fichier vocabulaire mis à jour systématique).
- Nouveaux fichiers `CHANGELOG.md` et `audit-conformite.md` (procédure et checklist pour mettre à jour un manuel `.docx` existant selon une version plus récente du skill).
- Numéro de version affiché en tête de `SKILL.md`.

## v15 (baseline du suivi)

- Ajout `discipline-malagasy.md` : spécificités pour la matière Malagasy (langue enseignée comme discipline) — structure de leçon de règle (explication/exemples/contre-exemple/exceptions), minimums par notion (5 exemples/3 erreurs/3 exercices/1 dialogue/1 note culturelle), variété de référence (malagasy ofisialy), sous-disciplines à confirmer (jamais deviner).
- `design-fiche.md` : matériel didactique manipulable (option, pas défaut) et grande ardoise pour travail de groupe étendue aux étapes Analyse **et** Application.
- `mathematiques.md` : renvois vers ces deux options.

## v14

- Grande ardoise (travail de groupe) documentée pour l'étape Analyse.

## v13

- `design-fiche.md` : matériel didactique manipulable comme option pour Observation/Analyse au primaire (toutes matières pertinentes, pas seulement maths).

## v12

- Nouveau fichier `mathematiques.md` : langue selon le niveau (français partout y compris 11e/10e, sauf encadré VOAMBOLANA en malgache sourcé uniquement des documents uploadés), notation mathématique via équations natives Word (classe `Math` de la librairie `docx`), vérification numérique automatique des corrigés, distracteurs maths (erreur de calcul/méthode plausible), séparateur décimal (virgule), illustrations maths (SVG par défaut).
- `illustrations.md` : mode 4 ajouté (prompt rédigé pour génération externe par l'utilisateur).
- `fiabilite-malgache.md` : section 6, processus de rédaction en deux temps (brouillon texte brut avant mise en forme) — réservé au malgache, toujours optionnel.
- Correction d'un bug de sur-précision répété dans plusieurs fichiers ("les élèves notent le titre", "il ne leur demande pas de la recopier") — règle 16 ajoutée aux règles critiques de `SKILL.md`, valable pour les 3 langues.

## v11

- `fiabilite-malgache.md` enrichi : Académie malgache (akademia-malagasy.mg) en tête de la liste des sources avec priorité maximale, hiérarchie des sources en cas de contradiction, outil DotMG, distinction isika/izahay, mise en garde voix verbale/ordre des mots (ne jamais traduire mot à mot), catégorisation des erreurs (tsipelina/grammaire/vocabulaire/registre/traduction), principe "ne pas changer une traduction validée sans justification" et "enregistrer les variantes plutôt que les supprimer".

## v9

- Nouveau fichier `fiabilite-malgache.md` : sources fiables de vérification, vérification web systématique obligatoire, mémo de grammaire courante (préfixe futur h-, connecteurs logiques, mots interrogatifs), tableau des pièges/faux-amis, processus de lexique qui grossit à chaque manuel.

## v8

- `vocabulaire-bilingue.md` renommé `vocabulaire-langues.md`, restructuré en 3 colonnes FR/MG/EN.
- Nouvelle section "Spécificités par langue" (alphabet malgache sans C/Q/U/W/X vs alphabet anglais complet, R.A./V.A./E.A.).
- 3 gabarits complets et symétriques (malgache, français, anglais) pour le tableau de déroulement.
- Nouvelle section "Version anglaise" dans `SKILL.md`, miroir de "Version malgache".

## Avant v8

Fusion initiale des versions v2/v3/v5/.skill fournies par l'utilisateur : nouveau fichier `illustrations.md` (3 approches, redimensionnement obligatoire ~1100px), règle de durée de séance non supposée (question explicite en Étape 0), procédure de fusion de programmes officiels concurrents (RAPS/RAPE), vérifications supplémentaires (doubles espaces, cohérence post-renommage), réutilisation de contenu vérifié pour les annexes, piège de capitalisation sur texte réutilisé, règle critique sur la relecture externe (vérifier avant d'appliquer), fallback `npm link` si `npm install` échoue, règle critique sur le droit d'auteur/plagiat des noms et situations fictifs du manuel source, structure alternative de regroupement par thème (section 6b de `manuel-structure.md`).

---

## Comment ajouter une entrée

À chaque changement validé par l'utilisateur : ajouter une entrée en haut de ce fichier (nouvelle version), lister les fichiers touchés et un résumé court de ce qui a changé — pas le détail complet, juste assez pour qu'un audit sache quoi chercher dans le manuel existant.
