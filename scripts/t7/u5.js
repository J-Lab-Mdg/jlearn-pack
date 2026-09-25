/* ===== T7 — UNITÉ V : MESURE (10 séances : 8 leçons + révision + examen) ===== */
const { loadFig, loadScene, buildDoc } = require('./lib');
const F = n => loadFig('t7u5s'+n);
const SC = n => loadScene('t7_scene_u5_'+n);

/* Fiche de préparation générée depuis les métadonnées de la leçon */
function mkFiche(l){
 return [
  ['Présentation', `Leçon ${l.n} — ${l.t}\nDurée : 45 minutes`, 'S’installent, sortent le matériel, écoutent.', 'Annonce de la leçon et du plan.', 'Manuel, tableau.', '—'],
  ['Rappel', `Réactivation : ${l.prereq}`, 'Répondent, citent la leçon précédente.', 'Questions – réponses rapides.', 'Leçons précédentes.', 'Points repris au tableau'],
  ['Motivation', `Situation : ${l.motivation}`, 'Observent la scène, décrivent ce qu’ils voient.', 'Mise en situation par l’image.', 'Scène illustrée (manuel).', '—'],
  ['Développement', 'Hypothèse → essai → vérification → résultat.\n' + l.activites, 'Formulent des hypothèses, cherchent, écrivent, comparent leurs résultats.', 'Approche participative ; tableau-guide.', 'Tableau, règle graduée, cahiers.', 'Hypothèses et résultats notés'],
  ['Vérification', 'Exercices 1 à 3 (application directe de la trace écrite).', 'Résolvent seuls, puis corrigent au tableau.', 'Exercices gradués, correction immédiate.', 'Cahier d’exercices.', 'Résultats contrôlés'],
  ['Synthèse', 'Lecture collective puis recopie de la trace écrite.', 'Lisent à voix haute, recopient proprement.', 'Trace écrite guidée.', 'Cahier de leçon.', 'Trace vérifiée et signée']
 ];
}

const lecons = [];

/* ============ SÉANCE 1 / LEÇON 1 — Grandeurs mesurables et leurs unités ============ */
lecons.push({n:1, t:'Les grandeurs mesurables et leurs unités', notion:'Mesure — grandeurs, unités, conversions',
 goal:'distinguer les grandeurs mesurables, citer leurs unités et convertir une longueur, une masse ou une contenance',
 prereq:'mesures simples vues au primaire : mètre, kilogramme, litre',
 motivation:'au marché : le vendeur pèse le riz en kilogrammes, mesure le tissu en mètres et vend l’huile en litres — trois grandeurs, trois unités',
 activites:'1. Citer trois objets mesurables de la scène.\n2. Associer chaque objet à son instrument et à son unité.\n3. Trier les unités dans l’escalier de conversion.',
 scene:SC('epicerie'),
 concept:[
  'Une grandeur mesurable se compare à une unité : la longueur au mètre (m), la masse au kilogramme (kg) et au gramme (g), la contenance au litre (L).',
  'Les unités de longueur se suivent de dix en dix : km — hm — dam — m — dm — cm — mm. On multiplie par 10 en descendant une marche, on divise par 10 en montant.',
  'Pour convertir sans erreur, on peut poser le nombre dans le tableau de conversion : les unités sous l’unité donnée, puis on complète de zéros jusqu’à l’unité demandée.',
  'Retenir : 1 km = 1 000 m ; 1 m = 100 cm ; 1 cm = 10 mm ; 1 kg = 1 000 g ; 1 L = 10 dL = 100 cL = 1 000 mL.'
 ],
 figs:[
  [F('1_grandeurs'),520,224,'Fig. 1 — Trois familles de grandeurs : longueur, masse, contenance.'],
  [F('1_escalier'),520,224,'Fig. 2 — L’escalier des unités de longueur : ×10 en descendant.'],
  [F('1_tableau'),520,224,'Fig. 3 — Le tableau de conversion : 2,5 km = 2 500 m.']
 ],
 method:['Repérer l’unité de départ et l’unité demandée.',
  'Compter les marches entre les deux sur l’escalier (ou aligner le nombre dans le tableau).',
  'Multiplier par 10 à chaque marche descendue (ou compléter de zéros), diviser en montant.'],
 example:'Convertir 2,5 km en mètres.',
 worked:'2,5 km = 2 500 m : trois marches vers les petites unités, donc × 10 × 10 × 10 = × 1 000.',
 error:['Multiplier quand il faut diviser : 2,5 km deviendrait 0,002 5 m.','Dans le sens des petites unités le nombre grandit : 2,5 km = 2 500 m et non 0,002 5 m.'],
 app:['Convertir en mètres : 3 km ; 45 cm ; 12 dm.',
  'Convertir en grammes : 2 kg ; 0,5 kg ; 1,25 kg.',
  'Compléter avec l’unité qui convient : la longueur du court de basket vaut 28 … ; un sac de riz pèse 50 … ; un jerrican contient 20 … .'],
 ans:['3 km = 3 000 m ; 45 cm = 0,45 m ; 12 dm = 1,2 m. Trois marches pour le kilomètre, deux pour les centimètres, une pour le décimètre.',
  '2 kg = 2 000 g ; 0,5 kg = 500 g ; 1,25 kg = 1 250 g. On multiplie par 1 000.',
  '28 m ; 50 kg ; 20 L. On choisit l’unité adaptée à la taille de l’objet.']});

/* ============ SÉANCE 2 / LEÇON 2 — Calculer avec les grandeurs ============ */
lecons.push({n:2, t:'Calculer avec les grandeurs mesurables', notion:'Mesure — opérations sur les grandeurs (conversion préalable)',
 goal:'convertir les mesures dans la même unité avant d’additionner ou de soustraire des grandeurs',
 prereq:'leçon 1 : conversions longueur, masse, contenance',
 motivation:'Mamy marche 1,2 km puis encore 350 m pour aller à l’école : quelle distance au total ? On ne peut pas additionner 1,2 et 350',
 activites:'1. Lire la distance en deux parties.\n2. Débat : peut-on écrire 1,2 + 350 ?\n3. Convertir puis calculer, comparer avec l’estimation au départ.',
 scene:SC('marche'),
 concept:[
  'On ne calcule avec des grandeurs qu’après les avoir écrites dans la même unité : c’est la règle d’or, la conversion est la première ligne du calcul.',
  'Addition ou soustraction de longueurs, de masses, de contenances : même unité partout, puis on garde cette unité dans le résultat.',
  'Le résultat peut ensuite être reconverti dans une autre unité si la question le demande.'
 ],
 figs:[
  [F('2_regle'),520,224,'Fig. 1 — La règle d’or : convertir avant de calculer.'],
  [F('2_somme'),520,224,'Fig. 2 — Additionner deux longueurs : 1 200 m + 350 m = 1 550 m.'],
  [F('2_balance'),520,224,'Fig. 3 — Additionner deux masses : 2 500 g + 750 g = 3 250 g.']
 ],
 method:['Convertir chaque mesure dans l’unité de calcul choisie (souvent la plus petite).',
  'Effectuer l’opération sur les nombres obtenus.',
  'Écrire la réponse avec l’unité, éventuellement reconvertie.'],
 example:'1,2 km + 350 m.',
 worked:'1,2 km = 1 200 m ; 1 200 + 350 = 1 550 m, c’est-à-dire 1,55 km.',
 error:['Écrire 1,2 + 350 = 351,2 sans convertir.','Unités différentes : on convertit d’abord — 1 200 m + 350 m = 1 550 m.'],
 app:['Calculer en mètres : 0,8 km + 450 m ; 3 km − 1 200 m.',
  'Calculer en grammes : 2,5 kg + 750 g ; 4 kg − 600 g.',
  'Un jerrican de 20 L et une bouteille de 1 500 mL : quelle contenance totale en litres ?'],
 ans:['800 + 450 = 1 250 m ; 3 000 − 1 200 = 1 800 m. Conversion d’abord, calcul ensuite.',
  '2 500 + 750 = 3 250 g ; 4 000 − 600 = 3 400 g. Tout se passe en grammes.',
  '1 500 mL = 1,5 L ; 20 + 1,5 = 21,5 L. Le résultat est demandé en litres.']});

/* ============ SÉANCE 3 / LEÇON 3 — Le périmètre ============ */
lecons.push({n:3, t:'Le périmètre d’une figure et la circonférence du cercle', notion:'Mesure — périmètres, circonférence',
 goal:'calculer le périmètre d’un polygone et la circonférence d’un cercle',
 prereq:'figures usuelles (triangle, rectangle, carré, cercle) ; leçon 2',
 motivation:'clôturer une rizière rectangulaire de 45 m sur 30 m : quelle longueur de clôture faut-il acheter ?',
 activites:'1. Entourer la rizière au doigt sur la scène.\n2. Mesurer au fil le tour d’un disque, comparer au diamètre.\n3. Déduire les formules et les appliquer.',
 scene:SC('cloture'),
 concept:[
  'Le périmètre d’un polygone est la longueur de son tour : on additionne les longueurs de tous les côtés, dans la même unité.',
  'Périmètre du rectangle : P = 2 × (L + l) ; périmètre du carré : P = 4 × c.',
  'En déroulant un fil autour d’un cercle, on mesure un peu plus de 3 fois le diamètre : ce nombre s’appelle π (pi) et vaut environ 3,14.',
  'Circonférence du cercle : C = π × D = 2 × π × R (R rayon, D diamètre).'
 ],
 figs:[
  [F('3_somme'),520,224,'Fig. 1 — Le périmètre : la somme des côtés, P = 12 cm.'],
  [F('3_formules'),520,224,'Fig. 2 — P = 2 × (L + l) et P = 4 × c.'],
  [F('3_cercle'),520,224,'Fig. 3 — La circonférence : C = 2 × π × R ≈ 12,56 cm.']
 ],
 method:['Pour un polygone : additionner les côtés un à un sans en oublier.',
  'Pour le rectangle ou le carré : utiliser la formule.',
  'Pour un cercle : multiplier le diamètre par π ≈ 3,14 (ou le rayon par 2π).'],
 example:'Tour d’un cercle de rayon 2 cm.',
 worked:'C = 2 × π × R ≈ 2 × 3,14 × 2 = 12,56 cm : un peu plus de trois fois le diamètre de 4 cm.',
 error:['Oublier un côté dans la somme, ou confondre rayon et diamètre : 3,14 × 2 = 6,28 cm au lieu de 12,56 cm.','Compter tous les côtés ; la circonférence utilise le diamètre (ou 2 × R).'],
 app:['Triangle de côtés 5 cm, 3 cm, 4 cm : périmètre ?',
  'Rectangle L = 8 cm, l = 5 cm ; carré c = 6 cm : périmètres ?',
  'Roue de diamètre 60 cm : quelle distance parcourue en un tour ? (π ≈ 3,14)'],
 ans:['P = 5 + 3 + 4 = 12 cm. On fait le tour en additionnant.',
  'P = 2 × (8 + 5) = 2 × 13 = 26 cm ; P = 4 × 6 = 24 cm.',
  'C = π × D ≈ 3,14 × 60 = 188,4 cm par tour de roue.']});

/* ============ SÉANCE 4 / LEÇON 4 — L’aire ============ */
lecons.push({n:4, t:'L’aire d’une figure', notion:'Mesure — aires du rectangle, du carré, du triangle',
 goal:'calculer l’aire du rectangle, du carré et du triangle rectangle',
 prereq:'leçon 3 : le périmètre mesure le tour, l’aire mesure la surface',
 motivation:'deux parcelles de rizière se ressemblent : laquelle est la plus grande ? Ce n’est plus une question de tour mais de surface',
 activites:'1. Couvrir un rectangle de carreaux identiques et compter.\n2. Ranger les carreaux par lignes : la multiplication apparaît.\n3. Découper un rectangle en deux triangles identiques.',
 scene:SC('riziere'),
 concept:[
  'L’aire d’une figure est la mesure de sa surface, en carreaux-unité : m², cm²…',
  'Aire du rectangle : A = L × l ; aire du carré : A = c × c = c².',
  'Deux triangles rectangles identiques reforment le rectangle : l’aire du triangle est la moitié, A = (b × h) : 2.',
  'Ne pas confondre : le périmètre mesure le tour (en m, cm), l’aire mesure la surface (en m², cm²).'
 ],
 figs:[
  [F('4_rect'),520,224,'Fig. 1 — L’aire du rectangle : 8 × 5 = 40 carreaux, A = 40 cm².'],
  [F('4_carre'),520,224,'Fig. 2 — L’aire du carré : A = c × c = 36 cm².'],
  [F('4_triangle'),520,224,'Fig. 3 — L’aire du triangle : la moitié du rectangle, A = 12 cm².']
 ],
 method:['Choisir la formule selon la figure : L × l, c × c ou (b × h) : 2.',
  'Noter les mesures dans la même unité, puis calculer.',
  'Écrire l’aire en unité carrée : m², cm²…'],
 example:'Parcelle carrée de 30 m de côté.',
 worked:'A = c² = 30 × 30 = 900 m². (Son tour ferait 4 × 30 = 120 m : autre mesure !)',
 error:['Donner l’aire en mètres simples, ou calculer le périmètre à la place.','L’aire s’exprime en unités carrées (m², cm²) : A = L × l.'],
 app:['Rectangle de 8 cm sur 5 cm : aire ?',
  'Carré de 6 cm de côté : aire ?',
  'Triangle rectangle de base 6 cm et de hauteur 4 cm : aire ?'],
 ans:['A = 8 × 5 = 40 cm². Longueur fois largeur.',
  'A = 6 × 6 = 36 cm². Le carré du côté.',
  'A = (6 × 4) : 2 = 24 : 2 = 12 cm². La moitié du rectangle.']});

/* ============ SÉANCE 5 / LEÇON 5 — Aire d’un assemblage de figures ============ */
lecons.push({n:5, t:'L’aire d’un assemblage de figures', notion:'Mesure — aires par superposition : ajouter ou soustraire',
 goal:'calculer l’aire d’une figure composée en l’assemblant ou en la soustrayant de figures connues',
 prereq:'leçon 4 : aires du rectangle, du carré, du triangle',
 motivation:'le terrain de l’école a la forme d’un L, la façade de la maison est un rectangle surmonté d’un triangle : comment calculer ces surfaces ?',
 activites:'1. Découper le L en deux rectangles au crayon.\n2. Calculer chaque morceau puis additionner.\n3. Pour le cadre : soustraire la photo du cadre entier.',
 scene:SC('jardin'),
 concept:[
  'Un assemblage de figures se découpe en figures connues : les aires s’ajoutent — le découpage ne change pas l’aire.',
  'Quand une partie est enlevée, son aire se soustrait : la partie restante vaut la différence des deux aires.',
  'Sur le dessin, on trace le découpage en pointillés et on numérote les morceaux.'
 ],
 figs:[
  [F('5_L'),520,224,'Fig. 1 — Terrain en L : 15 + 16 = 31 m².'],
  [F('5_maison'),520,224,'Fig. 2 — Mur + pignon : 24 + 6 = 30 m².'],
  [F('5_soustraire'),520,224,'Fig. 3 — Cadre : 80 − 48 = 32 cm².']
 ],
 method:['Découper la figure en morceaux connus (rectangle, carré, triangle) — ou repérer la partie à enlever.',
  'Calculer l’aire de chaque morceau.',
  'Ajouter les aires (assemblage) ou soustraire (partie enlevée).'],
 example:'Façade : mur 6 m × 4 m, pignon triangle base 6 m, hauteur 2 m.',
 worked:'Mur : 24 m² ; pignon : (6 × 2) : 2 = 6 m² ; façade : 24 + 6 = 30 m².',
 error:['Additionner quand il faut soustraire : le bord d’un cadre n’est pas 80 + 48.','Partie enlevée = différence : 80 − 48 = 32 cm².'],
 app:['Terrain en L : rectangle ① 5 × 3 et rectangle ② 8 × 2 : aire totale ?',
  'Photo 8 × 6 collée dans un cadre 10 × 8 : aire du bord visible ?',
  'Un carré de 9 cm de côté avec un carré de 3 cm découpé dans un coin : aire restante ?'],
 ans:['A = 15 + 16 = 31 m². Le découpage ne change pas l’aire.',
  'A = 80 − 48 = 32 cm². On soustrait la photo du cadre entier.',
  'A = 81 − 9 = 72 cm². La partie enlevée se soustrait.']});

/* ============ SÉANCE 6 / LEÇON 6 — Le volume ============ */
lecons.push({n:6, t:'Le volume et ses unités', notion:'Mesure — volume du pavé droit, unités de volume',
 goal:'calculer le volume d’un pavé droit et convertir les unités de volume',
 prereq:'leçon 4 : l’aire mesure une surface ; le volume mesure l’espace occupé',
 motivation:'combien de briques faut-il pour remplir la caisse ? Et combien de petits cubes dans un grand cube ?',
 activites:'1. Observer le cube de 1 cm³ fourni.\n2. Remplir la boîte par couches en comptant.\n3. Découvrir que les unités de volume passent de 1 000 en 1 000.',
 scene:SC('briques'),
 concept:[
  'Le volume est la mesure de l’espace occupé ; on le compte en cubes-unité : m³, dm³, cm³, mm³.',
  'Le cube de 1 cm d’arête a un volume de 1 cm³ : c’est l’unité-cube de référence.',
  'Volume du pavé droit : V = L × l × h (longueur × largeur × hauteur), dans la même unité.',
  'Les unités de volume passent de mille en mille : 1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³.'
 ],
 figs:[
  [F('6_unites'),520,224,'Fig. 1 — Les marches de mille : 1 m³ = 1 000 dm³.'],
  [F('6_cm3'),520,224,'Fig. 2 — Compter les petits cubes : 2 couches de 6 = 12 cm³.'],
  [F('6_pave'),520,224,'Fig. 3 — V = L × l × h = 5 × 3 × 2 = 30 cm³.']
 ],
 method:['Imaginer le pavé rempli de couches de cubes-unité.',
  'Une couche = L × l cubes ; il y a h couches.',
  'V = L × l × h ; convertir en multipliant par 1 000 par marche.'],
 example:'Boîte de 5 cm × 3 cm × 2 cm.',
 worked:'V = 5 × 3 × 2 = 30 cm³ : une couche de 15 cubes, deux couches, donc 30 cubes.',
 error:['Convertir un volume par 10 ou par 100 comme une longueur.','Volume : marches de 1 000 — 1 dm³ = 1 000 cm³.'],
 app:['Pavé de 5 cm × 3 cm × 2 cm : volume ?',
  'Convertir : 2 m³ en dm³ ; 4 500 cm³ en dm³.',
  'Cube de 10 cm d’arête : volume en cm³, puis en dm³ ?'],
 ans:['V = 5 × 3 × 2 = 30 cm³. Trois mesures pour un volume.',
  '2 m³ = 2 000 dm³ ; 4 500 cm³ = 4,5 dm³. Marches de mille.',
  'V = 10 × 10 × 10 = 1 000 cm³ = 1 dm³. Le cube du décimètre !']});

/* ============ SÉANCE 7 / LEÇON 7 — Volume et contenance ============ */
lecons.push({n:7, t:'La correspondance volume – contenance', notion:'Mesure — 1 L = 1 dm³ ; 1 m³ = 1 000 L',
 goal:'établir et utiliser la correspondance entre les unités de volume et les unités de contenance',
 prereq:'leçon 6 : le volume ; conversions de contenance (L, cL, mL)',
 motivation:'la citerne de l’école fait 2 m³ : combien de seaux de 10 litres peut-elle fournir ?',
 activites:'1. Verser un litre d’eau dans un cube de 1 dm d’arête : il se remplit exactement.\n2. Placer litre et décimètre cube en vis-à-vis dans le tableau.\n3. Compter combien de litres dans un mètre cube.',
 scene:SC('eau'),
 concept:[
  'Un litre d’eau occupe exactement le volume d’un cube de 1 dm d’arête : 1 L = 1 dm³.',
  'Conséquence : 1 m³ = 1 000 dm³ = 1 000 L — dans un mètre cube, il y a place pour mille litres.',
  'Tableau de correspondance : m³ — dm³ — cm³ en vis-à-vis de L — dL — cL/mL. Ainsi 250 mL = 250 cm³.',
  'On calcule avec les contenances comme avec les volumes : mêmes règles de conversion et de calcul.'
 ],
 figs:[
  [F('7_corresp'),520,224,'Fig. 1 — 1 L = 1 dm³ : le litre remplit exactement le cube.'],
  [F('7_mille'),520,224,'Fig. 2 — 1 m³ = 1 000 L.'],
  [F('7_tableau'),520,224,'Fig. 3 — Le tableau de correspondance dm³ ↔ L.']
 ],
 method:['Placer la mesure dans le tableau : dm³ en face de L.',
  'Lire directement la correspondance ligne à ligne.',
  'Calculer ensuite avec les mêmes unités.'],
 example:'Citerne de 2 m³.',
 worked:'2 m³ = 2 000 dm³ = 2 000 L, soit 200 seaux de 10 L.',
 error:['Écrire 1 m³ = 100 L (marche de 100 au lieu de 1 000).','1 m³ = 1 000 dm³ = 1 000 L : marches de mille, 1 dm³ = 1 L.'],
 app:['Compléter : 20 L = … dm³ ; 250 mL = … cm³ ; 2 m³ = … L.',
  'Un bac de 0,5 m³ : combien de litres ?',
  'Une bouteille de 1 500 mL : combien de cm³ d’eau occupe-t-elle ?'],
 ans:['20 L = 20 dm³ ; 250 mL = 250 cm³ ; 2 m³ = 2 000 L. Vis-à-vis du tableau.',
  '0,5 m³ = 500 dm³ = 500 L. Moitié de mille.',
  '1 500 mL = 1 500 cm³. Le millilitre et le centimètre cube sont en vis-à-vis.']});

/* ============ SÉANCE 8 / LEÇON 8 — Problèmes de mesure (synthèse) ============ */
lecons.push({n:8, t:'Résoudre un problème de mesure', notion:'Mesure — synthèse : conversion, calcul, conclusion',
 goal:'conduire la résolution complète d’un problème de mesure : convertir, calculer, conclure',
 prereq:'leçons 1 à 7 : conversions, périmètres, aires, volumes, contenances',
 motivation:'la clôture de la rizière : 45 m sur 30 m, trois rangs de fil — il faut choisir la bonne formule, convertir, calculer, puis répondre en une phrase',
 activites:'1. Lire l’énoncé et repérer la grandeur demandée.\n2. Choisir opération ou formule, convertir si besoin.\n3. Rédiger la réponse avec l’unité et vérifier l’ordre de grandeur.',
 scene:SC('ecole'),
 concept:[
  'Un problème de mesure se résout en trois étapes : 1. convertir (une seule unité) ; 2. calculer (opération ou formule, posée ligne par ligne) ; 3. conclure (phrase avec l’unité demandée).',
  'Le bon choix de formule se lit dans l’énoncé : tour → périmètre ; surface → aire ; remplissage → volume ; liquide → contenance.',
  'Bilan des formules : P rectangle = 2(L+l) ; P carré = 4c ; C = 2πR ; A rectangle = L×l ; A carré = c² ; A triangle = (b×h):2 ; V pavé = L×l×h ; 1 L = 1 dm³ ; 1 m³ = 1 000 L.'
 ],
 figs:[
  [F('8_etapes'),520,224,'Fig. 1 — Les trois étapes : convertir, calculer, conclure.'],
  [F('8_exemple'),520,224,'Fig. 2 — Exemple résolu : la clôture, P = 150 m, fil = 450 m.'],
  [F('8_bilan'),520,224,'Fig. 3 — Bilan de l’unité : ce que je sais mesurer.']
 ],
 method:['Convertir : une seule unité partout, avant tout calcul.',
  'Calculer : opération ou formule posée ligne par ligne.',
  'Conclure : phrase de réponse avec l’unité demandée ; vérifier l’ordre de grandeur.'],
 example:'Clôture d’un champ de 45 m sur 30 m ; fil en trois rangs.',
 worked:'P = 2 × (45 + 30) = 150 m de clôture ; fil : 3 × 150 = 450 m. Il faut 150 m de clôture, soit 450 m de fil.',
 error:['Répondre « 150 » sans unité, ou sans phrase de conclusion.','Toujours conclure par une phrase avec l’unité : 150 m de clôture, 450 m de fil.'],
 app:['Aire du même champ de 45 m × 30 m ?',
  'Un bassin de 1,2 m³ : combien de litres ?',
  'Ruban de 1,2 km à partager avec 350 m déjà coupés : quelle longueur reste-t-il en mètres ?'],
 ans:['A = 45 × 30 = 1 350 m². Surface de la parcelle.',
  '1,2 m³ = 1 200 dm³ = 1 200 L. Marches de mille.',
  '1 200 − 350 = 850 m. Conversion d’abord, soustraction ensuite.']});

/* ============ SÉANCE 9 — RÉVISION ============ */
const revision = {n:9,
 synth:[
  ['Conversions de mesures','Longueur par 10 (escalier), masse par 10 : 1 kg = 1 000 g ; contenance : L, dL, cL, mL','Poser le nombre dans le tableau ; convertir avant tout calcul'],
  ['Périmètres','P = somme des côtés ; P rect = 2(L+l) ; P carré = 4c ; C = 2πR, π ≈ 3,14','Appliquer la formule de la circonférence ; calculer un tour en m ou cm'],
  ['Aires','A rect = L×l ; A carré = c² ; A triangle = (b×h):2 ; assemblages : ajouter ou soustraire','Découper une figure composée ; distinguer aire (m²) et périmètre (m)'],
  ['Volumes','V pavé = L×l×h ; unités par 1 000 : 1 m³ = 1 000 dm³, 1 dm³ = 1 000 cm³','Compter les cubes-unité ; convertir un volume par mille'],
  ['Volume et contenance','1 L = 1 dm³ ; 1 m³ = 1 000 L ; tableau m³–dm³–cm³ ↔ L–dL–cL/mL','Passer d’une citerne en m³ à des litres ; résoudre un problème de remplissage'],
  ['Méthode de résolution','Convertir → calculer → conclure (phrase + unité)','Conduire une résolution complète et vérifier l’ordre de grandeur']],
 questions:[
  'Que faut-il faire avant d’additionner 1,2 km et 350 m ?',
  'Énoncer la formule du périmètre du rectangle.',
  'Énoncer la formule de la circonférence du cercle. Comment l’a-t-on établie ?',
  'Quelle différence entre périmètre et aire ? Citer les unités de chacun.',
  'Comment calculer l’aire d’un terrain en forme de L ?',
  'Convertir : 2 m³ en litres.',
  '1 L = … dm³ ; 1 m³ = … L : compléter.',
  'Un pavé fait 5 cm × 3 cm × 2 cm : volume ?',
  'Citer les trois étapes de résolution d’un problème de mesure.'],
 reponses:[
  'Convertir dans la même unité : 1,2 km = 1 200 m, puis 1 200 + 350 = 1 550 m.',
  'P = 2 × (L + l). Deux longueurs et deux largeurs.',
  'C = 2 × π × R (ou π × D) avec π ≈ 3,14, établie en déroulant un fil autour du cercle : un peu plus de 3 fois le diamètre.',
  'Le périmètre mesure le tour (m, cm) ; l’aire mesure la surface (m², cm²).',
  'Le découper en deux rectangles, calculer chaque aire, puis ajouter : le découpage ne change pas l’aire.',
  '2 m³ = 2 000 dm³ = 2 000 L.',
  '1 L = 1 dm³ ; 1 m³ = 1 000 L.',
  'V = 5 × 3 × 2 = 30 cm³.',
  'Convertir (même unité), calculer (opération ou formule posée), conclure (phrase avec l’unité).'],
 error:['Oublier de convertir avant de calculer, ou confondre marches de 10 (longueurs) et de 1 000 (volumes).','La conversion est la première ligne du calcul ; longueur ×10 par marche, volume ×1 000 par marche.'],
 meth:'Fiche-mémo de l’unité : escalier des longueurs, quatre formules de périmètre et d’aire, V = L×l×h, tableau L ↔ dm³. À recopier au verso du cahier avant l’examen.'};

/* ============ SÉANCE 10 — EXAMEN (20 points) ============ */
const exam = {n:10,
 bareme:'Examen de l’unité V — Mesure. Durée : 1 heure. Total 20 points : 5 exercices de 4 points. La présentation (unités, phrases de conclusion) fait partie de la notation.',
 exos:[
  'Conversions (4 pts) : (a) 2,5 km = … m ; (b) 1,2 kg = … g ; (c) 3 m = … cm ; (d) 250 mL = … cm³.',
  'Calcul avec les grandeurs (4 pts) : (a) 1,2 km + 350 m (en m) ; (b) 2,5 kg − 750 g (en g) ; (c) dire pourquoi « 1,2 + 350 = 351,2 » est faux ; (d) 20 L + 1 500 mL (en L).',
  'Périmètres (4 pts) : (a) rectangle 8 cm × 5 cm ; (b) carré de 6 cm de côté ; (c) cercle de rayon 2 cm (π ≈ 3,14) ; (d) clôture d’un champ de 45 m sur 30 m.',
  'Aires (4 pts) : (a) rectangle 8 cm × 5 cm ; (b) triangle rectangle base 6 cm, hauteur 4 cm ; (c) le champ de 45 m × 30 m ; (d) façade : mur 6 m × 4 m + pignon triangle base 6 m, hauteur 2 m.',
  'Volume et contenance (4 pts) : (a) pavé 5 cm × 3 cm × 2 cm ; (b) 1 m³ = … L ; (c) citerne de 2 m³ = … L ; (d) la même citerne peut-elle fournir 250 seaux de 10 L ? Justifier.'],
 corriges:[
  '(a) 2 500 m (1 pt) ; (b) 1 200 g (1 pt) ; (c) 300 cm (1 pt) ; (d) 250 cm³ (1 pt).',
  '(a) 1 200 + 350 = 1 550 m (1 pt) ; (b) 2 500 − 750 = 1 750 g (1 pt) ; (c) unités différentes additionnées sans conversion (1 pt) ; (d) 20 + 1,5 = 21,5 L (1 pt).',
  '(a) P = 2 × (8 + 5) = 26 cm (1 pt) ; (b) P = 4 × 6 = 24 cm (1 pt) ; (c) C ≈ 2 × 3,14 × 2 = 12,56 cm (1 pt) ; (d) P = 2 × (45 + 30) = 150 m (1 pt).',
  '(a) A = 8 × 5 = 40 cm² (1 pt) ; (b) A = (6 × 4) : 2 = 12 cm² (1 pt) ; (c) A = 45 × 30 = 1 350 m² (1 pt) ; (d) 24 + 6 = 30 m² (1 pt).',
  '(a) V = 5 × 3 × 2 = 30 cm³ (1 pt) ; (b) 1 000 L (1 pt) ; (c) 2 000 L (1 pt) ; (d) non : 250 × 10 = 2 500 L > 2 000 L, il manque 500 L (1 pt).']};

const u = {
 num:'V', title:'Mesure', id:'u5', fiche:'situation-mesure-T7.html',
 plan:{seances:10},
 ragg:'Résoudre des problèmes en utilisant les grandeurs mesurables : conversions, périmètres, aires, volumes et correspondance volume–contenance (PE T7)',
 valeurs:'rigueur dans les conversions, précision des unités, persévérance dans la résolution',
 lecons:lecons.map(l=>({...l, fiche:mkFiche(l)})),
 revision, exam
};

const fs = require('fs');
const FILE = 'Manuel-Mathematiques-T7-UNITE5-MESURE.docx';

/* Vérifications numériques (contrat qualité) */
const A = (c,m)=>{ if(!c) throw new Error('ASSERT: '+m); };
A(Math.round(2500)===2500,'2,5 km = 2500 m');
A(1200+350===1550,'1,2 km + 350 m = 1550 m');
A(2500+750===3250,'2,5 kg + 750 g = 3250 g');
A(5+3+4===12,'P triangle = 12 cm');
A(2*(8+5)===26,'P rectangle = 26 cm');
A(4*6===24,'P carré = 24 cm');
A(Math.abs(2*3.14*2-12.56)<0.01,'C ≈ 12,56 cm');
A(8*5===40,'A rectangle = 40 cm²');
A(6*6===36,'A carré = 36 cm²');
A(6*4/2===12,'A triangle = 12 cm²');
A(2*(45+30)===150,'P clôture = 150 m');
A(45*30===1350,'A champ = 1350 m²');
A(3*150===450,'fil 3 rangs = 450 m');
A(15+16===31,'assemblage L = 31 m²');
A(24+6===30,'façade = 30 m²');
A(80-48===32,'cadre = 32 cm²');
A(5*3*2===30,'V pavé = 30 cm³');

module.exports = {u, build: async (file=FILE)=>{
  const buf = await buildDoc([u], {
   title:FILE,
   coverTitle:'UNITÉ V — MESURE', coverSub:'Manuel de l’enseignant — Classe de T7 — 10 séances (8 leçons + révision + examen), conforme au PE T7',
   header:'Unité V — Mesure : 8 leçons, une révision et un examen blanc. Chaque leçon : fiche de préparation, trace écrite à recopier, méthode, exemple résolu, erreur à éviter, trois exercices avec corrigés.'
  });
  fs.writeFileSync(file, buf);
  console.log('BUILD U5 OK — '+file, buf.length, 'octets');
}};

if(require.main===module) module.exports.build();
