// UNITÉ 5 — LE MODE DE VIE DES PREMIERS MALGACHES (PE T7) : 4 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — apports austronésiens / indonésiens / africains
figs.u5f1 = (() => { const { s, y } = head('Les apports des premières civilisations', ['Trois héritages fondateurs — et les bateaux qui les ont portés.']);
  const top = y + 15;
  const data = [['civilisation', 'apports à la civilisation malgache'],
    ['austronésienne', 'commerce, pêche ; mots : omby, vary, salama'],
    ['indonésienne', 'riziculture en terrasse, mode d’habillement'],
    ['africaine', 'langues bantou et swahili, noms d’animaux']];
  let b = tableEl(60, top, [280, 600], 54, data);
  const Y2 = top + 4 * 54 + 30;
  b += txt(500, Y2, 'les moyens de transport des migrants', 22, BLUE, 'bold', 'middle');
  const boats = ['la pirogue à balancier', 'le bateau cousu', 'le boutre (« botry »)'];
  boats.forEach((t, i) => { b += box(60 + i * 310, Y2 + 20, 280, 50, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 20); });
  return svg(1000, Y2 + 102, s + b); })();
// S2 — héritages arabo-musulmans
figs.u5f2 = (() => { const { s, y } = head('Les héritages arabo-musulmans', ['Trois plans d’héritages encore vivants.']);
  const top = y + 15;
  const data = [['plan', 'héritages laissés'],
    ['économique', 'comptoirs de commerce, monnaies'],
    ['politique', 'royauté : notion d’État, institutions'],
    ['socio-culturel', 'sorabe, chiffres, astrologie, sikidy'],
    ['', 'circoncision, architecture, valitanana']];
  let b = tableEl(60, top, [280, 600], 54, data);
  b += txt(500, top + 5 * 54 + 40, 'sorabe : la langue malgache écrite en caractères arabes — gardée par les Antemoro', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 72, s + b); })();
// S3 — héritages occidentaux
figs.u5f3 = (() => { const { s, y } = head('Les héritages occidentaux', ['Trois plans d’héritages, de la marine à l’école.']);
  const top = y + 15;
  const data = [['plan', 'héritages laissés'],
    ['économique', 'marine marchande, commerce, industrie'],
    ['politique', 'État, institutions, valeurs républicaines'],
    ['socio-culturel', 'christianisme, école, armée de métier'],
    ['', 'alphabet latin et écriture latine']];
  let b = tableEl(60, top, [280, 600], 54, data);
  b += txt(500, top + 5 * 54 + 40, 'depuis 1823, le malgache s’écrit en alphabet latin — celui de ce manuel !', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 72, s + b); })();
// S4 — identité culturelle
figs.u5f4 = (() => { const { s, y } = head('L’identité culturelle malgache', ['Des groupes de population aux caractères uniques de la nation.']);
  const top = y + 20;
  let b = box(60, top, 880, 54, 'des groupes de population : Antandroy, Bara, Betsileo, Merina, Sakalava, Vezo…', '#FDE7EF', PINK2, 19);
  b += arrow(500, top + 54, 500, top + 84, '#888', 3.5);
  b += box(60, top + 88, 880, 54, 'chaque groupe : son héritage culturel, sa culture matérielle, ses coutumes', BLUEL, BLUE, 19);
  b += arrow(500, top + 142, 500, top + 172, '#888', 3.5);
  b += box(60, top + 176, 880, 54, 'identité culturelle malgache : caractères uniques partagés par toute l’île', GREENL, GREEN, 19);
  const tr = ['langue malgache', 'respect des razana', 'fihavanana', 'riz et zébu'];
  tr.forEach((t, i) => { b += box(60 + i * 225, top + 262, 205, 48, t, '#FFF3E0', OCRE, 18); });
  return svg(1000, top + 262 + 80, s + b); })();

const S = [
  {
    t: 'Les apports austronésiens et africains', comp: 'Le mode de vie des premiers Malgaches', theme: 'Les apports des civilisations austronésiennes et africaines',
    goal: 'expliquer les apports des civilisations austronésiennes et africaines sur la civilisation malgache',
    mat: 'Textes, photos, images des pirogues et des cultures, carte',
    revQ: 'Cite deux ressemblances et deux différences entre les migrants arrivés à Madagascar.',
    revRA: 'Ressemblances : croyance, langue, zébu-riziculture ; différences : variétés régionales, morphologies.',
    situation: 'Quand tu dis « vary », tu parles austronésien sans le savoir ; quand tu nommes l’« akoho », l’Afrique parle par ta bouche ; et les terrasses de rizières qui escaladent les collines betsileo ont des sœurs jumelles à Bali et à Java. Le mode de vie malgache est un trésor composé : ouvrons l’inventaire de ses premiers fournisseurs.',
    def: 'Les apports de la civilisation austronésienne comprennent le commerce, la pêche et le fonds de la langue — des mots comme omby, vary, salama ; la civilisation indonésienne a apporté la riziculture en terrasse et le mode d’habillement ; la civilisation africaine a laissé les langues bantou et swahili, notamment dans l’appellation des animaux. Les moyens de transport des migrants étaient la pirogue à balancier, le bateau cousu et le boutre ou « botry ».',
    autrement: 'l’Asie a donné la langue, le riz et ses terrasses ; l’Afrique a donné des mots, des bêtes et des savoirs d’élevage ; et trois bateaux — pirogue, bateau cousu, boutre — ont tout transporté.',
    concept: 'L’apport austronésien est le socle : la langue d’abord — le malgache appartient à la famille austronésienne, et ses mots les plus quotidiens le prouvent : vary (le riz), omby (le bœuf), salama (le salut), trano (la maison) ; la pêche et la navigation ensuite, arts des peuples de la mer ; le commerce enfin, qui reliait déjà les îles. L’apport indonésien raffine ce socle : la riziculture en terrasse, prodige d’ingénierie qui sculpte les collines en escaliers irrigués — regarde les terrasses betsileo : c’est l’Asie du Sud-Est à Madagascar — et des manières de se vêtir, comme le lamba drapé. L’apport africain complète : les langues bantou et swahili ont fourni quantité de mots, surtout pour les animaux — akoho (la poule, kuku en swahili), ondry (le mouton) — et les techniques d’élevage du zébu, venu d’Afrique avec ses bergers. Les trois bateaux racontent les trois routes : la pirogue à balancier, stable grâce à son flotteur, est la signature austronésienne — on la voit encore chez les Vezo ; le bateau cousu, aux planches liées par des fibres végétales sans un seul clou, naviguait sur tout l’océan Indien ; le boutre (botry), à la voile triangulaire, est le cargo des côtes africaine et arabe — il dessert toujours Mahajanga ! Le mode de vie malgache est donc un tissage : fils asiatiques et fils africains, serrés au point de ne plus pouvoir les séparer.',
    synthese: 'austronésien : commerce, pêche, fonds de la langue (omby, vary, salama) ; indonésien : riziculture en terrasse, habillement ; africain : mots bantou-swahili (animaux), élevage du zébu ; transports : pirogue à balancier, bateau cousu, boutre.',
    method: ['Classer chaque élément du mode de vie par civilisation d’origine.', 'Chercher la preuve linguistique : comparer le mot malgache à ses cousins malais ou swahilis.', 'Associer chaque moyen de transport à sa route maritime.'],
    exemple: 'Les terrasses de Betafo : technique indonésienne ; le zébu qui les laboure : apport africain ; le mot vary récolté : fonds austronésien — un seul paysage, trois héritages.',
    erreur: 'Chercher un apport « pur » : aucune pratique malgache n’est restée identique à son origine ; chaque apport a été adapté à l’île — la riziculture indonésienne s’est mariée au zébu africain, mariage qui n’existe nulle part ailleurs.',
    saistu: 'Le bateau cousu n’a pas un seul clou : ses planches sont percées puis « cousues » avec des cordes de fibre de coco, et les trous calfatés de résine ! Cette technique, décrite dès l’Antiquité dans l’océan Indien, rendait les coques souples face aux récifs. Des épaves cousues ont été retrouvées des côtes d’Oman jusqu’en Asie — l’océan Indien était une véritable autoroute maritime.',
    exos: ['Quelle origine ? a) Le mot « vary ». b) La riziculture en terrasse. d) Le mot « akoho ». e) La pirogue à balancier.',
      'Les apports. a) Cite trois apports austronésiens. b) Cite deux apports indonésiens. d) Cite deux apports africains. e) Nomme les trois moyens de transport des migrants.',
      'Analyse. a) Comment la langue prouve-t-elle les origines ? b) Décris le bateau cousu. d) Pourquoi la pirogue à balancier est-elle stable ? e) Montre par un exemple que les apports se sont mélangés.'],
    corr: ['a) austronésienne ; b) indonésienne ; d) africaine (swahili kuku) ; e) austronésienne.',
      'a) le commerce, la pêche, le fonds de la langue (omby, vary, salama) ; b) la riziculture en terrasse et le mode d’habillement ; d) les langues bantou-swahili (noms d’animaux) et l’élevage du zébu ; e) la pirogue à balancier, le bateau cousu, le boutre (botry).',
      'a) les mots malgaches ressemblent à leurs cousins malais ou swahilis : la parenté des mots révèle la parenté des peuples ; b) des planches liées par des fibres végétales, sans clous, calfatées de résine ; d) grâce à son flotteur latéral qui l’empêche de chavirer ; e) les terrasses indonésiennes labourées par le zébu africain, pour récolter le vary austronésien.'],
    fig: 'u5f1'
  },
  {
    t: 'Les héritages arabo-musulmans', comp: 'Le mode de vie des premiers Malgaches', theme: 'Les héritages de la civilisation arabo-musulmane',
    goal: 'énoncer les héritages laissés par la civilisation arabo-musulmane sur la civilisation malgache',
    mat: 'Textes, images, photos de sites et de manuscrits sorabe',
    revQ: 'Cite les trois moyens de transport des migrants et une origine de chacun.',
    revRA: 'Pirogue à balancier (austronésienne), bateau cousu (océan Indien), boutre (côtes arabo-africaines).',
    situation: 'Dans une case du Sud-Est, un vieux katibo trace sur un papier ocre des lettres arabes... qui se lisent en malgache. Au marché, le devin dispose ses graines de sikidy ; au village, on prépare la circoncision du petit dernier ; et le nom du mois sur le calendrier traditionnel sonne comme de l’arabe. Les boutres du IXᵉ siècle ont apporté bien plus que des marchandises.',
    def: 'Les héritages laissés par la civilisation arabo-musulmane sur la civilisation malgache se classent en trois plans. Sur le plan économique : les comptoirs de commerce et les monnaies. Sur le plan politique : la royauté — la notion d’État et les institutions politiques. Sur le plan socio-culturel : la religion, la polygamie, le plan de la ville, l’écriture sorabe, les chiffres arabes, la circoncision, la géomancie (sikidy), l’astrologie, l’architecture, l’artisanat, ainsi que l’entraide et la solidarité (valitanana).',
    autrement: 'les islamisés ont laissé le commerce et ses comptoirs, des idées pour gouverner, et tout un trésor culturel : l’écriture sorabe, les devins-astrologues, le sikidy, la circoncision, l’entraide.',
    concept: 'Plan économique : les Antalaotra tiennent des comptoirs — Mahilaka, Langany, les ports du Nord-Ouest — où l’on échange or, fer, esclaves, tissus et perles contre les produits de l’océan Indien ; les monnaies y circulent, nouveauté dans l’île du troc. Plan politique : les royautés du Sud-Est et d’ailleurs empruntent aux islamisés des idées d’État : un souverain sacré, des institutions, des conseillers lettrés — les katibo, scribes du sorabe, serviront plus tard les rois merina eux-mêmes. Plan socio-culturel, le plus riche : l’écriture sorabe — la langue malgache notée en caractères arabes — fait entrer l’île dans l’écrit ; les Antemoro en sont les gardiens, leurs manuscrits conservent généalogies, remèdes et savoirs secrets. Les chiffres, l’astrologie et le calendrier : les noms des jours et des destins (vintana) viennent de l’arabe ; le devin ombiasy lit les jours fastes et néfastes. La géomancie sikidy, divination par les graines, descend du « ilm al-raml » arabe. La circoncision (famorana) devient une grande fête familiale malgache. S’y ajoutent des éléments d’architecture et d’artisanat, et des valeurs d’entraide et de solidarité — le valitanana, l’aide rendue main pour main. Comme toujours, Madagascar a tout adapté : le sikidy s’est marié au culte des ancêtres, le calendrier arabe au vintana — l’héritage est devenu pleinement malgache.',
    synthese: 'économique : comptoirs, monnaies ; politique : royauté, notion d’État, institutions ; socio-culturel : sorabe (gardé par les Antemoro), chiffres, astrologie et vintana, sikidy, circoncision, architecture, artisanat, valitanana — des apports adaptés et malgachisés.',
    method: ['Classer les héritages en trois plans : économique, politique, socio-culturel.', 'Pour chaque héritage, citer sa trace actuelle (mot, pratique, site).', 'Montrer l’adaptation : comment l’apport est devenu malgache.'],
    exemple: 'Le sorabe : apport arabe (l’alphabet) + langue malgache (le contenu) + gardiens antemoro (la transmission) = un héritage arabo-musulman devenu trésor national.',
    erreur: 'Croire que l’héritage arabo-musulman a fait de Madagascar un pays musulman : l’île a adopté l’écriture, les sciences et des coutumes, mais la religion est restée minoritaire — on a pris les outils plus que la foi.',
    saistu: 'Les manuscrits sorabe les plus précieux étaient si sacrés qu’on ne pouvait les recopier qu’avec des encres spéciales, et certains katibo apprenaient des livres entiers par cœur ! Plusieurs sorabe anciens sont aujourd’hui conservés dans les bibliothèques d’Europe — et les historiens les étudient comme les plus vieilles pages écrites de la pensée malgache.',
    exos: ['Classe chaque héritage par plan : a) les comptoirs de commerce. b) La notion d’État dans la royauté. d) Le sikidy. e) Les monnaies.',
      'Le sorabe. a) Qu’est-ce que le sorabe ? b) Qui en sont les gardiens ? d) Que contiennent les manuscrits ? e) Pourquoi est-ce une étape importante pour l’Histoire malgache ?',
      'Comprendre. a) Cite trois héritages socio-culturels. b) Qu’est-ce que le valitanana ? d) Montre par un exemple que l’apport a été « malgachisé ». e) Pourquoi dit-on que l’île a pris « les outils plus que la foi » ?'],
    corr: ['a) économique ; b) politique ; d) socio-culturel ; e) économique.',
      'a) la langue malgache écrite en caractères arabes ; b) les Antemoro du Sud-Est (les katibo) ; d) généalogies, remèdes, savoirs astrologiques ; e) parce qu’avec lui, Madagascar entre dans l’écrit : premières pages écrites de la pensée malgache.',
      'a) sorabe, sikidy, circoncision (aussi : astrologie, chiffres, architecture, valitanana) ; b) l’entraide et la solidarité, l’aide rendue main pour main ; d) le sikidy marié au culte des ancêtres, le calendrier arabe devenu vintana ; e) parce que l’écriture, les sciences et les coutumes ont été adoptées, mais la religion musulmane est restée minoritaire.'],
    fig: 'u5f2'
  },
  {
    t: 'Les héritages occidentaux', comp: 'Le mode de vie des premiers Malgaches', theme: 'Les héritages de la civilisation occidentale',
    goal: 'démontrer les héritages laissés par la civilisation occidentale sur la civilisation malgache',
    mat: 'Textes, images, questionnaire de visite de lieux historiques',
    revQ: 'Cite les trois plans des héritages arabo-musulmans avec un exemple chacun.',
    revRA: 'Économique : comptoirs, monnaies ; politique : notion d’État ; socio-culturel : sorabe, sikidy, circoncision.',
    situation: 'Les lettres que tu traces en ce moment, l’école où tu les apprends, le temple ou l’église du quartier, le port où accostent les cargos : autant d’héritages d’une vague venue, elle, de l’Ouest. Arrivés au XVᵉ siècle en simples visiteurs, les Européens ont fini par transformer l’économie, l’État et la culture de l’île. Inventaire — avec l’esprit critique de l’historien.',
    def: 'Les héritages laissés par la civilisation occidentale sur la civilisation malgache se classent en trois plans. Sur le plan économique : la marine marchande, le commerce et l’industrie. Sur le plan politique : la notion d’État, les institutions politiques et les valeurs républicaines. Sur le plan socio-culturel : le christianisme, l’école, l’armée de métier, l’alphabet latin et l’écriture latine.',
    autrement: 'l’Occident a laissé les navires et les usines, l’État moderne et la République, et surtout l’école, le christianisme et l’alphabet dans lequel s’écrit aujourd’hui le malgache.',
    concept: 'Plan économique : la marine marchande relie l’île au commerce mondial — comptoirs de traite d’abord, puis grandes compagnies ; au XIXᵉ siècle, Jean Laborde installe pour Ranavalona Iʳᵉ à Mantasoa une cité industrielle — fonderie, canons, verre, savon : l’industrie entre à Madagascar. Plan politique : au contact des Européens, le Royaume de Madagascar se dote des outils de l’État moderne — code de lois écrites, ministères, diplomatie, traités internationaux ; plus tard, les valeurs républicaines — élections, constitution, citoyenneté — fonderont la République malgache. Plan socio-culturel, le plus profond : en 1818, les missionnaires gallois de la LMS ouvrent les premières écoles ; en 1823, Radama Iᵉʳ décide que le malgache s’écrira en alphabet latin — vingt et une lettres, sans c, q, u, w, x — et en 1835, la Bible malgache est le premier grand livre imprimé dans la langue : le christianisme s’enracine, mêlé aux traditions. L’école se répand — avant bien des pays d’Europe, l’Imerina du XIXᵉ siècle scolarise massivement ses enfants ! L’armée de métier, avec grades et uniformes, remplace peu à peu les levées guerrières. L’esprit critique s’impose pourtant : ces héritages sont arrivés mêlés d’intérêts — commerce inégal, rivalités franco-britanniques, puis colonisation (1896-1960), que tu étudieras en T8. L’historien pèse les deux plateaux : des outils précieux — école, écriture, État — et une domination qui a coûté la souveraineté. Hériter n’est pas approuver : c’est comprendre.',
    synthese: 'économique : marine marchande, commerce, industrie (Mantasoa) ; politique : État moderne, institutions, valeurs républicaines ; socio-culturel : christianisme, école (1818), alphabet latin (1823), armée de métier ; des héritages mêlés d’intérêts — à évaluer avec esprit critique.',
    method: ['Classer les héritages en trois plans : économique, politique, socio-culturel.', 'Dater les jalons : 1818 (écoles), 1823 (alphabet latin), XIXᵉ (industrie de Mantasoa).', 'Évaluer avec esprit critique : apports ET domination.'],
    exemple: 'Ton cahier d’Histoire résume trois héritages d’un coup : l’école qui t’accueille (1818), l’alphabet latin que tu traces (1823), et la langue malgache qu’il écrit — héritage occidental au service d’un trésor national.',
    erreur: 'Confondre « héritage occidental » et « supériorité occidentale » : l’école ou l’alphabet ne valent pas parce qu’ils sont européens, mais parce que les Malgaches se les sont appropriés pour écrire LEUR langue et instruire LEURS enfants.',
    saistu: 'À Mantasoa, Jean Laborde a bâti dans les années 1830-1840 un complexe unique en Afrique australe : haut fourneau, fonderie de canons, verrerie, savonnerie, poudrière — des milliers d’ouvriers malgaches y travaillaient ! On peut encore visiter les vestiges aujourd’hui. Et la première Bible malgache de 1835 fit de Madagascar l’un des tout premiers pays d’Afrique à posséder un grand livre imprimé dans sa langue nationale.',
    exos: ['Classe chaque héritage par plan : a) la marine marchande. b) Les valeurs républicaines. d) L’école. e) L’industrie de Mantasoa.',
      'Les jalons. a) Que se passe-t-il en 1818 ? b) Et en 1823 ? d) Qui a bâti la cité industrielle de Mantasoa, et pour qui ? e) Cite deux caractéristiques de l’armée de métier.',
      'Esprit critique. a) Pourquoi faut-il évaluer ces héritages « avec esprit critique » ? b) Montre que l’alphabet latin sert un trésor national. d) Compare l’héritage « école » et l’héritage « commerce inégal ». e) Explique : « hériter n’est pas approuver : c’est comprendre ».'],
    corr: ['a) économique ; b) politique ; d) socio-culturel ; e) économique.',
      'a) les missionnaires ouvrent les premières écoles ; b) Radama Iᵉʳ adopte l’alphabet latin pour écrire le malgache ; d) Jean Laborde, pour Ranavalona Iʳᵉ ; e) grades et uniformes, soldats permanents formés au métier des armes.',
      'a) parce qu’ils sont arrivés mêlés d’intérêts commerciaux et de domination, jusqu’à la colonisation ; b) il sert à écrire la langue malgache et à instruire les enfants malgaches ; d) l’école a outillé la nation ; le commerce inégal l’a appauvrie : un même mouvement a porté les deux ; e) réponse libre — l’historien analyse les apports et les coûts sans ignorer ni excuser.'],
    fig: 'u5f3'
  },
  {
    t: 'L’identité culturelle malgache', comp: 'Le mode de vie des premiers Malgaches', theme: 'L’identité culturelle et le patrimoine identitaire malgache',
    goal: 'revaloriser l’identité culturelle malgache à partir des apports des différentes civilisations et des groupes de population',
    mat: 'Textes, photos des groupes de population, cartes',
    revQ: 'Cite les trois plans des héritages occidentaux avec un exemple chacun.',
    revRA: 'Économique : marine, industrie ; politique : État, valeurs républicaines ; socio-culturel : école, alphabet latin, christianisme.',
    situation: 'Antandroy du grand Sud, Betsileo des terrasses, Vezo de la mer, Sihanaka du lac, Merina des collines : la carte de Madagascar est une mosaïque de groupes de population, chacun fier de ses coutumes. Et pourtant une seule culture malgache les relie tous. Comment chaque pièce enrichit-elle la mosaïque — et comment la mosaïque fait-elle un seul tableau ?',
    def: 'Les groupes de population de Madagascar — Antandroy, Bara, Betsileo, Bezanozano, Sihanaka, Masikoro, Vezo, Merina, Sakalava, Betsimisaraka, Mikea, Tsimihety, et d’autres — possèdent chacun un héritage culturel, une culture matérielle et des coutumes propres. L’identité culturelle malgache est l’ensemble des caractères uniques des Malgaches, nourris par les apports de toutes les civilisations : c’est un patrimoine identitaire à revaloriser.',
    autrement: 'chaque groupe de population apporte ses couleurs — habitat, coutumes, arts — et toutes ces couleurs composent une identité malgache unique au monde, qu’il nous revient de faire briller.',
    concept: 'Chaque groupe cultive son héritage : les Antandroy, pasteurs du Sud épineux, élèvent leurs grands troupeaux et sculptent les aloalo des tombeaux ; les Bara, cavaliers du zébu, gardent leurs rites de bravoure ; les Betsileo sculptent les collines en terrasses ; les Vezo, « nomades de la mer », vivent de la pirogue ; les Sihanaka moissonnent le lac Alaotra ; les Sakalava conservent les reliques royales et le tromba ; les Betsimisaraka, « les nombreux inséparables », peuplent la côte Est du girofle et de la vanille ; les Merina ont bâti les rova des hautes terres ; les Mikea vivent de la forêt, les Tsimihety des collines du Nord, les Masikoro de l’élevage de l’Ouest... La culture matérielle varie — case de bois du Sud, maison de brique rouge des plateaux, case de ravinala de l’Est — comme varient les coutumes : famadihana ici, savatse là, tromba ailleurs. Mais sous la mosaïque court un même fil : la langue, le respect des razana, le fihavanana, le riz et le zébu — les caractères uniques de l’identité malgache, tissés par quinze siècles de brassage austronésien, africain, arabe et européen. Revaloriser cette identité, mission que le programme te confie, c’est : connaître (enquêter sur l’héritage de SON groupe et de sa localité, comme en Histoire orale), respecter (aucun groupe n’est « plus malgache » qu’un autre), transmettre (exposés, fêtes d’école, collectes de contes et de savoir-faire). Une identité ne vit que portée — et c’est ta génération qui la porte désormais.',
    synthese: 'des groupes de population aux héritages propres (habitat, coutumes, arts) ; un fil commun : langue, razana, fihavanana, riz-zébu ; identité malgache = caractères uniques nés du brassage ; mission : connaître, respecter, transmettre — revaloriser le patrimoine identitaire.',
    method: ['Identifier le groupe de population de sa localité et son héritage culturel.', 'Décrire sa culture matérielle et ses coutumes (enquête, visite, témoins).', 'Relier ses traits aux caractères communs malgaches, puis les présenter pour les revaloriser.'],
    exemple: 'Exposé modèle : « Chez les Betsileo : terrasses rizicoles (culture matérielle), chants et sculpture du bois (héritage), coutumes funéraires propres — et partout la langue, les razana et le fihavanana qui nous relient à toute l’île. »',
    erreur: 'Classer les groupes de population en « ethnies » rivales : le brassage historique les a tous mêlés, et le prochain cours montrera qu’à Madagascar, il n’y a ni ethnie ni tribu — seulement des groupes d’un même peuple.',
    saistu: 'Les aloalo, ces poteaux sculptés qui ornent les tombeaux du Sud, racontent la vie du défunt en scènes superposées : zébus, pirogues, maisons, parfois... des taxis-brousse et des avions ! L’art funéraire malgache est si singulier que des aloalo sont exposés dans les grands musées du monde — la créativité d’un groupe devenue fierté de toute la nation.',
    exos: ['Associe chaque groupe à son cadre : a) Vezo ; b) Betsileo ; d) Antandroy ; e) Sihanaka.',
      'Les notions. a) Qu’est-ce que l’héritage culturel d’un groupe ? b) Qu’est-ce que la culture matérielle ? d) Cite les quatre caractères communs à tous les Malgaches. e) Que signifie « revaloriser » l’identité culturelle ?',
      'Ton enquête. a) Nomme le groupe de population de ta localité. b) Décris un élément de sa culture matérielle. d) Décris une de ses coutumes. e) Rédige deux phrases pour présenter fièrement cet héritage à la classe.'],
    corr: ['a) la mer et la pirogue ; b) les terrasses rizicoles ; d) le Sud et ses troupeaux (aloalo) ; e) le lac Alaotra.',
      'a) l’ensemble des savoirs, arts et traditions transmis par ce groupe ; b) les objets, l’habitat, les techniques du quotidien ; d) la langue, le respect des razana, le fihavanana, le riz et le zébu ; e) la connaître, la respecter et la transmettre pour la faire briller.',
      'a) réponse locale ; b) réponse locale (maison, outil, habit…) ; d) réponse locale (fête, rite, interdit…) ; e) réponse libre et soignée — vérifier fierté et exactitude.'],
    fig: 'u5f4'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Le mode de vie des premiers Malgaches',
  rag: 'exploiter des traces du passé pour expliquer les apports des civilisations à la civilisation malgache et revaloriser l’identité culturelle nationale.',
  valeurs: 'entraide, solidarité',
  sessions: S,
  revision: {
    table: [
      ['Apports austronésiens', 'Commerce, pêche, fonds de la langue : omby, vary, salama', 'Expliquer le socle austronésien'],
      ['Apports indonésiens et africains', 'Riziculture en terrasse, habillement ; bantou-swahili, zébu', 'Classer les apports par origine'],
      ['Transports des migrants', 'Pirogue à balancier, bateau cousu, boutre (botry)', 'Associer bateaux et routes'],
      ['Héritages arabo-musulmans', 'Comptoirs, monnaies ; État ; sorabe, sikidy, circoncision, valitanana', 'Énoncer les trois plans'],
      ['Héritages occidentaux', 'Marine, industrie ; État, République ; christianisme, école, alphabet latin', 'Démontrer les trois plans'],
      ['Identité culturelle', 'Groupes de population + caractères communs = patrimoine identitaire', 'Revaloriser l’identité malgache']
    ],
    questions: [
      'Cite trois apports austronésiens et deux apports africains.',
      'Nomme et décris les trois moyens de transport des migrants.',
      'Classe les héritages arabo-musulmans en trois plans avec deux exemples chacun.',
      'Donne les jalons 1818 et 1823 et trois héritages occidentaux socio-culturels.',
      'Cite quatre groupes de population et les quatre caractères communs des Malgaches.'
    ],
    answers: [
      'Commerce, pêche, mots omby-vary-salama ; langues bantou-swahili (akoho) et élevage du zébu.',
      'Pirogue à balancier (flotteur stabilisateur), bateau cousu (planches liées sans clous), boutre à voile triangulaire.',
      'Économique : comptoirs, monnaies ; politique : notion d’État, institutions royales ; socio-culturel : sorabe et sikidy (aussi : circoncision, astrologie, valitanana).',
      '1818 : premières écoles ; 1823 : alphabet latin ; christianisme, école, armée de métier (aussi : écriture latine).',
      'Par exemple Antandroy, Betsileo, Vezo, Sakalava ; langue, respect des razana, fihavanana, riz et zébu.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Cite les apports de la civilisation indonésienne. b) Qu’est-ce que le sorabe ? d) Que s’est-il passé en 1823 ? e) Définis l’identité culturelle malgache.',
      'Classement. Range chaque héritage dans sa civilisation d’origine : a) le mot « vary » ; b) le sikidy ; d) l’alphabet de ce manuel ; e) l’élevage du zébu.',
      'Les trois plans arabo-musulmans. a) Donne un héritage économique. b) Un héritage politique. d) Deux héritages socio-culturels. e) Montre par un exemple que ces apports ont été « malgachisés ».',
      'Document : « En 1835 parut la Bible malgache, premier grand livre imprimé dans la langue, écrit avec l’alphabet adopté en 1823. » a) Quel plan d’héritage occidental ce texte illustre-t-il ? b) Qui a décidé l’adoption de l’alphabet latin ? d) Cite deux autres héritages occidentaux. e) Pourquoi faut-il étudier ces héritages avec esprit critique ?',
      'Synthèse : l’identité malgache. a) Cite quatre groupes de population et une caractéristique de deux d’entre eux. b) Quels caractères communs relient tous les Malgaches ? d) Explique comment le brassage des civilisations a nourri cette identité. e) Propose deux actions pour revaloriser le patrimoine identitaire de ta région.'
    ],
    corr: [
      'a) la riziculture en terrasse et le mode d’habillement ; b) la langue malgache écrite en caractères arabes, gardée par les Antemoro ; d) Radama Iᵉʳ adopte l’alphabet latin pour le malgache ; e) l’ensemble des caractères uniques des Malgaches, nés des apports de toutes les civilisations. Un point par item.',
      'a) austronésienne ; b) arabo-musulmane ; d) occidentale ; e) africaine. Un point par item.',
      'a) les comptoirs ou les monnaies ; b) la notion d’État, les institutions de la royauté ; d) sorabe, sikidy, circoncision, astrologie, valitanana (deux suffisent) ; e) le sikidy marié au culte des ancêtres, ou le calendrier arabe devenu vintana. Un point par item.',
      'a) socio-culturel ; b) Radama Iᵉʳ ; d) le christianisme, l’école, l’armée de métier, la marine marchande (deux suffisent) ; e) parce qu’ils sont arrivés mêlés d’intérêts et de domination, jusqu’à la colonisation : l’historien pèse apports et coûts. Un point par item.',
      'a) par exemple Vezo (la mer), Betsileo (les terrasses), Antandroy (les troupeaux), Sakalava (les reliques royales) ; b) la langue, les razana, le fihavanana, le riz et le zébu ; d) chaque vague — austronésienne, africaine, arabe, européenne — a déposé des éléments que l’île a adaptés et fondus en une culture unique ; e) réponse libre — collecte de contes, exposition, fête des savoir-faire… Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
