// ============================================================
// data-theme8.js — THÈME 8 : MON CORPS, LES COULEURS ET LE SON
// CH (71-80) — dernier thème du manuel existant (titre illisible
// au-delà de la page 30 du PDF) : rédigé d'après la FRA
// officielle restante (parties du corps, S-CH, couleurs,
// énumérations, possessifs mon/ma, article UN), gabarit du Thème 7.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme8 = {
  numero: 8,
  nom: "Mon corps, les couleurs et le son CH",
  sousDiscipline: "Langage et Phonétique",
  notions: "CORPS — TÊTE — MAINS — PIEDS — S ou CH — CHAT — CHAPEAU — COULEURS — ROUGE — JAUNE — VERT — BLEU — ÉNUMÉRATION — ET — MON/MA — TON/TA — SON/SA — UN/UNE — COMPTINE — RYTHME",
  competences: [
    "Nommer les parties du corps (la tête, les mains, les pieds, la bouche, les yeux).",
    "Distinguer le son S du son CH (souris/chat, savon/chapeau).",
    "Nommer les couleurs (rouge, jaune, vert, bleu) et dire la couleur des choses.",
    "Énumérer une liste de choses avec « et ».",
    "Utiliser mon, ma, ton, ta, son, sa pour dire à qui sont les choses.",
    "Utiliser un ou une devant les noms.",
    "Réciter la comptine du corps avec les gestes.",
    "Répéter des mots et des phrases en respectant le rythme.",
  ],
  seances: [
    // ================= SÉANCE 71 =================
    {
      n: 71, titre: "Les parties du corps", titreFiche: "Les parties du corps",
      objectif: "Nommer les parties du corps (tête, main, pied...) et jouer à « Touche ton... ».",
      supportFiche: "Image « mon corps », tableau noir.",
      image: { file: "s71_corps.png", w: 1100, h: 560, legende: "Mon corps : la tête, la main, le genou, le pied." },
      revision: {
        ens: ["Récitez le début de la comptine GN. — Et donnez 2 mots avec GN."],
        app: ["Récitent : « ", { t: "GN, GN, la grande montagne...", r: true }, " » — ", { t: "montagne, agneau", r: true }, "."],
        technique: ["Récitation / question"],
      },
      miseEnSituation: {
        ens: ["« Levez la main ! Touchez votre tête ! Voilà : votre corps obéit... mais connaît-il SES mots ? Aujourd'hui, nous nommons nos parties du corps ! »"],
        app: ["Touchent leur tête, amusés que leur corps réponde."],
        technique: ["Jeu express"], support: "Image « mon corps »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons les mots de notre corps : la tête, la main, le pied, la bouche... Après cette séance, « Touche ton nez ! » n'aura plus aucun secret !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Chaque étiquette nomme une partie du corps : suivez les lignes du doigt."],
        app: ["Suivent les lignes : la tête, la main, le genou, le pied."],
        technique: ["Observation guidée"], support: "Image « mon corps »",
      },
      analyse: {
        ens: { paras: [
          ["1) Avec quoi écoutes-tu ?"],
          ["2) Avec quoi manges-tu et parles-tu ?"],
          ["3) Avec quoi marches-tu ?"],
          ["4) Montre ta main, ton genou, ton pied !"],
        ] },
        app: { paras: [
          ["R.A. : Avec mes ", { t: "oreilles", r: true }, "."],
          ["R.A. : Avec ma ", { t: "bouche", r: true }, "."],
          ["R.A. : Avec mes ", { t: "pieds", r: true }, "."],
          ["R.A. : Montrent chaque partie en la nommant."],
        ] },
        technique: ["Question / réponse"], support: "Image « mon corps »",
      },
      synthese: {
        ens: ["Donc : mon corps a plein de mots : la tête, les mains, les pieds, la bouche, le nez, les yeux. Je les répète en me touchant !"],
        app: ["Répètent les mots en chœur en se touchant chaque partie."],
        technique: ["Travail collectif avec gestes"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu « Touche ton... » de plus en plus vite : ton nez ! tes oreilles ! ton genou ! tes pieds !"],
        app: ["Touchent la bonne partie le plus vite possible, en riant."],
        technique: ["Jeu de réaction"], support: "La classe",
      },
      evaluation: {
        ens: ["3 élèves : montrez 2 parties du corps et dites leur nom."],
        app: ["R.A. : ", { t: "la tête, la main, le pied, la bouche, le nez...", r: true }, " (2 parties correctes)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MON CORPS",
        subs: [
          { t: "A. Les mots du corps", paras: [[{ t: "la tête", k: true }, " — ", { t: "la main", k: true }, " — ", { t: "le pied", k: true }, " — ", { t: "la bouche", k: true }, " — ", { t: "le nez", k: true }, " — ", { t: "les yeux", k: true }]] },
          { t: "B. Le jeu « Touche ton... »", paras: [["« ", { t: "Touche ton nez !", k: true }, " » → je touche mon nez !"]] },
        ],
        retenir: ["Mon corps a des mots : ", { t: "la tête, les mains, les pieds", k: true }, "... Je les connais tous !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les parties du corps :"], items: [
          ["la main la table"],
          ["le pied la pomme"],
          ["la tête le chapeau"],
          ["les yeux le sac"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec bouche, tête, pieds ou mains :"], items: [
          ["a) Je parle avec ma ............"],
          ["b) Je réfléchis avec ma ............"],
          ["c) Je marche avec mes ............"],
          ["d) Je touche avec mes ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu oral : fais ce que dit la maîtresse :"], items: [
          ["1) Touche ton nez !"],
          ["2) Touche tes oreilles !"],
          ["3) Touche ton genou !"],
          ["4) Touche tes pieds !"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "la main, le pied, la tête, les yeux", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "bouche", r: true }, " (1,5 pt) — b) ", { t: "tête", r: true }, " (1,5 pt) — c) ", { t: "pieds", r: true }, " (1,5 pt) — d) ", { t: "mains", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : la bonne partie est touchée (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 72 =================
    {
      n: 72, titre: "S ou CH ?", titreFiche: "S ou CH ? — j'écoute bien",
      objectif: "Distinguer le son S du son CH (souris/chat, savon/chapeau).",
      supportFiche: "Image « S ou CH ? », cartes-mots, tableau noir.",
      image: { file: "s72_s_ou_ch.png", w: 1100, h: 560, legende: "S comme dans souris. CH comme dans chat. J'écoute bien !" },
      revision: {
        ens: ["Touchez votre tête ! Vos genoux ! Vos pieds ! — Comment s'appellent ces mots ?"],
        app: ["Touchent chaque partie — ce sont les mots du ", { t: "corps", r: true }, "."],
        technique: ["Jeu express"],
      },
      miseEnSituation: {
        ens: ["« Le serpent dit ssss... Le vent dans le chapeau dit chhh... Deux sons rivaux arrivent dans notre classe ! Saurrez-vous les séparer ? »"],
        app: ["Écoutent les deux sons et essaient de les imiter."],
        technique: ["Narration"], support: "Image « S ou CH ? »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous distinguons le son S et le son CH. Après cette séance, plus aucune souris ne se déguisera en chat !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » À gauche, les mots avec S ; à droite, les mots avec CH."],
        app: ["Observent les deux panneaux et lisent les mots avec l'enseignant."],
        technique: ["Observation guidée"], support: "Image « S ou CH ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) « souris » : S ou CH ?"],
          ["2) « chat » : S ou CH ?"],
          ["3) « savon » : S ou CH ?"],
          ["4) « chapeau » : S ou CH ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "S", r: true }, " (ssss)."],
          ["R.A. : ", { t: "CH", r: true }, " (chhh)."],
          ["R.A. : ", { t: "S", r: true }, "."],
          ["R.A. : ", { t: "CH", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « S ou CH ? »",
      },
      synthese: {
        ens: ["Donc : S est fin comme le serpent : souris, savon, sac. CH souffle comme le vent : chat, chapeau, cheveux. J'écoute avant de répondre !"],
        app: ["Répètent les paires en chœur : souris/chat, savon/chapeau."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des deux coins : je dis un mot, vous courez au coin S ou au coin CH : sac — chat — savon — chapeau — souris — cheveux !"],
        app: ["Courent au bon coin pour chaque mot, très motivés."],
        technique: ["Jeu des deux coins"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse dit un mot, répondez S ou CH."],
        app: ["R.A. : réponse correcte avec le mot répété correctement."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "3. S OU CH ?",
        subs: [
          { t: "A. Le son S (comme le serpent)", paras: [[{ t: "souris", k: true }, " — ", { t: "savon", k: true }, " — ", { t: "sac", k: true }]] },
          { t: "B. Le son CH (comme le vent)", paras: [[{ t: "chat", k: true }, " — ", { t: "chapeau", k: true }, " — ", { t: "cheveux", k: true }]] },
        ],
        retenir: [{ t: "S", k: true }, " est fin (souris), ", { t: "CH", k: true }, " souffle (chat). Dans le doute, j'écoute !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Coche S ou CH selon ce que tu entends :"], items: [
          ["1) chat → S / CH"],
          ["2) sac → S / CH"],
          ["3) chapeau → S / CH"],
          ["4) savon → S / CH"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure le mot qui contient le son CH :"], items: [
          ["chat sac"],
          ["chapeau pomme"],
          ["cheveux riz"],
          ["savon chanter"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit 4 mots : réponds S ou CH :"], items: [
          ["1) souris → ......."],
          ["2) cheval → ......."],
          ["3) savon → ......."],
          ["4) chemin → ......."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "CH", r: true }, " — 2) ", { t: "S", r: true }, " — 3) ", { t: "CH", r: true }, " — 4) ", { t: "S", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "chat, chapeau, cheveux, chanter", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "S", r: true }, " — 2) ", { t: "CH", r: true }, " — 3) ", { t: "S", r: true }, " — 4) ", { t: "CH", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 73 =================
    {
      n: 73, titre: "Les couleurs", titreFiche: "Les couleurs",
      objectif: "Nommer les couleurs (rouge, jaune, vert, bleu) et dire la couleur des choses.",
      supportFiche: "Image « les couleurs », objets colorés de la classe, tableau noir.",
      image: { file: "s73_couleurs.png", w: 1100, h: 560, legende: "Les couleurs : la tomate rouge, le citron jaune, l'herbe verte, le ciel bleu." },
      revision: {
        ens: ["« chat » : S ou CH ? — « savon » ? — « chapeau » ?"],
        app: ["R.A. : ", { t: "CH", r: true }, " — ", { t: "S", r: true }, " — ", { t: "CH", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Regardez autour de vous : le tableau, vos tenues, les fleurs de la cour... Le monde est plein de couleurs ! Aujourd'hui, nous apprenons leurs noms. »"],
        app: ["Regardent autour d'eux, cherchent déjà des couleurs."],
        technique: ["Observation ouverte"], support: "Objets colorés de la classe",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à dire les couleurs : rouge, jaune, vert, bleu — et à dire la couleur de ce que nous voyons."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Chaque objet montre une couleur : nommez-la dans votre tête."],
        app: ["Observent : la tomate, le citron, l'herbe, le ciel."],
        technique: ["Observation guidée"], support: "Image « les couleurs »",
      },
      analyse: {
        ens: { paras: [
          ["1) De quelle couleur est la tomate ?"],
          ["2) De quelle couleur est le citron ?"],
          ["3) De quelle couleur est l'herbe ?"],
          ["4) De quelle couleur est le ciel ?"],
        ] },
        app: { paras: [
          ["R.A. : Elle est ", { t: "rouge", r: true }, "."],
          ["R.A. : Il est ", { t: "jaune", r: true }, "."],
          ["R.A. : Elle est ", { t: "verte", r: true }, "."],
          ["R.A. : Il est ", { t: "bleu", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « les couleurs »",
      },
      synthese: {
        ens: ["Donc : rouge, jaune, vert, bleu. Je dis la couleur de ce que je vois : « La tomate est rouge. »"],
        app: ["Répètent les 4 couleurs en chœur, puis la phrase complète."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu « Je vois quelque chose de rouge... » : je choisis une couleur, vous trouvez l'objet dans la classe !"],
        app: ["Cherchent l'objet de la couleur annoncée et le nomment : « Le tableau est vert ! »"],
        technique: ["Jeu de recherche"], support: "La classe",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse montre 2 objets, dites leur couleur."],
        app: ["R.A. : couleurs correctes (rouge, jaune, vert, bleu)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "4. LES COULEURS",
        subs: [
          { t: "A. Les couleurs", paras: [[{ t: "rouge", k: true }, " — ", { t: "jaune", k: true }, " — ", { t: "vert", k: true }, " — ", { t: "bleu", k: true }]] },
          { t: "B. Dire la couleur", paras: [["« ", { t: "La tomate est rouge.", k: true }, " » — « ", { t: "Le ciel est bleu.", k: true }, " »"]] },
        ],
        retenir: ["Je vois la vie en couleurs : ", { t: "rouge, jaune, vert, bleu", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots couleurs :"], items: [
          ["jaune jupe"],
          ["bleu balle"],
          ["rouge robe"],
          ["vert vent"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec rouge, jaune, verte ou bleu :"], items: [
          ["1) La tomate est ............"],
          ["2) Le citron est ............"],
          ["3) L'herbe est ............"],
          ["4) Le ciel est ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Dis la couleur — réponds en une phrase :"], items: [
          ["1) le tableau"],
          ["2) ton cahier"],
          ["3) le toit de l'école"],
          ["4) l'herbe du jardin"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "jaune, bleu, rouge, vert", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "rouge", r: true }, " — 2) ", { t: "jaune", r: true }, " — 3) ", { t: "verte", r: true }, " — 4) ", { t: "bleu", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Réponses libres : « Il est noir. » / « Il est bleu. »... couleur correcte (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 74 =================
    {
      n: 74, titre: "Énumérer : je fais ma liste", titreFiche: "Énumérer : je fais ma liste",
      objectif: "Énumérer une liste de choses avec le mot « et » (au marché, dans la classe).",
      supportFiche: "Fruits réels ou dessinés, liste écrite au tableau.",
      image: null,
      revision: {
        ens: ["La tomate est de quelle couleur ? — Et le ciel ?"],
        app: ["R.A. : Elle est ", { t: "rouge", r: true }, " — il est ", { t: "bleu", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Fara revient du marché, les bras pleins : elle a acheté des bananes, des mangues ET du riz ! Une liste, ça s'appelle une énumération ! »"],
        app: ["Écoutent la liste et la répètent."],
        technique: ["Narration"], support: "Fruits réels ou dessinés",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à faire des listes : je dis les choses l'une après l'autre, avec « et » devant la dernière."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Liste écrite au tableau",
      },
      observation: {
        ens: ["« Écoutez et observez la liste au tableau. » J'achète des bananes, des mangues et du riz. Où est le petit mot « et » ?"],
        app: ["Repèrent le « et » juste avant le dernier mot de la liste."],
        technique: ["Écoute du modèle"], support: "Liste écrite au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Qu'a achetées Fara au marché ?"],
          ["2) Quel petit mot arrive avant la dernière chose ?"],
          ["3) Énumère : qu'y a-t-il dans ta trousse ?"],
          ["4) Et dans ton village, qu'y a-t-il ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Des bananes, des mangues et du riz", r: true }, "."],
          ["R.A. : Le mot ", { t: "« et »", r: true }, "."],
          ["R.A. : ex. « Un crayon, une gomme ", { t: "et", r: true }, " une règle. »"],
          ["R.A. : ex. « L'école, le puits ", { t: "et", r: true }, " le marché. »"],
        ] },
        technique: ["Question / réponse"], support: "Liste écrite au tableau",
      },
      synthese: {
        ens: ["Donc : pour faire une liste, je dis les choses l'une après l'autre, je mets des virgules, et « et » juste avant la dernière."],
        app: ["Répètent la règle en chœur, puis la liste de Fara."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de la liste qui s'allonge : « Au marché, j'achète une papaye. » Chacun ajoute une chose en répétant toute la liste !"],
        app: ["Répètent la liste en l'allongeant à chaque tour, sans se tromper."],
        technique: ["Jeu de mémoire"], support: "Fruits réels ou dessinés",
      },
      evaluation: {
        ens: ["3 élèves : énumérez 3 choses que vous voyez en classe, avec « et »."],
        app: ["R.A. : liste de 3 choses correcte avec ", { t: "« et »", r: true }, " avant la dernière."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "5. ÉNUMÉRER",
        subs: [
          { t: "A. Faire une liste", paras: [["« J'achète ", { t: "des bananes, des mangues et du riz", k: true }, ". »"]] },
          { t: "B. Le mot magique « et »", paras: [["A, B ", { t: "et", k: true }, " C : « et » arrive toujours ", { t: "à la fin", k: true }, " de la liste !"]] },
        ],
        retenir: ["Dans une liste, le petit mot ", { t: "« et »", k: true }, " arrive à la fin : A, B ", { t: "et", k: true }, " C !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Sur la phrase « J'achète des bananes, des mangues et du riz. » : Vrai ou Faux ? Entoure :"], items: [
          ["1) J'achète des bananes. VRAI / FAUX"],
          ["2) J'achète des chapeaux. VRAI / FAUX"],
          ["3) J'achète des mangues. VRAI / FAUX"],
          ["4) J'achète du riz. VRAI / FAUX"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque liste avec et :"], items: [
          ["1) des bananes, des mangues ........ des arachides."],
          ["2) ma tête, mes mains ........ mes pieds."],
          ["3) rouge, bleu ........ vert."],
          ["4) un cahier, une gomme ........ un crayon."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Ta liste : énumère 3 choses avec « et » :"], items: [
          ["1) dans la classe"],
          ["2) dans ta case"],
          ["3) au marché"],
          ["4) dans le village"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "VRAI", r: true }, " — 2) ", { t: "FAUX", r: true }, " — 3) ", { t: "VRAI", r: true }, " — 4) ", { t: "VRAI", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "et", r: true }, " — 2) ", { t: "et", r: true }, " — 3) ", { t: "et", r: true }, " — 4) ", { t: "et", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Liste correcte de 3 choses avec ", { t: "« et »", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 75 =================
    {
      n: 75, titre: "Mon, ma, ton, ta", titreFiche: "Mon, ma, ton, ta : à qui est-ce ?",
      objectif: "Utiliser mon, ma, ton, ta (et son, sa) pour dire à qui sont les choses.",
      supportFiche: "Objets des élèves (cahier, gomme, sac), tableau noir.",
      image: null,
      revision: {
        ens: ["Fais ta liste : qu'a achetées Fara au marché ?"],
        app: ["R.A. : « ", { t: "Des bananes, des mangues et du riz", r: true }, ". »"],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« C'est MON cahier... C'est TON cahier... Le même mot cahier, mais pas le même propriétaire ! Aujourd'hui, les petits mots qui disent « à qui ». »"],
        app: ["Écoutent, le cahier en main."],
        technique: ["Démonstration"], support: "Objets des élèves",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons mon, ma, ton, ta — et aussi son, sa. Avec eux, personne ne confondra plus son sac avec celui du voisin !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez et écoutez. » (montrer un cahier) C'est MON cahier. (montrer celui d'un élève) C'est TON cahier. (montrer celui du maître) C'est SON cahier."],
        app: ["Observent les trois cas et répètent chaque formule."],
        technique: ["Démonstration"], support: "Objets des élèves",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment dis-tu le cahier qui est à toi ?"],
          ["2) Comment dis-tu la gomme qui est à toi ?"],
          ["3) Comment dis-tu le sac de ton camarade, quand tu lui parles ?"],
          ["4) Et le chapeau du maître ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Mon cahier", r: true }, "."],
          ["R.A. : ", { t: "Ma gomme", r: true }, "."],
          ["R.A. : ", { t: "Ton sac", r: true }, "."],
          ["R.A. : ", { t: "Son chapeau", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Objets des élèves",
      },
      synthese: {
        ens: ["Donc : mon/ma pour mes choses, ton/ta pour tes choses, son/sa pour ses choses. Mon devant sac, ma devant gomme : j'écoute le mot !"],
        app: ["Répètent la règle en chœur : mon sac, ma gomme, ton cahier, ta main, son chapeau, sa banane."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de la table : chacun pose un objet et dit « C'est mon/ma... », puis désigne celui du voisin : « C'est ton/ta... »"],
        app: ["Jouent à dire à qui est chaque objet, avec le bon petit mot."],
        technique: ["Jeu à deux"], support: "Objets des élèves",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse montre un objet à toi, puis un à ton voisin : dis-les."],
        app: ["R.A. : ", { t: "mon/ma... et ton/ta...", r: true }, " corrects."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "6. MON, MA, TON, TA",
        subs: [
          { t: "A. Mes choses", paras: [[{ t: "mon sac", k: true }, " — ", { t: "ma gomme", k: true }, " (mon devant un mot comme sac, ma devant un mot comme gomme)"]] },
          { t: "B. Tes choses et ses choses", paras: [[{ t: "ton cahier", k: true }, ", ", { t: "ta main", k: true }, " — ", { t: "son chapeau", k: true }, ", ", { t: "sa banane", k: true }]] },
        ],
        retenir: [{ t: "mon/ma", k: true }, " pour mes choses, ", { t: "ton/ta", k: true }, " pour les tiennes, ", { t: "son/sa", k: true }, " pour les siennes !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec mon ou ma :"], items: [
          ["1) ........ sac"],
          ["2) ........ gomme"],
          ["3) ........ cahier"],
          ["4) ........ jupe"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec ton ou ta :"], items: [
          ["1) ........ chapeau"],
          ["2) ........ banane"],
          ["3) ........ livre"],
          ["4) ........ main"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Dis « C'est mon... » ou « C'est ma... » :"], items: [
          ["1) le cahier"],
          ["2) la gomme"],
          ["3) le sac"],
          ["4) la main"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "mon", r: true }, " — 2) ", { t: "ma", r: true }, " — 3) ", { t: "mon", r: true }, " — 4) ", { t: "ma", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "ton", r: true }, " — 2) ", { t: "ta", r: true }, " — 3) ", { t: "ton", r: true }, " — 4) ", { t: "ta", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "mon cahier", r: true }, " — 2) ", { t: "ma gomme", r: true }, " — 3) ", { t: "mon sac", r: true }, " — 4) ", { t: "ma main", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 76 =================
    {
      n: 76, titre: "Un ou une ?", titreFiche: "Un ou une ?",
      objectif: "Utiliser un ou une devant les noms (un garçon, une fille, un cahier, une gomme).",
      supportFiche: "Objets de la classe, tableau noir.",
      image: null,
      revision: {
        ens: ["Comment dis-tu la gomme qui est à toi ? — Et le cahier de ton camarade ?"],
        app: ["R.A. : ", { t: "Ma gomme", r: true }, " — ", { t: "son cahier", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Au marché, on demande : « Une papaye, s'il vous plaît ! » Mais pourquoi « une » et pas « un » ? Aujourd'hui, le mystère de un et une ! »"],
        app: ["Se demandent, curieux de résoudre le mystère."],
        technique: ["Question ouverte"], support: "Objets de la classe",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à choisir entre un et une devant les mots. Après cette séance, vous ne vous tromperez plus !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez et écoutez. » Un garçon. Une fille. Un cahier. Une gomme. Entendez-vous la différence ?"],
        app: ["Écoutent les paires et répètent un/une."],
        technique: ["Écoute du modèle"], support: "Objets de la classe",
      },
      analyse: {
        ens: { paras: [
          ["1) Dites-vous « un garçon » ou « une garçon » ?"],
          ["2) « une fille » ou « un fille » ?"],
          ["3) « un cahier » ou « une cahier » ?"],
          ["4) « une gomme » ou « un gomme » ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Un garçon", r: true }, "."],
          ["R.A. : ", { t: "Une fille", r: true }, "."],
          ["R.A. : ", { t: "Un cahier", r: true }, "."],
          ["R.A. : ", { t: "Une gomme", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Objets de la classe",
      },
      synthese: {
        ens: ["Donc : un devant les mots comme garçon, cahier, sac ; une devant les mots comme fille, gomme, papaye. J'écoute le mot et je choisis !"],
        app: ["Répètent les exemples en chœur : un garçon, une fille, un cahier, une gomme."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du gardien du matériel : demande poliment ton matériel : « Un cahier, s'il te plaît ! » « Une gomme, s'il te plaît ! »"],
        app: ["Demandent chaque objet avec un ou une, poliment."],
        technique: ["Jeu de rôle"], support: "Objets de la classe",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse montre un objet, dites « un... » ou « une... »."],
        app: ["R.A. : ", { t: "un/une", r: true }, " correct devant chaque objet."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "7. UN OU UNE ?",
        subs: [
          { t: "A. un", paras: [[{ t: "un garçon", k: true }, " — ", { t: "un cahier", k: true }, " — ", { t: "un sac", k: true }]] },
          { t: "B. une", paras: [[{ t: "une fille", k: true }, " — ", { t: "une gomme", k: true }, " — ", { t: "une papaye", k: true }]] },
        ],
        retenir: [{ t: "un", k: true }, " ou ", { t: "une", k: true }, " : j'écoute le mot ! Un sac, une gomme."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec un ou une :"], items: [
          ["1) ........ garçon"],
          ["2) ........ fille"],
          ["3) ........ cahier"],
          ["4) ........ gomme"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure la bonne réponse :"], items: [
          ["1) un / une pomme"],
          ["2) un / une sac"],
          ["3) un / une table"],
          ["4) un / une banc"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Demande poliment, avec un ou une :"], items: [
          ["1) le cahier"],
          ["2) la gomme"],
          ["3) le crayon"],
          ["4) la règle"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "un", r: true }, " — 2) ", { t: "une", r: true }, " — 3) ", { t: "un", r: true }, " — 4) ", { t: "une", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "une", r: true }, " pomme — 2) ", { t: "un", r: true }, " sac — 3) ", { t: "une", r: true }, " table — 4) ", { t: "un", r: true }, " banc (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "« Un cahier, s'il te plaît ! »", r: true }, " — 2) ", { t: "« Une gomme... »", r: true }, " — 3) ", { t: "« Un crayon... »", r: true }, " — 4) ", { t: "« Une règle... »", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 77 =================
    {
      n: 77, titre: "La comptine du corps", titreFiche: "La comptine du corps",
      objectif: "Réciter la comptine du corps avec les gestes.",
      supportFiche: "Affiche « la comptine du corps », tableau noir.",
      image: { file: "s77_comptine_corps.png", w: 1100, h: 620, legende: "La comptine du corps : « Tout mon corps est mon ami ! »" },
      revision: {
        ens: ["Un cahier ou une cahier ? — Une gomme ou un gomme ?"],
        app: ["R.A. : ", { t: "un cahier", r: true }, " — ", { t: "une gomme", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Notre corps a maintenant SA comptine ! Écoutez... » L'enseignant récite en touchant chaque partie : tête, épaules, mains, pieds !"],
        app: ["Écoutent, prêts à imiter les gestes."],
        technique: ["Narration avec gestes"], support: "Affiche « la comptine du corps »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la comptine du corps. Après cette séance, vous la connaîtrez par cœur, avec les gestes !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Suivez chaque vers avec votre doigt pendant que je récite lentement."],
        app: ["Suivent les vers des yeux et du doigt, en écoutant."],
        technique: ["Écoute du modèle"], support: "Affiche « la comptine du corps »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que touche-t-on au début de la comptine ?"],
          ["2) Avec quoi voit-on ? Et avec quoi sent-on ?"],
          ["3) Que font les pieds dans la comptine ?"],
          ["4) Complète : tout mon corps est mon ........"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "La tête, les épaules, les mains et les pieds", r: true }, "."],
          ["R.A. : Avec les ", { t: "yeux", r: true }, " ; avec le ", { t: "nez", r: true }, "."],
          ["R.A. : Ils ", { t: "courent", r: true }, "."],
          ["R.A. : ", { t: "ami", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Affiche « la comptine du corps »",
      },
      synthese: {
        ens: ["Donc : ma comptine dit les mots du corps : la tête, les yeux, le nez, la bouche, les pieds. Je la récite en me touchant !"],
        app: ["Répètent chaque vers après l'enseignant, avec les gestes."],
        technique: ["Répétition par vers"], support: "Affiche « la comptine du corps »",
      },
      application: {
        ens: ["Récitons ensemble, avec les gestes : on touche la tête, les épaules, les mains, les pieds, on court sur place au vers des pieds !"],
        app: ["Récitent toute la comptine en chœur avec les gestes."],
        technique: ["Récitation avec gestes"], support: "Affiche « la comptine du corps »",
      },
      evaluation: {
        ens: ["3 élèves récitent les deux premiers vers, seuls."],
        app: ["R.A. : les deux vers correctement, avec le sourire."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "8. LA COMPTINE DU CORPS",
        subs: [
          { t: "A. La comptine", paras: [
            ["« ", { t: "Tête, épaules, mains et pieds,", k: true }, " »"],
            ["« ", { t: "je les touche sans me tromper.", k: true }, " »"],
          ] },
          { t: "B. La dire avec les gestes", paras: [["Je récite ", { t: "fort", k: true }, " et je ", { t: "touche", k: true }, " chaque partie du corps !"]] },
        ],
        retenir: ["Ma comptine : « ", { t: "Tout mon corps est mon ami !", k: true }, " » — je la connais par cœur !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
          ["1) « Tête, épaules, mains et pieds » ....... / 2 pts"],
          ["2) « je les touche sans me tromper » ....... / 2 pts"],
          ["3) Je récite sans aide ....... / 2 pts"],
          ["4) Je fais les gestes ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
          ["1) Tête, épaules, mains et ............"],
          ["2) Mes yeux voient, mon nez ............"],
          ["3) Ma bouche parle et mes pieds ............"],
          ["4) Tout mon corps est mon ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["1) Mes pieds servent à voir. VRAI / FAUX"],
          ["2) Ma bouche sert à parler. VRAI / FAUX"],
          ["3) Je ne peux pas sauter. VRAI / FAUX"],
          ["4) Tout mon corps est mon ami. VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : vers 1 (2 pts) + vers 2 (2 pts) + mémoire (2 pts) + gestes (2 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "pieds", r: true }, " (1,5 pt) — 2) ", { t: "sent", r: true }, " (1,5 pt) — 3) ", { t: "courent", r: true }, " (1,5 pt) — 4) ", { t: "ami", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "FAUX", r: true }, " — 2) ", { t: "VRAI", r: true }, " — 3) ", { t: "FAUX", r: true }, " — 4) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 78 =================
    {
      n: 78, titre: "Bien prononcer S-CH", titreFiche: "Bien prononcer S-CH",
      objectif: "Prononcer S et CH au miroir et dans des phrases, sans les mélanger.",
      supportFiche: "Miroir, cartes-mots, tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez les deux premiers vers de la comptine du corps, avec les gestes."],
        app: ["Récitent : « ", { t: "Tête, épaules, mains et pieds, je les touche sans me tromper", r: true }, ". »"],
        technique: ["Récitation"],
      },
      miseEnSituation: {
        ens: ["« Le serpent fait ssss, le vent fait chhh ! Au miroir, nos bouches apprennent les deux sons sans les mélanger. Prêts ? »"],
        app: ["Essaient ssss et chhh, en riant de leurs essais."],
        technique: ["Découverte gestuelle"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous prononçons parfaitement S et CH : la langue derrière les dents pour S, les lèvres rondes pour CH."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez ma bouche dans le miroir. » Pour S : la langue est derrière les dents, le son est fin. Pour CH : les lèvres se rondent en avant, le son souffle."],
        app: ["Observent la bouche du maître, essayent au miroir et comparent."],
        technique: ["Observation au miroir"], support: "Miroir",
      },
      analyse: {
        ens: { paras: [
          ["1) Fais ssss : où est ta langue ?"],
          ["2) Fais chhh : que font tes lèvres ?"],
          ["3) « chat » commence par quel son ?"],
          ["4) « savon » commence par quel son ?"],
        ] },
        app: { paras: [
          ["R.A. : Derrière ", { t: "les dents", r: true }, "."],
          ["R.A. : Elles sont ", { t: "rondes en avant", r: true }, "."],
          ["R.A. : ", { t: "CH", r: true }, " (chhh)."],
          ["R.A. : ", { t: "S", r: true }, " (ssss)."],
        ] },
        technique: ["Question / réponse"], support: "Miroir",
      },
      synthese: {
        ens: ["Donc : S = la langue derrière les dents, son fin : ssss. CH = les lèvres rondes, son qui souffle : chhh. Je ne les mélange pas !"],
        app: ["Répètent les deux règles en chœur, mains devant la bouche pour sentir le souffle."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des deux gestes : je dis un mot, vous faites ssss ou chhh avec le bon geste : chat — sac — souris — chapeau — savon — cheveux !"],
        app: ["Faisent le bon son et le bon geste pour chaque mot."],
        technique: ["Jeu de gestes"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : dites chat, savon, chapeau, souris, très bien prononcés."],
        app: ["R.A. : les 4 mots avec S et CH bien distincts."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "9. BIEN PRONONCER S-CH",
        subs: [
          { t: "A. sss", paras: [["La langue derrière ", { t: "les dents", k: true }, " : ", { t: "ssss", k: true }, " comme ", { t: "souris", k: true }]] },
          { t: "B. chhh", paras: [["Les lèvres ", { t: "rondes en avant", k: true }, " : ", { t: "chhh", k: true }, " comme ", { t: "chat", k: true }]] },
        ],
        retenir: [{ t: "ssss", k: true }, " serpent, ", { t: "chhh", k: true }, " vent : je prononce sans mélanger !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, fais les deux sons. L'enseignant observe :"], items: [
          ["1) Je fais ssss, la langue derrière les dents ....... / 2 pts"],
          ["2) Je fais chhh, les lèvres rondes ....... / 2 pts"],
          ["3) Je ne mélange pas les deux ....... / 2 pts"],
          ["4) Je répète après le maître ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète chaque phrase sans te tromper (on écoute S et CH) :"], items: [
          ["1) « Un chat dans le sac. »"],
          ["2) « Le chapeau et le savon. »"],
          ["3) « La souris se cache sous le chapeau. »"],
          ["4) « Six chats et sept souris. »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Barre l'intrus, celui qui n'a pas de son CH :"], items: [
          ["1) chat / lune"],
          ["2) chapeau / robe"],
          ["3) cheval / balle"],
          ["4) chanter / manger"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : sss (2 pts) + chhh (2 pts) + pas de mélange (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec S et CH bien distincts (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Intrus à barrer : 1) ", { t: "lune", r: true }, " — 2) ", { t: "robe", r: true }, " — 3) ", { t: "balle", r: true }, " — 4) ", { t: "manger", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 79 =================
    {
      n: 79, titre: "Répétition rythmée", titreFiche: "Répétition rythmée",
      objectif: "Répéter des mots et des phrases avec S-CH en respectant le rythme (1 syllabe = 1 frappe).",
      supportFiche: "Tambourin (ou mains), tableau noir.",
      image: null,
      revision: {
        ens: ["Miroir express : faites ssss... puis chhh... (la classe entière)"],
        app: ["Font les deux sons, la langue et les lèvres bien placées."],
        technique: ["Travail collectif"],
      },
      miseEnSituation: {
        ens: ["« Le tambourin revient pour la dernière fois de l'année ! 1 syllabe = 1 frappe : cha-peau... 2 frappes ! À vos mains ! »"],
        app: ["Frappent en même temps qu'ils répètent les mots."],
        technique: ["Jeu rythmique"], support: "Tambourin (ou mains)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous frappons le rythme des mots avec S et CH : chaque syllabe tombe juste, comme une goutte de pluie !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez et écoutez. » L'enseignant frappe chapeau (2 frappes) et tomate (3 frappes) ; les élèves comptent les frappes."],
        app: ["Comptent à voix haute : 1, 2 pour chapeau ; 1, 2, 3 pour tomate."],
        technique: ["Écoute du modèle"], support: "Tambourin (ou mains)",
      },
      analyse: {
        ens: { paras: [
          ["1) chapeau : combien de frappes ?"],
          ["2) cheval : combien de frappes ?"],
          ["3) tomate : combien de frappes ?"],
          ["4) la souris : combien de frappes ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "2", r: true }, " (cha-peau)."],
          ["R.A. : ", { t: "2", r: true }, " (che-val)."],
          ["R.A. : ", { t: "3", r: true }, " (to-ma-te)."],
          ["R.A. : ", { t: "3", r: true }, " (la-sou-ris)."],
        ] },
        technique: ["Question / réponse"], support: "Tambourin (ou mains)",
      },
      synthese: {
        ens: ["Donc : 1 syllabe = 1 frappe : chapeau 2, cheval 2, tomate 3, la souris 3. Les sons S et CH restent bien clairs à chaque frappe !"],
        app: ["Répètent la règle en chœur, puis frappent les 4 mots ensemble."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du chef d'orchestre : un élève frappe le rythme d'un mot, la classe dit le mot en même temps !"],
        app: ["Frappent et disent les mots en suivant le chef, rythme régulier."],
        technique: ["Chef d'orchestre"], support: "Tambourin (ou mains)",
      },
      evaluation: {
        ens: ["3 élèves : frappez et dites « le savon » avec le bon nombre de frappes."],
        app: ["R.A. : ", { t: "3 frappes", r: true }, " (le-sa-von), mot bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "10. RÉPÉTITION RYTHMÉE",
        subs: [
          { t: "A. La règle d'or", paras: [[{ t: "1 syllabe", k: true }, " = ", { t: "1 frappe", k: true }]] },
          { t: "B. Frappe et dis", paras: [[{ t: "chapeau", k: true }, " (2) — ", { t: "tomate", k: true }, " (3) — ", { t: "la souris", k: true }, " (3)"]] },
        ],
        retenir: ["Je frappe en même temps que je dis : ", { t: "cha-peau : 1, 2", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Frappe et dis chaque mot, au bon rythme (l'enseignant valide) :"], items: [
          ["1) chapeau ....... / 2 pts"],
          ["2) cheval ....... / 2 pts"],
          ["3) savon ....... / 2 pts"],
          ["4) une tomate ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Compte les frappes de chaque mot :"], items: [
          ["1) chapeau → ......."],
          ["2) cheval → ......."],
          ["3) tomate → ......."],
          ["4) la souris → ......."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Frappe chaque phrase en rythme, sans te presser :"], items: [
          ["1) « Un chat, un sac. »"],
          ["2) « Mon chapeau, mon savon. »"],
          ["3) « Le cheval mange la tomate. »"],
          ["4) « Une souris et un chat. »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : mot dit avec le bon rythme = 2 pts (total 8 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "2", r: true }, " (cha-peau) — 2) ", { t: "2", r: true }, " (che-val) — 3) ", { t: "3", r: true }, " (to-ma-te) — 4) ", { t: "3", r: true }, " (la-sou-ris)."]] },
        { titre: "Exercice 3", lines: [["Rythme régulier, chaque syllabe = 1 frappe (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 80 =================
    {
      n: 80, titre: "La grande performance : mon année de français", titreFiche: "La grande performance : mon année",
      objectif: "Montrer tout ce que je sais dire après toute l'année : me présenter, parler du village, les sons, les comptines.",
      supportFiche: "Affiches de l'année, cartes-mots, trophée du champion.",
      image: { file: "s80_grande_performance.png", w: 1100, h: 520, legende: "Bravo ! Je suis champion de français !" },
      revision: {
        ens: ["Dernière répétition : frappez chapeau (2 frappes) et montagne (2 frappes)."],
        app: ["Frappent en disant : cha-peau (1, 2) — mon-tagne (1, 2)."],
        technique: ["Jeu rythmique"],
      },
      miseEnSituation: {
        ens: ["« Voici LA grande performance de l'année ! Trois épreuves : parler, les sons, les comptines. Le trophée de champion attend son champion ! Prêts ? »"],
        app: ["Crient : « Prêts ! », fiers et émus de finir l'année."],
        technique: ["Narration"], support: "Trophée du champion",
      },
      presentation: {
        ens: ["Trois épreuves : me présenter et parler du village ; les sons champions U, GN, CH ; une comptine de mon choix avec le rythme."],
        app: ["Écoutent le déroulé des épreuves."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez les affiches de l'année. » Repassons tout : les salutations, se présenter, le village, les sons U, GN, S-CH, le corps, les couleurs."],
        app: ["Récapitulent en chœur le grand parcours de l'année."],
        technique: ["Récapitulation"], support: "Affiches de l'année",
      },
      analyse: {
        ens: { paras: [
          ["1) Présente-toi en deux phrases."],
          ["2) Parle de ton village avec « il y a »."],
          ["3) Cite un mot avec U, un mot avec GN, un mot avec CH."],
          ["4) Quelle comptine de l'année préfères-tu ? Récite son début."],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Bonjour ! Je m'appelle...", r: true }, " »"],
          ["R.A. : « ", { t: "Dans mon village, il y a une école...", r: true }, " »"],
          ["R.A. : ", { t: "jupe — montagne — chat", r: true }, " (ou autres mots des leçons)."],
          ["R.A. : récite le début de la comptine choisie."],
        ] },
        technique: ["Question / réponse"], support: "Affiches de l'année",
      },
      synthese: {
        ens: ["Donc : je sais me présenter, parler de mon village, dire les couleurs, jouer avec les sons U, GN et CH, réciter des comptines. Je suis champion de français !"],
        app: ["Répètent le défi : « Je suis champion de français ! »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Répétition générale par binômes : les 3 épreuves, sans aide. On s'encourage !"],
        app: ["Répètent les trois épreuves en binômes, prêts pour la grande performance."],
        technique: ["Répétition en binômes"], support: "Affiches de l'année",
      },
      evaluation: {
        ens: ["L'enseignant fait passer les 3 épreuves et note sur 20 : /8 + /6 + /6."],
        app: ["Passent les épreuves l'un après l'autre, devant la classe."],
        technique: ["Performance individuelle"],
      },
      lecon: {
        titre: "11. MON ANNÉE DE FRANÇAIS : BILAN",
        subs: [
          { t: "A. Tout ce que je sais dire", paras: [["« ", { t: "Bonjour ! Je m'appelle... J'habite dans un village. Il y a une école et un puits.", k: true }, " »"]] },
          { t: "B. Les sons champions", paras: [[{ t: "U", k: true }, " (jupe) — ", { t: "GN", k: true }, " (montagne) — ", { t: "S-CH", k: true }, " (souris/chat)"]] },
        ],
        retenir: ["J'ai appris toute l'année : ", { t: "je suis champion de français !", k: true }],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 — Parle de toi et de ton village :"], items: [
          ["1) Je dis bonjour et je me présente ....... / 2 pts"],
          ["2) Je dis où j'habite ....... / 2 pts"],
          ["3) Je dis ce qu'il y a dans mon village ....... / 2 pts"],
          ["4) Je parle fort et clairement ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 — Les sons champions : dis un mot pour chaque son :"], items: [
          ["1) un mot avec U (jupe, plume...) ....... / 2 pts"],
          ["2) un mot avec GN (montagne, agneau...) ....... / 2 pts"],
          ["3) un mot avec CH (chat, chapeau...) ....... / 2 pts"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 — Comptine et rythme :"], items: [
          ["1) Je récite 2 vers de la comptine de mon choix ....... / 3 pts"],
          ["2) Je frappe « chapeau » et « montagne » au bon rythme ....... / 3 pts"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Épreuve 1 (8 pts) : 2 pts par critère validé — bonjour/nom, habitation, village, clarté."]] },
        { titre: "Exercice 2", lines: [["Épreuve 2 (6 pts) : 2 pts par mot correct — ex. : ", { t: "jupe (U), montagne (GN), chat (CH)", r: true }, "."]] },
        { titre: "Exercice 3", lines: [["Épreuve 3 (6 pts) : comptine (3 pts) + rythme juste (3 pts). Bravo, ", { t: "champion de français", r: true }, " !"]] },
      ],
    },
  ],
};

module.exports = { theme8 };
