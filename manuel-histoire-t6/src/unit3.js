// UNITÉ 3 — LES RELATIONS DE MADAGASCAR AVEC LES PAYS AFRICAINS ET LES ÎLES DE L'OCÉAN INDIEN (PE T6)
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — formes de relations
figs.u3f1 = (() => { const { s, y } = head('Bilatérale ou multilatérale ?', ['Deux pays face à face, ou plusieurs pays autour d’une même table.']);
  const top = y + 25;
  let b = box(60, top, 400, 54, 'relation BILATÉRALE', GREENL, GREEN, 22);
  b += txt(260, top + 90, 'Madagascar ↔ un autre pays', 20, GREEN, 'bold', 'middle');
  b += box(540, top, 400, 54, 'relation MULTILATÉRALE', '#FDE7EF', PINK2, 22);
  b += txt(740, top + 90, 'Madagascar + plusieurs pays (organisation)', 19, PINK2, 'bold', 'middle');
  const doms = ['diplomatique', 'militaire', 'économique', 'commerciale', 'culturelle', 'technique'];
  doms.forEach((d, i) => {
    const X = 55 + (i % 3) * 310, Y = top + 135 + Math.floor(i / 3) * 66;
    b += box(X, Y, 290, 52, d, BLUEL, BLUE, 21);
  });
  b += txt(500, top + 135 + 2 * 66 + 32, 'six domaines de relation — qu’elles soient bilatérales ou multilatérales', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 135 + 2 * 66 + 64, s + b); })();
// S2 — UA et COI
figs.u3f2 = (() => { const { s, y } = head('L’Union Africaine et la COI', ['Le continent entier d’un côté, les îles sœurs de l’autre.']);
  const top = y + 15;
  const data = [['élément', 'OUA / UA', 'COI'],
    ['création', 'OUA : 1963 — UA : 2002', '1982 (Port-Louis)'],
    ['membres', 'tous les États africains', 'les îles de l’océan Indien'],
    ['Madagascar', 'membre fondateur (1963)', 'adhésion en 1986'],
    ['mission', 'unité et paix du continent', 'coopération entre les îles']];
  let b = tableEl(35, top, [200, 380, 350], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'cinq membres : Comores, Madagascar, Maurice, Seychelles, la Réunion', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 74, s + b); })();
// S3 — COMESA et SADC
figs.u3f3 = (() => { const { s, y } = head('Le COMESA et la SADC', ['Deux grands ensembles économiques auxquels Madagascar appartient.']);
  const top = y + 15;
  const data = [['élément', 'COMESA', 'SADC'],
    ['nature', 'marché commun', 'développement régional'],
    ['région', 'Afrique orientale et australe', 'Afrique australe'],
    ['création', '1994', '1992'],
    ['Madagascar', 'membre dès les débuts', 'adhésion en 2005'],
    ['objectif', 'libre-échange commercial', 'intégration régionale']];
  let b = tableEl(35, top, [200, 380, 350], 54, data);
  b += txt(500, top + 6 * 54 + 42, 'un même pays peut appartenir à plusieurs organisations : chacune sert un but différent', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 6 * 54 + 74, s + b); })();
// S4 — impacts de l'adhésion
figs.u3f4 = (() => { const { s, y } = head('Ce que l’adhésion apporte à Madagascar', ['Trois familles d’impacts, à connaître avec leurs exemples.']);
  const top = y + 20;
  const cols = [['POLITIQUE', 'aide à gérer les crises', GREENL, GREEN],
    ['ÉCONOMIQUE', 'libre-échange et concurrence', BLUEL, BLUE],
    ['SOCIO-CULTUREL', 'lutte contre la pauvreté', '#FDE7EF', PINK2]];
  let b = '';
  cols.forEach(([t1, t2, f, c], i) => {
    const X = 30 + i * 320;
    b += box(X, top, 300, 54, t1, f, c, 22);
    b += txt(X + 150, top + 92, t2, 19, c, 'bold', 'middle');
  });
  b += txt(500, top + 145, 'et aussi : libre circulation des hommes, des idées et des cultures', 21, OCRE, 'bold', 'middle');
  b += txt(500, top + 185, 'adhérer, c’est recevoir — mais aussi s’engager et respecter les règles communes', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 217, s + b); })();

const S = [
  {
    t: 'Les formes de relations de Madagascar', comp: 'Les relations avec l’Afrique et l’océan Indien', theme: 'Relations bilatérales et multilatérales',
    goal: 'distinguer les relations bilatérales et multilatérales et citer leurs six domaines',
    mat: 'Textes et articles, images, carte de l’Afrique et de l’océan Indien',
    revQ: 'Cite deux impacts du changement fréquent de dirigeants.',
    revRA: 'Par exemple la crise économique et la perte de confiance des bailleurs de fonds.',
    situation: 'À l’aéroport d’Ivato, un avion décolle pour Addis-Abeba avec des diplomates ; un cargo quitte Toamasina pour Maurice chargé de letchis ; des médecins malgaches partent se former en Afrique du Sud. Trois départs, une même réalité : Madagascar n’est pas une île isolée — elle tisse des relations avec ses voisins. Apprenons à les classer.',
    recit: [
      'Madagascar parle avec ses voisins depuis bien longtemps. Dès ##1836##, la reine @@Ranavalona Iʳᵉ@@ envoyait des ambassadeurs à Londres et à Paris pour négocier d’égal à égal — la diplomatie malgache ne date pas d’hier ! Aujourd’hui, l’historien classe ces relations en deux formes. La **relation bilatérale** unit deux pays : un accord de pêche entre Madagascar et les Comores, un jumelage entre deux villes. La **relation multilatérale** unit plusieurs pays, souvent au sein d’une **organisation** : adhérer à la COI, c’est s’engager envers tous les membres à la fois.',
      'Deuxième étiquette : le **domaine**. Les relations couvrent six champs. **Diplomatique** : ambassades, visites officielles, traités. **Militaire** : exercices communs, formation des soldats. **Économique** : investissements, projets de développement. **Commercial** : exportations de vanille, letchis et girofle vers les voisins, importations en retour. **Culturel** : festivals, échanges d’étudiants, langues partagées. **Technique et statutaire** : partage de savoir-faire, experts, règles communes au sein des organisations.',
      'Une même relation peut mêler plusieurs domaines — un accord commercial se signe par la voie diplomatique ! L’historien décrit donc chaque relation avec ses deux étiquettes : sa **forme** (bilatérale ou multilatérale) et son ou ses **domaines**. Deux questions suffisent : combien de partenaires ? et de quoi parlent-ils ?'
    ],
    doc: {
      titre: 'Communiqué conjoint d’une visite d’État',
      source: 'communiqué de presse diplomatique — texte reconstitué',
      texte: 'À l’issue de la visite officielle du chef de l’État malgache, les deux parties ont signé un accord de coopération dans les domaines de la pêche et de la formation des marins. Les deux pays conviennent d’ouvrir une ligne maritime directe entre leurs ports et d’échanger chaque année des étudiants et des experts. Les deux gouvernements saluent l’excellence de leurs relations d’amitié.',
      questions: ['Cette relation est-elle bilatérale ou multilatérale ? Justifie.',
        'Relève au moins trois domaines de relation présents dans ce communiqué.',
        'Pourquoi un tel communiqué est-il une source utile — et à manier avec précaution ?'],
      reponses: ['Bilatérale : deux pays seulement — « les deux parties », « les deux gouvernements ».',
        'Diplomatique (visite officielle, accord), économique et commercial (pêche, ligne maritime), technique et culturel (étudiants, experts, formation).',
        'Utile : il date et détaille les engagements ; précaution : un communiqué officiel montre toujours la relation sous son meilleur jour — à croiser avec d’autres sources.']
    },
    reperes: {
      dates: [['1836', 'Ranavalona Iʳᵉ envoie des ambassadeurs à Londres et Paris']],
      persos: [['Ranavalona Iʳᵉ', 'reine qui pratiqua très tôt la diplomatie d’égal à égal']],
      mots: [['Relation bilatérale', 'relation entre deux pays'],
        ['Relation multilatérale', 'relation entre plusieurs pays, souvent dans une organisation'],
        ['Les six domaines', 'diplomatique, militaire, économique, commercial, culturel, technique et statutaire']]
    },
    idee: {
      faux: 'Une relation multilatérale est toujours plus importante qu’une bilatérale.',
      vrai: 'Non : un grand accord bilatéral peut peser plus lourd qu’une adhésion peu active. La forme dit le NOMBRE de partenaires, pas la valeur de la relation.'
    },
    synthese: 'bilatérale = deux pays ; multilatérale = plusieurs pays (organisation) ; six domaines : diplomatique, militaire, économique, commercial, culturel, technique et statutaire ; une relation se décrit par sa forme + son domaine.',
    saistu: 'La diplomatie malgache ne date pas d’hier : dès 1836, la reine Ranavalona Iʳᵉ envoya des ambassadeurs à Londres et à Paris pour négocier d’égal à égal avec les grandes puissances. Reçus par les rois, ces émissaires malgaches furent parmi les tout premiers diplomates de l’océan Indien !',
    exos: ['Bilatérale ou multilatérale ? a) Un accord commercial entre Madagascar et le Kenya. b) L’adhésion de Madagascar à la SADC. d) Un jumelage entre Antananarivo et une ville mauricienne. e) Une conférence des cinq membres de la COI.',
      'Quel domaine ? a) Des soldats malgaches s’entraînent avec une armée voisine. b) Un festival de musique réunit des artistes de l’océan Indien. d) Madagascar exporte des letchis vers Maurice. e) Deux pays échangent des experts en riziculture.',
      'Décris complètement (forme + domaine + exemple). a) Une visite officielle du président dans un pays africain. b) Les règles communes de libre-échange du COMESA. d) Une bourse offerte à des étudiants malgaches par un pays voisin. e) Pourquoi une même relation peut-elle relever de deux domaines ?'],
    corr: ['a) bilatérale ; b) multilatérale ; d) bilatérale ; e) multilatérale.',
      'a) militaire ; b) culturel ; d) commercial ; e) technique.',
      'a) bilatérale, diplomatique — rencontre officielle entre deux chefs d’État ; b) multilatérale, commerciale et statutaire — règles valables pour tous les membres ; d) bilatérale, culturelle et technique — formation d’étudiants ; e) parce que les domaines se combinent : un accord commercial se négocie par la diplomatie.'],
    fig: 'u3f1'
  },
  {
    t: 'L’Union Africaine et la Commission de l’océan Indien', comp: 'Les relations avec l’Afrique et l’océan Indien', theme: 'Les organisations régionales : OUA/UA et COI',
    goal: 'présenter l’OUA/Union Africaine et la COI : création, membres, objectifs et place de Madagascar',
    mat: 'Carte de l’Afrique, carte de l’océan Indien, textes et articles, drapeaux',
    revQ: 'Différence entre relation bilatérale et multilatérale ?',
    revRA: 'Bilatérale : deux pays ; multilatérale : plusieurs pays, souvent dans une organisation.',
    situation: 'Sur la carte de l’Afrique, cinquante-cinq drapeaux entourent une même table : celle de l’Union Africaine. Et sur la carte de l’océan Indien, cinq îles sœurs forment leur propre cercle : la COI. Madagascar siège aux deux tables — l’une continentale, l’autre insulaire. Faisons connaissance avec ces deux maisons communes.',
    recit: [
      'En ##mai 1963##, à Addis-Abeba, trente chefs d’État africains signent la charte de l’**Organisation de l’Unité Africaine** (OUA). Nous sommes dans l’élan des indépendances : les jeunes États, dont Madagascar — **membre fondateur** —, veulent parler d’une seule voix, défendre leur souveraineté et achever la décolonisation du continent. En ##2002##, l’organisation se transforme en **Union Africaine** (UA) : nouvelles institutions, nouvelles ambitions — paix et sécurité, intégration économique, grands projets continentaux. Son siège : Addis-Abeba, en Éthiopie.',
      'La **Commission de l’océan Indien** (COI), elle, joue la carte de la proximité. Créée en ##1982## par l’accord de Port-Louis, elle unit cinq membres insulaires : les Comores, Madagascar — qui adhère en ##1986## —, Maurice, les Seychelles et la Réunion, qui y représente la France. Ses chantiers collent aux réalités des îles : pêche et protection de l’océan, sécurité alimentaire, santé, climat et cyclones, circulation entre les îles. Son siège est à Ébène, à Maurice.',
      'Deux échelles, deux rôles : l’UA donne à Madagascar une **voix continentale** ; la COI lui donne des **voisins solidaires**. La grande famille de toute l’Afrique d’un côté, le cercle rapproché des îles sœurs de l’autre — et notre pays siège aux deux tables.'
    ],
    doc: {
      titre: 'La naissance de l’unité africaine',
      source: 'd’après la Charte de l’OUA, Addis-Abeba, 25 mai 1963 — extrait adapté',
      texte: 'Nous, chefs d’État et de gouvernement africains, convaincus que les peuples ont le droit inaliénable de déterminer leur propre destin, décidons de renforcer l’unité et la solidarité des États africains, de défendre leur souveraineté et leur intégrité territoriale, et d’éliminer du continent le colonialisme sous toutes ses formes.',
      questions: ['Qui signe ce texte, où et quand ?',
        'Relève les trois grands objectifs que la charte fixe à l’organisation.',
        'Pourquoi ce texte paraît-il précisément en 1963 ?'],
      reponses: ['Les chefs d’État et de gouvernement africains, à Addis-Abeba, le 25 mai 1963.',
        'Renforcer l’unité et la solidarité des États africains ; défendre leur souveraineté et leur intégrité territoriale ; éliminer le colonialisme du continent.',
        'Parce que c’est l’élan des indépendances : les jeunes États, à peine libres, veulent s’unir pour rester libres et aider les peuples encore colonisés.']
    },
    reperes: {
      dates: [['25 mai 1963', 'charte d’Addis-Abeba : naissance de l’OUA, Madagascar fondateur'],
        ['1982', 'accord de Port-Louis : création de la COI'],
        ['1986', 'Madagascar adhère à la COI'],
        ['2002', 'l’OUA devient l’Union Africaine']],
      mots: [['OUA / UA', 'organisation de tous les États africains — unité et paix'],
        ['COI', 'Commission de l’océan Indien : les cinq îles sœurs'],
        ['Membre fondateur', 'État présent dès la création d’une organisation']]
    },
    idee: {
      faux: 'Madagascar a adhéré à l’Union Africaine en 2002.',
      vrai: 'Non : en 2002, c’est l’ORGANISATION qui change de nom (l’OUA devient l’UA). Madagascar en est membre depuis la fondation de l’OUA en 1963 — et même membre fondateur.'
    },
    synthese: 'OUA 1963 (Madagascar fondateur) → UA 2002 : tous les États africains, unité et paix ; COI 1982 Port-Louis : cinq membres insulaires, Madagascar depuis 1986 ; UA = voix continentale, COI = solidarité des îles.',
    saistu: 'La COI est la seule organisation régionale d’Afrique dont tous les membres sont des îles ! Et son grand chantier s’appelle « l’indianocéanie » : faire des îles de l’océan Indien une famille unie par l’histoire, les langues et l’océan — un mot nouveau pour une très vieille parenté.',
    exos: ['Fiches d’identité. a) Que signifie OUA, et en quelle année naît-elle ? b) Quand devient-elle l’Union Africaine ? d) Où et quand la COI est-elle créée ? e) Cite les cinq membres de la COI.',
      'Madagascar et les deux organisations. a) Quel est le statut de Madagascar à l’OUA en 1963 ? b) En quelle année Madagascar rejoint-il la COI ? d) Qui représente la France à la COI ? e) Où siègent l’UA et la COI ?',
      'Comprendre. a) Quelle est la mission de l’UA ? b) Cite deux chantiers concrets de la COI. d) Pourquoi dit-on que l’UA et la COI jouent à deux échelles différentes ? e) Pourquoi un pays a-t-il intérêt à être membre des deux ?'],
    corr: ['a) Organisation de l’Unité Africaine, en 1963 ; b) en 2002 ; d) à Port-Louis (Maurice), en 1982 ; e) Comores, Madagascar, Maurice, Seychelles, la Réunion (France).',
      'a) membre fondateur ; b) en 1986 ; d) la Réunion ; e) l’UA à Addis-Abeba (Éthiopie), la COI à Ébène (Maurice).',
      'a) l’unité et la paix du continent africain ; b) par exemple la pêche et la protection de l’océan, la préparation aux cyclones ; d) l’UA agit à l’échelle du continent, la COI à l’échelle des îles voisines ; e) parce que les deux niveaux se complètent : grande voix continentale et solidarité de proximité.'],
    fig: 'u3f2'
  },
  {
    t: 'Le COMESA et la SADC', comp: 'Les relations avec l’Afrique et l’océan Indien', theme: 'Les organisations régionales : COMESA et SADC',
    goal: 'présenter le COMESA et la SADC et situer les pays membres sur la carte',
    mat: 'Carte de l’Afrique orientale et australe, textes et articles, étiquettes de produits',
    revQ: 'En quelle année Madagascar devient-il membre fondateur de l’OUA ? Membre de la COI ?',
    revRA: '1963 ; 1986.',
    situation: 'Regarde l’étiquette d’un paquet de sucre ou d’huile au marché : il vient parfois d’Égypte, du Kenya ou d’Afrique du Sud — souvent sans payer de lourdes taxes de douane. Pourquoi ? Parce que Madagascar appartient à de grands marchés communs : le COMESA et la SADC. Deux sigles qui changent le prix de ton panier !',
    recit: [
      'Le **COMESA** d’abord — //Common Market for Eastern and Southern Africa//, le marché commun de l’Afrique orientale et australe. Né en ##1994##, il rassemble une vingtaine de pays, de l’Égypte au nord jusqu’à l’Eswatini au sud : un marché de centaines de millions d’habitants, avec son siège à Lusaka, en Zambie. Son outil principal : le **libre-échange** — réduire ou supprimer les **droits de douane** entre membres, pour que les produits circulent et que les prix baissent. Pour Madagascar : vendre vanille, girofle et textiles à un immense marché, et importer moins cher.',
      'La **SADC** ensuite — //Southern African Development Community//, la communauté de développement de l’Afrique australe. Héritière d’une coopération née en 1980, elle devient communauté de développement en ##1992## autour de l’Afrique australe — Afrique du Sud, Mozambique, Tanzanie, Zambie… Madagascar la rejoint en ##2005##. Son ambition dépasse le commerce : infrastructures, énergie, paix et sécurité régionale, libre circulation. Son siège : Gaborone, au Botswana.',
      'Sur la carte, les deux ensembles se chevauchent — plusieurs pays, dont le nôtre, appartiennent aux deux. Rien d’étonnant : chaque organisation sert un but différent. Le COMESA ouvre les frontières commerciales ; la SADC construit ensemble. Deux clés pour une même porte : le développement de la région.'
    ],
    doc: {
      titre: 'Le pari du marché commun',
      source: 'd’après le Traité instituant le COMESA, Kampala, 1993 — extrait adapté',
      texte: 'Les États membres s’engagent à établir entre eux une zone de libre-échange, en supprimant progressivement les droits de douane et les obstacles au commerce des marchandises originaires de la région. Ils visent la création d’un marché commun où les biens, les services, les capitaux et les personnes circuleront librement, afin de promouvoir le développement de tous les membres.',
      questions: ['Quel engagement principal les États membres prennent-ils ?',
        'Quel objectif final le traité fixe-t-il, au-delà des marchandises ?',
        'Montre avec un exemple malgache ce que cet engagement change concrètement.'],
      reponses: ['Supprimer progressivement les droits de douane et les obstacles au commerce entre membres : le libre-échange.',
        'Un marché commun complet où biens, services, capitaux et personnes circulent librement.',
        'Par exemple, un conteneur de textiles ou de girofle malgache entre au Kenya avec des taxes réduites : il arrive moins cher et se vend mieux.']
    },
    reperes: {
      dates: [['1992', 'naissance de la SADC (communauté de développement)'],
        ['1994', 'naissance du COMESA (marché commun)'],
        ['2005', 'Madagascar adhère à la SADC']],
      mots: [['COMESA', 'marché commun de l’Afrique orientale et australe — siège à Lusaka'],
        ['SADC', 'communauté de développement de l’Afrique australe — siège à Gaborone'],
        ['Libre-échange', 'commerce sans lourdes taxes de douane entre membres'],
        ['Droits de douane', 'taxes payées par une marchandise qui franchit une frontière']]
    },
    idee: {
      faux: 'COMESA et SADC, c’est la même chose sous deux sigles.',
      vrai: 'Non : COMESA = marché COMmun (commerce, libre-échange) ; SADC = communauté de DÉVELOPPEMENT (projets, intégration, paix). Le premier ouvre les frontières commerciales, la seconde construit ensemble — et un pays peut appartenir aux deux.'
    },
    synthese: 'COMESA : marché commun Afrique orientale et australe, 1994, libre-échange ; SADC : communauté de développement d’Afrique australe, 1992, Madagascar membre en 2005 ; un pays peut appartenir aux deux.',
    saistu: 'Le COMESA s’étend sur un territoire immense : du Caire, en Égypte, jusqu’aux rives de l’océan Indien — plus de 600 millions d’habitants ! C’est l’un des plus grands espaces de libre-échange du monde… et tes letchis de Toamasina peuvent y voyager presque sans douane.',
    exos: ['Fiches d’identité. a) Développe le sigle COMESA. b) Développe le sigle SADC. d) Donne l’année de création de chacune. e) Quelle est la mission principale de chacune ?',
      'Madagascar membre. a) Quand Madagascar rejoint-il la SADC ? b) Que gagne un exportateur malgache grâce au COMESA ? d) Cite deux domaines d’action de la SADC au-delà du commerce. e) Où siègent le COMESA et la SADC ?',
      'Carte et réflexion. a) Cite trois pays membres de la SADC. b) De quel pays du nord part l’espace COMESA ? d) Un pays peut-il appartenir aux deux ? Donne un exemple. e) Pourquoi le libre-échange peut-il faire baisser les prix au marché ?'],
    corr: ['a) Common Market for Eastern and Southern Africa — marché commun de l’Afrique orientale et australe ; b) Southern African Development Community — communauté de développement de l’Afrique australe ; d) 1994 et 1992 ; e) libre-échange commercial ; développement et intégration régionale.',
      'a) en 2005 ; b) des droits de douane réduits vers une vingtaine de pays ; d) par exemple les infrastructures et l’énergie, la paix et la sécurité ; e) COMESA à Lusaka (Zambie), SADC à Gaborone (Botswana).',
      'a) par exemple l’Afrique du Sud, le Mozambique, la Tanzanie ; b) de l’Égypte ; d) oui — Madagascar est membre des deux ; e) parce que les marchandises circulent sans lourdes taxes de douane : elles arrivent moins chères.'],
    fig: 'u3f3'
  },
  {
    t: 'L’impact de l’adhésion de Madagascar', comp: 'Les relations avec l’Afrique et l’océan Indien', theme: 'L’impact de l’adhésion aux organisations africaines',
    goal: 'interpréter l’impact politique, économique et socio-culturel de l’adhésion de Madagascar à ces organisations',
    mat: 'Textes et articles sur les retombées de l’adhésion, tableau, carte',
    revQ: 'COMESA et SADC : mission de chacune et année d’adhésion de Madagascar à la SADC ?',
    revRA: 'COMESA : libre-échange ; SADC : développement — adhésion malgache en 2005.',
    situation: 'Que rapporte vraiment une adhésion ? De beaux drapeaux et des sommets ? Bien plus : quand une crise politique éclate, des médiateurs africains accourent ; quand un cyclone frappe, les voisins aident ; quand un commerçant exporte, les taxes tombent. Mesurons, domaine par domaine, ce que les organisations africaines apportent à la Grande Île.',
    recit: [
      'Plan **politique** d’abord : lors des crises malgaches, l’UA et la SADC ont envoyé **médiateurs** et missions de dialogue — et c’est par une feuille de route régionale que la sortie de la crise de ##2009## s’est organisée. L’adhésion offre un cadre de médiation qu’un pays isolé n’aurait pas. Plan **économique** : le libre-échange du COMESA et de la SADC ouvre les marchés, attire les **investissements** et stimule la **concurrence** — les entreprises doivent s’améliorer, les consommateurs y gagnent. Plan **socio-culturel** : programmes communs de lutte contre la pauvreté, santé, éducation ; et la **libre circulation** des hommes, des idées et des cultures — étudiants en mobilité, artistes en tournée, experts partagés.',
      'Mais l’historien garde son **esprit critique** : l’adhésion est un contrat. Elle impose des règles, des cotisations, de la concurrence pour nos entreprises — et peut se suspendre. Après la crise de ##2009##, Madagascar fut écarté des instances de l’UA et de la SADC pendant près de cinq ans, jusqu’au retour à l’ordre constitutionnel en ##2014##. La preuve par l’histoire récente : la place d’un pays dans les organisations n’est jamais acquise.',
      'Adhérer donne donc des **droits** ET des **devoirs** ; en tirer profit demande une stratégie — comme le programme t’invite à le faire en élaborant un mini-projet d’avantages commerciaux. Des alliés dans la tempête politique, des clients pour l’économie, des frères de culture pour avancer : voilà ce que pèse une adhésion bien utilisée.'
    ],
    doc: {
      titre: 'La région hausse le ton',
      source: 'd’après un communiqué du sommet extraordinaire de la SADC, 30 mars 2009 — extrait adapté',
      texte: 'Le sommet condamne le changement anticonstitutionnel de gouvernement intervenu à Madagascar. En conséquence, le sommet décide de suspendre Madagascar de toutes les institutions de la Communauté jusqu’au rétablissement de l’ordre constitutionnel, et appelle les parties malgaches à un dialogue conduisant à des élections libres et régulières.',
      questions: ['Quelle décision la SADC prend-elle, et pour quel motif ?',
        'Quelle condition fixe-t-elle pour le retour de Madagascar ?',
        'Quel enseignement cette source donne-t-elle sur les devoirs d’un État membre ?'],
      reponses: ['La suspension de Madagascar de toutes ses institutions, à cause d’un changement anticonstitutionnel de gouvernement.',
        'Le rétablissement de l’ordre constitutionnel, par le dialogue et des élections libres.',
        'Qu’une adhésion impose des devoirs — respecter l’ordre constitutionnel — et que la place d’un membre peut être suspendue s’il ne les respecte pas.']
    },
    reperes: {
      dates: [['2009-2014', 'suspension de Madagascar des instances de l’UA et de la SADC']],
      mots: [['Impact politique', 'médiation et gestion des crises par la région'],
        ['Impact économique', 'libre-échange, concurrence, investissements'],
        ['Impact socio-culturel', 'lutte contre la pauvreté, libre circulation des hommes, des idées et des cultures'],
        ['Suspension', 'mise à l’écart temporaire d’un membre qui viole les règles communes']]
    },
    idee: {
      faux: 'Adhérer à une organisation n’apporte que des avantages.',
      vrai: 'Non : l’adhésion impose aussi des règles communes, des cotisations, de la concurrence pour nos entreprises — et peut être suspendue en cas de crise grave. Une analyse honnête pèse toujours les deux plateaux de la balance.'
    },
    synthese: 'impacts : politique (gestion des crises, médiation), économique (libre-échange, concurrence, investissements), socio-culturel (lutte contre la pauvreté, libre circulation des hommes, des idées et des cultures) ; l’adhésion = droits et devoirs.',
    saistu: 'Après la crise de 2009, Madagascar a été suspendu des instances de l’Union Africaine et de la SADC pendant près de cinq ans, jusqu’au retour à l’ordre constitutionnel en 2014. La preuve par l’histoire récente : la place d’un pays dans les organisations n’est jamais acquise — elle se mérite et s’entretient.',
    exos: ['Classe chaque impact. a) Des médiateurs régionaux accompagnent un dialogue politique. b) Les droits de douane baissent pour les exportateurs. d) Des étudiants malgaches étudient chez les voisins grâce à un programme commun. e) La concurrence pousse une entreprise locale à moderniser son atelier.',
      'Expliquer. a) Pourquoi la médiation régionale est-elle plus efficace que l’isolement en temps de crise ? b) Que gagne le consommateur au libre-échange ? d) Donne deux exemples de « libre circulation des idées et des cultures ». e) Cite un devoir qui accompagne l’adhésion.',
      'Mini-projet. Ta coopérative veut exporter du girofle vers les pays du COMESA. a) Quel avantage commercial espères-tu ? b) Quels pays membres vises-tu en premier et pourquoi ? d) Quelle contrainte de qualité ou de concurrence dois-tu prévoir ? e) Explique en deux phrases pourquoi l’adhésion de Madagascar rend ce projet possible.'],
    corr: ['a) politique ; b) économique ; d) socio-culturel ; e) économique.',
      'a) parce que des voisins neutres peuvent rapprocher les camps et proposer une feuille de route acceptée de tous ; b) des produits plus variés et moins chers ; d) par exemple des festivals régionaux et des échanges d’étudiants ou d’experts ; e) respecter les règles communes (et l’ordre constitutionnel), payer sa cotisation.',
      'a) des droits de douane réduits vers une vingtaine de pays ; b) par exemple les pays proches à forte demande (Kenya, Égypte, Maurice) pour limiter le transport ; d) la concurrence d’autres producteurs : il faudra une qualité régulière et un bon prix ; e) parce que Madagascar est membre du COMESA, ses produits bénéficient du libre-échange — sans l’adhésion, les taxes rendraient le girofle moins compétitif.'],
    fig: 'u3f4'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Les relations avec l’Afrique et l’océan Indien',
  rag: 'analyser les relations de Madagascar avec les pays africains et les îles de l’océan Indien et interpréter l’impact de l’adhésion aux organisations régionales.',
  valeurs: 'savoir vivre ensemble avec d’autres pays',
  sessions: S,
  revision: {
    table: [
      ['Formes de relations', 'Bilatérale : deux pays ; multilatérale : plusieurs pays (organisation)', 'Classer une relation par sa forme'],
      ['Domaines', 'Diplomatique, militaire, économique, commercial, culturel, technique', 'Identifier le domaine d’une relation'],
      ['OUA / UA', '1963 (Madagascar fondateur) → UA en 2002 ; unité et paix du continent', 'Présenter l’Union Africaine'],
      ['COI', '1982 à Port-Louis ; cinq îles ; Madagascar depuis 1986', 'Présenter la Commission de l’océan Indien'],
      ['COMESA et SADC', 'Marché commun (1994, libre-échange) ; communauté de développement (Madagascar 2005)', 'Distinguer les deux organisations économiques'],
      ['Impacts', 'Politique (crises), économique (libre-échange), socio-culturel (pauvreté, circulation)', 'Interpréter les retombées de l’adhésion']
    ],
    questions: [
      'Donne la différence entre relation bilatérale et multilatérale, avec un exemple malgache de chaque.',
      'Cite les six domaines de relation et illustre deux d’entre eux.',
      'Présente la COI : création, membres, place de Madagascar.',
      'Associe chaque organisation à sa mission : UA, COMESA, SADC, COI.',
      'Donne un impact de l’adhésion par plan : politique, économique, socio-culturel.'
    ],
    answers: [
      'Bilatérale : deux pays (accord de pêche Madagascar-Comores) ; multilatérale : plusieurs pays (adhésion à la COI).',
      'Diplomatique, militaire, économique, commercial, culturel, technique et statutaire — ex. : letchis exportés (commercial), festival régional (culturel).',
      'Créée en 1982 à Port-Louis ; membres : Comores, Madagascar, Maurice, Seychelles, la Réunion (France) ; Madagascar adhère en 1986.',
      'UA : unité et paix du continent ; COMESA : libre-échange ; SADC : développement de l’Afrique australe ; COI : coopération entre les îles.',
      'Politique : médiation lors des crises ; économique : libre-échange et concurrence ; socio-culturel : lutte contre la pauvreté et libre circulation des hommes, des idées et des cultures.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis la relation multilatérale. b) Cite les six domaines de relation. d) Que signifie le sigle COI, et qui en sont les membres ? e) Quelle organisation est née en 1963 et transformée en 2002 ?',
      'Chronologie des adhésions. a) Classe dans l’ordre : adhésion à la COI, fondation de l’OUA, adhésion à la SADC, création du COMESA. b) Donne l’année de chacun de ces quatre événements. d) Depuis combien d’années Madagascar est-il membre de la SADC en 2026 ? e) Place ces quatre dates sur une frise.',
      'Les organisations. a) Mission de l’UA ? b) Mission du COMESA ? d) Pourquoi la SADC n’est-elle pas qu’un marché ? e) Donne le siège de deux de ces organisations.',
      'Étude de situation. Un article annonce la baisse des droits de douane sur les textiles malgaches exportés vers le Kenya. a) Quelle organisation rend cela possible ? b) Quelle forme et quel domaine de relation ? d) Quel impact pour l’usine malgache et pour l’acheteur kényan ? e) Quelle contrainte la concurrence impose-t-elle à l’usine ?',
      'Réflexion organisée. « Adhérer, c’est recevoir et s’engager. » a) Donne deux avantages de l’adhésion pour Madagascar. b) Donne deux devoirs ou contraintes. d) Illustre par l’exemple de la suspension après 2009. e) Conclus en deux phrases : pourquoi Madagascar gagne-t-il à être membre actif des organisations régionales ?'
    ],
    corr: [
      'a) une relation qui unit plusieurs pays, souvent au sein d’une organisation ; b) diplomatique, militaire, économique, commercial, culturel, technique et statutaire ; d) Commission de l’océan Indien — Comores, Madagascar, Maurice, Seychelles, la Réunion (France) ; e) l’OUA, devenue Union Africaine. Un point par item.',
      'a) OUA → COI → COMESA → SADC ; b) 1963 ; 1986 ; 1994 ; 2005 ; d) 2026 − 2005 = 21 ans ; e) frise ordonnée et graduée. Un point par item.',
      'a) l’unité et la paix du continent ; b) le libre-échange de l’Afrique orientale et australe ; d) parce qu’elle agit aussi sur les infrastructures, l’énergie, la paix et la sécurité ; e) UA : Addis-Abeba ; COMESA : Lusaka ; SADC : Gaborone ; COI : Ébène (deux suffisent). Un point par item.',
      'a) le COMESA (ou la SADC) ; b) multilatérale, domaines commercial et économique ; d) l’usine vend plus et l’acheteur paie moins cher ; e) maintenir qualité et prix face aux autres producteurs du marché commun. Un point par item.',
      'a) médiation en cas de crise, libre-échange pour les exportations (ou solidarité des îles) ; b) respecter les règles communes et l’ordre constitutionnel, cotiser et accepter la concurrence ; d) suspendu des instances de l’UA et de la SADC après 2009, Madagascar n’a été réintégré qu’au retour à l’ordre constitutionnel en 2014 ; e) parce qu’un membre actif pèse dans les décisions et transforme l’adhésion en avantages concrets — l’isolement, lui, coûte cher en temps de crise comme en temps de paix. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
