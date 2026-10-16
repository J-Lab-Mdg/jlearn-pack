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
    legende: 'Les terrasses de rizières des collines betsileo ont des sœurs jumelles à Bali et à Java.',
    motsCles: ['apport austronésien', 'fonds de la langue', 'pêche', 'commerce', 'riziculture en terrasse', 'lamba', 'bantou', 'swahili', 'zébu', 'pirogue à balancier', 'bateau cousu', 'boutre'],
    sections: [
      {
        titre: 'Trois apports fondateurs',
        paras: ['Chaque civilisation d’origine a fourni sa part du mode de vie malgache :'],
        puces: [
          'l’apport austronésien, le socle : la langue — le malgache appartient à la famille austronésienne, et ses mots les plus quotidiens le prouvent : vary (le riz), omby (le bœuf), salama (le salut), trano (la maison) — ; la pêche et la navigation, arts des peuples de la mer ; le commerce, qui reliait déjà les îles ;',
          'l’apport indonésien : la riziculture en terrasse, prodige d’ingénierie qui sculpte les collines en escaliers irrigués — regarde les terrasses betsileo : c’est l’Asie du Sud-Est à Madagascar — et des manières de se vêtir, comme le lamba drapé ;',
          'l’apport africain : les langues bantou et swahili ont fourni quantité de mots, surtout pour les animaux — akoho (la poule, kuku en swahili), ondry (le mouton) — et les techniques d’élevage du zébu, venu d’Afrique avec ses bergers.',
        ],
      },
      {
        titre: 'Les trois bateaux des migrants',
        paras: ['Trois bateaux racontent les trois routes :'],
        puces: [
          'la pirogue à balancier, stable grâce à son flotteur, est la signature austronésienne — on la voit encore chez les Vezo ;',
          'le bateau cousu, aux planches liées par des fibres végétales sans un seul clou, naviguait sur tout l’océan Indien ;',
          'le boutre (botry), à la voile triangulaire, est le cargo des côtes africaine et arabe — il dessert toujours Mahajanga !',
        ],
      },
      {
        titre: 'Un tissage inséparable',
        paras: [
          'Le mode de vie malgache est un tissage : fils asiatiques et fils africains, serrés au point de ne plus pouvoir les séparer. Aucune pratique n’est restée identique à son origine : la riziculture indonésienne s’est mariée au zébu africain — mariage qui n’existe nulle part ailleurs.',
        ],
      },
    ],
    doc: {
      titre: 'Les bateaux cousus de l’océan Indien',
      source: 'd’après le Périple de la mer Érythrée, guide de navigation grec (Iᵉʳ siècle) — extrait adapté',
      texte: 'Au-delà des côtes d’Azanie, en Afrique orientale, se trouve le dernier comptoir, appelé Rhapta — nom qui lui vient des petites embarcations cousues dont les habitants se servent. On y trouve en abondance l’ivoire et l’écaille de tortue. Les marchands venus d’Arabie y commercent, connaissent les lieux et les langues, et s’unissent parfois aux habitants. La mer, au-delà, est inexplorée.',
      questions: ['D’où le comptoir de Rhapta tire-t-il son nom, d’après le texte ?',
        'Que nous apprend ce document, vieux de deux mille ans, sur la navigation dans l’océan Indien ?',
        'Pourquoi ce témoignage intéresse-t-il l’historien du peuplement de Madagascar ?'],
      reponses: ['Des « petites embarcations cousues » des habitants : les bateaux aux planches liées par des fibres, sans clous — les bateaux cousus de la leçon.',
        'Que dès l’Antiquité, l’océan Indien était une route de commerce active : comptoirs africains, marchands arabes, bateaux cousus, échanges et mariages.',
        'Parce qu’il prouve que les routes maritimes empruntées plus tard par les migrants vers Madagascar fonctionnaient déjà : l’île est née de cette autoroute maritime.']
    },
    lexique: [
      ['Fonds de la langue', 'vocabulaire de base hérité des premiers locuteurs'],
      ['Riziculture en terrasse', 'culture du riz en escaliers irrigués sur les pentes'],
      ['Bateau cousu', 'navire aux planches liées par des fibres, sans clous'],
      ['Boutre (botry)', 'voilier de charge des côtes arabo-africaines'],
    ],
    synthese: 'austronésien : commerce, pêche, fonds de la langue (omby, vary, salama) ; indonésien : riziculture en terrasse, habillement ; africain : mots bantou-swahili (animaux), élevage du zébu ; transports : pirogue à balancier, bateau cousu, boutre.',
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
    legende: 'Des lettres arabes qui se lisent en malgache : le katibo trace le sorabe, héritage des boutres du IXᵉ siècle.',
    motsCles: ['comptoirs', 'monnaies', 'royauté', 'notion d’État', 'sorabe', 'katibo', 'Antemoro', 'sikidy', 'astrologie', 'vintana', 'circoncision', 'valitanana'],
    sections: [
      {
        titre: 'Les plans économique et politique',
        paras: [
          'Plan économique : les Antalaotra tiennent des comptoirs — Mahilaka, Langany, les ports du Nord-Ouest — où l’on échange or, fer, esclaves, tissus et perles contre les produits de l’océan Indien ; les monnaies y circulent, nouveauté dans l’île du troc.',
          'Plan politique : les royautés du Sud-Est et d’ailleurs empruntent aux islamisés des idées d’État : un souverain sacré, des institutions, des conseillers lettrés — les katibo, scribes du sorabe, serviront plus tard les rois merina eux-mêmes.',
        ],
      },
      {
        titre: 'Le plan socio-culturel, le plus riche',
        paras: ['Les héritages culturels sont innombrables :'],
        puces: [
          'l’écriture sorabe — la langue malgache notée en caractères arabes — fait entrer l’île dans l’écrit ; les Antemoro en sont les gardiens, leurs manuscrits conservent généalogies, remèdes et savoirs secrets ;',
          'les chiffres, l’astrologie et le calendrier : les noms des jours et des destins (vintana) viennent de l’arabe ; le devin ombiasy lit les jours fastes et néfastes ;',
          'la géomancie sikidy, divination par les graines, descend du « ilm al-raml » arabe ;',
          'la circoncision (famorana), devenue une grande fête familiale malgache ;',
          'des éléments d’architecture et d’artisanat, et des valeurs d’entraide et de solidarité — le valitanana, l’aide rendue main pour main.',
        ],
      },
      {
        titre: 'Des apports malgachisés',
        paras: [
          'Comme toujours, Madagascar a tout adapté : le sikidy s’est marié au culte des ancêtres, le calendrier arabe au vintana — l’héritage est devenu pleinement malgache. L’île a adopté l’écriture, les sciences et des coutumes, mais la religion est restée minoritaire : on a pris les outils plus que la foi.',
        ],
      },
    ],
    doc: {
      titre: 'Les lettrés du Sud-Est et leurs livres',
      source: 'd’après Étienne de Flacourt, Histoire de la Grande Isle Madagascar (1658) — extrait adapté',
      texte: 'Ceux du pays de Matitanana ont des livres qu’ils écrivent en caractères arabes, sur un papier qu’ils fabriquent eux-mêmes avec l’écorce d’un arbre et qu’ils lustrent avec soin. Leurs ombiasses, qui sont leurs écrivains et devins, enseignent aux enfants à lire et à écrire ces caractères ; ils gardent dans leurs livres la mémoire de leurs généalogies, leurs remèdes et la science des jours bons et mauvais, qu’ils consultent pour toute affaire d’importance.',
      questions: ['Qui est l’auteur de ce témoignage et à quelle époque écrit-il ?',
        'Quels usages des livres en caractères arabes le texte décrit-il ?',
        'Quel nom la leçon donne-t-elle à cette écriture et à ses gardiens ?'],
      reponses: ['Étienne de Flacourt, gouverneur français installé à Fort-Dauphin, au XVIIᵉ siècle (1658) — un témoin direct.',
        'Noter les généalogies, les remèdes et la science des jours fastes et néfastes ; enseigner la lecture et l’écriture aux enfants.',
        'Le sorabe, écriture de la langue malgache en caractères arabes, gardé par les katibo et devins antemoro du Sud-Est (région de Matitanana).']
    },
    lexique: [
      ['Sorabe', 'la langue malgache écrite en caractères arabes'],
      ['Katibo', 'scribe et lettré antemoro, gardien des manuscrits'],
      ['Sikidy', 'divination par les graines, héritée du « ilm al-raml » arabe'],
      ['Valitanana', 'entraide : l’aide rendue main pour main'],
    ],
    synthese: 'économique : comptoirs, monnaies ; politique : royauté, notion d’État, institutions ; socio-culturel : sorabe (gardé par les Antemoro), chiffres, astrologie et vintana, sikidy, circoncision, architecture, artisanat, valitanana — des apports adaptés et malgachisés.',
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
    legende: 'L’école, l’alphabet, le temple, le port : autant d’héritages de la vague venue de l’Ouest.',
    motsCles: ['marine marchande', 'industrie', 'Mantasoa', 'Jean Laborde', 'État moderne', 'valeurs républicaines', 'christianisme', 'école 1818', 'alphabet latin 1823', 'armée de métier', 'esprit critique'],
    sections: [
      {
        titre: 'Les plans économique et politique',
        paras: [
          'Plan économique : la marine marchande relie l’île au commerce mondial — comptoirs de traite d’abord, puis grandes compagnies ; au XIXᵉ siècle, Jean Laborde installe pour Ranavalona Iʳᵉ à Mantasoa une cité industrielle — fonderie, canons, verre, savon : l’industrie entre à Madagascar.',
          'Plan politique : au contact des Européens, le Royaume de Madagascar se dote des outils de l’État moderne — code de lois écrites, ministères, diplomatie, traités internationaux ; plus tard, les valeurs républicaines — élections, constitution, citoyenneté — fonderont la République malgache.',
        ],
      },
      {
        titre: 'Le plan socio-culturel, le plus profond',
        paras: ['Trois jalons transforment la culture :'],
        puces: [
          'en 1818, les missionnaires gallois de la LMS ouvrent les premières écoles ; l’école se répand — avant bien des pays d’Europe, l’Imerina du XIXᵉ siècle scolarise massivement ses enfants ;',
          'en 1823, Radama Iᵉʳ décide que le malgache s’écrira en alphabet latin — vingt et une lettres, sans c, q, u, w, x ;',
          'en 1835, la Bible malgache est le premier grand livre imprimé dans la langue : le christianisme s’enracine, mêlé aux traditions ; l’armée de métier, avec grades et uniformes, remplace peu à peu les levées guerrières.',
        ],
      },
      {
        titre: 'Peser les deux plateaux',
        paras: [
          'L’esprit critique s’impose : ces héritages sont arrivés mêlés d’intérêts — commerce inégal, rivalités franco-britanniques, puis colonisation (1896-1960), que tu étudieras en T8. L’historien pèse les deux plateaux : des outils précieux — école, écriture, État — et une domination qui a coûté la souveraineté. Hériter n’est pas approuver : c’est comprendre.',
        ],
      },
    ],
    doc: {
      titre: 'Les premières écoles et l’alphabet du malgache',
      source: 'd’après les journaux des missionnaires de la London Missionary Society à Antananarivo (années 1820) — texte reconstitué',
      texte: 'Le roi Radama nous a accordé d’ouvrir des écoles, et les enfants y accourent plus nombreux chaque mois. Restait la grande question : avec quelles lettres écrire la langue de ce pays ? Après de longues discussions, le roi a tranché : les consonnes s’écriront à la manière anglaise, les voyelles à la manière française, et chaque son n’aura qu’une seule lettre. Ainsi la langue malgache possède désormais son alphabet, et les écoliers apprennent à lire dans leur propre langue — bientôt, des livres entiers pourront être imprimés ici même.',
      questions: ['Quelle décision du roi Radama Iᵉʳ ce texte rapporte-t-il, et de quand date-t-elle ?',
        'Quel principe rend l’alphabet malgache facile à lire ?',
        'Quel « grand livre » imprimé en 1835 confirmera la réussite annoncée à la fin du texte ?'],
      reponses: ['L’adoption de l’alphabet latin pour écrire le malgache, en 1823 : consonnes à l’anglaise, voyelles à la française.',
        'Chaque son n’a qu’une seule lettre : on lit comme on prononce — un alphabet de vingt et une lettres, sans c, q, u, w, x.',
        'La Bible malgache de 1835, premier grand livre imprimé dans la langue nationale.']
    },
    lexique: [
      ['LMS', 'London Missionary Society, mission galloise arrivée en 1818'],
      ['Alphabet latin', 'alphabet adopté en 1823 pour écrire le malgache'],
      ['Armée de métier', 'armée permanente de soldats formés, avec grades'],
      ['Esprit critique', 'examen des apports ET des coûts d’un héritage'],
    ],
    synthese: 'économique : marine marchande, commerce, industrie (Mantasoa) ; politique : État moderne, institutions, valeurs républicaines ; socio-culturel : christianisme, école (1818), alphabet latin (1823), armée de métier ; des héritages mêlés d’intérêts — à évaluer avec esprit critique.',
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
    legende: 'Antandroy, Betsileo, Vezo, Sihanaka, Merina : une mosaïque de groupes — un seul tableau malgache.',
    motsCles: ['groupes de population', 'héritage culturel', 'culture matérielle', 'coutumes', 'aloalo', 'tromba', 'identité culturelle', 'patrimoine identitaire', 'connaître', 'respecter', 'transmettre'],
    sections: [
      {
        titre: 'Chaque groupe cultive son héritage',
        paras: [
          'Les Antandroy, pasteurs du Sud épineux, élèvent leurs grands troupeaux et sculptent les aloalo des tombeaux ; les Bara, cavaliers du zébu, gardent leurs rites de bravoure ; les Betsileo sculptent les collines en terrasses ; les Vezo, « nomades de la mer », vivent de la pirogue ; les Sihanaka moissonnent le lac Alaotra ; les Sakalava conservent les reliques royales et le tromba ; les Betsimisaraka, « les nombreux inséparables », peuplent la côte Est du girofle et de la vanille ; les Merina ont bâti les rova des hautes terres ; les Mikea vivent de la forêt, les Tsimihety des collines du Nord, les Masikoro de l’élevage de l’Ouest...',
          'La culture matérielle varie — case de bois du Sud, maison de brique rouge des plateaux, case de ravinala de l’Est — comme varient les coutumes : famadihana ici, savatse là, tromba ailleurs.',
        ],
      },
      {
        titre: 'Le fil commun de l’identité malgache',
        paras: [
          'Sous la mosaïque court un même fil : la langue, le respect des razana, le fihavanana, le riz et le zébu — les caractères uniques de l’identité malgache, tissés par quinze siècles de brassage austronésien, africain, arabe et européen.',
        ],
      },
      {
        titre: 'Revaloriser le patrimoine identitaire',
        paras: ['Une identité ne vit que portée — et c’est ta génération qui la porte désormais. Revaloriser cette identité, mission que le programme te confie, c’est :'],
        puces: [
          'connaître : enquêter sur l’héritage de SON groupe et de sa localité, comme en Histoire orale ;',
          'respecter : aucun groupe n’est « plus malgache » qu’un autre ;',
          'transmettre : exposés, fêtes d’école, collectes de contes et de savoir-faire.',
        ],
      },
    ],
    doc: {
      titre: 'Les aloalo, mémoire sculptée du Sud',
      source: 'd’après les notices des musées et les études sur l’art funéraire mahafaly et antandroy — texte reconstitué',
      texte: 'Sur les tombeaux de pierre du grand Sud se dressent les aloalo : des poteaux de bois dur, hauts parfois de deux mètres, sculptés d’étages de motifs. On y lit la vie du défunt comme dans un livre debout : ses zébus, sa pirogue, sa maison — et sur les plus récents, un taxi-brousse, un avion, une bicyclette. Chaque aloalo est unique, taillé par un sculpteur dont le savoir se transmet de père en fils. Des musées du monde entier exposent aujourd’hui ces œuvres, et les voyageurs viennent de loin admirer un art que seul Madagascar possède.',
      questions: ['Qu’est-ce qu’un aloalo et que représente-t-il ?',
        'Quel détail du texte montre que cette tradition reste vivante et évolue ?',
        'En quoi ce document illustre-t-il la mission « connaître, respecter, transmettre » de la leçon ?'],
      reponses: ['Un poteau funéraire sculpté dressé sur les tombeaux du Sud : il raconte la vie du défunt en scènes superposées — zébus, pirogue, maison.',
        'Les motifs modernes — taxi-brousse, avion, bicyclette — prouvent que les sculpteurs continuent de créer en racontant la vie d’aujourd’hui.',
        'Le savoir se transmet de père en fils (transmettre) ; le monde entier l’admire (respecter) ; et l’étudier en classe, c’est le connaître : l’art d’un groupe est devenu fierté de toute la nation.']
    },
    lexique: [
      ['Culture matérielle', 'objets, habitat et techniques du quotidien d’un groupe'],
      ['Aloalo', 'poteau funéraire sculpté des tombeaux du Sud'],
      ['Identité culturelle', 'ensemble des caractères uniques d’un peuple'],
      ['Patrimoine identitaire', 'héritage commun à connaître, respecter, transmettre'],
    ],
    synthese: 'des groupes de population aux héritages propres (habitat, coutumes, arts) ; un fil commun : langue, razana, fihavanana, riz-zébu ; identité malgache = caractères uniques nés du brassage ; mission : connaître, respecter, transmettre — revaloriser le patrimoine identitaire.',
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
