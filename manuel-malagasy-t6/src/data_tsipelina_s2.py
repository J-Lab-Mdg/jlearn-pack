# -*- coding: utf-8 -*-
"""T6 — lesona S2 : Tsipelina · « NY TENY VERINDROA » (V2 — rafitra I→IV)

RAFITRA (didin'ny mpanabe, 01/11/2026) = ny tanisa ** nataon'ny mpanabe ihany :
    **I. Famaritana · II. Ny heviny (a. Manalefaka / b. Manamafy) ·
     III. Ny endriny (a. verindroa tsotra / b. verindroa misy fiovana) ·
     IV. Teny verindroa isaky ny abidy** (tabilao 3 kolona).
  Ny teny famaritana sy ny ôhatra ao amin'ireo dingana ireo dia **avy amin'ny tanoran'ny
  mpanabe** (*mangady = mangadihady : hady fa tsy ady* ; *teny/teniteny* ; *faritra/fariparitra* ;
  *mamaritra/mamariparitra* ; *tsara/tsaratsara*, *very/verivery*, *maro/maromaro* ; *fantatra*,
  *fady*, *fero/fetra → fepero*, *lavaka*, *lava*, *sakana*, *sory*, *vavaka*, *vita*, *zavatra*,
  *zoto* ; ary ny lalàna **f→p, l→d, r→dr, s→ts, v→b, z→j** rehefa **miafara amin'ny -ka/-tra/-na**
  ny fototeny).

FIFANDRANANA hafa
  * VOTOATY fototra = **FRP T6, ÉDITION OCTOBRE 2026**, LFK 1d « TSIPELINA / Tanjon'ny fampiasana
    teny verindroa » sy LFK 2b/2c. Ny fehezanteny roa voalohany dia **avy teny-teny** amin'ny FRP :
    « Mihantahanta indray i Lita kely marina a ! » sy « Fepero ihany ny ankizy amin' ity tia
    mihaninkanika ity. »
  * FANAMAFIANA HO AN'NY MPAMPIANATRA = *Torolalana ho an'ny BOKY KINGAVOLA sy HAIVOLA* (MEN/D.C.I,
    éd. fahefatra, 2015) — Tsipelina, ventinasa I, herinandro-1, seho-1 + Valin'ny
    Fanazaran-tsaina 11-1 (lahatsoratra feno verindroa) ; sy *Ny endriky ny matoanteny verindroa
    amin'ny teny malagasy*, RASOLOFOSON Tovonjanahary J., mémoire Maîtrise, UA, 2014 (`refs/04`,
    `refs/06`). **Tsy ampidina amin'ny leçon** ny fenitra ara-tsiansa (karazana telo, tovona *man-*)
    fa ao amin'ny `note` ihany.
  * NY TENY : « fepero », « mihaninkanika », « matoritory » = **MARINA TANTERAKA** — ampiasaina
    **tsy misy marika** (didy 31/10 : « tsy hita ao amin'ny rakibolana ≠ diso »).
  * CADRE = PE T6 p.21-22 (« Sahanasa », « Fitaovana », « Tombana », `Faharetany : ora 12`) ;
    `Daty` : **mangina** (RAPE : « Tsy ahitana daty na vanim-potoana »). **Tsy Baiboly** nampiasaina.
  * Gabarit takela = 6 dingana, TNR 12 ; `FANAZARAN-TENA` : tabilao Word azo ovaina, **mangina ny
    filaharana valiny** ; `FANITSIANA` : sisiny + soratra + tsilo = **SARY SVG** (Tinos) iray.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import fiche  # noqa: E402

ZT = "Tsipelina"
LT = "Ny teny verindroa"

# ------------------------------------------------------------------ SAHA
FIELDS = {
    "rangs": [("Taranja", "Daty"), ("Zana-taranja", "Kilasy"),
              ("Lohahevitra", "Seho n°"), ("Lohateny", "Isan'ny seho"),
              (["V. P. M", "Fitaovana"], "Faharetany"),
              ("Fanovozan-kevitra", None)],
    "Taranja": "Malagasy",
    "Daty": "__________",
    "Zana-taranja": "Fiasan'ny teny · " + ZT,
    "Kilasy": "T6",
    "Lohahevitra": "FIASAN'NY TENY - Tsipelina (RAPE T6 herin. 1-7 · FRP LFK 1d)",
    "Seho n°": "3",
    "Lohateny": LT,
    "Isan'ny seho": "2",
    "V. P. M": "Mifehy ny fitsipi-panoratana ny teny malagasy",
    "V. P. M note": "Voka-pianarana manokana (PE T6, p.21)",
    "Fitaovana": "Ampahan-dahatsoratra novakina na nohenoina · tabilao",
    "Faharetany": "ora 12",
    "Fanovozan-kevitra": "FRP T6 éd. oct. 2026 (LFK 1d sy 2b/2c) · RAPE T6 sept. 2026, herinandro "
                         "1→7 · PE T6 p.21-22 · Torolalana KINGAVOLA/HAIVOLA (2015) · mémoire UA "
                         "2014 · tanoran'ny mpampianatra (01/11/2026)",
}

# ------------------------------------------------------------------ GRILLE (PE T6 p.21-22, 6 dingana)
GRILLE = [
    ("I. Famerenana (5 min)",
     "Araka ny natao tamin'ny seho teo aloha : inona no atao hoe teny **mitovy fanonona fa samy "
     "hafa hevitra** ? Mety atao hoe teny verindroa koa ve ireo ?",
     "V.A. : Tsy mitovy : ny verindroa dia **fototeny iray** averina indroa (*lava* → *lavalava*) ; "
     "ny mitovy fanonona kosa dia **roa** teny samy hafa hevitra (*mianaka* / *mihanaka*).",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (… min)",),
    ("1. Fitarihan-tsaina (3 min)",
     "Tarihina ny mpianatra hamaky ny fehezanteny roa natao an-tsoratra (FRP T6 éd. 2026, LFK 1d) "
     ": « Mihantahanta indray i Lita kely marina a ! » sy « Fepero ihany ny ankizy amin' ity tia "
     "mihaninkanika ity. »",
     "Mamaky.",
     "Asan-tarika", "Ampahan-dahatsoratra", ""),
    ("2. Fanolorana (2 min)",
     "Lazao ny lohateny : « TSIPELINA / **Ny teny verindroa** » ; soraty amin'ny solaitrabe ny "
     "fizarana efatra : **I. Famaritana · II. Ny heviny · III. Ny endriny · IV. Isaky ny "
     "abidy**.\n"
     "Soraty amin'ny tabilao : *lava* / *lavalava* · *tsara* / *tsaratsara* · *faritra* / "
     "*fariparitra*.",
     "Mihaino, manaraka amin'ny takelaka.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana (4 min)",
     "Diniho ny teny voalohany sy ny faharoa.\n"
     "*lava* → *lavalava* · *tsara* → *tsaratsara* · *mangady* → *mangadihady*\n"
     "Inona no miverina ao amin'ny teny ? *hady* na *ady* no fototeny an'ny *mangadihady* ?",
     "V.A. : ny **fototeny ihany** no miverina indroa, fa tsy ny tsirin-teny ; *mangady* → "
     "*mangadihady* → **hady** no fototeny (fa tsy *ady*).",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana (4 min)",
     "Zarao amin'ny **karazana roa** (III.a sy III.b) ireo ôhatra rehetra : *verindroa tsotra* na "
     "*verindroa misy fiovana*.\n"
     "*tsaratsara* · *verivery* · *maromaro* · *fantapantatra* · *lavadavaka* · *sakantsakana* · "
     "*fepero* · *zavajavatra*",
     "V.A. : (a) tsotra : tsaratsara, verivery, maromaro ; (b) misy fiovana : fantapantatra (f→p), "
     "lavadavaka (l→d), sakantsakana (s→ts), fepero (f→p, *fetra*), zavajavatra (z→j).",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana (3 min)",
     "Ampifandraiso amin'ny alalan'ny tsilo : ny teny verindroa sy ny dikany.\n"
     "Jerena ny tabilao IV (« isaky ny abidy ») : inona no kolona roa ahitana anao feno ?",
     "V.A. : ny fototeny **averina indroa** ; mety **manalefaka** na **manamafy** ny hevitry ny "
     "teny fototra, araka ny dikan'ny fototeny sy ny toe-javatra ao anaty fehezanteny.",
     "Asa iombonana", "Solaitrabe · tabilao", ""),
    ("6. Fampiharana (4 min)",
     "Fenoy ny banga, dia misafidy ny **R** (roa teny voalaza indroa) na **V** (teny iray "
     "averina = verindroa).",
     "V.A. : ireo valiny voasoratra ao amin'ny FANITSIANA.\n"
     "Mamaly",
     "Asa samirery", "Kahie", ""),
    ("III. Tombana (5 min)",
     "Mamaritra ny seho amin'ny alalan'ny « Tombana » an'ny PE : « Mampiasa ny fitsipi-panoratana "
     "ny teny verindroa anasongadinana ny lanjan'ny fampiasana izany ny mpianatra. »",
     "Hilaza.",
     "Asa samirery", "----", ""),
]

# ------------------------------------------------------------------ LESONA (I → IV)
LESONA = [
    # ============================== I. FAMARITANA
    ("h2", "I. Famaritana"),
    ("p", "Amin'ny teny verindroa dia ny **fototeny ihany** no miverina indroa, fa **tsy** miaraka "
          "amin'ny **tsirin-teny**."),
    ("p", "Ny teny verindroa koa no **fitaovana tena mandaitra** hahafantarana ny **fototeny** "
          "an'ny teny iray : manamora ny fandrasana an'ilay teny raha misy tsirin-teny miaraka "
          "aminy."),
    ("ohatra", ["*mangady* → **mangadihady** → **hady** no fototeny, fa tsy *ady*.",
                "*teny* → **teniteny** · *miteny* → **miteniteny** (fa tsy *tenymiteny*).",
                "*faritra* → **fariparitra** : ny **f** dia miova **p** amin'ny teny faharoa.",
                "*mamaritra* → **mamariparitra** (fa tsy *mamaritramamaritra*)."]),
    ("note", "Roa ny atao hoe « fizarana » eto : ny FRP T6 (LFK 1d) dia manamarika ny **tanjona** "
             "ihany (« Tanjon'ny fampiasana teny verindroa »), fa ny rafitra **I → IV** (Famaritana · "
             "heviny · endriny · abidy) no manome ny **leçon feno** ; izay no arahina amin'ity "
             "takelaka ity. Fanamafisan'ny mémoire UA 2014 (§1.1.1.1) : « ny verindroa amin'ny "
             "haiteny dia fisehoan-javatra ahitana **fiverenana ny fototeny** », ary « **ataon'ny "
             "mpiteny ankehitriny verindroa anefa ny sampanteny** » — ka rehefa tovonina amin'ny "
             "*man-* dia miditra ao anaty verindroa ny renifeon'ny tovona (*fafa* → **mamafamafa** ; "
             "*haka* → **mangakangaka** ; *zaka* → **manjakazaka*) : **verindroa** ireo koa, ary "
             "azony atao hoe « misy fiovana » araka ny III.b. Tsy ilaina ny manamarika izany amin'ny "
             "tombana."),

    # ============================== II. NY HEVINY
    ("h2", "II. Ny heviny"),
    ("p", "**a. Manalefaka** — ampihena, halemy kokoa ny herin'ny hevitra :"),
    ("ohatra", ["« **Mihantahanta** indray i Lita kely marina a ! » (FRP T6, LFK 1d).",
                "*lava* → **lavalava** = « un peu long » · *lavitra* → **lavidavitra** = « un peu "
                "loin » (FRP, LFK 2b ; malagasyword).",
                "*mena* → **menamena** = « rouge clair, rougeâtre ».",
                "*hosy* → **hosihosy** (mémoire UA 2014, TOVANA II, and. 263) : « vereno indroa io "
                "hosy io mba **halemy** tsara »."]),
    ("p", "**b. Manamafy** — amplomboina, atao maty paika kokoa ny hevitra :"),
    ("ohatra", ["« **Fepero** ihany ny ankizy amin' ity tia **mihaninkanika** ity. » (FRP T6, LFK "
                "1d).",
                "« **Tady** verindroa io ka **tsy tapaka** intsony. » · « Aleo atao verindroa io "
                "**kofehy** io mba **ho mafy**. » · « **Naverina indroa** ny **loko**n'ny trano ka "
                "**matevina** tsara. » (mémoire UA 2014, §1.1.1)",
                "*atory* → **matoritory** : ny teny *matory* no naverina, ka **mihamafy** ny hevitra "
                "(FRP LFK 1d ; mémoire §1.1.3.2).",
                "*soritra* → **soritsoritra** → **manoritsoritra** : izay no anarana ny « "
                "Lahatsoratra manoritsoritra » (FRP T6, LOHAHEVITRA I)."]),
    ("p", "Koa **ny dikan'ny fototeny sy ny toe-javatra ao anaty fehezanteny** no mamaritra ny "
          "hevy, fa tsy ny fiverenana ihany : ny teny iray ihany dia mety ho **manalefaka** amin'ny "
          "fehezanteny iray ary **manamafy** amin'ny hafa."),
    ("note", "Lanja fahatelo hita amin'ny fikarohana (mémoire UA 2014, §1.1.1.2) : ny verindroa dia "
             "mety **manova hevitra** tanteraka ny fototeny (*vanaka* → *vananaka*). **Tsy "
             "ampidirina** amin'ny leçon na amin'ny tombana izany ; ampiasao amin'ny fanazavana "
             "am-bava ihany, raha misy mpianatra manontany. Ny *Torolalana* 2015 kosa dia nilaza "
             "hoe « **matetika** natao hanalefaka ny hevitra » ny verindroa : **ny FRP T6 no "
             "arahina** eto (roa tanjona), satria boky ho an'ny ambaratonga voalohany ilay *Torolalana*."),

    # ============================== III. NY ENDRINY
    ("h2", "III. Ny endriny"),
    ("p", "**a. Ny verindroa tsotra** — *tsotra* ilay teny verindroa raha **miverina manontolo** ny "
          "fototeny ; **tsy** miafara amin'ny *-ka*, *-tra*, *-na* ireo."),
    ("ohatra", ["*tsara* → **tsaratsara** · *very* → **verivery** · *maro* → **maromaro**",
                "*vita* → **vitavita** · *zoto* → **zotozoto** · *mena* → **menamena**",
                "*ela* → **elaela** · *miova* → **miovaova** · *rava* → **ravarava** · *vily* → "
                "**nivilivily** · *toro* → **atorotoro** · *laza* → **malazalaza** (Torolalana 2015, "
                "Valin'ny Fanazaran-tsaina 11-1)"]),
    ("p", "**b. Ny verindroa misy fiovana** — *misy fiovana* matetika ny teny faharoa rehefa "
          "manomboka amin'ny fototeny **f** (miova **p**), **l** (miova **d**), **r** (miova **dr**), "
          "**s** (miova **ts**), **v** (miova **b**), **z** (miova **j**) ka **miafara amin'ny "
          "-ka, -tra, -na** ilay fototeny."),
    ("ohatra", ["*fantatra* → **fantapantatra** (f → p) · *faritra* → **fariparitra** (f → p)",
                "*fetra* → **fe** + **pe**tra → **fepetra** → (atao mandidy) **fepero** : ny "
                "*fetra* no miverina, fa tsy ny *fe* ; miafara amin'ny *-tra*.",
                "*lavaka* → **lavadavaka** (l → d, satria miafara amin'ny *-ka*) · fa *lava* → "
                "**lavalava** (miafara amin'ny *-va* : tsy misy fiovana)",
                "*sakana* → **sakantsakana** (miafara amin'ny *-na*, s → ts) · *sory* → "
                "**sorisory**",
                "*vavaka* → **vavabavaka** (v → b, satria miafara amin'ny *-ka* ilay teny) · "
                "*zavatra* → **zavajavatra** (z → j)",
                "*fady* → **fadifady** · *ady* → **adidy** · *maty* → **matimaty** — eto dia ny "
                "**feo farany** (y) no miova ho *i*, fa tsy ny renifeo."]),
    ("p", "Ireo lohateny hita tetsy ambony dia mifanaraka amin'ireo hita amin'ny **fanakambanan-"
          "teny** (FRP, LFK 1e) : *s → ts*, *f → p*, *v → b*, *l → d*. Misy koa amin'ny "
          "**verindroa** koa ny **r → dr** sy ny **z → j**."),
    ("note", "Famaritana fanampiny (Torolalana 2015, Tsipelina ventinasa I) : manavaka koa izy « ireo "
             "**tsy ahitana fiovana** (*ela*/*elaela*) » sy « ireo **mirakitra fiovana** (*sarotra*/"
             "*sarotsarotra* : **s>ts** · *javona*/*manjavojavona* : **z>j** · *faritra*/"
             "*voafariparitra* : **f>p**) ». Miova ihany koa ny feo rehefa averina ny fototeny "
             "*misy tsindrim-peo* : *boka* → **boboka**, *kibo* → **kibobo** (a → o — mémoire UA "
             "2014, §1.1.3.2)."),

    # ============================== IV. ISAKY NY ABIDY
    ("h2", "IV. Teny verindroa isaky ny abidy"),
    ("p", "Abidy iray isaky ny andiany : eo amin'ny kolona **a** ny **verindroa tsotra**, eo amin'ny "
          "kolona **b** ny **verindroa misy fiovana** (voasoratra anaty honakona ny litera miova). Ny "
          "teny voalohany ao amin'ny tabilao dia ny **fototeny** ; ny manaraka ny zana-tsipìka "
          "dia ny endrika **verindroa**."),
    ("tabl", (["Abidy", "a. Verindroa tsotra", "b. Verindroa misy fiovana"],
              [["**a**", "—", "*ady* → **adidy** (y → i)"],
               ["**b**", "—", "*boka* → **boboka** (a → o)"],
               ["**d**", "—", "—"],
               ["**e**", "—", "—"],
               ["**f**", "*fady* → **fadifady** (y → i)",
                "*faritra* → **fariparitra** (f → p) · *fetra* → **fepero**"],
               ["**g**", "—", "—"],
               ["**h**", "*hohoka* → **hohokohoka**", "*haka* → **mangakangaka** (h → k)"],
               ["**i**", "—", "—"],
               ["**j**", "—", "*javona* → **manjavojavona** (z → j)"],
               ["**k**", "*kalo* → **kalokalo**", "*kibo* → **kibobo** (a → o)"],
               ["**l**", "*lava* → **lavalava** · *lehy* → **lehalehy**",
                "*lavaka* → **lavadavaka** (l → d) · *lavitra* → **lavidavitra**"],
               ["**m**", "*maro* → **maromaro** · *mena* → **menamena**",
                "*many* → **manimany** (m → n)"],
               ["**n**", "*nofy* → **nofinofy**", "*nenina* → **maneninenina**"],
               ["**o**", "—", "—"],
               ["**p**", "—", "*potika* → **potipotika** (a → i)"],
               ["**r**", "*roa* → **roaroa** · *rava* → **ravarava**", "(*r → dr* : ôhatra tsy mbola "
                "voamarina)"],
               ["**s**", "*sory* → **sorisory** (y → i)",
                "*sarotra* → **sarotsarotra** (s → ts) · *sakana* → **sakantsakana**"],
               ["**t**", "—", "*telo* → **tetelo** (l → t) · *tapaka* → **tapatapaka**"],
               ["**v**", "*vita* → **vitavita** · *vily* → **nivilivily**",
                "*vavaka* → **vavabavaka** (v → b) · *varaka* → **mamaraka** (v → m)"],
               ["**y**", "—", "—"],
               ["**z**", "*zoto* → **zotozoto**",
                "*zavatra* → **zavajavatra** (z → j) · *zoro* → **zozoro**"]],
              [800, 4430, 4637])),
    ("p", "*Lazao amin'ny abidy 21* : a b d e f g h i j k l m n o p r s t v y z. **Tsy misy** *c*, "
          "*q*, *u*, *w*, *x* ny teny malagasy."),
    ("note", "Ny cell « — » dia **tsy mbola voamarina** : tsy nisy ôhatra hita tao amin'ireo loharano "
             "efatra (FRP T6 éd. 2026 · PE T6 · *Torolalana* 2015 · mémoire UA 2014 sy Rakibolana). "
             "**Tsy namboarina** akory izy : mila fanamafisan'ny mpampianatra na fikarohana "
             "ambaovao (*lisitry ny verindroa ara-boambolana*, mémoire 2014, TOVANA II, ±758 "
             "andalana — misy hatramin'ny abidy **d, e, g, i, o, y**). *r → dr* : **tsy nisy ôhatra** "
             "amin'ny loharano — mila fanamafana. Ny tabilao dia **azo ovaina** (Word) : ampidiro "
             "ao ny teny hitanao tamin'ny boky vakina."""),
]

# ------------------------------------------------------------------ FANAZARAN-TENA
# Ny fehezanteny sy ny ôhatra rehetra dia avy amin'ny FRP / Torolalana / mémoire / tanoran'ny
# mpanabe — **tsy namboarina teny**.
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny verindroa sy ny dikany.",
     "tsilo": (["lavalava",
                "menamena",
                "lavidavitra",
                "adidy"],
               ["un peu long",
                "rouge clair, rougeâtre",
                "un peu loin",
                "devoir, charge"])},
    {"consigne": "Fenoy ny teny mety (matevina / halemy / mafy / tapaka).",
     "banga": "Naverina indroa ny lokon' ny trano ka ………………… tsara.  |  Vereno indroa io hosy "
              "io mba ………………… tsara.  |  Aleo atao verindroa io kofehy io mba ho ………………… .  |  "
              "Tady verindroa io ka tsy ………………… intsony."},
    {"consigne": "Misafidy : lazao hoe **R** (roa teny voalaza indroa) na **V** (teny iray "
                 "averina = verindroa).\n"
                 "a) Nandeha nandeha izy.   b) Nandehandeha izy.   c) Menamena ny ravina.   "
                 "d) « Mamela veloma ombieny ombieny. »"},
    {"consigne": "Zarao amin'ny karazana **roa** (III.a sy III.b) ireo teny verindroa ireo : "
                 "**tsotra** na **misy fiovana** — dia lazao koa ny litera miova.\n"
                 "tsaratsara · verivery · maromaro · fantapantatra · lavadavaka · sakantsakana · "
                 "fepero · zavajavatra · vitavita"},
    {"consigne": "Efaso ny **fototeny** ao amin'ny teny verindroa tsirairay, dia lazao ny fiavian'ny "
                 "fiovana (raha misy).\n"
                 "a) mangadihady   b) mamariparitra   c) sitatsitaka   d) lavalava   e) fadifady"},
    {"consigne": "Vakio mangina ity ampahany amin'ny lahatsoratra ity (*Torolalana* ho an'ny boky "
                 "KINGAVOLA sy HAIVOLA, MEN, 2015 — Valin'ny Fanazaran-tsaina 11-1 ; **tsy "
                 "novaina**) : isaro **11** ny teny verindroa ao, dia zarao amin'ny karazana roa "
                 "ireo.\n"
                 "« **Elaela** ihany vao tody tany Amerika ireo sambo maromaro indray niainga tany "
                 "Pôrtogaly. Hitady an'i India ny foto-diany saingy noho ny fitsoky ny rivotra "
                 "**miovaova** sy ny **fitopatopan'** ny onja mahery dia **nivilivily** ny fizotry "
                 "ny lalany. Mba **atorotoroy** ahy eto amin'ny sarintany hoe ny tany sy ny toerana "
                 "**malazalaza** efa **fantapantatra** tamin'izany andro izany. […] "
                 "**Sarotsarotra** ihany ny mamaky ny anarana voasoratra eo. Somary efa "
                 "**antitrantitra** mantsy io sarintany io ka **matimaty** sy **manjavojavona** ny "
                 "soratra. »"},
    {"consigne": "Mamorona fehezanteny roa : iray **manalefaka** hevitra, fa ny iray **manamafy** "
                 "hevitra ; samy mampiasa teny verindroa."},
]

# ------------------------------------------------------------------ FANITSIANA
FANITSIANA = [
    {"tsilo": [("lavalava", "un peu long"),
               ("menamena", "rouge clair, rougeâtre"),
               ("lavidavitra", "un peu loin"),
               ("adidy", "devoir, charge")]},
    {"banga": "Naverina indroa ny lokon' ny trano ka [[matevina]] tsara.  |  Vereno indroa io hosy "
              "io mba [[halemy]] tsara.  |  Aleo atao verindroa io kofehy io mba ho [[mafy]].  |  "
              "Tady verindroa io ka tsy [[tapaka]] intsony."},
    {"ohatra": ["**R** : a) Nandeha nandeha izy.   d) « Mamela veloma ombieny ombieny. » — "
                "**V** : b) Nandehandeha izy.   c) Menamena ny ravina.",
                "Ny marika : **R** = *roa* teny (tsy verindroa) ; **V** = teny *iray* averina "
                "(verindroa)."]},
    {"ohatra": ["**a. tsotra** : tsaratsara, verivery, maromaro, vitavita — **b. misy fiovana** : "
                "fantapantatra (f → p), lavadavaka (l → d), sakantsakana (s → ts), fepero (f → p, "
                "*fetra*), zavajavatra (z → j).",
                "*vitavita* dia **tsotra** : ny fototeny *vita* no niverina manontolo, satria tsy "
                "miafara amin'ny *-ka* / *-tra* / *-na* izy."]},
    {"ohatra": ["a) *hady* (**hady** fa tsy *ady* — « mangadihady ») · b) *faritra* (f → p amin'ny "
                "teny faharoa) · c) *sintaka* · d) *lava* · e) *fady* (y → i).",
                "Ny zava-dehibe : fafao ny **tsirin-teny** (m-, man-, -y, -ana) vao jereina ny "
                "ampahany roa mitovy ; izay **mitovy** amin'ny roa tonta no fototeny."]},
    {"ohatra": ["**tsotra** : elaela · miovaova · nivilivily · atorotoroy · malazalaza · "
                "antitrantitra · matimaty — **misy fiovana** : fitopatopa (a → o) · fantapantatra "
                "(p ampiana) · sarotsarotra (s → ts) · manjavojavona (z → j).",
                "*matimaty* dia avy amin'ny *maty* ; ny *y* farany lasa *i* amin'ny ampahany "
                "voalohany. *somary* = « mais, quant à » ; *nivilivily* = « a erré de côté et "
                "d'autre »."]},
    {"ohatra": ["Tsindry : *matevina* = (loko) matroka, tena ; *halemy* = malemy, tsy mafy "
                "intsony ; *adidy* = « asa na andraikitra tsy maintsy ataon' ny tsirairay ».",
                "Raha tsy azo antoka : ilazao **ao anaty fehezanteny** ny teny verindroa — ny "
                "hevitry ny teny manodidina no manamarina hoe manalefaka na manamafy."]},
]

# ------------------------------------------------------------------ LALANA
LALANA = ("Tadiavo 5 teny verindroa ao amin'ny lahatsoratra na boky novakinao tamin'ity "
          "herinandro ity, soraty amin'ny tabilao [abidy | fototeny | teny verindroa | manalefaka "
          "na manamafy], fafao ny tsirin-teny mba hahitana ny fototeny, ary ampiasao ao anaty "
          "fehezanteny nataonao manokana izy rehetra.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="3", isan="2", sary=True,
              loharano=[
    "« NY TENY VERINDROA » — **tanoran'ny mpampianatra** (J-Lab, 01/11/2026) : rafitry ny leçon "
    "(**I. Famaritana · II. Ny heviny : a. Manalefaka / b. Manamafy · III. Ny endriny : a. verindroa "
    "tsotra / b. verindroa misy fiovana · IV. Teny verindroa isaky ny abidy**) sy ny teny-"
    "teny ampidirina eto : « *Amin'ny teny verindroa dia ny fototeny ihany no miverina indroa fa tsy "
    "miaraka amin'ny tsirin-teny. Ny teny verindroa koa no fitaovana tena mandaitra hamantarana ny "
    "fototenin'ny teny iray. Manamora ny fandrasana an'ilay teny izany raha misy tsirinteny miaraka "
    "aminy. (Ohatra ; Mangady = mangadihady : hady fa tsy ady)* » ; *teny/teniteny*, "
    "*miteny/miteniteny*, *faritra/fariparitra*, *mamaritra/mamariparitra* ; *tsara/tsaratsara*, "
    "*very/verivery*, *maro/maromaro* ; *f→p, l→d, r→dr, s→ts, v→b, z→j* + ny fepetra « *miafara "
    "amin'ny -ka, -tra, -na* » ; *fantatra, fady, fero (fetra → fepero), lavaka, lava, sakana, sory, "
    "vavaka, vita, zavatra, zoto*. **Tsy misy any amin'ny boky hafa ity rafitra ity.**",
    "FRP T6 — « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, **ÉDITION OCTOBRE 2026**, "
    "Minisiteran'ny Fanabeazam-pirenena : plateforme.education.mg → "
    "/bibliotheque-numerique/theme/biblio/pix/frp/college/FRP_T6/FRP_MLG_T6.pdf — LFK 1d "
    "« TSIPELINA / Tanjon'ny fampiasana teny verindroa » (Manalefaka hevitra · Manamafy hevitra "
    "ary ireo ohatra roa) ; LFK 2c « Mpamaritr'isa » (« Tsy azo atao verindroa raha tsy asiana "
    "tsi- na ki- eo alohany ») ; LFK 2b « Mpamari-toetra » (2.1 : lavalava, menamena, lavidavitra ; "
    "2.2 : « Ny tsofoka dia manamafy ny hevitry ny mpamari-toetra ») ; LFK 1e (fanakambanan-teny : "
    "s → ts, f → p, v → b, l → d).",
    "FRP 6ème Malagasy (93 pejy), p.75 : mitovy teny-teny ny LFK 1d → "
    "fanamafiana fa tsy niova ny votoaty eo anelanelan'ny dikan-teny roa.",
    "*TOROLALANA ho an'ny BOKY KINGAVOLA sy HAIVOLA — Kilasy faha-8 sy faha-7 (natambatra)*, "
    "Ministeran'ny Fanabeazam-Pirenena / Foibe Famolavolana Fandaharam-pibeazana sy Fehin-kevitra "
    "(D.C.I), **edisiona fahefatra**, Natonta-Faninefany, Antananarivo, 2015 (fandrindrana "
    "ankapobeny : ZANDRY Seraphin Fred Aime, Talen'ny UERP ; « Tsy azo adika na alaina tahaka », "
    "copyright © MEN). **Fizarana 2.4** « Ny Fandalinana ny teny » : dingana *Fanolorana → "
    "Fanazavana → Fanaovana ny fanazaran-tsaina am-bava → Fanaovana ny fanazaran-tsaina "
    "an-tsoratra*, ary « **tsy hisy… ny Fanazaran-tsaina miendrika fanomezam-pahalalana** » ; "
    "**fizarana 3** (tabilao Tsipelina : ventinasa 1 = « **Fanoratana teny verindroa** », ventinasa "
    "2 = « Fanoratana ny teny nampiharana ny fitsipiky ny fanakambanan-teny ») ; **fizarana 4** "
    "(Tari-dalana ho an'ny Kilasy faha-8) — Tsipelina, herinandro-1, seho-1 : tanjona « "
    "Mahasoratra ara-pitsipika ny teny atao verindroa ny mpianatra », « **tsy mitovy tanteraka ny "
    "hevitry ny teny tsotra sy ny teny verindroa** » (*tsara*/*tsaratsara*), roa karazana endrika "
    "(*ela*/*elaela* — *miova*/*miovaova*), *s > ts* / *z > j* / *f > p* ; ary **Valin'ny "
    "Fanazaran-tsaina 11-1** sy **16-6** (lahatsoratra feno verindroa). Copie numerique : "
    "https://docs.google.com/document/d/13AdMAiiH4TN__G83-nB8agyDuRyhlwZs — **tsy misy "
    "laharan-pejy miseho**. Boky ho an'ny **ambaratonga voalohany** ity : loharano *fomba "
    "fampianarana* sy *ôhatra fanampiny* ihany, fa ny FRP T6 ihany no fototra ho an'ny votoaty.",
    "RASOLOFOSON, Tovonjanahary Jorosoa, *Ny endriky ny matoanteny verindroa amin'ny teny "
    "malagasy*, Voka-pikarohana ahazoana ny mari-pahaizana Maîtrise ès-lettres, "
    "Oniversiten'Antananarivo — Sampana Teny sy Lahabolana ary Riba Malagasy (STe.La.Ri.M.), "
    "notarihin-dRALALAOHERIVONY Baholisoa Simone, Professeur titulaire, soutenance 10 novambra "
    "2014, 188 p. : §1.1 (famaritana hoe « verina + roa ») ; §1.1.1 (ny tady, ny zaitra, ny loko, "
    "ny hosy) ; §1.1.1.1 (fototeny ihany) ; §1.1.1.2 (fanamafisan-kevitra / fanalefahan-kevitra / "
    "manova hevitra) ; §1.1.3 (karazana telo : am-panovonana, am-panovanana, am-panatsofohana) ; "
    "§3.3.1 (fafana 39-41 : *fafa* → *mamafamafa*, *haka* → *mangakangaka*, *zaka* → "
    "*manjakazaka*) ; §3.3.3.2 (fafana 45 : *lainga* → *mandaingalainga*) ; fafana 47 (*tendry* → "
    "*manendrinendry*) ; TOVANA II « lisitry ny verindroa ara-boambolana » (and. 234 *manizingizina*, "
    "245 *hohokohoka*, 263 *hosihosy*, 324 *lavalava*, 331 *lehalehy*, 359 *manimany*, 367 "
    "*ngadongadona*, 371 *nofinofy*, 488 *roaroa*, 595 *sombintsombina*, 604 *soritsoritra*, 642 "
    "*tapatapaka*, 674 *tombantombana*). Version en ligne : "
    "fr.scribd.com/document/779789422/rasolofosonTovonjanaharyJ-MG-M1-14 (copie officielle : "
    "biblio.univ-antananarivo.mg/pdfs/rasolofosonTovonjanaharyJ_MG_M1_14 .pdf).",
    "RAJAONA, Siméon, *Problème de morphologie malgache* (1977) sy *Hiratra n°4 : Le redoublement "
    "par suffixation en Malgache* (1982) — voalaza ao amin'ny mémoire 2014.",
    "PE T6, PROGRAMME D'ETUDES — taranja Malagasy, p.21-22 « FIASAN'NY TENY - Tsipelina » "
    "(Voka-pianarana manokana ; Sahanasa ; Fitaovana ; Tombana ; Faharetany : ora 12) ; p.15 "
    "« FAFAN'NY VOTOATINY : Tsipelina : Teny verindroa · Fanakambanan-teny ».",
    "RAPE T6, édisiona septambra 2026, plateforme.education.mg → /theme/biblio/pix/pdf/RAPE_T6.pdf, "
    "taranja Malagasy p.6-7 : herinandro 1→7 = TsiPELINA (« Teny verindroa · Fanakambanan-teny ») ; "
    "4 ora/kerinandro ; « Tsy ahitana daty na vanim-potoana mamaritra ny tetiandrom-pampianarana » ; "
    "« Fanaambanan-teny » = coquille.",
    "Jean NARIVONY, *Takariva* (« Mamela veloma ombieny ombieny ») — santionany ao amin'ny FRP T6 "
    "éd. 2026 (tononkalo) ; rakitra : vetso.serasera.org.",
    "Malagasy Dictionary and Encyclopedia (David Stark) sy Rakibolana : *lava / lavalava* — "
    "https://malagasyword.org/bins/teny2/lavalava ; *menamena* (« rouge clair, rougeâtre », racine "
    "*mena*) — /teny2/menamena ; *lavidavitra* (« (duplicatif) / un peu loin », racine *lavitra*) — "
    "/teny2/lavidavitra ; *siroa / tsiroa* — /teny2/tsiroa ; *adidy* (« asa na andraikitra tsy "
    "maintsy ataon' ny tsirairay », ohatra amin'ny §1.1.3.2 an'ny mémoire) — "
    "https://rakibolana.org/rakibolana/teny/adidy.",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela;", len(FICHE["loharano"]), "loharano")
