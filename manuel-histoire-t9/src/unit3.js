// UNITÉ 3 — LA DÉCOLONISATION (PE T9) : 4 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, BLUEL, OCRE } = L;

const figs = {};
const chain = (titre, sous, steps, h = 64) => { const { s, y } = head(titre, [sous]);
  const top = y + 15; let b = '';
  steps.forEach((t, i) => { b += box(90, top + i * (h + 12), 820, h, t, i % 2 ? BLUEL : GREENL, i % 2 ? BLUE : GREEN, 21);
    if (i < steps.length - 1) b += arrow(500, top + i * (h + 12) + h, 500, top + (i + 1) * (h + 12), PINK2, 4); });
  return svg(1000, top + steps.length * (h + 12) + 20, s + b); };
const duo = (titre, sous, t1, l1, t2, l2) => { const { s, y } = head(titre, [sous]);
  const top = y + 15; let b = txt(255, top + 8, t1, 23, GREEN, 'bold', 'middle') + txt(745, top + 8, t2, 23, BLUE, 'bold', 'middle');
  l1.forEach((t, i) => { b += box(40, top + 30 + i * 62, 430, 50, t, GREENL, GREEN, 19); });
  l2.forEach((t, i) => { b += box(530, top + 30 + i * 62, 430, 50, t, BLUEL, BLUE, 19); });
  const n = Math.max(l1.length, l2.length);
  return svg(1000, top + 30 + n * 62 + 20, s + b); };

figs.u3f1 = duo('Les facteurs de la décolonisation', ['Pourquoi les empires s’effondrent-ils après 1945 ?'],
  'FACTEURS EXTERNES', ['la 2GM affaiblit et discrédite l’Europe', 'Brazzaville (1944) : des réformes promises', 'ONU : droit des peuples à disposer d’eux-mêmes', 'États-Unis et URSS hostiles au colonialisme'],
  'FACTEURS INTERNES', ['montée des nationalismes', 'retour des anciens combattants', 'élites instruites qui réclament l’égalité', 'misère et injustices du système colonial']);
figs.u3f2 = chain('Les étapes de la décolonisation', ['L’Asie d’abord, l’Afrique ensuite.'],
  ['1945-1955 : l’Asie — Indonésie (1945), Inde (1947), Indochine (1954)', '1957 : le Ghana ouvre la voie en Afrique noire', '1960 : « l’année de l’Afrique » — 17 indépendances, dont Madagascar (26 juin)', '1962 : l’Algérie indépendante après huit ans de guerre', '1975 : les colonies portugaises (Angola, Mozambique), dernières libérées']);
figs.u3f3 = duo('Deux formes de décolonisation', ['Négociation ou guerre.'],
  'VOIE PACIFIQUE / NÉGOCIÉE', ['Inde : non-violence de Gandhi (1947)', 'Ghana (1957), Sénégal (1960)', 'Madagascar : loi-cadre 1956,', 'référendum 1958, indépendance 1960'],
  'VOIE VIOLENTE', ['Indochine : guerre 1946-1954', 'Algérie : guerre 1954-1962', 'Angola, Mozambique : luttes armées', 'Madagascar : insurrection de 1947 réprimée']);
figs.u3f4 = chain('L’émergence du Tiers-Monde', ['Les nouveaux États veulent exister ensemble.'],
  ['1952 : Alfred Sauvy invente l’expression « Tiers-Monde »', '1955 : conférence de Bandung — 29 pays d’Asie et d’Afrique', 'Bandung condamne le colonialisme et le racisme', '1956 : Brioni — Nehru, Nasser, Tito refusent les deux blocs', '1961 : conférence de Belgrade — le mouvement des non-alignés est né']);

const S = [
  {
    t: 'Les origines de la décolonisation', comp: 'La décolonisation', theme: 'Facteurs externes et facteurs internes',
    goal: 'définir la décolonisation et expliquer ses facteurs externes et internes',
    mat: 'Carte des empires coloniaux en 1945, documents, schéma',
    revQ: 'Caractérise le monde depuis 1990 en trois traits.',
    revRA: 'Hyperpuissance américaine puis monde multipolaire ; mondialisation accélérée ; conflits et terrorisme (Yougoslavie, Rwanda 1994, 11 septembre 2001).',
    situation: 'En 1939, presque toute l’Afrique et une grande partie de l’Asie vivent sous drapeau européen. Trente ans plus tard, presque tous ces territoires sont des États indépendants — dont Madagascar, depuis le 26 juin 1960. Comment un système vieux de plusieurs décennies, défendu par des armées puissantes, s’est-il effondré en une génération ? La réponse tient en deux mots : le monde avait changé, et les peuples colonisés aussi.',
    legende: 'Après 1945, le vent de l’Histoire souffle contre les empires : les peuples colonisés relèvent la tête.',
    motsCles: ['décolonisation', 'indépendance', 'facteurs externes', 'Seconde Guerre mondiale', 'conférence de Brazzaville', '1944', 'ONU', 'anticolonialisme', 'facteurs internes', 'nationalisme', 'anciens combattants', 'élites instruites'],
    sections: [
      {
        titre: 'Qu’est-ce que la décolonisation ?',
        paras: [
          'La décolonisation est le processus par lequel les colonies accèdent à l’indépendance et deviennent des États souverains. Elle se déroule pour l’essentiel entre 1945 et 1975, en deux vagues : l’Asie d’abord, l’Afrique ensuite. Elle résulte de la rencontre de deux forces : des facteurs externes, qui affaiblissent les colonisateurs, et des facteurs internes, qui soulèvent les colonisés.',
        ],
      },
      {
        titre: 'Les facteurs externes',
        paras: ['Après 1945, le contexte international se retourne contre la colonisation :'],
        puces: [
          'la Seconde Guerre mondiale a ruiné et affaibli les puissances européennes — et détruit leur prestige : les colonisés ont vu leurs « maîtres » vaincus, occupés, sauvés par d’autres ;',
          'dès 1944, la conférence de Brazzaville promet des réformes dans l’empire français — reconnaissance que rien ne sera plus comme avant ;',
          'l’ONU proclame en 1945 « le droit des peuples à disposer d’eux-mêmes » et devient la tribune des peuples colonisés ;',
          'les deux superpuissances, États-Unis et URSS, sont hostiles au colonialisme européen — chacune pour gagner les nouveaux États à son camp ;',
          'et l’opinion internationale, églises et intellectuels en tête, condamne de plus en plus un système jugé contraire aux droits de l’Homme.',
        ],
      },
      {
        titre: 'Les facteurs internes',
        paras: ['Dans les colonies mêmes, tout pousse à l’émancipation :'],
        puces: [
          'les nationalismes, nés entre les deux guerres, deviennent des mouvements de masse avec partis, journaux et syndicats ;',
          'les anciens combattants des deux guerres mondiales reviennent transformés : ils ont combattu « pour la liberté » — ils la veulent aussi chez eux ;',
          'une élite instruite — médecins, instituteurs, avocats formés dans les écoles coloniales — retourne contre le colonisateur ses propres principes : liberté, égalité ;',
          'et la misère coloniale — travail forcé, impôts, inégalités de droits — rend le système insupportable au plus grand nombre.',
        ],
      },
    ],
    doc: {
      titre: 'La conférence de Brazzaville',
      source: 'd’après les recommandations de la conférence de Brazzaville, Afrique équatoriale française (février 1944) — extraits adaptés',
      texte: 'La conférence recommande que les colonies soient associées plus largement à la gestion de leurs propres affaires. Le travail forcé devra disparaître ; l’enseignement devra être développé pour tous ; les indigènes auront accès à tous les emplois. Les fins de l’œuvre de civilisation accomplie par la France dans les colonies écartent toute idée d’autonomie, toute possibilité d’évolution hors du bloc français de l’empire ; la constitution éventuelle, même lointaine, de self-governments dans les colonies est à écarter.',
      questions: ['Quelles réformes la conférence promet-elle ?',
        'Relève la phrase qui refuse l’indépendance. Que révèle-t-elle ?',
        'Pourquoi cette conférence est-elle quand même une étape vers la décolonisation ?'],
      reponses: ['Association des colonies à leur gestion, fin du travail forcé, développement de l’enseignement, accès de tous aux emplois.',
        '« Toute idée d’autonomie… est à écarter » : en 1944, la France veut réformer l’empire, pas y renoncer — elle n’imagine pas encore l’indépendance.',
        'Parce qu’en promettant des réformes, elle reconnaît que le système colonial doit changer : les colonisés prendront les promesses au mot — et demanderont bien davantage.']
    },
    lexique: [
      ['Décolonisation', 'accession des colonies à l’indépendance'],
      ['Souveraineté', 'pouvoir d’un État de se gouverner sans dépendre d’un autre'],
      ['Nationalisme', 'mouvement revendiquant une nation libre et indépendante'],
      ['Self-government', 'gouvernement d’un territoire par ses propres habitants'],
    ],
    synthese: 'Décolonisation : accession des colonies à l’indépendance (1945-1975, Asie puis Afrique). Facteurs externes : Europe ruinée et discréditée par la 2GM, Brazzaville 1944, ONU (droit des peuples), hostilité USA-URSS, opinion internationale. Facteurs internes : nationalismes de masse, retour des anciens combattants, élites instruites, misère coloniale.',
    saistu: 'À la conférence de Brazzaville, qui devait décider de l’avenir de l’Afrique française… il n’y avait aucun Africain parmi les participants ! Gouverneurs et hauts fonctionnaires, tous Européens, parlaient de l’Afrique sans les Africains. Ce paradoxe dit tout du système colonial — et explique pourquoi les réformes promises ne suffirent pas : les peuples voulaient décider eux-mêmes, pas être mieux administrés.',
    exos: ['Définir. a) Qu’est-ce que la décolonisation ? b) Entre quelles dates se déroule-t-elle pour l’essentiel ? d) Quelles sont ses deux vagues ? e) Que signifie « souveraineté » ?',
      'Facteurs externes. a) Comment la 2GM affaiblit-elle les colonisateurs ? b) Que promet Brazzaville en 1944 ? d) Que proclame l’ONU ? e) Pourquoi USA et URSS sont-ils anticolonialistes ?',
      'Facteurs internes. a) Que deviennent les nationalismes après 1945 ? b) Pourquoi les anciens combattants jouent-ils un rôle clé ? d) Quel rôle jouent les élites instruites ? e) Cite deux injustices du système colonial.'],
    corr: ['a) le processus par lequel les colonies accèdent à l’indépendance ; b) entre 1945 et 1975 ; d) l’Asie d’abord (1945-1955), l’Afrique ensuite (1955-1975) ; e) le pouvoir d’un État de se gouverner lui-même.',
      'a) elle les ruine, les affaiblit militairement et détruit leur prestige ; b) l’association des colonies à leur gestion, la fin du travail forcé, l’enseignement pour tous — mais pas l’indépendance ; d) le droit des peuples à disposer d’eux-mêmes ; e) chacune veut gagner les nouveaux États à son camp dans la Guerre froide.',
      'a) des mouvements de masse, avec partis, journaux et syndicats ; b) ils ont combattu pour la liberté et reviennent décidés à l’obtenir chez eux ; d) formées aux principes de liberté et d’égalité, elles les retournent contre le colonisateur ; e) travail forcé, impôts lourds, inégalité des droits (deux suffisent).'],
    fig: 'u3f1'
  },
  {
    t: 'Les acteurs et les étapes de la décolonisation', comp: 'La décolonisation', theme: 'Grandes figures et chronologie des indépendances',
    goal: 'présenter les grandes figures de la décolonisation et ses étapes en Asie puis en Afrique',
    mat: 'Carte des indépendances avec dates, portraits documentaires, frise',
    revQ: 'Cite deux facteurs externes et deux facteurs internes de la décolonisation.',
    revRA: 'Externes : affaiblissement de l’Europe par la 2GM, ONU, hostilité USA-URSS, Brazzaville (deux suffisent) ; internes : nationalismes, anciens combattants, élites instruites, misère coloniale (deux suffisent).',
    situation: 'Un petit homme maigre, vêtu d’un simple pagne de coton, met à genoux le plus grand empire du monde — sans tirer un coup de feu. Gandhi n’est pas seul : Nehru en Inde, Nkrumah au Ghana, Senghor au Sénégal, Hô Chi Minh au Vietnam… Une génération de chefs exceptionnels conduit les peuples vers l’indépendance. Qui sont-ils, et dans quel ordre le monde colonial s’est-il libéré ?',
    legende: 'Le rouet de Gandhi contre les canons de l’Empire : la force des peuples décidés à être libres.',
    motsCles: ['Gandhi', 'non-violence', 'désobéissance civile', 'Nehru', '1947', 'Hô Chi Minh', 'Nkrumah', 'Ghana 1957', 'Senghor', 'année de l’Afrique', '1960', 'Algérie 1962', 'colonies portugaises 1975'],
    sections: [
      {
        titre: 'Les grandes figures',
        paras: ['Chaque peuple a trouvé ses guides :'],
        puces: [
          'en Inde, Gandhi invente la non-violence : marches, boycotts, désobéissance civile — jeûner plutôt que tuer ; Nehru, son compagnon, devient le premier chef du gouvernement de l’Inde libre (1947) ;',
          'en Indochine, Hô Chi Minh mène contre la France une guerre d’indépendance victorieuse (1946-1954) ;',
          'en Afrique, Kwame Nkrumah arrache l’indépendance du Ghana (1957), Léopold Sédar Senghor négocie celle du Sénégal (1960) ; en Algérie, les chefs du FLN — dont Houari Boumediene — conduisent la lutte armée ;',
          'à Madagascar, les députés Ravoahangy et Raseta, puis Philibert Tsiranana, incarnent les voies — brisée puis négociée — vers le 26 juin 1960.',
        ],
      },
      {
        titre: 'Les étapes : l’Asie d’abord (1945-1955)',
        paras: [
          'La première vague emporte l’Asie : l’Indonésie proclame son indépendance dès 1945 ; l’Inde et le Pakistan naissent en 1947, dans une partition douloureuse ; l’Indochine s’émancipe par la guerre, conclue aux accords de Genève (1954) — Vietnam, Laos, Cambodge deviennent indépendants.',
        ],
      },
      {
        titre: 'L’Afrique ensuite (1955-1975)',
        paras: [
          'La deuxième vague libère l’Afrique : le Ghana ouvre la voie en 1957 ; 1960 est « l’année de l’Afrique » — dix-sept pays deviennent indépendants, dont Madagascar le 26 juin ; l’Algérie n’obtient la sienne qu’en 1962, après huit ans de guerre ; les colonies portugaises (Angola, Mozambique) ferment la marche en 1975, après de longues luttes armées. Les styles diffèrent selon les métropoles : la décolonisation anglaise est le plus souvent négociée, la française alterne négociation et guerres, la portugaise refuse tout jusqu’à l’effondrement final.',
        ],
      },
    ],
    doc: {
      titre: 'La force de la non-violence',
      source: 'd’après les déclarations de Gandhi au mouvement « Quit India », Bombay (8 août 1942) — extraits adaptés',
      texte: 'J’ai remarqué que la vie surgit de la mort de ceux qui acceptent de souffrir sans frapper. La non-violence n’est pas l’arme des faibles : c’est l’arme des plus forts, car il faut plus de courage pour recevoir les coups sans les rendre que pour les donner. Nous demandons aux Britanniques de quitter l’Inde. Mais je ne veux pas de la haine : notre querelle n’est pas avec le peuple anglais, elle est avec l’empire. Voici mon mantra, le plus court qui soit : agir ou mourir. Nous libérerons l’Inde, ou nous mourrons en essayant — mais nous ne lèverons pas la main sur nos adversaires.',
      questions: ['Comment Gandhi définit-il la non-violence ?',
        'Quelle distinction fait-il entre le peuple anglais et l’empire ? Pourquoi est-elle habile ?',
        'La non-violence a-t-elle réussi ? Nuance ta réponse avec la suite de l’histoire indienne.'],
      reponses: ['Non comme une faiblesse mais comme « l’arme des plus forts » : il faut plus de courage pour subir les coups sans les rendre.',
        'Il combat le système colonial, pas les Anglais comme peuple : cela évite la haine raciale, divise l’adversaire et rend la réconciliation possible après l’indépendance.',
        'Oui : l’Inde devient indépendante en 1947 sans guerre contre la Grande-Bretagne. Mais la partition entre Inde et Pakistan provoque des massacres entre communautés qui font des centaines de milliers de morts — et Gandhi lui-même est assassiné en 1948 : la non-violence a vaincu l’empire, pas toutes les haines.']
    },
    lexique: [
      ['Non-violence', 'méthode de lutte refusant tout recours à la force'],
      ['Désobéissance civile', 'refus collectif et pacifique d’obéir aux lois injustes'],
      ['Partition', 'division d’un territoire en plusieurs États lors de l’indépendance'],
      ['FLN', 'Front de libération nationale, mouvement indépendantiste algérien'],
    ],
    synthese: 'Figures : Gandhi (non-violence) et Nehru (Inde 1947), Hô Chi Minh (Indochine 1954), Nkrumah (Ghana 1957), Senghor (Sénégal 1960), FLN algérien ; à Madagascar : Ravoahangy, Raseta, Tsiranana. Étapes : Asie 1945-1955 (Indonésie 1945, Inde 1947, Genève 1954) ; Afrique 1955-1975 (Ghana 1957, année de l’Afrique 1960 — Madagascar 26 juin —, Algérie 1962, colonies portugaises 1975). Décolonisation anglaise plutôt négociée, française mixte, portugaise tardive et violente.',
    saistu: 'En 1960, l’ONU accueillit dix-sept nouveaux États africains d’un coup — du jamais-vu ! Les drapeaux montaient si vite devant le siège de New York qu’on surnomma 1960 « l’année de l’Afrique ». Madagascar y prit sa place le 20 septembre 1960, moins de trois mois après son indépendance : la Grande Île, colonisée en 1896 sans être consultée, votait désormais à égalité avec la France.',
    exos: ['Les acteurs. a) Quelle méthode Gandhi invente-t-il ? b) Qui devient premier chef du gouvernement indien ? d) Associe Nkrumah, Senghor et Hô Chi Minh à leur pays. e) Cite deux figures malgaches du chemin vers 1960.',
      'Les étapes. a) Range dans l’ordre : Ghana, Indonésie, Algérie, Inde, colonies portugaises. b) Que signent les accords de Genève (1954) ? d) Pourquoi 1960 est-elle « l’année de l’Afrique » ? e) Quand Madagascar devient-elle indépendante ?',
      'Comparer. a) Caractérise la décolonisation anglaise. b) Et la française ? d) Et la portugaise ? e) Pourquoi la partition de l’Inde nuance-t-elle le succès de la non-violence ?'],
    corr: ['a) la non-violence : marches, boycotts, désobéissance civile ; b) Nehru (1947) ; d) Nkrumah : Ghana ; Senghor : Sénégal ; Hô Chi Minh : Vietnam (Indochine) ; e) Ravoahangy, Raseta, Tsiranana (deux suffisent).',
      'a) Indonésie (1945), Inde (1947), Ghana (1957), Algérie (1962), colonies portugaises (1975) ; b) la fin de la guerre d’Indochine et l’indépendance du Vietnam, du Laos et du Cambodge ; d) dix-sept pays africains y deviennent indépendants ; e) le 26 juin 1960.',
      'a) le plus souvent négociée, par étapes ; b) mixte : négociations (Afrique noire, Madagascar) mais aussi guerres (Indochine, Algérie) ; d) tardive et violente : le Portugal refuse tout jusqu’en 1975 ; e) parce que l’indépendance pacifique s’accompagne de massacres entre communautés et de la mort de Gandhi lui-même.'],
    fig: 'u3f2'
  },
  {
    t: 'Les formes de la décolonisation — Madagascar et le 29 mars 1947', comp: 'La décolonisation', theme: 'Voie pacifique, voie violente ; l’insurrection malgache',
    goal: 'distinguer décolonisation pacifique et violente et raconter l’insurrection du 29 mars 1947',
    mat: 'Carte de l’insurrection de 1947, documents, témoignages',
    revQ: 'Cite trois indépendances avec leurs dates.',
    revRA: 'Inde 1947, Ghana 1957, Madagascar 26 juin 1960, Algérie 1962, Angola-Mozambique 1975 (trois suffisent).',
    situation: 'Dans la nuit du 29 au 30 mars 1947, des milliers de Malgaches armés de sagaies attaquent les camps militaires et les postes coloniaux de l’Est de l’île. La répression qui suit est terrible : des dizaines de milliers de morts. Treize ans plus tard pourtant, c’est par la négociation que Madagascar obtient son indépendance. Violence et négociation : les deux visages de la décolonisation se lisent dans notre propre histoire.',
    legende: 'Mars 1947 : l’Est de Madagascar se soulève — la mémoire des martyrs fonde la nation d’aujourd’hui.',
    motsCles: ['décolonisation pacifique', 'décolonisation violente', 'MDRM', '29 mars 1947', 'insurrection', 'répression', 'loi-cadre 1956', 'référendum 1958', 'République malgache', '26 juin 1960'],
    sections: [
      {
        titre: 'Deux voies vers l’indépendance',
        paras: ['Selon les territoires et l’attitude du colonisateur, la décolonisation prend deux formes :'],
        puces: [
          'la voie pacifique ou négociée : pressions politiques, élections, négociations — Inde (malgré les violences de la partition), Ghana, Sénégal, et finalement Madagascar ;',
          'la voie violente : guerres d’indépendance longues et meurtrières — Indochine (1946-1954), Algérie (1954-1962, centaines de milliers de morts), Angola et Mozambique.',
          'Souvent, les deux voies se succèdent dans un même pays : une révolte réprimée, puis une négociation — c’est exactement le cas malgache.',
        ],
      },
      {
        titre: 'Madagascar : l’insurrection du 29 mars 1947',
        paras: [
          'Après 1945, le nationalisme malgache s’organise : le MDRM (Mouvement démocratique de la rénovation malgache), fondé en 1946, réclame l’indépendance par la voie légale et fait élire des députés — Ravoahangy, Raseta, Rabemananjara. Mais l’impatience grandit. Dans la nuit du 29 mars 1947, l’insurrection éclate à Moramanga, Manakara et dans tout l’Est : des milliers d’insurgés attaquent camps et plantations. La répression coloniale est impitoyable — exécutions, villages brûlés, « wagons de la mort » de Moramanga : le bilan, toujours débattu, va de 11 000 à près de 90 000 morts. Le MDRM est dissous, ses députés condamnés à mort (peines commuées), des milliers de Malgaches emprisonnés.',
        ],
      },
      {
        titre: 'De la répression à l’indépendance négociée',
        paras: [
          'La violence de 1947 n’éteint pas l’aspiration nationale — elle la rend inévitable. La France change de méthode : la loi-cadre de 1956 accorde l’autonomie interne et le suffrage universel ; au référendum de 1958, Madagascar choisit le statut de République autonome dans la Communauté française, proclamée le 14 octobre 1958 ; et le 26 juin 1960, les accords franco-malgaches donnent l’indépendance pleine et entière. Philibert Tsiranana devient le premier président. La voie négociée a abouti — mais elle fut ouverte par le sang des insurgés de 1947, dont la mémoire est honorée chaque 29 mars.',
        ],
      },
    ],
    doc: {
      titre: 'Un survivant de 1947 raconte',
      source: 'texte reconstitué d’après les témoignages de survivants de l’insurrection recueillis dans la région de Moramanga — document pédagogique',
      texte: 'J’avais dix-sept ans. Les hommes du village étaient partis dans la forêt avec les insurgés ; ils disaient que le temps de la liberté était venu. Puis les soldats sont arrivés. Ils ont brûlé les cases et emmené les suspects à la gare. On a entendu dire que des prisonniers étaient morts enfermés dans des wagons, sans eau, sans air. Nous avons fui dans la forêt et vécu de racines pendant des mois ; beaucoup sont morts de faim et de fièvre. Quand nous sommes revenus, le village n’existait plus. Pendant des années, personne n’a osé parler de 1947. Mais nous n’avons jamais oublié : chaque 29 mars, je raconte aux enfants, pour que cela ne meure pas avec moi.',
      questions: ['Quelles formes de répression le témoin décrit-il ?',
        'Pourquoi « personne n’a osé parler de 1947 » pendant des années ?',
        'Ce texte est reconstitué : quel travail d’historien permet pourtant de le considérer comme fiable ?'],
      reponses: ['Villages brûlés, arrestations massives, prisonniers morts dans les wagons de Moramanga, populations réfugiées en forêt mourant de faim et de maladie.',
        'Par peur de la répression coloniale, puis par traumatisme : les survivants se sont tus — c’est le silence des mémoires blessées, que l’Histoire orale doit briser.',
        'Il s’appuie sur de nombreux témoignages réels, recoupés entre eux et avec les archives et les travaux des historiens : chaque fait cité (wagons, villages brûlés, fuite en forêt) est attesté par plusieurs sources indépendantes.']
    },
    lexique: [
      ['Insurrection', 'soulèvement armé contre le pouvoir en place'],
      ['MDRM', 'parti nationaliste malgache fondé en 1946, dissous en 1947'],
      ['Loi-cadre', 'loi de 1956 accordant l’autonomie interne aux colonies françaises'],
      ['Autonomie', 'droit de gérer ses affaires internes sans indépendance totale'],
    ],
    synthese: 'Deux formes : pacifique/négociée (Inde, Ghana, Sénégal) et violente (Indochine, Algérie, colonies portugaises). Madagascar connaît les deux : insurrection du 29 mars 1947 (MDRM dissous, répression — de 11 000 à près de 90 000 morts, wagons de Moramanga) puis voie négociée : loi-cadre 1956, République autonome 14 octobre 1958, indépendance 26 juin 1960 (Tsiranana premier président).',
    saistu: 'Le bilan humain de 1947 reste l’un des grands débats de notre Histoire : le chiffre officiel de l’armée française elle-même, en 1949, atteignait 89 000 morts ; des historiens l’ont ensuite réévalué entre 11 000 et 40 000 victimes directes, les autres étant mortes de faim et de maladie dans les forêts. Cette incertitude n’est pas un détail : elle montre pourquoi le travail des historiens — et la collecte des témoignages avant qu’il ne soit trop tard — est un devoir national.',
    exos: ['Les deux voies. a) Définis la décolonisation pacifique. b) Définis la décolonisation violente. d) Donne deux exemples de chaque. e) Pourquoi Madagascar illustre-t-elle les deux voies ?',
      'L’insurrection de 1947. a) Qu’est-ce que le MDRM ? b) Que se passe-t-il dans la nuit du 29 mars 1947 ? d) Décris deux aspects de la répression. e) Que sait-on du bilan humain ?',
      'Vers l’indépendance. a) Que change la loi-cadre de 1956 ? b) Que décide le référendum de 1958 ? d) Que se passe-t-il le 26 juin 1960 ? e) Pourquoi honore-t-on la mémoire du 29 mars ?'],
    corr: ['a) l’indépendance obtenue par négociations, élections et pressions politiques ; b) l’indépendance arrachée par la guerre ; d) pacifique : Inde, Ghana, Sénégal ; violente : Indochine, Algérie, Angola-Mozambique (deux de chaque) ; e) parce qu’elle connaît d’abord une insurrection réprimée (1947), puis une indépendance négociée (1960).',
      'a) le Mouvement démocratique de la rénovation malgache, parti nationaliste fondé en 1946 ; b) des milliers d’insurgés attaquent les camps et postes coloniaux de l’Est (Moramanga, Manakara…) ; d) villages brûlés, exécutions, wagons de la mort de Moramanga, condamnations des députés (deux suffisent) ; e) il reste débattu : de 11 000 à près de 90 000 morts selon les sources.',
      'a) elle accorde l’autonomie interne et le suffrage universel ; b) Madagascar devient République autonome dans la Communauté française (proclamée le 14 octobre 1958) ; d) les accords franco-malgaches donnent l’indépendance pleine et entière ; e) parce que les insurgés de 1947 ont payé de leur vie le chemin vers cette indépendance : c’est la fête nationale des martyrs, chaque 29 mars.'],
    fig: 'u3f3'
  },
  {
    t: 'L’émergence du Tiers-Monde', comp: 'La décolonisation', theme: 'Bandung, le non-alignement, les défis des nouveaux États',
    goal: 'définir le Tiers-Monde et présenter Bandung (1955) et le mouvement des non-alignés',
    mat: 'Carte des pays non-alignés, documents, frise 1952-1961',
    revQ: 'Raconte en quatre dates le chemin de Madagascar vers l’indépendance.',
    revRA: '29 mars 1947 : insurrection réprimée ; 1956 : loi-cadre ; 14 octobre 1958 : République autonome ; 26 juin 1960 : indépendance.',
    situation: 'Et après l’indépendance ? Les nouveaux États se découvrent pauvres, fragiles — et courtisés par les deux blocs de la Guerre froide, qui veulent chacun les enrôler. En 1955, à Bandung, vingt-neuf pays d’Asie et d’Afrique répondent ensemble : nous ne serons ni avec l’Est ni avec l’Ouest — nous serons nous-mêmes. Un « troisième monde » vient de prendre la parole.',
    legende: 'Bandung, 1955 : les anciens colonisés parlent enfin en leur propre nom à la table du monde.',
    motsCles: ['Tiers-Monde', 'Alfred Sauvy', '1952', 'conférence de Bandung', '1955', 'afro-asiatique', 'non-alignement', 'Brioni 1956', 'Belgrade 1961', 'Nehru', 'Nasser', 'Tito', 'sous-développement'],
    sections: [
      {
        titre: 'Qu’est-ce que le Tiers-Monde ?',
        paras: [
          'L’expression est inventée en 1952 par le démographe français Alfred Sauvy : comme le Tiers État de 1789, le « Tiers-Monde » — l’ensemble des pays pauvres, souvent anciennes colonies — « n’est rien et veut être quelque chose ». Face au monde capitaliste et au monde communiste, ces pays forment un troisième ensemble, uni par le sous-développement et par la volonté d’exister sur la scène internationale.',
        ],
      },
      {
        titre: 'Bandung (1955) : la naissance politique',
        paras: [
          'En avril 1955, vingt-neuf pays d’Asie et d’Afrique — représentant plus de la moitié de l’humanité — se réunissent à Bandung, en Indonésie, autour de Nehru (Inde), Nasser (Égypte), Soekarno (Indonésie) et Zhou Enlai (Chine). La conférence condamne le colonialisme « dans toutes ses manifestations » et le racisme, proclame l’égalité de toutes les nations, et encourage les peuples encore colonisés — l’écho en parvient jusqu’à Madagascar. Bandung est l’acte de naissance politique du Tiers-Monde.',
        ],
      },
      {
        titre: 'Le non-alignement — et ses défis',
        paras: ['Le mouvement se structure, mais les obstacles demeurent :'],
        puces: [
          '1956, à Brioni : Nehru, Nasser et Tito (Yougoslavie) posent le principe du non-alignement — refuser l’appartenance aux deux blocs ;',
          '1961, à Belgrade : la première conférence des pays non-alignés réunit vingt-cinq États ; Madagascar rejoindra plus tard le mouvement, qui regroupe aujourd’hui la majorité des pays du monde ;',
          'mais le Tiers-Monde reste divisé (régimes, alliances, conflits entre membres) et pauvre : le sous-développement, la dette et l’échange inégal limitent son poids réel — l’indépendance politique n’a pas suffi à créer l’indépendance économique.',
        ],
      },
    ],
    doc: {
      titre: 'La voix de Bandung',
      source: 'd’après le communiqué final de la conférence afro-asiatique de Bandung (24 avril 1955) — extraits adaptés',
      texte: 'La conférence afro-asiatique a examiné la question des peuples dépendants et du colonialisme. Elle est convenue de déclarer que le colonialisme, dans toutes ses manifestations, est un mal auquel il doit être mis fin rapidement ; que la sujétion des peuples à une domination étrangère et leur exploitation constituent un déni des droits fondamentaux de l’homme, sont contraires à la Charte des Nations unies et empêchent le développement de la paix et de la coopération mondiales. La conférence déclare son appui à la cause de la liberté et de l’indépendance de tous ces peuples. Les nations devraient pratiquer la tolérance et vivre en paix, en bonnes voisines, et développer une coopération amicale sur la base du respect de la souveraineté et de l’intégrité territoriale de toutes les nations, et de l’égalité de toutes les races et de toutes les nations, grandes et petites.',
      questions: ['Comment le communiqué qualifie-t-il le colonialisme ?',
        'Sur quels textes internationaux la conférence s’appuie-t-elle ?',
        'Pourquoi Bandung marque-t-il un tournant dans l’histoire mondiale ?'],
      reponses: ['Un « mal » à faire cesser rapidement, un « déni des droits fondamentaux de l’homme », contraire à la Charte des Nations unies.',
        'Sur la Charte de l’ONU et les droits fondamentaux de l’homme : les anciens colonisés retournent contre le colonialisme les principes proclamés par les grandes puissances elles-mêmes.',
        'Parce que, pour la première fois, les peuples d’Asie et d’Afrique — plus de la moitié de l’humanité — parlent d’une seule voix, sans les puissances coloniales, et accélèrent les indépendances qui suivront (dont l’année de l’Afrique en 1960).']
    },
    lexique: [
      ['Tiers-Monde', 'ensemble des pays pauvres n’appartenant à aucun des deux blocs'],
      ['Non-alignement', 'refus d’appartenir au bloc américain ou au bloc soviétique'],
      ['Sous-développement', 'retard économique et social : pauvreté, santé et éducation insuffisantes'],
      ['Échange inégal', 'commerce défavorable : matières premières bon marché contre produits chers'],
    ],
    synthese: 'Tiers-Monde (Sauvy, 1952) : les pays pauvres, anciens colonisés, « troisième ensemble » du monde. Bandung (avril 1955) : 29 pays afro-asiatiques condamnent le colonialisme et le racisme — naissance politique du Tiers-Monde. Non-alignement : Brioni 1956 (Nehru, Nasser, Tito), Belgrade 1961 (25 États). Limites : divisions, sous-développement, dette, échange inégal.',
    saistu: 'Alfred Sauvy a forgé « Tiers-Monde » en pensant à une phrase célèbre de 1789 sur le Tiers État : « Qu’est-ce que le Tiers État ? Tout. Qu’a-t-il été jusqu’à présent dans l’ordre politique ? Rien. Que demande-t-il ? À y devenir quelque chose. » Son article de 1952 se terminait ainsi : « car enfin, ce Tiers-Monde ignoré, exploité, méprisé comme le Tiers État, veut, lui aussi, être quelque chose. » Toute la décolonisation tient dans cette phrase.',
    exos: ['Définir. a) Qui invente « Tiers-Monde », et quand ? b) À quoi l’expression fait-elle référence ? d) Qu’est-ce qui unit les pays du Tiers-Monde ? e) Définis le non-alignement.',
      'Bandung. a) Quand et où se tient la conférence ? b) Combien de pays y participent, autour de quelles figures ? d) Que condamne le communiqué final ? e) Pourquoi parle-t-on d’« acte de naissance politique » ?',
      'Le mouvement et ses limites. a) Que se passe-t-il à Brioni en 1956 ? b) Et à Belgrade en 1961 ? d) Cite deux faiblesses du Tiers-Monde. e) Explique : « l’indépendance politique n’a pas suffi à créer l’indépendance économique ».'],
    corr: ['a) le démographe français Alfred Sauvy, en 1952 ; b) au Tiers État de 1789, qui « n’était rien et voulait être quelque chose » ; d) le sous-développement et la volonté d’exister face aux deux blocs ; e) le refus d’appartenir au bloc américain comme au bloc soviétique.',
      'a) en avril 1955, à Bandung (Indonésie) ; b) 29 pays d’Asie et d’Afrique, autour de Nehru, Nasser, Soekarno et Zhou Enlai ; d) le colonialisme « dans toutes ses manifestations » et le racisme ; e) parce que les anciens colonisés y parlent pour la première fois d’une seule voix, sans les puissances coloniales.',
      'a) Nehru, Nasser et Tito posent le principe du non-alignement ; b) la première conférence des non-alignés réunit 25 États ; d) divisions politiques entre membres, pauvreté, dette, échange inégal (deux suffisent) ; e) devenus souverains, les nouveaux États restent dépendants économiquement : ils vendent des matières premières bon marché et achètent cher les produits industriels.'],
    fig: 'u3f4'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'La décolonisation',
  rag: 'expliquer les facteurs, les formes et les acteurs de la décolonisation, et situer Madagascar dans ce mouvement mondial.',
  valeurs: 'fierté d’être malgache, culture de la paix',
  sessions: S,
  revision: {
    table: [
      ['Définition', 'Décolonisation : accession des colonies à l’indépendance, 1945-1975, Asie puis Afrique', 'Définir et périodiser'],
      ['Facteurs externes', '2GM (Europe ruinée, prestige détruit), Brazzaville 1944, ONU, hostilité USA-URSS, opinion mondiale', 'Expliquer le contexte international'],
      ['Facteurs internes', 'Nationalismes de masse, anciens combattants, élites instruites, misère coloniale', 'Expliquer la poussée des colonisés'],
      ['Acteurs et étapes', 'Gandhi-Nehru (Inde 1947), Hô Chi Minh (1954), Nkrumah (Ghana 1957), année de l’Afrique 1960, Algérie 1962, colonies portugaises 1975', 'Mémoriser figures et dates'],
      ['Les deux formes — Madagascar', 'Pacifique (Inde, Ghana) / violente (Algérie) ; Madagascar : 29 mars 1947 réprimé, puis loi-cadre 1956, République 1958, indépendance 26 juin 1960', 'Raconter le cas malgache'],
      ['Tiers-Monde', 'Sauvy 1952 ; Bandung 1955 (29 pays) ; non-alignement : Brioni 1956, Belgrade 1961 ; limites : divisions, sous-développement', 'Présenter l’émergence du Sud']
    ],
    questions: [
      'Cite deux facteurs externes et deux facteurs internes de la décolonisation.',
      'Associe chaque acteur à son pays et à sa méthode : Gandhi, Hô Chi Minh, Nkrumah, Tsiranana.',
      'Raconte l’insurrection du 29 mars 1947 et sa répression.',
      'Donne les quatre dates du chemin malgache vers l’indépendance.',
      'Qu’est-ce que la conférence de Bandung, et pourquoi est-elle historique ?'
    ],
    answers: [
      'Externes : affaiblissement de l’Europe par la 2GM, ONU, hostilité des deux Grands, Brazzaville 1944 ; internes : nationalismes, anciens combattants, élites instruites, misère coloniale (deux de chaque).',
      'Gandhi : Inde, non-violence ; Hô Chi Minh : Vietnam, guerre d’indépendance ; Nkrumah : Ghana, négociation militante ; Tsiranana : Madagascar, voie négociée vers 1960.',
      'Dans la nuit du 29 mars 1947, des milliers d’insurgés attaquent les postes coloniaux de l’Est ; la répression — villages brûlés, wagons de Moramanga, condamnations — fait de 11 000 à près de 90 000 morts selon les sources ; le MDRM est dissous.',
      '29 mars 1947 (insurrection), 1956 (loi-cadre), 14 octobre 1958 (République autonome), 26 juin 1960 (indépendance).',
      'La réunion de 29 pays d’Asie et d’Afrique en avril 1955 : première fois que les anciens colonisés parlent d’une seule voix ; elle condamne le colonialisme et accélère les indépendances.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Définis la décolonisation. b) Cite trois facteurs externes. d) Cite trois facteurs internes. e) Définis le non-alignement.',
      'Repères. Associe chaque date à son événement : a) février 1944 ; b) avril 1955 ; d) 29 mars 1947 ; e) 26 juin 1960.',
      'Les acteurs. a) Présente Gandhi et sa méthode en trois phrases. b) Qui sont Nehru, Nasser et Tito, et que fondent-ils ensemble ? d) Cite deux députés malgaches du MDRM. e) Qui est le premier président de la République malgache ?',
      'Étude de document. Le communiqué de Bandung déclare le colonialisme « contraire à la Charte des Nations unies ». a) Quand et où ce texte est-il adopté ? b) Combien de pays le signent ? d) Pourquoi invoquer la Charte de l’ONU est-il une arme habile ? e) Quel effet Bandung a-t-il sur l’Afrique ?',
      'Réflexion organisée. « Madagascar illustre les deux formes de la décolonisation. » a) Raconte la forme violente (1947) avec deux précisions. b) Raconte la forme négociée avec trois dates. d) Compare avec un autre pays de ton choix. e) Conclus : que doit la nation malgache aux insurgés de 1947 ?'
    ],
    corr: [
      'a) le processus d’accession des colonies à l’indépendance (1945-1975) ; b) 2GM, Brazzaville 1944, ONU, hostilité USA-URSS, opinion mondiale (trois suffisent) ; d) nationalismes, anciens combattants, élites instruites, misère coloniale (trois suffisent) ; e) le refus d’appartenir à l’un ou l’autre des deux blocs. Un point par item.',
      'a) conférence de Brazzaville ; b) conférence de Bandung ; d) insurrection malgache ; e) indépendance de Madagascar. Un point par item.',
      'a) chef du nationalisme indien, il invente la non-violence (marches, boycotts, désobéissance civile) et obtient l’indépendance de l’Inde en 1947 ; il meurt assassiné en 1948 ; b) les chefs de l’Inde, de l’Égypte et de la Yougoslavie : ils fondent le non-alignement (Brioni 1956, Belgrade 1961) ; d) Ravoahangy et Raseta (ou Rabemananjara) ; e) Philibert Tsiranana. Un point par item.',
      'a) en avril 1955, à Bandung (Indonésie) ; b) 29 pays d’Asie et d’Afrique ; d) parce qu’elle retourne contre les puissances coloniales les principes qu’elles ont elles-mêmes signés en 1945 ; e) il encourage les nationalismes africains : le Ghana dès 1957, puis l’année de l’Afrique en 1960. Un point par item.',
      'a) l’insurrection du 29 mars 1947 et sa répression : wagons de Moramanga, villages brûlés, bilan de 11 000 à près de 90 000 morts, MDRM dissous (deux précisions suffisent) ; b) loi-cadre 1956, République autonome 14 octobre 1958, indépendance 26 juin 1960 ; d) exemple : l’Algérie, indépendante seulement par la guerre (1954-1962), ou l’Inde, indépendante par la non-violence mais au prix de la partition ; e) ils ont prouvé que le peuple malgache n’acceptait pas la colonisation : leur sacrifice a rendu l’indépendance inévitable — honorer leur mémoire chaque 29 mars, c’est entretenir la fierté et l’unité nationales. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
