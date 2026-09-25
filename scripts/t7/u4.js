/* ===== T7 — UNITÉ IV : GÉOMÉTRIE (13 séances : 11 leçons + révision + examen) =====
   RAS PE : triangles particuliers (illustration, construction) ; droite graduée et repère
   orthogonal ; angles (12 sortes + sécante) ; droites remarquables du triangle
   (médiatrice/circonscrit, médiane/centre de gravité, hauteur/orthocentre, bissectrice/inscrit). */
const { loadFig, loadScene, buildDoc } = require('./lib');
const fs = require('fs');
const F = n => loadFig('t7u4s'+n);
const SC = n => loadScene('t7_scene_u4_'+n);

function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel de géométrie.', 'Annonce de la leçon et du plan.', 'Manuel, tableau, règle, équerre, compas.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent la leçon précédente.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, décrivent les formes.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Observent, tracent, mesurent, vérifient.', 'Approche participative ; démonstration au tableau.', 'Règle, équerre, compas, rapporteur.', 'Constructions vérifiées'],
  ['Vérification', 'Exercices 1 à 3 (application directe).', 'Résolvent seuls, corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée']
 ];
}

const lecons = [];

/* ---------- SÉANCE 1 / LEÇON 1 ---------- */
lecons.push({n:1, t:'Illustrer les triangles particuliers', notion:'Géométrie — triangle rectangle, isocèle, équilatéral',
 goal:'nommer un triangle par ses sommets et illustrer les trois familles de triangles particuliers',
 prereq:'lignes, segments et vocabulaire du dessin géométrique vus à la classe précédente',
 motivation:'une charpente de maison : des triangles partout — à angle droit, à deux bois égaux, à trois bois égaux',
 activites:'1. Compter sommets et côtés.\n2. Mesurer les côtés à la règle.\n3. Lire les marques d’égalité et le carré d’angle droit.\n4. Nommer chaque triangle.',
 scene:SC('mur'),
 concept:[
  'Un triangle a trois côtés et trois sommets ; on le nomme par ses sommets en majuscules : le triangle ABC.',
  'Triangle rectangle : un angle droit (90°) ; le côté devant cet angle, l’hypoténuse, est le plus long.',
  'Triangle isocèle : deux côtés égaux, et deux angles égaux à la base ; triangle équilatéral : trois côtés égaux, trois angles de 60°.',
  'Sur un dessin, les marques identiques (petits traits, petits arcs) signalent les mesures égales ; l’angle droit se marque d’un petit carré.',
  'On peut toujours mesurer les côtés à la règle, même sans connaître les angles.'
 ],
 figs:[
  [F('1_trois'),520,224,'Fig. 1 — Les trois familles de triangles particuliers.'],
  [F('1_vocab'),520,224,'Fig. 2 — Sommets, côtés et angles d’un triangle.'],
  [F('1_valide'),520,224,'Fig. 3 — Les marques d’égalité sur les dessins.']
 ],
 method:['Observer les marques : traits égaux pour les côtés, arcs pour les angles, carré pour le droit.',
  'Compter les côtés égaux ou repérer l’angle droit.',
  'Nommer le triangle : rectangle, isocèle ou équilatéral.'],
 example:'Un triangle a un angle droit et deux côtés de 3 cm.',
 worked:'C’est un triangle rectangle et isocèle : il n’est pas interdit de porter deux qualités à la fois.',
 error:['Dire « équilatéral » dès que deux côtés semblent égaux.','On ne juge pas à l’œil : on lit les marques d’égalité ou on mesure.'],
 app:['Citer le nom complet du triangle dont les sommets sont A, B, C.',
  'Compléter : un triangle rectangle a exactement … angle droit ; un triangle équilatéral a … côtés égaux ; ses angles mesurent chacun … °.',
  'Classer : un triangle sans angle droit avec deux côtés de 5 cm ; un triangle avec trois côtés de 4 cm ; un triangle marqué d’un angle droit.'],
 ans:['Le triangle ABC : on cite les trois sommets en majuscules.',
  'Un ; trois ; 60°. (3 × 60° = 180° pour les trois angles.)',
  'Isocèle ; équilatéral ; rectangle. Les marques d’égalité décident.']});

/* ---------- SÉANCE 2 / LEÇON 2 ---------- */
lecons.push({n:2, t:'Construire les triangles particuliers', notion:'Géométrie — constructions à la règle, à l’équerre et au compas',
 goal:'construire un triangle rectangle, isocèle ou équilatéral à partir de mesures données',
 prereq:'leçon 1 — les trois familles de triangles particuliers',
 motivation:'sur le chantier naval, le charpentier trace les membrures triangulaires de la pirogue : règle, équerre, compas — trois gestes précis',
 activites:'1. Tracer l’angle droit à l’équerre.\n2. Reporter une longueur au compas.\n3. Faire se croiser deux arcs de même rayon.\n4. Marquer les égalités obtenues.',
 scene:SC('pirogue'),
 concept:[
  'Construire, c’est matérialiser les propriétés : l’angle droit à l’équerre pour le rectangle, des côtés de même longueur au compas pour l’isocèle et l’équilatéral.',
  'Triangle rectangle : tracer un angle droit, placer les sommets sur ses côtés, joindre le dernier segment — c’est l’hypoténuse.',
  'Triangle isocèle ou équilatéral : à partir de la base, tracer deux arcs de même rayon qui se croisent ; le croisement est le dernier sommet.',
  'On termine toujours en marquant les égalités, puis on vérifie à la règle et à l’équerre.'
 ],
 figs:[
  [F('2_rect'),520,224,'Fig. 1 — Construire un triangle rectangle en trois gestes.'],
  [F('2_iso'),520,224,'Fig. 2 — Isocèle au compas : même rayon depuis A et B.'],
  [F('2_equi'),520,224,'Fig. 3 — Équilatéral : rayon égal à AB des deux côtés.']
 ],
 method:['Tracer la base ou l’angle droit selon le triangle demandé.',
  'Reporter le (ou les) rayon(s) au compas ; marquer le croisement des arcs.',
  'Relier les sommets, marquer les égalités, vérifier à la règle et à l’équerre.'],
 example:'ABC rectangle en A avec AB = 4 cm, AC = 3 cm.',
 worked:'Équerre en A : [AB] de 4 cm, [AC] de 3 cm perpendiculaires ; on joint [BC]. La règle mesure alors BC ≈ 5 cm.',
 error:['Changer l’ouverture du compas entre les deux arcs.','Le rayon reste figé des deux côtés : c’est lui qui garantit l’égalité des côtés.'],
 app:['Construire ABC rectangle en A, AB = 5 cm, AC = 3 cm ; mesurer BC.',
  'Construire DEF isocèle en E, base DF = 6 cm, DE = EF = 4 cm.',
  'Construire GHI équilatéral de côté 5 cm ; vérifier l’angle de chaque sommet au rapporteur.'],
 ans:['Angle droit en A, deux côtés mesurés, [BC] joint : BC ≈ 5,8 cm.',
  'Arcs de 4 cm piqués en D puis en F : le croisement donne E.',
  'Rayon 5 cm des deux côtés : chaque angle mesure environ 60°.']});

/* ---------- SÉANCE 3 / LEÇON 3 ---------- */
lecons.push({n:3, t:'Se repérer sur une droite graduée', notion:'Géométrie — origine, unité, abscisse ; positifs et négatifs',
 goal:'lire et placer l’abscisse d’un point sur une droite graduée',
 prereq:'comptage positif et négatif, sens de lecture habituel',
 motivation:'la jetée du village : des piquets régulièrement espacés, un premier piquet repère — on avance à droite ou à gauche en comptant les pas',
 activites:'1. Repérer l’origine et l’unité.\n2. Lire les abscisses de points repérés.\n3. Placer des points dont on donne l’abscisse, même décimale.\n4. Compter les pas entre deux points.',
 scene:SC('jete'),
 concept:[
  'Une droite graduée porte une origine O (le zéro) et une unité (le pas, toujours le même) ; on lit vers la droite dans le sens croissant.',
  'À droite de O : les nombres positifs, notés + ; à gauche : les négatifs, notés −.',
  'L’abscisse d’un point est le nombre qui le repère : A(−2), B(+1) ; l’origine porte l’abscisse 0.',
  'Placer un nombre : partir de O, choisir le côté selon le signe, avancer de la valeur ; entre deux graduations on partage le pas (−1,5 vit au milieu de −1 et −2).'
 ],
 figs:[
  [F('3_adj'),520,224,'Fig. 1 — Origine, unité et points placés.'],
  [F('3_placer'),520,224,'Fig. 2 — Placer C d’abscisse −1,5 au milieu du pas.'],
  [F('3_marche'),520,224,'Fig. 3 — Départ −3, quatre pas vers la droite : arrivée +1.']
 ],
 method:['Chercher le signe : il donne le côté de O.',
  'Compter les pas entiers dans ce sens.',
  'Placer la partie décimale entre deux graduations.'],
 example:'Aller de −3 à +1.',
 worked:'Quatre pas vers la droite : −3 + 4 = +1, on compte les pas sur la ligne, pas les graduations.',
 error:['Compter les graduations de départ au lieu des pas parcourus.','De −3 à +1 on compte 4 pas : on ne compte pas le point de départ.'],
 app:['Sur une droite graduée : placer A(+3), B(−4), C(+1), D(−2,5).',
  'Quelle est l’abscisse de l’origine ? Que vaut le déplacement de −3 jusqu’à +1 ?',
  'Ranger du plus petit au plus grand : +2, −4, 0, −1,5.'],
 ans:['+3 : trois pas à droite ; −4 : quatre pas à gauche ; +1 : un pas à droite ; −2,5 : au milieu de −2 et −3.',
  'L’origine porte 0 ; le trajet −3 → +1 compte 4 pas vers la droite.',
  '−4 < −1,5 < 0 < +2 : les négatifs décroissent vers la gauche.']});

/* ---------- SÉANCE 4 / LEÇON 4 ---------- */
lecons.push({n:4, t:'Se repérer dans un repère orthogonal', notion:'Géométrie — abscisse et ordonnée (cas positifs)',
 goal:'lire et placer les coordonnées d’un point dans un repère orthogonal',
 prereq:'leçon 3 — la droite graduée',
 motivation:'la carte murale de la classe avec sa grille : pour trouver le village, on compte d’abord vers la droite, puis vers le haut',
 activites:'1. Croiser deux droites graduées à angle droit.\n2. Lire les coordonnées de points marqués.\n3. Placer des points à coordonnées données avec leurs guides.',
 scene:SC('carte'),
 concept:[
  'Un repère orthogonal croise deux droites graduées à angle droit, qui partagent l’origine O.',
  'L’axe horizontal (Ox) donne l’abscisse ; l’axe vertical (Oy) donne l’ordonnée ; un point se nomme M (x ; y) : abscisse d’abord, ordonnée ensuite.',
  'Pour lire : abaisser une verticale vers (Ox), puis une horizontale vers (Oy).',
  'Pour placer : tracer le guide vertical de l’abscisse et le guide horizontal de l’ordonnée ; le point vit au croisement.'
 ],
 figs:[
  [F('4_repere'),520,224,'Fig. 1 — Le repère orthogonal et le point M (3 ; 2).'],
  [F('4_lire'),520,224,'Fig. 2 — Lire A (2 ; 1), B (4 ; 0), C (1 ; 2).'],
  [F('4_placer'),520,224,'Fig. 3 — Placer N (4 ; 2) avec les guides.']
 ],
 method:['Compter d’abord sur l’axe horizontal : c’est l’abscisse.',
  'Monter ou descendre jusqu’au point : c’est l’ordonnée.',
  'Écrire (x ; y) dans cet ordre, séparés par un point-virgule.'],
 example:'Placer N (4 ; 2).',
 worked:'4 pas à droite sur (Ox), guide vertical ; 2 pas en hauteur, guide horizontal : N est au croisement.',
 error:['Échanger l’ordre : placer (2 ; 4) au lieu de (4 ; 2).','L’abscisse d’abord, l’ordonnée ensuite : (4 ; 2) n’est pas (2 ; 4).'],
 app:['Lire les coordonnées de A (point à 2 en x, 1 en y), B (4 en x, 0 en y), C (1 en x, 2 en y).',
  'Placer P(2 ; 3), Q(5 ; 1), R(0 ; 4).',
  'Expliquer la différence entre (2 ; 5) et (5 ; 2) ; où se trouve un point d’ordonnée 0 ?'],
 ans:['A (2 ; 1) ; B (4 ; 0) ; C (1 ; 2). Abscisse d’abord.',
  'Guides tracés puis points posés au croisement ; R est sur l’axe (Oy).',
  'Ce sont deux points différents : l’un monte 5 au-dessus de 2, l’autre 2 au-dessus de 5 ; une ordonnée nulle place le point sur l’axe (Ox).']});

/* ---------- SÉANCE 5 / LEÇON 5 ---------- */
lecons.push({n:5, t:'Les sortes d’angles', notion:'Géométrie — nul, aigu, droit, obtus, plat, rentrant, plein ; mesure au rapporteur',
 goal:'nommer et reconnaître les sortes d’angles et mesurer au rapporteur en degrés',
 prereq:'l’angle droit déjà rencontré ; l’équerre',
 motivation:'la voile triangulaire de la pirogue : le cordage ouvre plus ou moins l’angle avec le mât — chaque ouverture a un nom',
 activites:'1. Ouvrir deux règles autour d’un sommet.\n2. Comparer au droit de l’équerre, puis au plat.\n3. Nommer chaque ouverture.\n4. Mesurer 40° au rapporteur.',
 scene:SC('voile'),
 concept:[
  'Un angle a un sommet et deux côtés ; on note xÔy l’angle de sommet O, et on le mesure en degrés (°).',
  'Nul : 0° ; aigu : entre 0° et 90° ; droit : exactement 90° ; obtus : entre 90° et 180° ; plat : 180° (la ligne droite) ; rentrant : entre 180° et 360° ; plein : 360° (le tour complet).',
  'Pour ranger des angles, on compare toujours d’abord au droit de l’équerre, puis au plat.',
  'Mesurer au rapporteur : centre sur le sommet, zéro sur un côté, lire le nombre visé par l’autre côté.'
 ],
 figs:[
  [F('5_occ'),520,224,'Fig. 1 — Aigu, obtus, rentrant : les trois ouvertures.'],
  [F('5_24'),520,224,'Fig. 2 — Les quatre angles de référence : 0°, 90°, 180°, 360°.'],
  [F('5_mesure'),520,224,'Fig. 3 — Mesurer 40° au rapporteur.']
 ],
 method:['Comparaison : l’angle est-il plus petit que le droit ? que le plat ?',
  'Nommer selon les bornes (0°, 90°, 180°, 360°).',
  'Mesure : centre sur le sommet, zéro sur un côté, lecture sur le bon cercle.'],
 example:'Angle de 40°.',
 worked:'40° est plus petit que 90° : c’est un angle aigu ; au rapporteur, le côté vise le 40 en partant du zéro.',
 error:['Lire la mauvaise graduation du rapporteur (140° au lieu de 40°).','On lit la graduation qui part du zéro posé sur le côté.'],
 app:['Nommer l’angle : 30°, 120°, l’angle droit.',
  'Ranger par grandeur croissante : 45°, 170°, 90°, 5°.',
  'Donner la famille de : 80°, 95°, 180° ; compléter : l’angle plein vaut … °.'],
 ans:['Aigu, obtus, droit. 30° < 90°, 120° > 90°.',
  '5° < 45° < 90° < 170° : aigu, aigu, droit, obtus.',
  'Aigu, obtus, plat ; 360°. Le tour complet compte 360°.']});

/* ---------- SÉANCE 6 / LEÇON 6 ---------- */
lecons.push({n:6, t:'Angles complémentaires, supplémentaires, opposés', notion:'Géométrie — couples d’angles',
 goal:'caractériser les couples d’angles et calculer les angles manquants',
 prereq:'leçon 5 — les sortes d’angles',
 motivation:'deux rames croisées sur le pont de la barque forment un X : les angles face à face sont égaux, les angles voisins se complètent',
 activites:'1. Joindre deux angles pour former le droit, puis le plat.\n2. Croiser deux droites et mesurer les quatre angles.\n3. Calculer les angles manquants.',
 scene:SC('barque'),
 concept:[
  'Deux angles complémentaires ont une somme de 90° : ensemble ils forment un angle droit.',
  'Deux angles supplémentaires ont une somme de 180° : ensemble ils forment une ligne droite.',
  'Deux droites qui se croisent forment des angles opposés par le sommet : ces angles sont égaux, et les quatre angles formés totalisent 360°.',
  'On vérifie toujours le total : 90°, 180° ou 360° selon la figure.'
 ],
 figs:[
  [F('6_90'),520,224,'Fig. 1 — Complémentaires : 35° + 55° = 90°.'],
  [F('6_180'),520,224,'Fig. 2 — Supplémentaires : 70° + 110° = 180°.'],
  [F('6_opp'),520,224,'Fig. 3 — Opposés par le sommet : ils sont égaux.']
 ],
 method:['Repérer la figure : angle droit, ligne droite ou croisement ?',
  'Choisir la somme : 90°, 180° ou 360°.',
  'Soustraire l’angle connu pour trouver l’angle manquant.'],
 example:'Deux droites sécantes forment un angle de 40°.',
 worked:'L’opposé vaut 40° ; les deux autres : (360° − 2 × 40°) : 2 = 140° chacun.',
 error:['Chercher le complémentaire quand la figure exige le supplémentaire : 90° − 64° au lieu de 180° − 64°.','Une ligne droite = 180° ; un angle droit = 90° : regarder la figure avant de soustraire.'],
 app:['Angle de 64° : quel angle le complète à 90° ? À 180° ?',
  'Deux droites sécantes font un angle de 72° : donner les trois autres.',
  'Vrai ou faux : « deux angles aigus peuvent être supplémentaires » — justifier.'],
 ans:['90° − 64° = 26° ; 180° − 64° = 116°. Selon le couple visé.',
  '72°, 108°, 108° : opposés égaux, supplémentaires = 180° − 72°.',
  'Faux : deux aigus restent chacun sous 90°, leur somme ne peut pas atteindre 180°.']});

/* ---------- SÉANCE 7 / LEÇON 7 ---------- */
lecons.push({n:7, t:'Angles formés par deux droites et une sécante', notion:'Géométrie — alternes-internes, alternes-externes, correspondants',
 goal:'reconnaître les paires d’angles formés par une sécante et prévoir leur égalité',
 prereq:'leçon 6 — les couples d’angles',
 motivation:'une longue corde traversée au-dessus de deux pirogues alignées : les mêmes ouvertures reviennent aux deux rencontres',
 activites:'1. Tracer deux droites et une sécante ; numéroter les huit angles.\n2. Repérer l’intérieur et l’extérieur.\n3. Chercher les angles en Z (alternes) et en F (correspondants).\n4. Mesurer pour vérifier les égalités.',
 scene:SC('piroso'),
 concept:[
  'Une sécante qui croise deux droites forme huit angles, en deux sommets.',
  'Alternes-internes : entre les deux droites, de part et d’autre de la sécante ; alternes-externes : en dehors des droites, de part et d’autre.',
  'Correspondants : même côté de la sécante, même place sur chaque droite.',
  'Propriété : les angles d’une même paire sont égaux ; cette propriété servira à reconnaître et à construire des droites parallèles.'
 ],
 figs:[
  [F('7_altint'),520,224,'Fig. 1 — Alternes-internes en vis-à-vis, 55° chacun.'],
  [F('7_corr'),520,224,'Fig. 2 — Correspondants à la même place, 55° chacun.'],
  [F('7_huit'),520,224,'Fig. 3 — Les huit angles numérotés et les paires égales.']
 ],
 method:['Numéroter les quatre angles de chaque sommet.',
  'Écrire le côté de la sécante et la place (intérieur ou extérieur).',
  'Comparer les positions : vis-à-vis → alternes ; même place → correspondants.'],
 example:'Angles 3 et 5 de la figure 3.',
 worked:'Entre les deux droites, de part et d’autre de la sécante : ils sont alternes-internes, donc égaux.',
 error:['Confondre alternes et correspondants : même côté de la sécante ? vis-à-vis ?','Alternes = de part et d’autre ; correspondants = même côté, même place.'],
 app:['Sur la figure 3 : citer l’alterne-interne de l’angle 5, puis le correspondant de l’angle 2.',
  'Si l’angle 2 mesure 55°, que valent l’angle 6 et l’angle 3 ?',
  'Citer une paire d’angles extérieurs de la figure ; compléter : les angles d’une même paire sont ….'],
 ans:['L’angle 3 (intérieur, de l’autre côté) ; l’angle 6 (même place sur la deuxième droite).',
  '6 = 55° (correspondants) ; 3 = 55° : 3 et 5 alternes-internes, 5 = 2 en correspondants. On peut aussi mesurer.',
  'Angles 1 et 8 (ou 2 et 7) : alternes-externes ; égaux.']});

/* ---------- SÉANCE 8 / LEÇON 8 ---------- */
lecons.push({n:8, t:'Triangle, quadrilatères et autres polygones', notion:'Géométrie — galerie des polygones par nombre de côtés',
 goal:'reconnaître et nommer les polygones usuelles d’après leur nombre de côtés',
 prereq:'leçon 1 — le triangle ; dessin géométrique élémentaire',
 motivation:'la façade de la maison : toit triangulaire, murs rectangulaires, fenêtres carrées, clôture hexagonale — le nom vient du nombre de côtés',
 activites:'1. Compter les côtés des formes de la façade.\n2. Classer les polygones selon leur nombre de côtés.\n3. Comparer les cinq quadrilatères de référence.',
 scene:SC('maison'),
 concept:[
  'Un polygone est une figure fermée faite de segments ; son nom vient de son nombre de côtés.',
  '3 → triangle ; 4 → quadrilatère ; 5 → pentagone ; 6 → hexagone ; 7 → heptagone ; 8 → octogone.',
  'Quadrilatères de référence : carré, rectangle, losange, parallélogramme, trapèze ; le carré est à la fois un rectangle et un losange.',
  'Deux segments ne peuvent pas fermer une figure : un polygone demande au minimum trois côtés.'
 ],
 figs:[
  [F('8_galerie'),520,224,'Fig. 1 — Galerie : triangle, quadrilatère, pentagone, hexagone.'],
  [F('8_quadri'),520,224,'Fig. 2 — Les cinq quadrilatères de référence.'],
  [F('8_props'),520,224,'Fig. 3 — Tableau des particularités.']
 ],
 method:['Compter les côtés en marquant chaque segment une seule fois.',
  'Rapporter le nombre à la table des noms.',
  'Pour les quadrilatères, comparer côtés égaux et angles droits pour affiner le nom.'],
 example:'Une figure fermée de cinq segments.',
 worked:'Cinq côtés → pentagone ; on vérifie que la ligne est bien fermée.',
 error:['Compter deux fois le côté de départ et conclure « hexagone » au lieu de pentagone.','On marque chaque côté une seule fois avant de nommer.'],
 app:['Nommer : figure à 5 côtés ; figure à 8 côtés.',
  'Citer trois quadrilatères à côtés opposés égaux.',
  'Vrai ou faux : « un carré est un trapèze » ; « un polygone peut avoir 2 côtés » — justifier.'],
 ans:['Pentagone ; octogone.',
  'Rectangle, parallélogramme, losange (et le carré).',
  'Faux : le trapèze n’a qu’un couple de côtés parallèles, le carré en a deux ; faux : deux segments ne ferment pas une figure, trois au minimum.']});

/* ---------- SÉANCE 9 / LEÇON 9 ---------- */
lecons.push({n:9, t:'La médiatrice et la hauteur', notion:'Géométrie — droites remarquables du triangle (1/2)',
 goal:'définir et tracer la médiatrice d’un segment et la hauteur d’un triangle ; connaître l’orthocentre',
 prereq:'perpendiculaires, milieux, compas',
 motivation:'le puits du village doit être à égale distance des deux cases : la médiatrice tranche l’énigme',
 activites:'1. Plier la feuille pour faire coïncider A et B : le pli est la médiatrice.\n2. Construire au compas.\n3. Mesurer PA et PB pour un point du pli.\n4. Tracer une hauteur à l’équerre.',
 scene:SC('puits'),
 concept:[
  'La médiatrice d’un segment est la droite perpendiculaire à ce segment qui passe par son milieu.',
  'Tout point de la médiatrice est à égale distance des deux extrémités : PA = PB.',
  'Construction au compas : deux arcs de même rayon (plus grand que la moitié du segment) tracés de part et d’autre ; tracer le croisement.',
  'La hauteur d’un triangle est la perpendiculaire issue d’un sommet au côté opposé ; son pied se note souvent H sur le côté.',
  'Les trois hauteurs d’un triangle se rencontrent en un point : l’orthocentre.'
 ],
 figs:[
  [F('9_med'),520,224,'Fig. 1 — La médiatrice et la propriété PA = PB.'],
  [F('9_haut'),520,224,'Fig. 2 — La hauteur issue de C, pied H sur (AB).'],
  [F('9_trois'),520,224,'Fig. 3 — Les trois hauteurs se rencontrent : l’orthocentre.']
 ],
 method:['Ouvrir le compas à plus de la moitié du segment.',
  'Tracer deux arcs depuis A puis depuis B, sans changer l’ouverture.',
  'Joindre les deux croisements : c’est la médiatrice.'],
 example:'Un puits à égale distance de deux cases A et B.',
 worked:'Tout point de la médiatrice de [AB] convient : PA = PB par propriété ; on construit la médiatrice au compas.',
 error:['Tracer une hauteur qui ne passe pas par le sommet, ou une médiatrice qui oublie le milieu.','Médiatrice : perpendiculaire AU MILIEU ; hauteur : perpendiculaire DEPUIS UN SOMMET.'],
 app:['Tracer [AB] = 6 cm puis sa médiatrice au compas ; placer M dessus et vérifier MA = MB.',
  'Tracer la hauteur issue de C dans un triangle ABC.',
  'Dans un triangle rectangle en A, où se trouve l’orthocentre ? Compléter : la médiatrice coupe le segment en son ….'],
 ans:['Rayon > 3 cm des deux côtés ; M quelconque de la droite : MA = MB toujours.',
  'Équerre passant par C, perpendiculaire à (AB) ; le pied prend le nom H.',
  'En A : l’orthocentre est le sommet de l’angle droit ; milieu.']});

/* ---------- SÉANCE 10 / LEÇON 10 ---------- */
lecons.push({n:10, t:'La médiane et la bissectrice', notion:'Géométrie — droites remarquables du triangle (2/2)',
 goal:'définir et tracer la médiane et la bissectrice ; connaître le centre de gravité',
 prereq:'leçon 9 — médiatrice et hauteur',
 motivation:'partager la lamba en deux en la pliant par son milieu ; couper l’angle du toit en deux parts égales',
 activites:'1. Plier le segment en deux : le milieu.\n2. Plier l’angle sur lui-même : la bissectrice.\n3. Tracer les trois médianes : le point G.\n4. Tracer les trois bissectrices : le point I.',
 scene:SC('partage'),
 concept:[
  'La médiane joint un sommet au milieu du côté opposé ; AM = MB.',
  'La bissectrice partage l’angle en deux angles égaux, prouvés par des marques d’arc identiques.',
  'Les trois médianes se rencontrent en G, le centre de gravité du triangle ; les trois bissectrices se rencontrent en I, lié au cercle inscrit de la leçon suivante.',
  'Médiatrice, hauteur, médiane, bissectrice : quatre droites, quatre rôles — aucune confusion.'
 ],
 figs:[
  [F('10_median'),520,224,'Fig. 1 — La médiane rejoint le sommet et le milieu.'],
  [F('10_bissec'),520,224,'Fig. 2 — La bissectrice partage l’angle en deux égaux.'],
  [F('10_trois'),520,224,'Fig. 3 — Les trois médianes : le centre de gravité G.']
 ],
 method:['Pour la médiane : trouver le milieu du côté (mesure ou pli), puis relier au sommet opposé.',
  'Pour la bissectrice : plier l’angle sur lui-même, ou reporter deux arcs égaux.',
  'Tracer deux droites du même type suffit à obtenir le point de rencontre.'],
 example:'La médiane issue de D dans DEF.',
 worked:'On marque le milieu K de [EF], puis on trace [DK] ; les traits isolés AM = MB prouvent le partage.',
 error:['Tracer la médiane vers n’importe quel point du côté, ou croire que bissectrice = médiatrice.','La médiane vise le MILIEU du côté ; la bissectrice coupe l’ANGLE en deux.'],
 app:['Tracer [EF] = 7 cm, placer le milieu K, tracer la médiane issue du sommet D.',
  'Tracer la bissectrice d’un angle de 64° : que valent les deux angles obtenus ?',
  'Associer : médiane / bissectrice / médiatrice / hauteur ↔ milieu / moitié d’angle / perpendiculaire au milieu / perpendiculaire d’un sommet.'],
 ans:['K à 3,5 cm de E (7 : 2) ; la médiane [DK] part du sommet D.',
  '64° : 2 = 32° chacun : la bissectrice coupe exactement en deux.',
  'Médiane↔milieu ; bissectrice↔moitié d’angle ; médiatrice↔perpendiculaire au milieu ; hauteur↔perpendiculaire d’un sommet.']});

/* ---------- SÉANCE 11 / LEÇON 11 ---------- */
lecons.push({n:11, t:'Cercle circonscrit et cercle inscrit', notion:'Géométrie — les deux cercles associés au triangle',
 goal:'distinguer et construire le cercle circonscrit et le cercle inscrit d’un triangle',
 prereq:'leçons 9 et 10 — médiatrices et bissectrices',
 motivation:'la roue de la charrette à zébu : un cercle qui passe juste sur ses rayons extérieurs, un autre qui touche le moyeu — dehors et dedans',
 activites:'1. Tracer un triangle et deux de ses médiatrices : O.\n2. Tracer le cercle de centre O passant par A ; vérifier B et C.\n3. Tracer deux bissectrices : I ; le cercle de centre I tangent à un côté.',
 scene:SC('roue'),
 concept:[
  'Le cercle circonscrit passe par les trois sommets ; son centre O est le point de rencontre des trois médiatrices : OA = OB = OC = rayon.',
  'Le cercle inscrit touche les trois côtés à l’intérieur ; son centre I est le point de rencontre des trois bissectrices ; le rayon est perpendiculaire à chaque côté.',
  'Deux médiatrices suffisent pour obtenir O, deux bissectrices pour obtenir I ; la troisième confirme le croisement.',
  'Le circonscrit contient le triangle ; l’inscrit est contenu dans le triangle.'
 ],
 figs:[
  [F('11_circ'),520,224,'Fig. 1 — Le cercle circonscrit, centre O des médiatrices.'],
  [F('11_insc'),520,224,'Fig. 2 — Le cercle inscrit, centre I, tangent aux trois côtés.'],
  [F('11_bilan'),520,224,'Fig. 3 — Bilan : quatre droites, quatre points remarquables.']
 ],
 method:['Tracer deux médiatrices (ou deux bissectrices) : le croisement donne O (ou I).',
  'Régler le compas de O à A (ou de I perpendiculairement à un côté).',
  'Tracer le cercle ; vérifier qu’il passe par B et C (ou touche les trois côtés).'],
 example:'Cercle circonscrit à ABC.',
 worked:'Médiatrices de [AB] et [BC] croisées en O ; compas O→A : le cercle passe aussi par B et C.',
 error:['Centrer l’inscrit sur l’orthocentre ou sur G.','L’inscrit vient des BISSECTRICES ; le circonscrit des MÉDIATRICES.'],
 app:['Tracer un triangle, deux médiatrices, placer O et tracer le cercle de centre O passant par A : passe-t-il par B et C ?',
  'Tracer deux bissectrices, placer I, tracer le cercle de centre I tangent à [AB].',
  'Compléter : le centre du cercle inscrit est le point commun des trois …. Pourquoi l’inscrit ne sort-il pas du triangle ?'],
 ans:['Oui : OA = OB = OC par la propriété des médiatrices.',
  'Le rayon de l’inscrit est perpendiculaire au côté : poser l’équerre depuis I sur [AB].',
  'Bissectrices ; chaque côté le retient : il est tangent aux trois, donc arrêté juste au bord.']});

/* ---------- SÉANCE 12 : RÉVISION ---------- */
const revision = {n:12,
 synth:[
  ['Figures usuelles (L1, L8)','Polygones nommés par le nombre de côtés ; triangles rectangle, isocèle, équilatéral','Identifier, illustrer et construire les triangles particuliers'],
  ['Repérage (L3, L4)','Droite graduée : origine, unité, abscisse ; repère orthogonal : (x ; y)','Lire et placer des points, gérer signes et ordre des coordonnées'],
  ['Angles (L5, L6, L7)','Types nul → plein ; complémentaires 90°, supplémentaires 180°, opposés égaux ; paires à la sécante','Mesurer au rapporteur ; calculer les angles manquants'],
  ['Droites remarquables (L9, L10)','Médiatrice, hauteur, médiane, bissectrice : quatre rôles distincts ; orthocentre H et centre de gravité G','Tracer les quatre droites au compas et à l’équerre'],
  ['Cercles du triangle (L11)','Circonscrit : centre O (médiatrices) ; inscrit : centre I (bissectrices)','Construire les deux cercles et les distinguer']],
 questions:[
  'Comment appelle-t-on un triangle à trois côtés égaux ? Que valent ses angles ?',
  'Deux angles complémentaires : quelle somme ?',
  'Deux droites sécantes forment un angle de 35° : que vaut l’angle opposé ? Et son voisin ?',
  'Quel est le point de rencontre des médianes ?',
  'Pour placer M (3 ; 2) dans un repère, par quoi commence-t-on ?',
  'Quelle droite est perpendiculaire à un segment en son milieu ?',
  'Comment s’obtient le centre du cercle circonscrit ? Et celui du cercle inscrit ?',
  'Nommer un polygone à 6 côtés, puis à 8 côtés.',
  'Sur une sécante, où sont les angles alternes-internes ?'],
 reponses:[
  'Équilatéral ; chaque angle vaut 60° (3 × 60° = 180°).',
  '90° — ensemble ils forment un angle droit.',
  'L’opposé vaut 35° (opposés : égaux) ; le voisin 180° − 35° = 145° (supplémentaires).',
  'G, le centre de gravité du triangle.',
  'Par l’abscisse x = 3 sur l’axe horizontal, puis l’ordonnée y = 2 à la verticale.',
  'La médiatrice — et tout point dessus est à égale distance des extrémités.',
  'Par les trois médiatrices (centre O) ; par les trois bissectrices (centre I).',
  'Hexagone ; octogone.',
  'Entre les deux droites, de part et d’autre de la sécante ; ils sont égaux.'],
 error:['Confondre les quatre droites remarquables du triangle.','Fiche-mémo : pour chacune nom + rôle + construction (médiatrice au compas, hauteur à l’équerre, médiane au milieu, bissectrice au pli).'],
 meth:'Avant l’examen : se relire les quatre droites du triangle (nom, rôle, point de rencontre, cercle associé) et vérifier une construction au compas de chaque type.'};

/* ---------- SÉANCE 13 : EXAMEN ---------- */
const exam = {n:13,
 bareme:'Examen de l’unité IV — Géométrie. Durée : 1 heure. Total 20 points : 5 exercices de 4 points.',
 exos:[
  'Figures et polygones (4 pts) : (a) nommer le polygone à 5 côtés ; (b) citer deux quadrilatères à côtés opposés égaux ; (c) quel triangle a trois angles de 60° ? (d) nommer le polygone à 8 côtés.',
  'Sur la droite graduée (4 pts) : droite d’origine O. (a) placer A(+3) et B(−2) ; (b) abscisse du point à cinq pas à gauche de O ; (c) pas de −2 jusqu’à +3 ; (d) ranger : +1, −3, 0, +2 (croissant).',
  'Dans le repère orthogonal (4 pts) : (a) coordonnées de M si x = 2 et y = 4 ; (b) placer P(5 ; 1) ; (c) ce qui distingue (3 ; 3) de (6 ; 3) ; (d) Q d’ordonnée 0 : sur quel axe ?',
  'Angles (4 pts) : (a) un angle de 90° s’appelle… ; (b) le complémentaire de 30° ; (c) le supplémentaire de 65° ; (d) deux droites sécantes, un angle de 110° : les trois autres ?',
  'Droites remarquables (4 pts) : (a) rôle de la médiatrice ; (b) rôle de la médiane ; (c) le centre du cercle inscrit s’obtient avec… ; (d) nom du point de rencontre des hauteurs.'],
 corriges:[
  '(a) pentagone (1 pt) ; (b) rectangle, parallélogramme (0,5 pt × 2) ; (c) équilatéral (1 pt) ; (d) octogone (1 pt).',
  '(a) abscisses placées selon le signe (1 pt) ; (b) −5 (1 pt) ; (c) 5 pas (1 pt) ; (d) −3 < 0 < +1 < +2 (1 pt).',
  '(a) M (2 ; 4) (1 pt) ; (b) guides x = 5 puis y = 1, point au croisement (1 pt) ; (c) même ordonnée, abscisses différentes (1 pt) ; (d) sur l’axe horizontal (Ox) (1 pt).',
  '(a) angle droit (1 pt) ; (b) 90° − 30° = 60° (1 pt) ; (c) 180° − 65° = 115° (1 pt) ; (d) 70°, 110°, 70° (1 pt).',
  '(a) perpendiculaire au segment passant par son milieu (1 pt) ; (b) relie un sommet au milieu du côté opposé (1 pt) ; (c) les bissectrices (1 pt) ; (d) l’orthocentre H (1 pt).']};

const u = {
 num:'IV', title:'Géométrie', id:'u4', fiche:'situation-geometrie-T7.html',
 plan:{seances:13},
 ragg:'Identifier, illustrer et construire les figures usuelles ; se repérer ; reconnaître les angles et les droites remarquables du triangle (PE T7)',
 valeurs:'précision du tracé, rigueur du vocabulaire, soin dans la vérification',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

/* Vérifications numériques */
const A=(c,m)=>{if(!c)throw new Error('ASSERT: '+m);};
A(3*60===180,'angles équilatéral');
A(90-64===26 && 180-64===116,'couples de 64°');
A(180-72===108 && 2*(72+108)===360,'sécantes 72°');
A((360-2*40)/2===140,'opposés 40°');
A(180-35===145,'voisin de 35°');
A(90-30===60 && 180-65===115,'examen angles');
A(7/2===3.5,'médiane EF');

const FILE='Manuel-Mathematiques-T7-UNITE4-GEOMETRIE.docx';
module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ IV — GÉOMÉTRIE', coverSub:'Manuel de l’enseignant — Classe de T7 — 13 séances (11 leçons + révision + examen), conforme au PE T7',
   header:'Unité IV — Géométrie : 11 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U4 OK — '+file, buf.length, 'octets');
}};

if(require.main===module) module.exports.build();
