# Plan & conformité skill — Manuel Anglais T4 (J-Learn)

Complément du `Reperage-Manuel-Anglais-T4.md`. Sources : skill v18 (`skill v18.zip`),
`Analyse-Skill-jlearn-v19.md`, PE T4 (p.40-64), FRP_8eme_2 (p.97-119).

## A. Décisions déjà validées par l'utilisateur

| Point | Décision |
|---|---|
| Langue des fiches | **Anglais facile** — phrases courtes, mots clés en **gras** et/ou *italique* |
| Durée des séances | **Laissée vide** (champ "Duration: ………" à remplir par l'enseignant) |
| Skill | v18 comme base + inventaire complet des points (section B) — arbitrage au cas par cas |
| Ordre des unités | Recommandation retenue : **ordre du PE** (voir section C) |

## B. Inventaire des points du skill applicables — avec recommandation

### B.1 Règles critiques (SKILL.md, 16 règles) — application au manuel Anglais T4

| # | Règle | Application T4 Anglais | Reco |
|---|---|---|---|
| 1 | Feu vert avant rédaction | Attendre validation de ce plan | ✅ Appliquer |
| 2 | EPS/préscolaire intouchables | Sans objet (Anglais T4 = primaire, pas préscolaire) | — |
| 3 | Logo/en-tête : ne pas toucher | L'utilisateur insérera le logo J-Learn | ✅ Appliquer |
| 4-5 | sectPr unique / namespaces | Traitement C (génération Node.js `docx`) → vérifs standard | ✅ Appliquer |
| 6 | Séances d'évaluation jamais enrichies | Le PE T4 anglais n'a pas de séances d'évaluation dédiées ; les "Tombana" de fin d'unité sont des critères, pas des séances | ⚠️ Adapter : les Tombana alimentent l'étape III |
| 7 | Copie du fichier source | Garder PE/FRP intacts, travailler sur copies | ✅ Appliquer |
| 8-9 | Contenu réel, fiche prête à l'emploi | Dialogues, questions et E.A. rédigés intégralement en anglais facile | ✅ Appliquer |
| 10 | Fichiers dans le workspace | Ici : racine du dépôt `/home/user/jlearn-pack` | ✅ Adapter chemin |
| 11 | Jamais de dates calendaires | Découpage Trimestre/Unit uniquement | ✅ Appliquer |
| 12 | Sommaire interactif (signets + hyperliens) | Obligatoire, méthode bookmarks | ✅ Appliquer |
| 13 | Fiabilité vocabulaire + sources citées | Anglais vérifié (pas d'improvisation) ; champ "Fanovozan-kevitra" → en anglais facile : "References" ; Loharanom-Baovao finale | ✅ Appliquer (PE + FRP cités) |
| 14 | Relecture externe : vérifier avant d'appliquer | Standard | ✅ Appliquer |
| 15 | Droit d'auteur du source | PE/FRP = documents officiels du MEN, pas un manuel commercial → contenus linguistiques (greetings, songs traditionnelles Alphabet/Hello song) librement réutilisables ; reformuler les mises en situation | ✅ Adapter |
| 16 | Pas de sur-précision | Valable en anglais ("Listen." suffit) | ✅ Appliquer |

### B.2 Structure des séances — le point de friction v18/v19

- `SKILL.md` v18 impose la **structure unique I. Review / II. NEW LESSON (6 sous-étapes) / III. Evaluation**, durées affichées uniquement sur I/II/III.
- MAIS le **gabarit anglais** de `vocabulaire-langues.md` (celui qui "prime" pour un manuel en anglais) est resté en **8 étapes à plat** (1. Review … 8. Evaluation).
- **Recommandation (= celle de l'Analyse v19) : convertir le gabarit anglais vers I/II/III** en gardant sa terminologie validée :

| Structure recommandée | Learners (gabarit conservé) | Technique and Strategy | Materials |
|---|---|---|---|
| **I. Review** (durée : ………) | Answer. / E.A.: … | Individual work | ---- |
| **II. NEW LESSON** (durée : ………) — ligne fusionnée | | | |
| 1. Warm-up | Listen. Answer. / E.A.: … | Whole-class work | ---- |
| 2. Presentation (formule figée *"Today we are going to learn…"*) | Listen. | Whole-class work | ---- |
| 3. Observation | Look. | Whole-class work | picture / object |
| 4. Analysis | Answer. / E.A.: … | Brainstorming / Pair work | même support |
| 5. Synthesis | Listen. | Whole-class work | ---- |
| 6. Practice | Do the exercise. / E.A.: … | Group / Pair work | Notebook ou support réel |
| **III. Evaluation** (durée : ………) | Answer or do the exercise. / E.A.: … | Individual work | Notebook, slate |

- Durées : conformément à la décision utilisateur, les 3 cellules de durée restent **"………"** (l'enseignant remplit). La règle "pas de durée sur les sous-étapes" reste respectée.
- Terme de référence : **E.A. (Expected Answer)** — jamais R.A. dans les fiches anglaises.

### B.3 Autres points du skill à appliquer tels quels

- **Design fiche** : Times New Roman partout ; méta-table sans bordures (infos à gauche, Date/Class/Session/Duration à droite) ; table de déroulement **6 colonnes** (Steps and Duration | Teacher | Learners | Technique and Strategy | Materials | Observation), en-tête 2 lignes.
- **Code couleur leçon** : titre rouge #C00000, sous-titres vert #1E7B34, **mots clés bleu #1F4E79 gras** (+ *italique* selon la demande utilisateur — compatible), corrigés mots-clés rose/bordeaux #C2185B.
- **Exercices** : ≥ 2 types par Practice et par Evaluation, ≥ 4 items chacun, type jamais nommé, distracteurs = pièges plausibles (ex. confusion *thirteen/thirty*, jour mal ordonné, *This is/These are*), corrigés détaillés.
- **Section EXERCISES notée** après la leçon (seule section avec barème), corrigé rose/bordeaux.
- **Sujet d'examen** : titre "Sujet d'examen T4" → en anglais facile : **"T4 Test paper"** (jamais "CEPE/BEPC").
- **Variété des types** d'exercices tournante sur l'ensemble du manuel.
- **Prénoms malgaches** dans les dialogues et exemples (Soa, Koto, Hery, Fara, Lanto…), contexte malgache (riz, zébu, case, lamba…) — déjà l'esprit du PE (rice, maize/corn).

### B.4 Adaptations spécifiques T4 (âge ≈ 8-9 ans, oral, 1 h/sem.)

| Contrainte | Adaptation recommandée |
|---|---|
| PE T4 = **oral uniquement** | Leçon écrite courte (modèle de dialogue + vocabulaire illustré) ; exercices privilégiant appariement image↔mot, coloriage-consigne, entourer, cocher — moins de rédaction |
| Anglais facile | Phrases ≤ 8-10 mots dans les consignes ; glose malgache entre parenthèses possible pour les titres d'unité (comme le FRP : "MEALS (Ny sakafo)") — à confirmer |
| Unités très courtes (2 h) | Voir option de regroupement, section C |
| Chansons du FRP (Alphabet song, Hello song) | Reproduire les paroles dans la leçon + annexe Songs ; ce sont des comptines traditionnelles libres |
| Valeurs (Fahendrena voizina) du PE | Reporter dans la méta-table de chaque fiche (champ "Values") |

## C. Ordre et découpage recommandés

**Ordre = celui du PE** (document prescriptif officiel ; le FRP n'est qu'une banque de ressources
dont la numérotation LFK est indicative). Le PE place volontairement *Socialising* en premier :
pédagogiquement correct pour une langue orale (on salue avant d'épeler).

Proposition de découpage par trimestre (35 h core, 1 h/sem.) :

| Trimestre | Unités | Séances core | + Révision | + Test paper | Total |
|---|---|---|---|---|---|
| 1 | U1 Socialising (6) · U2 Alphabet (2) · U3 Numbers (3) · U4 Classroom Language (2) | 13 | 1 | 1 | 15 |
| 2 | U5 Body (2) · U6 Days (2) · U7 School Environment (8) | 12 | 1 | 1 | 14 |
| 3 | U8 Meals (2) · U9 House (4) · U10 Family (2) · U11 Farm Animals (2) | 10 | 1 | 1 | 12 |
| **Total** | | **35** | **3** | **3** | **41** |

Recommandation complémentaire : révision + test paper **par trimestre** (et non par unité —
11 sujets d'examen pour des unités de 2 h serait disproportionné). Numérotation continue
Séance 1→41 + position locale dans le champ "Session".

Option à trancher : **structure 6b (regroupement par thème)** — 1 bloc leçon+exercices par
unité (fiches individuelles conservées). Recommandée ici : les unités T4 sont des thèmes
courts et cohérents, cela évite 35 pages de leçon quasi identiques. À confirmer (jamais par défaut).

## D. Annexes spéciales recommandées (Anglais T4)

| Annexe | Contenu | Source |
|---|---|---|
| ⭐ **Picture dictionary** (glossaire illustré EN ↔ MG) | Tout le vocabulaire des 11 unités, classé par unité, avec images | PE p.42-43 + illustrations |
| ⭐ **Songs and chants** | Alphabet song, Hello song, comptines des unités | FRP LFK 1-b, LFK 3-a |
| ⭐ **Pronunciation guide** | Prononciation figurée (base malgache) des lettres et mots clés — le PE lui-même compare abidy anglisy/malagasy | PE p.47 |
| **Classroom language poster** | Commands + asking for permission (affiche récapitulative) | PE U4, FRP LFK 4 |
| **Charts** | Numbers 1-20, Days of the week, Colours | FRP LFK 2-a, 6-a |
| **Flashcards à découper** | Images des dialogues (greetings, family, animals) | FRP LFK 3, 10, 11 |
| Auto-évaluation | Tableau "I can…" (Acquis / En cours / À revoir) par unité | standard skill |
| Index | Liste alphabétique des mots anglais | standard skill |
| Loharanom-Baovao | PE T4 (MEN/DCRP), FRP T4 fasc. 2, + sources web de vérification | règle 13 |

(⭐ = les 3 annexes spéciales prioritaires pour cette matière/ce niveau.)

## E. Livrable et technique

- **Traitement C** (génération de zéro, Node.js + package `docx`), aucun .docx source anglais T4 n'existant dans le dépôt.
- Fichier de travail : `Manuel_Anglais_T4_V1_COMPLET.docx` → livrable : `Manuel_Anglais_T4_JLearn.docx`.
- Vérifications : sectPr=1, 0 `ns0:`, 6 colonnes, Times New Roman, doubles espaces, sommaire cliquable, calculs sans objet (pas de maths).
- Couleur corrigé : défaut #C2185B sauf demande contraire.

## F. Décisions Étape 0 (validées par l'utilisateur)

1. Structure : **témoins demandés** — deux spécimens sur UNIT 2 : ALPHABET (standard vs regroupée) avant de trancher.
2. Révision + Test paper : **par unité** → 35 core + 11 révisions + 11 Test papers = **57 séances**.
3. Illustrations : **oui** (génération IA + redimensionnement ~1100 px).
4. Glose malgache : **non — anglais pur**, aucun malgache dans le manuel.
5. Numéro de version : V1 (à confirmer au feu vert final).
