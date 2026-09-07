# Projet — Manuel Français 11e (CP1) — Collection J-Learn

Traitement C (génération de zéro) selon le skill `jlearn-manuel-scolaire` v18.

## État

| Bloc | Thème | Séances | État |
|---|---|---|---|
| 1 | Les salutations (Langage) | 1-10 | ✅ Livré (`output/Manuel_Francais_11e_V1_BLOC1.docx`) |
| 2 | Les sons I et U (Phonétique) | 11-20 | ✅ Livré (`output/Manuel_Francais_11e_V1_THEMES1-2.docx`, cumulatif 1-20) |
| 3+ | Se présenter, son OUI, son U, le village, son GN + extension FRA (T2, T3) | 21-… | ⏳ Prochain relais : Bloc 3 = Thème 3 |

Décisions validées par l'utilisateur : 30 min/séance (FRA officielle), version française seule,
programme annuel complet (multi-blocs), illustrations scolaires plates intégrées (Pillow/PNG).

## Générer le manuel

```bash
npm install                  # package docx
python3 illus/generate_illus.py   # illustrations PNG dans assets/
node src/assemble-bloc2.js        # → output/Manuel_Francais_11e_V1_THEMES1-2.docx (cumulatif)
python3 verify_docx.py output/Manuel_Francais_11e_V1_THEMES1-2.docx 20   # 22 vérifications skill v18
```

## Architecture

```
src/builders.js       # design skill v18 : méta-table invisible, déroulement 6 col I/II/III,
                      # couleurs leçon (rouge/vert/bleu), corrigé rose #C2185B, sommaire à liens
src/data-theme1.js    # CONTENU des 10 séances du Thème 1 (à imiter pour les thèmes suivants)
src/data-theme2.js    # CONTENU des 10 séances du Thème 2 (Phonétique, rédigé d'après la FRA)
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
