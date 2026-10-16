// UNITÉ 2 — L'ANTIQUITÉ (PE T7) : 6 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — frise de l'Antiquité et ses civilisations
figs.u2f1 = (() => { const { s, y } = head('L’Antiquité : −3 000 à 476', ['Quatre grandes civilisations sur une même frise.']);
  const top = y + 25;
  const X = 70, W = 860, Y0 = top + 20;
  // axe
  let b = seg(X, Y0, X + W, Y0, BLUE, 5);
  b += txt(X, Y0 - 14, '−3 000', 22, PINK2, 'bold', 'middle');
  b += txt(X + W, Y0 - 14, '476', 22, PINK2, 'bold', 'middle');
  // échelle : -3400 → 476 ≈ 3876 ans sur 860 px → on place approximativement
  const rows = [
    ['Mésopotamie', '−3 400 à −2 900', 0, 130, GREENL, GREEN],
    ['Égypte', '−2 700 à −1 100', 160, 390, BLUEL, BLUE],
    ['Grèce', '−500 à −323', 630, 70, '#FDE7EF', PINK2],
    ['Rome', '−753 à 476', 580, 280, '#FFF3E0', OCRE]
  ];
  rows.forEach(([n, d, off, len, f, c], i) => {
    const Y = Y0 + 46 + i * 84;
    b += `<rect x="${X + off}" y="${Y}" width="${len}" height="40" rx="8" fill="${f}" stroke="${c}" stroke-width="3"/>`;
    b += txt(Math.min(X + off, 700), Y - 10, `${n} (${d})`, 22, c, 'bold');
    b += seg(X + off, Y0, X + off, Y, c, 1.5, '6,5');
  });
  b += txt(500, Y0 + 46 + 4 * 84 + 10, 'plus la barre est à gauche, plus la civilisation est ancienne', 21, '#333', 'normal', 'middle');
  return svg(1000, Y0 + 46 + 4 * 84 + 42, s + b); })();
// S2 — la civilisation et la Mésopotamie
figs.u2f2 = (() => { const { s, y } = head('Qu’est-ce qu’une civilisation ?', ['Les éléments constitutifs — et l’exemple mésopotamien.']);
  const top = y + 15;
  const els = ['un espace géographique', 'une organisation politique et sociale', 'des valeurs culturelles et religieuses', 'une organisation économique'];
  let b = '';
  els.forEach((t, i) => { b += box(60, top + i * 62, 440, 50, t, GREENL, GREEN, 20); });
  const ex = ['entre Tigre et Euphrate', 'rois, prêtres, scribes ; la ville d’Uruk', 'dieux multiples, ziggourats', 'irrigation, artisanat, échanges'];
  ex.forEach((t, i) => {
    b += arrow(500, top + i * 62 + 25, 545, top + i * 62 + 25, PINK2, 3.5);
    b += box(550, top + i * 62, 400, 50, t, BLUEL, BLUE, 19);
  });
  b += txt(500, top + 4 * 62 + 32, 'vers −3 500 à Uruk : pictogrammes puis cunéiformes — l’écriture est née', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 62 + 64, s + b); })();
// S3 — Égypte : les trois empires
figs.u2f3 = (() => { const { s, y } = head('L’Égypte des pharaons', ['Trois empires le long du Nil.']);
  const top = y + 20;
  const emp = [['Ancien Empire', '−2700 à −2200', 'les grandes pyramides', GREENL, GREEN],
    ['Moyen Empire', '−2050 à −1800', 'conquêtes et canaux', BLUEL, BLUE],
    ['Nouvel Empire', '−1600 à −1100', 'l’apogée du pharaon', '#FDE7EF', PINK2]];
  let b = '';
  emp.forEach(([n, d, t, f, c], i) => {
    const X = 40 + i * 315;
    b += box(X, top, 290, 54, n, f, c, 22);
    b += txt(X + 145, top + 90, d, 22, c, 'bold', 'middle');
    b += txt(X + 145, top + 122, t, 19, '#333', 'normal', 'middle');
    if (i < 2) b += arrow(X + 290, top + 27, X + 315, top + 27, OCRE, 4);
  });
  b += txt(500, top + 176, 'le pharaon : roi, chef religieux et chef des armées — un pouvoir total', 21, BLUE, 'bold', 'middle');
  b += txt(500, top + 212, '« L’Égypte est un don du Nil » : la crue dépose le limon qui fertilise les champs', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 244, s + b); })();
// S4 — Sparte / Athènes
figs.u2f4 = (() => { const { s, y } = head('Deux cités grecques rivales', ['Sparte la guerrière, Athènes la démocratique.']);
  const top = y + 15;
  const data = [['', 'Sparte', 'Athènes'],
    ['caractère', 'cité guerrière', 'cité de la démocratie'],
    ['éducation', 'militaire, très dure', 'lettres, sports, arts'],
    ['pouvoir', 'deux rois et les anciens', 'les citoyens votent'],
    ['fierté', 'discipline des soldats', 'philosophes, théâtre']];
  let b = tableEl(60, top, [230, 330, 330], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'démocratie : dêmos « peuple » + kratos « pouvoir » — le pouvoir du peuple', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 74, s + b); })();
// S5 — Rome : trois régimes
figs.u2f5 = (() => { const { s, y } = head('Rome : trois régimes successifs', ['De la légende de Romulus à la chute de 476.']);
  const top = y + 20;
  const reg = [['Royauté étrusque', '−600 à −509', 'des rois gouvernent', GREENL, GREEN],
    ['République', '−509 à −27', 'sénat et magistrats élus', BLUEL, BLUE],
    ['Empire', '27 à 476', 'un empereur tout-puissant', '#FDE7EF', PINK2]];
  let b = '';
  reg.forEach(([n, d, t, f, c], i) => {
    const X = 40 + i * 315;
    b += box(X, top, 290, 54, n, f, c, 22);
    b += txt(X + 145, top + 90, d, 22, c, 'bold', 'middle');
    b += txt(X + 145, top + 122, t, 19, '#333', 'normal', 'middle');
    if (i < 2) b += arrow(X + 290, top + 27, X + 315, top + 27, OCRE, 4);
  });
  b += txt(500, top + 176, 'res publica = « la chose publique » : l’État appartient aux citoyens', 21, BLUE, 'bold', 'middle');
  b += txt(500, top + 212, 'la Méditerranée devient le centre de l’Empire : routes, légions, villes', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 244, s + b); })();
// S6 — héritages antiques à Madagascar
figs.u2f6 = (() => { const { s, y } = head('L’héritage antique à Madagascar', ['Ce que les civilisations antiques nous ont légué.']);
  const top = y + 15;
  const data = [['domaine', 'héritage visible aujourd’hui'],
    ['infrastructures', 'routes pavées, irrigation, charrue'],
    ['système militaire', 'organisation des soldats'],
    ['culture et loisirs', 'Jeux olympiques, théâtres'],
    ['vie politique', 'démocratie et République']];
  let b = tableEl(70, top, [330, 530], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'voter, débattre, être citoyen : des idées nées à Athènes et à Rome', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 74, s + b); })();


const S = [
  {
    t: 'Délimiter l’Antiquité', comp: 'L’Antiquité', theme: 'La délimitation dans le temps et dans l’espace de l’Antiquité',
    goal: 'délimiter dans le temps et dans l’espace les faits historiques de l’Antiquité',
    mat: 'Frise chronologique, carte antique, planisphère',
    revQ: 'Quelles sont les quatre périodes de l’Histoire et leurs bornes ?',
    revRA: 'Antiquité (−3 000/476), Moyen Âge (476/1492), Temps modernes (1492/1789), Époque contemporaine (1789/nos jours).',
    situation: 'Pyramides d’Égypte, temples grecs, routes romaines : ces merveilles appartiennent toutes à une même grande période — la première de l’Histoire. Mais quand commence-t-elle, quand finit-elle, et où se déroule-t-elle ? Avant de visiter les civilisations antiques, l’historien pose toujours ses deux repères : le temps et l’espace.',
    legende: 'Pyramides, temples grecs, routes romaines : une même période les a vus naître — la première de l’Histoire.',
    motsCles: ['Antiquité', 'écriture', 'chute de Rome', 'Mésopotamie', 'Égypte', 'Grèce', 'Rome', 'vallées des fleuves', 'Méditerranée', 'chevauchement'],
    sections: [
      {
        titre: 'Les bornes de l’Antiquité dans le temps',
        paras: [
          'L’Antiquité est la première période de l’Histoire : elle s’étend de l’invention de l’écriture, vers −3 000, à la chute de l’Empire romain d’Occident, en 476 — près de 3 500 ans d’histoire.',
          'Entre ces bornes, quatre grandes civilisations : la Mésopotamie (entre −3 400 et −2 900), l’Égypte (entre −2 700 et −1 100), la Grèce (entre −500 et −323) et Rome (entre −753 et 476). Elles ne se succèdent pas sagement : certaines se chevauchent — Rome naît en −753 alors que la Grèce brille encore.',
        ],
      },
      {
        titre: 'Les espaces de l’Antiquité',
        paras: ['Dans l’espace, tout se joue autour de deux pôles :'],
        puces: [
          'les vallées des grands fleuves — le Tigre et l’Euphrate pour la Mésopotamie, le Nil pour l’Égypte — où l’eau permet l’agriculture et fait naître les premières villes ;',
          'les rives de la mer Méditerranée — Grèce, Rome — où les bateaux transportent marchandises et idées.',
        ],
      },
      {
        titre: 'Lire la frise et la carte antiques',
        paras: [
          'Trois réflexes devant une frise antique : vérifier le signe des dates (−500 est avant Jésus-Christ), comparer les durées (l’Égypte dure seize siècles, la Grèce classique moins de deux), repérer les chevauchements. Sur la carte, on place chaque civilisation près de son eau nourricière : fleuve ou mer — l’eau est le secret des civilisations antiques.',
        ],
      },
    ],
    doc: {
      titre: 'Pourquoi l’écriture ouvre-t-elle l’Histoire ?',
      source: 'd’après les manuels des historiens sur l’entrée dans l’Histoire — texte reconstitué',
      texte: 'Avant l’écriture, les hommes ne nous parlent que par leurs restes : un outil, un foyer, une tombe. L’historien devine, compare, suppose. Mais dès que les premiers signes sont gravés sur l’argile de Mésopotamie, vers −3 000, tout change : les hommes nous disent eux-mêmes leurs rois, leurs récoltes, leurs dieux et leurs querelles. C’est pourquoi nous faisons commencer l’Histoire à l’écriture — et c’est pourquoi l’Antiquité, première période de l’Histoire, s’ouvre dans les vallées des grands fleuves, là où l’écriture est née.',
      questions: ['Comment l’historien connaît-il les hommes d’avant l’écriture ?',
        'Qu’est-ce que l’écriture change pour l’historien ?',
        'Pourquoi l’Antiquité commence-t-elle dans les vallées des grands fleuves ?'],
      reponses: ['Seulement par leurs restes matériels — outils, foyers, tombes — qu’il faut interpréter.',
        'Les hommes témoignent directement : rois, récoltes, dieux, querelles ; l’historien lit au lieu de deviner.',
        'Parce que l’écriture, qui ouvre l’Histoire, est née vers −3 000 en Mésopotamie, dans la vallée du Tigre et de l’Euphrate.']
    },
    lexique: [
      ['Antiquité', 'première période de l’Histoire : de l’écriture (−3 000) à 476'],
      ['Chevauchement', 'deux civilisations qui existent en même temps'],
      ['Civilisation', 'ensemble des caractères communs d’une société'],
      ['Mare nostrum', '« notre mer » : nom romain de la Méditerranée'],
    ],
    synthese: 'Antiquité : de l’écriture (vers −3 000) à la chute de Rome (476) ; quatre civilisations : Mésopotamie (−3 400/−2 900), Égypte (−2 700/−1 100), Grèce (−500/−323), Rome (−753/476) ; espaces : vallées des fleuves puis Méditerranée.',
    saistu: 'Pendant que l’Égypte élevait ses pyramides, Madagascar était encore... inhabitée ! Les premiers hommes n’ont abordé la Grande Île que bien après la fin de l’Antiquité. C’est pourquoi notre île n’a ni pyramide ni temple antique : son histoire humaine est l’une des plus jeunes du monde — un cas rare qui fascine les archéologues.',
    exos: ['Vrai ou faux ? Corrige. a) L’Antiquité commence en 476. b) L’écriture naît vers −3 000. d) La civilisation égyptienne est plus ancienne que la Mésopotamie. e) Rome existe déjà pendant la Grèce classique.',
      'Les repères. a) Donne les deux bornes de l’Antiquité et leurs événements. b) Date la civilisation mésopotamienne. d) Date la civilisation romaine. e) Quels sont les deux types d’espaces des civilisations antiques ?',
      'Frise et carte. a) Trace la frise de l’Antiquité et place les quatre civilisations. b) Laquelle dure le plus longtemps ? d) Lesquelles se chevauchent ? e) Associe chaque civilisation à son eau : Nil, Tigre-Euphrate, Méditerranée.'],
    corr: ['a) faux : elle commence vers −3 000 et finit en 476 ; b) vrai ; d) faux : la Mésopotamie (−3 400) précède l’Égypte (−2 700) ; e) vrai : Rome naît en −753.',
      'a) vers −3 000 : invention de l’écriture ; 476 : chute de l’Empire romain d’Occident ; b) entre −3 400 et −2 900 ; d) de −753 à 476 ; e) les vallées des grands fleuves et les rives de la Méditerranée.',
      'a) frise conforme à la figure ; b) Rome : plus de douze siècles (−753 à 476) ; d) Grèce et Rome (et la fin de l’Égypte chevauche les débuts de Rome) ; e) Égypte-Nil ; Mésopotamie-Tigre et Euphrate ; Grèce et Rome-Méditerranée.'],
    fig: 'u2f1'
  },
  {
    t: 'La notion de civilisation et la Mésopotamie', comp: 'L’Antiquité', theme: 'Les premières civilisations de la Mésopotamie',
    goal: 'définir la notion de civilisation et dégager les caractéristiques de la civilisation mésopotamienne',
    mat: 'Carte de la Mésopotamie entre −3 400 et −2 900, documents, images',
    revQ: 'Donne les bornes de l’Antiquité et cite ses quatre grandes civilisations.',
    revRA: '−3 000 à 476 ; Mésopotamie, Égypte, Grèce, Rome.',
    situation: 'Entre deux fleuves du Proche-Orient, il y a plus de cinq mille ans, des villages de terre sont devenus des villes aux temples immenses ; des paysans sont devenus rois, prêtres, scribes ; et sur des tablettes d’argile, des signes ont commencé à parler. Là, pour la première fois, les hommes ont bâti une civilisation. Mais au fait — qu’est-ce qu’une civilisation ?',
    legende: 'Entre le Tigre et l’Euphrate, des villages de terre sont devenus les premières villes de l’humanité.',
    motsCles: ['civilisation', 'Mésopotamie', 'Tigre et Euphrate', 'irrigation', 'ville', 'Uruk', 'ziggurat', 'polythéiste', 'scribes', 'pictogrammes', 'cunéiformes'],
    sections: [
      {
        titre: 'Qu’est-ce qu’une civilisation ?',
        paras: [
          'Une civilisation est l’ensemble des caractères communs d’une société : un espace géographique, une organisation politique et sociale, des valeurs culturelles et religieuses, et une organisation économique. C’est la carte d’identité complète d’un peuple : son territoire, ses chefs et sa société, ses croyances, sa manière de produire.',
        ],
      },
      {
        titre: 'La Mésopotamie, « pays entre les fleuves »',
        paras: [
          'Mésopotamie signifie en grec « le pays entre les fleuves » : le Tigre et l’Euphrate, dont les crues déposent un limon fertile. L’irrigation y produit des récoltes si abondantes qu’une partie des hommes peut cesser de cultiver : artisans, prêtres, marchands, soldats apparaissent — la ville est née, entre −3 400 et −2 900.',
          'Uruk, la plus fameuse, aligne ses maisons autour d’une ziggurat, tour-temple à étages qui touche le ciel des dieux ; la religion est polythéiste : de nombreux dieux, honorés par les prêtres. Au sommet, un roi gouverne, aménage le territoire — canaux, remparts, greniers — et fait régner l’ordre.',
        ],
      },
      {
        titre: 'La naissance de l’écriture',
        paras: [
          'Pour compter les sacs de grain et les troupeaux, les scribes inventent vers −3 500 les pictogrammes, petits dessins des choses ; simplifiés en signes en forme de coins gravés au roseau sur l’argile, ils deviennent les cunéiformes (du latin cuneus, « coin ») : l’écriture est née, et avec elle l’Histoire.',
          'L’économie complète le tableau : agriculture irriguée, artisanat du métal et de la laine, échanges avec les pays voisins. Espace, pouvoir, croyances, économie : les quatre éléments s’assemblent — la Mésopotamie est bien la première civilisation.',
        ],
      },
    ],
    doc: {
      titre: 'Les murailles d’Uruk',
      source: 'd’après l’Épopée de Gilgamesh, tablette I (Mésopotamie, vers −1 800) — extrait adapté',
      texte: 'Monte sur la muraille d’Uruk et parcours-la ! Examine ses fondations, observe son appareil de briques : vois si ses briques ne sont pas de terre cuite, et si les Sept Sages n’en ont pas posé eux-mêmes les assises ! Regarde la ville : un tiers pour les maisons, un tiers pour les jardins, un tiers pour le domaine du temple. C’est Gilgamesh, le roi, qui a bâti les remparts d’Uruk-les-clos et le temple sacré de l’Éanna.',
      questions: ['Quels éléments de la ville d’Uruk ce texte décrit-il ?',
        'Que nous apprend-il sur le rôle du roi en Mésopotamie ?',
        'Retrouve dans le texte deux des quatre éléments constitutifs d’une civilisation.'],
      reponses: ['Les murailles de briques cuites, les maisons, les jardins et le domaine du temple : une vraie ville organisée.',
        'Le roi bâtit et aménage : remparts, temple — il organise le territoire et protège la ville, comme dans la leçon.',
        'L’organisation politique (le roi Gilgamesh gouverne et bâtit) et les valeurs religieuses (le temple sacré de l’Éanna) ; on devine aussi l’espace (la ville) et l’économie (jardins).']
    },
    lexique: [
      ['Mésopotamie', 'en grec, « le pays entre les fleuves » (Tigre et Euphrate)'],
      ['Ziggurat', 'tour-temple à étages dédiée aux dieux'],
      ['Pictogramme', 'petit dessin représentant une chose, première écriture'],
      ['Cunéiforme', 'écriture en signes « en coin » gravés sur l’argile'],
    ],
    synthese: 'civilisation = espace + organisation politique et sociale + valeurs culturelles et religieuses + économie ; Mésopotamie (Tigre-Euphrate, −3 400/−2 900) : premières villes (Uruk), ziggourats, rois et scribes, pictogrammes puis cunéiformes.',
    saistu: 'Les tablettes d’argile de Mésopotamie ont mieux résisté au temps que bien des livres : cuites par les incendies qui détruisaient les palais, elles devenaient dures comme de la brique ! On en a retrouvé des centaines de milliers — listes de récoltes, contrats, lettres d’écoliers... et même les plus vieilles plaintes de clients mécontents de l’histoire !',
    exos: ['La définition. a) Cite les quatre éléments constitutifs d’une civilisation. b) Que signifie « Mésopotamie » ? d) Situe la civilisation mésopotamienne dans le temps. e) Cite la ville la plus célèbre de Mésopotamie.',
      'L’écriture. a) Quelle est la première forme d’écriture ? b) Que sont les cunéiformes ? d) Sur quel support écrivaient les scribes ? e) Pourquoi l’écriture est-elle née dans les villes ?',
      'Analyse. a) Pourquoi les fleuves sont-ils indispensables à cette civilisation ? b) Qu’est-ce qu’une ziggurat ? d) La religion mésopotamienne est-elle monothéiste ou polythéiste ? e) Remplis la fiche des quatre rubriques pour la Mésopotamie.'],
    corr: ['a) un espace géographique, une organisation politique et sociale, des valeurs culturelles et religieuses, une organisation économique ; b) « le pays entre les fleuves » ; d) entre −3 400 et −2 900 ; e) Uruk.',
      'a) les pictogrammes, petits dessins représentant les choses ; b) des signes en forme de coins, gravés au roseau ; d) des tablettes d’argile ; e) parce qu’il fallait compter et administrer les récoltes, les troupeaux et les échanges des grandes villes.',
      'a) leurs crues fertilisent la terre et l’irrigation permet les récoltes abondantes ; b) une tour-temple à étages dédiée aux dieux ; d) polythéiste : de nombreux dieux ; e) espace = entre Tigre et Euphrate ; pouvoir = rois et prêtres, ville d’Uruk ; croyances = dieux multiples, ziggourats ; économie = irrigation, artisanat, échanges.'],
    fig: 'u2f2'
  },
  {
    t: 'L’Égypte antique, don du Nil', comp: 'L’Antiquité', theme: 'L’Égypte antique et l’Égypte des pharaons',
    goal: 'caractériser la civilisation égyptienne : le rôle du Nil, les étapes de son histoire et le pouvoir du pharaon',
    mat: 'Carte de l’Égypte, frise chronologique, images, film documentaire',
    revQ: 'Définis une civilisation et cite ses quatre éléments constitutifs.',
    revRA: 'Ensemble des caractères communs d’une société : espace, organisation politique et sociale, valeurs culturelles et religieuses, économie.',
    situation: 'Un fleuve traverse un désert immense ; chaque été, il déborde — et au lieu d’une catastrophe, c’est une bénédiction : ses eaux déposent une boue noire qui nourrit les champs. Autour de ce miracle annuel, un royaume s’est bâti pour trois mille ans, avec des rois-dieux, des pyramides et des moissons d’or. Bienvenue en Égypte, le « don du Nil ».',
    legende: 'Chaque été, la crue du Nil dépose la boue noire qui nourrit les champs : le miracle annuel de l’Égypte.',
    motsCles: ['Nil', 'crue', 'limon', 'irrigation', 'Ancien Empire', 'Moyen Empire', 'Nouvel Empire', 'pharaon', 'pyramides', 'polythéiste', 'scribes'],
    sections: [
      {
        titre: 'Le Nil, source de vie',
        paras: [
          'Chaque année, la crue recouvre la vallée et dépose le limon, engrais naturel ; dès le retrait des eaux, les paysans sèment blé et orge dans la boue fertile — pendant que le désert, tout autour, protège le pays des invasions.',
          'Le fleuve est aussi la grande route d’Égypte : barques de pêche, felouques de commerce, radeaux chargés des blocs de pierre des pyramides. Maîtriser l’eau — digues, bassins, canaux — fait de l’Égypte un modèle d’aménagement de l’espace : la richesse vient des conditions naturelles ET du travail organisé.',
        ],
      },
      {
        titre: 'Trois empires sur trois mille ans',
        paras: ['Née dans la vallée du Nil, la civilisation égyptienne traverse trois grandes étapes :'],
        puces: [
          'l’Ancien Empire (−2 700 à −2 200) : l’époque des grandes pyramides, tombeaux des pharaons ;',
          'le Moyen Empire (−2 050 à −1 800) : le royaume s’agrandit, les canaux se développent ;',
          'le Nouvel Empire (−1 600 à −1 100) : l’Égypte à son apogée.',
        ],
      },
      {
        titre: 'Le pharaon et la société',
        paras: [
          'Le pharaon concentre tous les pouvoirs : il est roi (il gouverne et rend la justice), chef religieux (fils des dieux — la religion égyptienne est polythéiste) et chef des armées. Scribes, prêtres, artisans et une foule de paysans forment la société, pyramide humaine à l’image des pyramides de pierre.',
        ],
      },
    ],
    doc: {
      titre: '« L’Égypte est un don du Nil »',
      source: 'd’après Hérodote, Histoires, livre II (vers −450) — extrait adapté',
      texte: 'L’Égypte où naviguent les Grecs est pour les Égyptiens une terre gagnée sur l’eau, un don du fleuve. Quand le Nil déborde, il inonde la plaine entière, et le pays tout entier devient une mer d’où émergent seulement les villes, comme les îles de la mer Égée. Quand les eaux se retirent, chacun sème son champ dans la boue laissée par le fleuve, puis attend la moisson. Nulle part ailleurs on ne récolte le fruit de la terre avec si peu de peine.',
      questions: ['Qui est l’auteur de ce texte et de quand date-t-il ?',
        'Décris avec les mots du texte ce qui se passe pendant et après la crue.',
        'Explique la phrase « l’Égypte est un don du Nil » à l’aide du texte et de la leçon.'],
      reponses: ['Hérodote, voyageur et historien grec du Vᵉ siècle avant J.-C. (vers −450) — un témoin de l’Antiquité elle-même.',
        'Pendant la crue, le pays devient une mer d’où émergent les villes ; après, chacun sème dans la boue laissée par le fleuve et attend la moisson.',
        'Sans la crue qui dépose le limon fertile et sans le fleuve qui transporte hommes et marchandises, l’Égypte ne serait qu’un désert : c’est le Nil qui fait vivre le pays.']
    },
    lexique: [
      ['Crue', 'montée annuelle des eaux du fleuve qui inonde la vallée'],
      ['Limon', 'boue fertile déposée par la crue, engrais naturel'],
      ['Pharaon', 'roi d’Égypte : chef politique, religieux et militaire'],
      ['Apogée', 'moment le plus brillant d’une civilisation'],
    ],
    synthese: '« l’Égypte est un don du Nil » : crue, limon, irrigation, transport ; trois empires : Ancien (−2 700/−2 200, pyramides), Moyen (−2 050/−1 800), Nouvel (−1 600/−1 100, apogée) ; le pharaon cumule pouvoirs royal, religieux et militaire.',
    saistu: 'La grande pyramide de Khéops est restée le plus haut monument du monde pendant presque 4 000 ans : 146 mètres, 2,3 millions de blocs de plus de 2 tonnes chacun ! Et contrairement à la légende, elle ne fut pas bâtie par des esclaves mais par des ouvriers payés, nourris au pain et à la bière — leurs villages de chantier ont été retrouvés près du plateau de Gizeh.',
    exos: ['Vrai ou faux ? Corrige. a) Le pharaon partage le pouvoir avec les prêtres. b) L’Ancien Empire est l’époque des grandes pyramides. d) La crue du Nil ruinait les paysans. e) Le désert protégeait l’Égypte.',
      'Le Nil. a) Explique la phrase « l’Égypte est un don du Nil ». b) Qu’est-ce que le limon ? d) Cite deux usages du fleuve en dehors de l’agriculture. e) Pourquoi dit-on que l’Égypte maîtrisait son espace ?',
      'Les empires et le pharaon. a) Range les trois empires avec leurs dates. b) Associe une caractéristique à chacun. d) Cite les trois pouvoirs du pharaon. e) Compare le pharaon et un président de la République actuel (une ressemblance, une différence).'],
    corr: ['a) faux : il concentre tous les pouvoirs ; b) vrai ; d) faux : elle fertilisait leurs champs ; e) vrai : il barrait la route aux envahisseurs.',
      'a) sans la crue qui fertilise et le fleuve qui transporte, le pays ne serait qu’un désert ; b) la boue fertile déposée par la crue ; d) le transport des hommes et des marchandises, la pêche (aussi : les blocs des monuments) ; e) parce qu’elle a organisé digues, bassins et canaux pour dompter la crue.',
      'a) Ancien (−2 700/−2 200), Moyen (−2 050/−1 800), Nouvel Empire (−1 600/−1 100) ; b) Ancien : grandes pyramides ; Moyen : conquêtes et canaux ; Nouvel : apogée ; d) roi, chef religieux, chef des armées ; e) ressemblance : chef de l’État et des armées ; différence : le pharaon n’est pas élu et il est considéré comme un dieu.'],
    fig: 'u2f3'
  },
  {
    t: 'La Grèce : Sparte, Athènes et la démocratie', comp: 'L’Antiquité', theme: 'La civilisation grecque',
    goal: 'caractériser la civilisation grecque à travers les cités de Sparte et d’Athènes et l’origine de la démocratie',
    mat: 'Carte de la Grèce, frise chronologique, textes et images',
    revQ: 'Pourquoi dit-on que l’Égypte est un « don du Nil » ? Cite les trois pouvoirs du pharaon.',
    revRA: 'La crue fertilise les terres et le fleuve fait vivre le pays ; le pharaon est roi, chef religieux et chef des armées.',
    situation: 'Sur une place ensoleillée, des milliers de citoyens lèvent la main pour voter la loi ; à quelques jours de marche, une autre cité dresse ses fils dès l’enfance au métier de soldat. Deux villes, deux mondes — et pourtant la même langue, les mêmes dieux, le même pays de montagnes et d’îles. La Grèce antique est un puzzle de cités... dont l’une a inventé un mot qui a changé le monde : démocratie.',
    legende: 'À Athènes, des milliers de citoyens lèvent la main pour voter la loi : la démocratie est née.',
    motsCles: ['cité', 'polis', 'Sparte', 'Athènes', 'démocratie', 'Ecclésia', 'citoyen', 'droits et devoirs', 'Jeux olympiques', 'polythéiste'],
    sections: [
      {
        titre: 'Un pays de cités indépendantes',
        paras: [
          'Montagnes qui séparent, mer qui relie : chaque vallée, chaque île porte sa cité (polis), petit État avec sa ville, ses campagnes, ses lois. La civilisation grecque s’épanouit entre −500 et −323. Les cités se font la guerre, mais partagent la langue, les dieux de l’Olympe (religion polythéiste), les poèmes d’Homère et les Jeux olympiques, trêve sacrée où les athlètes concourent pour la gloire.',
        ],
      },
      {
        titre: 'Sparte, la cité guerrière',
        paras: [
          'À Sparte, l’enfant appartient à l’État ; à sept ans, le petit Spartiate entre dans une éducation militaire d’une dureté légendaire — endurance, obéissance, combat. L’armée spartiate est la plus redoutée de Grèce.',
        ],
      },
      {
        titre: 'Athènes, berceau de la démocratie',
        paras: [
          'Vers −500, les citoyens d’Athènes renversent les tyrans et fondent la démocratie — dêmos, le peuple ; kratos, le pouvoir. À l’assemblée (l’Ecclésia), les citoyens votent les lois, décident la guerre et la paix, élisent et contrôlent les magistrats. Être citoyen donne des droits (voter, parler, être élu) et des devoirs (défendre la cité, respecter ses lois).',
          'Mais la société reste inégalitaire : femmes, étrangers et esclaves — pourtant majoritaires — n’ont pas la citoyenneté ; l’économie (artisanat, commerce maritime, oliviers et vignes) repose largement sur eux. Imparfaite, la démocratie athénienne n’en reste pas moins l’ancêtre de la nôtre.',
        ],
      },
    ],
    doc: {
      titre: 'L’éloge de la démocratie athénienne',
      source: 'd’après le discours de Périclès rapporté par Thucydide, La Guerre du Péloponnèse, livre II (vers −430) — extrait adapté',
      texte: 'Notre régime politique ne copie pas les lois des autres : nous servons de modèle plutôt que d’imiter. Parce que l’État est administré dans l’intérêt du grand nombre et non d’une minorité, notre régime a pris le nom de démocratie. Dans les affaires privées, tous sont égaux devant la loi ; dans la vie publique, chacun obtient la considération selon son mérite, et la pauvreté n’empêche personne de servir la cité s’il en est capable.',
      questions: ['Qui prononce ce discours et d’où vient le nom « démocratie » selon le texte ?',
        'Relève deux principes de la démocratie athénienne énoncés dans l’extrait.',
        'La leçon montre pourtant une limite de cette démocratie : laquelle ?'],
      reponses: ['Périclès, chef athénien du Vᵉ siècle avant J.-C. ; le régime se nomme démocratie parce que l’État est administré dans l’intérêt du grand nombre, non d’une minorité.',
        'L’égalité de tous devant la loi, et l’accès aux responsabilités selon le mérite, sans que la pauvreté soit un obstacle.',
        'Le « grand nombre » exclut en réalité les femmes, les étrangers et les esclaves — pourtant majoritaires : seuls les hommes libres nés de parents athéniens sont citoyens.']
    },
    lexique: [
      ['Polis (cité)', 'petit État grec : une ville, ses campagnes, ses lois'],
      ['Démocratie', 'dêmos « peuple » + kratos « pouvoir » : le pouvoir du peuple'],
      ['Ecclésia', 'assemblée des citoyens d’Athènes qui vote les lois'],
      ['Citoyen', 'membre de la cité ayant des droits et des devoirs'],
    ],
    synthese: 'Grèce (−500/−323) : cités indépendantes unies par la langue, les dieux, les Jeux ; Sparte = éducation et puissance militaires ; Athènes = démocratie (dêmos + kratos), citoyens avec droits et devoirs ; société inégalitaire : femmes, étrangers, esclaves exclus.',
    saistu: 'Aux Jeux olympiques antiques, toutes les guerres s’arrêtaient : la « trêve sacrée » protégeait athlètes et spectateurs sur les routes de Grèce. Créés en −776 en l’honneur de Zeus, les Jeux ont duré plus de mille ans — et quand ils ont repris vie en 1896, c’est tout naturellement à Athènes qu’ils se sont rallumés. Madagascar y participe depuis 1964 !',
    exos: ['Sparte ou Athènes ? a) L’éducation militaire dès sept ans. b) L’assemblée des citoyens vote les lois. d) La cité la plus redoutée à la guerre. e) Le berceau de la démocratie.',
      'La démocratie. a) Donne l’étymologie du mot. b) Cite deux droits du citoyen athénien. d) Cite deux devoirs. e) Qui est exclu de la citoyenneté ?',
      'Synthèse. a) Pourquoi la Grèce est-elle divisée en cités ? b) Cite trois points communs entre les cités. d) Compare l’éducation spartiate et athénienne. e) En quoi notre République actuelle hérite-t-elle d’Athènes ?'],
    corr: ['a) Sparte ; b) Athènes ; d) Sparte ; e) Athènes.',
      'a) dêmos « peuple » + kratos « pouvoir » : le pouvoir du peuple ; b) voter les lois, prendre la parole, être élu (deux suffisent) ; d) défendre la cité, respecter les lois ; e) les femmes, les étrangers et les esclaves.',
      'a) les montagnes et les îles séparent les communautés, chacune forme son petit État ; b) la langue, les dieux et la religion, les Jeux olympiques (aussi : Homère) ; d) Sparte : militaire et dure ; Athènes : lettres, sports et arts ; e) le vote des citoyens, les droits et devoirs, les assemblées élues.'],
    fig: 'u2f4'
  },
  {
    t: 'L’Empire romain : de la légende à l’Histoire', comp: 'L’Antiquité', theme: 'L’Empire romain',
    goal: 'retracer l’évolution de l’histoire romaine — royauté, République, Empire — et caractériser la civilisation romaine',
    mat: 'Carte de Rome et planisphère, frise chronologique, textes et images, film documentaire',
    revQ: 'Qu’est-ce que la démocratie et où est-elle née ?',
    revRA: 'Le pouvoir du peuple : les citoyens votent les lois ; née à Athènes vers −500.',
    situation: 'La légende raconte que deux jumeaux abandonnés, Romulus et Remus, furent allaités par une louve ; devenu grand, Romulus traça le sillon d’une ville sur sept collines : Rome, en −753. Légende ? Sans doute. Mais les archéologues, eux, ont bel et bien retrouvé les cabanes du VIIIᵉ siècle avant J.-C. sous le forum. De ce village de bergers naîtra le plus vaste empire de l’Antiquité.',
    legende: 'Du village de bergers sur sept collines au plus vaste empire de l’Antiquité : l’aventure romaine.',
    motsCles: ['Romulus et Remus', 'archéologie', 'royauté étrusque', 'République', 'sénat', 'magistrats', 'Empire', 'légions', 'voies romaines', 'mare nostrum', 'christianisme'],
    sections: [
      {
        titre: 'De la légende à l’Histoire',
        paras: [
          'Le mythe de la louve raconte ce que les Romains voulaient croire ; l’archéologie — cabanes, tombes, murailles exhumées — établit ce qui fut. L’historien utilise les deux : le mythe dit les valeurs d’un peuple, la fouille dit les faits.',
        ],
      },
      {
        titre: 'Trois régimes successifs',
        paras: ['De −753 à 476, Rome change trois fois de gouvernement :'],
        puces: [
          'la royauté étrusque (−600 à −509) : les rois bâtissent et drainent le forum ; en −509, les Romains les chassent — plus jamais de roi ;',
          'la République (−509 à −27) : res publica, « la chose publique » — le pouvoir appartient au sénat et à des magistrats élus pour un an ; conquérante, elle soumet l’Italie puis la Méditerranée, mais les guerres civiles l’épuisent ;',
          'l’Empire (27 à 476) : Octave devient Auguste, premier empereur ; un homme concentre tous les pouvoirs.',
        ],
      },
      {
        titre: 'La civilisation romaine',
        paras: [
          'Les légions gardent des frontières immenses ; les voies romaines dallées relient les provinces (« tous les chemins mènent à Rome ») ; les villes se couvrent de forums, thermes, théâtres, aqueducs. La Méditerranée devient le centre de l’Empire — mare nostrum, « notre mer » : blé d’Égypte, huile d’Espagne, artisanat de Gaule y circulent.',
          'La religion, polythéiste, accueille peu à peu une nouveauté venue de Palestine : le christianisme, d’abord persécuté, autorisé en 313, religion officielle à la fin de l’Empire. En 476, les invasions germaniques renversent le dernier empereur d’Occident : l’Antiquité s’achève.',
        ],
      },
    ],
    doc: {
      titre: 'La louve, Romulus et Remus',
      source: 'd’après Tite-Live, Histoire romaine, livre I (vers −27) — extrait adapté',
      texte: 'Le roi ordonna de jeter les jumeaux dans le fleuve. Mais le Tibre, débordé, déposa doucement le berceau sur la rive. Une louve, descendue des collines pour boire, entendit les vagissements des enfants et, loin de les dévorer, leur présenta ses mamelles avec tant de douceur que le berger royal Faustulus la trouva les léchant. Il recueillit les enfants et les confia à sa femme. Devenus grands, Romulus et Remus voulurent fonder une ville à l’endroit même où ils avaient été exposés.',
      questions: ['Raconte en une phrase ce que la légende rapporte.',
        'Pourquoi l’historien ne peut-il pas prendre ce récit pour un fait prouvé ?',
        'Que confirment pourtant les fouilles archéologiques menées à Rome ?'],
      reponses: ['Deux jumeaux abandonnés, sauvés par une louve puis recueillis par un berger, fondent plus tard Rome à l’endroit de leur sauvetage.',
        'C’est un mythe écrit des siècles après les faits, rempli de merveilleux (la louve nourricière) : il dit les valeurs des Romains, pas les faits prouvés.',
        'Que des villages de cabanes existaient bien sur les collines de Rome au VIIIᵉ siècle avant J.-C. — la date légendaire de −753 correspond à une réalité archéologique.']
    },
    lexique: [
      ['République', 'res publica, « la chose publique » : l’État appartient aux citoyens'],
      ['Sénat', 'conseil des grandes familles qui dirige la République romaine'],
      ['Légion', 'grande unité de l’armée romaine'],
      ['Empereur', 'chef qui concentre tous les pouvoirs à Rome après 27'],
    ],
    synthese: 'Rome : mythe de Romulus et Remus + preuves archéologiques ; royauté étrusque (−600/−509), République (−509/−27, sénat et magistrats élus), Empire (27/476, empereur tout-puissant) ; légions, voies romaines, Méditerranée centre de l’Empire ; essor du christianisme ; chute en 476.',
    saistu: 'Les voies romaines étaient si bien construites — quatre couches de pierres, bornes milliaires, ponts et tunnels — que certaines servent encore de routes aujourd’hui, vingt siècles plus tard ! Le réseau atteignait 400 000 kilomètres, dix fois le tour de la Terre. Et notre mot « route » vient du latin via rupta... comme « rupture » !',
    exos: ['Associe chaque date à son événement : a) −753 ; b) −509 ; d) 27 ; e) 476.',
      'Les régimes. a) Qui gouverne pendant la République ? b) Que signifie res publica ? d) Qui gouverne pendant l’Empire ? e) Pourquoi les Romains ont-ils chassé leurs rois ?',
      'Légende et civilisation. a) Raconte brièvement le mythe de Romulus et Remus. b) Que prouvent les fouilles archéologiques ? d) Cite trois réalisations de la civilisation romaine. e) Pourquoi appelle-t-on la Méditerranée « le centre de l’Empire » ?'],
    corr: ['a) fondation légendaire de Rome ; b) chute de la royauté, début de la République ; d) début de l’Empire (Auguste) ; e) chute de l’Empire romain d’Occident, fin de l’Antiquité.',
      'a) le sénat et des magistrats élus par les citoyens ; b) « la chose publique » : l’État appartient aux citoyens ; d) l’empereur, qui concentre tous les pouvoirs ; e) pour que le pouvoir n’appartienne plus jamais à un seul homme — du moins jusqu’à l’Empire !',
      'a) deux jumeaux abandonnés, allaités par une louve ; Romulus fonde Rome en −753 ; b) que des villages existaient bien sur les collines de Rome au VIIIᵉ siècle avant J.-C. ; d) les voies romaines, les aqueducs, les villes (forums, thermes, théâtres) — trois parmi d’autres ; e) parce que toutes les provinces l’entourent et que les échanges y circulent : mare nostrum, « notre mer ».'],
    fig: 'u2f5'
  },
  {
    t: 'L’héritage des civilisations antiques à Madagascar', comp: 'L’Antiquité', theme: 'L’héritage des civilisations antiques à Madagascar',
    goal: 'démontrer l’héritage des civilisations antiques à Madagascar et expliquer les concepts de démocratie et de citoyenneté',
    mat: 'Images, photos, croquis des héritages antiques, documents',
    revQ: 'Cite les trois régimes de l’histoire romaine avec leurs dates.',
    revRA: 'Royauté étrusque (−600/−509), République (−509/−27), Empire (27/476).',
    situation: 'Aucun légionnaire romain n’a jamais débarqué à Madagascar, aucun temple grec ne se dresse sur nos collines. Et pourtant... la route pavée qui monte vers le Rova, le canal qui irrigue les rizières, le stade où courent nos athlètes, l’urne où votent nos parents : l’Antiquité est partout autour de nous. Comment ses inventions sont-elles arrivées jusqu’à la Grande Île ?',
    legende: 'La route pavée du Rova, les canaux des rizières, l’urne électorale : l’Antiquité est partout autour de nous.',
    motsCles: ['héritage', 'transmission par relais', 'infrastructures', 'irrigation', 'Jeux olympiques', 'démocratie', 'République', 'citoyenneté', 'droits et devoirs', 'fihavanana'],
    sections: [
      {
        titre: 'Un héritage transmis par relais',
        paras: [
          'L’héritage antique désigne l’ensemble des inventions et des idées nées dans l’Antiquité et présentes aujourd’hui dans la vie malgache. Comment a-t-il voyagé ? Par relais : conservées et transmises par les civilisations suivantes — monde arabe, Europe —, les techniques et les idées antiques sont arrivées à Madagascar avec les migrants, les missionnaires, les écoles et les institutions modernes.',
        ],
      },
      {
        titre: 'L’inventaire des héritages',
        paras: ['Autour de nous, les traces de l’Antiquité sont nombreuses :'],
        puces: [
          'les infrastructures : la route pavée est une petite-fille de la voie romaine ; l’irrigation des rizières applique les principes des canaux d’Égypte et de Mésopotamie ; la charrue traditionnelle descend des araires antiques ;',
          'le système militaire : grades, unités, discipline suivent le modèle mis au point par les légions ;',
          'les loisirs et la culture : les Jeux olympiques, nés en Grèce en −776, accueillent les athlètes malgaches depuis 1964 ; nos théâtres descendent du théâtre grec.',
        ],
      },
      {
        titre: 'L’héritage le plus précieux : la politique',
        paras: [
          'La démocratie athénienne — le peuple vote — et la République romaine — l’État est la chose publique — fondent la République de Madagascar : élections, assemblées, Constitution. Être citoyen malgache aujourd’hui, c’est exercer des droits (voter dès 18 ans, s’exprimer, être candidat) et des devoirs (respecter les lois, payer l’impôt, défendre la patrie) — exactement les deux faces inventées à Athènes.',
          'Attention : hériter n’est pas copier. Madagascar a reçu, adapté et enrichi ces idées avec ses propres valeurs, comme le fihavanana. L’historien l’exprime ainsi : nous ne vivons pas DANS l’Antiquité, mais l’Antiquité vit EN nous.',
        ],
      },
    ],
    doc: {
      titre: 'La souveraineté appartient au peuple',
      source: 'd’après la Constitution de la République de Madagascar (2010), article 5 — extrait adapté',
      texte: 'La souveraineté appartient au peuple, source de tout pouvoir, qui l’exerce par ses représentants élus au suffrage universel direct ou indirect, ou par la voie du référendum. Aucune fraction du peuple, ni aucun individu, ne peut s’attribuer l’exercice de la souveraineté. Sont électeurs tous les citoyens des deux sexes jouissant de leurs droits civils et politiques.',
      questions: ['À qui appartient la souveraineté selon la Constitution malgache, et comment s’exerce-t-elle ?',
        'Quelle invention athénienne et quelle invention romaine reconnais-tu dans ce texte ?',
        'Montre une différence entre la citoyenneté malgache actuelle et la citoyenneté athénienne.'],
      reponses: ['Au peuple, source de tout pouvoir : il l’exerce par ses représentants élus ou par référendum.',
        'D’Athènes : le pouvoir du peuple qui vote (démocratie) ; de Rome : l’État comme chose publique qu’aucun individu ne peut s’approprier (République).',
        'À Madagascar, les citoyens « des deux sexes » votent ; à Athènes, les femmes — comme les étrangers et les esclaves — étaient exclues de la citoyenneté.']
    },
    lexique: [
      ['Héritage', 'ce qu’une époque reçoit des époques précédentes'],
      ['Transmission par relais', 'passage d’un savoir de civilisation en civilisation'],
      ['Citoyenneté', 'appartenance à un État, avec des droits et des devoirs'],
      ['Constitution', 'loi fondamentale qui organise un État'],
    ],
    synthese: 'héritages antiques à Madagascar : infrastructures (routes pavées, irrigation, charrue), système militaire (légions), culture (Jeux olympiques, théâtres), politique (démocratie, République, droits et devoirs du citoyen) — transmis par relais à travers les siècles.',
    saistu: 'Le premier médaillé olympique malgache de l’histoire est un héritier direct des Jeux grecs : en 2024 à Paris, 2 768 ans après les premiers Jeux d’Olympie ! Et le mot « stade » vient du grec stadion — la distance de la première course olympique, environ 192 mètres.',
    exos: ['Associe chaque héritage à sa civilisation d’origine : a) la démocratie ; b) la République ; d) les Jeux olympiques ; e) les grands systèmes d’irrigation.',
      'Autour de toi. a) Cite deux infrastructures d’origine antique visibles à Madagascar. b) Cite un héritage culturel ou sportif. d) Cite deux droits du citoyen malgache. e) Cite deux devoirs.',
      'Réfléchir. a) Comment les héritages antiques sont-ils arrivés à Madagascar ? b) Explique : « nous ne vivons pas dans l’Antiquité, mais l’Antiquité vit en nous ». d) Pourquoi un héritage n’est-il pas une copie ? e) Quel héritage antique te semble le plus important ? Justifie.'],
    corr: ['a) la Grèce (Athènes) ; b) Rome ; d) la Grèce ; e) l’Égypte et la Mésopotamie.',
      'a) les routes pavées et les canaux d’irrigation des rizières (aussi : la charrue) ; b) les Jeux olympiques ou le théâtre ; d) voter, s’exprimer, être candidat (deux suffisent) ; e) respecter les lois, payer l’impôt, défendre la patrie (deux suffisent).',
      'a) par relais : transmis par les civilisations suivantes, puis apportés par les migrants, les écoles et les institutions ; b) les civilisations antiques ont disparu mais leurs inventions organisent encore notre vie quotidienne ; d) parce que chaque peuple adapte et enrichit ce qu’il reçoit avec ses propres valeurs ; e) réponse libre argumentée — la démocratie et la citoyenneté sont attendues.'],
    fig: 'u2f6'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'L’Antiquité',
  rag: 'caractériser la période de l’Antiquité, exploiter des traces du passé et interpréter les réalités sociales des grandes civilisations antiques.',
  valeurs: 'esprit de curiosité, esprit critique',
  sessions: S,
  revision: {
    table: [
      ['L’Antiquité', 'De l’écriture (vers −3 000) à la chute de Rome (476)', 'Délimiter la période dans le temps et l’espace'],
      ['Civilisation', 'Espace + organisation politique et sociale + valeurs religieuses + économie', 'Définir et appliquer la notion'],
      ['Mésopotamie', '−3 400/−2 900 ; Tigre-Euphrate, Uruk, ziggourats, pictogrammes puis cunéiformes', 'Caractériser la première civilisation'],
      ['Égypte', '−2 700/−1 100 ; don du Nil ; Ancien, Moyen, Nouvel Empire ; pharaon tout-puissant', 'Expliquer le rôle du Nil et du pharaon'],
      ['Grèce', '−500/−323 ; cités : Sparte guerrière, Athènes démocratique ; droits et devoirs', 'Comparer les cités, définir la démocratie'],
      ['Rome', '−753/476 ; royauté, République (−509/−27), Empire (27/476) ; christianisme', 'Retracer les trois régimes'],
      ['Héritages', 'Routes, irrigation, légions, Jeux, théâtres, démocratie, République', 'Démontrer l’héritage antique à Madagascar']
    ],
    questions: [
      'Donne les bornes de l’Antiquité et place ses quatre civilisations sur une frise.',
      'Définis une civilisation et remplis ses quatre rubriques pour la Mésopotamie.',
      'Explique « l’Égypte est un don du Nil » et range les trois empires égyptiens.',
      'Compare Sparte et Athènes, puis définis la démocratie avec son étymologie.',
      'Range les trois régimes romains et cite trois héritages antiques présents à Madagascar.'
    ],
    answers: [
      '−3 000 (écriture) à 476 (chute de Rome) ; Mésopotamie (−3 400/−2 900), Égypte (−2 700/−1 100), Grèce (−500/−323), Rome (−753/476).',
      'Ensemble des caractères communs d’une société ; Mésopotamie : Tigre-Euphrate / rois et scribes, Uruk / dieux multiples, ziggourats / irrigation et échanges.',
      'La crue dépose le limon fertile et le fleuve transporte tout ; Ancien (−2 700/−2 200), Moyen (−2 050/−1 800), Nouvel Empire (−1 600/−1 100).',
      'Sparte : cité guerrière, éducation militaire ; Athènes : les citoyens votent les lois ; démocratie = dêmos (peuple) + kratos (pouvoir).',
      'Royauté étrusque (−600/−509), République (−509/−27), Empire (27/476) ; héritages : routes pavées, irrigation, Jeux olympiques, démocratie, République (trois suffisent).'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Délimite l’Antiquité dans le temps. b) Définis une civilisation. d) Que sont les cunéiformes ? e) Donne l’étymologie du mot « démocratie ».',
      'Frise chronologique. a) Trace la frise de l’Antiquité et place les quatre civilisations. b) Place : −509, 27, 313 ou 476 (deux au choix) avec leurs événements. d) Quelle civilisation dure le plus longtemps ? e) Cite deux civilisations qui se chevauchent.',
      'L’Égypte. a) Explique la phrase « l’Égypte est un don du Nil ». b) Range les trois empires avec leurs dates. d) Décris les trois pouvoirs du pharaon. e) Montre que l’Égypte est un modèle de maîtrise de l’espace.',
      'Athènes et Rome. a) Compare le gouvernement de la République romaine et de la démocratie athénienne. b) Cite les droits et devoirs du citoyen athénien. d) Qui est exclu de la citoyenneté à Athènes ? e) Que signifie res publica et qu’en avons-nous hérité ?',
      'Étude : l’héritage antique. Lors des élections, les citoyens malgaches votent pour élire le président de la République ; le soir, le stade municipal accueille un match. a) Relève deux héritages antiques dans cette scène. b) Attribue chacun à sa civilisation d’origine. d) Explique comment ces héritages sont arrivés à Madagascar. e) Conclus en deux phrases : pourquoi étudier l’Antiquité au collège malgache ?'
    ],
    corr: [
      'a) de l’invention de l’écriture vers −3 000 à la chute de l’Empire romain d’Occident en 476 ; b) l’ensemble des caractères communs d’une société : espace, organisation politique et sociale, valeurs culturelles et religieuses, économie ; d) les signes d’écriture en forme de coins gravés sur l’argile en Mésopotamie ; e) dêmos « peuple » + kratos « pouvoir ». Un point par item.',
      'a) frise de −3 000 à 476 avec les quatre barres ; b) −509 : début de la République ; 27 : début de l’Empire ; 313 : christianisme autorisé ; 476 : chute de Rome ; d) Rome, plus de douze siècles ; e) Grèce et Rome (ou Égypte et Rome naissante). Un point par item.',
      'a) la crue dépose le limon qui fertilise ; le fleuve irrigue et transporte ; b) Ancien (−2 700/−2 200), Moyen (−2 050/−1 800), Nouvel (−1 600/−1 100) ; d) roi : il gouverne ; chef religieux : fils des dieux ; chef militaire : il commande les armées ; e) digues, bassins et canaux domptent la crue : la richesse naît des conditions naturelles ET du travail organisé. Un point par item.',
      'a) Rome : des magistrats élus et un sénat dominant ; Athènes : les citoyens votent eux-mêmes les lois ; b) droits : voter, parler, être élu ; devoirs : défendre la cité, respecter les lois ; d) les femmes, les étrangers et les esclaves ; e) « la chose publique » : l’État appartient aux citoyens — notre mot et notre régime de République en viennent. Un point par item.',
      'a) le vote (démocratie) et la République ; le stade (Jeux et sports grecs) ; b) démocratie : Athènes ; République : Rome ; stade : Grèce ; d) par relais à travers les civilisations suivantes, puis par les écoles et les institutions modernes ; e) réponse libre — comprendre l’origine de nos institutions et de notre vie quotidienne, c’est comprendre le présent. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
