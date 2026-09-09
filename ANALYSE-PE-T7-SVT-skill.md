# Analyse — Manuel SVT 5e (T7) à partir du Programme d'Études T7

**Objet :** identifier le skill J-Learn et analyser le **Programme d'Études T7** pour préparer la création du manuel **SVT 5e (T7)**.
**Date :** 2026-09-09. **Source officielle :** `PE_T7.docx` (GitHub `J-Lab-Mdg/jlearn-pack@main`, copie locale `PE_T7.docx`, 2 029 708 octets).

---

## 1. Skill identifié

| Élément | Valeur |
|---|---|
| Nom | `jlearn-manuel-scolaire` |
| Version | **v18** (`skill v18.zip` / `jlearn-manuel-scolaire-skill-v18v.zip`, 12 fichiers) |
| Rôle | Créer/actualiser des manuels `.docx` J-Learn (fiche de préparation + leçon + exercices + corrigés + annexes) à partir d'un programme officiel |
| Structure de séance | I. Révision → II. Nouvelle leçon (Mise en situation, Présentation, Observation, Analyse, Synthèse, Application) → III. Évaluation |
| Règles critiques | 16 règles (feu vert d'abord, pas de dates calendaires, sommaire interactif, fiabilité + citations, pas de sur-précision, droit d'auteur, ne jamais toucher EPS/préscolaire, etc.) |
| Illustrations | 4 approches : génération externe, SVG→PNG avec `sharp`, insertion manuelle, prompt pour générateur externe ; redimensionnement ~1100 px ; mapping séparé ; annexe « Table des illustrations » |
| Spécifique SVT | `jlearn-manuel-scolaire/svt.md` (démarches non linéaires, expérimentation locale, schémas légendables, valeurs du PE, exemples malgaches, prudence sur les faits chiffrés) |
| v19 | Décrite dans `Analyse-Skill-jlearn-v19.md` (SVG prioritaire, `_a`/`_b`, gabarits MG/EN corrigés) — non fournie dans le zip ; utiliser **v18** sauf si v19 est fournie |

---

## 2. Programme d'Études T7 — structure

- Niveau **T7 = 5e**.
- **RAT** : communication, pensée critique/créative/résolution de problèmes, attitudes sociales, développement personnel.
- **RAG SVT : RAG 1, 2, 3, 4, 7.**
- **Volume horaire : 3 h/semaine** ; **Total SVT = 66 h**.
- **5 thématiques** :

| Thématique | Durée | RAS | Centre de contenu |
|---|---|---|---|
| Santé et bien-être | 10 h | Analyser le fonctionnement de l'appareil digestif | Appareil digestif |
| Reproduction humaine | 10 h | Mettre en relation puberté et capacités reproductrices ; attitudes face à la grossesse précoce | Puberté, cycle menstruel, procréation, grossesse précoce |
| Maladies infectieuses | 20 h | Analyser les microorganismes ; participer à la lutte contre les maladies infectieuses | Bactéries, champignons, virus, parasites, immunité, prévention |
| Organisation des êtres vivants | 16 h | Préserver chaque espèce et l'équilibre d'un écosystème | Écosystème, interactions, chaîne alimentaire, extinction |
| Géologie | 10 h | Analyser les modifications du paysage terrestre | Structure interne du globe, volcanisme, séismes, tectonique, érosion |

---

## 3. Ce qui est nouveau / différent par rapport au T6

- **Pas d'alimentation** (le T6 a « Conservation et transformation des aliments »).
- **Pas de reproduction des plantes ni des animaux** (le T6 a viviparité/oviparité/fleur/bouturage…).
- **Nouveau : appareil digestif** (T6 avait appareil urinaire).
- **Nouveau : maladies infectieuses / immunité** (grosse thématique 20 h).
- **Nouveau : écosystèmes / chaîne alimentaire** (le T6 avait « eau, bassins versants, vases communicants »).
- **Nouveau : puberté + grossesse précoce** (le T6 avait organes génitaux internes).
- **Nouveau : structure interne de la Terre + volcanisme/séismes/tectonique** (le T6 avait les 3 groupes de roches).

---

## 4. Cohérence avec l'ancien manuel 5e existant

Le dépôt contient :
- `Manuel_Physique-Chimie_5e_JLearn_V1.docx` → ce n'est **pas** SVT / ce n'est pas la source.
- `RAPE-T7_2024_2025.pdf` → probablement ancien **RAPS/RAPE 5e**, à ne **pas** utiliser comme source principale si le `PE_T7.docx` fait foi pour SVT.
- Il n'y a **pas** de `Manuel_SVT_5e_JLearn_*.docx` existant dans le dépôt.

➜ **Base de rédaction recommandée : partir de zéro**, avec le PE T7 comme seule source.

---

## 5. Recommandations de découpage (proposition)

| Unité | Thématique | Leçons proposées | + Révision | + Examen | Séances |
|---|---|---|---|---|---|
| I | Santé et bien-être (appareil digestif) | 4 | 1 | 1 | 6 |
| II | Reproduction humaine | 4 | 1 | 1 | 6 |
| III | Maladies infectieuses | 7 | 1 | 1 | 9 |
| IV | Organisation des êtres vivants | 6 | 1 | 1 | 8 |
| V | Géologie | 4 | 1 | 1 | 6 |
| **Total** | | **25** | **5** | **5** | **35** |

### Unités et leçons proposées

| Unité | Séance | Leçon (titre provisoire) |
|---|---|---|
| I | 1 | L'appareil digestif : découverte des organes |
| I | 2 | Les rôles du tube digestif et des glandes digestives |
| I | 3 | Le trajet et les transformations des aliments |
| I | 4 | Le devenir des aliments et les conséquences d'une digestion perturbée |
| I | 5 | Révision Unité I |
| I | 6 | Sujet d'examen 5e — Unité I |
| II | 7 | La puberté : changements et capacités reproductrices |
| II | 8 | Les organes génitaux internes : gonades et voies génitales |
| II | 9 | Le cycle menstruel et la période de fécondité |
| II | 10 | La fécondation (procréation) et les conditions nécessaires |
| II | 11 | La grossesse précoce : causes, conséquences, prévention |
| II | 12 | Révision Unité II |
| II | 13 | Sujet d'examen 5e — Unité II |
| III | 14 | Découverte des microorganismes |
| III | 15 | Les bactéries (structure, vie, utilité/pathogènes) |
| III | 16 | Les champignons (structure, vie, utilité/pathogènes) |
| III | 17 | Les virus et les parasites |
| III | 18 | L'infection microbienne et l'immunité (soi / non-soi) |
| III | 19 | Antisepsie, asepsie, antibiotiques, vaccins, sérums |
| III | 20 | Prévention et lutte contre les maladies infectieuses |
| III | 21 | Un regard sur les maladies infectieuses à Madagascar |
| III | 22 | Révision Unité III |
| III | 23 | Sujet d'examen 5e — Unité III |
| IV | 24 | Qu'est-ce qu'un écosystème ? |
| IV | 25 | Les conditions physiques d'un milieu |
| IV | 26 | Les modes de vie et l'adaptation des êtres vivants |
| IV | 27 | Les interactions entre les êtres vivants |
| IV | 28 | La chaîne alimentaire (producteurs, consommateurs, décomposeurs) |
| IV | 29 | Modification de l'environnement et menace d'extinction |
| IV | 30 | Révision Unité IV |
| IV | 31 | Sujet d'examen 5e — Unité IV |
| V | 32 | La structure interne de la Terre |
| V | 33 | Les activités internes et externes de la Terre |
| V | 34 | Volcanisme et séismes : manifestations et conséquences |
| V | 35 | Tectonique, montagnes, érosion et lavakisation |
| V | 36 | Révision Unité V |
| V | 37 | Sujet d'examen 5e — Unité V |

⚠️ **Ce découpage est une proposition à valider.** Il peut être modifié selon la durée d'une séance, le nombre de séances par semaine et les attentes de l'utilisateur.

---

## 6. Illustrations prévues (à confirmer)

Pour ce manuel, des schémas/scènes sont attendues, conformément au travail fait pour SVT T6 :

- Appareil digestif (trajet des aliments, bouche → anus, glandes digestives)
- Puberté et organes génitaux internes, cycle menstruel, fécondation
- Microorganismes (bactérie, champignon, virus, parasite) — structure, cycle de vie
- Infection, immunité, antisepsie/asepsie, vaccins/sérums (affiche, schéma)
- Écosystème : habitats, chaîne alimentaire, producteurs/consommateurs/décomposeurs
- Structure interne du globe, volcan, séisme, tectonique, érosion/lavakisation
- Schémas-bilan de chaque unité pour les révisions

**Style recommandé :** schémas SVG→PNG pour les structures techniques + scènes illustrées style « dessin scolaire » (Madagascar) pour mises en situation.

---

## 7. Risque pédagogique / sécurité

- **Reproduction humaine, puberté, cycle menstruel, grossesse précoce** : contenu **sobre, scientifique, adapté à 5e**, sans détails hors programme, sans vocabulaire familier.
- **Maladies infectieuses** : ne jamais inventer un nom commercial de médicament/sérum/vaccin ; rester au niveau conceptuel, citer les sources si un fait chiffré est utilisé.
- **Géologie** : les termes « abduction » apparaissent dans le PE (probablement pour « obduction ») — **vérifier et corriger si nécessaire** avant rédaction, ne pas reproduire une faute du programme sans vérification.

---

## 8. Prochaines étapes proposées

1. **Valider le découpage** (35 séances proposées, ou autre).
2. **Répondre aux questions de la lettre de passation** (durée, langue, périmètre, version du livrable, illustrations).
3. **Feu vert** (règle critique 1 du skill) puis :
4. Créer `svt7-projet/` (générateur semblable à `svt6-projet/`) avec données, schémas, images, assembleur.
5. Générer et vérifier `SVT T7 [PE] Fiche de preparation sujet corrigés J-Learn.docx`.
