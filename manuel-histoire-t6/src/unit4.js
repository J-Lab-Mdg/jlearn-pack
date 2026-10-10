// UNITÉ 4 — LE PATRIMOINE ET LES RICHESSES NATURELLES NATIONALES (PE T6) : 4 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — catégories de patrimoine
figs.u4f1 = (() => { const { s, y } = head('Les deux familles du patrimoine', ['Ce que l’on peut toucher… et ce qui se transmet sans se toucher.']);
  const top = y + 20;
  let b = box(70, top, 400, 54, 'patrimoine MATÉRIEL', GREENL, GREEN, 22);
  b += box(530, top, 400, 54, 'patrimoine IMMATÉRIEL', '#FDE7EF', PINK2, 22);
  const mat = ['édifices et palais royaux', 'tombeaux et temples', 'places historiques, statues'];
  const imm = ['traditions et rituels', 'arts (hira gasy, kabary…)', 'pratiques sociales'];
  mat.forEach((m, i) => { b += txt(270, top + 100 + i * 36, m, 20, GREEN, 'normal', 'middle'); });
  imm.forEach((m, i) => { b += txt(730, top + 100 + i * 36, m, 20, PINK2, 'normal', 'middle'); });
  b += txt(500, top + 100 + 3 * 36 + 26, 'patrimoine = les biens hérités du passé, à transmettre aux générations futures', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 100 + 3 * 36 + 58, s + b); })();
// S2 — richesses naturelles
figs.u4f2 = (() => { const { s, y } = head('Les richesses naturelles nationales', ['La classification du programme : cinq grandes catégories.']);
  const top = y + 15;
  const data = [['catégorie', 'exemples malgaches'],
    ['fossiles', 'hippopotames nains, dinosaures'],
    ['faune', 'lémuriens, caméléons, fosa'],
    ['flore', 'baobabs, orchidées, ravinala'],
    ['hydrographie', 'fleuves, lacs, sources'],
    ['ressources énergétiques', 'soleil, eau, vent, charbon']];
  let b = tableEl(80, top, [340, 500], 52, data);
  b += txt(500, top + 6 * 52 + 42, 'plus de 8 plantes et animaux malgaches sur 10 n’existent nulle part ailleurs !', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 6 * 52 + 74, s + b); })();
// S3 — protection
figs.u4f3 = (() => { const { s, y } = head('Protéger et entretenir', ['Des gestes pour la nature, des gestes pour le patrimoine.']);
  const top = y + 20;
  let b = txt(260, top + 8, 'RICHESSES NATURELLES', 22, GREEN, 'bold', 'middle');
  const nat = ['protéger le sol et les eaux', 'protéger forêts, faune et flore', 'reboiser'];
  nat.forEach((m, i) => { b += box(45, top + 28 + i * 62, 430, 50, m, GREENL, GREEN, 19); });
  b += txt(745, top + 8, 'PATRIMOINES', 22, PINK2, 'bold', 'middle');
  const pat = ['conserver en musées sécurisés', 'multiplier les aires protégées', 'lutter contre les pollutions'];
  pat.forEach((m, i) => { b += box(530, top + 28 + i * 62, 430, 50, m, '#FDE7EF', PINK2, 19); });
  b += txt(500, top + 28 + 3 * 62 + 30, 'protéger, c’est respecter la loi — et la loi protège ce qui appartient à tous', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 28 + 3 * 62 + 62, s + b); })();
// S4 — avantages
figs.u4f4 = (() => { const { s, y } = head('Les avantages de la protection', ['Trois plans de bénéfices — économique, social, culturel.']);
  const top = y + 20;
  const cols = [['ÉCONOMIQUE', 'devises et revenus du tourisme', GREENL, GREEN],
    ['SOCIAL', 'respect des lois, niveau de vie', BLUEL, BLUE],
    ['CULTUREL', 'patrimoines viables et transmis', '#FDE7EF', PINK2]];
  let b = '';
  cols.forEach(([t1, t2, f, c], i) => {
    const X = 30 + i * 320;
    b += box(X, top, 300, 54, t1, f, c, 22);
    b += txt(X + 150, top + 92, t2, 18, c, 'bold', 'middle');
  });
  b += txt(500, top + 150, 'fin de l’exploitation irrationnelle + sensibilisation communautaire', 21, OCRE, 'bold', 'middle');
  b += txt(500, top + 190, 'un patrimoine protégé rapporte chaque année — détruit, il ne rapporte qu’une fois', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 222, s + b); })();

const S = [
  {
    t: 'Les catégories de patrimoine', comp: 'Le patrimoine et les richesses naturelles', theme: 'Patrimoines matériels et immatériels',
    goal: 'distinguer les patrimoines matériels et immatériels et inventorier ceux de sa région',
    mat: 'Photographies de patrimoines, grandes feuilles d’inventaire, tableau',
    revQ: 'Cite un impact politique et un impact économique de l’adhésion aux organisations africaines.',
    revRA: 'Politique : médiation lors des crises ; économique : libre-échange et concurrence.',
    situation: 'Sur la colline, le palais de pierre domine la ville depuis plus d’un siècle. Sur l’esplanade, une troupe de hira gasy fait vibrer le public comme au temps des rois. Le palais, on peut le toucher ; le chant, non — et pourtant tous deux sont des trésors hérités des ancêtres. Comment la science les classe-t-elle ? Bienvenue dans le monde du patrimoine.',
    def: 'Le patrimoine est l’ensemble des biens hérités du passé que la nation doit transmettre aux générations futures. Le patrimoine matériel regroupe ce que l’on peut toucher : édifices, tombeaux et palais royaux, temples, places historiques et commémoratives, statues. Le patrimoine immatériel regroupe ce qui se transmet sans forme physique : traditions, arts, rituels, pratiques sociales.',
    autrement: 'le patrimoine, c’est l’héritage de tous : les pierres et les objets d’un côté, les savoirs, les chants et les coutumes de l’autre.',
    concept: 'Le mot « patrimoine » vient de l’héritage du père — mais ici, l’héritier est tout un peuple. Côté matériel : le Rova d’Antananarivo, les tombeaux ornés, les églises et temples anciens, la place du 13-Mai, les statues et portails de pierre des hautes terres — chaque région possède les siens, du Nord au Sud. Côté immatériel : le kabary, art du discours ; le hira gasy, théâtre chanté des campagnes ; les rituels du famadihana ; les savoir-faire du tissage de la soie ou du travail du zébu ; les contes et proverbes. La frontière est simple à tester : si l’objet disparaissait, resterait-il quelque chose à transmettre ? Un palais brûlé se perd ; un chant, lui, vit tant que quelqu’un le chante — c’est pourquoi le patrimoine immatériel se protège en le PRATIQUANT. Première mission de l’historien local que tu es : inventorier — recenser les patrimoines de ta région, les classer en deux colonnes, les photographier ou les décrire. Un trésor inconnu est un trésor déjà à moitié perdu.',
    synthese: 'patrimoine = biens hérités à transmettre ; matériel : édifices, tombeaux, palais, temples, places, statues ; immatériel : traditions, arts, rituels, pratiques sociales ; l’immatériel vit par la pratique ; première mission : inventorier.',
    method: ['Observer le bien : peut-on le toucher ? matériel ; se transmet-il par la pratique ? immatériel.', 'L’inventorier : nom, lieu, catégorie, état, description ou photo.', 'Le classer dans le tableau à deux colonnes de sa région.'],
    exemple: 'Le Rova (palais) : matériel ; le kabary du mariage : immatériel ; la statue commémorative du village : matérielle ; le conte du soir : immatériel.',
    erreur: 'Croire que seul l’ancien et le monumental est patrimoine : une pratique vivante d’aujourd’hui — un savoir-faire de vannerie, une danse régionale — est un patrimoine immatériel à part entière, même sans pierre ni musée.',
    saistu: 'Trois trésors malgaches sont inscrits au patrimoine mondial de l’UNESCO : la colline royale d’Ambohimanga, les forêts humides de l’Atsinanana et le tsingy de Bemaraha. Et le savoir-faire du bois des Zafimaniry figure sur la liste du patrimoine culturel immatériel de l’humanité — le monde entier veille désormais sur nos héritages !',
    exos: ['Matériel ou immatériel ? a) Un tombeau orné des hautes terres. b) L’art du kabary. d) Une statue commémorative. e) Le savoir-faire du tissage de la soie.',
      'Définitions. a) Définis le patrimoine. b) Qui est « l’héritier » du patrimoine national ? d) Cite trois exemples de patrimoine matériel du programme. e) Cite trois exemples de patrimoine immatériel.',
      'Inventaire de ta région. a) Nomme un patrimoine matériel proche de chez toi. b) Nomme un patrimoine immatériel pratiqué dans ta région. d) Décris l’un des deux en trois lignes (lieu, état, histoire). e) Pourquoi dit-on qu’un patrimoine immatériel se protège « en le pratiquant » ?'],
    corr: ['a) matériel ; b) immatériel ; d) matériel ; e) immatériel.',
      'a) l’ensemble des biens hérités du passé que la nation doit transmettre aux générations futures ; b) tout le peuple — la nation entière ; d) édifices, tombeaux et palais royaux, temples, places historiques, statues (trois suffisent) ; e) traditions, arts, rituels, pratiques sociales (trois suffisent).',
      'a) réponse locale (palais, tombeau, église, place…) ; b) réponse locale (kabary, danse, savoir-faire…) ; d) description libre et soignée ; e) parce qu’il n’existe que dans la pratique : un chant que plus personne ne chante disparaît.'],
    fig: 'u4f1'
  },
  {
    t: 'Les richesses naturelles nationales', comp: 'Le patrimoine et les richesses naturelles', theme: 'La classification des richesses naturelles',
    goal: 'classer les richesses naturelles nationales et citer des exemples malgaches',
    mat: 'Photographies de la faune et de la flore, carte de Madagascar, documents',
    revQ: 'Donne la différence entre patrimoine matériel et immatériel, avec un exemple de chaque.',
    revRA: 'Matériel : se touche (palais) ; immatériel : se transmet par la pratique (kabary).',
    situation: 'Un baobab de huit cents ans, un lémurien qui n’existe nulle part ailleurs, un squelette d’hippopotame nain enfoui depuis des millénaires, une rivière qui fait tourner une turbine : la Grande Île est un coffre aux trésors naturels. Mais un trésor, ça s’inventorie — sinon, comment savoir ce que l’on risque de perdre ?',
    def: 'Les richesses naturelles nationales sont les ressources offertes par la nature au pays. On les classe en catégories : les fossiles (hippopotames nains, dinosaures), la faune, la flore, l’hydrographie et les ressources énergétiques.',
    autrement: 'tout ce que la nature a déposé sur l’île et sous son sol — bêtes, plantes, eaux, énergies et même les restes des espèces disparues — forme le capital naturel de la nation.',
    concept: 'Parcourons l’inventaire. Les fossiles d’abord : Madagascar a livré des squelettes d’hippopotames nains, de tortues géantes, d’oiseaux-éléphants et même de dinosaures — des archives de pierre qui racontent l’île d’avant les hommes. La faune : lémuriens, caméléons, fosa, tortues, oiseaux — un bestiaire unique au monde. La flore : baobabs, orchidées, ravinala, palissandres, plantes médicinales comme la pervenche de Madagascar. L’hydrographie : fleuves, lacs et sources — réserves d’eau douce, d’irrigation et de pêche. Les ressources énergétiques enfin : soleil, cours d’eau, vent, et les ressources du sous-sol. Le caractère extraordinaire de cet inventaire : l’endémisme — la plupart de nos espèces n’existent QUE chez nous ; si elles disparaissent ici, elles disparaissent de la Terre. Ces richesses s’étendent « depuis la protohistoire » : les fossiles comme les forêts sont des héritages — exactement comme les palais et les chants, la nature est un patrimoine, et son inventaire est la première étape de sa protection.',
    synthese: 'catégories : fossiles, faune, flore, hydrographie, ressources énergétiques ; particularité malgache : l’endémisme — des espèces uniques au monde ; la nature est un patrimoine à inventorier comme les monuments.',
    method: ['Classer chaque richesse dans sa catégorie (fossile, faune, flore, hydrographie, énergie).', 'Donner pour chaque catégorie un exemple malgache précis.', 'Repérer les richesses endémiques : uniques au monde, donc prioritaires à protéger.'],
    exemple: 'Le lémurien : faune (endémique) ; le baobab : flore ; le lac Alaotra : hydrographie ; le soleil du Sud : ressource énergétique ; l’hippopotame nain : fossile.',
    erreur: 'Croire que « richesse naturelle » signifie seulement « ce qui rapporte de l’argent » : une source, une orchidée ou un fossile sans valeur marchande immédiate sont des richesses nationales — leur valeur est scientifique, écologique et patrimoniale.',
    saistu: 'Avant l’arrivée des hommes vivait à Madagascar le plus grand oiseau de tous les temps : l’æpyornis, « l’oiseau-éléphant », haut de trois mètres — son œuf valait près de deux cents œufs de poule ! On trouve encore des fragments de ses coquilles dans le sable du Sud : tenir dans sa main un morceau d’œuf d’æpyornis, c’est toucher une richesse naturelle… disparue.',
    exos: ['Classe dans la bonne catégorie : a) une orchidée de forêt humide ; b) le fosa ; d) une chute d’eau qui alimente une turbine ; e) un squelette d’oiseau-éléphant.',
      'Exemples et définitions. a) Cite les catégories de richesses naturelles du programme. b) Donne deux exemples de fossiles malgaches. d) Que signifie « espèce endémique » ? e) Pourquoi l’endémisme rend-il la protection urgente ?',
      'Réfléchir. a) En quoi l’hydrographie est-elle une richesse pour les rizières ? b) Cite deux ressources énergétiques renouvelables de l’île. d) Pourquoi dit-on que les fossiles sont des « archives de pierre » ? e) Explique : « la nature est un patrimoine ».'],
    corr: ['a) flore ; b) faune ; d) hydrographie (et ressource énergétique) ; e) fossile.',
      'a) fossiles, faune, flore, hydrographie, ressources énergétiques ; b) hippopotames nains et dinosaures (aussi : æpyornis, tortues géantes) ; d) une espèce qui n’existe que dans un seul pays ou territoire ; e) parce que si elle disparaît ici, elle disparaît de la planète entière.',
      'a) elle fournit l’eau d’irrigation des rizières ; b) le soleil et l’eau (aussi : le vent) ; d) parce qu’ils enregistrent la vie d’avant les hommes, comme des documents ; e) comme les monuments, la nature est un héritage reçu du passé, à transmettre aux générations futures.'],
    fig: 'u4f2'
  },
  {
    t: 'La protection et l’entretien des patrimoines et des richesses naturelles', comp: 'Le patrimoine et les richesses naturelles', theme: 'Les activités de protection et d’entretien',
    goal: 'citer les activités de protection et d’entretien des patrimoines et des richesses naturelles, dans le respect de la loi',
    mat: 'Textes de lois simplifiés, photos d’aires protégées, plants d’arbres, documents',
    revQ: 'Cite les catégories de richesses naturelles et un exemple pour deux d’entre elles.',
    revRA: 'Fossiles, faune, flore, hydrographie, ressources énergétiques — ex. : lémurien (faune), baobab (flore).',
    situation: 'Sur la colline dénudée, les élèves plantent des arbres sous l’œil du garde forestier ; au musée, une vitrine blindée abrite une couronne royale ; à l’entrée du parc, un panneau rappelle la loi. Trois images, un même verbe : protéger. Mais protéger, concrètement, c’est faire quoi ? Le programme nous donne la liste des gestes.',
    def: 'La protection et l’entretien des richesses naturelles consistent à protéger le sol, les eaux (eau douce et mer), les forêts et les richesses qu’elles renferment (faune, flore), et à reboiser. La protection des patrimoines consiste à les conserver dans des musées hautement sécurisés, à multiplier les aires protégées et à lutter contre toutes les sortes de pollutions — le tout dans le respect des lois.',
    autrement: 'protéger la nature : sol, eaux, forêts et reboisement ; protéger les trésors : musées sûrs, aires protégées, zéro pollution — et la loi comme bouclier de l’ensemble.',
    concept: 'Côté nature, quatre chantiers. Protéger le sol : lutter contre l’érosion et les feux de brousse qui emportent la terre fertile — les « lavaka » qui balafrent les collines sont les cicatrices du sol mal protégé. Protéger les eaux : sources, rivières et mer — ni déchets, ni pêche destructrice. Protéger les forêts et ce qu’elles renferment : contre les coupes illégales et le braconnage de la faune et de la flore. Reboiser : replanter chaque année, car un arbre coupé en une heure met vingt ans à revenir. Côté patrimoine, trois chantiers : conserver les objets précieux dans des musées hautement sécurisés — l’incendie du Rova en 1995 a montré ce qu’un trésor non protégé peut coûter ; multiplier les aires protégées — parcs nationaux et réserves, qui couvrent des millions d’hectares ; lutter contre toutes les pollutions, qui rongent les pierres comme les écosystèmes. Et partout, le même socle : le respect des lois — car patrimoine et nature appartiennent à tous, et c’est la loi qui défend le bien de tous. L’élève a son rôle : inventorier, sensibiliser, reboiser, alerter.',
    synthese: 'nature : protéger sol, eaux, forêts (faune, flore) + reboiser ; patrimoine : musées sécurisés, aires protégées, lutte contre les pollutions ; socle commun : le respect des lois ; chacun peut agir — y compris les élèves.',
    method: ['Identifier le bien à protéger : richesse naturelle ou patrimoine ?', 'Choisir les gestes adaptés dans la liste du programme (sol, eaux, forêts, reboisement / musées, aires protégées, anti-pollution).', 'Vérifier le cadre légal et prévoir la sensibilisation de la communauté.'],
    exemple: 'Pour une forêt menacée : patrouilles contre les coupes illégales (protéger), pépinière scolaire (reboiser), panneau et réunion villageoise (sensibiliser), appui du fokontany (loi).',
    erreur: 'Opposer protection et population : interdire sans expliquer échoue toujours. La protection durable associe la communauté — c’est pourquoi le programme insiste sur la sensibilisation et le respect des lois, pas sur la punition seule.',
    saistu: 'Madagascar a lancé l’un des plus grands défis de reboisement d’Afrique : planter des dizaines de millions d’arbres par an — et chaque mois de janvier, écoles, églises, entreprises et ministères montent aux collines, plants en main. Un record symbolique : en une seule journée de 2020, plus d’un million d’arbres ont été mis en terre sur les collines d’Ankazobe !',
    exos: ['Nature ou patrimoine ? Associe chaque geste : a) installer une vitrine sécurisée au musée. b) Créer une pépinière pour reboiser. d) Interdire les déchets près de la source. e) Classer une réserve en aire protégée.',
      'Les gestes du programme. a) Cite les quatre chantiers de protection des richesses naturelles. b) Cite les trois chantiers de protection des patrimoines. d) Pourquoi la loi est-elle le socle de toute protection ? e) Que risque un trésor conservé sans sécurité ?',
      'Mini-projet. Ta classe adopte la colline du village. a) Décris deux actions concrètes de protection. b) Qui faut-il associer au projet ? d) Comment sensibiliser le village ? e) Rédige la phrase d’ouverture de ta séance de sensibilisation.'],
    corr: ['a) patrimoine ; b) nature ; d) nature ; e) les deux — l’aire protégée garde la nature et les sites qu’elle contient.',
      'a) protéger le sol, protéger les eaux, protéger les forêts et leurs richesses, reboiser ; b) conserver en musées sécurisés, multiplier les aires protégées, lutter contre les pollutions ; d) parce que le patrimoine et la nature appartiennent à tous : seule la loi défend le bien commun ; e) l’incendie, le vol, la dégradation — la perte définitive.',
      'a) par exemple pare-feu et plantation d’arbres ; b) le fokontany, le garde forestier, les parents ; d) réunion, affiches, démonstration des élèves ; e) réponse libre — par exemple : « Cette colline est notre héritage : ce que nous plantons aujourd’hui, nos enfants le récolteront. »'],
    fig: 'u4f3'
  },
  {
    t: 'Les avantages de la protection', comp: 'Le patrimoine et les richesses naturelles', theme: 'Les avantages dus à la protection et à l’entretien',
    goal: 'déterminer les avantages économiques, sociaux et culturels de la protection des patrimoines et des richesses naturelles',
    mat: 'Textes et articles, photos de parcs et de sites touristiques, tableau',
    revQ: 'Cite deux gestes de protection de la nature et deux gestes de protection du patrimoine.',
    revRA: 'Nature : reboiser, protéger les eaux ; patrimoine : musées sécurisés, aires protégées.',
    situation: 'À l’entrée du parc, le jeune guide compte les visiteurs du jour : des familles venues de trois continents pour voir des lémuriens. Au village voisin, l’hôtel embauche, les artisans vendent leurs paniers, l’école a un toit neuf. Protéger coûte des efforts — mais que rapporte-t-il ? Faisons les comptes, sur trois plans.',
    def: 'Les avantages dus à la protection et à l’entretien des patrimoines et des richesses naturelles se mesurent sur trois plans. Économique : source de devises et de revenus grâce au tourisme, et abandon de l’exploitation irrationnelle des ressources. Social : changement de mentalité dans le respect des lois et amélioration du niveau de vie de la population. Culturel : viabilité des patrimoines et des richesses, et sensibilisation communautaire.',
    autrement: 'un trésor bien gardé devient une source qui coule chaque année : argent du tourisme, vie meilleure, fierté partagée — un trésor pillé ne donne qu’une fois, puis plus jamais.',
    concept: 'Plan économique : chaque visiteur étranger apporte des devises — monnaies étrangères précieuses pour le pays ; le tourisme fait vivre guides, hôtels, transporteurs, artisans et paysans qui nourrissent tout ce monde. Et protéger, c’est aussi renoncer à l’exploitation irrationnelle : la forêt rasée rapporte une fois ; la forêt visitée rapporte tous les ans — l’écotourisme transforme la nature en revenu durable. Plan social : quand la communauté voit les retombées, la mentalité change — on respecte les lois parce qu’on en comprend l’intérêt ; les revenus améliorent le niveau de vie : emplois, écoles, dispensaires financés par les droits d’entrée des parcs. Plan culturel : protégés et entretenus, les patrimoines deviennent viables — ils traversent les générations ; et la sensibilisation communautaire fait de chaque habitant un gardien fier de ses trésors. La boucle est vertueuse : protection → visiteurs → revenus → meilleure protection. L’historien conclut : un pays qui garde ses héritages ne garde pas seulement son passé — il finance son avenir.',
    synthese: 'économique : devises et revenus du tourisme, fin de l’exploitation irrationnelle ; social : respect des lois, meilleur niveau de vie ; culturel : patrimoines viables, communauté sensibilisée ; protection → visiteurs → revenus → meilleure protection.',
    method: ['Classer chaque avantage dans son plan : économique, social ou culturel.', 'Illustrer chaque plan par un exemple concret (parc, musée, site de ta région).', 'Expliquer la boucle vertueuse : comment la protection finance la protection.'],
    exemple: 'Le parc accueille des visiteurs → le village gagne des revenus (économique) → la population soutient les règles du parc (social) → le site reste beau et transmis (culturel) → les visiteurs reviennent.',
    erreur: 'Croire que la protection « bloque le développement » : c’est l’exploitation irrationnelle qui tue la ressource — et le revenu avec. La protection bien menée est un investissement : elle rapporte chaque année, durablement.',
    saistu: 'Dans plusieurs parcs de Madagascar, la moitié des droits d’entrée revient directement aux communautés riveraines : écoles, puits, greniers à riz financés par les visiteurs venus voir les lémuriens. Les habitants, hier tentés par la coupe de la forêt, en sont devenus les meilleurs gardiens — la preuve vivante que protéger, c’est gagner.',
    exos: ['Classe chaque avantage par plan. a) Les devises rapportées par les visiteurs étrangers. b) Le respect des lois devenu naturel au village. d) Le hira gasy transmis aux jeunes générations. e) L’abandon de l’exploitation irrationnelle de la forêt.',
      'Expliquer. a) Que sont les « devises », et pourquoi le pays en a-t-il besoin ? b) Donne deux métiers qui vivent du tourisme. d) Comment les droits d’entrée d’un parc peuvent-ils améliorer le niveau de vie ? e) Que signifie « viabilité des patrimoines » ?',
      'La boucle vertueuse. a) Remets dans l’ordre : revenus, visiteurs, meilleure protection, protection. b) Explique le maillon « revenus → meilleure protection ». d) Compare : forêt rasée contre forêt visitée — laquelle rapporte le plus en vingt ans ? e) Rédige deux phrases de sensibilisation sur les avantages de la protection.'],
    corr: ['a) économique ; b) social ; d) culturel ; e) économique.',
      'a) des monnaies étrangères, nécessaires pour acheter à l’extérieur ce que le pays ne produit pas ; b) guide et hôtelier (aussi : transporteur, artisan) ; d) ils financent écoles, puits et dispensaires des communautés riveraines ; e) des patrimoines qui restent en vie et traversent les générations.',
      'a) protection → visiteurs → revenus → meilleure protection ; b) l’argent gagné paie gardes, entretien et reboisement, donc la protection se renforce ; d) la forêt visitée : elle rapporte chaque année, la forêt rasée une seule fois ; e) réponse libre — par exemple : « Un lémurien vivant attire mille visiteurs ; protégeons-le, et il nourrira le village chaque année. »'],
    fig: 'u4f4'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Le patrimoine et les richesses naturelles',
  rag: 'sensibiliser la communauté sur l’importance des patrimoines et des richesses naturelles nationales, leur protection et leurs avantages.',
  valeurs: 'respect des biens communs et de l’environnement',
  sessions: S,
  revision: {
    table: [
      ['Patrimoine', 'Biens hérités du passé, à transmettre ; héritier : la nation entière', 'Définir le patrimoine et son enjeu'],
      ['Deux catégories', 'Matériel (édifices, tombeaux, statues) ; immatériel (traditions, arts, rituels)', 'Classer un bien dans sa catégorie'],
      ['Richesses naturelles', 'Fossiles, faune, flore, hydrographie, ressources énergétiques ; endémisme', 'Classer les richesses et citer des exemples'],
      ['Protéger la nature', 'Sol, eaux, forêts et leurs richesses ; reboiser', 'Citer les gestes de protection de la nature'],
      ['Protéger le patrimoine', 'Musées sécurisés, aires protégées, lutte contre les pollutions ; la loi', 'Citer les gestes de protection du patrimoine'],
      ['Avantages', 'Économiques (tourisme, devises), sociaux (lois, niveau de vie), culturels (viabilité)', 'Déterminer les avantages de la protection']
    ],
    questions: [
      'Définis le patrimoine et distingue ses deux catégories avec un exemple de chaque.',
      'Classe : un fossile d’hippopotame nain, le lac Alaotra, un caméléon, le vent du Sud.',
      'Cite les quatre chantiers de protection des richesses naturelles.',
      'Cite les trois chantiers de protection des patrimoines et leur socle commun.',
      'Donne un avantage de la protection par plan : économique, social, culturel.'
    ],
    answers: [
      'Biens hérités du passé à transmettre aux générations futures ; matériel : palais royal ; immatériel : kabary.',
      'Fossile ; hydrographie ; faune ; ressource énergétique.',
      'Protéger le sol ; protéger les eaux (douces et mer) ; protéger les forêts, faune et flore ; reboiser.',
      'Conserver en musées hautement sécurisés ; multiplier les aires protégées ; lutter contre les pollutions — socle : le respect des lois.',
      'Économique : devises et revenus du tourisme ; social : respect des lois et meilleur niveau de vie ; culturel : patrimoines viables et communauté sensibilisée.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis le patrimoine. b) Distingue patrimoine matériel et immatériel. d) Cite les catégories de richesses naturelles. e) Que signifie « espèce endémique » ?',
      'Classement. Range chaque élément : a) le tsingy de Bemaraha ; b) l’art du kabary ; d) une chute d’eau alimentant une turbine ; e) un squelette d’oiseau-éléphant.',
      'La protection. a) Cite deux gestes de protection des eaux et des forêts. b) Pourquoi reboiser chaque année ? d) Comment protège-t-on les objets précieux du patrimoine ? e) Pourquoi la loi est-elle indispensable à la protection ?',
      'Étude de situation. Un parc national reverse la moitié de ses droits d’entrée au village voisin. a) Quel plan d’avantage illustre ce reversement ? b) Décris la boucle vertueuse ainsi créée. d) Quel changement social peut-on attendre au village ? e) Que se passerait-il si le parc n’était pas protégé ?',
      'Réflexion et projet. « Un patrimoine protégé rapporte chaque année ; détruit, il ne rapporte qu’une fois. » a) Explique cette phrase avec l’exemple de la forêt. b) Donne un avantage économique et un avantage culturel de la protection. d) Propose deux actions de sensibilisation que ta classe peut mener. e) Conclus en deux phrases sur la responsabilité de ta génération.'
    ],
    corr: [
      'a) l’ensemble des biens hérités du passé que la nation doit transmettre aux générations futures ; b) matériel : se touche (édifices, tombeaux, statues) ; immatériel : se transmet par la pratique (traditions, arts, rituels) ; d) fossiles, faune, flore, hydrographie, ressources énergétiques ; e) une espèce qui n’existe nulle part ailleurs au monde. Un point par item.',
      'a) patrimoine naturel / richesse naturelle (site protégé, inscrit à l’UNESCO) ; b) patrimoine immatériel ; d) hydrographie et ressource énergétique ; e) fossile. Un point par item.',
      'a) interdire déchets et pêche destructrice ; lutter contre coupes illégales et braconnage ; b) parce qu’un arbre coupé en une heure met vingt ans à repousser : il faut compenser sans cesse ; d) en les conservant dans des musées hautement sécurisés ; e) parce que le patrimoine appartient à tous et que seule la loi défend le bien commun. Un point par item.',
      'a) le plan économique (et social) ; b) protection → visiteurs → revenus pour le village → soutien du village à la protection ; d) le respect des lois du parc devenu naturel, et un meilleur niveau de vie ; e) plus de visiteurs, plus de revenus — et la ressource elle-même finirait détruite. Un point par item.',
      'a) la forêt rasée se vend une fois ; la forêt visitée attire des touristes chaque année, durablement ; b) économique : devises du tourisme ; culturel : patrimoines viables transmis aux générations ; d) par exemple une exposition des patrimoines de la région et une journée de reboisement ; e) réponse libre et argumentée — l’héritage reçu doit être transmis plus riche, pas appauvri. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
