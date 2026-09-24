# Points d'amélioration — skill J-Learn et manuels

Note établie en mesurant les fichiers du dépôt, pas en supposant. Chaque point
indique ce qui a été **vérifié**, ce qui a été **fait**, et ce qui **reste à
décider**.

---

## A. Points que vous aviez cités

### A1. « de eliminer » au lieu de « d'eliminer » — fait

Ce n'est pas une erreur aléatoire d'IA, c'est une **faute de construction**. Une
formule figée est concaténée à un fragment variable :

    "Être capable de " + "identifier…"   →   « Être capable de identifier »

L'erreur apparaît donc mécaniquement partout où l'objectif commence par une
voyelle. Mesure sur les livrables du dépôt :

| Manuel | occurrences |
|---|---|
| `PE_T11.docx` | 102 |
| `Manuel_Histoire_3e_VF_V1.docx` | 30 |
| `Manuel_Calcul_9e_JLearn.docx` | 19 |
| `SVT-9e-Manuel-Complet.docx` | 12 |
| `Manuel_Geographie_3e_VF_V1.docx` | 20 |
| **`Manuel-SVT-T9-complet.docx`** | **0** |

Le manuel SVT T9 est indemne parce que ses objectifs sont rédigés en toutes
lettres, pas assemblés par gabarit.

**Fait** : `scripts/lint_langue.py`, qui détecte les 9 couples d'élision, les
doubles espaces et les espaces avant ponctuation. Règle critique 17 ajoutée au
skill : **élider dans la fonction d'assemblage**, jamais en relecture — sinon
l'erreur revient à la génération suivante.

Piège important : un contrôle naïf produit des fausses alertes sur les pronoms
enclitiques, qui sont **corrects** et ne doivent pas être « corrigés » :

    Exprime-la en pourcentage.   Compare-le au besoin.   Est-ce un animal ?

Sur SVT T9, le contrôle naïf remontait 3 551 alertes ; après affinage, **3
anomalies réelles**, toutes corrigées.

### A2. Codes couleur — un vrai écart, corrigé

Le skill impose quatre couleurs. Le `.docx` n'en contenait que **deux** :

| Élément | Code | Avant | Après |
|---|---|---|---|
| Titre de leçon | `#C00000` | 146 | 146 |
| Sous-titres | `#1E7B34` | 477 | 477 |
| Mots clés de la leçon | `#1F4E79` | **0** | **921** |
| Mots clés du corrigé | `#C2185B` | **0** | **1 108** |

Les mots clés étaient en gras noir : le gras ne distingue pas un mot clé d'une
simple emphase. `md2docx.py` colore désormais le gras selon la zone — bleu dans
la leçon, rose dans le corrigé, noir ailleurs (sans quoi chaque `**Donc,**` de
la fiche deviendrait un faux mot clé).

### A3. Couverture tirée du compte GitHub — fait

Le dépôt contient **7 maquettes** (`bookcovers1-6` + `bookcover MATH T6`).
Découverte importante : elles n'ont **ni les mêmes dimensions** (1024×1536,
1029×1528, 843×1264…) **ni la même composition** — `bookcovers3` porte le titre
sur deux bandes, `bookcovers6` sur une seule.

Conséquence : les coordonnées ne sont pas transférables. `scripts/couverture.py`
**mesure** chaque maquette avant de la retoucher, et refuse de deviner quand
l'en-tête n'est pas standard (sur `bookcovers6`, la déduction automatique
écrasait le slogan — le garde-fou bloque désormais ce cas).

### A4. Leçon prête à être copiée, sans le mentionner — vérifié

Vérifié : aucune mention « à recopier » ne figure dans le corps des leçons. Les
occurrences de « recopient » sont toutes dans la **colonne Apprenant** de la
fiche, où elles sont légitimes. Règle 19 ajoutée pour figer ce point.

### A5. Exactitude des informations — vérifié par sondage

Deux affirmations chiffrées contrôlées en ligne :

- sommeil 14-17 h (nouveau-né) / 8-10 h (adolescent) → conforme à la National
  Sleep Foundation ;
- HPV : 15 à 20 ans entre infection et cancer, vaccination des filles de 9 à
  14 ans → conforme à l'OMS.

Point remarquable : sur ces deux sujets le manuel **s'écarte volontairement du
fascicule officiel** (qui indique 20 h de sommeil) et le signale en note. C'est
la bonne conduite, désormais inscrite dans `controle-qualite.md` : le fascicule
officiel n'est pas une autorité suffisante à lui seul.

---

## B. Ce que j'ai trouvé en plus

### B1. Le sommaire n'était pas cliquable — corrigé

**C'est l'écart le plus sérieux** : la règle critique 12 du skill exige un
sommaire cliquable qui reste fonctionnel après export PDF. Or le `.docx` ne
contenait **aucun** lien interne : les 96 ancres du markdown étaient supprimées
à la conversion.

État après correction : **96 liens internes, 120 signets, 0 lien orphelin.**

### B2. Le contrôle de non-régression a fait son travail

En corrigeant la typographie directement dans le manuel assemblé, j'ai fait
diverger celui-ci de ses fichiers sources — `verifier_manuel.py` l'a
immédiatement détecté (28/29). La correction a été reportée dans
`Unite-I-…md` et `assembler_manuel.py`, puis réassemblée. Réflexe à garder :
**corriger la source, jamais l'assemblé.**

---

## C. Ce qui reste à décider — 3 questions

### C1. « Ministère de l'Éducation nationale » : 4 occurrences

Votre consigne (énoncée pour la PC 6e) était de ne pas faire figurer cette
mention. Mais les 4 occurrences de SVT T9 ne sont **pas** un en-tête
institutionnel : ce sont des **citations de source**, et la règle 13 du skill
impose justement de citer ses sources.

    Programme d'Études T9 (SVT), DCRP, Ministère de l'Éducation Nationale
    Le fascicule du Ministère indique 20 heures pour le nouveau-né…

Mon avis : les conserver. Retirer la source affaiblirait la bibliographie et
rendrait incompréhensibles les deux notes d'écart. Ce que votre consigne visait,
à mon sens, c'est l'en-tête qui laisse croire à un aval officiel — ce qui n'est
pas le cas ici. **À confirmer.**

### C2. Police de la couverture

Seule DejaVu Sans Bold est disponible ; les maquettes utilisent une grotesque
condensée (type Montserrat). « SVT » et « T9 » sont donc plus larges que
l'original à hauteur égale. Déposer le `.ttf` dans le dépôt réglerait l'écart.

### C3. `pack.json` ne déclare pas les nouvelles images

Le fichier recense 76 images mais ignore `svt9e_racine_zones.png`,
`svt9e_arc_reflexe.png` et la couverture. Sans incidence sur le livrable, mais
le décompte est faux.

---

## D. Suggestions pour la suite, par priorité

| # | Suggestion | Pourquoi |
|---|---|---|
| 1 | Passer `lint_langue.py` sur les manuels déjà livrés | 183 élisions fautives dorment dans 6 livrables |
| 2 | Corriger l'élision dans les générateurs Node.js (Traitement C) | La source de l'erreur est là ; sinon elle revient |
| 3 | Vérifier le sommaire cliquable des autres manuels | Règle critique 12, probablement enfreinte ailleurs aussi |
| 4 | Contrôler le code couleur des autres manuels | L'écart trouvé sur SVT T9 est probablement systémique |
| 5 | Intégrer les contrôles dans une commande unique | Éviter d'oublier une étape avant livraison |
| 6 | Constituer un jeu de test de fausses alertes | Empêcher qu'un futur linter « corrige » les enclitiques |

---

## E. Séquence de contrôle avant toute livraison

```bash
python3 scripts/assembler_manuel.py
python3 scripts/md2docx.py Manuel-SVT-T9-complet.md Manuel-SVT-T9-complet.docx
python3 scripts/verifier_manuel.py      # 29/29 attendus
python3 scripts/lint_langue.py Manuel-SVT-T9-complet.md
python3 scripts/check_plagiat.py
```

État actuel du manuel SVT T9 : **29/29 contrôles, 0 anomalie de langue, 4 codes
couleur présents, 96 liens cliquables, 1 `sectPr`, 0 `ns0`.**
