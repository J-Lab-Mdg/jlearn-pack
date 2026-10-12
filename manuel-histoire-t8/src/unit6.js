// UNITÉ 6 — MADAGASCAR COLONIE FRANÇAISE (PE T8) : 5 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — causes internes / externes de la colonisation
figs.u6f1 = (() => { const { s, y } = head('Les origines de la colonisation', ['Causes internes à Madagascar, causes externes en Europe.']);
  const top = y + 18;
  let b = txt(500, top, 'CAUSES INTERNES', 24, GREEN, 'bold', 'middle');
  const internes = ['la charte Lambert (1855)', 'l’héritage de Jean Laborde', 'la guerre franco-hova de 1895', 'l’abdication de Ranavalona III : fin de la royauté'];
  internes.forEach((t, i) => { b += box(130, top + 18 + i * 66, 740, 50, t, GREENL, GREEN, 21); });
  const y2 = top + 18 + 4 * 66 + 28;
  b += txt(500, y2, 'CAUSES EXTERNES', 24, PINK2, 'bold', 'middle');
  const externes = ['les rivalités coloniales européennes', 'conférence de Berlin (1885) et convention de Zanzibar', 'la révolution industrielle : matières premières, marchés', 'la « mission civilisatrice » de Jules Ferry'];
  externes.forEach((t, i) => { b += box(130, y2 + 18 + i * 66, 740, 50, t, '#FDE7EF', PINK2, 21); });
  const yf = y2 + 18 + 4 * 66 + 18;
  b += txt(500, yf, '1896 : Madagascar devient colonie française', 23, BLUE, 'bold', 'middle');
  return svg(1000, yf + 32, s + b); })();
// S2 — pyramide administrative
figs.u6f2 = (() => { const { s, y } = head('L’administration coloniale', ['Une pyramide du gouverneur général au canton.']);
  const top = y + 15;
  const niveaux = [['GOUVERNEUR GÉNÉRAL', 'tête de la colonie', '#FDE7EF', PINK2],
    ['CHEF DE PROVINCE', 'commande une province', BLUEL, BLUE],
    ['CHEF DE DISTRICT', 'commande un district', GREENL, GREEN],
    ['CHEF DE CANTON', 'échelon de base', BLUEL, BLUE]];
  let b = '';
  niveaux.forEach(([n, d, f, c], i) => {
    const Y = top + i * 92;
    b += box(150 + i * 40, Y, 700 - i * 80, 58, n, f, c, 22);
    if (i < 3) b += arrow(500, Y + 58, 500, Y + 92, OCRE, 4);
  });
  const y2 = top + 4 * 92 + 4;
  b += txt(500, y2, 'aidés d’AUXILIAIRES malgaches (interprètes, commis, gardes)', 21, '#333', 'normal', 'middle');
  const y3 = y2 + 30;
  b += txt(500, y3, 'Les instruments de l’exploitation :', 23, OCRE, 'bold', 'middle');
  const inst = ['code de l’indigénat : lois à part pour les « indigènes »', 'pacte colonial : la colonie au service de la métropole', 'impôts et prestations obligatoires'];
  inst.forEach((t, i) => { b += box(130, y3 + 18 + i * 66, 740, 50, t, GREENL, GREEN, 20); });
  return svg(1000, y3 + 18 + 3 * 66 + 16, s + b); })();
// S3 — le système économique colonial
figs.u6f3 = (() => { const { s, y } = head('Le système économique colonial', ['Économie de traite, travaux forcés, grandes compagnies.']);
  const top = y + 18;
  let b = txt(500, top, 'L’ÉCONOMIE DE TRAITE', 24, GREEN, 'bold', 'middle');
  b += box(110, top + 20, 780, 52, 'exporte : matières premières (café, vanille) à bas prix', GREENL, GREEN, 20);
  b += box(110, top + 20 + 66, 780, 52, 'importe : produits fabriqués français au prix fort', '#FDE7EF', PINK2, 20);
  const y2 = top + 20 + 66 + 52 + 34;
  b += txt(500, y2, 'LE TRAVAIL FORCÉ', 24, PINK2, 'bold', 'middle');
  b += box(130, y2 + 18, 740, 52, 'corvées : routes, chemin de fer, portage', BLUEL, BLUE, 21);
  b += box(130, y2 + 18 + 66, 740, 52, 'SMOTIG (1926) : service de travail obligatoire', BLUEL, BLUE, 21);
  const y3 = y2 + 18 + 2 * 66 + 24;
  b += txt(500, y3, 'LES GRANDES COMPAGNIES', 24, BLUE, 'bold', 'middle');
  b += box(130, y3 + 18, 740, 52, 'compagnies havraise, lyonnaise, marseillaise', GREENL, GREEN, 21);
  b += txt(500, y3 + 18 + 52 + 34, 'elles contrôlent le commerce et rapatrient les profits en France', 21, OCRE, 'bold', 'middle');
  return svg(1000, y3 + 18 + 52 + 64, s + b); })();
// S4 — tableau des mouvements nationalistes
figs.u6f4 = (() => { const { s, y } = head('Les mouvements nationalistes', ['Trois générations de lutte, trois objectifs.']);
  const top = y + 15;
  const data = [['Mouvement', 'Dates', 'Objectif'],
    ['Menalamba', '1895 – 1898', 'repousser les étrangers'],
    ['Sadiavahy', '1904-05 ; 1914-17', 'repousser les étrangers'],
    ['VVS', '1913 – 1915', 'égalité de droits'],
    ['J. Ralaimongo', '1919 – 1930', 'égalité de droits'],
    ['JINA, PANAMA', '1947', 'émancipation'],
    ['MDRM, PADESM', 'années 1940', 'émancipation']];
  let b = tableEl(45, top, [280, 290, 340], 54, data);
  b += txt(500, top + 7 * 54 + 40, '29 mars 1947 : la grande insurrection, durement réprimée', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 7 * 54 + 72, s + b); })();
// S5 — frise vers l'indépendance
figs.u6f5 = (() => { const { s, y } = head('La marche vers l’indépendance', ['De 1947 au 26 juin 1960 : les étapes.']);
  const top = y + 12;
  const ev = [['après 1947', 'répression, mais l’idée d’indépendance grandit', '#FDE7EF', PINK2],
    ['1956', 'Loi-cadre : gouvernement local malgache', BLUEL, BLUE],
    ['1958', 'référendum : la République malgache est proclamée', GREENL, GREEN],
    ['26 juin 1960', 'INDÉPENDANCE de Madagascar', '#FDE7EF', PINK2]];
  let b = '';
  ev.forEach(([d, t, f, c], i) => {
    const Y = top + i * 84;
    b += box(70, Y, 240, 58, d, f, c, 22);
    b += arrow(310, Y + 29, 348, Y + 29, OCRE, 3.5);
    b += box(353, Y, 580, 58, t, '#FFFFFF', c, 20);
    if (i < 3) b += arrow(190, Y + 58, 190, Y + 84, OCRE, 3);
  });
  b += txt(500, top + 4 * 84 + 18, 'soixante-quatre ans après 1896, Madagascar redevient souverain', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 84 + 50, s + b); })();

const S = [
  {
    t: 'Les origines de la colonisation', comp: 'Madagascar colonie française', theme: 'Causes internes et externes de la colonisation de 1896',
    goal: 'expliquer les origines internes et externes de la colonisation de Madagascar',
    mat: 'Frise, carte, documents (charte Lambert, convention de Zanzibar)',
    revQ: 'Qui gouverne réellement le royaume après 1863, et par quel mécanisme ?',
    revRA: 'Le Premier ministre hova (Rainilaiarivony), allié par mariage aux reines successives, avec l’oligarchie merina.',
    situation: 'Le 30 septembre 1895, les canons français tonnent sur Antananarivo ; le lendemain, la reine signe la reddition. L’année suivante, Madagascar est déclaré colonie française et la royauté abolie. Comment un royaume reconnu, doté d’une armée et d’écoles, a-t-il pu tomber ? La réponse se trouve à la fois dans l’île — et à des milliers de kilomètres d’elle.',
    def: 'La colonisation de Madagascar (1896) a des origines internes : la charte Lambert (1855), par laquelle des privilèges économiques furent promis à un Français ; l’héritage de Jean Laborde, dont la succession servit de prétexte à la France ; la guerre franco-hova de 1895 ; puis l’abdication de Ranavalona III et la fin de la royauté. Et des origines externes : les rivalités coloniales, la conférence de Berlin (1885) et la convention de Zanzibar, la révolution industrielle, et la « mission civilisatrice » invoquée par Jules Ferry.',
    autrement: 'des querelles franco-malgaches anciennes (charte Lambert, héritage Laborde) fournissent les prétextes ; l’Europe industrielle en course aux colonies fournit le mobile ; la guerre de 1895 fournit le dénouement.',
    concept: 'Côté interne, tout un passif s’accumule. En 1855, le prince héritier Rakoto — futur Radama II — signe la charte Lambert : ce document promet au Français Joseph Lambert d’immenses privilèges économiques (terres, mines, travaux) ; annulée ensuite par le gouvernement malgache, la charte nourrit une querelle d’indemnités que Paris ressort à chaque crise. S’y ajoute l’héritage de Jean Laborde : cet industriel français, bâtisseur des ateliers de Mantasoa, meurt en 1878 ; le royaume refuse de reconnaître la transmission de ses terres à ses héritiers — car la terre malgache ne se vend pas aux étrangers ; la France en fait un casus belli. Deux guerres franco-hova s’ensuivent : celle de 1883-1885, qui impose un premier traité ambigu, puis celle de 1895 : une colonne française débarque à Majunga, remonte vers les Hautes Terres et prend Antananarivo le 30 septembre. En 1896, la France proclame l’annexion : Madagascar devient colonie ; en 1897, Ranavalona III est contrainte à l’exil — c’est la fin de la royauté. Côté externe, les forces profondes : la révolution industrielle réclame matières premières et débouchés ; les rivalités entre puissances font des colonies une question de rang ; la conférence de Berlin (1885) a codifié le partage, et la convention de Zanzibar a livré Madagascar à l’influence française avec l’accord anglais ; enfin l’idéologie — la « mission civilisatrice » théorisée par Jules Ferry — habille la conquête en devoir moral. Prétextes internes, mobiles externes : quand les deux se rejoignent, le sort de l’île est scellé.',
    synthese: 'Origines internes : charte Lambert (1855), héritage de Jean Laborde, guerre franco-hova de 1895, abdication de Ranavalona III et fin de la royauté. Origines externes : rivalités coloniales, Berlin 1885 et convention de Zanzibar, révolution industrielle, « mission civilisatrice » de Jules Ferry. Résultat : 1896, Madagascar colonie française.',
    method: ['Classer les causes en deux colonnes : internes (dans l’île) et externes (en Europe).', 'Dater la chaîne finale : guerre 1895 → annexion 1896 → exil de la reine 1897.', 'Montrer que les causes internes sont des prétextes et les externes des mobiles profonds.'],
    exemple: 'Le schéma de la conquête : la France invoque la charte Lambert et l’héritage Laborde (prétextes), forte de l’accord anglais de la convention de Zanzibar (feu vert), poussée par son industrie et son prestige (mobiles) — et l’expédition de 1895 conclut par la force.',
    erreur: 'Dater la colonisation de 1895 : cette année-là a lieu la guerre et la prise d’Antananarivo, mais c’est en 1896 que Madagascar est officiellement annexé et déclaré colonie française, et la royauté ne disparaît qu’avec l’exil de la reine en 1897. Trois dates, trois faits distincts.',
    saistu: 'Jean Laborde est un personnage paradoxal : naufragé recueilli en 1831, il bâtit pour Ranavalona I le complexe industriel de Mantasoa — canons, verre, savon, tout y était fabriqué par des milliers d’ouvriers malgaches ! Ami du pouvoir puis expulsé, revenu comme consul de France, c’est sa succession qui servira de prétexte à la conquête. L’homme qui avait industrialisé le royaume fournit, malgré lui, l’argument pour l’abattre.',
    exos: ['Classe en cause interne ou externe : a) la révolution industrielle ; b) la charte Lambert ; d) la convention de Zanzibar ; e) l’héritage de Jean Laborde.',
      'Les dates. a) Quand la charte Lambert est-elle signée ? b) Quand a lieu la guerre franco-hova décisive ? d) Quand Madagascar devient-il colonie ? e) Que se passe-t-il pour Ranavalona III ?',
      'Réfléchir. a) Pourquoi la charte Lambert est-elle un prétexte commode ? b) Pourquoi l’héritage Laborde pose-t-il problème ? d) Que permet la convention de Zanzibar ? e) Qu’est-ce que la « mission civilisatrice » et qui l’invoque ?'],
    corr: ['a) externe ; b) interne ; d) externe ; e) interne.',
      'a) en 1855 ; b) en 1895 ; d) en 1896 ; e) elle abdique puis est exilée (1897) : c’est la fin de la royauté.',
      'a) parce qu’annulée par le royaume, elle permet à la France de réclamer sans fin des indemnités ; b) parce que le royaume refuse la transmission de terres malgaches à des héritiers étrangers ; d) elle assure à la France que le Royaume-Uni n’interviendra pas ; e) l’idée que l’Europe aurait le devoir de « civiliser » les autres peuples — invoquée par Jules Ferry pour justifier la colonisation.'],
    fig: 'u6f1'
  },
  {
    t: 'L’administration coloniale', comp: 'Madagascar colonie française', theme: 'La pyramide administrative et les instruments de l’exploitation',
    goal: 'décrire l’organisation administrative de la colonie et les instruments de l’exploitation : indigénat, pacte colonial, impôts',
    mat: 'Schéma de la pyramide administrative, textes, documents',
    revQ: 'Cite deux causes internes et deux causes externes de la colonisation.',
    revRA: 'Internes : charte Lambert, héritage Laborde, guerre de 1895 ; externes : Berlin 1885, convention de Zanzibar, révolution industrielle, mission civilisatrice (deux de chaque).',
    situation: 'Du jour au lendemain, les Malgaches changent de maîtres : plus de reine, plus de Premier ministre — un gouverneur général français règne depuis Antananarivo, et ses ordres descendent jusqu’au moindre village par une chaîne de fonctionnaires. Pour le paysan, la colonisation a trois visages très concrets : le chef de canton, l’impôt et la corvée. Comment la colonie était-elle administrée ?',
    def: 'La colonie est dirigée par un gouverneur général, dont l’autorité descend par échelons : chef de province, chef de district, chef de canton, aidés d’auxiliaires malgaches (interprètes, commis, gardes). L’exploitation repose sur le code de l’indigénat — un régime de lois spécial pour les colonisés —, le pacte colonial — la colonie ne produit et ne commerce que pour la métropole — et les impôts et prestations obligatoires.',
    autrement: 'un seul chef français au sommet, des chefs de province, de district et de canton en dessous ; et pour le peuple : des lois à part, un commerce verrouillé au profit de la France, des impôts et des journées de travail dues.',
    concept: 'La pyramide d’abord. Le gouverneur général — le premier fut Gallieni (1896-1905) — concentre tous les pouvoirs civils et militaires ; il découpe l’île en provinces, confiées à des chefs de province ; chaque province se divise en districts, chaque district en cantons. Les fonctionnaires français étant peu nombreux, l’administration recrute des auxiliaires malgaches — interprètes, commis, gardes, instituteurs — qui font tourner la machine au quotidien : la colonisation gouverne aussi par des mains malgaches. Les instruments ensuite. Le code de l’indigénat sépare juridiquement les habitants : les « citoyens » français relèvent du droit commun ; les « indigènes » — l’immense majorité des Malgaches — relèvent d’un régime spécial où l’administrateur peut punir sans tribunal : amendes, emprisonnement, travail forcé pour des fautes aussi vagues que le « manque de respect ». Le pacte colonial verrouille l’économie : la colonie doit fournir ses matières premières à la métropole, acheter les produits de la métropole, et ne pas développer d’industrie concurrente — Madagascar produit pour la France, pas pour lui-même. Les impôts et prestations complètent le dispositif : impôt de capitation payé par chaque homme adulte — en argent, ce qui force à travailler pour les colons —, impôts sur le bétail et les rizières, et prestations : journées de travail obligatoires et gratuites sur les routes et les chantiers. Ce triple système — droit inégal, économie captive, travail contraint — définit l’exploitation coloniale que la séance suivante détaillera.',
    synthese: 'Pyramide : gouverneur général → chef de province → chef de district → chef de canton + auxiliaires malgaches. Instruments : code de l’indigénat (lois à part, punitions sans tribunal), pacte colonial (production réservée à la métropole), impôts (capitation, bétail) et prestations (travail obligatoire).',
    method: ['Réciter la pyramide en quatre échelons plus les auxiliaires.', 'Définir chaque instrument : indigénat, pacte colonial, impôts-prestations.', 'Montrer la logique d’ensemble : administrer peu nombreux, exploiter efficacement.'],
    exemple: 'Un chef de famille betsileo vers 1910 : il paie la capitation pour lui et ses fils, l’impôt sur ses deux zébus et sa rizière ; il doit dix jours de prestations sur la route du district ; s’il proteste, le chef de district peut le punir sans jugement, au titre de l’indigénat. Tout le système tient dans cette vie-là.',
    erreur: 'Croire que l’indigénat était un simple règlement administratif : c’était un régime juridique d’exception qui plaçait des millions de personnes hors du droit commun, punissables sans procès. Sa suppression (1946) fut l’une des premières revendications des mouvements malgaches — preuve qu’il était le symbole même de l’inégalité coloniale.',
    saistu: 'L’impôt de capitation avait un but caché : comme il fallait le payer en francs — monnaie que le paysan ne possédait pas —, chacun était forcé de vendre sa récolte aux compagnies ou de louer ses bras aux colons pour s’en procurer. L’impôt ne servait pas qu’à remplir les caisses : il fabriquait de la main-d’œuvre. Les administrateurs eux-mêmes l’appelaient « l’impôt moralisateur »…',
    exos: ['La pyramide. a) Qui dirige la colonie ? b) Cite les trois échelons sous lui. d) Qui sont les auxiliaires ? e) Pourquoi l’administration en a-t-elle besoin ?',
      'Les instruments. a) Définis le code de l’indigénat. b) Définis le pacte colonial. d) Cite deux impôts. e) Que sont les prestations ?',
      'Réfléchir. a) Pourquoi la capitation se paie-t-elle en argent ? b) Que peut faire un administrateur au titre de l’indigénat ? d) Pourquoi la colonie n’a-t-elle pas d’industrie ? e) Montre que le système forme un tout cohérent.'],
    corr: ['a) le gouverneur général ; b) chef de province, chef de district, chef de canton ; d) des Malgaches employés par l’administration : interprètes, commis, gardes ; e) parce que les fonctionnaires français sont peu nombreux.',
      'a) le régime de lois spécial appliqué aux « indigènes », avec punitions sans tribunal ; b) la règle selon laquelle la colonie produit pour la métropole et achète ses produits ; d) la capitation et l’impôt sur le bétail (ou les rizières) ; e) des journées de travail obligatoires et gratuites.',
      'a) pour forcer les paysans à travailler pour les colons ou à vendre aux compagnies afin d’obtenir des francs ; b) punir sans jugement : amende, prison, travail forcé ; d) le pacte colonial interdit toute industrie concurrente de la métropole ; e) l’indigénat soumet les personnes, le pacte verrouille l’économie, l’impôt contraint au travail : les trois instruments se renforcent.'],
    fig: 'u6f2'
  },
  {
    t: 'Le système économique colonial', comp: 'Madagascar colonie française', theme: 'Économie de traite, travaux forcés et grandes compagnies',
    goal: 'analyser le système économique colonial : économie de traite, corvées et SMOTIG, grandes compagnies',
    mat: 'Schéma économique, caricature d’époque à étudier, documents',
    revQ: 'Récite la pyramide administrative et les trois instruments de l’exploitation.',
    revRA: 'Gouverneur général → province → district → canton + auxiliaires ; indigénat, pacte colonial, impôts et prestations.',
    situation: 'Sur le port de Toamasina, vers 1930, les sacs de café et de vanille s’empilent vers la France ; dans l’autre sens débarquent tissus, outils et conserves françaises. Entre les deux, trois grandes compagnies encaissent — et sur les routes de l’île, des milliers d’hommes réquisitionnés cassent des pierres. Qui profite réellement de l’économie coloniale ? Une caricature d’époque nous aidera à répondre.',
    def: 'L’économie coloniale est une économie de traite : la colonie exporte des matières premières à bas prix et importe des produits fabriqués au prix fort. Elle repose sur le travail contraint : corvées puis SMOTIG (Service de la Main-d’Œuvre pour les Travaux d’Intérêt Général, 1926), et elle est dominée par les grandes compagnies de commerce — havraise, lyonnaise et marseillaise — qui contrôlent les échanges et rapatrient leurs profits en France.',
    autrement: 'Madagascar vend brut et pas cher (café, vanille), achète fabriqué et cher ; les routes et chemins de fer se construisent au travail forcé ; et trois compagnies françaises tiennent tout le commerce.',
    concept: 'L’économie de traite — à ne pas confondre avec la traite des esclaves de l’unité II — est un système d’échange inégal : la colonie est cantonnée aux produits bruts (café, vanille, girofle, graphite, viande) vendus à bas prix, et doit acheter à la métropole ses produits manufacturés au prix fort ; la différence enrichit la métropole, et la colonie ne peut jamais s’industrialiser — le pacte colonial y veille. Pour équiper le pays au moindre coût, l’administration recourt au travail contraint : d’abord les corvées et prestations — journées dues par chaque homme pour les routes, le portage, le chemin de fer Tananarive-Côte Est ; puis, en 1926, le SMOTIG institutionnalise le système : les jeunes hommes non appelés au service militaire doivent des années de travail sur les grands chantiers, loin de chez eux, pour un salaire dérisoire — les contemporains y ont vu un travail forcé déguisé, et il fut dénoncé jusqu’à la Société des Nations. Au sommet du système trônent les grandes compagnies de commerce — la Compagnie havraise, la Compagnie lyonnaise, la Compagnie marseillaise — dont les noms disent les ports et villes de France où partent les profits : elles achètent aux producteurs malgaches aux prix qu’elles fixent, vendent les importations aux prix qu’elles fixent, et possèdent plantations, comptoirs et flottilles. Les caricatures de l’époque résument le circuit d’un trait : un colon ventru assis sur des sacs de café, porté par un paysan malgache courbé — l’image dit, mieux qu’un long discours, qui travaille et qui profite. Analyser une telle caricature, c’est exercer ton esprit critique : identifier l’auteur, la date, les symboles, le message — et le confronter aux faits.',
    synthese: 'Économie de traite : exportations brutes à bas prix contre importations chères — échange inégal. Travail contraint : corvées, portage, puis SMOTIG (1926). Grandes compagnies havraise, lyonnaise, marseillaise : contrôle du commerce, profits rapatriés. La caricature d’époque révèle le système d’un seul regard.',
    method: ['Définir l’économie de traite par l’échange inégal brut/fabriqué.', 'Dater et expliquer le SMOTIG (1926) et le distinguer des simples corvées.', 'Analyser une caricature : auteur, date, symboles, message, confrontation aux faits.'],
    exemple: 'Lecture d’une caricature : un planteur en casque colonial se prélasse sur des sacs marqués « café » portés par un travailleur épuisé. Symboles : le casque = le colon ; les sacs = les richesses exportées ; la posture = qui travaille, qui profite. Message : l’économie coloniale repose sur le travail malgache au bénéfice d’autrui. Les faits confirment : salaires dérisoires, profits rapatriés.',
    erreur: 'Confondre « économie de traite » et « traite des esclaves » : le mot « traite » désigne ici le commerce d’échange inégal entre colonie et métropole (produits bruts contre produits fabriqués), pas la vente d’êtres humains. Deux réalités différentes — deux injustices différentes — que l’historien distingue soigneusement.',
    saistu: 'Le chemin de fer Tananarive-Côte Est (1901-1913) a coûté des milliers de vies parmi les travailleurs réquisitionnés — maladies, accidents, épuisement. Et le SMOTIG fit scandale jusqu’à Genève : à la Société des Nations, les délégués durent répondre aux accusations de travail forcé déguisé. Il fut finalement supprimé en 1936 — dix ans de « service » qui ont marqué toute une génération.',
    exos: ['L’économie de traite. a) Que vend la colonie, et à quel prix ? b) Qu’achète-t-elle, et à quel prix ? d) Qui garantit ce verrouillage ? e) Pourquoi la colonie ne s’industrialise-t-elle pas ?',
      'Le travail contraint. a) Cite deux formes de corvées. b) Que signifie SMOTIG ? d) En quelle année est-il créé ? e) Pourquoi fut-il dénoncé ?',
      'Les compagnies et la caricature. a) Nomme les trois grandes compagnies. b) Que contrôlent-elles ? d) Où partent leurs profits ? e) Décris les étapes de l’analyse d’une caricature.'],
    corr: ['a) des matières premières (café, vanille, girofle…) à bas prix ; b) des produits fabriqués français, au prix fort ; d) le pacte colonial ; e) parce que toute industrie concurrente de la métropole est interdite.',
      'a) routes, portage, chemin de fer (deux suffisent) ; b) Service de la Main-d’Œuvre pour les Travaux d’Intérêt Général ; d) en 1926 ; e) parce que c’était un travail forcé déguisé, dénoncé jusqu’à la Société des Nations.',
      'a) les compagnies havraise, lyonnaise et marseillaise ; b) le commerce d’import-export, les prix, des plantations et comptoirs ; d) en France ; e) identifier l’auteur et la date, repérer les symboles, dégager le message, le confronter aux faits.'],
    fig: 'u6f3'
  },
  {
    t: 'Les mouvements nationalistes', comp: 'Madagascar colonie française', theme: 'De la résistance armée à la revendication d’émancipation',
    goal: 'présenter les mouvements nationalistes malgaches et leurs objectifs successifs',
    mat: 'Tableau des mouvements, frise, documents',
    revQ: 'Définis l’économie de traite et le SMOTIG.',
    revRA: 'Échange inégal : matières premières à bas prix contre produits fabriqués chers ; SMOTIG (1926) : service de travail obligatoire sur les grands chantiers.',
    situation: 'Dès les premiers mois de la colonisation, des hommes prennent le maquis dans les campagnes de l’Imerina, drapés dans leurs lamba rouges. Vingt ans plus tard, de jeunes étudiants fondent une société secrète. En 1947, l’île entière s’embrase. La domination coloniale n’a jamais été acceptée : trois générations de mouvements se succèdent — avec des objectifs qui évoluent. Lesquels ?',
    def: 'Les mouvements nationalistes malgaches se succèdent en trois vagues. Pour repousser la présence étrangère : les Menalamba (fin 1895-1898) et les Sadiavahy (1904-1905 et 1914-1917). Pour l’égalité de droits : la VVS (1913-1915) et le mouvement de Jean Ralaimongo (1919-1930). Pour l’émancipation : les mouvements de 1947 — JINA, PANAMA — et les partis MDRM et PADESM.',
    autrement: 'd’abord chasser l’occupant par les armes (Menalamba, Sadiavahy), puis réclamer les mêmes droits que les Français (VVS, Ralaimongo), enfin exiger l’émancipation (JINA, PANAMA, MDRM, PADESM — et l’insurrection de 1947).',
    concept: 'Première vague : repousser l’étranger. Dès fin 1895, avant même l’annexion, l’insurrection des Menalamba — « les lamba rouges », de la latérite dont ils teignaient leurs vêtements — embrase l’Imerina : paysans et notables refusent la domination étrangère et ce qu’elle apporte ; la répression de Gallieni en vient à bout vers 1898. Dans le sud et l’ouest, les Sadiavahy reprennent le flambeau en 1904-1905, puis en 1914-1917 : mêmes causes — impôts, réquisitions, présence étrangère —, même objectif : repousser l’occupant. Deuxième vague : l’égalité par le droit. En 1913, de jeunes intellectuels — étudiants en médecine, pasteurs, instituteurs — fondent à Antananarivo la VVS (Vy Vato Sakelika : « Fer, Pierre, Ramification »), société secrète qui veut relever la nation par l’éducation et obtenir l’égalité de droits ; découverte en 1915, elle est brisée par des condamnations féroces. L’idée survit : à partir de 1919, Jean Ralaimongo — instituteur, ancien combattant de 14-18 — mène campagne par les journaux et les pétitions : citoyenneté française pour les Malgaches, fin de l’indigénat, égalité devant la loi ; son mouvement anime les années 1919-1930. Troisième vague : l’émancipation. Après la Seconde Guerre mondiale, l’espoir change d’échelle : le MDRM (Mouvement Démocratique de la Rénovation Malgache) réclame l’émancipation dans la légalité, tandis que le PADESM défend les « déshérités » ; des sociétés secrètes — JINA, PANAMA — préparent l’action directe. Le 29 mars 1947, l’insurrection éclate dans l’est et le sud-est : la répression est terrible — des dizaines de milliers de morts, le MDRM dissous, ses députés condamnés. Mais 1947 devient la grande date-mémoire du nationalisme : l’indépendance n’est plus qu’une question de temps.',
    synthese: 'Trois vagues : repousser la présence étrangère — Menalamba (fin 1895-1898), Sadiavahy (1904-05, 1914-17) ; égalité de droits — VVS (1913-1915), Jean Ralaimongo (1919-1930) ; émancipation — JINA, PANAMA, MDRM, PADESM, et l’insurrection du 29 mars 1947, durement réprimée.',
    method: ['Classer chaque mouvement dans sa vague : repousser / égalité / émancipation.', 'Associer chaque sigle à ses dates et à sa nature (insurrection, société secrète, parti).', 'Montrer l’évolution des moyens : armes → journaux et pétitions → partis et insurrection.'],
    exemple: 'Trois hommes, trois époques : un paysan menalamba de 1896 combat pour chasser l’étranger ; un étudiant de la VVS en 1913 écrit pour l’égalité ; un militant du MDRM en 1946 fait campagne pour l’émancipation. Le but grandit à chaque génération — jusqu’à l’indépendance.',
    erreur: 'Croire que la VVS était un mouvement armé : c’était une société d’intellectuels — médecins, pasteurs, étudiants — dont les armes étaient l’éducation et les idées. La condamner à des peines de bagne, comme le fit l’administration en 1915, révéla précisément la peur du colonisateur devant la pensée malgache.',
    saistu: 'Parmi les condamnés de la VVS figurait un jeune étudiant en médecine nommé Joseph Raseta — on le retrouve trente ans plus tard député et fondateur du MDRM, condamné une seconde fois après 1947 ! Une même vie traversée par deux générations de lutte : rien ne résume mieux la continuité du nationalisme malgache, de la VVS à l’indépendance.',
    exos: ['Associe chaque mouvement à sa vague : a) VVS ; b) Menalamba ; d) MDRM ; e) Sadiavahy.',
      'Dates et faits. a) Quand les Menalamba se soulèvent-ils ? b) Que signifie leur nom ? d) Quand la VVS est-elle démantelée ? e) Que réclame Jean Ralaimongo, et par quels moyens ?',
      '1947. a) Quelle date exacte marque l’insurrection ? b) Cite les deux sociétés secrètes. d) Quels sont les deux partis de l’époque ? e) Quelles furent les conséquences de l’insurrection ?'],
    corr: ['a) égalité de droits ; b) repousser la présence étrangère ; d) émancipation ; e) repousser la présence étrangère.',
      'a) de fin 1895 à 1898 ; b) « les lamba rouges », teints à la latérite ; d) en 1915 ; e) l’égalité de droits et la citoyenneté, par les journaux et les pétitions (1919-1930).',
      'a) le 29 mars 1947 ; b) JINA et PANAMA ; d) le MDRM et le PADESM ; e) une répression terrible (des dizaines de milliers de morts), la dissolution du MDRM — mais 1947 devient la grande date-mémoire du nationalisme.'],
    fig: 'u6f4'
  },
  {
    t: 'La marche vers l’indépendance', comp: 'Madagascar colonie française', theme: 'De 1947 au 26 juin 1960',
    goal: 'expliquer les étapes de la marche vers l’indépendance : Loi-cadre, référendum, indépendance',
    mat: 'Frise 1947-1960, documents, photographies d’époque',
    revQ: 'Cite les trois vagues de mouvements nationalistes avec un exemple chacune.',
    revRA: 'Repousser : Menalamba, Sadiavahy ; égalité : VVS, Ralaimongo ; émancipation : JINA, PANAMA, MDRM, PADESM.',
    situation: 'Le 26 juin 1960, à minuit, le drapeau blanc-rouge-vert monte dans la nuit d’Antananarivo : Madagascar est indépendant. Treize ans plus tôt, l’île sortait meurtrie de la répression de 1947. Comment est-on passé, en une décennie, du deuil à la souveraineté retrouvée ? Par une marche en trois étapes — que le monde entier accomplissait en même temps.',
    def: 'Après 1947, la revendication d’indépendance s’impose peu à peu. La Loi-cadre de 1956 accorde une large autonomie interne : suffrage universel et gouvernement local malgache. Au référendum de 1958, Madagascar choisit le statut de République autonome au sein de la Communauté française : la République malgache est proclamée le 14 octobre 1958. Enfin, le 26 juin 1960, Madagascar accède à l’indépendance.',
    autrement: 'trois marches : 1956, les Malgaches gouvernent chez eux ; 1958, la République malgache est proclamée ; 26 juin 1960, l’indépendance complète.',
    concept: 'Le contexte d’abord : après 1947, la répression a brisé les partis, mais rien n’arrête le mouvement du monde — l’Inde est indépendante (1947), la guerre d’Indochine s’achève (1954), l’Afrique s’éveille ; la France comprend qu’il faut réformer avant de tout perdre. Première étape : la Loi-cadre de 1956 (dite loi Defferre). Elle institue le suffrage universel — tous les adultes votent, et non plus une minorité — et crée un conseil de gouvernement malgache : pour la première fois depuis 1896, des ministres malgaches administrent leur pays ; l’autonomie interne est en marche, et les partis renaissent. Deuxième étape : le référendum du 28 septembre 1958. Le général de Gaulle propose aux colonies une Communauté française rénovée : voter « oui », c’est devenir République autonome dans la Communauté ; voter « non », c’est l’indépendance immédiate et la rupture. Madagascar vote majoritairement oui, et le 14 octobre 1958, la République malgache est proclamée — un État, un gouvernement, une assemblée, sous réserve des domaines gardés par Paris (défense, monnaie, diplomatie). Troisième étape : l’indépendance. La Communauté se révèle vite une transition : dès 1959, la nouvelle république négocie le transfert des dernières compétences ; les accords sont signés en avril 1960, et le 26 juin 1960, l’indépendance est proclamée — Philibert Tsiranana devient le premier président de la République malgache. Soixante-quatre ans après l’annexion de 1896, la souveraineté revient — par les urnes et la négociation, portée par un demi-siècle de luttes : des Menalamba aux députés de 1946, chaque génération a préparé ce matin du 26 juin.',
    synthese: 'Après 1947 : l’idée d’indépendance s’impose, le monde décolonise. 1956 : Loi-cadre — suffrage universel, gouvernement local malgache. 28 septembre 1958 : référendum ; 14 octobre 1958 : proclamation de la République malgache dans la Communauté. 26 juin 1960 : indépendance ; Tsiranana premier président.',
    method: ['Réciter la frise : 1947 → 1956 → 1958 → 26 juin 1960.', 'Expliquer l’apport de chaque étape : autonomie interne, République, souveraineté complète.', 'Replacer Madagascar dans la décolonisation mondiale (Inde 1947, Afrique 1960).'],
    exemple: '1960, « l’année de l’Afrique » : dix-sept pays africains deviennent indépendants cette année-là — le Sénégal, la Côte d’Ivoire, le Congo… et Madagascar le 26 juin. La marche malgache s’inscrit dans une vague mondiale : la décolonisation.',
    erreur: 'Croire que l’indépendance a été « donnée » sans lutte : si la dernière étape fut négociée et pacifique, elle n’aurait jamais eu lieu sans les générations de résistants et de militants — des Menalamba à 1947. La négociation de 1960 récolte ce que un demi-siècle de luttes a semé.',
    saistu: 'Le 26 juin est resté la fête nationale de Madagascar — mais sais-tu que la date fut choisie aussi pour sa symbolique ? Les accords étaient prêts dès avril 1960 ; on retint la fin juin, à la veille des grandes vacances, pour que tout le pays — écoliers compris ! — puisse fêter l’événement. Depuis, chaque 26 juin, lampions, hymne et drapeaux font revivre le premier matin de la souveraineté retrouvée.',
    exos: ['La frise. a) Que change la Loi-cadre de 1956 ? b) Que propose le référendum de 1958 ? d) Quand la République malgache est-elle proclamée ? e) Quand l’indépendance est-elle acquise ?',
      'Comprendre. a) Pourquoi la France réforme-t-elle après 1947 ? b) Que gardait Paris après 1958 ? d) Qui devient premier président ? e) Que signifie « autonomie interne » ?',
      'Réfléchir. a) Pourquoi 1960 est-elle « l’année de l’Afrique » ? b) Montre que l’indépendance fut préparée par les luttes antérieures. d) Compare les moyens de 1947 et de 1958-1960. e) Pourquoi le 26 juin est-il fête nationale ?'],
    corr: ['a) suffrage universel et conseil de gouvernement malgache : l’autonomie interne ; b) devenir République autonome dans la Communauté française (oui) ou rompre immédiatement (non) ; d) le 14 octobre 1958 ; e) le 26 juin 1960.',
      'a) parce que la décolonisation gagne le monde entier et qu’elle veut éviter de nouvelles guerres ; b) la défense, la monnaie, la diplomatie ; d) Philibert Tsiranana ; e) gouverner ses affaires intérieures, la métropole gardant les domaines régaliens.',
      'a) dix-sept pays africains y deviennent indépendants, dont Madagascar ; b) sans les Menalamba, la VVS, Ralaimongo et 1947, la France n’aurait jamais négocié : chaque génération a imposé l’étape suivante ; d) 1947 : l’insurrection armée ; 1958-1960 : les urnes et la négociation ; e) parce que c’est le jour de l’indépendance retrouvée, le 26 juin 1960.'],
    fig: 'u6f5'
  }
];

const unit6 = {
  no: 6, roman: 'VI', name: 'Madagascar colonie française',
  rag: 'porter un regard critique sur la réalité sociale à Madagascar en exploitant les traces du passé à partir de sources historiques.',
  valeurs: 'responsabilité et engagement, fierté d’être malgache',
  sessions: S,
  revision: {
    table: [
      ['Origines de la colonisation', 'Internes : charte Lambert (1855), héritage Laborde, guerre 1895, abdication ; externes : Zanzibar, Berlin, industrie, « mission civilisatrice »', 'Classer causes internes/externes'],
      ['Administration', 'Gouverneur général → province → district → canton + auxiliaires', 'Réciter la pyramide'],
      ['Exploitation', 'Code de l’indigénat, pacte colonial, impôts et prestations', 'Définir les trois instruments'],
      ['Économie coloniale', 'Économie de traite ; corvées et SMOTIG (1926) ; compagnies havraise, lyonnaise, marseillaise', 'Analyser le système (et une caricature)'],
      ['Mouvements nationalistes', 'Menalamba, Sadiavahy (repousser) ; VVS, Ralaimongo (égalité) ; JINA, PANAMA, MDRM, PADESM (émancipation)', 'Classer les trois vagues'],
      ['Vers l’indépendance', 'Après 1947 ; Loi-cadre 1956 ; référendum et République 1958 ; indépendance 26 juin 1960', 'Réciter la frise finale']
    ],
    questions: [
      'Cite trois causes internes et trois causes externes de la colonisation.',
      'Décris la pyramide administrative et définis le code de l’indigénat.',
      'Explique l’économie de traite et le rôle des grandes compagnies.',
      'Classe les mouvements nationalistes en trois vagues avec leurs dates.',
      'Donne les quatre étapes de la marche vers l’indépendance.'
    ],
    answers: [
      'Internes : charte Lambert (1855), héritage de Jean Laborde, guerre franco-hova de 1895 (et l’abdication de Ranavalona III) ; externes : rivalités coloniales et convention de Zanzibar, conférence de Berlin (1885), révolution industrielle, « mission civilisatrice ».',
      'Gouverneur général → chef de province → chef de district → chef de canton, aidés d’auxiliaires malgaches ; l’indigénat est le régime de lois spécial des « indigènes », avec punitions sans tribunal.',
      'La colonie exporte des matières premières à bas prix et importe des produits fabriqués chers ; les compagnies havraise, lyonnaise et marseillaise contrôlent ce commerce et rapatrient les profits.',
      'Repousser la présence étrangère : Menalamba (fin 1895-1898), Sadiavahy (1904-05, 1914-17) ; égalité de droits : VVS (1913-1915), Ralaimongo (1919-1930) ; émancipation : JINA, PANAMA, MDRM, PADESM (1947).',
      'Après 1947, l’idée d’indépendance s’impose ; Loi-cadre 1956 (autonomie interne) ; référendum 1958 et proclamation de la République malgache ; indépendance le 26 juin 1960.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Date la colonisation de Madagascar. b) Qu’est-ce que la charte Lambert ? d) Définis le pacte colonial. e) Que signifie SMOTIG ?',
      'Les origines. a) Classe : héritage Laborde, Berlin 1885, guerre de 1895, mission civilisatrice en causes internes/externes. b) Que devient Ranavalona III ? d) Quel rôle joue la convention de Zanzibar ? e) Pourquoi la révolution industrielle pousse-t-elle à coloniser ?',
      'Administration et économie. a) Récite la pyramide administrative. b) Cite les trois instruments de l’exploitation. d) Nomme les trois grandes compagnies. e) Explique l’échange inégal de l’économie de traite.',
      'Les nationalistes. a) Associe Menalamba, VVS, MDRM à leur vague. b) Donne les dates des Sadiavahy. d) Que voulait Jean Ralaimongo ? e) Que s’est-il passé le 29 mars 1947 ?',
      'L’indépendance. a) Que crée la Loi-cadre de 1956 ? b) Quel choix offre le référendum de 1958 ? d) Date la proclamation de la République malgache. e) Date l’indépendance et nomme le premier président.'
    ],
    corr: [
      'a) 1896 ; b) le document de 1855 promettant au Français Lambert d’immenses privilèges économiques — prétexte de querelles franco-malgaches ; d) la règle réservant la production et le commerce de la colonie à la métropole ; e) Service de la Main-d’Œuvre pour les Travaux d’Intérêt Général (1926). Un point par item.',
      'a) internes : héritage Laborde, guerre de 1895 ; externes : Berlin 1885, mission civilisatrice ; b) elle abdique et est exilée : fin de la royauté ; d) elle assure la neutralité anglaise : la France a les mains libres ; e) parce qu’il faut des matières premières et des marchés aux industries. Un point par item.',
      'a) gouverneur général → chef de province → chef de district → chef de canton + auxiliaires ; b) code de l’indigénat, pacte colonial, impôts et prestations ; d) havraise, lyonnaise, marseillaise ; e) la colonie vend brut à bas prix et achète fabriqué au prix fort : la différence enrichit la métropole. Un point par item.',
      'a) Menalamba : repousser l’étranger ; VVS : égalité de droits ; MDRM : émancipation ; b) 1904-1905 et 1914-1917 ; d) l’égalité de droits et la citoyenneté, par les journaux et les pétitions ; e) l’insurrection nationale éclate dans l’est et le sud-est, suivie d’une répression terrible. Un point par item.',
      'a) le suffrage universel et un conseil de gouvernement malgache (autonomie interne) ; b) République autonome dans la Communauté française, ou rupture immédiate ; d) le 14 octobre 1958 ; e) le 26 juin 1960 ; Philibert Tsiranana. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit6, bufs);
})();
