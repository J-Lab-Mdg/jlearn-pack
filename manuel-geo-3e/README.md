# Manuel Géographie 3e — J-Learn V2 (Traitement C)

Projet Node.js + `docx` qui régénère le manuel à partir des données de contenu.

```
src/builders.js         fonctions docx (méta-table, table 6 colonnes, exercices, leçon, figures, mini-tableaux)
src/seance-generator.js fiche I/II/III (durées 15/90/15 min) + leçon + section EXERCICES
src/data-unite1.js      contenu des séances 1 à 6   (Unité 1 — livrée)
src/data-unite2.js      séances 7 à 14  (Unité 2 — à faire)
src/data-unite3.js      séances 15 à 20 (Unité 3 — à faire)
src/data-unite4.js      séances 21 à 26 (Unité 4 — à faire)
src/data-annexes.js     sujets d'examen par unité, glossaire, bibliographie
src/illustrations.js    SVG → PNG (sharp) : cartes schématiques et graphiques
src/assemble.js         couverture → avant-propos → mode d'emploi → sommaire (signets) → tableau de bord → unités → annexes
src/verify.js           vérifications obligatoires du skill (sectPr, ns0, fiches=séances, 6 colonnes, Oral, BEPC, doubles espaces, signets↔liens…)
```

Commandes :
```bash
npm install                      # docx, sharp, adm-zip
node src/illustrations.js        # régénère assets/*.png
ONLY=U1 node src/assemble.js     # livrable partiel (suffixe _U1) ; sans ONLY = manuel complet
node src/verify.js output/Manuel_Geographie_3e_V2_U1.docx
```

Décisions validées avec l'utilisateur (voir conversation) :
- Skill v18 + règles illustrations v19 ; corrigé rose saumon `#E9704F` ; français uniquement.
- 26 séances alignées sur le programme officiel 2015 (6 + 8 + 6 + 6 semaines × 2 h).
- **Pas de matériel requis** : le document de chaque séance est un tableau recopié au tableau noir ; la méthode « commentaire de documents » est une note facultative dans la colonne Observation et dans le Mode d'emploi.
- Données actualisées et sourcées (INSTAT RGPH-3, PNUD, Banque mondiale, OMC/WITS, ITIE) → bibliographie.
- Dans les données, `| a | b |` sur des lignes consécutives = tableau imbriqué dans la cellule ; `**mot**` = mot-clé coloré (bleu dans la leçon, saumon dans les corrigés).
