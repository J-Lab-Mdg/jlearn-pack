/* ===== T7 — UNITÉ II : OPÉRATION (11 séances : 9 leçons + révision + examen) =====
   RAS PE (Opération) : organiser des calculs avec les puissances entières d’un
   nombre décimal relatif ; chaînes d’opérations avec relatifs (règle de signe,
   commutativité, associativité, parenthèses) ; écritures fractions/décimaux,
   encadrement et valeurs approchées. PE_T7.docx tables OPERATION. */
const { loadFig, loadScene, buildDoc } = require('./lib');
const fs = require('fs');
const F = n => loadFig('t7u2s'+n);
const SC = n => loadScene('t7_scene_u2_'+n);

function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel.', 'Annonce de la leçon et du plan.', 'Manuel, tableau.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent les cours antérieurs.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, commentent les nombres.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Formulent, essaient, comparent les résultats.', 'Approche participative ; tableau-guide.', 'Tableau, cahiers.', 'Hypothèses et résultats notés'],
  ['Vérification', 'Exercices 1 à 3 (application directe).', 'Résolvent seuls, corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée']
 ];
}

const lecons = [];

/* ---------- SÉANCE 1 / LEÇON 1 ---------- */
lecons.push({n:1, t:'La puissance entière d’un nombre', notion:'Opération — puissance, base, exposant',
 goal:'illustrer la puissance entière d’un nombre et la calculer',
 prereq:'multiplication des entiers et des décimaux (unité I et primaire)',
 motivation:'la légende du fanorona : un grain de riz sur la première case, deux sur la deuxième, puis on double — combien à la sixième case ?',
 activites:'1. Doubler les grains case après case.\n2. Écrire 2 × 2 × 2 × 2 × 2 sous forme courte.\n3. Nommer base et exposant.\n4. Calculer 3⁴ et (0,5)².',
 scene:SC('riz'),
 concept:[
  'Un même nombre multiplié plusieurs fois par lui-même s’écrit en raccourci : 2 × 2 × 2 × 2 × 2 = 2⁵, on lit « deux puissance cinq ».',
  'Dans aⁿ, a est la base (le nombre répété) et n est l’exposant (le nombre de facteurs).',
  'L’exposant 2 se lit « au carré » et l’exposant 3 « au cube » : 5² = 25, 5³ = 125.',
  'Une puissance d’un nombre négatif s’écrit avec des parenthèses : (−2)³ = (−2) × (−2) × (−2) = −8.'
 ],
 figs:[
  [F('1_notation'),520,224,'Fig. 1 — Base et exposant : l’anatomie d’une puissance.'],
  [F('1_lire'),520,224,'Fig. 2 — 2⁵ : cinq facteurs égaux à 2, le produit vaut 32.'],
  [F('1_signes'),520,224,'Fig. 3 — (−2)² = +4 mais (−2)³ = −8 : l’exposant compte.']
 ],
 method:['Repérer le facteur répété : c’est la base.',
  'Compter les facteurs : c’est l’exposant.',
  'Développer en produit de facteurs, puis calculer de gauche à droite.'],
 example:'Calculer (0,5)² et (−2)³.',
 worked:'(0,5)² = 0,5 × 0,5 = 0,25 ; (−2)³ = (−2) × (−2) × (−2) = (+4) × (−2) = −8.',
 error:['Confondre puissance et multiplication : 2⁵ n’est pas 2 × 5 = 10.','L’exposant donne le nombre de facteurs : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.'],
 app:['Écrire en puissance puis calculer : 3 × 3 × 3 × 3 ; 0,1 × 0,1 × 0,1.',
  'Calculer : 5² ; 2⁶ ; (0,2)³ ; (−3)².',
  'Au fanorona, on double à chaque case : combien de grains à la sixième case (2⁵) ? Et à la septième ?'],
 ans:['3⁴ = 81 ; (0,1)³ = 0,001.',
  '5² = 25 ; 2⁶ = 64 ; (0,2)³ = 0,008 ; (−3)² = +9.',
  '2⁵ = 32 grains ; 2⁶ = 64 grains : le nombre double.']});

/* ---------- SÉANCE 2 / LEÇON 2 ---------- */
lecons.push({n:2, t:'Calculs avec les puissances', notion:'Opération — puissances de 10, puissances de décimaux relatifs',
 goal:'calculer avec les puissances entières d’un nombre décimal relatif',
 prereq:'leçon 1 — sens de aⁿ ; nombres relatifs (unité I)',
 motivation:'le recensement : 10 quartiers de 10 rues de 10 cases — les puissances de 10 comptent vite ; mais que vaut (−2)⁴ ?',
 activites:'1. Calculer 10³, 10⁴ et (0,1)², (0,1)³.\n2. Comparer (−2)⁴ et −2⁴.\n3. Déterminer le signe de (−5)⁷ sans calcul.\n4. Calculer (1,2)².',
 scene:SC('riz'),
 concept:[
  'Les puissances de 10 s’écrivent d’un coup d’œil : 10ⁿ est 1 suivi de n zéros — 10⁴ = 10 000.',
  'Les puissances de 0,1 : (0,1)ⁿ a un 1 au rang n après la virgule — (0,1)³ = 0,001.',
  'Signe d’une puissance de nombre négatif : exposant pair → résultat positif ; exposant impair → résultat négatif : (−2)⁴ = +16, (−2)⁵ = −32.',
  'Attention aux parenthèses : (−2)⁴ = +16 mène le calcul complet, alors que −2⁴ = −16 est l’opposé de 2⁴.'
 ],
 figs:[
  [F('2_puiss10'),520,224,'Fig. 1 — Puissances de 10 et de 0,1 : le 1 change de rang.'],
  [F('2_parite'),520,224,'Fig. 2 — Exposant pair ou impair : le signe de (−2)ⁿ.'],
  [F('2_calcul'),520,224,'Fig. 3 — (−2)⁴ = +16 contre −2⁴ = −16 : les parenthèses décident.']
 ],
 method:['Écrire la suite des facteurs en respectant les parenthèses.',
  'Regrouper les facteurs deux à deux pour aller vite.',
  'Contrôler le signe final : il dépend de la parité de l’exposant pour une base négative.'],
 example:'Calculer (1,2)².',
 worked:'(1,2)² = 1,2 × 1,2 = 1,44 : deux rangs décimaux en tout, on place la virgule après deux chiffres à droite.',
 error:['Oublier que (0,1)³ n’a pas trois zéros mais trois chiffres après la virgule : 0,001 et non 0,0001.','(0,1)³ = 0,1 × 0,1 × 0,1 = 0,001 : le 1 arrive au rang 3.'],
 app:['Calculer : 10⁵ ; (0,1)⁴ ; (−1)¹⁰ ; (−1)⁷.',
  'Compléter : (−3)² = … ; (−3)³ = … ; −3² = … ; (−0,2)² = …',
  'Un microscope multiplie par 10 à chaque niveau : quelle taille au niveau 10⁶ pour un grain de 0,002 m ?'],
 ans:['100 000 ; 0,000 1 ; (−1)¹⁰ = 1 (pair) ; (−1)⁷ = −1 (impair).',
  '9 ; −27 ; −9 (opposé de 3²) ; 0,04.',
  '0,002 × 10⁶ = 2 000 m en image — les puissances de 10 déplacent la virgule.']});

/* ---------- SÉANCE 3 / LEÇON 3 ---------- */
lecons.push({n:3, t:'Propriétés des puissances', notion:'Opération — aⁿ × aᵐ ; aⁿ : aᵐ ; (aⁿ)ᵐ ; (a×b)ⁿ',
 goal:'utiliser les propriétés des puissances pour organiser des calculs',
 prereq:'leçons 1 et 2 — calcul d’une puissance',
 motivation:'deux greniers : 2³ sacs de riz dans le premier, 2² dans le second — tous ensemble, faut-il tout recompter ou additionner les exposants ?',
 activites:'1. Développer 2³ × 2² en facteurs et comparer à 2⁵.\n2. Développer 3⁵ : 3² et comparer à 3³.\n3. Calculer (2²)³ de deux façons.\n4. Calculer (4 × 0,5)² de deux façons.',
 scene:SC('riz'),
 concept:[
  'Produit de deux puissances de même base : on additionne les exposants — aⁿ × aᵐ = aⁿ⁺ᵐ : 2³ × 2² = 2⁵ = 32.',
  'Quotient de deux puissances de même base : on soustrait les exposants — aⁿ : aᵐ = aⁿ⁻ᵐ : 3⁵ : 3² = 3³ = 27.',
  'Puissance d’une puissance : on multiplie les exposants — (aⁿ)ᵐ = aⁿᵐ : (2²)³ = 2⁶ = 64.',
  'Puissance d’un produit : chaque facteur prend l’exposant — (a × b)ⁿ = aⁿ × bⁿ : (4 × 0,5)² = 4² × (0,5)² = 16 × 0,25 = 4.'
 ],
 figs:[
  [F('3_produit'),520,224,'Fig. 1 — aⁿ × aᵐ = aⁿ⁺ᵐ : les facteurs se comptent.'],
  [F('3_quotient'),520,224,'Fig. 2 — aⁿ : aᵐ = aⁿ⁻ᵐ : les facteurs se simplifient.'],
  [F('3_puis'),520,224,'Fig. 3 — (aⁿ)ᵐ = aⁿᵐ et (a × b)ⁿ = aⁿ × bⁿ : deux vérifications.']
 ],
 method:['Vérifier d’abord que les bases sont identiques (produit ou quotient).',
  'Appliquer la règle sur les exposants : +, − ou × selon le cas.',
  'Terminer par le calcul de la puissance obtenue.'],
 example:'Calculer (2²)³ × 2 : sans développer toutes les puissances.',
 worked:'(2²)³ = 2⁶ ; 2⁶ × 2¹ = 2⁷ = 128.',
 error:['Additionner les bases au lieu des exposants : 2³ × 3² ne se réduit pas — les bases sont différentes.','Les propriétés n’agissent que sur les exposants, et seulement entre puissances de même base.'],
 app:['Écrire sous forme d’une seule puissance : 5² × 5⁴ ; 7⁵ : 7² ; (3²)².',
  'Écrire sous forme d’une seule puissance : (0,5)³ × (0,5) ; (1,2)⁴ : (1,2)² ; ((−2)²)³.',
  'Calculer astucieusement : 8² × (0,125)² ; 25 × 10⁴ : 10².'],
 ans:['5⁶ ; 7³ ; 3⁴.',
  '(0,5)⁴ ; (1,2)² ; (−2)⁶ = 2⁶.',
  '(8 × 0,125)² = 1² = 1 ; 25 × 10² = 2 500.']});

/* ---------- SÉANCE 4 / LEÇON 4 ---------- */
lecons.push({n:4, t:'Chaînes d’additions et de soustractions de relatifs', notion:'Opération — commutativité, associativité, regroupement',
 goal:'organiser une chaîne d’additions et soustractions de décimaux relatifs',
 prereq:'unité I leçons 6 à 8 — addition et soustraction des relatifs',
 motivation:'le livre de caisse de la boutique : −7 (achat de stock), +12 (ventes), −5 (transport), +8 (ventes) — par quel bout commencer pour s’y retrouver ?',
 activites:'1. Calculer −7 + 12 − 5 + 8 de gauche à droite.\n2. Regrouper positifs et négatifs, comparer.\n3. Faire disparaître deux opposés dans −3,5 + 6,25 − 2,75 + 3,5.\n4. Vérifier que l’ordre ne change pas le résultat (commutativité, associativité).',
 scene:SC('boutique'),
 concept:[
  'Dans une chaîne qui ne contient que des additions et des soustractions, on peut changer l’ordre des termes (commutativité) et les regrouper (associativité).',
  'Soustraire, c’est ajouter l’opposé : on transforme d’abord toute la chaîne en somme algébrique, puis on regroupe.',
  'Regroupement conseillé : les positifs d’un côté, les négatifs de l’autre — (−7) + 12 + (−5) + 8 = (−12) + 20 = +8.',
  'Deux opposés dans la chaîne s’annulent : −3,5 et +3,5 disparaissent ensemble.'
 ],
 figs:[
  [F('4_chaine'),520,224,'Fig. 1 — La même chaîne calculée de gauche à droite.'],
  [F('4_regroup'),520,224,'Fig. 2 — Regrouper les positifs et les négatifs simplifie tout.'],
  [F('4_oppose'),520,224,'Fig. 3 — Les opposés s’annulent : +3,5 − 3,5 = 0.']
 ],
 method:['Transformer les soustractions en additions de l’opposé.',
  'Rassembler les termes positifs d’une part, les négatifs d’autre part.',
  'Calculer les deux sommes, puis conclure par le bilan final.'],
 example:'Calculer −7 + 12 − 5 + 8.',
 worked:'Somme : (−7) + (−5) = −12 et 12 + 8 = 20 ; bilan : −12 + 20 = +8 — la caisse gagne 8 (mille FMG).',
 error:['Changer l’ordre en oubliant le signe : écrire +7 − 12 − 5 + 8 change le résultat.','Chaque terme voyage avec son signe : on déplace « −7 » et pas « 7 ».'],
 app:['Calculer : −9 + 15 − 6 + 4 ; puis vérifier par le regroupement.',
  'Calculer : −3,5 + 6,25 − 2,75 + 3,5.',
  'Caisse du samedi : +52 ; −30 ; +18 ; −12 (mille FMG). Bilan ?'],
 ans:['(−9 − 6) + (15 + 4) = −15 + 19 = +4 ; de gauche à droite : 6 − 6 + 4 = +4.',
  'Les opposés s’annulent : 6,25 − 2,75 = 3,5.',
  '52 + 18 = 70 ; 30 + 12 = 42 ; 70 − 42 = +28 : la semaine est bénéficiaire.']});

/* ---------- SÉANCE 5 / LEÇON 5 ---------- */
lecons.push({n:5, t:'La règle des signes', notion:'Opération — signe d’un produit de relatifs',
 goal:'déterminer le signe d’un produit de nombres relatifs puis effectuer',
 prereq:'leçon 4 — sommes de relatifs ; table des signes sur la droite graduée',
 motivation:'sur le chantier : monter trois fois 4 sacs, c’est +12 ; descendre trois fois 4 sacs, c’est −12 — que se passe-t-il quand on « descend trois fois −4 » ?',
 activites:'1. Poser les quatre situations (+)×(+), (+)×(−), (−)×(+), (−)×(−) sur la droite.\n2. Compléter la table des signes.\n3. Chercher le signe de (−2) × (−2) × (−2) en détaillant.\n4. Généraliser avec la parité des facteurs négatifs.',
 scene:SC('chantier'),
 concept:[
  'Le produit de deux nombres de même signe est positif : (+3) × (+4) = +12 et (−3) × (−4) = +12.',
  'Le produit de deux nombres de signes différents est négatif : (+3) × (−4) = −12 et (−3) × (+4) = −12.',
  'Produit de plusieurs facteurs : il est négatif seulement si le nombre de facteurs négatifs est impair ; positif si ce nombre est pair.',
  'On effectue ensuite sur les valeurs absolues, exactement comme pour les positifs.'
 ],
 figs:[
  [F('5_table'),520,224,'Fig. 1 — La table des signes du produit de deux relatifs.'],
  [F('5_parite'),520,224,'Fig. 2 — Parité : compter les facteurs négatifs suffit.'],
  [F('5_exemples'),520,224,'Fig. 3 — (−0,5) × (−0,2) = +0,1 ; (−1)⁵ = −1.']
 ],
 method:['Compter les facteurs négatifs : pair → signe « + » ; impair → signe « − ».',
  'Multiplier les valeurs absolues comme d’habitude.',
  'Écrire le signe trouvé devant le résultat.'],
 example:'Signe et valeur de (−2) × (+5) × (−3) × (−1).',
 worked:'Trois facteurs négatifs (impair) → signe − ; 2 × 5 × 3 × 1 = 30 ; résultat : −30.',
 error:['Croire que « négatif × négatif × négatif » redevient positif.','Trois négatifs : (−)×(−)=(+), puis (+)×(−)=(−) : le produit est négatif.'],
 app:['Donner le signe, sans calculer, de : (−7) × (+3) ; (−2) × (−9) ; (+4) × (−5) × (−6).',
  'Calculer : (−0,3) × (+2) ; (−0,4) × (−0,5) ; (−1,5) × (+4).',
  'Calculer : (−2) × (−2) × (−2) ; (−1)⁶ ; (−2) × (+3) × (−4).'],
 ans:['− ; + ; + (deux facteurs négatifs).',
  '−0,6 ; +0,2 ; −6.',
  '−8 (trois négatifs) ; +1 (puissance paire) ; +24 (deux négatifs).']});

/* ---------- SÉANCE 6 / LEÇON 6 ---------- */
lecons.push({n:6, t:'Produits dans une chaîne sans parenthèses', notion:'Opération — priorités : multiplication et division d’abord',
 goal:'effectuer une chaîne contenant des produits sans parenthèses en respectant les priorités',
 prereq:'leçons 4 et 5 — sommes et produits de relatifs',
 motivation:'au marché : 3 paniers à 12 tomates et 5 tomates en plus — 3 × 12 + 5 : si l’on additionne d’abord, on ne trouve plus les tomates !',
 activites:'1. Compter les tomates : addition d’abord, puis multiplication d’abord ; comparer.\n2. Dégager la règle de priorité.\n3. Calculer 12 − 2 × 3 dans les deux sens.\n4. Calculer 3 × (−2)² et comparer avec (3 × (−2))².',
 scene:SC('marche'),
 concept:[
  'Dans une chaîne sans parenthèses, la multiplication et la division passent avant l’addition et la soustraction.',
  'Les puissances passent avant tout le reste : on calcule d’abord les puissances, puis × et ÷, puis + et −.',
  'À priorité égale, on lit de gauche à droite : 3 × 12 + 5 = 36 + 5 = 41.',
  'On peut n’effectuer qu’une étape par ligne pour rester lisible : chaque ligne garde le reste de la chaîne intact.'
 ],
 figs:[
  [F('6_panier'),520,224,'Fig. 1 — 3 × 12 + 5 = 41 : la multiplication d’abord.'],
  [F('6_priorite'),520,224,'Fig. 2 — L’ordre des priorités : puissances, puis × ÷, puis + −.'],
  [F('6_relatif'),520,224,'Fig. 3 — 3 × (−2)² = 12, pas −12 : la puissance d’abord.']
 ],
 method:['Souligner (mentalement) les multiplications, divisions et puissances.',
  'Effectuer ces opérations prioritaires une à une.',
  'Terminer par les additions et soustractions de gauche à droite.'],
 example:'Calculer 7 − (−2) × 4.',
 worked:'Produit d’abord : (−2) × 4 = −8 ; puis 7 − (−8) = 7 + 8 = 15.',
 error:['Calculer 12 − 2 × 3 comme (12 − 2) × 3 = 30.','Priorité au produit : 12 − 2 × 3 = 12 − 6 = 6.'],
 app:['Calculer : 3 + 4 × 5 ; 20 − 4 × 3 ; (−3) × 2 + (−5).',
  'Calculer : 2 + (−3)² ; (−2) × (−5) − 8 ; 100 : (−4) + 5.',
  'Achats : 2 sacs à 15 kg et 4 kg en vrac, prix à 2 400 FMG/kg. Total ?'],
 ans:['3 + 20 = 23 ; 20 − 12 = 8 ; (−6) + (−5) = −11.',
  '2 + 9 = 11 ; 10 − 8 = 2 ; (−25) + 5 = −20.',
  '2 × 15 + 4 = 34 kg ; 34 × 2 400 = 81 600 FMG.']});

/* ---------- SÉANCE 7 / LEÇON 7 ---------- */
lecons.push({n:7, t:'Chaînes contenant des parenthèses', notion:'Opération — le contenu des parenthèses d’abord',
 goal:'effectuer une chaîne d’opérations contenant des parenthèses en appliquant la règle donnée',
 prereq:'leçon 6 — priorités sans parenthèses',
 motivation:'la coopérative achète 3 lots de (12 + 8) plants : 3 × (12 + 8) — l’intérieur du lot se compte avant la multiplication.',
 activites:'1. Comparer 3 × (12 + 8) et 3 × 12 + 8.\n2. Calculer (3 + 4) × 5 étape par étape.\n3. Calculer 24 − (7 + 3 × 2) en respectant l’ordre dans la parenthèse.\n4. Calculer (8 − (−2)) : (−5).',
 scene:SC('marche'),
 concept:[
  'Les parenthèses passent avant tout : on calcule d’abord leur contenu, en appliquant les priorités à l’intérieur.',
  'Ensuite seulement, on enchaîne avec le reste : (3 + 4) × 5 = 7 × 5 = 35.',
  'Dans la parenthèse, les priorités habituelles restent valables : (7 + 3 × 2) = 7 + 6 = 13.',
  'Comparer les écritures : 3 × (12 + 8) = 60, alors que 3 × 12 + 8 = 44 — les parenthèses changent le résultat.'
 ],
 figs:[
  [F('7_dabord'),520,224,'Fig. 1 — Le contenu de la parenthèse passe en premier.'],
  [F('7_etapes'),520,224,'Fig. 2 — 24 − (7 + 3 × 2) : deux étages de priorités.'],
  [F('7_comparer'),520,224,'Fig. 3 — 30 ou 6 ? Les parenthèses tranchent.']
 ],
 method:['Repérer la parenthèse la plus intérieure et la calculer (priorités à l’intérieur).',
  'Réécrire la chaîne sans cette parenthèse.',
  'Reprendre les priorités : puissances, × et ÷, puis + et −.'],
 example:'Calculer (8 − (−2)) : (−5).',
 worked:'Parenthèses : 8 − (−2) = 8 + 2 = 10 ; puis 10 : (−5) = −2.',
 error:['Distribuer la soustraction : 24 − (7 + 6) n’est pas 24 − 7 + 6.','Soustraire une parenthèse, c’est soustraire sa valeur entière : 24 − 13 = 11.'],
 app:['Calculer : (12 − 2) × 3 ; (6 + 4) : (−2) ; −2 × (3 + 5).',
  'Calculer : 5 × (8 − 3) ; (9 − (−3)) : 4 ; 18 − (2 × 4 + 3).',
  'Troupeau : 3 enclos de (12 + 8) zébus ; puis vente de 15 zébus. Combien reste-t-il ?'],
 ans:['10 × 3 = 30 ; 10 : (−2) = −5 ; −2 × 8 = −16.',
  '5 × 5 = 25 ; 12 : 4 = 3 ; 18 − (8 + 3) = 7.',
  '3 × 20 = 60 ; 60 − 15 = 45 zébus.']});

/* ---------- SÉANCE 8 / LEÇON 8 ---------- */
lecons.push({n:8, t:'Différentes écritures : fractions et nombres décimaux', notion:'Opération — dénominateurs 10, 100, 1 000 ; fraction ↔ décimal',
 goal:'passer de l’écriture fractionnaire à l’écriture décimale et réciproquement',
 prereq:'unité I leçons 3 et 4 — fractions ; leçons 1 et 2 — décimaux',
 motivation:'le lamba mesuré : 2,75 m — le tailleur dit « deux mètres soixante-quinze centièmes », soit 275/100 ; la tisserande dit « 11/4 de mètre » : qui a raison ?',
 activites:'1. Écrire 2,75 avec dénominateur 100, puis simplifier.\n2. Écrire 0,125 avec dénominateur 1 000, puis simplifier.\n3. Diviser 3 : 4 pour retrouver l’écriture décimale.\n4. Tenter 1 : 3 — la division s’arrête-t-elle ?',
 scene:SC('tisserand'),
 concept:[
  'Un décimal se traduit en fraction avec 10, 100 ou 1 000 au dénominateur, autant de zéros que de chiffres après la virgule : 2,75 = 275/100.',
  'Cette fraction se simplifie : 275/100 = 11/4 — les deux écritures désignent le même nombre.',
  'Sens inverse : la fraction est une division — 3/4 = 3 : 4 = 0,75.',
  'Certaines fractions ne donnent pas un décimal : 1/3 = 0,333… la division ne s’arrête jamais ; on garde alors l’écriture fractionnaire ou une valeur approchée.'
 ],
 figs:[
  [F('8_dix'),520,224,'Fig. 1 — 0,125 = 125/1 000 = 1/8 : compter les chiffres.'],
  [F('8_vers'),520,224,'Fig. 2 — De la fraction au décimal : effectuer la division.'],
  [F('8_limite'),520,224,'Fig. 3 — 1/3 = 0,333… : quand la division ne finit pas.']
 ],
 method:['Décimal → fraction : dénominateur 10, 100 ou 1 000 selon les chiffres après la virgule, puis simplifier.',
  'Fraction → décimal : effectuer la division du numérateur par le dénominateur.',
  'Si la division ne s’arrête pas, conserver la fraction ou choisir une valeur approchée annoncée.'],
 example:'Écrire 0,36 en fraction irréductible.',
 worked:'0,36 = 36/100 ; 36/100 = 9/25 après division par 4 : la fraction irréductible est 9/25.',
 error:['Lire 0,125 comme 125/10 : le dénominateur dépend du rang du dernier chiffre.','Trois chiffres après la virgule → dénominateur 1 000 : 125/1 000 = 1/8.'],
 app:['Écrire en fraction irréductible : 0,5 ; 0,75 ; 1,2.',
  'Écrire en décimal : 3/5 ; 7/4 ; 9/8.',
  'Laquelle de ces fractions n’est pas un décimal : 1/4, 1/3, 1/8 ? Justifier.'],
 ans:['1/2 ; 3/4 ; 12/10 = 6/5.',
  '0,6 ; 1,75 ; 1,125.',
  '1/3 : 1 : 3 = 0,333… ne s’arrête pas ; 1/4 = 0,25 et 1/8 = 0,125 finissent.']});

/* ---------- SÉANCE 9 / LEÇON 9 ---------- */
lecons.push({n:9, t:'Encadrement d’une fraction, valeurs approchées', notion:'Opération — par défaut, par excès',
 goal:'encadrer une fraction par deux décimaux et donner ses valeurs approchées',
 prereq:'leçons 7 et 8 — divisions ; unité I leçon 2 — comparaison des décimaux',
 motivation:'le lamba de 7/3 de mètre rentre-t-il dans un espace de 2,4 m ? Il faut situer la fraction entre deux décimaux.',
 activites:'1. Effectuer 7 : 3 jusqu’au centième.\n2. Placer les bornes 2 ; 2,3 ; 2,4 ; 3 sur la droite.\n3. Encadrer 7/3 au dixième puis au centième.\n4. Décider : 2,3 est-elle valeur par défaut ou par excès ?',
 scene:SC('tisserand'),
 concept:[
  'Encadrer une fraction, c’est la placer entre deux nombres plus faciles à manier : 2 < 7/3 < 3 entre deux entiers.',
  'En poursuivant la division, on resserre : 2,3 < 7/3 < 2,4 (au dixième) ; 2,33 < 7/3 < 2,34 (au centième).',
  'La borne inférieure est la valeur approchée par défaut ; la borne supérieure, la valeur approchée par excès.',
  'Certaines fractions tombent juste : 14/5 = 2,8 exactement — l’encadrement devient une égalité.'
 ],
 figs:[
  [F('9_droite'),520,224,'Fig. 1 — 7/3 entre 2 et 3, plus près de 2,3.'],
  [F('9_zoom'),520,224,'Fig. 2 — Zoom : 2,33 < 7/3 < 2,34 au centième.'],
  [F('9_defaut'),520,224,'Fig. 3 — Par défaut en dessous, par excès au-dessus.']
 ],
 method:['Effectuer la division en gardant un chiffre de plus que le rang demandé.',
  'Prendre la borne inférieure en coupant (par défaut), la supérieure en ajoutant un pas (par excès).',
  'Rédiger l’encadrement avec les signes < dans l’ordre croissant.'],
 example:'Encadrer 7/3 au dixième et conclure pour le lamba.',
 worked:'7 : 3 = 2,333… ; au dixième : 2,3 < 7/3 < 2,4 ; le lamba (2,33…) rentre dans 2,4 m, mais pas de justesse.',
 error:['Croire que 2,33 est la valeur exacte de 7/3.','0,33 est tronqué : la valeur par défaut est inférieure au nombre ; il manque toujours un peu.'],
 app:['Encadrer 22/7 au centième (division 22 : 7).',
  'Encadrer 4/3 au dixième ; donner valeur par défaut et par excès.',
  'Un ponton supporte 2,4 t ; une charge pèse 7/3 de tonne. Peut-elle passer ?'],
 ans:['22 : 7 = 3,142… ; 3,14 < 22/7 < 3,15.',
  '4 : 3 = 1,333… ; au dixième : 1,3 < 4/3 < 1,4 ; par défaut 1,3 ; par excès 1,4.',
  '7/3 ≈ 2,333… < 2,4 : oui, la charge passe.']});

/* ---------- Révision ---------- */
const revision = {n:10,
 synth:[
  ['Puissances (L1, L2)','aⁿ : a répété n fois ; 10ⁿ = 1 suivi de n zéros ; base négative : pair → +, impair → −','Lire, illustrer et calculer une puissance'],
  ['Propriétés (L3)','aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ : aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿᵐ ; (a × b)ⁿ = aⁿ × bⁿ','Organiser un calcul en une seule puissance'],
  ['Sommes (L4)','Somme algébrique : tout devient addition ; regrouper + et − ; les opposés s’annulent','Mener une chaîne d’additions-soustractions'],
  ['Produits et priorités (L5 – L7)','Signe : impair de négatifs → − ; parenthèses puis puissances, × et ÷, + et −','Effectuer une chaîne avec ou sans parenthèses'],
  ['Écritures et encadrement (L8, L9)','Décimal = fraction sur 10, 100, 1 000 ; fraction = division ; par défaut en dessous, par excès au-dessus','Convertir et encadrer au rang demandé']],
 questions:[
  'Que signifie l’exposant dans 2⁵ ?',
  'Quel est le signe de (−3)⁶ ? Pourquoi ?',
  'Quelle propriété permet d’écrire 7⁵ : 7² = 7³ ?',
  'Pourquoi les opposés simplifient-ils une chaîne ?',
  'Quel est le signe du produit de sept facteurs négatifs ?',
  'Dans 24 − 2 × 3, que calcule-t-on d’abord ?',
  'Que fait-on d’abord dans une chaîne avec parenthèses ?',
  'Comment passer de 0,75 à une fraction irréductible ?',
  'Qu’appelle-t-on valeur approchée par défaut ?'],
 reponses:[
  'Le nombre de facteurs égaux à 2 : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
  'Positif : exposant pair, les signes se regroupent deux par deux.',
  'Le quotient de deux puissances de même base : on soustrait les exposants.',
  'Ils s’annulent : leur somme vaut 0, on les raye de la chaîne.',
  'Négatif : nombre impair de facteurs négatifs.',
  'Le produit 2 × 3 = 6, puis 24 − 6 = 18.',
  'Le contenu des parenthèses, en respectant les priorités à l’intérieur.',
  '0,75 = 75/100 = 3/4 après simplification.',
  'La borne inférieure, obtenue en coupant l’écriture au rang demandé.']};

/* ---------- Examen ---------- */
const exam = {n:11,
 bareme:'Examen de l’unité II — Opération. Durée : 1 heure. Total 20 points : 5 exercices de 4 points.',
 exos:[
  'Puissances (4 pts) : (a) (−3)² ; (b) 2⁵ ; (c) (−0,1)³ ; (d) signe de (−5)⁷ (sans calcul).',
  'Propriétés (4 pts) : écrire en une seule puissance : (a) 2³ × 2² ; (b) 3⁵ : 3² ; (c) (2²)³ ; (d) (4 × 0,5)².',
  'Relatifs (4 pts) : (a) −7 + 12 − 5 + 8 ; (b) (−3) × (+4) ; (c) (−2) × (−2) × (−2) ; (d) (−0,6) × (−0,5).',
  'Priorités (4 pts) : (a) 3 + 4 × 5 ; (b) 12 − 2 × 3 ; (c) (3 + 4) × 5 ; (d) 24 − (7 + 3 × 2).',
  'Écritures et encadrement (4 pts) : (a) 2,75 en fraction irréductible ; (b) 3/5 en décimal ; (c) encadrer 7/3 au dixième ; (d) encadrer 22/7 au centième.'],
 corriges:[
  '(a) 9 (1 pt) ; (b) 32 (1 pt) ; (c) −0,001 (1 pt) ; (d) négatif, exposant impair (1 pt).',
  '(a) 2⁵ = 32 (1 pt) ; (b) 3³ = 27 (1 pt) ; (c) 2⁶ = 64 (1 pt) ; (d) 2² = 4 (1 pt).',
  '(a) +8 par regroupement (1 pt) ; (b) −12 (1 pt) ; (c) −8 (1 pt) ; (d) +0,3 (1 pt).',
  '(a) 3 + 20 = 23 (1 pt) ; (b) 12 − 6 = 6 (1 pt) ; (c) 7 × 5 = 35 (1 pt) ; (d) 24 − 13 = 11 (1 pt).',
  '(a) 275/100 = 11/4 (1 pt) ; (b) 0,6 (1 pt) ; (c) 2,3 < 7/3 < 2,4 (1 pt) ; (d) 3,14 < 22/7 < 3,15 (1 pt).']};

const u = {
 num:'II', title:'Opération', id:'u2', fiche:'situation-operation-T7.html',
 plan:{seances:11},
 ragg:'Effectuer les opérations avec différentes représentations numériques afin de résoudre des problèmes du monde réel (PE T7 — Opération)',
 valeurs:'rigueur dans l’ordre des calculs, confiance en soi face aux signes, persévérance dans la vérification',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

/* Vérifications numériques */
const A=(c,m)=>{if(!c)throw new Error('ASSERT: '+m);};
A(Math.pow(2,5)===32 && Math.pow(3,4)===81 && Math.pow(5,2)===25,'L1 puissances');
A(Math.pow(-2,3)===-8 && Math.pow(0.5,2)===0.25 && Math.abs(Math.pow(-0.1,3)+0.001)<1e-12,'L1 signe/décimal');
A(Math.pow(10,5)===100000 && Math.abs(Math.pow(0.1,4)-0.0001)<1e-12,'L2 puiss10');
A(Math.pow(-1,10)===1 && Math.pow(-1,7)===-1 && Math.abs(1.2*1.2-1.44)<1e-12,'L2 parité/calcul');
A(Math.pow(2,3)*Math.pow(2,2)===Math.pow(2,5) && Math.pow(3,5)/Math.pow(3,2)===Math.pow(3,3),'L3 produit/quotient');
A(Math.pow(Math.pow(2,2),3)===Math.pow(2,6) && Math.pow(4*0.5,2)===4,'L3 puis/produit');
A(-7+12-5+8===8 && (-7-5)+(12+8)===8,'L4 chaîne');
A(Math.abs(-3.5+6.25-2.75+3.5-3.5)<1e-12,'L4 opposés');
A((-3)*(+4)===-12 && (-3)*(-4)===12 && Math.pow(-2,3)===-8,'L5 signes');
A(Math.abs((-0.5)*(-0.2)-0.1)<1e-12 && Math.abs((-0.6)*(-0.5)-0.3)<1e-12,'L5 décimaux');
A(3+4*5===23 && 12-2*3===6 && 7-(-2)*4===15,'L6 priorités');
A(3*Math.pow(-2,2)===12 && (3*(-2))*(3*(-2))===36,'L6 puissance vs produit');
A((3+4)*5===35 && (12-2)*3===30 && (-2)*(3+5)===-16,'L7 parenthèses');
A((8-(-2))/(-5)===-2 && 24-(7+3*2)===11 && (6+4)/(-2)===-5,'L7 chaînes');
A(Math.abs(2.75-275/100)<1e-12 && 275/100===11/4 && Math.abs(0.125-1/8)<1e-12,'L8 écritures');
A(3/5===0.6 && 7/4===1.75 && 9/8===1.125,'L8 divisions');
A(7/3>2.33 && 7/3<2.34 && 22/7>3.14 && 22/7<3.15 && 14/5===2.8,'L9 encadrements');
A(2*15+4===34 && 34*2400===81600,'L6 achats');
A(3*(12+8)===60 && 60-15===45,'L7 troupeau');

const FILE='Manuel-Mathematiques-T7-UNITE2-OPERATION.docx';
module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ II — OPÉRATION', coverSub:'Manuel de l’enseignant — Classe de T7 — 11 séances (9 leçons + révision + examen), conforme au PE T7',
   header:'Unité II — Opération : 9 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U2 OK — '+file, buf.length, 'octets');
}};
if(require.main===module) module.exports.build();
