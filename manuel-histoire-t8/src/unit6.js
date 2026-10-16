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
    legende: 'Prétextes dans l’île, mobiles en Europe : quand les deux se rejoignent, le sort du royaume est scellé.',
    motsCles: ['charte Lambert 1855', 'Jean Laborde', 'héritage', 'guerres franco-hova', '1895', 'annexion 1896', 'exil 1897', 'fin de la royauté', 'rivalités coloniales', 'convention de Zanzibar', 'mission civilisatrice'],
    sections: [
      {
        titre: 'Les origines internes : un passif qui s’accumule',
        paras: ['Côté interne, les prétextes s’empilent :'],
        puces: [
          'en 1855, le prince héritier Rakoto — futur Radama II — signe la charte Lambert : ce document promet au Français Joseph Lambert d’immenses privilèges économiques (terres, mines, travaux) ; annulée ensuite par le gouvernement malgache, la charte nourrit une querelle d’indemnités que Paris ressort à chaque crise ;',
          's’y ajoute l’héritage de Jean Laborde : cet industriel français, bâtisseur des ateliers de Mantasoa, meurt en 1878 ; le royaume refuse de reconnaître la transmission de ses terres à ses héritiers — car la terre malgache ne se vend pas aux étrangers ; la France en fait un casus belli ;',
          'deux guerres franco-hova s’ensuivent : celle de 1883-1885, qui impose un premier traité ambigu, puis celle de 1895 — une colonne française débarque à Majunga, remonte vers les Hautes Terres et prend Antananarivo le 30 septembre.',
        ],
      },
      {
        titre: 'Les origines externes : les forces profondes',
        paras: [
          'Côté externe : la révolution industrielle réclame matières premières et débouchés ; les rivalités entre puissances font des colonies une question de rang ; la conférence de Berlin (1885) a codifié le partage, et la convention de Zanzibar a livré Madagascar à l’influence française avec l’accord anglais ; enfin l’idéologie — la « mission civilisatrice » théorisée par Jules Ferry — habille la conquête en devoir moral.',
        ],
      },
      {
        titre: '1896-1897 : l’annexion et la fin de la royauté',
        paras: [
          'En 1896, la France proclame l’annexion : Madagascar devient colonie ; en 1897, Ranavalona III est contrainte à l’exil — c’est la fin de la royauté. Prétextes internes, mobiles externes : quand les deux se rejoignent, le sort de l’île est scellé.',
        ],
      },
    ],
    doc: {
      titre: 'La loi d’annexion de 1896',
      source: 'd’après la loi française du 6 août 1896 et l’exposé de ses motifs — extraits adaptés',
      texte: 'Article unique. Est déclarée colonie française l’île de Madagascar, avec les îles qui en dépendent. — Dans l’exposé des motifs, le gouvernement expliquait : les engagements pris envers la France n’ont cessé d’être violés ; les droits acquis par nos nationaux, issus des conventions anciennes, n’ont pas été respectés ; l’ordre ne saurait être garanti que par la prise de possession définitive. L’annexion assurera à notre commerce et à notre industrie les débouchés qu’ils attendent.',
      questions: ['Quels « prétextes internes » reconnais-tu dans l’exposé des motifs ?',
        'Quelle phrase révèle le mobile économique de l’annexion ?',
        'Que penser de l’expression « prise de possession » appliquée à un royaume reconnu par des traités ?'],
      reponses: ['Les « engagements violés » et les « droits acquis par nos nationaux » renvoient aux querelles de la charte Lambert et de l’héritage Laborde — les prétextes accumulés depuis 1855.',
        'La dernière : l’annexion doit assurer « à notre commerce et à notre industrie les débouchés qu’ils attendent » — l’aveu du mobile industriel et commercial.',
        'Elle traite un État souverain, reconnu par des traités, comme une chose que l’on prend : le droit du plus fort remplace le droit des traités — c’est toute la logique coloniale.']
    },
    lexique: [
      ['Charte', 'document accordant des droits ou privilèges'],
      ['Casus belli', 'fait invoqué pour justifier une guerre'],
      ['Annexion', 'rattachement d’un territoire à un État par décision unilatérale'],
      ['Prétexte', 'raison mise en avant pour masquer le vrai mobile'],
    ],
    synthese: 'Origines internes : charte Lambert (1855), héritage de Jean Laborde, guerre franco-hova de 1895, abdication de Ranavalona III et fin de la royauté. Origines externes : rivalités coloniales, Berlin 1885 et convention de Zanzibar, révolution industrielle, « mission civilisatrice » de Jules Ferry. Résultat : 1896, Madagascar colonie française.',
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
    legende: 'Du gouverneur général au chef de canton : une pyramide qui descend jusqu’au moindre village.',
    motsCles: ['gouverneur général', 'Gallieni', 'chef de province', 'chef de district', 'chef de canton', 'auxiliaires', 'code de l’indigénat', 'pacte colonial', 'capitation', 'prestations'],
    sections: [
      {
        titre: 'La pyramide administrative',
        paras: [
          'Le gouverneur général — le premier fut Gallieni (1896-1905) — concentre tous les pouvoirs civils et militaires ; il découpe l’île en provinces, confiées à des chefs de province ; chaque province se divise en districts, chaque district en cantons. Les fonctionnaires français étant peu nombreux, l’administration recrute des auxiliaires malgaches — interprètes, commis, gardes, instituteurs — qui font tourner la machine au quotidien : la colonisation gouverne aussi par des mains malgaches.',
        ],
      },
      {
        titre: 'Les instruments de l’exploitation',
        paras: ['Trois instruments encadrent la population :'],
        puces: [
          'le code de l’indigénat sépare juridiquement les habitants : les « citoyens » français relèvent du droit commun ; les « indigènes » — l’immense majorité des Malgaches — relèvent d’un régime spécial où l’administrateur peut punir sans tribunal : amendes, emprisonnement, travail forcé pour des fautes aussi vagues que le « manque de respect » ;',
          'le pacte colonial verrouille l’économie : la colonie doit fournir ses matières premières à la métropole, acheter les produits de la métropole, et ne pas développer d’industrie concurrente — Madagascar produit pour la France, pas pour lui-même ;',
          'les impôts et prestations complètent le dispositif : impôt de capitation payé par chaque homme adulte — en argent, ce qui force à travailler pour les colons —, impôts sur le bétail et les rizières, et prestations : journées de travail obligatoires et gratuites sur les routes et les chantiers.',
        ],
      },
      {
        titre: 'Un système cohérent',
        paras: [
          'Ce triple système — droit inégal, économie captive, travail contraint — définit l’exploitation coloniale que la séance suivante détaillera.',
        ],
      },
    ],
    doc: {
      titre: 'Les « infractions spéciales » de l’indigénat',
      source: 'd’après les listes officielles d’infractions du régime de l’indigénat appliquées dans les colonies françaises — extraits adaptés',
      texte: 'Sont punissables, par décision de l’administrateur et sans jugement d’un tribunal, les faits suivants commis par les indigènes : refus de payer l’impôt aux dates fixées ; refus d’accomplir les prestations ; défaut de comparution devant l’administrateur qui convoque ; acte irrespectueux envers un représentant de l’autorité ; propos de nature à affaiblir le respect dû à l’autorité française ; circulation hors du district sans autorisation. Peines : amende et emprisonnement, prononcés par l’administrateur.',
      questions: ['Qui punit, et de quoi ces punitions se passent-elles ?',
        'Relève deux « infractions » dont la définition est vague. Pourquoi est-ce dangereux ?',
        'En quoi ce texte prouve-t-il l’existence de deux catégories d’habitants ?'],
      reponses: ['L’administrateur lui-même, sans tribunal ni jugement : il est à la fois accusateur et juge — c’est la négation de la justice ordinaire.',
        '« Acte irrespectueux » et « propos de nature à affaiblir le respect » : des formules si vagues que n’importe quel geste ou parole peut être puni — l’arbitraire est total.',
        'Il ne s’applique qu’aux « indigènes » : les citoyens français relèvent, eux, des tribunaux ordinaires — deux droits pour deux catégories, c’est l’inégalité faite loi.']
    },
    lexique: [
      ['Indigénat', 'régime juridique d’exception imposé aux colonisés'],
      ['Pacte colonial', 'règle réservant production et commerce à la métropole'],
      ['Capitation', 'impôt payé par tête, dû par chaque homme adulte'],
      ['Prestations', 'journées de travail obligatoires et gratuites'],
    ],
    synthese: 'Pyramide : gouverneur général → chef de province → chef de district → chef de canton + auxiliaires malgaches. Instruments : code de l’indigénat (lois à part, punitions sans tribunal), pacte colonial (production réservée à la métropole), impôts (capitation, bétail) et prestations (travail obligatoire).',
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
    legende: 'Café et vanille vers la France, produits fabriqués vers l’île : l’échange inégal au cœur du système.',
    motsCles: ['économie de traite', 'échange inégal', 'matières premières', 'corvées', 'SMOTIG', '1926', 'compagnie havraise', 'compagnie lyonnaise', 'compagnie marseillaise', 'caricature', 'esprit critique'],
    sections: [
      {
        titre: 'L’économie de traite : l’échange inégal',
        paras: [
          'L’économie de traite — à ne pas confondre avec la traite des esclaves de l’unité II — est un système d’échange inégal : la colonie est cantonnée aux produits bruts (café, vanille, girofle, graphite, viande) vendus à bas prix, et doit acheter à la métropole ses produits manufacturés au prix fort ; la différence enrichit la métropole, et la colonie ne peut jamais s’industrialiser — le pacte colonial y veille.',
        ],
      },
      {
        titre: 'Le travail contraint : des corvées au SMOTIG',
        paras: [
          'Pour équiper le pays au moindre coût, l’administration recourt au travail contraint : d’abord les corvées et prestations — journées dues par chaque homme pour les routes, le portage, le chemin de fer Tananarive-Côte Est ; puis, en 1926, le SMOTIG (Service de la Main-d’Œuvre pour les Travaux d’Intérêt Général) institutionnalise le système : les jeunes hommes non appelés au service militaire doivent des années de travail sur les grands chantiers, loin de chez eux, pour un salaire dérisoire — les contemporains y ont vu un travail forcé déguisé, et il fut dénoncé jusqu’à la Société des Nations.',
        ],
      },
      {
        titre: 'Les grandes compagnies — et l’œil de la caricature',
        paras: [
          'Au sommet du système trônent les grandes compagnies de commerce — la Compagnie havraise, la Compagnie lyonnaise, la Compagnie marseillaise — dont les noms disent les ports et villes de France où partent les profits : elles achètent aux producteurs malgaches aux prix qu’elles fixent, vendent les importations aux prix qu’elles fixent, et possèdent plantations, comptoirs et flottilles.',
          'Les caricatures de l’époque résument le circuit d’un trait : un colon ventru assis sur des sacs de café, porté par un paysan malgache courbé — l’image dit, mieux qu’un long discours, qui travaille et qui profite. Analyser une telle caricature, c’est exercer ton esprit critique : identifier l’auteur, la date, les symboles, le message — et le confronter aux faits.',
        ],
      },
    ],
    doc: {
      titre: 'Sur les chantiers du chemin de fer',
      source: 'texte reconstitué d’après les témoignages et rapports sur les chantiers du Tananarive-Côte Est (années 1900-1910)',
      texte: 'On est venu me chercher au village pour la prestation : trente jours sur le chantier du chemin de fer, à deux jours de marche de chez moi. Nous creusons la falaise à la pioche, du lever au coucher du soleil ; la fièvre prend les hommes dans les campements et plusieurs ne sont pas revenus. Pendant ce temps, ma rizière attend, et il faudra pourtant payer l’impôt à la fin de l’année. Le contremaître dit que la ligne apportera le progrès. Mais à qui ira le café qu’elle transportera ?',
      questions: ['Relève les trois fardeaux qui pèsent en même temps sur ce paysan.',
        'Pourquoi ce texte est-il présenté comme « reconstitué », et que garantit l’historien ?',
        'La question finale du témoin rejoint-elle la leçon ? Explique.'],
      reponses: ['La prestation (trente jours de travail loin de chez lui), la rizière laissée à l’abandon, et l’impôt qu’il faudra payer malgré tout — travail contraint et impôt se cumulent.',
        'Aucun témoignage individuel de ce paysan précis ne nous est parvenu mot à mot : le texte est recomposé, mais chaque élément (durée, conditions, fièvres, impôt) vient des rapports et témoignages d’époque — et l’historien le signale honnêtement.',
        'Oui : le chemin de fer servira d’abord à exporter le café et les produits bruts vers le port — c’est l’économie de traite ; le « progrès » profite surtout aux compagnies et à la métropole.']
    },
    lexique: [
      ['Économie de traite', 'échange inégal : produits bruts contre produits fabriqués'],
      ['SMOTIG', 'service de travail obligatoire créé en 1926'],
      ['Comptoir', 'établissement de commerce d’une compagnie'],
      ['Caricature', 'dessin satirique qui dénonce par l’exagération'],
    ],
    synthese: 'Économie de traite : exportations brutes à bas prix contre importations chères — échange inégal. Travail contraint : corvées, portage, puis SMOTIG (1926). Grandes compagnies havraise, lyonnaise, marseillaise : contrôle du commerce, profits rapatriés. La caricature d’époque révèle le système d’un seul regard.',
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
    legende: 'Des lamba rouges des Menalamba à l’insurrection de 1947 : trois générations de luttes.',
    motsCles: ['Menalamba', 'Sadiavahy', 'VVS', 'Vy Vato Sakelika', 'Jean Ralaimongo', 'égalité de droits', 'émancipation', 'JINA', 'PANAMA', 'MDRM', 'PADESM', '29 mars 1947'],
    sections: [
      {
        titre: 'Première vague : repousser l’étranger',
        paras: [
          'Dès fin 1895, avant même l’annexion, l’insurrection des Menalamba — « les lamba rouges », de la latérite dont ils teignaient leurs vêtements — embrase l’Imerina : paysans et notables refusent la domination étrangère et ce qu’elle apporte ; la répression de Gallieni en vient à bout vers 1898. Dans le sud et l’ouest, les Sadiavahy reprennent le flambeau en 1904-1905, puis en 1914-1917 : mêmes causes — impôts, réquisitions, présence étrangère —, même objectif : repousser l’occupant.',
        ],
      },
      {
        titre: 'Deuxième vague : l’égalité par le droit',
        paras: [
          'En 1913, de jeunes intellectuels — étudiants en médecine, pasteurs, instituteurs — fondent à Antananarivo la VVS (Vy Vato Sakelika : « Fer, Pierre, Ramification »), société secrète qui veut relever la nation par l’éducation et obtenir l’égalité de droits ; découverte en 1915, elle est brisée par des condamnations féroces.',
          'L’idée survit : à partir de 1919, Jean Ralaimongo — instituteur, ancien combattant de 14-18 — mène campagne par les journaux et les pétitions : citoyenneté française pour les Malgaches, fin de l’indigénat, égalité devant la loi ; son mouvement anime les années 1919-1930.',
        ],
      },
      {
        titre: 'Troisième vague : l’émancipation — et 1947',
        paras: [
          'Après la Seconde Guerre mondiale, l’espoir change d’échelle : le MDRM (Mouvement Démocratique de la Rénovation Malgache) réclame l’émancipation dans la légalité, tandis que le PADESM défend les « déshérités » ; des sociétés secrètes — JINA, PANAMA — préparent l’action directe.',
          'Le 29 mars 1947, l’insurrection éclate dans l’est et le sud-est : la répression est terrible — des dizaines de milliers de morts, le MDRM dissous, ses députés condamnés. Mais 1947 devient la grande date-mémoire du nationalisme : l’indépendance n’est plus qu’une question de temps.',
        ],
      },
    ],
    doc: {
      titre: 'Jean Ralaimongo réclame l’égalité',
      source: 'texte reconstitué d’après les campagnes de presse et les pétitions de Jean Ralaimongo (années 1920)',
      texte: 'Nous avons versé notre sang pour la France dans les tranchées de la Grande Guerre : des milliers de Malgaches sont tombés à ses côtés. Et quand nous rentrons au pays, que trouvons-nous ? L’indigénat, qui nous punit sans juge ; la corvée, qui nous arrache à nos rizières ; l’impôt, qui nous courbe. On nous dit sujets français : nous demandons à être citoyens. Les mêmes lois, les mêmes juges, les mêmes droits pour tous — voilà notre revendication. Nous ne la crierons pas dans les bois : nous l’écrirons dans les journaux et la porterons devant les tribunaux, jusqu’à ce que justice soit faite.',
      questions: ['Quel argument tiré de la Grande Guerre Ralaimongo avance-t-il ?',
        'Que revendique-t-il exactement — et que ne revendique-t-il pas encore ?',
        'Quels moyens d’action annonce-t-il ? En quoi diffèrent-ils de ceux des Menalamba ?'],
      reponses: ['Les Malgaches ont combattu et sont morts pour la France en 14-18 : ce sacrifice donne droit à l’égalité — on ne peut mourir en égal et vivre en sujet.',
        'La citoyenneté et l’égalité de droits (mêmes lois, mêmes juges, fin de l’indigénat) — mais pas encore l’indépendance : c’est la deuxième vague, celle de l’égalité.',
        'Les journaux, les pétitions, les tribunaux — l’action légale et écrite, là où les Menalamba avaient pris les armes : les moyens évoluent avec les générations.']
    },
    lexique: [
      ['Société secrète', 'organisation clandestine aux membres liés par serment'],
      ['Citoyenneté', 'statut donnant les pleins droits politiques et civils'],
      ['Émancipation', 'libération d’une domination ; accès à la souveraineté'],
      ['Insurrection', 'soulèvement armé contre le pouvoir en place'],
    ],
    synthese: 'Trois vagues : repousser la présence étrangère — Menalamba (fin 1895-1898), Sadiavahy (1904-05, 1914-17) ; égalité de droits — VVS (1913-1915), Jean Ralaimongo (1919-1930) ; émancipation — JINA, PANAMA, MDRM, PADESM, et l’insurrection du 29 mars 1947, durement réprimée.',
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
    legende: 'Minuit, 26 juin 1960 : le drapeau blanc-rouge-vert monte dans la nuit d’Antananarivo.',
    motsCles: ['décolonisation', 'Loi-cadre 1956', 'suffrage universel', 'autonomie interne', 'référendum 1958', 'Communauté française', 'République malgache', '14 octobre 1958', '26 juin 1960', 'Philibert Tsiranana'],
    sections: [
      {
        titre: 'Le monde décolonise',
        paras: [
          'Après 1947, la répression a brisé les partis, mais rien n’arrête le mouvement du monde — l’Inde est indépendante (1947), la guerre d’Indochine s’achève (1954), l’Afrique s’éveille ; la France comprend qu’il faut réformer avant de tout perdre.',
        ],
      },
      {
        titre: 'Trois étapes vers la souveraineté',
        paras: ['La marche se fait en trois étapes :'],
        puces: [
          'la Loi-cadre de 1956 (dite loi Defferre) : elle institue le suffrage universel — tous les adultes votent, et non plus une minorité — et crée un conseil de gouvernement malgache ; pour la première fois depuis 1896, des ministres malgaches administrent leur pays : l’autonomie interne est en marche, et les partis renaissent ;',
          'le référendum du 28 septembre 1958 : le général de Gaulle propose aux colonies une Communauté française rénovée ; voter « oui », c’est devenir République autonome dans la Communauté ; voter « non », c’est l’indépendance immédiate et la rupture ; Madagascar vote majoritairement oui, et le 14 octobre 1958, la République malgache est proclamée — un État, un gouvernement, une assemblée, sous réserve des domaines gardés par Paris (défense, monnaie, diplomatie) ;',
          'l’indépendance : dès 1959, la nouvelle république négocie le transfert des dernières compétences ; les accords sont signés en avril 1960, et le 26 juin 1960, l’indépendance est proclamée — Philibert Tsiranana devient le premier président de la République malgache.',
        ],
      },
      {
        titre: 'La souveraineté retrouvée',
        paras: [
          'Soixante-quatre ans après l’annexion de 1896, la souveraineté revient — par les urnes et la négociation, portée par un demi-siècle de luttes : des Menalamba aux députés de 1946, chaque génération a préparé ce matin du 26 juin.',
        ],
      },
    ],
    doc: {
      titre: 'Le 26 juin 1960 à Antananarivo',
      source: 'texte reconstitué d’après les comptes rendus de presse de la proclamation de l’indépendance (juin 1960)',
      texte: 'Dès la veille au soir, la foule avait envahi les abords du stade de Mahamasina. À minuit, les lumières se sont éteintes ; dans le silence, le drapeau français est descendu, puis le drapeau blanc, rouge et vert de la République malgache est monté lentement dans la nuit, salué par une immense clameur et par l’hymne national. Au matin, devant les représentants de nombreux pays, le président Tsiranana a proclamé solennellement l’indépendance de Madagascar, rappelant que la souveraineté retrouvée était l’œuvre de tout un peuple et qu’elle s’était accomplie dans la paix et l’amitié entre les nations.',
      questions: ['Quels gestes symboliques marquent le passage à l’indépendance ?',
        'Pourquoi le président rappelle-t-il « l’œuvre de tout un peuple » ?',
        'Que signale la mention « texte reconstitué », et pourquoi est-elle honnête ?'],
      reponses: ['La descente du drapeau français et la montée du drapeau malgache à minuit, l’hymne national, la proclamation solennelle devant les nations : des symboles qui disent le transfert de souveraineté.',
        'Parce que l’indépendance négociée de 1960 récolte ce que les générations de luttes — Menalamba, VVS, Ralaimongo, 1947 — ont semé : elle n’est pas un cadeau, mais un aboutissement.',
        'Le récit est recomposé à partir des comptes rendus d’époque, sans citer mot à mot un document unique ; l’historien distingue toujours l’extrait authentique du récit reconstitué — c’est une règle de probité.']
    },
    lexique: [
      ['Loi-cadre', 'loi de 1956 ouvrant l’autonomie interne aux colonies'],
      ['Référendum', 'vote direct du peuple sur une question posée'],
      ['Communauté française', 'union proposée par de Gaulle en 1958'],
      ['Souveraineté', 'pouvoir d’un État de se gouverner lui-même'],
    ],
    synthese: 'Après 1947 : l’idée d’indépendance s’impose, le monde décolonise. 1956 : Loi-cadre — suffrage universel, gouvernement local malgache. 28 septembre 1958 : référendum ; 14 octobre 1958 : proclamation de la République malgache dans la Communauté. 26 juin 1960 : indépendance ; Tsiranana premier président.',
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
