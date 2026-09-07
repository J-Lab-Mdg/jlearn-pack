# Inventaire des intrants — Manuel Mathématiques 6e

État au terme de l'exploration du Drive partagé
`https://drive.google.com/drive/folders/1CLzR1GsxyG9eZBBfKjj24duzhNVVRhOV`

Décision actée : le **RAPE T6 2025-2026** (curriculum andrana) est écarté.
Cible retenue : la **6e classique du collège**.

---

## 1. Ce que contient le Drive

```
LEÇONS, RAPS ET PS
├── LEÇONS TOUTES MATIÈRES
│   ├── SVT/                                    (sous-dossier)
│   ├── math-6-eme.pdf              ★ COURS COMPLET DE MATHS 6e
│   ├── Francais-6eme-2.pdf
│   ├── Anglais session Corrigés 2009-2019 (58 p.)   ×2 doublons
│   ├── Dictionnaire Malagasy.pdf
│   ├── Ny fambolena legioma.pdf
│   ├── TOROHEVITRA-10-FANALANA-FANADINANA.pdf
│   └── 3 guides administratifs DGEAE / DSP (hors sujet)
└── REPARTITION et PROGRAMME (RAPS, PS ...)
    ├── 1- Programme Scolaire et Répartition Primaire
    ├── 2- Programme Scolaire et Répartition Collège
    │   └── RAPS
    │       ├── 2020 - 2021        → déjà en dépôt (7-6.-VF_RAPS_-6ème.docx)
    │       └── 2024-2025          → déjà en dépôt (RAPS-6ème_2024_2025.docx)
    ├── 3- Programme Scolaire et Répartition Lycée
    └── FRA et FRM
```

Le dossier est **public et lisible**, y compris le contenu des PDF.

Constat : les deux dossiers RAPS Collège correspondent aux fichiers déjà
présents dans le dépôt. Le Drive n'ajoute donc rien côté répartition — **mais il
apporte la pièce qui manquait côté contenu.**

---

## 2. La pièce manquante : `math-6-eme.pdf`

Un **cours de sixième complet et rédigé**, en 17 chapitres, avec définitions,
propriétés, exemples chiffrés, tableaux de conversion, exercices et corrigés.

| # | Chapitre | # | Chapitre |
|---|---|---|---|
| 1 | Les nombres entiers et les décimaux | 10 | Fractions |
| 2 | Additions, soustractions | 11 | Proportionnalité et pourcentages |
| 3 | Multiplication | 12 | Aires |
| 4 | Division euclidienne | 13 | Angles |
| 5 | Division décimale | 14 | Pavé droit |
| 6 | Parallèles et perpendiculaires. Constructions | 15 | Volume d'un pavé |
| 7 | Mesurer des longueurs | 16 | Organisation de données |
| 8 | Cercles, triangles, quadrilatères | 17 | Masses. Durées |
| 9 | La symétrie axiale | | |

Échantillon du niveau de détail effectivement disponible :

- **Ch. 1** — tableau de position des chiffres (milliards → millièmes), écritures
  décimales multiples, décomposition, comparaison et rangement, encadrement,
  multiplication et division par 10/100/1000, droite graduée et abscisse.
- **Ch. 2** — vocabulaire (termes, somme), commutativité, regroupement,
  **ordre de grandeur**, différence, plus un exercice contextualisé corrigé
  (populations France / Espagne / Allemagne).
- **Ch. 4** — division euclidienne posée (423 = 18 × 23 + 9), relation
  dividende/diviseur/quotient/reste, **critères de divisibilité par 2, 3, 5, 9**
  avec exemples, quadruple formulation multiple/diviseur/divisible/divise.
- **Ch. 5** — quotient exact, écriture fractionnaire, **troncature vs arrondi**
  en tableau (unité, dixième, centième), division posée d'un décimal par un
  entier, division de deux décimaux par amplification.
- **Ch. 6** — notations (AB), [AB], [AB), AB, ∈ ; points alignés, droites
  sécantes, parallèles, perpendiculaires ; les deux propriétés de transitivité ;
  **constructions règle-équerre et règle-compas** décrites étape par étape.
- **Ch. 7** — segments, codage de figure, report au compas, tableau des unités,
  périmètres (rectangle, carré, cercle), série de conversions à trous.
- **Ch. 8** — triangles particuliers (rectangle, isocèle…), cercles,
  quadrilatères.

Deux réserves sur la source :

1. **Contexte français**, pas malgache : l'exercice type parle de la France, de
   l'Espagne et de l'Allemagne. À réancrer sur Madagascar (marché, riziculture,
   transport, taxi-brousse), conformément à la skill.
2. **Extraction imparfaite du PDF** : figures géométriques perdues, quelques
   coquilles OCR (« 52,72 » pour « 53,72 », LaTeX corrompu par endroits). Le
   texte sert de trame de contenu, pas de source à recopier — les schémas seront
   régénérés.

---

## 3. Tableau de couverture

| Intrant | État |
|---|---|
| Skill J-Learn v18 (13 fichiers) | ✔ en dépôt |
| Programme officiel 6e (maths p. 111-146) | ✔ en dépôt |
| RAPS 6e 2024-2025 (5 périodes) | ✔ en dépôt = Drive |
| RAPS 6e 2020-2021 (objectifs par séance) | ✔ en dépôt = Drive |
| **Contenu disciplinaire rédigé, 17 chapitres** | ✔ **Drive, `math-6-eme.pdf`** |
| Manuels 7e et 8e comme gabarits | ✔ en dépôt |
| Scripts de mise en forme réutilisables | ✔ `scripts/` |

**Plus aucun manque bloquant.** On passe d'un Traitement C intégral (tout écrire
depuis le programme) à une **génération adossée à une trame de contenu
existante** : plus rapide et plus sûr sur le plan mathématique.

---

## 4. Croisement chapitres ↔ périodes

Le RAPS 2024-2025 fixe la progression en 5 périodes ; le cours fournit la
matière. Correspondance proposée :

| Période | Contenus RAPS | Chapitres du cours |
|---|---|---|
| I | Ensemble ℕ, entiers naturels | 1, 2, 3 |
| II | Division sur les nombres décimaux | 4, 5, 6, 7 |
| III | Fractions, proportionnalité | 8, 9, 10 |
| IV | Proportionnalité, nombres décimaux | 11, 12, 13, 16 |
| V | Pavés droits, cylindres droits | 14, 15, 17 |

Les dates du RAPS (09/09/2024 au 25/10/2024, etc.) sont **écartées** au profit
de Période I à V — règle 11 de la skill.

Cadrage : 4 h/semaine × 25 semaines ≈ 100 h. Cible **~100 séances d'une heure**,
soit environ 20 par période.
