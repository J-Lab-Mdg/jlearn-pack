# -*- coding: utf-8 -*-
"""Échantillon V1 — 1 seho complète (Validation des conventions avant génération en masse).

Structure des données (1 dictionnaire = 1 fiche = 1 groupement de seho officielles) :
  taranja / zana_taranja / lohahevitra / lohateny / tanjona / doc / isan_ny_seho
  famerenana[(q, v.a.)]  ·  situation  ·  fanolorana  ·  fandinihana[str]  ·  fitaovana_fandinihana
  famakafakana[(q, v.a.)]  ·  fandravonana  ·  fampiharana[{c, items, cor}]
  tombana[(q, v.a.)]  ·  lecon[(kind, txt)]  ·  retenir[str]  ·  fanazaran_tenay[{c, items, cor, p}]
Mots-clés de la leçon = **entre astérisques** (colorés en bleu) ; VALINY = astérisques aussi (bordeaux).
Lahatsoratra : 5 fehezanteny — toute question de compréhension doit être vérifiable dans ce texte.
"""

# Durée totale lue dans le PE T5 pour le zana-taranja Vakiteny : 30 minitra
import os
from builders import ROOT

DUREES = (5, 20, 5)          # I / II / III, en minutes (répartition proportionnelle, jamais figée)

SEANCES = [
    {
        "n": 1,
        "taranja": "Malagasy",
        "zana_taranja": "Vakiteny (vakiteny miaina sy fahazoan-dahatsoratra)",
        "lohahevitra": "1. Ny fitandroana ny fahasalamana",
        "lohateny": "Fanasana ny tanana",
        "tanjona": "mamaky mazava sy tsy misy diso ny lahatsoratra fohy, ary hamaritra ny hevi-dehibe ao anatiny",
        "doc": "PE 5e, FRP 5e",
        "isan_ny_seho": 2,
        "durees": (5, 20, 5),          # seho 30 minitra ( Vakiteny ) → I 5 / II 20 / III 5

        # ---- I. Famerenana : éléments de la leçon précédente, aucune V.A. en placeholder
        "famerenana": [
            ("Inona no atao hoe fahasalamana ?",
             "Ny fahasalamana dia ny toetra ara-batana mahavelona ny olona, ka tsy misy aretina na fanaintainana."),
            ("Iza no miaro ny fahasalamantsika isan'andro ?",
             "Ny ray aman-dreny, ny mpampianatra, ary izahay manokoa."),
            ("Inona no fitaovana ampiasaina amin'ny fanadiovana ny tanana sy ny tongotra ?",
             "Rano madio sy sabonina, ary lamba madio ho an'ny fandroavana."),
        ],

        # ---- II.1 Fitarihan-tsaina : question simple dont la V.A. touche au titre de la leçon
        "situation": "Fanontaniana : Rehefa hohavainao ny sakafo, inona no tokony ho voalohany ataosinao ? "
                     "V.A. : Ny fanasana ny tanana.",

        # ---- II.2 Fanolorana : formule figée (le verbe de l'objectif prend le préfixe futur h-)
        "fanolorana": "Androany isika dia hianatra lesona vaovao hoe : « Fanasana ny tanana ». "
                      "Aorian'ity seho ity ianareo dia ho afaka hamaky mazava sy tsy misy diso ny lahatsoratra "
                      "fohy momba ny fahasalamana, ary hamaritra ny hevi-dehibe ao anatiny.",

        # ---- II.3 Fandinihana : les élèves observent seulement, ils ne répondent pas encore
        "fandinihana": [
            "Asehoko eo amin'ny tabilao ny lahatsoratra « Fanasana ny tanana » sy ny sary mifandraika amin'izany.",
            "Jereo aloha ny lohateny, ny isa ny fehezanteny, ary ny sary ao anaty lahatsoratra.",
        ],
        "fitaovana_fandinihana": "Lahatsoratra voasoratra eo amin'ny tabilao sy sary lehibe momba ny fanasana ny tanana",
        "loharano": ["wiki_hygiene_mains", "ohab_nify", "jica_vakiteny"],
        "obs_fandinihana": "Ny zava-jerena (lohateny, isa ny fehezanteny, sary) no avoaka amin'ny "
                           "Famakafakana, fa tsy eto.",

        # ---- II.4 Famakafakana : une ligne par couple question / V.A.
        "famakafakana": [
            ("Inona ny lohatenin'ny lahatsoratra ?", "« Fanasana ny tanana » ny lohateny."),
            ("Fehezanteny firy ny ao anaty lahatsoratra ?", "Dimy (5) ny fehezanteny ao anatiny."),
            ("Inona no fomba mora indrindra hiarovana ny tena araka ny lahatsoratra ?",
             "Ny **fanasana ny tanana amin'ny sabonina sy rano madio**."),
            ("Amin'ny fotoana inona isika no manasa tanana araka ny lahatsoratra ?",
             "Alohan'ny mihinana sy rehefa miverina avy any an-dokoa."),
            ("Ahoana no antony iavian'ny aretin-kibo sy ny aretin-koditra araka ny lahatsoratra ?",
             "Avy amin'ny tanana maloto ny antony amin'ny be dia be amin'ireo aretina ireo."),
        ],
        "tech_famakafakana": "Fanontaniana arahim-baliny / Asa iombonana",

        # ---- II.5 Fandravonana : c'est l'enseignant qui énonce la synthèse
        "fandravonana": "ny fanasana ny tanana amin'ny sabonina sy rano madio, indrindra alohan'ny "
                        "mihinana ary rehefa miverina avy any an-dokoa, dia fomba mora sy azo atao isan'andro "
                        "hiarovana ny fahasalamana.",

        # ---- II.6 Fampiharana : exercices réels, non notés à ce stade
        "fampiharana": [
            {"c": "Mameno ny toerana banga araka ny lahatsoratra.",
             "items": ["a) Ny fanasana ny tanana amin'ny …………………… sy rano madio.",
                       "b) Mazotoa manasa tanana alohan'ny …………………….",
                       "d) Avy amin'ny tanana …………………… ny anton'ny be dia be amin'ny aretin-kibo.",
                       "e) Ny …………………… dia manomboka amin'ny tanana."],
             "cor": ["a) sabonina", "b) mihinana", "d) maloto", "e) fahasalamana"]},
            {"c": "Reheo amin'ny tsilo ny teny eo ankavia amin'ny dikany eo ankavanana.",
             "items": ["a) sabonina", "b) lamosin-tanana", "d) rantsan-tanana", "e) lamba",
                       "1) tapany afovoan'ny tanana",
                       "2) singa ampiasaina hanadiovana ny tanana",
                       "3) singa eo anelanelan'ny rantsan-tanana",
                       "4) zava-piasana amin'ny fandroavana ny tanana"],
             "cor": ["a — 2", "b — 1", "d — 3", "e — 4"]},
        ],
        "tech_fampiharana": "Asa isan-tarika",
        "fit_fampiharana": "Kahie",

        # ---- Illustration libre du pack J-Learn (aucune image générée par IA)
        # Aucune image dans le pilote (décision 19/10) — add_image() reste disponible pour la suite.
        "libre_img": None,

        # ---- III. Tombana : questions-réponses simples (convention validée), non notées dans la fiche
        "tombana": [
            ("Inona no dingana voalohany amin'ny fanasana ny tanana ?",
             "Rano madio no ampiasaina vao misy sabonina."),
            ("Inona ny tapany amin'ny tanana tsy tokony hadinoina ?",
             "Ny lamosin-tanana sy ny eo anelanelan'ny rantsan-tanana."),
            ("Inona no atao rehefa vita ny fanasana ny tanana ?",
             "Androavana amin'ny lamba madio."),
            ("Inona no hafatry ny lahatsoratra amin'ny teny anao ?",
             "Ny fahasalamana dia manomboka amin'ny fanasana ny tanana."),
        ],

        # ---- Note culturelle (minimum 1 par fiche — discipline-malagasy.md)
        "fampahalalana": [
            "Ohabolana momba ny nify : « Ny nify, sady haingo no fahasalamana » — ny nify madio dia haingo, "
            "ary miaro ny taolana sy ny kibo koa, satria ny sakafo dia tsara kintaina. (ohabolana.org)",
            "Ny fanasana ny nify dia atao amin'ny alina ary amin'ny maraina, fa tsy rehefa afaka sakafo ihany.",
        ],

        # ---- LESON (page suivante) : h = sous-titre vert, l = lahatsoratra (lecture), p = paragraphe
        "lecon": [
            ("l", "Isika rehetra dia tia ho salama. Ny fanasana ny tanana amin'ny sabonina sy rano madio no "
                  "fomba mora indrindra hiarovana ny tena. Mazotoa manasa tanana alohan'ny mihinana, ary rehefa "
                  "miverina avy any an-dokoa. Aza adino ny lanin-tanana sy ny lamosin-tanana, ary ny eo anelanelan'ny rantsan-tanana. Avy "
                  "amin'ny tanana maloto ny antony amin'ny be dia be amin'ny aretin-kibo sy ny aretin-koditra."),
            ("h", "Ny teny vaovao"),
            ("p", "**fanasana** : ny fampiasana rano sy sabonina hanesorana ny maloto ; "
                  "**sabonina** : zavatra ampiasaina amin'ny fanadiovana ; "
                  "**lamosin-tanana** : ny tapany ambadiky ny tanana ; **lanina** : ny tapany anaty amin'ny tanana ; "
                  "**rantsan-tanana** : ny singa dimy eo amin'ny tanana ; "
                  "**aretin-kibo** : aretina amin'ny kibo (ohatra : ny tsindratsindra)."),
            ("h", "Karazana fanazavana ny lahatsoratra"),
            ("p", "Hevi-dehibe : ny fahasalamana dia manomboka amin'ny fanasana ny tanana. "
                  "Vokany : ny fihenan'ny aretin-kibo sy ny aretin-koditra."),
        ],
        "retenir": [
            "Manasa tanana amin'ny sabonina sy rano madio isika alohan'ny mihinana.",
            "Aza adino ny lanin-tanana sy ny lamosin-tanana.",
            "Ny tanana maloto no mitondra aretin-kibo sy aretin-koditra.",
        ],

        # ---- FANAZARAN-TENA (notés avec barème, après la leçon) — jamais de nom de type affiché
        "fanazaran_tenay": [
            {"c": "Mamaky ianao, dia valin'ny fanontaniana ireto.",
             "p": 5,
             "items": ["1) Inona ny fomba mora indrindra hiarovana ny tena ?",
                       "2) Amin'ny fotoana inona isika no manasa tanana ?",
                       "3) Inona ny tapany amin'ny tanana tsy tokony hadinoina ?",
                       "4) Inona no antony amin'ny be dia be amin'ny aretin-kibo araka ny lahatsoratra ?",
                       "5) Fehezanteny firy ny ao amin'ny lahatsoratra ?"],
             "cor": ["1) Ny **fanasana ny tanana amin'ny sabonina sy rano madio**.",
                     "2) **Alohan'ny mihinana** sy **rehefa miverina avy any an-dokoa**.",
                     "3) Ny **lamosin-tanana** sy ny **eo anelanelan'ny rantsan-tanana**.",
                     "4) Ny **tanana maloto**.",
                     "5) **Dimy (5)**."]},
            {"c": "Sokajio ho « Marina » na « Diso » ireto fehezanteny ireto.",
             "p": 4,
             "items": ["1) Ny sabonina ihany ilaina, tsy mila rano ny fanasana tanana.",
                       "2) Tokony hadinoina ny lamosin-tanana rehefa manasa tanana.",
                       "3) Ny tanana maloto dia mety mitondra aretin-kibo.",
                       "4) Mazotoa manasa tanana alohan'ny mihinana."],
             "cor": ["1) **Diso** : ilaina ny sabonina **sy ny rano madio**.",
                     "2) **Marina**.",
                     "3) **Marina**.",
                     "4) **Marina**."]},
            {"c": "Omeo ny dikan'ny teny ireto manaraka ireto araka ny « Ny teny vaovao » ao amin'ny lesona.",
             "p": 4,
             "items": ["1) fanasana", "2) sabonina", "3) lamosin-tanana", "4) rantsan-tanana"],
             "cor": ["1) ny fampiasana rano sy sabonina **hanesorana ny maloto**",
                     "2) **zavatra ampiasaina amin'ny fanadiovana**",
                     "3) ny **tapany ambadiky ny tanana**",
                     "4) ny **singa dimy eo amin'ny tanana**"]},
        ],
    },
]


FICHE_VAKITENY = SEANCES[0]
