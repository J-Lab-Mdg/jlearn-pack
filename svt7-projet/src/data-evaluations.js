// ============================================================
// Révisions et examens — SVT T7 (5e)
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Santé et bien-être",
    tableau: [
      ["L'appareil digestif", "Tube digestif (bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus) + glandes digestives."],
      ["Rôles", "Broyer, transporter, transformer, absorber, évacuer."],
      ["Transformations", "Mécaniques (dents, brassage) et chimiques (salive, sucs, enzymes)."],
      ["Devenir des aliments", "Substances simples absorbées → sang ; déchets évacués par l'anus."],
      ["Santé digestive", "Bien mâcher, repas réguliers, eau propre, consulter en cas de douleur."],
    ],
    questions: [
      ["Quels organes forment le tube digestif ?", "La bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle, le gros intestin et l'anus."],
      ["Quel est le rôle des glandes digestives ?", "Elles produisent des sucs qui transforment les aliments."],
      ["Dans quel organe se termine la digestion des aliments ?", "Dans l'intestin grêle."],
      ["Que deviennent les substances simples ?", "Elles sont absorbées dans le sang."],
    ],
  },
  II: {
    titre: "Révision — Unité II : Reproduction humaine",
    tableau: [
      ["Puberté", "Période où le corps devient capable de se reproduire."],
      ["Gonades", "Testicules (spermatozoïdes) et ovaires (ovules)."],
      ["Voies génitales", "Transport et lieu de développement (utérus)."],
      ["Cycle menstruel", "Cycle de ~28 jours ; règles = élimination de la muqueuse utérine."],
      ["Fécondation", "Rencontre spermatozoïde + ovule → cellule-œuf."],
      ["Grossesse précoce", "Risques scolaires, médicaux, familiaux, sociaux ; prévenir par information et dialogue."],
    ],
    questions: [
      ["Qu'est-ce que la puberté ?", "La période où le corps devient capable de se reproduire."],
      ["Quel organe produit les spermatozoïdes ?", "Les testicules."],
      ["Quel organe produit les ovules ?", "Les ovaires."],
      ["Pourquoi le cycle menstruel est-il important ?", "Il permet de comprendre l'origine des règles et la période de fécondité."],
    ],
  },
  III: {
    titre: "Révision — Unité III : Maladies infectieuses",
    tableau: [
      ["Microorganismes", "Bactéries, champignons, virus, parasites."],
      ["Utiles / nuisibles", "Certains sont utiles (fermentation, déchets), d'autres pathogènes."],
      ["Infection", "Entrée, multiplication, réaction du corps, défense."],
      ["Immunité", "Soi/non-soi, cellules immunitaires, anticorps."],
      ["Prévention", "Asepsie, antisepsie, antibiotiques (bactéries), vaccins, sérums."],
      ["Mesures", "Hygiène, eau propre, vaccination, assainissement, gestion des épidémies."],
    ],
    questions: [
      ["Cite les quatre groupes de microorganismes.", "Bactéries, champignons, virus, parasites."],
      ["Qu'est-ce qu'une infection microbienne ?", "La multiplication de microbes pathogènes dans le corps."],
      ["Quel est le rôle des anticorps ?", "Ils se fixent sur les microbes et aident à les neutraliser."],
      ["Quelle est la différence entre vaccin et sérum ?", "Le vaccin prépare l'immunité (longue), le sérum apporte des anticorps (courte)."],
    ],
  },
  IV: {
    titre: "Révision — Unité IV : Organisation des êtres vivants",
    tableau: [
      ["Écosystème", "Ensemble des êtres vivants et de leur milieu."],
      ["Conditions physiques", "Température, humidité, lumière, sol, altitude."],
      ["Adaptation", "Mode de vie adapté au milieu (déplacement, respiration, alimentation)."],
      ["Interactions", "Prédation, parasitisme, commensalisme, mutualisme, symbiose."],
      ["Chaîne alimentaire", "Producteurs → consommateurs → décomposeurs."],
      ["Équilibre", "La modification du milieu peut déséquilibrer l'écosystème et menacer les espèces."],
    ],
    questions: [
      ["Qu'est-ce qu'un écosystème ?", "L'ensemble des êtres vivants et de leur milieu qui interagissent."],
      ["Cite trois conditions physiques d'un milieu.", "La température, l'humidité et la lumière (ou le sol, l'altitude)."],
      ["Qu'est-ce qu'une chaîne alimentaire ?", "Une suite d'organismes où chaque être est mangé par le suivant."],
      ["Pourquoi protéger les écosystèmes ?", "Pour maintenir l'équilibre des espèces et éviter leur extinction."],
    ],
  },
  V: {
    titre: "Révision — Unité V : Géologie",
    tableau: [
      ["Structure interne", "La croûte, le manteau et le noyau."],
      ["Activités internes", "Convection, volcanisme, séismes, tectonique."],
      ["Activités externes", "Météo, érosion, lavakisation."],
      ["Volcanisme", "Éruption : lave, cendres, gaz ; forme montagnes."],
      ["Séisme", "Secousse du sol ; dégâts, risques pour les populations."],
      ["Tectonique", "Les plaques se déplacent ; collision/subduction → montagnes."],
    ],
    questions: [
      ["Quelles sont les trois couches du globe ?", "La croûte, le manteau et le noyau."],
      ["Cite une activité interne et une externe.", "Interne : volcanisme. Externe : érosion."],
      ["Comment se forme une montagne ?", "Par la collision ou la subduction des plaques."],
      ["Qu'est-ce qu'une lavaka ?", "Un ravin creusé par l'érosion, fréquent à Madagascar."],
    ],
  },
};

const examens = {
  I: {
    titre: "Sujet d'examen 5e — Unité I : Santé et bien-être",
    exercices: [
      { type: "qcm", pointsPar: 1, items: [
        { q: "L'appareil digestif commence à…", opts: ["la bouche", "estomac", "l'anus"], ok: 0 },
        { q: "L'œsophage conduit les aliments vers…", opts: ["l'estomac", "l'intestin grêle", "le pharynx"], ok: 0 },
        { q: "Le foie produit…", opts: ["la bile", "la salive", "l'urine"], ok: 0 },
        { q: "L'absorption des substances simples se fait surtout dans…", opts: ["l'intestin grêle", "l'œsophage", "l'estomac"], ok: 0 },
      ]},
      { type: "vf", pointsPar: 1, items: [
        { txt: "L'estomac est une glande digestive.", rep: false, expl: "L'estomac est un organe du tube digestif." },
        { txt: "La salive commence la digestion de l'amidon.", rep: true, expl: "Elle contient une enzyme." },
        { txt: "Les aliments sortent par l'anus.", rep: true, expl: "C'est l'ouverture finale." },
      ]},
      { type: "qr", pointsPar: 2, items: [
        { q: "Décris le trajet d'un aliment dans le tube digestif.", r: "Bouche → pharynx → œsophage → estomac → intestin grêle → gros intestin → anus." },
        { q: "Cite deux glandes digestives.", r: "Les glandes salivaires et le foie (ou le pancréas, les glandes gastriques)." },
      ]},
    ],
  },
  II: {
    titre: "Sujet d'examen 5e — Unité II : Reproduction humaine",
    exercices: [
      { type: "qcm", pointsPar: 1, items: [
        { q: "La puberté correspond à…", opts: ["la capacité du corps à se reproduire", "la fin de la croissance", "l'apparition des dents"], ok: 0 },
        { q: "Les testicules produisent…", opts: ["les spermatozoïdes", "les ovules", "l'urine"], ok: 0 },
        { q: "Les ovaires produisent…", opts: ["les ovules", "les spermatozoïdes", "le sang"], ok: 0 },
        { q: "La fécondation se produit dans…", opts: ["la trompe de Fallope", "le vagin", "l'utérus"], ok: 0 },
      ]},
      { type: "vf", pointsPar: 1, items: [
        { txt: "La puberté débute avant l'adolescence.", rep: false, expl: "Elle se produit pendant l'adolescence." },
        { txt: "Les règles correspondent à l'élimination de la muqueuse utérine.", rep: true, expl: "C'est le phénomène des règles." },
        { txt: "La grossesse précoce peut entraîner l'abandon de l'école.", rep: true, expl: "C'est une conséquence fréquente." },
      ]},
      { type: "qr", pointsPar: 2, items: [
        { q: "Quelle est la différence entre gonades et voies génitales ?", r: "Les gonades produisent les cellules reproductrices ; les voies génitales les transportent." },
        { q: "Comment déterminer la période de fécondité ?", r: "En repérant le milieu du cycle (ovulation) sur un calendrier." },
      ]},
    ],
  },
  III: {
    titre: "Sujet d'examen 5e — Unité III : Maladies infectieuses",
    exercices: [
      { type: "qcm", pointsPar: 1, items: [
        { q: "Les bactéries, champignons, virus et parasites sont…", opts: ["des microorganismes", "des minéraux", "des roches"], ok: 0 },
        { q: "Un microbe pathogène est…", opts: ["nuisible", "utile", "neutre"], ok: 0 },
        { q: "Le vaccin…", opts: ["prépare le corps à se défendre", "apporte des anticorps immédiats", "tue tous les microbes"], ok: 0 },
        { q: "Les antibiotiques agissent contre…", opts: ["les bactéries", "les virus", "les parasites"], ok: 0 },
      ]},
      { type: "vf", pointsPar: 1, items: [
        { txt: "Les virus se multiplient à l'intérieur des cellules.", rep: true, expl: "C'est leur caractéristique." },
        { txt: "Le sérum donne une protection durable.", rep: false, expl: "Il donne une protection immédiate mais courte." },
        { txt: "Le paludisme est causé par un parasite.", rep: true, expl: "C'est un parasite transmis par le moustique." },
      ]},
      { type: "qr", pointsPar: 2, items: [
        { q: "Cite deux mesures individuelles contre les maladies infectieuses.", r: "Se laver les mains et boire de l'eau propre." },
        { q: "Quel est le rôle des cellules immunitaires ?", r: "Elles attaquent et détruisent les microbes." },
      ]},
    ],
  },
  IV: {
    titre: "Sujet d'examen 5e — Unité IV : Organisation des êtres vivants",
    exercices: [
      { type: "qcm", pointsPar: 1, items: [
        { q: "Un écosystème comprend…", opts: ["les êtres vivants et leur milieu", "seulement les animaux", "seulement l'eau"], ok: 0 },
        { q: "Les producteurs sont…", opts: ["les plantes vertes", "les carnivores", "les décomposeurs"], ok: 0 },
        { q: "La relation abeille-fleur est…", opts: ["un mutualisme", "une prédation", "un parasitisme"], ok: 0 },
        { q: "La déforestation déséquilibre…", opts: ["les écosystèmes", "le noyau de la Terre", "le cycle menstruel"], ok: 0 },
      ]},
      { type: "vf", pointsPar: 1, items: [
        { txt: "La température est une condition physique d'un milieu.", rep: true, expl: "Elle détermine les espèces." },
        { txt: "Les décomposeurs sont inutiles.", rep: false, expl: "Ils recyclent la matière." },
        { txt: "La surexploitation peut conduire à l'extinction.", rep: true, expl: "Elle réduit les populations." },
      ]},
      { type: "qr", pointsPar: 2, items: [
        { q: "Donne une chaîne alimentaire de rizière.", r: "Riz → criquet → oiseau → serpent." },
        { q: "Comment protéger l'équilibre des écosystèmes ?", r: "En protégeant les forêts et en réduisant la pollution et la surexploitation." },
      ]},
    ],
  },
  V: {
    titre: "Sujet d'examen 5e — Unité V : Géologie",
    exercices: [
      { type: "qcm", pointsPar: 1, items: [
        { q: "La couche externe de la Terre est…", opts: ["la croûte", "le noyau", "le manteau"], ok: 0 },
        { q: "Le volcanisme est une activité…", opts: ["interne", "externe", "météorologique"], ok: 0 },
        { q: "Un séisme est…", opts: ["une secousse du sol", "une éruption", "une mine"], ok: 0 },
        { q: "La subduction crée…", opts: ["des montagnes", "des lacs", "des déserts"], ok: 0 },
      ]},
      { type: "vf", pointsPar: 1, items: [
        { txt: "L'érosion modifie le paysage.", rep: true, expl: "Elle détruit et transporte les roches." },
        { txt: "Une lavaka est un lac.", rep: false, expl: "C'est un ravin d'érosion." },
        { txt: "Les plaques terrestres sont immobiles.", rep: false, expl: "Elles se déplacent lentement." },
      ]},
      { type: "qr", pointsPar: 2, items: [
        { q: "Cite une conséquence du volcanisme.", r: "La formation de montagnes (ou la dégradation des terres, les risques pour les habitants)." },
        { q: "Qu'est-ce que la lavakisation ?", r: "Le creusement de ravins par l'érosion intense des sols." },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
