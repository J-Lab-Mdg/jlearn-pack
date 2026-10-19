# -*- coding: utf-8 -*-
"""LOHAHEVITRA 1 — « Ny fitandroana ny fahasalamana » : 4 fiches (1 par zana-taranja).

Ordre = ordre du PE T5 : Fanehoan-kevitra am-bava, Vakiteny, Fiasan'ny teny, Asa an-tsoratra.
Minima matière (discipline-malagasy.md) : 5 exemples · 3 erreurs/contre-exemples · 3 exercices
(FANAZARAN-TENA) · 1 dialogue (zana-taranja ara-pifampizarana) · 1 note culturelle.
Lettrage des QCM/appariements : a b d e f g h i j k l m n o p r s t v z (pas de C, Q, U, W, X).
"""
from data_pilote import FICHE_VAKITENY

# -------------------------------------------------------------------------------- 1. Fanehoan-kevitra am-bava
FICHE_BAVA = {
    "n": 1,
    "taranja": "Malagasy",
    "zana_taranja": "Fanehoan-kevitra am-bava",
    "lohahevitra": "1. Ny fitandroana ny fahasalamana",
    "lohateny": "Ny fepetra fototra amin'ny fahasalamana",
    "tanjona": "hamerina amin'ny teny anao ny fepetra fototra amin'ny fitandroana ny fahasalamana, "
               "ary hampiasa ny mpanamarika fotoana hoe « alohan'ny », « rehefa », « vao », « taorian'ny »",
    "doc": "PE 5e, FRP 5e",
    "isan_ny_seho": 3,
    "durees": (3, 14, 3),          # seho 20 minitra

    "famerenana": [
        ("Inona no atao hoe fahasalamana ?",
         "Ny toetra ara-batana mahavelona ny olona, ka tsy misy aretina na fanaintainana."),
        ("Inona no atao isaky ny maraina ?",
         "Mifoha, manasa tanana, manasa endrika, ary misotro rano madio."),
        ("Iza no mampianatra antsika ireo fepetra ireo ?",
         "Ny ray aman-dreny sy ny mpampianatra, ary ny olona miasa amin'ny fahasalamana."),
    ],
    "obs_famerenana": "Ny ampahany teo aloha rehetra no averina, fa tsy ny lesona vaovao.",

    "situation": "Fanontaniana : Raha tena tinanao ho salama ao anatin'ny taona, inona no tokony "
                 "eriteretinao voalohany ? V.A. : Ny fanaovana izay takiana amin'ny fitandroana ny fahasalamana.",
    "fit_fitarihana": "Solaitrabe",

    "fanolorana": "Androany isika dia hianatra lesona vaovao hoe : « Ny fepetra fototra amin'ny "
                  "fahasalamana ». Aorian'ity seho ity ianareo dia ho afaka hamerina amin'ny teny anao "
                  "ireo fepetra ireo, ary hampiasa ny mpanamarika fotoana ao anaty fehezanteny.",

    "fandinihana": [
        "Mihaino am-pilamina ny dihy voasoratra eo amin'ny tabilao izaho sy ianao.",
        "Jereo koa ny teny nampiasaina namantana ny fotoana natao tsirairay.",
    ],
    "fitaovana_fandinihana": "Sary lehibe momba ny fahasalamana sy lahatsoratra fohy (dihy) eo amin'ny tabilao",
    "obs_fandinihana": "Tsy mbola mamaly ny mpianatra eto : fihainoana sy fijery ihany.",

    "famakafakana": [
        ("Inona no ilaina ho an'ny tena araka ny dihy ?",
         "Ny mihinana ara-potoana, ny misotro rano madio, ary ny fatoriana ampy."),
        ("Inona no atao alohan'ny mihinana ?",
         "**Manasa tanana** isika, vao mihinana."),
        ("Inona no atao taorian'ny sakafo ?",
         "Manasa tanana sy **manasa nify** indray."),
        ("Inona ireo teny nampiseho ny fotoana tao amin'ny dihy ?",
         "**alohan'ny**, **rehefa**, **vao**, **taorian'ny**."),
        ("Raha tsy manaraka ireo fepetra ireo isika, inona no mety hitranga ?",
         "Mety ho voan'ny aretina, ka tsy mahay mianatra."),
    ],
    "tech_famakafakana": "Fanontaniana arahim-baliny / Asa iombonana",

    "fandravonana": "ny fepetra fototra amin'ny fahasalamana dia ny fihinanana sakafo ara-potoana, ny "
                    "fisotroana rano madio, ny fanadiovana ny tanana sy ny tongotra, ary ny fatoriana ampy ; ny teny hoe "
                    "alohan'ny, rehefa, vao, taorian'ny no mampiseho ny fotoana natao tsirairay.",

    "fampiharana": [
        {"c": "Veroso amin'ny teny mety ho an'ny toerana banga : alohan'ny, vao, taorian'ny, rehefa.",
         "items": ["a) ……………… ny mihinana, manasa tanana isika.",
                   "b) Manasa tanana isika, ……………… mihinana.",
                   "d) ……………… ny sakafo, manasa nify isika.",
                   "e) ……………… avy any an-dokoa isika, manasa tanana."],
         "cor": ["a) Alohan'ny", "b) vao", "d) Taorian'ny", "e) Rehefa"]},
        {"c": "Mamorona fehezanteny araka ireo torohevitra ireo, ary ampiasao mpanamarika fotoana "
              "iray ao anaty fehezanteny tsirairay.",
         "items": ["a) sakafo ara-potoana", "b) rano madio", "d) fandroana", "e) fatoriana"],
         "cor": ["a) Mihinana ara-potoana isika, ka tsy hangidy ny kibo.",
                 "b) Misotro rano madio isika isan'andro.",
                 "d) Mandroa isika rehefa vita ny kilasy.",
                 "e) Manasa nify isika, vao mandry."]},
    ],
    "tech_fampiharana": "Asa isan-tarika",
    "fit_fampiharana": "Kahie",

    "tombana": [
        ("Inona no atao hoe fepetra fototra amin'ny fahasalamana ?",
         "Ny zavatra tsy maintsy atao isan'andro mba ho salama ny olona."),
        ("Alohan'ny mihinana, inona no atao ?", "Manasa tanana."),
        ("Taorian'ny sakafo, inona no atao ?", "Manasa tanana sy manasa nify."),
        ("Ampiasao ao anaty fehezanteny ny teny hoe « taorian'ny ».",
         "Ohatra : Taorian'ny sakafo dia manasa nify aho."),
    ],

    "lecon": [
        ("h", "Ohatra dihy : « Ny fahasalamana no harena »"),
        ("d", ["Mpianatra Andry : Raha ny tena, inona no ilaina ?",
               "Mpianatra Faly : Ilaina ny mihinana ara-potoana, ny misotro rano madio, ary ny fatoriana ampy.",
               "A : Alohan'ny mihinana, inona no atao ?",
               "F : Manasa tanana isika, vao mihinana.",
               "A : Ary taorian'ny sakafo ?",
               "F : Manasa tanana sy manasa nify indray, dia miala.",
               "A : Raha tsy manao izany isika ?",
               "F : Mety ho voan'ny aretina, ka tsy mahay mianatra."]),
        ("h", "Ny mpanamarika fotoana"),
        ("p", "Mpanamarika fotoana ireo teny ireo, satria mampifandray dingana roa izy : **alohan'ny** "
              "(ny mba hatao aloha), **vao** (ny manaraka hatony), **rehefa** (amin'ny fotoana), "
              "**taorian'ny** (ny mba hatao aorian'izany)."),
        ("x", ["Marina : **Alohan'ny** mihinana, manasa tanana isika.",
               "Marina : Manasa tanana isika, **vao** mihinana.",
               "Marina : **Rehefa** vita ny sakafo, manasa nify isika.",
               "Marina : **Taorian'ny** sakafo, manasa nify isika.",
               "Marina : Nandry ao am-patoriana aho, **vao** nisotro rano."]),
        ("h", "Ohatra diso sy ny fanitsiana"),
        ("x", ["Diso : Mihinana alohan'ny manasa tanana isika. Marina : Manasa tanana isika, vao "
               "mihinana. (fanehoana ny fotoana : lasa ny filaharan'ny dingana)",
               "Diso : Rehefa mihinana, manasa nify. Marina : Rehefa vita ny sakafo, manasa nify. "
               "(hevitra tsy feno : tsy voalaza ny faran'ny dingana)",
               "Diso : Taorian'ny mihinana manasa tanana. Marina : Taorian'ny mihinana, manasa tanana. "
               "(mari-piatoana : tsy nisy tsoraka nanasarana ny ampahany roa)"]),
        ("h", "Ny teny vaovao"),
        ("p", "**fepetra** : ny toe-javatra ilazana izay atao ; **takiana** : ilaina, tsy azo famelezana ; "
              "**ara-potoana** : araka ny fotoana nomena ; **fatoriana** : ny fandriana ; "
              "**mpanamarika fotoana** : ny teny mampiseho ny fotoana."),
    ],
    "fampahalalana": [
        "Ohabolana : « Ny fahasalamana dia ambony lavitra noho ny fananan-karena » — ny fahasalamana no "
        "zavatra sarobidine indrindra, fa ny harena kosa azo averina. (ohabolana.org)",
        "Ao amin'ny fampiasana andavanandro dia matetika ampiasaina miaraka amin'ireo mpanamarika fotoana "
        "ireo ny teny hoe « mazotoa » : « Mazotoa manasa tanana. »",
    ],
    "retenir": [
        "Fepetra fototra amin'ny fahasalamana : sakafo ara-potoana, rano madio, fanadiovana ny tanana sy ny tongotra, fatoriana.",
        "Mazotoa manasa tanana alohan'ny mihinana ary taorian'ny sakafo.",
        "Alohan'ny, rehefa, vao, taorian'ny no mampiseho ny filaharan'ny dingana.",
    ],

    "fanazaran_tenay": [
        {"c": "Safio valiny mety.",
         "p": 4,
         "items": ["1) Ny teny hoe « alohan'ny » dia mampiseho ny …",
                   "a) manaraka b) mialoha d) toerana e) fomba",
                   "2) Ny teny hoe « taorian'ny » dia mampiseho ny …",
                   "a) mialoha b) manaraka d) olona e) habe",
                   "3) Izay mampiseho ny dingana manaraka hatony dia …",
                   "a) rehefa b) alohan'ny d) vao e) taorian'ny",
                   "4) Fehezanteny marina araka ny lesona ny hoe …",
                   "a) Mihinana alohan'ny manasa tanana. b) Manasa tanana isika, vao mihinana.",
                   "d) Rehefa mihinana, manasa nify. e) Taorian'ny alohan'ny sakafo."],
         "cor": ["1) **b) mialoha**", "2) **b) manaraka**", "3) **d) vao**", "4) **b)**"]},
        {"c": "Mameno ny toerana banga amin'ny mpanamarika fotoana mety.",
         "p": 4,
         "items": ["1) ……………… ny fandroana, manomana daka sy sabonina.",
                   "2) Manasa nify isika, ……………… mandry.",
                   "3) ……………… nianatra, dia nandry ao am-patoriana.",
                   "4) ……………… miala amin'ny tokana maraina, manasa tanana aho."],
         "cor": ["1) **Alohan'ny**", "2) **vao**", "3) **Taorian'ny**", "4) **Rehefa**"]},
        {"c": "Amboary fehezanteny efatra momba ny fitandroana ny fahasalamana.",
         "p": 4,
         "items": ["1) ampiasao ny teny hoe « alohan'ny »",
                   "2) ampiasao ny teny hoe « taorian'ny »",
                   "3) ampiasao ny teny hoe « rehefa »",
                   "4) ampiasao ny teny hoe « vao »"],
         "cor": ["1) Ohatra : Alohan'ny mihinana dia manasa tanana aho.",
                 "2) Ohatra : Taorian'ny kilasy dia mandroa aho.",
                 "3) Ohatra : Rehefa mangatsiaka dia misotro rano mafana aho.",
                 "4) Ohatra : Manasa nify aho, vao mandry."]},
    ],
}

# -------------------------------------------------------------------------------- 3. Fiasan'ny teny
FICHE_TENY = {
    "n": 3,
    "taranja": "Malagasy",
    "zana_taranja": "Fiasan'ny teny",
    "lohahevitra": "1. Ny fitandroana ny fahasalamana",
    "lohateny": "Ny mpisolo tena tampisaka : -ko, -nao, -ny",
    "tanjona": "hanavaka sy hampiasa araka ny tokony ho izy ny mpisolo tena tampisaka -ko, -nao, -ny, "
               "-nay, -ntsika, -nareo ao anaty fehezanteny",
    "doc": "PE 5e, FRP 5e",
    "isan_ny_seho": 2,
    "durees": (5, 20, 5),          # seho 30 minitra

    "famerenana": [
        ("Inona no atao hoe anarana ?", "Ny teny manonona olona na zavatra, ohatra : tanana, rano, sabonina."),
        ("Ny teny hoe « tanana » dia anarana manokana ve ?", "Tsy anarana manokana, fa anarana iombonana."),
        ("Inona no mampiseho ny tompon'ny zavatra iray ?",
         "Ny teny kely tafangora amin'ny faran'ny anarana, ohatra ny -ko."),
    ],
    "situation": "Fanontaniana : Ahoana no hilazana fa anao manokana ny tanana ? "
                 "V.A. : Ny teny hoe « ny tananao » ; ny « tanako » kosa dia an'ny miteny.",
    "fanolorana": "Androany isika dia hianatra lesona vaovao hoe : « Ny mpisolo tena tampisaka : -ko, "
                  "-nao, -ny ». Aorian'ity seho ity ianareo dia ho afaka hanavaka sy hampiasa araka ny "
                  "tokony ho izy ireo mpisolo tena tampisaka ireo ao anaty fehezanteny.",
    "fandinihana": [
        "Jereo ny fehezanteny voasoratra eo amin'ny tabilao : misongadina ny faran'ny anarana.",
        "Zahao ny fanovana ny faran'ny teny rehefa mifanovy ny olona.",
    ],
    "fitaovana_fandinihana": "Fehezanteny voasoratra eo amin'ny tabilao",
    "famakafakana": [
        ("Ao amin'ny « tanako », iza no tompon'ny tanana ?", "Izay miteny (aho)."),
        ("Ao amin'ny « tananao » kosa ?", "Izay itenenana (ianao)."),
        ("Ary ao amin'ny « tanany » ?", "Izay tsy miteny sady tsy itenenana (izy)."),
        ("Inona no ampiasaina rehefa ao anaty izay itenenana ny olona miteny ?",
         "**-ntsika** : « ny tanan**antsika** »."),
        ("Inona kosa rehefa tsy ao anaty izay itenenana ny olona miteny ?",
         "**-nay** : « ny tanan**ay** »."),
    ],
    "tech_famakafakana": "Famantarana ny fitsipika / Asa iombonana",
    "fandravonana": "ny mpisolo tena tampisaka dia teny kely tafangora amin'ny faran'ny anarana ilazana "
                    "ny tompony : **-ko** ho an'ny miteny, **-nao** ho an'ny itenenana, **-ny** ho an'ny "
                    "fahatelo ; **-ntsika** sy **-nareo** no ampiasaina rehefa ao isika na ianareo, fa "
                    "**-nay** ho an'ny « izahay » ; matetika miova ny faran'ny anarana rehefa tafangora "
                    "izy, ohatra ny hoe ny reny no lasa reniko.",
    "fampiharana": [
        {"c": "Amboary ny anarana araka ny ohatra : ny « tanana + ahy » dia lasa « tanako ».",
         "items": ["a) tanana + ianao : ………………", "b) tanana + izy : ………………",
                   "d) tanana + izahay : ………………", "e) tanana + isika : ………………"],
         "cor": ["a) tananao", "b) tanany", "d) tananay", "e) tanantsika"]},
        {"c": "Safio valiny mety.",
         "items": ["1) Raha ao anaty izay itenenana ny olona miteny, ny ampahany ampiasaina dia …",
                   "a) -nay b) -ny d) -ntsika e) -ko",
                   "2) Ny « -ko » dia mampiseho ny tompon'ny …",
                   "a) olona itenenana b) olona miteny d) olona fahatelo e) olona marobe",
                   "3) « Ny fianarana … dia sarobidine » (izahay) : ny teny mety dia …",
                   "a) fianaranao b) fianarako d) fianaranay e) fianarantsika",
                   "4) Izay marina amin'ireto dia …",
                   "a) Ny tananoko dia maloto. b) Ny tanako dia maloto.",
                   "d) Ny tananako dia maloto. e) Ny tanana dia maloko."],
         "cor": ["1) **d) -ntsika**", "2) **b) olona miteny**", "3) **d) fianaranay**", "4) **b)**"]},
    ],
    "tombana": [
        ("Inona ny mpisolo tena tampisaka ho an'ny olona miteny ?", "-ko : « ny tanako »."),
        ("Ho an'izay itenenana kosa ?", "-nao : « ny tananao »."),
        ("Inona no mampiavaka ny « -nay » sy ny « -ntsika » ?",
         "Ny -nay dia an'ny izahay (tsy ao izay itenenana), ny -ntsika dia an'ny isika (ao izay itenenana)."),
        ("Amboary fehezanteny iray mampiasa ny « -ntsika ».",
         "Ohatra : Madio ny tanantsika, ry namako."),
    ],
    "lecon": [
        ("h", "Ny mpisolo tena tampisaka"),
        ("p", "Tafangora amin'ny faran'ny anarana ireo teny ireo hanehoana ny tompon'ny zavatra : "
              "**-ko** (aho), **-nao** (ianao), **-ny** (izy), **-nay** (izahay), **-ntsika** (isika), "
              "**-nareo** (ianareo)."),
        ("h", "Ohatra marina"),
        ("x", ["Madio ny **tanako**.", "Maloto ny **tananao**.", "Maina ny **tanany**.",
               "Madio ny **tananay**, ry mpianatra.", "Madio ny **tanantsika**, ry namako."]),
        ("h", "Ohatra diso sy ny fanitsiana"),
        ("x", ["Diso : Ny **tananoko** dia maloto. Marina : Ny **tanako** dia maloto. "
               "(fitsipika : tsy misy mpisolo roa miaraka)",
               "Diso : Maloto ny **tananay**, ry namako! Marina : Maloto ny **tanantsika**, ry namako ! "
               "(fampiasana : ao anaty « isika » ny itenenana, ka -ntsika ilay ampiasaina)",
               "Diso : Ny **tananako** dia maloto. Marina : Ny **tanako** dia maloto. "
               "(tsipelina : ny anarana mahatapitra amin'ny -a, ka ny -a iray no levona)"]),
        ("h", "Ny teny vaovao"),
        ("p", "**mpisolo tena tampisaka** : ny teny kely tafangora amin'ny anarana ; **tompony** : ny "
              "olona ananana azy ; **reny** no lasa **reniko** : ny faran'ny anarana no miova, fa tsy ny teny manontolo."),
    ],
    "fampahalalana": [
        "Ao amin'ny teny malagasy andavanandro dia matetika mifandraika amin'ny firaisankina ireo mpisolo "
        "tena ireo : « ry namako », « havana », « ray aman-dreny ». Ny fifampizarana ao an-tanàna dia "
        "manomboka amin'ireo : « Manao ahoana, ry namako ? ».",
    ],
    "retenir": [
        "-ko : an'ny miteny ; -nao : an'ny itenenana ; -ny : an'ny fahatelo.",
        "-ntsika = isika (ao izay itenenana) ; -nay = izahay (tsy ao izay itenenana).",
        "Tafangora amin'ny anarana ireo, ka matetika miova ny farany : ny reny no lasa reniko.",
    ],
    "fanazaran_tenay": [
        {"c": "Mameno ny toerana banga amin'ny mpisolo tena tampisaka mety.",
         "p": 4,
         "items": ["1) Ny fahasalamana…………… dia harena. (aho)",
                   "2) Ny fianarana…………… dia ao amin'ny seho. (ianao)",
                   "3) Ny tanana…………… dia madio, ry namako ! (isika)",
                   "4) Ny tanana…………… tsy mbola madio, ry mpianatra. (izahay)"],
         "cor": ["1) **fahasalamako**", "2) **fianaranao**",
                 "3) **tanantsika**", "4) **tananay**"]},
        {"c": "Safio valiny mety.",
         "p": 4,
         "items": ["1) « Ny soratra … dia very. » (izy)", "a) -ko b) -ny d) -nao e) -nay",
                   "2) Ny « -nareo » dia mampiseho ny …",
                   "a) izahay b) ianareo d) isika e) aho",
                   "3) Izay mampiseho ny olona itenenana dia …", "a) -nao b) -ko d) -ny e) -nay",
                   "4) « Ny … » hanehoana ny tanan'ny reny : a) ny tanan'ny reny b) ny tanareny "
                   "d) ny tanany e) ny tananony"],
         "cor": ["1) **b) -ny**", "2) **b) ianareo**", "3) **a) -nao**", "4) **a) ny tanan'ny reny**"]},
        {"c": "Amboary indray ny fehezanteny, dia lazao ny karazana'ny hadisoana ao.",
         "p": 4,
         "items": ["1) Ny volanaoko dia lava.", "2) Salama ny tananay, ry mpianatra sy ry namako !",
                   "3) Madio ny fitaovako sy ny fitaovanao.", "4) Ny sandrin'ny reniko dia madio."],
         "cor": ["1) **Ny volanao dia lava** ; karazana hadisoana : mpisolo roa.",
                 "2) **Salama ny tanantsika, ry mpianatra sy ry namako !** ; karazana hadisoana : -nay fa -ntsika.",
                 "3) **Tsy misy hadisoana**.",
                 "4) **Ny sandrin-dreniko dia madio** ; karazana hadisoana : tsipelina."]},
    ],
}

# -------------------------------------------------------------------------------- 4. Asa an-tsoratra
FICHE_TSORATRA = {
    "n": 4,
    "taranja": "Malagasy",
    "zana_taranja": "Asa an-tsoratra",
    "lohahevitra": "1. Ny fitandroana ny fahasalamana",
    "lohateny": "Firafitry ny lahatsoratra fohy",
    "tanjona": "handrafitana sy hanoratra lahatsoratra fohy (8 fehezanteny) momba ny fitandroana ny "
               "fahasalamana, araka ny firafitra : fampidirana, votoatin-kevitra, famaranana",
    "doc": "PE 5e, FRP 5e",
    "isan_ny_seho": 2,
    "durees": (5, 20, 5),

    "famerenana": [
        ("Inona no atao hoe fehezanteny ?",
         "Teny maromaro lazaina miaraka mba hanambara hevitra iray feno."),
        ("Inona ny mari-piatoana fantatrao ?",
         "Teboka, tsoraka, faingo, teboka roa, teboka amam-paingo."),
        ("Iza no mamorona lahatsoratra ?", "Ny mpanoratra."),
    ],
    "situation": "Fanontaniana : Inona no atao vao azo lahatsoratra tsara ? V.A. : Ny fandrafetana ny hevitra.",
    "fanolorana": "Androany isika dia hianatra lesona vaovao hoe : « Firafitry ny lahatsoratra fohy ». "
                  "Aorian'ity seho ity ianareo dia ho afaka handrafitana sy hanoratra lahatsoratra fohy "
                  "momba ny fitandroana ny fahasalamana.",
    "fandinihana": [
        "Jereo ny lahatsoratra ohatra voasoratra eo amin'ny tabilao : voamarika amin'ny loko telo ny "
        "ampahany telo.",
        "Lazao ny lohateny sy ny isa ny fehezanteny hita.",
    ],
    "fitaovana_fandinihana": "Lahatsoratra ohatra voasoratra eo amin'ny tabilao",
    "famakafakana": [
        ("Inona ny lohatenin'ny lahatsoratra ohatra ?", "« Ny fahasalamana no harena tena izy »."),
        ("Firy ny fehezanteny ao amin'ny fampidirana ?", "Roa (2)."),
        ("Mian'ny fehezanteny firy ka hatramin'ny firy ny votoatin-kevitra ?",
         "Ny fehezanteny faha-3 ka hatramin'ny faha-6."),
        ("Inona no antson'ny ampahany farany ?", "Famaranana."),
        ("Inona no hafatry ny fehezanteny voalohany ?",
         "Ny **fahasalamana** no harena tena izy, ka tsy mitovy amin'ny vola."),
    ],
    "tech_famakafakana": "Famakafakana ny firafitra / Asa iombonana",
    "fandravonana": "fampidirana, votoatin-kevitra ary famaranana ny firafitry ny lahatsoratra ; ny "
                    "dingana amin'ny fanoratana kosa dia efatra : fandrafetana, vakiraoka, fanitsiana, "
                    "fanehoana ny asa.",
    "fampiharana": [
        {"c": "Lazao ny anaran'ny ampahany misy ny fehezanteny tsirairay ao amin'ny ohatra "
              "« Ny fahasalamana no harena tena izy ».",
         "items": ["1) Ny fahasalamana no harena tena izy.",
                   "2) Mandroa isika isaky ny andro, ary manasa tanana isaky ny ilaina.",
                   "3) Andramo ireo fepetra ireo manomboka anio.",
                   "4) Mety very mora loatra ny harena."],
         "cor": ["1) **fampidirana**", "2) **votoatin-kevitra**", "3) **famaranana**",
                 "4) **fampidirana**"]},
        {"c": "Lazao amin'ny filaharany ny dingana efatra amin'ny fanoratana lahatsoratra.",
         "items": ["1) ……………… (famoronana ny gony hatao)", "2) ……………… (famakiana indray ny natao)",
                   "3) ……………… (fanamboarana ny hadisoana)", "4) ……………… (fampisehoana ny asa)"],
         "cor": ["1) **fandrafetana**", "2) **vakiraoka**", "3) **fanitsiana**", "4) **fanehoana**"]},
    ],
    "tombana": [
        ("Telo inona ny ampahany ao amin'ny lahatsoratra ?",
         "Fampidirana, votoatin-kevitra, famaranana."),
        ("Inona no ao amin'ny fampidirana ?", "Ny atao hoe hijerena aloha ny lahatsoratra."),
        ("Inona no atao ao amin'ny famaranana ?", "Ny fiafarana ny hevitra lehibe, na ny torohevitra omena."),
        ("Mameno : ny dingana manaraka ny fandrafetana dia …", "vakiraoka."),
    ],
    "lecon": [
        ("h", "Ohatra lahatsoratra : « Ny fahasalamana no harena tena izy »"),
        ("l", "Ny fahasalamana no harena tena izy. Mety very mora loatra ny harena, nefa ny aretina dia "
              "sarotra averina."),
        ("l", "Manomboka amin'ny fahasalamana ny fiainana tsara. Mazotoa mihinana ara-potoana sy misotro "
              "rano madio isika. Mandroa isika isaky ny andro, ary manasa tanana isaky ny ilaina. Ny "
              "fatoriana ampy koa dia tena ilaina ho an'ny olona rehetra."),
        ("l", "Raha mbola kely isika, dia izao no fotoana hanazaranana ny tena. Andramo ireo fepetra ireo "
              "manomboka anio, dia hahazo fahasalamana maharitra isika."),
        ("h", "Ny ampahany telo"),
        ("x", ["**Fampidirana** (2 fehezanteny) : mampahafantatra ny lohahevitra.",
               "**Votoatin-kevitra** (4 fehezanteny) : mamaritra ny zavatra milaza.",
               "**Famaranana** (2 fehezanteny) : mamerina ny hevi-dehibe, na manome torohevitra."]),
        ("h", "Ny dingana efatra amin'ny fanoratana"),
        ("x", ["**Fandrafetana** : izay hatao dia raisina aloha.",
               "**Vakiraoka** : vakiana indray ny voasoratra.",
               "**Fanitsiana** : ovaina ny diso.",
               "**Fanehoana** : aseho ny namana na soratanan'ny mpampianatra."]),
        ("h", "Ohatra diso sy ny fanitsiana"),
        ("x", ["Diso : Lahatsoratra tsy misy lohateny. Marina : Ny lahatsoratra dia mitaky lohateny. "
               "(rafitra)",
               "Diso : Fehezanteny rehetra mipetraka ao anaty tsipika iray. Marina : Omena anjarany ny "
               "ampahany tsirairay (fitsipika : tsy misy ampahany roa miaraka)",
               "Diso : Votoatin-kevitra tsy mifandray amin'ny lohateny. Marina : Ny zavatra rehetra "
               "dia mifandraika amin'ny lohateny. (hevitra)"]),
        ("h", "Ny teny vaovao"),
        ("p", "**fandrafitana** (fandrafetana) : ny fandaminana ny hevitra alohan'ny hanoratana ; "
              "**vakiraoka** : famakiana indray ny natao ; **votoatin-kevitra** : ny fizarana feno ny "
              "hevitra ; **famaranana** : ny farany ny lahatsoratra."),
    ],
    "fampahalalana": [
        "Ity lohatenin'ity lahatsoratra ity dia nalaina amin'ny fomba fitenin'ny Ray Aman-dreny : "
        "« Ny fahasalamana no harena », satria ny harena rehetra dia tsy misy dikany raha tsy salama ny tena.",
    ],
    "retenir": [
        "Fampidirana, votoatin-kevitra, famaranana ny firafitry ny lahatsoratra.",
        "Fandrafetana, vakiraoka, fanitsiana, fanehoana ny dingana amin'ny fanoratana.",
        "Manomboka amin'ny lohateny ny lahatsoratra tsara.",
    ],
    "fanazaran_tenay": [
        {"c": "Mameno ny toerana banga.",
         "p": 4,
         "items": ["1) Ny ampahany voalohany amin'ny lahatsoratra dia ……………….",
                   "2) Ny ampahany feno ny hevitra dia ……………….",
                   "3) Ny dingana manaraka ny fandrafetana dia ……………….",
                   "4) Ny teny eo ambony ny lahatsoratra no antsoina hoe ………………."],
         "cor": ["1) **fampidirana**", "2) **votoatin-kevitra**", "3) **vakiraoka**", "4) **lohateny**"]},
        {"c": "Safio valiny mety.",
         "p": 4,
         "items": ["1) Ny lahatsoratra tsy manana famaranana dia …",
                   "a) feno b) tsy feno d) lava e) maloto",
                   "2) Izay atao ao amin'ny fanitsiana dia …",
                   "a) manova ny diso b) manomboka manoratra d) manandrana e) mamerina",
                   "3) Misy lohateny ny lahatsoratra …",
                   "a) tsindraindray b) foana d) manaraka ny fitsipika e) raha maharitra",
                   "4) Ny isa ny fehezanteny ao amin'ny votoatin-kevitra eto amin'ny ohatra dia …",
                   "a) roa b) efatra d) enina e) sivy"],
         "cor": ["1) **b) tsy feno**", "2) **a) manova ny diso**", "3) **d) manaraka ny fitsipika**",
                 "4) **b) efatra**"]},
        {"c": "Amboary lahatsoratra fohy (5 fehezanteny) momba ny fitandroana ny fahasalamana, ary "
              "omeo lohateny azy.",
         "p": 6,
         "items": ["- omeo lohateny : ………………", "- fampidirana : 1 fehezanteny",
                   "- votoatin-kevitra : 3 fehezanteny", "- famaranana : 1 fehezanteny"],
         "cor": ["Ohatra valiny : « Ny atao isaky ny maraina. » — (fampidirana) Manomboka amin'ny maraina "
                 "ny fahasalamana. — (votoatin-kevitra) Manasa tanana aho, dia manasa endrika. Manasa nify "
                 "koa aho. Misotro rano madio alohan'ny hialana amin'ny tokana. — (famaranana) Izay no "
                 "ataoko isaky ny maraina."]},
    ],
}

SEANCES = [FICHE_BAVA, FICHE_VAKITENY, FICHE_TENY, FICHE_TSORATRA]
for _s in SEANCES:
    _s.setdefault("durees", (5, 20, 5))
