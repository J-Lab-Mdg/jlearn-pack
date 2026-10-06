# PLAN — Manuel de Mathématiques T5 (J-Learn, standard V3)

**Classe** : T5 — cinquième année du primaire (CM2), préparation du **CEPE**.
**Source unique** : PE T5 (MEN), section Mathématiques (pages 85–103). Langue : **français**.
**Volume officiel** : 6 h/semaine, 12 séances × 30 min. Composantes et durées du PE :
Nombre 50 h · Opération 45 h · Algèbre 20 h · Géométrie 35 h · Mesure 30 h · Traitement de données 18 h.

**Standard V3** (identique Math T6–T9) : corps 12 pt Times, marges élargies ;
par séance = fiche de préparation (sans durée chiffrée, sans image) + leçon (scène aquarelle
en tête + définition rigoureuse en gras + « Autrement dit » + figure SVG exacte + « Erreur à
éviter ») + page distincte « Le savais-tu ? » + activité concrète + exercices (lettrage a, b,
d, e — jamais c) + corrigés détaillés. Par unité : révision + **sujet d'examen format CEPE**
(5 exercices / 20 points, dans l'esprit de l'épreuve de calcul du CEPE : opérations posées,
conversions, problème de la vie courante). Annexes : glossaire (issu de l'annexe A du PE),
formules, méthodes, auto-évaluation, index, évaluations CEPE, bibliographie/webographie.

**Cover** : `assets/cover_math_t5.png` — template maison, enseignant (même personnage que
MATH T8 / SVT T9), titre « MATH T5 », « Contenu PE », Édition 2026. ✔ générée et validée.

## Unité I — NOMBRE (12 séances) — persévérance ; confiance en soi
1. Lire et écrire les nombres jusqu'à 1 000 000
2. La valeur de position : le tableau de numération
3. Comparer et ordonner avec >, < et =
4. Composer les grands nombres (groupements de 10 000, 25 000, 50 000)
5. Décomposer les nombres de plusieurs façons
6. Représenter les fractions : numérateur et dénominateur
7. Les fractions équivalentes (dénominateurs 2, 3, 4, 5, 6, 8, 10, 100)
8. Comparer et placer des fractions sur la droite numérique
9. Fraction impropre et nombre fractionnaire (jusqu'à 2)
10. Les nombres décimaux jusqu'aux centièmes
11. Comparer et ordonner les décimaux (0,4 = 0,40)
12. Fractions décimales et nombres décimaux
+ 13. Révision · 14. Sujet d'examen format CEPE

## Unité II — OPÉRATION (13 séances) — rigueur ; autonomie
1. Le sens des opérations : ajouter, retirer, réunir, comparer
2. Additionner jusqu'à 1 000 000 (avec et sans retenue)
3. Soustraire jusqu'à 1 000 000 (avec et sans retenue)
4. Vérifier un résultat : preuve et estimation
5. Multiplier : 3 chiffres × 2 chiffres
6. Diviser avec quotient et reste
7. Partage et groupement : le sens de la division
8. Multiplier des fractions (par un entier, par une fraction)
9. Diviser des fractions (par un entier, par une fraction)
10. Additionner et soustraire des nombres décimaux
11. Multiplier et diviser des nombres décimaux
12. La priorité des opérations (avec et sans parenthèses)
13. Le calcul mental : ×10, ×100, ×1 000, doubles, moitiés, compensation
+ 14. Révision · 15. Sujet d'examen format CEPE

## Unité III — ALGÈBRE (7 séances) — esprit de créativité ; goût de l'effort
1. Découvrir les suites et leurs régularités
2. Le rang d'un terme : relier le rang à la quantité
3. Les tableaux de valeurs
4. La correspondance entre deux quantités (proportionnalité intuitive)
5. La règle de trois
6. Le sens du signe égal : des égalités équivalentes
7. Trouver la valeur inconnue (essais systématiques ; prédire le 5e, 10e, 15e terme)
+ 8. Révision · 9. Sujet d'examen format CEPE

## Unité IV — GÉOMÉTRIE (9 séances) — estime de soi ; responsabilité
1. Les angles : aigu, droit, obtus
2. Classer les triangles selon leurs côtés
3. Classer les triangles selon leurs angles
4. Les propriétés des triangles : côtés, sommets, angles
5. Polygones et quadrilatères
6. Tracer avec les outils : règle, équerre, compas
7. Reproduire une figure (quadrillage, échelle simple)
8. Décomposer un quadrilatère en triangles
9. Composer de nouvelles figures par assemblage
+ 10. Révision · 11. Sujet d'examen format CEPE

## Unité V — MESURE (9 séances) — justice ; confiance en soi
1. Les mesures de longueur et leurs conversions
2. Le périmètre des polygones
3. La circonférence du cercle
4. La masse : estimer, mesurer, convertir (jusqu'à la tonne)
5. La capacité : litres et conversions ; le lien avec la masse
6. La mesure du temps : conversions et opérations
7. L'aire du rectangle et du carré
8. L'aire du triangle ; comparer des aires
9. Le volume : cubes unités, cube et pavé droit (cm³)
+ 10. Révision · 11. Sujet d'examen format CEPE

## Unité VI — TRAITEMENT DE DONNÉES (6 séances) — pensée critique ; responsabilité
1. Concevoir une enquête : questions et hypothèses
2. Collecter et organiser : tableaux simples et chronologiques
3. Diagrammes en barres et pictogrammes
4. Interpréter des données
5. Expériences aléatoires et tableaux de dénombrement
6. La probabilité expérimentale
+ 7. Révision · 8. Sujet d'examen format CEPE

**Total : 56 séances d'apprentissage + 6 révisions + 6 examens = 68 fiches.**

## Production
- `src/engine.js` (adapté T9→T5 ✔), `src/figlib.js` ✔, `src/merge.py` (6 unités ✔)
- `src/unitN.js` à écrire (N=1..6) : sessions + figures SVG + scènes aquarelle (1/leçon,
  quota 10 images/tour) + révision + examen CEPE + corrigés
- Build : `node unitN.js` puis `python3 merge.py` → `livrables/Manuel_Mathematiques_T5_JLearn_V1.docx`
- Audits : zip, XML, nb fiches (68), liens internes, pattern « c) » interdit
