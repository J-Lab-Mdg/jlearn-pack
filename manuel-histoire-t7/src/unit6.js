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
    def: 'L’organisation politique de Madagascar a évolué en quatre étapes : le clan (du Vᵉ au XVIᵉ siècle), dirigé par un chef de clan ; les confédérations claniques, unions de clans sous un roitelet ; les royaumes malgaches (1500 à 1810), États régionaux rivaux ; et le Royaume de Madagascar à partir du règne de Radama Iᵉʳ (1810-1896), qui unifie la plus grande partie de l’île en un seul État.',
    autrement: 'familles → clans → unions de clans → royaumes régionaux → un royaume pour presque toute l’île : à chaque marche, le pouvoir s’étend et s’organise davantage.',
    concept: 'Le clan d’abord (Vᵉ-XVIᵉ siècle) : un groupe de familles descendant d’un ancêtre commun, installé sur un territoire ; le chef de clan — souvent l’aîné le plus sage — rend la justice, répartit les terres, préside les rites ; l’économie est villageoise : riz, zébus, entraide. Puis les clans voisins s’allient — contre un danger, pour un mariage, autour d’un marché : ce sont les confédérations claniques, dirigées par un roitelet, chef reconnu par plusieurs clans ; le pouvoir se concentre, des capitales naissent sur les collines fortifiées. Troisième marche (1500-1810) : les royaumes malgaches — le royaume sakalava du Menabe puis du Boina à l’Ouest, le royaume betsimisaraka unifié par Ratsimilaho à l’Est, les royaumes betsileo du centre-sud, le royaume merina des hautes terres, réunifié par Andrianampoinimerina (vers 1787-1810) depuis Ambohimanga... Chaque royaume a ses institutions : souverain sacré, conseillers, tributs, armée, grands marchés ; selon les régions, des personnages marquants réalisent de grandes œuvres — digues et rizières d’Andrianampoinimerina, fédération côtière de Ratsimilaho, puissance maritime sakalava. Dernière marche : en 1810, Radama Iᵉʳ succède à son père Andrianampoinimerina ; armé, allié aux Britanniques, il étend son autorité sur la majeure partie de l’île : les traités internationaux le reconnaissent roi de Madagascar — le Royaume de Madagascar (1810-1896) est un État au sens plein : lois écrites, ministères, armée de métier, diplomatie, écoles. Attention à la différence : LES royaumes malgaches (pluriel, régionaux, rivaux) et LE Royaume de Madagascar (singulier, englobant, reconnu). Cette marche vers l’unité, brisée en 1896 par la colonisation, a préparé la nation d’aujourd’hui.',
    synthese: 'clan (Vᵉ-XVIᵉ, chef de clan) → confédérations claniques (roitelet) → royaumes malgaches (1500-1810 : sakalava, betsimisaraka, betsileo, merina…) → Royaume de Madagascar (1810-1896, Radama Iᵉʳ) : concentration progressive du pouvoir jusqu’à l’État unifié.',
    method: ['Ranger les quatre étapes sur la frise avec leurs dates.', 'Pour chaque étape : qui dirige, sur quel territoire, avec quelles institutions ?', 'Distinguer les royaumes malgaches (pluriel) du Royaume de Madagascar (singulier).'],
    exemple: 'Ratsimilaho unifie les clans de la côte Est vers 1712 : on passe de clans dispersés à un royaume betsimisaraka — l’exemple parfait de la troisième marche. Un siècle plus tard, Radama Iᵉʳ franchit la quatrième.',
    erreur: 'Croire que le Royaume de Madagascar a existé « de tout temps » : il naît en 1810 d’une longue évolution — avant lui, l’île connaissait des royaumes rivaux, et avant eux des clans. L’unité politique est une construction historique, pas un état naturel.',
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
    def: 'Une ethnie est un peuple qui possède sa propre langue et sa propre culture, distinctes de celles de ses voisins. Une tribu est un groupe uni par la descendance d’un ancêtre commun, réel ou supposé. Un groupe de population est simplement l’ensemble des habitants d’une même région, partageant des coutumes locales. Tout compte fait, à Madagascar, il n’y a ni ethnie ni tribu : les Malgaches parlent une seule langue et partagent une même culture — on parle donc de groupes de population.',
    autrement: 'ethnie = langue et culture à part ; tribu = un ancêtre commun ; groupe de population = les gens d’une région. Les Malgaches partageant langue et culture, seuls les « groupes de population » existent chez nous.',
    concept: 'Appliquons les définitions comme un test scientifique. Test de l’ethnie : les Merina, les Vezo ou les Bara ont-ils des langues différentes ? Non — tous parlent le malgache, avec des variétés régionales qui se comprennent entre elles, comme les accents d’une même langue ; leur culture profonde — razana, fihavanana, riz, zébu — est commune. Le test échoue : pas d’ethnies. Test de la tribu : chaque groupe descend-il d’un ancêtre unique ? Non — l’unité IV l’a montré : toutes les régions sont nées du même brassage de vagues austronésiennes, africaines, arabes et européennes ; les généalogies se croisent d’un bout à l’autre de l’île. Le test échoue : pas de tribus. Reste le concept juste : le groupe de population — les habitants d’une région, unis par des coutumes locales, un habitat, des activités : les Vezo par la mer, les Betsileo par les terrasses, les Antandroy par les troupeaux. D’où viennent alors les mots « tribu » et « ethnie » ? Largement de l’époque coloniale : classer les Malgaches en « tribus » séparées servait à diviser pour régner — la fameuse politique des races de l’administration coloniale. Les abandonner n’est donc pas une coquetterie de vocabulaire : c’est un acte scientifique (les définitions ne s’appliquent pas) ET un acte civique (refuser les divisions héritées). Les mots font l’histoire : dire « groupe de population », c’est dire l’unité du peuple malgache.',
    synthese: 'ethnie : langue et culture propres — non applicable (une seule langue malgache) ; tribu : ancêtre commun unique — non applicable (brassage général) ; groupe de population : habitants d’une région — le concept juste pour Madagascar ; ni ethnie ni tribu : un seul peuple, divers et uni.',
    method: ['Réciter les trois définitions avec leur critère propre.', 'Appliquer chaque critère au cas malgache (test de la langue, test de l’ancêtre).', 'Conclure avec le vocabulaire juste et expliquer pourquoi il importe.'],
    exemple: 'Un journaliste écrit « l’ethnie vezo » ; l’élève historien corrige : les Vezo parlent malgache et partagent la culture commune — ce sont un groupe de population défini par la vie en mer, non une ethnie.',
    erreur: 'Répéter « les dix-huit tribus de Madagascar » : ce classement, popularisé à l’époque coloniale, ne résiste ni au test de la langue ni à celui de l’ancêtre commun. La science dit : des groupes de population d’un seul peuple.',
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
