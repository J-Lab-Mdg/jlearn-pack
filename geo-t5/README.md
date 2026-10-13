# Manuel de Géographie T5 — Collection J-Learn

Manuel scolaire de Géographie pour la classe de **T5** (Madagascar), conforme au programme d'études officiel, généré programmatiquement en DOCX (bibliothèque `docx` de Node.js).

**Cible : 76 numéros** — 66 séances de leçon + 5 séances de révision + 5 sujets d'examen, en 5 unités thématiques (cf. `PLAN-FINAL.md`).

## État d'avancement

| Élément | État |
|---|---|
| Plan de découpage (76 numéros) | ✅ Terminé (`PLAN-FINAL.md`) |
| Générateur de séances (seance-generator.js, patché T5) | ✅ Terminé |
| **Unité 1 — La planète Terre (S1-S16)** | ✅ **Terminée et intégrée au build** |
| **Unité 2 — L'île de Madagascar dans le monde (S17-S26)** | ✅ **Terminée et intégrée au build** |
| **Unité 3 — Les milieux naturels à Madagascar (S27-S55)** | ✅ **Terminée et intégrée au build** |
| **Unité 4 — Les ressources naturelles (S56-S61)** | ✅ **Terminée et intégrée au build** |
| **Unité 5 — La vie rurale et la vie urbaine (S62-S76)** | 🔄 **En production** : 13 schémas + scènes S62-S71 + leçons S62-S68 faites |
| Annexes (glossaire, cartes muettes, auto-évaluation, illustrations, sources) | ⬜ Fin de projet |
| Audit complet (audit.py) | ⬜ Fin de projet |

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
- `src/assemble.js` — Assemblage du manuel complet (couverture, avant-propos, mode d'emploi, TdM interactive, tableaux de bord, séances, annexes optionnelles).
- `svg/` — 66 schémas pédagogiques (`geo5_*.png`) : 14 (U1) + 8 (U2) + 27 (U3) + 4 (U4) + 13 (U5).
- `scenes/` — 63 scènes semi-réalistes (JPEG 900 px, q85), intégrées comme documents d'appui.
- `output/Manuel_Geographie_T5_JLearn.docx` — Build V1 Unités 1-4 (**12 174 Ko**, 61 séances, 106 images, empreinte SHA-256 jointe).

## Générer le manuel

```bash
npm install docx sharp
node geo-t5/src/assemble.js
python3 geo-t5/src/verifications.py geo-t5/output/Manuel_Geographie_T5_JLearn.docx
```

## Structure d'une séance (leçon)

Fiche de préparation (I. Révision / II. Nouvelle leçon en 6 étapes / III. Évaluation), leçon rédigée en 3 sections, 2 exercices d'application + 2 exercices d'évaluation avec corrigés notés, mots clés, questions de révision pour la séance suivante. Chaque leçon embarque un schéma pédagogique et une scène semi-réaliste en document d'appui.
