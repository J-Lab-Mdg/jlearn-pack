// ============================================================
// Unité VI — Sciences politiques et droit (PE T12 série OSE — 25 heures)
// RAS 1 : Estimer les différents régimes politiques et les formes de démocratie
// RAS 2 : Déterminer les rôles du Droit devant la justice
// RAS 3 : Déterminer les rôles du Droit face à l'activité économique
// Découpage : 11 séances de cours + 1 révision + 1 sujet d'examen
// Valeurs : Citoyen libre et responsable, Justice et solidarité
// ============================================================

const U = {
  num: "VI",
  titre: "Sciences politiques et droit",
  ras: "Estimer les différents régimes politiques et les formes de démocratie · Déterminer les rôles du Droit devant la justice · Déterminer les rôles du Droit face à l'activité économique",
  valeurs: "Citoyen libre et responsable, Justice et solidarité",
  duree: "25 heures",
  themes: [
    "Les régimes politiques : notions générales",
    "Le régime parlementaire",
    "Le régime présidentiel",
    "Le régime semi-présidentiel",
    "Le scrutin majoritaire",
    "Le scrutin proportionnel",
    "Le scrutin mixte et l'effet des modes de scrutin",
    "Les formes de démocratie : directe, représentative, semi-directe",
    "Démocratie participative et démocratie délibérative",
    "Le droit et la protection des personnes",
    "Le droit face à l'activité économique",
  ],
  topics: [
    // ---------------------------------------------------------
    // SÉANCE 77 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les régimes politiques : notions générales",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "définir un régime politique et distinguer les pouvoirs qui le composent",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce qu'une organisation publique ?", "Une structure créée par une décision publique pour rendre un service à la population."],
        ["Qu'est-ce que le lien civique ?", "L'appartenance à une même collectivité politique, qui relie les citoyens entre eux."],
      ],
      mise: [
        "Pourquoi classe-t-on les États selon leur régime politique ?",
        "Parce que la manière dont le pouvoir est réparti change tout : qui décide, qui contrôle, et comment les citoyens sont associés à la décision.",
      ],
      observation: "la scène des institutions politiques",
      observationSupport: "Illustration des institutions et documents d'accompagnement",
      technAna: "Observation dirigée et lecture de documents",
      qa: [
        ["Qu'est-ce qu'un régime politique ?", "La manière dont le pouvoir est organisé, réparti et exercé dans un État."],
        ["Quels sont les trois pouvoirs ?", "Le pouvoir législatif, qui fait la loi ; le pouvoir exécutif, qui l'exécute ; le pouvoir judiciaire, qui tranche les litiges."],
        ["Qu'est-ce que la séparation des pouvoirs ?", "Le principe selon lequel ces trois fonctions sont confiées à des organes distincts, afin qu'aucun ne concentre tout le pouvoir."],
        ["Que signifie « contrôle réciproque » ?", "Chaque organe dispose d'un moyen de limiter les autres : censure, dissolution, contrôle de conformité des lois."],
        ["Qu'est-ce qu'une Constitution ?", "La règle suprême qui organise les pouvoirs publics, fixe leurs compétences et garantit les droits des citoyens."],
        ["Qu'est-ce qu'un État de droit ?", "Un État où les gouvernants sont soumis au droit, et où les droits des personnes sont effectivement protégés."],
        ["Qu'est-ce qu'un régime démocratique ?", "Un régime où le pouvoir procède du peuple, s'exerce par des représentants élus et respecte les libertés publiques."],
        ["Pourquoi comparer les régimes ?", "Parce que chaque répartition du pouvoir produit des effets différents sur la stabilité, la représentation et les libertés."],
      ],
      synthese: "Donc, un régime politique décrit la manière dont le pouvoir est réparti dans un État. La séparation des pouvoirs — législatif, exécutif, judiciaire — et leur contrôle réciproque sont les deux principes qui permettent de comparer les régimes et de protéger les libertés.",
      motsCles: ["régime politique", "pouvoir législatif", "pouvoir exécutif", "pouvoir judiciaire", "séparation des pouvoirs", "Constitution", "État de droit", "démocratie"],
      image: { file: "t12_u6_regimes.jpg", legende: "Figure 67 — Les institutions politiques et la répartition des pouvoirs." },
      contenu: [
        {
          sousTitre: "1. Le régime politique",
          texte: "Il décrit l'organisation concrète du pouvoir dans un État.",
          liste: [
            "Qui détient le pouvoir et comment il est désigné.",
            "Quelles sont les compétences de chaque organe.",
            "Quels rapports entretiennent ces organes entre eux.",
            "Quelle place est faite aux citoyens dans la décision.",
          ],
        },
        {
          sousTitre: "2. Les trois fonctions de l'État",
          texte: "Toute organisation politique distingue trois fonctions.",
          liste: [
            "Législative : élaborer et voter la loi.",
            "Exécutive : conduire l'action publique et faire appliquer la loi.",
            "Judiciaire : trancher les litiges et sanctionner les manquements.",
          ],
        },
        {
          sousTitre: "3. La séparation et le contrôle réciproque",
          texte: "Séparer ne suffit pas : il faut que chaque pouvoir puisse limiter les autres.",
          liste: [
            "Le Parlement peut renverser le gouvernement ou refuser la loi.",
            "L'exécutif peut, selon les régimes, dissoudre l'assemblée.",
            "Le juge vérifie que les actes publics respectent la règle supérieure.",
          ],
        },
        {
          sousTitre: "4. Constitution et État de droit",
          texte: "Le cadre qui rend cette organisation durable.",
          liste: [
            "La Constitution fixe les règles du jeu et les droits fondamentaux.",
            "L'État de droit soumet les gouvernants eux-mêmes au respect de ces règles.",
            "Sans ce cadre, la séparation des pouvoirs reste une formule sans effet.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le pouvoir qui fait la loi est le pouvoir…", opts: ["législatif", "exécutif", "judiciaire"], ok: 0, expl: "Il élabore et vote la loi." },
          { q: "Le pouvoir qui tranche les litiges est le pouvoir…", opts: ["judiciaire", "législatif", "exécutif"], ok: 0, expl: "Il applique la règle au cas concret." },
          { q: "La règle suprême qui organise les pouvoirs est…", opts: ["la Constitution", "un décret", "un arrêté"], ok: 0, expl: "Elle fixe les compétences et les droits." },
          { q: "Un État de droit est un État où…", opts: ["les gouvernants sont soumis au droit", "le chef décide sans limite", "les juges n'existent pas"], ok: 0, expl: "Nul n'est au-dessus de la règle commune." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Séparer les pouvoirs suffit à garantir les libertés.", rep: false, expl: "Il faut aussi que chaque pouvoir puisse en limiter un autre." },
          { txt: "Le pouvoir exécutif conduit l'action publique.", rep: true, expl: "Il fait appliquer la loi." },
          { txt: "La Constitution est une règle inférieure au décret.", rep: false, expl: "Elle est la règle suprême." },
          { txt: "Comparer les régimes permet de comprendre leurs effets sur les libertés.", rep: true, expl: "Chaque répartition produit des effets différents." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis un régime politique.", r: "C'est la manière dont le pouvoir est organisé, réparti et exercé dans un État." },
          { q: "Cite les trois fonctions de l'État et ce que chacune fait.", r: "La fonction législative fait la loi, l'exécutive conduit l'action publique, la judiciaire tranche les litiges." },
          { q: "Qu'est-ce que la séparation des pouvoirs ?", r: "C'est le principe selon lequel les fonctions législative, exécutive et judiciaire sont confiées à des organes distincts, afin qu'aucun ne concentre tout le pouvoir." },
          { q: "Qu'est-ce qu'un État de droit ?", r: "C'est un État où les gouvernants sont soumis au droit et où les droits des personnes sont effectivement protégés." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le pouvoir qui vote la loi est le pouvoir", suite: "législatif" },
          { debut: "Le pouvoir qui applique la loi est le pouvoir", suite: "exécutif" },
          { debut: "La règle suprême de l'État est la", suite: "Constitution" },
          { debut: "Un État où les gouvernants respectent le droit est un État de", suite: "droit" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 78 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le régime parlementaire",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "décrire le fonctionnement du régime parlementaire",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Cite les trois fonctions de l'État.", "La fonction législative, l'exécutive et la judiciaire."],
        ["Qu'est-ce qu'un régime politique ?", "La manière dont le pouvoir est organisé, réparti et exercé dans un État."],
      ],
      mise: [
        "Le gouvernement peut-il rester en place si le Parlement s'y oppose ?",
        "Non : dans un régime parlementaire, le gouvernement ne tient que par la confiance des élus ; une motion de censure l'oblige à partir.",
      ],
      observation: "le schéma du régime parlementaire",
      observationSupport: "Schéma du régime parlementaire affiché ou distribué",
      technAna: "Lecture de schéma et discussion dirigée",
      qa: [
        ["Qu'est-ce qu'un régime parlementaire ?", "Un régime dans lequel le gouvernement est responsable devant le Parlement, qui peut le renverser."],
        ["Quel est le mécanisme central ?", "La responsabilité politique du gouvernement : il reste en fonction tant qu'il conserve la confiance du Parlement."],
        ["Qu'est-ce qu'une motion de censure ?", "Un vote du Parlement qui renverse le gouvernement et l'oblige à démissionner."],
        ["Qu'est-ce que la dissolution ?", "La décision par laquelle le chef de l'État met fin au mandat de l'assemblée et provoque de nouvelles élections."],
        ["Quel rôle joue le chef de l'État ?", "Il arbitre et représente, mais la conduite quotidienne de l'action publique appartient au chef du gouvernement."],
        ["Parle-t-on de séparation des pouvoirs ?", "Oui, mais souple : les organes sont distincts et collaborent, aucun ne peut agir seul durablement."],
        ["Quel est l'avantage du système ?", "Il permet de changer de gouvernement sans crise, si une majorité de remplacement existe."],
        ["Quel est son point faible ?", "L'instabilité : sans majorité stable, les gouvernements se succèdent et l'action publique perd en continuité."],
      ],
      synthese: "Donc, le régime parlementaire repose sur la collaboration des pouvoirs : le gouvernement reste en fonction tant qu'il garde la confiance du Parlement, qui peut le renverser par une motion de censure. Le chef de l'État arbitre, tandis que le chef du gouvernement conduit l'action publique. Le système suppose une majorité stable, sous peine d'instabilité.",
      motsCles: ["régime parlementaire", "responsabilité du gouvernement", "motion de censure", "dissolution", "confiance", "chef du gouvernement", "majorité", "instabilité"],
      image: { file: "t12_u6_parlementaire.png", legende: "Figure 68 — Le régime parlementaire : la collaboration des pouvoirs." },
      contenu: [
        {
          sousTitre: "1. Le principe : la responsabilité du gouvernement",
          texte: "Le lien entre l'exécutif et le législatif est permanent.",
          liste: [
            "Le gouvernement est investi par le Parlement ou doit obtenir sa confiance.",
            "Il reste en fonction tant qu'il conserve cette confiance.",
            "Le Parlement peut à tout moment voter une motion de censure.",
          ],
        },
        {
          sousTitre: "2. Les deux armes réciproques",
          texte: "Chaque organe dispose d'un moyen d'action sur l'autre.",
          liste: [
            "Le Parlement : la motion de censure, qui renverse le gouvernement.",
            "L'exécutif : la dissolution, qui renvoie les élus devant les électeurs.",
            "Cette réciprocité est la marque du régime parlementaire.",
          ],
        },
        {
          sousTitre: "3. Le rôle du chef de l'État",
          texte: "La direction de l'action publique ne lui appartient pas.",
          liste: [
            "Il représente l'État et assure la continuité des institutions.",
            "Il arbitre les situations de crise.",
            "Le chef du gouvernement conduit la politique et en répond devant le Parlement.",
          ],
        },
        {
          sousTitre: "4. Avantage et point faible",
          texte: "Le bilan du système tient en deux lignes.",
          liste: [
            "Avantage : souplesse — on change de gouvernement sans changer de régime.",
            "Point faible : instabilité quand aucune majorité ne se dégage durablement.",
            "La stabilité dépend donc de la composition de l'assemblée.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans un régime parlementaire, le gouvernement est responsable devant…", opts: ["le Parlement", "le chef de l'État seul", "les juges"], ok: 0, expl: "La confiance des élus est la clé." },
          { q: "Une motion de censure permet de…", opts: ["renverser le gouvernement", "dissoudre l'assemblée", "élire le président"], ok: 0, expl: "Elle met fin aux fonctions du gouvernement." },
          { q: "La dissolution met fin au mandat…", opts: ["de l'assemblée", "du gouvernement", "des juges"], ok: 0, expl: "Elle provoque de nouvelles élections." },
          { q: "Le chef du gouvernement…", opts: ["conduit l'action publique", "n'a aucun rôle", "vote seul la loi"], ok: 0, expl: "Il en répond devant le Parlement." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Dans un régime parlementaire, l'exécutif et le législatif collaborent.", rep: true, expl: "La séparation y est souple." },
          { txt: "Le gouvernement peut rester en place contre la volonté du Parlement.", rep: false, expl: "La censure l'oblige à démissionner." },
          { txt: "La dissolution est une arme de l'exécutif contre l'assemblée.", rep: true, expl: "Elle renvoie les élus devant les électeurs." },
          { txt: "Le chef de l'État conduit seul l'action quotidienne du gouvernement.", rep: false, expl: "C'est le chef du gouvernement qui la conduit." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un régime parlementaire ?", r: "C'est un régime dans lequel le gouvernement est responsable devant le Parlement, qui peut le renverser." },
          { q: "Qu'est-ce qu'une motion de censure ?", r: "C'est un vote du Parlement qui renverse le gouvernement et l'oblige à démissionner." },
          { q: "Qu'est-ce que la dissolution ?", r: "C'est la décision par laquelle le chef de l'État met fin au mandat de l'assemblée et provoque de nouvelles élections." },
          { q: "Quel est le principal point faible du régime parlementaire ?", r: "L'instabilité : sans majorité durable, les gouvernements se succèdent et l'action publique perd en continuité." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au mécanisme correspondant.", pointsPar: 1, items: [
          { g: ["Les députés votent contre le gouvernement", "Le chef de l'État renvoie les élus aux urnes", "Le gouvernement demande un vote de confiance", "Le chef du gouvernement conduit la politique", "L'assemblée refuse le budget"], d: ["Responsabilité gouvernementale", "Dissolution", "Motion de censure", "Responsabilité gouvernementale", "Motion de censure"], pairs: [[0, 2], [1, 1], [2, 3], [3, 0], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 79 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le régime présidentiel",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "décrire le fonctionnement du régime présidentiel",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'une motion de censure ?", "Un vote du Parlement qui renverse le gouvernement."],
        ["Qu'est-ce qu'un régime parlementaire ?", "Un régime où le gouvernement est responsable devant le Parlement."],
      ],
      mise: [
        "Que se passe-t-il quand le chef de l'État et l'assemblée ne sont pas du même bord ?",
        "Dans un régime présidentiel, aucun ne peut renverser l'autre : ils doivent composer, au risque du blocage.",
      ],
      observation: "le schéma du régime présidentiel",
      observationSupport: "Schéma du régime présidentiel affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'un régime présidentiel ?", "Un régime où le chef de l'État détient la totalité du pouvoir exécutif et où les pouvoirs sont strictement séparés."],
        ["Qui compose le gouvernement ?", "Des ministres nommés par le président, responsables devant lui seul et révocables par lui."],
        ["Le Parlement peut-il renverser le gouvernement ?", "Non : il ne dispose d'aucune motion de censure à l'égard de l'exécutif."],
        ["Le président peut-il dissoudre l'assemblée ?", "Non : le mandat des élus va à son terme, aucun des deux organes ne peut abréger celui de l'autre."],
        ["Comment s'exerce le contrôle réciproque ?", "Par le veto, le vote du budget, l'approbation des nominations et le contrôle de conformité des lois par le juge."],
        ["Quel est l'avantage du système ?", "La stabilité : chaque organe reste en place jusqu'au terme de son mandat."],
        ["Quel est son risque ?", "Le blocage institutionnel, si le président et la majorité de l'assemblée sont d'un bord opposé."],
        ["Quelle différence avec le régime parlementaire ?", "Ici les pouvoirs se surveillent sans pouvoir se destituer ; là ils collaborent et peuvent se renverser."],
      ],
      synthese: "Donc, le régime présidentiel repose sur une séparation stricte : le président détient tout l'exécutif, nomme et révoque les ministres, et le Parlement ne peut renverser le gouvernement. Chaque pouvoir contrôle l'autre sans pouvoir le destituer. La stabilité est forte, mais le blocage guette si la majorité parlementaire s'oppose au président.",
      motsCles: ["régime présidentiel", "séparation stricte", "veto", "mandat fixe", "nomination des ministres", "blocage institutionnel", "stabilité", "contrôle réciproque"],
      image: { file: "t12_u6_presidentiel.png", legende: "Figure 69 — Le régime présidentiel : la séparation stricte des pouvoirs." },
      contenu: [
        {
          sousTitre: "1. L'exécutif concentré entre les mains du président",
          texte: "Le chef de l'État est aussi le chef de l'exécutif.",
          liste: [
            "Il est élu, le plus souvent au suffrage universel.",
            "Il nomme les ministres, qui lui doivent leur fonction.",
            "Il peut les révoquer sans l'accord du Parlement.",
          ],
        },
        {
          sousTitre: "2. Une séparation stricte",
          texte: "Aucun organe ne peut en renverser un autre.",
          liste: [
            "Le Parlement ne peut censurer le gouvernement.",
            "Le président ne peut dissoudre l'assemblée.",
            "Les mandats sont à durée fixe : rien n'est abrégé.",
          ],
        },
        {
          sousTitre: "3. Le contrôle réciproque sans destitution",
          texte: "La limitation passe par d'autres moyens.",
          liste: [
            "Le veto : le président peut refuser de promulguer une loi.",
            "Le vote du budget et l'approbation des nominations par le Parlement.",
            "Le contrôle de conformité des lois exercé par le juge.",
          ],
        },
        {
          sousTitre: "4. Avantage et risque",
          texte: "Le bilan s'inverse par rapport au parlementarisme.",
          liste: [
            "Avantage : une stabilité forte, les organes vont au terme de leur mandat.",
            "Risque : le blocage institutionnel en cas de majorité opposée au président.",
            "Le système exige donc une culture du compromis.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans un régime présidentiel, les ministres sont responsables devant…", opts: ["le président seul", "le Parlement", "le juge"], ok: 0, expl: "Ils sont nommés et révoqués par lui." },
          { q: "Le Parlement peut-il censurer le gouvernement ?", opts: ["non, jamais", "oui, à tout moment", "oui, une fois par an"], ok: 0, expl: "La séparation est stricte." },
          { q: "Le veto est…", opts: ["le refus de promulguer une loi", "un vote de censure", "une dissolution"], ok: 0, expl: "C'est une arme du président." },
          { q: "Le risque propre à ce régime est…", opts: ["le blocage institutionnel", "l'instabilité des gouvernements", "la dissolution fréquente"], ok: 0, expl: "Aucun organe ne peut contraindre l'autre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le président peut dissoudre l'assemblée dans un régime présidentiel.", rep: false, expl: "Les mandats vont à leur terme." },
          { txt: "Les pouvoirs se contrôlent sans pouvoir se destituer.", rep: true, expl: "C'est le principe de la séparation stricte." },
          { txt: "Le régime présidentiel favorise la stabilité.", rep: true, expl: "Chaque organe reste en place." },
          { txt: "Les ministres sont responsables devant le Parlement.", rep: false, expl: "Ils répondent devant le président seul." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le régime présidentiel.", r: "C'est un régime où le chef de l'État détient la totalité du pouvoir exécutif et où les pouvoirs sont strictement séparés." },
          { q: "Pourquoi dit-on que la séparation y est stricte ?", r: "Parce qu'aucun organe ne peut renverser l'autre : ni censure du gouvernement, ni dissolution de l'assemblée." },
          { q: "Cite deux moyens de contrôle réciproque.", r: "Le veto présidentiel sur la loi et le vote du budget par le Parlement, auxquels s'ajoute le contrôle de conformité par le juge." },
          { q: "Quel est le risque principal de ce régime ?", r: "Le blocage institutionnel, lorsque le président et la majorité parlementaire sont d'un bord opposé." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le chef de l'État détient ici la totalité du pouvoir", suite: "exécutif" },
          { debut: "Le refus de promulguer une loi est le", suite: "veto" },
          { debut: "Un mandat qui va jusqu'à son terme est un mandat", suite: "fixe" },
          { debut: "L'impossibilité de renverser l'autre organe définit la séparation", suite: "stricte" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 80 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le régime semi-présidentiel",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "décrire le fonctionnement du régime semi-présidentiel",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce qu'un régime présidentiel ?", "Un régime où le président détient tout l'exécutif et où la séparation est stricte."],
        ["Qu'est-ce qu'un régime parlementaire ?", "Un régime où le gouvernement est responsable devant le Parlement."],
      ],
      mise: [
        "Peut-on avoir à la fois un président fort et un gouvernement responsable devant les députés ?",
        "Oui : c'est précisément le régime semi-présidentiel, où l'exécutif a deux têtes.",
      ],
      observation: "le schéma du régime semi-présidentiel",
      observationSupport: "Schéma du régime semi-présidentiel affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce qu'un régime semi-présidentiel ?", "Un régime où un président élu partage l'exécutif avec un Premier ministre et un gouvernement responsables devant le Parlement."],
        ["Pourquoi parle-t-on d'exécutif à deux têtes ?", "Parce que deux autorités exercent le pouvoir exécutif : le président et le chef du gouvernement."],
        ["Qui nomme le Premier ministre ?", "Le président, qui doit toutefois choisir une personnalité capable de réunir le soutien du Parlement."],
        ["Que se passe-t-il en cas de désaccord ?", "Le Parlement peut censurer le gouvernement, tandis que le président peut, selon les constitutions, dissoudre l'assemblée."],
        ["Qu'est-ce que la cohabitation ?", "La situation où le président et la majorité parlementaire appartiennent à des bords opposés : le gouvernement doit composer avec les deux."],
        ["Comment le régime fonctionne-t-il en temps normal ?", "Quand le président dispose d'une majorité, il oriente la politique ; le gouvernement l'applique."],
        ["Quel est l'avantage du système ?", "Il combine la légitimité d'un chef élu et le contrôle parlementaire du gouvernement."],
        ["Quel est son risque ?", "La confusion des responsabilités lorsque les deux têtes de l'exécutif ne s'accordent pas."],
      ],
      synthese: "Donc, le régime semi-présidentiel associe un président élu et un gouvernement responsable devant le Parlement. L'équilibre dépend de l'accord entre les deux têtes de l'exécutif ; en cas de désaccord, la cohabitation impose une négociation permanente.",
      motsCles: ["régime semi-présidentiel", "exécutif à deux têtes", "Premier ministre", "cohabitation", "dissolution", "motion de censure", "nomination", "équilibre"],
      image: { file: "t12_u6_semi_presidentiel.png", legende: "Figure 70 — Le régime semi-présidentiel : un exécutif à deux têtes." },
      contenu: [
        {
          sousTitre: "1. Deux autorités pour un même exécutif",
          texte: "Le pouvoir exécutif est partagé.",
          liste: [
            "Le président, élu, définit les orientations et arbitre.",
            "Le Premier ministre et son gouvernement conduisent l'action quotidienne.",
            "Le gouvernement doit disposer du soutien du Parlement pour durer.",
          ],
        },
        {
          sousTitre: "2. La nomination et la confiance",
          texte: "Les deux légitimités se rencontrent au moment de la nomination.",
          liste: [
            "Le président choisit le chef du gouvernement.",
            "Celui-ci doit pouvoir réunir une majorité à l'assemblée.",
            "Sinon, la censure ou le blocage rend la nomination impossible à tenir.",
          ],
        },
        {
          sousTitre: "3. La cohabitation",
          texte: "Le cas de figure qui met le régime à l'épreuve.",
          liste: [
            "Le président et la majorité parlementaire sont de bords opposés.",
            "Le gouvernement doit composer avec les deux autorités.",
            "La période exige une négociation permanente et claire.",
          ],
        },
        {
          sousTitre: "4. Avantage et risque",
          texte: "Le bilan est celui d'un compromis institutionnel.",
          liste: [
            "Avantage : légitimité du chef élu et contrôle parlementaire réunis.",
            "Risque : confusion des responsabilités si les deux têtes s'opposent.",
            "Le bon fonctionnement suppose un accord minimal entre elles.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans un régime semi-présidentiel, l'exécutif est composé…", opts: ["du président et du gouvernement", "du seul président", "du seul Parlement"], ok: 0, expl: "Deux têtes exercent le pouvoir." },
          { q: "Qui nomme le Premier ministre ?", opts: ["le président", "le Parlement", "le juge"], ok: 0, expl: "Il choisit, sous contrainte de majorité." },
          { q: "La cohabitation désigne…", opts: ["un président et une majorité de bords opposés", "un gouvernement sans président", "une dissolution automatique"], ok: 0, expl: "Les deux autorités doivent composer." },
          { q: "Le gouvernement est responsable devant…", opts: ["le Parlement", "le président seul", "les électeurs directement"], ok: 0, expl: "Il peut être censuré." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le président peut nommer un Premier ministre sans tenir compte du Parlement.", rep: false, expl: "Il doit choisir une personnalité capable de réunir une majorité." },
          { txt: "La cohabitation impose une négociation permanente.", rep: true, expl: "Les deux têtes sont de bords opposés." },
          { txt: "Le régime semi-présidentiel combine légitimité présidentielle et contrôle parlementaire.", rep: true, expl: "C'est son intérêt principal." },
          { txt: "Le gouvernement ne peut jamais être censuré dans ce régime.", rep: false, expl: "La responsabilité devant le Parlement subsiste." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis le régime semi-présidentiel.", r: "C'est un régime où un président élu partage l'exécutif avec un Premier ministre et un gouvernement responsables devant le Parlement." },
          { q: "Pourquoi parle-t-on d'exécutif à deux têtes ?", r: "Parce que le président et le chef du gouvernement exercent ensemble le pouvoir exécutif, le premier orientant et le second conduisant l'action quotidienne." },
          { q: "Qu'est-ce que la cohabitation ?", r: "C'est la situation où le président et la majorité parlementaire sont de bords opposés, obligeant le gouvernement à composer avec les deux." },
          { q: "Quel est le risque propre à ce régime ?", r: "La confusion des responsabilités lorsque les deux têtes de l'exécutif ne s'accordent pas." },
        ]},
        { type: "appariement", consigne: "Relie chaque élément au régime correspondant.", pointsPar: 1, items: [
          { g: ["Gouvernement responsable devant le Parlement", "Aucun organe ne peut en renverser un autre", "Exécutif partagé entre président et Premier ministre", "Veto présidentiel sur la loi", "Cohabitation possible"], d: ["Semi-présidentiel", "Présidentiel", "Parlementaire", "Présidentiel", "Semi-présidentiel"], pairs: [[0, 2], [1, 1], [2, 0], [3, 3], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 81 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le scrutin majoritaire",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "différencier les modes de scrutin et expliquer l'effet du scrutin majoritaire",
      supportMeta: "Schémas, documents, cahier, calculatrice",
      revision: [
        ["Qu'est-ce qu'un régime politique ?", "La manière dont le pouvoir est organisé, réparti et exercé dans un État."],
        ["Qu'est-ce que la séparation des pouvoirs ?", "Le principe qui confie les fonctions législative, exécutive et judiciaire à des organes distincts."],
      ],
      mise: [
        "Avec 42 % des voix, un candidat peut-il emporter le siège ?",
        "Oui, au scrutin majoritaire : celui qui arrive en tête l'emporte, même sans majorité absolue.",
      ],
      observation: "le tableau du scrutin majoritaire",
      observationSupport: "Tableau du scrutin majoritaire affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce qu'un mode de scrutin ?", "La règle qui transforme les suffrages exprimés en sièges remportés."],
        ["Qu'est-ce que le scrutin majoritaire ?", "Un mode de scrutin où le candidat ou la liste arrivé en tête remporte le siège ou les sièges à pourvoir."],
        ["Qu'est-ce que la majorité absolue ?", "Plus de la moitié des suffrages exprimés : plus de 50 %."],
        ["Qu'est-ce que la majorité relative ?", "Le plus grand nombre de suffrages, sans dépasser nécessairement la moitié."],
        ["Quelle différence entre un tour et deux tours ?", "À un tour, la majorité relative suffit ; à deux tours, il faut la majorité absolue au premier tour, sinon un second tour départage."],
        ["Qui se présente au second tour ?", "Les candidats arrivés en tête, selon le seuil fixé par la règle électorale."],
        ["Quel effet produit ce scrutin ?", "Il favorise les grandes formations et dégage généralement une majorité claire."],
        ["Quelle est sa limite ?", "Il sous-représente les petits partis : un courant important peut n'obtenir aucun siège."],
      ],
      synthese: "Donc, le scrutin majoritaire donne le siège à celui qui arrive en tête, en un ou deux tours. Il dégage des majorités claires et favorise les grandes formations, mais il sous-représente les courants minoritaires, dont une part des voix ne se traduit par aucun élu.",
      motsCles: ["mode de scrutin", "scrutin majoritaire", "majorité absolue", "majorité relative", "second tour", "circonscription", "sous-représentation", "majorité claire"],
      image: { file: "t12_u6_majoritaire.png", legende: "Figure 71 — Le scrutin majoritaire : la logique du vainqueur." },
      contenu: [
        {
          sousTitre: "1. Le principe",
          texte: "Le vainqueur emporte la mise.",
          liste: [
            "Le territoire est découpé en circonscriptions.",
            "Dans chacune, un ou plusieurs sièges sont à pourvoir.",
            "Le candidat ou la liste arrivé en tête les remporte.",
          ],
        },
        {
          sousTitre: "2. Un tour ou deux tours",
          texte: "Deux variantes, deux logiques différentes.",
          liste: [
            "Un tour : la majorité relative suffit — 42 % peuvent emporter le siège.",
            "Deux tours : la majorité absolue est exigée au premier tour.",
            "Sinon, un second tour oppose les candidats arrivés en tête.",
          ],
        },
        {
          sousTitre: "3. L'effet sur la représentation",
          texte: "Le mode de scrutin façonne le résultat autant que le vote.",
          liste: [
            "Les grandes formations sont avantagées : elles arrivent en tête dans beaucoup de circonscriptions.",
            "Les petits partis sont pénalisés : leurs voix, dispersées, ne donnent aucun siège.",
            "La majorité obtenue est généralement nette et stable.",
          ],
        },
        {
          sousTitre: "4. Les conséquences politiques",
          texte: "Le scrutin oriente la vie politique elle-même.",
          liste: [
            "Il incite au rassemblement entre les deux tours.",
            "Il favorise le bipartisme et les alliances électorales.",
            "Il rend plus difficile l'entrée de formations nouvelles.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La majorité absolue correspond à…", opts: ["plus de la moitié des suffrages", "le plus grand nombre de voix", "la totalité des voix"], ok: 0, expl: "Il faut dépasser 50 %." },
          { q: "Au scrutin majoritaire à un tour…", opts: ["la majorité relative suffit", "il faut la majorité absolue", "personne n'est élu"], ok: 0, expl: "Le premier l'emporte." },
          { q: "Ce scrutin favorise surtout…", opts: ["les grandes formations", "les petits partis", "les abstentionnistes"], ok: 0, expl: "Elles arrivent en tête plus souvent." },
          { q: "Sa limite principale est…", opts: ["la sous-représentation des petits partis", "l'excès de députés", "l'absence de dépouillement"], ok: 0, expl: "Des voix nombreuses peuvent ne rien donner." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Au scrutin majoritaire, 42 % des voix peuvent suffire à être élu.", rep: true, expl: "La majorité relative suffit à un tour." },
          { txt: "Le scrutin majoritaire favorise l'entrée de nouveaux petits partis.", rep: false, expl: "Il les pénalise au contraire." },
          { txt: "Le scrutin majoritaire dégage généralement une majorité claire.", rep: true, expl: "C'est son avantage principal." },
          { txt: "Un second tour a lieu même si un candidat obtient la majorité absolue au premier.", rep: false, expl: "Il est élu dès le premier tour." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un mode de scrutin ?", r: "C'est la règle qui transforme les suffrages exprimés en sièges remportés." },
          { q: "Quelle différence entre majorité absolue et majorité relative ?", r: "La majorité absolue dépasse la moitié des suffrages ; la majorité relative est seulement le plus grand nombre de voix obtenu." },
          { q: "Quelle différence entre scrutin à un tour et à deux tours ?", r: "À un tour, la majorité relative suffit ; à deux tours, il faut la majorité absolue au premier tour, sinon un second tour départage les candidats arrivés en tête." },
          { q: "Cite un avantage et une limite du scrutin majoritaire.", r: "Avantage : il dégage une majorité claire et stable. Limite : il sous-représente les petits partis, dont les voix peuvent ne donner aucun siège." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le candidat arrivé en tête sans dépasser 50 % obtient la majorité", suite: "relative" },
          { debut: "Dépasser la moitié des suffrages est la majorité", suite: "absolue" },
          { debut: "La circonscription où l'on vote est la", suite: "circonscription" },
          { debut: "Le fait de ne pas avoir d'élu malgré des voix nombreuses est la sous-", suite: "représentation" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 82 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le scrutin proportionnel",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "expliquer le scrutin proportionnel et la répartition des sièges",
      supportMeta: "Schémas, documents, cahier, calculatrice",
      revision: [
        ["Qu'est-ce qu'un mode de scrutin ?", "La règle qui transforme les suffrages exprimés en sièges."],
        ["Quelle différence entre scrutin à un tour et à deux tours ?", "À un tour la majorité relative suffit ; à deux tours il faut l'absolue au premier, sinon un second tour départage."],
      ],
      mise: [
        "Faut-il qu'un parti obtienne 50 % des voix pour avoir des députés ?",
        "Non, à la proportionnelle : 10 % des voix donnent environ 10 % des sièges.",
      ],
      observation: "le tableau du scrutin proportionnel",
      observationSupport: "Tableau du scrutin proportionnel affiché ou distribué",
      technAna: "Lecture de tableau et calcul dirigé",
      qa: [
        ["Qu'est-ce que le scrutin proportionnel ?", "Un mode de scrutin qui répartit les sièges entre les listes à proportion des suffrages obtenus."],
        ["Comment calcule-t-on le quotient électoral ?", "On divise le total des suffrages exprimés par le nombre de sièges à pourvoir."],
        ["Comment attribue-t-on les sièges ?", "Chaque liste obtient autant de sièges que le quotient est contenu de fois dans son score."],
        ["Que fait-on des sièges restants ?", "On les attribue selon la règle retenue : au plus fort reste ou à la plus forte moyenne."],
        ["Qu'est-ce que le seuil ?", "Un pourcentage minimal en dessous duquel une liste n'obtient aucun siège."],
        ["Quel effet produit ce scrutin ?", "Il assure une représentation fidèle des courants d'opinion."],
        ["Quelle est sa limite ?", "Il fragmente l'assemblée et rend la majorité souvent incertaine : il faut composer des coalitions."],
        ["Dans quel type de circonscription s'applique-t-il ?", "Généralement dans une circonscription unique ou de grande taille, où plusieurs sièges sont à pourvoir."],
      ],
      synthese: "Donc, le scrutin proportionnel répartit les sièges à proportion des suffrages obtenus, à partir du quotient électoral et d'une règle d'attribution des restes. Il assure une représentation fidèle des courants d'opinion, mais fragmente l'assemblée et rend les majorités incertaines.",
      motsCles: ["scrutin proportionnel", "quotient électoral", "plus fort reste", "plus forte moyenne", "seuil", "coalition", "représentation fidèle", "fragmentation"],
      image: { file: "t12_u6_proportionnel.png", legende: "Figure 72 — Le scrutin proportionnel : la logique de la représentation." },
      contenu: [
        {
          sousTitre: "1. Le principe",
          texte: "Chaque courant d'opinion obtient une part des sièges voisine de son poids réel.",
          liste: [
            "Les listes se présentent dans une circonscription où plusieurs sièges sont à pourvoir.",
            "Les voix sont totalisées par liste, non par candidat isolé.",
            "Les sièges sont répartis à proportion des suffrages.",
          ],
        },
        {
          sousTitre: "2. Le calcul de la répartition",
          texte: "La mécanique comporte deux temps.",
          liste: [
            "Quotient électoral = total des suffrages ÷ nombre de sièges.",
            "Chaque liste reçoit autant de sièges que le quotient est contenu de fois dans son score.",
            "Les sièges non pourvus vont au plus fort reste ou à la plus forte moyenne, selon la règle.",
          ],
        },
        {
          sousTitre: "3. L'effet sur la représentation",
          texte: "Le bénéfice est la fidélité au vote.",
          liste: [
            "Un courant à 20 % obtient environ un cinquième des sièges.",
            "Les minorités sont présentes dans l'assemblée.",
            "Aucun courant important n'est réduit à néant.",
          ],
        },
        {
          sousTitre: "4. La limite : la fragmentation",
          texte: "La fidélité se paie en stabilité.",
          liste: [
            "Aucune formation ne dispose seule de la majorité.",
            "Il faut constituer des coalitions, parfois fragiles.",
            "Les gouvernements peuvent se succéder plus vite.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le quotient électoral s'obtient en divisant…", opts: ["les suffrages par le nombre de sièges", "les sièges par les suffrages", "les voix par deux"], ok: 0, expl: "Il mesure le coût d'un siège en voix." },
          { q: "Le scrutin proportionnel assure…", opts: ["une représentation fidèle", "une majorité automatique", "un seul parti élu"], ok: 0, expl: "Chaque courant obtient sa part." },
          { q: "Sa limite principale est…", opts: ["la fragmentation de l'assemblée", "l'absence de dépouillement", "le refus des électeurs"], ok: 0, expl: "Aucune majorité ne se dégage seule." },
          { q: "Un seuil est…", opts: ["un pourcentage minimal pour obtenir des sièges", "le nombre de députés", "le nombre de tours"], ok: 0, expl: "En dessous, la liste n'a rien." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "À la proportionnelle, une liste à 10 % peut obtenir environ 10 % des sièges.", rep: true, expl: "C'est le principe même." },
          { txt: "Ce scrutin dégage presque toujours une majorité absolue.", rep: false, expl: "Il faut généralement composer une coalition." },
          { txt: "Les sièges restants peuvent être attribués au plus fort reste.", rep: true, expl: "C'est l'une des deux règles courantes." },
          { txt: "La proportionnelle s'applique surtout dans les petites circonscriptions à un siège.", rep: false, expl: "Elle suppose plusieurs sièges à répartir." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que le scrutin proportionnel ?", r: "C'est un mode de scrutin qui répartit les sièges entre les listes à proportion des suffrages obtenus." },
          { q: "Comment calcule-t-on le quotient électoral ?", r: "On divise le total des suffrages exprimés par le nombre de sièges à pourvoir." },
          { q: "Cite les deux règles d'attribution des sièges restants.", r: "La règle du plus fort reste et celle de la plus forte moyenne." },
          { q: "Cite un avantage et une limite de ce scrutin.", r: "Avantage : une représentation fidèle des courants d'opinion. Limite : la fragmentation de l'assemblée et la nécessité de coalitions." },
        ]},
        { type: "appariement", consigne: "Relie chaque notion à sa définition.", pointsPar: 1, items: [
          { g: ["Suffrages divisés par le nombre de sièges", "Règle attribuant les sièges non pourvus", "Pourcentage minimal pour être élu", "Accord entre plusieurs partis pour gouverner", "Part des sièges proche du poids réel"], d: ["Seuil", "Coalition", "Quotient électoral", "Représentation fidèle", "Plus fort reste"], pairs: [[0, 2], [1, 4], [2, 0], [3, 1], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 83 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le scrutin mixte et l'effet des modes de scrutin",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "présenter le scrutin mixte et comparer les effets des modes de scrutin",
      supportMeta: "Tableaux, documents, cahier",
      revision: [
        ["Qu'est-ce que le scrutin proportionnel ?", "Un mode de scrutin qui répartit les sièges à proportion des suffrages."],
        ["Cite un avantage et une limite du scrutin majoritaire.", "Majorité claire ; sous-représentation des petits partis."],
      ],
      mise: [
        "Peut-on obtenir à la fois une majorité solide et une assemblée représentative ?",
        "On peut s'en approcher avec un scrutin mixte, qui combine les deux logiques.",
      ],
      observation: "le tableau comparatif des modes de scrutin",
      observationSupport: "Tableau comparatif affiché ou distribué",
      technAna: "Lecture de tableau et débat dirigé",
      qa: [
        ["Qu'est-ce qu'un scrutin mixte ?", "Un mode de scrutin qui attribue une partie des sièges au vote majoritaire et l'autre à la proportionnelle."],
        ["Quelle est la variante dite parallèle ?", "Les deux modes sont appliqués séparément, chacun sur une part des sièges."],
        ["Quelle est la variante à compensation ?", "Les sièges proportionnels corrigent les écarts produits par le vote majoritaire, pour se rapprocher du poids réel des forces."],
        ["Quel est l'intérêt du système ?", "Chercher un compromis : une majorité utilisable et une représentation plus juste."],
        ["Quelle est sa limite ?", "La complexité : l'électeur comprend moins bien la règle et le dépouillement est plus lourd."],
        ["Comment le mode de scrutin agit-il sur le résultat ?", "Il amplifie ou réduit l'écart entre le poids des voix et le nombre de sièges obtenus."],
        ["Pourquoi dit-on qu'il façonne la vie politique ?", "Parce qu'il oriente le nombre de partis et la manière dont ils s'allient."],
        ["Que faut-il retenir ?", "Le choix du mode de scrutin façonne le résultat de l'élection autant que le vote lui-même."],
      ],
      synthese: "Donc, le scrutin mixte combine une part de sièges au majoritaire et une part à la proportionnelle, avec ou sans compensation. Le mode de scrutin retenu amplifie ou corrige l'écart entre les voix obtenues et les sièges remportés : il façonne le résultat de l'élection autant que le vote lui-même.",
      motsCles: ["scrutin mixte", "système parallèle", "compensation", "majorité", "représentation", "complexité", "effet du scrutin", "alliances"],
      image: { file: "t12_u6_mixte.png", legende: "Figure 73 — Le scrutin mixte et l'effet des modes de scrutin." },
      contenu: [
        {
          sousTitre: "1. Le scrutin mixte",
          texte: "Il emprunte aux deux logiques étudiées.",
          liste: [
            "Une part des sièges est attribuée au scrutin majoritaire.",
            "L'autre part l'est à la proportionnelle.",
            "Objectif : concilier stabilité et représentation.",
          ],
        },
        {
          sousTitre: "2. Les deux variantes",
          texte: "La différence porte sur le rôle de la part proportionnelle.",
          liste: [
            "Système parallèle : les deux parts sont distribuées indépendamment.",
            "Système à compensation : la part proportionnelle corrige les écarts du vote majoritaire.",
            "La compensation rapproche la composition de l'assemblée du poids réel des forces.",
          ],
        },
        {
          sousTitre: "3. Les effets comparés des trois modes",
          texte: "Un tableau résume la comparaison.",
          liste: [
            "Majoritaire : majorité claire, mais sous-représentation.",
            "Proportionnel : représentation fidèle, mais majorité fragmentée.",
            "Mixte : compromis entre les deux, au prix d'une plus grande complexité.",
          ],
        },
        {
          sousTitre: "4. Ce qu'il faut retenir",
          texte: "Le scrutin n'est pas un détail technique.",
          liste: [
            "Il décide qui siège et avec quelle force.",
            "Il oriente le nombre de partis et leurs alliances.",
            "Un même vote peut produire des assemblées très différentes selon la règle retenue.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un scrutin mixte attribue les sièges…", opts: ["au majoritaire et à la proportionnelle", "au seul majoritaire", "au seul proportionnel"], ok: 0, expl: "Il combine les deux." },
          { q: "Un système à compensation…", opts: ["corrige les écarts du vote majoritaire", "supprime la proportionnelle", "double le nombre de tours"], ok: 0, expl: "Il rapproche l'assemblée du poids réel." },
          { q: "La limite du scrutin mixte est…", opts: ["sa complexité", "l'absence de dépouillement", "le refus de voter"], ok: 0, expl: "La règle est plus difficile à suivre." },
          { q: "Le mode de scrutin influe sur…", opts: ["le nombre de sièges obtenus à voix égales", "le nombre d'électeurs", "la météo"], ok: 0, expl: "Il transforme les voix en sièges." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le scrutin mixte cherche un compromis entre stabilité et représentation.", rep: true, expl: "C'est sa raison d'être." },
          { txt: "Un même vote donne toujours la même assemblée, quel que soit le mode de scrutin.", rep: false, expl: "La règle change la répartition des sièges." },
          { txt: "Le système parallèle applique les deux modes indépendamment.", rep: true, expl: "Chacun sur sa part de sièges." },
          { txt: "La compensation vise à accentuer les écarts du vote majoritaire.", rep: false, expl: "Elle les corrige au contraire." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'un scrutin mixte ?", r: "C'est un mode de scrutin qui attribue une partie des sièges au vote majoritaire et l'autre à la proportionnelle." },
          { q: "Quelle différence entre système parallèle et système à compensation ?", r: "Le système parallèle applique les deux modes indépendamment ; le système à compensation utilise la part proportionnelle pour corriger les écarts du vote majoritaire." },
          { q: "Cite l'effet principal de chacun des trois modes de scrutin.", r: "Majoritaire : une majorité claire. Proportionnel : une représentation fidèle. Mixte : un compromis entre les deux." },
          { q: "Pourquoi dit-on que le mode de scrutin façonne le résultat ?", r: "Parce qu'il transforme les voix en sièges selon une règle qui amplifie ou corrige les écarts : un même vote peut donner des assemblées très différentes." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Un scrutin qui combine majoritaire et proportionnelle est un scrutin", suite: "mixte" },
          { debut: "La variante qui corrige les écarts est la", suite: "compensation" },
          { debut: "Un scrutin qui dégage une majorité nette est le scrutin", suite: "majoritaire" },
          { debut: "Un scrutin qui assure une représentation fidèle est le scrutin", suite: "proportionnel" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 84 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Les formes de démocratie : directe, représentative, semi-directe",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "distinguer les formes de démocratie",
      supportMeta: "Documents, schémas, cahier",
      revision: [
        ["Qu'est-ce qu'un régime démocratique ?", "Un régime où le pouvoir procède du peuple et s'exerce par des représentants élus."],
        ["Qu'est-ce qu'un mode de scrutin ?", "La règle qui transforme les suffrages exprimés en sièges."],
      ],
      mise: [
        "Faut-il choisir entre voter soi-même chaque loi et élire des représentants ?",
        "Les sociétés modernes combinent les deux : la démocratie représentative domine, la démocratie directe et semi-directe la complètent.",
      ],
      observation: "la scène des trois formes de démocratie",
      observationSupport: "Illustration des formes de démocratie et documents d'accompagnement",
      technAna: "Observation dirigée et lecture de documents",
      qa: [
        ["Qu'est-ce que la démocratie directe ?", "Une forme de démocratie où les citoyens décident eux-mêmes, sans intermédiaire, en se réunissant et en votant les décisions."],
        ["Où cette forme est-elle praticable ?", "Dans de petites collectivités, où chacun peut être réuni et informé : assemblée de village, conseil d'école."],
        ["Qu'est-ce que la démocratie représentative ?", "Une forme où les citoyens élisent des représentants qui décident en leur nom pendant la durée du mandat."],
        ["Pourquoi cette forme s'est-elle imposée ?", "Parce que la taille des sociétés modernes rend la réunion permanente de tous les citoyens impossible."],
        ["Qu'est-ce que la démocratie semi-directe ?", "Un système représentatif où le peuple peut intervenir directement dans certains cas : référendum, initiative populaire, révocation."],
        ["Qu'est-ce qu'un référendum ?", "Un vote par lequel les citoyens se prononcent directement sur un texte ou une question, par oui ou par non."],
        ["Qu'est-ce qu'une initiative populaire ?", "La possibilité pour des citoyens, en nombre suffisant, de proposer un texte ou une question soumis au vote."],
        ["Ces formes s'excluent-elles ?", "Non : elles se combinent, la représentation assurant la décision continue et les procédures directes l'intervention ponctuelle."],
      ],
      synthese: "Donc, la démocratie prend trois formes : directe, où le peuple décide lui-même ; représentative, où il élit des représentants ; semi-directe, où les deux se combinent par le référendum et l'initiative populaire. Les sociétés modernes reposent sur la représentation, complétée par des procédures d'intervention directe.",
      motsCles: ["démocratie directe", "démocratie représentative", "démocratie semi-directe", "référendum", "initiative populaire", "mandat", "révocation", "suffrage universel"],
      image: { file: "t12_u6_democratie.jpg", legende: "Figure 74 — Les formes de démocratie." },
      contenu: [
        {
          sousTitre: "1. La démocratie directe",
          texte: "Le peuple décide sans intermédiaire.",
          liste: [
            "Les citoyens se réunissent et votent les décisions eux-mêmes.",
            "Elle suppose une collectivité restreinte et des questions simples.",
            "Exemples : assemblée de village, conseil d'établissement.",
          ],
        },
        {
          sousTitre: "2. La démocratie représentative",
          texte: "Le peuple désigne ceux qui décideront à sa place.",
          liste: [
            "Les représentants sont élus pour une durée déterminée.",
            "Ils délibèrent, votent la loi et contrôlent l'exécutif.",
            "Ils sont responsables devant les électeurs, qui peuvent ne pas les reconduire.",
          ],
        },
        {
          sousTitre: "3. La démocratie semi-directe",
          texte: "La représentation est complétée par des interventions du peuple.",
          liste: [
            "Le référendum soumet un texte ou une question au vote direct.",
            "L'initiative populaire permet à des citoyens de proposer un texte.",
            "La révocation permet, dans certains systèmes, de mettre fin au mandat d'un élu.",
          ],
        },
        {
          sousTitre: "4. La combinaison des formes",
          texte: "Les démocraties contemporaines ne choisissent pas une forme unique.",
          liste: [
            "La représentation assure la continuité de la décision publique.",
            "Les procédures directes permettent d'arbitrer une question majeure.",
            "L'équilibre entre les deux varie selon les pays et les époques.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Dans la démocratie directe, la décision est prise par…", opts: ["les citoyens eux-mêmes", "les députés", "les juges"], ok: 0, expl: "Aucun intermédiaire ne décide." },
          { q: "La démocratie représentative repose sur…", opts: ["l'élection de représentants", "le tirage au sort des lois", "l'absence de vote"], ok: 0, expl: "Les élus décident pendant leur mandat." },
          { q: "Un référendum est…", opts: ["un vote direct des citoyens sur une question", "une élection de députés", "un recours en justice"], ok: 0, expl: "On répond par oui ou par non." },
          { q: "L'initiative populaire permet à des citoyens de…", opts: ["proposer un texte soumis au vote", "révoquer un juge", "dissoudre l'assemblée"], ok: 0, expl: "En nombre suffisant de signatures." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La démocratie directe est praticable dans de très grandes populations.", rep: false, expl: "Elle suppose des collectivités restreintes." },
          { txt: "Les représentants sont responsables devant les électeurs.", rep: true, expl: "Ils peuvent ne pas être reconduits." },
          { txt: "Le référendum est une procédure de démocratie semi-directe.", rep: true, expl: "Il complète la représentation." },
          { txt: "Les formes de démocratie s'excluent mutuellement.", rep: false, expl: "Elles se combinent dans les systèmes contemporains." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la démocratie directe et dis où elle est praticable.", r: "C'est une forme où les citoyens décident eux-mêmes, sans intermédiaire ; elle suppose des collectivités restreintes, comme une assemblée de village." },
          { q: "Définis la démocratie représentative.", r: "C'est une forme où les citoyens élisent des représentants qui décident en leur nom pendant la durée du mandat." },
          { q: "Qu'est-ce que la démocratie semi-directe ?", r: "C'est un système représentatif où le peuple peut intervenir directement, notamment par le référendum et l'initiative populaire." },
          { q: "Qu'est-ce qu'une initiative populaire ?", r: "C'est la possibilité pour des citoyens, en nombre suffisant, de proposer un texte ou une question soumis au vote." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation à la forme de démocratie correspondante.", pointsPar: 1, items: [
          { g: ["Une assemblée de village vote à main levée", "Les citoyens élisent des députés", "Un texte est soumis au vote par oui ou par non", "Des habitants réunissent des signatures pour proposer une règle", "Les élus délibèrent pendant leur mandat"], d: ["Démocratie semi-directe", "Démocratie représentative", "Démocratie directe", "Démocratie représentative", "Démocratie semi-directe"], pairs: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 3]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 85 — RAS 1
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Démocratie participative et démocratie délibérative",
      theme: "Sciences politiques et droit",
      ras: "Estimer les différents régimes politiques et les formes de démocratie",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "distinguer démocratie participative et démocratie délibérative",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la démocratie représentative ?", "Une forme où les citoyens élisent des représentants qui décident en leur nom."],
        ["Qu'est-ce qu'un référendum ?", "Un vote par lequel les citoyens se prononcent directement sur un texte ou une question."],
      ],
      mise: [
        "Voter tous les cinq ans suffit-il à se sentir citoyen ?",
        "Beaucoup estiment que non : d'où les démarches participatives et délibératives, qui associent les citoyens entre deux élections.",
      ],
      observation: "le schéma des démocraties participative et délibérative",
      observationSupport: "Schéma des deux démarches affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Qu'est-ce que la démocratie participative ?", "Un ensemble de dispositifs qui associent les citoyens à la décision publique entre deux élections."],
        ["Cite trois dispositifs participatifs.", "Les consultations et référendums locaux, les budgets participatifs et les conseils de quartier."],
        ["Qu'est-ce qu'un budget participatif ?", "Une procédure où les habitants décident de l'affectation d'une part des dépenses de la collectivité."],
        ["Qu'est-ce que la démocratie délibérative ?", "Une démarche où la décision se prépare par une discussion argumentée entre citoyens, avant d'être tranchée."],
        ["Cite deux dispositifs délibératifs.", "Les jurys citoyens et les conférences de citoyens tirés au sort, ainsi que les débats publics contradictoires."],
        ["Qu'apportent ces démarches ?", "Elles rapprochent la décision de ceux qu'elle concerne et renforcent sa légitimité."],
        ["Qu'exigent-elles ?", "Du temps, une information accessible à tous et une prise en compte réelle des résultats."],
        ["Quel est le risque ?", "Si les avis recueillis sont ignorés, la participation se transforme en déception et alimente la défiance."],
      ],
      synthese: "Donc, la démocratie participative associe les citoyens à la décision entre deux élections, et la démocratie délibérative prépare la décision par la discussion argumentée. Elles complètent la démocratie représentative sans la remplacer : elles exigent du temps, une information accessible et une prise en compte réelle des avis recueillis.",
      motsCles: ["démocratie participative", "démocratie délibérative", "budget participatif", "conseil de quartier", "jury citoyen", "débat public", "légitimité", "consultation"],
      image: { file: "t12_u6_participative.png", legende: "Figure 75 — Démocratie participative et démocratie délibérative." },
      contenu: [
        {
          sousTitre: "1. La démocratie participative",
          texte: "Les citoyens ne se contentent plus de voter : ils participent.",
          liste: [
            "Consultations et référendums locaux sur un projet déterminé.",
            "Budgets participatifs : les habitants choisissent une part des dépenses.",
            "Conseils de quartier et commissions associant les habitants.",
            "But : rapprocher la décision de ceux qu'elle concerne.",
          ],
        },
        {
          sousTitre: "2. La démocratie délibérative",
          texte: "La décision se prépare par l'examen collectif des arguments.",
          liste: [
            "Jurys et conférences de citoyens, souvent tirés au sort.",
            "Débats publics contradictoires avant un projet contesté.",
            "Assemblées où l'on expose les arguments avant de trancher.",
            "But : améliorer la qualité de la décision par la discussion.",
          ],
        },
        {
          sousTitre: "3. Ce qu'elles apportent",
          texte: "Le bénéfice porte sur la légitimité et la qualité de la décision.",
          liste: [
            "Les citoyens sont associés au-delà du vote.",
            "Les points de vue minoritaires et les savoirs d'usage sont entendus.",
            "La décision finale est mieux acceptée, même par ceux qui ne l'ont pas souhaitée.",
          ],
        },
        {
          sousTitre: "4. Les conditions de réussite et le risque",
          texte: "Ces démarches ne tiennent pas à la seule réunion.",
          liste: [
            "Il faut du temps, une information accessible et compréhensible.",
            "Il faut que les résultats soient réellement pris en compte.",
            "Risque : la participation non suivie d'effets nourrit la défiance.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Un budget participatif permet aux habitants de…", opts: ["choisir une part des dépenses", "voter la loi nationale", "élire le président"], ok: 0, expl: "Ils décident de l'affectation d'une enveloppe." },
          { q: "La démocratie délibérative repose sur…", opts: ["la discussion argumentée", "le tirage au sort des lois", "l'absence de débat"], ok: 0, expl: "On examine les arguments avant de trancher." },
          { q: "Un jury citoyen est un dispositif…", opts: ["délibératif", "majoritaire", "judiciaire"], ok: 0, expl: "Il prépare l'avis par la discussion." },
          { q: "Le risque principal de ces démarches est…", opts: ["que les avis soient ignorés", "qu'il y ait trop d'élus", "que le vote disparaisse"], ok: 0, expl: "La déception nourrit la défiance." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "La démocratie participative remplace la démocratie représentative.", rep: false, expl: "Elle la complète, elle ne la remplace pas." },
          { txt: "Les savoirs d'usage des habitants peuvent améliorer une décision.", rep: true, expl: "C'est l'un des apports de la participation." },
          { txt: "Une information accessible est une condition de réussite.", rep: true, expl: "Sans elle, la délibération est fictive." },
          { txt: "Ces dispositifs ne demandent aucun temps d'organisation.", rep: false, expl: "Ils exigent au contraire beaucoup de temps." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Définis la démocratie participative et cite deux dispositifs.", r: "C'est l'ensemble des dispositifs qui associent les citoyens à la décision entre deux élections : consultations locales, budgets participatifs et conseils de quartier." },
          { q: "Définis la démocratie délibérative et cite deux dispositifs.", r: "C'est une démarche où la décision se prépare par une discussion argumentée : jurys citoyens, conférences de citoyens et débats publics contradictoires." },
          { q: "Qu'apportent ces deux démarches ?", r: "Elles rapprochent la décision de ceux qu'elle concerne, font entendre les points de vue minoritaires et renforcent la légitimité de la décision." },
          { q: "Quelles conditions conditionnent leur réussite ?", r: "Du temps, une information accessible à tous et une prise en compte réelle des avis recueillis." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les habitants décidant d'une part des dépenses pratiquent le budget", suite: "participatif" },
          { debut: "Un groupe de citoyens tirés au sort qui rend un avis est un jury", suite: "citoyen" },
          { debut: "La décision préparée par la discussion argumentée est une démocratie", suite: "délibérative" },
          { debut: "Une instance de quartier associant les habitants est un conseil de", suite: "quartier" },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 86 — RAS 2
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le droit et la protection des personnes",
      theme: "Sciences politiques et droit",
      ras: "Déterminer les rôles du Droit devant la justice",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "expliquer le rôle du droit dans la protection des personnes et distinguer les deux responsabilités",
      supportMeta: "Tableaux, documents juridiques simples, cahier",
      revision: [
        ["Qu'est-ce qu'un État de droit ?", "Un État où les gouvernants sont soumis au droit et les droits des personnes protégés."],
        ["Qu'est-ce que le pouvoir judiciaire ?", "Le pouvoir qui tranche les litiges et sanctionne les manquements à la règle."],
      ],
      mise: [
        "Un enfant est blessé par la chute d'une clôture mal fixée. Qui répond, et devant qui ?",
        "Le responsable du dommage doit le réparer devant la juridiction civile ; si une infraction est commise, la société engage en plus une action pénale.",
      ],
      observation: "le tableau comparant les deux responsabilités",
      observationSupport: "Tableau comparatif des responsabilités affiché ou distribué",
      technAna: "Lecture de tableau et étude de cas",
      qa: [
        ["Quel est le rôle du droit dans la protection des personnes ?", "Il fixe des règles qui garantissent la sécurité, la liberté et l'égalité de traitement, et il offre un recours en cas d'atteinte."],
        ["Qu'est-ce que la responsabilité civile ?", "L'obligation de réparer le dommage que l'on a causé à autrui."],
        ["Qu'est-ce que la responsabilité pénale ?", "L'obligation de répondre d'une infraction prévue par la loi, en subissant une peine."],
        ["Qui engage l'action civile ?", "La victime, qui demande réparation du préjudice subi."],
        ["Qui engage l'action pénale ?", "La société, représentée par le ministère public, au nom de l'ordre public."],
        ["Quelles sanctions distingue-t-on ?", "En matière civile, des dommages et intérêts ; en matière pénale, une peine : amende, prison ou travail d'intérêt général."],
        ["Les deux responsabilités peuvent-elles se cumuler ?", "Oui : un même fait peut donner lieu à une peine et à des dommages et intérêts."],
        ["Comment défendre ses droits devant la justice ?", "En saisissant la juridiction compétente, en apportant la preuve du fait et du préjudice, et en respectant les délais de recours."],
      ],
      synthese: "Donc, le droit protège la personne en fixant des règles et en offrant un recours. La responsabilité civile répare le dommage subi par la victime, la responsabilité pénale punit l'auteur d'une infraction au nom de la société. Un même fait peut engager les deux.",
      motsCles: ["droit", "protection des personnes", "responsabilité civile", "responsabilité pénale", "dommages et intérêts", "peine", "juridiction", "recours"],
      image: { file: "t12_u6_responsabilites.png", legende: "Figure 76 — Responsabilité civile et responsabilité pénale." },
      contenu: [
        {
          sousTitre: "1. Le rôle du droit",
          texte: "Le droit protège en prévenant et en réparant.",
          liste: [
            "Il fixe les règles de conduite et les droits de chacun.",
            "Il garantit la sécurité des personnes et des biens.",
            "Il offre une voie de recours quand un droit est méconnu.",
          ],
        },
        {
          sousTitre: "2. La responsabilité civile : réparer",
          texte: "Elle remet la victime dans la situation antérieure, autant que possible.",
          liste: [
            "Elle suppose un dommage, une faute ou un risque, et un lien entre les deux.",
            "La victime engage elle-même l'action.",
            "La sanction est pécuniaire : des dommages et intérêts.",
          ],
        },
        {
          sousTitre: "3. La responsabilité pénale : punir",
          texte: "Elle répond à une atteinte à l'ordre public.",
          liste: [
            "Elle suppose une infraction prévue par la loi.",
            "L'action est engagée au nom de la société par le ministère public.",
            "La sanction est une peine : amende, emprisonnement, travail d'intérêt général.",
          ],
        },
        {
          sousTitre: "4. Défendre ses droits",
          texte: "Encore faut-il pouvoir faire valoir la règle.",
          liste: [
            "Saisir la juridiction compétente : civile ou pénale selon le cas.",
            "Apporter la preuve : faits, documents, témoignages.",
            "Respecter les délais de recours, sous peine de perdre l'action.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "La responsabilité civile a pour objet de…", opts: ["réparer le dommage", "punir l'auteur", "dissoudre l'entreprise"], ok: 0, expl: "Elle indemnise la victime." },
          { q: "L'action pénale est engagée par…", opts: ["la société", "la victime seule", "le voisin"], ok: 0, expl: "Elle est exercée au nom de l'ordre public." },
          { q: "Une peine de prison relève de la responsabilité…", opts: ["pénale", "civile", "administrative"], ok: 0, expl: "C'est une sanction pénale." },
          { q: "Des dommages et intérêts relèvent de la responsabilité…", opts: ["civile", "pénale", "politique"], ok: 0, expl: "Ils réparent le préjudice." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Un même fait peut engager à la fois une responsabilité civile et une responsabilité pénale.", rep: true, expl: "Réparation et peine ne s'excluent pas." },
          { txt: "La victime ne peut jamais agir elle-même en justice.", rep: false, expl: "Elle engage l'action civile." },
          { txt: "Le respect des délais est indifférent pour agir.", rep: false, expl: "Les délais de recours sont opposables." },
          { txt: "Le droit offre une voie de recours en cas d'atteinte à un droit.", rep: true, expl: "C'est sa fonction protectrice." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel est le rôle du droit dans la protection des personnes ?", r: "Il fixe des règles qui garantissent sécurité, liberté et égalité de traitement, et il offre une voie de recours en cas d'atteinte." },
          { q: "Quelle différence entre responsabilité civile et responsabilité pénale ?", r: "La civile oblige à réparer le dommage causé à autrui ; la pénale oblige à répondre d'une infraction en subissant une peine." },
          { q: "Qui engage l'action dans chacun des deux cas ?", r: "La victime engage l'action civile ; la société, par le ministère public, engage l'action pénale." },
          { q: "Cite deux conditions pour faire valoir ses droits devant la justice.", r: "Saisir la juridiction compétente et apporter la preuve du fait et du préjudice, en respectant les délais de recours." },
        ]},
        { type: "appariement", consigne: "Relie chaque situation au type de responsabilité.", pointsPar: 1, items: [
          { g: ["Un voisin indemnise la clôture tombée", "Un conducteur condamné à une amende", "Un auteur verse des dommages à sa victime", "Une peine de travail d'intérêt général", "Un litige entre deux commerçants"], d: ["Responsabilité pénale", "Responsabilité civile", "Responsabilité pénale", "Responsabilité civile", "Responsabilité civile"], pairs: [[0, 1], [1, 0], [2, 1], [3, 2], [4, 4]] },
        ]},
      ],
    },

    // ---------------------------------------------------------
    // SÉANCE 87 — RAS 3
    // ---------------------------------------------------------
    {
      type: "cours",
      titre: "Le droit face à l'activité économique",
      theme: "Sciences politiques et droit",
      ras: "Déterminer les rôles du Droit face à l'activité économique",
      valeurs: "Citoyen libre et responsable, Justice et solidarité",
      objectif: "analyser le rôle du droit dans le fonctionnement de l'économie",
      supportMeta: "Schémas, documents, cahier",
      revision: [
        ["Qu'est-ce que la responsabilité civile ?", "L'obligation de réparer le dommage causé à autrui."],
        ["Qu'est-ce qu'une entreprise privée ?", "Une organisation qui produit pour vendre et dont le capital est privé."],
      ],
      mise: [
        "Deux commerçants signent un contrat, l'un ne livre pas. Sans droit, que se passe-t-il ?",
        "La confiance disparaît : sans règle exécutoire, l'échange se limite au cercle des connaissances et l'activité se réduit.",
      ],
      observation: "le schéma des rôles du droit dans l'économie",
      observationSupport: "Schéma des rôles du droit affiché ou distribué",
      technAna: "Lecture de schéma et débat dirigé",
      qa: [
        ["Pourquoi l'économie a-t-elle besoin du droit ?", "Parce que l'échange suppose que la parole donnée soit tenue : le droit rend le contrat exécutoire et le litige prévisible."],
        ["Comment le droit sécurise-t-il les échanges ?", "Par le contrat, la propriété et le crédit : chacun sait ce qu'il peut exiger et ce qu'il risque."],
        ["Comment règle-t-il la concurrence ?", "En interdisant les ententes, les abus de position dominante et les pratiques commerciales trompeuses."],
        ["Comment protège-t-il les agents économiques ?", "En protégeant le consommateur, le salarié et l'environnement, que le marché ne protège pas spontanément."],
        ["Quel rôle joue le recours au juge ?", "Il permet de trancher le litige et de faire exécuter la décision, ce qui rend la sanction effective."],
        ["Le droit remplace-t-il le marché ?", "Non : il lui donne un cadre, sans se substituer à la décision d'entreprendre."],
        ["Quelle est la limite d'un droit trop lourd ?", "Des procédures longues et coûteuses découragent l'activité et l'investissement."],
        ["Que retenir ?", "Sans droit, pas de marché durable : la règle est la condition de la confiance, donc de l'échange."],
      ],
      synthese: "Donc, le droit garantit le bon fonctionnement de l'économie : il sécurise les échanges, règle la concurrence, protège les agents économiques et offre un recours effectif. Il ne remplace pas l'activité économique, il lui donne le cadre sans lequel la confiance, donc l'échange, ne peut s'établir.",
      motsCles: ["droit et économie", "contrat", "propriété", "concurrence", "consommateur", "salarié", "recours", "sécurité juridique"],
      image: { file: "t12_u6_droit_economie.png", legende: "Figure 77 — Les rôles du Droit face à l'activité économique." },
      contenu: [
        {
          sousTitre: "1. Sécuriser les échanges",
          texte: "La confiance est la matière première du marché.",
          liste: [
            "Le contrat engagé doit être exécuté : la règle le rend exigible.",
            "La propriété et les titres sont garantis : on peut vendre, louer, hypothéquer.",
            "Le crédit est possible parce que la dette est recouvrable.",
          ],
        },
        {
          sousTitre: "2. Régler la concurrence",
          texte: "Le marché ne reste ouvert que s'il est encadré.",
          liste: [
            "Interdiction des ententes sur les prix et du partage des marchés.",
            "Sanction des abus de position dominante.",
            "Lutte contre les pratiques commerciales trompeuses.",
          ],
        },
        {
          sousTitre: "3. Protéger les agents économiques",
          texte: "Certains intérêts ne sont pas défendus par le seul jeu des prix.",
          liste: [
            "Le consommateur : information loyale, sécurité des produits, clauses abusives écartées.",
            "Le salarié : durée du travail, rémunération, conditions de sécurité.",
            "L'environnement : normes et responsabilité en cas de dommage.",
          ],
        },
        {
          sousTitre: "4. Offrir un recours et mesurer la limite",
          texte: "La règle ne vaut que si elle est appliquée.",
          liste: [
            "Le juge tranche le litige et fait exécuter la décision.",
            "Un droit trop lourd allonge les délais et renchérit l'activité.",
            "L'équilibre recherché : une règle claire, appliquée, et des recours rapides.",
          ],
        },
      ],
      appExos: [
        { type: "qcm", consigne: "Choisis la bonne réponse.", pointsPar: 1, items: [
          { q: "Le droit sécurise l'économie en rendant…", opts: ["le contrat exécutoire", "les prix fixes", "les bénéfices garantis"], ok: 0, expl: "La parole donnée devient exigible." },
          { q: "Une entente sur les prix est…", opts: ["interdite", "encouragée", "sans effet"], ok: 0, expl: "Elle fausse la concurrence." },
          { q: "Le droit protège le consommateur contre…", opts: ["les clauses abusives", "la publicité informative", "la concurrence loyale"], ok: 0, expl: "Il encadre la relation commerciale." },
          { q: "La limite d'un droit trop lourd est…", opts: ["la lenteur et le coût des procédures", "l'excès de concurrence", "la baisse des prix"], ok: 0, expl: "L'activité est découragée." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Sans règle exécutoire, la confiance nécessaire à l'échange disparaît.", rep: true, expl: "Le droit rend la promesse exigible." },
          { txt: "Le droit se substitue à la décision d'entreprendre.", rep: false, expl: "Il donne un cadre, il n'entreprend pas." },
          { txt: "Les salariés sont protégés par des règles que le marché ne fixe pas seul.", rep: true, expl: "Durée du travail, sécurité, rémunération." },
          { txt: "Le juge n'a aucun rôle dans les litiges économiques.", rep: false, expl: "Il tranche et fait exécuter la décision." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Pourquoi l'économie a-t-elle besoin du droit ?", r: "Parce que l'échange suppose que la parole donnée soit tenue : le droit rend le contrat exécutoire et le litige prévisible." },
          { q: "Cite trois manières dont le droit intervient dans l'économie.", r: "Il sécurise les échanges, il règle la concurrence et il protège les agents économiques." },
          { q: "Quels agents le droit protège-t-il ?", r: "Le consommateur, le salarié et l'environnement, dont les intérêts ne sont pas défendus par le seul jeu des prix." },
          { q: "Quelle est la limite d'un droit trop lourd ?", r: "Des procédures longues et coûteuses découragent l'activité et l'investissement : il faut une règle claire et des recours rapides." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La convention obligatoire entre deux parties est le", suite: "contrat" },
          { debut: "Le fait d'empêcher les ententes sur les prix relève du droit de la", suite: "concurrence" },
          { debut: "L'acheteur final protégé par la règle est le", suite: "consommateur" },
          { debut: "La certitude que la règle sera appliquée est la sécurité", suite: "juridique" },
        ]},
      ],
    },
  ],
};

module.exports = U;
