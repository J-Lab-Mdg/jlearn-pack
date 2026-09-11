# Identification — Projet « Amélioration des manuels de Géographie » (démarrage par la 9e)

État des lieux fait le 2026-09-08, à partir du dépôt `J-Lab-Mdg/jlearn-pack` et du Drive J-Learn
(<https://drive.google.com/drive/folders/116tegygSPQs2-lJD3dBfqCAZRh5NBv0b>).

---

## 1. LE SKILL (point prioritaire)

### 1.1 Ce qui est réellement disponible ici

| Source | Fichier | Taille | Version réelle du contenu |
|---|---|---|---|
| Dépôt (racine) | `skill v18.zip` | 57 859 o | **v18** |
| Dépôt (racine) | `jlearn-manuel-scolaire-skill-v18v.zip` | 57 859 o | **v18** — strictement identique (md5 `f56981ca4a92525ac2ff06bf45840598`) → **doublon à supprimer** |
| Drive (racine) | `jlearn-manuel-scolaire-skill-v11.zip` | 42 Ko | v11 (ancien) |
| Drive (racine) | `jlearn-manuel-scolaire-skill-v14.zip` | 47 Ko | v14 (ancien) |
| Drive (racine) | `jlearn-manuel-scolaire-skill-v18v.zip` | 57 Ko | **v18** ← la plus récente présente sur le Drive |

Contenu du zip v18 : dossier `jlearn-manuel-scolaire/`, **12 fichiers `.md`, 2 134 lignes**
(`SKILL.md` 494 l. — « **Version du skill : v18** », ligne 8 — `technical-notes.md` 367, `design-fiche.md` 298,
`vocabulaire-langues.md` 221, `manuel-structure.md` 206, `fiabilite-malgache.md` 148, `mathematiques.md` 97,
`audit-conformite.md` 69, `CHANGELOG.md` 63 — dernière entrée = v18 —, `illustrations.md` 62,
`continuite-multi-session.md` 59, `discipline-malagasy.md` 50).

### 1.2 La v19 existe, mais son zip n'est ni ici ni sur le Drive

Deux documents l'attestent :

- `Analyse-Skill-jlearn-v19.md` (dépôt) : analyse un skill **v19** de 12 fichiers / **2 147 lignes**.
- `Lettre-de-passation-Relais2.md` (dépôt, projet Maths 7e) : « **jlearn-manuel-scolaire-skill-v19.zip** — à réuploader tel quel ».

Le zip v19 n'est **pas** dans ce dépôt et **pas** sur la racine du Drive (liste vérifiée jusqu'au dernier
élément : aucun fichier `skill*` ni `jlearn-manuel-scolaire-skill-v19*`).

**Écart v18 → v19, reconstituable** (2 134 → 2 147 lignes = +13) :

| Fichier | v18 | v19 | Changement |
|---|---|---|---|
| `illustrations.md` | 62 l. | 70 l. | **SVG en priorité** (génération externe réservée au non-géométrique), emplacement élargi (plus seulement en haut de la page LEÇON), nommage `_a`/`_b` si plusieurs images par séance |
| `CHANGELOG.md` | 63 l. | 68 l. | entrée v19 |

Aucun autre fichier n'a bougé.

### 1.3 Écart structurel non corrigé dans le v18 (et toujours signalé en v19)

`SKILL.md` l. 100 : « Structure unique — il n'existe qu'une seule structure valide […] ni de variante "8 étapes à plat" ».
Or, vérifié dans le v18 :

- `vocabulaire-langues.md` l. 63 : « **Les 8 étapes (structure unique)** » + 3 gabarits FR/MG/EN numérotés 1→8 (l. 63-221)
- `discipline-malagasy.md` l. 3 et 17 ; `mathematiques.md` l. 3 et 45 : mêmes reliquats

Sans impact si le manuel 9e reste **en français** (les gabarits de `vocabulaire-langues.md` ne s'imposent
que pour un manuel malgache ou anglais intégral) — mais à corriger avant tout manuel MG/EN.

### 1.4 Recommandation pour la Géographie 9e

- Le v18 suffit pour le fond (règles critiques, structure I/II/III, design, XML).
- Le seul apport utile de la v19 **pour ce manuel** est la règle « SVG d'abord » : la géo 9e est faite de
  **figures géométriques** (rose des vents, plans de classe/école/village/quartier, carte de Madagascar,
  échelle, paysages schématisés) — exactement le cas où le SVG est prioritaire en v19.
- → Soit l'utilisateur réuploade `jlearn-manuel-scolaire-skill-v19.zip`, soit on applique le patch de 3
  points à `illustrations.md` du v18 (je peux le faire, l'analyse le décrit précisément).

---

## 2. LE MANUEL GÉOGRAPHIE 9e

### 2.1 Emplacement exact

```
Drive J-Learn
└── 2- PRIMAIRE
    └── T3/9e/CE
        └── Géographie 9e
            └── Manuel_Geographie_9e_V2-print.pdf      (2,2 Mo — modifié le 17 juil.)
```
ID du fichier : `14O6URo5Pu2HAo0XvPdK1y4ouo91hG_6I`

### 2.2 Nomenclature confirmée

`2- PRIMAIRE` → `T1/11e/CP1`, `T2/10e/CP2`, **T3/9e/CE**, `T4/8e/CM1`, `T5/7e/CM2`.
Donc **9e = T3 = CE (cours élémentaire), enseignement primaire** — « à commencer par 9e » signifie
9e (CE) → 8e (CM1) → 7e (CM2).

### 2.3 Contenu (lu directement dans le PDF)

- **27 séances**, 3 trimestres, « 3 séances de 30 minutes par semaine (soit 1h30 hebdomadaire) », ~120 pages.
- T1 — Le repérage dans l'espace proche (le plan) : séances 1-9
- T2 — La carte de Madagascar, le paysage et les cours d'eau : séances 10-17
- T3 — Le temps, la population et la vie au village : séances 18-27
- Annexes : 1 cartes de Madagascar · 2 lexique géographique · 3 données statistiques · 4 bibliographie
- Par séance : **Fiche de préparation** (tableau 6 colonnes : Étapes et Durée / Enseignant / Apprenants /
  Technique et Stratégie / Support et matériel / Observation) → **Leçon** (élève, encadrés vert « Le savais-tu ? »
  et rouge « Attention ! », lexique) → **Exercices** → **Corrigé**.
- Structure I/II/III déjà correcte : I. Révision 10 min · II. NOUVELLE LEÇON 70 min (2.1 Mise en situation →
  2.6 Application) · III. Évaluation 10 min. **Durée totale affichée : 90 min.**

### 2.4 ⚠️ Points bloquants / défauts déjà repérés

1. **Aucun `.docx`** — le dossier « Géographie 9e » ne contient qu'un PDF. Le skill travaille
   exclusivement en `.docx` (Traitements A/B/C) et interdit de toucher à l'habillage PDF. Il faut donc :
   soit le `.docx` source, soit une conversion PDF→docx (perte probable sur les tableaux à 6 colonnes),
   soit une reconstruction « Traitement C » à partir du PDF + programme officiel.
2. **Incohérence de durée** : avant-propos « 3 séances de 30 min / semaine » vs fiches « Durée : 90 min »
   (séance 1, T1 Sem. 1). À trancher avant d'attaquer la mise à jour.
3. **Méta-commentaire laissé dans le texte** (séance 1, étape 2.5 Synthèse) : « Quand on fait face à l'Est,
   le Nord est à gauche… (l'enseignant corrige si besoin : bras droit vers l'Est, le Nord est devant soi…) »
   → enfreint la règle critique 16 (sur-précision / méta-instructions). Exemple typique de ce que
   « améliorer » doit corriger.
4. **Illustrations** : la géo 9e repose sur des schémas (plans, rose des vents, carte) — aucune image
   intégrée dans le PDF tel que lu ; à traiter selon `illustrations.md` (+ règle SVG v19).

---

## 3. CE QUI EXISTE DÉJÀ EN GÉOGRAPHIE (périmètre « les manuels géographie »)

| Niveau | Emplacement | Fichier | Format |
|---|---|---|---|
| **9e (CE/T3)** | Drive › 2- PRIMAIRE › T3/9e/CE › Géographie 9e | `Manuel_Geographie_9e_V2-print.pdf` (2,2 Mo) | PDF |
| 8e (CM1/T4) | Drive › 2- PRIMAIRE › T4/8e/CM1 › Géographie 8e | `Géographie 8e Fiche de préparation leçon sujet corrigé.pdf` (3,1 Mo) | PDF |
| 7e (CM2/T5) | Drive › 2- PRIMAIRE › T5/7e/CM2 › Géographie 7e | `FICHES_PREPARATION_GEO_7E-print.pdf` (3,9 Mo) | PDF |
| 3e | Dépôt (racine) | `Manuel_Geographie_3e_VF_V1.docx` (631 Ko) | DOCX |
| 1re A/C/D | Dépôt (racine) | `Manuel_Geographie_1ereACD_V1_FINAL.docx` (22,5 Mo) | DOCX |
| — | Drive (racine) | `Manuel_Géographie_CE_Madagascar.docx` (48 Ko, 14 avr.) | DOCX *(brouillon CE — source possible du 9e ?)* |
| — | Drive (racine) | `Guide_Geographie_8e_Complet.docx` (54 Ko, 14 avr.) | DOCX *(modèle de structure 8e)* |
| 7e | Drive (racine) | `Manuel_Geo_7eme.docx` / `.pdf`, `Manuel_Geo7e.docx` | DOCX + PDF |
| 7e | Drive (racine) | `Repartition_Geo_7e_2026-2027.docx` | DOCX |
| CE | Drive (racine) | `J-Learn-Geo-CE-Partie1.html` | HTML |

À noter : les trois niveaux du primaire ne sont livrés qu'en PDF, alors que les niveaux 3e et 1re
(travaillés plus récemment) existent en `.docx` — donc le format `.docx` est bien la cible du projet.

---

## 4. SOURCES OFFICIELLES (programme & répartition)

- Drive › **RÉPARTITION ET PROGRAMME SCOLAIRE** :
  `1- Programme Scolaire et Répartition Primaire.zip` (7,9 Mo) ← **celui qui concerne la 9e** ·
  `2- Programme Scolaire et Répartition Collège.zip` (2,5 Mo) · `4- RAPE.zip` (13,9 Mo) · `FRA et FRM.zip` (3,3 Mo)
- Drive › **RAPS COLLÈGE** (collège uniquement)
- Dépôt : `hg geo raps.docx` (56 Ko), `RAPS-6ème_2024_2025.docx`, `RAPS-5ème_2024_2025.docx`,
  `RAPS-4ème_2024_2025(1).docx`, `Programme-scolaire-6eme.docx`, `ProgrammeScolaire_Seconde.docx`, etc.

---

## 5. DOCUMENTS DE PROCESSUS / MÉTHODE

**Dans le dépôt**

- `prompt.txt` — dernier brief utilisateur (fusion PC 6e, images « style scolaire » plutôt que réalistes,
  interdiction de « ministère de l'éducation nationale », design du PDF « PC 6e Fiche de préparation… »)
- `Lettre-de-passation-Relais2.md` — méthode de relais (projet Maths 7e) : modèle à suivre
- `Analyse-Skill-jlearn-v19.md` — audit du skill, écart n°1 = structure « 8 étapes à plat »

**Sur le Drive (racine)**

- `PASSATION_JLEARN.md`, `PROMPT.md`, `PROMPT_5EME.md`, `PROMPT_GENERATION_MANUEL.md`,
  `PROMPT_Fiches_Preparation_JLab.md`, `Guide_pedagogique_commenté.docx`,
  `Didactique_de_la_Matiere_Madagascar.docx`, `FICHE_DE_PREPARATION_MODELE.docx`,
  `Modele_fiche_preparation_vierge.docx`

---

## 6. QUESTIONS À TRANCHER AVANT DE DÉMARRER (Étape 0 du skill)

1. **Format de travail pour la 9e** : le `.docx` source existe-t-il ? Sinon — conversion PDF→docx,
   ou reconstruction depuis zéro (Traitement C) à partir du PDF + programme officiel ?
2. **Skill** : réupload de `jlearn-manuel-scolaire-skill-v19.zip`, ou patch du v18 avec les 3 règles
   illustrations de la v19 ?
3. **Durée des séances** : 90 min d'un bloc, ou 3 × 30 min (avant-propos) ?
4. **Langue** : français uniquement (→ v18 utilisable tel quel) ou version malgache en plus
   (→ corriger d'abord `vocabulaire-langues.md`) ?
5. **Périmètre** : 9e seulement, ou 9e → 8e → 7e enchaînés ?
6. **Illustrations** : schémas géométriques en SVG (rose des vents, plans, carte de Madagascar) ?
