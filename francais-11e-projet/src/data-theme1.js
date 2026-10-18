// ============================================================
// data-theme1.js — THÈME 1 : LES SALUTATIONS (10 séances)
// Contenu : manuel existant repris et mis aux normes skill v18
// (30 min, I/II/III, ≥4 items/exercice, sommaire interactif)
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme1 = {
  numero: 1,
  nom: "Les salutations",
  sousDiscipline: "Langage",
  notions: "BONJOUR — BONSOIR — AU REVOIR — À DEMAIN — S'IL TE PLAÎT — MERCI — DE RIEN — PARDON",
  competences: [
    "Utiliser la formule de salutation adaptée au moment de la journée (bonjour / bonsoir).",
    "Utiliser la formule adaptée pour prendre congé (au revoir / à demain).",
    "Demander poliment et remercier (s'il te plaît / merci / de rien).",
    "Choisir la formule adaptée selon le moment, la personne et le lieu.",
    "Restituer à l'oral une scène de salutation complète.",
  ],
  seances: [
    // ================= SÉANCE 1 =================
    {
      n: 1, titre: "Bonjour et bonsoir", titreFiche: "Les formules de salutation",
      objectif: "Utiliser correctement les formules de salutation (bonjour, bonsoir).",
      supportFiche: "Image « matin et soir », tableau noir.",
      image: { file: "s1_matin_soir.png", w: 1100, h: 520, legende: "Le matin, on dit BONJOUR. Le soir, on dit BONSOIR." },
      revision: {
        ens: ["« Quel est ton prénom ? » (interroger 3 à 4 élèves à tour de rôle)"],
        app: [{ paras: [["R.A. : Je m'appelle Rova."], ["R.A. : Je m'appelle Koto."], ["R.A. : Je m'appelle Fara."]] }],
        technique: ["Question / réponse individuelle"],
      },
      miseEnSituation: {
        ens: ["Ce matin, Nivo arrive à l'école. Elle voit sa maîtresse devant la porte. Que doit-elle lui dire ?"],
        app: ["Proposent librement : « ", { t: "Bonjour Madame", b: true }, " ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à dire bonjour le matin et bonsoir le soir. Après cette séance, vous serez capables de saluer selon le moment de la journée."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » C'est le matin : que voyez-vous ? (montrer le panneau de gauche) — Et sur ce second panneau, c'est le soir. Que voyez-vous ? (montrer le panneau de droite)"],
        app: ["Observent silencieusement les deux panneaux."],
        technique: ["Observation guidée"], support: "Image « matin et soir »",
      },
      analyse: {
        ens: { paras: [
          ["1) Quand arrive-t-on à l'école, le matin ou le soir ?"],
          ["2) Que dit-on quand on arrive le matin ?"],
          ["3) Le soir, quand on rencontre quelqu'un, que dit-on ?"],
          ["4) Et quand on part le soir, que dit-on ?"],
        ] },
        app: { paras: [
          ["R.A. : Le matin."],
          ["R.A. : On dit ", { t: "BONJOUR", r: true }, " !"],
          ["R.A. : On dit ", { t: "BONSOIR", r: true }, " !"],
          ["R.A. : On dit ", { t: "BONSOIR", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Image « matin et soir »",
      },
      synthese: {
        ens: ["Donc : le matin, on dit BONJOUR. Le soir, on dit BONSOIR. Répétez après moi : Bon-jour ! / Bon-soir !"],
        app: ["Répètent en chœur : BONJOUR ! / BONSOIR !"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du soleil : je montre un panneau de l'image. Si c'est le matin → vous dites BONJOUR. Si c'est le soir → vous dites BONSOIR. Allez !"],
        app: ["Répondent en chœur, puis individuellement."],
        technique: ["Jeu de réponse rapide"], support: "Image « matin et soir »",
      },
      evaluation: {
        ens: ["Koto arrive à l'école tôt le matin. Que dit-il ? — Et le soir, quand il rentre chez lui, que dit-il ?"],
        app: ["R.A. : Il dit ", { t: "BONJOUR", r: true }, " ! — Il dit ", { t: "BONSOIR", r: true }, " !"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BONJOUR ET BONSOIR",
        subs: [
          { t: "A. Le matin", paras: [["Quand j'arrive à l'école le matin, je dis : ", { t: "BONJOUR", k: true }, " !"]] },
          { t: "B. Le soir", paras: [["Quand je parle à quelqu'un ou quand je pars le soir, je dis : ", { t: "BONSOIR", k: true }, " !"]] },
        ],
        retenir: ["Le matin → ", { t: "BONJOUR", k: true }, ". Le soir → ", { t: "BONSOIR", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure le bon mot sous chaque situation (la maîtresse montre l'image)."], items: [
          ["1) Le soleil se lève, les enfants arrivent → BONJOUR / BONSOIR"],
          ["2) Le soleil se couche, les enfants rentrent → BONJOUR / BONSOIR"],
          ["3) Rova arrive à l'école → BONJOUR / BONSOIR"],
          ["4) Koto quitte l'école le soir → BONJOUR / BONSOIR"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec BONJOUR ou BONSOIR :"], items: [
          ["a) Le matin, on dit .........................."],
          ["b) Le soir, on dit .........................."],
          ["c) Quand j'arrive à l'école, je dis .........................."],
          ["d) Quand je quitte l'école le soir, je dis .........................."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit une formule. Fais une croix (X) sous la bonne image (matin ou soir) :"], items: [
          ["1) « Bonjour ! » → □ matin □ soir"],
          ["2) « Bonsoir ! » → □ matin □ soir"],
          ["3) Rova arrive : « Bonjour Madame ! » → □ matin □ soir"],
          ["4) Koto rentre : « Bonsoir Maman ! » → □ matin □ soir"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "BONJOUR", r: true }, " (2 pts) — 2) ", { t: "BONSOIR", r: true }, " (2 pts) — 3) ", { t: "BONJOUR", r: true }, " (2 pts) — 4) ", { t: "BONSOIR", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "BONJOUR", r: true }, " (1,5 pt) — b) ", { t: "BONSOIR", r: true }, " (1,5 pt) — c) ", { t: "BONJOUR", r: true }, " (1,5 pt) — d) ", { t: "BONSOIR", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) matin (1,5 pt) — 2) soir (1,5 pt) — 3) matin (1,5 pt) — 4) soir (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 2 =================
    {
      n: 2, titre: "Au revoir et à demain", titreFiche: "Les formules de salutation",
      objectif: "Utiliser correctement les formules au revoir et à demain.",
      supportFiche: "Image « fin de journée scolaire », tableau noir.",
      image: { file: "s2_depart.png", w: 1100, h: 520, legende: "Quand je pars, je dis AU REVOIR ou À DEMAIN." },
      revision: {
        ens: ["Que dit-on le matin quand on arrive à l'école ? — Que dit-on le soir ?"],
        app: ["R.A. : On dit ", { t: "BONJOUR", r: true }, ". — On dit ", { t: "BONSOIR", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["La journée est finie. Fara quitte l'école. Elle dit au revoir à sa maîtresse et à ses camarades. Que dit-elle ?"],
        app: ["Proposent : « ", { t: "Au revoir", b: true }, " ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à dire au revoir et à demain. Après cette séance, vous serez capables de prendre congé selon la situation."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Les élèves partent de l'école. Que font-ils ?"],
        app: ["Observent silencieusement l'image."],
        technique: ["Observation guidée"], support: "Image « fin de journée »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que dit-on quand on part de l'école ?"],
          ["2) Si on revient demain, que peut-on ajouter ?"],
          ["3) Koto part mais revient seulement la semaine prochaine. Que dit-il alors ?"],
          ["4) Et si on part très en colère, crie-t-on au revoir ?"],
        ] },
        app: { paras: [
          ["R.A. : On dit ", { t: "AU REVOIR", r: true }, "."],
          ["R.A. : On dit ", { t: "À DEMAIN", r: true }, " !"],
          ["R.A. : Il dit juste ", { t: "AU REVOIR", r: true }, "."],
          ["R.A. : Non, on le dit gentiment."],
        ] },
        technique: ["Question / réponse"], support: "Image « fin de journée »",
      },
      synthese: {
        ens: ["Donc : quand on part, on dit AU REVOIR. Si on revient demain, on dit À DEMAIN. Répétez : Au re-voir ! / À de-main !"],
        app: ["Répètent en chœur : AU REVOIR ! / À DEMAIN !"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Chaque élève se lève, fait semblant de quitter la classe, et dit au revoir à la classe. Allez-y !"],
        app: ["Se lèvent à tour de rôle et disent : « Au revoir ! » ou « À demain ! »"],
        technique: ["Jeu de rôle individuel"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Rova finit l'école et revient demain. Que dit-elle ? — Et Hery, qui part en voyage pour un mois, que dit-il ?"],
        app: ["R.A. : Elle dit ", { t: "À DEMAIN", r: true }, " ! — Il dit ", { t: "AU REVOIR", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. AU REVOIR ET À DEMAIN",
        subs: [
          { t: "A. Quand je pars", paras: [["Quand l'école est finie, je dis : ", { t: "AU REVOIR", k: true }, " !"]] },
          { t: "B. Si je reviens demain", paras: [["Je peux aussi dire : ", { t: "À DEMAIN", k: true }, " !"]] },
        ],
        retenir: ["Je pars → ", { t: "AU REVOIR", k: true }, ". Je reviens demain → ", { t: "À DEMAIN", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure la bonne réponse :"], items: [
          ["1) Un élève fait semblant de sortir de la classe → BONJOUR / AU REVOIR / MERCI"],
          ["2) La classe est finie, Tiana rentre chez elle → BONSOIR / À DEMAIN / PARDON"],
          ["3) Soa reverra son amie demain matin → AU REVOIR / À DEMAIN / DE RIEN"],
          ["4) Hery part pour longtemps → AU REVOIR / À DEMAIN / MERCI"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète :"], items: [
          ["a) Quand l'école est finie, je dis .........................."],
          ["b) Si je reviens demain, je dis .........................."],
          ["c) Le soir, je quitte la classe et je dis .......................... à ma maîtresse."],
          ["d) Mon camarade revient demain : il me dit .........................."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque situation à la bonne formule :"], items: [
          ["1) Je pars le soir • • À DEMAIN"],
          ["2) Je reviens demain matin • • AU REVOIR"],
          ["3) J'arrive le matin • • MERCI"],
          ["4) On me donne un cadeau • • BONJOUR"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "AU REVOIR", r: true }, " (2 pts) — 2) ", { t: "BONSOIR", r: true }, " (2 pts) — 3) ", { t: "À DEMAIN", r: true }, " (2 pts) — 4) ", { t: "AU REVOIR", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "AU REVOIR", r: true }, " (1,5 pt) — b) ", { t: "À DEMAIN", r: true }, " (1,5 pt) — c) ", { t: "AU REVOIR", r: true }, " (1,5 pt) — d) ", { t: "À DEMAIN", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1 → ", { t: "AU REVOIR", r: true }, " (1,5 pt) — 2 → ", { t: "À DEMAIN", r: true }, " (1,5 pt) — 3 → ", { t: "BONJOUR", r: true }, " (1,5 pt) — 4 → ", { t: "MERCI", r: true }, " (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 3 =================
    {
      n: 3, titre: "Demander et remercier", titreFiche: "Les formules de salutation",
      objectif: "Utiliser correctement s'il te plaît, merci, de rien.",
      supportFiche: "Image « demander et remercier », tableau noir.",
      image: { file: "s3_politesse.png", w: 1100, h: 520, legende: "S'il te plaît — Merci — De rien." },
      revision: {
        ens: ["Que dit-on le matin ? — Que dit-on pour partir ?"],
        app: ["R.A. : ", { t: "BONJOUR", r: true }, ". — ", { t: "AU REVOIR", r: true }, " / ", { t: "À DEMAIN", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Tiana veut emprunter le crayon de Lanto. Comment lui demande-t-elle poliment ?"],
        app: ["Proposent : « ", { t: "S'il te plaît", b: true }, " ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à dire : s'il te plaît, merci et de rien. Après cette séance, vous serez capables de demander poliment et de remercier."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Soa tend un livre à Aina. Que dit Aina pour remercier ?"],
        app: ["Observent silencieusement l'image, puis répondent."],
        technique: ["Observation guidée"], support: "Image « demander et remercier »",
      },
      analyse: {
        ens: { paras: [
          ["1) Quand dit-on S'IL TE PLAÎT ?"],
          ["2) Quand dit-on MERCI ?"],
          ["3) Que répond-on quand quelqu'un nous dit merci ?"],
          ["4) Comment demande-t-on un cahier à son camarade, poliment ?"],
        ] },
        app: { paras: [
          ["R.A. : Quand on demande quelque chose."],
          ["R.A. : Quand on reçoit quelque chose."],
          ["R.A. : On dit ", { t: "DE RIEN", r: true }, "."],
          ["R.A. : « Un cahier, ", { t: "S'IL TE PLAÎT", r: true }, ". »"],
        ] },
        technique: ["Question / réponse"], support: "Image « demander et remercier »",
      },
      synthese: {
        ens: ["Donc : pour demander → S'IL TE PLAÎT. Pour remercier → MERCI. Pour répondre → DE RIEN. Répétez !"],
        app: ["Répètent en chœur : S'IL TE PLAÎT ! / MERCI ! / DE RIEN !"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du crayon en chaîne : je tends mon crayon à un élève. Il dit MERCI. Je dis DE RIEN. Puis il tend à son voisin. Et ainsi de suite."],
        app: ["Jouent au jeu en chaîne : MERCI — DE RIEN."],
        technique: ["Jeu en chaîne"], support: "Crayon ou objet",
      },
      evaluation: {
        ens: ["Lanto veut un livre. Il demande à Hery. Que dit-il ? — Et Hery, quand il donne le livre, que répond-il à la fin ?"],
        app: ["R.A. : Il dit : « Un livre, ", { t: "S'IL TE PLAÎT", r: true }, ". » — ", { t: "DE RIEN", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. DEMANDER ET REMERCIER",
        subs: [
          { t: "A. Pour demander", paras: [["Je dis : ", { t: "S'IL TE PLAÎT", k: true }, "."]] },
          { t: "B. Pour remercier", paras: [["Je dis : ", { t: "MERCI", k: true }, "."]] },
          { t: "C. Pour répondre à merci", paras: [["Je dis : ", { t: "DE RIEN", k: true }, "."]] },
        ],
        retenir: ["Je demande → ", { t: "S'IL TE PLAÎT", k: true }, ". Je remercie → ", { t: "MERCI", k: true }, ". Je réponds → ", { t: "DE RIEN", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète le dialogue :"], items: [
          ["Koto demande un crayon à Fara : « Un crayon, .........................., Fara. »"],
          ["Fara donne le crayon. Koto dit : « .......................... »"],
          ["Fara répond : « .......................... »"],
          ["Puis Koto demande une gomme à Rova : « Une gomme, .......................... »"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) MERCI sert à demander quelque chose. → VRAI / FAUX"],
          ["b) S'IL TE PLAÎT sert à demander quelque chose. → VRAI / FAUX"],
          ["c) DE RIEN sert à répondre à un merci. → VRAI / FAUX"],
          ["d) Quand on me dit merci, je réponds PARDON. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque situation à la bonne formule :"], items: [
          ["1) Tu veux emprunter un stylo • • DE RIEN"],
          ["2) On te donne un cadeau • • PARDON"],
          ["3) On te dit merci • • S'IL TE PLAÎT"],
          ["4) Tu as bousculé un camarade • • MERCI"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "S'IL TE PLAÎT", r: true }, " (2 pts) — 2) ", { t: "MERCI", r: true }, " (2 pts) — 3) ", { t: "DE RIEN", r: true }, " (2 pts) — 4) ", { t: "S'IL TE PLAÎT", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "FAUX", r: true }, " (1,5 pt) — b) ", { t: "VRAI", r: true }, " (1,5 pt) — c) ", { t: "VRAI", r: true }, " (1,5 pt) — d) ", { t: "FAUX", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1 → ", { t: "S'IL TE PLAÎT", r: true }, " (1,5 pt) — 2 → ", { t: "MERCI", r: true }, " (1,5 pt) — 3 → ", { t: "DE RIEN", r: true }, " (1,5 pt) — 4 → ", { t: "PARDON", r: true }, " (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 4 =================
    {
      n: 4, titre: "Choisir la bonne formule", titreFiche: "Les formules de salutation",
      objectif: "Utiliser toutes les formules de salutation selon la situation.",
      supportFiche: "Séquence d'images : matin scolaire, échange en classe, fin de journée.",
      image: null,
      revision: {
        ens: ["Rapide : citez toutes les formules apprises ! (pointer au tableau ou dire de mémoire)"],
        app: ["R.A. : ", { t: "BONJOUR, BONSOIR, AU REVOIR, À DEMAIN, MERCI, S'IL TE PLAÎT, DE RIEN", r: true }, "."],
        technique: ["Question ouverte"],
      },
      miseEnSituation: {
        ens: ["Imaginez : c'est une journée entière avec Rova — le matin, à l'école, et le soir."],
        app: ["Écoutent attentivement."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons utiliser toutes les formules selon la situation. Après cette séance, vous serez capables de choisir la bonne formule tout seul."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien ces trois images. » Image 1 : Rova arrive à l'école. — Image 2 : Nivo emprunte un crayon et remercie. — Image 3 : Koto repart chez lui."],
        app: ["Observent silencieusement la séquence d'images."],
        technique: ["Observation guidée"], support: "Séquence de 3 images",
      },
      analyse: {
        ens: { paras: [
          ["1) Image 1 : Rova arrive. Que dit-elle ?"],
          ["2) Image 2 : Nivo emprunte. Que dit-elle ? Que répond son camarade ?"],
          ["3) Image 3 : Koto part. Que dit-il ?"],
          ["4) Quelle formule utilise-t-on dans les trois situations ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONJOUR", r: true }, " !"],
          ["R.A. : ", { t: "S'IL TE PLAÎT", r: true }, " / ", { t: "MERCI", r: true }, " — ", { t: "DE RIEN", r: true }, "."],
          ["R.A. : ", { t: "AU REVOIR", r: true }, " / ", { t: "À DEMAIN", r: true }, " !"],
          ["R.A. : Les formules de politesse."],
        ] },
        technique: ["Question / réponse"], support: "Séquence de 3 images",
      },
      synthese: {
        ens: ["Donc : on choisit la formule selon le moment de la journée et la situation. Chaque formule a son moment !"],
        app: ["Répètent chaque formule une dernière fois."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de rôle par binômes : l'enseignant annonce une situation (arriver, demander un crayon, partir). Les binômes jouent le dialogue immédiatement."],
        app: ["Jouent spontanément en binômes."],
        technique: ["Jeu de rôle en binômes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Aina arrive à l'école, emprunte une gomme, et repart. Quelles formules utilise-t-elle, dans quel ordre ?"],
        app: ["R.A. : ", { t: "BONJOUR", r: true }, " — ", { t: "S'IL TE PLAÎT", r: true }, " — ", { t: "MERCI", r: true }, " — ", { t: "AU REVOIR", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. CHOISIR LA BONNE FORMULE",
        subs: [
          { t: "A. Selon le moment", paras: [["Le matin → ", { t: "BONJOUR", k: true }, ". Le soir → ", { t: "BONSOIR", k: true }, "."]] },
          { t: "B. Selon la situation", paras: [["Je demande → ", { t: "S'IL TE PLAÎT", k: true }, ". Je remercie → ", { t: "MERCI", k: true }, ". Je pars → ", { t: "AU REVOIR", k: true }, "."]] },
        ],
        retenir: ["Avant de parler, je pense au moment ", { t: "ET", k: true }, " à la situation."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["Pour chaque situation, écris la bonne formule :"], items: [
          ["a) Rova arrive à l'école le matin → .........................."],
          ["b) Hery veut un stylo → .........................."],
          ["c) Fara reçoit de l'aide → .........................."],
          ["d) Koto quitte la classe le soir et reviendra demain → .........................."],
        ] },
        { titre: "Exercice 2", pts: 8, consigne: ["Avec ton voisin ou ta voisine, joue une petite scène à voix haute : tu arrives le matin, tu demandes un objet, tu remercies, tu pars. La maîtresse observe ta prestation."], items: [
          ["Formule d'arrivée correcte : ....... / 2 pts"],
          ["Demande polie correcte : ....... / 2 pts"],
          ["Remerciement correct : ....... / 2 pts"],
          ["Formule de départ correcte : ....... / 2 pts"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "BONJOUR", r: true }, " (3 pts) — b) ", { t: "S'IL TE PLAÎT", r: true }, " (3 pts) — c) ", { t: "MERCI", r: true }, " (3 pts) — d) ", { t: "À DEMAIN", r: true }, " (3 pts)."]] },
        { titre: "Exercice 2", lines: [["Grille orale (8 pts) : formule d'arrivée (2 pts) + demande polie (2 pts) + remerciement (2 pts) + formule de départ (2 pts)."]] },
      ],
    },

    // ================= SÉANCE 5 =================
    {
      n: 5, titre: "Une petite scène complète", titreFiche: "Les formules de salutation",
      objectif: "Consolider l'emploi de toutes les formules (mini-théâtre oral).",
      supportFiche: "Espace de jeu au centre de la classe, tableau noir.",
      image: null,
      revision: {
        ens: ["Quiz par geste : je mime une action (arriver → ? / recevoir → ? / partir → ?). Vous dites la formule !"],
        app: ["Répondent rapidement en chœur : ", { t: "BONJOUR / MERCI / AU REVOIR", r: true }, "."],
        technique: ["Quiz gestuel"],
      },
      miseEnSituation: {
        ens: ["Vous êtes maintenant des champions des salutations ! Aujourd'hui vous allez jouer de petites scènes."],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui : mini-théâtre. Chaque groupe joue une scène avec au moins 3 formules différentes. Après cette séance, vous serez capables de tenir une scène complète."],
        app: ["Écoutent les consignes."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant joue lui-même une scène modèle avec un élève volontaire : arriver, demander un livre, remercier, repartir."],
        app: ["Observent et mémorisent la structure de la scène."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Qu'a dit l'enseignant au début de la scène ?"],
          ["2) Qu'a-t-il dit pour demander le livre ?"],
          ["3) Qu'a-t-il dit en recevant le livre ?"],
          ["4) Et à la fin ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONJOUR", r: true }, " !"],
          ["R.A. : ", { t: "S'IL TE PLAÎT", r: true }, "."],
          ["R.A. : ", { t: "MERCI", r: true }, " !"],
          ["R.A. : ", { t: "AU REVOIR", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : une scène complète = arriver + demander / remercier + partir. Toutes les formules en action !"],
        app: ["Répètent le schéma en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Groupes de 3 : chaque groupe invente et joue une scène de 3 échanges minimum devant la classe."],
        app: ["Jouent leur scène. Les autres élèves écoutent et comptent les formules utilisées."],
        technique: ["Mini-théâtre en groupes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Chaque groupe : combien de formules différentes avez-vous utilisées ? Citez-les."],
        app: ["R.A. : chaque groupe cite ses formules (minimum 3)."],
        technique: ["Individuel oral / groupe"],
      },
      lecon: {
        titre: "1. UNE PETITE SCÈNE COMPLÈTE",
        subs: [
          { t: "A. L'ordre de la scène", paras: [
            ["Rova arrive : « ", { t: "Bonjour Madame", k: true }, " ! »"],
            ["Elle demande un livre : « Un livre, ", { t: "s'il vous plaît", k: true }, ". »"],
            ["Elle reçoit le livre : « ", { t: "Merci", k: true }, " ! »"],
            ["Elle part : « ", { t: "Au revoir", k: true }, " ! »"],
          ] },
        ],
        retenir: ["Une scène complète = ", { t: "Bonjour", k: true }, " + ", { t: "Demande", k: true }, " + ", { t: "Merci", k: true }, " + ", { t: "Au revoir", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["Remets les 4 étiquettes dans le bon ordre pour reconstituer la scène de Rova :"], items: [
          ["[ Au revoir ! ] [ Bonjour Madame ! ] [ Merci ! ] [ Un livre, s'il vous plaît. ]"],
          ["Ordre : 1) ............ 2) ............ 3) ............ 4) ............"],
        ] },
        { titre: "Exercice 2", pts: 8, consigne: ["Par groupe de 3, invente et joue à voix haute une scène complète (arrivée + demande + merci + départ). La maîtresse observe."], items: [
          ["Formule d'arrivée : ....... / 2 pts"],
          ["Demande polie : ....... / 2 pts"],
          ["Remerciement : ....... / 2 pts"],
          ["Formule de départ : ....... / 2 pts"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "Bonjour Madame !", r: true }, " (3 pts) — 2) ", { t: "Un livre, s'il vous plaît.", r: true }, " (3 pts) — 3) ", { t: "Merci !", r: true }, " (3 pts) — 4) ", { t: "Au revoir !", r: true }, " (3 pts)."]] },
        { titre: "Exercice 2", lines: [["Grille orale (8 pts) : formule d'arrivée (2 pts) + demande polie (2 pts) + remerciement (2 pts) + formule de départ (2 pts)."]] },
      ],
    },

    // ================= SÉANCE 6 =================
    {
      n: 6, titre: "Parler à un adulte", titreFiche: "Employer les formules selon la personne",
      objectif: "Employer convenablement les formules avec un adulte ou avec un camarade.",
      supportFiche: "Image « parler à un adulte », image « deux camarades », tableau noir.",
      image: { file: "s6_adulte.png", w: 1100, h: 520, legende: "Avec un adulte, je dis « Bonjour Madame / Monsieur »." },
      revision: {
        ens: ["Quelles formules de salutation connaissez-vous ? Citez-les toutes !"],
        app: ["R.A. : ", { t: "BONJOUR, BONSOIR, AU REVOIR, À DEMAIN, MERCI, S'IL TE PLAÎT, DE RIEN", r: true }, "."],
        technique: ["Question ouverte"],
      },
      miseEnSituation: {
        ens: ["Rova dit à son camarade Koto : « Salut ! » Sa maîtresse l'entend et dit : « On ne dit pas SALUT à un adulte ! » Pourquoi ?"],
        app: ["Proposent leurs réponses librement."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons employer la bonne formule selon la personne : un adulte ou un camarade. Après cette séance, vous saurez adapter votre salutation."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien ces deux images. » Image 1 : un élève parle à sa maîtresse. Image 2 : deux élèves jouent ensemble. Qu'est-ce qui est différent dans les deux images ?"],
        app: ["Observent silencieusement, puis comparent."],
        technique: ["Observation guidée"], support: "Image adulte-élève / image deux élèves",
      },
      analyse: {
        ens: { paras: [
          ["1) Que dit-on à un adulte pour le saluer ?"],
          ["2) Peut-on dire SALUT à un adulte ?"],
          ["3) Que peut-on dire à un bon camarade ?"],
          ["4) Quand tu passes devant le directeur, que dis-tu ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONJOUR Madame / Monsieur", r: true }, "."],
          ["R.A. : Non, ", { t: "SALUT est trop familier", r: true }, " pour un adulte."],
          ["R.A. : À un camarade, on peut dire ", { t: "SALUT ou BONJOUR", r: true }, "."],
          ["R.A. : ", { t: "BONJOUR Monsieur", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Image adulte-élève",
      },
      synthese: {
        ens: ["Donc : avec un ADULTE → toujours BONJOUR / MERCI / AU REVOIR (jamais SALUT). Avec un CAMARADE → BONJOUR ou SALUT."],
        app: ["Répètent la règle."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je montre une image — adulte ou camarade. Vous choisissez la bonne formule et vous la dites à voix haute."],
        app: ["Répondent et justifient leur choix."],
        technique: ["Jeu de désignation"], support: "Images variées",
      },
      evaluation: {
        ens: ["Hery rencontre le directeur de l'école. Que dit-il ? — Et s'il croise son copain Koto juste après ?"],
        app: ["R.A. : Il dit ", { t: "BONJOUR Monsieur", r: true }, " ! — Il dit ", { t: "SALUT", r: true }, " !"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. PARLER À UN ADULTE",
        subs: [
          { t: "A. Avec un adulte (maîtresse, maman, papa...)", paras: [
            ["Je suis toujours poli : ", { t: "BONJOUR, S'IL TE PLAÎT, MERCI, AU REVOIR", k: true }, "."],
            ["Je ne crie pas, je ne coupe pas la parole."],
          ] },
          { t: "B. Avec un camarade", paras: [["Je peux dire ", { t: "BONJOUR", k: true }, " ou ", { t: "SALUT", k: true }, "."]] },
        ],
        retenir: ["Avec un adulte, je suis toujours poli : ", { t: "Bonjour", k: true }, ", ", { t: "Merci", k: true }, ", ", { t: "Au revoir", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["La maîtresse montre une image (un adulte ou un camarade). Pour chaque image, écris la formule que tu utilises en arrivant :"], items: [
          ["Image 1 (la directrice) → .........................."],
          ["Image 2 (ta maman) → .........................."],
          ["Image 3 (ton papa) → .........................."],
          ["Image 4 (ton camarade Koto) → .........................."],
        ] },
        { titre: "Exercice 2", pts: 8, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Avec un adulte, je peux oublier de dire bonjour. → VRAI / FAUX"],
          ["b) Je peux dire « Salut ! » à la maîtresse. → VRAI / FAUX"],
          ["c) Je dis « Bonjour Monsieur » au directeur. → VRAI / FAUX"],
          ["d) Avec mon camarade, je peux dire « Salut ! ». → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Images 1, 2 et 3 : ", { t: "BONJOUR Madame / Bonjour Maman / Bonjour Papa", r: true }, " (3 pts chacune) — Image 4 : ", { t: "SALUT ou BONJOUR", r: true }, " (3 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "FAUX", r: true }, " (2 pts) — b) ", { t: "FAUX", r: true }, " (2 pts) — c) ", { t: "VRAI", r: true }, " (2 pts) — d) ", { t: "VRAI", r: true }, " (2 pts)."]] },
      ],
    },

    // ================= SÉANCE 7 =================
    {
      n: 7, titre: "Les formules partout", titreFiche: "Employer les formules selon le lieu",
      objectif: "Employer convenablement les formules dans différents lieux (école, marché, maison, rue).",
      supportFiche: "Image « les lieux de politesse » (école, marché, maison, rue), tableau noir.",
      image: { file: "s7_lieux.png", w: 1100, h: 480, legende: "Les formules de politesse s'utilisent partout." },
      revision: {
        ens: ["Comment salue-t-on un adulte ? — Et un camarade ?"],
        app: ["R.A. : ", { t: "BONJOUR Madame / Monsieur", r: true }, " (adulte) — ", { t: "BONJOUR ou SALUT", r: true }, " (camarade)."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Mamy va au marché avec sa maman. Elle rencontre la voisine. Que dit-elle ?"],
        app: ["Proposent : « ", { t: "BONJOUR Madame", b: true }, " ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons employer les formules de salutation dans différents endroits. Après cette séance, vous serez polis partout où vous serez."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Voici quatre lieux : école, marché, maison, rue. Où est-on dans chaque panneau ?"],
        app: ["Observent silencieusement les quatre panneaux."],
        technique: ["Observation guidée"], support: "Image « les lieux »",
      },
      analyse: {
        ens: { paras: [
          ["1) À l'école le matin, que dit Soa à sa maîtresse ?"],
          ["2) Au marché, que dit Tiana à la vendeuse ?"],
          ["3) Le soir à la maison, que dit Koto à ses parents ?"],
          ["4) Dans la rue, que dit Aina à la voisine qu'elle croise ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONJOUR Madame", r: true }, " !"],
          ["R.A. : ", { t: "BONJOUR Madame", r: true }, " !"],
          ["R.A. : ", { t: "BONSOIR Maman / Papa", r: true }, " !"],
          ["R.A. : ", { t: "BONJOUR Madame", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Image « les lieux »",
      },
      synthese: {
        ens: ["Donc : les formules s'utilisent partout — école, marché, maison, rue. On choisit selon l'heure et selon la personne !"],
        app: ["Répètent la règle."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["L'enseignant annonce un lieu et une situation. Les élèves jouent le dialogue par binômes."],
        app: ["Jouent en binômes : ils utilisent la bonne formule selon le lieu."],
        technique: ["Jeu de rôle en binômes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Aina est au marché le matin. Elle rencontre son oncle. Que dit-elle ?"],
        app: ["R.A. : Elle dit ", { t: "BONJOUR Monsieur", r: true }, " ! (ou « Bonjour Tonton ! »)"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LES FORMULES PARTOUT",
        subs: [
          { t: "A. Je suis poli partout", paras: [
            ["À l'école → ", { t: "BONJOUR", k: true }, " à la maîtresse."],
            ["Au marché → ", { t: "BONJOUR", k: true }, " au vendeur, ", { t: "MERCI", k: true }, " quand je reçois mes achats."],
            ["À la maison → ", { t: "BONJOUR", k: true }, " à ma famille le matin."],
            ["Dans la rue → ", { t: "BONJOUR", k: true }, " quand je croise un voisin."],
          ] },
        ],
        retenir: ["Où que je sois, je suis poli : ", { t: "Bonjour", k: true }, ", ", { t: "S'il te plaît", k: true }, ", ", { t: "Merci", k: true }, ", ", { t: "Au revoir", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["Pour chaque lieu, écris la formule que tu dis en arrivant :"], items: [
          ["a) À l'école → .........................."],
          ["b) Au marché → .........................."],
          ["c) À la maison le matin → .........................."],
          ["d) Dans la rue, à un voisin → .........................."],
        ] },
        { titre: "Exercice 2", pts: 8, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Au marché, je dis merci quand je reçois mes achats. → VRAI / FAUX"],
          ["b) À la maison, je ne salue personne. → VRAI / FAUX"],
          ["c) Dans la rue, je salue les voisins que je connais. → VRAI / FAUX"],
          ["d) La politesse, c'est seulement pour l'école. → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "BONJOUR", r: true }, " (3 pts) — b) ", { t: "BONJOUR", r: true }, " (3 pts) — c) ", { t: "BONJOUR", r: true }, " (3 pts) — d) ", { t: "BONJOUR", r: true }, " (3 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " (2 pts) — b) ", { t: "FAUX", r: true }, " (2 pts) — c) ", { t: "VRAI", r: true }, " (2 pts) — d) ", { t: "FAUX", r: true }, " (2 pts)."]] },
      ],
    },

    // ================= SÉANCE 8 =================
    {
      n: 8, titre: "Merci, de rien, pardon", titreFiche: "Employer les formules dans des situations imprévues",
      objectif: "Employer convenablement pardon, merci, de rien dans des situations inattendues.",
      supportFiche: "Jeu de mime, tableau noir.",
      image: null,
      revision: {
        ens: ["Où peut-on utiliser les formules de salutation ?"],
        app: ["R.A. : À l'école, à la maison, au marché, dans la rue..."],
        technique: ["Question ouverte"],
      },
      miseEnSituation: {
        ens: ["Lanto fait tomber ses affaires devant toute la classe. Rova l'aide à les ramasser. Que dit Lanto ?"],
        app: ["Proposent : « ", { t: "MERCI", b: true }, " ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre les formules des situations imprévues : accidents, aide, excuses. Après cette séance, vous saurez réagir poliment dans ces moments."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » Je mime une scène : je bouscule un élève par accident. Qu'observez-vous ? Que devrais-je dire ?"],
        app: ["Observent le mime, puis répondent."],
        technique: ["Observation / mime"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Quand Lanto tombe et que Koto l'aide, que dit Lanto ?"],
          ["2) Que répond Koto ?"],
          ["3) Si quelqu'un éternue en classe, que dit-on ?"],
          ["4) Si tu marches sur le pied de ton camarade, que dis-tu ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "MERCI", r: true }, " !"],
          ["R.A. : ", { t: "DE RIEN", r: true }, "."],
          ["R.A. : À vos souhaits ! (ou « Santé ! »)"],
          ["R.A. : ", { t: "PARDON", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : MERCI quand on reçoit de l'aide — DE RIEN pour répondre — PARDON quand on fait une erreur ou qu'on dérange."],
        app: ["Répètent les 3 formules."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de mime : l'enseignant simule des situations (pousser, aider, tomber). Les élèves réagissent avec la bonne formule."],
        app: ["Réagissent avec PARDON / MERCI / DE RIEN selon la situation."],
        technique: ["Jeu de mime"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Hery pousse Aina par accident dans le couloir. Que dit-il ? — Aina accepte ses excuses : que peut-elle répondre ?"],
        app: ["R.A. : Il dit ", { t: "PARDON", r: true }, " ! — Elle répond ", { t: "CE N'EST PAS GRAVE", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MERCI, DE RIEN, PARDON",
        subs: [
          { t: "A. MERCI", paras: [["Je dis ", { t: "MERCI", k: true }, " quand je reçois de l'aide ou un cadeau."]] },
          { t: "B. DE RIEN", paras: [["Je dis ", { t: "DE RIEN", k: true }, " quand quelqu'un me dit merci."]] },
          { t: "C. PARDON", paras: [["Je dis ", { t: "PARDON", k: true }, " quand je gêne quelqu'un ou quand je me trompe."]] },
        ],
        retenir: [{ t: "MERCI", k: true }, " (je reçois) — ", { t: "DE RIEN", k: true }, " (je réponds) — ", { t: "PARDON", k: true }, " (je m'excuse)."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["Pour chaque situation, écris le bon mot (MERCI, DE RIEN ou PARDON) :"], items: [
          ["a) Tiana marche sur le pied de Mamy → Tiana dit : .........................."],
          ["b) Aina reçoit un joli cahier → Aina dit : .........................."],
          ["c) Soa vient de dire merci à Rova → Rova répond : .........................."],
          ["d) Koto aide Fara à porter son sac → Fara dit : .........................."],
        ] },
        { titre: "Exercice 2", pts: 8, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Je dis PARDON quand je bouscule quelqu'un. → VRAI / FAUX"],
          ["b) Je dis DE RIEN quand je reçois un cadeau. → VRAI / FAUX"],
          ["c) Je dis MERCI quand on m'aide. → VRAI / FAUX"],
          ["d) PARDON et MERCI veulent dire la même chose. → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "PARDON", r: true }, " (3 pts) — b) ", { t: "MERCI", r: true }, " (3 pts) — c) ", { t: "DE RIEN", r: true }, " (3 pts) — d) ", { t: "MERCI", r: true }, " (3 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " (2 pts) — b) ", { t: "FAUX", r: true }, " (2 pts) — c) ", { t: "VRAI", r: true }, " (2 pts) — d) ", { t: "FAUX", r: true }, " (2 pts)."]] },
      ],
    },

    // ================= SÉANCE 9 =================
    {
      n: 9, titre: "Choisir selon 3 indices", titreFiche: "Jeu des situations — qui dit quoi ?",
      objectif: "Employer la formule exacte selon la situation décrite (quand ? qui ? où ?).",
      supportFiche: "Cartes-situations (ou annonce orale), tableau noir.",
      image: null,
      revision: {
        ens: ["Quiz avec geste : arriver → ? / recevoir de l'aide → ? / bousculer quelqu'un → ?"],
        app: ["R.A. : ", { t: "BONJOUR", r: true }, " — ", { t: "MERCI", r: true }, " — ", { t: "PARDON", r: true }, "."],
        technique: ["Quiz gestuel"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, ce sont vous les professeurs ! C'est vous qui choisissez la bonne formule."],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Jeu des situations : je décris ou je mime, vous répondez avec la formule exacte. Après cette séance, vous saurez choisir avec 3 indices : quand ? qui ? où ?"],
        app: ["Se tiennent prêts."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant mime 3 situations sans parler. Les élèves devinent et disent la formule correspondante."],
        app: ["Observent les mimes, devinent et disent la formule."],
        technique: ["Observation de mime"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) « Il est 19 h, tu rencontres ton voisin » → ?"],
          ["2) « Tu reçois un cadeau » → ?"],
          ["3) « Tu pars mais tu reviens demain » → ?"],
          ["4) « Tu as bousculé quelqu'un » → ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONSOIR", r: true }, "."],
          ["R.A. : ", { t: "MERCI", r: true }, "."],
          ["R.A. : ", { t: "À DEMAIN", r: true }, "."],
          ["R.A. : ", { t: "PARDON", r: true }, "."],
        ] },
        technique: ["Question / réponse rapide"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : la bonne formule dépend de 3 choses — l'heure (QUAND ?), la personne (QUI ?), et le lieu (OÙ ?). Toujours être poli !"],
        app: ["Répètent la règle des 3 indices."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Les élèves inventent eux-mêmes des situations et interrogent leurs camarades (3 élèves posent une situation chacun)."],
        app: ["Posent la situation et jugent si la réponse est correcte."],
        technique: ["Jeu question-réponse"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Nivo reçoit un livre de sa maîtresse le soir, et part ensuite. Quelles formules utilise-t-elle, dans quel ordre ?"],
        app: ["R.A. : ", { t: "MERCI", r: true }, " Madame — ", { t: "BONSOIR", r: true }, " Madame — ", { t: "AU REVOIR", r: true }, " Madame."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. CHOISIR SELON 3 INDICES",
        subs: [
          { t: "A. Avant de parler, je pense à 3 choses", paras: [
            ["1. ", { t: "QUAND", k: true }, " ? (le matin ou le soir)"],
            ["2. ", { t: "QUI", k: true }, " ? (un adulte ou un camarade)"],
            ["3. ", { t: "OÙ", k: true }, " ? (à l'école, à la maison, dans la rue, au marché)"],
          ] },
        ],
        retenir: ["Avant de parler, je pense à : ", { t: "Quand", k: true }, " ? ", { t: "Qui", k: true }, " ? ", { t: "Où", k: true }, " ?"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 16, consigne: ["Remplis le tableau : pour chaque situation, trouve la bonne formule."], items: [
          ["Situation 1 : Rova arrive à l'école (matin — maîtresse — école) → .........................."],
          ["Situation 2 : Koto quitte la maison le soir (soir — maman — maison) → .........................."],
          ["Situation 3 : Fara reçoit un cadeau de sa tante (— — tante — maison) → .........................."],
          ["Situation 4 : Hery bouscule un camarade dans la cour (— camarade — cour) → .........................."],
        ] },
        { titre: "Exercice 2", pts: 4, consigne: ["Invente une situation avec tes 3 indices (quand ? qui ? où ?) et dis la bonne formule à voix haute."], items: [
          ["Mes indices : QUAND : .................. QUI : .................. OÙ : .................."],
          ["Ma formule : .........................."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "BONJOUR", r: true }, " (4 pts) — 2) ", { t: "BONSOIR", r: true }, " (4 pts) — 3) ", { t: "MERCI", r: true }, " (4 pts) — 4) ", { t: "PARDON", r: true }, " (4 pts)."]] },
        { titre: "Exercice 2", lines: [["4 pts si les 3 indices sont bien identifiés et la formule correcte (validation orale par l'enseignant)."]] },
      ],
    },

    // ================= SÉANCE 10 =================
    {
      n: 10, titre: "Bilan — toutes nos formules de salutation", titreFiche: "Bilan oral — les formules de salutation",
      objectif: "Employer convenablement toutes les formules de salutation en contexte varié (bilan).",
      supportFiche: "Affiche « mes formules de politesse », tableau noir.",
      image: { file: "s10_bilan.png", w: 1100, h: 760, legende: "L'affiche récapitulative des formules de politesse." },
      revision: {
        ens: ["Quiz : je dis une situation, vous donnez la formule (8 situations en rythme rapide)."],
        app: ["Répondent rapidement. Chaque élève répond à 1 situation."],
        technique: ["Quiz rapide"],
      },
      miseEnSituation: {
        ens: ["Vous avez appris toutes les formules de salutation ! Aujourd'hui on fait le grand bilan ensemble."],
        app: ["Écoutent, fiers de leurs acquis."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui : bilan et grand jeu final des salutations. Après cette séance, vous maîtriserez toutes les formules du thème 1."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Grand affichage au tableau : toutes les formules avec leur moment d'emploi. Lisez chaque formule à voix haute."],
        app: ["Lisent oralement chaque formule avec sa situation."],
        technique: ["Lecture collective orale"], support: "Affiche au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle formule utilises-tu en arrivant le matin ?"],
          ["2) Quelle formule utilises-tu pour demander un objet ?"],
          ["3) Que réponds-tu quand on te dit merci ?"],
          ["4) Que dis-tu quand tu as bousculé quelqu'un ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "BONJOUR", r: true }, ", parce que j'arrive."],
          ["R.A. : ", { t: "S'IL TE PLAÎT", r: true }, ", pour demander."],
          ["R.A. : ", { t: "DE RIEN", r: true }, "."],
          ["R.A. : ", { t: "PARDON", r: true }, ", parce que je m'excuse."],
        ] },
        technique: ["Question / réponse"], support: "Affiche au tableau",
      },
      synthese: {
        ens: ["Donc : résumé final — répétons 2 fois chaque formule avec sa situation."],
        app: ["Répètent 2 fois chaque formule."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Grand jeu de rôle classe entière : l'enseignant dirige un dialogue simulant une journée complète (arriver, demander, remercier, partir)."],
        app: ["Participent tous au dialogue guidé."],
        technique: ["Grand jeu de rôle collectif"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["2 élèves tirés au sort : « Dis-moi 3 formules différentes et quand on les utilise. »"],
        app: ["R.A. : ", { t: "BONJOUR", r: true }, " quand on arrive le matin — ", { t: "MERCI", r: true }, " quand on reçoit quelque chose — ", { t: "AU REVOIR", r: true }, " quand on part."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. TOUTES NOS FORMULES DE SALUTATION",
        subs: [
          { t: "A. Pour saluer", paras: [["Le matin → ", { t: "BONJOUR", k: true }, ". Le soir → ", { t: "BONSOIR", k: true }, "."]] },
          { t: "B. Pour demander et remercier", paras: [["Je demande → ", { t: "S'IL TE PLAÎT", k: true }, ". Je remercie → ", { t: "MERCI", k: true }, ". Je réponds → ", { t: "DE RIEN", k: true }, "."]] },
          { t: "C. Pour partir", paras: [["Je dis → ", { t: "AU REVOIR", k: true }, " ou ", { t: "À DEMAIN", k: true }, "."]] },
          { t: "D. Pour m'excuser", paras: [["Je dis → ", { t: "PARDON", k: true }, "."]] },
        ],
        retenir: ["Avant de parler, je pense à trois indices : ", { t: "QUAND", k: true }, " ? ", { t: "QUI", k: true }, " ? ", { t: "OÙ", k: true }, " ?"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 12, consigne: ["Relie chaque formule à son moment d'emploi :"], items: [
          ["1) BONJOUR • • quand je m'excuse"],
          ["2) MERCI • • quand j'arrive le matin"],
          ["3) PARDON • • quand on me dit merci"],
          ["4) À DEMAIN • • quand je reçois un cadeau"],
          ["5) BONSOIR • • quand je pars et reviens demain"],
          ["6) DE RIEN • • quand le soir arrive"],
        ] },
        { titre: "Exercice 2", pts: 4, consigne: ["Complète avec la bonne formule :"], items: [
          ["a) J'arrive à l'école : « .......................... Madame ! »"],
          ["b) Je veux le crayon de Soa : « Le crayon, .......................... »"],
          ["c) On me donne un livre : « .......................... ! »"],
          ["d) Je quitte la classe : « .......................... Madame ! »"],
        ] },
        { titre: "Exercice 3", pts: 4, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) On peut dire SALUT à la maîtresse. → VRAI / FAUX"],
          ["b) DE RIEN répond à MERCI. → VRAI / FAUX"],
          ["c) BONSOIR se dit le matin. → VRAI / FAUX"],
          ["d) PARDON sert à s'excuser. → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1 → arrivée le matin (2 pts) — 2 → cadeau reçu (2 pts) — 3 → excuse (2 pts) — 4 → départ avec retour demain (2 pts) — 5 → arrivée le soir (2 pts) — 6 → réponse à merci (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "BONJOUR", r: true }, " (1 pt) — b) ", { t: "S'IL TE PLAÎT", r: true }, " (1 pt) — c) ", { t: "MERCI", r: true }, " (1 pt) — d) ", { t: "AU REVOIR", r: true }, " (1 pt)."]] },
        { titre: "Exercice 3", lines: [["a) ", { t: "FAUX", r: true }, " (1 pt) — b) ", { t: "VRAI", r: true }, " (1 pt) — c) ", { t: "FAUX", r: true }, " (1 pt) — d) ", { t: "VRAI", r: true }, " (1 pt)."]] },
      ],
    },
  ],
};

module.exports = { theme1, DOC };
