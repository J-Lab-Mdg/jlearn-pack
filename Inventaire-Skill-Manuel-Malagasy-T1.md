# Inventaire du skill pour le manuel MALAGASY T1

Date de l'inventaire : 30 septembre 2026 — mise à jour : 1er octobre 2026  
Dépôt : `J-Lab-Mdg/jlearn-pack`

## 1. Skill trouvé

Le dépôt contient deux archives du skill :

- `jlearn-manuel-scolaire-skill-v18v.zip`
- `skill v18.zip`

Ces deux archives sont **strictement identiques** :

- SHA-256 : `fba06cc02f5a8800f0e2ef24489c5d2b55ce58095131e9048196bc4710d11ef6`
- version déclarée dans `SKILL.md` : **v18**
- dernier historique déclaré dans `CHANGELOG.md` : **v18**

Le fichier `Analyse-Skill-jlearn-v19.md` est une analyse externe du skill. Malgré son titre « v19 », il ne constitue pas une nouvelle archive du skill et le contenu actuellement disponible s'identifie lui-même comme **v18**.

## 2. Tous les documents internes du skill

L'archive contient **12 documents Markdown**.

| N° | Document | Lignes | Fonction | Utilité pour MALAGASY T1 |
|---:|---|---:|---|---|
| 1 | `SKILL.md` | 494 | Règles maîtresses, collecte initiale, structure des séances, traitements A/B/C, version malgache et contrôles finaux | **Obligatoire** |
| 2 | `discipline-malagasy.md` | 50 | Règles propres à la matière Malagasy : zana-taranja, leçons de langue, exemples, erreurs, dialogues, variété standard et distracteurs | **Obligatoire** |
| 3 | `fiabilite-malgache.md` | 148 | Sources linguistiques, vérification systématique, grammaire, pièges et lexique validé | **Obligatoire** |
| 4 | `vocabulaire-langues.md` | 222 | Terminologie officielle FR/MG/EN et gabarits de la fiche en malgache | **Obligatoire, mais contradiction à corriger** |
| 5 | `manuel-structure.md` | 206 | Couverture, avant-propos, sommaire, tableau de bord, séances, leçons, exercices, corrigés et annexes | **Obligatoire** |
| 6 | `design-fiche.md` | 298 | Spécifications du tableau à 6 colonnes, couleurs, contenus des cellules et mise en page | **Obligatoire** |
| 7 | `technical-notes.md` | 367 | Fabrication DOCX par XML ou Node.js/`docx`, sommaire interactif et contrôles techniques | **Obligatoire pour la génération** |
| 8 | `illustrations.md` | 62 | Production, redimensionnement, insertion, nommage et table des illustrations | Selon le choix d'illustrations |
| 9 | `audit-conformite.md` | 69 | Audit préalable d'un manuel DOCX existant avant modification | Obligatoire seulement en traitement A/B |
| 10 | `continuite-multi-session.md` | 59 | Découpage en blocs et lettre de passation pour un travail en plusieurs sessions | Selon l'ampleur du manuel |
| 11 | `CHANGELOG.md` | 63 | Historique des versions du skill | Référence de gouvernance |
| 12 | `mathematiques.md` | 97 | Règles particulières aux mathématiques | **Hors périmètre** pour la matière Malagasy |

Ordre de lecture recommandé pour ce projet :

1. `SKILL.md`
2. `discipline-malagasy.md`
3. `fiabilite-malgache.md`
4. `vocabulaire-langues.md`
5. `manuel-structure.md`
6. `design-fiche.md`
7. `technical-notes.md`
8. `illustrations.md`
9. `audit-conformite.md` si un DOCX source doit être enrichi
10. `continuite-multi-session.md` si le travail doit être réparti

## 3. Règles déterminantes pour MALAGASY T1

### Langue et terminologie

- Le manuel de la matière **Malagasy** doit être presque entièrement rédigé en malgache standard (`malagasy ofisialy`).
- Le titre de la fiche est `TAKELA-PANOMANAN-DESONA`.
- La réponse attendue est notée `V.A.` et non `R.A.`.
- Les lettres `c`, `q`, `u`, `w` et `x` ne doivent pas servir au lettrage des choix en malgache.
- Tout terme ou contenu malgache non déjà validé doit être vérifié auprès d'une source publique fiable et cité dans `Fanovozan-kevitra` ou `Loharanom-Baovao`.
- La sous-discipline (`zana-taranja`) doit venir du programme officiel ; elle ne doit jamais être devinée.

### Structure d'une séance

La règle maîtresse de `SKILL.md` impose une structure hiérarchique unique :

1. **I. Famerenana** — durée affichée ;
2. **II. Lesona vaovao** — une durée globale, puis six sous-étapes sans durée individuelle :
   1. Fitarihan-tsaina ;
   2. Fanolorana ;
   3. Fandinihana ;
   4. Famakafakana ;
   5. Fandravonana ;
   6. Fampiharana ;
3. **III. Tombana** — durée affichée.

Le tableau de déroulement comporte six colonnes. Les activités doivent être entièrement rédigées et directement utilisables en classe, jamais décrites par des méta-instructions.

### Contenu propre à la discipline Malagasy

Pour chaque notion de langue, le repère recommandé est :

- 5 exemples corrects ;
- 3 erreurs fréquentes expliquées et corrigées ;
- 3 exercices ;
- 1 dialogue court en contexte ;
- 1 note culturelle ou régionale lorsque cela est pertinent.

Les mauvaises réponses doivent être des erreurs grammaticales ou orthographiques plausibles liées à la notion enseignée.

## 4. Contradictions et risques repérés

### 4.1 Structure I/II/III contre ancienne structure à 8 étapes

`SKILL.md` déclare qu'il n'existe qu'une seule structure valide : **I/II/III**, avec six sous-étapes dans le bloc II.

Mais `vocabulaire-langues.md` conserve encore :

- le titre « Les 8 étapes (structure unique) » ;
- une numérotation plate de 1 à 8 ;
- des gabarits complets bâtis sur cette ancienne numérotation.

`discipline-malagasy.md` mentionne aussi encore « 8 étapes ».

Pour le manuel MALAGASY T1, la décision de conformité à appliquer est :

- conserver le vocabulaire malgache validé des gabarits ;
- **remapper ce vocabulaire vers la hiérarchie I/II/III de `SKILL.md`** ;
- ne pas reproduire la numérotation plate 1 à 8.

Idéalement, les deux fichiers annexes devraient être mis à jour avant la génération définitive du manuel.

### 4.2 Version du skill

Le dépôt ne contient pas d'archive v19 identifiable. La référence exploitable est **v18**, même si `Analyse-Skill-jlearn-v19.md` emploie « v19 » dans son titre.

### 4.3 Chemin technique historique

Le skill mentionne `/home/runner/workspace/`, mais ce projet est exécuté dans `/home/user/jlearn-pack`. Tous les fichiers de travail persistants devront donc rester dans le dépôt courant, sans utiliser `/tmp`.

## 5. Sources pédagogiques trouvées après fouille

La fouille complémentaire du dépôt et des documents téléversés dans Google Drive a permis de retrouver la source principale qui manquait :

- **`PE RAPE/PE T1.pdf`** — programme officiel `FANDAHARAM-PIBEAZANA T1`, 114 pages, 1 858 459 octets ;
- source GitHub indiquée par l'utilisateur : `https://github.com/J-Lab-Mdg/jlearn-pack/blob/main/PE%20RAPE/PE%20T1.pdf` ;
- section **MALAGASY** : pages 8 à 17 du PDF ;
- `google_drive/PE_T1.pdf` reste une copie de travail antérieure, mais la version du dossier `PE RAPE` est désormais prioritaire ;
- le classement Drive `T1/11e/CP1` et les manuels existants confirment l'équivalence **T1 = 11e = CP1**.

Autres références repérées :

- `google_drive/PE_T2.pdf` et `PE_T3.pdf`, utiles uniquement pour contrôler la progression entre niveaux et éviter d'introduire trop tôt des notions de T2/T3 ;
- `FRP_3eme_MLG.pdf`, ressource d'un autre niveau ;
- dans `FRA et FRM.zip`, anciennes répartitions Malagasy pour les classes 7e à 11e ;
- plusieurs documents `FFMOM_11e_*.docx`, utiles comme références de formulation et de séance de 20 minutes, mais **pas comme programme officiel de la matière Malagasy** ;
- `Math 11e_11e_T1_V1 J-learn Fiche de préparation leçon sujet corrigé.docx`, exemple J-Learn du même niveau, mais d'une autre matière ;
- aucun manuel existant spécifiquement nommé **Manuel Malagasy T1/11e/CP1** n'a été trouvé ;
- la **RAPE T1 officielle, édition septembre 2026**, a finalement été fournie par l'utilisateur ; copie locale : `PE RAPE/RAPE_T1 (1).pdf`, URL ministérielle : `https://plateforme.education.mg/bibliotheque-numerique/theme/biblio/pix/pdf/RAPE_T1.pdf` ;
- cette RAPE répartit l'année en cinq périodes de 7, 7, 7, 6 et 6 semaines, soit les 33 semaines correspondant aux 33 thèmes du `PE_T1.pdf`.

L'analyse détaillée des sources officielles figure dans `Analyse-Programme-Officiel-Malagasy-T1.md`.

## 6. Informations encore nécessaires avant toute rédaction

Les points suivants sont désormais établis :

- **T1 désigne le niveau scolaire T1**, équivalent à 11e/CP1 ;
- la source officielle principale est `PE_T1.pdf` ;
- la matière Malagasy prévoit des séances de **20 minutes** ;
- quatre zana-taranja et 33 lohahevitra sont définis par le programme.

Les choix suivants ont été validés le 1er octobre 2026 :

- création de zéro selon une **architecture hybride** : manuel élève en 33 unités thématiques et guide enseignant condensant les 27 micro-séances hebdomadaires ;
- utilisation conjointe du `PE_T1.pdf` et de la RAPE T1 officielle, édition septembre 2026 ;
- adaptation compacte aux séances de 20 minutes : micro-activités orales ou manipulées à chaque seho, entraînement et évaluation complets regroupés au niveau de l'unité hebdomadaire ;
- manuel entièrement en malgache ;
- manuel illustré avec annexes riches.

Conformément à l'étape 0 du skill, aucun contenu des leçons ne doit être rédigé avant validation des derniers points ouverts :

1. couleur du corrigé (`#C2185B` par défaut) ;
2. numéro de version du livrable (`1.0` proposé) ;
3. validation de la répartition annuelle détaillée construite à partir du PE et de la RAPE ;
4. feu vert explicite pour commencer la rédaction des leçons.

## 7. Statut

- Inventaire du skill : **terminé**.
- Documents internes identifiés : **12/12**.
- Doublon d'archive : **confirmé**.
- Règles spécifiques Malagasy : **identifiées**.
- Contradiction structurelle : **identifiée**.
- Rédaction du manuel : **non commencée**, en attente des informations de cadrage et du feu vert explicite.
