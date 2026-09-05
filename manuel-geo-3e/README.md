# Manuel Géographie 3e — J-Learn V2 (Traitement C)

Livrable final : `../Manuel_Geographie_3e_JLearn.docx` (26 séances, 4 sujets d'examen, glossaire, bibliographie, 13 illustrations).
Les 13 PNG sont aussi copiés à la racine du dépôt sous le préfixe `geo3_` et référencés dans `pack.json`.

Projet Node.js + `docx` qui régénère le manuel à partir des données de contenu.

```
src/builders.js         fonctions docx (méta-table, table 6 colonnes, exercices, leçon, figures, mini-tableaux)
src/seance-generator.js fiche I/II/III (durées 15/90/15 min) + leçon + section EXERCICES
src/data-unite1.js      séances 1 à 6   (Unité 1 — Conditions et caractères de l'économie)
src/data-unite2.js      séances 7 à 14  (Unité 2 — Activités agricoles)
src/data-unite3.js      séances 15 à 20 (Unité 3 — Activités industrielles)
src/data-unite4.js      séances 21 à 26 (Unité 4 — Transports, commerce, tourisme)
src/data-annexes.js     sujets d'examen par unité, glossaire, bibliographie
src/illustrations.js    SVG → PNG (sharp) : cartes schématiques et graphiques
src/assemble.js         couverture → avant-propos → mode d'emploi → sommaire (signets) → tableau de bord → unités → annexes
src/verify.js           vérifications obligatoires du skill (sectPr, ns0, fiches=séances, 6 colonnes, Oral, BEPC, doubles espaces, signets↔liens…)
```

Commandes :
```bash
npm install                      # docx, sharp, adm-zip
node src/illustrations.js        # régénère assets/*.png
node src/assemble.js             # manuel complet → output/Manuel_Geographie_3e_V2.docx
ONLY=U3 node src/assemble.js     # une seule unité (suffixe _U3), pratique pour relire
node src/verify.js output/Manuel_Geographie_3e_V2.docx
```

Décisions validées avec l'utilisateur (voir conversation) :
- Skill v18 + règles illustrations v19 ; corrigé rose saumon `#E9704F` ; français uniquement.
- 26 séances alignées sur le programme officiel 2015 (6 + 8 + 6 + 6 semaines × 2 h).
- **Pas de matériel requis** : le document de chaque séance est un tableau recopié au tableau noir ; la méthode « commentaire de documents » est une note facultative dans la colonne Observation et dans le Mode d'emploi.
- Données actualisées et sourcées (INSTAT RGPH-3, PNUD, Banque mondiale, OMC/WITS, ITIE) → bibliographie.
- Dans les données, `| a | b |` sur des lignes consécutives = tableau imbriqué dans la cellule ; `**mot**` = mot-clé coloré (bleu dans la leçon, saumon dans les corrigés).

Contenu : 26 séances × (fiche 6 colonnes + leçon 400-650 mots + 4 exercices corrigés), 4 sujets d'examen (étude de document + devoir composé), glossaire 55 entrées, bibliographie 17 rubriques, table des illustrations. `node src/verify.js` doit afficher « TOUTES LES VÉRIFICATIONS PASSENT ».
