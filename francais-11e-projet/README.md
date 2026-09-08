# Projet — Manuel Français 11e (CP1) — Collection J-Learn

Traitement C (génération de zéro) selon le skill `jlearn-manuel-scolaire` v18.

## État

| Bloc | Thème | Séances | État |
|---|---|---|---|
| 1 | Les salutations (Langage) | 1-10 | ✅ Livré (`output/Manuel_Francais_11e_V1_BLOC1.docx`) |
| 2 | Les sons I et U (Phonétique) | 11-20 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-2.docx`, cumulatif 1-20) |
| 3 | Se présenter (Langage) | 21-30 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-3.docx`, cumulatif 1-30) |
| 4 | Le son OUI (Phonétique) | 31-40 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-4.docx`, cumulatif 1-40) |
| 5 | Le son U : nouveaux mots (Phonétique) | 41-50 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-5.docx`, cumulatif 1-50) |
| 6 | Le village (Langage) | 51-60 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-6.docx`, cumulatif 1-60) |
| 7 | Le son GN (Phonétique) | 61-70 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-7.docx`, cumulatif 1-70) |
| 8 | Mon corps, les couleurs et le son CH (Langage + Phonétique) | 71-80 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-8.docx`, cumulatif 1-80) — **MANUEL DES 8 THÈMES COMPLET** |
| 9+ | Extension FRA : T1 fin / T2 / T3 (à faire valider par l'utilisateur) | 81-… | ⏳ Prochain relais : Bloc 9 = extension FRA |

Décisions validées par l'utilisateur : 30 min/séance (FRA officielle), version française seule,
programme annuel complet (multi-blocs), illustrations scolaires plates intégrées (Pillow/PNG).

## Générer le manuel

```bash
npm install                  # package docx
python3 illus/generate_illus.py   # illustrations PNG dans assets/
node src/assemble-bloc8.js        # → output/Manuel_Francais_11e_V1_THEMES1-8.docx (manuel complet, 80 séances)
python3 verify_docx.py output/Manuel_Francais_11e_V1_THEMES1-8.docx 80   # 22 vérifications skill v18
```

## Architecture

```
src/builders.js       # design skill v18 : méta-table invisible, déroulement 6 col I/II/III,
                      # couleurs leçon (rouge/vert/bleu), corrigé rose #C2185B, sommaire à liens
src/data-theme1.js    # CONTENU des 10 séances du Thème 1 (à imiter pour les thèmes suivants)
src/data-theme2.js    # CONTENU des 10 séances du Thème 2 (Phonétique, rédigé d'après la FRA)
src/data-theme3.js    # CONTENU des 10 séances du Thème 3 (Langage : se présenter)
src/data-theme4.js    # CONTENU des 10 séances du Thème 4 (Phonétique : le son OUI)
src/data-theme5.js    # CONTENU des 10 séances du Thème 5 (Phonétique : le son U, piège U vs OU)
src/data-theme6.js    # CONTENU des 10 séances du Thème 6 (Langage : le village)
src/data-theme7.js    # CONTENU des 10 séances du Thème 7 (Phonétique : le son GN, piège GN vs N)
src/data-theme8.js    # CONTENU des 10 séances du Thème 8 (corps, couleurs, S-CH, énumération, possessifs, un/une)
src/assemble-bloc1.js # couverture + avant-propos + mode d'emploi + sommaire interactif + séances
illus/generate_illus.py  # illustrations scolaires plates (helpers : perso, bulle, soleil, panneau…)
assets/               # PNG ~1100px (norme illustrations.md)
verify_docx.py        # sectPr=1, ns0=0, Times New Roman, 0 double espace, 0 date calendaire,
                      # anchors/signets, I/II/III, interdits (« Oral », ministère…)
```

## Règles à ne pas oublier (rappel skill v18)

- Durées affichées UNIQUEMENT sur I / II / III (jamais sur les sous-étapes 1-6).
- ≥ 4 items par exercice, 2+ types variés, ne jamais nommer le type d'exercice.
- Révision : jamais de support consultable (« — » dans la colonne Support).
- Analyse : une ligne par couple question / R.A. Synthèse : commence par « Donc : ».
- Aucune date calendaire, aucun « ministère », jamais commencer sans feu vert utilisateur.
- Continuité entre sessions : voir `LETTRE-PASSATION-BLOC1.md`.


## Structure v2 (refonte suite retours utilisateur)

- **Fiches de préparation séparées** (une par séance de 30 min, exercices + corrigés après chaque fiche).
- **19 leçons fusionnées** : après chaque groupe de séances du même grand titre, une page « LEÇON N — … »
  (1 à 2 pages) rassemble le contenu à dicter, fusionné fidèlement depuis les fiches du groupe
  (module `src/lecons-fusionnees.js`, clé `apres` ; fusion automatique de data-theme1..8).
- **Images mixtes** : 9 scènes IA album scolaire malgache pour les leçons fusionnées (t1_a→t4_a) ;
  5 dessins plats conservés pour des exercices (EXO_IMAGES : s15, s26, s51, s61, s71).
- Règles images IA : AUCUN texte, personnages malgaches, tableau noir vierge, décor complet.
- Vérifs après regen : `LEÇON i —` ×1 pour i=1..19, signets ~110, `CONTENU DE LA LEÇON` = 0.
