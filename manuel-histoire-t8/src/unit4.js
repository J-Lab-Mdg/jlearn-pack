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
    legende: 'Chaque grande région naturelle de l’île porte un royaume : la carte politique épouse la carte du relief.',
    motsCles: ['royaumes malgaches', 'Antakarana', 'Sakalava', 'Menabe', 'Boina', 'Androy', 'Mahafaly', 'Antemoro', 'sorabe', 'Betsimisaraka', 'Imerina', 'Betsileo', 'dynastie'],
    sections: [
      {
        titre: 'Une île immense et cloisonnée',
        paras: [
          'Pourquoi tant de royaumes ? La géographie de l’île y est pour beaucoup : immense — presque 1 600 km du nord au sud —, cloisonnée par les falaises de l’escarpement oriental, les fleuves de l’ouest et les étendues arides du sud, Madagascar a vu ses communautés se développer longtemps chacune de son côté.',
        ],
      },
      {
        titre: 'Le tour de l’île, royaume par royaume',
        paras: ['Faisons le tour de la carte :'],
        puces: [
          'au nord, le royaume antakarana contrôle la pointe de l’île et ses baies ;',
          'à l’ouest et au nord-ouest, les puissants royaumes sakalava — le Menabe au centre-ouest, le Boina au nord-ouest — fondés par des dynasties venues du sud-ouest ; leurs souverains règnent sur d’immenses pâturages à zébus et sur les ports qui commercent avec les boutres arabes et les navires européens ;',
          'au sud, l’Androy et le pays mahafaly vivent de l’élevage dans un milieu sec ;',
          'au sud-est, les Antemoro — héritiers d’ancêtres venus par l’océan Indien et détenteurs des sorabe, manuscrits en caractères arabes — et les Antanosy ;',
          'sur la côte est, les Betsimisaraka forment au XVIIIᵉ siècle une confédération qui unifie les peuples du littoral ;',
          'sur les Hautes Terres centrales, le Betsileo au sud et l’Imerina au nord, autour d’Antananarivo.',
        ],
      },
      {
        titre: 'Deux dynasties dominent la mémoire',
        paras: [
          'Une dynastie est une famille régnante qui se transmet le pouvoir. Deux d’entre elles dominent la mémoire historique : celle du Nord-Ouest sakalava et celle de l’Imerina — cette dernière, à la fin du XVIIIᵉ siècle, unifiera son territoire, puis étendra au XIXᵉ son autorité sur la majeure partie de l’île.',
          'Retiens la logique de la carte : chaque région naturelle porte un royaume — mais les frontières, elles, bougeaient sans cesse au gré des alliances, des mariages et des expéditions.',
        ],
      },
    ],
    doc: {
      titre: 'Un voyageur traverse l’île jusqu’en Imerina',
      source: 'd’après Nicolas Mayeur, Voyage au pays d’Ancove (1777) — extrait adapté',
      texte: 'Parti de la côte orientale, je traversai d’abord le pays des Betsimisaraka, dont les villages bordent les lagunes et les forêts. Après plusieurs jours de marche dans la grande forêt et la montée des falaises, j’atteignis les hauteurs : un pays découvert, frais, couvert de rizières en étages et de villages fortifiés sur les collines. Ce pays, que les gens de la côte nomment Ancove, est gouverné par plusieurs chefs qui se font la guerre ; mais il est si peuplé et si bien cultivé qu’il surpasse en industrie tout ce que j’ai vu sur cette île. On y tisse, on y forge, on y commerce avec un art étonnant.',
      questions: ['Quelles régions et quels royaumes le voyageur traverse-t-il successivement ?',
        'Relève les obstacles naturels qui séparent la côte des Hautes Terres.',
        'Que nous apprend ce témoignage sur l’Imerina avant son unification ?'],
      reponses: ['La côte est des Betsimisaraka, puis la grande forêt et les falaises, enfin les Hautes Terres de l’« Ancove » — c’est-à-dire l’Imerina.',
        'La grande forêt orientale et la montée des falaises (l’escarpement) : ce cloisonnement explique que les royaumes se soient développés séparément.',
        'Que l’Imerina est encore divisé entre plusieurs chefs rivaux (l’unification viendra à la fin du XVIIIᵉ siècle), mais déjà très peuplé, cultivé et actif — tissage, forge, commerce.']
    },
    lexique: [
      ['Dynastie', 'famille régnante qui se transmet le pouvoir'],
      ['Confédération', 'union de plusieurs peuples sous une même autorité'],
      ['Sorabe', 'manuscrits antemoro écrits en caractères arabes'],
      ['Escarpement', 'grande falaise séparant la côte est des Hautes Terres'],
    ],
    synthese: 'Royaumes par région : Nord (Antakarana), Nord-Ouest et Ouest (sakalava : Boina, Menabe), Sud (Androy, Mahafaly), Sud-Est (Antemoro, Antanosy), Est (Betsimisaraka), Hautes Terres (Imerina, Betsileo). Dynasties célèbres : Nord-Ouest et Imerina.',
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
    legende: 'Castes, rizières, zébus et kabary : les trois piliers — société, économie, pouvoir royal.',
    motsCles: ['caste', 'Andriana', 'Hova', 'andevo', 'ampanjaka', 'agriculture', 'élevage', 'zébu', 'traite des esclaves', 'roi', 'kabary', 'expéditions militaires', 'Grandidier'],
    sections: [
      {
        titre: 'Une société de castes',
        paras: [
          'La caste est un groupe héréditaire : on y naît, on s’y marie, on ne la quitte pas. Chez les Merina : les Andriana, nobles apparentés au souverain, répartis en sous-groupes avec leurs privilèges ; les Hova, hommes libres, cultivateurs, artisans, commerçants — la masse de la population ; et les andevo, non-libres, attachés au service des deux premiers groupes. Les autres royaumes ont la même architecture sous d’autres noms : chez les Sakalava, les nobles sont les ampanjaka, et les hommes libres ont leurs propres appellations régionales.',
        ],
      },
      {
        titre: 'Une économie de rizières, de zébus — et de traite',
        paras: [
          'Partout, l’agriculture — riz des Hautes Terres et des vallées de l’est, cultures sèches du sud — et l’élevage du zébu, richesse, monnaie et offrande à la fois.',
          'Mais les royaumes côtiers, puis l’Imerina, s’enrichissent aussi de la traite des esclaves : des captifs de guerre sont vendus aux marchands arabes et européens contre fusils, poudre, piastres et étoffes — commerce tragique qui alimente les guerres, car il faut des expéditions pour « produire » des captifs.',
        ],
      },
      {
        titre: 'Le roi au centre de tout',
        paras: [
          'Le roi est maître de la terre, juge suprême, chef religieux lié aux ancêtres royaux ; les grandes décisions s’annoncent au peuple assemblé — le kabary. Sa puissance se mesure à ses expéditions militaires : les rois sakalava du Menabe puis du Boina soumettent l’ouest au XVIIᵉ siècle ; les rois merina, au tournant du XIXᵉ, unifient les Hautes Terres.',
          'Nos connaissances viennent des traditions orales et des récits des voyageurs — dont l’œuvre monumentale d’Alfred Grandidier, qui décrivit l’île et ses sociétés au XIXᵉ siècle.',
        ],
      },
    ],
    doc: {
      titre: 'Le pouvoir des rois sakalava',
      source: 'd’après Alfred et Guillaume Grandidier, Histoire physique, naturelle et politique de Madagascar (fin XIXᵉ siècle) — extrait adapté',
      texte: 'Chez les Sakalava, le souverain, que l’on nomme ampanjaka, est l’objet d’un profond respect : il descend des rois fondateurs, dont les reliques sont pieusement conservées et honorées. Nul ne possède la terre que par lui ; nul procès important ne se juge sans lui. Sa richesse se compte en troupeaux de bœufs, et sa puissance au nombre de ses guerriers. Les rois du Boina tiraient en outre de grands profits du commerce avec les navires : ils fournissaient des bœufs et des esclaves, et recevaient en retour des fusils, de la poudre et des piastres, qui accroissaient encore leur autorité.',
      questions: ['Relève les trois fondements du pouvoir de l’ampanjaka.',
        'Comment le commerce avec les navires renforce-t-il la puissance royale ?',
        'Ce texte d’un savant européen suffit-il à l’historien ? Justifie.'],
      reponses: ['Le fondement religieux (descendance des rois fondateurs, reliques honorées), le fondement économique (maître de la terre, troupeaux), le fondement politique et judiciaire (juge des procès, chef des guerriers).',
        'Les fusils et la poudre reçus contre bœufs et captifs arment ses guerriers : le roi peut lancer de nouvelles expéditions — le commerce nourrit la force militaire, qui nourrit le commerce.',
        'Non : c’est un regard extérieur, à croiser avec les traditions orales malgaches et les autres témoignages — c’est la règle du métier d’historien.']
    },
    lexique: [
      ['Caste', 'groupe social héréditaire que l’on ne peut quitter'],
      ['Ampanjaka', 'souverain, noble régnant chez les Sakalava'],
      ['Traite', 'commerce d’êtres humains réduits en esclavage'],
      ['Kabary', 'discours solennel du souverain devant le peuple assemblé'],
    ],
    synthese: 'Société : castes — libres (Andriana, Hova) et non-libres (andevo), appellations variables selon les régions. Économie : agriculture, élevage, traite des esclaves. Politique : roi central, expéditions militaires ; exemples merina et sakalava ; source : Grandidier.',
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
