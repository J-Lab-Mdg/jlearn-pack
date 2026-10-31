# -*- coding: utf-8 -*-
"""T6 — lesona S2 : Fiasan'ny teny · Tsipelina · « Tanjon'ny fampiasana teny verindroa »  (V1)

FIFANDRANANA (didin'ny mpanabe, 30 sy 31/10)
  * VOTOATY sy LOHATENY = **FRP T6, ÉDITION OCTOBRE 2026** (plateforme.education.mg),
    LFK 1d « TSIPELINA / Tanjon'ny fampiasana teny verindroa » sy LFK 2c (mpamaritr'isa).
    Ny fehezanteny roa voalohany dia **avy teny-teny** amin'ny FRP (LFK 1d) :
    « Mihantahanta indray i Lita kely marina a ! » sy « Fepero ihany ny ankizy amin' ity tia
    mihaninkanika ity. » — **tsy nampiana dikany** : ohatra ao amin'ny boky ministera ihany.
  * HATEZERANA = « FRP ihany : manalefaka / manamafy » (valin'ny mpanabe 31/10) → ny
    **karazana telo** (am-panovonana / am-panovanana / am-panatsofohana) dia ao amin'ny
    `note` ho an'ny **mpampianatra** ihany.
  * NY TENY : « fepero », « mihaninkanika », « matoritory » = **MARINA TANTERAKA** — ampiasaina
    **tsy misy marika** na note miaro (didy 31/10 : « tsy hita ao amin'ny rakibolana ≠ diso »).
  * LOHARANO AMPONY (internet) = *Ny endriky ny matoanteny verindroa amin'ny teny malagasy*,
    RASOLOFOSON Tovonjanahary J., mémoire Maîtrise, Oniversiten'Antananarivo, 2014 (188 p.) :
    ny ôhatra momba ny tady / zaitra / loko / hosy sy ny karazana telo dia **avy amin'izay
    tena-teny**. Tsindry ao `refs/04_VERINDROA-MEMOIRE-UA-2014.md`.
  * CADRE = PE T6 p.21-22 (« Sahanasa », « Fitaovana », « Tombana », `Faharetany : ora 12`) ;
    `Daty` : **mangina** (RAPE : « Tsy ahitana daty na vanim-potoana »). **Tsy Baiboly** nampiasaina.
  * Gabarit takela = 6 dingana, TNR 12 ; `FANAZARAN-TENA` : tabilao Word azo ovaina, **mangina
    ny filaharana valiny** ; `FANITSIANA` : sisiny + soratra + tsilo = **SARY SVG** (Tinos) iray.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import fiche  # noqa: E402

ZT = "Tsipelina"
LT = "Tanjón'ny fampiasana teny verindroa"

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
    "Fitaovana": "Ampahan-dahatsoratra novakina na nohenoina",
    "Faharetany": "ora 12",
    "Fanovozan-kevitra": "FRP T6 éd. oct. 2026 (LFK 1d sy 2c) · RAPE T6 sept. 2026, herinandro "
                         "1→7 · PE T6 p.21-22",
}

# ------------------------------------------------------------------ GRILLE (PE T6 p.21-22, 6 dingana)
GRILLE = [
    ("I. Famerenana (5 min)",
     "Araka ny natao tamin'ny seho teo aloha : inona no atao hoe teny **mitovy fanonona fa samy "
     "hafa hevitra** ? Mety atao hoe teny verindroa koa ve ireo ?",
     "V.A. : Tsy mitovy : ny verindroa dia **teny iray** averina indroa (lava → lavalava) ; ny "
     "mitovy fanonona kosa dia **roa** teny samy hafa hevitra (mianaka / mihanaka).",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (… min)",),
    ("1. Fitarihan-tsaina (3 min)",
     "Tarihina ny mpianatra hamaky ny fehezanteny roa natao an-tsoratra (FRP T6 éd. 2026, LFK 1d) "
     ": « Mihantahanta indray i Lita kely marina a ! » sy « Fepero ihany ny ankizy amin' ity tia "
     "mihaninkanika ity. »",
     "Mamaky.",
     "Asan-tarika", "Ampahan-dahatsoratra", ""),
    ("2. Fanolorana (2 min)",
     "Lazao ny lohateny : « TSIPELINA / **Tanjón'ny fampiasana teny verindroa** » (FRP T6 éd. "
     "2026, LFK 1d).\n"
     "Soraty amin'ny tabilao : lava / lavalava · mena / menamena · lavitra / lavidavitra.",
     "Mihaino.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana (4 min)",
     "Diniho ny teny voalohany sy ny faharoa.\n"
     "lava → lavalava · mena → menamena · lavitra → lavidavitra\n"
     "Inona no miverina ao amin'ny teny ?",
     "Mijery, mamaly.\n"
     "V.A. : ny fototeny **iray ihany** no miverina indroa : *lava* + *lava* = lavalava ; *mena* + "
     "*mena* = menamena.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana (4 min)",
     "Zarao amin'ny tanjona roa ireo fehezanteny (FRP LFK 1d sy ny loharano) : manalefaka na "
     "manamafy.\n"
     "« Tady verindroa io ka tsy tapaka intsony. »\n"
     "« Aleo atao verindroa io kofehy io mba ho mafy. »\n"
     "« Naverina indroa ny lokon'ny trano ka matevina tsara. »\n"
     "« Vereno indroa io hosy io mba halemy tsara. »",
     "V.A. : manamafy : ny tady sy ny kofehy (ho mafy, tsy tapaka) ary ny loko (matevina).\n"
     "V.A. : manalefaka : ny hosy (halemy tsara).",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana (3 min)",
     "Ampifandraiso amin'ny alalan'ny tsilo : ny teny verindroa sy ny dikany.\n"
     "Inona no atao hoe teny verindroa ?",
     "V.A. : teny fototeny **averina indroa** ; mety **manalefaka** na **manamafy** ny hevitry ny "
     "teny fototra, araka ny dikan'ny fototeny sy ny toe-javatra ao anaty fehezanteny.",
     "Asa iombonana", "Solaitrabe", ""),
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

# ------------------------------------------------------------------ LESONA
LESONA = [
    ("h2", "Ny atao hoe teny verindroa"),
    ("p", "Ny teny hoe **verindroa** dia azo avy amin'ny teny roa hoe « verina » sy « roa » : « "
          "*anondroana zavatra natao indroa miverina* ». Amin'ny teny malagasy dia **ny fototeny** "
          "ihany no azo atao verindroa — ny teny iray averina indroa."),
    ("ohatra", ["lava → **lavalava**",
                "mena → **menamena**",
                "lavitra → **lavidavitra**"]),
    ("p", "Ny lesona teo aloha dia momba **roa teny** samy hafa (mianaka / mihanaka) ; eto kosa dia "
          "**iray teny** ihany no averina. Koa **tsy** tokony hifangaro ny « teny mitovy fanonona "
          "fa samy hafa hevitra » sy ny teny verindroa."),
    ("note", "Ho an'ny mpampianatra : « *Amin'ny teny malagasy dia tsy mahakasika ny tsirinteny ny "
             "fitsipika fa ny fototeny ihany no azo atao verindroa, amin'ny endriny feno na tsia* » "
             "(RASOLOFOSON T. J., mémoire Oniversiten'Antananarivo, 2014, §1.1.1.1). Izy ihany no "
             "manampy fa « *ataon'ny mpiteny ankehitriny verindroa anefa ny sampanteny* ». Ny "
             "karazana telo araka ny endrika (§1.1.3) dia : **am-panovonana** (*telo → tetelo*, "
             "*loha → loloha*, *boka → boboka*), **am-panovanana** (*ady → adidy*, *kibo → kibobo*, "
             "*fohy → fohiky* = fitenim-paritra Tsimihety), **am-panatsofohana / an-tsofoka** "
             "(*vanàka → vananàka*, *sanàka → sananàka*). Ary mety **manova hevitra** tanteraka ny "
             "verindroa, fa tsy manamafy / manalefaka ihany (§1.1.1.2). Loharano : RAJAONA Siméon, "
             "*Problème de morphologie malgache* (1977) sy *Hiratra n°4 : Le redoublement par "
             "suffixation en Malgache* (1982)."),

    ("h2", "Tanjón'ny fampiasana azy : manalefaka sy manamafy"),
    ("p", "Roa ny tanjona ampidiran'ny boky ministera (**FRP**, LFK 1d) :"),
    ("ohatra", ["**Manalefaka hevitra** : Mihantahanta indray i Lita kely marina a !",
                "**Manamafy hevitra** : Fepero ihany ny ankizy amin' ity tia mihaninkanika ity."]),
    ("p", "Ireto koa ohatra fanao andavanandro, izay mampiseho tsara ilay **fiverenana** :"),
    ("ohatra", ["Tady amatorana → Tady **verindroa** io ka **tsy tapaka** intsony.",
                "Aleo atao **verindroa** io kofehy io mba **ho mafy**.",
                "**Naverina indroa** ny lokon'ny trano ka **matevina** tsara.",
                "**Vereno indroa** io hosy io mba **halemy** tsara."]),
    ("p", "Ny **tady** sy ny **kofehy** (ho mafy) ary ny **loko** (matevina) → **manamafy** ; ny "
          "**hosy** (halemy) → **manalefaka**. Koa ny dikan'ny fototeny sy ny toe-javatra ao "
          "anaty fehezanteny no mamaritra ny tanjona, fa tsy ny fiverenana ihany."),

    ("h2", "Fomba famoronana azy"),
    ("p", "• **Foto-teny** (mpamari-toetra) : ny fototeny averina indroa → *lavalava, menamena* "
          "(FRP, mpamari-toetra 2.1). Ny *lavidavitra* dia manaraka ny lalànan'ny **duplicatif** "
          "(vanin-teny no miverina, fa tsy ny teny manontolo).\n"
          "• **Matoanteny** : ny vanin-teny no miverina ao anaty teny → *matory* → "
          "**matoritory** ; *sintaka* → **sitatsitaka** ; *sitrika* → **sitritsitrika**."),
    ("p", "**Mpamaritra isa** : « *Tsy azo atao verindroa raha tsy asiana **tsi-** na **ki-** eo "
          "alohan'ny isa* » (FRP, LFK 2c). Raha ny fototeny *roa* kosa dia azo averina : *roa* → "
          "**roaroa** (*mandroaroa*), fa rehefa isa ampiasaina dia **tsiroa / siroa**."),

    ("h2", "Roa karazana endrika — ary ny litera mety miova"),
    ("p", "Misy boky ministera ho an'ny ambaratonga voalohany izay manavaka **roa karazana** "
          "endrika : ireo **tsy ahitana fiovana** sy ireo **misy fiovana** (*Torolalana* ho an'ny "
          "boky KINGAVOLA sy HAIVOLA, MEN, 2015 — Tsipelina, ventinasa I, herinandro-1, seho-1) :"),
    ("ohatra", ["**Tsy ahitana fiovana** : *ela* → **elaela** · *miova* → **miovaova** · "
                "*fitopa* → **fitopatopa** · *toro* → **atorotoro**",
                "**Misy fiovana** : *sarotra* → **sarotsarotra** (s → ts) · *javona* → "
                "**manjavojavona** (z → j) · *faritra* → **voafariparitra** (f → p) · *maty* → "
                "**matimaty** (y → i)"]),
    ("p", "Tsy hafa amin'ireo **renifeo** miova amin'ny **fanakambanan-teny** ireo fanovana ireo "
          "(*s → ts*, *f → p*, *v → b*, *l → d* — FRP, LFK 1e) : rehefa **atohy** na "
          "**averina** ny teny dia mety miova ny renifeo voalohan'ny ampahany manaraka."),

    ("h2", "Lahatsoratra fijerena : karohy ny teny verindroa ao"),
    ("p", "*Santionany* avy amin'ny *Torolalana* 2015 (Valin'ny Fanazaran-tsaina **11-1**) — **tsy "
          "novaina**, tenim-pisoran'ny boky : vakio mangina, dia karohy ireo teny verindroa ao."),
    ("p", "« **Elaela** ihany vao tody tany Amerika ireo sambo maromaro indray niainga tany "
          "Pôrtogaly. Hitady an'i India ny foto-diany saingy noho ny fitsoky ny rivotra **miovaova** "
          "sy ny **fitopatopan'** ny onja mahery dia **nivilivily** ny fizotry ny lalany. Mba "
          "**atorotoroy** ahy eto amin'ny sarintany hoe ny tany sy ny toerana **malazalaza** efa "
          "**fantapantatra** tamin'izany andro izany. […] **Sarotsarotra** ihany ny mamaky ny "
          "anarana voasoratra eo. Somary efa **antitrantitra** mantsy io sarintany io ka "
          "**matimaty** sy **manjavojavona** ny soratra. »"),
    ("ohatra", ["**11** : *elaela* (ela) · *miovaova* (miova) · *fitopatopa* (fitopa) · "
                "*nivilivily* (vily) · *atorotoroy* (toro) · *malazalaza* (laza) · *fantapantatra* "
                "(fantatra) · *sarotsarotra* (sarotra) · *antitrantitra* (trantitra) · *matimaty* "
                "(maty) · *manjavojavona* (javona)",
                "Glose : *somary* = mais, quant a · *nivilivily* = a erre de cote et d'autre · "
                "*antitrantitra* = tres ancien · *matimaty* = presque efface (avy amin'ny *maty*)"]),
    ("note", "Teny fanamafana ho an'ny mpampianatra : (1) ny *Torolalana* 2015 dia milaza fa « "
             "**tsy mitovy tanteraka ny hevitry ny teny tsotra sy ny teny verindroa** » (*tsara* / "
             "*tsaratsara*) ary fa « **matetika natao hanalefaka ny hevitra** » ny verindroa ; ny "
             "FRP T6 no mitazona ny **roa** tanjona (manalefaka **sy** manamafy), ka **ny FRP no "
             "arahina** — ampiasao kosa ilay « *tsy mitovy tanteraka* » mba hampahatsiahivanana fa "
             "**tsy fanovana teny fotsiny** ny verindroa. (2) Ao amin'ny dikan-teny ananantsika dia "
             "misy **fiverimberana** soratra eo am-pelanan'ny teny *voafariparitra* : nasiam-panapoaka "
             "(*[…]*) ilay ampahany, fa tsy nohamboarina. (3) *Boky ho an'ny ambaratonga voalohany "
             "(Kilasy faha-8 sy faha-7) ity* : **loharano momba ny fomba fampianarana** ihany no "
             "angalana aminy — ny lista an'ny FRP T6 ihany no fototra ho an'ny votoaty."),
    ("h2", "Tsy izay rehetra voalaza indroa dia verindroa"),
    ("p", "Raha **roa teny** samy hafa no voalaza indroa dia **tsy** teny verindroa izany ; **iray "
          "teny** ihany averina vao atao hoe verindroa."),
    ("ohatra", ["Nandeha nandeha izy.  (roa teny : tsy verindroa)",
                "Nande**handeha** izy.  (iray teny averina : verindroa)",
                "« Mamela veloma **ombieny ombieny** » (Jean NARIVONY, *Takariva*) : roa teny."]),

    ("h2", "Rakitra mifandray"),
    ("p", "Ao amin'ny **fitsipiky ny teny** dia misy mpamari-toetra voamboatra amin'ny alalan'ny "
          "**tsofoka** (*s-ol-anga*, *f-in-aritra*), ary hoy ny boky : « **Ny tsofoka dia "
          "manamafy ny hevitry ny mpamari-toetra** » (FRP, LFK 2b) → **roa fomba** hanaovana "
          "izany : ny **tsofoka** (ao anaty teny) sy ny **verindroa** (fiverenana)."),
    ("p", "Amin'ny **Asa an-tsoratra** dia atao hoe « **Lahatsoratra manoritsoritra** » : "
          "*soritra* → **soritsoritra** → **manoritsoritra** → verindroa koa ilay lohateny."),
]

# ------------------------------------------------------------------ FANAZARAN-TENA
# Ny fehezanteny rehetra dia avy amin'ny FRP (LFK 1d) sy amin'ny mémoire 2014 — tsy namboarina.
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
    {"consigne": "Mamorona fehezanteny roa : iray **manalefaka** hevitra, fa ny iray **manamafy** "
                 "hevitra ; samy mampiasa teny verindroa."},
    {"consigne": "Zarao amin'ny karazana **roa** ireo teny verindroa ireo : (1) **tsy ahitana "
                 "fiovana** ; (2) **misy fiovana** — dia lazao koa ny litera miova.\n"
                 "elaela · miovaova · nivilivily · malazalaza · atorotoroy · fantapantatra · "
                 "sarotsarotra · matimaty · manjavojavona"},
]

# ------------------------------------------------------------------ FANITSIANA
FANITSIANA = [
    {"tsilo": [("lavalava", "un peu long"),
               ("menamena", "rouge clair, rougeâtre"),
               ("lavidavitra", "un peu loin"),
               ("adidy", "devoir, charge")]},
    {"banga": "Naverina indroa ny lokon' ny trano ka [[matevina]] tsara.  |  Vereno indroa io "
              "hosy io mba [[halemy]] tsara.  |  Aleo atao verindroa io kofehy io mba ho "
              "[[mafy]] .  |  Tady verindroa io ka tsy [[tapaka]] intsony."},
    {"ohatra": ["**R** : a) Nandeha nandeha izy.   d) « Mamela veloma ombieny ombieny. » — "
                "**V** : b) Nandehandeha izy.   c) Menamena ny ravina.",
                "Ny zava-dehibe : **teny iray** (fototeny) averina indroa no atao hoe verindroa ; "
                "mety **manalefaka** (*halemy*, *manify*) na **manamafy** (*ho mafy*, *tsy "
                "tapaka*, *matevina*) ny hevitry ny teny fototra, araka ny dikan'ny fototeny sy ny "
                "toe-javatra ao anaty fehezanteny."]},
    {"ohatra": ["Tsindry : *matevina* = (loko) matroka, tena ; *halemy* = malemy, tsy mafy "
                "intsony ; *adidy* = « asa na andraikitra tsy maintsy ataon' ny tsirairay »."]},
    {"ohatra": ["**1** : elaela, miovaova, nivilivily, malazalaza, atorotoroy — **2** : "
                "fantapantatra (p ampiana), sarotsarotra (s → ts), matimaty (y → i), "
                "manjavojavona (z → j)",
                "Jereo ny fototeny : *sarotra* → *sarotsarotra* (ny *s* an'ny fototeny dia lasa *ts* "
                "eo amin'ny ampahany faharoa). Raha tsy misy litera nampiana na miova eo amin'ny "
                "fiverenana, dia karazana **(1)** izany."]},
]

LALANA = ("Tadiavo 5 teny verindroa ao amin'ny lahatsoratra na boky novakinao tamin'ity "
          "herinandro ity, soraty amin'ny tabilao [teny fototra | teny verindroa | manalefaka "
          "na manamafy], ary ampiasao ao anaty fehezanteny nataonao manokana izy rehetra.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="3", isan="2", sary=True,
              loharano=[
    "FRP T6 — « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, **ÉDITION OCTOBRE 2026**, "
    "Minisiteran'ny Fanabeazam-pirenena : plateforme.education.mg → "
    "/bibliotheque-numerique/theme/biblio/pix/frp/college/FRP_T6/FRP_MLG_T6.pdf — LFK 1d "
    "« TSIPELINA / Tanjon'ny fampiasana teny verindroa » (Manalefaka hevitra · Manamafy hevitra "
    "ary ireo ohatra roa) ; LFK 2c « Mpamaritr'isa » (« Tsy azo atao verindroa raha tsy asiana "
    "tsi- na ki- eo alohany ») ; LFK 2b « Mpamari-toetra » (2.1 : lavalava, menamena, lavidavitra ; "
    "2.2 : « Ny tsofoka dia manamafy ny hevitry ny mpamari-toetra »).",
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
    "(Tari-dalana ho an'ny Kilasy faha-8) — Tsipelina, herinandro-1, seho-1, Fanazaran-tsaina "
    "voalohany : tanjona « Mahasoratra ara-pitsipika ny teny atao verindroa ny mpianatra », roa "
    "karazana endrika, ny fanovana *s > ts*, *z > j*, *f > p* ; ary **Valin'ny Fanazaran-tsaina "
    "11-1** (lahatsoratra *elaela / miovaova / sarotsarotra / manjavojavona*). Copie numerique : "
    "https://docs.google.com/document/d/13AdMAiiH4TN__G83-nB8agyDuRyhlwZs — **tsy misy laharan-pejy "
    "miseho** ; koa loharano *fomba fampianarana* ihany ity (ambaratonga voalohany), fa ny FRP T6 "
    "ihany no fototra ho an'ny votoaty.",
    "RASOLOFOSON, Tovonjanahary Jorosoa, *Ny endriky ny matoanteny verindroa amin'ny teny "
    "malagasy*, Voka-pikarohana ahazoana ny mari-pahaizana Maîtrise ès-lettres, "
    "Oniversiten'Antananarivo — Sampana Teny sy Lahabolana ary Riba Malagasy (STe.La.Ri.M.), "
    "notarihin-dRALALAOHERIVONY Baholisoa Simone, Professeur titulaire, soutenance 10 novambra "
    "2014, 188 p. : §1.1 (famaritana hoe « verina + roa ») ; §1.1.1 (ny tady, ny zaitra, ny loko, "
    "ny hosy) ; §1.1.1.1 (fototeny ihany) ; §1.1.1.2 (fanamafisan-kevitra / fanalefahan-kevitra / "
    "manova hevitra) ; §1.1.3 (karazana telo : am-panovonana, am-panovanana, am-panatsofohana) ; "
    "TOVANA II « lisitry ny verindroa ara-boambolana » (and. 324 *lavalava*, 331 *lehalehy / "
    "mandehandeha*, 488 *roaroa / mandroaroa*, 586 *sitatsitaka*, 587 *sitritsitrika*, 604 "
    "*soritsoritra / manoritsoritra*). Version en ligne : "
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
