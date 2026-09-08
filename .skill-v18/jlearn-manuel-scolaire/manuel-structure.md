# Structure d'un Manuel Complet J-Learn

Applicable aux Traitements B et C. La durée des séances dépend de la matière — ne pas supposer une durée fixe.

---

## 1. Couverture

| Élément | Contenu |
|---------|---------|
| En-tête | Logo J-Learn (inséré par l'utilisateur — ne pas toucher) |
| Titre | Manuel de [Matière] — Classe de [Niveau] |
| Sous-titre | Programme officiel malgache — [N] unités thématiques |
| Police | Times New Roman, centré |

---

## 2. Avant-propos

Présentation de la méthode J-Learn :
- Structure des séances (les 3 grandes étapes : Révision / Nouvelle Leçon / Évaluation)
- Organisation du manuel (unités, séances, révisions, sujets d'examen)
- Présentation des exercices et corrigés
- Renvoi au mode d'emploi

---

## 3. Mode d'emploi (Comment utiliser ce manuel)

Explication des 3 grandes étapes de la séance (Révision / Nouvelle Leçon avec ses 6 sous-étapes / Évaluation — durée affichée uniquement sur les 3 grandes étapes), du code couleur, des types d'exercices, du corrigé.

**Code couleur à expliquer :**
- Titre de leçon → rouge
- Sous-titres → vert
- Mots clés → bleu + gras
- Corrigé des exercices → rose/bordeaux
- Texte courant → noir
- Police : Times New Roman

---

## 4. Table des matières

Par unité → par chapitre/bloc → nombre de séances.
Mention des séances de révision et des sujets d'examen.
Mention des annexes.
**Sommaire interactif obligatoire** : liens hypertexte internes vers des signets (jamais un champ TOC natif — celui-ci reste vide tant que l'utilisateur n'a pas fait "Mettre à jour les champs" manuellement dans Word), cliquables dans Word et après conversion PDF — voir section "Sommaire interactif" du SKILL.md.

---

## 5. Tableau de bord par unité

Pour chaque unité : tableau récapitulatif chapitres / nombre de séances / révision / sujet d'examen.

---

## 6. Séances (corps du manuel)

### Structure d'une séance (ordre obligatoire)

```
[Saut de page]
SÉANCE N / TOTAL
Titre de la séance
FICHE DE PRÉPARATION
  ├── Méta-table (bordures invisibles, date/classe/séance/durée à droite)
  └── Table de déroulement 6 colonnes
        I. Révision (durée affichée)
        II. NOUVELLE LEÇON (durée globale affichée, ligne fusionnée) — sous-étapes 1 à 6 sans durée individuelle :
              1. Mise en situation (élèves : écoutent et répondent à l'oral)
              2. Présentation
              3. Observation
              4. Analyse
              5. Synthèse (énoncée par l'enseignant, élèves : écoutent)
              6. Application (vrais exercices, non notés à ce stade)
        III. Évaluation (durée affichée — vrais exercices, non notés à ce stade)

[Saut de page]
LEÇON
  ├── Titre (rouge, Times New Roman)
  ├── Sections numérotées 1, 2, 3… (vert) et sous-sections a, b… si nécessaire (noir)
  ├── Contenu substantiel couvrant toutes les idées essentielles du sujet, avec exemples
  └── Mots clés en bleu + gras dans le texte

EXERCICES
  ├── Consignes rédigées directement, sans nommer le type d'exercice
  ├── ≥ 2 types variés (en interne — jamais affichés comme titre)
  ├── Notés avec un barème (points par exercice, total affiché) — seule section notée du manuel
  └── Corrigé détaillé (pas résumé), mots-clés en rose/bordeaux
```

### Règles sur le contenu de la leçon

- Contenu **substantiel** : couvrir toutes les idées essentielles du sujet, pas un résumé minimal de quelques phrases
- Structure hiérarchique : sections numérotées (1, 2, 3…) → sous-sections lettrées (a, b…) si le sujet le justifie → exemples concrets avec listes à puces
- Vocabulaire accessible au niveau concerné, phrases claires
- Prénoms malgaches dans les exemples (Rova, Nivo, Soa, Koto, Hery, Aina…)
- Références culturelles et géographiques malgaches
- Pas de redondance avec l'encadré "À retenir" (à supprimer si présent — la leçon est déjà structurée)
- Aucune information inventée ou non vérifiée — en cas de doute sur un terme ou un fait, vérifier par recherche internet et citer la source en bibliographie/webographie

### Règles sur les exercices

- Au moins **2 types différents** par section Application et par section Évaluation, chaque exercice avec **au moins 4 items**
- Types disponibles (usage interne, jamais nommés dans le texte affiché) : QCM, texte à trous, vrai/faux, question/réponse, appariement, complétion, schéma à légender
- Consigne rédigée directement (ex : "Complète avec les mots proposés : …" plutôt que "Texte à trous : …")
- **Distracteurs (mauvaises réponses)** : pièges plausibles sur le sujet même de la séance (confusion entre notions proches, date/ordre inversé…) — jamais une vraie phrase hors-sujet tirée d'ailleurs, jamais une négation artificielle d'une phrase vraie
- **Barème** : dans la fiche (étapes Application et Évaluation du déroulement), les exercices ne sont pas notés. Seuls ceux de la section EXERCICES après la leçon portent un barème chiffré
- Les corrigés sont **détaillés** — réponse complète formulée, pas un simple mot — avec les mots-clés en couleur **rose/bordeaux**, le reste du texte en noir
- Les mêmes exercices figurent dans la fiche (cellule Enseignant = énoncé, cellule Apprenant = corrigé, sans barème) **ET** dans la section **EXERCICES** après la leçon (bloc unique avec barème, plus de distinction Application/Évaluation affichée à ce niveau)
- **Option de réduction du volume (sur demande explicite de l'utilisateur uniquement)** : remplacer le bloc EXERCICES détaillé par un bloc compact unique (« Fanazarana ») qui ne répète que la consigne + le corrigé — sans réafficher un titre par exercice ni relister les items un par un si évitable. À combiner, si besoin, avec l'exception au minimum de 4 items ci-dessus (section 6, "Volume minimum par exercice").

---

## 6b. Structure alternative — regroupement par thème (optionnelle, à confirmer avec l'utilisateur)

Motif validé pour réduire le volume du livre, en particulier utile pour le malgache (charge de vérification mot à mot plus lourde sur du contenu très fragmenté). **Ne jamais l'appliquer par défaut — uniquement si l'utilisateur le demande explicitement pour le projet en cours** (poser la question en Étape 0).

**Critère de déclenchement — jamais un nombre de mots, toujours le thème** : on regroupe dès qu'un thème du programme est couvert par plusieurs séances consécutives (fiches), qu'elles soient courtes ou non. Ce n'est pas la longueur individuelle d'une leçon qui décide du regroupement, c'est l'appartenance à un même thème cohérent. Le nombre de séances par groupe est variable (exemple observé : 3 à 6) — jamais un nombre fixe arbitraire, et **on ne regroupe jamais des séances qui ne partagent pas de lien thématique réel**, même si elles sont courtes.

Au lieu d'alterner fiche → leçon+exercices → fiche → leçon+exercices séance par séance, regrouper ainsi :

1. **Identifier le thème** couvert par le groupe de séances consécutives (ex. "Le Paludisme" couvert par 3 séances : Définition/Symptômes, Mode de transmission/Prévention, Guérison).
2. Les **fiches de préparation individuelles restent inchangées** : une fiche complète par séance (même moule qu'en structure standard), toutes à la suite les unes des autres pour le groupe.
3. Après le groupe de fiches, **un seul bloc combiné** pour tout le thème, qui remplace les pages leçon+exercices répétées séance par séance :
   - Une **leçon fusionnée** en texte de synthèse unique, structurée ainsi :
     - **Titre** = le nom du thème (ex. "Le Paludisme"), pas le nom d'une séance.
     - **Sous-titres** = les sous-sujets couverts par les séances du groupe (ex. Définition, Symptômes, Mode de transmission, Prévention, Guérison), avec exemples à l'appui où pertinent — code couleur standard du manuel (voir section 3).
     - **Jamais mentionner "Séance 1", "Séance 2", "Séance N"** dans le texte de la leçon fusionnée : le lecteur doit lire un texte continu organisé par sous-sujet, sans trace de la découpe en séances d'origine.
   - Les **exercices et corrigés de toutes les séances du groupe réunis** dans ce même bloc (à la suite de la leçon fusionnée), plutôt qu'un bloc d'exercices séparé par séance.

Exemple : pour un thème couvert par 3 séances (Définition/Symptômes, Mode de transmission/Prévention, Guérison), structure = Fiche Séance 1, Fiche Séance 2, Fiche Séance 3, puis une seule page "Leçon — Le Paludisme" (texte fusionné organisé par sous-titre : Définition, Symptômes, Mode de transmission, Prévention, Guérison — sans mention de séance), suivie d'un seul bloc d'exercices/corrigés regroupant les 3 séances.

---

## 7. Séances de révision et sujets d'examen

### Séance de révision (1 par unité)

- Tableau récapitulatif des notions / définitions clés
- Questions de révision simples ("Qu'est-ce que…", "Cite…", "Quel est…") avec R.A.

### Sujet d'examen (1 par unité)

- Titre : **"Sujet d'examen [niveau]"** (jamais "BEPC")
- Durée indiquée
- Barème total
- Questions + corrigé complet avec barème

---

## 8. Annexes

Demander à l'utilisateur quelles annexes sont pertinentes **selon la matière**. Ne pas inclure automatiquement toutes les annexes.

**Construire à partir du contenu déjà rédigé et vérifié, pas du neuf.** Pour la révision générale, le glossaire et l'index : reprendre et réorganiser le contenu déjà écrit dans les séances (déjà vérifié — voir règle critique 13) plutôt que rédiger de nouvelles définitions ou explications à cette étape. Rédiger du contenu neuf pour une annexe réintroduit un risque d'erreur factuelle déjà écarté dans le corps du manuel.

| Annexe | Pertinente pour |
|--------|----------------|
| **Glossaire** | Toutes matières |
| **Auto-évaluation** | Toutes matières — tableau compétences avec colonnes Acquis / En cours / À revoir |
| **Index** | Toutes matières — liste alphabétique des mots clés |
| **Évaluations format examen** | Toutes matières — récapitulatif des sujets d'examen |
| Tableaux de conjugaison | Français uniquement |
| Formules et théorèmes | Mathématiques, Sciences physiques |
| Cartes muettes | Géographie, Histoire |
| Tableau périodique | Sciences physiques / Chimie |

---

## 9. Numérotation des séances

- Numérotation globale (ex : Séance 1 à Séance 89) **OU** par unité (ex : Unité I — Séance 1 à 27) selon la demande de l'utilisateur.
- Les séances de révision et les sujets d'examen comptent dans la numérotation totale.
- Les séances d'évaluation du programme RAPS (ex : S4, S9 en 3e) sont **ignorées** pour l'enrichissement mais reçoivent un sujet d'examen + corrigé.

---

## 10. Exemple de structure complète — Géographie 8e

| Unité | Titre | Séances core | + Révision | + Examen | Total |
|-------|-------|-------------|-----------|---------|-------|
| I | La Terre, notre planète | 27 | 1 | 1 | 29 |
| II | Le relief et les cours d'eau de Madagascar | 21 | 1 | 1 | 23 |
| III | Les climats et la végétation de Madagascar | 9 | 1 | 1 | 11 |
| IV | La population de Madagascar | 24 | 1 | 1 | 26 |
| **Total** | | **81** | **4** | **4** | **89** |

---

## 11. Nommage des fichiers

**Fichiers de travail intermédiaires (jamais montrés comme livrable) :**
```
Manuel_[Matière]_[Niveau]_V[N]_[ETAPE].docx
ETAPE = AMELIORE | DESIGN | COMPLET
```

**Livrable final :**
```
Manuel_[Matière]_[Niveau]_JLearn.docx
```
ou pour une fiche seule :
```
[Matière] [Niveau] - Fiche de préparation - [titre leçon] - sujet et corrigé.docx
```
