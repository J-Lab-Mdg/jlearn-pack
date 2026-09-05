# Manuel Histoire 3e — J-Learn V2

Livrable final : `../Manuel_Histoire_3e_JLearn.docx` (25 séances, 3 sujets d'examen, glossaire de 70 mots, bibliographie, 49 illustrations : couverture J-Learn, 25 scènes dessinées, 11 photos d'archives, 12 cartes/frises/graphiques).
Les 12 PNG sont aussi copiés à la racine du dépôt sous le préfixe `hist3_` et référencés dans `pack.json`.

Projet Node.js + `docx` qui régénère le manuel à partir des données de contenu (même architecture que `manuel-geo-3e/`).

```
src/builders.js         fonctions docx (méta-table, table 6 colonnes, exercices, leçon, figures, mini-tableaux)
src/seance-generator.js fiche I/II/III (durées 15/90/15 min) + leçon + section EXERCICES
src/data-unite1.js      séances 1 à 10  (Unité 1 — Madagascar, colonie française 1896-1960)
src/data-unite2.js      séances 11 à 20 (Unité 2 — Le monde de l'entre-deux-guerres 1919-1945)
src/data-unite3.js      séances 21 à 25 (Unité 3 — Le monde depuis 1945)
src/data-annexes.js     sujets d'examen par unité (commentaire de document 8 pts + devoir composé 12 pts), glossaire, bibliographie
src/illustrations.js    SVG → PNG (sharp) : cartes schématiques, frises chronologiques, organigramme, graphiques
src/illustrations-scenes.js  affectation des 25 scènes dessinées (assets/scenes/) et des 11 photos d'archives (assets/photos/, licences dans la bibliographie) ; appliqué aux données par applyScenes()
src/assemble.js         couverture → avant-propos → mode d'emploi → sommaire (signets) → tableau de bord → unités → annexes
src/verify.js           vérifications obligatoires du skill (sectPr, ns0, fiches=séances, 6 colonnes, Oral, BEPC, doubles espaces, signets↔liens…)
```

Commandes :
```bash
npm install                      # docx, sharp, adm-zip
node src/illustrations.js        # régénère assets/*.png
node src/assemble.js             # manuel complet → output/Manuel_Histoire_3e_V2.docx
ONLY=1 node src/assemble.js      # une seule unité (suffixe _1), pratique pour relire
node src/verify.js output/Manuel_Histoire_3e_V2.docx
```

Découpage conforme au programme officiel (MEN/DCI 2015, 2 h/semaine) : 10 + 10 + 5 semaines = 25 séances.

Décisions validées avec l'utilisateur :
- Skill v18 + règles v19 pour les illustrations (SVG → PNG, sources indiquées sous chaque figure et en bibliographie).
- Aucun matériel requis : le document d'observation est un tableau, une frise ou un court texte recopié au tableau noir ; une note facultative « commentaire de documents » guide l'enseignant qui dispose de sources.
- Corrigés en rose saumon `#E9704F` ; version française uniquement.
- Chiffres controversés (bilan de 1947, pertes des guerres, famines soviétiques) donnés en fourchettes avec leurs sources.
- Séance 25 (Madagascar depuis 1960) intégrant l'actualité d'octobre 2025 (destitution, président de la Refondation, transition) : à actualiser par l'enseignant selon l'évolution.
