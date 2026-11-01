# -*- coding: utf-8 -*-
"""T6 — **FARITANA II · FITSIPIKY NY TENY** (leçon L4-L7) : LFK 2a sy 2b sy 2c.

LOHARANO : ny **votoatiny rehetra** dia voasoro teny-teny avy amin'ny « FRP Malagasy T6 —
ÉDITION OCTOBRE 2026 », pejy 77-81 (LFK 2a *Tsirinteny* · 2b *Sokajin-teny : Mpanoritra sy
Mpamaritra* · 2c *Mpamari-toetra* sy *Mpamaritr'isa* ; kopi taloha 93 p. → p.77-81, mitovy
teny-teny). Tsy nampiasaina ny Baiboly. Tsy misy teny voforako : ny ôhatra rehetra = avy
amin'ny FRP (na amin'ny lesona teo aloha). **Tsy misy français ao amin'ny lesona** (araka ny
didin'ny mpanabe 01/11/2026) : ny fanazavana ho an'ny mpampianatra dia ao amin'ny *note*
(footer) sy amin'ny `LOHARANON-KEVITRA`.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_t6 import fiche_t6  # noqa: E402

ZT = "Fitsipika"
FAR = "FARITANA II · FITSIPIKY NY TENY"

# =========================================================== L4 · LFK 2a
LESONA_4 = [
    ("h2", "Ny atao hoe tsirinteny"),
    ("p", "« *Misy karazany efatra ny tsirinteny :* » — **Tovona** · **Tovana** · "
          "**Tsirinteny sara-droa** · **Tsofoka**. Ny tsirinteny dia ampifandraisina amin'ny "
          "**fototeny** : izany no atao hoe **sampanteny**."),
    ("sary", "tsirinteny"),
    ("h2", "Tovona mivaky"),
    ("p", "Ao amin'ny FRP dia roa sokajin'ny tovona mivaky : ny **vakiny miova** sy ny "
          "**vakiny tsy miova**. Miaraka amin'ireto tovona ireto ny **m-** : "
          "*Φ- · i- · a- · an- · ana- · aha- · anka- · ian-* ; ka « *nifanova amin'ny "
          "filazam-potoana n-/m-* » izay **vakiny miova**."""),
    ("tabl", (["Tovona mivaky", "Vakiny miova", "Vakiny tsy miova"],
              [["m- + Φ-", "*milalao*", "*m-…-a* : toy ny **m-** ihany"],
               ["m- + i-", "*milalao* ← *m-i-lalao*", "—"],
               ["m- + an- / ana- / aha- / anka- / ian-", "*mianaka* ← *m-anaka* · *mihanaka* ← "
                "*m-ianaka*", "—"]],
              [3200, 3400, 3267])),
    ("note", "Mangina ny takelaka ôfisialy amin'ity dingana ity : voasoratra fotsiny ny « Tovona "
             "mivaky / Vakiny miova / Vakiny tsy miova » sy ny lisitry ny tovona, ka ny fifanohana "
             "*n-/m-* ihany no voalaza mazava. Nohamarinina tamin'ny lesona momba ny "
             "fandravan-teny ny ôhatra — tsy nampivoarana fitsipika fanampiny eto."),
    ("h2", "Tovona tsy mivaky"),
    ("ohatra", ["**a-** : *atao* ← *Φ-a-tao*",
                "**voa-**", "**tafa-**",
                "**ha-** : *ha-lalina*"]),
    ("h2", "Tsirinteny sara-droa"),
    ("p", "Ao amin'ny FRP diafiraina toy izao ny sara-droa : **tovona vakiny tsy miova** + "
          "**fototeny** + **« -ana » na « -ina »** (ampalaina amin'ny **i-**)."),
    ("tabl", (["Tovona vakiny tsy miova", "Fototeny", "Tovana"],
              [["*Φ-i-* · *a-* · *an-* · *ana-* · *aha-* · *ian-*", "*lalao*", "**-ana** na "
                "**-ina**"]], [3600, 2200, 4067])),
    ("ohatra", ["*nilalaovana* ← *n(o)-i-lalao-v-ana*", "*hilalaovana* ← *h(o)-i-lalao-v-ana*",
                "*ilalaovana* ← *Φ-i-lalao-v-ana*", "*lalaovina* ← *Φ-lalao-v-ina*"]),
    ("h2", "Tovona famoronana anarana"),
    ("p", "« *Tovona famoronana anarana* » : **f-** · **mp-** · **ki-/ko-**. Izay "
          "hita ao amin'ny boky :"),
    ("ohatra", ["**f-** : *filalaovana* ← *f-i-lalao-v-ana* (anarana natao amin'ny matoanteny)",
                "**mp-** : *mpandrafitra*, *mpampianatra* (toy ny ao amin'ny ôhatra sy ny "
                "tantaran'i Jean Narivony)",
                "**ki-/ko-** : voalaza ao amin'ny lisitra fa tsy misy ôhatra aseho amin'ity "
                "dingana ity"]),
    ("note", "Ho an'ny mpampianatra : ao amin'ny LFK 2b dia misy *ki-* ao anaty mpamari-toetra "
             "(« *Kitratraina : ki – tratra – ina* »). Tafiditra koa izy amin'ny « tovona "
             "famoronana anarana » — ka azo atao hoôhatra ilay teny ilay, fa tsy fitsipika "
             "vaovao. Jereo koa ny lesona momba ny fandrasan-teny : eto no miseho "
             "mazava ny karazana rehetra."),
]

EXOS_4 = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny sy ny fandravany (araka ny FRP).",
     "tsilo": (["*nilalaovana*", "*hilalaovana*", "*atao*", "*filalaovana*", "*sinaritra*",
                "*ha-lalina*"],
               ["*Φ-a-tao*", "*h(o)-i-lalao-v-ana*", "*f-i-lalao-v-ana*", "*n(o)-i-lalao-v-ana*",
                "*ha- + lalina*", "*f-in-aritra*"])},
    {"consigne": "Zarao amin'ny karazana efatra ny tsirinteny ireto teny ireto (tovona mivaky · "
                 "tovona tsy mivaky · sara-droa · tsofoka) : *milalao*, *voalalao*, *lavalava*, "
                 "*talesaka*."},
    {"consigne": "Efaso ny **fototeny** ao amin'ireto sampanteny ireto : *mahafinaritra*, *madio*, "
                 "*farofy*, *kahihitra*, *vavana*."},
    {"consigne": "Soraty ny fehezanteny roa mampiseho ny m-**vakiny miova** (*n-* / *m-*) amin'ny "
                 "fototeny *lalao*."},
    {"consigne": "Inona no atao hoe tovona famoronana anarana ? Aseho roa ohatra ao amin'ny boky."},
]

FANITSIANA_4 = [
    {"tsilo": (["*nilalaovana*", "*hilalaovana*", "*atao*", "*filalaovana*", "*sinaritra*",
                "*ha-lalina*"],
               ["*n(o)-i-lalao-v-ana*", "*h(o)-i-lalao-v-ana*", "*Φ-a-tao*", "*f-i-lalao-v-ana*",
                "*f-in-aritra*", "*ha- + lalina*"])},
    {"note": "*milalao* = tovona **mivaky** ; *voalalao* = tovona **tsy mivaky** ; *lavalava* = "
             "**sara-droa** (*lava* + *lava* : verindroa, jereo ny lesona momba ny teny verindroa) ; "
             "*talesaka* = **tsofoka** (*t-al-esaka*, FRP LFK 2b)."},
    {"note": "*finaritra* · *dio* · *rofy* · *hihitra* · *vava* — araka ny fandravana ao amin'ny "
            "FRP."},
    {"note": "*milalao* (ankehitriny) / *nilalao* (lasa) / *hilalao* (ho avy) : « *nifanova amin'ny "
            "filazam-potoana n-/m-* »."},
    {"note": "Tsy voatery ho mitovy ny teny azo — ilay zava-dehibe : ny **m-** dia miverina amin'ny "
             "*milalao*, ary ny **n-** amin'ny *nilalao*."},
]

LOHARANO_4 = [
    "FRP T6 — « Fascicule de Ressources Pédagogiques », taranja Malagasy, ÉDITION OCTOBRE 2026, "
    "Minisiteran'ny Fanabeazam-pirenena : FEPETRA SY TEKINIKA ITRANDRAHANA IREO LOHAHEVITRA → "
    "LOHAHEVITRA II → FITSIPIKY NY TENY → « LFK 2a : Tsirinteny » (p.77).",
    "FRP T6 (kopi 93 p.), p.82 : « LFK 2d : Fandrasana teny » — ny fandravan-teny ampiasaina ho "
    "marina amin'ny fanamafisana ny karazana tsirinteny.",
    "RAPE T6 sept. 2026 : 4 ora/kerinandro ; Malagasy p.6-7.",
]

# =========================================================== L5 · mpanoritra
LESONA_5 = [
    ("h2", "Ny atao hoe mpanoritra"),
    ("p", "Ao amin'ny FRP dia lisitra toy izao ny mpanoritra : "
          "**i** · **ny** · **ilay** · **ry** · **Ra-/Re** · **Ikala**. Isaky ny anarana dia "
          "lazaina ny fomba fampiasana azy sy ny ôhatra."""),
    ("sary", "mpanoritra"),
    ("h2", "Ny fitsipika ara-baraka"),
    ("p", "« ***ny*** : fampiasa alohan'ny anarana sy ny karazan-teny rehetra » ; « ***ilay*** : "
          "fanao amin'ny anaran'olona na ny zavatra tondroina mafimafy kokoa na efa noresahina, "
          "na amin'ny anaram-bositr'olona na biby lahy » ; « ***Ikala*** : tsy fanao afa-tsy "
          "amin'ny anaram-bosotra olona na biby vavy » ; « ***i*** : fanao amin'ny anaran'olona "
          "**tsy misy Ra-** » ; « ***Ra*** : fanao amin'ny anaran'olona ka **mitambatra aminy "
          "mandrakariva** » ; « ***Ry*** : fanao amin'ny anaran'olona maro miaraka »."),
    ("note", "Ireto no atao hoe « fenim-panazavana ôfisialy » : ao amin'ny boky dia voasoratra "
             "toeraka ny ôhatra (*Tonga i Naivo.* · *Misaotra betsaka anao Ranaotra.* · *Ho avy "
             "ry Rabe mianakavy.* · *Moa efa tonga teo ilay mpandrafitra ?* · *Nandrifatra ilay "
             "mena ka tsy tana.* · *Vao nandatsaka Ikalamara dia tsy hita izay nandehanany.*)."),
    ("h2", "Ny vokany amin'ny fanoratana"),
    ("p", "Raha **tsy misy Ra-** ny anarana dia **i** no ampiasaina (*Tonga i Naivo.*) ; rehefa "
          "**misy Ra-** kosa dia **mitambatra** izany (*Rakoto*, fa tsy *i Rakoto*) — araka ny "
          "lazain'ny FRP etsy ambony. Koa amin'ny fanoratana dia : *Hoy Rakoto* ✓ · *Hoy i Koto* ✓ "
          "· ***Hoy i Rakoto*** ✗ (roa karazana mpanoritra eo anelanelan'ny teny iray)."),
    ("ohatra", ["*Ho avy **ry** Rabe mianakavy.*", "*Moa efa tonga teo **ilay** mpandrafitra ?*",
                "*Vao nandatsaka **Ikalamara** dia tsy hita izay nandehanany.*"]),
]

EXOS_5 = [
    {"consigne": "Safidio ny mpanoritra mety (**i** · **ny** · **ilay** · **ry** · **Ra-** · "
                 "**Ikala**) : …… Naivo · …… Rakoto · …… Rabe mianakavy · …… mena ka tsy tana."},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny mpanoritra sy ny fomba fampiasana azy "
                 "(araka ny FRP).",
     "tsilo": (["**i**", "**ilay**", "**Ikala**", "**Ry**", "**Ra**"],
               ["anaran'olona tsy misy Ra-", "zavatra tondroina mafimafy na efa noresahina",
                "anaram-bosotra olona na biby vavy", "anaran'olona maro miaraka",
                "mitambatra amin'ny anarana mandrakariva"])},
    {"consigne": "Manazava : nahoana no tsy mety « *Hoy i Rakoto* » ?"},
    {"consigne": "Soraty fehezanteny roa misy **ilay** sy **ry** ao."},
]

FANITSIANA_5 = [
    {"note": "*i* Naivo · *i* Rakoto (na **Ra**koto) · **ry** Rabe mianakavy · **ilay** mena ka "
             "tsy tana."},
    {"tsilo": (["**i**", "**ilay**", "**Ikala**", "**Ry**", "**Ra**"],
               ["anaran'olona tsy misy Ra-", "zavatra tondroina mafimafy na efa noresahina",
                "anaram-bosotra olona na biby vavy", "anaran'olona maro miaraka",
                "mitambatra amin'ny anarana mandrakariva"])},
    {"note": "Satria voalaza amin'ny FRP fa « *i* : fanao amin'ny anaran'olona **tsy misy Ra-** » ; "
             "ka *Rakoto* efa misy *Ra-* → tsy ampiasaina intsony ny *i*."},
    {"note": "Mety : *Ilay omby nataon-dRabe* · *Ry namako, mba tonga* — araka ny fitsipika etsy "
             "ambony."},
]

LOHARANO_5 = [
    "FRP T6 éd. Oktobra 2026 : LOHAHEVITRA II → FITSIPIKY NY TENY → « LFK 2b : Sokajin-teny — "
    "**Mpanoritra** » (p.78), teny-teny.",
    "Ny ôhatra rehetra (*Tonga i Naivo.*, *Misaotra betsaka anao Ranaotra.*, *Ho avy ry Rabe "
    "mianakavy.*, *Nandrifatra ilay mena ka tsy tana.*, *Vao nandatsaka Ikalamara…*) dia an'ny FRP.",
    "RAPE T6 sept. 2026 : herinandro 15→21 ho an'ny LFK 2b.",
]

# =========================================================== L6 · mpamari-toetra
LESONA_6 = [
    ("h2", "Famaritana"),
    ("p", "« *Ny atao hoe mpamari-toetra dia teny milaza endrika amam-bika, fihetsika, toetran'olona "
          "na biby na zavatra ka afaka mitana anjara asa fototra (EM, L) sy fameno no sady tsy "
          "afa-miaraka amin'ny mpisolo tena tampisaka.* ». Ary amin'ny faran'ity "
          "dingana ity : « *Ny mpamari-toetra dia teny ampiraisina amin'ny anarana na atao "
          "entimilaza mba hanambaràna ny toetran'ny zavatra tondroina amin'ilay anarana (olona, "
          "biby, zavatra sns) … Zana-tsokajin'ny mpamaritra ny mpamari-toetra.* »"),
    ("sary", "mpamari-toetra"),
    ("h2", "2.1 Mpamari-toetra foto-teny"),
    ("p", "« *Tsy azo rasaina intsony.* » — ôhatra : *kely*, *faly*, *fohy*. « *Indraindray izy dia "
          "miverin-droa* » : *lavalava*, *menamena*, *lavidavitra*."),
    ("h2", "2.2 Mpamari-toetra sampanteny"),
    ("p", "Amin'ny maha-sampan-teny azy dia « *ahitana ireo karazana tsirin-teny efatra ihany koa* » "
          ": **aman-tovona** · **aman-tovana** · **aman-tsofoka** · **aman-tsirinteny sara-droa**."),
    ("tabl", (["Karazana", "Ny lazain'ny boky", "Ôhatra"],
              [["**aman-tovona**", "« *tsy mba tahaka ny matoanteny izay ahitana tovona mivaky* », "
                "fa tovona **tsy mivaky** avokoa", "*ma-dio* · *maha-finaritra* · *ka-hihitra* · "
                "*fa-rofy*"],
               ["**aman-tovana**", "« *azo tovana -ina na -ana ihany koa* »", "*volo-ina* · "
                "*nofo-s-ana* · *vava-ana*"],
               ["**aman-tsofoka**", "« *Ny tsofoka dia **manamafy** ny hevitry ny "
                "mpamari-toetra* »", "*t-al-esaka* · *b-il-itika* · *s-ol-anga* · *f-in-aritra*"],
               ["**aman-tsirinteny sara-droa**", "« *-ina* mandrakariva ny tapany faharoa ary tsy "
                "mba vakiny tsy miova kosa ny tapany voalohany »", "*ki-tratra-ina* · "
                "*ka-ozatr(a)-ina* · *ka-(ha)raka-ina*"]],
              [1900, 4200, 3767])),
    ("ohatra", ["**tovona** hita ao amin'ireo : *sa-*, *ta-*, *bo-*, *to-*, *va-*, *ka-*, *do-*, "
                "*fa-*",
                "*Madio* : *ma-dio* — *Farofy* : *fa-rofy* — *Kahihitra* : *ka-hihitra*"]),
    ("p", "Lisitry ny mpamari-toetra omen'ny boky ho fanazaran-tena : *tsara*, *mainty*, "
          "*makirana*, *kizitina*, *lalina*, *sariaka*, *mateza*, *mando*, *mjidina*, *hentitra*, "
          "*velona*, *malazo*, *tamana*."),
    ("note", "Rohy amin'ny lesona momba ny teny verindroa : ireo « miverin-droa » ("
             "*lavalava*, *menamena*, *lavidavitra*) dia **hita** ao amin'ny FRP amin'ity dingana "
             "ity ihany — ny fampianarana ny famoronana azy dia tsy ao amin'ny boky, ka azo "
             "ampiharina ny fitsipika tamin'ny lesona L2."),
]

EXOS_6 = [
    {"consigne": "Efaso ny karazana mpamari-toetra (foto-teny · aman-tovona · aman-tovana · "
                 "aman-tsofoka · aman-tsirinteny sara-droa) : *voloina*, *sinaritra*, *fohy*, "
                 "*kitratraina*, *mahafinaritra*."},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["*talesaka*", "*bilitika*", "*solanga*", "*vavana*", "*nofosana*"],
               ["*t-al-esaka*", "*b-il-itika*", "*s-ol-anga*", "*vava-ana*", "*nofo-s-ana*"])},
    {"consigne": "Inona no atao hoe mpamari-toetra ? (Lazao araka ny boky, tsy amin'ny tenanao "
                 "manokana.)"},
    {"consigne": "Safidio mpamari-toetra ao amin'ny lisitra (*tsara*, *mainty*, *lalina*, "
                 "*mando*, *hentitra*, *tamana*) hanamboarana fehezanteny roa."},
]

FANITSIANA_6 = [
    {"note": "*voloina* = **aman-tovana** ; *sinaritra* = **aman-tsofoka** ; *fohy* = "
             "**foto-teny** ; *kitratraina* = **aman-tsirinteny sara-droa** ; *mahafinaritra* = "
             "**aman-tovona**."},
    {"note": "*talesaka*, *bilitika*, *solanga* = **tsofoka** ; *vavana* sy *nofosana* = "
             "**tovana**."},
    {"note": "Tenin'ny FRP : « teny milaza endrika amam-bika, fihetsika, toetran'olona na biby na "
             "zavatra ka afaka mitana anjara asa fototra (EM, L) sy fameno »."},
    {"note": "Ohatra : *Mainty ny volom-borona.* · *Lalina ny farihy.* — ny teny **lalina**/"
             "**mainty** eo no mpamari-toetra."},
]

LOHARANO_6 = [
    "FRP T6 éd. Oktobra 2026, p.78-80 : « LFK 2b : Sokajin-teny — **MPAMARI-TOETRA** » "
    "(Famaritana · 2.1 foto-teny · 2.2 sampanteny + ny 4 karazana).",
    "Lisitry ny mpamari-toetra (*tsara, mainty, makirana, kizitina, lalina, sariaka, mateza, mando, "
    "mjidina, hentitra, velona, malazo, tamana*) : teny-teny avy amin'ny FRP, p.80.",
    "Ny fifandraisana amin'ny teny verindroa (*lavalava, menamena, lavidavitra*) : FRP p.78 (2.1) — "
    "tsy misy ao amin'ny lisitra 13 p.80 (jereo ny *note*).",
]

# =========================================================== L7 · mpamaritr'isa
LESONA_7 = [
    ("h2", "Famaritana"),
    ("p", "« *Ny atao hoe mpamaritra isa dia teny entina ilazana isan-javatra na laharan-javatra ka "
          "sady afaka mitana anjara asa fototra sy fameno. **Tsy azo atao verindroa raha tsy "
          "asiana “tsi-” na “ki-” eo alohany.*** »."),
    ("h2", "Karazana enina"),
    ("p", "« *Misy karazany enina amin'ny ankapobeny ny mpamaritra isa* ». Indreto araka ny "
          "fandrindrana anaty tabilao — **tsy misy tsipi-panohizana** amin'ny fanoratana azy ireo "
          "(« *Atambatra fa tsy asiana tsipi-panohizana* »)."),
    ("sary", "isa"),
    ("tabl", (["Karazana", "Fomba famoronana azy", "Ôhatra"],
              [["a) milaza **isa**", "fototeny", "*iray*, *roa*, …"],
               ["b) milaza **laharana**", "tovana « *faha-* » (afa-tsy ny voalohany)",
                "*faharoa*, *fahatelo*, *fahefatra*, *fahenina*"],
               ["d) milaza **ampahany**", "tsirinteny « *am-paha-…-ny* »", "*ampahatelony*, "
                "*ampahafolony*"],
               ["e) **fampitomboana**", "tovonana « *in-* » ; *n* → *m* alohan'ny *f* sy *v*",
                "*indroa*, *intelo*, *impolo*, *imbalo*"],
               ["f) **fe-potoana** (fetr'andro)", "sara-droa « *ha-…-ana* » ; 2 hatramin'ny 8 ihany "
                "matetika", "*hateloana*, *hefarana*, *hadimiana*, *henemana*, *hafitoana*, "
                "*havaloana*"],
               ["g) **laharan'ny fampitomboana**", "« *fan-in-* » + fototeny", "*fanindroany* "
                "(*fan-in-roa-ny*), *fanindiminy*, *fanintelony*"]],
              [2350, 3800, 3717])),
    ("ohatra", ["*faha* + *efatra* → **fahefatra** (miova ny *a* → *e*)",
                "*ha* + *efatra* + *ana* → **hefarana**", "*fan* + *in* + *roa* + *ny* → "
                "**fanindroany** (*r* → *dr*)"]),
    ("note", "Misy « *c)* » tsy hita ao amin'ny boky : voalaza ny a), b), d), e), f), g) ihany — "
             "tsy nampoizina intsony izany eto. Ny fe-potoana dia « *matetika dia ny roa hatramin'ny "
             "valo ihany no ampiasana azy satria raha mihoatra an'izay dia lasa herinandro indray "
             "no isaina* » (tenin'ny FRP)."),
    ("h2", "Rohy amin'ny tsipelina"),
    ("p", "« *Tsy azo atao verindroa raha tsy asiana “tsi-” na “ki-” eo alohany* » — koa amin'ny "
          "isa dia **tsy** atao *roaroa* amin'ny fampiasana ôfisialy eto, fa ny « *tsi-* » na « *ki-* » no "
          "ilaina vao afa-miverin-droa (hita ao amin'ny *mémoire* UA 2014 kosa ny *roa* → "
          "*roaroa* → *mandroaroa* — loharano fanampiny ihany, fa ny FRP no arahina "
          "an-tsekoly). Rohy amin'ny fanakambanan-teny : **atambatra**, tsy misy « - »."),
]

EXOS_7 = [
    {"consigne": "Efaso ny karazana mpamaritr'isa (a · b · d · e · f · g) : *impolo*, "
                 "*fahatelo*, *ampahafolony*, *havaloana*, *fanindiminy*, *roa*."},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny isa sy ny laharany."},
    {"consigne": "Soraty amin'ny fomba marina : « faha + telo », « ha + enina + ana », "
                 "« fan + in + dimy + ny », « am + paha + fito + ny »."},
    {"consigne": "Nahoana no *hatoa* / *havalohana* tsy ampiasaina matetika araka ny boky ?"},
]

FANITSIANA_7 = [
    {"note": "*impolo* = e ; *fahatelo* = b ; *ampahafolony* = d ; *havaloana* = f ; *fanindiminy* "
             "= g ; *roa* = a."},
    {"note": "*iray* → voalohany · *roa* → faharoa · *telo* → fahatelo · *efatra* → fahefatra · "
             "*dimy* → fahadimy · *enina* → fahenina · *fito* → fafito · *valo* → fahavalo."},
    {"note": "**fahatelo** · **henemana** · **fanindiminy** · **ampahafiton'ny** (na "
             "*ampahafitony*, araka ny endrika *ampahatelony* ao amin'ny boky)."},
    {"note": "Satria « *raha mihoatra an'izay dia lasa herinandro indray no isaina* »."},
]

LOHARANO_7 = [
    "FRP T6 éd. Oktobra 2026, p.80-81 : « **MPAMARITR'ISA** » — Famaritana + karazana a) hatramin'ny "
    "g) + ny marika « *Atambatra fa tsy asiana tsipi-panohizana* ».",
    "Fifandraisana amin'ny fanakambanan-teny : FRP LFK 1e (p.75-76) — *faharoa*, *ampahatelony*, "
    "*hateloana*, *fanindroany*.",
    "Rakibolana / *Malagasy Dictionary and Encyclopedia* (malagasyword.org) — namerina teny "
    "*hefarana*, *fanindroany*, *impolo* ihany (tsy nampidirina ho fitsipika).",
]

FICHES = [
    fiche_t6(ZT, "Tsirinteny : tovona, tovana, sara-droa, tsofoka", "LFK 2a", "8→14", 5,
             [("Tarihina : mamaky fehezanteny misy *filalaovana*, *nilalaovana*, *ha-lalina*.",
               "Mamaky ary mitondra ny ampahany tsirairay.", "Asan-tarika", "Solaitrabe",
               "Famerenana ny fototeny sy ny tsirinteny (T6 : LFK 1a-1e)."),
              ("Lazao ny lohateny : « FITSIPIKY NY TENY / **Tsirinteny** ». Soraty ny karazana "
               "efatra ivoarany.", "Mihaino, manoratra ny lohateny.", "Asa iombonana",
               "Solaitrabe", "FRP LFK 2a sy 2e."),
              ("« *Hodihoireo ny teny rehetra misy tsirinteny ary ataovy kisaraka ny fototeny* » : "
               "*nilalaovana*, *hilalaovana*, *atao*, *sinaritra*.",
               "Manavaka ny fototeny sy ny tsirinteny.", "Asa samirery", "Kahie", ""),
              ("Zarao amin'ny **koveta** efatra ireo teny : tovona mivaky / tovona tsy mivaky / "
               "sara-droa / tsofoka.", "Mamaly, manamarika.", "Asa mifampiha", "Tabilao",
               "Atao amin'ny tabilao 4 kolona."),
              ("Ampifandraiso amin'ny alalan'ny tsilo ny teny sy ny fandravany (FANITSIANA).",
               "Mamaly amin'ny tsilo.", "Asa iombonana", "Solaitrabe", ""),
              ("Mamorona sampanteny roa amin'ny tovona *f-* sy *ha-*, lazao amin'ny fehezanteny.",
               "Mamorona, mamaky.", "Asa samirery", "Kahie", "Tombana: LFK 2a")],
             LESONA_4, EXOS_4, FANITSIANA_4, LOHARANO_4,
             faritana=FAR, faritana_sous="LFK 2a · herinandro 8→14 · ora 20",
             tombana=("Avereno ny karazana tsirinteny efatra ; jereo raha afaka manavaka azy ny "
                      "mpianatra.", "Hilaza.", "Asa samirery",
                      "Mamantatra ny karazana tsirinteny isaky ny sampanteny ny mpianatra.")),
    fiche_t6(ZT, "Sokajin-teny : ny mpanoritra", "LFK 2b", "15→21", 6,
             [("Hamaky ampahan-dahatsoratra misy *i Naivo*, *Rakoto*, *ry Rabe*, *ilay omby*.",
               "Mamaky.", "Asan-tarika", "Solaitrabe", "Famerenana ny anarana (T5/T6)."),
              ("Soraty ny lohateny sy ny lisitry ny mpanoritra : **i · ny · ilay · ry · Ra-/Re · "
               "Ikala**.", "Mihaino, manoratra.", "Asa iombonana", "Solaitrabe", "FRP LFK 2b."),
              ("Inona no fomba fampiasana an'ireo ? Diniho ny ôhatra ao amin'ny boky.",
               "Mamaky, mamaly.", "Asa mifampiha", "Tabilao", ""),
              ("Atao ampahany roa : (1) alohan'ny anarana tsy misy *Ra-* ; (2) ny anarana "
               "tondroina/efa noresahina ; (3) maro miaraka.", "Mamarina.", "Asa samirery",
               "Kahie", "Boaty 3 : *i* / *ilay* / *ry*."),
              ("Sary : izay mpanoritra dia izay fomba fampiasana azy (FANITSIANA).", "Mamaly.",
               "Asa iombonana", "Solaitrabe", ""),
              ("Mamorona fehezanteny roa ampiasana *ilay* sy *ry*.", "Mamorona.", "Asa samirery",
               "Kahie", "")],
             LESONA_5, EXOS_5, FANITSIANA_5, LOHARANO_5,
             faritana=FAR, faritana_sous="LFK 2b (mpanoritra) · herinandro 15→21 · ora 20"),
    fiche_t6(ZT, "Sokajin-teny : ny mpamari-toetra", "LFK 2b", "15→21", 7,
             [("Hamarino ny teny milaza toetra ao amin'ny fehezanteny teo aloha.", "Mamaly.",
               "Asan-tarika", "Solaitrabe", "Mpanoritra (seho 6)."),
              ("Lazao ny lohateny + ny famaritana ao amin'ny FRP.", "Mihaino.", "Asa iombonana",
               "—", "FRP p.78."),
              ("Karohy : *kely*, *faly*, *fohy* — azo rasaina ve ? Inona kosa no *lavalava* ?",
               "Mamaly.", "Asa mifampiha", "Tabilao", "2.1 foto-teny."),
              ("Zarao 4 ny sampanteny : *ma-dio*, *volo-ina*, *t-al-esaka*, *ki-tratra-ina*.",
               "Mamarina.", "Asa samirery", "Kahie", "2.2 sampanteny."),
              ("Inona no atao amin'ny tsofoka amin'ny mpamari-toetra ?", "Mamaly : "
               "« *manamafy ny hevitra* ».", "Asa iombonana", "Solaitrabe", ""),
              ("Safidio mpamari-toetra 3 avy amin'ny lisitra, ataovy ao anaty fehezanteny.",
               "Mamorona.", "Asa samirery", "Kahie", "")],
             LESONA_6, EXOS_6, FANITSIANA_6, LOHARANO_6,
             faritana=FAR, faritana_sous="LFK 2b (mpamari-toetra) · herinandro 15→21 · ora 20",
             ),
    fiche_t6(ZT, "Sokajin-teny : ny mpamaritr'isa", "LFK 2c", "15→21", 8,
             [("Lazao ny isa 1-10 amin'ny teny malagasy.", "Mamaly.", "Asan-tarika", "—",
               "Famerenana."),
              ("Soraty ny lohateny sy ny famaritana.", "Mihaino.", "Asa iombonana",
               "Solaitrabe", "FRP p.80."),
              ("Diniho : *fahatelo* / *ampahatelony* / *hateloana* / *fanintelony* — inona no "
               "miova ?", "Mamaly.", "Asa mifampiha", "Tabilao", "4 endrika amin'ny isa *telo*."),
              ("Zarao amin'ny karazana 6 ireto : *impolo*, *fahatelo*, *ampahafolony*, "
               "*havaloana*, *fanindiminy*, *roa*.", "Mamaly.", "Asa samirery", "Kahie", ""),
              ("Tsilo : isa ↔ laharana.", "Mamaly.", "Asa iombonana", "Solaitrabe", ""),
              ("Soraty ny fehezanteny: « *… aho amin'ny … andro* » amin'ny isa roa na telo.",
               "Mamorona.", "Asa samirery", "Kahie", "Tombana : LFK 2c")],
             LESONA_7, EXOS_7, FANITSIANA_7, LOHARANO_7,
             faritana=FAR, faritana_sous="LFK 2c (mpamaritr'isa) · herinandro 15→21 · ora 20",
             ),
]

FICHE = {"FICHES": FICHES}
