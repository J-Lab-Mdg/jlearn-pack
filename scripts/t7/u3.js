/* ===== T7 — UNITÉ III : ALGÈBRE (11 séances : 9 leçons + révision + examen) =====
   RAS PE (Algèbre) : distributivité simple et factorisation ; expression littérale,
   notion de variable, propriétés de l’égalité, équation du premier degré ;
   réduction et développement. PE_T7.docx tables ALGEBRE. */
const { loadFig, loadScene, buildDoc } = require('./lib');
const fs = require('fs');
const F = n => loadFig('t7u3s'+n);
const SC = n => loadScene('t7_scene_u3_'+n);

function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel.', 'Annonce de la leçon et du plan.', 'Manuel, tableau.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent les cours antérieurs.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, commentent les situations.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Formulent, essaient, comparent les résultats.', 'Approche participative ; tableau-guide.', 'Tableau, cahiers.', 'Hypothèses et résultats notés'],
  ['Vérification', 'Exercices 1 à 3 (application directe).', 'Résolvent seuls, corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée']
 ];
}

const lecons = [];

/* ---------- SÉANCE 1 / LEÇON 1 ---------- */
lecons.push({n:1, t:'Une lettre pour remplacer un nombre', notion:'Algèbre — la lettre comme nombre inconnu ou changeant',
 goal:'introduire la notion de variable en utilisant une lettre',
 prereq:'périmètres et aires (école primaire) ; quatre opérations',
 motivation:'le jardin de l’école n’a pas encore été mesuré : sa longueur est notée L et sa largeur l — peut-on déjà écrire son périmètre ?',
 activites:'1. Écrire le tour du jardin avec les lettres L et l.\n2. Écrire le périmètre d’un carré de côté c.\n3. Compter les allumettes d’une rangée de n triangles.\n4. Remplacer c par 9 dans 4 × c.',
 scene:SC('jardin'),
 concept:[
  'Une lettre peut tenir la place d’un nombre : tant qu’il est inconnu ou qu’il change, on l’appelle variable.',
  'Le périmètre du jardin s’écrit sans connaître les mesures : P = 2 × (L + l) ; le périmètre du carré : P = 4 × c.',
  'Écrire avec des lettres donne une formule : elle reste vraie quelles que soient les valeurs choisies ensuite.',
  'Entre un nombre et une lettre, le signe × peut s’effacer : 4 × c s’écrit 4c ; a × b s’écrit ab.'
 ],
 figs:[
  [F('1_lettre'),520,224,'Fig. 1 — La lettre c et le produit 4c.'],
  [F('1_perimetre'),520,224,'Fig. 2 — Le tour du jardin : P = 2 × (L + l).'],
  [F('1_valeur'),520,224,'Fig. 3 — Si c = 9 m, la formule donne P = 36 m.']
 ],
 method:['Nommer par une lettre chaque nombre inconnu ou variable.',
  'Écrire la relation avec les opérations habituelles.',
  'Simplifier l’écriture : retirer × devant une lettre ou une parenthèse.'],
 example:'Écrire le tour du jardin puis calculer pour L = 12 m et l = 8 m.',
 worked:'P = 2 × (L + l) ; pour L = 12 et l = 8 : P = 2 × (12 + 8) = 2 × 20 = 40 m.',
 error:['Croire que 4c vaut 4 + c : sans signe, c’est la multiplication qui se cache.','4c = 4 × c : pour c = 9, on obtient 36 et non 13.'],
 app:['Écrire avec une lettre : le périmètre d’un carré de côté c ; l’aire de ce carré.',
  'Une ficelle coûte 3 FMG le mètre : écrire le prix de a mètres.',
  'Une rangée de triangles partage leurs côtés : 1 triangle → 3 allumettes, chaque triangle en plus → 2 allumettes. Combien pour n triangles ?'],
 ans:['P = 4c ; A = c × c = c².',
  'Prix = 3 × a = 3a (FMG).',
  '3 + 2 × (n − 1) allumettes, qu’on peut écrire 2n + 1.']});

/* ---------- SÉANCE 2 / LEÇON 2 ---------- */
lecons.push({n:2, t:'Calculer une expression littérale', notion:'Algèbre — remplacer la lettre par une valeur',
 goal:'lire une expression littérale et calculer sa valeur pour un nombre donné',
 prereq:'leçon 1 — la lettre remplace un nombre ; priorités (unité II)',
 motivation:'le compte du moto-taxi s’écrit 1 000 + 500 × k : pour k = 8 km, combien faut-il payer ? La lettre attend sa valeur.',
 activites:'1. Découper 3x + 2 en opérations.\n2. Remplacer x par 5 et calculer.\n3. Calculer 2(a + b) pour a = 6, b = 4.\n4. Calculer x² − 3x pour x = 5.',
 scene:SC('taxi'),
 concept:[
  'Une expression littérale est une chaîne de calculs où figurent des lettres : 3x + 2 se lit « trois fois x, plus deux ».',
  'Pour calculer sa valeur, on remplace chaque lettre par le nombre donné : c’est substituer.',
  'On respecte ensuite les priorités habituelles : pour x = 5, 3x + 2 = 3 × 5 + 2 = 15 + 2 = 17.',
  'La même expression donne des valeurs différentes selon la valeur de la lettre : c’est bien une variable.'
 ],
 figs:[
  [F('2_machine'),520,224,'Fig. 1 — La machine à calculer : × 3 puis + 2.'],
  [F('2_tableau'),520,224,'Fig. 2 — Substituer, puis appliquer les priorités.'],
  [F('2_deux'),520,224,'Fig. 3 — Deux lettres : 2(a + b) pour a = 6, b = 4.']
 ],
 method:['Réécrire l’expression en montrant tous les signes × cachés.',
  'Remplacer chaque lettre par sa valeur entre parenthèses.',
  'Effectuer en suivant les priorités : parenthèses, puissances, × et ÷, puis + et −.'],
 example:'Calculer x² − 3x pour x = 5.',
 worked:'x² − 3x = 5² − 3 × 5 = 25 − 15 = 10.',
 error:['Remplacer x par 5 dans 2x et écrire 25 au lieu de 2 × 5 = 10.','2x signifie 2 × x : le chiffre et la valeur se multiplient, ils ne se collent pas.'],
 app:['Calculer 3x + 2 pour x = 4, puis pour x = 0.',
  'Calculer 2(a + b) pour a = 6, b = 4 ; puis 7 − 2x pour x = 2.',
  'Taxi : prix = 1 000 + 500 × k. Calculer pour k = 8 km et pour k = 20 km.'],
 ans:['14 ; 2.',
  '2 × 10 = 20 ; 7 − 4 = 3.',
  '5 000 FMG ; 11 000 FMG.']});

/* ---------- SÉANCE 3 / LEÇON 3 ---------- */
lecons.push({n:3, t:'Produire une expression littérale', notion:'Algèbre — traduire une situation, elaborer une formule',
 goal:'produire une expression littérale pour élaborer une formule ou traduire un programme de calcul',
 prereq:'leçons 1 et 2 — lettre et substitution',
 motivation:'le tarif du taxi, le prix des mangues, la paye du manœuvre : chaque fois, une règle relie deux grandeurs — y = 500x dit tout en trois signes.',
 activites:'1. Traduire le tarif du taxi en formule avec x (km) et y (prix).\n2. Traduire « le triple d’un nombre, augmenté de 7 ».\n3. Écrire le programme : choisir un nombre, × 4, − 6.\n4. Compléter un tableau de valeurs de y = 2 500x.',
 scene:SC('taxi'),
 concept:[
  'Traduire une situation, c’est choisir des lettres pour les grandeurs puis écrire la relation : prix y = 1 000 + 500x.',
  'Une relation comme y = 2 500x lie deux grandeurs proportionnelles : à chaque x correspond un seul y.',
  'Un programme de calcul se traduit dans l’ordre des opérations, avec des parenthèses si nécessaire.',
  'Vérification : une formule juste redonne les valeurs connues de la situation.'
 ],
 figs:[
  [F('3_taxi'),520,224,'Fig. 1 — Du tarif affiché à la formule y = 1 000 + 500x.'],
  [F('3_relation'),520,224,'Fig. 2 — y = 2 500x : tableau de correspondance.'],
  [F('3_traduire'),520,224,'Fig. 3 — Des mots aux symboles : le triple augmenté de 7.']
 ],
 method:['Repérer les grandeurs qui changent : leur donner une lettre.',
  'Écrire la relation avec les opérations dans le bon ordre.',
  'Contrôler la formule sur une valeur connue de la situation.'],
 example:'Traduire : « le quadruple d’un nombre, diminué de 6 », programme appliqué à 10.',
 worked:'y = 4n − 6 ; pour n = 10 : y = 40 − 6 = 34.',
 error:['Écrire y = (1 000 + 500) × x pour le taxi : la prise en charge se paie une seule fois.','La constante reste hors du produit : y = 1 000 + 500x.'],
 app:['Traduire : « le double d’un nombre, augmenté de 9 » ; puis calculer pour n = 6.',
  'Mangues à 2 500 FMG le kg : écrire y (prix) selon x (kg) ; compléter : x = 3, x = 1,5.',
  'Manœuvre payé 20 000 FMG par jour : écrire la paye p pour j jours ; calculer pour 6 jours.'],
 ans:['y = 2n + 9 ; pour n = 6 : y = 21.',
  'y = 2 500x ; 7 500 FMG ; 3 750 FMG.',
  'p = 20 000j ; 120 000 FMG.']});

/* ---------- SÉANCE 4 / LEÇON 4 ---------- */
lecons.push({n:4, t:'Réduire une expression littérale', notion:'Algèbre — regrouper les termes d’une même famille',
 goal:'réduire une expression littérale en regroupant les termes',
 prereq:'leçons 1 à 3 — lettre et expressions ; commutativité et associativité (unité II)',
 motivation:'la vendeuse verse 3 paniers de mangues puis 5 paniers identiques dans le même bac : 3x + 5x, ce n’est rien d’autre que 8x.',
 activites:'1. Compter en « paniers » : 3x + 5x.\n2. Regrouper dans 2x + 3 + 4x + 1.\n3. Différencier les familles : x et x², a et b.\n4. Choisir l’écriture la plus courte : 5 × a → 5a.',
 scene:SC('mangues'),
 concept:[
  'Les termes qui portent la même lettre forment une famille : 3x et 5x sont des « x » ; on les additionne : 3x + 5x = 8x.',
  'Les nombres seuls forment une autre famille : dans 2x + 3 + 4x + 1, on regroupe 2x + 4x = 6x et 3 + 1 = 4 ; résultat : 6x + 4.',
  'Des lettres différentes ne se mélangent pas : 2a + 3b reste 2a + 3b, et x + x² ne se réduit pas.',
  'Réduire rend l’expression plus simple à lire et plus rapide à calculer, sans changer sa valeur.'
 ],
 figs:[
  [F('4_regrouper'),520,224,'Fig. 1 — 3x + 5x = 8x : même famille, on compte.'],
  [F('4_notation'),520,224,'Fig. 2 — Écritures simplifiées : 5a, ab, x².'],
  [F('4_bilan'),520,224,'Fig. 3 — 2x + 3 + 4x + 1 devient 6x + 4.']
 ],
 method:['Souligner les termes d’une même famille avec la même couleur (ou sous-lignage).',
  'Additionner ou soustraire les nombres de chaque famille.',
  'Réécrire l’expression réduite et vérifier sur une valeur.'],
 example:'Réduire 7a − 2a + 4.',
 worked:'Les « a » ensemble : 7a − 2a = 5a ; le 4 reste : expression réduite 5a + 4.',
 error:['Additionner x et x² : 3x + 2x² ne donne pas 5x³.','x et x² sont deux familles distinctes ; on ne regroupe que ce qui est identique.'],
 app:['Réduire : 5a + 2a ; 9x − 4x ; 3b + b.',
  'Réduire : 4x + 2 + x + 6 ; 7a + 3b − 2a + b.',
  'Vérifier par x = 4 que x + 2x et 3x donnent le même résultat.'],
 ans:['7a ; 5x ; 4b.',
  '5x + 8 ; 5a + 4b.',
  'x + 2x = 4 + 8 = 12 et 3x = 12 : les deux formes coïncident.']});

/* ---------- SÉANCE 5 / LEÇON 5 ---------- */
lecons.push({n:5, t:'Développer avec la distributivité simple', notion:'Algèbre — k(a + b) = ka + kb',
 goal:'développer une expression en utilisant la distributivité simple',
 prereq:'leçon 4 — réduire ; leçons 6 et 7 de l’unité II — priorités et aires',
 motivation:'le maçon monte deux pans de mur de même hauteur k : l’un de longueur a, l’autre b — en aires, k × (a + b) ou ka + kb ?',
 activites:'1. Calculer l’aire totale du mur des deux façons.\n2. Dégager la formule k(a + b) = ka + kb.\n3. Développer 3(a + 5).\n4. Développer 4(2x − 3) et vérifier pour x = 7.',
 scene:SC('macon'),
 concept:[
  'La multiplication se distribue sur l’addition : k × (a + b) = k × a + k × b.',
  'Chaque terme de la parenthèse reçoit le facteur : 3(a + 5) = 3a + 15.',
  'Elle se distribue aussi sur la soustraction : 4(2x − 3) = 8x − 12.',
  'Développer transforme un produit en somme ; on vérifie toujours sur une valeur : pour x = 7, 4(2 × 7 − 3) = 4 × 11 = 44 et 8 × 7 − 12 = 44.'
 ],
 figs:[
  [F('5_aire'),520,224,'Fig. 1 — Le mur : une seule aire, deux calculs.'],
  [F('5_developper'),520,224,'Fig. 2 — 3(a + 5) = 3a + 15 : la flèche en éventail.'],
  [F('5_verifier'),520,224,'Fig. 3 — Vérification numérique pour x = 7 : 44 des deux côtés.']
 ],
 method:['Identifier le facteur k placé devant (ou derrière) la parenthèse.',
  'Multiplier k par chaque terme de la parenthèse, en gardant le signe de chaque terme.',
  'Réduire si des familles se regroupent, puis vérifier sur une valeur.'],
 example:'Développer 6(x + 2).',
 worked:'6(x + 2) = 6 × x + 6 × 2 = 6x + 12 ; pour x = 7 : 54, et 6 × 9 = 54.',
 error:['N’envoyer le facteur que sur le premier terme : 3(a + 5) = 3a + 5 est faux.','Les deux termes reçoivent le facteur : 3a + 15.'],
 app:['Développer : 2(x + 4) ; 5(a − 1) ; 7(3x + 2).',
  'Développer puis réduire : 2(x + 3) + 4x ; 3(2a + 1) − 5a.',
  'Vérifier 4(2x − 3) = 8x − 12 pour x = 10.'],
 ans:['2x + 8 ; 5a − 5 ; 21x + 14.',
  '6x + 6 ; a + 3.',
  '4 × 17 = 68 et 80 − 12 = 68 : l’égalité tient.']});

/* ---------- SÉANCE 6 / LEÇON 6 ---------- */
lecons.push({n:6, t:'Factoriser une somme', notion:'Algèbre — ka + kb = k(a + b), le facteur commun',
 goal:'factoriser une somme dans une expression littérale',
 prereq:'leçon 5 — développer ; repérage de multiples communs',
 motivation:'trois vignes de a plants plus trois rangs de b plants : le maraîcher préfère écrire 3 × (a + b) — un seul arrosage programme tout.',
 activites:'1. Repérer le facteur commun dans 5a + 15.\n2. Sortir le facteur : 5a + 15 = 5(a + 3).\n3. Factoriser 8x + 12 avec le plus grand facteur possible.\n4. Vérifier en redéveloppant.',
 scene:SC('macon'),
 concept:[
  'Factoriser est le geste inverse de développer : on transforme une somme en produit.',
  'On cherche le nombre (ou la lettre) présent dans chaque terme : le facteur commun.',
  'On le sort en tête : ka + kb = k(a + b) ; 5a + 15 = 5(a + 3) car 15 = 5 × 3.',
  'Le plus grand facteur commun sort en entier : 8x + 12 = 4(2x + 3) — et l’on vérifie en redéveloppant.'
 ],
 figs:[
  [F('6_commun'),520,224,'Fig. 1 — 5a + 15 : le 5 se cache dans chaque terme.'],
  [F('6_boite'),520,224,'Fig. 2 — 8x + 12 = 4(2x + 3) : sortir le plus grand facteur.'],
  [F('6_sens'),520,224,'Fig. 3 — Développer et factoriser : les deux flèches.']
 ],
 method:['Écrire chaque terme comme un produit en y faisant apparaître le facteur commun.',
  'Sortir ce facteur devant la parenthèse ; ce qui reste de chaque terme reste dedans.',
  'Redévelopper mentalement pour contrôler l’égalité.'],
 example:'Factoriser 3x + 3y.',
 worked:'Facteur commun 3 : 3x + 3y = 3(x + y) ; contrôle : 3(x + y) = 3x + 3y.',
 error:['Sortir le 2 de 8x + 12 et s’arrêter : 2(4x + 6) laisse encore un 2 dedans.','On sort le plus grand facteur commun d’un coup : 4(2x + 3).'],
 app:['Factoriser : 7x + 7 ; 6a − 9 ; 5b + 10.',
  'Factoriser : 12x + 8 ; 9a + 6 ; 4x − 4y.',
  'Vérifier en développant : 6a − 9 = 3(2a − 3).'],
 ans:['7(x + 1) ; 3(2a − 3) ; 5(b + 2).',
  '4(3x + 2) ; 3(3a + 2) ; 4(x − y).',
  '3(2a − 3) = 6a − 9 : on retombe sur la somme initiale.']});

/* ---------- SÉANCE 7 / LEÇON 7 ---------- */
lecons.push({n:7, t:'Les propriétés de l’égalité', notion:'Algèbre — la balance des deux membres',
 goal:'utiliser les propriétés de l’égalité pour transformer une équation',
 prereq:'leçons 1 à 6 — expressions ; unité I — relatifs',
 motivation:'la balance du marché : un sac de riz plus 2 kg d’un côté, 10 kg de l’autre — que retirer des deux plateaux sans rompre l’équilibre ?',
 activites:'1. Lire l’équilibre x + 2 = 10 sur la balance.\n2. Retirer 2 kg de chaque côté : que reste-t-il ?\n3. Énoncer les quatre gestes autorisés (+, −, ×, ÷).\n4. Transformer 4x = 20 par un seul geste.',
 scene:SC('balance'),
 concept:[
  'Une égalité est comme une balance en équilibre : les deux membres ont la même valeur.',
  'On peut ajouter ou retrancher le même nombre aux deux membres sans rompre l’égalité : x + 2 = 10 donne x = 8.',
  'On peut multiplier ou diviser les deux membres par le même nombre non nul : 4x = 20 donne x = 5.',
  'Chaque geste produit une nouvelle égalité plus simple, qui garde exactement les mêmes solutions.'
 ],
 figs:[
  [F('7_balance'),520,224,'Fig. 1 — x + 2 = 10 : l’équilibre de la balance.'],
  [F('7_retirer'),520,224,'Fig. 2 — Retirer 2 aux deux membres : x = 8.'],
  [F('7_diviser'),520,224,'Fig. 3 — Diviser les deux membres par 4 : x = 5.']
 ],
 method:['Choisir le geste qui débarrasse la lettre (opposé du terme, inverse du facteur).',
  'Appliquer ce geste aux DEUX membres, sans exception.',
  'Réécrire l’égalité simplifiée et la vérifier mentalement.'],
 example:'Transformer x − 5 = 8.',
 worked:'On ajoute 5 aux deux membres : x − 5 + 5 = 8 + 5, donc x = 13.',
 error:['Retirer 2 d’un seul côté de x + 2 = 10 et écrire x = 10.','La balance bascule : le même geste est obligatoire des deux côtés.'],
 app:['Transformer par un geste : x + 7 = 15 ; x − 4 = 9.',
  'Transformer par un geste : 3x = 18 ; x : 3 = 6.',
  'Le prix de 5 sacs identiques est 40 000 FMG : écrire l’égalité 5p = 40 000 et la transformer.'],
 ans:['x = 8 ; x = 13.',
  'x = 6 ; x = 18.',
  'p = 8 000 : le sac coûte 8 000 FMG.']});

/* ---------- SÉANCE 8 / LEÇON 8 ---------- */
lecons.push({n:8, t:'Résoudre une équation du premier degré', notion:'Algèbre — ax + b = c : isoler la lettre',
 goal:'résoudre une équation du premier degré',
 prereq:'leçon 7 — propriétés de l’égalité ; leçons de l’unité II — relatifs',
 motivation:'je pense un nombre, je le triple et j’ajoute 4 : j’obtiens 19 — quel est ce nombre ? L’équation 3x + 4 = 19 va le livrer.',
 activites:'1. Écrire la devinette en équation.\n2. Retirer 4 aux deux membres.\n3. Diviser par 3 : conclusion.\n4. Vérifier en remplaçant dans la devinette.',
 scene:SC('devinette'),
 concept:[
  'Résoudre, c’est isoler la lettre dans un membre : on démonte la machine à calcul à l’envers.',
  'Dernier geste posé, premier geste défait : 3x + 4 = 19 → on retire 4 : 3x = 15 → on divise par 3 : x = 5.',
  'Une équation avec la lettre des deux côtés se rassemble d’abord : 2x + 3 = x + 8 → on retire x : x + 3 = 8 → x = 5.',
  'La vérification est obligatoire : on remplace la solution trouvée dans l’équation de départ — 3 × 5 + 4 = 19 : ça tient.'
 ],
 figs:[
  [F('8_etapes'),520,224,'Fig. 1 — 3x + 4 = 19 : deux gestes pour isoler x.'],
  [F('8_membres'),520,224,'Fig. 2 — 2x + 3 = x + 8 : rassembler les x.'],
  [F('8_verifier'),520,224,'Fig. 3 — Remplacer x = 5 : la balance retrouve l’équilibre.']
 ],
 method:['Rassembler les termes en x d’un côté, les nombres de l’autre (par les propriétés de l’égalité).',
  'Diviser les deux membres par le coefficient de x.',
  'Vérifier la solution dans l’équation initiale.'],
 example:'Résoudre 5x − 7 = 18.',
 worked:'On ajoute 7 : 5x = 25 ; on divise par 5 : x = 5 ; vérification : 5 × 5 − 7 = 18.',
 error:['Diviser par 2 avant de rassembler dans 2x + 3 = x + 8 : tout devient fraction.','D’abord rassembler (retirer x), ensuite diviser : plus propre et sans fractions.'],
 app:['Résoudre : x + 6 = 14 ; 4x = 36 ; x : 2 = 9.',
  'Résoudre : 2x + 3 = 11 ; 7x − 2 = 3x + 10.',
  'Résoudre : (x : 2) + 1 = 7 ; 6x − 5 = 2x + 19.'],
 ans:['x = 8 ; x = 9 ; x = 18.',
  '2x = 8 → x = 4 ; 4x = 12 → x = 3.',
  'x : 2 = 6 → x = 12 ; 4x = 24 → x = 6.']});

/* ---------- SÉANCE 9 / LEÇON 9 ---------- */
lecons.push({n:9, t:'Traduire un problème en équation', notion:'Algèbre — choisir l’inconnue, résoudre, vérifier',
 goal:'résoudre un problème concret en le traduisant par une équation',
 prereq:'leçon 8 — résolution ; leçon 3 — traduction en formule',
 motivation:'le champ rectangulaire fait 46 m de tour et sa longueur dépasse sa largeur de 5 m — sans équation, on tâtonne ; avec, on conclut.',
 activites:'1. Choisir l’inconnue : la largeur l.\n2. Exprimer la longueur : l + 5.\n3. Écrire l’équation du périmètre et résoudre.\n4. Vérifier avec le dessin et conclure par une phrase.',
 scene:SC('devinette'),
 concept:[
  'Première étape : nommer l’inconnue par une lettre, en précisant ce qu’elle désigne (la largeur l, en mètres).',
  'Deuxième étape : traduire chaque donnée en relation — « 5 m de plus » devient l + 5 ; « tour de 46 m » devient 2 × (l + (l + 5)) = 46.',
  'Troisième étape : résoudre l’équation obtenue.',
  'Dernière étape : vérifier dans le problème (pas seulement dans l’équation) et répondre par une phrase entière avec l’unité.'
 ],
 figs:[
  [F('9_rectangle'),520,224,'Fig. 1 — Le champ : largeur l, longueur l + 5.'],
  [F('9_resolution'),520,224,'Fig. 2 — 2 × (2l + 5) = 46 : la résolution pas à pas.'],
  [F('9_bilan'),520,224,'Fig. 3 — Les quatre étapes de la méthode.']
 ],
 method:['Choisir et nommer l’inconnue.',
  'Traduire les données en équation.',
  'Résoudre, puis vérifier dans l’énoncé et rédiger la réponse.'],
 example:'Trouver les dimensions du champ de 46 m de tour.',
 worked:'2 × (2l + 5) = 46 → 2l + 5 = 23 → 2l = 18 → l = 9 ; la longueur vaut 9 + 5 = 14 ; contrôle : 2 × (9 + 14) = 46 m.',
 error:['Oublier que l et l + 5 comptent chacune deux fois dans le tour : écrire l + (l + 5) = 46 conduit à une demi-réponse fausse.','Le périmètre complet s’écrit 2 × (l + (l + 5)).'],
 app:['Je pense un nombre, je le double et j’ajoute 7 : j’obtiens 25. Trouver ce nombre.',
  'Partage de 80 000 FMG entre 3 enfants : l’aîné reçoit 5 000 FMG de plus que chacun de ses deux cadets. Part de chacun ?',
  'Un câble de 54 m est coupé en deux morceaux dont l’un est le double de l’autre. Longueurs ?'],
 ans:['2x + 7 = 25 → 2x = 18 → x = 9.',
  '3x + 5 000 = 80 000 → 3x = 75 000 → x = 25 000 ; chaque cadet reçoit 25 000 FMG, l’aîné 30 000 FMG ; contrôle : 25 000 + 25 000 + 30 000 = 80 000.',
  'x + 2x = 54 → 3x = 54 → x = 18 ; les morceaux font 18 m et 36 m.']});

/* ---------- Révision ---------- */
const revision = {n:10,
 synth:[
  ['La lettre (L1 – L3)','Variable ; formule ; substituer une valeur ; traduire une situation ou un programme','Écrire, lire et calculer une expression littérale'],
  ['Réduire (L4)','Regrouper les termes d’une même famille ; 3x + 5x = 8x ; x et x² distincts','Simplifier une expression sans changer sa valeur'],
  ['Distributivité (L5, L6)','Développer : k(a + b) = ka + kb ; factoriser : sortir le plus grand facteur commun','Passer du produit à la somme et inversement'],
  ['Propriétés de l’égalité (L7)','Même geste aux deux membres : +, −, ×, ÷ (nombre non nul)','Transformer une équation en gardant ses solutions'],
  ['Équations (L8, L9)','Rassembler les x, diviser par le coefficient, vérifier ; quatre étapes pour un problème','Résoudre ax + b = c et les problèmes traduits']],
 questions:[
  'Que signifie l’écriture 4c ?',
  'Que fait-on pour « calculer » 3x + 2 quand x = 5 ?',
  'Comment traduit-on « le triple d’un nombre augmenté de 7 » ?',
  'Pourquoi 2a + 3b ne peut-il pas se réduire ?',
  'Citer la formule de la distributivité simple.',
  'Que signifie « factoriser » ?',
  'Quels sont les quatre gestes qui conservent une égalité ?',
  'Par quoi commence-t-on pour résoudre 2x + 3 = x + 8 ?',
  'Quelles sont les quatre étapes de résolution d’un problème ?'],
 reponses:[
  '4 × c : quatre fois la valeur de c.',
  'On substitue : 3 × 5 + 2 = 17.',
  'y = 3n + 7.',
  'Ce sont deux familles différentes : on ne regroupe que les termes identiques.',
  'k × (a + b) = ka + kb (vrai aussi avec la soustraction).',
  'Transformer une somme en produit en sortant le facteur commun : ka + kb = k(a + b).',
  'Ajouter, retrancher, multiplier ou diviser par un même nombre (non nul pour × et ÷).',
  'Par rassembler les x : on retire x aux deux membres, x + 3 = 8.',
  'Choisir l’inconnue, traduire en équation, résoudre, vérifier et répondre par une phrase.']};

/* ---------- Examen ---------- */
const exam = {n:11,
 bareme:'Examen de l’unité III — Algèbre. Durée : 1 heure. Total 20 points : 5 exercices de 4 points.',
 exos:[
  'Variable et expression (4 pts) : (a) périmètre d’un carré de côté 9 cm (formule 4c) ; (b) valeur de 3x + 2 pour x = 4 ; (c) écrire le tour d’un champ de longueur L et largeur l ; (d) valeur de 2a − 6 pour a = 5.',
  'Réduction (4 pts) : réduire : (a) 3x + 5x ; (b) 7a − 2a ; (c) 2x + 3 + 4x + 1 ; (d) 5 × b + 2 × b.',
  'Distributivité (4 pts) : (a) développer 3(a + 5) ; (b) développer 4(2x − 3) ; (c) factoriser 5a + 15 ; (d) factoriser 6a − 9.',
  'Équations (4 pts) : résoudre : (a) x + 3 = 10 ; (b) 4x = 20 ; (c) 3x + 4 = 19 ; (d) 5x − 7 = 2x + 8.',
  'Problème (4 pts) : le taxi affiche 1 000 FMG + 500 FMG/km. (a) Prix pour 12 km ; (b) un client paie 6 000 FMG : combien de km a-t-il parcourus ?'],
 corriges:[
  '(a) 4 × 9 = 36 cm (1 pt) ; (b) 14 (1 pt) ; (c) P = 2(L + l) (1 pt) ; (d) 4 (1 pt).',
  '(a) 8x (1 pt) ; (b) 5a (1 pt) ; (c) 6x + 4 (1 pt) ; (d) 7b (1 pt).',
  '(a) 3a + 15 (1 pt) ; (b) 8x − 12 (1 pt) ; (c) 5(a + 3) (1 pt) ; (d) 3(2a − 3) (1 pt).',
  '(a) x = 7 (1 pt) ; (b) x = 5 (1 pt) ; (c) x = 5 (1 pt) ; (d) x = 5 (1 pt).',
  '(a) 1 000 + 500 × 12 = 7 000 FMG (2 pts) ; (b) 1 000 + 500k = 6 000 → 500k = 5 000 → k = 10 km (2 pts).']};

const u = {
 num:'III', title:'Algèbre', id:'u3', fiche:'situation-algebre-T7.html',
 plan:{seances:11},
 ragg:'Utiliser le langage algébrique — expressions littérales, distributivité, équations — pour traduire et résoudre des problèmes (PE T7 — Algèbre)',
 valeurs:'rigueur dans l’écriture des symboles, honnêteté dans la vérification, persévérance dans la résolution',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

/* Vérifications numériques */
const A=(c,m)=>{if(!c)throw new Error('ASSERT: '+m);};
A(4*9===36 && 2*(12+8)===40,'L1 périmètres');
A(3+2*(4-1)===9,'L1 allumettes 2n+1 → n=4 : 9');
A(3*5+2===17 && 3*4+2===14 && 2*(6+4)===20,'L2 substitutions');
A(5*5-3*5===10 && 7-2*2===3,'L2 x² et 7−2x');
A(1000+500*8===5000 && 1000+500*20===11000 && 1000+500*12===7000,'L2/L9 taxi');
A(2500*3===7500 && 2500*1.5===3750,'L3 mangues');
A(4*10-6===34 && 2*6+9===21,'L3 programmes');
A((3*4+5*4)===8*4 && (2*4+3+4*4+1)===(6*4+4),'L4 regroupements');
A(7*3-2*3===5*3 && (7*2+3*5-2*2+5)===(5*2+4*5),'L4 7a-2a et familles');
A(3*(7+5)===3*7+15 && 4*(2*7-3)===8*7-12,'L5 développer');
A(6*(7+2)===6*7+12 && 4*(2*10-3)===8*10-12,'L5 vérifications');
A(5*2+15===5*(2+3) && 8*3+12===4*(2*3+3) && 6*4-9===3*(2*4-3),'L6 factoriser');
A(7+2===9 && 4*5===20 && 6*3===18 && 18/3===6,'L7 gestes');
A(3*5+4===19 && 5*5-7===18,'L8 solutions 5');
A(2*5+3===5+8 && 7*3-2===3*3+10 && 12/2+1===7 && 6*6-5===2*6+19,'L8 rassemblements');
A(2*(9+14)===46 && 2*9+7===25 && 18+36===54,'L9 problèmes');
A(3*25000+5000===80000 && 25000+25000+30000===80000,'L9 partage');
A(1000+500*10===6000,'examen taxi k=10');

const FILE='Manuel-Mathematiques-T7-UNITE3-ALGEBRE.docx';
module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ III — ALGÈBRE', coverSub:'Manuel de l’enseignant — Classe de T7 — 11 séances (9 leçons + révision + examen), conforme au PE T7',
   header:'Unité III — Algèbre : 9 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U3 OK — '+file, buf.length, 'octets');
}};
if(require.main===module) module.exports.build();
