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
    def: 'L’Antiquité est la première période de l’Histoire : elle s’étend de l’invention de l’écriture, vers −3 000, à la chute de l’Empire romain d’Occident, en 476. Ses grandes civilisations sont la Mésopotamie (entre −3 400 et −2 900), l’Égypte (entre −2 700 et −1 100), la Grèce (entre −500 et −323) et Rome (entre −753 et 476).',
    autrement: 'l’Antiquité, c’est près de 3 500 ans d’histoire, de l’écriture de Mésopotamie à la chute de Rome — quatre civilisations à placer sur la frise et sur la carte.',
    concept: 'Dans le temps : la frise de l’Antiquité se borne par deux événements — l’apparition de l’écriture (vers −3 000, en Mésopotamie) qui fait entrer l’humanité dans l’Histoire, et la chute de Rome (476) qui ouvre le Moyen Âge. Entre ces bornes, les civilisations ne se succèdent pas sagement : certaines se chevauchent — Rome naît en −753 alors que la Grèce brille encore. Dans l’espace : tout se joue autour de deux pôles — les vallées des grands fleuves (le Tigre et l’Euphrate pour la Mésopotamie, le Nil pour l’Égypte), où l’eau permet l’agriculture et fait naître les premières villes ; puis les rives de la mer Méditerranée (Grèce, Rome), où les bateaux transportent marchandises et idées. Lire une frise antique demande trois réflexes : vérifier le signe des dates (−500 est avant Jésus-Christ), comparer les durées (l’Égypte dure seize siècles, la Grèce classique moins de deux), et repérer les chevauchements. Sur la carte, on place chaque civilisation près de son eau nourricière : fleuve ou mer — l’eau est le secret des civilisations antiques.',
    synthese: 'Antiquité : de l’écriture (vers −3 000) à la chute de Rome (476) ; quatre civilisations : Mésopotamie (−3 400/−2 900), Égypte (−2 700/−1 100), Grèce (−500/−323), Rome (−753/476) ; espaces : vallées des fleuves puis Méditerranée.',
    method: ['Tracer la frise de −3 000 à 476 et placer les deux bornes avec leurs événements.', 'Placer chaque civilisation avec ses dates ; repérer les chevauchements.', 'Localiser sur la carte : Tigre-Euphrate, Nil, mer Méditerranée.'],
    exemple: 'Rome (−753 à 476) et la Grèce classique (−500 à −323) se chevauchent : quand Athènes invente la démocratie (vers −500), Rome existe déjà depuis deux siècles et demi.',
    erreur: 'Croire que les quatre civilisations se succèdent comme des wagons : la frise montre des durées très inégales et des périodes communes. Toujours comparer les barres, jamais supposer l’ordre.',
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
    def: 'Une civilisation est l’ensemble des caractères communs d’une société : un espace géographique, une organisation politique et sociale, des valeurs culturelles et religieuses, et une organisation économique. La civilisation mésopotamienne, née entre les fleuves Tigre et Euphrate entre −3 400 et −2 900, a vu naître les premières villes, comme Uruk, et les premières écritures : les pictogrammes puis les cunéiformes.',
    autrement: 'une civilisation, c’est la carte d’identité complète d’un peuple : son territoire, ses chefs et sa société, ses croyances, sa manière de produire — et la Mésopotamie est la première de toutes.',
    concept: 'Mésopotamie signifie en grec « le pays entre les fleuves » : le Tigre et l’Euphrate, dont les crues déposent un limon fertile. L’irrigation y produit des récoltes si abondantes qu’une partie des hommes peut cesser de cultiver : artisans, prêtres, marchands, soldats apparaissent — la ville est née. Uruk, la plus fameuse, aligne ses maisons autour d’une ziggurat, tour-temple à étages qui touche le ciel des dieux ; car la religion est polythéiste : de nombreux dieux, honorés par les prêtres. Au sommet, un roi gouverne, aménage le territoire — canaux, remparts, greniers — et fait régner l’ordre. Pour compter les sacs de grain et les troupeaux, les scribes inventent vers −3 500 les pictogrammes, petits dessins des choses ; simplifiés en signes en forme de coins gravés au roseau sur l’argile, ils deviennent les cunéiformes (du latin cuneus, « coin ») : l’écriture est née, et avec elle l’Histoire. L’économie complète le tableau : agriculture irriguée, artisanat du métal et de la laine, échanges avec les pays voisins. Espace, pouvoir, croyances, économie : les quatre éléments de la définition s’assemblent — la Mésopotamie est bien la première civilisation.',
    synthese: 'civilisation = espace + organisation politique et sociale + valeurs culturelles et religieuses + économie ; Mésopotamie (Tigre-Euphrate, −3 400/−2 900) : premières villes (Uruk), ziggourats, rois et scribes, pictogrammes puis cunéiformes.',
    method: ['Pour étudier une civilisation, remplir ses quatre rubriques : espace, pouvoir, croyances, économie.', 'Chercher dans les documents un exemple précis pour chaque rubrique.', 'Conclure : qu’a-t-elle inventé ou transmis ?'],
    exemple: 'Fiche Mésopotamie : espace = entre Tigre et Euphrate ; pouvoir = rois et prêtres, ville d’Uruk ; croyances = dieux multiples, ziggourats ; économie = irrigation, artisanat, échanges ; legs = l’écriture.',
    erreur: 'Confondre « civilisation » et « politesse » : dans le langage courant, « être civilisé » veut dire bien se tenir ; en Histoire, une civilisation est un ensemble de caractères d’une société — aucune n’est « supérieure » à une autre, elles sont différentes.',
    saistu: 'Les tablettes d’argile de Mésopotamie ont mieux résisté au temps que bien des livres : cuites par les incendies qui détruisaient les palais, elles devenaient dures comme de la brique ! On en a retrouvé des centaines de milliers — listes de récoltes, contrats, lettres d’écoliers... et même les plus vieilles plaintes de clients mécontents de l’histoire !',
    exos: ['La définition. a) Cite les quatre éléments constitutifs d’une civilisation. b) Que signifie « Mésopotamie » ? d) Situe la civilisation mésopotamienne dans le temps. e) Cite la ville la plus célèbre de Mésopotamie.',
      'L’écriture. a) Quelle est la première forme d’écriture ? b) Que sont les cunéiformes ? d) Sur quel support écrivaient les scribes ? e) Pourquoi l’écriture est-elle née dans les villes ?',
      'Analyse. a) Pourquoi les fleuves sont-ils indispensables à cette civilisation ? b) Qu’est-ce qu’une ziggurat ? d) La religion mésopotamienne est-elle monothéiste ou polythéiste ? e) Remplis la fiche des quatre rubriques pour la Mésopotamie.'],
    corr: ['a) un espace géographique, une organisation politique et sociale, des valeurs culturelles et religieuses, une organisation économique ; b) « le pays entre les fleuves » ; d) entre −3 400 et −2 900 ; e) Uruk.',
      'a) les pictogrammes, petits dessins représentant les choses ; b) des signes en forme de coins, gravés au roseau ; d) des tablettes d’argile ; e) parce qu’il fallait compter et administrer les récoltes, les troupeaux et les échanges des grandes villes.',
      'a) leurs crues fertilisent la terre et l’irrigation permet les récoltes abondantes ; b) une tour-temple à étages dédiée aux dieux ; d) polythéiste : de nombreux dieux ; e) voir l’exemple de la leçon : espace, pouvoir, croyances, économie.'],
    fig: 'u2f2'
  },
  {
    t: 'L’Égypte antique, don du Nil', comp: 'L’Antiquité', theme: 'L’Égypte antique et l’Égypte des pharaons',
    goal: 'caractériser la civilisation égyptienne : le rôle du Nil, les étapes de son histoire et le pouvoir du pharaon',
    mat: 'Carte de l’Égypte, frise chronologique, images, film documentaire',
    revQ: 'Définis une civilisation et cite ses quatre éléments constitutifs.',
    revRA: 'Ensemble des caractères communs d’une société : espace, organisation politique et sociale, valeurs culturelles et religieuses, économie.',
    situation: 'Un fleuve traverse un désert immense ; chaque été, il déborde — et au lieu d’une catastrophe, c’est une bénédiction : ses eaux déposent une boue noire qui nourrit les champs. Autour de ce miracle annuel, un royaume s’est bâti pour trois mille ans, avec des rois-dieux, des pyramides et des moissons d’or. Bienvenue en Égypte, le « don du Nil ».',
    def: 'L’Égypte antique est la civilisation née dans la vallée du Nil entre −2 700 et −1 100. Son histoire se divise en trois étapes : l’Ancien Empire (−2 700 à −2 200), le Moyen Empire (−2 050 à −1 800) et le Nouvel Empire (−1 600 à −1 100). À sa tête, le pharaon concentre tous les pouvoirs : roi, chef religieux et chef des armées. On dit que « l’Égypte est un don du Nil » car la crue du fleuve fertilise les terres et fait vivre le pays.',
    autrement: 'sans le Nil, pas d’Égypte : la crue nourrit les champs, le fleuve transporte hommes et pierres — et le pharaon, roi tout-puissant, organise l’ensemble pendant trois empires.',
    concept: 'Le Nil d’abord. Chaque année, la crue recouvre la vallée et dépose le limon, engrais naturel ; dès le retrait des eaux, paysans sèment blé et orge dans la boue fertile — pendant que le désert, tout autour, protège le pays des invasions. Le fleuve est aussi la grande route d’Égypte : barques de pêche, felouques de commerce, radeaux chargés des blocs de pierre des pyramides. Maîtriser l’eau — digues, bassins, canaux — fait de l’Égypte un modèle d’aménagement de l’espace : la richesse vient des conditions naturelles ET du travail organisé. L’histoire ensuite : l’Ancien Empire élève les grandes pyramides, tombeaux des pharaons ; le Moyen Empire agrandit le royaume et développe les canaux ; le Nouvel Empire porte l’Égypte à son apogée. Entre ces empires, des périodes de troubles rappellent qu’une civilisation se construit, grandit... et décline. Le pharaon enfin : il est roi (il gouverne et rend la justice), chef religieux (fils des dieux, il assure leur faveur — la religion égyptienne est polythéiste) et chef des armées. Scribes, prêtres, artisans et une foule de paysans forment la société, pyramide humaine à l’image des pyramides de pierre.',
    synthese: '« l’Égypte est un don du Nil » : crue, limon, irrigation, transport ; trois empires : Ancien (−2 700/−2 200, pyramides), Moyen (−2 050/−1 800), Nouvel (−1 600/−1 100, apogée) ; le pharaon cumule pouvoirs royal, religieux et militaire.',
    method: ['Expliquer le rôle du Nil : crue → limon → récoltes ; fleuve → transport.', 'Ranger les trois empires sur la frise avec une réalisation chacun.', 'Décrire le pouvoir du pharaon par ses trois casquettes : roi, chef religieux, chef militaire.'],
    exemple: 'Pour dater une pyramide géante, l’historien pense d’abord à l’Ancien Empire (−2 700/−2 200), l’époque des grandes pyramides ; un temple géant somptueux évoquera plutôt le Nouvel Empire, l’apogée.',
    erreur: 'Croire que la crue du Nil était une catastrophe : c’était l’événement le plus attendu de l’année ! Une crue trop faible signifiait famine. Les Égyptiens mesuraient sa hauteur avec des « nilomètres » et réglaient impôts et calendrier sur elle.',
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
    def: 'La civilisation grecque s’épanouit entre −500 et −323 dans un pays de montagnes, de presqu’îles et d’îles de la mer Méditerranée. Les Grecs vivent en cités indépendantes, dont les deux plus célèbres sont Sparte, cité guerrière, et Athènes, berceau de la démocratie — le régime où le pouvoir appartient aux citoyens, qui votent les lois et ont des droits et des devoirs.',
    autrement: 'la Grèce n’est pas un royaume uni mais une mosaïque de cités rivales ; Sparte vit pour la guerre, Athènes invente le gouvernement du peuple par le peuple.',
    concept: 'Le pays et les hommes : montagnes qui séparent, mer qui relie — chaque vallée, chaque île porte sa cité (polis), petit État avec sa ville, ses campagnes, ses lois. Les cités se font la guerre, mais partagent la langue, les dieux de l’Olympe (religion polythéiste), les poèmes d’Homère et les Jeux olympiques, trêve sacrée où les athlètes concourent pour la gloire. Sparte d’abord : la cité guerrière. L’enfant y appartient à l’État ; à sept ans, le petit Spartiate entre dans une éducation militaire d’une dureté légendaire — endurance, obéissance, combat. L’armée spartiate est la plus redoutée de Grèce. Athènes ensuite : vers −500, ses citoyens renversent les tyrans et fondent la démocratie — dêmos, le peuple ; kratos, le pouvoir. À l’assemblée (l’Ecclésia), les citoyens votent les lois, décident la guerre et la paix, élisent et contrôlent les magistrats. Être citoyen donne des droits (voter, parler, être élu) et des devoirs (défendre la cité, respecter ses lois). Mais la société reste inégalitaire : femmes, étrangers et esclaves — pourtant majoritaires — n’ont pas la citoyenneté ; l’économie (artisanat, commerce maritime, oliviers et vignes) repose largement sur eux. Imparfaite, la démocratie athénienne n’en reste pas moins l’ancêtre de la nôtre.',
    synthese: 'Grèce (−500/−323) : cités indépendantes unies par la langue, les dieux, les Jeux ; Sparte = éducation et puissance militaires ; Athènes = démocratie (dêmos + kratos), citoyens avec droits et devoirs ; société inégalitaire : femmes, étrangers, esclaves exclus.',
    method: ['Présenter le cadre : montagnes et mer → cités indépendantes.', 'Comparer Sparte et Athènes rubrique par rubrique : caractère, éducation, pouvoir.', 'Expliquer la démocratie : étymologie, assemblée, droits et devoirs du citoyen — et ses limites.'],
    exemple: 'Question type : « montre que la démocratie athénienne est à la fois une invention géniale et un régime imparfait » — géniale : les citoyens votent les lois ; imparfaite : femmes, étrangers et esclaves en sont exclus.',
    erreur: 'Croire que tous les habitants d’Athènes étaient citoyens : seuls les hommes libres nés de parents athéniens l’étaient — une minorité. Démocratie ne signifiait pas encore égalité de tous.',
    saistu: 'Aux Jeux olympiques antiques, toutes les guerres s’arrêtaient : la « trêve sacrée » protégeait athlètes et spectateurs sur les routes de Grèce. Créés en −776 en l’honneur de Zeus, les Jeux ont duré plus de mille ans — et quand ils ont renu vie en 1896, c’est tout naturellement à Athènes qu’ils se sont rallumés. Madagascar y participe depuis 1964 !',
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
    def: 'L’histoire de Rome (−753 à 476) traverse trois régimes : la royauté étrusque (−600 à −509), la République romaine (−509 à −27), où le pouvoir appartient au sénat et à des magistrats élus, et l’Empire romain (27 à 476), où l’empereur concentre tous les pouvoirs. La naissance de la ville mêle le mythe de Romulus et Remus et les découvertes archéologiques, qui confirment l’installation de villages au VIIIᵉ siècle avant J.-C.',
    autrement: 'Rome passe de rois à une République de citoyens, puis à un empereur tout-puissant régnant sur toute la Méditerranée — et son mot « République » vit encore dans le nôtre.',
    concept: 'De la légende à l’Histoire : le mythe de la louve raconte ce que les Romains voulaient croire ; l’archéologie — cabanes, tombes, murailles exhumées — établit ce qui fut. L’historien utilise les deux : le mythe dit les valeurs d’un peuple, la fouille dit les faits. Trois régimes ensuite. Les rois étrusques bâtissent et drainent le forum ; en −509, les Romains les chassent — plus jamais de roi ! La République (res publica, « la chose publique ») confie le pouvoir au sénat et à des magistrats élus pour un an : l’État appartient aux citoyens, non à un homme. Conquérante, la République soumet l’Italie puis le pourtour méditerranéen — mais les guerres civiles l’épuisent, et en 27 avant J.-C. Octave devient Auguste, premier empereur. L’Empire (27 à 476) : un homme concentre tous les pouvoirs, l’armée — les légions — garde des frontières immenses, les voies romaines dallées relient les provinces (« tous les chemins mènent à Rome »), les villes se couvrent de forums, thermes, théâtres, aqueducs. La Méditerranée devient le centre de l’Empire : les Romains l’appellent mare nostrum, « notre mer » ; blé d’Égypte, huile d’Espagne, artisanat de Gaule y circulent. La religion, polythéiste, accueille peu à peu une nouveauté venue de Palestine : le christianisme, d’abord persécuté, autorisé en 313, religion officielle à la fin de l’Empire. En 476, les invasions germaniques renversent le dernier empereur d’Occident : l’Antiquité s’achève.',
    synthese: 'Rome : mythe de Romulus et Remus + preuves archéologiques ; royauté étrusque (−600/−509), République (−509/−27, sénat et magistrats élus), Empire (27/476, empereur tout-puissant) ; légions, voies romaines, Méditerranée centre de l’Empire ; essor du christianisme ; chute en 476.',
    method: ['Distinguer légende (ce qu’on raconte) et archéologie (ce qu’on prouve).', 'Ranger les trois régimes sur la frise avec leur mode de gouvernement.', 'Caractériser l’Empire : armée, routes, villes, économie méditerranéenne, religion.'],
    exemple: 'Sujet type : « qui gouverne Rome en −200 ? » — −200 est entre −509 et −27 : c’est la République ; le pouvoir appartient au sénat et aux magistrats élus, pas à un roi ni à un empereur.',
    erreur: 'Confondre République romaine et démocratie athénienne : à Rome, les citoyens élisent des magistrats mais le sénat des grandes familles domine ; à Athènes, les citoyens votent eux-mêmes les lois. Deux inventions différentes — que nos régimes modernes ont combinées.',
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
    def: 'L’héritage des civilisations antiques à Madagascar désigne l’ensemble des inventions et des idées nées dans l’Antiquité et présentes aujourd’hui dans la vie malgache : les infrastructures (routes en pavés, systèmes d’irrigation, charrue traditionnelle), le système militaire (organisation héritée des légionnaires), les loisirs et la culture (Jeux olympiques, théâtres), et surtout les idées politiques : la démocratie et la République, avec les droits et les devoirs du citoyen.',
    autrement: 'les civilisations antiques sont mortes, mais leurs inventions voyagent encore : nos routes, nos canaux, nos stades et jusqu’à notre Constitution portent leur empreinte.',
    concept: 'Comment cet héritage a-t-il voyagé ? Par relais : les techniques et les idées antiques, conservées et transmises par les civilisations suivantes — monde arabe, Europe — sont arrivées à Madagascar avec les migrants, les missionnaires, les écoles et les institutions modernes. Inventaire. Les infrastructures : la route pavée est une petite-fille de la voie romaine ; les systèmes d’irrigation des rizières appliquent les principes des canaux d’Égypte et de Mésopotamie ; la charrue traditionnelle descend des araires antiques. Le système militaire : l’organisation de l’armée — grades, unités, discipline — suit le modèle mis au point par les légions. Les loisirs : les Jeux olympiques, nés en Grèce en −776, accueillent les athlètes malgaches depuis 1964 ; nos théâtres et plateaux de spectacle descendent du théâtre grec. La politique enfin, l’héritage le plus précieux : la démocratie athénienne — le peuple vote — et la République romaine — l’État est la chose publique — fondent la République de Madagascar : élections, assemblées, Constitution. Être citoyen malgache aujourd’hui, c’est exercer des droits (voter dès 18 ans, s’exprimer, être candidat) et des devoirs (respecter les lois, payer l’impôt, défendre la patrie) — exactement les deux faces inventées à Athènes. L’historien l’exprime ainsi : nous ne vivons pas DANS l’Antiquité, mais l’Antiquité vit EN nous.',
    synthese: 'héritages antiques à Madagascar : infrastructures (routes pavées, irrigation, charrue), système militaire (légions), culture (Jeux olympiques, théâtres), politique (démocratie, République, droits et devoirs du citoyen) — transmis par relais à travers les siècles.',
    method: ['Inventorier autour de soi les objets et institutions d’origine antique.', 'Relier chacun à sa civilisation d’origine (Égypte, Grèce, Rome, Mésopotamie).', 'Expliquer le trajet : qui a transmis cet héritage jusqu’à Madagascar ?'],
    exemple: 'L’élection présidentielle malgache : les citoyens votent (démocratie, Athènes) pour élire le chef d’une République (Rome) — deux inventions antiques réunies dans un seul dimanche électoral.',
    erreur: 'Croire qu’« héritage » signifie « copie » : Madagascar n’a pas copié Athènes — elle a reçu, adapté et enrichi ces idées avec ses propres valeurs, comme le fihavanana. Un héritage se transforme en passant de main en main.',
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
