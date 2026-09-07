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
| 7+ | Le son GN, corps, énumérations, S-CH, couleurs, possessifs, UN + extension FRA (T2, T3) | 61-… | ⏳ Prochain relais : Bloc 7 = Thème 7 |

Décisions validées par l'utilisateur : 30 min/séance (FRA officielle), version française seule,
programme annuel complet (multi-blocs), illustrations scolaires plates intégrées (Pillow/PNG).

## Générer le manuel

```bash
npm install                  # package docx
python3 illus/generate_illus.py   # illustrations PNG dans assets/
node src/assemble-bloc6.js        # → output/Manuel_Francais_11e_V1_THEMES1-6.docx (cumulatif)
python3 verify_docx.py output/Manuel_Francais_11e_V1_THEMES1-6.docx 60   # 22 vérifications skill v18
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
