# -*- coding: utf-8 -*-
"""T6 — lesona S2 : Tsipelina · « NY TENY VERINDROA » (V3 — **tanoran'ny mpampianatra**, 01/11/2026)

FIFANDRANANA (didin'ny mpanabe, 01/11/2026 — voalamina indray rehefa nanamarika izy fa namboarina
ny teniny)
  * **TSY NOVAINA** ny soratra nataony : voasoratra **teny-teny** ao amin'ny I. (Famaritana),
    III.a sy III.b (Ny endriny), ary ao amin'ny tabilao IV. **Tsy nampiana teny azy** — fa ny
    teny nataony ihany no lohateny sy famaritana eto.
  * **TSY MISY TENY FRATSA** amin'ny leçon : tout en malgache. (Ny dikany ilaina dia ao amin'ny
    loharano / tsy ampidirina.)
  * **TSY MISY** marika « (FRP T6, LFK 1d) », « (mémoire UA 2014, §1.1.1) », etc. ao amin'ny
    leçon na amin'ny fanazaran-tena : **ny loharano dia ao amin'ny LOHARANON-KEVITRA** ihany.
  * **TSY NAMBOARINA** : ny teny verindroa rehetra ao eto dia (i) **avy amin'ny tanoran'ny
    mpanabe**, na (ii) **avy amin'ny boky** (FRP T6 éd. okt. 2026 · *Torolalana* KINGAVOLA/HAIVOLA
    2015 · mémoire UA 2014) — ary ny **abidy tsy nisy ôhatra voamarina dia novelomelona
    (« — »)**, fa tsy fenoina teny nangona.
  * **VOAFESINA** (araka ny namaly 01/11/2026) : `ady` → **adiady** (fa tsy « *adidy* », teny
    hafa = « isa / andraikitra ») ; ny « a miova ho o » (*boboka*, *kibobo*) dia **tsy**
    ampidirina intsony satria tsy marina ; ny « y farany → i amin'ny teny voalohany »
    (*fady* = *fadifady* · *sory* = *sorisory* · *maty* = *matimaty*) dia mifanaraka amin'ny
    ôhatra nataony.
  * CADRE = PE T6 p.21-22 ; `Daty` : mangina ; **Tsy Baiboly** nampiasaina.
  * Gabarit takela = 6 dingana, TNR 12 ; `FANAZARAN-TENA` : tabilao Word azo ovaina, mangina ny
    filaharana valiny ; `FANITSIANA` : sisiny + tsilo = SARY SVG (Tinos).
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
    "Lohahevitra": "FIASAN'NY TENY - Tsipelina",
    "Seho n°": "3",
    "Lohateny": LT,
    "Isan'ny seho": "2",
    "V. P. M": "Mifehy ny fitsipi-panoratana ny teny malagasy",
    "V. P. M note": "Voka-pianarana manokana",
    "Fitaovana": "Ampahan-dahatsoratra novakina na nohenoina · tabilao",
    "Faharetany": "ora 12",
    "Fanovozan-kevitra": "Rafitra sy ôhatra avy amin'ny tanoran'ny mpampianatra · santionany ao "
                         "amin'ny boky maimaim-poana sy amin'ny rakibolana",
}

# ------------------------------------------------------------------ GRILLE
GRILLE = [
    ("I. Famerenana (5 min)",
     "Araka ny natao tamin'ny seho teo aloha : inona no atao hoe teny **mitovy fanonona fa samy "
     "hafa hevitra** ? Mety atao hoe teny verindroa koa ve ireo ?",
     "V.A. : Tsy mitovy : ny verindroa dia **fototeny iray** averina indroa (*lava* = *lavalava*) ; "
     "ny mitovy fanonona kosa dia **roa** teny samy hafa hevitra (*mianaka* / *mihanaka*).",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (… min)",),
    ("1. Fitarihan-tsaina (3 min)",
     "Tarihina ny mpianatra hamaky ny fehezanteny roa natao an-tsoratra : « Mihantahanta indray i "
     "Lita kely marina a ! » sy « Fepero ihany ny ankizy amin' ity tia mihaninkanika ity. »",
     "Mamaky.",
     "Asan-tarika", "Ampahan-dahatsoratra", ""),
    ("2. Fanolorana (2 min)",
     "Lazao ny lohateny : « TSIPELINA / **Ny teny verindroa** » ; soraty amin'ny solaitrabe ny "
     "fizarana efatra : **I. Famaritana · II. Ny heviny · III. Ny endriny · IV. Isaky ny "
     "abidy**.\n"
     "Soraty amin'ny tabilao : *lava* = *lavalava* · *faritra* = *fariparitra*.",
     "Mihaino, manaraka amin'ny takelaka.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana (4 min)",
     "Diniho ny teny voalohany sy ny faharoa.\n"
     "*lava* = *lavalava* · *tsara* = *tsaratsara* · *mangady* = *mangadihady*\n"
     "Inona no miverina ao amin'ny teny ? *hady* na *ady* no fototeny an'ny *mangadihady* ?",
     "V.A. : ny fototeny ihany no miverina indroa ; *mangadihady* → **hady** no fototeny, fa tsy "
     "*ady*.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana (4 min)",
     "Zarao amin'ny karazana roa (III.a sy III.b) ireo ôhatra rehetra : *verindroa tsotra* na "
     "*verindroa misy fiovana*.\n"
     "*tsaratsara* · *verivery* · *maromaro* · *fariparitra* · *lavadavaka* · *sakantsakana* · "
     "*fepero* · *zavajavatra*",
     "V.A. : (a) tsotra : tsaratsara, verivery, maromaro ; (b) misy fiovana : fariparitra, "
     "lavadavaka, sakantsakana, fepero, zavajavatra.",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana (3 min)",
     "Ampifandraiso amin'ny alalan'ny tsilo : ny teny verindroa sy ny fototeny an'izany.\n"
     "Jerena ny tabilao IV : inona no abidy feno ôhatra, inona no mbola mangina ?",
     "V.A. : ireo valiny voasoratra ao amin'ny FANITSIANA.",
     "Asa iombonana", "Solaitrabe · tabilao", ""),
    ("6. Fampiharana (4 min)",
     "Fenoy ny banga, dia misafidy ny **R** (roa teny voalaza indroa) na **V** (teny iray "
     "averina = verindroa).",
     "V.A. : ireo valiny voasoratra ao amin'ny FANITSIANA.\n"
     "Mamaly",
     "Asa samirery", "Kahie", ""),
    ("III. Tombana (5 min)",
     "Mamaritra ny seho amin'ny alalan'ny « Tombana » : « Mampiasa ny fitsipi-panoratana ny teny "
     "verindroa anasongadinana ny lanjan'ny fampiasana izany ny mpianatra. »",
     "Hilaza.",
     "Asa samirery", "----", ""),
]

# ------------------------------------------------------------------ LESONA (I → IV, araka ny tanimana)
LESONA = [
    # ============================== I. FAMARITANA
    ("h2", "I. Famaritana"),
    ("p", "Amin'ny teny verindroa dia ny **fototeny** ihany no miverina indroa fa tsy miaraka "
          "amin'ny **tsirin-teny**. Ny teny verindroa koa no fitaovana tena mandaitra "
          "hamantarana ny fototenin'ny teny iray. Manamora ny fandrasana an'ilay teny izany raha "
          "misy tsirinteny miaraka aminy."),
    ("p", "Ohatra : *Mangady* = **mangadihady** : *hady* fa tsy *ady*."),
    ("ohatra", ["*Teny* = **teniteny**",
                "*Miteny* = **miteniteny**",
                "*Faritra* = **fariparitra** (f miova p amin'ny teny faharoa)",
                "*Mamaritra* = **mamariparitra** (fa tsy mamaritramamaritra)"]),

    # ============================== II. NY HEVINY
    ("h2", "II. Ny heviny"),
    ("p", "**a. Manalefaka**"),
    ("ohatra", ["« **Mihantahanta** indray i Lita kely marina a ! »",
                "*lava* = **lavalava** · *lavitra* = **lavidavitra** · *mena* = **menamena**",
                "« Vereno indroa io **hosy** io mba **halemy** tsara. »"]),
    ("p", "**b. Manamafy**"),
    ("ohatra", ["« **Fepero** ihany ny ankizy amin' ity tia **mihaninkanika** ity. »",
                "*matory* = **matoritory** · *soritra* = **soritsoritra** → *manoritsoritra*",
                "« **Tady** verindroa io ka **tsy tapaka** intsony. » · « Aleo atao verindroa io "
                "**kofehy** io mba **ho mafy**. » · « **Naverina indroa** ny **loko**n'ny trano ka "
                "**matevina** tsara. »"]),
    ("p", "Ny teny manodidina na ny fehezanteny nampiasana an'ilay teny verindroa no mamaritra hoe "
          "manalefaka na manamafy ny hevitra."),

    # ============================== III. NY ENDRINY
    ("h2", "III. Ny endriny"),
    ("p", "**a. Ny verindroa tsotra** — Tsotra ilay teny verindroa raha **miverina manontolo** ny "
          "fototeny. Tsy miafara amin'ny -ka, -tra, -na ireo."),
    ("ohatra", ["*Tsara* = **tsaratsara** · *very* = **verivery** · *maro* = **maromaro**",
                "*vita* = **vitavita** · *zoto* = **zotozoto** · *ela* = **elaela** · *roa* = "
                "**roaroa**"]),
    ("p", "**b. Ny verindroa misy fiovana** — Misy fiovana matetika ny teny faharoa manomboka "
          "amin'ny fototeny **f** (miova **p**), **l** (miova **d**), **r** (miova **dr**), **s** "
          "(miova **ts**), **v** (miova **b**), **z** (miova **j**) ka miafara amin'ny **-ka**, "
          "**-tra**, **-na**."),
    ("ohatra", ["*Fantatra* = **fantapantatra** (f miova p)",
                "*Fero* (tandremo, ny foto-teny « *fetra* » no miverina fa tsy « *fe* », miafara "
                "amin'ny -tra) = **fepero** (*fepetra* natao mandidy)",
                "*Lavaka* = **lavadavaka** (l miova d satria miafara amin'ny -ka) · fa *Lava* = "
                "**lavalava** (miafara amin'ny -va)",
                "*Sakana* = **sakantsakana** (miafara amin'ny -na) · *Sory* = **sorisory**",
                "*Vavaka* = **vavabavaka** (v miova b satria miafara amin'ny -ka ilay teny)",
                "*Zavatra* = **zavajavatra** (z miova j) · *Fady* = **fadifady** · *Maty* = "
                "**matimaty**"]),
    ("ohatra", ["*Sarotra* = **sarotsarotra** (s miova ts) · *Soritra* = **soritsoritra** · "
                "*Sintaka* = **sitatsitaka** · *Lavitra* = **lavidavitra** (l miova d, miafara "
                "amin'ny -tra) · *Tapaka* = **tapatapaka**"]),
    ("note", "Ny tabilao IV no fanamafisan'ireo karazana roa ireo isaky ny abidy. Raha misy "
             "abidy **mangina** ao, dia tsy hita ôhatra voamarina — **mila fanontaniana ny "
             "mpampianatra**, fa tsy mamorona teny."),

    # ============================== IV. ISAKY NY ABIDY
    ("h2", "IV. Teny verindroa isaky ny abidy"),
    ("p", "Abidy iray isaky ny andiany : eo amin'ny kolona **a** ny **verindroa tsotra**, eo "
          "amin'ny kolona **b** ny **verindroa misy fiovana**. Ny teny voalohany ao amin'ny "
          "tabilao dia ny **fototeny** ; ny manaraka ny zana-tsipìka dia ny endrika "
          "**verindroa**."),
    ("tabl", (["Abidy", "a. Verindroa tsotra", "b. Verindroa misy fiovana"],
              [["**a**", "—", "—"],
               ["**b**", "—", "—"],
               ["**d**", "—", "—"],
               ["**e**", "—", "—"],
               ["**f**", "*fady* = **fadifady**",
                "*fantatra* = **fantapantatra** (f → p) · *faritra* = **fariparitra** · *fetra* = "
                "**fepero**"],
               ["**g**", "—", "—"],
               ["**h**", "*hohoka* = **hohokohoka**", "—"],
               ["**i**", "—", "—"],
               ["**j**", "—", "—"],
               ["**k**", "—", "—"],
               ["**l**", "*lava* = **lavalava**",
                "*lavaka* = **lavadavaka** (l → d) · *lavitra* = **lavidavitra**"],
               ["**m**", "*maro* = **maromaro** · *mena* = **menamena** · *miteny* = "
                "**miteniteny**",
                "*mamaritra* = **mamariparitra** · *maty* = **matimaty**"],
               ["**n**", "—", "—"],
               ["**o**", "—", "—"],
               ["**p**", "—", "—"],
               ["**r**", "—", "—"],
               ["**s**", "—",
                "*sory* = **sorisory** · *sakana* = **sakantsakana** (s → ts) · *sarotra* = "
                "**sarotsarotra** · *sintaka* = **sitatsitaka** · *soritra* = **soritsoritra**"],
               ["**t**", "*tsara* = **tsaratsara** · *teny* = **teniteny**", "—"],
               ["**v**", "*vita* = **vitavita** · *very* = **verivery**",
                "*vavaka* = **vavabavaka** (v → b)"],
               ["**y**", "—", "—"],
               ["**z**", "*zoto* = **zotozoto**", "*zavatra* = **zavajavatra** (z → j)"]],
              [800, 4430, 4637])),
    ("p", "Ireto ny abidy anisan'izany : a b d e f g h i j k l m n o p r s t v y z. **Tsy misy** "
          "c, q, u, w, x ny teny malagasy."),
    ("note", "Mangina ny andiany **a, b, d, e, g, i, j, k, n, o, p, r, y** : tsy nisy ôhatra "
             "voamarina, ka **tsy namboarina** — ilazao ny mpampianatra ny teny mety ampidirina ao "
             "(indrindra ny **r → dr**). Mety ilaina amin'ny fanazavana am-bava : ny mpianatra dia "
             "tsindraindray mamerina ny **sampanteny** fa tsy ny fototeny (*fafa* → *mamafa* ; "
             "*haka* → *mangaka*) ; tsy tombana izany."),
]

# ------------------------------------------------------------------ FANAZARAN-TENA
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny verindroa sy ny fototeny "
                 "an'izany.",
     "tsilo": (["lavalava",
                "fariparitra",
                "sakantsakana",
                "zavajavatra"],
               ["lava",
                "faritra",
                "sakana",
                "zavatra"])},
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
                 "verivery · maromaro · fantapantatra · lavadavaka · sakantsakana · fepero · "
                 "zavajavatra · vitavita · vavabavaka"},
    {"consigne": "Efaso ny **fototeny** ao amin'ny teny verindroa tsirairay, dia lazao ny fiavian'ny "
                 "fiovana rehefa misy.\n"
                 "a) mangadihady   b) mamariparitra   c) sitatsitaka   d) lavidavitra   e) fepero"},
    {"consigne": "Vakio mangina ity ampahany amin'ny lahatsoratra ity (**tsy novaina**) : isaro "
                 "**11** ny teny verindroa ao, dia zarao amin'ny karazana roa ireo.\n"
                 "« **Elaela** ihany vao tody tany Amerika ireo sambo maromaro indray niainga tany "
                 "Pôrtogaly. Hitady an'i India ny foto-diany saingy noho ny fitsoky ny rivotra "
                 "**miovaova** sy ny **fitopatopan'** ny onja mahery dia **nivilivily** ny fizotry "
                 "ny lalany. Mba **atorotoroy** ahy eto amin'ny sarintany hoe ny tany sy ny toerana "
                 "**malazalaza** efa **fantapantatra** tamin'izany andro izany. […] "
                 "**Sarotsarotra** ihany ny mamaky ny anarana voasoratra eo. Somary efa "
                 "**antitrantitra** mantsy io sarintany io ka **matimaty** sy **manjavojavona** ny "
                 "soratra. »"},
    {"consigne": "Mamorona fehezanteny roa : iray mampiasa teny verindroa **manalefaka** hevitra, "
                 "fa ny iray mampiasa teny verindroa **manamafy** hevitra."},
]

# ------------------------------------------------------------------ FANITSIANA
FANITSIANA = [
    {"tsilo": [("lavalava", "lava"),
               ("fariparitra", "faritra"),
               ("sakantsakana", "sakana"),
               ("zavajavatra", "zavatra")]},
    {"banga": "Naverina indroa ny lokon' ny trano ka [[matevina]] tsara.  |  Vereno indroa io hosy "
              "io mba [[halemy]] tsara.  |  Aleo atao verindroa io kofehy io mba ho [[mafy]].  |  "
              "Tady verindroa io ka tsy [[tapaka]] intsony."},
    {"ohatra": ["**R** : a) Nandeha nandeha izy.   d) « Mamela veloma ombieny ombieny. » — "
                "**V** : b) Nandehandeha izy.   c) Menamena ny ravina.",
                "**R** = *roa* teny (tsy verindroa) ; **V** = teny *iray* averina."]},
    {"ohatra": ["**tsotra** : verivery, maromaro, vitavita — **misy fiovana** : fantapantatra "
                "(f → p), lavadavaka (l → d), sakantsakana (s → ts), fepero (f → p, avy amin'ny "
                "*fetra*), zavajavatra (z → j), vavabavaka (v → b).",
                "Ny fototeny *vita* dia niverina manontolo, ka **tsotra** *vitavita*, satria tsy "
                "miafara amin'ny -ka / -tra / -na izy."]},
    {"ohatra": ["a) *hady* (**hady** fa tsy *ady*) · b) *faritra* (f → p amin'ny teny faharoa) · "
                "c) *sintaka* · d) *lavitra* · e) *fetra*.",
                "Fafao ny **tsirin-teny** (m-, man-, -y, -ana) vao jereo ny ampahany roa mitovy : "
                "izay mitovy amin'ny roa tonta no fototeny."]},
    {"ohatra": ["**tsotra** : elaela · miovaova · nivilivily · atorotoroy · malazalaza · "
                "antitrantitra · matimaty — **misy fiovana** : fantapantatra · sarotsarotra "
                "(s → ts) · manjavojavona."]},
    {"ohatra": ["Tsindry : *matevina* = loko matroka, tena · *halemy* = tsy mafy intsony · "
                "*fepero* = mato, tsy te-hinomano."]},
]

# ------------------------------------------------------------------ LALANA
LALANA = ("Tadiavo 5 teny verindroa ao amin'ny lahatsoratra na boky novakinao tamin'ity "
          "herinandro ity, soraty amin'ny tabilao [abidy | fototeny | teny verindroa | tsotra na "
          "misy fiovana], fafao ny tsirin-teny mba hahitana ny fototeny, ary ampiasao ao anaty "
          "fehezanteny nataonao manokana izy rehetra.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="3", isan="2", sary=True,
              loharano=[
    "« NY TENY VERINDROA » — **tanoran'ny mpampianatra** (J-Lab, 01/11/2026) : ny rafitra "
    "(**I. Famaritana · II. Ny heviny : a. Manalefaka / b. Manamafy · III. Ny endriny : a. "
    "verindroa tsotra / b. verindroa misy fiovana · IV. Teny verindroa isaky ny abidy**) sy ny "
    "teny-teny rehetra ao amin'ny leçon (famaritana, lalàna f→p / l→d / r→dr / s→ts / v→b / z→j sy "
    "ny fepetra « miafara amin'ny -ka, -tra, -na », ary ny ôhatra *mangady = mangadihady : hady fa "
    "tsy ady* · *teny = teniteny* · *miteny = miteniteny* · *faritra = fariparitra* · *mamaritra = "
    "mamariparitra* · *tsara = tsaratsara* · *very = verivery* · *maro = maromaro* · *fantatra = "
    "fantapantatra* · *fady = fadifady* · *fero = fepero* · *lavaka = lavadavaka* · *lava = "
    "lavalava* · *sakana = sakantsakana* · *sory = sorisory* · *vavaka = vavabavaka* · *vita = "
    "vitavita* · *zavatra = zavajavatra* · *zoto = zotozoto*) dia **avy amin'ity tanorana ity**. "
    "Tsy misy azy amin'ny boky iray hafa. « **ady** → **adiady** » (fa tsy *adidy*) sy ny "
    "famafanana ny *boboka* / *kibobo* ho verindroa koa dia fanamboarana nataony, 01/11/2026.",
    "FRP T6 — « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, **ÉDITION OCTOBRE 2026**, "
    "Minisiteran'ny Fanabeazam-pirenena : plateforme.education.mg → "
    "/bibliotheque-numerique/theme/biblio/pix/frp/college/FRP_T6/FRP_MLG_T6.pdf — LFK 1d "
    "« TSIPELINA / Tanjon'ny fampiasana teny verindroa » (Manalefaka hevitra : « Mihantahanta "
    "indray i Lita kely marina a ! » · Manamafy hevitra : « Fepero ihany ny ankizy amin' ity tia "
    "mihaninkanika ity. ») ; LFK 2b Mpamari-toetra (*lavalava*, *menamena*, *lavidavitra*, "
    "*matoritory*, *sitatsitaka*, *soritsoritra*) ; LFK 2c Mpamaritr'isa (« Tsy azo atao verindroa "
    "raha tsy asiana tsi- na ki- eo alohany ») ; LFK 1e (fanakambanan-teny : s → ts, f → p, "
    "v → b, l → d).",
    "*TOROLALANA ho an'ny BOKY KINGAVOLA sy HAIVOLA — Kilasy faha-8 sy faha-7 (natambatra)*, "
    "Ministeran'ny Fanabeazam-Pirenena / D.C.I, **edisiona fahefatra**, Natonta-Faninefany, "
    "Antananarivo, 2015 : Tsipelina, ventinasa 1 = « **Fanoratana teny verindroa** » ; fizarana 4 "
    "(Tari-dalana ho an'ny Kilasy faha-8), Tsipelina herinandro-1 seho-1 : « *tsy mitovy tanteraka "
    "ny hevitry ny teny tsotra sy ny teny verindroa* » (*tsara*/*tsaratsara*) ; ary Valin'ny "
    "Fanazaran-tsaina **11-1** : ny lahatsoratra « *Elaela ihany vao tody tany Amerika…* » feno "
    "verindroa (*elaela, miovaova, fitopatopa, nivilivily, atorotoroy, malazalaza, fantapantatra, "
    "sarotsarotra, antitrantitra, matimaty, manjavojavona*). Copie numerique : "
    "https://docs.google.com/document/d/13AdMAiiH4TN__G83-nB8agyDuRyhlwZs — **tsy misy "
    "laharan-pejy miseho**. Boky ho an'ny ambaratonga voalohany ity : santionany sy fomba "
    "fampianarana ihany no nalana, fa ny tanoran'ny mpampianatra sy ny FRP T6 no rafitra.",
    "RASOLOFOSON, Tovonjanahary Jorosoa, *Ny endriky ny matoanteny verindroa amin'ny teny malagasy*, "
    "mémoire Maîtrise ès-lettres, Oniversiten'Antananarivo (STe.La.Ri.M.), notarihin-dRALALAOHERIVONY "
    "Baholisoa Simone, 2014, 188 p. : §1.1.1 (ny tady, ny kofehy, ny loko, ny hosy → ôhatra ao "
    "amin'ny II.b sy amin'ny fanazaran-tena 2) ; §1.1.1.1 (« ny fototeny ihany no averina ») ; "
    "TOVANA II « lisitry ny verindroa ara-boambolana » (*hohokohoka*, *roaroa*). Version en ligne : "
    "fr.scribd.com/document/779789422/rasolofosonTovonjanaharyJ-MG-M1-14. **Tsy ampidirina** eto ny "
    "momba ny « a miova ho o » (*boka → boboka*, *kibo → kibobo*), voalamina 01/11/2026.",
    "PE T6, PROGRAMME D'ETUDES — taranja Malagasy, p.21-22 « FIASAN'NY TENY - Tsipelina » "
    "(Voka-pianarana manokana · Sahanasa · Fitaovana · Tombana · Faharetany : ora 12) ; p.15 "
    "« Tsipelina : Teny verindroa · Fanakambanan-teny » ; RAPE T6 édisiona septambra 2026, "
    "taranja Malagasy p.6-7 (herinandro 1→7 · 4 ora/kerinandro · « Tsy ahitana daty na "
    "vanim-potoana »).",
    "Jean NARIVONY, *Takariva* (« Mamela veloma ombieny ombieny ») — santionany ao amin'ny FRP T6 "
    "éd. 2026 (tononkalo) ; rakitra : vetso.serasera.org.",
    "Rakibolana sy Malagasy Dictionary (David Stark) : *verindroa* = « fahadisoana noho ny teny na "
    "litera averina indroa » ; *adidy* = « asa na andraikitra tsy maintsy ataon' ny tsirairay » "
    "(teny hafa, fa TSY verindroan'ny *ady*) ; *lavalava* ; "
    "*menamena* ; *lavidavitra* — https://malagasyword.org/bins/teny2/ sy "
    "https://rakibolana.org/rakibolana/teny/.",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela;", len(FICHE["loharano"]), "loharano")
