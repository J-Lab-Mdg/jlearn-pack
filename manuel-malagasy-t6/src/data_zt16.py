# -*- coding: utf-8 -*-
"""data_zt16.py — ny firaketana **vaovao** ilain'ny rafitra ZANA-TARANJA an'ny PE T6.

Misy 5 firaketana :
  ZANA-TARANJA I  · Ny tanindrazana sy ny firenena        (PE : ora 20)
  ZANA-TARANJA I  · Ny olombelona sy ny tontolo iainana   (PE : ora 18)
  ZANA-TARANJA II · Sarin-teny tamberim-peo                (PE : ora 12)
  ZANA-TARANJA V  · Ny matoanteny                          (ampahany an'ny ora 20)
  ZANA-TARANJA VI · Lahatsoratra manoritsoritra : famoronana (ampahany an'ny ora 20)

Règle : **tsy misy dikany noforimbenina**. Ny teny rehetra ao amin'ny « Vontoatiny »,
« Sahanasa », « Tetika amam-paika », « Fitaovana », « Voka-pianarana » dia **nalaina teny-teny**
avy amin'ny PE T6 (`refs/10_PE_T6_ZANATARANJA.txt`) na amin'ny FRP T6 (`refs/FRP_6eme_MLG.txt`) ;
ny loharany hafa (Programme 4e, ENS, ohabolana.org) dia voasoratra ao amin'ny
« LOHARANON-KEVITRA » ihany. Tsy misy ref inline, tsy misy teny frantsay, mangina ny `Daty`.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

RANGS = [("Taranja", "Daty"), ("Zana-taranja", "Kilasy"), ("Lohahevitra", "Seho n°"),
         (["Lohateny", "Laharany ao amin'ny FRP"], "Isan'ny seho"),
         [["V. P. M", "Fitaovana"], "Faharetany"], ("Fanovozan-kevitra", None)]


def fields(lt, zana, loha, lfk, vpm, fitaovana, faharetany, fanovozana):
    return {"rangs": RANGS, "Taranja": "Malagasy", "Daty": "__________", "Zana-taranja": zana,
            "Kilasy": "T6", "Lohahevitra": loha, "Seho n°": "—", "Lohateny": lt,
            "Laharany ao amin'ny FRP": lfk, "Isan'ny seho": "2", "V. P. M": vpm,
            "V. P. M note": "Voka-pianarana manokana (PE T6)", "Fitaovana": fitaovana,
            "Faharetany": faharetany, "Fanovozan-kevitra": fanovozana}


def grille(etapes, famerenana, tombana):
    """`etapes` = 6 × (Mpampianatra, Valiny, Tetika, Fitaovana, Fanamarihana) ;
    `famerenana` / `tombana` = (Mpampianatra, Tetika, Fanamarihana)."""
    it = ("1. Fitarihan-tsaina (3 min)", "2. Fanolorana (2 min)", "3. Fandinihana (4 min)",
          "4. Famakafakana (4 min)", "5. Fandravonana (3 min)", "6. Fampiharana (4 min)")
    rows = [("I. Famerenana (5 min)", famerenana[0], "V.A. : Mamaly.", famerenana[1],
             "Solaitrabe", famerenana[2]),
            ("II. LESONA VAOVAO (20 min)", "", "", "", "", "")]
    for nom, e in zip(it, etapes):
        rows.append((nom, e[0], "V.A. : %s" % e[1], e[2], e[3], e[4]))
    rows.append(("III. Tombana (5 min)", tombana[0], "V.A. : Hilaza.", tombana[1], "----",
                 tombana[2]))
    return rows


# ============================================================================= ZT I — 1
LT_A = "Ny tanindrazana sy ny firenena"
LESONA_A = [
    ("h2", "Ny tanindrazana"),
    ("p", "Araka ny PE T6, ZANA-TARANJA I, dia roa ny dingana hahatakarana izay atao hoe "
          "**tanindrazana** : ny *famaritana* (ara-piforonan-teny sy ara-kevitra) ary ny "
          "*adidy* mifandraika aminy. Tarihina koa ny mpianatra « *haneho hevitra am-bava araka "
          "izay fahafantarany na izay norenesiny* »."),
    ("p", "Ny singa azo andimbana hoe *ara-piforonan-teny* dia voalaza amin'ny hoe : "
          "« *hilaza ny azo hamaritana ny tanindrazana miainga amin'ny fandravonana ny teny sy* "
          "*fandravonana ny hevitra* »."),
    ("tabl", (["Singa tandrefina", "Ny voalaza amin'ny PE"],
              [["Ny tanindrazana : famaritana", "*Ara-piforonan-teny* · *Ara-kevitra*"],
               ["Fomba hamantarana ny mpiray tanindrazana", "*Teny* · *Fomba* · *Tantara*"],
               ["Adidy tanterahin'ny olona tia tanindrazana",
                "*Fikarakarana ny lova navelan'ny razana* · *Fandraisana andraikitra sy adidy* · "
                "*Fanajana ny satam-pirenena*"],
               ["Ny firenena : famaritana",
                "*Ara-piforonan-teny* (fandrasan-teny) · *Ara-kevitra*"],
               ["Maha firenena ny firenena",
                "*Teny ifandraisana* · *Faneva amantarana ny firenena* · *Hiram-pirenena* · "
                "*Tany izay iorenana*"],
               ["Ohabolana sy ohapitenenana",
                "mahakasika ny *tanindrazana* sy ny *firenena*"]])),
    ("h2", "Ohatra avy amin'ny FRP : ny adidin'ny taranaka"),
    ("ohatra", ["« *Raha toa ka tsapanao ny jaly sy tomany* »",
                "« *Niainan-drazantsika tamin'ny fanjanahantany* »",
                "« *Dia ataovy an-tsaina tsara ny jaly farahidy* »",
                "« *Tratran'ny tsy fidiny fony tamin'izany.* »"]),
    ("note", "Ireo zana-dahatsoratra ireo dia voasoratra ao amin'ny FRP T6, LFK 6i, teo ambany "
             "lohateny hoe « NY ZO SY ADIDY ARY ANDRAIKITRA / Ny adidin'ny taranaka amin'ny "
             "tanindrazana ». Miverina indroa ao aminy ny teny hoe *jaly*."),
    ("h2", "Ny firenena"),
    ("p", "Ny PE dia manoro ny mpianatra : « *handrasa ny teny « firenena »* », "
          "« *hamaritra ny atao hoe « firenena » araka ny fahafantarany azy sy araka ny teny* "
          "*niaviany* », ary « *hitrandraka tahirin-kevitra hahafahana mamantatra ny tantaran'ny* "
          "*firenena, ny fanevany, ny teny ampiasaina ao amin'ny fireneny, ny hirany ary ny* "
          "*harenany* »."),
    ("ohatra", ["« *Mijoroa ianao fa tia tanindrazana* »",
                "« *Zo anao mantsy ny hifidy malalaka* »"]),
    ("note", "Famaranana ny « Ny fitondran-tena mifandraika amin'ny fifidianana » an'ny FRP T6 : "
             "ireo teny roa ireo no teny farany amin'ireo andininy (tak. 33). Mampiseho ny "
             "*satam-pirenena* — izay anisan'ny adidy — ireo andalana ireo."),
    ("bul", ["*Tosa-kevitra* · *Famakiana lahatsoratra* · *Fijerena sary* · "
             "*Fifanakalozan-kevitra* · *Adihevitra*"]),
]

EXOS_A = [
    {"consigne": "Fenoy ny toerana banga araka ny tabilao ao amin'ny lesona.",
     "banga": ["a) Ny singa hamantarana ny mpiray tanindrazana dia : ………… , ………… , ………… .",
               "b) Ny singa maha firenena ny firenena dia : ………… , ………… , ………… , ………… .",
               "c) Ny adidin'ny olona tia tanindrazana dia : ………… , ………… , ………… ."]},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny sy ny ampahany manaraka azy ao "
                 "amin'ny lesona.",
     "tsilo": (["*Fikarakarana*", "*Fandraisana*", "*Fanajana*", "*Hiram-pirenena*"],
               ["*andraikitra sy adidy*", "*ny satam-pirenena*", "*ny lova navelan'ny razana*",
                "*singa maha firenena ny firenena*"])},
    {"consigne": "Inona no teny miverina indroa ao amin'ny zana-dahatsoratra voaloha ?"},
    {"consigne": "Lazao amin'ny teninao ny ohabolana na ohapitenenana nangoninao mivoy "
                 "fitiavan-tanindrazana, dia soraty."},
]

FANITSIANA_A = [
    {"banga": ["a) *Teny* · *Fomba* · *Tantara*",
               "b) *Teny ifandraisana* · *Faneva amantarana ny firenena* · *Hiram-pirenena* · "
               "*Tany izay iorenana*",
               "c) *Fikarakarana ny lova navelan'ny razana* · *Fandraisana andraikitra sy adidy* · "
               "*Fanajana ny satam-pirenena*"]},
    {"tsilo": (["*Fikarakarana*", "*Fandraisana*", "*Fanajana*", "*Hiram-pirenena*"],
               ["*ny lova navelan'ny razana*", "*andraikitra sy adidy*", "*ny satam-pirenena*",
                "*singa maha firenena ny firenena*"])},
    {"note": "*jaly* : « *ny jaly sy tomany* » ary « *ny jaly farahidy* »."},
    {"note": "Valiny miainga amin'izay nangonin'ny mpianatra ; tsindrio fa ny ohabolana dia "
             "mivoy ny *tanindrazana* na ny *firenena*."},
]

LOHARANO_A = [
    "PE T6 (septambra 2026), ZANA-TARANJA I « MALAGASY, KOLONTSAINA ARY FIARAHAMONINA — Ny "
    "tanindrazana sy ny firenena » : Faharetany ora 20 ; Vontoatiny, Sahanasa, Tetika amam-paika, "
    "Fitaovana sy Tombana — extrait : refs/10_PE_T6_ZANATARANJA.txt.",
    "FRP T6 éd. Oktobra 2026, LFK 6i « Support de cours — NY ZO SY ADIDY ARY ANDRAIKITRA / Ny "
    "adidin'ny taranaka amin'ny tanindrazana ».",
    "FRP T6 éd. Oktobra 2026, « Manan-danja sy mahery ny safidinao » (tak. 33).",
]

# ============================================================================= ZT I — 2
LT_B = "Ny olombelona sy ny tontolo iainana"
LESONA_B = [
    ("h2", "Ny olombelona sy ny tontolo iainana"),
    ("p", "Araka ny PE T6, ZANA-TARANJA I, dia tanterahina amin'ireo dingana dimy ny fanadinana "
          "ity lohahevitra ity."),
    ("bul", ["*Famaritana* : **Olombelona** · **Tontolo iainana**",
             "*Fifampiankinan'ny fiainan'ny olombelona sy ny tontolo iainana* : **Olombelona sy** "
             "**fitrandrahana ny tontolo iainana** · **Tontolo iainana melona na/sy manimba ny** "
             "**olombelona**",
             "*Fahasimban'ny tontolo iainana* : **Endrika isehoany** (ny fiovan'ny toetrandro) · "
             "**Antony** (ara-boajanahary, avy amin'ny olombelona)",
             "*Fisorohana sy fiatrehana ny fahasimban'ny tontolo iainana*",
             "*Ohabolana sy ohapitenenana mahakasika ny fifandraisan'ny olombelona sy ny tontolo* "
             "*iainana*"]),
    ("h2", "Ny antony — azo avy amin'ny FRP"),
    ("p", "« *Misy antony samihafa na lafin-javatra izay misy fiantraikany amin'ny* "
          "*fahasimban'ny tontolo iainana, toy ny fihenan'ny harena voajanahary, ny sehatry ny* "
          "*indostria, ny ala, ny fahasimban'ny toeram-ponenana, ny karazan-javamaniry tafiditra* "
          "*amin'ny toeram-ponenana hafa sy ny fandotoana ny karazany rehetra.* »"),
    ("note", "FRP T6, LOHAHEVITRA IX « FIATREHANA NY FIOVAN'NY TOETR'ANDRO », LFK 9 "
             "« Tahirin-kevitra » (tak. 50)."),
    ("ohatra", ["**Miharatsy ny toeram-ponenana** : « *Noho ny fihetsika nataon'ny olombelona, toy* "
                "*ny tohodrano sy fizahantany amoron-dranomasina, dia niharatsy ny toe-piainana* "
                "*voajanaharin'ny toeram-ponenana* ».",
                "**Mitombo ny isan'ny mponina** : « *Iray amin'ireo antony lehibe mahatonga ny* "
                "*fahasimban'ny tontolo iainana* »."]),
    ("h2", "Lahatsoratra : ny toerana maloto"),
    ("p", "« *Tsy fanajana ny fananana iombonana. Misy manary fako sahady eny amin'ny* "
          "*Rocade-n'Iarivo* » — « *Ny mampalahelo anefa dia misy manary fako sahady eny* "
          "*an-toerana* », araka ny gazety."),
    ("note", "FRP T6, LFK 3b « Support de cours — FANAJANA SY FIAROVANA NY FANANANA IOMBONANA / Ny "
             "toe-tsain'ny olona » (tak. 23) : « *Gazety Tia tanindrazana* – nivoaka ny 17 "
             "Aogositra 2021, nosoratan'i Pati »."),
    ("p", "Ny atao hoe **fisorohana** dia voalaza amin'ny hoe : « *hitady vahaolana ho fisorohana* "
          "*sy fiatrehana ny fahasimban'ny tontolo iainana* » ; ny **fitaovana** : "
          "*Lahatsoratra na tahirin-kevitra* · *Antontan-tsary* ; ny **tetika** : *Adihevitra* · "
          "*Seho sehatra*."),
]

EXOS_B = [
    {"consigne": "Sokajio ny antony voalaza ao amin'ny FRP : *avy amin'ny olombelona* na "
                 "*ara-boajanahary*.",
     "tsilo": (["*ny sehatry ny indostria*", "*ny fihenan'ny harena voajanahary*",
                "*ny karazan-javamaniry tafiditra*", "*ny fandotoana ny karazany rehetra*"],
               ["*avy amin'ny olombelona*", "*ara-boajanahary*", "*avy amin'ny olombelona*",
                "*avy amin'ny olombelona*"])},
    {"consigne": "Fenoy ny toerana banga.",
     "banga": ["a) Ny dingana dimy amin'ity lohahevitra ity dia : famaritana, "
               "………… , ………… , fisorohana sy fiatrehana, ………… .",
               "b) Ny endrika isehoan'ny fahasimban'ny tontolo iainana dia : ………… ."]},
    {"consigne": "Lazao ny vahaolana azonao irena ho fisorohana ny tontolo iainana any an-tananao."},
    {"consigne": "Atao seho sehatra ny olana iray hita eny amin'ny sary, dia hampisehoana azy "
                 "eo anoloan'ny kilasy."},
]

FANITSIANA_B = [
    {"tsilo": (["*ny sehatry ny indostria*", "*ny fihenan'ny harena voajanahary*",
                "*ny karazan-javamaniry tafiditra*", "*ny fandotoana ny karazany rehetra*"],
               ["*avy amin'ny olombelona*", "*ara-boajanahary*", "*avy amin'ny olombelona*",
                "*avy amin'ny olombelona*"])},
    {"banga": ["a) *fifampiankinan'ny fiainan'ny olombelona sy ny tontolo iainana* · "
               "*fahasimban'ny tontolo iainana* · *ohabolana sy ohapitenenana*",
               "b) *ny fiovan'ny toetrandro*"]},
    {"note": "Valiny miainga amin'ny tranga eny an-toerana ; ilay atao hoe *seho sehatra* no "
             "fampiharana ara-tetika an'ny PE."},
    {"note": "Jereka : ny olana voalaza, ny antony, ny voka-pianarana (fisorohana)."},
]

LOHARANO_B = [
    "PE T6 (septambra 2026), ZANA-TARANJA I « Ny olombelona sy ny tontolo iainana » : Faharetany "
    "ora 18 ; Vontoatiny, Sahanasa, Tetika amam-paika, Fitaovana sy Tombana — extrait : "
    "refs/10_PE_T6_ZANATARANJA.txt.",
    "FRP T6 éd. Oktobra 2026, LOHAHEVITRA IX « FIATREHANA NY FIOVAN'NY TOETR'ANDRO », LFK 9 "
    "« Tahirin-kevitra : NY OLANA SY VAHAOLANA AMIN'NY HAINTANY SY TONDRA-DRANO » (tak. 50).",
    "FRP T6 éd. Oktobra 2026, LFK 3b (tak. 23) : « Gazety Tia tanindrazana », 17 Aogositra 2021, "
    "nosoratan'i Pati.",
]

# ============================================================================= ZT II — Sarin-teny
LT_C = "Sarin-teny tamberim-peo : tamberin-drenifeo sy tamberin-jana-peo"
LESONA_C = [
    ("h2", "Famaritana ny sarin-teny"),
    ("p", "Ao amin'ny PE T6, ZANA-TARANJA II, ny **sarin-teny** dia fizarana mirona amin'ny "
          "*tamberim-peo* roa : « *Sarin-teny tamberin-drenifeo* » sy « *Sarin-teny* "
          "*tamberin-jana-peo* ». Ny atao hoe sarin-teny fampitahana — izay efa noresahina tamin'ny"
          " lesona momba ny literatiora manoritsoritra — dia voalaza amin'ny FRP amin'ny hoe : "
          "« *Sarin-teny fampitahana, toy ny fanomezana aina ny tsy manana aina* »."),
    ("note", "FRP T6, literatiora (tak. 63) : « *Ahitana betsaka an'ireo : filazam-potoana* "
             "*ankehitriny amin'ny matoanteny · mari-piatoana · mpamari-toetra · tambyn-teny sy* "
             "*mpanampy · mpisolo isan-karazany · sarin-teny fampitahana · teny verindroa ·* "
             "*fehezanteny fohy* »."),
    ("h2", "Ny tamberin-drenifeo"),
    ("p", "Araka ny fandaharana an'ny taranja Malagasy, ny *tamberin-drenifeo* dia « *tokana na* "
          "*mifanakaiky an-dohan-teny mifanesy* », izay atao hoe **Allitération** amin'ny teny "
          "frantsay. Ny Akademiam-Pirenena Malagasy dia manamarika azy amin'ny hoe : "
          "« *Sarinteny azo avy amin'ny tamberin-drenifeo tokana na farafaharatsiny mifanakaiky* »."),
    ("h2", "Ny tamberin-jana-peo"),
    ("p", "Ny fizarana mifanandrify amin'ny *tamberin-drenifeo* ao amin'ny asa fikarohana "
          "momba ny literatiora malagasy dia : « *Ny tamberim-janapeo na* **assonance** ». "
          "Ao amin'ny PE T6 kosa dia « *Sarin-teny tamberin-jana-peo (Assonance)* » ihany no "
          "votoatiny, ka ny *Famakiana tononkalo* sy ny *Fandinihana lahatsoratra na tononkalo* no "
          "Sahanasa lanin'ny PE hampiharana azy."),
    ("h2", "Ohatra : ny fiverenan'ny feo sy ny fototeny"),
    ("ohatra", ["« *Manan-danja sy mahery ny safidinao* »",
                "« *Aza manaiky terena sy tambazana* »",
                "« *Mijoroa ianao fa tia tanindrazana* »",
                "« *Samy manana ny safidiny ny tsirairay* »"]),
    ("p", "Amin'ireo andalana ireo dia miverina matetika ny feo **[m]** sy **[n]** "
          "(*Manan-danja* · *manaiky* · *mahery* · *samane* — *manana*), ary miverina indroa ny "
          "fototeny hoe **safidy** (*safidinao* · *safidy* · *safidiny*) : izany no atao hoe "
          "tamberina eto."),
    ("note", "« Manan-danja sy mahery ny safidinao », FRP T6, tak. 33 (andininy voalohany sy "
             "fahaefatra). Ny fifantohana eto dia momba ny fiverenan'ny feo sy ny fototeny ihany."),
    ("bul", ["*Famakiana tononkalo* · *Fandinihana lahatsoratra na tononkalo* · "
             "*Fifanakalozan-kevitra*"]),
]

EXOS_C = [
    {"consigne": "Efaso ny teny miverina ao amin'ny andininy voaloha, dia lazao ny feo "
                 "mifanakaiky."},
    {"consigne": "Ampifandraiso ny ampahany amin'ny teny sy ny anarana anoloana azy.",
     "tsilo": (["*tamberin-drenifeo*", "*tamberin-jana-peo*", "*sarin-teny fampitahana*",
                "*sarin-teny*"],
               ["*Allitération*", "*Assonance*", "*toy ny fanomezana aina ny tsy manana aina*",
                "*miorina amin'ny tamberim-peo*"])},
    {"consigne": "Hamoaka ao anaty lahatsoratra na tononkalo hafa ny tamberin-drenifeo iray, "
                 "dia soraty."},
]

FANITSIANA_C = [
    {"note": "*safidinao* · *safidy* · *safidiny* (fototeny iray) ; feo [m] sy [n] miverina "
             "matetika."},
    {"tsilo": (["*tamberin-drenifeo*", "*tamberin-jana-peo*", "*sarin-teny fampitahana*",
                "*sarin-teny*"],
               ["*Allitération*", "*Assonance*", "*toy ny fanomezana aina ny tsy manana aina*",
                "*miorina amin'ny tamberim-peo*"])},
    {"note": "Jereka : ny feo tokony ho *mifanakaiky* na *tokana* eo an-dohan-teny mifanesy."},
]

LOHARANO_C = [
    "PE T6 (septambra 2026), ZANA-TARANJA II « TONTOLON'NY LITERATIORA — Sarin-teny » : Faharetany "
    "ora 12 ; Vontoatiny, Sahanasa, Tetika amam-paika, Fitaovana sy Tombana.",
    "FRP T6 éd. Oktobra 2026, tak. 63 (literatiora) : « *Sarin-teny fampitahana, toy ny fanomezana "
    "aina ny tsy manana aina* » ; tak. 33 : « *Manan-danja sy mahery ny safidinao* ».",
    "Programme scolaire 4e (education.gov.mg) : « *ny tamberin-drenifeo tokana na mifanakaiky* "
    "*an-dohan-teny mifanesy (allitération)* » — http://www.education.gov.mg/wp-content/uploads/"
    "2016/10/Programme-Scolaire-4eme.pdf",
    "Akademiam-Pirenena Malagasy (poetawebs.e-monsite.com/pages/lahatsoratra/page-66.html, "
    "11/03/2018) : « *Ny Akorenifeo na Allitération : Sarinteny azo avy amin'ny tamberin-drenifeo* "
    "*tokana na farafaharatsiny mifanakaiky* ».",
    "Asa fikarohana (ENS-CPN, Univ. Antananarivo) : « *Ny tamberim-peo* » — « *Ny* "
    "*tamberin-drenifeo na alliteration* », « *Ny tamberim-janapeo na assonance* ».",
]

# ============================================================================= ZT V — matoanteny
LT_D = "Ny matoanteny : fototeny sy sampan-teny"
LESONA_D = [
    ("h2", "Ny matoanteny araka ny PE sy ny FRP"),
    ("p", "Ao amin'ny PE T6, ZANA-TARANJA V, ny **matoanteny** dia fizarana an'ny *Sokajin-teny* : "
          "« *Matoanteny : fototeny / sampan-teny* ». Ny asa tandrefina dia : « *hamoaka ireo* "
          "*matoanteny fototeny, matoanteny sampan-teny amin'ny fikirakirana izany amin'ny* "
          "*fandrasan-teny* »."),
    ("p", "Ny FRP T6, amin'ny fanamavinana ny mpamari-toetra, dia mametraka ny matoanteny ho "
          "modely : « *Tsy mba tahaka ny matoanteny izay ahitana tovona mivaky* […], *fa tovona* "
          "*tsy mivaky avokoa* »."),
    ("note", "FRP T6 éd. Oktobra 2026, sokajin-teny / mpamari-toetra : ny matoanteny no *ahitana* "
             "*tovona mivaky*, fa ny mpamari-toetra kosa dia manaraka tovona tsy mivaky."),
    ("h2", "Rafi-pifandraisana"),
    ("tabl", (["Karazana", "Ny teny ampiasaina amin'ny lesona teo aloha"],
              [["**Matoanteny fototeny**", "*lalao* · *tao* · *haka* · *tratra* · *vava*"],
               ["**Matoanteny sampan-teny**",
                "*milalao* · *hilalao* · *nandrifatra* · *atao* · *kitratraina*"],
               ["Fandravan-teny (marika « < »)",
                "*nilalao* **<** *n-i-lalao* · *atao* **<** *Φ-a-tao* · "
                "*kitratraina* **<** *k-i-tratr-aina*"]])),
    ("p", "Ny dingana fanoratana an'ny tabilao ambony dia ny **fandrasan-teny** efa nampiharina "
          "tamin'ny LFK 2d : teny horasaina, tsindrim-peo, fototeny sy tsirinteny, anaran'ny "
          "tsirinteny."),
    ("bul", ["*Asan-tarika* · *Asa samirery*",
             "Fitaovana : *Ampahan-dahatsoratra novakina na nohenoina*"]),
]

EXOS_D = [
    {"consigne": "Sokajio : *matoanteny fototeny* (F) na *matoanteny sampan-teny* (S).",
     "banga": ["a) *lalao* …… · b) *milalao* …… · c) *drifatra* …… · d) *nandrifatra* …… · "
               "e) *tao* …… · f) *atao* ……"]},
    {"consigne": "Efaso amin'ny marika « < » ny teny sampan-teny rehetra.",
     "tsilo": (["*milalao*", "*hilalao*", "*atao*", "*kitratraina*"],
               ["*m-i-lalao*", "*h-i-lalao*", "*Φ-a-tao*", "*k-i-tratr-aina*"])},
    {"consigne": "Mamorona fehezanteny mampiasa ny matoanteny sampan-teny ahitana tovona, tovana, "
                 "tsirinteny sara-droa ary tsofoka."},
]

FANITSIANA_D = [
    {"banga": ["a) *F* · b) *S* · c) *F* · d) *S* · e) *F* · f) *S*"]},
    {"tsilo": (["*milalao*", "*hilalao*", "*atao*", "*kitratraina*"],
               ["*m-i-lalao*", "*h-i-lalao*", "*Φ-a-tao*", "*k-i-tratr-aina*"])},
    {"note": "Ohatra : *mahafinaritra* (mpamari-toetra) · *madio* · *voalalao* — ny teny "
             "noforonina araka ny tabilao no raisina."},
]

LOHARANO_D = [
    "PE T6 (septambra 2026), ZANA-TARANJA V « FIASAN'NY TENY — Fitsipiky ny teny » : "
    "« *Matoanteny : fototeny / sampan-teny* » ; Tombana : « *Mamorona fehezanteny mampiasa ny* "
    "*matoanteny sampan-teny ahitana tovona, tovana, tsirinteny sara-droa ary tsofoka ny* "
    "*mpianatra* ».",
    "FRP T6 éd. Oktobra 2026, LFK 2a (tovona mivaky / tsy mivaky) · LFK 2b (sokajin-teny, "
    "mpamari-toetra) · LFK 2d (fandrasan-teny).",
    "Mifandray amin'ny LESONA 15 (Tsirinteny) sy LESONA 19 (Fandrasan-teny) : ny ôhatra iray ihany "
    "(*lalao*, *tao*, *haka*, *drifatra*, *kitratraina*) no namerina eto.",
]

# ============================================================================= ZT VI — famoronana
LT_E = "Famoronana lahatsoratra manoritsoritra"
LESONA_E = [
    ("h2", "Inona no horaisina aloha"),
    ("p", "Ao amin'ny PE T6, ZANA-TARANJA VI, ny **lahatsoratra manoritsoritra** dia "
          "tsy mifandraika amin'ny teny fanazavana ihany, fa amin'ny **asa an-tsoratra** : ny "
          "votoatiny dia « *Famaritana* », « *Mari-pamantarana ny lahatsoratra manoritsoritra* », "
          "« *Endriky ny lahatsoratra manoritsoritra* », « *Firafitry ny lahatsoratra* », "
          "« *Famoronana lahatsoratra manoritsoritra* »."),
    ("tabl", (["Singa", "Ny voalaza amin'ny PE"],
              [["Mari-pamantarana",
                "*Fitanisana* · *Mpamari-toetra maro* · *Teny mamaritra fotoana sy manondro* "
                "*toerana* · *Filazam-potoana ankehitriny* · *Fehezanteny fohy, tsotra*"],
               ["Endrika",
                "*manoritsoritra zavatra na olona na toerana iray na toe-javatra iray*"],
               ["Firafitra",
                "*Teny fampidirana* · *Famelabelarana na votoatiny* · *Teny famaranana*"],
               ["Famoronana",
                "*Fepetra takina* · *Dingana arahina* : *fifantenana* ny zavatra na olona na "
                "*toerana soritsoritina*, *fandaharana* ireo hevitra manoritsoritra, "
                "*fandaminana* ny *fanehoan-kevitra*"]])),
    ("p", "Ny FRP T6, amin'ny « *NY SOKAJIN-DAHATSORATRA / Ny literatiora manoritsoritra* », dia "
          "manamarika ny endriky ny lahatsoratra amin'ny **lamina** arahin'ny mpanoratra, ny "
          "**fatra** atao (habe, hafohy, halava, hakely) ary ny **sehatra** ifantohan'ny fijery sy "
          "ny fisainana."),
    ("note", "FRP T6, literatiora (tak. 63) ; ôhatra : zavatra, bika, toetran'olona, toerana."),
    ("h2", "Dingana arahina amin'ny asa famoronana"),
    ("bul", ["**1. Fifantenana** : « *fifantenana ny zavatra na olona na toerana soritsoritina* »",
             "**2. Fandaharana** : « *fandaharana ireo hevitra manoritsoritra* »",
             "**3. Fandaminana** : « *fandaminana ny fanehoan-kevitra* »",
             "**4. Drafitra** : « *hanangana drafitra arahana amin'ny asa famoronana* »"]),
    ("p", "Alohan'ny hamoronana, ny PE dia manoro : « *hihaino angano na horonam-peo maneho* "
          "*karazan-dahatsoratra na hamaky karazana lahatsoratra* », « *hamantatra ny* "
          "*lahatsoratra manoritsoritra miainga amin'izay nohenoiny na novakiny* », ary "
          "« *hanavaka ireo fizarana mandrafitra ny lahatsoratra manoritsoritra* »."),
]

EXOS_E = [
    {"consigne": "Zarao amin'ny firafitra telo : lazao ny *fampidirana*, ny *votoatiny* "
                 "(famelabelarana) ary ny *famaranana*.",
     "tsilo": (["*Ny trano niaviany* — lohateny : *Trano fahiny*",
                "*Vato sy tanany no nanaovana azy ; malefaka sy mangatsiaka ny rano ao am-paty "
                "ireo.*",
                "*Tsy misy tahaka ny tranon'ny razana akory.*"],
               ["*Teny famaranana*", "*Famelabelarana na votoatiny*", "*Teny fampidirana*"])},
    {"consigne": "Soraty fehezanteny 3 manoritsoritra ny *lakana* araka ny mari-pamantarana "
                 "efatra voalaza amin'ny tabilao."},
    {"consigne": "Mamorona drafitra ho an'ny lahatsoratra manoritsoritra ny *tanàna* "
                 "noninanao : fifantenana, fandaharana, fandaminana."},
]

FANITSIANA_E = [
    {"tsilo": (["*Ny trano niaviany* — lohateny : *Trano fahiny*",
                "*Vato sy tanany no nanaovana azy ; malefaka sy mangatsiaka ny rano ao am-paty* "
                "*ireo.*",
                "*Tsy misy tahaka ny tranon'ny razana akory.*"],
               ["*Teny fampidirana*", "*Famelabelarana na votoatiny*", "*Teny famaranana*"])},
    {"note": "Jereka : *fitanisana*, *mpamari-toetra*, *teny mamaritra fotoana sy manondro* "
             "*toerana*, *filazam-potoana ankehitriny*, *fehezanteny fohy*."},
    {"note": "Drafitra misy isa telo : ny zavatra nofantenina, ny fandaharana ny hevitra, ny "
             "fanehoana."},
]

LOHARANO_E = [
    "PE T6 (septambra 2026), ZANA-TARANJA VI « ASA AN-TSORATRA — Lahatsoratra manoritsoritra » : "
    "Faharetany ora 20 ; Vontoatiny, Sahanasa sy Tombana — extrait : "
    "refs/10_PE_T6_ZANATARANJA.txt.",
    "FRP T6 éd. Oktobra 2026, « LOHAHEVITRA I — NY SOKAJIN-DAHATSORATRA / Ny literatiora "
    "manoritsoritra » (tak. 63) : famaritana, firafitra (lamina, fatra, sehatra), mampiavaka azy.",
    "LESONA 3 (Ny literatiora manoritsoritra) no lesona mifandray : ny teny fanazavana ao aminy ihany "
    "ampiasaina eto, tsy nisy dika vaovao natao.",
]

# ============================================================================= ZT II — mpanoratra
LT_F = "Ny mpanoratra : RAKOTOMALALA Eric Fredy Jaofera (Fredy JAOFERA)"
LESONA_F = [
    ("h2", "Ny voatonona amin'ny PE"),
    ("p", "Ao amin'ny PE T6, ZANA-TARANJA II, ny **Mpanoratra RAKOTOMALALA Eric Fredy Jaofera** dia "
          "fizarana manokana eo anilan'ny an'i Jean NARIVONY, ary telo ny singa tandrefina : "
          "« *Tantaram-piainany* », « *Fiainany ny maha mpanoratra azy* », « *Tara-kevitra voizin'ny "
          "asa sorany* »."),
    ("note", "Tsy voasoratra ao amin'ny FRP T6 ny tantaran'ity mpanoratra ity : ny « NY MPANORATRA / "
             "JEAN NARIVONY na RAJAONARIVONY Jean (1898-1980) » (LFK LII 2a) ihany no rakitra ao. Ny "
             "andininy voalaza eto ambany dia nalaina teny-teny tao amin'ireo loharano hitsinjovy "
             "voalaza ao amin'ny « LOHARANON-KEVITRA »."),
    ("h2", "Tantaram-piainany"),
    ("p", "« *Fredy Jaofera izay Rakotomalala Eric Fredy Jaofera no anarany feno dia zafikelin' i "
          "Fredy Rajaofera ary samy poety izy mianaka.* »"),
    ("p", "« *Zanaka lahimatoan' Itompokolahy Rakotomalala Eugène Louis sy Itompokovavy Rajaofera "
          "Elise (Vehivavy Malagasy voalohany mpanao gazety) izy.* »"),
    ("note", "Wikipedia malagasy, « Fredy Jaofera », dinika 01/11/2026. Misy ampahany ao amin'ilay "
             "lahatsoratra izay mifangaro amin'ny momba an'i Fredy Rajaofera (1902-1968) : ilay "
             "zanaka lahimatoa dia zafikelin'izany, ka ny taona efa natao ho an'ny razana (1938, 1940, "
             "1943) dia tsy azo atao ho azy. Tsy misy lahatsoratra momba azy ao amin'ny FRP T6, ka ny "
             "marina azo tandrefina ihany no raisina eto."),
    ("h2", "Fiainany ny maha mpanoratra azy"),
    ("p", "« *Sarotra inoana toy ny gisa mainty no naha-mpanoratra an' i Fredy Jaofera fa nisy tokoa "
          "ny sakantsakana teo amin' ny fiainany* »."),
    ("p", "« *Mino ve ianao raha lazaiko hoe tsy nahay niteny malagasy i Fredy Jaofera tamin' ny "
          "fahazazany ?* »"),
    ("p", "Ny tenany : « *Vao dimy taona monja aho teto an-tany dia efa nisy tao amiko ny faniriana "
          "hanoratra* », ary : « *Noraisiko ny penina ary manoratra aho hatramin'izao.* »"),
    ("h2", "Tara-kevitra voizin'ny asa sorany"),
    ("p", "Ao amin'ny lisitra « *Ireto no boky efa nivoaka* » dia misy lohateny toy ny hoe : *Teny roa* "
          "· *Nosy mamiko* · *Ny ranomasoko* · *Fiainana* · *Iarivo* · *Malagasy isika* · *Ny "
          "Tanindrazako* · *Firenena hombam-pitiavana* · *Madagasikara*."),
    ("p", "Ny lohateny maro amin'izay dia mifandray mivantana amin'ny ZANA-TARANJA I : *tanindrazana*, "
          "*firenena*, *Madagasikara*, *Iarivo*. Ny 21 febroary 2015 dia natao tany Paris 13 ny "
          "fampisehoana « *LALAIKO NY TENINDRAZAKO* », araka ny fizarana vaovao ao amin'ny tranonkala "
          "nangonin'ny fikambanana."),
    ("h2", "Ny fikambanana"),
    ("p", "« *Ny UPEM (Union des Poètes et Ecrivains Malgaches) dia niforona ny 6 septambra 1952 tao "
          "Antananarivo. Ny fitiavana ny teny malagasy no nanetsika mpanoratra, poety, mpanao gazety 15 "
          "mirahalahy hanangana ny Fikambanana.* »"),
    ("p", "Ao amin'ny lisitry ny mpikambana dia voasoratra : « *Atoa RAKOTOMALALA Eric ( Fredy "
          "JAOFERA), Filoha lefitra mpanorina (2004-2014)* » ; ary ao amin'ireo « *10 mianadahy nanorina "
          "ny HAVATSA-UPEM Sampana Frantsa* » : « *Rakotomalala Eric na Fredy Rajaofera* »."),
    ("note", "HAVATSA-UPEM Sampana Frantsa, « Momba ny fikambanana », dinika 01/11/2026. Ny fifandraisana "
             "eo amin'ny anarana « Fredy Rajaofera » sy « Fredy Jaofera » dia voasoratra toy izay hita "
             "ao amin'ny loharano ; tsy niova na nanampiana teny akory."),
    ("h2", "Ny atao amin'ny kilasy (Sahanasa ara-PE)"),
    ("bul", ["*hamaky ireo karazana asa soratra novokarin'i Jean NARIVONY sy Fredy JAOFERA*",
             "*hamantatra ny mpanoratra amin'ny filazalazan'ny mpampianatra ny momba izany amin'izy ireo*",
             "*hamantatra ny asa soratr'i Jean NARIVONY sy Fredy JAOFERA ka hitrandraka ny sanganasany "
             "ary hijery ireo mampiavaka azy*",
             "*hanakatra ireo tara-kevitra voizin'ny mpanoratra*",
             "*haneho ny asa soratry ny mpanoratra amin'ny fomba kanto*"]),
]

EXOS_F = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny anarana sy ny mombamomba azy araka ny "
                 "lesona.",
     "tsilo": (["*Rakotomalala Eugène Louis*", "*Rajaofera Elise*", "*Fredy Rajaofera*",
                "*Toetra Ràja*"],
               ["*nanoratra ny lahatsoratra « Fantaro i Fredy Rajaofera »* ", "*rainy*", "*reniny*",
                "*razana*"])},
    {"consigne": "Fenoy ny toerana banga araka ny andininy voaloha.",
     "banga": ["a) « ………… izay » Rakotomalala Eric Fredy Jaofera no anarany feno.",
               "b) Reniny : « ………… », izay voalaza ho vehivavy malagasy voalohany mpanao gazety.",
               "c) Boky roa ao amin'ny lisitra : ………… sy …………."]},
    {"consigne": "Inona no lazain'ny lahatsoratra momba ny naha-mpanoratra an'i Fredy Jaofera ?"},
    {"consigne": "Safidio zana-dahatsoratra iray, dia haneho amin'ny fomba kanto eo anoloan'ny kilasy."},
]

FANITSIANA_F = [
    {"tsilo": (["*Rakotomalala Eugène Louis*", "*Rajaofera Elise*", "*Fredy Rajaofera*",
                "*Toetra Ràja*"],
               ["*rainy*", "*reniny*", "*razana*", "*nanoratra ny lahatsoratra « Fantaro i Fredy "
                "Rajaofera *»"])},
    {"banga": ["a) *Fredy Jaofera*", "b) *Rajaofera Elise*",
               "c) ohatra : *Teny roa* sy *Iarivo* (na ny boky roa hafa ao amin'ny lisitra)"]},
    {"note": "« *Sarotra inoana toy ny gisa mainty no naha-mpanoratra an' i Fredy Jaofera fa nisy tokoa "
             "ny sakantsakana teo amin' ny fiainany* »."},
    {"note": "Jereka araka ny Sahanasa an'ny PE : *fomba kanto*, *hanakatra ny tara-kevitra*."},
]

LOHARANO_F = [
    "PE T6 (septambra 2026), ZANA-TARANJA II, « Mpanoratra RAKOTOMALALA Eric Fredy Jaofera » : "
    "Vontoatiny 3 (tantaram-piainany · fiainany ny maha mpanoratra azy · tara-kevitra voizin'ny asa "
    "sorany), Sahanasa 5, Tetika amam-paika (Famakiana lahatsoratra · Asa samirery), Fitaovana "
    "(Tahirin-kevitra) sy Tombana 2 — extrait : refs/10_PE_T6_ZANATARANJA.txt.",
    "Wikipedia malagasy, « Fredy Jaofera » (dinika 01/11/2026) : "
    "https://mg.wikipedia.org/wiki/Fredy_Jaofera — tantaram-piainana sy lisitry ny boky.",
    "Pôetawebs, « Fantaro i Fredy Rajaofera », lahatenin'i Toetra Ràja (dinika 01/11/2026) : "
    "https://poetawebs.e-monsite.com/pages/fakafaka/page-56.html — momba ny razana (1902-1968).",
    "HAVATSA-UPEM Sampana Frantsa, « Momba ny fikambanana » (dinika 01/11/2026) : "
    "https://havatsaupemfrantsa.wixsite.com/havatsaupemfrantsa/momba-ny-fikambanana.",
    "FRP T6 éd. Oktobra 2026, LFK LII 2a : Jean NARIVONY ihany ny mpanoratra rakitra ao ; tsy misy "
    "ny an'i RAKOTOMALALA.",
]

# ============================================================================= FIRAKETANA
FICHES = [
  {
   "zt": "Kolontsaina", "zt_color": "7B3F00", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_A, "lfk": "PE ZT I · FRP LFK 6i",
   "fields": fields(LT_A, "Kolontsaina · Fiarahamonina",
                    "ZANA-TARANJA I · Malagasy, kolontsaina ary fiarahamonina",
                    "PE ZT I · FRP LFK 6i",
                    "Manazava ny mampiavaka ny tanindrazana amin'ny firenena ny mpianatra",
                    "Tahirin-kevitra · Sarin-tanin'i Madagasikara · Sary · Hiram-pirenena malagasy",
                    "ora 20", "PE T6 (sept. 2026), ZT I · FRP T6 éd. Okt. 2026, LFK 6i"),
   "grille": grille([
      ("Inona no atao hoe *fokontany* ? Lazao ny olona rehetra miara-miaina aminao.", "Mamaly",
       "Asan-tarika", "Solaitrabe", "Mampifandray ny fiarahamonina amin'ny *tanindrazana*."),
      ("Vakio amin'ny solaitrabe ny tabilao « Singa tandrefina ».", "Mihaino sy manonona",
       "Asa iombonana", "Solaitrabe", "Verbatim : ny votoatiny an'ny PE ihany no ampiasaina."),
      ("Inona no singa hamantarana ny mpiray tanindrazana ?", "Mamaly", "Asa mifampiha", "Tabilao",
       "*Teny* · *Fomba* · *Tantara*."),
      ("Fenoy an-tsoratra ny adidin'ny olona tia tanindrazana.", "Mamaly", "Asa samirery", "Kahie",
       "Adidy telo voalaza amin'ny tabilao."),
      ("Inona no maha firenena ny firenena ?", "Mamaly amin'ny tabilao", "Asa iombonana",
       "Solaitrabe", "Singa efatra : *Teny ifandraisana* · *Faneva* · *Hiram-pirenena* · *Tany*."),
      ("Lazao ny ohabolana na ohapitenenana nangoninao mivoy fitiavan-tanindrazana.", "Mamorona",
       "Asa samirery", "Kahie", "PE : *hanangona ireo ohabolana sy ohapitenenana*."),
     ], ("Inona no mampiavaka ny lahateny sy ny fehezanteny ?", "Asan-tarika",
         "Miverina amin'ny lesona momba ny sokajin-teny."),
         ("Inona no mampiavaka ny tanindrazana amin'ny firenena ?", "Asa samirery",
         "Tombana ara-PE, ZT I (lazaina am-bava).")),
   "lesona": LESONA_A, "exos": EXOS_A, "fanitsiana": FANITSIANA_A, "loharano": LOHARANO_A,
  },
  {
   "zt": "Kolontsaina", "zt_color": "7B3F00", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_B, "lfk": "PE ZT I · FRP LFX IX",
   "fields": fields(LT_B, "Kolontsaina · Fiarahamonina",
                    "ZANA-TARANJA I · Malagasy, kolontsaina ary fiarahamonina",
                    "PE ZT I · FRP LOHAHEVITRA IX",
                    "Mamantatra ny fifandraisan'ny olombelona sy ny tontolo iainana ny mpianatra",
                    "Lahatsoratra na tahirin-kevitra · Antontan-tsary", "ora 18",
                    "PE T6 (sept. 2026), ZT I · FRP T6 éd. Okt. 2026, LFK 9 (tak. 50)"),
   "grille": grille([
      ("Jereo ny antontan-tsary : inona no miseho ao ?", "Mamaly", "Asan-tarika", "Solaitrabe",
       "Ny *fandotoana* sy ny *fako* no foto-kevitry ny resaka."),
      ("Vakio ny zana-dahatsoratra momba ny *toeram-ponenana*.", "Mihaino sy manonona",
       "Asa iombonana", "Solaitrabe", "FRP T6, LFK 9 (tak. 50) : teny-teny."),
      ("Sokajio ny antony : *ara-boajanahary* na *avy amin'ny olombelona*.", "Mamaly",
       "Asa mifampiha", "Tabilao", "Dingana « *Fahasimban'ny tontolo iainana* »."),
      ("Inona no azo atao ho fisorohana ?", "Mamaly", "Asa samirery", "Kahie",
       "PE : *hitady vahaolana*."),
      ("Fenoy ny tabilao : dingana rehetra amin'ity lohahevitra ity.", "Mamaly amin'ny tabilao",
       "Asa iombonana", "Solaitrabe", "Dingana dimy avy amin'ny PE."),
      ("Hatao ny seho sehatra momba ny olana iray eny an-toerana.", "Mamorona", "Asa mifampiha",
       "Kahie", "Tetika ara-PE : *Adihevitra* · *Seho sehatra*."),
     ], ("Inona no atao hoe *tontolo iainana* araka ny fahafantaranao azy ?", "Asan-tarika",
         "Miverina amin'ny « *Famaritana* »."),
         ("Inona no antony lehibe mahatonga ny fahasimban'ny tontolo iainana ?", "Asa samirery",
         "Tombana ara-PE, ZT I.")),
   "lesona": LESONA_B, "exos": EXOS_B, "fanitsiana": FANITSIANA_B, "loharano": LOHARANO_B,
  },
  {
   "zt": "Literatiora", "zt_color": "1F6F3D", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_C, "lfk": "PE ZT II · FRP tak. 63",
   "fields": fields(LT_C, "Literatiora", "ZANA-TARANJA II · Tontolon'ny literatiora",
                    "PE ZT II · FRP tak. 33 sy 63",
                    "Manavaka ny *tamberin-drenifeo* sy ny *tamberin-jana-peo* ny mpianatra",
                    "Tononkalo · Lahatsoratra · Vakirao", "ora 12",
                    "PE T6 (sept. 2026), ZT II · FRP T6 éd. Okt. 2026 · Programme 4e · ENS-CPN"),
   "grille": grille([
      ("Inona no miverina matetika ao amin'ireo andalana ireo ?", "Mamaly", "Asan-tarika",
       "Solaitrabe", "Ny tononkalo FRP tak. 33 : « Manan-danja sy mahery ny safidinao »."),
      ("Vakio ny andininy, dia tsindrio ny feo mifanakaiky.", "Mihaino sy manonona",
       "Asa iombonana", "Solaitrabe", "*Tamberin-drenifeo*."),
      ("Inona no feo mifanakaiky hita ao amin'ny *Manan-danja* sy *manaiky* ?", "Mamaly",
       "Asa mifampiha", "Tabilao", "*[m]* sy *[n]*."),
      ("Hamoaka ny fototeny miverina ao amin'ny tononkalo.", "Mamaly", "Asa samirery", "Kahie",
       "*safidy*."),
      ("Aza mifangaro : *drenifeo* na *jana-peo* ?", "Mamaly amin'ny tabilao", "Asa iombonana",
       "Solaitrabe", "Famaritana ara-Programme 4e sy ny Akademiam-Pirenena."),
      ("Mitadià ohatra hafa ao amin'ny tononkalo na angano.", "Mamorona", "Asa mifampiha", "Kahie",
       "PE ZT II : *Famakiana tononkalo* · *Fandinihana lahatsoratra*."),
     ], ("Inona no sarin-teny efa nianarana teo amin'ny literatiora manoritsoritra ?",
         "Asan-tarika", "Miverina amin'ny lesona momba ny literatiora manoritsoritra."),
         ("Lazao ny fahasamihafana eo amin'ny *tamberin-drenifeo* sy ny *tamberin-jana-peo*.",
          "Asa samirery", "Tombana ara-PE, ZT II.")),
   "lesona": LESONA_C, "exos": EXOS_C, "fanitsiana": FANITSIANA_C, "loharano": LOHARANO_C,
  },
  {
   "zt": "Literatiora", "zt_color": "1F6F3D", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_F, "lfk": "PE ZT II · LFK LII 2a",
   "fields": fields(LT_F, "Literatiora", "ZANA-TARANJA II · Tontolon'ny literatiora",
                    "PE ZT II · LFK LII 2a",
                    "Milaza ny mombamomba ny mpanoratra ary mampifandray azy amin'izany asa sorany "
                    "izany ny mpianatra",
                    "Tahirin-kevitra", "ora 14",
                    "PE T6 (sept. 2026), ZT II · Wikipedia · Pôetawebs · HAVATSA-UPEM Frantsa"),
   "grille": grille([
      ("Iza no mpanoratra nangonina teo amin'ny kilasy hatramin'izao ?", "Mamaly", "Asan-tarika",
       "Solaitrabe", "Miverina amin'ny Jean NARIVONY."),
      ("Vakio amin'ny solaitrabe ny tantaram-piainana.", "Mihaino sy manonona", "Asa iombonana",
       "Solaitrabe", "Tahirin-kevitra : dinika 01/11/2026."),
      ("Iza no rainy, iza no reniny ?", "Mamaly", "Asa mifampiha", "Tabilao",
       "*Rakotomalala Eugène Louis* · *Rajaofera Elise*."),
      ("Inona no sakantsakana nambaran'ilay lahatsoratra ?", "Mamaly", "Asa samirery", "Kahie",
       "« *tsy nahay niteny malagasy … tamin' ny fahazazany* »."),
      ("Fenoy ny lohateny ao amin'ny boky.", "Mamaly amin'ny tabilao", "Asa iombonana", "Solaitrabe",
       "*Ny Tanindrazako* · *Firenena hombam-pitiavana*."),
      ("Haneho zana-dahatsoratra amin'ny fomba kanto.", "Mamorona", "Asa samirery", "Kahie",
       "Sahanasa ara-PE : *haneho … amin'ny fomba kanto*."),
     ], ("Inona no votoatiny telo an'ity fizarana ity?", "Asan-tarika", "*Tantaram-piainany* · "
         "*Fiainany ny maha mpanoratra azy* · *Tara-kevitra voizin'ny asa sorany*."),
         ("Ampifandraiso ny mpanoratra sy ny mombamomba azy.", "Asa samirery",
         "Tombana ara-PE, ZT II : *manasongadina ny hevitra raketin'ny sangan'asan'ny mpanoratra*.")),
   "lesona": LESONA_F, "exos": EXOS_F, "fanitsiana": FANITSIANA_F, "loharano": LOHARANO_F,
  },
  {
   "zt": "Fitsipika", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_D, "lfk": "PE ZT V · FRP LFK 2a-2d",
   "fields": fields(LT_D, "Fitsipiky ny teny", "ZANA-TARANJA V · Fiasan'ny teny",
                    "PE ZT V · FRP LFK 2a-2d",
                    "Mamorona fehezanteny mampiasa ny matoanteny sampan-teny ahitana tovona, "
                    "tovana, tsirinteny sara-droa ary tsofoka ny mpianatra",
                    "Ampahan-dahatsoratra novakina na nohenoina", "ora 20 (ampahany)",
                    "PE T6 (sept. 2026), ZT V · FRP T6 éd. Okt. 2026, LFK 2a-2d"),
   "grille": grille([
      ("Inona no matoanteny hitanao ao amin'ireo fehezanteny ireo ?", "Mamaly", "Asan-tarika",
       "Solaitrabe", "Miverina amin'ny sokajin-teny."),
      ("Vakio ny tabilao karazana matoanteny.", "Mihaino sy manonona", "Asa iombonana",
       "Solaitrabe", "*fototeny* / *sampan-teny* (PE ZT V)."),
      ("Fototeny (F) na sampan-teny (S) ?", "Mamaly", "Asa mifampiha", "Tabilao",
       "*lalao* · *drifatra* · *tao*."),
      ("Efaso amin'ny marika « < » ny teny sampan-teny.", "Mamaly", "Asa samirery", "Kahie",
       "*nilalao* **<** *n-i-lalao*."),
      ("Inona no tovona mivaky ao amin'ny *milalao* ?", "Mamaly amin'ny tabilao", "Asa iombonana",
       "Solaitrabe", "FRP LFK 2a : tovona mivaky *sy* tsy mivaky."),
      ("Mamorona fehezanteny misy matoanteny sampan-teny.", "Mamorona", "Asa samirery", "Kahie",
       "Tombana ara-PE, ZT V."),
     ], ("Avereno ny tsirinteny rehetra nianarana.", "Asan-tarika",
         "*tovona* · *tovana* · *tsofoka*."),
         ("Inona no atao hoe matoanteny fototeny ?", "Asa samirery",
         "Tombana ara-PE, ZT V : *fandrasan-teny*.")),
   "lesona": LESONA_D, "exos": EXOS_D, "fanitsiana": FANITSIANA_D, "loharano": LOHARANO_D,
  },
  {
   "zt": "Asa an-tsoratra", "zt_color": "6A4C93", "sary_tsilo": False, "pages": [],
   "zt_note": None, "faritana": "", "faritana_sous": "", "heri": "",
   "lt": LT_E, "lfk": "PE ZT VI · FRP tak. 63",
   "fields": fields(LT_E, "Asa an-tsoratra", "ZANA-TARANJA VI · Asa an-tsoratra",
                    "PE ZT VI · FRP tak. 63",
                    "Mamorona lahatsoratra manoritsoritra araka ny firafitra telo ny mpianatra",
                    "Lahatsoratra · Kahie · Vakirao", "ora 20",
                    "PE T6 (sept. 2026), ZT VI · FRP T6 éd. Okt. 2026, literatiora (tak. 63)"),
   "grille": grille([
      ("Inona no efa nianaranao momba ny literatiora manoritsoritra ?", "Mamaly", "Asan-tarika",
       "Solaitrabe", "Miverina amin'ny lesona momba ny literatiora manoritsoritra."),
      ("Vakio ny tabilao « Singa ».", "Mihaino sy manonona", "Asa iombonana", "Solaitrabe",
       "Verbatim : votoatiny an'ny PE."),
      ("Zarao ny lahatsoratra : *fampidirana* · *votoatiny* · *famaranana*.", "Mamaly",
       "Asa mifampiha", "Tabilao", "Firafitra telo (PE)."),
      ("Soraty fehezanteny 3 manoritsoritra *lakana*.", "Mamaly", "Asa samirery", "Kahie",
       "*Fitanisana* · *mpamari-toetra* · *filazam-potoana ankehitriny*."),
      ("Inona no mari-pamantarana hita ao amin'izay novokarina ?", "Mamaly amin'ny tabilao",
       "Asa iombonana", "Solaitrabe", "Fijerena ny tabilao."),
      ("Mamorona drafitra : fifantenana, fandaharana, fandaminana.", "Mamorona", "Asa mifampiha",
       "Kahie", "PE : *hanangana drafitra arahana amin'ny asa famoronana*."),
     ], ("Ambarateny: inona no lahatsoratra manoritsoritra?", "Asan-tarika",
         "Mifandray amin'ny famaritana an'ny FRP (tak. 63)."),
         ("Inona no endriky ny lahatsoratra manoritsoritra ?", "Asa samirery",
         "Tombana ara-PE, ZT VI.")),
   "lesona": LESONA_E, "exos": EXOS_E, "fanitsiana": FANITSIANA_E, "loharano": LOHARANO_E,
  },
]

if __name__ == "__main__":
    for i, f in enumerate(FICHES, start=1):
        print("%d · %-15s · %-46s · %d bloc, %d exos, %d fanitsiana, %d lignes grille"
              % (i, f["zt"], f["lt"][:46], len(f["lesona"]), len(f["exos"]), len(f["fanitsiana"]),
                 len(f["grille"])))
