// UNITÉ 5 — LE ROYAUME DE MADAGASCAR 1810-1896 (PE T8) : 3 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
// S1 — frise des souverains
figs.u5f1 = (() => { const { s, y } = head('Les souverains du Royaume de Madagascar', ['Six règnes, de 1810 à 1896.']);
  const top = y + 12;
  const rois = [['Radama I', '1810 – 1828', GREENL, GREEN],
    ['Ranavalona I', '1828 – 1861', '#FDE7EF', PINK2],
    ['Radama II', '1861 – 1863', BLUEL, BLUE],
    ['Rasoherina', '1863 – 1868', GREENL, GREEN],
    ['Ranavalona II', '1868 – 1883', '#FDE7EF', PINK2],
    ['Ranavalona III', '1883 – 1896', BLUEL, BLUE]];
  let b = '';
  rois.forEach(([n, d, f, c], i) => {
    const Y = top + i * 74;
    b += box(130, Y, 400, 56, n, f, c, 23);
    b += arrow(530, Y + 28, 568, Y + 28, OCRE, 3.5);
    b += box(573, Y, 300, 56, d, '#FFFFFF', c, 22);
  });
  b += txt(500, top + 6 * 74 + 20, 'après Radama II, quatre reines se succèdent jusqu’en 1896', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 6 * 74 + 52, s + b); })();
// S2 — les changements sous Radama I
figs.u5f2 = (() => { const { s, y } = head('Radama I : la création du Royaume de Madagascar', ['Traités, armée, écoles : les grands changements.']);
  const top = y + 15;
  const steps = [['1810', 'Radama I poursuit l’unification d’Andrianampoinimerina', GREENL, GREEN],
    ['1817 et 1820', 'traités avec les Anglais : abolition de la traite', BLUEL, BLUE],
    ['armée', 'réorganisation : le foloalindahy', '#FDE7EF', PINK2],
    ['écoles', 'écoles du palais et écoles publiques (dès 1820)', GREENL, GREEN],
    ['élites', 'jeunes envoyés en Angleterre, artisans formés', BLUEL, BLUE],
    ['religion', 'arrivée du christianisme (missionnaires)', '#FDE7EF', PINK2],
    ['expéditions', 'postes : Mahabo, Marovoay, Fort-Dauphin, Tamatave', GREENL, GREEN]];
  let b = '';
  steps.forEach(([d, t, f, c], i) => {
    const Y = top + i * 70;
    b += box(70, Y, 230, 54, d, f, c, 22);
    b += arrow(300, Y + 27, 338, Y + 27, OCRE, 3.5);
    b += box(343, Y, 590, 54, t, '#FFFFFF', c, 20);
  });
  b += txt(500, top + 7 * 70 + 20, 'le royaume de l’Imerina devient le Royaume de Madagascar', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 7 * 70 + 52, s + b); })();
// S3 — l'oligarchie et les Premiers ministres
figs.u5f3 = (() => { const { s, y } = head('L’évolution du Royaume après 1861', ['Reines, Premiers ministres et grandes mesures.']);
  const top = y + 18;
  let b = box(140, top, 720, 56, 'LA REINE règne…', GREENL, GREEN, 23);
  b += arrow(500, top + 56, 500, top + 86, OCRE, 4);
  b += box(140, top + 90, 720, 56, '…mais le PREMIER MINISTRE Hova gouverne', '#FDE7EF', PINK2, 22);
  b += txt(500, top + 178, 'alliance par mariage avec les souveraines successives', 21, '#333', 'normal', 'middle');
  const y2 = top + 205;
  const mesures = [['1869', 'le protestantisme devient religion d’État', BLUEL, BLUE],
    ['1881', 'code des 305 articles', GREENL, GREEN],
    ['opposants', 'déportation des opposants', '#FDE7EF', PINK2],
    ['provinces', 'impôts levés sur les provinces conquises', BLUEL, BLUE],
    ['société', 'castes : Andriana, Hova, olon-tsotra, andevo', GREENL, GREEN]];
  mesures.forEach(([d, t, f, c], i) => {
    const Y = y2 + i * 70;
    b += box(70, Y, 230, 54, d, f, c, 22);
    b += arrow(300, Y + 27, 338, Y + 27, OCRE, 3.5);
    b += box(343, Y, 590, 54, t, '#FFFFFF', c, 20);
  });
  b += txt(500, y2 + 5 * 70 + 20, 'source : le Tantara ny Andriana du R.P. Callet', 21, OCRE, 'bold', 'middle');
  return svg(1000, y2 + 5 * 70 + 52, s + b); })();


const S = [
  {
    t: 'Le Royaume de Madagascar et ses souverains', comp: 'Le Royaume de Madagascar (1810-1896)', theme: 'Localisation du royaume et succession des souverains',
    goal: 'localiser le Royaume de Madagascar et présenter la succession de ses souverains de 1810 à 1896',
    mat: 'Carte de Madagascar, frise des souverains, portraits d’époque',
    revQ: 'Présente les trois castes des royaumes malgaches et les deux volets de leur économie.',
    revRA: 'Libres (Andriana, Hova) et non-libres (andevo) ; agriculture-élevage et traite des esclaves.',
    situation: 'En 1810, un jeune roi d’à peine 18 ans monte sur le trône d’Antananarivo. À sa mort, son royaume ne sera plus celui de l’Imerina, mais le « Royaume de Madagascar », reconnu par les puissances étrangères. Pendant 86 ans, six souverains — un roi fondateur, un fils éphémère et quatre reines — vont diriger cet État avant sa chute en 1896. Qui sont-ils ?',
    legende: 'Six souverains en 86 ans : deux rois, puis — après le bref Radama II — l’ère des reines.',
    motsCles: ['Royaume de Madagascar', 'Antananarivo', 'Andrianampoinimerina', 'Radama I', 'Ranavalona I', 'Radama II', 'Rasoherina', 'Ranavalona II', 'Ranavalona III', '1810', '1896'],
    sections: [
      {
        titre: 'La naissance du royaume',
        paras: [
          'Le royaume naît sur les Hautes Terres : Andrianampoinimerina (vers 1787-1810) a unifié l’Imerina et fixé l’ambition — « la mer sera la limite de ma rizière ». Son fils Radama I (1810-1828) la réalise en grande partie : par les armes et la diplomatie, son autorité s’étend sur la majeure partie de l’île — les puissances étrangères le reconnaissent « roi de Madagascar ».',
        ],
      },
      {
        titre: 'La succession des souverains',
        paras: ['Après Radama I se succèdent cinq souverains :'],
        puces: [
          'Ranavalona I (1828-1861), son épouse : règne le plus long (33 ans), marqué par la défense farouche de l’indépendance et des traditions, la méfiance envers les étrangers et la persécution des chrétiens — mais aussi par l’essor d’une industrie naissante avec Jean Laborde ;',
          'Radama II (1861-1863), son fils : il rouvre grand les portes aux étrangers ; son règne, trop rapide dans ses réformes, s’achève en deux ans par son assassinat ;',
          'Rasoherina (1863-1868), première reine de l’ère nouvelle ;',
          'Ranavalona II (1868-1883), qui fait du protestantisme la religion d’État ;',
          'Ranavalona III (1883-1896), dernière souveraine, qui affrontera la conquête française.',
        ],
      },
      {
        titre: 'Retenir la frise',
        paras: [
          'Derrière les trois dernières reines, le pouvoir réel appartient au Premier ministre : nous le verrons à la séance 3. Mémorise la frise : deux rois, puis — après le bref Radama II — quatre reines au total, et les dates-charnières 1810, 1828, 1861, 1863, 1868, 1883, 1896. Les durées de règne : 18, 33, 2, 5, 15 et 13 ans.',
        ],
      },
    ],
    doc: {
      titre: 'Un visiteur reçu à la cour d’Antananarivo',
      source: 'd’après William Ellis, Three Visits to Madagascar (1858) — extrait adapté',
      texte: 'La ville couvre le sommet et les pentes d’une longue colline, et le palais de la reine la domine tout entière. Reçu en audience, je trouvai la souveraine assise sous un dais écarlate, entourée des grands officiers du royaume vêtus de riches lamba de soie. Des milliers de personnes se tenaient sur la grande place, en silence. Tout, dans le cérémonial — les salutations, les discours prononcés au nom de la reine, le rang de chacun —, montrait la puissance d’un État organisé, avec ses ministres, ses juges et son armée.',
      questions: ['Quels détails montrent la puissance de la monarchie malgache ?',
        'Qui parle « au nom de la reine », et que cela annonce-t-il ?',
        'Pourquoi le témoignage d’un visiteur étranger doit-il être utilisé avec prudence ?'],
      reponses: ['Le palais dominant la ville, le dais, les grands officiers en lamba de soie, la foule silencieuse, le cérémonial réglé : tout manifeste un État organisé et hiérarchisé.',
        'Les discours sont prononcés par les grands officiers : le souverain règne, mais d’autres parlent et agissent pour lui — annonce du rôle croissant des ministres, étudié à la séance 3.',
        'Ellis est un missionnaire étranger : il voit la cour avec ses propres attentes et intérêts ; l’historien croise son récit avec les sources malgaches, comme le Tantara ny Andriana.']
    },
    lexique: [
      ['Souverain', 'celui ou celle qui détient le pouvoir royal'],
      ['Frise', 'ligne du temps ordonnant règnes et dates'],
      ['Rova', 'enceinte royale d’Antananarivo, siège du pouvoir'],
      ['Règne', 'durée pendant laquelle un souverain gouverne'],
    ],
    synthese: 'Royaume de Madagascar : capitale Antananarivo, autorité sur la majeure partie de l’île. Souverains : Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1896).',
    saistu: 'Ranavalona III n’avait que 22 ans à son couronnement — et elle finit sa vie à des milliers de kilomètres de son île : exilée par les Français après 1897, d’abord à La Réunion puis à Alger, elle y mourut en 1917 sans avoir jamais revu Madagascar. Ses cendres ne furent ramenées au Rova d’Antananarivo qu’en 1938.',
    exos: ['La frise. a) Qui règne de 1810 à 1828 ? b) Qui règne 33 ans ? d) Quel règne ne dure que deux ans ? e) Qui est la dernière souveraine ?',
      'Dates. a) Range dans l’ordre : Ranavalona II, Radama I, Rasoherina, Ranavalona I. b) Associe 1868-1883 à son souverain. d) Quelle date clôt le royaume ? e) Combien de reines se succèdent après Radama II ?',
      'Réfléchir. a) D’où le royaume est-il parti ? b) Qui avait commencé l’unification avant 1810 ? d) Pourquoi dit-on « Royaume de Madagascar » et non « de l’Imerina » ? e) Quel souverain affronte la conquête française ?'],
    corr: ['a) Radama I ; b) Ranavalona I (1828-1861) ; d) celui de Radama II (1861-1863) ; e) Ranavalona III.',
      'a) Radama I, Ranavalona I, Rasoherina, Ranavalona II ; b) Ranavalona II ; d) 1896 ; e) trois : Rasoherina, Ranavalona II, Ranavalona III.',
      'a) de l’Imerina, sur les Hautes Terres (capitale Antananarivo) ; b) Andrianampoinimerina ; d) parce que son autorité s’étend sur la majeure partie de l’île et que les puissances étrangères reconnaissent ce titre ; e) Ranavalona III.'],
    fig: 'u5f1'
  },
  {
    t: 'Radama I et la création du Royaume', comp: 'Le Royaume de Madagascar (1810-1896)', theme: 'Unification, traités anglais et modernisation',
    goal: 'expliquer la création du Royaume de Madagascar sous Radama I : unification, traités, armée, écoles et christianisme',
    mat: 'Frise, carte des expéditions, textes des traités',
    revQ: 'Récite la succession des six souverains avec leurs dates.',
    revRA: 'Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1896).',
    situation: 'En 1817, un traité étonnant est signé à Tamatave : le jeune Radama I s’engage à abolir l’exportation d’esclaves — la principale richesse de son royaume ! En échange, les Anglais lui fournissent armes, instructeurs et artisans. Pari risqué, pari gagné : en quinze ans, Radama se dote d’une armée moderne, d’écoles, et d’un royaume qui couvre la majeure partie de l’île. Comment a-t-il fait ?',
    legende: 'Traite abolie contre armes, écoles et instructeurs : le marché de 1817 transforme le royaume.',
    motsCles: ['Radama I', 'traités de 1817 et 1820', 'abolition de la traite', 'foloalindahy', 'écoles du palais', 'London Missionary Society', 'alphabet latin', 'christianisme', 'Mahabo', 'Marovoay', 'Fort-Dauphin', 'Tamatave'],
    sections: [
      {
        titre: 'Le marché des traités anglais',
        paras: [
          'Tout part d’un calcul diplomatique. Les Anglais, maîtres de Maurice depuis 1810, veulent tarir la traite dans l’océan Indien ; Radama veut des armes et des savoirs. Le traité de 1817, renouvelé en 1820, scelle l’échange : abolition de l’exportation des esclaves contre une compensation annuelle — « l’équivalent » en argent, armes et munitions — et l’envoi d’instructeurs.',
        ],
      },
      {
        titre: 'Trois transformations',
        paras: ['Le royaume se transforme en quinze ans :'],
        puces: [
          'l’armée : fini les levées en masse d’autrefois ; Radama bâtit une armée permanente, le foloalindahy (« les cent mille hommes »), instruite à l’européenne par des sergents anglais, disciplinée, articulée en grades ;',
          'l’école : les missionnaires de la London Missionary Society ouvrent dès 1820 les premières écoles — écoles du palais pour les enfants des grands, puis écoles publiques ; le malgache s’écrit désormais en caractères latins ; des milliers d’enfants apprennent à lire ; des jeunes gens partent se former en Angleterre, des artisans missionnaires enseignent la charpente, la forge, l’imprimerie — et avec les missionnaires entre le christianisme, qui gagne du terrain dans l’Imerina ;',
          'l’espace : l’armée nouvelle mène les expéditions qui soumettent l’essentiel de l’île — des postes militaires s’installent à Mahabo (pays sakalava du Menabe), Marovoay (Boina), Fort-Dauphin (sud-est) et Tamatave (côte est), verrous du royaume sur les quatre horizons.',
        ],
      },
      {
        titre: 'Un État reconnu',
        paras: [
          'À la mort de Radama en 1828, l’Imerina est devenue le Royaume de Madagascar : un État reconnu, armé, scolarisé — première modernisation de l’histoire malgache.',
        ],
      },
    ],
    doc: {
      titre: 'Le traité anglo-merina de 1817',
      source: 'd’après le traité conclu à Tamatave entre Radama I et le gouverneur britannique de Maurice (23 octobre 1817) — extraits adaptés',
      texte: 'Article premier. Il y aura paix et amitié perpétuelles entre les sujets du roi Radama et ceux de Sa Majesté britannique. Article 2. Le roi Radama s’engage à interdire, dans tous ses domaines, l’exportation des esclaves, et à punir quiconque enfreindra cette défense. Article 3. En considération de cet engagement, il sera remis chaque année au roi Radama un équivalent en piastres, en armes, en poudre et en uniformes. Il recevra en outre des instructeurs pour ses troupes, et des jeunes gens de son royaume seront reçus pour être instruits.',
      questions: ['Que promet chaque partie dans ce traité ?',
        'Pourquoi peut-on dire que Radama fait un pari risqué mais calculé ?',
        'Ce traité abolit-il l’esclavage à Madagascar ? Justifie précisément.'],
      reponses: ['Radama interdit l’exportation des esclaves ; les Britanniques versent un équivalent annuel (piastres, armes, poudre, uniformes) et fournissent instructeurs et formation pour les jeunes.',
        'Il renonce à une grande source de revenus (la traite), mais obtient en échange armes, argent et savoirs — de quoi bâtir l’armée et les écoles qui feront de lui le maître de l’île.',
        'Non : il abolit seulement l’EXPORTATION des esclaves (la traite extérieure) ; l’esclavage intérieur subsiste dans le royaume jusqu’en 1896.']
    },
    lexique: [
      ['Traité', 'accord officiel signé entre deux États'],
      ['Foloalindahy', 'armée permanente de Radama, « les cent mille hommes »'],
      ['Missionnaire', 'religieux envoyé pour répandre sa foi et enseigner'],
      ['Compensation', 'dédommagement versé en échange d’un engagement'],
    ],
    synthese: 'Radama I : poursuite de l’unification ; traités anglais de 1817 et 1820 (abolition de la traite contre aide) ; armée réorganisée (foloalindahy) ; écoles du palais et publiques dès 1820 ; jeunes formés en Angleterre, artisans ; arrivée du christianisme ; postes de Mahabo, Marovoay, Fort-Dauphin, Tamatave.',
    saistu: 'C’est sous Radama I que le malgache est passé à l’alphabet latin — et la légende raconte que le roi trancha lui-même : les consonnes anglaises, les voyelles « à la française » ! Décidée vers 1823 avec les missionnaires, cette écriture est celle que tu utilises aujourd’hui : chaque ligne que tu écris en malgache doit quelque chose à ce choix royal.',
    exos: ['Les traités. a) Avec qui sont-ils signés ? b) En quelles années ? d) Que promet Radama ? e) Que reçoit-il en échange ?',
      'Les transformations. a) Comment s’appelle la nouvelle armée ? b) Quelles écoles sont créées ? d) Où des jeunes sont-ils envoyés ? e) Quelle religion entre dans le royaume ?',
      'L’expansion. a) Cite les quatre postes militaires. b) Quelle région contrôle Marovoay ? d) Pourquoi des postes sur les côtes ? e) Que devient l’Imerina à la mort de Radama ?'],
    corr: ['a) avec les Anglais ; b) 1817 et 1820 ; d) l’abolition de l’exportation des esclaves (la traite) ; e) une compensation annuelle, des armes, des instructeurs et des artisans.',
      'a) le foloalindahy (« les cent mille hommes ») ; b) les écoles du palais et les écoles publiques (dès 1820) ; d) en Angleterre ; e) le christianisme, avec les missionnaires.',
      'a) Mahabo, Marovoay, Fort-Dauphin, Tamatave ; b) le Boina, au nord-ouest ; d) pour contrôler les ports et le commerce et verrouiller le royaume ; e) le Royaume de Madagascar, reconnu par les puissances étrangères.'],
    fig: 'u5f2'
  },
  {
    t: 'L’oligarchie merina et les Premiers ministres Hova', comp: 'Le Royaume de Madagascar (1810-1896)', theme: 'L’évolution de l’organisation du royaume après 1861',
    goal: 'expliquer l’évolution du royaume : pouvoir des Premiers ministres Hova, code des 305 articles et société',
    mat: 'Schéma du pouvoir, extraits du code des 305 articles, documents',
    revQ: 'Que prévoient les traités de 1817 et 1820, et cite deux transformations de Radama I.',
    revRA: 'Abolition de la traite contre aide anglaise ; armée (foloalindahy), écoles, jeunes en Angleterre, christianisme (deux suffisent).',
    situation: 'Officiellement, de 1863 à 1896, trois reines gouvernent Madagascar. En réalité, un seul homme dirige : Rainilaiarivony, Premier ministre pendant 31 ans — et époux, successivement, des trois souveraines ! Derrière le trône, une petite élite de grandes familles hova tient l’armée, le commerce et l’administration. Comment ce pouvoir s’organise-t-il, et sur quelles lois s’appuie-t-il ?',
    legende: 'Trois reines, un seul gouvernant : le Premier ministre Rainilaiarivony et son clan tiennent le royaume.',
    motsCles: ['oligarchie', 'grandes familles hova', 'Premier ministre', 'Rainilaiarivony', 'code des 305 articles', '1881', 'déportation', 'impôts', 'olon-tsotra', 'protestantisme religion d’État', '1869', 'Tantara ny Andriana'],
    sections: [
      {
        titre: 'La reine règne, le Premier ministre gouverne',
        paras: [
          'Une oligarchie est le gouvernement d’un petit nombre. Celle du royaume naît d’un basculement : à la mort de Radama II (1863), les grandes familles hova — enrichies par le commerce et les charges — imposent un contrat aux souveraines : la reine règne, mais ne décide plus seule ; le Premier ministre, issu de leur rang, gouverne. L’alliance se scelle par le mariage : Rainilaiarivony épouse successivement Rasoherina, Ranavalona II et Ranavalona III — trois reines, un seul gouvernant, de 1864 à 1895.',
        ],
      },
      {
        titre: 'Les instruments du pouvoir',
        paras: ['L’oligarchie gouverne avec trois instruments :'],
        puces: [
          'la loi : le code des 305 articles, promulgué en 1881, rassemble en un seul texte le droit du royaume — organisation de la justice, mariage, propriété, écoles rendues obligatoires, peines ; c’est l’une des premières codifications modernes d’Afrique ;',
          'la contrainte : les opposants sont déportés, les provinces conquises paient l’impôt et fournissent corvées et soldats — ce qui nourrit des résistances durables chez les peuples soumis ;',
          'la religion : en 1869, Ranavalona II et le Premier ministre se font baptiser — protestants ; le protestantisme devient religion d’État, les temples se multiplient, l’école missionnaire aussi.',
        ],
      },
      {
        titre: 'Société et sources',
        paras: [
          'La société reste une pyramide : Andriana (nobles), Hova (libres), olon-tsotra (gens du commun) et andevo (non-libres).',
          'Sur tout cela, une source exceptionnelle nous renseigne : le Tantara ny Andriana, recueil des traditions orales de l’Imerina collectées par le père jésuite François Callet dans les années 1860-1870 — des milliers de pages en malgache, mémoire écrite d’un royaume.',
        ],
      },
    ],
    doc: {
      titre: 'Le code des 305 articles',
      source: 'd’après le code promulgué au nom de la reine Ranavalona II (29 mars 1881) — extraits adaptés',
      texte: 'Article 1. Voici les lois que je donne à mon royaume ; elles s’appliquent à tous, dans toute l’île. Article 85. Tous les enfants, garçons et filles, ayant l’âge requis, devront fréquenter l’école ; les parents qui les en empêcheront seront punis d’une amende. Article 118. Nul ne peut être condamné sans avoir été jugé selon les lois. Article 262. Quiconque trahira le royaume ou passera à l’ennemi sera puni de la peine la plus sévère.',
      questions: ['Relève un article qui modernise le royaume et explique pourquoi.',
        'Quel article protège les habitants contre l’arbitraire ? Que garantit-il ?',
        'Montre, avec l’article 262, que le code sert aussi à verrouiller le pouvoir.'],
      reponses: ['L’article 85 : l’école obligatoire pour les garçons ET les filles — une mesure très avancée pour l’époque, qui fait du royaume un pionnier de la scolarisation.',
        'L’article 118 : nul ne peut être condamné sans jugement selon les lois — c’est le principe de la légalité des peines, protection contre l’arbitraire.',
        'L’article 262 punit de la peine la plus sévère toute trahison : il permet d’écarter durement les opposants — le même code qui modernise sert aussi à défendre l’oligarchie au pouvoir.']
    },
    lexique: [
      ['Oligarchie', 'gouvernement d’un petit nombre de familles ou de personnes'],
      ['Code', 'recueil ordonné des lois d’un État'],
      ['Déportation', 'peine consistant à exiler un condamné loin de chez lui'],
      ['Religion d’État', 'religion officielle adoptée par le pouvoir'],
    ],
    synthese: 'Oligarchie merina : grandes familles hova ; Premier ministre (Rainilaiarivony) marié aux reines successives ; code des 305 articles (1881) ; déportation des opposants ; impôts des provinces conquises ; castes Andriana, Hova, olon-tsotra, andevo ; protestantisme religion d’État (1869) ; source : Tantara ny Andriana du R.P. Callet.',
    saistu: 'Le Tantara ny Andriana est un trésor unique : le père Callet n’a presque rien écrit lui-même — il a noté, en malgache, ce que les anciens de l’Imerina lui racontaient : généalogies, coutumes, discours royaux… Près de 1 200 pages de mémoire orale devenue livre ! C’est exactement la démarche de l’Histoire orale que tu as apprise à l’unité I — appliquée il y a 150 ans.',
    exos: ['Le pouvoir. a) Qu’est-ce qu’une oligarchie ? b) De quel groupe social viennent les Premiers ministres ? d) Comment s’allient-ils aux reines ? e) Qui gouverne de 1864 à 1895 ?',
      'Les instruments. a) Que rassemble le code des 305 articles, et en quelle année ? b) Que deviennent les opposants ? d) Que paient les provinces conquises ? e) Quelle religion devient religion d’État, et quand ?',
      'Société et sources. a) Cite les quatre groupes de la société. b) Qui a recueilli le Tantara ny Andriana ? d) Qu’est-ce que ce livre contient ? e) Pourquoi est-il précieux pour l’historien ?'],
    corr: ['a) le gouvernement d’un petit nombre ; b) des grandes familles hova ; d) par le mariage du Premier ministre avec les souveraines successives ; e) le Premier ministre Rainilaiarivony.',
      'a) l’ensemble du droit du royaume (justice, mariage, propriété, écoles, peines), en 1881 ; b) ils sont déportés ; d) impôts, corvées et soldats ; e) le protestantisme, en 1869.',
      'a) Andriana, Hova, olon-tsotra, andevo ; b) le père jésuite François Callet ; d) les traditions orales de l’Imerina : généalogies, coutumes, discours royaux ; e) parce qu’il fixe par écrit des siècles de mémoire orale — source majeure sur le royaume.'],
    fig: 'u5f3'
  }
];


const unit5 = {
  no: 5, roman: 'V', name: 'Le Royaume de Madagascar (1810-1896)',
  rag: 'porter un regard sur la réalité sociale à Madagascar en exploitant les traces du passé à partir de sources historiques.',
  valeurs: 'esprit d’analyse, identité culturelle malgache',
  sessions: S,
  revision: {
    table: [
      ['Les six souverains', 'Radama I 1810-28, Ranavalona I 1828-61, Radama II 1861-63, Rasoherina 1863-68, Ranavalona II 1868-83, Ranavalona III 1883-96', 'Réciter la frise des règnes'],
      ['Traités anglais', '1817 et 1820 : abolition de la traite contre compensation, armes, instructeurs', 'Expliquer le marché de Radama I'],
      ['Modernisation', 'Foloalindahy ; écoles du palais et publiques (1820) ; jeunes en Angleterre ; artisans ; christianisme', 'Lister les transformations'],
      ['Expansion', 'Postes militaires : Mahabo, Marovoay, Fort-Dauphin, Tamatave', 'Situer les verrous du royaume'],
      ['Oligarchie hova', 'Premier ministre marié aux reines ; code des 305 articles (1881) ; déportations ; impôts des provinces', 'Expliquer le pouvoir réel'],
      ['Société et religion', 'Andriana, Hova, olon-tsotra, andevo ; protestantisme religion d’État (1869) ; source : Callet', 'Décrire la société du royaume']
    ],
    questions: [
      'Récite les six souverains et leurs dates.',
      'Que prévoient les traités de 1817 et 1820 ?',
      'Cite quatre transformations du royaume sous Radama I.',
      'Explique le mécanisme du pouvoir après 1863 : reine, Premier ministre, oligarchie.',
      'Qu’est-ce que le code des 305 articles et le Tantara ny Andriana ?'
    ],
    answers: [
      'Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1896).',
      'L’abolition de l’exportation des esclaves contre une compensation annuelle, des armes et des instructeurs anglais.',
      'Armée permanente (foloalindahy), écoles du palais et publiques, jeunes formés en Angleterre et artisans, arrivée du christianisme — et postes militaires sur les côtes.',
      'La reine règne et incarne la légitimité ; le Premier ministre hova, allié par mariage, gouverne avec les grandes familles de l’oligarchie merina.',
      'Le code de 1881 rassemble tout le droit du royaume en 305 articles ; le Tantara ny Andriana est le recueil des traditions orales de l’Imerina noté par le R.P. Callet — source majeure.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Donne les dates du Royaume de Madagascar. b) Qui poursuit l’œuvre d’Andrianampoinimerina ? d) Qu’est-ce que le foloalindahy ? e) Qu’est-ce qu’une oligarchie ?',
      'La frise des souverains. a) Range : Rasoherina, Radama II, Ranavalona I, Ranavalona III. b) Qui règne le plus longtemps ? d) Associe 1868-1883 à sa souveraine. e) Combien de reines après Radama II ?',
      'Radama I. a) Que cède-t-il par les traités de 1817 et 1820 ? b) Que reçoit-il ? d) Cite les quatre postes militaires. e) Quelles écoles ouvrent dès 1820 ?',
      'Le pouvoir après 1861. a) Comment le Premier ministre s’allie-t-il aux reines ? b) Que promulgue-t-il en 1881 ? d) Comment traite-t-il les opposants ? e) Que paient les provinces conquises ?',
      'Société, religion, sources. a) Cite les quatre groupes de la société. b) Quelle religion devient religion d’État en 1869 ? d) Qui écrit le Tantara ny Andriana, et comment ? e) Montre que ce livre relève de l’Histoire orale.'
    ],
    corr: [
      'a) 1810-1896 ; b) son fils Radama I ; d) l’armée permanente du royaume (« les cent mille hommes ») ; e) le gouvernement d’un petit nombre. Un point par item.',
      'a) Ranavalona I, Radama II, Rasoherina, Ranavalona III ; b) Ranavalona I (33 ans) ; d) Ranavalona II ; e) trois. Un point par item.',
      'a) l’exportation des esclaves (la traite) ; b) compensation annuelle, armes, instructeurs, artisans ; d) Mahabo, Marovoay, Fort-Dauphin, Tamatave ; e) les écoles du palais et les écoles publiques. Un point par item.',
      'a) par le mariage avec les souveraines successives ; b) le code des 305 articles ; d) il les déporte ; e) impôts, corvées et soldats. Un point par item.',
      'a) Andriana, Hova, olon-tsotra, andevo ; b) le protestantisme ; d) le R.P. Callet, en notant les récits des anciens de l’Imerina ; e) il est né d’entretiens avec des témoins, retranscrits puis rassemblés en dossier — la démarche de l’Histoire orale. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
