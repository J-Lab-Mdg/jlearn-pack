// UNITÉ 1 — L'INTRODUCTION À L'ÉTUDE DE L'HISTOIRE (PE T6) : 4 séances + révision + examen — format V4 Histoire
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — l'objet d'étude de l'Histoire
figs.u1f1 = (() => { const { s, y } = head('Qu’étudie l’Histoire ?', ['L’Histoire reconstitue le passé de l’humanité et des sociétés humaines.']);
  const top = y + 20;
  const objets = ['les faits et les civilisations', 'les guerres', 'l’évolution de la société', 'les lois et les personnages'];
  let b = '';
  objets.forEach((o, i) => {
    const X = 30 + (i % 2) * 505, Y = top + Math.floor(i / 2) * 78;
    b += box(X, Y, 470, 60, o, i % 2 ? '#FDE7EF' : GREENL, i % 2 ? PINK2 : GREEN, 23);
  });
  b += arrow(515, top + 165, 515, top + 195, BLUE, 4);
  b += box(100, top + 200, 830, 58, 'chaque objet d’étude est situé dans le TEMPS et dans l’ESPACE', BLUEL, BLUE, 22);
  b += txt(515, top + 300, 'la vérité historique s’appuie sur des preuves — jamais sur des légendes ou des rumeurs', 21, PINK2, 'bold', 'middle');
  return svg(1030, top + 332, s + b); })();
// S2 — la démarche historique
figs.u1f2 = (() => { const { s, y } = head('La démarche historique', ['Quatre étapes, toujours dans le même ordre : la méthode de travail de l’historien.']);
  const top = y + 20;
  const steps = ['1. Rechercher et classer les sources', '2. Contrôler et vérifier les sources', '3. Comprendre et extraire les informations', '4. Analyser et interpréter'];
  let b = '';
  steps.forEach((st, i) => {
    const Y = top + i * 72;
    b += box(150, Y, 640, 58, st, i % 2 ? '#FDE7EF' : GREENL, i % 2 ? PINK2 : GREEN, 23);
    if (i < 3) b += arrow(470, Y + 60, 470, Y + 70, BLUE, 4);
  });
  b += txt(470, top + 4 * 72 + 28, 'comprendre le passé → expliquer le présent → améliorer le futur', 23, BLUE, 'bold', 'middle');
  return svg(1000, top + 4 * 72 + 60, s + b); })();
// S3 — chronologie et ligne du temps
figs.u1f3 = (() => { const { s, y } = head('La ligne du temps et ses unités', ['La chronologie classe les événements du plus ancien au plus récent.']);
  const top = y + 20;
  let b = box(60, top, 270, 54, 'décennie = 10 ans', GREENL, GREEN, 22);
  b += box(365, top, 270, 54, 'siècle = 100 ans', BLUEL, BLUE, 22);
  b += box(670, top, 290, 54, 'millénaire = 1 000 ans', '#FDE7EF', PINK2, 22);
  const fy = top + 170, x0 = 90, len = 820;
  b += nline(x0, fy, len, 4, ['an 1', '500', '1000', '1500', '2000']);
  const xh = x0 + 622 / 2000 * len;
  b += dot(xh, fy, 10, PINK2);
  b += txt(xh, fy - 52, '622', 21, PINK2, 'bold', 'middle');
  b += txt(xh, fy - 26, 'hégire', 19, PINK2, 'normal', 'middle');
  const xi = x0 + 1960 / 2000 * len;
  b += dot(xi, fy, 10, GREEN);
  b += txt(xi - 14, fy - 52, '1960', 21, GREEN, 'bold', 'middle');
  b += txt(xi - 14, fy - 26, 'indépendance', 19, GREEN, 'normal', 'middle');
  b += txt(500, fy + 95, 'quand ? et où ? — les deux questions que l’historien pose toujours', 23, BLUE, 'bold', 'middle');
  return svg(1000, fy + 128, s + b); })();
// S4 — tableau des sources historiques
figs.u1f4 = (() => { const { s, y } = head('Les sources historiques', ['Toute trace du passé est une source — à condition de la vérifier.']);
  const top = y + 15;
  const data = [['type de source', 'exemples'],
    ['matérielle', 'monnaie, vase, bateau, outil'],
    ['figurative', 'gravure, sculpture, dessin, caricature'],
    ['vestige', 'fondations d’une ancienne cité, outils'],
    ['écrite', 'manuscrit, archive, journal, lettre'],
    ['orale', 'tradition orale, témoignage'],
    ['photographique', 'photographie ancienne'],
    ['audiovisuelle', 'film, bande sonore, vidéo']];
  let b = tableEl(90, top, [280, 540], 50, data);
  b += txt(500, top + 8 * 50 + 42, 'une source ne parle jamais seule : l’historien croise toujours plusieurs sources !', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 8 * 50 + 74, s + b); })();

const S = [
  {
    t: 'Qu’est-ce que l’Histoire ?', comp: 'L’introduction à l’étude de l’Histoire', theme: 'La notion et l’objet d’étude de l’Histoire',
    goal: 'définir l’Histoire et identifier son objet d’étude',
    mat: 'Texte historique court, vieilles photographies, tableau',
    revQ: 'Cite un événement du passé de ton village ou de ta famille. Comment le connais-tu ?',
    revRA: 'Réponses libres ; on le connaît par un récit, une photo, un objet — c’est-à-dire par une trace du passé.',
    situation: 'En creusant le jardin, Soa déterre une pièce de monnaie verdie, frappée de signes qu’elle ne connaît pas. Qui l’a tenue ? Quand ? Pour acheter quoi ? La pièce ne parle pas… et pourtant elle raconte. La discipline qui fait parler les traces du passé a un nom : l’Histoire.',
    legende: 'Soa déterre une pièce de monnaie verdie : qui l’a tenue ? quand ? La pièce ne parle pas… et pourtant elle raconte.',
    motsCles: ['Histoire', 'historia', 'enquête', 'discipline scientifique', 'reconstitution du passé', 'vérité historique', 'traces', 'preuves', 'le temps', 'l’espace', 'événement historique', 'période'],
    sections: [
      {
        titre: 'La définition de l’Histoire',
        paras: [
          'Le mot vient du grec historia, qui signifie « enquête ». Au Vᵉ siècle avant Jésus-Christ, le voyageur grec Hérodote interroge les témoins des grandes guerres de son temps, puis rédige son livre : l’Histoire est née.',
          'L’Histoire est la discipline scientifique qui étudie le passé de l’humanité et des sociétés humaines. Son travail est la reconstitution du passé à partir des traces laissées, pour établir des connaissances vérifiées.',
        ],
      },
      {
        titre: 'L’objet d’études de l’Histoire',
        paras: ['L’Histoire étudie :'],
        puces: [
          'les faits et les civilisations (la fondation d’un royaume, la vie d’un peuple) ;',
          'les guerres, qui bouleversent les sociétés ;',
          'l’évolution de la société (comment on vivait hier et aujourd’hui) ;',
          'les lois et les personnages qui ont marqué leur époque.',
        ],
      },
      {
        titre: 'Le temps et l’espace : où et quand ?',
        paras: [
          'Un fait sans date ni lieu n’est pas encore de l’Histoire : tout objet historique se place dans le temps (la date, la période) et dans l’espace (le territoire, le lieu, la carte). Un événement historique est un fait marquant, daté et localisé.',
        ],
      },
      {
        titre: 'Pourquoi l’Histoire exige-t-elle des preuves ?',
        paras: [
          'Ce qui distingue l’Histoire de la légende, c’est la preuve. « On dit que… » n’est pas une preuve : la vérité historique ne retient que ce que des traces vérifiées permettent d’établir.',
        ],
      },
    ],
    doc: {
      titre: 'L’enquête d’Hérodote',
      source: 'd’après Hérodote, Enquêtes, Vᵉ siècle avant Jésus-Christ — extrait adapté',
      texte: 'Hérodote d’Halicarnasse présente ici son enquête, pour que le temps n’efface pas les actions des hommes, et que les grands exploits accomplis par les Grecs et par les autres peuples ne tombent pas dans l’oubli. J’ai voyagé, j’ai vu de mes yeux, j’ai interrogé les témoins ; et lorsque je n’ai pas vu moi-même, je rapporte ce que l’on m’a dit, en le signalant au lecteur.',
      questions: ['Qui est l’auteur de ce texte, et que veut-il empêcher ?',
        'Comment recueille-t-il ses informations ? Relève deux moyens.',
        'Pourquoi peut-on dire que ce texte fonde la méthode de l’Histoire ?'],
      reponses: ['Hérodote ; il veut empêcher que le temps efface la mémoire des actions des hommes.',
        'Il voyage et voit de ses yeux ; il interroge des témoins (et signale ce qu’il n’a pas vu lui-même).',
        'Parce qu’il ne se contente pas de raconter : il enquête, distingue ce qu’il a vérifié de ce qu’on lui a rapporté — exactement le geste de l’historien.']
    },
    lexique: [
      ['Histoire', 'discipline scientifique qui reconstitue le passé à partir de traces vérifiées'],
      ['Vérité historique', 'affirmation sur le passé appuyée sur des preuves'],
      ['Événement historique', 'fait marquant, daté et localisé'],
      ['Période', 'étendue de temps entre deux dates'],
    ],
    synthese: 'l’Histoire = discipline scientifique du passé des sociétés humaines ; objet d’étude : faits et civilisations, guerres, évolution de la société, lois et personnages ; tout fait se situe dans le temps et dans l’espace ; la vérité historique exige des preuves.',
    saistu: 'Le mot « histoire » vient du grec historia, qui signifie… « enquête » ! C’est Hérodote, un Grec du Ve siècle avant Jésus-Christ, qui l’a employé le premier en racontant les guerres de son temps après avoir voyagé et interrogé des témoins — on le surnomme depuis « le père de l’Histoire ».',
    exos: ['Réponds par une phrase complète. a) Qu’est-ce que l’Histoire ? b) Pourquoi dit-on que c’est une discipline scientifique ? d) Cite deux objets d’étude de l’Histoire. e) Que faut-il toujours préciser pour un fait historique ?',
      'Histoire ou légende ? Justifie. a) « Les archives disent que la ville a été fondée en 1817. » b) « On raconte qu’un génie habite la montagne. » d) « Cette photographie montre le marché en 1950. » e) « Il paraît que l’ancêtre du village volait dans les airs. »',
      'La pièce de monnaie de Soa. a) Pourquoi cette pièce intéresse-t-elle l’historien ? b) Quelles questions faut-il lui poser ? d) Quel mot désigne le moment exact où elle a été frappée ? e) Que devient la pièce une fois étudiée et vérifiée ?'],
    corr: ['a) la discipline scientifique qui étudie et reconstitue le passé de l’humanité et des sociétés humaines ; b) parce qu’elle s’appuie sur des traces vérifiées, pas sur des on-dit ; d) par exemple les faits et civilisations, et les guerres (aussi : évolution de la société, lois, personnages) ; e) sa date et son lieu — le temps et l’espace.',
      'a) Histoire : la source est une archive datée ; b) légende : aucune preuve possible ; d) Histoire : la photographie est une trace datée ; e) légende : récit merveilleux sans trace vérifiable.',
      'a) parce que c’est une trace laissée par le passé ; b) qui l’a frappée ? quand ? où ? pour quel usage ? ; d) la date ; e) une connaissance historique.'],
    fig: 'u1f1'
  },
  {
    t: 'La démarche historique', comp: 'L’introduction à l’étude de l’Histoire', theme: 'L’utilité de l’Histoire et la démarche historique',
    goal: 'expliquer l’utilité de l’Histoire et appliquer les étapes de la démarche historique',
    mat: 'Récit historique, sources variées (photo, objet, témoignage), tableau',
    revQ: 'Qu’est-ce que la vérité historique ?',
    revRA: 'Une affirmation sur le passé appuyée sur des preuves vérifiées.',
    situation: 'Deux récits circulent sur la fondation du village : le doyen raconte qu’elle date du temps de son arrière-grand-père ; un cahier d’école trouvé au bureau du fokontany parle d’une autre époque. Qui croire ? Ni l’un ni l’autre… avant d’avoir enquêté ! L’historien a une méthode pour trancher : la démarche historique.',
    legende: 'Deux récits contradictoires sur la fondation du village : qui croire ? L’historien a une méthode pour trancher.',
    motsCles: ['démarche historique', 'rechercher et classer', 'contrôler et vérifier', 'comprendre et extraire', 'analyser et interpréter', 'sources', 'recouper', 'comprendre le passé', 'expliquer le présent', 'améliorer le futur'],
    sections: [
      {
        titre: 'L’utilité et la mission de l’Histoire',
        paras: ['La mission de l’Histoire tient en une phrase : comprendre le passé pour expliquer le présent afin d’améliorer le futur. Elle est utile trois fois :'],
        puces: [
          'elle explique le présent : nos langues, nos frontières, nos coutumes viennent du passé ;',
          'elle forme le jugement : qui sait vérifier des sources ne se laisse pas tromper par les rumeurs ;',
          'elle éclaire les décisions : connaître les crises d’hier aide à éviter celles de demain.',
        ],
      },
      {
        titre: 'Les quatre étapes de la démarche historique',
        paras: ['Pour accomplir sa mission, l’historien suit quatre étapes, toujours dans le même ordre :'],
        puces: [
          'rechercher et classer les sources (récits, objets, documents) ;',
          'contrôler et vérifier chaque source (le témoin peut se tromper, la copie peut être fautive) ;',
          'comprendre et extraire les informations (noms, dates, lieux) ;',
          'analyser et interpréter : si les sources concordent, on conclut ; sinon, l’enquête continue.',
        ],
      },
      {
        titre: 'Un exemple malgache : le Tantara ny Andriana',
        paras: [
          'Au XIXᵉ siècle, le père François Callet a appliqué cette méthode : pendant des années, il a recueilli les récits des anciens de l’Imerina, les a fait répéter et comparés, puis en a composé le Tantara ny Andriana — une somme monumentale qui reste une source majeure de l’histoire malgache.',
        ],
      },
    ],
    doc: {
      titre: 'Callet recueille la parole des anciens',
      source: 'd’après la préface du Tantara ny Andriana du R.P. Callet, XIXᵉ siècle — extrait adapté',
      texte: 'Je n’ai rien inventé dans ce livre : j’ai écrit sous la dictée des vieillards qui gardent les traditions. Ce que l’un m’a raconté, je l’ai fait répéter par d’autres ; lorsque les récits s’accordaient, je les ai notés avec confiance ; lorsqu’ils différaient, j’ai écrit les différentes versions côte à côte. Ainsi s’est composé ce recueil des traditions de l’Imerina.',
      questions: ['D’où viennent les informations rassemblées par Callet ?',
        'Que fait-il lorsque deux récits ne disent pas la même chose ?',
        'Quelles étapes de la démarche historique reconnais-tu dans ce texte ?'],
      reponses: ['De la parole des vieillards qui gardent les traditions orales de l’Imerina.',
        'Il note les différentes versions côte à côte, sans choisir au hasard.',
        'La recherche des sources (écouter les vieillards), le contrôle (faire répéter par d’autres), l’analyse (comparer les versions) — la démarche historique presque complète.']
    },
    lexique: [
      ['Démarche historique', 'méthode de l’historien : rechercher, vérifier, extraire, interpréter'],
      ['Source', 'toute trace du passé qui sert de preuve'],
      ['Recouper', 'comparer plusieurs sources pour vérifier une information'],
      ['Tantara ny Andriana', 'recueil des traditions orales de l’Imerina, composé par Callet'],
    ],
    synthese: 'démarche historique = rechercher et classer, contrôler et vérifier, comprendre et extraire, analyser et interpréter ; mission de l’Histoire : comprendre le passé, expliquer le présent, améliorer le futur.',
    saistu: 'Au XIXᵉ siècle, le père François Callet a appliqué la démarche historique à Madagascar : pendant des années, il a recueilli et recoupé les traditions orales des anciens de l’Imerina pour composer le Tantara ny Andriana, somme monumentale qui reste aujourd’hui une source majeure de l’histoire malgache — la parole des ancêtres, devenue archive.',
    exos: ['Remets la démarche dans l’ordre et nomme chaque étape : a) expliquer ce que signifient les informations ; b) rassembler récits, objets et documents ; d) vérifier qui a produit chaque source et si elle est fiable ; e) lire et relever les noms, dates et lieux.',
      'Cite les trois utilités de l’Histoire et illustre chacune : a) expliquer le présent (un exemple) ; b) former le jugement (un exemple) ; d) éclairer les décisions (un exemple) ; e) rappelle la mission complète de l’Histoire selon le programme.',
      'Enquête au village. Pour dater l’ancien marché, tu disposes du témoignage d’une grand-mère, d’une photo jaunie et d’un registre communal. a) Classe ces trois sources par type. b) Quels contrôles fais-tu sur le témoignage ? d) Que fais-tu si deux sources se contredisent ? e) Quand peux-tu conclure ?'],
    corr: ['Ordre : b (1. rechercher et classer) → d (2. contrôler et vérifier) → e (3. comprendre et extraire) → a (4. analyser et interpréter).',
      'a) nos coutumes et nos frontières viennent du passé ; b) vérifier une rumeur avant d’y croire ; d) connaître les crises d’hier pour éviter celles de demain ; e) comprendre le passé pour expliquer le présent afin d’améliorer le futur.',
      'a) orale (témoignage), photographique (photo), écrite (registre) ; b) âge et mémoire du témoin, témoin direct ou de seconde main ; d) on recherche de nouvelles sources pour trancher ; e) quand plusieurs sources vérifiées concordent.'],
    fig: 'u1f2'
  },
  {
    t: 'La chronologie : le temps et l’espace en Histoire', comp: 'L’introduction à l’étude de l’Histoire', theme: 'La chronologie, les calendriers, le temps et l’espace',
    goal: 'utiliser les unités de mesure du temps, les calendriers et la frise chronologique pour situer un fait dans le temps et dans l’espace',
    mat: 'Frise chronologique préétablie, calendrier grégorien, calendrier musulman, carte',
    revQ: 'Récite les quatre étapes de la démarche historique.',
    revRA: 'Rechercher et classer ; contrôler et vérifier ; comprendre et extraire ; analyser et interpréter.',
    situation: 'Rivo affirme : « l’indépendance de Madagascar, c’était il y a très longtemps, au moins mille ans ! » Hanta éclate de rire : « 1960, c’est le siècle de nos grands-parents ! » Qui a raison ? Sans instrument pour mesurer le temps, impossible de trancher. L’historien possède cet instrument : la chronologie.',
    legende: '« L’indépendance ? Il y a mille ans ! » dit Rivo. Hanta rit : « 1960, c’est le siècle de nos grands-parents ! » Qui a raison ?',
    motsCles: ['chronologie', 'décennie', 'siècle', 'millénaire', 'calendrier grégorien', 'calendrier musulman', 'hégire', 'frise chronologique', 'le temps', 'l’espace', 'quand ?', 'où ?'],
    sections: [
      {
        titre: 'La chronologie et les unités de mesure du temps',
        paras: ['La chronologie est la science des temps : une liste d’événements classés suivant leur date, du plus ancien au plus récent. Pour mesurer, elle emboîte les unités : seconde, minute, heure, jour, semaine, mois, année… puis les grandes unités de l’historien :'],
        puces: [
          'la décennie = 10 ans ;',
          'le siècle = 100 ans ;',
          'le millénaire = 1 000 ans.',
        ],
      },
      {
        titre: 'Les calendriers : des points de départ différents',
        paras: [
          'Mesurer exige un point de départ. Le calendrier grégorien, le nôtre, part de l’an 1, naissance de Jésus-Christ : nous sommes au IIIᵉ millénaire. Le calendrier musulman part de 622, année de l’hégire — le départ du prophète vers Médine.',
          'D’autres peuples ont d’autres points de départ : il n’existe pas un temps unique, mais des calendriers — et l’historien sait passer de l’un à l’autre.',
        ],
      },
      {
        titre: 'La frise chronologique',
        paras: [
          'L’outil roi est la frise chronologique : une ligne graduée à échelle régulière où chaque événement prend sa place. Elle rend visibles l’ordre des faits, les durées et les simultanéités.',
        ],
      },
      {
        titre: 'L’espace en Histoire : répondre à « où ? »',
        paras: [
          'Le temps ne suffit pas : tout fait a eu lieu quelque part — territoire, lieu, carte. Quand ? et où ? : un fait qui répond aux deux questions est correctement situé. L’indépendance de Madagascar, proclamée le 26 juin 1960 à Antananarivo, est parfaitement située — et Hanta avait raison !',
        ],
      },
    ],
    doc: {
      titre: 'La proclamation de l’indépendance',
      source: 'd’après le discours de Philibert Tsiranana, Antananarivo, 26 juin 1960 — extrait adapté',
      texte: 'En ce jour solennel du 26 juin 1960, devant le peuple rassemblé, je proclame l’indépendance de Madagascar. Après soixante-quatre années, notre île retrouve sa pleine souveraineté. Que cette date reste gravée dans la mémoire de tous les Malgaches, aujourd’hui et pour les générations à venir.',
      questions: ['Quelle est la date exacte de l’événement, et où se déroule-t-il ?',
        'En quel siècle cet événement se situe-t-il ? Justifie avec la règle.',
        'Le texte dit « après soixante-quatre années » : de quelle année part ce calcul ?'],
      reponses: ['Le 26 juin 1960, à Antananarivo — l’événement est situé dans le temps ET dans l’espace.',
        'Au XXᵉ siècle : pour une année entre 1901 et 2000, on prend les centaines (19) et on ajoute 1.',
        'De 1896 : 1960 − 64 = 1896, l’année où Madagascar avait perdu sa souveraineté.']
    },
    lexique: [
      ['Décennie / siècle / millénaire', '10 ans / 100 ans / 1 000 ans'],
      ['Frise chronologique', 'ligne du temps graduée à échelle régulière'],
      ['Hégire', 'départ du prophète vers Médine (622) : point de départ du calendrier musulman'],
      ['Situer un fait', 'répondre aux deux questions : quand ? et où ?'],
    ],
    synthese: 'unités : de la seconde au millénaire (décennie 10 ans, siècle 100 ans, millénaire 1 000 ans) ; calendrier grégorien : an 1 ; calendrier musulman : 622, hégire ; frise = ligne du temps graduée ; situer un fait = quand ? + où ?.',
    saistu: 'Le calendrier traditionnel malgache compte douze mois lunaires — Alahamady, Adaoro, Adizaoza… — dont les noms viennent des navigateurs arabes arrivés sur les côtes de la Grande Île il y a près de mille ans. Le premier mois, Alahamady, donnait le signal du bain royal, le fandroana : à Madagascar aussi, mesurer le temps a toujours été un acte solennel !',
    exos: ['Convertis : a) 3 décennies en années ; b) 2 siècles en années ; d) un demi-millénaire en années ; e) 40 ans en décennies.',
      'Siècles et durées. a) En quel siècle se situe 1960 ? b) En quel siècle se situe 1817 ? d) Combien d’années séparent 1958 et 1972 ? e) Combien d’années séparent 622 et 2026 ?',
      'Calendriers et frise. a) Quel est le point de départ du calendrier grégorien ? b) Celui du calendrier musulman ? d) Sur une frise allant de l’an 1 à 2000, l’événement de 622 est-il avant ou après le milieu ? e) Pourquoi la frise doit-elle garder une échelle régulière ?'],
    corr: ['a) 30 ans ; b) 200 ans ; d) 500 ans ; e) 4 décennies.',
      'a) le XXᵉ siècle ; b) le XIXᵉ siècle ; d) 1972 − 1958 = 14 ans ; e) 2026 − 622 = 1 404 ans.',
      'a) l’an 1, naissance de Jésus-Christ ; b) 622, année de l’hégire (départ vers Médine) ; d) avant le milieu (622 est inférieur à 1000) ; e) parce que des graduations irrégulières fausseraient les durées et tromperaient le lecteur.'],
    fig: 'u1f3'
  },
  {
    t: 'Les sources historiques et leurs caractéristiques', comp: 'L’introduction à l’étude de l’Histoire', theme: 'Les types et caractéristiques des sources historiques',
    goal: 'distinguer les différents types de sources historiques et caractériser chacun',
    mat: 'Photos, images, tesson de poterie, extrait d’archive écrite, personnes ressources, film documentaire',
    revQ: 'Décennie, siècle, millénaire : combien d’années chacun ?',
    revRA: '10 ans ; 100 ans ; 1 000 ans.',
    situation: 'La classe organise une « table du passé » : chacun apporte une trace d’autrefois. Naly pose une vieille pièce, Soa une photo de mariage de 1955, Rivo rapporte le récit de sa grand-mère, Hanta un journal jauni, et le maître ajoute l’enregistrement d’un vieux chant. Cinq objets très différents… et pourtant tous font parler le passé.',
    legende: 'La « table du passé » de la classe : une pièce, une photo, un récit, un journal, un chant — cinq sources très différentes.',
    motsCles: ['source historique', 'matérielles', 'figuratives', 'vestiges', 'écrites', 'orales', 'photographiques', 'audiovisuelles', 'croiser', 'sorabe'],
    sections: [
      {
        titre: 'Qu’est-ce qu’une source historique ?',
        paras: [
          'Une source historique est toute trace laissée par le passé qui permet de le reconstituer : objet, image, ruine, écrit, parole, photo, film — le garde-manger de l’historien.',
        ],
      },
      {
        titre: 'Les sept familles de sources',
        puces: [
          'les sources matérielles : des objets (monnaie, vase, bateau, outil) ;',
          'les sources figuratives : des représentations (gravures, sculptures, dessins, caricatures) ;',
          'les vestiges : les restes d’une civilisation (fondations d’une ancienne cité, outils enfouis) ;',
          'les sources écrites : des documents (manuscrits, archives, journaux, lettres) ;',
          'les sources orales : la parole transmise (traditions orales, témoignages) ;',
          'les sources photographiques : les photos anciennes ;',
          'les sources audiovisuelles, les plus récentes : musique, bandes sonores, fichiers audio et vidéo.',
        ],
      },
      {
        titre: 'Les forces et les limites de chaque famille',
        paras: ['Chaque source a une force et une limite :'],
        puces: [
          'l’objet est solide, mais muet sur les intentions ;',
          'l’image montre, mais selon le regard de son auteur ;',
          'l’écrit est riche et datable, mais il faut se demander : qui a écrit ? pourquoi ? ;',
          'la parole est irremplaçable à Madagascar, pays de traditions orales — mais la mémoire déforme.',
        ],
      },
      {
        titre: 'La règle d’or : croiser les sources',
        paras: [
          'Aucune source ne suffit seule : l’historien croise toujours plusieurs familles pour approcher la vérité historique. La Grande Île possède d’ailleurs un trésor de la famille écrite : les sorabe, « grands écrits », manuscrits en langue malgache tracés avec l’alphabet arabe et gardés par les scribes antemoro du Sud-Est.',
        ],
      },
    ],
    doc: {
      titre: 'Un trésor des Antemoro : le sorabe',
      source: 'notice de musée — texte reconstitué',
      texte: 'Ce volume ancien est un sorabe, « grand écrit ». Il est rédigé en langue malgache, mais avec des caractères arabes. Son papier a été fabriqué à partir d’écorce battue, son encre à partir de plantes. Les scribes antemoro du Sud-Est le recopiaient avec un soin extrême et le transmettaient de génération en génération comme un trésor de famille : il contient des généalogies, des remèdes et des récits anciens.',
      questions: ['À quelle famille de sources le sorabe appartient-il ? Justifie.',
        'Quelles informations un historien peut-il en tirer ?',
        'Pourquoi faut-il tout de même croiser le sorabe avec d’autres sources ?'],
      reponses: ['Aux sources écrites : c’est un document rédigé (en malgache, avec l’alphabet arabe).',
        'Des généalogies, des remèdes, des récits anciens — et aussi des indices sur ceux qui l’ont écrit.',
        'Parce qu’aucune source ne suffit seule : un texte recopié peut contenir des erreurs, et son auteur a son point de vue — la règle d’or est de croiser.']
    },
    lexique: [
      ['Source matérielle', 'objet : monnaie, vase, outil'],
      ['Source figurative', 'image : gravure, sculpture, caricature'],
      ['Vestige', 'reste d’une civilisation : fondations, outils enfouis'],
      ['Source écrite / orale', 'document rédigé / parole transmise'],
      ['Source audiovisuelle', 'son et image : film, enregistrement'],
      ['Sorabe', 'manuscrit malgache ancien en caractères arabes'],
    ],
    synthese: 'sept familles : matérielles (objets), figuratives (images), vestiges (restes), écrites (documents), orales (paroles), photographiques, audiovisuelles ; chacune a ses forces et ses limites ; on croise toujours plusieurs sources.',
    saistu: 'Les plus anciens écrits de Madagascar sont les sorabe, « grands écrits » : des manuscrits rédigés en langue malgache mais avec l’alphabet arabe, conservés par les scribes antemoro du Sud-Est. Encre végétale, papier d’écorce battue : ces précieux volumes, gardés comme des trésors de famille, sont des sources écrites uniques au monde.',
    exos: ['Classe chaque source dans sa famille : a) une marmite en terre cuite retrouvée dans un tombeau ; b) le récit du doyen sur la grande famine ; d) une caricature parue dans un journal de 1930 ; e) un film documentaire sur les années 1970.',
      'Donne une force et une limite : a) d’une source orale ; b) d’une photographie ; d) d’un vestige ; e) d’un journal ancien.',
      'La table du passé. a) Combien de familles de sources la classe a-t-elle réunies (pièce, photo, récit, journal, chant enregistré) ? b) Laquelle est une source matérielle ? d) Pourquoi ne pas conclure à partir du seul récit de la grand-mère ? e) Propose une sixième source d’une famille encore absente.'],
    corr: ['a) matérielle (et vestige si trouvée en fouille) ; b) orale ; d) figurative ; e) audiovisuelle.',
      'a) force : mémoire vivante des sans-écrits ; limite : la mémoire déforme, il faut recouper ; b) force : image directe et datable ; limite : cadrage choisi, scène parfois posée ; d) force : témoin des époques sans écriture ; limite : muet sans analyse ; e) force : daté et détaillé ; limite : reflète l’opinion de son auteur.',
      'a) cinq : matérielle, photographique, orale, écrite, audiovisuelle ; b) la pièce de monnaie ; d) parce qu’une source seule peut se tromper : on croise ; e) par exemple une gravure ou une sculpture (figurative), ou des fondations anciennes (vestige).'],
    fig: 'u1f4'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'L’introduction à l’étude de l’Histoire',
  rag: 'déterminer les moyens de s’initier à la connaissance historique et distinguer les sources historiques, en appliquant la démarche historique.',
  valeurs: 'esprit de curiosité et de critique, goût de l’effort et de l’excellence',
  sessions: S,
  revision: {
    table: [
      ['L’Histoire', 'Discipline scientifique qui reconstitue le passé des sociétés humaines', 'Définir l’Histoire et la distinguer de la légende'],
      ['Objet d’étude', 'Faits et civilisations, guerres, évolution de la société, lois et personnages', 'Identifier ce que l’Histoire étudie'],
      ['Démarche historique', 'Rechercher et classer, contrôler et vérifier, extraire, analyser et interpréter', 'Appliquer les quatre étapes dans l’ordre'],
      ['Utilité de l’Histoire', 'Comprendre le passé pour expliquer le présent afin d’améliorer le futur', 'Expliquer le rôle de l’Histoire dans la vie quotidienne'],
      ['Chronologie', 'Science des temps ; décennie, siècle, millénaire ; frise à échelle régulière ; quand ? et où ?', 'Situer un fait dans le temps et dans l’espace'],
      ['Calendriers et sources', 'Grégorien : an 1 ; musulman : 622 (hégire) ; sept familles de sources à croiser', 'Utiliser les calendriers et classer les sources']
    ],
    questions: [
      'Définis l’Histoire et cite ses quatre grands objets d’étude.',
      'Récite dans l’ordre les quatre étapes de la démarche historique et donne la mission de l’Histoire.',
      'Convertis : 5 décennies ; 3 siècles ; en quel siècle se situe 1947 ?',
      'Quels sont les points de départ des calendriers grégorien et musulman ?',
      'Classe ces sources : un vase ancien ; le témoignage d’un ancien combattant ; une archive communale ; un film d’époque.'
    ],
    answers: [
      'Discipline scientifique qui étudie et reconstitue le passé de l’humanité et des sociétés humaines à partir de traces vérifiées ; objets : faits et civilisations, guerres, évolution de la société, lois et personnages.',
      'Rechercher et classer ; contrôler et vérifier ; comprendre et extraire ; analyser et interpréter — mission : comprendre le passé pour expliquer le présent afin d’améliorer le futur.',
      '50 ans ; 300 ans ; 1947 est au XXᵉ siècle.',
      'Grégorien : an 1, naissance de Jésus-Christ ; musulman : 622, année de l’hégire à Médine.',
      'Matérielle ; orale ; écrite ; audiovisuelle.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis l’Histoire. b) Pourquoi la vérité historique exige-t-elle des preuves ? d) Cite les quatre objets d’étude de l’Histoire. e) Que signifie « situer un fait dans le temps et dans l’espace » ?',
      'Chronologie. a) Convertis 7 décennies et 2 millénaires en années. b) En quel siècle se situent 1896 et 1960 ? d) Calcule la durée entre 1958 et 1972, puis entre 622 et 2022. e) Trouver le siècle d’une année : explique la règle avec l’exemple de 1817.',
      'Calendriers. a) Quel est le point de départ du calendrier grégorien ? b) Quel événement fonde le calendrier musulman, et en quelle année ? d) Pourquoi existe-t-il plusieurs calendriers ? e) Sur une frise de l’an 1 à 2000, place dans l’ordre : 622, 1500, 1960.',
      'Les sources. Classe chacune dans sa famille et donne une limite : a) une pièce de monnaie royale ; b) le récit d’une grand-mère sur la famine ; d) une photographie de 1947 ; e) les fondations d’une ancienne cité fortifiée.',
      'Étude de situation. Pour écrire l’histoire de ton école, tu disposes du registre des inscriptions, d’une photo de la première promotion et du témoignage du plus ancien instituteur. a) Classe ces trois sources. b) Décris le contrôle à faire sur chacune. d) Applique les quatre étapes de la démarche historique à cette enquête. e) Explique pourquoi la conclusion sera plus solide avec les trois sources qu’avec une seule.'
    ],
    corr: [
      'a) discipline scientifique qui étudie et reconstitue le passé de l’humanité et des sociétés humaines à partir de traces ; b) parce que sans preuve vérifiée, le récit reste une légende ou une rumeur ; d) faits et civilisations, guerres, évolution de la société, lois et personnages ; e) répondre aux questions quand ? (date, période) et où ? (territoire, lieu, carte). Un point par item.',
      'a) 70 ans ; 2 000 ans ; b) 1896 : XIXᵉ siècle ; 1960 : XXᵉ siècle ; d) 14 ans ; 1 400 ans ; e) on prend les centaines (18) et on ajoute 1 : 1817 est au XIXᵉ siècle. Un point par item.',
      'a) l’an 1, naissance de Jésus-Christ ; b) l’hégire, départ du prophète vers Médine, en 622 ; d) parce que chaque civilisation a choisi son propre point de départ pour compter les années ; e) ordre : 622, puis 1500, puis 1960. Un point par item.',
      'a) matérielle — muette sur les intentions ; b) orale — la mémoire déforme, à recouper ; d) photographique — cadrage choisi, date à vérifier ; e) vestige — muet sans analyse. Un point par item.',
      'a) écrite (registre), photographique (photo), orale (témoignage) ; b) registre : complet et authentique ? photo : datée et bien identifiée ? témoin : direct ou de seconde main ? ; d) rechercher et classer les trois sources, les contrôler, en extraire noms et dates, analyser et interpréter en les croisant ; e) parce que des sources de familles différentes qui concordent rendent la vérité historique beaucoup plus sûre. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
