# Manuel de Géographie T4 — Projet J-Learn

Manuel scolaire de **Géographie, classe de T4** (4ᵉ année du primaire, Madagascar), Collection J-Learn.
Source officielle : `PE RAPE/PE T4.pdf` (Programme d'Études T4, section GÉOGRAPHIE, p. 115-123).

## État d'avancement
- ✅ **Unité 1 — L'orientation géographique** (Séances 1-10) → `output/Manuel_Geographie_T4_V1_UNITE1.docx`
- ✅ **Unité 2 — Le plan** (Séances 11-24 : 12 leçons + révision + sujet d'examen) → `output/Manuel_Geographie_T4_V1_UNITE2.docx` (contient Unités 1+2)
- ✅ **Unité 3 — Les éléments du paysage naturel** (Séances 25-38 : 12 leçons + révision + sujet d'examen) → `output/Manuel_Geographie_T4_V1_UNITE3.docx` (contient Unités 1+2+3)
- ✅ **Unité 4 — L'Environnement** (Séances 39-56 : 16 leçons + révision + sujet d'examen) → `output/Manuel_Geographie_T4_V1_UNITE4.docx` (contient Unités 1+2+3+4)
- ✅ **Unité 5 — L'Homme et les activités quotidiennes** (Séances 57-76 : 18 leçons + révision + sujet d'examen) → `output/Manuel_Geographie_T4_V1_UNITE5.docx`
- ✅ **Fusion finale + annexes** (glossaire 47 termes dont glossaire officiel ★, cartes muettes ×3, auto-évaluation 16 compétences, table des illustrations 67 lignes, Loharanom-Baovao) → **`output/Manuel_Geographie_T4_JLearn.docx` + `.sha256` (LIVRABLE FINAL, 76 séances + annexes)**

Le découpage complet des 76 séances est dans **PLAN-FINAL.md** (validé par l'utilisateur).

## Décisions verrouillées (ne pas re-demander)
- Séances de **30 minutes** (conformes au PE : 1 h/semaine, 2 séances), ratio I/II/III = 3/22/5 min
- **Français uniquement** — couleur corrigé **#C2185B** — barème EXERCICES : 4 exercices × 5 points = /20
- Illustrations : schémas SVG « style scolaire » (préfixe `geot4_`) à la racine du dépôt, enregistrées dans `pack.json` ; une image générée (`geot4_faits_culturels.png`)
- Aucune mention du ministère (y compris abréviation) — consigne utilisateur explicite
- Numérotation globale : Séance N / 76 ; révisions et sujets d'examen comptent dans la numérotation

## Architecture
```
geo-t4/
├── PLAN-FINAL.md          # Découpage validé des 76 séances (référence)
├── README.md              # Ce fichier
├── svg/make-svg.js        # Schémas Unité 1 (SVG → PNG, sharp)
├── svg/make-svg-u2.js     # Schémas Unité 2
├── svg/make-svg-u3.js     # Schémas Unité 3 (12 schémas)
├── svg/make-svg-u4.js     # Schémas Unité 4 (16 schémas)
├── svg/make-svg-u5.js     # Schémas Unité 5 (18 schémas)
├── svg/make-svg-annexes.js# Schémas annexes (cartes muettes, rose vierge)
├── src/
│   ├── builders.js        # Constructeurs docx (méta-table invisible, 6 colonnes, couleurs…)
│   ├── seance-generator.js# topic → fiche I/II/III + leçon + EXERCICES notés
│   ├── data-unite1.js     # Contenu rédactionnel Unité 1 (8 séances)
│   ├── data-unite1-rev.js # Révision + sujet d'examen Unité 1
│   ├── data-unite2.js     # Contenu Unité 2, Séances 11-16
│   ├── data-unite2b.js    # Contenu Unité 2, Séances 17-22
│   ├── data-unite2-rev.js # Révision + sujet d'examen Unité 2
│   ├── data-unite3.js     # Contenu Unité 3, Séances 25-31
│   ├── data-unite3b.js    # Contenu Unité 3, Séances 32-36
│   ├── data-unite3-rev.js # Révision + sujet d'examen Unité 3
│   ├── data-unite4.js     # Contenu Unité 4, Séances 39-44
│   ├── data-unite4b.js    # Contenu Unité 4, Séances 45-49
│   ├── data-unite4c.js    # Contenu Unité 4, Séances 50-54
│   ├── data-unite4-rev.js # Révision + sujet d'examen Unité 4
│   ├── data-unite5.js     # Contenu Unité 5, Séances 57-62
│   ├── data-unite5b.js    # Contenu Unité 5, Séances 63-68
│   ├── data-unite5c.js    # Contenu Unité 5, Séances 69-74
│   ├── data-unite5-rev.js # Révision + sujet d'examen Unité 5
│   ├── annexes.js         # Annexes (glossaire, cartes muettes, auto-éval, illustrations, sources)
│   ├── assemble.js        # Assemblage — config UNITES (boucle générique, ajouter l'unité suivante dedans)
│   ├── verifications.py   # Vérifications structurelles post-génération (skill)
│   └── audit.py           # Audit de contenu (séquençage, barèmes, typographie, mots interdits…)
└── output/                # Livrables .docx
```

## Reproduire / continuer
```bash
npm install docx sharp        # à la racine du dépôt (node_modules non versionné)
node geo-t4/svg/make-svg.js   # régénérer les schémas si modifiés
node geo-t4/src/assemble.js   # → output/Manuel_Geographie_T4_JLearn.docx (76 séances + annexes)
python3 geo-t4/src/verifications.py  # structure XML
python3 geo-t4/src/audit.py           # contenu (38 contrôles) — rapport : ../Audit-final-Manuel-Geographie-T4.md
```

Pour les unités suivantes : créer `data-uniteN.js` (même structure de topic que data-unite1.js),
`data-uniteN-rev.js` (révision + examen), puis les brancher dans `assemble.js`
(UNITES + TdM + tableaux de bord). La révision réutilise `revisionSeance()`, l'examen `examenSeance()`.

## Audit final
✅ **9 octobre 2026 : audit complet passé** — 38 contrôles de contenu + 12 structurels, tous verts.
Rapport : `Audit-final-Manuel-Geographie-T4.md` (racine du dépôt). Outil réutilisable : `src/audit.py`.
Corrigé à cette occasion : items « a)/b) » du sujet d'examen de l'Unité 5 harmonisés en « 1./2. ».

## Conformité FRP T4 Fascicule 2
✅ **29 octobre 2026 : contrôle croisé passé** avec la section GÉOGRAPHIE du FRP T4 Fascicule 2 (p. 99-127).
Rapport : `Conformite-FRP-T4-Geographie.md` (racine du dépôt). 8 enrichissements intégrés
(mangrove/savoka, éléments du climat, barrage hydroélectrique, plantes médicinales, causes naturelles
cyclone/sécheresse, réchauffement climatique, réserves naturelles, 27 millions d'habitants, produits locaux) ;
glossaire 51 termes ; FRP cité dans les Loharanom-Baovao.

## Analyse du FRP T4 Fascicule 2 (document entier)
📄 **9 octobre 2026 : analyse intégrale du FRP** (Maths p. 4-54 + ST p. 55-98 + Géo p. 99-127) :
inventaire complet des 123 ressources (codes RES, typologie, pages), alignement FRP ↔ PE T4 par
discipline, anomalies éditoriales (codes doublés/manquants, en-tête erroné) et implications pour
d'éventuels manuels J-Learn **Maths T4** (≈ 396 séances/an) et **ST T4** (≈ 198 séances/an).
Rapport : `Analyse-FRP-T4-Fascicule-2.md` (racine du dépôt).

## Scènes illustrées — ✅ DÉPLOIEMENT TERMINÉ (10 octobre 2026)
🎨 **66 scènes semi-réalistes intégrées** (choix utilisateur : style semi-réaliste livre scolaire,
1 scène par leçon, placement mixte, JPEG 900 px q85 ≈ 140 Ko pièce) — **61 documents d'observation + 5 illustrations**.
- **Manuel final : 14 519 Ko** — **130 images** (64 schémas + 66 scènes) — audit **38/38** ✅ à chaque étape.
- sha256 `dd233b6a…` ; planche de contrôle : `geo-t4/scenes/PLANCHE-66-SCENES.jpg`.
- Historique : U1 6102 Ko (`3ab9116`) → U2 7824 Ko (`92fd389`) → U3 9488 Ko (`42919c8`) →
  U4 11 765 Ko (`0d18b0d`) → U5 14 356 Ko (`524b66d`) → final 14 519 Ko.
- Intégration : champ `scene: { file, mode ("document"|"illustration"), legende }` dans les data-uniteN.js ;
  `sceneBlock()` (builders.js, type jpg) ; document → sous le schéma en tête de leçon, illustration → fin de leçon ;
  légende dupliquée dans la table des illustrations (annexe).
- audit.py : compteur d'images dynamique (64 + nb de champs `scene: {`).
- Source = générations IA ; PNG haute déf compressés en JPEG puis supprimés (poids repo).

## Pièges déjà résolus (à lire avant de modifier)
- **Ne jamais éditer plusieurs fichiers en parallèle** si l'un réécrit l'autre (courses d'écriture déjà subies : lignes dupliquées, `module.exports` cassé).
- Le champ `documentation` de la méta-table ne doit contenir **aucune** mention ministérielle, même abrégée.
- Les QCM utilisent le séparateur « — » entre options (jamais d'espaces multiples : la vérification « doubles espaces = 0 » doit rester verte).
- `pKw()` : un mot clé contenant une majuscule est recherché en respectant la casse (sinon « Est » colorerait le verbe « est »).
- Les marqueurs `**mot**` dans les corrigés → gras + rose #C2185B (parseur `mkRuns`), jamais de `**` résiduel dans le XML.
- Les signets doivent être strictement égaux aux liens de la table des matières (vérification automatique).
