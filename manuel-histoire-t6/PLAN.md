# PLAN — Manuel HISTOIRE T6 (français) — J-Learn

Source unique : PE T6 (MEN), section Histoire (pages 150-162 du PDF), rédigée en français.
Volume officiel : 2 heures par semaine. 4 thématiques = 4 unités.
Version française recréée au standard V3 (qualité Math T5-T9) ; la version malgache
(manuel-tantara-t6) reste inchangée et disponible.

**Standard V3** : corps 12 pt Times, marges élargies ; par séance = fiche de préparation
(squelette FRP, sans durée chiffrée, sans image) + leçon (scène aquarelle en tête +
définitions rigoureuses en gras + « Autrement dit » + frise/schéma/carte SVG exacte +
« Erreur à éviter ») + encadré « Le savais-tu ? » + exercices (lettrage a, b, d, e —
jamais c) + corrigés détaillés. Par unité : révision (tableau + questions) + sujet
d'examen 5 exercices / 20 points (questions de cours, repères chronologiques, étude de
document, réflexion organisée). Annexes : glossaire, repères chronologiques, méthodes,
auto-évaluation, index, évaluations, bibliographie/webographie.

**Cover** : `assets/cover_histoire_t6.png` — cover Tantara T6 existante, titre
« HISTOIRE T6 », Édition 2026.

**RAG du programme** : 1. caractériser une période en utilisant des représentations du
temps et de l'espace ; 2. exploiter et reconstituer une trace du passé à partir de
sources historiques ; 3. interpréter une réalité sociale.

## Unité I — L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE (4 h) — curiosité et esprit critique, goût de l'effort
1. Qu'est-ce que l'Histoire ? (définition, objet d'étude : faits, civilisations, guerres, sociétés, lois, personnages)
2. La démarche historique (recherche et classement des sources, contrôle et vérification, extraction, analyse et interprétation ; utilité et rôle de l'Histoire)
3. La chronologie : le temps et l'espace en Histoire (unités de mesure du temps, frise, calendriers grégorien et musulman, quand ? et où ?)
4. Les sources historiques et leurs caractéristiques (matérielles, figuratives, vestiges, écrites, orales, photographiques, audiovisuelles)
+ 5. Révision · 6. Sujet d'examen

## Unité II — MADAGASCAR DEPUIS L'INDÉPENDANCE (13 h) — union nationale et patriotisme
1. La Première République (1958-1972) : nom, devise, drapeau, hymne, Philibert Tsiranana
2. La transition 1972-1975 (Ramanantsoa, Ratsimandrava, Andriamahazo ; les événements de 1972)
3. La Deuxième République (1975-1993) : Ratsiraka, boky mena, malgachisation
4. La Troisième République (1993-2010) : Zafy, Ratsirahonana, Ratsiraka, Ravalomanana ; les deux périodes
5. La Quatrième République (depuis 2010) : transition 2009-2013, Rajaonarimampianina, Rajoelina
6. Les institutions des Républiques (pouvoirs exécutif, législatif, judiciaire ; comparaison)
7. Les politiques et principes de base des Républiques successives
8. Le changement fréquent de dirigeants : facteurs et impacts (crises 1972, 1991, 2002, 2009)
+ 9. Révision · 10. Sujet d'examen

## Unité III — LES RELATIONS DE MADAGASCAR AVEC LES PAYS AFRICAINS ET LES ÎLES DE L'OCÉAN INDIEN (6 h) — savoir vivre ensemble
1. Les formes de relations : bilatérales et multilatérales (diplomatique, militaire, économique, commerciale, culturelle, technique)
2. L'OUA/Union Africaine et la Commission de l'océan Indien (COI)
3. Le COMESA et la SADC (libre-échange, pays membres, cartes)
4. L'impact de l'adhésion de Madagascar (politique, économique, socio-culturel)
+ 5. Révision · 6. Sujet d'examen

## Unité IV — LE PATRIMOINE ET LES RICHESSES NATURELLES NATIONALES (4 h) — respect des biens communs et de l'environnement
1. Les catégories de patrimoine : matériel et immatériel
2. Les richesses naturelles nationales (fossiles, faune, flore, hydrographie, ressources énergétiques)
3. La protection et l'entretien des patrimoines et des richesses naturelles
4. Les avantages de la protection (économiques, sociaux, culturels)
+ 5. Révision · 6. Sujet d'examen

**Total : 20 séances d'apprentissage + 4 révisions + 4 examens = 28 fiches.**

## Production
- `src/engine.js` (V3 histoire), `src/figlib.js` (frises/SVG), `src/unit1..4.js`, `src/merge.py`
- Scènes : `assets/scenes/u{u}s{i}.jpg` (aquarelle, Madagascar, sans texte)
- Figures : frises chronologiques, schémas d'institutions, cartes simplifiées, tableaux comparatifs
- Livrable : `livrables/Manuel_Histoire_T6_JLearn_V1.docx`
