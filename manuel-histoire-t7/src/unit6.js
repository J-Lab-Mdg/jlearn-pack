// UNITÉ 6 — L'ÉVOLUTION DE L'ORGANISATION POLITIQUE À MADAGASCAR DU Ve AU XIXe SIÈCLE (PE T7) : 2 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — du clan au Royaume
figs.u6f1 = (() => { const { s, y } = head('Du clan au Royaume de Madagascar', ['Quatre étapes de l’organisation politique, du Vᵉ au XIXᵉ siècle.']);
  const top = y + 15;
  const steps = [['le clan', 'Vᵉ-XVIᵉ siècle', 'un chef de clan guide les familles', GREENL, GREEN],
    ['les confédérations claniques', '', 'des clans unis sous un roitelet', BLUEL, BLUE],
    ['les royaumes malgaches', '1500-1810', 'plusieurs royaumes régionaux rivaux', '#FDE7EF', PINK2],
    ['le Royaume de Madagascar', '1810-1896', 'un seul État depuis Radama Iᵉʳ', '#FFF3E0', OCRE]];
  let b = '';
  steps.forEach(([n, d, t, f, c], i) => {
    const Y = top + i * 102;
    b += box(80, Y, 460, 54, n, f, c, 21);
    b += txt(570, Y + 22, d, 22, c, 'bold');
    b += txt(570, Y + 50, t, 19, '#333');
    if (i < 3) b += arrow(310, Y + 54, 310, Y + 102, '#888', 3.5);
  });
  b += txt(500, top + 4 * 102 + 10, 'une marche progressive vers l’unité politique de l’île', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 4 * 102 + 42, s + b); })();
// S2 — ethnie, tribu, groupe de population
figs.u6f2 = (() => { const { s, y } = head('Ethnie, tribu ou groupe de population ?', ['Trois concepts à distinguer — et la conclusion du programme.']);
  const top = y + 15;
  const data = [['concept', 'définition'],
    ['ethnie', 'peuple à langue et culture propres'],
    ['tribu', 'groupe uni par un ancêtre commun'],
    ['groupe de population', 'habitants d’une même région']];
  let b = tableEl(60, top, [340, 540], 56, data);
  b += box(100, top + 4 * 56 + 28, 800, 56, 'à Madagascar : ni ethnie ni tribu — une seule langue, un seul peuple', GREENL, GREEN, 20);
  b += txt(500, top + 4 * 56 + 120, 'on parle donc de « groupes de population » : Merina, Vezo, Bara…', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 4 * 56 + 152, s + b); })();


const S = [
  {
    t: 'Du clan au Royaume de Madagascar', comp: 'L’évolution de l’organisation politique à Madagascar', theme: 'Les spécificités et l’évolution de chaque organisation sociale',
    goal: 'analyser l’évolution de l’organisation sociale, politique et économique de Madagascar du Vᵉ au XIXᵉ siècle',
    mat: 'Textes, dictionnaire et encyclopédie, frise chronologique',
    revQ: 'Cite les quatre caractères communs qui fondent l’identité malgache.',
    revRA: 'La langue, le respect des razana, le fihavanana, le riz et le zébu.',
    situation: 'Au début, quelques familles autour d’un ancien respecté ; des siècles plus tard, un roi reçoit les ambassadeurs d’Europe au nom de tout Madagascar. Entre les deux : quinze siècles de regroupements, d’alliances et de conquêtes. Comment passe-t-on du clan familial à l’État royal ? C’est l’histoire politique de l’île en quatre marches.',
    legende: 'Du clan familial autour d’un ancien à l’État royal recevant les ambassadeurs : quinze siècles en quatre marches.',
    motsCles: ['clan', 'chef de clan', 'confédérations claniques', 'roitelet', 'royaumes malgaches', 'Ratsimilaho', 'Andrianampoinimerina', 'Radama Iᵉʳ', 'Royaume de Madagascar', 'État'],
    sections: [
      {
        titre: 'Les deux premières marches : clan et confédérations',
        paras: [
          'Le clan d’abord (Vᵉ-XVIᵉ siècle) : un groupe de familles descendant d’un ancêtre commun, installé sur un territoire ; le chef de clan — souvent l’aîné le plus sage — rend la justice, répartit les terres, préside les rites ; l’économie est villageoise : riz, zébus, entraide.',
          'Puis les clans voisins s’allient — contre un danger, pour un mariage, autour d’un marché : ce sont les confédérations claniques, dirigées par un roitelet, chef reconnu par plusieurs clans ; le pouvoir se concentre, des capitales naissent sur les collines fortifiées.',
        ],
      },
      {
        titre: 'Troisième marche : les royaumes malgaches (1500-1810)',
        paras: ['Des États régionaux rivaux se constituent :'],
        puces: [
          'le royaume sakalava du Menabe puis du Boina à l’Ouest, puissance maritime ;',
          'le royaume betsimisaraka, unifié par Ratsimilaho à l’Est vers 1712 ;',
          'les royaumes betsileo du centre-sud ;',
          'le royaume merina des hautes terres, réunifié par Andrianampoinimerina (vers 1787-1810) depuis Ambohimanga — digues, rizières et grands kabary.',
        ],
      },
      {
        titre: 'Quatrième marche : le Royaume de Madagascar (1810-1896)',
        paras: [
          'Chaque royaume avait ses institutions : souverain sacré, conseillers, tributs, armée, grands marchés. En 1810, Radama Iᵉʳ succède à son père Andrianampoinimerina ; armé, allié aux Britanniques, il étend son autorité sur la majeure partie de l’île : les traités internationaux le reconnaissent roi de Madagascar. Le Royaume de Madagascar (1810-1896) est un État au sens plein : lois écrites, ministères, armée de métier, diplomatie, écoles.',
          'Attention à la différence : LES royaumes malgaches (pluriel, régionaux, rivaux) et LE Royaume de Madagascar (singulier, englobant, reconnu). Cette marche vers l’unité, brisée en 1896 par la colonisation, a préparé la nation d’aujourd’hui.',
        ],
      },
    ],
    doc: {
      titre: '« La mer est la limite de ma rizière »',
      source: 'd’après le kabary d’Andrianampoinimerina rapporté dans le Tantara ny Andriana du R.P. Callet (1878) — extrait adapté',
      texte: 'Andrianampoinimerina réunit le peuple et dit : « Voici ce que je vous déclare : l’Imerina est rassemblée sous mon autorité, mais ce n’est pas là le terme de mon dessein. Car ma rizière ne s’arrête pas aux collines que vous voyez : ny ranomasina no valam-parihiko — c’est la mer qui est la limite de ma rizière. Travaillez donc la terre, creusez les canaux, remplissez les greniers : un royaume fort est un royaume qui mange à sa faim. »',
      questions: ['Que signifie la formule « ny ranomasina no valam-parihiko » ?',
        'Quel lien le roi établit-il entre l’agriculture et la puissance du royaume ?',
        'Qui réalisera en partie ce projet d’unification, et quelle étape politique cela ouvre-t-il ?'],
      reponses: ['« La mer est la limite de ma rizière » : le roi annonce son projet d’étendre son autorité jusqu’aux côtes — unifier toute l’île.',
        'Un royaume fort est un royaume qui mange à sa faim : digues, canaux et greniers pleins sont la base de la puissance politique.',
        'Son fils Radama Iᵉʳ, à partir de 1810 : c’est la quatrième marche, le Royaume de Madagascar, État unifié et reconnu par les traités.']
    },
    lexique: [
      ['Clan', 'groupe de familles descendant d’un ancêtre commun'],
      ['Roitelet', 'chef reconnu par plusieurs clans confédérés'],
      ['Kabary', 'grand discours public du souverain au peuple'],
      ['État', 'pouvoir organisé : lois, institutions, armée, diplomatie'],
    ],
    synthese: 'clan (Vᵉ-XVIᵉ, chef de clan) → confédérations claniques (roitelet) → royaumes malgaches (1500-1810 : sakalava, betsimisaraka, betsileo, merina…) → Royaume de Madagascar (1810-1896, Radama Iᵉʳ) : concentration progressive du pouvoir jusqu’à l’État unifié.',
    saistu: 'Andrianampoinimerina gouvernait depuis Ambohimanga par de célèbres kabary : il réunissait le peuple et déclarait « Ny ranomasina no valam-parihiko » — « la mer est la limite de ma rizière » ! Son fils Radama Iᵉʳ réalisa en partie ce rêve : à sa mort en 1828, son autorité couvrait la majeure partie de l’île, et les puissances étrangères signaient des traités avec « le roi de Madagascar ».',
    exos: ['Range dans l’ordre chronologique : a) le Royaume de Madagascar ; b) le clan ; d) les royaumes malgaches ; e) les confédérations claniques.',
      'Les étapes. a) Qui dirige un clan, et sur quoi repose son autorité ? b) Qu’est-ce qu’une confédération clanique ? d) Cite trois royaumes malgaches régionaux. e) Donne les dates du Royaume de Madagascar.',
      'Analyse. a) Distingue « les royaumes malgaches » et « le Royaume de Madagascar ». b) Quel roi ouvre le Royaume de Madagascar, et en quelle année ? d) Cite deux outils d’État de ce royaume. e) Pourquoi dit-on que l’unité politique est une « construction historique » ?'],
    corr: ['Ordre : b (clan), e (confédérations), d (royaumes malgaches), a (Royaume de Madagascar).',
      'a) le chef de clan, souvent l’aîné ; son autorité repose sur l’ancêtre commun et la sagesse reconnue ; b) l’union de plusieurs clans sous un roitelet ; d) sakalava, betsimisaraka, betsileo, merina (trois suffisent) ; e) 1810-1896.',
      'a) pluriel : des États régionaux rivaux (1500-1810) ; singulier : l’État unifié sous Radama Iᵉʳ (1810-1896) ; b) Radama Iᵉʳ, en 1810 ; d) lois écrites, ministères, armée de métier, diplomatie (deux suffisent) ; e) parce qu’elle s’est bâtie marche après marche pendant quinze siècles — elle n’existait pas au départ.'],
    fig: 'u6f1'
  },
  {
    t: 'Ethnie, tribu et groupe de population', comp: 'L’évolution de l’organisation politique à Madagascar', theme: 'La définition des concepts : ethnie, tribu et groupe de population',
    goal: 'distinguer les concepts d’ethnie, de tribu et de groupe de population et les appliquer au cas malgache',
    mat: 'Dictionnaire, encyclopédie, textes',
    revQ: 'Cite les quatre étapes de l’évolution politique de Madagascar avec une date chacune.',
    revRA: 'Clan (Vᵉ-XVIᵉ), confédérations claniques, royaumes malgaches (1500-1810), Royaume de Madagascar (1810-1896).',
    situation: 'On entend parfois : « les dix-huit tribus de Madagascar » ou « l’ethnie merina, l’ethnie vezo »... Mais que valent ces mots au regard de la science ? Le dictionnaire en main, l’historien vérifie chaque concept — et sa conclusion va te surprendre : à Madagascar, il n’y a ni ethnie ni tribu.',
    legende: 'Le dictionnaire en main, l’historien teste chaque mot : « ethnie » ? « tribu » ? La science répond : ni l’un ni l’autre.',
    motsCles: ['ethnie', 'tribu', 'groupe de population', 'test de la langue', 'test de l’ancêtre', 'brassage', 'politique des races', 'époque coloniale', 'unité du peuple malgache'],
    sections: [
      {
        titre: 'Trois concepts, trois définitions',
        paras: ['Avant de juger, définissons :'],
        puces: [
          'une ethnie est un peuple qui possède sa propre langue et sa propre culture, distinctes de celles de ses voisins ;',
          'une tribu est un groupe uni par la descendance d’un ancêtre commun, réel ou supposé ;',
          'un groupe de population est simplement l’ensemble des habitants d’une même région, partageant des coutumes locales.',
        ],
      },
      {
        titre: 'Le double test appliqué à Madagascar',
        paras: [
          'Test de l’ethnie : les Merina, les Vezo ou les Bara ont-ils des langues différentes ? Non — tous parlent le malgache, avec des variétés régionales qui se comprennent entre elles, comme les accents d’une même langue ; leur culture profonde — razana, fihavanana, riz, zébu — est commune. Le test échoue : pas d’ethnies.',
          'Test de la tribu : chaque groupe descend-il d’un ancêtre unique ? Non — l’unité IV l’a montré : toutes les régions sont nées du même brassage de vagues austronésiennes, africaines, arabes et européennes ; les généalogies se croisent d’un bout à l’autre de l’île. Le test échoue : pas de tribus.',
          'Reste le concept juste : le groupe de population — les habitants d’une région, unis par des coutumes locales, un habitat, des activités : les Vezo par la mer, les Betsileo par les terrasses, les Antandroy par les troupeaux.',
        ],
      },
      {
        titre: 'Les mots font l’histoire',
        paras: [
          'D’où viennent alors les mots « tribu » et « ethnie » ? Largement de l’époque coloniale : classer les Malgaches en « tribus » séparées servait à diviser pour régner — la fameuse politique des races de l’administration coloniale. Les abandonner n’est donc pas une coquetterie de vocabulaire : c’est un acte scientifique (les définitions ne s’appliquent pas) ET un acte civique (refuser les divisions héritées). Dire « groupe de population », c’est dire l’unité du peuple malgache.',
        ],
      },
    ],
    doc: {
      titre: 'La « politique des races » du colonisateur',
      source: 'd’après les instructions du général Gallieni, gouverneur de Madagascar (1898) — extrait adapté',
      texte: 'L’action administrative doit s’appuyer sur ce que nous nommerons la politique des races : il convient de reconnaître les différentes populations de l’île, de les administrer séparément, chacune selon ses chefs et ses coutumes propres, et de ne point laisser l’une dominer les autres. Le gouvernement de la colonie traitera ainsi avec chaque groupe pris à part, au lieu de s’adresser à un peuple unique.',
      questions: ['Que recommande la « politique des races » décrite dans ce texte ?',
        'Quel intérêt le pouvoir colonial trouve-t-il à « administrer séparément » les populations ?',
        'En quoi la leçon d’aujourd’hui répond-elle à ce document ?'],
      reponses: ['Reconnaître des populations distinctes et les administrer séparément, chacune avec ses chefs et coutumes, sans s’adresser à un peuple unique.',
        'Diviser pour régner : des groupes traités à part s’unissent plus difficilement contre le colonisateur qu’un peuple reconnu comme un.',
        'La science montre qu’il n’y a ni ethnies ni tribus à Madagascar — une seule langue, un même brassage : abandonner ce vocabulaire colonial, c’est rétablir la vérité et l’unité du peuple malgache.']
    },
    lexique: [
      ['Ethnie', 'peuple ayant sa propre langue et sa propre culture'],
      ['Tribu', 'groupe uni par la descendance d’un ancêtre commun'],
      ['Groupe de population', 'habitants d’une même région aux coutumes locales'],
      ['Politique des races', 'méthode coloniale consistant à diviser pour régner'],
    ],
    synthese: 'ethnie : langue et culture propres — non applicable (une seule langue malgache) ; tribu : ancêtre commun unique — non applicable (brassage général) ; groupe de population : habitants d’une région — le concept juste pour Madagascar ; ni ethnie ni tribu : un seul peuple, divers et uni.',
    saistu: 'Le malgache est parlé par tous les habitants d’une île plus grande que la France — alors que la Papouasie-Nouvelle-Guinée, à peine plus petite, compte plus de 800 langues ! Cette unité linguistique exceptionnelle est l’un des arguments les plus forts des savants : Madagascar est bien le pays d’un seul peuple aux multiples visages.',
    exos: ['Vrai ou faux ? Corrige. a) Une ethnie se définit par sa langue et sa culture propres. b) Les Malgaches parlent des langues différentes selon les régions. d) Une tribu se définit par un ancêtre commun. e) À Madagascar, on compte dix-huit ethnies.',
      'Les concepts. a) Définis l’ethnie. b) Définis la tribu. d) Définis le groupe de population. e) Quelle est la conclusion du programme pour Madagascar ?',
      'Argumenter. a) Montre que le « test de la langue » échoue pour les ethnies à Madagascar. b) Montre que le « test de l’ancêtre » échoue pour les tribus. d) D’où vient l’habitude de parler de « tribus » malgaches ? e) Pourquoi le choix des mots est-il un acte civique ?'],
    corr: ['a) vrai ; b) faux : une seule langue malgache, avec des variétés régionales qui se comprennent ; d) vrai ; e) faux : ni ethnies ni tribus — des groupes de population.',
      'a) un peuple possédant sa propre langue et sa propre culture ; b) un groupe uni par la descendance d’un ancêtre commun ; d) l’ensemble des habitants d’une même région aux coutumes locales ; e) à Madagascar, il n’y a ni ethnie ni tribu : seulement des groupes de population.',
      'a) tous les groupes parlent le malgache : aucune langue distincte ne sépare un « peuple » des autres ; b) toutes les régions sont issues du même brassage : aucun groupe ne descend d’un ancêtre unique séparé ; d) de l’époque coloniale, qui classait pour diviser ; e) parce que dire « groupe de population », c’est affirmer l’unité du peuple malgache et refuser les divisions héritées.'],
    fig: 'u6f2'
  }
];

const unit6 = {
  no: 6, roman: 'VI', name: 'L’évolution de l’organisation politique à Madagascar',
  rag: 'interpréter une réalité sociale : analyser l’évolution de l’organisation politique de Madagascar du Vᵉ au XIXᵉ siècle et distinguer les concepts d’ethnie, de tribu et de groupe de population.',
  valeurs: 'identité culturelle malgache, responsabilité',
  sessions: S,
  revision: {
    table: [
      ['Le clan', 'Vᵉ-XVIᵉ siècle ; familles d’un ancêtre commun ; chef de clan', 'Expliquer la première organisation'],
      ['Confédérations claniques', 'Unions de clans sous un roitelet ; capitales fortifiées', 'Décrire la concentration du pouvoir'],
      ['Royaumes malgaches', '1500-1810 : sakalava, betsimisaraka, betsileo, merina… institutions royales', 'Différencier les royaumes régionaux'],
      ['Royaume de Madagascar', '1810-1896, depuis Radama Iᵉʳ : État unifié, lois, diplomatie', 'Caractériser l’État unifié'],
      ['Ethnie / tribu', 'Langue-culture propres / ancêtre commun : non applicables à Madagascar', 'Appliquer les tests des concepts'],
      ['Groupe de population', 'Habitants d’une même région — le concept juste : ni ethnie ni tribu', 'Employer le vocabulaire scientifique']
    ],
    questions: [
      'Range les quatre étapes de l’évolution politique avec leurs dates.',
      'Distingue les royaumes malgaches et le Royaume de Madagascar.',
      'Cite deux réalisations de personnages marquants des royaumes.',
      'Définis ethnie, tribu et groupe de population.',
      'Explique pourquoi, à Madagascar, il n’y a ni ethnie ni tribu.'
    ],
    answers: [
      'Clan (Vᵉ-XVIᵉ) → confédérations claniques → royaumes malgaches (1500-1810) → Royaume de Madagascar (1810-1896).',
      'Pluriel : royaumes régionaux rivaux ; singulier : l’État unifié de la majeure partie de l’île sous Radama Iᵉʳ, reconnu par les traités.',
      'Andrianampoinimerina : digues, rizières et réunification merina ; Ratsimilaho : fédération betsimisaraka de la côte Est.',
      'Ethnie : peuple à langue et culture propres ; tribu : groupe d’un ancêtre commun ; groupe de population : habitants d’une même région.',
      'Parce que tous les Malgaches parlent une seule langue et partagent la même culture issue du même brassage : seuls existent des groupes de population.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Cite les quatre étapes de l’évolution politique de Madagascar. b) Qui dirige une confédération clanique ? d) Donne les dates du Royaume de Madagascar. e) Définis le groupe de population.',
      'La frise politique. a) Trace la frise du Vᵉ au XIXᵉ siècle avec les quatre étapes. b) Place le règne d’Andrianampoinimerina (vers 1787-1810). d) Place l’avènement de Radama Iᵉʳ. e) Quelle rupture survient en 1896 ?',
      'Les royaumes. a) Cite trois royaumes malgaches et leur région. b) Associe Ratsimilaho et Andrianampoinimerina à leur œuvre. d) Cite deux institutions d’un royaume malgache. e) Pourquoi le Royaume de Madagascar est-il un « État au sens plein » ?',
      'Les concepts. Un article parle des « tribus malgaches ». a) Rappelle la définition de la tribu. b) Applique le « test de l’ancêtre » au cas malgache. d) Quel mot l’article devrait-il employer ? e) Pourquoi cette correction est-elle importante ?',
      'Synthèse. a) Montre que le pouvoir se concentre à chaque étape de l’évolution politique. b) Relie cette évolution à l’unité dans la diversité étudiée en unité IV. d) Explique l’origine coloniale du vocabulaire des « tribus ». e) Conclus en deux phrases : que nous apprend cette unité sur la nation malgache ?'
    ],
    corr: [
      'a) clan, confédérations claniques, royaumes malgaches, Royaume de Madagascar ; b) un roitelet reconnu par plusieurs clans ; d) 1810-1896 ; e) l’ensemble des habitants d’une même région aux coutumes locales. Un point par item.',
      'a) frise aux quatre étapes ; b) fin du XVIIIᵉ siècle, hautes terres (Ambohimanga) ; d) 1810 ; e) la colonisation française met fin au Royaume de Madagascar. Un point par item.',
      'a) sakalava (Ouest), betsimisaraka (Est), merina (hautes terres) — ou betsileo (centre-sud) ; b) Ratsimilaho : fédération de la côte Est ; Andrianampoinimerina : réunification merina, digues et rizières ; d) souverain, conseillers, tributs, armée (deux suffisent) ; e) lois écrites, ministères, armée de métier, diplomatie reconnue par traités. Un point par item.',
      'a) un groupe uni par la descendance d’un ancêtre commun ; b) toutes les régions sont issues du même brassage : aucun ancêtre séparé ne fonde un groupe ; d) « groupes de population » ; e) parce que le vocabulaire des tribus divise et ne correspond pas à la réalité scientifique. Un point par item.',
      'a) du chef de clan au roitelet, puis au roi régional, puis au roi de Madagascar : le territoire et les institutions grandissent à chaque marche ; b) la marche politique vers l’unité prolonge l’unité culturelle née du brassage ; d) l’administration coloniale classait les Malgaches en « tribus » pour diviser pour régner ; e) réponse libre — la nation malgache est une construction historique et un héritage à préserver. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit6, bufs);
})();
