/* ===== T7 — UNITÉ VI : TRAITEMENT DE DONNÉES (9 séances : 7 leçons + révision + examen) =====
   RAS PE (Traitement de données) : lecture, interprétation et organisation des données ;
   effectifs et fréquences ; diagrammes à bande, ligne brisée, circulaire ; essais favorables
   sur essais effectués ; échelle de probabilité, diagramme à arbre, tableau de probabilité. */
const { loadFig, loadScene, buildDoc } = require('./lib');
const fs = require('fs');
const F = n => loadFig('t7u6s'+n);
const SC = n => loadScene('t7_scene_u6_'+n);

function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel.', 'Annonce de la leçon et du plan.', 'Manuel, tableau.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent les cours antérieurs.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, commentent les données.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Formulent, essaient, comparent les résultats.', 'Approche participative ; tableau-guide.', 'Tableau, cahiers.', 'Hypothèses et résultats notés'],
  ['Vérification', 'Exercices 1 à 3 (application directe).', 'Résolvent seuls, corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée']
 ];
}

const lecons = [];

/* ---------- SÉANCE 1 / LEÇON 1 ---------- */
lecons.push({n:1, t:'Lire et organiser des données recueillies', notion:'Données — collecte, dépouillement, organisation',
 goal:'lire, interpréter et organiser des données recueillies',
 prereq:'lecture de tableaux simples (école primaire)',
 motivation:'l’élection du délégué : 30 bulletins à dépouiller — comment passer des papiers mélangés à un résultat clair ?',
 activites:'1. Dépouiller les bulletins par paquets de cinq.\n2. Classer les données en trois listes.\n3. Dégager la donnée la plus fréquente.\n4. Formuler une conclusion en une phrase.',
 scene:SC('vote'),
 concept:[
  'Recueillir des données, c’est interroger, mesurer ou compter : chaque réponse est une donnée.',
  'Les données brutes sont en désordre ; on les organise en les regroupant par catégories identiques.',
  'Le dépouillement par bâtons (∣∣∣∣ barrés par cinq) évite les oublis et les doubles comptages.',
  'Organiser sert à conclure : la catégorie qui réunit le plus de données saute aux yeux.'
 ],
 figs:[
  [F('1_batons'),520,224,'Fig. 1 — Le dépouillement par paquets de cinq.'],
  [F('1_classer'),520,224,'Fig. 2 — Des données brutes aux catégories.'],
  [F('1_vanio'),520,224,'Fig. 3 — La conclusion se lit d’un coup d’œil.']
 ],
 method:['Lister toutes les données recueillies sans en oublier.',
  'Définir les catégories, puis compter chaque donnée dans sa catégorie avec des bâtons.',
  'Ranger les catégories et rédiger la conclusion.'],
 example:'30 bulletins : 12 pour Soa, 10 pour Rado, 8 pour Tina.',
 worked:'Trois catégories ; en rangeant : Soa 12 > Rado 10 > Tina 8 ; Soa est élue déléguée avec 12 voix sur 30.',
 error:['Compter un bulletin deux fois quand les paquets ne sont pas barrés.','On barre chaque paquet de cinq : un bâton barré ne se recompte jamais.'],
 app:['Fruits vendus ce matin : 5 mangues, 3 avocats, 2 ananas. Quelle est la donnée la plus fréquente ?',
  'Organiser ces pointures de chaussures : 38, 39, 38, 40, 38, 39.',
  'Un carrefour compte 40 passages : 16 vélos, 12 pousse-pousse, 8 motos, 4 voitures. Ranger du plus fréquent au moins fréquent.'],
 ans:['Les mangues : 5 données, la plus fréquente.',
  '38 → 3 données ; 39 → 2 ; 40 → 1.',
  'Vélos 16 > pousse-pousse 12 > motos 8 > voitures 4 ; le vélo domine ce carrefour.']});

/* ---------- SÉANCE 2 / LEÇON 2 ---------- */
lecons.push({n:2, t:'Tableau des effectifs', notion:'Données — effectif, effectif total',
 goal:'présenter des données dans un tableau des effectifs',
 prereq:'leçon 1 — catégories et dépouillement',
 motivation:'les haricots triés du marché : rouges, blancs, noirs — le tableau des effectifs résume le tri en trois lignes.',
 activites:'1. Nommer « effectif » le nombre de données d’une catégorie.\n2. Construire le tableau à deux lignes (catégorie ; effectif).\n3. Calculer l’effectif total.\n4. Vérifier : la somme des effectifs = nombre de données.',
 scene:SC('tri'),
 concept:[
  'L’effectif d’une catégorie est le nombre de données qu’elle contient.',
  'Le tableau des effectifs aligne les catégories et leurs effectifs : tout le dépouillement tient en deux lignes.',
  'L’effectif total est la somme des effectifs : il doit égaler le nombre de données recueillies.',
  'Un tableau se lit horizontalement : catégorie vers effectif, sans se tromper de colonne.'
 ],
 figs:[
  [F('2_tableau'),520,224,'Fig. 1 — Le tableau des effectifs du vote.'],
  [F('2_total'),520,224,'Fig. 2 — Effectif total : 12 + 10 + 8 = 30.'],
  [F('2_lire'),520,224,'Fig. 3 — Lire le tableau : colonne par colonne.']
 ],
 method:['Écrire les catégories sur la première ligne.',
  'Reporter l’effectif de chaque catégorie en dessous.',
  'Ajouter une colonne « total » et vérifier la somme.'],
 example:'Haricots : 18 rouges, 9 blancs, 3 noirs.',
 worked:'Effectifs : 18 ; 9 ; 3 ; total : 18 + 9 + 3 = 30 haricots — le tri est complet.',
 error:['Oublier une catégorie dans le tableau : le total ne tombe plus juste.','La somme des effectifs doit égaler le nombre de données : vérification obligatoire.'],
 app:['Fruits : 12 mangues, 7 avocats, 5 ananas. Construire le tableau des effectifs avec le total.',
  'Compléter : catégories A, B, C avec effectifs 15 ; 8 ; … et total 30.',
  'Pointures recensées : 35 → 2 ; 36 → 5 ; 37 → 8 ; 38 → 5. Effectif total ? Catégorie dominante ?'],
 ans:['| catégorie | mangues | avocats | ananas | total | effectif | 12 | 7 | 5 | 24 |.',
  '15 + 8 + … = 30 → effectif de C : 30 − 23 = 7.',
  'Total : 20 ; pointure 37 la plus fréquente (8).']});

/* ---------- SÉANCE 3 / LEÇON 3 ---------- */
lecons.push({n:3, t:'Les fréquences', notion:'Données — fréquence, pourcentage',
 goal:'calculer les fréquences et les pourcentages d’un tableau',
 prereq:'leçon 2 — effectifs ; unité I — fractions et décimaux',
 motivation:'12 voix sur 30 pour Soa : c’est plus parlant de dire « 40 % des élèves » — la fréquence traduit la part.',
 activites:'1. Écrire la fraction 12/30 pour Soa.\n2. Simplifier et convertir en pourcentage.\n3. Calculer les trois fréquences du vote.\n4. Vérifier que la somme vaut 1 (ou 100 %).',
 scene:SC('vote'),
 concept:[
  'La fréquence d’une catégorie est sa part dans le total : fréquence = effectif : effectif total.',
  'Elle s’écrit en fraction (12/30 = 2/5), en décimal (0,4) ou en pourcentage (40 %).',
  'Additionnées, les fréquences de toutes les catégories redonnent 1, c’est-à-dire 100 %.',
  'On arrondit les pourcentages au besoin en le signalant : 8/30 ≈ 0,267 ≈ 27 %.'
 ],
 figs:[
  [F('3_calcul'),520,224,'Fig. 1 — 12/30 = 2/5 = 0,4 = 40 %.'],
  [F('3_tableau'),520,224,'Fig. 2 — Tableau complet : effectifs et fréquences.'],
  [F('3_verifier'),520,224,'Fig. 3 — La somme des fréquences vaut 100 %.']
 ],
 method:['Diviser l’effectif par l’effectif total (fraction puis décimal).',
  'Multiplier par 100 pour obtenir le pourcentage.',
  'Additionner toutes les fréquences : la somme doit valoir 1 ou 100 %.'],
 example:'Fréquence de Tina : 8/30.',
 worked:'8/30 = 4/15 ≈ 0,267 ; en pourcentage : environ 27 % des élèves.',
 error:['Diviser le total par l’effectif (30/12) : la fréquence dépasserait 1.','C’est toujours effectif ÷ total : la fréquence est une part, elle ne dépasse jamais 1.'],
 app:['Calculer les fréquences en % : 24 données dont 6 rouges.',
  'Ventes : 14 mangues sur 40 fruits. Fraction ? Décimal ? Pourcentage ?',
  'Un dépouillement donne 40 %, 35 % et … pour la troisième catégorie. Compléter.'],
 ans:['6/24 = 1/4 = 0,25 = 25 % ; les autres catégories font 75 %.',
  '14/40 = 7/20 = 0,35 = 35 %.',
  '100 − (40 + 35) = 25 %.']});

/* ---------- SÉANCE 4 / LEÇON 4 ---------- */
lecons.push({n:4, t:'Diagramme à bandes et ligne brisée', notion:'Données — représenter effectifs et fréquences',
 goal:'représenter des données par un diagramme à bandes ou une ligne brisée',
 prereq:'leçons 2 et 3 — tableau, fréquences',
 motivation:'l’étal note ses ventes de fruits chaque jour : la hauteur des bandes raconte la semaine d’un seul regard.',
 activites:'1. Choisir l’échelle : 1 carreau pour 6 kg.\n2. Tracer les cinq bandes de la semaine.\n3. Joindre les sommets pour une ligne brisée.\n4. Lire le meilleur et le moins bon jour.',
 scene:SC('vente'),
 concept:[
  'Dans un diagramme à bandes, la hauteur de chaque bande est proportionnelle à l’effectif.',
  'On choisit une échelle avant de tracer : 1 carreau représente toujours la même quantité.',
  'La ligne brisée relie les points d’une série jour après jour : elle montre l’évolution (montées, descentes).',
  'À bandes pour comparer des catégories ; en ligne brisée pour suivre une donnée dans le temps.'
 ],
 figs:[
  [F('4_bandes'),520,224,'Fig. 1 — Les ventes de la semaine en bandes.'],
  [F('4_ligne'),520,224,'Fig. 2 — Les températures de la semaine en ligne brisée.'],
  [F('4_choisir'),520,224,'Fig. 3 — Quel diagramme pour quelle question ?']
 ],
 method:['Tracer les deux axes et nommer ce qu’ils portent.',
  'Fixer l’échelle sur l’axe vertical, la garder constante.',
  'Tracer bandes ou points, puis vérifier chaque hauteur contre le tableau.'],
 example:'Ventes : 24, 36, 18, 30, 42 kg (lundi à vendredi).',
 worked:'Échelle 1 carreau = 6 kg : bandes de 4 ; 6 ; 3 ; 5 ; 7 carreaux ; vendredi domine, mercredi est le plus bas.',
 error:['Changer d’échelle en route : la bande de 36 kg passerait à 5 carreaux.','L’échelle est un contrat : ici 1 carreau = 6 kg partout, sinon les hauteurs mentent.'],
 app:['Tracer les bandes : effectifs 15 ; 9 ; 6 (échelle : 1 carreau = 3).',
  'Tracer la ligne brisée des notes de Soa : 12, 14, 11, 15, 16.',
  'Comparer : quel jour dépasse 30 kg dans l’exemple des ventes ?'],
 ans:['5 ; 3 ; 2 carreaux.',
  'Cinq points qui montent globalement : 12 → 16, avec un creux à 11.',
  'Mardi (36 kg) et vendredi (42 kg).']});

/* ---------- SÉANCE 5 / LEÇON 5 ---------- */
lecons.push({n:5, t:'Diagramme circulaire', notion:'Données — secteurs et angles proportionnels',
 goal:'représenter des données par un diagramme circulaire',
 prereq:'leçon 3 — fréquences et pourcentages',
 motivation:'le budget de la famille : le riz prend la moitié du disque — le cercle montre les parts d’un coup d’œil.',
 activites:'1. Partir des fréquences du budget (50 %, 25 %, 12,5 %, 12,5 %).\n2. Convertir chaque pourcentage en angle.\n3. Tracer le disque au rapporteur.\n4. Vérifier que les angles totalisent 360°.',
 scene:SC('releve'),
 concept:[
  'Le disque entier représente le total : 100 % correspondent à 360°.',
  'Chaque catégorie prend un angle proportionnel à sa fréquence : angle = fréquence × 360°.',
  '50 % → 180° ; 25 % → 90° ; 12,5 % → 45° : le demi-disque, le quart, le huitième.',
  'On trace au rapporteur secteur après secteur, puis on légende chaque part.'
 ],
 figs:[
  [F('5_parts'),520,224,'Fig. 1 — Le budget en secteurs : le disque entier = 100 %.'],
  [F('5_angles'),520,224,'Fig. 2 — Fréquence × 360° = angle du secteur.'],
  [F('5_tracer'),520,224,'Fig. 3 — Tracer au rapporteur : 180°, 90°, 45°, 45°.']
 ],
 method:['Calculer l’angle de chaque catégorie : pourcentage × 3,6 (ou fréquence × 360).',
  'Tracer le premier rayon, mesurer l’angle au rapporteur, passer au secteur suivant.',
  'Additionner les angles : le total doit rendre 360°.'],
 example:'Riz 50 % du budget : quel secteur ?',
 worked:'50 % de 360° = 0,5 × 360 = 180° : le riz remplit exactement le demi-disque.',
 error:['Tracer le secteur avec le pourcentage au lieu de l’angle (25° au lieu de 90°).','Pourcentage × 3,6 = degrés : 25 % fait 90°, c’est le calcul à écrire avant de tracer.'],
 app:['Calculer les angles : 40 % ; 10 % ; 100 %.',
  'Un disque : catégories 1/2, 1/4 et 1/8, 1/8. Angles de chaque part ?',
  'Ventes : mangues 18 kg, citrons 12 kg, ananas 6 kg (total 36 kg). Angle des mangues ?'],
 ans:['144° ; 36° ; 360°.',
  '180° ; 90° ; 45° ; 45° — somme : 360°.',
  '18/36 = 1/2 → 180° : les mangues font la moitié du disque.']});

/* ---------- SÉANCE 6 / LEÇON 6 ---------- */
lecons.push({n:6, t:'Hasard et échelle de probabilité', notion:'Données — impossible, possible, certain ; essais favorables',
 goal:'situer un événement sur l’échelle de probabilité et comparer des événements',
 prereq:'leçon 3 — fréquences ; fractions (unité I)',
 motivation:'la roue de la fête : 2 secteurs rouges sur 6 — le prix est-il « presque sûr », « possible » ou « presque impossible » ?',
 activites:'1. Classer des événements : impossible, possible, certain.\n2. Compter les issus favorables et les issus possibles à la roue.\n3. Écrire la fraction favorable/ possible.\n4. Placer les fractions sur l’échelle de 0 (impossible) à 1 (certain).',
 scene:SC('roue'),
 concept:[
  'Un événement impossible a la probabilité 0 ; un événement certain a la probabilité 1.',
  'Un événement possible se mesure : probabilité = nombre d’issus favorables ÷ nombre d’issus possibles (tous les issus étant équiprobables).',
  'L’échelle de probabilité va de 0 à 1 : plus la fraction est grande, plus l’événement est probable.',
  'Comparer deux événements, c’est comparer leurs fractions : 1/3 est plus probable que 1/6.'
 ],
 figs:[
  [F('6_echelle'),520,224,'Fig. 1 — L’échelle de 0 (impossible) à 1 (certain).'],
  [F('6_roue'),520,224,'Fig. 2 — Roue à 6 secteurs : P(rouge) = 2/6 = 1/3.'],
  [F('6_comparer'),520,224,'Fig. 3 — Comparer : vert 1/2, rouge 1/3, bleu 1/6.']
 ],
 method:['Compter les issus possibles (tous les secteurs, toutes les faces…).',
  'Compter les issus favorables à l’événement.',
  'Écrire la fraction, la simplifier et la placer sur l’échelle.'],
 example:'Roue à 6 secteurs : 2 rouges, 1 bleu, 3 verts.',
 worked:'P(rouge) = 2/6 = 1/3 ; P(vert) = 3/6 = 1/2 ; P(bleu) = 1/6 ; vert est le plus probable.',
 error:['Compter les couleurs au lieu des secteurs : 1/3 pour « rouge » serait faux si les secteurs sont inégaux.','On compte les SECTEURS : 2 favorables sur 6 possibles.'],
 app:['Dé à 6 faces : P(obtenir 5) ? P(obtenir un nombre pair) ?',
  'Un sac contient 4 billes : 1 blanche, 3 noires. P(blanche) ?',
  'Placer sur l’échelle : 0 ; 1/4 ; 1/2 ; 1 — classer du moins au plus probable : bleu 1/6, pair 1/2, vert 1/2, rouge 1/3.'],
 ans:['1/6 ; 3/6 = 1/2.',
  '1/4 : une bille favorable sur quatre possibles.',
  '0 < 1/6 (bleu) < 1/4 < 1/3 (rouge) < 1/2 (vert, pair) < 1.']});

/* ---------- SÉANCE 7 / LEÇON 7 ---------- */
lecons.push({n:7, t:'Diagramme à arbre et tableau de probabilité', notion:'Données — deux épreuves successives, issues',
 goal:'dénombrer les issues de deux épreuves avec un arbre ou un tableau',
 prereq:'leçon 6 — probabilité d’un événement',
 motivation:'deux lancers de pièce à la fête : pile-pile fait gagner le grand lot — combien d’issues faut-il compter ?',
 activites:'1. Construire l’arbre des deux lancers (2 branches puis 2).\n2. Lister les 4 issues : PP, PF, FP, FF.\n3. Croiser les résultats dans un tableau à double entrée.\n4. Calculer P(un pile exactement) et P(que des faces).',
 scene:SC('roue'),
 concept:[
  'Pour deux épreuves successives, chaque branche du premier niveau se dédouble au second : 2 × 2 = 4 issues.',
  'L’arbre liste toutes les issues sans en oublier : PP, PF, FP, FF — PF et FP sont deux issues différentes.',
  'Le tableau à double entrée offre le même dénombrement en croisant premier et second lancer.',
  'Toutes les issues étant équiprobables : P(issue) = 1/4 ; P(un pile exactement) = 2/4 = 1/2.'
 ],
 figs:[
  [F('7_arbre'),520,224,'Fig. 1 — L’arbre des deux lancers : 4 chemins.'],
  [F('7_tableau'),520,224,'Fig. 2 — Le tableau croisé : PP, PF, FP, FF.'],
  [F('7_prob'),520,224,'Fig. 3 — Dénombrer puis calculer les probabilités.']
 ],
 method:['Dessiner le premier niveau de l’arbre (issu du 1er lancer).',
  'Dédoubler chaque branche au second niveau.',
  'Lire chaque chemin comme une issue, puis compter favorables ÷ total.'],
 example:'P(deux piles) et P(un pile exactement).',
 worked:'4 issues équiprobables : PP → 1/4 ; PF et FP conviennent → 2/4 = 1/2.',
 error:['Croire que « un pile et une face » est une seule issue : cela fausse tous les comptes.','L’ordre compte : PF et FP sont deux chemins distincts de l’arbre.'],
 app:['Roue bicolore (rouge/vert) puis dé (pair/impair) : combien d’issues dans l’arbre ?',
  'Dresser le tableau croisé de : 1er lancer (P/F) × 2e lancer (P/F).',
  'P(que des faces) ? P(au moins un pile) ?'],
 ans:['2 × 2 = 4 issues : (R,pair), (R,impair), (V,pair), (V,impair).',
  'Lignes P, F ; colonnes P, F : cases PP, PF, FP, FF.',
  'FF seule : 1/4 ; au moins un pile : PP, PF, FP → 3/4.']});

/* ---------- Révision ---------- */
const revision = {n:8,
 synth:[
  ['Organiser (L1)','Données brutes → catégories ; dépouillement par paquets de cinq barrés','Lire et organiser des données recueillies'],
  ['Effectifs (L2)','Tableau catégorie/effectif ; total = somme des effectifs','Construire et contrôler un tableau'],
  ['Fréquences (L3)','Effectif ÷ total ; fraction, décimal, % ; somme = 100 %','Passer du nombre à la part'],
  ['Diagrammes (L4, L5)','Bandes et ligne brisée (échelle constante) ; circulaire : angle = fréquence × 360°','Choisir et tracer la représentation'],
  ['Probabilité (L6, L7)','Échelle 0 à 1 ; favorables ÷ possibles ; arbre et tableau pour deux épreuves','Mesurer et comparer le hasard']],
 questions:[
  'À quoi servent les paquets de cinq au dépouillement ?',
  'Que doit vérifier l’effectif total ?',
  'Comment calcule-t-on une fréquence ?',
  'Que vaut la somme des fréquences ?',
  'Quel diagramme choisir pour suivre une température jour après jour ?',
  'Comment trouve-t-on l’angle d’un secteur ?',
  'Où se place l’événement impossible sur l’échelle ?',
  'Combien d’issues pour deux lancers de pièce ?',
  'PF et FP sont-elles la même issue ?'],
 reponses:[
  'À ne pas compter deux fois : chaque paquet barré est clos.',
  'Que la somme des effectifs égale le nombre de données recueillies.',
  'Effectif divisé par l’effectif total (fraction, puis décimal ou %).',
  '1, soit 100 %.',
  'La ligne brisée : elle montre l’évolution ; les bandes comparent des catégories.',
  'Fréquence × 360° (ou pourcentage × 3,6).',
  'En 0 ; l’événement certain en 1.',
  '2 × 2 = 4 issues équiprobables.',
  'Non : deux chemins distincts de l’arbre ; « un pile » vaut alors 2/4 = 1/2.']};

/* ---------- Examen ---------- */
const exam = {n:9,
 bareme:'Examen de l’unité VI — Traitement de données. Durée : 1 heure. Total 20 points : 5 exercices de 4 points.',
 exos:[
  'Effectifs (4 pts) : sondage glace préférée : vanille 14, chocolat 10, tamarin 6. (a) Effectif total ; (b) catégorie dominante ; (c) construire le tableau ; (d) vérification.',
  'Fréquences (4 pts) : même sondage : fréquences de (a) vanille en % ; (b) chocolat en fraction ; (c) tamarin en décimal (2 chiffres) ; (d) somme des trois.',
  'Diagrammes (4 pts) : (a) angle du secteur vanille (arrondi) ; (b) quel diagramme pour les pluies jour par jour ? (c) tracer mentalement : bandes de 8, 12, 4 avec échelle 1 cm = 4 ; (d) un disque 25 % fait quel angle ?',
  'Probabilité (4 pts) : dé équilibré. (a) P(2) ; (b) P(nombre pair) ; (c) un événement de probabilité 0 : exemple ; (d) placer 1/2 et 1/6 sur l’échelle : qui est plus probable ?',
  'Arbre et tableau (4 pts) : deux lancers de pièce. (a) nombre d’issues ; (b) les lister ; (c) P(deux faces) ; (d) P(au moins un pile).'],
 corriges:[
  '(a) 30 (1 pt) ; (b) vanille (1 pt) ; (c) tableau 14 ; 10 ; 6 (1 pt) ; (d) 14 + 10 + 6 = 30 ✓ (1 pt).',
  '(a) 14/30 ≈ 0,47 ≈ 47 % (1 pt) ; (b) 10/30 = 1/3 (1 pt) ; (c) 6/30 = 0,20 (1 pt) ; (d) 1 (ou 100 %) (1 pt).',
  '(a) 14/30 × 360 ≈ 168° (1 pt) ; (b) ligne brisée (1 pt) ; (c) 2 cm ; 3 cm ; 1 cm (1 pt) ; (d) 90° (1 pt).',
  '(a) 1/6 (1 pt) ; (b) 3/6 = 1/2 (1 pt) ; (c) obtenir 7 (par exemple) (1 pt) ; (d) 1/2 > 1/6 : le pair est plus probable (1 pt).',
  '(a) 4 (1 pt) ; (b) PP, PF, FP, FF (1 pt) ; (c) 1/4 (1 pt) ; (d) 3/4 (1 pt).']};

const u = {
 num:'VI', title:'Traitement de données', id:'u6', fiche:'situation-donnees-T7.html',
 plan:{seances:9},
 ragg:'Recueillir et traiter des données statistiques ou probabilistes pour faire des prédictions et prendre des décisions éclairées (PE T7 — Traitement de données)',
 valeurs:'rigoureuse exactitude dans les comptages, honnêteté dans les résultats, prudence dans les prévisions',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

/* Vérifications numériques */
const A=(c,m)=>{if(!c)throw new Error('ASSERT: '+m);};
A(12+10+8===30,'L1/L2 vote total');
A(18+9+3===30 && 15+8+7===30 && 12+7+5===24,'L2 totaux');
A(Math.abs(12/30-0.4)<1e-12 && Math.abs(8/30-0.2667)<1e-3,'L3 fréquences');
A(Math.abs(6/24-0.25)<1e-12 && Math.abs(14/40-0.35)<1e-12,'L3 pourcentages');
A(24/6===4 && 36/6===6 && 18/6===3 && 30/6===5 && 42/6===7,'L4 bandes échelle');
A(Math.abs(0.5*360-180)<1e-9 && Math.abs(0.25*360-90)<1e-9 && Math.abs(0.125*360-45)<1e-9,'L5 angles');
A(Math.abs(0.4*360-144)<1e-9 && 18/36*360===180,'L5 angles exos');
A(Math.abs(14/30*360-168)<1e-9,'examen angle vanille');
A(2/6===1/3 && 3/6===1/2,'L6 roue');
A(2*2===4,'L7 arbre 4 issues');
A(Math.abs(1/6)<1 && 1/2>1/3 && 1/3>1/6,'L6 comparaisons');

const FILE='Manuel-Mathematiques-T7-UNITE6-DONNEES.docx';
module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ VI — TRAITEMENT DE DONNÉES', coverSub:'Manuel de l’enseignant — Classe de T7 — 9 séances (7 leçons + révision + examen), conforme au PE T7',
   header:'Unité VI — Traitement de données : 7 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U6 OK — '+file, buf.length, 'octets');
}};
if(require.main===module) module.exports.build();
