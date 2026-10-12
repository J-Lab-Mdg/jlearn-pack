// UNITÉ 2 — LES TEMPS MODERNES (PE T8) : 5 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — frise des Temps modernes et ses trois mouvements
figs.u2f1 = (() => { const { s, y } = head('Les Temps modernes : 1492 – 1789', ['Une période encadrée par deux dates, portée par trois grands mouvements.']);
  const top = y + 25;
  const X = 60, W = 880, Y1 = top + 50;
  let b = `<rect x="${X}" y="${Y1}" width="${W}" height="60" fill="${GREENL}" stroke="${GREEN}" stroke-width="3"/>`;
  b += txt(X + W / 2, Y1 + 38, 'TEMPS MODERNES', 26, '#222', 'bold', 'middle');
  b += txt(X, Y1 - 12, '1492', 24, PINK2, 'bold');
  b += txt(X + W, Y1 - 12, '1789', 24, PINK2, 'bold', 'end');
  b += txt(X, Y1 + 90, 'arrivée de Colomb en Amérique', 20, '#333');
  b += txt(X + W, Y1 + 90, 'Révolution française', 20, '#333', 'normal', 'end');
  const Y2 = Y1 + 130;
  b += txt(500, Y2, 'Trois grands mouvements marquent la période :', 23, BLUE, 'bold', 'middle');
  const mv = [['Grandes découvertes', 'les Européens explorent les océans'], ['Renaissance', 'renouveau des arts et des sciences'], ['Réforme', 'division religieuse de l’Europe']];
  mv.forEach(([t, d], i) => {
    const Y = Y2 + 25 + i * 78;
    b += box(90, Y, 340, 56, t, i === 0 ? GREENL : i === 1 ? BLUEL : '#FDE7EF', i === 0 ? GREEN : i === 1 ? BLUE : PINK2, 22);
    b += txt(460, Y + 36, d, 22, '#333');
  });
  return svg(1000, Y2 + 25 + 3 * 78 + 20, s + b); })();
// S2 — tableau des grands explorateurs
figs.u2f2 = (() => { const { s, y } = head('Les grands explorateurs', ['Qui, quand, quel exploit ? Le tableau des Grandes découvertes.']);
  const top = y + 15;
  const data = [['Explorateur', 'Date', 'Exploit'],
    ['Bartolomeu Diaz', '1488', 'cap de Bonne-Espérance'],
    ['Christophe Colomb', '1492', 'arrivée en Amérique'],
    ['Vasco de Gama', '1498', 'route des Indes (Calicut)'],
    ['Amerigo Vespucci', '1500', 'explore le Nouveau Monde'],
    ['Diégo Diaz', '1500', 'aborde Madagascar'],
    ['Magellan', '1519-1522', 'premier tour du monde']];
  let b = tableEl(50, top, [330, 180, 390], 54, data);
  b += txt(500, top + 7 * 54 + 40, 'Portugal et Espagne ouvrent les routes océaniques', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 7 * 54 + 72, s + b); })();
// S3 — le commerce triangulaire
figs.u2f3 = (() => { const { s, y } = head('Le commerce triangulaire', ['Trois continents, trois cargaisons : le circuit de la traite atlantique.']);
  const top = y + 30;
  const E = [500, top + 20], A = [180, top + 330], M = [820, top + 330];
  let b = '';
  b += box(E[0] - 130, E[1], 260, 56, 'EUROPE', BLUEL, BLUE, 24);
  b += box(A[0] - 150, A[1], 300, 56, 'AFRIQUE', GREENL, GREEN, 24);
  b += box(M[0] - 150, M[1], 300, 56, 'AMÉRIQUE', '#FDE7EF', PINK2, 24);
  b += arrow(E[0] - 110, E[1] + 60, A[0] - 20, A[1] - 8, OCRE, 5);
  b += arrow(A[0] + 150, A[1] + 28, M[0] - 155, M[1] + 28, OCRE, 5);
  b += arrow(M[0] - 20, M[1] - 8, E[0] + 110, E[1] + 60, OCRE, 5);
  b += txt(255, top + 165, '1. armes, tissus,', 21, '#333', 'bold');
  b += txt(255, top + 192, 'alcool, verroterie', 21, '#333', 'bold');
  b += txt(500, A[1] + 110, '2. captifs africains réduits en esclavage', 21, PINK2, 'bold', 'middle');
  b += txt(745, top + 165, '3. sucre, coton,', 21, '#333', 'bold', 'end');
  b += txt(745, top + 192, 'tabac, métaux', 21, '#333', 'bold', 'end');
  b += txt(500, A[1] + 150, 'un commerce fondé sur la traite des êtres humains', 22, GREEN, 'bold', 'middle');
  return svg(1000, A[1] + 185, s + b); })();
// S4 — Renaissance et Réforme
figs.u2f4 = (() => { const { s, y } = head('Renaissance et Réforme', ['Deux renouveaux du XVIᵉ siècle : les arts et la religion.']);
  const top = y + 15;
  const data = [['', 'Renaissance', 'Réforme'],
    ['domaine', 'arts, sciences, lettres', 'religion chrétienne'],
    ['figures', 'Vinci, Michel-Ange…', 'Luther, Calvin, Henri VIII'],
    ['moteur', 'retour à l’Antiquité', 'critique de l’Église'],
    ['diffusion', 'Italie puis Europe', 'imprimerie, prédication'],
    ['résultat', 'chefs-d’œuvre, progrès', 'protestantisme, anglicanisme']];
  let b = tableEl(45, top, [160, 345, 405], 54, data);
  b += txt(500, top + 6 * 54 + 40, 'réponse catholique : la contre-réforme', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 6 * 54 + 72, s + b); })();
// S5 — Madagascar aux Temps modernes
figs.u2f5 = (() => { const { s, y } = head('Madagascar aux Temps modernes', ['De Diégo Diaz à Beniowski : l’île entre dans les routes du monde.']);
  const top = y + 15;
  const ev = [['1500', 'Diégo Diaz aborde l’île (Européens)', GREENL, GREEN],
    ['XVIᵉ-XVIIᵉ s.', 'comptoirs européens sur les côtes', BLUEL, BLUE],
    ['XVIIᵉ-XVIIIᵉ s.', 'commerce : riz, zébus, esclaves, armes', '#FDE7EF', PINK2],
    ['mars 1774', 'Beniowski s’installe à la baie d’Antongil', BLUEL, BLUE],
    ['XVIIIᵉ s.', 'prospérité des royaumes côtiers', GREENL, GREEN],
    ['fin XVIIIᵉ s.', 'essor des royaumes des Hautes Terres', '#FDE7EF', PINK2]];
  let b = '';
  ev.forEach(([d, t, f, c], i) => {
    const Y = top + i * 72;
    b += box(70, Y, 220, 54, d, f, c, 22);
    b += arrow(290, Y + 27, 330, Y + 27, OCRE, 3.5);
    b += box(335, Y, 600, 54, t, '#FFFFFF', c, 21);
  });
  b += txt(500, top + 6 * 72 + 22, 'le commerce avec les Européens enrichit et arme les royaumes', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 6 * 72 + 54, s + b); })();

const S = [
  {
    t: 'Définir et délimiter les Temps modernes', comp: 'Les Temps modernes', theme: 'La délimitation et les subdivisions des Temps modernes (1492-1789)',
    goal: 'définir et délimiter les Temps modernes et en présenter les grands mouvements',
    mat: 'Frise chronologique, carte du monde, documents historiques',
    revQ: 'Quelles sont les quatre périodes de l’Histoire et leurs bornes ?',
    revRA: 'Antiquité (−3 000/476), Moyen Âge (476/1492), Temps modernes (1492/1789), Époque contemporaine (1789/nos jours).',
    situation: 'En 1492, trois petites caravelles espagnoles touchent une terre inconnue des Européens : l’Amérique. En 1789, le peuple de Paris prend la Bastille. Entre ces deux dates s’étend une période où le monde change de visage : les océans se couvrent de navires, les arts renaissent, la chrétienté se divise. Les historiens l’ont appelée les Temps modernes. Pourquoi ces deux bornes, et que contient cette période ?',
    def: 'Les Temps modernes sont la période de l’Histoire comprise entre 1492, date de l’arrivée de Christophe Colomb en Amérique, et 1789, date de la Révolution française. Trois grands mouvements les caractérisent : les Grandes découvertes, qui ouvrent les routes océaniques ; la Renaissance, renouveau des arts et des sciences ; et la Réforme, qui divise la chrétienté d’Europe occidentale.',
    autrement: 'de Colomb à la Révolution française, trois siècles où les Européens découvrent le monde, réinventent les arts et se disputent la religion.',
    concept: 'Pourquoi commencer en 1492 ? Parce que l’arrivée de Colomb en Amérique change l’échelle du monde : jusque-là, Européens, Africains et Asiatiques s’ignoraient du continent américain ; désormais, tous les continents sont reliés par la mer. Pourquoi finir en 1789 ? Parce que la Révolution française renverse l’ordre ancien — rois absolus, société d’ordres — et ouvre l’Époque contemporaine. Entre ces deux bornes, trois mouvements s’enchaînent et se nourrissent : les Grandes découvertes (fin XVᵉ-XVIᵉ siècle) lancent les Européens sur tous les océans, du cap de Bonne-Espérance au tour du monde de Magellan ; la Renaissance (XVᵉ-XVIᵉ siècle), partie d’Italie, redécouvre les modèles de l’Antiquité et fait fleurir peinture, sculpture, architecture et sciences ; la Réforme (XVIᵉ siècle) conteste l’Église catholique et donne naissance au protestantisme. Ces mouvements sont liés : les richesses des découvertes financent les artistes, et l’imprimerie — invention de la Renaissance — diffuse les idées des réformateurs. Madagascar entre dans cette histoire dès 1500, quand le Portugais Diégo Diaz aborde ses côtes.',
    synthese: 'Temps modernes = 1492 (Colomb en Amérique) → 1789 (Révolution française) ; trois mouvements : Grandes découvertes (routes océaniques), Renaissance (arts et sciences), Réforme (division religieuse).',
    method: ['Borner la période : 1492 et 1789, avec l’événement de chaque borne.', 'Citer les trois grands mouvements et leur domaine (mer, arts, religion).', 'Montrer un lien entre deux mouvements (ex. : imprimerie → diffusion de la Réforme).'],
    exemple: 'L’année 1517, où Luther publie ses thèses contre les indulgences, appartient aux Temps modernes : elle est entre 1492 et 1789, et illustre le mouvement de la Réforme.',
    erreur: 'Croire que « moderne » veut dire « récent » : les Temps modernes sont finis depuis 1789 ! Pour l’historien, « moderne » désigne une période précise entre le Moyen Âge et l’Époque contemporaine, pas le monde d’aujourd’hui.',
    saistu: 'Le choix des bornes a fait débat entre historiens ! Certains font commencer les Temps modernes en 1453, quand Constantinople tombe aux mains des Ottomans, d’autres en 1492. Et la borne finale varie selon les pays : les Anglais parlent souvent d’« histoire moderne » jusqu’à nos jours ! Les dates des périodes sont des conventions — des outils de classement, pas des vérités absolues.',
    exos: ['Les bornes. a) Quel événement ouvre les Temps modernes ? b) Quel événement les ferme ? d) Combien de temps dure la période (environ) ? e) Quelle période précède les Temps modernes ?',
      'Associe chaque fait à son mouvement : a) Magellan fait le tour du monde ; b) Michel-Ange sculpte le David ; d) Luther conteste l’Église ; e) Vasco de Gama atteint les Indes.',
      'Réfléchir. a) Pourquoi 1492 change-t-il l’échelle du monde ? b) Pourquoi 1789 clôt-il la période ? d) Montre un lien entre Renaissance et Réforme. e) En quelle année Madagascar entre-t-il en contact avec les Européens ?'],
    corr: ['a) l’arrivée de Christophe Colomb en Amérique en 1492 ; b) la Révolution française en 1789 ; d) environ trois siècles (297 ans) ; e) le Moyen Âge.',
      'a) Grandes découvertes ; b) Renaissance ; d) Réforme ; e) Grandes découvertes.',
      'a) parce que tous les continents sont désormais reliés par la mer ; b) parce que la Révolution renverse l’ordre ancien et ouvre l’Époque contemporaine ; d) l’imprimerie, née à la Renaissance, diffuse les idées des réformateurs ; e) en 1500, avec Diégo Diaz.'],
    fig: 'u2f1'
  },
  {
    t: 'Les Grandes découvertes : facteurs et explorateurs', comp: 'Les Temps modernes', theme: 'Les facteurs des Grandes découvertes et les grands explorateurs',
    goal: 'expliquer les facteurs des Grandes découvertes et présenter les principaux explorateurs et leurs itinéraires',
    mat: 'Carte du monde, frise chronologique, tableau des explorateurs',
    revQ: 'Donne les bornes des Temps modernes et les trois grands mouvements de la période.',
    revRA: '1492-1789 ; Grandes découvertes, Renaissance, Réforme.',
    situation: 'Pendant des siècles, les marins européens ont longé les côtes sans oser s’éloigner. Et soudain, en une trentaine d’années, ils doublent l’Afrique, traversent l’Atlantique, atteignent les Indes et font le tour du monde. Que s’est-il passé ? Pourquoi partir si loin, au péril de sa vie ? Et qui sont ces capitaines dont les noms sont entrés dans l’Histoire ?',
    def: 'Les Grandes découvertes sont les expéditions maritimes des XVᵉ et XVIᵉ siècles par lesquelles les Européens ont exploré les océans. Leurs facteurs sont les inventions et progrès techniques (caravelle, boussole, astrolabe, cartes marines), la recherche de nouvelles routes commerciales, la soif d’épices et de métaux précieux, et la volonté de découvrir et posséder de nouvelles terres.',
    autrement: 'de meilleurs bateaux et instruments, l’envie d’or et d’épices, des routes à trouver et des terres à conquérir : voilà ce qui pousse les Européens sur les océans.',
    concept: 'Le premier facteur est technique : la caravelle, navire maniable qui remonte le vent ; la boussole, qui garde le cap ; l’astrolabe, qui donne la latitude ; les cartes marines, toujours plus précises. Sans ces outils, pas de haute mer. Le deuxième facteur est économique : les routes terrestres vers l’Asie — la route de la soie, les routes des épices — sont longues, coûteuses et contrôlées par des intermédiaires ; après la prise de Constantinople par les Ottomans (1453), les Européens cherchent un chemin maritime direct vers les épices et les métaux précieux. Le troisième facteur est politique et religieux : les royaumes du Portugal et d’Espagne veulent des terres nouvelles, et répandre le christianisme. Alors partent les grands capitaines : Bartolomeu Diaz double le cap de Bonne-Espérance en 1488 — la pointe de l’Afrique est franchie ; Christophe Colomb, cherchant les Indes par l’ouest, touche l’Amérique en 1492 ; Vasco de Gama atteint Calicut, aux Indes, en 1498 ; Amerigo Vespucci explore vers 1500 le continent qui prendra son nom ; la même année, Diégo Diaz, dérouté par une tempête, aborde Madagascar ; enfin l’expédition de Magellan (1519-1522) réalise le premier tour du monde — preuve définitive que la Terre est ronde.',
    synthese: 'Facteurs : techniques (caravelle, boussole, astrolabe, cartes), économiques (routes, épices, métaux), politiques (terres nouvelles). Explorateurs : B. Diaz 1488 (cap de Bonne-Espérance), Colomb 1492 (Amérique), Vasco de Gama 1498 (Indes), Vespucci 1500, Diégo Diaz 1500 (Madagascar), Magellan 1519-1522 (tour du monde).',
    method: ['Classer les facteurs : techniques, économiques, politiques et religieux.', 'Mémoriser le tableau explorateur-date-exploit.', 'Suivre chaque itinéraire sur la carte : vers l’est (Afrique, Indes) ou vers l’ouest (Amérique).'],
    exemple: 'Pour vérifier qu’on a compris : Colomb part vers l’OUEST pour atteindre les Indes et trouve l’Amérique ; Vasco de Gama part vers l’EST, double l’Afrique et atteint vraiment les Indes. Deux routes, un même but : les épices.',
    erreur: 'Dire que « Colomb a découvert que la Terre est ronde » : les savants le savaient depuis l’Antiquité ! Colomb a sous-estimé la taille de la Terre ; c’est le voyage de Magellan qui a prouvé la rotondité par les faits. Et l’Amérique était déjà peuplée : « découverte » vaut du point de vue européen.',
    saistu: 'Colomb est mort en 1506 sans savoir qu’il avait touché un continent inconnu des Européens : il a toujours cru avoir atteint l’Asie ! C’est pourquoi il appela « Indiens » les habitants de l’Amérique. Le nouveau continent reçut finalement le prénom d’Amerigo Vespucci, le premier à comprendre qu’il s’agissait d’un « Nouveau Monde ».',
    exos: ['Associe chaque explorateur à son exploit : a) Magellan ; b) Vasco de Gama ; d) Bartolomeu Diaz ; e) Christophe Colomb.',
      'Les facteurs. a) Cite trois progrès techniques qui ont permis la haute mer. b) Pourquoi les Européens cherchent-ils une route maritime vers l’Asie ? d) Que cherchent-ils en plus des épices ? e) Quel rôle joue la religion ?',
      'Dates et cartes. a) Range dans l’ordre chronologique : Magellan, B. Diaz, Colomb, Vasco de Gama. b) Qui aborde Madagascar, et en quelle année ? d) Quelle direction prend Colomb, et pourquoi ? e) Que prouve le voyage de Magellan ?'],
    corr: ['a) premier tour du monde (1519-1522) ; b) route des Indes par Calicut (1498) ; d) cap de Bonne-Espérance (1488) ; e) arrivée en Amérique (1492).',
      'a) caravelle, boussole, astrolabe, cartes marines (trois suffisent) ; b) parce que les routes terrestres sont longues, chères et contrôlées par des intermédiaires ; d) les métaux précieux (or, argent) et de nouvelles terres ; e) la volonté de répandre le christianisme.',
      'a) B. Diaz (1488), Colomb (1492), Vasco de Gama (1498), Magellan (1519-1522) ; b) Diégo Diaz, en 1500 ; d) vers l’ouest, pour atteindre les Indes en contournant les routes de l’est ; e) que la Terre est ronde — on peut en faire le tour.'],
    fig: 'u2f2'
  },
  {
    t: 'Les conséquences des Grandes découvertes', comp: 'Les Temps modernes', theme: 'Empires coloniaux, commerce triangulaire et traite des Noirs',
    goal: 'analyser les conséquences des Grandes découvertes : nouveaux axes commerciaux, premiers empires coloniaux, commerce triangulaire et traite',
    mat: 'Carte du monde, schéma du commerce triangulaire, documents',
    revQ: 'Cite trois explorateurs avec leur date et leur exploit.',
    revRA: 'B. Diaz 1488 (cap de Bonne-Espérance), Colomb 1492 (Amérique), Vasco de Gama 1498 (Indes) — ou autres.',
    situation: 'Après les voyages, le monde ne tourne plus de la même façon. Les ports de l’Atlantique remplacent ceux de la Méditerranée ; l’or d’Amérique inonde l’Espagne ; des empires immenses s’effondrent ; et des millions d’Africains sont arrachés à leur terre. Les Grandes découvertes ont enrichi l’Europe — mais à quel prix pour les autres continents ?',
    def: 'Les Grandes découvertes déplacent les axes commerciaux de la Méditerranée vers l’Atlantique et donnent naissance aux premiers empires coloniaux, espagnol et portugais, avec des comptoirs en Afrique, en Chine et en Inde. En Amérique, les empires aztèque et inca déclinent et l’économie de plantation se développe. Pour fournir la main-d’œuvre, s’organise le commerce triangulaire : la traite des Noirs, déportation d’Africains réduits en esclavage vers l’Amérique.',
    autrement: 'l’Europe s’enrichit par l’Atlantique, conquiert l’Amérique et y installe des plantations — et pour les faire travailler, elle achète et déporte des captifs africains : c’est la traite.',
    concept: 'Première conséquence : le déplacement des axes du commerce. Venise et la Méditerranée déclinent ; Lisbonne, Séville, puis Nantes ou Liverpool, tournés vers l’Atlantique, prospèrent. Deuxième conséquence : les premiers empires coloniaux. L’Espagne domine l’Amérique, où les conquistadors abattent les empires aztèque (1521) et inca (1533), affaiblis aussi par les maladies venues d’Europe ; le Portugal tient le Brésil et un chapelet de comptoirs — escales commerciales fortifiées — le long de l’Afrique, en Inde et jusqu’en Chine. Troisième conséquence : l’économie de plantation. En Amérique, de vastes domaines produisent sucre, tabac, coton pour l’Europe. Mais les populations locales, décimées, ne suffisent plus au travail : les Européens organisent alors le commerce triangulaire. Premier côté du triangle : les navires partent d’Europe chargés d’armes, de tissus et d’alcool, échangés en Afrique contre des captifs. Deuxième côté : la terrible traversée de l’Atlantique — des millions d’hommes, de femmes et d’enfants entassés dans les cales ; beaucoup meurent en route. Troisième côté : vendus comme esclaves aux plantations, ils sont remplacés dans les cales par le sucre et le coton qui repartent vers l’Europe. Les causes de la traite : le besoin de main-d’œuvre en Amérique et les besoins des industries d’Europe. Ses conséquences : la dépopulation de l’Afrique et des îles de l’océan Indien, la régression du continent africain, l’enrichissement de l’Europe — et la naissance d’une nouvelle couche de population aux Amériques, les descendants des déportés.',
    synthese: 'Conséquences : axes commerciaux Méditerranée → Atlantique ; empires espagnol et portugais, comptoirs en Afrique, Chine, Inde ; déclin des Aztèques et des Incas ; économie de plantation ; commerce triangulaire (Europe → Afrique → Amérique → Europe) et traite : dépopulation et régression de l’Afrique, enrichissement de l’Europe.',
    method: ['Distinguer les conséquences : commerciales, politiques (empires), humaines (traite).', 'Dessiner le triangle et nommer la cargaison de chaque côté.', 'Analyser la traite par causes (main-d’œuvre, industries) et conséquences (quatre à connaître).'],
    exemple: 'Un navire quitte Nantes avec des fusils et des tissus ; il les échange sur la côte africaine contre 300 captifs ; il les vend aux Antilles et revient chargé de sucre. Un seul voyage, trois profits — et 300 vies brisées.',
    erreur: 'Réduire la traite à un « commerce comme un autre » : c’est une déportation massive d’êtres humains, qui a vidé des régions entières d’Afrique et marqué l’histoire du monde. L’historien nomme les faits : la traite est un crime contre l’humanité, reconnu comme tel aujourd’hui.',
    saistu: 'L’océan Indien aussi a connu la traite : des captifs de Madagascar et d’Afrique orientale furent déportés vers les Mascareignes (île Bourbon, île de France) pour les plantations de café et de canne. C’est pourquoi le programme rappelle la dépopulation « de l’Afrique et des îles de l’océan Indien » : notre région fut, elle aussi, saignée par ce commerce.',
    exos: ['Le triangle. a) Dessine le schéma du commerce triangulaire. b) Que transportent les navires d’Europe vers l’Afrique ? d) Et d’Afrique vers l’Amérique ? e) Et d’Amérique vers l’Europe ?',
      'Les conséquences. a) Quel espace maritime remplace la Méditerranée ? b) Quels deux empires américains déclinent ? d) Qu’est-ce qu’un comptoir ? e) Qu’est-ce que l’économie de plantation ?',
      'Analyser la traite. a) Donne les deux causes de la traite. b) Cite ses quatre conséquences. d) Pourquoi parle-t-on de « dépopulation » de l’Afrique ? e) Quelle nouvelle couche de population naît en Amérique ?'],
    corr: ['a) triangle Europe → Afrique → Amérique → Europe ; b) armes, tissus, alcool ; d) des captifs africains réduits en esclavage ; e) sucre, coton, tabac, métaux.',
      'a) l’Atlantique ; b) les empires aztèque et inca ; d) une escale commerciale fortifiée établie sur une côte étrangère ; e) de grands domaines produisant sucre, coton ou tabac pour l’Europe.',
      'a) le besoin de main-d’œuvre en Amérique et les besoins des industries d’Europe ; b) dépopulation de l’Afrique et des îles de l’océan Indien, régression de l’Afrique, enrichissement de l’Europe, nouvelle couche de population en Amérique ; d) des millions de personnes, souvent jeunes, furent déportées : des régions entières se vidèrent ; e) les descendants des Africains déportés.'],
    fig: 'u2f3'
  },
  {
    t: 'La Renaissance et la Réforme', comp: 'Les Temps modernes', theme: 'Le renouveau des arts et la division religieuse de l’Europe',
    goal: 'caractériser la Renaissance et expliquer les origines et les conséquences de la Réforme',
    mat: 'Reproductions d’œuvres d’art, textes, tableau comparatif',
    revQ: 'Cite les deux causes et deux conséquences de la traite des Noirs.',
    revRA: 'Causes : main-d’œuvre pour l’Amérique, industries d’Europe ; conséquences : dépopulation de l’Afrique, enrichissement de l’Europe (ou autres).',
    situation: 'Au même moment où les caravelles sillonnent les mers, l’Europe vit une double révolution intérieure. Dans les ateliers d’Italie, des artistes peignent et sculptent comme jamais ; dans les universités d’Allemagne, un moine nommé Luther défie le pape. Arts et religion : les deux piliers du Moyen Âge sont ébranlés. Comment ces deux mouvements ont-ils transformé l’Europe ?',
    def: 'La Renaissance est le renouveau des beaux-arts, de l’architecture, de la littérature et des sciences aux XVᵉ et XVIᵉ siècles, inspiré de l’Antiquité et parti d’Italie ; ses grandes figures sont Léonard de Vinci, Copernic, Raphaël, Donatello et Michel-Ange. La Réforme est le mouvement religieux du XVIᵉ siècle qui conteste l’Église catholique et fonde le protestantisme ; ses origines sont l’influence des humanistes, la perte de confiance envers l’Église et l’imprimerie ; ses figures sont Luther, Calvin et Henri VIII.',
    autrement: 'la Renaissance fait renaître les arts et les sciences sur le modèle antique ; la Réforme, portée par Luther et Calvin, sépare les protestants de l’Église catholique.',
    concept: 'La Renaissance naît dans les riches cités italiennes — Florence, Rome, Venise — où princes et marchands financent les artistes. On y redécouvre les textes et les formes de l’Antiquité grecque et romaine. Léonard de Vinci peint la Joconde et dessine des machines visionnaires ; Michel-Ange sculpte le David et peint la chapelle Sixtine ; Raphaël et Donatello portent la peinture et la sculpture à leur sommet ; Copernic ose affirmer que la Terre tourne autour du Soleil. L’architecture retrouve colonnes et coupoles antiques ; la littérature fleurit dans les langues de chaque pays. Au cœur du mouvement, les humanistes placent l’Homme et son intelligence au centre de la réflexion. Or ces mêmes humanistes lisent la Bible dans le texte et remarquent les défauts de l’Église : luxe du clergé, vente des indulgences — ces « pardons » payants. La confiance se perd. En 1517, Luther publie ses 95 thèses : le salut vient de la foi, non des pratiques payantes. Grâce à l’imprimerie de Gutenberg, ses idées inondent l’Europe en quelques années. Calvin organise la Réforme à Genève ; en Angleterre, le roi Henri VIII rompt avec le pape et fonde l’anglicanisme. L’Europe se divise : protestants au nord, catholiques au sud. L’Église catholique réplique par la contre-réforme : discipline du clergé restaurée, nouveaux ordres religieux, reconquête des fidèles.',
    synthese: 'Renaissance : renouveau des arts et sciences inspiré de l’Antiquité (Vinci, Copernic, Raphaël, Donatello, Michel-Ange). Réforme : origines = humanistes, perte de confiance envers l’Église, imprimerie ; acteurs = Luther, Calvin, Henri VIII ; résultats = protestantisme, anglicanisme, contre-réforme catholique.',
    method: ['Caractériser la Renaissance : domaines (beaux-arts, architecture, littérature, sciences) + cinq figures.', 'Expliquer la Réforme par ses trois origines, ses trois acteurs, ses trois résultats.', 'Relier les deux mouvements : humanisme et imprimerie servent l’un et l’autre.'],
    exemple: 'L’imprimerie illustre le lien entre les deux mouvements : née vers 1450, elle diffuse d’abord les textes antiques chers aux humanistes de la Renaissance — puis les thèses de Luther, qui font le tour de l’Europe en quelques semaines.',
    erreur: 'Confondre Réforme et contre-réforme : la Réforme est le mouvement protestant qui conteste l’Église catholique ; la contre-réforme est la réponse de l’Église catholique pour se corriger et reconquérir les fidèles. L’une déclenche l’autre.',
    saistu: 'Léonard de Vinci incarnait l’idéal de la Renaissance : peintre, ingénieur, anatomiste, musicien… Ses carnets, écrits en miroir de droite à gauche, contiennent des croquis de machines volantes et de chars imaginés trois siècles avant leur invention ! On appelle encore « esprit universel » une personne douée dans tous les domaines, en souvenir de ces géants.',
    exos: ['Associe chaque personnage à son domaine : a) Copernic ; b) Michel-Ange ; d) Luther ; e) Henri VIII.',
      'La Renaissance. a) D’où part le mouvement ? b) Quel modèle inspire les artistes ? d) Cite trois domaines renouvelés. e) Qui sont les humanistes ?',
      'La Réforme. a) Donne les trois origines de la Réforme. b) Que reproche Luther à l’Église ? d) Que fonde Henri VIII ? e) Comment l’Église catholique répond-elle ?'],
    corr: ['a) sciences (astronomie) ; b) beaux-arts (sculpture, peinture) ; d) religion : fondateur de la Réforme protestante ; e) religion : fondateur de l’anglicanisme.',
      'a) d’Italie (Florence, Rome, Venise) ; b) l’Antiquité grecque et romaine ; d) beaux-arts, architecture, littérature, sciences (trois suffisent) ; e) des penseurs qui placent l’Homme et son intelligence au centre de la réflexion.',
      'a) l’influence des humanistes, la perte de confiance envers l’Église, l’imprimerie ; b) le luxe du clergé et la vente des indulgences ; d) l’anglicanisme, en rompant avec le pape ; e) par la contre-réforme : discipline restaurée, nouveaux ordres, reconquête des fidèles.'],
    fig: 'u2f4'
  },
  {
    t: 'Les Temps modernes à Madagascar', comp: 'Les Temps modernes', theme: 'Madagascar et les Européens : contacts, comptoirs et royaumes',
    goal: 'présenter les manifestations des Temps modernes à Madagascar : contacts européens, comptoirs et essor des royaumes',
    mat: 'Carte de Madagascar, frise chronologique, documents',
    revQ: 'Cite deux figures de la Renaissance et deux figures de la Réforme.',
    revRA: 'Renaissance : Vinci, Copernic, Raphaël, Donatello, Michel-Ange ; Réforme : Luther, Calvin, Henri VIII (deux de chaque).',
    situation: 'Le 10 août 1500, un navire portugais dérouté par la tempête aperçoit une côte immense que ses cartes ignorent : Madagascar. Pour la Grande Île, les Temps modernes commencent. Pendant trois siècles, navires européens, comptoirs et marchandises vont transformer les côtes malgaches — et nourrir la puissance de ses royaumes. Comment l’île a-t-elle vécu cette période ?',
    def: 'À Madagascar, les Temps modernes s’ouvrent en 1500 avec l’arrivée du Portugais Diégo Diaz. Les Européens — Portugais, puis Français et Anglais — établissent des comptoirs sur les côtes et y commercent : riz, zébus, esclaves contre armes et tissus. En mars 1774, le baron Beniowski s’installe à la baie d’Antongil. Ce commerce contribue à la prospérité des royaumes côtiers, puis de ceux des Hautes Terres.',
    autrement: 'dès 1500, les Européens accostent, installent des comptoirs et commercent ; les royaumes malgaches des côtes s’enrichissent les premiers, ceux des Hautes Terres ensuite.',
    concept: 'Diégo Diaz cherchait la route des Indes ouverte par Vasco de Gama ; la tempête qui l’écarta du Mozambique lui fit aborder une île que les Portugais crurent d’abord nommer « île Saint-Laurent ». Après eux, Hollandais, Anglais et Français font escale : Madagascar, posée sur la route des Indes, offre eau douce, riz et zébus aux équipages épuisés. Les Européens tentent des installations durables : les Français à Fort-Dauphin (1643-1674), les pirates sur la côte est vers 1700, et en mars 1774 le baron Beniowski, aventurier au service de la France, fonde un établissement à la baie d’Antongil. La plupart de ces comptoirs restent fragiles — climat, maladies, résistance des populations — mais le commerce, lui, prospère : les royaumes malgaches vendent riz, zébus et captifs, et reçoivent en échange armes à feu, poudre, tissus et piastres d’argent. Ces richesses transforment la carte politique de l’île : les royaumes des côtes — sakalava à l’ouest, betsimisaraka à l’est — prospèrent les premiers grâce au commerce direct avec les navires ; puis, à la fin du XVIIIᵉ siècle, les royaumes des Hautes Terres, dont l’Imerina, s’élèvent à leur tour, enrichis par les échanges et armés de fusils. Les Temps modernes préparent ainsi le terrain du grand royaume du XIXᵉ siècle — que nous étudierons à l’unité V.',
    synthese: 'Madagascar aux Temps modernes : 1500 Diégo Diaz ; escales et comptoirs européens (Fort-Dauphin, pirates, Beniowski à la baie d’Antongil en mars 1774) ; commerce riz-zébus-esclaves contre armes-tissus ; prospérité des royaumes côtiers puis des Hautes Terres.',
    method: ['Dater les contacts : 1500 (Diégo Diaz), 1643 (Fort-Dauphin), mars 1774 (Beniowski).', 'Décrire le commerce : ce que vendent et ce que reçoivent les royaumes malgaches.', 'Expliquer l’enchaînement : commerce → richesse et armes → essor des royaumes, côtes puis Hautes Terres.'],
    exemple: 'Un roi sakalava de la côte ouest vend des zébus et des captifs à un navire européen ; il reçoit des fusils ; ces fusils lui permettent d’étendre son royaume : le commerce des Temps modernes nourrit directement la puissance politique.',
    erreur: 'Croire que les Européens ont « colonisé » Madagascar dès les Temps modernes : leurs comptoirs restent côtiers, précaires et souvent abandonnés. La colonisation proprement dite date de 1896 — quatre siècles après Diégo Diaz. Aux Temps modernes, les royaumes malgaches restent maîtres de l’île.',
    saistu: 'Beniowski est l’un des aventuriers les plus romanesques du XVIIIᵉ siècle : noble hongrois, prisonnier des Russes en Sibérie, évadé par le Pacifique, il convainc la France de lui confier une expédition à Madagascar ! Installé à la baie d’Antongil en mars 1774, il se proclama même « empereur de Madagascar » — avant de mourir en 1786 dans un combat contre les troupes françaises. Sa vie inspira livres et opéras.',
    exos: ['Dates malgaches. a) Qui aborde Madagascar en 1500 ? b) Que fondent les Français en 1643 ? d) Qui s’installe à la baie d’Antongil, et quand ? e) Pourquoi les navires font-ils escale à Madagascar ?',
      'Le commerce. a) Que vendent les royaumes malgaches ? b) Que reçoivent-ils en échange ? d) Quels royaumes prospèrent les premiers ? e) Lesquels s’élèvent ensuite ?',
      'Réfléchir. a) Pourquoi les comptoirs européens restent-ils fragiles ? b) Montre que le commerce transforme la carte politique de l’île. d) Pourquoi ne peut-on pas parler de colonisation aux Temps modernes ? e) Quel grand royaume les Temps modernes préparent-ils ?'],
    corr: ['a) le Portugais Diégo Diaz ; b) le comptoir de Fort-Dauphin ; d) le baron Beniowski, en mars 1774 ; e) l’île offre eau douce, riz et zébus sur la route des Indes.',
      'a) riz, zébus, esclaves ; b) armes à feu, poudre, tissus, piastres ; d) les royaumes côtiers (sakalava, betsimisaraka) ; e) les royaumes des Hautes Terres, dont l’Imerina.',
      'a) climat, maladies, résistance des populations ; b) les royaumes enrichis et armés par le commerce étendent leur puissance, des côtes vers l’intérieur ; d) parce que les Européens ne tiennent que des comptoirs côtiers précaires : les royaumes malgaches restent maîtres de l’île ; e) le Royaume de Madagascar du XIXᵉ siècle.'],
    fig: 'u2f5'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Les Temps modernes',
  rag: 'caractériser une période de l’Histoire en utilisant des représentations du temps et de l’espace, et porter un regard critique sur les faits du passé.',
  valeurs: 'esprit critique, identité socio-culturelle',
  sessions: S,
  revision: {
    table: [
      ['Temps modernes', '1492 (Colomb) → 1789 (Révolution française) ; Grandes découvertes, Renaissance, Réforme', 'Délimiter et subdiviser la période'],
      ['Facteurs des découvertes', 'Techniques (caravelle, boussole, astrolabe), routes commerciales, épices, métaux, terres', 'Expliquer pourquoi les Européens partent'],
      ['Explorateurs', 'B. Diaz 1488, Colomb 1492, V. de Gama 1498, Vespucci et D. Diaz 1500, Magellan 1519-22', 'Associer nom, date, exploit'],
      ['Commerce triangulaire', 'Europe (armes, tissus) → Afrique (captifs) → Amérique (sucre, coton) → Europe', 'Schématiser et analyser la traite'],
      ['Renaissance / Réforme', 'Arts et sciences (Vinci…) ; Luther, Calvin, Henri VIII → protestantisme, contre-réforme', 'Caractériser les deux mouvements'],
      ['Madagascar', '1500 Diégo Diaz ; comptoirs ; Beniowski mars 1774 ; essor des royaumes côtes puis Hautes Terres', 'Situer l’île dans les Temps modernes']
    ],
    questions: [
      'Donne les bornes des Temps modernes avec leurs événements, et les trois grands mouvements.',
      'Cite quatre explorateurs, leur date et leur exploit.',
      'Dessine le commerce triangulaire et donne deux causes et quatre conséquences de la traite.',
      'Présente les origines, les acteurs et les résultats de la Réforme.',
      'Raconte les Temps modernes à Madagascar en quatre étapes datées.'
    ],
    answers: [
      '1492 (arrivée de Colomb en Amérique) → 1789 (Révolution française) ; Grandes découvertes, Renaissance, Réforme.',
      'B. Diaz 1488 cap de Bonne-Espérance ; Colomb 1492 Amérique ; Vasco de Gama 1498 Indes ; Magellan 1519-1522 tour du monde (ou Vespucci/D. Diaz 1500).',
      'Europe → Afrique (armes, tissus, alcool), Afrique → Amérique (captifs), Amérique → Europe (sucre, coton) ; causes : main-d’œuvre, industries d’Europe ; conséquences : dépopulation de l’Afrique et des îles de l’océan Indien, régression de l’Afrique, enrichissement de l’Europe, nouvelle couche de population.',
      'Origines : humanistes, perte de confiance envers l’Église, imprimerie ; acteurs : Luther, Calvin, Henri VIII ; résultats : protestantisme, anglicanisme, contre-réforme.',
      '1500 : Diégo Diaz aborde l’île ; XVIᵉ-XVIIᵉ : escales et comptoirs (Fort-Dauphin 1643) ; mars 1774 : Beniowski à la baie d’Antongil ; XVIIIᵉ : prospérité des royaumes côtiers puis des Hautes Terres.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Délimite les Temps modernes (dates et événements). b) Cite les trois grands mouvements de la période. d) Qu’est-ce qu’un comptoir ? e) Qu’est-ce que la contre-réforme ?',
      'Les Grandes découvertes. a) Cite deux facteurs techniques et deux facteurs économiques. b) Associe : Colomb, Magellan, Vasco de Gama à leur exploit. d) Pourquoi Colomb part-il vers l’ouest ? e) Qui aborde Madagascar en 1500 ?',
      'Le commerce triangulaire. a) Nomme les trois continents du triangle. b) Indique la cargaison de chaque côté. d) Donne les deux causes de la traite. e) Cite trois de ses conséquences.',
      'Renaissance et Réforme. a) Cite trois artistes ou savants de la Renaissance. b) Quel modèle les inspire ? d) Donne les trois origines de la Réforme. e) Associe Luther, Calvin et Henri VIII à leur rôle.',
      'Madagascar aux Temps modernes. a) Date l’arrivée de Diégo Diaz et l’installation de Beniowski. b) Décris le commerce entre royaumes malgaches et Européens. d) Explique l’essor des royaumes côtiers puis des Hautes Terres. e) Pourquoi l’île n’est-elle pas colonisée à cette époque ?'
    ],
    corr: [
      'a) 1492 (arrivée de Colomb en Amérique) → 1789 (Révolution française) ; b) Grandes découvertes, Renaissance, Réforme ; d) une escale commerciale fortifiée sur une côte étrangère ; e) la réponse de l’Église catholique à la Réforme protestante. Un point par item.',
      'a) techniques : caravelle, boussole, astrolabe, cartes ; économiques : nouvelles routes, épices, métaux précieux (deux de chaque) ; b) Colomb : Amérique 1492 ; Magellan : tour du monde 1519-1522 ; Vasco de Gama : Indes 1498 ; d) pour atteindre les Indes par une route nouvelle, en évitant les routes de l’est ; e) le Portugais Diégo Diaz. Un point par item.',
      'a) Europe, Afrique, Amérique ; b) Europe→Afrique : armes, tissus, alcool ; Afrique→Amérique : captifs ; Amérique→Europe : sucre, coton, tabac ; d) main-d’œuvre pour l’Amérique, besoins des industries d’Europe ; e) dépopulation de l’Afrique et des îles de l’océan Indien, régression de l’Afrique, enrichissement de l’Europe (trois parmi quatre). Un point par item.',
      'a) Vinci, Copernic, Raphaël, Donatello, Michel-Ange (trois suffisent) ; b) l’Antiquité grecque et romaine ; d) humanistes, perte de confiance envers l’Église, imprimerie ; e) Luther : lance la Réforme ; Calvin : l’organise à Genève ; Henri VIII : fonde l’anglicanisme. Un point par item.',
      'a) 1500 ; mars 1774 à la baie d’Antongil ; b) riz, zébus et esclaves contre armes, poudre, tissus et piastres ; d) le commerce enrichit et arme d’abord les royaumes des côtes, puis ceux des Hautes Terres à la fin du XVIIIᵉ siècle ; e) les comptoirs européens restent côtiers et précaires : les royaumes malgaches demeurent maîtres de l’île. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
