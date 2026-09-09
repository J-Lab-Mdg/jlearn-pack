// ============================================================
// Unité IV — Santé et bien-être (RAS : déterminer les actions pour
// prendre soin de l'appareil urinaire) — 8 h
// ============================================================

const U = {
  num: "IV",
  titre: "Santé et bien-être",
  ras: "Déterminer les actions pour prendre soin de l'appareil urinaire",
  valeurs: "Responsabilité, respect de la vie",
  themes: ["L'appareil urinaire : découverte", "Les rôles des organes de l'appareil urinaire",
    "Hygiène et soin de l'appareil urinaire"],
  topics: [
    {
      type: "cours",
      titre: "L'appareil urinaire : découverte",
      theme: "Santé et bien-être",
      ras: "Déterminer les actions pour prendre soin de l'appareil urinaire",
      valeurs: "Responsabilité, respect de la vie",
      objectif: "identifier les organes de l'appareil urinaire et les situer sur un schéma",
      supportMeta: "Schéma légendé de l'appareil urinaire, images ou photos",
      revision: [
        ["Quel est le déchet liquide produit par le corps ?", "L'urine."],
        ["Quel organe du corps élimine les déchets par l'urine ?", "Les reins (l'appareil urinaire)."],
      ],
      mise: ["Après avoir bu beaucoup d'eau, que ressens-tu ?", "L'envie d'uriner : le corps élimine l'eau et les déchets par l'urine."],
      observation: "le schéma légendé de l'appareil urinaire",
      observationSupport: "Schéma légendé de l'appareil urinaire (reins, uretères, vessie, urètre)",
      qa: [
        ["Quels organes voit-on sur le schéma ?", "Les reins, les uretères, la vessie et l'urètre."],
        ["Combien y a-t-il de reins ?", "Deux reins."],
        ["Où se trouve la vessie ?", "Dans le bas du ventre ; elle recueille l'urine."],
        ["Par quel canal l'urine sort-elle du corps ?", "Par l'urètre."],
      ],
      synthese: "Donc, l'appareil urinaire est formé de deux reins, de deux uretères, de la vessie et de l'urètre. Les reins filtrent le sang, les uretères conduisent l'urine, la vessie la stocke et l'urètre l'évacue.",
      motsCles: ["appareil urinaire", "reins", "uretères", "vessie", "urètre", "urine"],
      contenu: [
        { sousTitre: "1. Le rôle de l'appareil urinaire", texte: "L'appareil urinaire élimine les déchets du sang sous forme d'urine. Il participe à la purification du corps et au maintien de la santé." },
        { sousTitre: "2. Les organes de l'appareil urinaire", liste: ["Les reins : deux organes en forme de haricot, situés dans le dos (au niveau de la taille). Ils filtrent le sang et fabriquent l'urine.","Les uretères : deux conduits qui transportent l'urine des reins vers la vessie.","La vessie : poche musculaire qui stocke l'urine.","L'urètre : canal par lequel l'urine sort du corps."] },
        { sousTitre: "3. La formation de l'urine", texte: "Le sang passe dans les reins, qui retiennent les éléments utiles (eau, sels minéraux en quantité nécessaire) et éliminent les déchets. L'urine est ainsi composée surtout d'eau et de déchets. Elle s'accumule dans la vessie puis est évacuée." },
        { sousTitre: "4. Le trajet de l'urine", texte: "L'urine suit toujours le même chemin : reins → uretères → vessie → urètre → extérieur." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "L'appareil urinaire est formé de…", opts: ["reins, uretères, vessie, urètre", "poumons et cœur", "estomac et intestins"], ok: 0, expl: "Ce sont les quatre éléments de l'appareil urinaire." },
          { q: "Les uretères transportent…", opts: ["le sang", "l'urine", "la nourriture"], ok: 1, expl: "Les uretères conduisent l'urine des reins à la vessie." },
          { q: "La vessie…", opts: ["filtre le sang", "stocke l'urine", "produit l'urine"], ok: 1, expl: "La vessie est une poche qui garde l'urine." },
          { q: "Le sang est filtré par…", opts: ["les reins", "la vessie", "l'urètre"], ok: 0, expl: "Les reins filtrent le sang et fabriquent l'urine." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Il y a deux reins dans le corps humain.", rep: true, expl: "Les reins sont au nombre de deux." },
          { txt: "L'urine est produite par la vessie.", rep: false, expl: "L'urine est produite par les reins ; la vessie la stocke." },
          { txt: "L'urètre est le canal de sortie de l'urine.", rep: true, expl: "L'urine sort du corps par l'urètre." },
          { txt: "L'urine sert uniquement à refroidir le corps.", rep: false, expl: "L'urine élimine les déchets du sang." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les quatre organes de l'appareil urinaire.", r: "L'appareil urinaire comprend les reins, les uretères, la vessie et l'urètre." },
          { q: "Quel est le rôle de la vessie ?", r: "La vessie stocke l'urine avant son évacuation." },
          { q: "Quel est le trajet de l'urine ?", r: "L'urine passe successivement par les reins, les uretères, la vessie et l'urètre." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les reins filtrent le", suite: "sang" },
          { debut: "La vessie stocke l'", suite: "urine" },
          { debut: "L'urine sort par l'", suite: "urètre" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Les rôles des organes de l'appareil urinaire",
      theme: "Santé et bien-être",
      ras: "Déterminer les actions pour prendre soin de l'appareil urinaire",
      valeurs: "Responsabilité, respect de la vie",
      objectif: "expliquer le rôle de chaque organe de l'appareil urinaire",
      supportMeta: "Schéma de l'appareil urinaire, documents sur la filtration du sang",
      revision: [
        ["Cite les organes de l'appareil urinaire.", "Les reins, les uretères, la vessie et l'urètre."],
        ["Que fabriquent les reins ?", "L'urine, en filtrant le sang."],
      ],
      mise: ["Pourquoi dit-on que les reins sont les « filtres » du corps ?", "Parce qu'ils retiennent les déchets du sang et les éliminent dans l'urine."],
      observation: "le schéma de l'appareil urinaire et le document sur la filtration du sang",
      observationSupport: "Schéma de l'appareil urinaire, document simple « du sang à l'urine »",
      qa: [
        ["Que fait le rein avec le sang ?", "Il le filtre : il garde les éléments utiles et élimine les déchets dans l'urine."],
        ["Pourquoi l'urine contient-elle surtout de l'eau ?", "Parce que l'eau transporte les déchets dissous hors du corps."],
        ["Que se passe-t-il si les reins ne fonctionnent plus ?", "Les déchets s'accumulent dans le sang, ce qui est dangereux pour la santé."],
        ["Pourquoi faut-il boire de l'eau ?", "Pour aider les reins à éliminer les déchets et garder le corps en bonne santé."],
      ],
      synthese: "Donc, les reins filtrent le sang et produisent l'urine, les uretères la transportent, la vessie la stocke et l'urètre l'évacue. L'appareil urinaire débarrasse le corps de ses déchets : il est indispensable à la santé.",
      motsCles: ["filtration", "déchets", "eau", "urine", "santé"],
      contenu: [
        { sousTitre: "1. Le rôle des reins : filtrer le sang", texte: "Les reins reçoivent le sang et le filtrent. Les éléments utiles (eau en quantité nécessaire, sels minéraux, nutriments) restent dans le sang ; les déchets (urée, sels en excès) passent dans l'urine." },
        { sousTitre: "2. Le rôle des uretères", texte: "Les uretères sont deux fins conduits qui font circuler l'urine des reins vers la vessie. Ils empêchent l'urine de revenir en arrière." },
        { sousTitre: "3. Le rôle de la vessie", texte: "La vessie est une poche élastique qui se remplit d'urine. Quand elle est pleine, elle envoie un signal : la sensation d'envie d'uriner. Elle se vide par l'urètre." },
        { sousTitre: "4. Le rôle de l'urètre et l'importance de l'appareil urinaire", liste: ["L'urètre évacue l'urine hors du corps.","L'appareil urinaire débarrasse le sang des déchets.","Il maintient la quantité d'eau du corps.","Sans lui, les déchets s'accumuleraient et empoisonneraient le corps.","Boire assez d'eau aide les reins à bien travailler."] },
        { sousTitre: "Exemple", texte: "Après un effort ou un repas salé, on boit de l'eau : les reins filtrent davantage et l'urine est plus abondante. C'est un signe que l'appareil urinaire fonctionne bien." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les reins…", opts: ["stockent l'urine", "filtrent le sang", "digèrent les aliments"], ok: 1, expl: "Les reins filtrent le sang et produisent l'urine." },
          { q: "Les uretères…", opts: ["transportent l'urine", "stockent l'urine", "produisent l'urine"], ok: 0, expl: "Les uretères conduisent l'urine vers la vessie." },
          { q: "Si les reins ne fonctionnent plus…", opts: ["les déchets s'accumulent dans le sang", "le corps devient plus propre", "l'urine devient plus abondante"], ok: 0, expl: "Les déchets s'accumulent, ce qui est dangereux." },
          { q: "Boire de l'eau aide…", opts: ["les reins à éliminer les déchets", "à fabriquer du sang", "à arrêter la production d'urine"], ok: 0, expl: "L'eau aide les reins à travailler." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'urine contient des déchets du sang.", rep: true, expl: "Les déchets filtrés passent dans l'urine." },
          { txt: "La vessie filtre le sang.", rep: false, expl: "La vessie stocke l'urine ; c'est le rein qui filtre." },
          { txt: "Il faut boire assez d'eau chaque jour.", rep: true, expl: "L'eau aide les reins à éliminer les déchets." },
          { txt: "Les uretères sont des poumons.", rep: false, expl: "Les uretères sont des conduits de l'appareil urinaire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Explique le rôle des reins.", r: "Les reins filtrent le sang, gardent les éléments utiles et éliminent les déchets dans l'urine." },
          { q: "Quel est le rôle de la vessie ?", r: "La vessie stocke l'urine et la rejette par l'urètre quand elle est pleine." },
          { q: "Pourquoi l'appareil urinaire est-il indispensable ?", r: "Parce qu'il débarrasse le sang des déchets et maintient la santé du corps." },
        ]},
        { type: "appariement", consigne: "Relie chaque organe à son rôle.", pointsPar: 1, items: [{ g: ["Reins", "Uretères", "Vessie", "Urètre"], d: ["Stocke l'urine", "Filtrent le sang", "Canal de sortie", "Transportent l'urine"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Hygiène et soin de l'appareil urinaire",
      theme: "Santé et bien-être",
      ras: "Déterminer les actions pour prendre soin de l'appareil urinaire",
      valeurs: "Responsabilité, respect de la vie",
      objectif: "citer et expliquer les actions pour prendre soin de l'appareil urinaire",
      supportMeta: "Photos ou illustrations des gestes d'hygiène, affiche de santé",
      revision: [
        ["Quel est le rôle des reins ?", "Ils filtrent le sang et produisent l'urine."],
        ["Pourquoi boire de l'eau est-il important ?", "Pour aider les reins à éliminer les déchets."],
      ],
      mise: ["Tana a mal au ventre quand elle urine. Que doit-elle faire ?", "En parler à un adulte de confiance et consulter un médecin ; ne pas rester sans rien faire."],
      observation: "les images des gestes d'hygiène et l'affiche de santé",
      observationSupport: "Images des gestes d'hygiène, affiche « prendre soin de son corps »",
      qa: [
        ["Quels gestes d'hygiène vois-tu sur les images ?", "Se laver, boire de l'eau, aller aux toilettes, porter des vêtements propres, consulter en cas de douleur."],
        ["Pourquoi faut-il boire suffisamment d'eau ?", "Pour aider les reins à éliminer les déchets et éviter les infections."],
        ["Pourquoi ne faut-il pas se retenir longtemps d'uriner ?", "Parce que l'urine qui stagne dans la vessie peut favoriser les infections."],
        ["Que faire en cas de douleur ou de brûlure en urinant ?", "En parler à un adulte et consulter un médecin."],
      ],
      synthese: "Donc, prendre soin de l'appareil urinaire, c'est boire assez d'eau, uriner quand on en a besoin, respecter une hygiène corporelle quotidienne (toilettes propres, vêtements propres), et consulter un médecin en cas de douleur ou de signe anormal.",
      motsCles: ["hygiène", "eau", "infection", "toilettes", "consulter", "santé"],
      contenu: [
        { sousTitre: "1. Boire suffisamment d'eau", texte: "L'eau aide les reins à filtrer le sang et à éliminer les déchets. Une personne doit boire plusieurs verres d'eau par jour, surtout par temps chaud ou après un effort." },
        { sousTitre: "2. Ne pas se retenir d'uriner", texte: "Quand on a envie d'uriner, il faut aller aux toilettes. Retenir l'urine pendant longtemps peut favoriser les infections de la vessie." },
        { sousTitre: "3. L'hygiène corporelle", liste: ["Se laver chaque jour à l'eau claire (et au savon doux).","Nettoyer les parties génitales de l'avant vers l'arrière, surtout chez les filles.","Utiliser des toilettes propres et se laver les mains après.","Porter des sous-vêtements propres et secs."] },
        { sousTitre: "4. Les signes qui doivent alerter", texte: "Certains signes montrent qu'il faut consulter un médecin : douleur ou brûlure en urinant, urine très foncée ou avec du sang, envie très fréquente d'uriner, fièvre avec douleur dans le dos. Il ne faut jamais rester seul avec ces signes : en parler à un adulte de confiance." },
        { sousTitre: "5. Les bons réflexes au quotidien", liste: ["Boire de l'eau régulièrement, même sans soif.","Aller aux toilettes dès que le besoin se fait sentir.","Adopter une hygiène quotidienne simple.","Consulter en cas de doute ou de douleur.","Éviter les produits irritants et les mictions « forcées »."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Pour protéger l'appareil urinaire, il faut…", opts: ["boire peu d'eau", "boire assez d'eau", "uriner le moins possible"], ok: 1, expl: "L'eau aide les reins à éliminer les déchets." },
          { q: "Quand on a envie d'uriner, il faut…", opts: ["attendre le soir", "aller aux toilettes", "boire encore de l'eau"], ok: 1, expl: "Se retenir longtemps favorise les infections." },
          { q: "En cas de brûlure en urinant, il faut…", opts: ["ignorer le signe", "consulter un médecin", "boire du sucre"], ok: 1, expl: "C'est un signe qui doit alerter." },
          { q: "Une bonne hygiène signifie…", opts: ["se laver chaque jour", "changer rarement de vêtements", "éviter les toilettes"], ok: 0, expl: "L'hygiène quotidienne protège la santé." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Se retenir longtemps d'uriner est bon pour la santé.", rep: false, expl: "Cela peut favoriser les infections." },
          { txt: "Boire de l'eau aide les reins.", rep: true, expl: "L'eau permet une bonne filtration." },
          { txt: "Une urine avec du sang doit conduire à consulter.", rep: true, expl: "C'est un signe anormal." },
          { txt: "L'hygiène de l'appareil urinaire concerne seulement les adultes.", rep: false, expl: "Elle concerne tout le monde, y compris les enfants et adolescents." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite trois actions pour prendre soin de l'appareil urinaire.", r: "Boire assez d'eau, aller aux toilettes dès le besoin, adopter une hygiène quotidienne." },
          { q: "Pourquoi ne faut-il pas se retenir d'uriner ?", r: "Parce que l'urine qui stagne peut favoriser les infections de la vessie." },
          { q: "Quels signes doivent faire consulter un médecin ?", r: "La douleur ou la brûlure en urinant, une urine anormale ou une envie très fréquente d'uriner." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Boire de l'eau aide les", suite: "reins" },
          { debut: "Il faut se laver les parties génitales chaque", suite: "jour" },
          { debut: "En cas de douleur, on consulte un", suite: "médecin" },
        ]},
      ],
    },
  ],
};

module.exports = U;
