// UNITÉ 4 — MADAGASCAR SOUS LES RÉPUBLIQUES (PE T9) : 4 séances + révision + examen
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

figs.u4f1 = chain('La Première République et le directoire (1959-1975)', ['De Tsiranana à Ratsiraka.'],
  ['14 octobre 1958 : République autonome ; 26 juin 1960 : indépendance — Tsiranana président', 'réalisations : université (1961), SOMALAC, routes, écoles — mais liens étroits avec la France', 'avril 1971 : révolte paysanne du Sud ; mai 1972 : grèves des étudiants et des travailleurs', '18 mai 1972 : Tsiranana remet les pleins pouvoirs au général Ramanantsoa', '1975 : Ratsimandrava assassiné (11 février) → directoire militaire → Ratsiraka (15 juin)']);
figs.u4f2 = chain('La Deuxième République (1975-1993)', ['Le socialisme malgache, puis la crise.'],
  ['21 décembre 1975 : référendum — République démocratique de Madagascar, Boky Mena', 'nationalisations : banques, assurances, grandes entreprises contrôlées par l’État', 'malgachisation de l’enseignement ; service national ; fokonolona revalorisé', 'années 1980 : crise économique, pénuries — ajustement structurel du FMI', '1991 : grèves des Forces vives, marche du 10 août → transition → Constitution de 1992']);
figs.u4f3 = chain('La Troisième République (1992-2011)', ['Alternances et crises.'],
  ['1993 : Zafy Albert élu ; 1996 : il est empêché — intérim Ratsirahonana', '1997 : Ratsiraka revient au pouvoir', '2002 : crise post-électorale de six mois — Ravalomanana l’emporte', '2002-2009 : Ravalomanana — routes, éducation ; réélu en 2006', '2009 : crise — Rajoelina dirige la transition (2009-2014)']);
figs.u4f4 = chain('La Quatrième République (depuis 2011)', ['Constitution de 2010 ; présidents et transitions.'],
  ['17 novembre 2010 : référendum constitutionnel — Quatrième République (11 décembre 2010)', '2014-2018 : Rajaonarimampianina, premier président élu de la IVᵉ République', '2019-2023 : Rajoelina élu, puis réélu fin 2023', 'septembre-octobre 2025 : mouvement de la jeunesse → départ de Rajoelina', 'octobre 2025 : le colonel Randrianirina conduit la refondation de la République']);

const S = [
  {
    t: 'La Première République (1959-1972) et le directoire militaire', comp: 'Madagascar sous les Républiques', theme: 'Réalisations, crise de 1972, pouvoir militaire 1972-1975',
    goal: 'présenter la Première République, ses réalisations, la crise de 1972 et le pouvoir militaire jusqu’en 1975',
    mat: 'Frise 1958-1975, photographies d’époque, documents',
    revQ: 'Qu’est-ce que le Tiers-Monde, et que se passe-t-il à Bandung en 1955 ?',
    revRA: 'L’ensemble des pays pauvres n’appartenant à aucun bloc (Sauvy, 1952) ; à Bandung, 29 pays afro-asiatiques condamnent le colonialisme — naissance politique du Tiers-Monde.',
    situation: '26 juin 1960 : le drapeau malgache monte seul dans le ciel d’Antananarivo. La joie est immense — mais tout reste à construire : un État, une économie, une école. Douze ans plus tard pourtant, la foule descend dans la rue contre le régime né de l’indépendance. Que s’est-il passé entre l’espoir de 1960 et la colère de 1972 ?',
    legende: '26 juin 1960 : le drapeau blanc-rouge-vert monte seul — la Première République commence.',
    motsCles: ['Première République', 'Philibert Tsiranana', 'PSD', '26 juin 1960', 'accords de coopération', 'université 1961', 'SOMALAC', 'révolte de 1971', 'mai 1972', 'Ramanantsoa', 'Ratsimandrava', 'directoire militaire'],
    sections: [
      {
        titre: 'La République de Tsiranana',
        paras: [
          'Proclamée République autonome le 14 octobre 1958, Madagascar devient pleinement indépendante le 26 juin 1960. Philibert Tsiranana, élu président dès 1959, domine la vie politique avec son parti, le PSD. La jeune République se construit : création de l’Université de Madagascar (1961), de la SOMALAC pour développer la riziculture du lac Alaotra, routes, écoles, dispensaires. Mais l’indépendance reste encadrée : les accords de coopération maintiennent une forte présence française — bases militaires, monnaie liée au franc, coopérants dans l’administration et l’enseignement. Les nationalistes parlent d’une indépendance inachevée.',
        ],
      },
      {
        titre: 'La crise de 1972',
        paras: ['Le mécontentement s’accumule et explose en deux temps :'],
        puces: [
          'avril 1971 : dans le Sud, une révolte paysanne menée par le parti Monima contre les impôts et la misère est durement réprimée ;',
          'avril-mai 1972 : les étudiants de l’école de médecine de Befelatanana se mettent en grève contre un enseignement jugé trop français ; le mouvement gagne lycéens, chômeurs des villes (ZOAM) et travailleurs ;',
          '13 mai 1972 : la répression fait des morts devant l’hôtel de ville d’Antananarivo — la capitale se soulève ;',
          '18 mai 1972 : Tsiranana, dépassé, remet les pleins pouvoirs au général Gabriel Ramanantsoa. La Première République a vécu.',
        ],
      },
      {
        titre: 'Le pouvoir militaire (1972-1975)',
        paras: [
          'Le référendum du 8 octobre 1972 approuve le gouvernement Ramanantsoa, qui révise les accords avec la France, fait évacuer les bases militaires et quitte la zone franc. Mais les rivalités minent le pouvoir : le 5 février 1975, Ramanantsoa cède la place au colonel Richard Ratsimandrava — assassiné six jours plus tard, le 11 février 1975. Un directoire militaire assure l’intérim, et le 15 juin 1975, le capitaine de frégate Didier Ratsiraka prend la tête de l’État : une nouvelle République se prépare.',
        ],
      },
    ],
    doc: {
      titre: 'Un tract étudiant de mai 1972',
      source: 'texte reconstitué d’après les mots d’ordre et revendications du mouvement de mai 1972 — document pédagogique',
      texte: 'Étudiants, lycéens, travailleurs ! Douze ans après l’indépendance, que voyons-nous ? Nos diplômes sont décidés ailleurs, nos professeurs enseignent comme à Paris, notre monnaie se décide à Paris, et les fils du peuple n’ont ni travail ni avenir. Nous ne voulons plus d’une indépendance de drapeau : nous voulons une indépendance réelle. Nous demandons : la malgachisation de l’enseignement ; la révision des accords de coopération ; du travail pour les jeunes. Camarades, rejoignez la grève ! Ny hevitry ny maro no mahataka-davitra — c’est ensemble que nous irons loin.',
      questions: ['Que reproche le tract à l’indépendance de 1960 ?',
        'Relève les trois revendications principales.',
        'Ce mouvement étudiant devient une crise nationale : par quelles étapes ?'],
      reponses: ['D’être une « indépendance de drapeau » : enseignement, monnaie et décisions restent sous influence française, et la jeunesse est sans avenir.',
        'La malgachisation de l’enseignement, la révision des accords de coopération, du travail pour les jeunes.',
        'La grève de Befelatanana s’étend aux lycéens, aux ZOAM et aux travailleurs ; la répression du 13 mai 1972 fait des morts et soulève la capitale ; le 18 mai, Tsiranana remet les pleins pouvoirs à Ramanantsoa.']
    },
    lexique: [
      ['Accords de coopération', 'traités de 1960 maintenant la présence française après l’indépendance'],
      ['Malgachisation', 'adaptation de l’enseignement à la langue et aux réalités malgaches'],
      ['ZOAM', 'jeunes chômeurs des quartiers populaires, acteurs de mai 1972'],
      ['Directoire militaire', 'collège d’officiers exerçant provisoirement le pouvoir'],
    ],
    synthese: 'Première République (1959-1972) : Tsiranana (PSD), indépendance 26 juin 1960 ; réalisations (université 1961, SOMALAC, infrastructures) mais dépendance envers la France (accords de coopération). Crises : révolte paysanne 1971, mai 1972 (Befelatanana, ZOAM, 13 mai) → pleins pouvoirs à Ramanantsoa (18 mai 1972) : révision des accords, départ des bases. 1975 : Ratsimandrava assassiné (11 février), directoire militaire, Ratsiraka (15 juin).',
    saistu: 'Richard Ratsimandrava n’a exercé le pouvoir que six jours — du 5 au 11 février 1975 — avant d’être assassiné en pleine rue à Antananarivo, sur la route d’Ambohijatovo. Son grand projet : rendre le pouvoir aux fokonolona, les communautés villageoises, pour « développer le pays par la base ». Son assassinat n’a jamais été totalement élucidé : c’est l’une des énigmes de notre histoire nationale — un vrai sujet pour l’Histoire orale, tant qu’il reste des témoins.',
    exos: ['La République de Tsiranana. a) Donne les dates de la République autonome et de l’indépendance. b) Cite trois réalisations de la Première République. d) Que maintiennent les accords de coopération ? e) Pourquoi parle-t-on d’« indépendance inachevée » ?',
      'La crise de 1972. a) Que se passe-t-il en avril 1971 ? b) D’où part le mouvement de 1972 ? d) Que se passe-t-il le 13 mai 1972 ? e) Et le 18 mai 1972 ?',
      'Le pouvoir militaire. a) Que décide le référendum du 8 octobre 1972 ? b) Cite deux mesures de Ramanantsoa envers la France. d) Qu’arrive-t-il à Ratsimandrava ? e) Qui prend le pouvoir le 15 juin 1975 ?'],
    corr: ['a) 14 octobre 1958 et 26 juin 1960 ; b) Université de Madagascar (1961), SOMALAC, routes, écoles, dispensaires (trois suffisent) ; d) bases militaires françaises, monnaie liée au franc, coopérants ; e) parce que l’économie, la monnaie et une partie de l’administration restent sous influence française.',
      'a) une révolte paysanne du Sud, menée par le Monima, est réprimée ; b) de la grève des étudiants en médecine de Befelatanana ; d) la répression fait des morts devant l’hôtel de ville d’Antananarivo ; e) Tsiranana remet les pleins pouvoirs au général Ramanantsoa.',
      'a) il approuve le gouvernement Ramanantsoa ; b) révision des accords de coopération, évacuation des bases, sortie de la zone franc (deux suffisent) ; d) il est assassiné le 11 février 1975, six jours après avoir reçu le pouvoir ; e) Didier Ratsiraka, porté par le directoire militaire.'],
    fig: 'u4f1'
  },
  {
    t: 'La Deuxième République (1975-1993) et la transition', comp: 'Madagascar sous les Républiques', theme: 'Socialisme malgache, crise, Forces vives',
    goal: 'présenter la Deuxième République, ses choix socialistes, sa crise et la transition de 1991-1992',
    mat: 'Frise 1975-1993, extraits du Boky Mena, documents',
    revQ: 'Raconte la fin de la Première République en trois dates.',
    revRA: '13 mai 1972 : répression meurtrière à Antananarivo ; 18 mai 1972 : pleins pouvoirs à Ramanantsoa ; 11 février 1975 : assassinat de Ratsimandrava (puis Ratsiraka le 15 juin).',
    situation: 'Décembre 1975 : les Malgaches approuvent par référendum une nouvelle constitution et un petit livre rouge — le Boky Mena. Madagascar choisit le socialisme : l’État prendra en main l’économie, l’école parlera malgache, le pays se tournera vers de nouveaux alliés. Quinze ans plus tard, des centaines de milliers de manifestants pacifiques marchent sur le palais présidentiel. Grandeur et crise d’une révolution : voici la Deuxième République.',
    legende: 'Le Boky Mena en main : Madagascar choisit en 1975 la voie du socialisme — pour quinze ans.',
    motsCles: ['Deuxième République', 'Didier Ratsiraka', 'Boky Mena', '21 décembre 1975', 'nationalisations', 'malgachisation', 'AREMA', 'crise économique', 'FMI', 'Forces vives', '10 août 1991', 'Constitution de 1992'],
    sections: [
      {
        titre: 'La révolution socialiste malgache',
        paras: ['Le référendum du 21 décembre 1975 fonde la République démocratique de Madagascar. Le programme tient dans la Charte de la révolution socialiste — le Boky Mena :'],
        puces: [
          'nationalisations : banques, assurances et grandes entreprises passent sous contrôle de l’État ;',
          'malgachisation de l’enseignement : le malgache devient langue d’enseignement ;',
          'décentralisation par les fokonolona et collectivités ; service national pour la jeunesse ;',
          'diplomatie « tous azimuts » tournée vers les pays socialistes et le non-alignement ;',
          'le parti AREMA du président Ratsiraka domine le front uni des partis autorisés (FNDR).',
        ],
      },
      {
        titre: 'La crise des années 1980',
        paras: [
          'L’économie dirigée s’essouffle vite : entreprises d’État déficitaires, production en baisse, pénuries de riz, de savon, d’huile — les files d’attente deviennent le quotidien. Endettée, Madagascar doit accepter dès le début des années 1980 les plans d’ajustement structurel du FMI et de la Banque mondiale : privatisations, réduction des dépenses publiques, libéralisation. Les sacrifices sont lourds pour la population, et la malgachisation improvisée laisse une génération mal à l’aise dans les deux langues. Le mécontentement monte.',
        ],
      },
      {
        titre: '1991-1992 : les Forces vives et la transition',
        paras: [
          'En 1991, l’opposition rassemblée dans les Forces vives (Hery velona) lance des grèves générales qui paralysent le pays six mois durant. Le 10 août 1991, une marche pacifique de centaines de milliers de personnes vers le palais d’Iavoloha est dispersée dans le sang. Le pouvoir doit négocier : la convention du 31 octobre 1991 instaure une transition, et le référendum du 19 août 1992 adopte la Constitution de la Troisième République. Zafy Albert remporte l’élection présidentielle de 1993 : Madagascar réussit un changement de régime par les urnes.',
        ],
      },
    ],
    doc: {
      titre: 'La Charte de la révolution socialiste',
      source: 'd’après le Boky Mena (Charte de la révolution socialiste malgache), 1975 — extraits adaptés',
      texte: 'La révolution que nous voulons est une révolution socialiste. Il n’est pas possible de construire le développement si les leviers de l’économie demeurent entre les mains de l’étranger : c’est pourquoi l’État doit contrôler les banques, les assurances, le commerce extérieur et les secteurs clés de la production. L’école doit être l’école du peuple : elle enseignera dans la langue de la nation et formera des citoyens utiles à leur pays, non des candidats à l’exil. Le fokonolona, cellule vivante de la société malgache, sera le socle de la décentralisation. Notre diplomatie sera ouverte à tous les horizons, sans soumission à aucun bloc.',
      questions: ['Pourquoi la Charte veut-elle que l’État contrôle l’économie ?',
        'Quels principes la Charte fixe-t-elle pour l’école et pour la diplomatie ?',
        'Confronte ces objectifs aux résultats des années 1980 : que constates-tu ?'],
      reponses: ['Parce que, selon elle, le développement est impossible tant que « les leviers de l’économie demeurent entre les mains de l’étranger » : nationaliser, c’est achever l’indépendance.',
        'L’école enseignera en malgache et formera des citoyens utiles au pays ; la diplomatie sera « tous azimuts », sans soumission à aucun bloc — dans l’esprit du non-alignement.',
        'Les résultats contredisent les objectifs : entreprises d’État déficitaires, pénuries, endettement obligeant à accepter le FMI, malgachisation improvisée. L’historien distingue toujours les intentions proclamées des résultats observés.']
    },
    lexique: [
      ['Nationalisation', 'transfert d’une entreprise privée à la propriété de l’État'],
      ['Ajustement structurel', 'réformes imposées par le FMI en échange de prêts'],
      ['Forces vives', 'coalition d’opposition (partis, églises, syndicats) de 1991'],
      ['Transition', 'période de passage négocié d’un régime politique à un autre'],
    ],
    synthese: 'Deuxième République (21 décembre 1975 - 1993) : Ratsiraka, Boky Mena — nationalisations, malgachisation, fokonolona, non-alignement, AREMA. Années 1980 : faillite économique, pénuries, ajustement structurel du FMI. 1991 : grèves des Forces vives, marche du 10 août (Iavoloha) réprimée, convention du 31 octobre → Constitution du 19 août 1992, élection de Zafy Albert (1993).',
    saistu: 'Pendant les pénuries des années 1980, le « taxi-brousse du riz » faisait partie de la vie : des familles entières attendaient des nuits devant les épiceries d’État pour quelques kapoaka de riz. Cette mémoire des files d’attente a durablement marqué les Malgaches — demande à tes grands-parents : presque tous ont une histoire de vary à raconter. Voilà encore un beau sujet d’Histoire orale !',
    exos: ['La révolution socialiste. a) Que fonde le référendum du 21 décembre 1975 ? b) Qu’est-ce que le Boky Mena ? d) Cite trois mesures socialistes. e) Quel parti domine le régime ?',
      'La crise. a) Cite deux signes de la faillite économique. b) Qu’impose l’ajustement structurel ? d) Quelle difficulté la malgachisation improvisée crée-t-elle ? e) Pourquoi l’endettement limite-t-il l’indépendance ?',
      'La transition. a) Qui sont les Forces vives ? b) Que se passe-t-il le 10 août 1991 ? d) Que décide la convention du 31 octobre 1991 ? e) Comment la Troisième République naît-elle ?'],
    corr: ['a) la République démocratique de Madagascar (Deuxième République) ; b) la Charte de la révolution socialiste malgache ; d) nationalisations, malgachisation, décentralisation par les fokonolona, service national (trois suffisent) ; e) l’AREMA de Didier Ratsiraka, au sein du FNDR.',
      'a) entreprises d’État déficitaires, pénuries (riz, savon, huile), production en baisse (deux suffisent) ; b) privatisations, réduction des dépenses publiques, libéralisation ; d) une génération mal à l’aise en malgache comme en français ; e) parce que les créanciers (FMI, Banque mondiale) dictent alors une partie de la politique économique.',
      'a) la coalition d’opposition de 1991 : partis, églises, syndicats ; b) une marche pacifique vers Iavoloha est dispersée dans le sang ; d) l’instauration d’une transition partagée ; e) par le référendum constitutionnel du 19 août 1992, puis l’élection de Zafy Albert en 1993.'],
    fig: 'u4f2'
  },
  {
    t: 'La Troisième République (1992-2011)', comp: 'Madagascar sous les Républiques', theme: 'Alternances, crise de 2002, transition de 2009',
    goal: 'présenter la Troisième République : présidents, crise de 2002, transition de 2009-2014',
    mat: 'Frise 1992-2014, articles de presse, documents',
    revQ: 'Cite trois mesures du Boky Mena et deux causes de la chute de la Deuxième République.',
    revRA: 'Mesures : nationalisations, malgachisation, décentralisation par les fokonolona (trois suffisent) ; chute : faillite économique et pénuries, mouvement des Forces vives de 1991.',
    situation: 'Avec la Constitution de 1992, Madagascar se dote d’une démocratie pluraliste : presse libre, multipartisme, alternances. Mais en vingt ans, la Troisième République connaît un président empêché, une crise qui coupe le pays en deux pendant six mois, et une chute de régime. La démocratie malgache avance — par à-coups. Pourquoi est-elle si fragile ?',
    legende: 'Urnes, débats et foules sur les places : la démocratie pluraliste malgache avance — par à-coups.',
    motsCles: ['Troisième République', 'Constitution de 1992', 'Zafy Albert', 'empêchement 1996', 'Ratsirahonana', 'Ratsiraka 1997', 'crise de 2002', 'Ravalomanana', 'crise de 2009', 'transition 2009-2014'],
    sections: [
      {
        titre: 'Des alternances mouvementées (1993-2001)',
        paras: [
          'Élu en 1993, Zafy Albert gouverne dans un régime qui donne l’essentiel du pouvoir à l’Assemblée. Les conflits entre institutions s’enchaînent : en 1996, l’Assemblée vote son empêchement, confirmé par la Haute Cour constitutionnelle — cas rarissime d’un président destitué par les voies légales. Norbert Ratsirahonana assure l’intérim, et l’élection de fin 1996 ramène au pouvoir… Didier Ratsiraka, revenu d’exil. La constitution est révisée dans un sens présidentiel et provincial (autonomies).',
        ],
      },
      {
        titre: 'La crise de 2002',
        paras: [
          'L’élection de décembre 2001 oppose Ratsiraka au maire d’Antananarivo, Marc Ravalomanana. Chacun revendique la victoire : le pays se coupe en deux — deux capitales, des barrages sur les routes, des ponts dynamités, une économie étranglée pendant six mois. Après recomptage des voix, Ravalomanana est proclamé président (avril 2002) et s’impose ; Ratsiraka part en exil. Président de 2002 à 2009, réélu en 2006, Ravalomanana modernise routes et écoles, attire les investisseurs — mais concentre pouvoir et affaires, ce qui nourrit les oppositions.',
        ],
      },
      {
        titre: 'La crise de 2009 et la transition',
        paras: [
          'Début 2009, le jeune maire d’Antananarivo, Andry Rajoelina, prend la tête de la contestation ; les manifestations font des dizaines de morts, dont ceux du 7 février 2009 devant le palais d’Ambohitsorohitra. En mars 2009, lâché par une partie de l’armée, Ravalomanana démissionne et s’exile ; Rajoelina dirige une Haute Autorité de la transition non reconnue par la communauté internationale, qui suspend ses aides. Après de longues médiations (feuille de route de 2011), des élections apaisées se tiennent fin 2013 : la transition s’achève — et la Quatrième République, adoptée entre-temps, se met en place.',
        ],
      },
    ],
    doc: {
      titre: 'La Constitution de la Troisième République',
      source: 'd’après le préambule et les premiers articles de la Constitution malgache du 18 septembre 1992 — extraits adaptés',
      texte: 'Le peuple malgache souverain, profondément attaché à ses valeurs culturelles et spirituelles, notamment au fihavanana, garant de l’unité nationale ; convaincu de la nécessité de la réconciliation nationale ; résolu à promouvoir et à développer son héritage de société vivant en harmonie et respectueuse de l’altérité ; considérant que l’épanouissement de la personnalité et de l’identité de tout Malgache est le facteur essentiel du développement durable ; proclame : la souveraineté appartient au peuple, source de tout pouvoir, qui l’exerce par ses représentants élus au suffrage universel ou par la voie du référendum. Aucune fraction du peuple ni aucun individu ne peut s’attribuer l’exercice de la souveraineté.',
      questions: ['Quelle valeur malgache le préambule place-t-il au cœur de l’unité nationale ?',
        'À qui appartient la souveraineté, et comment s’exerce-t-elle ?',
        'Confronte la dernière phrase aux crises de 1996, 2002 et 2009 : qu’en conclus-tu ?'],
      reponses: ['Le fihavanana, « garant de l’unité nationale », aux côtés de la réconciliation et de l’harmonie sociale.',
        'Au peuple, « source de tout pouvoir » : il l’exerce par ses représentants élus au suffrage universel ou par référendum.',
        'Les crises naissent chaque fois que des acteurs s’attribuent la souveraineté hors des urnes ou contestent leur verdict : la lettre de la Constitution n’a pas suffi — il faut aussi des institutions solides et une culture démocratique partagée.']
    },
    lexique: [
      ['Pluralisme', 'liberté de plusieurs partis et opinions de concourir au pouvoir'],
      ['Empêchement', 'procédure légale écartant un président jugé incapable de gouverner'],
      ['Crise post-électorale', 'conflit né de la contestation des résultats d’une élection'],
      ['Feuille de route', 'accord fixant les étapes de sortie d’une crise politique'],
    ],
    synthese: 'Troisième République (Constitution du 18 septembre 1992) : Zafy Albert (1993, empêché 1996), intérim Ratsirahonana, retour de Ratsiraka (1997). Crise de 2002 : pays coupé en deux six mois, victoire de Ravalomanana (2002-2009, réélu 2006 — routes, écoles, investissements). Crise de 2009 : Rajoelina, Haute Autorité de la transition non reconnue, sanctions ; feuille de route 2011, élections fin 2013 : transition achevée.',
    saistu: 'L’empêchement de 1996 fait de Madagascar l’un des très rares pays au monde où un président élu a été destitué par le vote du parlement et la décision d’une cour — sans coup d’État ni violence. Paradoxe de notre vie politique : capable du légalisme le plus strict… et des crises de rue les plus dures, parfois à quelques années d’intervalle. Comprendre ce paradoxe, c’est déjà travailler à le dépasser.',
    exos: ['Les alternances. a) Quand la Constitution de la IIIᵉ République est-elle adoptée ? b) Qu’arrive-t-il à Zafy Albert en 1996 ? d) Qui assure l’intérim ? e) Qui gagne l’élection de 1996 ?',
      'La crise de 2002. a) Qui s’affrontent en décembre 2001 ? b) Décris deux aspects de la coupure du pays. d) Comment la crise se dénoue-t-elle ? e) Cite deux réalisations et une critique de Ravalomanana.',
      'La crise de 2009. a) Qui mène la contestation de 2009 ? b) Que se passe-t-il le 7 février 2009 ? d) Pourquoi la transition est-elle isolée ? e) Comment la crise se termine-t-elle ?'],
    corr: ['a) par référendum, le 18 septembre 1992 ; b) l’Assemblée vote son empêchement, confirmé par la Haute Cour constitutionnelle ; d) Norbert Ratsirahonana ; e) Didier Ratsiraka, revenu d’exil.',
      'a) Didier Ratsiraka et Marc Ravalomanana ; b) deux pouvoirs rivaux, barrages routiers, ponts dynamités, économie paralysée six mois (deux suffisent) ; d) par le recomptage des voix et la proclamation de Ravalomanana (avril 2002) ; e) réalisations : routes, écoles, investissements ; critique : concentration du pouvoir et des affaires.',
      'a) Andry Rajoelina, maire d’Antananarivo ; b) la fusillade d’Ambohitsorohitra fait des dizaines de morts parmi les manifestants ; d) parce que la communauté internationale ne reconnaît pas la Haute Autorité de la transition et suspend ses aides ; e) par la feuille de route de 2011 et les élections apaisées de fin 2013.'],
    fig: 'u4f3'
  },
  {
    t: 'La Quatrième République (depuis 2011) — instabilité et bilan', comp: 'Madagascar sous les Républiques', theme: 'Présidents, transition de 2025, racines de l’instabilité',
    goal: 'présenter la Quatrième République et analyser les causes de l’instabilité politique et le bilan socio-économique',
    mat: 'Frise 2010-2025, données socio-économiques, documents',
    revQ: 'Raconte les deux grandes crises de la Troisième République.',
    revRA: '2002 : élection contestée Ratsiraka-Ravalomanana, pays coupé en deux six mois ; 2009 : chute de Ravalomanana, transition Rajoelina non reconnue jusqu’aux élections de 2013.',
    situation: 'Quatre Républiques en soixante-cinq ans, et une crise majeure presque chaque décennie : 1972, 1991, 2002, 2009, 2025… Pourquoi notre pays, en paix avec tous ses voisins, n’arrive-t-il pas à être en paix avec lui-même ? La dernière séance d’histoire nationale pose la question la plus actuelle de toutes — celle que ta génération devra résoudre.',
    legende: 'Quatre Républiques, une question : comment bâtir des institutions stables au service du développement ?',
    motsCles: ['Quatrième République', 'Constitution de 2010', 'Rajaonarimampianina', 'Rajoelina', '2025', 'mouvement de la jeunesse', 'refondation', 'instabilité politique', 'plébiscite', 'crise post-électorale', 'pauvreté', 'bilan socio-économique'],
    sections: [
      {
        titre: 'La IVᵉ République et ses présidents',
        paras: [
          'Adoptée par le référendum du 17 novembre 2010 et promulguée le 11 décembre 2010, la Constitution de la Quatrième République est née pendant la transition. Hery Rajaonarimampianina, élu fin 2013, gouverne de 2014 à 2018 dans un climat de fragilité parlementaire. Andry Rajoelina remporte l’élection de 2018, puis celle de 2023, boycottée par l’opposition. En septembre-octobre 2025, un vaste mouvement de contestation porté par la jeunesse — né des coupures d’eau et d’électricité et de l’exigence de bonne gouvernance — entraîne le départ de Rajoelina ; une refondation de la République s’engage, conduite par le colonel Michaël Randrianirina. L’histoire de cette période s’écrit encore : garde sur elle un regard d’historien — prudent, critique, documenté.',
        ],
      },
      {
        titre: 'Pourquoi tant d’instabilité ?',
        paras: ['Les historiens et politologues avancent plusieurs racines communes aux crises malgaches :'],
        puces: [
          'des institutions souvent taillées pour un homme : référendums à répétition transformés en plébiscites, constitutions révisées au profit du pouvoir en place ;',
          'des élections contestées : presque chaque crise (1972 exceptée) naît d’un scrutin dont le perdant refuse le verdict ;',
          'la personnalisation du pouvoir et la faiblesse des contre-pouvoirs — assemblées, justice, médias ;',
          'et la pauvreté : quand la majorité vit dans la précarité, chaque crise trouve une armée de mécontents — et chaque crise aggrave à son tour la pauvreté : c’est le cercle vicieux politico-économique.',
        ],
      },
      {
        titre: 'Le bilan socio-économique',
        paras: [
          'Le bilan de six décennies est contrasté : des progrès réels — espérance de vie et scolarisation en hausse, démocratie pluraliste, presse libre, société civile active — mais un revenu par habitant parmi les plus faibles du monde, inférieur à celui de 1960 en valeur réelle : les trois quarts des Malgaches vivent sous le seuil de pauvreté. Chaque crise politique a coûté des années de croissance. La leçon de l’Histoire est claire : la stabilité des institutions, la paix civile et l’esprit critique des citoyens — toi compris — sont les premières conditions du développement.',
        ],
      },
    ],
    doc: {
      titre: 'Le coût des crises politiques',
      source: 'texte reconstitué d’après les rapports d’institutions internationales sur l’économie malgache — document pédagogique',
      texte: 'Madagascar présente un paradoxe : un pays sans guerre ni catastrophe majeure, doté de ressources naturelles exceptionnelles, dont le revenu réel par habitant a pourtant diminué depuis l’indépendance. L’explication principale tient aux crises politiques répétées : chacune des crises de 1972, 1991, 2002 et 2009 a interrompu une période de croissance. Les investisseurs se retirent, les financements sont suspendus, le tourisme s’effondre, les entreprises ferment. Chaque épisode d’instabilité coûte plusieurs points de croissance, et il faut des années pour retrouver le niveau d’avant la crise. La pauvreté, à son tour, nourrit l’instabilité : rompre ce cercle est le premier défi du pays.',
      questions: ['Quel paradoxe le rapport souligne-t-il ?',
        'Par quel mécanisme une crise politique appauvrit-elle le pays ?',
        'Que signifie « rompre le cercle » — et qui peut le faire ?'],
      reponses: ['Un pays en paix et riche en ressources, mais dont le revenu réel par habitant a baissé depuis 1960.',
        'Investisseurs en fuite, aides suspendues, tourisme effondré, entreprises fermées : chaque crise coûte plusieurs points de croissance et des années de rattrapage.',
        'Briser l’enchaînement pauvreté → crise → pauvreté : cela exige des institutions stables, des élections acceptées par tous, et des citoyens éduqués et critiques — c’est-à-dire, d’abord, ta génération.']
    },
    lexique: [
      ['Plébiscite', 'référendum détourné en vote de confiance pour un homme'],
      ['Contre-pouvoirs', 'institutions qui limitent le pouvoir : justice, assemblée, presse'],
      ['Seuil de pauvreté', 'niveau de revenu minimal pour couvrir les besoins essentiels'],
      ['Refondation', 'reconstruction des institutions d’un État après une crise'],
    ],
    synthese: 'IVᵉ République (Constitution du 11 décembre 2010) : Rajaonarimampianina (2014-2018), Rajoelina (2019-2023, réélu 2023), mouvement de la jeunesse et refondation conduite par Randrianirina (octobre 2025). Racines de l’instabilité : plébiscites et constitutions sur mesure, élections contestées, personnalisation du pouvoir, pauvreté — cercle vicieux crise-pauvreté. Bilan : progrès (scolarisation, démocratie, presse) mais revenu réel par habitant inférieur à 1960, trois quarts des Malgaches sous le seuil de pauvreté.',
    saistu: 'Toutes les grandes crises malgaches — 1972, 1991, 2002, 2009, 2025 — ont un point commun : elles sont parties d’Antananarivo, et souvent d’un même lieu, la place du 13-Mai, devant l’hôtel de ville. Cette place, nommée d’après les morts du 13 mai 1972, est devenue le véritable « thermomètre » politique du pays : un lieu de mémoire vivant, où chaque génération vient écrire sa page — tu étudieras justement les lieux de mémoire dans la prochaine unité.',
    exos: ['La IVᵉ République. a) Quand sa Constitution est-elle adoptée ? b) Cite ses présidents élus avec leurs mandats. d) Que se passe-t-il en septembre-octobre 2025 ? e) Pourquoi faut-il un « regard d’historien » sur 2025 ?',
      'L’instabilité. a) Cite les cinq grandes crises depuis 1960. b) Quel est leur point de départ électoral commun ? d) Qu’est-ce qu’un plébiscite ? e) Explique le cercle vicieux crise-pauvreté.',
      'Le bilan. a) Cite deux progrès depuis 1960. b) Cite deux chiffres du retard économique. d) Que coûte une crise à l’économie ? e) Quelles sont, d’après la leçon, les conditions du développement ?'],
    corr: ['a) référendum du 17 novembre 2010, promulgation le 11 décembre 2010 ; b) Rajaonarimampianina (2014-2018), Rajoelina (2019-2023, réélu fin 2023) ; d) un mouvement de contestation porté par la jeunesse entraîne le départ de Rajoelina et l’engagement d’une refondation conduite par le colonel Randrianirina ; e) parce que les événements sont trop récents : les sources manquent de recul, il faut rester prudent, critique et documenté.',
      'a) 1972, 1991, 2002, 2009, 2025 ; b) presque toutes naissent d’un scrutin contesté (sauf 1972) ; d) un référendum détourné en vote de confiance pour un homme ; e) la pauvreté fournit les mécontents des crises, et chaque crise aggrave la pauvreté en détruisant la croissance.',
      'a) espérance de vie et scolarisation en hausse, pluralisme, presse libre (deux suffisent) ; b) revenu réel par habitant inférieur à celui de 1960 ; environ trois quarts des Malgaches sous le seuil de pauvreté ; d) plusieurs points de croissance et des années de rattrapage ; e) la stabilité des institutions, la paix civile et l’esprit critique des citoyens.'],
    fig: 'u4f4'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Madagascar sous les différentes Républiques',
  rag: 'présenter l’évolution politique, économique et sociale de Madagascar de 1958 à nos jours et analyser les causes de l’instabilité.',
  valeurs: 'fierté d’être malgache, esprit critique',
  sessions: S,
  revision: {
    table: [
      ['Première République (1959-1972)', 'Tsiranana, PSD ; indépendance 26 juin 1960 ; université 1961, SOMALAC ; accords de coopération ; crises 1971-1972', 'Présenter la première expérience nationale'],
      ['1972-1975', '13 mai 1972 ; Ramanantsoa (révision des accords, départ des bases) ; Ratsimandrava assassiné 11 février 1975 ; directoire ; Ratsiraka 15 juin 1975', 'Raconter le passage au pouvoir militaire'],
      ['Deuxième République (1975-1993)', 'Boky Mena : nationalisations, malgachisation, fokonolona ; crise des années 1980, FMI ; Forces vives 1991, 10 août ; Constitution 1992', 'Expliquer grandeur et crise du socialisme malgache'],
      ['Troisième République (1992-2011)', 'Zafy (empêché 1996), Ratsiraka 1997, crise 2002, Ravalomanana 2002-2009, crise 2009, transition 2009-2014', 'Suivre les alternances et les crises'],
      ['Quatrième République (depuis 2011)', 'Constitution 2010 ; Rajaonarimampianina 2014-2018 ; Rajoelina 2019-2025 ; mouvement de la jeunesse et refondation (Randrianirina, octobre 2025)', 'Situer la période actuelle'],
      ['Instabilité et bilan', 'Plébiscites, élections contestées, personnalisation, pauvreté ; cercle vicieux crise-pauvreté ; revenu réel inférieur à 1960', 'Analyser les racines du mal malgache']
    ],
    questions: [
      'Donne les dates et le premier président de chaque République.',
      'Raconte mai 1972 en trois étapes.',
      'Cite trois mesures du Boky Mena et deux causes de la chute de la IIᵉ République.',
      'Compare les crises de 2002 et de 2009.',
      'Explique les quatre racines de l’instabilité politique malgache.'
    ],
    answers: [
      'Iʳᵉ : 1959-1972, Tsiranana ; IIᵉ : 1975-1993, Ratsiraka ; IIIᵉ : 1992-2011, Zafy Albert ; IVᵉ : depuis 2010-2011, Rajaonarimampianina premier élu.',
      'Grève des étudiants de Befelatanana étendue aux ZOAM et travailleurs ; répression meurtrière du 13 mai devant l’hôtel de ville ; remise des pleins pouvoirs à Ramanantsoa le 18 mai.',
      'Mesures : nationalisations, malgachisation, décentralisation par les fokonolona (ou service national, non-alignement) ; causes : faillite économique et pénuries, mouvement des Forces vives de 1991.',
      '2002 : crise post-électorale entre deux candidats, pays coupé en deux six mois, résolue par recomptage ; 2009 : chute d’un président sous la pression de la rue et d’une partie de l’armée, transition non reconnue de cinq ans — les deux ont ruiné l’économie.',
      'Plébiscites et constitutions sur mesure ; élections contestées ; personnalisation du pouvoir et faiblesse des contre-pouvoirs ; pauvreté alimentant le cercle vicieux crise-pauvreté.'
    ]
  },
  exam: {
    exos: [
      'Questions de cours. a) Que sont les accords de coopération de 1960 ? b) Définis la malgachisation. d) Qu’est-ce que l’ajustement structurel ? e) Définis le plébiscite.',
      'Repères. Associe chaque date à son événement : a) 13 mai 1972 ; b) 11 février 1975 ; d) 10 août 1991 ; e) 17 novembre 2010.',
      'Les Républiques. a) Cite une réalisation de la Iʳᵉ République et une de Ravalomanana. b) Cite deux mesures du Boky Mena. d) Qu’arrive-t-il à Zafy Albert en 1996 ? e) Qui conduit la refondation engagée en octobre 2025 ?',
      'Étude de document. Le préambule de 1992 proclame : « Aucune fraction du peuple ni aucun individu ne peut s’attribuer l’exercice de la souveraineté. » a) De quel texte est-ce extrait ? b) Quelle valeur malgache ce texte place-t-il au cœur de l’unité ? d) Montre avec deux exemples que ce principe a été violé. e) Que faudrait-il pour qu’il soit respecté ?',
      'Réflexion organisée. « L’instabilité politique est le premier frein au développement de Madagascar. » a) Cite les cinq grandes crises avec leurs dates. b) Explique le mécanisme économique d’une crise. d) Explique le cercle vicieux crise-pauvreté. e) Conclus : quel rôle ta génération peut-elle jouer ?'
    ],
    corr: [
      'a) les traités maintenant la présence française après 1960 (bases, monnaie, coopérants) ; b) l’adaptation de l’enseignement à la langue et aux réalités malgaches ; d) les réformes imposées par le FMI en échange de prêts (privatisations, austérité) ; e) un référendum détourné en vote de confiance pour un homme. Un point par item.',
      'a) répression meurtrière du mouvement de 1972 à Antananarivo ; b) assassinat du colonel Ratsimandrava ; d) marche des Forces vives vers Iavoloha, dispersée dans le sang ; e) référendum adoptant la Constitution de la IVᵉ République. Un point par item.',
      'a) Iʳᵉ République : Université de Madagascar (1961) ou SOMALAC ; Ravalomanana : routes et écoles ; b) nationalisations, malgachisation (ou fokonolona, service national) ; d) l’Assemblée vote son empêchement, confirmé par la Haute Cour constitutionnelle ; e) le colonel Michaël Randrianirina. Un point par item.',
      'a) du préambule et des premiers articles de la Constitution du 18 septembre 1992 ; b) le fihavanana, garant de l’unité nationale ; d) 2002 : deux pouvoirs parallèles revendiquent la souveraineté ; 2009 : un pouvoir issu de la rue remplace un président élu (autres exemples acceptés) ; e) des institutions et une justice fortes, des élections incontestables, des citoyens formés à l’esprit critique. Un point par item.',
      'a) 1972, 1991, 2002, 2009, 2025 ; b) fuite des investisseurs, suspension des aides, effondrement du tourisme, fermetures d’entreprises ; d) la pauvreté fournit les mécontents de la crise suivante, et chaque crise aggrave la pauvreté ; e) s’instruire, voter et faire respecter le vote, exercer l’esprit critique face aux propagandes, refuser la violence : bâtir enfin la stabilité. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
