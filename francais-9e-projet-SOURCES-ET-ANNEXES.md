# Français 9ème (T3 / CE) — sources, plan et cahier des charges des annexes

Établi le 2026-09-08. Tout ce qui suit provient d'une lecture effective des sources.

---

## 1. Correction — le PDF de référence EXISTE

J'avais écrit « aucun `Manuel_Francais_9eme` » : **c'était faux.** Je n'avais regardé que la
racine du dossier Drive. La bonne arborescence est :

```
J-Learn (116tegygSPQs2-lJD3dBfqCAZRh5NBv0b)
└── 2- PRIMAIRE (1CplbGbO8_PVZuh6-Of4S6f8W79VFmo-8)
    └── T3/9e/CE (1O6AIIpIaUvpHGMm4ZnH5IgKZThG3sEeY)
        └── Français 9e (1-bf_THg_x50_B1rWWzUuZYR3sM5avv31)
            └── Francais_9eme_ Fiche de préparation leçon sujet corrigé_JLearn_V1_COMPLET.pdf
                (1ZDS_gEct5bFWf4K83NBpxjnAnkpFJnQ0)
```

Les liens des sous-dossiers ne sont récupérables que via
`https://drive.google.com/embeddedfolderview?id=<ID>#list` — la vue `/drive/folders/`
normale les supprime du rendu.

## 2. Notation résolue : T = niveau, pas trimestre

Noms exacts des sous-dossiers de `2- PRIMAIRE` :

| Dossier | Niveau |
|---|---|
| `T1/11e/CP1` | 11ème |
| `T2/10e/CP2` | 10ème |
| **`T3/9e/CE`** | **9ème** |
| `T4/8e/CM1` | 8ème |
| `T5/7e/CM2` | 7ème |

Donc « série 9ème (CE, T3) » dans `LETTRE-PASSATION-BLOC3.md` désigne **le niveau**, et le
chantier porte sur **l'année entière**, pas sur le seul trimestre 3.
⚠️ Ne pas confondre avec le « T1/T2/T3 » des lettres de passation 10e, qui lui désignait
bien le trimestre (« FRA : T2 semaines 2-4 »).

## 3. Le PDF de référence — ce qu'il contient

Lu via l'outil de fetch. En-tête et avant-propos :

- **186 séances**, 8 thèmes, 3 trimestres
- **12 séances/semaine × 30 minutes**
- **7 sous-disciplines** : Expression Orale, Vocabulaire, Lecture, Grammaire,
  Conjugaison, Orthographe, Expression Écrite
- Chaque séance : fiche de préparation + leçon + exercices **/20** + corrigé détaillé
- Annexes annoncées : conjugaison, lexique, grilles d'auto-évaluation, index des notions
- Édition 2026-2027, J-Lab, « Conforme au programme officiel — Madagascar »

**Recoupement avec le programme officiel** : mon parseur de `FRA FRANCAIS 9ème.docx`
trouvait **185** séances et **8** thèmes — les 8 mêmes (maison, école, village, travaux des
champs, maladies, métiers, temps et saisons, voyage). L'écart d'une séance correspond à la
ligne « REVISION GENERALE » du programme, que le PDF compte.

**Portée réelle de la lecture** : l'outil ne parse que les ~30 premières pages. J'ai donc
l'avant-propos, le mode d'emploi, la table des matières (séances 1 à ~69) et le détail des
séances 1 à 14. **Au-delà : inaccessible.** Même limite que pour le 10e
(« chunks 0-3 lus : fiches 1-4 reprises fidèlement ; illisible/vide au-delà »).

→ Pour une fidélité page à page sur les 186 séances, il faut déposer le PDF dans le dépôt.

### Plan relevé dans la table des matières (extrait vérifié)

| Thème | Séances | Conjugaison au programme |
|---|---|---|
| 1 — La maison | 1-22 | AVOIR présent, AVOIR passé composé |
| 2 — L'école | 23-49 | ÊTRE présent (+renforcement), ÊTRE passé composé |
| 3 — Le village | 50-62 | ÊTRE futur simple, AVOIR futur simple |
| 4 — Les travaux des champs | 63-83 | 1er groupe au présent |
| 5-8 | 84-186 | *non relevé — hors portée de lecture* |

Le programme officiel complète : 1er groupe au futur simple et au passé composé,
3e groupe au présent / passé composé / futur, verbes pronominaux du 1er groupe au présent
et au passé composé.

---

## 4. Cahier des charges des annexes (demande utilisateur du 2026-09-08)

> « annexes de conjugaison détaillée (quand utiliser, comment et pourquoi etc)
>  annexe de résumé : grammaire orthographe vocabulaire chaque thème »

### 4.1 Écart avec l'existant

`francais-10e-projet/src/annexes.js` produit aujourd'hui, par thème, 3 blocs :

```
A. Conjugaison — <un seul verbe> au présent
B. Grammaire et orthographe
C. Vocabulaire du thème
```

Un seul verbe, un seul temps, aucune explication d'emploi. **Insuffisant** au regard de la
demande.

### 4.2 Nouvelle structure par thème — 4 blocs

**A. CONJUGAISON DÉTAILLÉE** — pour *chaque* verbe et *chaque* temps du thème, 4 rubriques :

| Rubrique | Contenu | Répond à |
|---|---|---|
| **Quand l'utiliser** | Situations de communication concrètes, ancrées dans le thème + 2 phrases d'exemple tirées du thème | *quand* |
| **Comment le former** | Radical + terminaisons, tableau des 6 personnes, transformation pas à pas sur un verbe du thème | *comment* |
| **Pourquoi** | La règle et sa raison (accord avec le sujet, auxiliaire et participe, marqueur de temps) | *pourquoi* |
| **Pièges** | 2 à 3 erreurs fréquentes avec la forme fautive barrée et la forme juste | prévention |

**B. RÉSUMÉ GRAMMAIRE** — chaque notion du thème : règle + exemple juste + contre-exemple.
**C. RÉSUMÉ ORTHOGRAPHE** — chaque notion : règle d'accord/écriture + exemples + pièges.
**D. RÉSUMÉ VOCABULAIRE** — le lexique du thème organisé par champs, avec genre et pluriel.

### 4.3 Contraintes du skill à respecter

- `manuel-structure.md` § 8 : *« Construire à partir du contenu déjà rédigé et vérifié, pas
  du neuf. »* → les exemples des annexes doivent être **repris des séances**, pas inventés.
- Couleurs : titres rouge `C00000`, sous-titres verts `1E7B34`, mots-clés bleu gras `1F4E79`,
  corrigé rose saumon `E9704F`.
- Une ligne de sommaire par annexe (ancre `themeNannexe`), comme dans le 10e.
- Jamais le mot « ministère », 0 date, Times New Roman seule, guillemets « ».
- Après génération : `verify_docx.py` doit rendre TOUT CONFORME.

---

## 5. État des ressources

| Ressource | État |
|---|---|
| Programme officiel `FRA FRANCAIS 9ème.docx` | ✅ dans `FRA et FRM.zip`, lu intégralement |
| Version malgache `FRM FRANCAIS 9ème.docx` | ✅ présente |
| PDF de référence 9e | ⚠️ lisible sur ~30 pages seulement |
| Skill v18 | ✅ déployé dans `.skill-v18/` |
| Codebase modèle 10e/11e | ✅ restaurée, compile, `verify_docx.py` TOUT CONFORME |
| Chaîne Node + docx + Pillow + python-docx | ✅ installée et testée |
| Skill v19 | ❌ absent (le 10e et le 11e ont été faits en v18) |

---

## 6. ⚠️ RAPE T3 officiel trouvé — et il DIVERGE des autres sources

`hay.education.mg` est **inaccessible depuis le sandbox** (`SSL_ERROR_SYSCALL`) mais
**lisible via l'outil de fetch**.

Catalogue : `CYCLE PRIMAIRE > T3` → 2 documents, dont :

- **RAPE T3** — « REPARTITION ANNUELLE DES PROGRAMMES D'ÉTUDES DE LA CLASSE DE T3,
  ANNÉE SCOLAIRE 2025-2026 », 24 pages, PDF, ministère de l'Éducation nationale.
  Lecture : `https://hay.education.mg/opac_css/doc_num.php?explnum_id=37` (5 morceaux).
- Sous-catégorie **FRANCAIS** sous T3 : `index.php?lvl=categ_see&id=76&main=1`

### Ce que dit le RAPE (lu, morceau 0)

- **Français : 12 séances × 30 min = 6 h/semaine** → confirme le PDF du Drive.
- **5 périodes** au calendrier scolaire (pas 3 trimestres).
  Première période : **08/09/2025 au 24/10/2025**.
- Période 1, Français : **« LES ALIMENTS »** — procédés et techniques (la description),
  sémantico-lexical (aliments, plats malgaches, goûts, ustensiles, repas de la journée),
  « Les 500 mots les plus fréquents en Français (voir la liste, Annexe B) ».
- Le RAPE précise qu'il « ne comporte pas tous les détails des contenus » et doit être
  utilisé **parallèlement** au Programme d'Études.

### La divergence

| Source | Période/Thème 1 du Français T3 |
|---|---|
| **RAPE T3 2025-2026** (ministère, hay.education.mg) | **LES ALIMENTS** |
| `FRA FRANCAIS 9ème.docx` (`FRA et FRM.zip`) | La maison |
| PDF `Francais_9eme_…V1_COMPLET.pdf` (Drive) | La maison |

Les deux dernières se recoupent entre elles mais **pas avec le RAPE 2025-2026**.
Le `FRA FRANCAIS 9ème.docx` et le manuel du Drive reposent donc sur un programme
antérieur (ou différent) de la répartition annuelle en vigueur.

### Doctrine du skill applicable — SKILL.md, « Fusion de deux programmes officiels concurrents »

> « Cas rencontré : deux documents de programme officiel différents (ex. RAPS et RAPE)
> couvrant la même classe/matière, avec des contenus qui ne se recoupent pas entièrement. »

1. **Tout garder** — ne pas trancher en faveur d'un seul programme.
2. **Taguer ce qui vient d'une seule source** (note de bas de page ou parenthèse).
3. **Expliquer en avant-propos** que deux programmes officiels ont été utilisés, et pourquoi.

C'est la procédure à appliquer ici, sauf décision contraire explicite de l'utilisateur.

### Portée de lecture du RAPE

24 pages annoncées, 5 morceaux restitués par l'outil → le document est **dans la limite
des ~30 pages**, donc lisible en entier. Seul le morceau 0 a été lu à ce stade ; les
périodes 2 à 5 restent à extraire (colonne Français du tableau).
