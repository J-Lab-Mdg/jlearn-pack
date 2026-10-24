# -*- coding: utf-8 -*-
"""FICHE MODÈLE récréée (V2) — Vakiteny, lohahevitra 1, en malgache vérifié.

Différence avec les fiches 1 à 5 : ici, chaque tournure a été **lue** dans un texte malgache avant d'être
écrite. Les attestations sont consignées dans `fianarana-malagasy/CARNET.md` ; ce qu'on ne trouve pas n'est
pas écrit (c'est pourquoi il n'est pas question de se brosser les dents dans cette fiche : `manasa nify` =
0 occurrence dans le corpus, et `sabonina` aussi — le mot est `savony`).

Lecture principale : page « Rano » de l'édition malgache de l'encyclopédie, collée en entier dans
`sources_web/full/mgwiki_rano.txt` et imprimée après les corrigés.

Ordre de la fiche : LESONA d'abord, puis FANAZARAN-TENA + VALINY, puis LOHARANON-KEVITRA, puis
TAKELA-PANOMANAN-DESONA (build_modele.py + seance_lesona_aloha).
"""

FICHE_VAKITENY = {
    "n": 1, "zt": "Vakiteny (vakiteny miaina sy fahazoan-dahatsoratra)",
    "lh": "1. Ny fitandroana ny fahasalamana",
    "lt": "Ny rano, iankinan'ny aina", "ns": 2, "du": (5, 20, 5),
    "dv": "PE 5e, FRP 5e",
    "so": ["mgwiki_rano", "jica_vakiteny", "ohab_fahasalamana"],
    "tj": "hahazo ny hevi-dehibe ao amin'ny lahatsoratra momba ny rano, ary hamaly ny fanontaniana "
          "amin'ny teny fenony, araka ny firafitry ny fehezanteny",

    # ---- I. Famerenana : on réveille ce qu'ils savent déjà, sur des tournures lues
    "fa": [
        ("Inona no ilaina indrindra mba hivelomana eto an-tany ?",
         "Ny rano, satria akora iankinan'ny aina izy."),
        ("Inona no atao ny rano vao sotroina ?",
         "Tsara raha ampangotrahina ny rano, na ampiana fanafody."),
        ("Inona no mety hitranga raha misotro rano maloto isika ?",
         "Mety ho azo amin'izay ny aretina, toy ny kôlerà na ny tefoedra."),
        ("Iza no mila manasa tanana ?", "Ny rehetra, alohan'ny mihinana ary aorian'izay koa."),
    ],
    "obs1": "Ny efa fantatra no averina eto, fa tsy ny lahatsoratra vaovao.",

    # ---- II.1 Tari-dresaka
    "si": "Fanontaniana : Raha tsy misy rano madio eto amin'ny tokantranonao, inona no atao ? "
          "V.A. : Mitady loharano hafa, na ampangotrahina ny rano hita, ary mifanaraka amin'ny "
          "fizaran-drano.",
    "fit1": "Solaitrabe",

    # ---- II.2 Fanolorana : la formule d'annonce, jamais modifiée
    "fo": "Androany isika dia hianatra lesona vaovao hoe : « Ny rano, iankinan'ny aina ». Aorian'ity "
          "seho ity ianareo dia ho afaka hamaly ny fanontaniana momba ny lahatsoratra amin'ny teny "
          "fenony, ary hampiasa ny teny hoe « iankinan'ny aina », « isan'andro » sy « hany ka » ao anaty "
          "fehezanteny.",

    # ---- II.3 Fandinihana : observer, ne pas répondre encore
    "di": ["Mihaino ny famakiana nataon'ny mpampianatra, andalana araka andalana.",
           "Jereo ny lohateny sy ny mari-piatoana : teboka, baraingo, faingo.",
           "Lazao ny teny tsy mbola fantatra, dia soraty ao anaty kahie ny dikany."],
    "fit": "Lahatsoratra voasoratra eo amin'ny tabilao, ary ny teny vaovao",
    "obsg": "Fihainoana sy fijery ihany eto; ny valiny dia avoaka amin'ny Famakafakana.",

    # ---- II.4 Famakafakana : chaque réponse se vérifie dans le texte
    "ka": [
        ("Inona no atao hoe rano araka ny lahatsoratra ?",
         "Ny rano dia akora iankinan'ny aina eto an-tany."),
        ("Firy amin'ny vatan'ny olombelona no rano ?",
         "Ny 3/4 ny vatan'ny olombelona dia rano avokoa."),
        ("Inona no mila atao isan'andro araka ny lahatsoratra ?",
         "Mila misotro rano isan'andro isika mba hikolokoloana an'io."),
        ("Nahoana ny rano maloto no mety hahatonga aretina ?",
         "Satria mety mitondra mikiraoba isan-karazany izy."),
        ("Inona no fepetra ho an'ny rano maloto ?",
         "Tsara raha ampangotrahina izy vao sotroina, na farafaharatsiny ampiana fanafody."),
        ("Inona no iadian'ny mpamboly ambony sy ambany eny an-tanimbary ?", "Ny fizaran-drano."),
    ],
    "tec": "Fanontaniana arahim-baliny / Fifanakalozan-kevitra",

    # ---- II.5 Fandravonana (le build ajoute « Koa, »)
    "sy": "ny rano dia sakafo mahavelona sy iankinan'ny aina, satria ny 3/4 ny vatan'ny olombelona dia "
          "rano avokoa; ka mila misotro rano isan'andro isika mba hikolokoloana an'io. Manan-danja be "
          "amin'ny fiarahamonina koa ny rano, hany ka ny fizaran-drano no ifandreshan'ny mpamboly.",

    # ---- fampiharana : l'application de la leçon, dans la fiche de l'élève
    "fp": [
        {"c": "Apono eo ny teboka (.) na ny baraingo (?) na ny tsoraka (!) eo amin'ny faran'ireto "
              "fehezanteny ireto.",
         "i": ["1) Ny rano dia akora iankinan'ny aina",
               "2) Inona no atao rehefa maloto na mando ny rano ho sotroina",
               "3) Mazotoa manasa tanana alohan'ny mihinana",
               "4) Firy amin'ny vatan'ny olombelona no rano"],
         "v": ["1) teboka (.)", "2) baraingo (?)", "3) tsoraka (!)", "4) baraingo (?)"]},
        {"c": "Amboary fehezanteny mampiasa ny endrika « izay … no … ».",
         "i": ["1) ny mpanana rano madio / manala ahiahy", "2) ny olona mazotoa manasa tanana / "
               "mitahiry fahasalamana", "3) ny fizaran-drano / iadian'ny mpamboly",
               "4) ny mpianatra mazoto / mitombo ny fahalalana"],
         "v": ["1) Ohatra : Izay mpanana rano madio no manala ahiahy.",
               "2) Ohatra : Izay mazotoa manasa tanana no mitahiry fahasalamana.",
               "3) Ohatra : Ny fizaran-drano no iadian'ny mpamboly.",
               "4) Ohatra : Izay mpianatra mazoto no mitombo ny fahalalana."]},
    ],
    # ---- III. Tombana : questions-réponses simples
    "to": [
        ("Inona no lohatenin'ny lahatsoratra nosokajiana ?", "« Ny rano, iankinan'ny aina »."),
        ("Inona no antony mahatonga ny rano ho ilaina isan'andro ?",
         "Satria iankinan'ny aina izy, ary ny 3/4 ny vatan'ny olombelona dia rano."),
        ("Ahoana no ahazoana rano mety sotroina ?",
         "Tsara raha ampangotrahina izy, na ampiana fanafody."),
        ("Inona no teny nampiasaina hilazana ny voka-dratsin'ny fiarahamonina ?", "« hany ka »."),
    ],

    # ---- la leçon, telle qu'elle est écrite au kahie
    "le": [
        ("h", "Lahatsoratra : « Ny rano, iankinan'ny aina »"),
        ("l", "Ny rano dia akora iankinan'ny aina eto an-tany. Ny 3/4 ny vatan'ny olombelona dia rano "
              "avokoa, ka mila misotro rano isan'andro isika mba hikolokoloana an'io. Ankoatra izany dia "
              "mety mitondra karazana sira izay ilain'ny vatana koa ny rano, satria levona ao anatiny ireo."),
        ("l", "Tsy ny rano rehetra kosa no mety sotroina. Mety mitondra mikiraoba isan-karazany ny rano "
              "maloto, ka ahiana hahatonga aretina : ny kôlerà, ny bilarziozy ary ny tefoedra, ohatra. "
              "Tsara raha ampangotrahina ny rano vao sotroina, na farafaharatsiny ampiana fanafody."),
        ("l", "Mifandray amin'ny fahadiovana ny fahasalamana. Raha tsy manasa tanana isika dia mety "
              "entin'ny tanantsika ny maloto eny an-tany sy eny amin'ny biby. Koa mazotoa manasa tanana "
              "amin'ny savony sy rano madio alohan'ny mihinana, ary manasa tanana aorian'izay koa. Ny "
              "fanadiovana ny tanana, ny fisotroana rano madio ary ny fihinana sakafo ara-potoana no "
              "fepetra fototra."),
        ("l", "Manan-danja be amin'ny aina ny rano, hany ka manan-danja amin'ny fiarahamonina koa. Izay "
              "manana fahefana amin'ny rano no manana fahefana amin'ny rehetra. Ny rano madio dia "
              "fahasalamana; ny fahasalamana dia ambony lavitra noho ny fananan-karena."),
        ("h", "Firafitry ny fehezanteny hita ao amin'ny lahatsoratra"),
        ("x", ["« Ny rano dia akora iankinan'ny aina » : entimilaza + **dia** + lazaina (tso-drafitra).",
               "« Izay manana fahefana amin'ny rano no manana fahefana amin'ny rehetra » : **izay … no …** "
               "(mivadi-drafitra, ilay lazaina no natsangana).",
               "« Tsara raha ampangotrahina ny rano vao sotroina » : **tsara raha** + matoanteny amin'ny "
               "-ina, indrindra amin'ny didy momba ny fahasalamana.",
               "« Manan-danja be amin'ny aina ny rano, hany ka … » : **hany ka** no mampifandray ny toetra "
               "sy ny voka-dratsiny."]),
        ("h", "Ohatra diso sy ny fanitsiana"),
        ("x", ["Diso : Ny 3/4 ny vatan'ny olombelona rano. — Marina : Ny 3/4 ny vatan'ny olombelona **dia** "
               "rano avokoa. (tsy nisy ny teny nananjara ny entimilaza sy ny lazaina)",
               "Diso : Ny rano dia akora iankinan'ny aina — Marina : Ny rano dia akora iankinan'ny aina. "
               "(tsy nisy teboka ny faran'ny fehezanteny)",
               "Diso : Mila misotro rano isika mba hikolokoloana. — Marina : Mila misotro rano isika mba "
               "hikolokoloana **an'io**. (tsy naheno ny lazaina ny zavatra kolokoloana)"]),
        ("h", "Ny teny vaovao"),
        ("p", "**iankinan'ny aina** : ny akora tsy azo famelezana mba hivelomana; **hikolokoloana** : ny "
              "hitahiry ny herim-piainana; **mikiraoba** : zava-bitsika tsy hita maso, mety hahatonga "
              "aretina; **ampangotra** : ny manaovana ny rano ny afo mba hahafatesan'ny aretina ao "
              "anatiny; **isan'andro** : isaky ny andro; **hany ka** : ary noho izany, ka izany no "
              "voka-dratsiny; **fizaran-drano** : ny fomba fizarana ny rano eny an-tanimbary."),
    ],

    # ---- fampahalalana fanampiny
    "cu": [
        "Ohabolana : « Ny fahasalamana dia ambony lavitra noho ny fananan-karena » — ny fahasalamana no "
        "zavatra sarobidine indrindra (ohabolana.org).",
        "Ny **savony** dia « siran'ny asidra matavy … ampiasaina amin'ny fanadiovana sy fandamana » "
        "(Wikipedia malagasy, « Savony »); ny **lavenona** kosa dia « azo asolo savony » (Wikipedia "
        "malagasy, « Lavenona »).",
        "Ny rano dia hita amin'ny endrika telo : mivaingana, mitsiranoka ary mientona (Wikipedia malagasy, "
        "« Rano »).",
    ],
    "re": [
        "Ny rano dia akora iankinan'ny aina : ny 3/4 ny vatan'ny olombelona dia rano avokoa.",
        "Mila misotro rano isan'andro isika mba hikolokoloana an'io.",
        "Tsara raha ampangotrahina ny rano vao sotroina, na ampiana fanafody.",
        "Ny fanadiovana ny tanana alohan'ny mihinana dia fepetra fototra amin'ny fahasalamana.",
    ],

    # ---- fanazaran-tena : une consigne par exercice, le VALINY juste après
    "fe": [
        {"c": "Safio valiny mety.", "p": 4,
         "i": ["1) Ny rano dia …", "a) akora iankinan'ny aina", "b) sakafo ho an'ny biby ihany",
               "d) zavatra tsy ilaina amin'ny vatana", "e) akora tsy mba levona",
               "2) Ny 3/4 ny vatan'ny olombelona dia …", "a) hazo", "b) rano avokoa", "d) savony",
               "e) tany",
               "3) Mety mitondra mikiraoba ny rano …", "a) madio", "b) mangatsiaka", "d) maloto",
               "e) mafana",
               "4) Ny teny hoe « hany ka » dia mitondra …", "a) ny voka-dratsy", "b) ny fanontaniana",
               "d) ny isa", "e) ny lohateny"],
         "v": ["1) **a)**", "2) **b)**", "3) **d)**", "4) **a)**"]},
        {"c": "Veroso amin'ny teny mety ho an'ny toerana banga : iankinan'ny aina, isan'andro, "
              "ampangotrahina, fizaran-drano.",
         "i": ["1) Ny rano dia akora ………… eto an-tany.",
               "2) Mila misotro rano ………… isika mba hikolokoloana an'io.",
               "3) Tsara raha ………… ny rano vao sotroina.",
               "4) Eny an-tanimbary dia mahay mifanaraka foana amin'ny ………… ny mpamboly."],
         "v": ["1) **iankinan'ny aina**", "2) **isan'andro**", "3) **ampangotrahina**",
               "4) **fizaran-drano**"]},
        {"c": "Amboary fehezanteny manarahana ireo toetra ireto, mampiasa « dia » na « hany ka ».",
         "i": ["1) ny rano madio / ilaina isan'andro",
               "2) ny tanimbary ambony sy ambany / mifanaraka amin'ny fizaran-drano",
               "3) ny fahadiovana / ny fahasalamana", "4) ny biby / mila rano koa"],
         "v": ["1) Ohatra : Ny rano madio **dia** ilaina isan'andro.",
               "2) Ohatra : Ny tanimbary ambony sy ambany **dia** mahay mifanaraka foana amin'ny "
               "fizaran-drano.",
               "3) Ohatra : Manan-danja be ny fahadiovana, **hany ka** mitahiry fahasalamana ny olona "
               "mazotoa.",
               "4) Ohatra : Ny biby **dia** mila rano koa."]},
    ],
}

SEANCES = [FICHE_VAKITENY]
