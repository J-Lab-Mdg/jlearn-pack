# -*- coding: utf-8 -*-
"""pe_t6.py — ny **rafitra ara-dalàna** : ZANA-TARANJA I→VI araka ny PE T6 (Programmes d'Études).

Transcription verbatim (tsy niovina teny) avy amin'ny :
    refs/PE_T6.txt  ->  refs/10_PE_T6_ZANATARANJA.txt (fizarana MALAGASY, l. 323-1272)
ampidirina ao anaty tabilao hoe « Vontoatiny / Sahanasa / Tetika amam-paika / Fitaovana / Tombana ».
Ny `ora` rehetra dia avy amin'ny marika « Faharetany » an'ny PE ihany (tsy hevitrasina).

    ./run.sh src/pe_t6.py      ->  mamprinta ny rafitra + ny fitsinjarana ora
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

SOURCE = "PE T6 (septambra 2026), fizarana MALAGASY — extrait : refs/10_PE_T6_ZANATARANJA.txt"

ZT = [
    {
        "n": 1,
        "anarana": "MALAGASY, KOLONTSAINA ARY FIARAHAMONINA",
        "loha": [
            {
                "titre": "Ny tanindrazana sy ny firenena",
                "ora": 20,
                "fahendrena": "maha olompirenena sy fitiavan-tanindrazana",
                "vontoatiny": [
                    ("Ny tanindrazana",
                     ["Famaritana : Ara-piforonan-teny · Ara-kevitra",
                      "Fomba hamantarana ny mpiray tanindrazana : Teny · Fomba · Tantara",
                      "Adidy tanterahin'ny olona tia tanindrazana : Fikarakarana ny lova "
                      "navelan'ny razana · Fandraisana andraikitra sy adidy · Fanajana ny "
                      "satam-pirenena"]),
                    ("Ny firenena",
                     ["Famaritana : Ara-piforonan-teny (fandrasan-teny) · Ara-kevitra",
                      "Maha firenena ny firenena : Teny ifandraisana · Faneva amantarana ny "
                      "firenena · Hiram-pirenena · Tany izay iorenana",
                      "Ohabolana sy ohapitenenana mahakasika ny tanindrazana sy ny firenena"]),
                ],
                "sahanasa": [
                    "haneho hevitra am-bava araka izay fahafantarany na izay norenesiny momba ny "
                    "« tanindrazana sy ny firenena »",
                    "hilaza ny azo hamaritana ny tanindrazana miainga amin'ny fandravonana ny teny "
                    "sy ny fandravonana ny hevitra",
                    "hilaza ireo singa hamantarana ny mpiray tanindrazana",
                    "handrasa ny teny hoe « firenena » ; hamaritra ny atao hoe « firenena » araka ny "
                    "fahafantarany azy sy araka ny teny niaviany",
                    "hitrandraka tahirin-kevitra hahafahana mamantatra ny tantaran'ny firenena, ny "
                    "fanevany, ny teny ampiasaina ao amin'ny fireneny, ny hirany ary ny harenany",
                    "hanangona ireo ohabolana na ohapitenenana mivoy fitiavan-tanindrazana",
                ],
                "tetika": ["Tosa-kevitra", "Famakiana lahatsoratra", "Fijerena sary",
                            "Fifanakalozan-kevitra", "Adihevitra"],
                "fitaovana": ["Tahirin-kevitra", "Sarin-tanin'i Madagasikara",
                               "Sary maneho ireo singa amantarana ny mpiray tanindrazana",
                               "Hiram-pirenena malagasy"],
                "tombana": [
                    "Manazava ny mampiavaka ny tanindrazana amin'ny firenena ny mpianatra.",
                    "Mampiasa voambolana na fomba fiteny na ohabolana mivoy ireo soatoavina sy/na "
                    "hasin'ny firenena sy ny tanindrazana ny mpianatra.",
                    "Manasongadina ireo toetra amam-pihetsika anehoana fitiavan-tanindrazana sy ny "
                    "firenena ny mpianatra.",
                ],
            },
            {
                "titre": "Ny olombelona sy ny tontolo iainana",
                "ora": 18,
                "fahendrena": "fanajana ny soa iombonana, fandraisana andraikitra",
                "vontoatiny": [
                    ("Ny olombelona sy ny tontolo iainana",
                     ["Famaritana : Olombelona · Tontolo iainana",
                      "Fifampiankinan'ny fiainan'ny olombelona sy ny tontolo iainana : Olombelona "
                      "sy fitrandrahana ny tontolo iainana · Tontolo iainana melona na/sy manimba "
                      "ny olombelona",
                      "Fahasimban'ny tontolo iainana : Endrika isehoany (ny fiovan'ny toetrandro) · "
                      "Antony (ara-boajanahary, avy amin'ny olombelona)",
                      "Fisorohana sy fiatrehana ny fahasimban'ny tontolo iainana",
                      "Ohabolana sy ohapitenenana mahakasika ny fifandraisan'ny olombelona sy ny "
                      "tontolo iainana"]),
                ],
                "sahanasa": [
                    "hamaritra ny atao hoe « olombelona » sy ny tontolo iainana araka izay hitany "
                    "manodidina azy",
                    "hiady hevitra sy hifampizara ny antony ilàn'ny olona ny tontolo iainana miainga "
                    "amin'ny sary sy ny anjara asan'ny olona amin'ny tontolo iainana",
                    "hanazava ny sary maneho ny fahasimban'ny tontolo iainana vokatry ny fiovaovan'ny "
                    "toetrandro sy ny loza voajanahary ary ny hetraketraky ny olombelona",
                    "haneho an-tsehatra ireo antony mahasimba ny tontolo iainana araka ny tranga "
                    "misy na iainany",
                    "hitady vahaolana ho fisorohana sy fiatrehana ny fahasimban'ny tontolo iainana",
                ],
                "tetika": ["Adihevitra", "Seho sehatra"],
                "fitaovana": ["Lahatsoratra na tahirin-kevitra", "Antontan-tsary"],
                "tombana": [
                    "Manazava ny fifampiankinana misy eo amin'ny fiainan'ny olombelona sy ny tontolo "
                    "iainana ny mpianatra.",
                    "Maneho ny heviny momba ny olana ara-tontolo iainana sy ny vahaolana mifandraika "
                    "amin'izany ny mpianatra.",
                    "Maneho ny heviny amin'ny fomba hiatrehana sy hanalefahana ny fiovan'ny "
                    "toetrandro sy ny fahasimban'ny tontolo iainana ny mpianatra.",
                ],
            },
        ],
    },
    {
        "n": 2,
        "anarana": "TONTOLON'NY LITERATIORA",
        "loha": [
            {
                "titre": "Literatiora amin'ny ankapobeny",
                "ora": 14,
                "fahendrena": "fitiavana ezaka, fikatsahana ny tsara indrindra",
                "vontoatiny": [("Literatiora",
                                ["Famaritana ny literatiora",
                                 "Loharano nipoiran'ny literatiora : Mpamorona ny literatiora · "
                                 "Tontolo manodidina"])],
                "sahanasa": ["haminavina ny atao hoe « literatiora » araka ny fahafantarany azy",
                              "hamantatra izay niavian'ny literatiora avy amin'izay nohenoiny",
                              "hanao lalao anjara asa maneho ireo loharanon'ny literatiora"],
                "tetika": ["Fifanakalozan-kevitra", "Lalao anjara asa"],
                "fitaovana": ["Horonam-peo", "Tononkalo", "Angano"],
                "tombana": ["Mamaritra ny atao hoe « literatiora » ny mpianatra.",
                             "Manome ny loharano nipoiran'ny literatiora ny mpianatra."],
            },
            {
                "titre": "Tononkalo",
                "ora": 14,
                "fahendrena": "fitiavana ezaka, fikatsahana ny tsara indrindra",
                "vontoatiny": [("Tononkalo",
                                ["Famaritana",
                                 "Firafitry ny tononkalo : Andininy · Andalana",
                                 "Singa manavaka ny tononkalo : Ngadona · Rima (rima fisaka (a-a-a), "
                                 "rima mifanjohy (a-a-b-b), rima mifampisakambina (a-b-a-b), rima "
                                 "mifampibaby (a-b-b-a))"])],
                "sahanasa": ["haminavina ny atao hoe « tononkalo » alohan'ny fihainoana/famakiana",
                             "hanamarina ny vinavina natao mandritra ny fihainoana/famakiana",
                             "hanamarika ny toetra sy endrika mampiavaka ny tononkalo novakiny : "
                             "andininy, fiovana andalana, ngadona, rima",
                             "hamoaka ny singa manavaka azy sy ny anaran'ireo toetra mampiavaka ireo",
                             "hamaky tononkalo isan-karazany voarakitra anaty boky",
                             "hanao tsianjery ny tononkalo vakiny"],
                "tetika": ["Famakiana tononkalo", "Fifanakalozan-kevitra"],
                "fitaovana": ["Tononkalo isan-karazany", "Horonam-peo"],
                "tombana": ["Manavaka ny tononkalo amin'ny asa soratra hafa ny mpianatra.",
                            "Manasongadina ny kanto raketin'ny tononkalo amin'ny famakiana sy "
                            "fiantsana izany ny mpianatra."],
            },
            {
                "titre": "Sarin-teny",
                "ora": 12,
                "fahendrena": "fitiavana ezaka, fikatsahana ny tsara indrindra",
                "vontoatiny": [("Sarin-teny",
                                ["Famaritana ny sarin-teny",
                                 "Sarin-teny miorina amin'ny tamberim-peo : Sarin-teny "
                                 "tamberin-drenifeo (Allitération) · Sarin-teny tamberin-jana-peo "
                                 "(Assonance)"])],
                "sahanasa": ["hamantatra izay fomba filazan-javatra hita fa miavaka sy manaitra ao "
                             "amin'ny tononkalo vakiny",
                             "hisintona ny azo hamaritana ny sarin-teny",
                             "hanasongadina ireo sarin-teny maneho tamberina ao anaty lahatsoratra "
                             "na tononkalo",
                             "hamantatra ny toeran'ny sarin-teny ao anaty asa soratra vakina na "
                             "henoina",
                             "hikaroka ireo sarin-teny na tamberim-peo ao anaty asa soratra",
                             "hampiasa ireo karazana sarin-teny na tamberina ao anaty asa famoronana "
                             "am-bava na an-tsoratra"],
                "tetika": ["Famakiana tononkalo", "Fandinihana lahatsoratra na tononkalo",
                            "Fifanakalozan-kevitra"],
                "fitaovana": ["Tononkalo", "Lahatsoratra", "Horonam-peo"],
                "tombana": ["Mamantatra ny sarin-teny miorina amin'ny tamberim-peo araka ny toerany "
                            "ao amin'ny fehezanteny ny mpianatra.",
                            "Mamorona asa an-tsoratra na am-bava ampiasana ny sarin-teny tamberina "
                            "ny mpianatra."],
            },
            {
                "titre": "Mpanoratra",
                "ora": 14,
                "fahendrena": "fitiavana ezaka, fikatsahana ny tsara indrindra",
                "vontoatiny": [("Mpanoratra",
                                ["Mpanoratra Jean NARIVONY na RAJAONARIVONY Jean : Tantaram-piainany "
                                 "· Fiainany ny maha mpanoratra azy · Tara-kevitra voizin'ny asa "
                                 "sorany",
                                 "Mpanoratra RAKOTOMALALA Eric Fredy Jaofera : Tantaram-piainany · "
                                 "Fiainany ny maha mpanoratra azy · Tara-kevitra voizin'ny asa "
                                 "sorany"])],
                "sahanasa": ["hamaky ireo karazana asa soratra novokarin'i Jean NARIVONY sy Fredy "
                             "JAOFERA",
                             "hamantatra ny mpanoratra amin'ny filazalazan'ny mpampianatra ny momba "
                             "izany amin'izy ireo",
                             "hitrandraka ny sanganasany ary hijery ireo mampiavaka azy",
                             "hanakatra ireo tara-kevitra voizin'ny mpanoratra",
                             "haneho ny asa soratry ny mpanoratra amin'ny fomba kanto"],
                "tetika": ["Famakiana lahatsoratra", "Asa samirery"],
                "fitaovana": ["Tahirin-kevitra"],
                "tombana": ["Milaza ny mombamomba ny mpanoratra ary mampifandray azy amin'izany asa "
                            "sorany izany ny mpianatra.",
                            "Manasongadina ny hevitra raketin'ny sangan'asan'ny mpanoratra ny "
                            "mpianatra."],
            },
        ],
    },
    {
        "n": 3,
        "anarana": "Fepetra sy tekinika fitrandrahana ireo lohahevitra",
        "loha": [
            {
                "titre": "Votoatiny",
                "ora": None,
                "fahendrena": None,
                "vontoatiny": [("Laharisa sy fandaharana",
                                ["Ny laharisan'ny boky sy ny rohy miverina (sommaire interactif)",
                                 "Fepetra ara-pedagojia nampiasaina",
                                 "Fomba fanaovana ny takela-panomanan-desa",
                                 "Fomba fitrandrahana ny lohahevitra : tahirin-kevitra, fandinihana, "
                                 "adihevitra",
                                 "Voka-pianarana (Tombana) sy ny fomba fanolorana azy"])],
                "sahanasa": [],
                "tetika": [],
                "fitaovana": [],
                "tombana": [],
            },
        ],
    },
    {
        "n": 4,
        "anarana": "FIASAN'NY TENY - Tsipelina",
        "loha": [
            {
                "titre": "Tsipelina",
                "ora": 12,
                "fahendrena": "fahatokisan-tena, fizakantena",
                "vontoatiny": [("Tsipelina",
                                ["Teny verindroa : lanjan'ny fampiasana ny teny verindroa (Manalefaka "
                                 "hevitra · Manamafy hevitra)",
                                 "Fanakambanan-teny : fepetra amin'ny fanakambanan-teny (Fananana sy "
                                 "tompony · Hetsika sy mpanao azy · Teny voalohany miafara amin'ny "
                                 "-ka, -tra, -na, teny faharoa manomboka amin'ny zana-peo sy "
                                 "manomboka amin'ny renifeo · Fampiasana mpampikambana)"])],
                "sahanasa": ["handinika ampahan-dahatsoratra",
                             "hanatsoaka ny tanjon'ny fampiasana ireo teny verindroa",
                             "hamoaka ny fepetra amin'ny fanakambanan-teny",
                             "handinika ireo teny roa nakambana ka hanatsoaka ny fifandraisany",
                             "hamaritra ny fepetra amin'ny teny tsy maintsy akambana sy ny antony "
                             "anaovana izany",
                             "hanasaraka ireo teny nakambana ka hanavaka ny teny voalohany sy ny teny "
                             "faharoa",
                             "hampiasa ao anaty fehezanteny tokana ny teny tsy mbola nakambana sy ny "
                             "teny nakambana"],
                "tetika": ["Asan-tarika", "Asa samirery"],
                "fitaovana": ["Ampahan-dahatsoratra novakina na nohenoina"],
                "tombana": ["Mampiasa ny fitsipi-panoratana ny teny verindroa anasongadinana ny "
                            "lanjan'ny fampiasan'izany ny mpianatra.",
                            "Mampiasa ny fitsipika mifehy ny fanakambanan-teny ny mpianatra.",
                            "Mamorona fehezanteny manaraka ny fomba fanoratra ny teny malagasy ny "
                            "mpianatra."],
            },
        ],
    },
    {
        "n": 5,
        "anarana": "FIASAN'NY TENY - Fitsipiky ny teny",
        "loha": [
            {
                "titre": "Fitsipiky ny teny",
                "ora": 20,
                "fahendrena": "fahatokisan-tena, fizakantena",
                "vontoatiny": [("Fitsipiky ny teny",
                                ["Tsirinteny : tovona, tovana, tsirinteny sara-droa, tsofoka",
                                 "Sokajin-teny : mpanoritra, mpamari-toetra, mpamaritr'isa, "
                                 "matoanteny",
                                 "Anjara asa fototra ao amin'ny fehezanteny : EM sy L"])],
                "sahanasa": [],
                "tetika": [],
                "fitaovana": [],
                "tombana": ["Mamorona fehezanteny mampiasa ny matoanteny sampan-teny ahitana tovona, "
                            "tovana, tsirinteny sara-droa ary tsofoka ny mpianatra.",
                            "Mamorona fehezanteny ahitana ireo sokajin-teny ny mpianatra.",
                            "Mampihatra ny paika amin'ny fandrasan-teny ny mpianatra.",
                            "Mamorona fehezanteny ahitana anjara asa EM sy L araka ny karazany ny "
                            "mpianatra."],
            },
        ],
    },
    {
        "n": 6,
        "anarana": "ASA AN-TSORATRA - Lahatsoratra manoritsoritra",
        "loha": [
            {
                "titre": "Lahatsoratra manoritsoritra",
                "ora": 20,
                "fahendrena": "fizakantena, fikirizana",
                "vontoatiny": [("Lahatsoratra manoritsoritra",
                                ["Famaritana",
                                 "Mari-pamantarana ny lahatsoratra manoritsoritra : Fitanisana · "
                                 "Mpamari-toetra maro · Teny mamaritra fotoana sy manondro toerana · "
                                 "Filazam-potoana ankehitriny · Fehezanteny fohy, tsotra",
                                 "Endriky ny lahatsoratra manoritsoritra : manoritsoritra zavatra na "
                                 "olona na toerana iray na toe-javatra iray",
                                 "Firafitry ny lahatsoratra manoritsoritra : Teny fampidirana · "
                                 "Famelabelarana na votoatiny · Teny famaranana",
                                 "Famoronana lahatsoratra manoritsoritra : Fepetra takina · Dingana "
                                 "arahina (fifantenana ny zavatra na olona na toerana soritsoritina, "
                                 "fandaharana ireo hevitra manoritsoritra, fandaminana ny "
                                 "fanehoan-kevitra)"])],
                "sahanasa": ["hihaino angano na horonam-peo maneho karazan-dahatsoratra na hamaky "
                              "karazana lahatsoratra",
                              "hamantatra ny lahatsoratra manoritsoritra miainga amin'izay nohenoiny "
                              "na novakiny",
                              "hamoaka famaritana ny lahatsoratra manoritsoritra araka ny mampiavaka "
                              "azy, ny karazany, ny hevi-dehibe sy ny hafatra raketiny",
                              "hanasongadina ny toetra mampiavaka ny lahatsoratra manoritsoritra",
                              "hanavaka ireo fizarana mandrafitra ny lahatsoratra manoritsoritra",
                              "hanangana drafitra arahana amin'ny asa famoronana"],
                "tetika": [],
                "fitaovana": [],
                "tombana": [],
            },
        ],
    },
]


def ora_rehetra():
    """Total ora isaky ny ZANA-TARANJA (araka ny « Faharetany » ao amin'ny PE)."""
    out = []
    for z in ZT:
        tot = sum((l["ora"] or 0) for l in z["loha"])
        out.append((z["n"], z["anarana"], tot, [l["titre"] for l in z["loha"]]))
    return out


def total():
    return sum(t[2] for t in ora_rehetra())


if __name__ == "__main__":
    print(SOURCE)
    for n, nom, tot, loha in ora_rehetra():
        print("ZANA-TARANJA %d · %-46s · ora %-4s · %d blok" % (n, nom[:46], tot or "—", len(loha)))
    for z in ZT:
        for l in z["loha"]:
            puces = sum(len(v[1]) for v in l["vontoatiny"])
            print("   ZT%d · %-40s ora %-4s · %2d puce vontoatiny · %2d sahansa · %d tombana"
                  % (z["n"], l["titre"][:40], l["ora"], puces, len(l["sahanasa"]),
                     len(l["tombana"])))
    print("TOTAL : ora %d  (= %d kerinandro amin'ny 4 ora/kerinandro)" % (total(), total() // 4))
