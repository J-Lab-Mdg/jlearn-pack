# -*- coding: utf-8 -*-
"""T6 — lesona S1 : Fiasan'ny teny · Tsipelina · LFK 1a + 1b            (V2)

**FIOVANA (V2, 31/10)** : fototra = **FRP T6 ÉDITION OCTOBRE 2026** (plateforme.education.mg) ;
gandra = **RAPE T6 éd. sept. 2026**, taranja Malagasy, **herinandro 1 → 7** (4 ora/kerinandro,
tsy misy daty : « Tsy ahitana daty na vanim-potoana mamaritra ny tetiandrom-pampianarana »).
Ny lohateny dia **avalan'ny FRP** (LFK 1a + 1b) ; ny « Teny verindroa » (LFK 1d) dia lasa **S2**,
satria ny verindroa dia **fiverenan'ny teny iray** (lava → lavalava), araka ny didin'ny mpanabe
30/10. Ny tabilao lesona<->herinandro : `refs/03_FRP_T6_EDISIONA-2026-10.md`. (V1)

FIFANDRANANA (didin'ny mpanabe, 30/10) : « c'est le frp qui est assez complet pour fitsipika
sy tsipelina. On devrait alors se pencher sur la liste du FRP pas le PE » → ny **lohateny** dia
avy amin'ny **FRP** ; ny **PE** dia tazonina ho cadre ihany (heures, `Tombana`, `Fitaovana`,
`Sahanasa`) ; ny fifanoherana PE-FRP voasoratra ao amin'ny `note`.
  * LOHATENY sy dingana = **PE T6, p.21-22** « FIASAN'NY TENY - Tsipelina » :
    `Fahendrena voizina : fahatokisan-tena, fizakantena` · `Faharetany : ora 12` ·
    `Voka-pianarana manokana : Mifehy ny fitsipi-panoratana ny teny malagasy` ·
    `Votoatiny : Teny verindroa : lanjan'ny fampiasana ny teny verindroa` ·
    `Sahanasa`, `Tetika amam-paika`, `Fitaovana`, `Tombana` — **voasoro teny-teny**.
  * VOTOATY sy OHATRA = **FRP 6eme, p.74-75** (LFK 1a / 1b / 1d). Ny fehezanteny rehetra
    ao amin'ny lesona dia **avy amin'ireo pejy ireo, teny-teny** — tsy misy namboarina.
  * LOHARANO AMPONY (internet, araka ny didy) = Rakibolana sy malagasyword.org (sary
    dikany + fehezanteny fanampiny) — tsindry ao `refs/rakibolana_teny_verindroa.txt`.
    **Tsy nampiasaina ny Baiboly** (didy vaovao : « sauf baiboly si on peut trouver ailleurs ») ;
    ny ohatra naka tamin'ny Baiboly tamin'ny T5 dia tsy ampidirina eto.
  * TSY misy « discovery » avy amin'ny fanamarihana mifanohitra an'ny Akademia Malagasy :
    ny fitsipika « hoy i Koto / hoy Rakoto / *hoy i Rakoto » dia **tsy ampidirina** eto
    (voafaritra ao `fianarana-malagasy/CARNET.md` ihany).
  * Fitaovana takela = modèle du maitre (6 dingana, TNR 12) ; `Daty` : **mangina** ;
    FANAZARAN-TENA : tabilao Word azo ovaina, **mangina ny filaharana** (tsy mifandimby valiny) ;
    FANITSIANA : `sary=True` → tabilao + soratra + tsilo = **SARY SVG IRAY** (Tinos).
  * « Gloses courtes » : ny dikany voasoro dia **feraka** (1-5 teny), ary ny rehetra avy
    amin'ny rakitra iainana — `manantona/manatona` = **TSY misy dikany voamarina** any
    Rakibolana/malagasyword, ka **ohatra FRP ihany** no aseho (tsy nampiana dikany).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import fiche  # noqa: E402

ZT = "Tsipelina"
LT = ("Teny mitovy fanonona fa samy hafa hevitra\nsy ny teny roa avahan'ny tendro")

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
    "Lohahevitra": "FIASAN'NY TENY - Tsipelina (RAPE T6 herin. 1-7 · FRP LFK 1a-1b)",
    "Seho n°": "1",
    "Lohateny": LT,
    "Isan'ny seho": "2",
    "V. P. M": "Mifehy ny fitsipi-panoratana ny teny malagasy",
    "V. P. M note": "Voka-pianarana manokana (PE T6, p.21)",
    "Fitaovana": "Ampahan-dahatsoratra novakina na nohenoina",
    "Faharetany": "ora 12",
    "Fanovozan-kevitra": "FRP T6 éd. oct. 2026 (LFK 1a-1b) · RAPE T6 sept. 2026, herinandro "
              "1→7 (coquille « Fanaambanan-teny ») · PE T6 p.21-22",
}

# ------------------------------------------------------------------ TAKELA
# Ny soratra ao = avy amin'ny PE T6 p.21-22 (« Sahanasa », « Tetika amam-paika »,
# « Tombana ») sy amin'ny FRP p.74-75 — tsy nampivoarana fehezanteny vaovao.
GRILLE = [
    ("I. Famerenana (5 min)",
     "Araka ny natao tamin'ny seho teo aloha : rehefa mitovy fanonona ny teny roa fa samy "
     "hafa hevitra, inona no ilazana ireo teny ireo ?",
     "V.A. : Mitovy fanonona ireo fa samy hafa hevitra sy soratra — **tsy verindroa** (satria tsy "
     "naverina indroa ny teny iray). Ny litera na ny tendro no manavaka azy : « mianaka » sy "
     "« mihanaka ».",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (… min)",),
    ("1. Fitarihan-tsaina (3 min)",
     "Tarihina ny mpianatra handinika ampahan-dahatsoratra (PE T6, Sahanasa). Mamaky ireo "
     "fehezanteny roa izay natao an-tsoratra : « Lasa niantsena izy mianaka. » sy « Vaky ny "
     "paompy dia nihanaka eran'ny tokontany ny rano. »",
     "Mamaky.",
     "Asan-tarika", "Ampahan-dahatsoratra", ""),
    ("2. Fanolorana (2 min)",
     "Lazao ny lohateny : « Fanoratana teny mitovy fanonona fa samy hafa hevitra » (FRP T6 "
     "éd. 2026, LFK 1a) sy « Teny roa avahan' ny tendro » (LFK 1b).\n"
     "Soraty amin'ny tabilao ny roa teny : mianaka / mihanaka.",
     "Mihaino.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana (4 min)",
     "Diniho ireo roa teny ireo.\n"
     "mianaka : Lasa niantsena izy mianaka.\n"
     "mihanaka : Vaky ny paompy dia nihanaka eran'ny tokontany ny rano.\n"
     "Inona no mampitovy azy, inona no manavaka azy ?",
     "Mijery.\n"
     "V.A.: Mitovy fanonona, ka ny « i » sy ny « ih » no manavaka ny soratra.\n"
     "V.A.: Samy hafa hevitra : ny iray momba ny ray aman-dreny sy ny zanaka, ny iray momba "
     "ny rano miparitaka.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana (4 min)",
     "Asaintsika hamaky ireo fehezanteny manaraka ireo, dia hampitahina ny soratra.\n"
     "havana : Aza mandalo tana-misy havana.\n"
     "avana : Rehefa hitsahatra ny orana dia misy avana miseho eny amin'ny lanitra.\n"
     "manantitra : Manantitra ny arahaba Tompoko.\n"
     "manatitra : Tonga nanatitra vary teo ry Rabe.\n"
     "Inona no dikan'ny teny tsirairay araka ny lahatsoratra ?",
     "Mamaky (mpianatra nananga-tanana)\n"
     "V.A.: havana = parent, allié, ami ; avana = arc-en-ciel.\n"
     "V.A.: manantitra = répéter, rendre une couleur plus foncée ; manatitra = manolotra, "
     "manome zavatra ho an'olona.",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana (3 min)",
     "Ampifandraiso ny teny sy ny fehezanteny ahitana azy (FRP 6ème, p.74).\n"
     "Maninona no tsy azo ampifangaro ireo teny ireo ?",
     "V.A.: Satria samy hafa hevitra ireo teny mitovy fanonona ireo.\n"
     "V.A.: Tsy mitovy ny soratra : ny litera na ny tendro no manavaka azy.",
     "Asa iombonana", "Solaitrabe", ""),
    ("6. Fampiharana (4 min)",
     "Fenoy ny teny mety ao amin'ny banga : mianaka / mihanaka / havana / avana /\n"
     "manantitra / manatitra / manantona / manatona.",
     "V.A. : ireo fehezanteny voasoratra ao amin'ny FANITSIANA.\n"
     "Mamaly",
     "Asa samirery", "Kahie", ""),
    ("III. Tombana (5 min)",
     "Mamaritra ny seho amin'ny alalan'ny « Tombana » an'ny PE : « Mampiasa ny "
     "fitsipi-panoratana ny teny verindroa anasongadinana ny lanjan'ny fampiasana izany ny "
     "mpianatra. »",
     "Hilaza.",
     "Asa samirery", "----", ""),
]

# ------------------------------------------------------------------ LESONA
# ** ** = teny ilazavana voamarika ; « note » = note de bas de page
LESONA = [
    ("h2", "Teny mitovy fanonona fa samy hafa hevitra"),
    ("p", "Ny lohateny ataon'ny Fikarohana fanamboarana ny takela-panomana ny lesona dia : "
          "« **Fanoratana teny mitovy fanonona fa samy hafa hevitra** » (FRP T6 éd. 2026, LFK 1a) : "
          "roa teny **mitovy fanonona** fa **samy hafa hevitra** sy **soratra** ; **tsy** atao hoe "
          "« teny verindroa » intsony, fa ny verindroa dia **fiverenan'ny teny iray** (lava → "
          "lavalava, LFK 1d = lesona manaraka) ; amin'ny teny frantsay : *homophones*."),
    ("p", "**mianaka** = « Teny enti-milaza ny fifandraisan' ny ray na ny reny amin' ny zanaka "
          "ara-pihavanana » (midika amin'ny teny frantsay hoe « être parents et fils ») ; "
          "**mihanaka** = « Miely eran' ny toerana iray, miparitaka, mihahaka, manenika "
          "tsikelikely »."),
    ("ohatra", ["Lasa niantsena izy **mianaka**.",
                "Vaky ny paompy dia **nihanaka** eran' ny tokontany ny rano.",
                "Lasa nitsangantsangana Rabe sy Ikoto **mianaka**."]),
    ("p", "**havana** = « Ireo olona misy fifandraisana noho ny razana iombonana na noho ny "
          "fanambadiana » (« parent, allié, ami ») ; **avana** = « Zava-miseho indraindray eny "
          "amin' ny habakabaka, rehefa misy orana » (« arc-en-ciel »)."),
    ("ohatra", ["Aza mandalo tana-misy **havana**.",
                "Rehefa hitsahatra ny orana dia misy **avana** miseho eny amin' ny lanitra.",
                "Tsy andalako **havana**, tsy ananako olon-tiana."]),
    ("p", "**manantitra** = « répéter ; rendre une couleur plus foncée » ; **manatitra** = "
          "« Manolotra, manome zavatra ho an'olona ». Toa amin'izany koa ny "
          "**manantona** / **manatona** : mitovy fanonona, samy hafa hevitra."),
    ("ohatra", ["Manantitra ny arahaba Tompoko.",
                "Tonga **nanatitra** vary teo ry Rabe.",
                "**Manantona** ny lamba amin' ny tady i Neny.",
                "Haingana ianao fa efa **manatona** ny fahavalo.",
                "Mbola **manantitra** ny fisaorako anareo aho, lehiretsy.",
                "Mahagaga ahy fa mbola tsy **nanatitra** ny volako izy hatramin'izao."]),
    ("note", "FRP 6ème Malagasy — PDF « FRP_6eme_MLG.pdf » (Minisiteran'ny Fanabeazam-pirenena : "
             "« boky fanovozan-kevitra » ho an'ny kilasy T1 hatramin'ny T9, HAFATRY NY MINISTERA, "
             "p.2 ; mitovy ny votoaty ; ary ny edisiona vaovao (Oktobra 2026) dia "
             "milaza fa « FASCICULE DE RESSOURCES PÉDAGOGIQUES (FRP) »), "
             "p.74 (LFK 1a : Lesona, « TSIPELINA / Fanoratana teny mitovy fanonona fa samy "
             "hafa hevitra ») : ireo 8 fehezanteny ireo, voasoro teny-teny (« eran‟ny » = "
             "eran'ny, « amin‟ny » = amin'ny : ny guillemet-haut ao amin'ny PDF no novaina "
             "ho ' , tsy niovana ny teny)."),
    ("note", "Rakibolana Malagasy — « mianaka » : « Lasa nitsangantsangana Rabe sy Ikoto "
             "mianaka. » (https://www.rakibolana.org/rakibolana/teny/mianaka) ; « mihanaka » : "
             "« Miely eran' ny toerana iray, miparitaka, mihahaka, manenika tsikelikely » "
             "(https://www.rakibolana.org/rakibolana/teny/mihanaka) ; « manatitra » : "
             "« Manolotra, manome zavatra ho an'olona » sy « Mahagaga ahy fa mbola tsy "
             "nanatitra ny volako izy hatramin'izao. » "
             "(https://www.rakibolana.org/rakibolana/teny/manatitra)."),
    ("note", "Rakibolana an-tserasera (malagasyword.org) — « havana » : « Ireo olona misy "
             "fifandraisana noho ny razana iombonana na noho ny fanambadiana » ; « parent ; "
             "allié, ami » ; « Tsy andalako havana, tsy ananako olon-tiana. » "
             "(https://malagasyword.org/bins/teny2/havana) ; « avana » : « arc-en-ciel » "
             "(https://malagasyword.org/bins/teny2/avana) ; « manantitra » : « répéter ; rendre "
             "une couleur plus foncée » sy « Mbola manantitra ny fisaorako anareo aho, "
             "lehiretsy. » (https://malagasyword.org/bins/teny2/manantitra) ; « mianaka » : "
             "« être parents et fils ; parents et enfants (s) ensemble » "
             "(https://malagasyword.org/bins/teny2/mianaka)."),
    ("note", "TSY hita ao amin'ny Rakibolana ny teny « manantitra » (« Tsy mbola hita ato "
             "amin'ny Rakibolana ny teny manantitra notadiavinao », "
             "https://www.rakibolana.org/rakibolana/teny/manantitra) : ny dikany dia nalaina "
             "tamin'ny Rakibolana an-tserasera (malagasyword.org) ihany. Ny « manantona » sy "
             "ny « manatona » kosa dia **tsy amboarina dikany** eto : ny ohatra an'ny FRP "
             "ihany no aseho, mba tsy hanampiana hevitra tsy hita ao amin'ny loharano."),

    ("h2", "Teny roa avahan' ny tendro"),
    ("p", "Misy koa ny teny **roa, mitovy litera**, fa ny **tendro** no manavaka azy : "
          "**àry** sy **ary** ; **mazana** sy **mazàna**."),
    ("p", "**àry** = « kianteny mamehy hevitra » ; **ary** = « mpampitohy ». "
          "**mazana** = « mafy » ; **Mazàna** = « matetika »."),
    ("ohatra", ["Ianao **àry** tsy handeha akory !",
                "Mividy vary sy laoka **ary** mofomamy i Neny.",
                "**Mazana** be ilay niaka-piakarana.",
                "Mandalo **mazàna** eto amintsika iny mpivarotra iny."]),
    ("note", "FRP 6ème, p.74 (LFK 1b : Lesona, « TSIPELINA / Teny roa avahan' ny tendro ») : "
             "ireo dikany sy ohatra ireo, voasoro teny-teny."),

]

# ------------------------------------------------------- FANAZARAN-TENA
# Fehezanteny avy amin'ny FRP ihany (tsy namboarina) ; mangina ny filaharana.
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny teny sy ny dikany.",
     "tsilo": (["havana",
                "avana",
                "manantitra",
                "manatitra"],
               ["parent ; allié, ami",
                "arc-en-ciel",
                "répéter ; rendre une couleur plus foncée",
                "manolotra, manome zavatra ho an'olona"])},
    {"consigne": "Fenoy ny teny mety (mianaka / mihanaka / havana / avana / manantitra / "
                 "manatitra / manantona / manatona).",
     "banga": "………………… ny lamba amin' ny tady i Neny.  |  Haingana ianao fa efa "
              "………………… ny fahavalo.  |  Vaky ny paompy dia ………………… eran' ny tokontany "
              "ny rano.  |  Lasa niantsena izy ………………… ."},
    {"consigne": "Mamorona fehezanteny roa : iray ahitana ny « mazana », iray ahitana ny "
                 "« mazàna »."},
]

FANITSIANA = [
    {"tsilo": [("havana", "parent ; allié, ami"),
               ("avana", "arc-en-ciel"),
               ("manantitra", "répéter ; rendre une couleur plus foncée"),
               ("manatitra", "manolotra, manome zavatra ho an'olona")]},
    {"banga": "[[Manantona]] ny lamba amin' ny tady i Neny.  |  Haingana ianao fa efa "
              "[[manatona]] ny fahavalo.  |  Vaky ny paompy dia [[nihanaka]] eran' ny "
              "tokontany ny rano.  |  Lasa niantsena izy [[mianaka]]."},
    {"ohatra": ["Ny zava-dehibe : roa teny mitovy fanonona fa samy hafa hevitra sy "
                "soratra (mianaka / mihanaka ; mazana / mazàna) ; tsy misy "
                "ifandraisany amin'ny teny verindroa — fiverenan'ny teny iray no "
                "atao hoe verindroa (lava / lavalava)."]},
]

LALANA = ("Lazao ny fomba fanoratana ny teny **mitovy fanonona fa samy hafa hevitra** "
          "(mianaka / mihanaka) sy ny **teny roa avahan'ny tendro** (mazana / mazàna) ao "
          "anaty fehezanteny.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="1", isan="2", sary=True,
              loharano=[
    "FRP T6 — « FASCICULE DE RESSOURCES PÉDAGOGIQUES », taranja Malagasy, **ÉDITION "
    "OCTOBRE 2026**, Minisiteran'ny Fanabeazam-pirenena : plateforme.education.mg → "
    "/bibliotheque-numerique/theme/biblio/pix/frp/college/FRP_T6/FRP_MLG_T6.pdf — LFK 1a "
    "« TSIPELINA / Fanoratana teny mitovy fanonona fa samy hafa hevitra » sy LFK 1b « TSIPELINA "
    "/ Teny roa avahan' ny tendro » (mitovy votoaty amin'ny dikan-teny taloha, p.74-75).",
    "RAPE T6, édisiona septambra 2026, plateforme.education.mg → /theme/biblio/pix/pdf/RAPE_T6.pdf "
    ": taranja Malagasy, p.6-7 — herinandro 1→33, andiany 5 (7-7-7-6-6), 4 ora/kerinandro ; "
    "« Fanaambanan-teny » = coquille amin'ny RAPE.",
    "FRP 6ème Malagasy (93 pejy, « FRP_6eme_MLG.pdf »), p.74-76 : « réserve » "
    "an'ny lesona efa voasoratra feno (LFK 1a-1e) ; LFK 1d sy 1e = lesona manaraka (S2 sy S3).",
    "PE T6, PROGRAMME D'ETUDES — PDF « PE T6.pdf », taranja Malagasy, p.12-26 : p.13 « LANJAN'ORA "
    ": ora 4 isan-kerinandro » ; p.15 « FAFAN'NY VOTOATINY : Fiasan'ny teny — Tsipelina : Teny "
    "verindroa · Fanakambanan-teny » ; p.21-22 « FIASAN'NY TENY - Tsipelina » (Faharetany : "
    "ora 12 ; Voka-pianarana manokana ; Sahanasa ; Tetika amam-paika ; Fitaovana ; Tombana).",
    "Rakibolana Malagasy (serasera.org) : « mianaka » — https://www.rakibolana.org/rakibolana/"
    "teny/mianaka ; « mihanaka » — https://www.rakibolana.org/rakibolana/teny/mihanaka ; "
    "« manatitra » — https://www.rakibolana.org/rakibolana/teny/manatitra ; "
    "« manantitra » = TSY HITAO (« Tsy mbola hita ato amin'ny Rakibolana ny teny manantitra "
    "notadiavinao »).",
    "Rakibolana an-tserasera / Malagasy Dictionary and Encyclopedia (David Stark) : "
    "« havana », « avana », « mianaka », « manantitra » — https://malagasyword.org/bins/teny2/"
    "havana · /avana · /mianaka · /manantitra (dikany frantsay sy ohatra voamarina).",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela;", len(FICHE["loharano"]), "loharano")
