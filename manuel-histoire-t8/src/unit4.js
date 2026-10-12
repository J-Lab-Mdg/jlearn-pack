// UNITÉ 4 — LES ROYAUMES MALGACHES DU XVᵉ AU XIXᵉ SIÈCLE (PE T8) : 2 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — carte-tableau des royaumes par région
figs.u4f1 = (() => { const { s, y } = head('Les royaumes malgaches par région', ['Du XVᵉ au XIXᵉ siècle, des royaumes sur tout le pourtour de l’île.']);
  const top = y + 15;
  const data = [['Région', 'Exemples de royaumes'],
    ['Nord', 'Antakarana'],
    ['Nord-Ouest', 'royaumes sakalava (dynasties)'],
    ['Ouest', 'Menabe sakalava'],
    ['Sud', 'Androy, Mahafaly'],
    ['Sud-Est', 'Antemoro, Antanosy'],
    ['Est', 'Betsimisaraka'],
    ['Hautes Terres', 'Imerina (dynastie), Betsileo']];
  let b = tableEl(90, top, [320, 500], 52, data);
  b += txt(500, top + 8 * 52 + 38, 'deux dynasties célèbres : celles du Nord-Ouest et de l’Imerina', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 8 * 52 + 70, s + b); })();
// S2 — l'organisation des royaumes
figs.u4f2 = (() => { const { s, y } = head('L’organisation des royaumes malgaches', ['Société, économie, politique : les trois piliers.']);
  const top = y + 18;
  let b = txt(500, top, 'SOCIÉTÉ : des castes', 24, GREEN, 'bold', 'middle');
  const castes = [['LIBRES : Andriana (nobles)', GREENL, GREEN], ['LIBRES : Hova (hommes libres)', BLUEL, BLUE], ['NON-LIBRES : andevo', '#FDE7EF', PINK2]];
  castes.forEach(([t, f, c], i) => { b += box(170, top + 20 + i * 68, 660, 52, t, f, c, 22); });
  const y2 = top + 20 + 3 * 68 + 26;
  b += txt(500, y2, 'ÉCONOMIE', 24, BLUE, 'bold', 'middle');
  b += box(110, y2 + 18, 380, 54, 'agriculture, élevage', BLUEL, BLUE, 22);
  b += box(510, y2 + 18, 380, 54, 'traite des esclaves', '#FDE7EF', PINK2, 22);
  const y3 = y2 + 18 + 54 + 30;
  b += txt(500, y3, 'POLITIQUE', 24, PINK2, 'bold', 'middle');
  b += box(110, y3 + 18, 380, 54, 'le roi au centre de tout', GREENL, GREEN, 22);
  b += box(510, y3 + 18, 380, 54, 'expéditions militaires', GREENL, GREEN, 22);
  b += txt(500, y3 + 18 + 54 + 36, 'exemples étudiés : royaumes merina et sakalava (source : Grandidier)', 21, OCRE, 'bold', 'middle');
  return svg(1000, y3 + 18 + 54 + 66, s + b); })();

const S = [
  {
    t: 'La situation géographique des royaumes malgaches', comp: 'Les royaumes malgaches du XVᵉ au XIXᵉ siècle', theme: 'Localiser les royaumes sur la carte de Madagascar',
    goal: 'situer géographiquement les royaumes malgaches du XVᵉ au XIXᵉ siècle',
    mat: 'Carte de Madagascar, tableau des royaumes, documents',
    revQ: 'Qu’est-ce que la convention de Zanzibar et quelle est sa conséquence pour Madagascar ?',
    revRA: 'L’accord de 1890 par lequel le Royaume-Uni reconnaît Madagascar à la France contre Zanzibar ; l’île perd son allié britannique.',
    situation: 'Regarde une carte de Madagascar : Antakarana au nord, Sakalava à l’ouest, Antemoro au sud-est, Merina sur les Hautes Terres… Ces noms que portent encore les régions et les communautés d’aujourd’hui sont ceux des royaumes qui, du XVᵉ au XIXᵉ siècle, se partageaient la Grande Île. D’où viennent-ils, et où se situaient-ils exactement ?',
    def: 'Du XVᵉ au XIXᵉ siècle, Madagascar est partagé entre de nombreux royaumes : ceux du Nord (Antakarana), du Sud (Androy, Mahafaly), du Sud-Est (Antemoro, Antanosy), de l’Est (Betsimisaraka), de l’Ouest et du Nord-Ouest (royaumes sakalava), et des Hautes Terres (Imerina, Betsileo). Deux dynasties — familles régnantes — sont particulièrement célèbres : celles du Nord-Ouest (sakalava) et de l’Imerina.',
    autrement: 'avant l’unification du XIXᵉ siècle, chaque grande région de l’île a son ou ses royaumes ; les plus fameuses lignées royales sont celles des Sakalava du Nord-Ouest et des Merina des Hautes Terres.',
    concept: 'Pourquoi tant de royaumes ? La géographie de l’île y est pour beaucoup : immense — presque 1 600 km du nord au sud —, cloisonnée par les falaises de l’escarpement oriental, les fleuves de l’ouest et les étendues arides du sud, Madagascar a vu ses communautés se développer longtemps chacune de son côté. Au nord, le royaume antakarana contrôle la pointe de l’île et ses baies. À l’ouest et au nord-ouest s’étendent les puissants royaumes sakalava — le Menabe au centre-ouest, le Boina au nord-ouest — fondés par des dynasties venues du sud-ouest ; leurs souverains règnent sur d’immenses pâturages à zébus et sur les ports qui commercent avec les boutres arabes et les navires européens. Au sud, l’Androy et le pays mahafaly vivent de l’élevage dans un milieu sec. Au sud-est, les Antemoro — héritiers d’ancêtres venus par l’océan Indien et détenteurs des sorabe, manuscrits en caractères arabes — et les Antanosy. Sur la côte est, les Betsimisaraka forment au XVIIIᵉ siècle une confédération qui unifie les peuples du littoral. Enfin, sur les Hautes Terres centrales, le Betsileo au sud et l’Imerina au nord : ce dernier, autour d’Antananarivo, est gouverné par une dynastie qui, à la fin du XVIIIᵉ siècle, unifiera son territoire — puis, au XIXᵉ, étendra son autorité sur la majeure partie de l’île. Retiens la logique de la carte : chaque région naturelle porte un royaume, et deux dynasties dominent la mémoire historique — celle du Nord-Ouest sakalava et celle de l’Imerina.',
    synthese: 'Royaumes par région : Nord (Antakarana), Nord-Ouest et Ouest (sakalava : Boina, Menabe), Sud (Androy, Mahafaly), Sud-Est (Antemoro, Antanosy), Est (Betsimisaraka), Hautes Terres (Imerina, Betsileo). Dynasties célèbres : Nord-Ouest et Imerina.',
    method: ['Dessiner la carte de l’île et placer chaque royaume dans sa région.', 'Associer chaque région à un milieu naturel (côtes, pâturages, Hautes Terres).', 'Retenir les deux dynasties majeures : sakalava du Nord-Ouest et merina de l’Imerina.'],
    exemple: 'Sur une carte muette, place : Antakarana tout au nord, Boina au nord-ouest, Menabe à l’ouest, Mahafaly et Androy au sud, Antemoro au sud-est, Betsimisaraka à l’est, Imerina au centre — tu viens de reconstituer la carte politique de l’île avant le XIXᵉ siècle.',
    erreur: 'Croire que « royaume » signifie « frontières fixes » comme aujourd’hui : les royaumes malgaches sont des espaces mouvants, qui s’étendent ou se réduisent au gré des alliances, des mariages et des expéditions. La carte des royaumes est une photographie — la réalité bougeait sans cesse.',
    saistu: 'Les noms des royaumes racontent leur histoire ! « Betsimisaraka » signifie « les nombreux qui ne se séparent pas » — le nom même de la confédération fondée vers 1712 par Ratsimilaho sur la côte est. « Menabe » veut dire « le grand rouge », et « Imerina », selon la tradition, « le pays d’où l’on voit loin » — tout un programme pour un royaume des hauteurs !',
    exos: ['Associe chaque royaume à sa région : a) Antakarana ; b) Menabe ; d) Antemoro ; e) Betsimisaraka.',
      'La carte. a) Quels royaumes occupent les Hautes Terres ? b) Où règnent les dynasties sakalava ? d) Quels royaumes vivent dans le Sud aride ? e) Quelles sont les deux dynasties les plus célèbres ?',
      'Réfléchir. a) Pourquoi l’île compte-t-elle tant de royaumes séparés ? b) Qu’est-ce qu’une dynastie ? d) Quel royaume unifie la côte est au XVIIIᵉ siècle ? e) Quel royaume des Hautes Terres s’étendra sur l’île au XIXᵉ siècle ?'],
    corr: ['a) le Nord ; b) l’Ouest ; d) le Sud-Est ; e) l’Est.',
      'a) l’Imerina et le Betsileo ; b) à l’Ouest et au Nord-Ouest (Menabe, Boina) ; d) l’Androy et le pays mahafaly ; e) celles du Nord-Ouest (sakalava) et de l’Imerina.',
      'a) l’île est immense et cloisonnée par le relief : les communautés se sont développées séparément ; b) une famille régnante qui se transmet le pouvoir ; d) la confédération betsimisaraka ; e) l’Imerina.'],
    fig: 'u4f1'
  },
  {
    t: 'L’organisation des royaumes malgaches', comp: 'Les royaumes malgaches du XVᵉ au XIXᵉ siècle', theme: 'Société, économie et politique des royaumes',
    goal: 'décrire l’organisation sociale, économique et politique des royaumes malgaches, à travers les exemples merina et sakalava',
    mat: 'Schéma des castes, documents, extraits de Grandidier',
    revQ: 'Cite quatre royaumes malgaches et leur région.',
    revRA: 'Antakarana (Nord), sakalava (Ouest/Nord-Ouest), Antemoro (Sud-Est), Betsimisaraka (Est), Imerina (Hautes Terres) — quatre au choix.',
    situation: 'Dans l’Imerina du XVIIIᵉ siècle, un homme sait dès sa naissance où il se mariera, quel métier il exercera, où il sera enterré : tout dépend de sa caste. Au même moment, sur la côte ouest, le roi sakalava du Boina reçoit les capitaines de navires et vend zébus et captifs contre des fusils. Castes, commerce, pouvoir royal : comment fonctionnaient les royaumes malgaches ?',
    def: 'La société des royaumes malgaches est divisée en castes : les libres — Andriana (nobles) et Hova (hommes libres) — et les non-libres — les andevo ; les appellations varient selon les régions. L’économie repose sur l’agriculture et l’élevage, et sur la traite des esclaves avec les marchands étrangers. En politique, le roi occupe la place centrale et mène des expéditions militaires — comme le montrent les exemples merina et sakalava, décrits notamment par Grandidier.',
    autrement: 'trois groupes de naissance — nobles, hommes libres, non-libres ; une économie de rizières, de zébus et, hélas, de traite ; et au centre de tout, le roi, qui fait la guerre pour étendre son royaume.',
    concept: 'La société d’abord. La caste est un groupe héréditaire : on y naît, on s’y marie, on ne la quitte pas. Chez les Merina : les Andriana, nobles apparentés au souverain, répartis en sous-groupes avec leurs privilèges ; les Hova, hommes libres, cultivateurs, artisans, commerçants — la masse de la population ; et les andevo, non-libres, attachés au service des deux premiers groupes. Les autres royaumes ont la même architecture sous d’autres noms : chez les Sakalava, les nobles sont les ampanjaka, et les hommes libres ont leurs propres appellations régionales. L’économie ensuite. Partout, l’agriculture — riz des Hautes Terres et des vallées de l’est, cultures sèches du sud — et l’élevage du zébu, richesse, monnaie et offrande à la fois. Mais les royaumes côtiers, puis l’Imerina, s’enrichissent aussi de la traite des esclaves : des captifs de guerre sont vendus aux marchands arabes et européens contre fusils, poudre, piastres et étoffes — commerce tragique qui alimente les guerres, car il faut des expéditions pour « produire » des captifs. La politique enfin. Le roi est au centre de tout : maître de la terre, juge suprême, chef religieux lié aux ancêtres royaux ; les grandes décisions s’annoncent au peuple assemblé — le kabary. Sa puissance se mesure à ses expéditions militaires : les rois sakalava du Menabe puis du Boina soumettent l’ouest au XVIIᵉ siècle ; les rois merina, au tournant du XIXᵉ, unifient les Hautes Terres. Nos connaissances viennent des traditions orales et des récits des voyageurs — dont l’œuvre monumentale d’Alfred Grandidier, qui décrivit l’île et ses sociétés au XIXᵉ siècle.',
    synthese: 'Société : castes — libres (Andriana, Hova) et non-libres (andevo), appellations variables selon les régions. Économie : agriculture, élevage, traite des esclaves. Politique : roi central, expéditions militaires ; exemples merina et sakalava ; source : Grandidier.',
    method: ['Présenter la société par les trois castes, avec les noms merina et l’idée d’appellations régionales.', 'Décrire l’économie en deux volets : vivrier (riz, zébus) et traite.', 'Montrer le rôle du roi : centre religieux, judiciaire et militaire du royaume.'],
    exemple: 'Un roi du Boina au XVIIIᵉ siècle : il vend 200 captifs à un navire européen, reçoit 300 fusils, arme ses guerriers, lance une expédition vers l’intérieur — qui ramène de nouveaux captifs. Le cercle traite-guerre tourne, et le royaume s’étend.',
    erreur: 'Projeter la société d’aujourd’hui sur celle d’hier : les castes anciennes relevaient d’un ordre juridique et religieux aboli depuis longtemps — l’esclavage a été aboli à Madagascar en 1896. L’historien décrit ces hiérarchies pour comprendre le passé, jamais pour les justifier.',
    saistu: 'Alfred Grandidier a consacré sa vie entière à Madagascar : arrivé en 1865, il parcourt l’île pendant des années, relève cartes, langues, coutumes et traditions royales, puis publie avec son fils Guillaume une « Histoire physique, naturelle et politique de Madagascar » en… 39 volumes ! Cette somme reste une source majeure — à croiser, comme toujours, avec les traditions orales malgaches.',
    exos: ['La société. a) Nomme les deux castes libres chez les Merina. b) Comment appelle-t-on les non-libres ? d) Les noms de castes sont-ils identiques partout ? e) Peut-on changer de caste ?',
      'L’économie. a) Cite les deux activités vivrières. b) Avec qui se fait la traite des esclaves ? d) Que reçoivent les royaumes en échange des captifs ? e) Pourquoi la traite alimente-t-elle les guerres ?',
      'La politique. a) Quelle est la place du roi dans le royaume ? b) À quoi servent les expéditions militaires ? d) Cite les deux exemples de royaumes étudiés. e) Qui est Grandidier ?'],
    corr: ['a) les Andriana (nobles) et les Hova (hommes libres) ; b) les andevo ; d) non : les appellations varient selon les régions (ex. : ampanjaka chez les Sakalava) ; e) non : la caste est héréditaire.',
      'a) l’agriculture (riz) et l’élevage (zébus) ; b) avec les marchands arabes et européens ; d) fusils, poudre, piastres, étoffes ; e) parce qu’il faut des expéditions pour capturer de nouveaux esclaves à vendre.',
      'a) il est au centre de tout : maître de la terre, juge, chef religieux lié aux ancêtres ; b) à étendre le royaume et à capturer du bétail et des prisonniers ; d) les royaumes merina et sakalava ; e) un savant français du XIXᵉ siècle dont l’œuvre décrit l’île et ses sociétés — une source majeure.'],
    fig: 'u4f2'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Les royaumes malgaches du XVe au XIXe siècle',
  rag: 'porter un regard sur la réalité sociale à Madagascar en exploitant les traces du passé à partir de sources historiques.',
  valeurs: 'esprit d’analyse, identité culturelle malgache',
  sessions: S,
  revision: {
    table: [
      ['Royaumes du Nord et de l’Est', 'Antakarana (Nord), confédération betsimisaraka (Est, XVIIIᵉ s.)', 'Situer sur la carte'],
      ['Royaumes sakalava', 'Menabe (Ouest), Boina (Nord-Ouest) ; dynasties célèbres', 'Situer et nommer la dynastie'],
      ['Sud et Sud-Est', 'Androy, Mahafaly (Sud) ; Antemoro, Antanosy (Sud-Est, sorabe)', 'Associer royaume et région'],
      ['Hautes Terres', 'Imerina (dynastie célèbre) et Betsileo', 'Situer et retenir la dynastie'],
      ['Société', 'Castes : libres (Andriana, Hova) / non-libres (andevo) ; appellations régionales', 'Décrire la hiérarchie sociale'],
      ['Économie et politique', 'Agriculture-élevage + traite ; roi central, expéditions (Merina, Sakalava ; Grandidier)', 'Expliquer le fonctionnement des royaumes']
    ],
    questions: [
      'Place six royaumes sur la carte de Madagascar (un par région).',
      'Quelles sont les deux dynasties les plus célèbres, et où règnent-elles ?',
      'Présente les trois castes de la société merina.',
      'Décris l’économie des royaumes : activités vivrières et traite.',
      'Montre que le roi est au centre du royaume, avec un exemple d’expédition.'
    ],
    answers: [
      'Antakarana (Nord), Boina (Nord-Ouest), Menabe (Ouest), Androy/Mahafaly (Sud), Antemoro (Sud-Est), Betsimisaraka (Est), Imerina/Betsileo (Hautes Terres).',
      'La dynastie sakalava du Nord-Ouest et la dynastie merina de l’Imerina.',
      'Libres : Andriana (nobles) et Hova (hommes libres) ; non-libres : andevo — groupes héréditaires, appellations variables selon les régions.',
      'Agriculture (riz) et élevage (zébus) partout ; traite des esclaves avec les marchands arabes et européens contre fusils, poudre et piastres.',
      'Le roi est maître de la terre, juge et chef religieux ; il mène des expéditions — ex. : les rois sakalava soumettent l’ouest au XVIIᵉ siècle, les rois merina unifient les Hautes Terres vers 1800.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Qu’est-ce qu’une dynastie ? b) Qu’est-ce qu’une caste ? d) Cite les castes libres merina. e) Qui décrit les sociétés malgaches au XIXᵉ siècle ?',
      'La carte des royaumes. a) Associe : Antakarana, Menabe, Antemoro, Imerina à leur région. b) Quel royaume unifie la côte est ? d) Où règnent les dynasties les plus célèbres ? e) Pourquoi l’île compte-t-elle tant de royaumes ?',
      'La société. a) Classe : Hova, andevo, Andriana du plus noble au non-libre. b) Les appellations sont-elles les mêmes partout ? d) Peut-on changer de caste ? e) Quand l’esclavage a-t-il été aboli à Madagascar ?',
      'L’économie. a) Cite les deux activités vivrières. b) Décris le circuit de la traite (captifs contre quoi ?). d) Pourquoi la traite nourrit-elle les guerres ? e) Quels royaumes s’enrichissent les premiers du commerce ?',
      'La politique. a) Cite trois rôles du roi. b) À quoi servent les expéditions militaires ? d) Donne un exemple sakalava et un exemple merina. e) Quelles sont nos sources sur ces royaumes ?'
    ],
    corr: [
      'a) une famille régnante qui se transmet le pouvoir ; b) un groupe social héréditaire qu’on ne peut pas quitter ; d) les Andriana et les Hova ; e) Alfred Grandidier (avec les traditions orales). Un point par item.',
      'a) Antakarana : Nord ; Menabe : Ouest ; Antemoro : Sud-Est ; Imerina : Hautes Terres ; b) la confédération betsimisaraka ; d) au Nord-Ouest (sakalava) et en Imerina ; e) l’île est vaste et cloisonnée : les communautés se sont développées séparément. Un point par item.',
      'a) Andriana, Hova, andevo ; b) non : elles varient selon les régions ; d) non : la caste est héréditaire ; e) en 1896. Un point par item.',
      'a) agriculture (riz) et élevage (zébus) ; b) captifs vendus contre fusils, poudre, piastres, étoffes ; d) il faut des expéditions pour capturer de nouveaux esclaves ; e) les royaumes côtiers (sakalava, betsimisaraka). Un point par item.',
      'a) maître de la terre, juge suprême, chef religieux (kabary pour les grandes décisions) ; b) étendre le royaume, ramener bétail et captifs ; d) sakalava : conquête de l’ouest (Menabe, Boina) ; merina : unification des Hautes Terres ; e) les traditions orales et les récits des voyageurs comme Grandidier. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
