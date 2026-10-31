# -*- coding: utf-8 -*-
"""Helpers communs aux fiches `Fiasan'ny teny` au gabarit de l'exemple du proprietaire :
la grille de la takela (ou l'on loge les trois `Dingana` du PE), les champs d'en-tete,
et l'assemblage d'une fiche. Duree d'une seho de `Fiasan'ny teny` : 30 min (PE p.11,
`Fiasan''ny teny 2 × 30 minitra`), reparties 5 / 20 / 5."""

FITAOVANA = {
    "Tsipelina": "Lahatsoratra na fehezanteny",
    "Fitsipika": "Fehezanteny na lahatsoratra",
}

TSIPELINA = "Tsipelina"
FITSIPIKA = "Fitsipika"

# I. Famerenana · (1..6) · III. Tombana
DUREE = (5, (3, 2, 4, 4, 3, 4), 5)


def grille(zt, lt_note, du=DUREE):
    fitaovana = FITAOVANA[zt]
    i, etapes, iii = du
    mins = iter([str(i)] + [str(x) for x in etapes] + [str(iii)])
    titre = ["I. Famerenana", "1. Tari-dresaka", "2. Fanolorana", "3. Fandinihana",
             "4. Famakafakana", "5. Fandravonana", "6. Fampiharana", "III. Tombana"]
    def nom(k):
        prefiksy = "II." if k in (1, 2, 3, 4, 5, 6) else ""
        return "%s%s (%s min)" % (prefiksy, titre[k], next(mins))
    return [
        (nom(0),
         "Tarihina ny mpianatra : hamerina ireo teny natao tamin'ny seho teo aloha.",
         "Hamaly.", "Asan-tarika", "—", lt_note),
        ("II. LESONA VAOVAO", "", "", "", "", ""),
        (nom(1),
         "Tarihina ny mpianatra : handinika fehezanteny na ampahan-dahatsoratra.",
         "Handinika.", "Asan-tarika", fitaovana,
         "Dingana voalohany : famakafakana ny modely"),
        (nom(2),
         "Mampahalala ny votoatin'ny lesona.",
         "Mihaino.", "—", "—",
         "Androany isika dia hianatra lesona vaovao hoe : " + lt_note + "."),
        (nom(3),
         "Tarihina ny mpianatra : hanavaka ny teny mitovitovy fanonona na fanoratra "
         "sy ny fampiasana azy ao anaty fehezanteny.",
         "Hanavaka.", "Asan-tarika", fitaovana,
         "Dingana faharoa : fampiharana"),
        (nom(4),
         "Tarihina ny mpianatra : hanatsoaka ny fitsipika.",
         "Hamoaka.", "Asan-tarika", fitaovana,
         "Fitaovana : " + fitaovana),
        (nom(5),
         "Mampihatra ny fitsipika amin'ny fampiasana azy ao anaty fehezanteny.",
         "Hampiasa.", "Asa samirery", "—",
         "Dingana fahatelo : fanamafisana"),
        (nom(6),
         "Tarihina ny mpianatra : hampiasa ireo teny ao anaty fehezanteny marina.",
         "Hamorona.", "Asa samirery", fitaovana,
         "…anaty seha-pitenenana am-bava na an-tsoratra"),
        (nom(7),
         "Manamarina ny fepetra natao tamin'ny seho.",
         "Hilaza.", "Asa samirery", "—",
         "Mamorona fehezanteny na ampahan-dahatsoratra ampiharana ny "
         "fitsipi-panoratana ny teny ny mpianatra."),
    ]


def champs(zt, seho="…", isan="…"):
    return {
        "Taranja": "Malagasy",
        "Daty": "…",
        "Zana-taranja": "Fiasan'ny teny · " + zt,
        "Seho n°": seho,
        "Isan'ny seho": isan,
    }


def fiche(zt, lt, lesona, exos, fanitsiana, note, pages=None, loharano=None,
          seho="…", isan="…", sary=False):
    """`sary=True` : ny tabilao tsilo ao anaty FANITSIANA dia lasa SARY SVG
    FENO (sisiny + soratra + tsilo) — jereo sary_tabalo.py. ny tsilo dia tena tonga
    amin'ny maha-meto azy, satria ny layout iray no sambo mamerina azy."""
    return {
        "sary_tsilo": sary,
        "zt": zt,
        "zt_color": "E36C0A" if zt == "Tsipelina" else "365F91",
        "lt": lt,
        "fields": champs(zt, seho, isan),
        "grille": grille(zt, note),
        "lesona": lesona,
        "exos": exos,
        "fanitsiana": fanitsiana,
        "loharano": loharano or [],
        "pages": pages or [],
    }


