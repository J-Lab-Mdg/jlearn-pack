# -*- coding: utf-8 -*-
"""Fiche 1 — Fanehoan-kevitra am-bava (thème 1), gabarit relevé dans
« Nos manuels/EXEMPLE DE MALAGASY.docx » : TAKELA-PANOMANAN-DESONA, LESONA,
FANAZARAN-TENA, FANITSIANA.

RÈGLE DE LANGUE : rien ici n'est écrit de mémoire. Chaque chaîne est
(a) recopiée du PE T5 (refs/PE_T5_malagasy_p9-26.txt), (b) recopiée d'une page
de l'édition malgaise collée dans sources_web/full/, ou (c) reprise d'un libellé
de l'exemple du propriétaire (refs/EXEMPLE_DU_MANUEL.txt). Les phrases d'exemple
d'une production libre sont donc des phrases copiées, présentées comme « Ohatra ».
Contrôle : python3 fianarana-malagasy/fikarohana.py --fanamarinana data_ambava_t1
"""

FICHE = {
    "zt": "Fanehoan-kevitra am-bava",
    "zt_color": "E36C0A",
    "lt": "NY KABARY SY NY FEPETRA MIFEHY NY FANEHOAN-KEVITRA AM-BAVA",
    "fields": {
        "Taranja": "Malagasy",
        "Daty": "…",
        "Zana-taranja": "Fanehoan-kevitra am-bava",
        "Seho n°": "…",
        "Isan'ny seho": "…",
    },
    # ------------------------------------------------------------------ takela
    # (Dingana sy Faharetany | Fizotry ny Lesona: Mpampianatra | Mpianatra |
    #  Tetika Amam-paika | Fitaovana | Fanamarihana)
    "grille": [
        ("I. Famerenana (3 min)",
         "Tarihina ny mpianatra : hametraka fanontaniana.",
         "Hamaly.",
         "Fifanakalozan-kevitra",
         "—",
         "Fomba fametrahana fanontaniana : « Iza no manana fanontaniana amin'i …? »"),
        ("II. LESONA VAOVAO", "", "", "", "", ""),
        ("1. Tari-dresaka (2 min)",
         "Tarihina ny mpianatra : hiresaka mikasika ny lohahevitra omena.",
         "Hiresaka.",
         "Adihevitra",
         "Tranga na zava-misy",
         "Lohahevitra : Ny fitandroana ny fahasalamana"),
        ("2. Fanolorana (1 min)",
         "Mampahalala ny votoatin'ny lesona.",
         "Mihaino.",
         "—",
         "—",
         "Androany isika dia hianatra lesona vaovao hoe : Ny kabary sy ny fepetra "
         "mifehy ny fanehoan-kevitra am-bava."),
        ("3. Fandinihana (3 min)",
         "Tarihina ny mpianatra : hamaky mangina ny lahatsoratra.",
         "Hihaino.",
         "Vakiteny tsirairay",
         "Lahatsoratra",
         "Mialohan'ny vakiteny : haminavina ny votoatin'ny lahatsoratra."),
        ("4. Famakafakana (3 min)",
         "Tarihina ny mpianatra : hanamarina ny vinavina natao.",
         "Hanavaka.",
         "Fifanakalozan-kevitra",
         "Lahatsoratra",
         "Fomba fametrahana fanontaniana · fangatahana fanampim-panazavana · "
         "fanohanana hevitra"),
        ("5. Fandravonana (2 min)",
         "Mampihatra ny teny mpandamina sy ny teny enti-manohana hevitra.",
         "Hampiasa.",
         "Asa samirery",
         "—",
         "ety am-piandohana · manaraka izany · eto am-pamaranana"),
        ("6. Fampiharana (3 min)",
         "Tarihina ny mpianatra : hanaja ireo rafitra sy fitsipika ary ireo fepetra "
         "mifehy ny fanehoan-kevitra am-bava.",
         "Haneho.",
         "Seho sehatra",
         "Tantara",
         "Fanohanana hevitra : « Mieritreritra aho fa… », « Araka ny hevitro dia … »"),
        ("III. Tombana (3 min)",
         "Manamarina ny fepetra natao tamin'ny seho.",
         "Hilaza.",
         "Asa samirery",
         "—",
         "Manaja ny fepetra mifehy ny fitenenana ny mpianatra."),
    ],
    # ------------------------------------------------------------------- lesona
    # ("p", texte) · ("h2", titre) · ("bul", [items]) · ("ohatra", [items])
    # ("note", mention grise de source)
    "lesona": [
        ("p", "Ny kabary dia lahateny atao amin'ny feo avo ka entina hampitana hafatra "
              "ary matetika ravahina amin'ny hainteny sy ohabolana sady atrehin'olona maro."),
        ("note", "Wikipedia : « Kabary »"),
        ("h2", "Ny ilana ny kabary"),
        ("bul", ["entina hanamarinana na hanazavana zavatra iray manan-danja ;",
                "entin'ny mpiteny maneho ny fahaizany miteny sy mitana ny sain'ny mpihaino, "
                "amin'ny alalan'ny teny tsara rindra sy ohabolana voafantina ;"]),
        ("h2", "Ny toetra tokony hananan'ny mpikabary"),
        ("bul", ["mila fahasahiana ;",
                "mila fahaizana mandaha-teny ;",
                "mila avo feo ;",
                "mahafantatra ny fahendrena malagasy ;",
                "mahafehy ny ohabolana sy ny hainteny ary ohampitenenana."]),
        ("h2", "Ny fepetra fototra mifehy ny fanehoan-kevitra am-bava"),
        ("p", "Fomba fametrahana fanontaniana :"),
        ("bul", ["« Iza no manana fanontaniana amin'i …? »,",
                 "« Iza no afaka hanazava izay amin'ny fomba fiteniny ? »"]),
        ("p", "Fangatahana fanampim-panazavana :"),
        ("bul", ["« Azafady, afaka manazava misimisy kokoa ve ianao ? »,",
                 "« Tsy azoko tsara, azo averina ve ? »"]),
        ("p", "Fanohanana hevitra :"),
        ("bul", ["« Mieritreritra aho fa… »,",
                 "« Araka ny hevitro dia … »,",
                 "« Manaiky aho, … satria… »,",
                 "« Tsy manaiky aho, … satria… »,",
                 "« Tsy miombon-kevitra amin'izany aho… »"]),
        ("p", "Fanehoan-kevitra malalaka :"),
        ("bul", ["tiako, ankasitrahako, tsy tiako, tsy mankasitraka aho,",
                 "heveriko fa…/ toa…, ohatra ny…/ ny fahitako izany,",
                 "manaiky aho/ ekeko, tsy manaiky aho/ laviko"]),
        ("h2", "Teny mpandamina"),
        ("bul", ["ety am-piandohana,", "manaraka izany,", "eto am-pamaranana"]),
        ("h2", "Teny enti-manohana hevitra"),
        ("bul", ["satria,", "noho izany,", "ohatra,", "araka izany"]),
        ("h2", "Voambolana mpanamarika fotoana"),
        ("bul", ["ankehitriny,", "omaly,", "rahampitso,", "tamin'ny"]),
        ("ohatra", ["Maro karazana ny kabary satria maro tokoa ny hafatra hampitaina.",
                    "Maromaro ny antony ilana ny kabary, ka ohatra amin'izany ireto :",
                    "Voailika ireo noho izany ka tsy mahita toerana ho azy eo anivon'ny rehetra."]),
        # (les exercices viennent apres la lesona, cf. cles `exos` / `fanitsiana`)
    ],
    "exos": [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["« Iza no manana fanontaniana amin'i …? »",
                    "« Azafady, afaka manazava misimisy kokoa ve ianao ? »",
                    "« Mieritreritra aho fa… »",
                    "tiako, ankasitrahako, tsy tiako, tsy mankasitraka aho"],
                   ["Fangatahana fanampim-panazavana",
                    "Fanehoan-kevitra malalaka",
                    "Fomba fametrahana fanontaniana",
                    "Fanohanana hevitra"])},
        {"consigne": "2. Fenoy ny banga amin'ireo fomba fiteny voalaza ao amin'ny lesona.",
         "banga": ["…………………………, afaka manazava misimisy kokoa ve ianao ?",
                   "Tsy azoko tsara, ………………………… ve ?",
                   "Iza no manana ………………………… amin'i …?",
                   "Iza no afaka ………………………… izay amin'ny fomba fiteniny ?",
                   "Tsy miombon-kevitra ………………………… aho…"]},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « satria » sy ny hoe "
                      "« noho izany ». Ampiasao ireto teny ireto: kabary, hafatra, "
                      "fihavanana, fahasahiana."},
        {"consigne": "4. Maneho ny fepetra mifehy ny fanehoan-kevitra am-bava ao anatin'ny "
                      "resaka momba ny lohahevitra : Ny fitandroana ny fahasalamana."},
    ],
    # ------------------------------------------------------------ fanitsiana
    "fanitsiana": [
        {"tsilo": [("« Iza no manana fanontaniana amin'i …? »", "Fomba fametrahana fanontaniana"),
                   ("« Azafady, afaka manazava misimisy kokoa ve ianao ? »", "Fangatahana fanampim-panazavana"),
                   ("« Mieritreritra aho fa… »", "Fanohanana hevitra"),
                   ("tiako, ankasitrahako, tsy tiako, tsy mankasitraka aho", "Fanehoan-kevitra malalaka")]},
        {"banga": ["« Azafady, afaka manazava misimisy kokoa ve ianao ? »",
                   "« Tsy azoko tsara, azo averina ve ? »",
                   "« Iza no manana fanontaniana amin'i …? »",
                   "« Iza no afaka hanazava izay amin'ny fomba fiteniny ? »",
                   "« Tsy miombon-kevitra amin'izany aho… »"]},
        {"ohatra": ["Maro karazana ny kabary satria maro tokoa ny hafatra hampitaina.",
                    "Voailika ireo noho izany ka tsy mahita toerana ho azy eo anivon'ny rehetra."]},
        {"note": "Famerenana ny fepetra voalaza ao amin'ny lesona."},
    ],
    # pages entières collées derrière le corrigé (fichiers du dépôt, verbatim)
    "pages": ["mgwiki_kabary.txt", "mgwiki_fihavanana.txt"],
    "loharano": [
        "PE T5, taranja Malagasy, p.14 : Fanehoan-kevitra am-bava — voka-pianarana manokana, "
        "votoatiny, sahanasa, tetika amam-paika, fitaovana, tombana (recopié dans refs/PE_T5_malagasy_p9-26.txt).",
        "Wikipedia : « Kabary », https://mg.wikipedia.org/wiki/Kabary — licence CC BY-SA 4.0.",
        "Wikipedia : « Fihavanana », https://mg.wikipedia.org/wiki/Fihavanana — licence CC BY-SA 4.0.",
    ],
}

SEHO = 20
DUREE = (3, 14, 3)
