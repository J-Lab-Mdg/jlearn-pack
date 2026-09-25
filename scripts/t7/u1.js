/* ===== T7 — UNITÉ I : NOMBRE (10 séances : 8 leçons + révision + examen) =====
   RAS PE (Nombre) : lire/écrire et comparer ; opérations sur décimaux ;
   propriétés et simplification des fractions ; opérations sur décimaux relatifs. */
const { loadFig, loadScene, buildDoc } = require('./lib');
const fs = require('fs');
const F = n => loadFig('t7u1s'+n);
const SC = n => loadScene('t7_scene_u1_'+n);

function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel.', 'Annonce de la leçon et du plan.', 'Manuel, tableau.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent les cours antérieurs.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, décrivent les nombres.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Formulent, essaient, comparent les résultats.', 'Approche participative ; tableau-guide.', 'Tableau, cahiers.', 'Hypothèses et résultats notés'],
  ['Vérification', 'Exercices 1 à 3 (application directe).', 'Résolvent seuls, corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée']
 ];
}

const lecons = [];

/* ---------- SÉANCE 1 / LEÇON 1 ---------- */
lecons.push({n:1, t:'Lecture et écriture des nombres décimaux', notion:'Nombre — partie entière, partie décimale, rangs',
 goal:'lire et écrire les nombres décimaux et reconnaître les rangs après la virgule',
 prereq:'nombres décimaux découverts à l’école primaire ; 0,5 = 1 : 2',
 motivation:'l’étiquette du marché : « riz 12 450 FMG le kg, haricots 8,5 kg le sac » — chaque chiffre a un rang précis',
 activites:'1. Décomposer 243,507 en parties.\n2. Ranger les chiffres dans le tableau des rangs.\n3. Écrire six décimaux en lettres.\n4. Replacer la virgule à sa place.',
 scene:SC('epicerie'),
 concept:[
  'Un nombre décimal a une partie entière (avant la virgule) et une partie décimale (après la virgule) : 243,507 = 243 + 0,507.',
  'Après la virgule : le 1er chiffre est le rang des dixièmes, le 2e celui des centièmes, le 3e celui des millièmes.',
  'On lit un décimal chiffre par chiffre après la virgule : 243,507 se lit « deux cent quarante-trois virgule cinq cent sept ».',
  'Des zéros à droite de la partie décimale peuvent s’ajouter ou s’enlever sans changer le nombre : 12,5 = 12,50 = 12,500.'
 ],
 figs:[
  [F('1_decomp'),520,224,'Fig. 1 — 243,507 : partie entière + partie décimale.'],
  [F('1_tableau'),520,224,'Fig. 2 — Le tableau des rangs autour de la virgule.'],
  [F('1_zeros'),520,224,'Fig. 3 — Les zéros de droite ne changent pas le nombre.']
 ],
 method:['Couper le nombre au niveau de la virgule : entier puis décimal.',
  'Nommer chaque rang en partant de la virgule : dixièmes, centièmes, millièmes.',
  'Lire l’entier, dire « virgule », puis lire la partie décimale comme un entier.'],
 example:'Lire 8,75.',
 worked:'8,75 : partie entière 8 ; partie décimale 75 centièmes — on lit « huit virgule soixante-quinze ».',
 error:['Confondre rang et chiffre : dans 243,507, le chiffre des centièmes est 0 et non 5.','On compte les rangs depuis la virgule : 5 dixièmes, 0 centièmes, 7 millièmes.'],
 app:['Décomposer 37,405 en partie entière + parties décimales.',
  'Donner le chiffre des centièmes de 243,507, puis celui des millièmes de 8,14.',
  'Écrire en chiffres : « quarante-deux virgule trois cent cinq » ; « six virgule zéro huit ».'],
 ans:['37,405 = 37 + 0,405 = 37 + 0,4 + 0,005.',
  'Centièmes : 0 ; millièmes de 8,14 : 0 (8,14 = 8,140).',
  '42,305 et 6,08. On place chaque chiffre à son rang.']});

/* ---------- SÉANCE 2 / LEÇON 2 ---------- */
lecons.push({n:2, t:'Comparaison et rangement des nombres décimaux', notion:'Nombre — comparer, ranger, encadrer',
 goal:'comparer et ranger les nombres décimaux ; encadrer un décimal entre deux entiers',
 prereq:'leçon 1 — rangs des décimaux ; comparaison d’entiers',
 motivation:'au triple saut : trois athlètes à 12,45 m, 12,5 m et 12,047 m — qui va en tête sans calculatrice ?',
 activites:'1. Compléter les décimaux de zéros pour même taille.\n2. Comparer rang par rang depuis la gauche.\n3. Ranger les trois sauts.\n4. Encadrer 7,83 entre deux entiers.',
 scene:SC('stade'),
 concept:[
  'Comparer deux décimaux : on compare d’abord les parties entières ; si elles sont égales, on lit rang par rang à partir des dixièmes.',
  'Astuce : compléter de zéros pour que les deux nombres aient la même taille décimale : 12,5 = 12,50 > 12,45.',
  'Encadrer un décimal entre deux entiers consécutifs : 7 < 7,83 < 8.',
  'Ranger, c’est comparer de proche en proche : tri croissant (petit → grand) ou décroissant.'
 ],
 figs:[
  [F('2_calage'),520,224,'Fig. 1 — Caler de zéros : même taille, on compare.'],
  [F('2_rangs'),520,224,'Fig. 2 — Comparaison rang par rang.'],
  [F('2_encadre'),520,224,'Fig. 3 — 7 < 7,83 < 8 : l’encadrement.']
 ],
 method:['Égaliser la taille décimale avec des zéros de droite.',
  'Comparer les parties entières, puis les décimales rang par rang.',
  'Conclure avec le bon signe : <, = ou >.'],
 example:'Comparer 12,5 et 12,45.',
 worked:'12,50 contre 12,45 : 5 dixièmes contre 4 dixièmes — donc 12,5 > 12,45.',
 error:['Croire que plus de chiffres = plus grand : 12,047 serait plus grand que 12,5.','On compare rang par rang : 5 dixièmes battent 0 dixième.'],
 app:['Comparer : 3,7 et 3,65 ; 5,09 et 5,1 ; 0,99 et 1.',
  'Ranger dans l’ordre croissant : 4,2 ; 4,02 ; 4,22 ; 4.',
  'Encadrer 15,38 entre deux entiers consécutifs, puis 0,6 entre deux dixièmes.'],
 ans:['3,70 > 3,65 ; 5,09 < 5,10 ; 0,99 < 1.',
  '4 < 4,02 < 4,2 < 4,22.',
  '15 < 15,38 < 16 ; 0,5 < 0,6 < 0,7.']});

/* ---------- SÉANCE 3 / LEÇON 3 ---------- */
lecons.push({n:3, t:'Fractions : lecture et placement', notion:'Nombre — numérateur, dénominateur, lecture des fractions',
 goal:'lire une fraction, nommer ses termes et la situer entre deux entiers',
 prereq:'partages de l’école primaire : un demi, un quart',
 motivation:'le partage du fromager du marché : les trois quarts vendus, il reste un quart — les fractions s’écrivent et se lisent',
 activites:'1. Colorier 3/4 d’un disque.\n2. Nommer numérateur et dénominateur.\n3. Placer 7/4 sur la ligne graduée.\n4. Sauter à 8/4 = 2.',
 scene:SC('fromager'),
 concept:[
  'Une fraction s’écrit a/b : le numérateur a (en haut) dit combien de parts on prend ; le dénominateur b (en bas) dit en combien de parts égales on coupe l’unité — le dénominateur n’est jamais zéro.',
  'Lecture : 3/4 se lit « trois quarts » ; 2/5 « deux cinquièmes » ; moitié = 1/2, tiers = 1/3, quart = 1/4.',
  'Placer a/b : partager chaque unité en b parts, compter a parts depuis 0.',
  'Une fraction peut dépasser 1 : 7/4 = 1 + 3/4 ; 8/4 = 2 exactement.'
 ],
 figs:[
  [F('3_disque'),520,224,'Fig. 1 — Trois quarts d’un disque.'],
  [F('3_termes'),520,224,'Fig. 2 — Numérateur et dénominateur.'],
  [F('3_ligne'),520,224,'Fig. 3 — Placer 7/4 entre 1 et 2.']
 ],
 method:['Lire le dénominateur : en combien de parts ?',
  'Compter le numérateur : combien de parts prises ?',
  'Si le numérateur dépasse le dénominateur : sortir l’entier (7/4 = 1 + 3/4).'],
 example:'Quelle fraction du disque est coloriée ?',
 worked:'Trois parts sur quatre : 3/4 ; il en reste 1/4.',
 error:['Lire 4/3 à la place de 3/4 : le numérateur est en haut.','En haut : ce qu’on prend ; en bas : le partage de l’unité.'],
 app:['Donner la fraction coloriée : 2 parts sur 5 ; 7 parts sur 8.',
  'Placer sur une ligne graduée : 1/2, 5/4, 2.',
  'Écrire 11/4 comme entier + fraction, puis 5/5 en entier.'],
 ans:['2/5 ; 7/8. Numérateur = parts coloriées.',
  '1/2 au milieu de l’unité ; 5/4 = 1/4 après 1 ; 2 sur la graduation entière.',
  '11/4 = 2 + 3/4 (2 × 4 + 3 = 11) ; 5/5 = 1.']});

/* ---------- SÉANCE 4 / LEÇON 4 ---------- */
lecons.push({n:4, t:'Fractions équivalentes et simplification', notion:'Nombre — égalité de fractions, simplification, irréductible',
 goal:'reconnaître et former des fractions équivalentes ; simplifier une fraction',
 prereq:'leçon 3 — lecture des fractions ; tables de multiplication',
 motivation:'2/4 du fromager ou 1/2 ? Le marchand coupe différemment mais la part est la même',
 activites:'1. Couper le même disque en 2 puis en 4 : même part ?\n2. Multiplier les deux termes par 3.\n3. Diviser par le même nombre pour simplifier.\n4. Atteindre l’irréductible.',
 scene:SC('fromager'),
 concept:[
  'Propriété : on ne change pas une fraction en multipliant (ou divisant) ses deux termes par un même nombre non nul : 2/4 = (2×3)/(4×3) = 6/12.',
  'Simplifier, c’est diviser les deux termes par un même nombre : 6/12 = (6:2)/(12:2) = 3/6 = 1/2.',
  'Une fraction est irréductible quand aucun entier ne divise ses deux termes à la fois : 1/2 est irréductible ; 4/8 se simplifie encore.',
  'Deux fractions égales occupent la même place : 1/2 = 2/4 = 3/6 = 50/100.'
 ],
 figs:[
  [F('4_partager'),520,224,'Fig. 1 — Même part, deux coupes : 1/2 = 2/4.'],
  [F('4_prop'),520,224,'Fig. 2 — Multiplier les deux termes : fractions équivalentes.'],
  [F('4_simplifier'),520,224,'Fig. 3 — Diviser jusqu’à l’irréductible.']
 ],
 method:['Chercher un diviseur commun aux deux termes (commencer par 2, puis 5, puis 3).',
  'Diviser les deux termes par ce nombre.',
  'Répartir la manœuvre jusqu’à l’irréductible.'],
 example:'Simplifier 6/12.',
 worked:'6/12 = (6:2)/(12:2) = 3/6 = (3:3)/(6:3) = 1/2 : deux pas ou un seul (÷6 partout).',
 error:['Ajouter le même nombre en haut et en bas en croyant garder l’égalité : 2/4 deviendrait 3/5.','On multiplie ou on divise les deux termes, jamais on n’ajoute.'],
 app:['Compléter : 1/2 = ../8 ; 2/3 = 8/.. ; 5/5 = ../7.',
  'Simplifier : 8/12 ; 15/20 ; 4/6.',
  'Rendre irréductible : 12/18 ; 50/100 ; 36/48.'],
 ans:['4/8 ; 8/12 ; 5/5 = 5/5 ? 5/5 = 1 = 7/7. Le même nombre partout.',
  '8/12 = 2/3 ; 15/20 = 3/4 ; 4/6 = 2/3.',
  '12/18 = 2/3 ; 50/100 = 1/2 ; 36/48 = 3/4.']});

/* ---------- SÉANCE 5 / LEÇON 5 ---------- */
lecons.push({n:5, t:'Opérations sur les nombres décimaux', notion:'Nombre — addition, soustraction, multiplication et division de décimaux',
 goal:'poser et effectuer les quatre opérations sur les nombres décimaux',
 prereq:'opérations sur les entiers ; leçon 1 — rangs décimaux',
 motivation:'la course du marché : 12,5 kg de riz + 3,75 kg d’haricots ; rendre la monnaie sur 50 000 FMG',
 activites:'1. Poser l’addition : virgule sous virgule.\n2. Poser la soustraction avec des zéros d’appoint.\n3. Compter les rangs pour poser la virgule du produit.\n4. Découvrir la division d’un décimal.',
 scene:SC('epicerie'),
 concept:[
  'Addition et soustraction de décimaux : virgule sous virgule, puis calculer comme avec des entiers ; on peut compléter de zéros.',
  'Multiplication : calculer comme avec des entiers, puis compter les rangs décimaux des deux facteurs pour placer la virgule : 2,5 × 1,2 — 1 + 1 = 2 rangs.',
  'Division d’un décimal : quand le reste ne tombe pas à zéro, on écrit la virgule au quotient et on poursuit.',
  'Vérifier l’ordre de grandeur : 2,5 × 1,2 doit valoir environ 3 : le résultat 3 est cohérent avec 3,00.'
 ],
 figs:[
  [F('5_add'),520,224,'Fig. 1 — Addition posée : virgule sous virgule.'],
  [F('5_mult'),520,224,'Fig. 2 — Multiplication : compter les rangs.'],
  [F('5_div'),520,224,'Fig. 3 — Diviser 5,4 : 4 : la virgule suit.']
 ],
 method:['Addition/soustraction : aligner les virgules.',
  'Produit : compter la somme des rangs décimaux.',
  'Quotient : écrire la virgule quand on la croise en divisant.'],
 example:'2,5 × 1,2.',
 worked:'25 × 12 = 300 ; 1 + 1 = 2 rangs décimaux → 3,00 = 3. Environ 2,5 × 1 = 2,5 : cohérent.',
 error:['Compter les chiffres après la virgule sans regarder les rangs : virgule placée trop tôt dans 2,5 × 1,2 → 0,3 ?','2,5 × 1,2 = 3,00 : deux rangs décimaux au total, zéros de droite effaçables.'],
 app:['Poser : 12,5 + 3,75 ; 50 − 12,35.',
  'Poser : 4,2 × 1,5 ; 0,25 × 8.',
  'Poser : 5,4 : 4 ; 3 : 8 ; estimer puis vérifier l’ordre de grandeur.'],
 ans:['16,25 ; 37,65. Virgule sous virgule.',
  '4,2 × 1,5 = 6,30 = 6,3 ; 0,25 × 8 = 2,00 = 2.',
  '5,4 : 4 = 1,35 ; 3 : 8 = 0,375. La virgule suit en divisant.']});

/* ---------- SÉANCE 6 / LEÇON 6 ---------- */
lecons.push({n:6, t:'Les nombres relatifs : entiers et décimaux', notion:'Nombre — positifs, négatifs, lecture des relatifs',
 goal:'reconnaître et nommer les entiers relatifs et les décimaux relatifs',
 prereq:'leçon 3 de l’unité IV à venir (droite graduée) ; températures, ascenseurs',
 motivation:'la température : +32° à Tana, −5° la nuit dans le Grand Sud ; le compte : +50 000 ou −8 000',
 activites:'1. Donner des exemples de nombres à signe dans la vie.\n2. Classer : entiers ou décimaux relatifs.\n3. Placer sur la ligne.\n4. Lire le signe.',
 scene:SC('meteo'),
 concept:[
  'Un nombre relatif porte un signe + ou − : +5 est positif ; −3 est négatif ; 0 est le seul entier sans signe.',
  'L’ensemble des entiers positifs et négatifs forme les entiers relatifs ; avec la virgule : les décimaux relatifs.',
  'Sur la droite graduée : positifs à droite de 0, négatifs à gauche ; chaque nombre a une abscisse.',
  'Deux nombres comme +3 et −3 sont opposés : leur somme vaut 0.'
 ],
 figs:[
  [F('6_famille'),520,224,'Fig. 1 — La famille des relatifs : positifs, négatifs, zéro.'],
  [F('6_ligne'),520,224,'Fig. 2 — Les relatifs sur la droite graduée.'],
  [F('6_exemples'),520,224,'Fig. 3 — Températures, étages, soldes : le signe parle.']
 ],
 method:['Lire d’abord le signe : il donne le côté de 0.',
  'Lire ensuite la valeur : la distance à 0.',
  'Classer : entier relatif (sans virgule) ou décimal relatif (avec).'],
 example:'Classer −8,5.',
 worked:'Signe − : côté gauche de zéro ; avec virgule : décimal relatif ; sa distance à zéro vaut 8,5.',
 error:['Croire que −8,5 n’est pas un nombre : « impossible ».','Les relatifs servent aux dettes, hauteurs sous mer, températures : −8,5 existe.'],
 app:['Classer : +4 ; −7 ; +2,5 ; −0,75 ; 0.',
  'Citer trois situations de la vie qui utilisent les relatifs.',
  'Donner l’opposé de +6 et de −4,5 ; vérifier que la somme fait 0.'],
 ans:['Entiers relatifs : +4, −7, 0 ; décimaux relatifs : +2,5, −0,75.',
  'Températures, étages sous-sol, solde bancaire, altitudes sous la mer.',
  'Opposés : −6 et +4,5 ; (+6) + (−6) = 0 ; (−4,5) + (+4,5) = 0.']});

/* ---------- SÉANCE 7 / LEÇON 7 ---------- */
lecons.push({n:7, t:'Comparer et ranger les nombres relatifs', notion:'Nombre — comparaison des relatifs, valeur absolue',
 goal:'comparer et ranger les nombres relatifs',
 prereq:'leçon 6 — les relatifs sur la droite',
 motivation:'−3° à Antsirabe contre −8° au col : où fait-il plus froid ? La ligne des nombres tranche',
 activites:'1. Surligner les positifs, puis les négatifs.\n2. Comparer deux négatifs : distance à 0.\n3. Ranger une série mixte.\n4. Découvrir la valeur absolue.',
 scene:SC('meteo'),
 concept:[
  'Tout nombre positif est plus grand que tout nombre négatif : +1 > −99.',
  'Entre deux négatifs, le plus grand est le plus proche de zéro : −3 > −8.',
  'La valeur absolue d’un nombre est sa distance à zéro, sans le signe : |−5| = 5.',
  'Ranger sur la ligne croissante : les négatifs à gauche, zéro, les positifs à droite.'
 ],
 figs:[
  [F('7_regle'),520,224,'Fig. 1 — Positif contre négatif : le positif gagne toujours.'],
  [F('7_negatifs'),520,224,'Fig. 2 — Entre deux négatifs : le plus proche de zéro.'],
  [F('7_absolue'),520,224,'Fig. 3 — La valeur absolue : distance à zéro.']
 ],
 method:['Séparer positifs et négatifs.',
  'Ranger les négatifs entre eux : grande valeur absolue = plus à gauche.',
  'Placer zéro, puis les positifs croissants.'],
 example:'Ranger −8 ; −3 ; +5 ; 0.',
 worked:'Les négatifs d’abord : −8 < −3 ; puis 0 ; puis +5 : −8 < −3 < 0 < +5.',
 error:['Ranger −8 > −3 parce que 8 > 3.','Entre négatifs, le plus proche de zéro est le plus grand : −3 > −8.'],
 app:['Comparer : −5 et +2 ; −9 et −4 ; 0 et −0,5.',
  'Ranger dans l’ordre croissant : +3 ; −6 ; +1,5 ; −2,5 ; 0.',
  'Compléter : |−7| = … ; |+3| = … ; lequel de |−9| ou |−2| est le plus grand ?'],
 ans:['−5 < +2 (positif gagne) ; −9 < −4 (plus proche de zéro) ; 0 > −0,5.',
  '−6 < −2,5 < 0 < +1,5 < +3.',
  '7 ; 3 ; |−9| = 9 > |−2| = 2.']});

/* ---------- SÉANCE 8 / LEÇON 8 ---------- */
lecons.push({n:8, t:'Addition et soustraction des nombres relatifs', notion:'Nombre — opérations sur les relatifs',
 goal:'additionner et soustraire les nombres relatifs',
 prereq:'leçons 6 et 7 — signes et droite graduée',
 motivation:'le compte du débit d’eau : +1 200 L le matin, −950 L le tirage du soir — le mouvement se calcule avec des signes',
 activites:'1. Marcher les sommes sur la ligne : départ + pas.\n2. Découvrir : soustraire = ajouter l’opposé.\n3. Appliquer aux décimaux relatifs.\n4. Régler les cascades (+3 − 5 + 2).',
 scene:SC('eau'),
 concept:[
  'Additionner des relatifs revient à marcher sur la droite graduée : partir du premier nombre, avancer si le deuxième est positif, reculer s’il est négatif.',
  'Même signe : on garde le signe et on ajoute les valeurs absolues : (−3) + (−5) = −8.',
  'Signes différents : on prend le signe du plus grand en valeur absolue et on soustrait : (+8) + (−5) = +3.',
  'Soustraire un nombre revient à ajouter son opposé : 7 − (−2) = 7 + 2 = 9 ; −6 − 4 = −6 + (−4) = −10.'
 ],
 figs:[
  [F('8_marche'),520,224,'Fig. 1 — Marcher la somme : (−3) + (+7) = +4.'],
  [F('8_oppose'),520,224,'Fig. 2 — Soustraire = ajouter l’opposé.'],
  [F('8_tableau'),520,224,'Fig. 3 — Le tableau des situations.']
 ],
 method:['Transformer toute soustraction en addition de l’opposé.',
  'Lire les signes : mêmes → ajouter ; différents → soustraire les valeurs absolues.',
  'Donner au résultat le bon signe, puis vérifier sur la ligne.'],
 example:'(−6) + (+10).',
 worked:'Signes différents : 10 − 6 = 4, signe de +10 (plus grand) : +4 ; sur la ligne : de −6, dix pas à droite.',
 error:['Écrire (−3) + (−5) = +8 en additionnant « à l’aveugle ».','Même signe : signe conservé — (−3) + (−5) = −8.'],
 app:['Calculer : (+6) + (−9) ; (−5) + (−4) ; (+12) + (−7).',
  'Calculer : 8 − (−3) ; −4 − 6 ; −2,5 − (−1,5).',
  'Cascades : +5 − 7 + 2 ; −3 + 8 − 10.'],
 ans:['−3 ; −9 ; +5. Signes lus d’abord.',
  '11 ; −10 ; −1. Soustraire = ajouter l’opposé.',
  '+5 − 7 = −2, −2 + 2 = 0 ; −3 + 8 = +5, +5 − 10 = −5.']});

/* ---------- Séance 9 : RÉVISION ---------- */
const revision = {n:9,
 synth:[
  ['Décimaux (L1, L2)','Partie entière + partie décimale ; rangs dixièmes, centièmes, millièmes ; zéros de droite','Lire, écrire, comparer, encadrer les décimaux'],
  ['Opérations décimaux (L5)','Virgule sous virgule ; produits : somme des rangs ; division avec virgule','Poser les quatre opérations et vérifier l’ordre de grandeur'],
  ['Fractions (L3, L4)','Numérateur/dénominateur ; fractions égales : même nombre aux deux termes ; irréductible','Lire, placer, former des équivalentes, simplifier'],
  ['Relatifs (L6, L7)','Positifs, négatifs, zéro ; valeur absolue ; plus proche de zéro entre négatifs','Classer, comparer, ranger avec les signes'],
  ['Opérations relatives (L8)','Même signe : ajouter ; signes différents : soustraire ; soustraire = ajouter l’opposé','Calculer additions, soustractions et cascades de relatifs']],
 questions:[
  'Dans 243,507, quel est le chiffre des centièmes ?',
  'Comparer 12,5 et 12,45 sans calculatrice.',
  'Comment simplifier une fraction ? Exemple avec 6/12.',
  'Vrai ou faux : 2/4 et 1/2 sont égales ? Pourquoi ?',
  'Entre −9 et −4, quel est le plus grand ?',
  'Quelle est la valeur absolue de −7 ?',
  'Traduire : soustraire un nombre revient à quoi ?',
  'Calculer (−3) + (−5) puis (+8) + (−5).',
  'Poser une multiplication de deux décimaux : comment place-t-on la virgule ?'],
 reponses:[
  '0 (cinq dixièmes, zéro centième, sept millièmes).',
  'On cale de zéros : 12,50 > 12,45 (5 dixièmes contre 4).',
  'Diviser les deux termes par le même nombre : 6/12 = 3/6 = 1/2.',
  'Vrai : on divise les deux termes de 2/4 par 2 ; la part est la même.',
  '−4 : entre négatifs, le plus proche de zéro est le plus grand.',
  '|−7| = 7 : la distance à zéro, sans le signe.',
  'À ajouter son opposé : 7 − (−2) = 7 + 2 = 9.',
  '−8 (même signe : on ajoute, signe −) ; +3 (signes différents : 8 − 5 = 3, signe +).',
  'On compte les rangs décimaux des deux facteurs : 2,5 × 1,2 = 3,00 (1 + 1 = 2 rangs).'],
 error:['Confondre le rang d’un chiffre avec sa valeur, et croire qu’ajouter un même nombre en haut et en bas d’une fraction garde l’égalité.','Rang ≠ chiffre : on compte depuis la virgule ; fractions égales : on multiplie ou on divise, jamais on n’ajoute.'],
 meth:'Avant l’examen : revoir le tableau des rangs, les règles de signe (somme et comparaison) et refaire deux fractions simplifiées à la main.'};

/* ---------- Séance 10 : EXAMEN ---------- */
const exam = {n:10,
 bareme:'Examen de l’unité I — Nombre. Durée : 1 heure. Total 20 points : 5 exercices de 4 points.',
 exos:[
  'Décimaux (4 pts) : (a) décomposer 37,405 ; (b) chiffre des millièmes de 8,14 ; (c) ranger : 4,2 ; 4,02 ; 4,22 ; 4 (croissant) ; (d) encadrer 15,38 entre deux entiers.',
  'Fractions (4 pts) : (a) lire 7/4 ; (b) compléter 2/3 = 8/.. ; (c) simplifier 8/12 ; (d) rendre 12/18 irréductible.',
  'Opérations sur décimaux (4 pts) : (a) 12,5 + 3,75 ; (b) 50 − 12,35 ; (c) 4,2 × 1,5 ; (d) 5,4 : 4.',
  'Relatifs (4 pts) : (a) classer : +4, −7, +2,5, 0 (entiers/décimaux) ; (b) comparer −9 et −4 ; (c) valeur absolue de −9 ; (d) l’opposé de −4,5.',
  'Opérations relatives (4 pts) : (a) (+6) + (−9) ; (b) (−5) + (−4) ; (c) 8 − (−3) ; (d) cascade : −3 + 8 − 10.'],
 corriges:[
  '(a) 37 + 0,405 (1 pt) ; (b) 0 (1 pt) ; (c) 4 < 4,02 < 4,2 < 4,22 (1 pt) ; (d) 15 < 15,38 < 16 (1 pt).',
  '(a) sept quarts (ou : un entier et trois quarts) (1 pt) ; (b) 12 (1 pt) ; (c) 2/3 (1 pt) ; (d) 2/3 (1 pt).',
  '(a) 16,25 (1 pt) ; (b) 37,65 (1 pt) ; (c) 6,30 = 6,3 (1 pt) ; (d) 1,35 (1 pt).',
  '(a) entiers : +4, −7, 0 ; décimal : +2,5 (1 pt) ; (b) −9 < −4 (1 pt) ; (c) 9 (1 pt) ; (d) +4,5 (1 pt).',
  '(a) −3 (1 pt) ; (b) −9 (1 pt) ; (c) 11 (1 pt) ; (d) −3 + 8 = +5 ; +5 − 10 = −5 (1 pt).']};

const u = {
 num:'I', title:'Nombre', id:'u1', fiche:'situation-nombre-T7.html',
 plan:{seances:10},
 ragg:'Résoudre des situations avec les nombres décimaux, les fractions et les décimaux relatifs (PE T7 — Nombre)',
 valeurs:'rigueur dans les rangs et les signes, sens des grandeurs, honnêteté dans le calcul',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

/* Vérifications numériques */
const A=(c,m)=>{if(!c)throw new Error('ASSERT: '+m);};
A(12.5+3.75===16.25 && 50-12.35===37.65,'add/sous décimaux');
A(Math.abs(4.2*1.5-6.3)<1e-9 && Math.abs(5.4/4-1.35)<1e-9,'mult/div décimaux');
A(2*3===6 && 8/12===2/3,'équivalentes');
A(12/18===2/3 && 36/48===3/4 && 50/100===1/2,'simplifications');
A(2*(4)+3===11,'11/4=2+3/4');
A((-3)+(-5)===-8 && 8+(-5)===3 && 8-(-3)===11 && (-3)+8-10===-5,'opérations relatives');
A(10-6===4,'exemple −6+10');

const FILE='Manuel-Mathematiques-T7-UNITE1-NOMBRE.docx';
module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ I — NOMBRE', coverSub:'Manuel de l’enseignant — Classe de T7 — 10 séances (8 leçons + révision + examen), conforme au PE T7',
   header:'Unité I — Nombre : 8 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U1 OK — '+file, buf.length, 'octets');
}};
if(require.main===module) module.exports.build();
