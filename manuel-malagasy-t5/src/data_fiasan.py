# -*- coding: utf-8 -*-
"""Les fiches de `Fiasan'ny teny` — Tsipelina et Fitsipiky ny teny — au gabarit de
l'exemple du proprietaire (Nos manuels/EXEMPLE DE MALAGASY.docx) :
TAKELA-PANOMANAN-DESONA · LESONA · FANAZARAN-TENA · FANITSIANA.

La 1re seance de chaque unite est deja faite par le proprietaire (elle porte sur
`samihafa / samy hafa`) : ce module donne les suivantes, dans l'ordre du PE.

REGLE DE LANGUE : chaque chaine est recopiee — du PE (refs/PE_T5_malagasy_p9-26.txt),
des pages collees (sources_web/full/), des sources Web relevees dans
refs/mgwiki_voambola.txt, ou des libelles de l'exemple (refs/EXEMPLE_DU_MANUEL.txt).
Ou une production libre est demandee, le FANITSIANA renvoie des phrases copiees,
etiquetees « Ohatra: ». Controle :

    python3 ../../fianarana-malagasy/fikarohana.py --fanamarinana data_fiasan
"""

# ---------------------------------------------------------------------------
# La grille : le PE decoupe lui-meme ces deux unites en trois Dingana.
#   Dingana voalohany : famakafakana ny modely
#   Dingana faharoa    : fampiharana
#   Dingana fahatelo   : fanamafisana
# On les loge dans les etapes de la takela ; la colonne Mpampianatra recopie la
# formule du PE (« Tarihina ny mpianatra : … ») plutot que d'inventer un verbe.
# ---------------------------------------------------------------------------
FITAOVANA = {
    "Tsipelina": "Lahatsoratra na fehezanteny",
    "Fitsipika": "Fehezanteny na lahatsoratra",
}


def grille(zt, lt_note):
    fitaovana = FITAOVANA[zt]
    return [
        ("I. Famerenana (5 min)",
         "Tarihina ny mpianatra : hamerina ireo teny natao tamin'ny seho teo aloha.",
         "Hamaly.", "Asan-tarika", "—", lt_note),
        ("II. LESONA VAOVAO", "", "", "", "", ""),
        ("1. Tari-dresaka (5 min)",
         "Tarihina ny mpianatra : handinika fehezanteny na ampahan-dahatsoratra.",
         "Handinika.", "Asan-tarika", fitaovana,
         "Dingana voalohany : famakafakana ny modely"),
        ("2. Fanolorana (5 min)",
         "Mampahalala ny votoatin'ny lesona.",
         "Mihaino.", "—", "—",
         "Androany isika dia hianatra lesona vaovao hoe : " + lt_note + "."),
        ("3. Fandinihana (5 min)",
         "Tarihina ny mpianatra : hanavaka ny teny mitovitovy fanonona na fanoratra "
         "sy ny fampiasana azy ao anaty fehezanteny.",
         "Hanavaka.", "Asan-tarika", fitaovana,
         "Dingana faharoa : fampiharana"),
        ("4. Famakafakana (5 min)",
         "Tarihina ny mpianatra : hanatsoaka ny fitsipika.",
         "Hamoaka.", "Asan-tarika", fitaovana,
         "Fitaovana : " + fitaovana),
        ("5. Fandravonana (5 min)",
         "Mampihatra ny fitsipika amin'ny fampiasana azy ao anaty fehezanteny.",
         "Hampiasa.", "Asa samirery", "—",
         "Dingana fahatelo : fanamafisana"),
        ("6. Fampiharana (5 min)",
         "Tarihina ny mpianatra : hampiasa ireo teny ao anaty fehezanteny marina.",
         "Hamorona.", "Asa samirery", fitaovana,
         "…anaty seha-pitenenana am-bava na an-tsoratra"),
        ("III. Tombana (5 min)",
         "Manamarina ny fepetra natao tamin'ny seho.",
         "Hilaza.", "Asa samirery", "—",
         "Mamorona fehezanteny na ampahan-dahatsoratra ampiharana ny "
         "fitsipi-panoratana ny teny ny mpianatra."),
    ]


def champs(zt):
    return {
        "Taranja": "Malagasy",
        "Daty": "…",
        "Zana-taranja": "Fiasan'ny teny · " + zt,
        "Seho n°": "…",
        "Isan'ny seho": "…",
    }


def fiche(zt, lt, lesona, exos, fanitsiana, note, pages=None, loharano=None):
    return {
        "zt": zt,
        "zt_color": "E36C0A" if zt == "Tsipelina" else "365F91",
        "lt": lt,
        "fields": champs(zt),
        "grille": grille(zt, note),
        "lesona": lesona,
        "exos": exos,
        "fanitsiana": fanitsiana,
        "loharano": loharano or [],
        "pages": pages or [],
    }


TSIPELINA = "Tsipelina"
FITSIPIKA = "Fitsipika"

# =====================================================================  TSIPELINA
F_T1 = fiche(
    TSIPELINA,
    "NOHO NY · NONY · NO HO",
    [
        ("p", "Fanoratana ny : samihafa/samy hafa, noho ny/nony/no ho"),
        ("note", "PE T5, Fiasan'ny teny · Tsipelina, p.18"),
        ("h2", "Noho ny"),
        ("bul", [
            "Ny fahasalamana dia ambony lavitra noho ny fananan-karena.",
            "Ny teny mahery lava noho ny tanana.",
            "Noho ny oksizena izay elektronegativa dia sintoniny manatona azy ny "
            "tambatra elektrona anankiroa izay eo amin'ny firaisany amin'ireo Hidrozena avy.",
        ]),
        ("h2", "Nony sy no ho"),
        ("p", "Noho ny/nony/no ho"),
        ("note", "Le PE donne les trois formes sans en fournir d'exemple : « nony » et « no ho » "
                 "n'apparaissent dans aucun des textes copiés ici. Le maître écrit au tableau le "
                 "exemple qu'il veut faire commenter ; la leçon ne retient que ce qui est attesté."),
        ("h2", "Ny hoe « ho » hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Ny lahatsoratra ampiasaina dia mety ho lahatsoratra mitantara, manoritsoritra na "
            "mampahalala…",
            "Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra.",
        ]),
        ("ohatra", [
            "Ny fahasalamana dia ambony lavitra noho ny fananan-karena.",
            "Ny teny mahery lava noho ny tanana.",
        ]),
    ],
    [
        {"consigne": "1. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "Ny fahasalamana dia ambony lavitra ………… ny fananan-karena.",
             "Ny teny mahery lava ………… ny tanana.",
             "……… ny oksizena izay elektronegativa dia sintoniny manatona azy ny "
             "tambatra elektrona anankiroa.",
             "Mety …… lahatsoratra mitantara, manoritsoritra na mampahalala.",
         ]},
        {"consigne": "2. Soraty amin'ny boky izay hitanao ny fehezanteny ahitana ny hoe « noho ny »."},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « noho ny ». Ampiasao "
                      "ireto teny ireto: fahasalamana, fananan-karena, tanana, fiteny."},
    ],
    [
        {"banga": ["noho ny", "noho ny", "Noho ny", "ho"]},
        {"ohatra": ["Ny fahasalamana dia ambony lavitra noho ny fananan-karena.",
                    "Ny teny mahery lava noho ny tanana."]},
        {"ohatra": ["Ny teny mahery lava noho ny tanana.",
                    "Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra."]},
    ],
    "Noho ny · nony · no ho",
    loharano=[
        "PE T5, taranja Malagasy, p.18 : Fiasan'ny teny — Tsipelina (votoatiny, sahanasa, tombana).",
        "Wikipedia : « Rano », https://mg.wikipedia.org/wiki/Rano — licence CC BY-SA 4.0.",
        "« Ny fahasalamana dia ambony lavitra noho ny fananan-karena » — ohabolana, ohabolana.org.",
        "« Ny teny mahery lava noho ny tanana » — JICA, lahatsoratra ho an'ny vakiteny.",
    ],
)

F_T2 = fiche(
    TSIPELINA,
    "TENY MISY « -n- » NA TSY MISY « -n- »",
    [
        ("p", "Teny misy « -n- » na tsy misy « -n- »"),
        ("note", "PE T5, Tsipelina, p.18"),
        ("tabl",
         [["Misy « -n- »", "Tsy misy « -n- »"],
          [["inty", "ity"],
           ["mainka", "maika"],
           ["manantitra", "manatitra"],
           ["manantona", "manatona"]]]),
        ("h2", "Ny fampiasana azy ao anaty fehezanteny"),
        ("bul", [
            "Ny taxi kosa dia lafo vidy kokoa saingy ampiasain'ny olona rehefa maika na misy entana.",
            "Ny ICAO dia vao mainka mampiasa ireo fitsipika sy torolalana mifehy ny fifamoivoizana.",
            "Krizy ara-pahasalamana: fiparitahan'ny aretina na toe-pahasalamana maika.",
            "Noho ny oksizena izay elektronegativa dia sintoniny manatona azy ny tambatra elektrona anankiroa.",
        ]),
        ("ohatra", [
            "rehefa maika na misy entana",
            "vao mainka mampiasa ireo fitsipika sy torolalana",
            "toe-pahasalamana maika",
            "dia sintoniny manatona azy",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (
             ["rehefa … na misy entana", "vao … mampiasa ireo fitsipika",
              "toe-pahasalamana …", "dia sintony … manatona azy"],
             ["maika", "mainka", "maika", "manatona"])},
        {"consigne": "2. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "Ny taxi kosa dia lafo vidy kokoa saingy ampiasain'ny olona rehefa ………… na misy entana.",
             "Ny ICAO dia vao ………… mampiasa ireo fitsipika sy torolalana mifehy ny fifamoivoizana.",
             "Krizy ara-pahasalamana: fiparitahan'ny aretina na toe-pahasalamana ………… .",
             "Noho ny oksizena izay elektronegativa dia sintoniny ………… azy ny tambatra elektrona.",
         ]},
        {"consigne": "3. Hanavaka ireo teny mitovy fanonona nefa samy hafa fanoratra, dia "
                      "soraty amin'ny boky izay hitanao ny heviny."},
    ],
    [
        {"tsilo": [("rehefa … na misy entana", "maika"),
                   ("vao … mampiasa ireo fitsipika", "mainka"),
                   ("toe-pahasalamana …", "maika"),
                   ("dia sintony … manatona azy", "manatona")]},
        {"banga": ["maika", "mainka", "maika", "manatona"]},
        {"ohatra": ["mainka : « vao mainka niady hevitra, dia nesorina izy taorian'ny "
                    "fitsapan-kevi-bahoaka ».",
                    "maika : « Ny taxi kosa dia lafo vidy kokoa saingy ampiasain'ny olona "
                    "rehefa maika na misy entana. »"]},
    ],
    "Teny misy « -n- » na tsy misy « -n- »",
    loharano=[
        "PE T5, p.18 : « Teny misy -n- na tsy misy -n- : inty/ity, mainka/maika, "
        "manantitra/manatitra, manantona/manatona ».",
        "Wikipedia : « Antananarivo », « Krizy », « Rano », « Fikambanan'ny Mpampiasa "
        "Sidina ana Habakabaka Sivily Iraisam-Pirenena » — licence CC BY-SA 4.0.",
    ],
)

F_T3 = fiche(
    TSIPELINA,
    "TENY ROA AVAHAN'NY TENDRO",
    [
        ("p", "Teny roa avahan'ny tendro : barika/barìka, tery/terý, ary/arý"),
        ("note", "PE T5, Tsipelina, p.18"),
        ("tabl",
         [["Tsy misy tendro", "Misy tendro"],
          [["barika", "barìka"],
           ["tery", "terý"],
           ["ary", "arý"]]]),
        ("h2", "Ny atao hoe tendro"),
        ("h2", "Ireo teny misy tendro hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "…hitsaboana vonjy maika ny fiakaran'ny tosi-dra vonjy maika.",
            "…dia nanome an'i Iràna fampindramam-bola maika mitentina 45 tapitrisa dôlara i Etazonia.",
            "Krizy ara-pahasalamana: fiparitahan'ny aretina na toe-pahasalamana maika.",
        ]),
        ("note", "« barìka », « terý », « arý » : la paire est donnée par le PE ; aucun exemple "
                 "de ces formes accentuées ne se trouve dans les textes copiés ici."),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["barika", "tery", "ary"], ["arý", "terý", "barìka"])},
        {"consigne": "2. Soraty amin'ny boky izay hitanao ny teny roa avahan'ny tendro: "
                      "barika/barìka, tery/terý, ary/arý."},
        {"consigne": "3. Mamorona fehezanteny iray ahitana ny hoe « ary »."},
    ],
    [
        {"tsilo": [("barika", "barìka"), ("tery", "terý"), ("ary", "arý")]},
        {"ohatra": ["barika / barìka", "tery / terý", "ary / arý"]},
        {"ohatra": ["Mihaino tsara ary mananga-tanana rehefa hiteny."]},
    ],
    "Teny roa avahan'ny tendro",
    loharano=[
        "PE T5, p.18 : « Teny roa avahan'ny tendro : barika/barìka, tery/terý, ary/arý ».",
        "refs/EXPLOITATION_DU_PE_T5.txt : « Mihaino tsara ary mananga-tanana rehefa hiteny. »",
    ],
)

F_T4 = fiche(
    TSIPELINA,
    "TENY VERINDROA SY KAMBAN-TENY AMPIASANA TSIPY-PANOHIZANA",
    [
        ("p", "Teny verindroa miafara amin'ny -ka, -tra, -na"),
        ("p", "Kamban-teny ampiasana tsipi-panohizana : Teny voalohany miafara amin'ny "
              "-ka, na -tra, na -na · Teny faharoa mitaky fanovana endrika"),
        ("note", "PE T5, Tsipelina, p.18"),
        ("h2", "Ireo kamban-teny hita ao amin'ireo lahatsoratra"),
        ("tabl",
         [["Kamban-teny", "Teny voalohany", "Teny faharoa"],
          [["fitsipi-panoratana", "fitsipika", "fanoratana"],
           ["fihavanam-bato", "fihavanana", "vato"],
           ["fihavanan-dandy", "fihavanana", "dandy"],
           ["mananga-tanana", "manana", "tanana"]]]),
        ("h2", "Ireo kamban-teny hita ao amin'ireo lahatsoratra, fa tsy zavatra azo sarana"),
        ("bul", [
            "sokajin-dahatsoratra",
            "mari-pamantarana",
            "fanampim-panazavana",
            "fandaharam-pibeazana",
            "fampindramam-bola",
        ]),
        ("ohatra", [
            "Mihaino tsara ary mananga-tanana rehefa hiteny.",
            "Ny fandaharam-pibeazana dia mikendry ny fampivelarana ireto "
            "fahaiza-manaon'ny mpianatra ireto.",
            "Aza atao fihavanam-bato, ka raha tapaka tsy azo atohy, fa ataovy "
            "fihavanan-dandy.",
            "Mampihatra ny fitsipi-panoratana teny verindroa ao anaty fehezanteny ny mpianatra.",
            "Handamina ny heviny araka ny sokajin-dahatsoratra : mitantara, "
            "manoritsoritra, mampahalala.",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["fitsipi-…", "sokaji…", "fandahara…", "fihavana…-bato"],
                   ["-pibeazana", "-panoratana", "-dahatsoratra", "-m-bato"])},
        {"consigne": "2. Fenoy ny banga amin'ireo kamban-teny voalaza ao amin'ny lesona.",
         "banga": [
             "Mampihatra ny ………… teny verindroa ao anaty fehezanteny ny mpianatra.",
             "Handamina ny heviny araka ny ………… : mitantara, manoritsoritra, mampahalala.",
             "Ny ………… dia mikendry ny fampivelarana ireto fahaiza-manaon'ny mpianatra ireto.",
             "Aza atao …………, ka raha tapaka tsy azo atohy, fa ataovy fihavanan-dandy.",
             "Mihaino tsara ary ………… rehefa hiteny.",
         ]},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « fanampim-panazavana » sy "
                      "ny hoe « mari-pamantarana ». Ampiasao ireto teny ireto: fomba fiteny, "
                      "lahatsoratra, lohateny, sary."},
    ],
    [
        {"tsilo": [("fitsipi-…", "panoratana"), ("sokaji…", "dahatsoratra"),
                   ("fandahara…", "pibeazana"), ("fihavana…-bato", "m-bato")]},
        {"banga": ["fitsipi-panoratana", "sokajin-dahatsoratra", "fandaharam-pibeazana",
                   "fihavanam-bato", "mananga-tanana"]},
        {"ohatra": ["Fangatahana fanampim-panazavana : « Azafady, afaka manazava misimisy "
                    "kokoa ve ianao ? »",
                    "Mari-pamantarana ao anaty lahatsoratra : Lohateny, Sary"]},
    ],
    "Teny verindroa sy kamban-teny ampiasana tsipi-panohizana",
    pages=["mgwiki_fehezanteny.txt"],
    loharano=[
        "PE T5, p.18 : « Teny verindroa miafara amin'ny -ka, -tra, -na » ; « Kamban-teny "
        "ampiasana tsipi-panohizana ».",
        "Wikipedia : « Fihavanana » (ohabolana), « Fehezanteny » — licence CC BY-SA 4.0, "
        "pages recopiees en entier ci-contre / dans sources_web/full/.",
    ],
)

# =====================================================================  FITSIPIKA
F_F1 = fiche(
    FITSIPIKA,
    "TSIRINTENY TSOFOKA AMIN'NY MATOANTENY : -in-, -if-, -amp-",
    [
        ("p", "Tsirinteny tsofoka amin'ny matoanteny : -in-, -if-, -amp-"),
        ("note", "PE T5, Fiasan'ny teny · Fitsipiky ny teny, p.19"),
        ("h2", "-in-"),
        ("bul", ["…dia sintoniny manatona azy ny tambatra elektrona anankiroa…",
                 "…dia vao mainka ampitomboin'ny fikambanana tsy miankina amin'ny fanjakana (ONG)…"]),
        ("h2", "-if-"),
        ("bul", ["Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra."]),
        ("h2", "-amp-"),
        ("bul", ["Ny fandaharam-pibeazana dia mikendry ny fampivelarana ireto fahaiza-manaon'ny mpianatra ireto.",
                 "Ampirisihina izy ireo hilaza hevitra, hanontany ary hamorona."]),
        ("ohatra", [
            "Noho ny oksizena izay elektronegativa dia sintoniny manatona azy ny tambatra elektrona. (‑in‑)",
            "Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra. (‑if‑)",
            "Ny fandaharam-pibeazana dia mikendry ny fampivelarana ireto fahaiza-manaon'ny mpianatra ireto. (‑amp‑)",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["sintoniny", "ifandraisana", "fampivelarana", "ampitomboin'ny"],
                   ["-amp-", "-in-", "-if-", "-in-"])},
        {"consigne": "2. Fenoy ny banga amin'ireo matoanteny voalaza ao amin'ny lesona.",
         "banga": [
             "Noho ny oksizena izay elektronegativa dia ………… manatona azy ny tambatra elektrona.",
             "Ampiasaina ny teny ho fitaovana ianarana, ………… ary anehoana hevitra.",
             "Ny fandaharam-pibeazana dia mikendry ny ………… ireto fahaiza-manaon'ny mpianatra ireto.",
         ]},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « -in- » sy ny hoe « -amp- ». "
                      "Ampiasao ireto teny ireto: teny, fitaovana, hevitra, mpianatra."},
    ],
    [
        {"tsilo": [("sintoniny", "-in-"), ("ifandraisana", "-if-"),
                   ("fampivelarana", "-amp-"), ("ampitomboin'ny", "-in-")]},
        {"banga": ["sintoniny", "ifandraisana", "fampivelarana"]},
        {"ohatra": ["Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra.",
                    "Ny fandaharam-pibeazana dia mikendry ny fampivelarana ireto "
                    "fahaiza-manaon'ny mpianatra ireto."]},
    ],
    "Tsirinteny tsofoka amin'ny matoanteny",
    loharano=[
        "PE T5, p.19 : « Tsirinteny tsofoka amin'ny matoanteny : -in-, -if-, -amp- » ; "
        "p.9, « ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra ».",
        "Wikipedia : « Rano », « Madagasikara » — licence CC BY-SA 4.0.",
    ],
)

F_F2 = fiche(
    FITSIPIKA,
    "FILAZAM-POTOANA ROA LAFY : HO AVY / TSY HO AVY · LASA / TSY LASA",
    [
        ("p", "Filazam-potoana roa lafy :"),
        ("tabl",
         [["Filazam-potoana", "Mpanamarika"],
          [["ho avy", "ho"],
           ["tsy ho avy", "Ø"],
           ["lasa", "t-"],
           ["tsy lasa", "Ø"]]]),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ireo izay hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Mety ho lahatsoratra mitantara, manoritsoritra na mampahalala.",
            "…hany ka lasa manao tambajotram-piraisana…",
            "Hanova filaza tsotra ho filaza mandidy mandrara na mandidy mirary.",
            "…tsy mahita toerana ho azy eo anivon'ny rehetra.",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["ho avy", "tsy ho avy", "lasa", "tsy lasa"], ["t-", "Ø", "ho", "Ø"])},
        {"consigne": "2. Fenoy ny banga amin'ireo mpanamarika voalaza ao amin'ny lesona.",
         "banga": [
             "Mety …… lahatsoratra mitantara, manoritsoritra na mampahalala.",
             "……… ka lasa manao tambajotram-piraisana.",
             "Hanova filaza tsotra …… filaza mandidy mandrara na mandidy mirary.",
             "…tsy mahita toerana …… azy eo anivon'ny rehetra.",
         ]},
        {"consigne": "3. Soraty amin'ny boky izay hitanao ny fehezanteny ahitana ny hoe « ho » "
                      "sy ny hoe « lasa »."},
    ],
    [
        {"tsilo": [("ho avy", "ho"), ("tsy ho avy", "Ø"), ("lasa", "t-"), ("tsy lasa", "Ø")]},
        {"banga": ["ho", "hany", "ho", "ho"]},
        {"ohatra": ["Mety ho lahatsoratra mitantara, manoritsoritra na mampahalala.",
                     "…hany ka lasa manao tambajotram-piraisana…"]},
    ],
    "Filazam-potoana roa lafy",
    loharano=[
        "PE T5, p.19 : « Filazam-potoana roa lafy : ho avy/tsy ho avy : ho/Ø ; "
        "lasa/tsy lasa : t-/Ø ».",
        "Wikipedia : « Rano » — licence CC BY-SA 4.0.",
    ],
)

F_F3 = fiche(
    FITSIPIKA,
    "MATOANTENY MISY NY HO-/HO MPANAMARIKA NY « HO AVY »",
    [
        ("p", "Matoanteny misy ny ho-/ho mpanamarika ny « ho avy »"),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ireo teny izay hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Mety ho lahatsoratra mitantara, manoritsoritra na mampahalala.",
            "Ampiasaina ny teny ho fitaovana ianarana, ifandraisana ary anehoana hevitra.",
            "Misy mihitsy aza ireo kolontsaina sasany izay ahitana olona manao ny rano ho andriamanitra "
            "satria loharanon'ny aina.",
            "…tsy mahita toerana ho azy eo anivon'ny rehetra.",
        ]),
        ("ohatra", [
            "Mety ho lahatsoratra mitantara, manoritsoritra na mampahalala.",
            "…manao ny rano ho andriamanitra satria loharanon'ny aina.",
        ]),
    ],
    [
        {"consigne": "1. Fenoy ny banga amin'ireo fehezanteny voalaza ao amin'ny lesona.",
         "banga": [
             "Mety …… lahatsoratra mitantara, manoritsoritra na mampahalala.",
             "Ampiasaina ny teny …… fitaovana ianarana, ifandraisana ary anehoana hevitra.",
             "…izay ahitana olona manao ny rano …… andriamanitra satria loharanon'ny aina.",
         ]},
        {"consigne": "2. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["ho + mitantara", "ho + fitaovana", "ho + andriamanitra"],
                   ["mety ho", "ampiasaina … ho", "manao … ho"])},
        {"consigne": "3. Mamorona fehezanteny iray ahitana ny hoe « mety ho »."},
    ],
    [
        {"banga": ["ho", "ho", "ho"]},
        {"tsilo": [("ho + mitantara", "mety ho"), ("ho + fitaovana", "ampiasaina … ho"),
                   ("ho + andriamanitra", "manao … ho")]},
        {"ohatra": ["Mety ho lahatsoratra mitantara, manoritsoritra na mampahalala."]},
    ],
    "Matoanteny misy ny ho-/ho",
    loharano=[
        "PE T5, p.19 ; p.9 (« Ny lahatsoratra ampiasaina dia mety ho lahatsoratra mitantara, "
        "manoritsoritra na mampahalala »).",
        "Wikipedia : « Rano » — licence CC BY-SA 4.0.",
    ],
)

F_F4 = fiche(
    FITSIPIKA,
    "NY TENY AORIAN'NY MPANAMPY : azo · tsy azo · tsy maintsy · aoka · mba · mety",
    [
        ("p", "Filazam-potoana amin'ny teny aorian'ny mpanampy : azo, tsy azo, tsy maintsy, "
              "aoka, mba, mety"),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ireo teny izay hita ao amin'ireo lahatsoratra"),
        ("tabl",
         [["Mpanampy", "Teny araka ny PE"],
          [["azo", "Tsy azoko tsara, azo averina ve ?"],
           ["tsy azo", "…ka raha tapaka tsy azo atohy…"],
           ["tsy maintsy", "—"],
           ["aoka", "—"],
           ["mba", "—"],
           ["mety", "Ny lahatsoratra ampiasaina dia mety ho lahatsoratra mitantara, "
            "manoritsoritra na mampahalala…"],
           ["aza", "Aza atao fihavanam-bato…"],
           ["azo + ", "…fa azo foanana na afindrafindra toerana."]]]),
        ("ohatra", [
            "Tsy azoko tsara, azo averina ve ?",
            "Aza atao fihavanam-bato, ka raha tapaka tsy azo atohy, fa ataovy fihavanan-dandy.",
            "Ny famenon'ny fehezanteny dia teny atao fameno ao amin'ny fehezanteny nefa tsy "
            "miraikitra amin'ny matoanteny fa azo foanana na afindrafindra toerana.",
        ]),
    ],
    [
        {"consigne": "1. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "Tsy azoko tsara, ………… averina ve ?",
             "Aza atao fihavanam-bato, ka raha tapaka ………… atohy, fa ataovy fihavanan-dandy.",
             "Ny famenon'ny fehezanteny dia teny atao fameno ………… ny fehezanteny nefa tsy "
             "miraikitra amin'ny matoanteny.",
         ]},
        {"consigne": "2. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["azo", "tsy azo", "mety", "aza"],
                   ["…ka raha tapaka tsy azo atohy", "Aza atao fihavanam-bato",
                    "…azo averina ve ?", "Mety ho lahatsoratra mitantara"])},
        {"consigne": "3. Mamorona fehezanteny roa ahitana ny hoe « azo » sy ny hoe "
                      "« tsy azo ». Ampiasao ireto teny ireto: rano, lamba, fomba fiteny, lesona."},
    ],
    [
        {"banga": ["azo", "tsy azo", "ao amin'ny"]},
        {"tsilo": [("azo", "…azo averina ve ?"), ("tsy azo", "…ka raha tapaka tsy azo atohy"),
                   ("mety", "Mety ho lahatsoratra mitantara"), ("aza", "Aza atao fihavanam-bato")]},
        {"ohatra": ["Tsy azoko tsara, azo averina ve ?",
                     "Aza atao fihavanam-bato, ka raha tapaka tsy azo atohy."]},
    ],
    "Ny teny aorian'ny mpanampy",
    loharano=[
        "PE T5, p.19 : « Filazam-potoana amin'ny teny aorian'ny mpanampy : azo, tsy azo, "
        "tsy maintsy, aoka, mba, mety ».",
        "Wikipedia : « Fihavanana », « Fehezanteny », « Rano » — licence CC BY-SA 4.0.",
    ],
)

F_F5 = fiche(
    FITSIPIKA,
    "MPISOLO TENA TAMPISAKA",
    [
        ("p", "Mpisolo tena tampisaka"),
        ("tabl",
         [["Endrika feno", "Tsy manana endrika feno"],
          [["-ko, -nao, -ny, -ntsika, -nay, -nareo", "-o, -ao, -tsika, -nay, -areo"]]]),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ireo teny izay hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Samihafa ny taranja ianaranay.  (-nay)",
            "« Araka ny hevitrao », « Araka ny hevitrareo ».  (-nao, -nareo)",
            "…dia sintoniny manatona azy ny tambatra elektrona anankiroa…  (-ny, azy)",
            "…tsy azontsika dia inona no tokony hatao ?  (-ntsika)",
            "Mieritreritra aho fa…  (aho)",
        ]),
        ("ohatra", [
            "Samihafa ny taranja ianaranay.",
            "Ny taxi kosa dia lafo vidy kokoa saingy ampiasain'ny olona rehefa maika na misy entana.",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["ianaranay", "hevitrao", "hevitrareo", "sintoniny"],
                   ["-ny", "-nay", "-nao", "-nareo"])},
        {"consigne": "2. Fenoy ny banga amin'ireo endrika voalaza ao amin'ny lesona.",
         "banga": [
             "Samihafa ny taranja ianara………… .",
             "Araka ny hevit…………, (tsy) mahasalama ny rano.",
             "Noho ny oksizena izay elektronegativa dia sintony………… manatona azy.",
             "…tsy azo………… dia inona no tokony hatao ?",
         ]},
        {"consigne": "3. Soraty amin'ny boky izay hitanao ny fehezanteny ahitana ny hoe "
                      "« -ko » sy ny hoe « -ny »."},
    ],
    [
        {"tsilo": [("ianaranay", "-nay"), ("hevitrao", "-nao"), ("hevitrareo", "-nareo"),
                   ("sintoniny", "-ny")]},
        {"banga": ["-nay", "-trao / -trareo", "-ny", "ntsika"]},
        {"ohatra": ["Samihafa ny taranja ianaranay.",
                     "…dia sintoniny manatona azy ny tambatra elektrona anankiroa."]},
    ],
    "Mpisolo tena tampisaka",
    loharano=[
        "PE T5, p.19 : « Mpisolo tena tampisaka : manana endrika feno -ko, -nao, -ny, "
        "-ntsika, -nay, -nareo ; tsy manana endrika feno -o, -ao, -tsika, -nay, -areo ».",
        "refs/EXEMPLE_DU_MANUEL.txt ; refs/EXPLOITATION_DU_PE_T5.txt ; Wikipedia « Rano », "
        "« Antananarivo ».",
    ],
)

F_F6 = fiche(
    FITSIPIKA,
    "ANJARA ASAN'NY TENY : RENIFAMENO (RF) · ZANA-PAMENO (ZP)",
    [
        ("p", "Anjara asan'ny teny : Renifameno (RF), zana-pameno (ZP)"),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ny famenon'ny fehezanteny"),
        ("p", "Ny famenon'ny fehezanteny dia teny atao fameno ao amin'ny fehezanteny nefa "
              "tsy miraikitra amin'ny matoanteny fa azo foanana na afindrafindra toerana."),
        ("note", "Wikipedia : « Fehezanteny »"),
        ("h2", "Ny anjara asa am-pehezanteny"),
        ("bul", ["Entimilaza", "Lazaina", "Fameno"]),
        ("ohatra", [
            "Ny famenon'ny fehezanteny dia teny atao fameno ao amin'ny fehezanteny nefa tsy "
            "miraikitra amin'ny matoanteny fa azo foanana na afindrafindra toerana.",
            "Mamaky misosa sy miaina ny lahatsoratra mba hahatakarana ny votoatin'izany.",
        ]),
    ],
    [
        {"consigne": "1. Soraty amin'ny boky izay hitanao ireo anjara asa am-pehezanteny "
                      "voalaza ao amin'ny lesona."},
        {"consigne": "2. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "Ny famenon'ny fehezanteny dia teny atao ………… ao amin'ny fehezanteny nefa tsy "
             "miraikitra amin'ny ………… fa azo foanana na afindrafindra toerana.",
         ]},
        {"consigne": "3. Hamantatra anjara asan'ny teny ao anaty fehezanteny, dia soraty amin'ny "
                      "boky izay hitanao ny heviny."},
    ],
    [
        {"ohatra": ["Ny famenon'ny fehezanteny dia teny atao fameno ao amin'ny fehezanteny nefa "
                    "tsy miraikitra amin'ny matoanteny fa azo foanana na afindrafindra toerana."]},
        {"banga": ["fameno", "matoanteny"]},
        {"note": "Hamantatra anjara asan'ny teny ao anaty fehezanteny — dingana voalohany : "
                 "famakafakana ny modely."},
    ],
    "Anjara asan'ny teny",
    pages=["mgwiki_fehezanteny.txt"],
    loharano=[
        "PE T5, p.19 : « Anjara asan'ny teny : Renifameno (RF), zana-pameno (ZP) » ; "
        "sahanasa : « hamantatra anjara asan'ny teny ao anaty fehezanteny ».",
        "Wikipedia : « Fehezanteny » — licence CC BY-SA 4.0, page recopiee en entier ci-contre.",
    ],
)

F_F7 = fiche(
    FITSIPIKA,
    "RAFITRY NY FEHEZANTENY MANANA EM VOASORITRA : « dia » · « no »",
    [
        ("p", "Rafitry ny fehezanteny manana EM voasoritra"),
        ("bul", ["Tso-drafitra : Ny - EM “dia” -L",
                 "Mivadi-drafitra : Ny - L “no” -EM"]),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ny atao hoe EM"),
        ("p", "Matetika no hita eny am-piandohan'ny fehezanteny (atao EM) ny samy hafa "
              "(misaraka). Tsy voatery ho toy izany foana anefa."),
        ("note", "refs/EXEMPLE_DU_MANUEL.txt"),
        ("h2", "Ireo fehezanteny izay hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Ny kabary dia lahateny atao amin'ny feo avo…  (Ny - dia -L)",
            "Ny fandaharam-pibeazana dia mikendry ny fampivelarana ireto fahaiza-manaon'ny "
            "mpianatra ireto.",
            "Ny famenon'ny fehezanteny dia teny atao fameno ao amin'ny fehezanteny.",
            "firaisana Hidrozena no iantsoana azy  (… no …)",
            "…tsy azontsika dia inona no tokony hatao ?",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["Ny kabary dia lahateny atao amin'ny feo avo.",
                    "firaisana Hidrozena no iantsoana azy",
                    "inona no tokony hatao ?"],
                   ["mivadi-drafitra", "tso-drafitra", "mivadi-drafitra"])},
        {"consigne": "2. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "Ny kabary …… lahateny atao amin'ny feo avo.",
             "Ny famenon'ny fehezanteny …… teny atao fameno ao amin'ny fehezanteny.",
             "…tsy azontsika …… inona no tokony hatao ?",
         ]},
        {"consigne": "3. Hanova rafitra ny fehezanteny ahitana EM voasoritra, dia soraty amin'ny "
                      "boky izay hitanao : « Ny kabary dia lahateny atao amin'ny feo avo. »"},
    ],
    [
        {"tsilo": [("Ny kabary dia lahateny atao amin'ny feo avo.", "tso-drafitra"),
                   ("firaisana Hidrozena no iantsoana azy", "mivadi-drafitra"),
                   ("inona no tokony hatao ?", "mivadi-drafitra")]},
        {"banga": ["dia", "dia", "dia"]},
        {"ohatra": ["…hany ka lasa manao tambajotram-piraisana: firaisana Hidrozena no "
                    "iantsoana azy…  (mivadi-drafitra, araka ny Wikipedia « Rano »)"]},
    ],
    "Rafitry ny fehezanteny manana EM voasoritra",
    loharano=[
        "PE T5, p.19 : « Rafitry ny fehezanteny manana EM voasoritra : Tso-drafitra / "
        "Mivadi-drafitra » ; tombana : « Manova rafitra ny fehezanteny ahitana EM voasoritra "
        "ny mpianatra. »",
        "Wikipedia : « Kabary », « Rano », « Fehezanteny » ; refs/EXPLOITATION_DU_PE_T5.txt.",
    ],
)

F_F8 = fiche(
    FITSIPIKA,
    "FILAZA MANDIDY : MANDRARA (aza) · MIRARY (tovana -a sy tendro)",
    [
        ("p", "Filaza mandidy : mandrara, mirary"),
        ("bul", ["Mandindy mandrara : ampiasana « aza »",
                 "Mandidy mirary : tovana -a sy tendro (tsarà, salamà, mahavità …)"]),
        ("note", "PE T5, Fitsipiky ny teny, p.19"),
        ("h2", "Ireo fehezanteny izay hita ao amin'ireo lahatsoratra"),
        ("bul", [
            "Aza sotroina ny rano maloto !",
            "Aza atao fihavanam-bato, ka raha tapaka tsy azo atohy, fa ataovy fihavanan-dandy.",
            "Aza manao fihavanan'amboa, ka taolana iray no isarahana.",
            "Aza manao havana raha misy patsa, ka raha lany ny patsa dia havan-tetezina.",
            "Mamorao !  (PE : mandidy)",
        ]),
        ("ohatra", [
            "Aza sotroina ny rano maloto !",
            "Aza manao fihavanan'amboa, ka taolana iray no isarahana.",
        ]),
    ],
    [
        {"consigne": "1. Ampifandraiso amin'ny alalan'ny tsilo",
         "tsilo": (["mandrara", "mirary", "tendro"],
                   ["tovana -a sy tendro (tsarà, salamà, mahavità)", "ampiasana « aza »",
                    "Mandidy mirary : tovana -a sy tendro"])},
        {"consigne": "2. Fenoy ny banga amin'ireo teny voalaza ao amin'ny lesona.",
         "banga": [
             "………… sotroina ny rano maloto !",
             "………… atao fihavanam-bato, ka raha tapaka tsy azo atohy.",
             "Mandidy mirary : tovana ………… sy tendro (tsarà, salamà, mahavità).",
         ]},
        {"consigne": "3. Hanova filaza tsotra ho filaza mandidy mandrara, dia soraty amin'ny "
                      "boky izay hitanao."},
    ],
    [
        {"tsilo": [("mandrara", "ampiasana « aza »"),
                   ("mirary", "tovana -a sy tendro (tsarà, salamà, mahavità)"),
                   ("tendro", "Mandidy mirary : tovana -a sy tendro")]},
        {"banga": ["Aza", "Aza", "-a"]},
        {"ohatra": ["Aza sotroina ny rano maloto !",
                     "Aza manao havana raha misy patsa, ka raha lany ny patsa dia havan-tetezina."]},
    ],
    "Filaza mandidy : mandrara, mirary",
    loharano=[
        "PE T5, p.19 : « Filaza mandidy — Mandindy mandrara : ampiasana « aza » ; Mandidy "
        "mirary : tovana -a sy tendro (tsarà, salamà, mahavità …) ».",
        "Wikipedia : « Fihavanana » (ohabolana), « Rano » — licence CC BY-SA 4.0.",
    ],
)

FICHES = [F_T1, F_T2, F_T3, F_T4, F_F1, F_F2, F_F3, F_F4, F_F5, F_F6, F_F7, F_F8]

FICHE = {"lt": FICHES[0]["lt"], "FICHES": FICHES}
