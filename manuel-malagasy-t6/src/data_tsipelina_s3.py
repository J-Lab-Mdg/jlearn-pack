# -*- coding: utf-8 -*-
"""T6 — lesona S3 : Fiasan'ny teny · Tsipelina · « Fepetra amin'ny fanakambanan-teny » (V1)

FIFANDRANANA (didin'ny mpanabe, 30 sy 31/10 ; rafitana 01/11)
  * VOTOATY sy LOHATENY = **FRP T6, ÉDITION OCTOBRE 2026** : « FEPETRA SY TEKINIKA
    ITRANDRAHANA IREO LOHAHEVITRA → LOHAHEVITRA I → FIASAN'NY TENY → TSIPELINA → LFK 1e :
    « TSIPELINA / Fepetra amin'ny fanakambanan-teny ». Tsy misy laharan-pejy aseho amin'ny
    PDF 2026 → **azojavona amin'ny code lesona + lohatenin-dingana** ; ny dikan-teny 93 p.
    dia p.75-76 (mitovy teny-teny, **anisan'izany ny coquille « rsha »** → voamarina fa
    tsy disadika amin'ny fikarohana fa ao amin'ny boky ihany).
  * NY 3 FITSIPIKA + ny 9 ÔHATRA dia **voasoro teny-teny** ; ny fehezanteny fanazavan'ny
    lesona dia **mamy** ihany (ohatra + glose), mba tsy hanoratana hevitra tsy ao amin'ny
    loharano. **Tsy nampiasaina ny Baiboly.**
  * NY FEHEZA MANGINA (« ... rsha tsy amin'ny teny miverina ... ») dia **ampana mitsivalana**
    amin'ny ohatra ao amin'ny boky (tranom-borona, tahom-penina, tongo-parafara) ; ny
    fanamarihana momba ny coquille dia ao amin'ny `note` ho an'ny mpampianatra.
  * MIFANDRAY AMIN'NY FITSIPIKY NY TENY : LFK 2c (mpamaritr'isa) « **Atambatra fa tsy
    asiana tsipi-panohizana** » → *faharoa, fahefatra, ampahatelony, hateloana, fanindroany*.
  * CADRE = PE T6 p.21-22 ; RAPE T6 sept. 2026 (herinandro 1→7, 4 ora/kerinandro) ; `Daty`
    mangina ; `Faharetany : ora 12` raporitra. Gabarit takela = 6 dingana, TNR 12, Tinos ;
    `FANITSIANA` = SARY SVG iray (sisiny + soratra + tsilo) ; `FANAZARAN-TENA` = tabilao
    Word azo ovaina, mangina ny filaharana valiny.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import fiche  # noqa: E402

ZT = "Tsipelina"
LT = "Fepetra amin'ny fanakambanan-teny"

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
    "Lohahevitra": "FIASAN'NY TENY - Tsipelina (RAPE T6 herin. 1-7 · FRP LFK 1e)",
    "Seho n°": "4",
    "Lohateny": LT,
    "Isan'ny seho": "2",
    "V. P. M": "Mifehy ny fitsipi-panoratana ny teny malagasy",
    "V. P. M note": "Voka-pianarana manokana (PE T6, p.21)",
    "Fitaovana": "Ampahan-dahatsoratra novakina na nohenoina",
    "Faharetany": "ora 12",
    "Fanovozan-kevitra": "FRP T6 éd. oct. 2026 (LFK 1e sy 2c) · RAPE T6 sept. 2026, herinandro "
                         "1→7 · PE T6 p.21-22",
}

# ------------------------------------------------------------------ GRILLE (PE T6 p.21-22, 6 dingana)
GRILLE = [
    ("I. Famerenana (5 min)",
     "Araka ny natao tamin'ny seho teo aloha : inona no atao hoe **tsipi-panohizana** ? Inona no "
     "mety miova rehefa atambatra teny roa?",
     "V.A. : ny « - » (tsipika fohy) eo anelanelan'ny ampahany roa. Ny litera na ny tendro dia "
     "mety miova : *sary tany* → *sarin-tany*.",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (… min)",),
    ("1. Fitarihan-tsaina (3 min)",
     "Tarihina ny mpianatra hamaky ny ampahan-dahatsoratra (PE T6, Sahanasa) misy ireo teny "
     "atambatra: « sarin-tany », « ravin-tsaonjo », « satro-behivavy », « tongo-parafara ».",
     "Mamaky.",
     "Asan-tarika", "Ampahan-dahatsoratra", ""),
    ("2. Fanolorana (2 min)",
     "Lazao ny lohateny : « TSIPELINA / **Fepetra amin'ny fanakambanan-teny** » (FRP T6 éd. "
     "2026, LFK 1e).\n"
     "Soraty amin'ny tabilao : *sary tany* → *sarin-tany*.",
     "Mihaino.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana (4 min)",
     "« *Hanasaraka ireo teny nakambana ka hanavaka ny teny voalohany sy ny teny "
     "faharoa* » (PE, Sahanasa). Diniho :\n"
     "sary tany → sarin-tany · ravina saonjo → ravin-tsaonjo · satroka vehivavy → "
     "satro-behivavy\n"
     "Inona no natao tamin'ny farany amin'ny teny voalohany ? Inona no natao "
     "tamin'ny voalohan'ny teny faharoa ?",
     "Mijery, mamaly.\n"
     "V.A. : indraindray dia tsy very ny -ka/-tra/-na fa miala ; ary ny « n » noampy — ny renifeo "
     "manaraka azy dia miova : s → ts, f → p, v → b, l → d.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana (4 min)",
     "« *Hamaritra ny fepetra amin'ny teny tsy maintsy akambana sy ny antony anaovana "
     "izany* » (PE, Sahanasa) : zarao amin'ny **fitsipika telo** ireo ôhatra ao amin'ny LFK 1e : "
     "(1) « n » ampiana ; "
     "(2) farany -na ; (3) farany -ka / -tra.",
     "V.A. : (1) sarin-tany, tranom-pokonolona ; (2) ravin-tsaonjo, miran-dava, lavenom-potsy ; "
     "(3) satro-behivavy, tapa-pe, tongo-tsoavaly.",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana (3 min)",
     "Ampifandraiso amin'ny alalan'ny tsilo : ny roa teny sy ny endrika **atambatra** azy (FRP, "
     "LFK 1e).",
     "V.A. : ireo valiny voasoratra ao amin'ny FANITSIANA.",
     "Asa iombonana", "Solaitrabe", ""),
    ("6. Fampiharana (4 min)",
     "« *Hampiasa ao anaty fehezanteny tokana ny teny tsy mbola nakambana sy ny teny "
     "nakambana* » (PE, Sahanasa) : soraty ny endrika atambatra mety.",
     "V.A. : ireo valiny voasoratra ao amin'ny FANITSIANA.\n"
     "Mamaly",
     "Asa samirery", "Kahie", ""),
    ("III. Tombana (5 min)",
     "Mamaritra ny seho amin'ny alalan'ny « Tombana » an'ny PE (p.22, "
     "teny-teny) : « Mampiasa ny fitsipika mifehy ny fanakambanan-teny ny mpianatra. » sy « "
     "Mamorona fehezanteny manaraka ny fomba fanoratra ny teny malagasy ny mpianatra. »",
     "Hilaza.",
     "Asa samirery", "----", ""),
]

# ------------------------------------------------------------------ LESONA
LESONA = [
    ("h2", "Ny atao hoe fanakambanan-teny"),
    ("p", "Ny **fanakambanan-teny** dia ny fampifandraisana teny roa mba hanoratana azy amin'ny "
          "fomba iray : **teny atambatra** — eo anelanelan'ny ampahany roa dia mety misy "
          "**tsipi-panohizana** (« - »). Izay no atao eto amin'ny boky : *sary tany* → "
          "**sarin-tany**."),

    ("h2", "Ny zavatra je-hina (Votoatiny an'ny PE)"),
    ("p", "Ny PE (Tsipelina : « Fanakambanan-teny : fepetra amin'ny fanakambanan-teny ») dia "
          "mametraka ireo singa efatra ireo : « **Fananana sy tompony** » · « **Hetsika sy "
          "mpanao azy** » · « **Teny voalohany miafara amin'ny -ka, -tra, -na, teny faharoa "
          "manomboka amin'ny zana-peo sy manomboka amin'ny renifeo** » · « **Fampiasana "
          "mpampikambana na** … ». *Mangina ny tapany farany* amin'ireo singa ireo ao amin'ny "
          "lahatsoratra ananantsika : nitohy hatramin'ny « na » ny andian-tsoratra, ka tsy "
          "nohamboarina eto. Ny ôhatra ao amin'ny FRP no mamerena azy : *trano (ananana) "
          "vorona (tompony)* → **tranom-borona** (fananana sy tompony)."),
    ("h2", "Fitsipika 1 — n ampiana alohan'ny teny manaraka"),
    ("p", "« *Raha tsy miafara amin'ny **-ka, -tra, -na** ny teny voalohany, dia asiana « **n** » "
          "aloha izy vao atohy amin'ny teny manaraka ka **ovana ny renisoratra voalohan'ilay teny "
          "manaraka**. Raha renisoratra malemy ilay « n » manampy dia atao « **m** » eo alohan'ny "
          "**b** sy **p**, na **maty** mihitsy eo alohan'ny **m** sy **n**.* »"),
    ("ohatra", ["sary tany → **sarin-tany**",
                "Tranona fokonolona → **tranom-pokonolona**",
                "trano (ananana) vorona (tompony) → **tranom-borona**",
                "Taho (ananana) penina (tompony) → **tahom-penina**"]),
    ("p", "Ny fiovana hita ao amin'ireo ôhatra ireo : **s → ts** · **f → p** · **v → b** · "
          "**l → d** · **p → p** (tsy miova rehefa aorian'ny « m »)."),

    ("h2", "Fitsipika 2 — miafara amin'ny « -na » ny teny voalohany"),
    ("p", "« *Raha miafara amin'ny **-na** kosa ny teny voalohany, dia tsy ampiana « n » intsony "
          "akory fa ny **a** amin'ny « na » aza no **esorina** ka « n » no sisa mijanona, ary io "
          "« n » io no misolo ilay « n » voalaza etsy ambony ka dia toy ny eo ihany koa ny sisa "
          "rehetra.* »"),
    ("ohatra", ["ravina saonjo → **ravin-tsaonjo**",
                "Mirana lava → **miran-dava**",
                "Lavenona fotsy → **lavenom-potsy**"]),

    ("h2", "Fitsipika 3 — miafara amin'ny « -ka » na « -tra »"),
    ("p", "« *Raha miafara amin'ny **-ka, -tra** ny teny voalohany dia alatsaka fotsiny ny -ka, "
          "-tra ka soloana **tsipi-panohizana** ary ny renisoratra voalohan'ny teny faharoa dia "
          "miova toy ny amin'ny efa voalaza rehetra eo ambony.* »"),
    ("ohatra", ["satroka vehivavy → **satro-behivavy**",
                "Tapaka fe → **tapa-pe**",
                "Tongotra soavaly → **tongo-tsoavaly**"]),

    ("h2", "Fepetra : ovany no atao, ovany tsy atao"),
    ("p", "Amin'ny ankapobeny dia **afa-tsy** ireo toy izay : (i) ny **teny miverina** (izay "
          "miverina indroa ny ampahany aminy) ary (ii) ny milaza **tompon-javatra sy zavatra "
          "ananana** (oh : *trano* ananana *vorona* → **tranom-borona**) → **tsy atao** ny "
          "fanakambanan-teny rehefa tsy miafara amin'ny -ka, -tra, -na ny teny voalohany. Ary "
          "« *Raha miafara amin'ny -ka, -tra, -na kosa ny teny voalohany dia **saika akambana "
          "mandrakariva** ny teny roa* » (oh : **tongo-parafara**)."),
    ("note", "Ho an'ny mpampianatra : ao amin'ny boky (éd. 2026 sy dikan-teny 93 p. mitovy) dia "
             "misy coquille ao amin'ity feheza ity : « … dia tsy atao ny fanakambanan-teny **rsha** "
             "tsy amin'ny teny miverina … ». Jereina hoe **raha** (na *tsy raha*) no tenim-piteny "
             "tany am-pamoronana azy, ka dia nozaraina toy izay ny dikany : ny ohatra (*trano "
             "vorona* → *tranom-borona* ; *Taho penina* → *tahom-penina* ; *tongo-parafara*) ihany "
             "no atao hoe teny atambatra. Marihina koa fa **tsy misy tsipi-panohizana** ny anarana "
             "atambatra efa mahazitra : **ranomasina** ( = rano + masina ; *Malagasy Dictionary "
             "and Encyclopedia*, malagasyword.org/bins/teny2/ranomasina) — tsy hoe « rano-masina » "
             "intsony. Loharano hafa : *Ny endriky ny matoanteny verindroa amin'ny teny malagasy* "
             "(RASOLOFOSON T. J., mémoire, Oniversiten'Antananarivo, 2014), « Lisitry ny famantarana sy "
             "ny fanafohezana », izay manao ny « **− tsipika fohy** : manelanelana ny hasin-teny "
             "amin'ny teny rasaina », ary ny `Φ` (feo very) dia marika ho an'izany."),

    ("h2", "Mifandray amin'ny Fitsipiky ny teny : tsy asiana tsipi-panohizana"),
    ("p", "Ao amin'ny **mpamaritr'isa** dia voalaza mazava : « ***Atambatra fa tsy asiana "
          "tsipi-panohizana*** *ny fanoratana azy* » (FRP, LFK 2c) — koa :"),
    ("ohatra", ["**laharana** : faha + roa → **faharoa** · faha + telo → **fahatelo** · faha + "
                "efatra → **fahefatra** (miova ny *a* → *e*)",
                "**ampahany** : **ampahatelony**, **ampahafolony**",
                "fe-potoana : **hateloana** (*ha-telo-ana*), **hefarana** (*h(a)-efatra-ana*), "
                "**havaloana** (*ha-valo-ana*)",
                "**laharan'ny fampitomboana** : **fanindroany** (*fan-in-roa-ny*)"]),
    ("p", "Ireo rehetra dia **tsy** misy « - » : toy ny *ranomasina*, sady teny **iray** ihany vao "
          "tonga **atambatra** — fa rehefa **roa** teny mbola misaraka dia misy **tsipi-panohizana** "
          "indraindray, araka ny fitsipika 1-3 eo ambony."),
]

# ------------------------------------------------------------------ FANAZARAN-TENA
# Ny ôhatra rehetra dia avy amin'ny FRP (LFK 1e sy 2c) — tsy nampivoarana fehezanteny vaovao.
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny roa sy ny endrika atambatra azy.",
     "tsilo": (["sary tany",
                "ravina saonjo",
                "satroka vehivavy",
                "Tapaka fe"],
               ["sarin-tany",
                "ravin-tsaonjo",
                "satro-behivavy",
                "tapa-pe"])},
    {"consigne": "Soraty ny endrika atambatra mety.",
     "banga": "Tongotra soavaly → …………………  |  Mirana lava → …………………  |  Lavenona fotsy → "
              "…………………  |  Tranona fokonolona → …………………  |  faha + efatra → …………………"},
    {"consigne": "Lazao amin'ny fitsipika **1, 2 na 3** ny teny atambatra tsirairay.\n"
                 "a) tongo-tsoavaly   b) sarin-tany   c) ravin-tsaonjo   d) tapa-pe   "
                 "e) lavenom-potsy   f) tranom-pokonolona"},
    {"consigne": "Mamorona fehezanteny roa mampiasa teny atambatra (ohatra : satro-behivavy, "
                 "tongo-parafara, ranomasina)."},
]

# ------------------------------------------------------------------ FANITSIANA
FANITSIANA = [
    {"tsilo": [("sary tany", "sarin-tany"),
               ("ravina saonjo", "ravin-tsaonjo"),
               ("satroka vehivavy", "satro-behivavy"),
               ("Tapaka fe", "tapa-pe")]},
    {"banga": "Tongotra soavaly → [[tongo-tsoavaly]]  |  Mirana lava → [[miran-dava]]  |  Lavenona "
              "fotsy → [[lavenom-potsy]]  |  Tranona fokonolona → [[tranom-pokonolona]]  |  "
              "faha + efatra → [[fahefatra]]"},
    {"ohatra": ["**3** : tongo-tsoavaly, tapa-pe — **1** : sarin-tany, tranom-pokonolona — "
                "**2** : ravin-tsaonjo, lavenom-potsy."]},
    {"ohatra": ["Ny zava-dehibe : ny **farany** -ka / -tra / -na amin'ny teny voalohany no mamaritra "
                "izay atao (alatsaka → tsipi-panohizana) ; ary ny **renifeo voalohan'ny** teny "
                "faharoa dia miova rehefa aorian'ny « n » : s → ts, f → p, v → b, l → d."]},
]

LALANA = ("Tadiavo 5 teny atambatra ao amin'ny lahatsoratra na boky novakinao tamin'ity "
          "herinandro ity, soraty amin'ny tabilao [teny roa | endrika atambatra | fitsipika 1 "
          "na 2 na 3], ary ampiasao ao anaty fehezanteny nataonao manokana izy rehetra.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="4", isan="2", sary=True,
              loharano=[
    "FRP T6 — « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, **ÉDITION OCTOBRE 2026**, "
    "Minisiteran'ny Fanabeazam-pirenena : plateforme.education.mg → "
    "/bibliotheque-numerique/theme/biblio/pix/frp/college/FRP_T6/FRP_MLG_T6.pdf — « FEPETRA SY "
    "TEKINIKA ITRANDRAHANA IREO LOHAHEVITRA → LOHAHEVITRA I → FIASAN'NY TENY → **TSIPELINA** » : "
    "LFK 1e « Fepetra amin'ny fanakambanan-teny » (ny fitsipika telo sy ny 9 ôhatra : sarin-tany, "
    "tranom-pokonolona, ravin-tsaonjo, miran-dava, lavenom-potsy, satro-behivavy, tapa-pe, "
    "tongo-tsoavaly, tranom-borona, tahom-penina, tongo-parafara) ary LFK 2c « Mpamaritr'isa » "
    "(« Atambatra fa tsy asiana tsipi-panohizana »). Tsy misy laharan-pejy voasoratra amin'ity "
    "PDF ity amin'ireo dingana ireo.",
    "FRP 6ème Malagasy (93 pejy, « FRP_6eme_MLG.pdf »), p.75-76 : mitovy teny-teny — **anisan'izany "
    "ny coquille « rsha »** ao amin'ny feheza « FANAKAMBANA NY TENY » → voamarina fa ao amin'ny "
    "boky ihany, fa tsy disadika tamin'ny fikarohana.",
    "PE T6, PROGRAMME D'ETUDES — taranja Malagasy, p.21-22 « FIASAN'NY TENY - Tsipelina » "
    "(Voka-pianarana manokana ; Sahanasa ; Fitaovana ; Tombana ; Faharetany : ora 12) ; p.15 "
    "« FAFAN'NY VOTOATINY : Tsipelina : Teny verindroa · Fanakambanan-teny ».",
    "RAPE T6, édisiona septambra 2026, plateforme.education.mg → /theme/biblio/pix/pdf/RAPE_T6.pdf, "
    "taranja Malagasy p.6-7 : herinandro **1→7** = TsiPELINA (« Teny verindroa · "
    "Fanakambanan-teny ») ; 4 ora/kerinandro ; « Tsy ahitana daty na vanim-potoana mamaritra ny "
    "tetiandrom-pampianarana » ; « Fanaambanan-teny » = coquille amin'ny RAPE.",
    "RASOLOFOSON, Tovonjanahary Jorosoa, *Ny endriky ny matoanteny verindroa amin'ny teny malagasy*, "
    "mémoire Maîtrise ès-lettres, Oniversiten'Antananarivo (STe.La.Ri.M.), notarihin-dRALALAOHERIVONY "
    "Baholisoa Simone, 10 novambra 2014, 188 p. — « Lisitry ny famantarana sy ny fanafohezana » "
    "(− tsipika fohy : *manelanelana ny hasin-teny amin'ny teny rasaina* ; ǿ = feo very).",
    "Malagasy Dictionary and Encyclopedia (David Stark) : *rano*, *masina*, **ranomasina** — "
    "https://malagasyword.org/bins/teny2/ranomasina (teny atambatra mahazitra, tsy misy tsipi-"
    "panohizana).",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela;", len(FICHE["loharano"]), "loharano")
