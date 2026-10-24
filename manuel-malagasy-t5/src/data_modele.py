# -*- coding: utf-8 -*-
"""FICHE MODÈLE V2 — Vakiteny, lohahevitra 1 — écrase en malgache **vérifié**.

Règle appliquée à la lettre : ici, aucun énoncé n'est écrit de mémoire. Chaque phrase est soit

* **voalaza avokoa** (recopiée telle quelle) — page `Rano` de l'édition malgaise de l'encyclopédie
  (`sources_web/full/mgwiki_rano.txt`, collée en entier après les corrigés) —,
* soit **prête le cadre d'une phrase du PE T5** (`refs/PE_T5_malagasy_p9-26.txt`, § Vakiteny, p.14-18 :
  `Mialohan'ny vakiteny / Mandritra ny vakiteny / Aorian'ny vakiteny`, `Tetika amam-paika`,
  `Mari-piatoana : teboka, baraingo, tsoraka, faingo…`), l'objet seul change quand il le faut ;
* soit **mety** : modèle attesté ailleurs dans le corpus (`manasa tanana`, `toerana banga`).

Ce qui n'a pas de preuve n'apparaît pas : ni `sabonina` (0 page — `savony`), ni `fandroavana`
(`fanadiovana`), ni `veroso` (0 page — le PE dit `hisafidy` → `Safidio`), ni `manasa nify`.
Les attestations sont dans `fianarana-malagasy/CARNET.md`, les rejets dans `LISTE-ROUGE.md`.

Ordre de la fiche : LESONA → FANAZARAN-TENA + VALINY → LOHARANON-KEVITRA → TAKELA-PANOMANAN-DESONA.
"""

FICHE_VAKITENY = {
    "n": 1, "zt": "Vakiteny (vakiteny miaina sy fahazoan-dahatsoratra)",
    "lh": "1. Ny fitandroana ny fahasalamana",
    "lt": "Ny rano, iankinan'ny aina", "ns": 2, "du": (5, 20, 5),
    "dv": "PE 5e, FRP 5e",
    "so": ["mgwiki_rano", "jica_vakiteny", "ohab_fahasalamana"],
    "tj": "hamantatra sy hanamarina ny hevi-dehibe raketin'ny lahatsoratra momba ny rano, ary hampiasa "
          "ireo voambolana vaovao ao anaty fehezanteny",

    # ---- I. Famerenana
    "fa": [
        ("Inona no ilaina isan'andro ho an'ny vatan'ny olombelona ?",
         "Ny rano sy ny sakafo, satria ny rano dia sakafo mahavelona sy iankinan'ny aina."),
        ("Inona no atao ny rano vao sotroina ?",
         "Tsara raha ampangotrahina ny rano, na ampiana fanafody."),
        ("Inona no mety ho azo amin'ny rano maloto ?",
         "Mety ho azo amin'ny fisotroana rano maloto ny aretina : ny kolera, ny bilarziozy, ny tefoedra."),
        ("Iza no mila manasa tanana ?", "Ny rehetra, alohan'ny mihinana ary aorian'izay koa."),
    ],
    "obs1": "Ny efa fantatra no averina eto; ny lahatsoratra dia tsy mbola nosokajiana.",

    # ---- II.1 Tari-dresaka : la consigne du PE elle-même (Mialohan'ny vakiteny)
    "si": "Fanontaniana : Rehefa ny lohateny dia hoe « Ny rano, iankinan'ny aina », inona no mety ho "
          "votoatin'ny lahatsoratra ? V.A. : Misy ifandraisany ny rano sy ny fahasalamana, satria "
          "iankinan'ny aina ny rano.",
    "fit1": "Solaitrabe",

    # ---- II.2 Fanolorana : formule figée, jamais modifiée
    "fo": "Androany isika dia hianatra lesona vaovao hoe : « Ny rano, iankinan'ny aina ». Aorian'ity seho "
          "ity ianareo dia ho afaka hamantatra ny hevi-dehibe raketin'ny lahatsoratra, ary hanazava ny "
          "hevitr'ireo voambolana vaovao na sarotra.",

    # ---- II.3 Fandinihana : les trois verbes du PE, à l'infinitif, sans réponse encore
    "di": ["Handinika ny lohateny sy ny mari-piatoana hita ao amin'ny lahatsoratra.",
           "Hilaza ny heviny momba ny lohateny.",
           "Haminavina ny mety ho votoatin'ny lahatsoratra."],
    "fit": "Lahatsoratra voasoratra eo amin'ny tabilao",
    "obsg": "Fihainoana sy fijery ihany eto; ny vinavina dia hamarinina amin'ny Famakafakana.",

    # ---- II.4 Famakafakana : chaque réponse se lit dans le texte
    "ka": [
        ("Inona no atao hoe rano araka ny lahatsoratra ?",
         "Ny rano dia akora iankinan'ny aina eto an-tany."),
        ("Rano ve ny vatan'ny olombelona ?",
         "Ny 3/4 ny vatan'ny olombelona dia rano avokoa."),
        ("Inona no mila atao isan'andro ?",
         "Mila misotro rano isan'andro isika mba hikolokoloana an'io."),
        ("Inona no mety mitondra ny rano maloto ?",
         "Mety mitondra mikiraoba isan-karazany izy, ka ahiana hahatonga aretina."),
        ("Inona no fepetra ho an'ny rano sotroina ?",
         "Tsara raha ampangotrahina ny rano vao sotroina, na farafaharatsiny ampiana fanafody."),
        ("Ahoana ny fizaran-drano eny an-tanimbary ?",
         "Na miady aza ny tompon'ny tanimbary mifanao ambony sy ambany dia mahay mifanaraka foana amin'ny "
         "fizaran-drano."),
        ("Misy ifandraisany ve ny lahatsoratra sy ny fiainana andavanandro ?",
         "Misy: ny fanasana ny tanana sy ny fisotroana rano madio dia fepetra fototra isan'andro."),
    ],
    "tec": "Fanontaniana arahim-baliny / Fifanakalozan-kevitra / Adihevitra",

    # ---- II.5 Fandravonana (le build ajoute « Koa, »)
    "sy": "ny rano dia sakafo mahavelona sy iankinan'ny aina, satria ny 3/4 ny vatan'ny olombelona dia "
          "rano avokoa, ka mila misotro rano isan'andro isika mba hikolokoloana an'io. Manan-danja be "
          "amin'ny fiarahamonina koa ny rano, satria izay manana fahefana amin'ny rano no manana fahefana "
          "amin'ny rehetra.",

    # ---- III. Tombana : questions-réponses simples
    "to": [
        ("Inona no lohatenin'ny lahatsoratra nosokajiana ?", "« Ny rano, iankinan'ny aina »."),
        ("Inona no ilaina isan'andro ?", "Ny rano madio sotroina."),
        ("Inona no atao rehefa maloto ny rano ?",
         "Tsara raha ampangotrahina, na ampiana fanafody."),
        ("Inona no mari-piatoana faran'ny fehezanteny filazana ?", "Ny teboka."),
    ],

    # ---- la leçon : trois phrases recopiées de la page, une construite sur le même cadre
    "le": [
        ("h", "Lahatsoratra : « Ny rano, iankinan'ny aina »"),
        ("l", "Ny rano dia akora iankinan'ny aina eto an-tany. Ny 3/4 ny vatan'ny olombelona dia rano "
              "avokoa. Ary mila misotro rano isan'andro isika mba hikolokoloana an'io. Ankoatra ny maha rano "
              "azy dia mbola mety mitondra karazana sira mineraly izay ilain'ny vatana koa izy izay levona "
              "ao anatiny."),
        ("l", "Kanefa mila fitandremana betsaka ny rano sotroina satria mety mitondra mikiraoba "
              "isan-karazany ahiana hahatonga aretina. Anisan'ny aretina mety ho azo amin'ny fisotroana rano "
              "maloto ny kolera, ny bilarziozy, ny tefoedra sns. Tsara raha ampangotrahina ny rano vao "
              "sotroina, na farafaharatsiny ampiana fanafody tahaka ny Sur'Eau."),
        ("l", "Mety ho azo amin'ny tanana maloto ny aretina, toy ny fisotroana rano maloto. Koa ny "
              "fanasana ny tanana amin'ny savony sy rano madio, alohan'ny mihinana ary aorian'izay, dia "
              "fepetra fototra ho an'ny fahasalamana."),
        ("l", "Manan-danja be amin'ny aina ny rano hany ka manan-danja amin'ny fiarahamonina koa. Iza no "
              "manana fahefana amin'ny rano ? Izay manana fahefana amin'ny rano no manana fahefana amin'ny "
              "rehetra. Ny rano madio dia fahasalamana ; ny fahasalamana dia ambony lavitra noho ny "
              "fananan-karena."),
        ("h", "Firafitry ny fehezanteny hita ao amin'ny lahatsoratra"),
        ("x", ["Ny rano dia akora iankinan'ny aina : entimilaza + **dia** + lazaina (tso-drafitra).",
               "Izay manana fahefana amin'ny rano no manana fahefana amin'ny rehetra : **izay … no …** "
               "(mivadi-drafitra), ilay lazaina no natsangana.",
               "Tsara raha ampangotrahina ny rano : **tsara raha** + matoanteny amin'ny -ina, ny "
               "torohevitra momba ny fahasalamana.",
               "Manan-danja be amin'ny aina ny rano hany ka manan-danja … koa : **hany ka** no "
               "mampifandray ny toetra sy ny voka-dratsiny."]),
        ("h", "Ohatra diso sy ny fanitsiana"),
        ("x", ["Diso : Ny 3/4 ny vatan'ny olombelona rano. — Marina : Ny 3/4 ny vatan'ny olombelona **dia** "
               "rano avokoa. (tsy nisy ny teny « dia » nananjara ny entimilaza sy ny lazaina)",
               "Diso : Ny rano dia akora iankinan'ny aina — Marina : Ny rano dia akora iankinan'ny aina. "
               "(tsy nisy teboka ny faran'ny fehezanteny)",
               "Diso : Mila misotro rano isika mba hikolokoloana. — Marina : Mila misotro rano isika mba "
               "hikolokoloana **an'io**. (tsy voalaza ny zavatra kolokoloana)"]),
        ("h", "Ny teny vaovao"),
        ("p", "Ireo voambolana vaovao na sarotra tao amin'ny lahatsoratra : **iankinan'ny aina** : ny akora "
              "ilaina mba hanana aina, toy ny sakafo mahavelona ; **hikolokoloana** : ny hitahiry azy "
              "ho an'ny aina ; **mikiraoba** : ny zavatra kely tsy hita maso ao amin'ny rano maloto, "
              "mety hahatonga aretina ; **ampangotra** : ny rano natao ho mafana amin'ny afo vao "
              "sotroina ; **isan'andro** : isaky ny andro ; **fizaran-drano** : ny fomba fizarana ny rano "
              "eny an-tanimbary."),
    ],

    # ---- fampahalalana fanampiny
    "cu": [
        "Ny fehezanteny voalaza etsy ambony dia misy ao amin'ny pejy « Rano » (Wikipedia malagasy) : "
        "Etsy ambanin'ny VALINY no pejy manontolo azo hijerena, ka tsy misy nesorina na novana tao.",
        "Ny **savony** dia « siran'ny asidra matavy … ampiasaina amin'ny fanadiovana sy fandamana » "
        "(Wikipedia malagasy, « Savony ») ; ny **lavenona** kosa dia « azo asolo savony » (Wikipedia "
        "malagasy, « Lavenona »).",
        "Fiiziana ara-kolontsaina : hisintona ny hafatra na ny fahendrena malagasy fonosin'ny lahatsoratra, "
        "dia hilaza ny fisehon'izany eo amin'ny fiainana andavanandro.",
    ],
    "re": [
        "Ny rano dia akora iankinan'ny aina eto an-tany : ny 3/4 ny vatan'ny olombelona dia rano avokoa.",
        "Mila misotro rano isan'andro isika mba hikolokoloana an'io.",
        "Tsara raha ampangotrahina ny rano vao sotroina, na ampiana fanafody.",
        "Ny fanasana ny tanana amin'ny savony sy rano madio dia fepetra fototra ho an'ny fahasalamana.",
    ],

    # ---- fampiharana : consignes prises du PE et du vocabulaire attesté
    "fp": [
        {"c": "Ampiasao ny mari-piatoana mety : teboka (.), baraingo (?), tsoraka (!).",
         "i": ["1) Ny rano dia akora iankinan'ny aina",
               "2) Inona no atao ny rano vao sotroina",
               "3) Mazoto ny rehetra manasa tanana alohan'ny mihinana",
               "4) Rano ve ny vatan'ny olombelona"],
         "v": ["1) teboka", "2) baraingo", "3) tsoraka", "4) baraingo"]},
        {"c": "Safidio ny teny mety ho an'ny toerana banga, dia soraty eo : iankinan'ny aina, isan'andro, "
              "ampangotrahina, fizaran-drano.",
         "i": ["1) Ny rano dia akora ………… eto an-tany.",
               "2) Mila misotro rano ………… isika mba hikolokoloana an'io.",
               "3) Tsara raha ………… ny rano vao sotroina.",
               "4) Eny an-tanimbary dia mahay mifanaraka foana amin'ny ………… ny mpamboly."],
         "v": ["1) **iankinan'ny aina**", "2) **isan'andro**", "3) **ampangotrahina**",
               "4) **fizaran-drano**"]},
    ],

    # ---- fanazaran-tena : une consigne par exercice, le VALINY juste après
    "fe": [
        {"c": "Safidio valiny mety.", "p": 4,
         "i": ["1) Ny rano dia …", "a) akora iankinan'ny aina", "b) sakafo ho an'ny biby ihany",
               "d) zavatra tsy ilaina amin'ny vatana", "e) akora tsy mba levona",
               "2) Ny 3/4 ny vatan'ny olombelona dia …", "a) hazo", "b) rano avokoa", "d) savony",
               "e) tany",
               "3) Mety mitondra mikiraoba ny rano …", "a) madio", "b) mangatsiaka", "d) maloto",
               "e) mafana",
               "4) Ny « hany ka » dia ampiasaina hanambara …", "a) ny voka-dratsy", "b) ny fanontaniana",
               "d) ny isa", "e) ny lohateny"],
         "v": ["1) **a)**", "2) **b)**", "3) **d)**", "4) **a)**"]},
        {"c": "Soraty ny fehezanteny manaraka ireto toetra ireto, mampiasa ny « dia » na ny « hany ka ».",
         "i": ["1) ny rano madio / ilaina isan'andro",
               "2) ny tanimbary ambony sy ambany / mifanaraka amin'ny fizaran-drano",
               "3) ny fanadiovana / ny fahasalamana", "4) ny biby sy ny zavamaniry / mila rano koa"],
         "v": ["1) Ohatra : Ny rano madio dia ilaina isan'andro.",
               "2) Ohatra : Ny tanimbary ambony sy ambany dia mahay mifanaraka foana amin'ny "
               "fizaran-drano.",
               "3) Ohatra : Manan-danja be ny fanadiovana, hany ka mitahiry fahasalamana ny olona "
               "mazoto.",
               "4) Ohatra : Ny biby sy ny zavamaniry dia mila rano koa."]},
        {"c": "Hilaza ny hevi-dehibe raketin'ny lahatsoratra : inona no voalaza amin'ireto andalana ireto ?",
         "i": ["1) Ny andalana voalohany", "2) Ny andalana faharoa", "3) Ny andalana fahatelo",
               "4) Ny andalana fahefatra"],
         "v": ["1) Ny maha-iankinan'ny aina ny rano.",
               "2) Ny tsy fahampian'ny rano maloto ho an'ny fahasalamana.",
               "3) Ny ifandraisan'ny tanana maloto sy ny aretina.",
               "4) Ny lanjan'ny rano eo amin'ny fiarahamonina."]},
    ],
}

SEANCES = [FICHE_VAKITENY]
