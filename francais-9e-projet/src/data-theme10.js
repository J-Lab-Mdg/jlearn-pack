// =============================================================
// FRANCAIS 9e - THEME 10 : LE VOYAGE - LE TEMPS ET LES SAISONS
// Séances 28 à 30 (/186) — ancien programme (T3)
// Conjugaison : verbes pronominaux du 1er groupe (présent, passé composé)
// =============================================================
const TH10 = {
  numero: 10,
  nom: "Le voyage, le temps et les saisons",
  source: "Programme d'études antérieur — Trimestre 3",
  periodes: [
    ["Procédés et techniques", "La narration : raconter un voyage et décrire le temps qu'il fait."],
    ["Sémantico-lexical", "Le voyage et les transports, les saisons et le temps qu'il fait."],
    ["Morphosyntaxe", "Les verbes pronominaux du 1er groupe au présent et au passé composé."],
    ["Phonie-graphie", "L'élision du pronom réfléchi : s', m', t'."],
  ],
  objectifs: [
    "Nommer les moyens de transport et les étapes d'un voyage.",
    "Parler des saisons et du temps qu'il fait.",
    "Conjuguer les verbes pronominaux du 1er groupe au présent et au passé composé.",
    "Raconter un voyage dans l'ordre.",
  ],
  seances: [
    // ---------- SÉANCE 28 ----------
    {
      n: 28, titre: "Le voyage et les transports", titreFiche: "Nommer les transports et raconter un voyage.",
      sd: "Expression Orale",
      objectif: "Nommer les moyens de transport et raconter un voyage dans l'ordre",
      support: "Images de transports (taxi-brousse, pirogue, charrette), carte simplifiée.",
      image: { file: "theme10_voyage.png", w: 1100, h: 560, legende: "Le voyage et les deux saisons : la saison des pluies, la saison sèche." },
      lecon: {
        titre: "1. Le voyage et les transports",
        blocs: [
          { st: "A. Les transports et les objets", txt: "le taxi-brousse, le bus, la pirogue, la charrette ; le billet, la valise, le sac." },
          { st: "B. Les étapes du voyage", txt: "acheter le billet — monter dans le taxi-brousse — traverser la route et le pont — arriver." },
        ],
        aretenir: "On raconte un voyage dans l'ordre, avec d'abord, ensuite, après, enfin.",
      },
      revision: {
        ens: "« Comment allez-vous à l'école ? » - Révision des verbes de déplacement. Le professeur fait rappeler venir et aller au présent.",
        app: "Les élèves disent comment ils viennent à l'école.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'un taxi-brousse et demande : « Où vont ces voyageurs ? »",
        app: "Les élèves répondent et nomment ce qu'ils voient.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les transports et raconter un voyage.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Nous avons pris le taxi-brousse. Nous sommes arrivés à midi. »",
        app: "Les élèves relèvent les noms des transports et les étapes du voyage.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots et dégager les étapes.",
        app: "Les élèves classent : transports, lieux, étapes.",
        technique: {
          sous: "I. Le lexique du voyage",
          points: [
            "Les transports : le taxi-brousse, le bus, la pirogue, la charrette, le vélo.",
            "Les lieux : la gare, la route, le pont, la ville, le village.",
            "Les objets : le billet, la valise, le sac, l'argent.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait raconter un voyage dans l'ordre.",
        app: "Un élève raconte, les autres complètent.",
        technique: {
          sous: "II. Les étapes d'un voyage",
          points: [
            "D'abord, on achète le billet.",
            "Ensuite, on monte dans le taxi-brousse.",
            "Après, on traverse la route et le pont.",
            "Enfin, on arrive à destination.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique et raconter.",
        app: "Les élèves écrivent et racontent.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : taxi-brousse, gare, billet, pirogue, valise.",
            "Complétez : « Nous avons acheté le ... avant de partir. »",
            "Racontez un voyage en trois phrases, dans l'ordre.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et le récit.",
        app: "Chaque élève produit un récit correct.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois moyens de transport et deux objets du voyageur.",
            "Racontez deux étapes d'un voyage.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Classez ces mots en transports, lieux ou objets : taxi-brousse — gare — billet — pirogue — valise — route.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Racontez en trois phrases un voyage que vous avez fait, dans l'ordre.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "transports : taxi-brousse, pirogue ; lieux : gare, route ; objets : billet, valise", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : D'abord, nous avons acheté le billet. Ensuite, nous avons pris le taxi-brousse. Enfin, nous sommes arrivés chez ma grand-mère.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 29 ----------
    {
      n: 29, titre: "Les saisons et le temps qu'il fait", titreFiche: "Parler des saisons et du temps qu'il fait.",
      sd: "Lecture",
      objectif: "Nommer les saisons et décrire le temps qu'il fait",
      support: "Images des deux saisons, court texte descriptif.",
      lecon: {
        titre: "2. Les saisons et le temps qu'il fait",
        blocs: [
          { st: "A. Les expressions impersonnelles", txt: "il pleut — il fait chaud — il fait froid — il y a du vent — il fait beau." },
          { st: "B. Les deux saisons", txt: "la saison des pluies (on repique le riz) et la saison sèche (on récolte)." },
        ],
        aretenir: "Le il de il pleut est impersonnel : il ne désigne personne.",
      },
      revision: {
        ens: "« Quel temps fait-il aujourd'hui ? » - Révision du lexique du temps (thème 3). Le professeur fait rappeler les moments de la journée.",
        app: "Les élèves décrivent le temps du jour.",
      },
      miseEnSituation: {
        ens: "Le professeur montre deux images (pluie et soleil) et demande : « Quelle différence y a-t-il ? »",
        app: "Les élèves décrivent chaque image.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les saisons et décrire le temps qu'il fait.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur lit un court texte : « Pendant la saison des pluies, il pleut souvent et les rizières sont vertes. Pendant la saison sèche, il fait chaud et la terre est dure. »",
        app: "Les élèves relèvent les expressions du temps qu'il fait.",
      },
      analyse: {
        ens: "Le professeur fait dégager les expressions impersonnelles.",
        app: "Les élèves repèrent le il impersonnel.",
        technique: {
          sous: "I. Les expressions du temps",
          points: [
            "il pleut — il fait chaud — il fait froid — il y a du vent — il fait beau.",
            "Les deux saisons : la saison des pluies et la saison sèche.",
            "Le il est impersonnel : il ne désigne personne.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler et comparer les deux saisons.",
        app: "Un élève décrit une saison, un autre l'autre.",
        technique: {
          sous: "II. Comparer les deux saisons",
          points: [
            "La saison des pluies : il pleut, les rizières sont vertes, on repique le riz.",
            "La saison sèche : il fait chaud, la terre est dure, on récolte.",
            "On décrit avec il pleut, il fait chaud, il y a du vent.",
          ],
        },
      },
      application: {
        ens: "Le professeur faire employer les expressions impersonnelles.",
        app: "Les élèves écrivent et décrivent.",
        technique: {
          sous: "III. Application",
          points: [
            "Complétez : « Pendant la saison sèche, il ... chaud. »",
            "Décrivez le temps qu'il fait aujourd'hui en deux phrases.",
            "Dites quel travail des champs correspond à chaque saison.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les expressions.",
        app: "Chaque élève décrit correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Nommez les deux saisons.",
            "Décrivez le temps qu'il fait avec deux expressions impersonnelles.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Nommez les deux saisons et donnez un travail des champs pour chacune.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Décrivez le temps qu'il fait aujourd'hui en deux phrases avec il.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "la saison des pluies : on repique le riz ; la saison sèche : on récolte", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : Aujourd'hui, il fait beau. Il y a un peu de vent.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 30 ----------
    {
      n: 30, titre: "Les verbes pronominaux", titreFiche: "Conjuguer les verbes pronominaux au présent et au passé composé.",
      sd: "Conjugaison",
      objectif: "Conjuguer les verbes pronominaux du 1er groupe aux deux temps",
      support: "Tableaux de conjugaison, phrases à compléter.",
      lecon: {
        titre: "3. Les verbes pronominaux",
        blocs: [
          { st: "A. Au présent", txt: "pronom réfléchi + verbe : je me lève, nous nous levons, ils se lèvent." },
          { st: "B. Au passé composé", txt: "toujours avec être, et le participe passé s'accorde : nous nous sommes levés, elles se sont levées." },
        ],
        aretenir: "Les verbes pronominaux se conjuguent toujours avec être au passé composé, d'où l'accord du participe passé.",
      },
      revision: {
        ens: "« Que faites-vous le matin avant de partir ? » - Révision des verbes pronominaux au présent (thème 3). Le professeur fait rappeler se lever.",
        app: "Les élèves conjuguent se lever au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Hier, nous nous sommes levés tôt pour prendre le taxi-brousse. »",
        app: "Les élèves repèrent les deux pronoms et les deux éléments du verbe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer les verbes pronominaux aux deux temps.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je me repose. Nous nous sommes reposés. »",
        app: "Les élèves relèvent les pronoms réfléchis et l'auxiliaire.",
      },
      analyse: {
        ens: "Le professeur fait dégager les deux règles.",
        app: "Les élèves séparent le pronom réfléchi du verbe.",
        technique: {
          sous: "I. Les deux règles",
          points: [
            "Au présent : pronom réfléchi + verbe (je me repose, nous nous reposons).",
            "Au passé composé : les verbes pronominaux se conjuguent toujours avec être.",
            "Le participe passé s'accorde : nous nous sommes levés tôt.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer aux deux temps.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison",
          points: [
            "Présent : je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.",
            "Passé composé : je me suis levé, nous nous sommes levés, elles se sont levées.",
            "Devant une voyelle, me, te, se deviennent m', t', s' : il s'est dépêché.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et compléter.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez se reposer au présent avec nous.",
            "Mettez au passé composé : « Elles se dépêchent. »",
            "Racontez en deux phrases votre matin d'hier avec un verbe pronominal.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les deux temps et l'accord.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Mettez au passé composé : « Nous nous levons tôt. »",
            "Conjuguez se coucher au présent (je, ils).",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez se reposer au présent puis au passé composé avec nous.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Mettez au passé composé : « Elles se dépêchent. Nous nous levons tôt. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "nous nous reposons / nous nous sommes reposés", r: true }, "."],
        ["Ex. 2 — ", { t: "Elles se sont dépêchées. Nous nous sommes levés tôt.", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 10
  // ============================================================
  annexe: {
    theme: 10,
    nom: "Le voyage, le temps et les saisons",
    conjugaison: [
      {
        verbe: "Les verbes pronominaux (se lever, se reposer)",
        temps: "Présent de l'indicatif",
        quand: "Pour décrire les actions que l'on fait sur soi-même pendant un voyage ou une journée.",
        exemplesQuand: [
          "Je me lève tôt pour prendre le taxi-brousse.",
          "Nous nous reposons à midi.",
        ],
        comment: "On place le pronom réfléchi (me, te, se, nous, vous, se) juste avant le verbe conjugué.",
        tableau: [
          "je me lève — tu te lèves — il/elle se lève",
          "nous nous levons — vous vous levez — ils/elles se lèvent",
          "devant une voyelle : il s'assoit, elle s'habille",
        ],
        pourquoi: "Les verbes pronominaux permettent de raconter sa journée et les étapes d'un voyage de façon précise.",
        pieges: [
          ["je lève à cinq heures", "je me lève à cinq heures"],
          ["il se habille", "il s'habille"],
        ],
      },
      {
        verbe: "Les verbes pronominaux (se lever, se dépêcher)",
        temps: "Passé composé",
        quand: "Pour raconter ce qui s'est passé pendant un voyage déjà terminé.",
        exemplesQuand: [
          "Hier, nous nous sommes levés à quatre heures.",
          "Elles se sont dépêchées pour ne pas rater le bus.",
        ],
        comment: "Les verbes pronominaux se conjuguent toujours avec l'auxiliaire être ; le participe passé s'accorde avec le sujet.",
        tableau: [
          "je me suis levé — tu t'es levé — il s'est levé / elle s'est levée",
          "nous nous sommes levés — vous vous êtes levés — elles se sont levées",
        ],
        pourquoi: "C'est la seule construction qui permette de raconter au passé les actions réflexives ; l'auxiliaire être impose l'accord.",
        pieges: [
          ["nous nous avons levés", "nous nous sommes levés"],
          ["elles se sont dépêché", "elles se sont dépêchées"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le verbe pronominal",
        regle: "Un verbe pronominal est précédé d'un pronom réfléchi de la même personne que le sujet.",
        exemple: "Je me repose. Nous nous reposons.",
        contre: "Ne pas oublier le pronom : « je repose » ne veut pas dire la même chose.",
      },
      {
        notion: "Le il impersonnel",
        regle: "Pour parler du temps qu'il fait, on utilise il suivi d'un verbe : il pleut, il fait chaud.",
        exemple: "Il pleut depuis ce matin.",
        contre: "Ce il ne désigne personne : on ne peut pas dire « la pluie pleut ».",
      },
      {
        notion: "Le récit de voyage",
        regle: "On raconte dans l'ordre avec d'abord, ensuite, après, enfin, et au passé composé.",
        exemple: "D'abord, nous avons acheté le billet. Ensuite, nous sommes partis.",
        contre: "Ne pas mélanger le présent et le passé composé dans le même récit.",
      },
    ],
    orthographe: [
      {
        notion: "L'élision du pronom réfléchi",
        regle: "me, te, se deviennent m', t', s' devant une voyelle ou un h muet.",
        exemples: ["il s'habille", "je m'assois", "tu t'es levé"],
        pieges: [
          ["il se habille", "il s'habille"],
          ["je me assieds", "je m'assieds"],
        ],
      },
      {
        notion: "L'accord du participe passé avec être",
        regle: "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet.",
        exemples: ["elle est arrivée", "ils sont partis", "elles se sont levées"],
        pieges: [
          ["elles sont arrivé", "elles sont arrivées"],
          ["il est parti écrit il est partie", "il est parti (masculin)"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les transports", mots: "le taxi-brousse — le bus — la pirogue — la charrette — le vélo — le camion" },
      { champ: "Le voyage", mots: "le billet — la valise — le sac — la gare — la route — le pont — partir — arriver" },
      { champ: "Les saisons", mots: "la saison des pluies — la saison sèche — l'hivernage — la chaleur" },
      { champ: "Le temps qu'il fait", mots: "il pleut — il fait chaud — il fait froid — il y a du vent — il fait beau" },
    ],
  },
};

module.exports = { theme10: TH10, annexe10: TH10.annexe };
