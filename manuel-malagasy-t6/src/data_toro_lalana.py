# -*- coding: utf-8 -*-
"""T6 — **FARITANA IV · TORO-LALANA HO AN'NY MPAMPIANATRA** (A0-A2).

Ireto dingana ireto dia **tsy votoatin'ny mpianatra** fa fampiharana ny
« TOROLALANA FITRANDRAHANA NY LESONA » an'ny FRP T6 (éd. Oktobra 2026, p.5-9), ny
**FFLJ** (p.84-87) ary ny lisitry ny lohahevitra 13 (p.23-180). Nangonina eto mba
tsy hanaintaintanana ny mpampianatra eo am-pikarohana boky roa.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_t6 import fiche_t6  # noqa: E402

ZT = "Toro-lalana"
FAR = "FARITANA IV · TORO-LALANA"
ETAPE = [("Lazao ny antony anaovana ity boky ity.", "Mihaino.", "Asa iombonana", "—", ""),
         ("Vakio ny laharisa sy ny tabilao momba ny ZANA-TARANJA.", "Mamaky.", "Asa samirery", "Boky", ""),
         ("Inona no fanovozan-kevitra ilaina ?", "Mamaly.", "Asan-tarika", "—", ""),
         ("Zarao : votoatin'ny mpianatra / an'ny mpampianatra.", "Mamarina.", "Asa mifampiha",
          "Tabilao", ""),
         ("Jereo ny *note* (footer) ao amin'ny lesona tsirairay.", "Mijery.", "Asa samirery",
          "Boky", ""),
         ("Mamorona ny takelany manokana ho an'ny kilasy.", "Mamorona.", "Asa samirery", "Kahie",
          "")]

# ------------------------------------------------------------------ A0
LESONA_A0 = [
    ("h2", "Ny boky sy ny fotodrafitrasany"),
    ("p", "Ity manuela ity dia mifototra amin'ny **FRP Malagasy T6 — ÉDITION OCTOBRE 2026** "
          "(« Fascicule de Ressources Pédagogiques », Minisiteran'ny Fanabeazam-pirenena) ho an'ny "
          "**votoatiny**, ary amin'ny **RAPE T6 septambra 2026** ho an'ny **fitsinjarana ny ora** "
          "(4 ora/kerinandro). Ny **PE T6** (p.21-26) kosa dia ny momba ny **dingana**, ny "
          "**Fitaovana** ary ny **Tombana**."),
    ("sary", "planning"),
    ("h2", "Lisitry ny firaketana araka ny ZANA-TARANJA"),
    ("tabl", (["Zana-taranja", "Votoatiny an'ny manuela", "LFK", "Faharetany ara-PE"],
              [["**I**", "MALAGASY, KOLONTSAINA ARY FIARAHAMONINA : *ny tanindrazana sy ny firenena* "
                "· *ny olombelona sy ny tontolo iainana*", "—", "ora 38 (20 + 18)"],
               ["**II**", "TONTOLON'NY LITERATIORA : literatiora amin'ny ankapobeny · tononkalo · "
                "sarin-teny · mpanoratra", "LI 1a · LII 2a-2d", "ora 54 (14 + 14 + 12 + 14)"],
               ["**III**", "*Fepetra sy tekinika fitrandrahana ireo lohahevitra* — ny toro-lalana "
                "ho an'ny mpampianatra (A0-A2)", "—", "—"],
               ["**IV**", "FIASAN'NY TENY - TSIPELINA : teny mitovy fanonona · avahan'ny tendro · "
                "verindroa · fanakambanan-teny", "1a · 1b · 1d · 1e", "ora 12"],
               ["**V**", "FIASAN'NY TENY - FITSIPIKY NY TENY : tsirinteny · sokajin-teny · "
                "matoanteny · fandrasan-teny · filaza mandidy", "2a-2g", "ora 20"],
               ["**VI**", "ASA AN-TSORATRA - LAHATSORATRA MANORITSORITRA : famakafakana sy "
                "famorona", "—", "ora 20"]],
              [900, 5100, 1900, 1967])),
    ("h2", "Ny fepetra ara-piteny natao"),
    ("bul", ["**Lesaona** : amin'ny teny malagasy daholo, tsy misy dikany amin'ny teny hafa.",
             "**Tsy misy marika loharano** ao anaty lahatsoratra : ny loharano dia voasoratra "
             "*ao amin'ny « LOHARANON-KEVITRA » ihany* (ary ny fanazavana lalina dia ao amin'ny "
             "*note* ho an'ny mpampianatra).",
             "**Tsy misy teny na hevitra voforina** : ny ôhatra rehetra dia an'ny FRP, na "
             "voamarina amin'ny loharano lazaina, na ilazana fa *tsy voamarina*.",
             "`Daty` : **mangina** (araka ny RAPE) ; `Faharetany` : ora 38 (ZT I) · ora 54 "
             "(ZT II) · ora 12 (ZT IV) · ora 20 (ZT V sy ZT VI) — araka ny PE T6 ; 144 ora feno "
             "= 36 kerinandro.",
             "Ny **sary** sy ny **grafique** (tsilo, hazatrafi ka, timeline, gant) dia voalamina "
             "amin'ny **SVG** mba tsy ho levona amin'ny Word ; ny soratra ao anatiny dia "
             "**contour**, ka tsy mila polise."]),
    ("note", "Ireo lesona 3 voalohany (Tsipelina) dia ny efa nampiharina tamin'ny seho : ny L2 (teny "
             "verindroa) dia mifototra amin'ny **tanoran'ny mpampianatra** (01/11/2026) — voasoro "
             "teny-teny ao amin'ny boky. Koa ny fomba fanaovana azy (rafitra ZANA-TARANJA I→VI, ôhatra, tabilao "
             "isaky ny abidy) no modely, fa tsy ny lesona hafa."),
]

# ------------------------------------------------------------------ A1
LESONA_A1 = [
    ("h2", "Ireo lohahevitra an'ny taona ao amin'ny FRP T6"),
    ("p", "Ao amin'ny FRP dia misy ampahany roa mifandimby : ny **lesona** (votoatiny miorima : "
          "TSIPELINA, FITSIPIKY NY TENY, LITERATIORA) sy ny **lohahevitra** fampiasana azy "
          "(« support de cours » / « tahirin-kevitra »). Indreto ny lohahevitra 13 (p.23-180)."),
    ("tabl", (["L.", "LOHAHEVITRA"],
              [["I · II", "FIASAN'NY TENY : TSIPELINA sy FITSIPIKY NY TENY (jereo ny L1-L11)"],
               ["III", "FANAJANA SY FIAROVANA NY FANANANA IOMBONANA"],
               ["IV", "NY FIAROVANA NY OLONA MAREFO"],
               ["V", "NY ASAM-POKONOLONA, NY ASAM-PANJAKANA, NY ASA MAHALEO TENA"],
               ["VI", "NY ZO SY ADIDY ARY ANDRAIKITRA"],
               ["VII", "NY VAKOKA SY NY HAREN-TSAINA MALAGASY"],
               ["VIII", "NY FAHAIZANA MIFEHY NY TEKNÖLÖJIA"],
               ["IX", "FIATREHANA NY FIOVAN'NY TOETR'ANDRO"],
               ["X", "NY OLANA SY VAHAOLANA AMIN'NY HAINTANY SY TONDRA-DRANO"],
               ["XI", "NY FANAJANA NY FINOANA SY FIHEVERAN'NY HAFA"],
               ["XII", "NY FAHAIZANA MITAZONA NY MAHA-IZY-AZY ARA-KOLONTSAINA"],
               ["XIII", "NY TOE-TSAINA MANOHITRA KOLIKOLY"]],
              [1300, 8567])),
    ("note", "Ny lohahevitra III-VIII dia voalaza amin'ny tabilao eo ambony araka ny lohateny "
             "tamin'ny PDF ; IX-XIII kosa tamin'ny andalana nitsivalana (« NY OLANA SY VAHAOLANA "
             "AMIN'NY HAINTANY SY TONDRA-DRANO » ohatra) — ka ny fitetezana ao amin'ny boky dia "
             "azo hamarinina indray raha ilaina."),
    ("h2", "FFLJ — ny fanabeazana ho an'ny fampandrosoana lovain-jafy"),
    ("p", "« *Tsy voafetra amin'ny fahazoana fahalalana fotsiny ny FFL fa mitaona amin'ny* ». "
          "Ny tanjona : « *ny hiaro ny planeta, ny zava-maniry sy ny biby amin'ny "
          "fiovan'ny toetr'andro* », « *manome soso-kevitra ny amin'ny fampiasana ny angovo azo "
          "havaozina* », « *iantoka fahombiazana ho an'ny rehetra miaraka amin'ny fihenan'ny tsy "
          "fitoviana, ny fanjakan'ny fahamarinana sy ny fandriam-pahalemana* »."),
    ("bul", ["Ny ady amin'ny fahantrana, ny mosary ary ireo endrika fanavakavahana",
             "Ny fanatontoloana (ny fanavaozana sy ny famoronana)",
             "Ny fiarovana ny tontolo iainana (ny hain-tany, ny fahalotoana)",
             "Ny fiovan'ny toetrandro sy ny angovo azo havaozina",
             "Ny fanabeazana sy ny asa mendrika",
             "Ny rariny sy fandriampahalemana"]),
    ("h2", "Ny fomba fijery sy ny toetra azo refesina"),
    ("p", "Ao amin'ny tabilao an'ny FRP (p.85-87) dia voalaza ireto **fomba fijery** ireto : "
          "« *Fizaràna ny tarika (ENY vs TSIA)* » · « *Fitarihan-dresaka* » · « *Fanatanterahana "
          "ny adihevitra* » · « *Tsoa-kevitra* ». Ary ireto **toetra** ireto : *fahatokisan-tena* · "
          "*fandeferana* · *fizakantena sy fahafahana maniratenana* · *fandraisana andraikitra* · "
          "*fitiavamanan-drahalahy* · *firaisankina sy fihavanana* · *mianatra manatanteraka* · "
          "*mianatra miofo sy mampiofo ny fiarahamonina* · *mianatra miara-miaina* · *saina "
          "mitsikera sy mamakafaka* · *saina mahafaobe* · *saina tia karokaroka (haivao sy "
          "haiforona)* · *mamantatra ny asa sy hetsika azo tanterahina* · *fahaizana miserasera sy "
          "miasa anaty ekipa (fandraisana anjara)*."),
    ("note", "Ny tabilao an'ny PDF (6 kolona : FOMBA FIJERY · AMPIASAINA · INONA IZANY · INONA NO "
             "ENTINY · AHOANA NY FANATANTERAHANA AZY · …) dia tsy azo verifika teny-teny amin'ny "
             "fandrafetana ny lahatsoratra, ka ny lisitra ihany no aseho eto. Raha ilaina ny "
             "fifandrian'ireo kolona dia jerena mivantana amin'ny FRP p.85-87."),
]

# ------------------------------------------------------------------ A2
LESONA_A2 = [
    ("h2", "TOROLALANA FITRANDRAHANA NY LESONA"),
    ("bul", ["« *Vakina iray manontolo ny lesona* »",
             "« *Atao izay ahazoana ny firafiny sy ny votoatiny* »",
             "« *Fehezina ny fizotry ny lesona sy ny votoatiny* »",
             "« *Hamarinina raha ao ireo singa ara-pahalalana ilaina amin'ny lohahevitra "
             "hampianarina (marihina ireo singa tsy tafiditra ka tokony hampiana)* »",
             "« *Mandrafitra ny takela-panomanan-desa* »"]),
    ("h2", "Ny karazana boky roa ao amin'ny FRP"),
    ("tabl", (["Anarana", "Ny atao hoe", "Antony ampiasaina"],
              [["**Tahirin-kevitra ho an'ny mpampianatra**", "« *mety miseho amin'ny endrika "
                "isan-karazany* » : lahatsoratra tsotra na misy sary, sarintany, tabilao, "
                "antontan-isa, kisary", "ho an'ny mpampianatra, mba hahafahany manovo fahalalana "
                "entina manomana"],
               ["**Lesona** (« précis de cours »)", "« *maneho fahafenoana tanteraka* » : « *feno "
                "ary efa voatsonga ny singam-pahalalana entiny ary efa voarindra anaty "
                "lalan-tsaina mavaza* »", "ampiharina avy hatrany amin'ny mpianatra"],
               ["**Tari-dalana**", "« *Natokana ho an'ny mpampianatra* » : mba ahafahany « "
                "*manodina ireo fitaovana/zava-misy eo an-toerana izay azo amin'ny vidiny mora na "
                "maimaimpoana* »", "fitaovana fanampiny"]],
              [2500, 4400, 2967])),
    ("h2", "Fitrandrahana lahatsoratra « Tahirin-kevitra »"),
    ("bul", ["« *Mamaky ny lahatsoratra amin'ny ankapobeny (lecture globale) : lohateny, loharano "
             "nanovozana, mpanoratra, fanazavana teny sarotra…* »",
             "« *Manadihady ny lahatsoratra* »",
             "« *Misintona ny singam-pahalalana mifandraika amin'ny lohahevitra iompanan'ny "
             "fampianarana* »",
             "« *Mandravona ireo hevitra sy fahalalana tokony ho raisina ho amin'ny fampianarana* »",
             "« *Mandrafitra ireo antontan-javatra izay tokony ho raisetin'ny mpianatra "
             "an-tsoratra* »"]),
    ("h2", "Ny Tombana"),
    ("p", "Ny « **Tombana** » dia tsy ho an'ny isa ihany, fa ho an'ny **marika mifandraika amin'ny "
          "asan-tanana** : eo amin'ny takelany dia soratanina ao amin'ny kolona farany (« "
          "Fanamarihana ») ny *criteria* — toy izany ny ao amin'ny PE : « *Mamorona fehezanteny "
          "manaraka ny fitsipika … ny mpianatra* ». Ny **fitsapana** (sapandra) kosa dia "
          "ampiasaina amin'ny fanonona sy ny fitsipika (jereo ny lesona tsirairay)."),
    ("note", "Ao amin'ny PE T6 dia « **Tombana** » (critères) sy « **fitsapana** (sapandra) » no "
             "ampiasaina. Ny « ora 12 » / « ora 20 » dia an'ny PE (p.13 « LANJAN'ORA » sy p.15-25 "
             "« Faharetany ») ; ny fisarana azy amin'ireo dingana 6 (5-3-2-4-4-3-4 min) dia "
             "namboarina ho an'ity boky ity, ka azo ovaina araka ny kilasy sy ny seho."),
    ("h2", "Soso-kevitra fanampiny"),
    ("ohatra", ["Ny lesona tsirairay dia natao ho **2 seho** : (1) fandinihana sy famakafakana, "
                "(2) fandravonana, fampiharana ary tombana.",
                "Aza adino ny **mari-piatoana** amin'ny fanoratana : io no "
                "ampahazoana antoka ny fanonona marina amin'ny namakiana.",
                "Ny **sary** (tsilo) ao amin'ny FANITSIANA dia natao hanohana ny famerenana amin'ny "
                "tabilao : ny tsilo no mamaritra ny fifandraisana, ka azo miverina amin'ny "
                "solaitrabe."]),
]

FICHES = [
    fiche_t6(ZT, "Fampidirana : ny boky, ny firaketana 24, ny fepetra", "—", "—", 0, ETAPE,
             LESONA_A0,
             [{"consigne": "Inona no fotodrafitrasa ampiasaina amin'ny lesona tsirairay ?"},
              {"consigne": "Inona no tokony hatao raha tsy hita ao amin'ny boky ny votoatiny "
                           "ilaina ?"}],
             [{"note": "Takela-panomanan-desa (6 dingana + Famerenana + Tombana) → LESONA → "
                       "FANAZARAN-TENA → FANITSIANA → LOHARANON-KEVITRA."},
              {"note": "Ilazao fa **tsy hamboarina** ny votoatiny tsy hita, fa ampidirina amin'ny "
                       "*note* ho an'ny mpampianatra — toy izay natao tamin'ny L2 (tabilao « Teny "
                       "verindroa isaky ny abidy »)."}],
             ["FRP Malagasy T6, « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, "
              "**ÉDITION OCTOBRE 2026**, Minisiteran'ny Fanabeazam-pirenena : "
              "plateforme.education.mg → /bibliotheque-numerique/theme/biblio/pix/frp/college/"
              "FRP_T6/FRP_MLG_T6.pdf.",
              "RAPE T6 septambra 2026 : plateforme.education.mg → /theme/biblio/pix/pdf/RAPE_T6.pdf "
              "(4 ora/kerinandro).",
              "PE T6 (Programme d'Études), p.13 (LANJAN'ORA), p.15-25 (Faharetany, Takela), "
              "p.21-26 (Sahanasa, Fitaovana, Tombana).",
              "Rakibolana : *Malagasy Dictionary and Encyclopedia* (malagasyword.org/bins/teny2) "
              "sy rakibolana.org — nampiasaina hamerina teny ihany, tsy ho loharano fitsipika.",
              "Ny sary rehetra : voalamina amin'ny `src/sary_fano.py` (SVG + PNG, soratra = "
              "contour) — azo ovaina sy avoaka indray."],
             faritana_sous="ny boky manontolo · 24 firaketana · ZANA-TARANJA 6",
             faharetany="—", fitaovana="Boky + takela"),
    fiche_t6(ZT, "Ireo lohahevitra an'ny taona sy ny FFLJ", "—", "—", 0,
             [("Mamerina ny lohahevitra efa voaseho (III-VIII).", "Mamaly.", "Asan-tarika", "—",
               ""),
              ("Lazao ny maha-dehibe ny firaisan'ny taranja sy ny lohahevitra.", "Mihaino.",
               "Asa iombonana", "Solaitrabe", "FRP p.23-180."),
              ("Diniho : inona ny lesona mifandray amin'ny lohahevitra tsirairay ?", "Mamaly.",
               "Asa mifampiha", "Tabilao", ""),
              ("Zarao amin'ny tanjona 6 ny FFLJ.", "Mamarina.", "Asa samirery", "Kahie", ""),
              ("Fijery ny « fomba fijery» 4 ao amin'ny tabilao.", "Mamaly.",
               "Asa iombonana", "Solaitrabe", ""),
              ("Mamorona tetikady kely ho an'ny kilasy.", "Mamorona.", "Asa samirery", "Kahie",
               "")],
             LESONA_A1,
             [{"consigne": "Lazao ny lohahevitra 13 ao amin'ny FRP T6 (na farafahakeliny 7)."},
              {"consigne": "Inona no atao hoe « fomba fijery » amin'ny tabilao FFLJ ?"}],
             [{"note": "Ohatra : III fananana iombonana · IV olona marefo · V asa pokonolona sy "
                       "mahaleo tena · VI zo sy adidy · VII vakoka sy haren-tsaina · VIII "
                       "teknôlôjia · IX toetr'andro · X haintany sy ton-drano · XI finoana · XII "
                       "maha-izy-azy ara-kolontsaina · XIII toe-tsaina manohitra kolikoly."},
              {"note": "Ny *fomba fijery* = fizaràna ny tarika (ENY vs TSIA), fitarihan-dresaka, "
                       "fanatanterahana ny adihevitra, tsoa-kevitra."}],
             ["FRP T6 éd. Oktobra 2026, p.23-180 : LOHAHEVITRA III…XIII (« support de cours » sy "
              "« tahirin-kevitra »).",
              "FRP T6, p.84-87 : « FIASAN'NY TENY AO ANATIN'NY HODIDINA AHITANA FIMAROAN-TENY SY "
              "FIMAROAN-KOLONTSAINA » + « IREO FOMBA FIJERY MIFANDRAIKA AMIN'NY FFLJ » + ny "
              "soso-kevitra roa (fampiatiana ireo kasingan'ny FFLJ amin'ny fandaharam-pianarana ; "
              "fanentanana sy fanofanana ny mpampianatra).",
              "Ny santionany azo ampiasaina amin'ireo lohahevitra ireo : *Iny Ankaratra iny*, "
              "*Takariva*, *Ny Tenindrazako*, *Rajakom-bazaha* (Jean Narivony). Tsy nampiasaina ny "
              "Baiboly."],
             faritana=FAR, faritana_sous="lohahevitra 13 · FFLJ", faharetany="—"),
    fiche_t6(ZT, "Fomba fitrandrahana ny lesona sy ny Tombana", "—", "—", 0,
             [("Vakio ny TOROLALANA 5 ao amin'ny FRP.", "Mamaky.", "Asa iombonana", "FRP p.5", ""),
              ("Lazao ny fahaviteny : « tahirin-kevitra », « lesona », « tari-dalana ».",
               "Mihaino.", "Asa samirery", "Solaitrabe", ""),
              ("Diniho : iza no mandray anjara amin'ny dingana tsirairay ?", "Mamaly.",
               "Asa mifampiha", "Tabilao", ""),
              ("Zarao ny criteria 14 hita amin'ny tabilao FFLJ.", "Mamarina.", "Asa samirery",
               "Kahie", ""),
              ("Fandravonana : ny takelany = takela-panomanan-desa.", "Mamaly.", "Asa iombonana",
               "—", ""),
              ("Mamorona ny tombana ho an'ny seho manaraka.", "Mamorona.", "Asa samirery",
               "Kahie", "")],
             LESONA_A2,
             [{"consigne": "Soraty ny dingana 5 an'ny « TOROLALANA FITRANDRAHANA NY LESONA »."},
              {"consigne": "Inona no mampiavaka ny « tahirin-kevitra » amin'ny « lesona » ?"}],
             [{"note": "Vakina iray manontolo → ahazoana ny firafiny sy ny votoatiny → feheza ny "
                       "fizotra → hamarinina ny singa ara-pahalalana ilaina → mandrafitra ny "
                       "takela-panomanan-desa."},
              {"note": "Ny « tahirin-kevitra » = ho an'ny mpampianatra (fahalalana fanampiny) ; ny "
                       "« lesona » = feno sy efa voarindra anaty lalan-tsaina, ampiasaina "
                       "mivantana amin'ny mpianatra."}],
             ["FRP T6 éd. Oktobra 2026, p.5-9 : « TOROLALANA FITRANDRAHANA NY LESONA » ; « NY "
              "TAHIRIN-KEVITRA HO AN'NY MPAMPIANATRA » ; « NY LESONA NA « PRÉCIS DE COURS » » ; « "
              "TOROLALANA FITRANDRAHANA LAHATSORATRA TAHIRIN-KEVITRA » ; « NY TAHIRIN-KEVITRA "
              "TARI-DALANA ».",
              "PE T6, p.13 : « LANJAN'ORA » ; p.15-25 : « Faharetany », « Fitaovana », « Sahanasa », "
              "« Tombana ».",
              "RAPE T6 sept. 2026 : « Tsy ahitana daty na vanim-potoana mamaritra ny "
              "tetiandrom-pampianarana ny fitsinjarana » → `Daty` = mangina."],
             faritana=FAR, faritana_sous="fomba fanaovana ny takela · ny Tombana", faharetany="—"),
]

FICHE = {"FICHES": FICHES}
