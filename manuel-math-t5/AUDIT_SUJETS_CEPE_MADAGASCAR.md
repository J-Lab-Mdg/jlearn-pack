# Audit des formats de sujets Mathématiques — Madagascar / CEPE

## Pourquoi l’ancienne série ne convenait pas

L’ancienne génération répétait presque toujours la même matrice : addition, soustraction, multiplication, division, fraction, conversion. Les nombres changeaient, mais la compétence évaluée et l’ordre des questions restaient presque identiques. Pour un enfant, cela donne vingt fois le même sujet.

## Formats repérés dans le recueil local `34-sujets-cepe_compress.pdf`

Les épreuves de Toliara consultées montrent plusieurs familles distinctes.

### Épreuves « Opérations »

- opération posée directe : addition, soustraction, multiplication, division ;
- plusieurs termes décimaux à additionner ;
- terme manquant : `3 075 kg + … = 3 890 kg` ;
- diviseur, quotient ou facteur manquant ;
- conversion suivie d’une opération : `7,548 t + 14 kg` ;
- soustraction ou multiplication de durées en heures, minutes et secondes ;
- fractions de même dénominateur ;
- fraction d’une somme d’argent ou d’une masse ;
- prix proportionnel : prix d’un kilogramme, d’un litre ou d’un mètre ;
- périmètre d’un carré et recherche du côté ;
- aire d’un rectangle ;
- hauteur d’un triangle à partir de l’aire et de la base ;
- division avec unité et reste interprété.

### Épreuves « Problème »

Les problèmes comportent généralement plusieurs questions liées :

- champ ou rizière : périmètre, aire, rendement, récolte ;
- vente de récolte : masse, fraction gardée, masse vendue, recette ;
- achat : dépense totale, remise, monnaie restante ;
- banque : taux, intérêt, somme retirée ;
- déplacement : durée, distance, vitesse moyenne ;
- clôture : périmètre, porte, longueur de grillage, prix ;
- production et partage : sacs, bidons, sachets, reste ;
- école : groupes d’élèves, fournitures, transport ;
- capacités : litres, hectolitres, mètres cubes, bidons ;
- figures : carré, rectangle, triangle, aire et prix.

## Format de réponse à enseigner

Le corrigé suit maintenant la présentation utilisée dans les sujets malgaches :

| Solution | Résultat | Opération |
|---|---|---|
| étapes de calcul expliquées | nombre avec unité | opération choisie |

Le résultat n’est plus donné seul. L’enfant doit voir :

1. la solution ou les étapes ;
2. le résultat accompagné de son unité ;
3. l’opération qui justifie la démarche.

## Correctif appliqué dans `exams.js`

- 20 sujets d’opérations différenciés par familles et non plus par simple changement de nombres ;
- sujets inspirés des formats observés : terme manquant, durées, conversions, fractions d’une somme, prix proportionnels, géométrie, rendement et division avec reste ;
- 20 sujets de problèmes désormais construits avec trois problèmes liés et une rotation de 20 types de situations ;
- tableaux de correction `Solution | Résultat | Opération` ajoutés pour les 60 problèmes ;
- maintien des schémas verticaux et des flèches pour les opérations qui s’y prêtent.
