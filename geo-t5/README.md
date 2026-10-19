# Manuel de Géographie T5 — Collection J-Learn

Manuel scolaire de Géographie pour la classe de **T5** (Madagascar), conforme au programme d'études officiel, généré programmatiquement en DOCX (bibliothèque `docx` de Node.js).

**Cible : 76 numéros** — 66 séances de leçon + 5 séances de révision + 5 sujets d'examen, en 5 unités thématiques (cf. `PLAN-FINAL.md`).

## Couverture — modèle Anglais T10
- `geo5_bookcover.png` reprend exactement la première page de `Nos manuels/Anglais_T10_JLearn.pdf` ; seul le grand titre **« ANGLAIS T10 »** est remplacé par **« GÉOGRAPHIE T5 »**.
- Le logo, « LESSON PLAN », le slogan, l'enseignante, le décor, les coordonnées et « Édition 2026 » restent inchangés. Les six écritures du tableau sont traduites en français : « Contenu du PE », « Fiches de préparation », « Leçons », « Exercices », « Sujets d'examen et corrigés », « Chansons et fichiers audio (codes QR) ».
- La couverture est intégrée en première page pleine (15,9 × 23,9 cm).

## État d'avancement

| Élément | État |
|---|---|
| Plan de découpage (76 numéros) | ✅ Terminé (`PLAN-FINAL.md`) |
| Générateur de séances (seance-generator.js, patché T5) | ✅ Terminé |
| **Unité 1 — La planète Terre (S1-S16)** | ✅ **Terminée et intégrée au build** |
| **Unité 2 — L'île de Madagascar dans le monde (S17-S26)** | ✅ **Terminée et intégrée au build** |
| **Unité 3 — Les milieux naturels à Madagascar (S27-S55)** | ✅ **Terminée et intégrée au build** |
| **Unité 4 — Les ressources naturelles (S56-S61)** | ✅ **Terminée et intégrée au build** |
| **Unité 5 — La vie rurale et la vie urbaine (S62-S76)** | ✅ **Terminée et intégrée au build** |
| **66/66 leçons + 5 révisions + 5 sujets d'examen = 76 numéros** | ✅ **COMPLET** |
| **Annexes (glossaire 55 termes, 4 cartes muettes, auto-évaluation, table des illustrations, sources)** | ✅ **Terminées et intégrées au build** |
| Audit complet (audit.py) | ✅ **57/57 contrôles OK** |

## Contenu produit

- `src/data-unite1.js` — Séances S1-S7 : forme, dimensions, globe/planisphère, équateur/hémisphères, tropiques, pôles/Greenwich, continents.
- `src/data-unite1b.js` — Séances S8-S14 : océans, lire une carte, rotation, jour/nuit, révolution, saisons, rôle du soleil.
- `src/data-unite1-rev.js` — S15 révision (tableau récapitulatif 20 notions + 15 questions) et S16 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/data-unite2.js` — Séances S17-S20 : situer Madagascar dans le monde, lignes imaginaires, îles malgaches, îles éparses.
- `src/data-unite2b.js` — Séances S21-S24 : îles voisines de l'océan Indien, lire une carte de Madagascar, tracé de la carte (quadrillage puis contour).
- `src/data-unite2-rev.js` — S25 révision (20 notions + 15 questions) et S26 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/data-unite3.js` — Séances S27-S33 : formes du relief, trois grands massifs, plaines et plateaux, vallées, utilité du relief, éléments du climat, climat tropical.
- `src/data-unite3b.js` — Séances S34-S43 : zones climatiques (×2), quatre saisons, deux saisons, fleuves (×2), lacs naturels, lacs artificiels, utilité de l'eau, problèmes de l'eau.
- `src/data-unite3c.js` — Séances S44-S53 : types de végétation (×2), utilité et problèmes de la végétation, régions naturelles (×5), carte des régions.
- `src/data-unite3-rev.js` — S54 révision (22 notions + 15 questions) et S55 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/data-unite4.js` — Séances S56-S59 : définition d'une ressource naturelle, types et localisation, importance et problèmes, préservation.
- `src/data-unite4-rev.js` — S60 révision (17 notions + 15 questions) et S61 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/data-unite5.js` — Séances S62-S68 : vie rurale (caractéristiques, activités), vie urbaine (caractéristiques, activités), interdépendance, échanges, problèmes ruraux.
- `src/data-unite5b.js` — Séances S69-S74 : problèmes urbains, atouts des deux milieux, améliorer la vie (×2), protéger l'environnement, comparaison.
- `src/data-unite5-rev.js` — S75 révision (20 notions + 15 questions) et S76 sujet d'examen final (4 exercices × 5 pts, corrigé).
- `src/assemble.js` — Assemblage du manuel complet (couverture pleine page modèle Anglais T10, avant-propos, mode d'emploi, TdM interactive, tableaux de bord, séances, annexes).
- `src/annexes.js` — Annexes : glossaire (55 termes du vocabulaire T5), 4 cartes muettes (planisphère, océan Indien, Madagascar, régions naturelles), auto-évaluation par compétences (23 items sur 5 unités), table des illustrations (66 leçons + annexe), Loharanom-Baovao (sources).
- `src/audit.py` — Audit de contenu final (57 contrôles : séquençage, barèmes, corrigés, annexes, typographie, images, R.A.).
- `svg/` — 66 schémas pédagogiques + 4 cartes muettes (`geo5_*.png`) : 14+8+27+4+13 leçons + 4 annexes — complet.
- `scenes/` — 66 scènes semi-réalistes (une par leçon) — complet. (JPEG 900 px, q85), intégrées comme documents d'appui.
- `output/Manuel_Geographie_T5_JLearn.docx` — Build final COMPLET (**17 658 Ko**, 76 séances + annexes, **137 images**, audit 57/57 et vérifications structurelles ✅ ; SHA-256 : `897e765977f29172fe350c9deb0db79549bf9bde80f778f699660b6e579b1210`).

## Générer le manuel

```bash
npm install docx sharp
node geo-t5/src/assemble.js
python3 geo-t5/src/verifications.py geo-t5/output/Manuel_Geographie_T5_JLearn.docx
python3 geo-t5/src/audit.py geo-t5/output/Manuel_Geographie_T5_JLearn.docx
```

## Structure d'une séance (leçon)

Fiche de préparation (I. Révision / II. Nouvelle leçon en 6 étapes / III. Évaluation), leçon rédigée en 3 sections, 2 exercices d'application + 2 exercices d'évaluation avec corrigés notés, mots clés, questions de révision pour la séance suivante. Chaque leçon embarque un schéma pédagogique et une scène semi-réaliste en document d'appui.
