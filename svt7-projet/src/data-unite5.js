// ============================================================
// Unité V — Géologie : structure interne de la Terre (10 h)
// ============================================================
const U = {
  num: "V",
  titre: "Géologie",
  ras: "Analyser les modifications du paysage terrestre",
  valeurs: "Responsabilité, confiance en soi",
  topics: [
    {
      type: "cours",
      titre: "La structure interne de la Terre",
      theme: "Géologie",
      ras: "Analyser les modifications du paysage terrestre",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "déterminer la structure interne du globe terrestre",
      supportMeta: "Schéma en coupe du globe, maquette, planche pédagogique",
      revision: [
        ["Qu'est-ce qui constitue le paysage autour de nous ?", "Les montagnes, les plaines, les rivières, les forêts, les lacs."],
        ["Qu'est-ce que le globe terrestre ?", "La Terre vue comme une sphère."],
      ],
      mise: ["Que se trouve-t-il sous la surface de la Terre ?", "La Terre est formée de plusieurs couches : la croûte, le manteau et le noyau."],
      observation: "le schéma en coupe du globe",
      observationSupport: "Schéma croûte/manteau/noyau",
      technAna: "Observation guidée",
      qa: [
        ["Quelle est la couche externe de la Terre ?", "La croûte terrestre."],
        ["Que contient le manteau ?", "Des roches en partie visqueuses, souvent en mouvement lent."],
        ["Quelles sont les subdivisions du globe ?", "La croûte, le manteau et le noyau (noyau externe et noyau interne)."],
        ["Pourquoi la structure interne est-elle importante ?", "Elle explique les volcans, les séismes et la formation des montagnes."],
      ],
      synthese: "Donc, la Terre est formée de couches : la croûte (externe), le manteau (intermédiaire) et le noyau (interne). La structure interne explique les phénomènes géologiques.",
      motsCles: ["croûte", "manteau", "noyau", "globe terrestre", "structure interne"],
      contenu: [
        { sousTitre: "1. Les couches de la Terre", liste: ["La croûte : fine couche externe (continentale et océanique).", "Le manteau : couche épaisse, roches chaudes.", "Le noyau : noyau externe liquide et noyau interne solide."] },
        { sousTitre: "2. Caractéristiques", texte: "Plus on descend vers l'intérieur de la Terre, plus la température et la pression augmentent." },
        { sousTitre: "3. Importance", texte: "La structure interne explique le volcanisme, les séismes, la formation des montagnes et des fosses océaniques." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "La couche externe de la Terre est…", opts: ["la croûte", "le noyau", "le manteau"], ok: 0, expl: "La croûte est la partie externe." },
          { q: "Entre la croûte et le noyau se trouve…", opts: ["le manteau", "l'océan", "l'atmosphère"], ok: 0, expl: "Le manteau est la couche intermédiaire." },
          { q: "Le noyau se situe…", opts: ["au centre de la Terre", "à la surface", "dans l'atmosphère"], ok: 0, expl: "Le noyau est interne." },
          { q: "Plus on descend sous la surface, plus…", opts: ["la température augmente", "la température baisse", "la pression diminue"], ok: 0, expl: "La chaleur et la pression augmentent." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "La croûte est la couche la plus profonde de la Terre.", rep: false, expl: "Elle est la couche externe." },
          { txt: "Le manteau se trouve sous la croûte.", rep: true, expl: "C'est la couche intermédiaire." },
          { txt: "La structure interne de la Terre est liée aux volcans et aux séismes.", rep: true, expl: "Les mouvements internes créent ces phénomènes." },
        ]},
      ],
      evalExos: [
        { type: "completion", consigne: "Complète.", pointsPar: 1, items: [
          { debut: "Les trois couches du globe sont la croûte, le manteau et le", suite: "noyau" },
          { debut: "La couche externe de la Terre est la", suite: "croûte" },
          { debut: "Le centre de la Terre est occupé par le", suite: "noyau" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Les activités internes et externes de la Terre",
      theme: "Géologie",
      ras: "Analyser les modifications du paysage terrestre",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "identifier les activités internes et externes qui modifient le paysage",
      supportMeta: "Schémas : convection, érosion, photos",
      revision: [
        ["Quelles sont les trois couches du globe ?", "La croûte, le manteau et le noyau."],
        ["Qu'est-ce que le volcanisme ?", "Un phénomène lié aux activités internes de la Terre."],
      ],
      mise: ["Pourquoi certaines montagnes naissent-elles ou certaines rivières creusent-elles la terre ?", "Parce que la Terre subit des activités internes (mouvements) et externes (érosion, météo)."],
      observation: "les schémas des activités internes et externes",
      observationSupport: "Schémas convection et érosion",
      technAna: "Analyse de schémas",
      qa: [
        ["Qu'est-ce qu'une activité interne de la Terre ?", "Un mouvement qui vient de l'intérieur, comme la convection du manteau."],
        ["Qu'est-ce qu'une activité externe ?", "Un phénomène de surface, comme la pluie, le vent, la température, l'érosion."],
        ["Quel est le rôle de la convection ?", "Elle déplace les roches du manteau et provoque le volcanisme, les séismes et la tectonique."],
        ["Quel est le rôle des phénomènes météorologiques ?", "Ils érodent les roches et modifient lentement le paysage."],
      ],
      synthese: "Donc, le paysage terrestre est modifié par des activités internes (convection, volcanisme, séismes, tectonique) et externes (météo, érosion, eau, vent).",
      motsCles: ["activités internes", "convection", "activités externes", "érosion", "phénomènes météorologiques"],
      contenu: [
        { sousTitre: "1. Activités internes", liste: ["Mouvements de convection dans le manteau.", "Volcanisme.", "Séismes.", "Tectonique des plaques."] },
        { sousTitre: "2. Activités externes", liste: ["Pluie, eau qui coule.", "Vent.", "Variation de température.", "Érosion (destruction des roches).", "Lavakisation (creusement de ravins)."] },
        { sousTitre: "3. Conséquences", liste: ["Formation de montagnes.", "Volcans, séismes.", "Creusement de vallées et de ravins.", "Transformation progressive du paysage."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Le volcanisme est une activité…", opts: ["interne", "externe", "météorologique"], ok: 0, expl: "Il vient de l'intérieur de la Terre." },
          { q: "La pluie et le vent sont des activités…", opts: ["externes", "internes", "volcaniques"], ok: 0, expl: "Ce sont des phénomènes de surface." },
          { q: "L'érosion est responsable…", opts: ["de la destruction des roches", "de la formation du noyau", "de la production des ovules"], ok: 0, expl: "Elle modifie les roches et le paysage." },
          { q: "Les mouvements de convection se produisent…", opts: ["dans le manteau", "dans l'atmosphère", "à la croûte"], ok: 0, expl: "Ils agitent le manteau." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "Les séismes sont causés par des activités internes.", rep: true, expl: "Ils viennent des mouvements du globe." },
          { txt: "L'érosion est exclusive au volcanisme.", rep: false, expl: "Elle est souvent liée à l'eau et au vent." },
          { txt: "Les phénomènes météorologiques modifient le paysage.", rep: true, expl: "Ils érodent et transforment la surface." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds.", pointsPar: 2, items: [
          { q: "Cite une activité interne et une activité externe de la Terre.", r: "Interne : le volcanisme (ou la tectonique). Externe : l'érosion (ou la pluie)." },
          { q: "Quel est le rôle de l'érosion ?", r: "Elle détruit et transporte les roches, ce qui modifie le paysage." },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Volcanisme et séismes : manifestations et conséquences",
      theme: "Géologie",
      ras: "Analyser les modifications du paysage terrestre",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "décrire les phénomènes de volcanisme et de séisme et leurs conséquences",
      supportMeta: "Photos de volcan et de séisme, schéma de la faille",
      revision: [
        ["Cite une activité interne de la Terre.", "Le volcanisme ou la tectonique."],
        ["Cite une activité externe.", "L'érosion."],
      ],
      mise: ["Que se passe-t-il quand un volcan est en éruption ?", "De la lave, des cendres et des gaz sortent de l'intérieur de la Terre, modifiant le paysage."],
      observation: "les photos de volcan et de séisme, le schéma de la faille",
      observationSupport: "Photos volcan, séisme + schéma faille",
      technAna: "Observation et questionnement",
      qa: [
        ["Qu'est-ce qu'un volcan ?", "Une ouverture de la croûte par laquelle le magma, les cendres et les gaz sortent du sous-sol."],
        ["Quelles sont les manifestations d'un séisme ?", "Vibration du sol, fissures, destruction des bâtiments, parfois tsunamis."],
        ["Quelles sont les conséquences du volcanisme ?", "Formation de montagnes, de nouvelles terres, mais aussi destructions et risques."],
        ["Pourquoi les séismes sont-ils dangereux ?", "Parce qu'ils provoquent des dégâts aux constructions et peuvent faire des victimes."],
      ],
      synthese: "Donc, le volcanisme (éruption de magma, cendres, gaz) et les séismes (secousses du sol) sont des manifestations rapides des activités internes, avec des conséquences importantes pour le paysage et les habitants.",
      motsCles: ["volcanisme", "magma", "cendres", "séisme", "épicentre"],
      contenu: [
        { sousTitre: "1. Le volcanisme", liste: ["Le magma monte vers la surface.", "Il sort par le cratère (lave, cendres, gaz).", "Il forme des cônes volcaniques et des montagnes.", "Il peut être effusif (lave fluide) ou explosif."] },
        { sousTitre: "2. Le séisme", texte: "Un séisme est une secousse du sol provoquée par la libération d'énergie le long d'une faille ou par les mouvements des plaques." },
        { sousTitre: "3. Conséquences", liste: ["Modification du relief.", "Destruction de bâtiments.", "Risques pour les populations.", "Possibilité de tsunami dans les zones côtières."] },
        { sousTitre: "4. Prévention", liste: ["Construction adaptée.", "Information et exercice d'évacuation.", "Respect des consignes de sécurité."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Le magma qui sort d'un volcan forme…", opts: ["la lave", "la neige", "le sable"], ok: 0, expl: "La lave est du magma en surface." },
          { q: "Un séisme est…", opts: ["une secousse du sol", "une pluie de cendres", "une éruption de lave"], ok: 0, expl: "C'est un tremblement du sol." },
          { q: "Les volcans peuvent créer…", opts: ["des montagnes", "des lacs de glace", "des villes seulement"], ok: 0, expl: "Ils construisent des reliefs." },
          { q: "Pour se protéger d'un séisme, il faut…", opts: ["suivre les consignes de sécurité", "rester au pied d'un bâtiment", "courir vers la mer"], ok: 0, expl: "Il faut se mettre à l'abri selon les consignes." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "Le volcanisme est un phénomène rapide de modification du paysage.", rep: true, expl: "Il peut transformer le relief vite." },
          { txt: "Les séismes sont causés par le volcanisme seulement.", rep: false, expl: "Ils sont causés par les mouvements des plaques et les failles." },
          { txt: "Les cendres volcaniques peuvent gêner les populations.", rep: true, expl: "Elles recouvrent le sol et peuvent nuire à la santé." },
        ]},
      ],
      evalExos: [
        { type: "completion", consigne: "Complète.", pointsPar: 1, items: [
          { debut: "La matière fondue qui sort d'un volcan s'appelle", suite: "magma" },
          { debut: "Un tremblement de terre est appelé", suite: "séisme" },
          { debut: "Pour prévenir les risques d'un séisme, on doit respecter les", suite: "consignes de sécurité" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Tectonique des plaques, montagnes, érosion et lavakisation",
      theme: "Géologie",
      ras: "Analyser les modifications du paysage terrestre",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "relier les mouvements des plaques aux formations paysagères et à l'érosion",
      supportMeta: "Schémas de plaques, montagnes, érosion, lavaka",
      revision: [
        ["Qu'est-ce qu'un séisme ?", "Une secousse du sol provoquée par les mouvements internes de la Terre."],
        ["Qu'est-ce que la lave ?", "Le magma qui sort d'un volcan."],
      ],
      mise: ["Pourquoi y a-t-il des montagnes et des ravins à Madagascar ?", "À cause de la tectonique des plaques, du volcanisme et de l'érosion."],
      observation: "les schémas de plaques et d'érosion",
      observationSupport: "Schémas plaques, montagnes, lavaka",
      technAna: "Analyse de schémas",
      qa: [
        ["Qu'est-ce que la tectonique des plaques ?", "Le mouvement des plaques rigides de la croûte à la surface du globe."],
        ["Comment se forment les montagnes ?", "Par la collision ou la subduction des plaques."],
        ["Qu'est-ce que la subduction ?", "Une plaque plonge sous une autre, formant des montagnes ou une fosse."],
        ["Qu'est-ce qu'une lavaka ?", "Un ravin creusé par l'érosion dans les sols, fréquent à Madagascar."],
      ],
      synthese: "Donc, la tectonique des plaques (subduction, collision) forme les montagnes, et l'érosion (eau, vent) creuse le paysage en créant des ravins, comme les lavakas.",
      motsCles: ["tectonique", "plaques", "subduction", "collision", "lavakisation"],
      contenu: [
        { sousTitre: "1. La tectonique des plaques", texte: "La croûte terrestre est découpée en plaques qui bougent lentement. Leurs mouvements provoquent des montagnes, des volcans et des séismes." },
        { sousTitre: "2. Les mouvements des plaques", liste: ["Divergence : les plaques s'écartent (formation de dorsales).", "Convergence : les plaques se rapprochent.", "Subduction : une plaque plonge sous l'autre.", "Collision : les plaques se heurtent (montagnes)."] },
        { sousTitre: "3. L'érosion et la lavakisation", texte: "L'eau de pluie et le vent attaquent les sols et les roches. À Madagascar, l'érosion intense peut creuser des ravins appelés lavakas." },
        { sousTitre: "4. Conséquences", liste: ["Formation de montagnes.", "Creusement de vallées.", "Formation de lavakas et de ravins.", "Transformation du paysage au cours de la longue durée."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Le mouvement des plaques crée…", opts: ["des montagnes", "des rivières", "des nuages"], ok: 0, expl: "Les collisions et subductions créent les montagnes." },
          { q: "La subduction est…", opts: ["une plaque qui plonge sous une autre", "un glacier", "une rivière"], ok: 0, expl: "C'est une convergence particulière." },
          { q: "Un lavaka est…", opts: ["un ravin d'érosion", "un volcan", "une roche"], ok: 0, expl: "C'est un ravin creusé par l'érosion." },
          { q: "L'érosion est principalement due à…", opts: ["l'eau et au vent", "au noyau", "au cycle menstruel"], ok: 0, expl: "Elle résulte des actions externes." },
        ]},
        { type: "vf", consigne: "Vrai ou faux ?", pointsPar: 1, items: [
          { txt: "Les montagnes peuvent se former par collision des plaques.", rep: true, expl: "C'est le cas de l'Himalaya par exemple." },
          { txt: "Les lavakas sont créés par l'érosion.", rep: true, expl: "Ce sont des ravins d'érosion." },
          { txt: "Les plaques terrestres sont immobiles.", rep: false, expl: "Elles se déplacent lentement." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds.", pointsPar: 2, items: [
          { q: "Explique comment une montagne se forme.", r: "Les plaques se rencontrent et se compriment (collision ou subduction), ce qui soulève le relief et forme une montagne." },
          { q: "Qu'est-ce que la lavakisation ?", r: "C'est le creusement de ravins par l'érosion intense des sols, fréquent à Madagascar." },
        ]},
      ],
    },
  ],
};
module.exports = U;
