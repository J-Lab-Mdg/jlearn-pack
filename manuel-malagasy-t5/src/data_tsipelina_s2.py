# -*- coding: utf-8 -*-
"""Fiche 2e seho — Tsipelina — « NOHO NY / NONY / NO HO »            (V10)

VATANA : ny fichiermodele ihany no natao hoe marika — `src/dump_docx.py` dia namaky ny XML
(on ny takela, ny notes de bas de page, ny sary an-tanana). Sary : `refs/EXEMPLE_DU_MANUEL.txt`.

Règles appliquées (retours du maitre, 2026-10-29) :
  * Times New Roman 12 pt ; largeurs de tableau ajustées pour cette taille ;
  * lesona = **telo** : « Noho ny (Noho) » · « Nony » · « No ho » — isa iray isaky ny
    bloc, toy ny modele ; votany = tenin'ny mpampianatra ihany, misy « Ohatra: », misy
    **note en bas de page** ;
  * ny loharano (URL, PE, Rakibolana) dia **note de bas de page**, tsy ao anaty Lahatsoratra ;
  * **découvertes validées** (maitre : « entre tous dans la lecon ») : noho = azo an'ny
    (moyen) + « noho + sujet du verbe » ; nony = fony/raha/rehefa ; no ho (locution) =
    depuis… jusqu'à ;
  * FANAZARAN-TENA : **mangina ny filaharana** (tsy mifandimby valiny) ; tsy misy
    fehezanteny avy amin'ny lesona ; tsy misy « antony/fotoana/safidy » intsony eto —
    lasa ao amin'ny **Fandravonana** (décision du maitre) ;
  * FANITSIANA : `sary=True` → ny tabilao + ny soratra + ny **tsilo** dia SARY SVG IRAY,
    ka ny layout ihany no mamaritra ny toeranan'ny tsilo : **mety tanteraka**
    (maitre : « tu generes les textes aussi dans le svg et le fleches entrera bien ») ;
  * tsy misy zava-boafatra : ohatra fohy voamarina amin'ny Rakibolana / malagasyword.org /
    PE T5 / ohabolana ihany, na nomen'ny mpampianatra mihitsy. Isaky ny fehezanteny
    **mandeha iray ihany** amin'ny Antontan'antariny manontolo (takela + lesona + exos).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import fiche  # noqa: E402

ZT = "Tsipelina"
LT = "Noho ny / nony / no ho"

# ------------------------------------------------------------------ SAHA
FIELDS = {
    "rangs": [("Taranja", "Daty"), ("Zana-taranja", "Kilasy"),
              ("Lohahevitra", "Seho n°"), ("Lohateny", "Isan'ny seho"),
              (["V. P. M", "Fitaovana"], "Faharetany"),
              ("Fanovozan-kevitra", None)],
    "Taranja": "Malagasy",
    "Daty": "...",
    "Zana-taranja": ZT,
    "Kilasy": "T5",
    "Lohahevitra": "1. Ny fitandroana ny fahasalamana",
    "Seho n°": "…",
    "Lohateny": LT,
    "Isan'ny seho": "…",
    "V. P. M": "Mampiasa ny fitsipi-panoratana ny teny ao anaty lahatsoratra",
    "V. P. M note": "Voka-pianarana manokana",
    "Fitaovana": "Solaitrabe",
    "Faharetany": "",
    "Fanovozan-kevitra": "PE T5",
}

# ------------------------------------------------------------------ TAKELA
# (le « V.A. » = valotra ny antsasany ; ny antsasany dia teny tena izy an'ny mpianatra)
GRILLE = [
    ("I. Famerenana (…. min)",
     "Araka ny nianarantsika tamin'ny seho teo aloha, rehefa inona no ampiasaina ny "
     "« samihafa » ary rehefa inona ny « samy hafa » ?",
     "V.A. : Ampiasaina ny « samihafa » rehefa milaza isan-karazany isika, toy ny hoe "
     "« Mianatra taranja samihafa izahay. » ; ny « samy hafa » kosa dia milaza tsy mitovy, "
     "toy ny hoe « Samy hafa ny omby sy ny akoho. »",
     "Asa tsirairay", "----", ""),
    ("II. LESONA VAOVAO (…. min)",),
    ("1. Fitarihan-tsaina",
     "Namaky fehezanteny roa i Ravao : « Fotsy volo Rakoto noho ny ahiahy. » sy « Nony "
     "hariva, dia hoy ianareo : Ho tsara ny andro, fa mena ny lanitra. » Sahiran-tsaina izy "
     "hoe tsy mitovy ny teny nampifandray ny ampahany roa amin'ireo fehezanteny ireo.",
     "Mihaino",
     "Asa iombonana", "", ""),
    ("2. Fanolorana",
     "Izay indrindra no ianarantsika androany, dia ny fomba fampiasana ny « noho ny », ny "
     "« nony » ary ny « no ho ». Ho hainareo amin'izay ny mampiasa ny fitsipi-panoratana "
     "an'ireo teny ireo.\n"
     "Soraty amin'ny tabilao ny fehezanteny : « Fotsy volo Rakoto noho ny ahiahy. »",
     "Mihaino.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana",
     "Diniho ity fehezanteny ity.\n"
     "Fotsy volo Rakoto noho ny ahiahy.\n"
     "Inona no antony, inona no voka ?",
     "Mijery.\n"
     "V.A.: Ny ahiahy.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana",
     "Asaintsika i Mora hamaky an'io fehezanteny io.\n"
     "Maninona hono no ampiasaina ny « noho ny » ?\n"
     "Inona no dikan'izany « noho ny » izany ?\n"
     "Fandravonana vonjimaika: Raha manana ny hevitra hoe « satria » ny fehezanteny, dia "
     "« noho ny » no ampiasaina.\n"
     "Fandinihana (tohiny): Diniho indray ity fehezanteny manaraka ity:\n"
     "Nony hariva, dia hoy ianareo : Ho tsara ny andro, fa mena ny lanitra.\n"
     "Raha ovaina amin'ny « rehefa » izany ilay hoe « Nony » dia lasa hoe ahoana ? Mbola "
     "marina ve izany fehezanteny izany ?",
     "Mamaky i Mora (na mpianatra hafa nananga-tanana)\n"
     "V.A.: Ny ahiahy.\n"
     "V.A.: Ny antony.\n"
     "Mihaino\n"
     "Mijery\n"
     "Mamaly\n"
     "V.A.: Eny.\n"
     "V.A.: Rehefa hariva, dia hoy ianareo : Ho tsara ny andro, fa mena ny lanitra.",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana",
     "Lazao ny fampiasana ny « noho ny », ny « nony » ary ny « no ho » : inona no "
     "dikan'ireo teny ireo ?\n"
     "Diniho ny teny manaraka azy : anarana, na matoanteny, na roa teny ?",
     "« Noho ny » = antony, na fampitahana, na azo an'ny.\n"
     "« Nony » = fotoana (fony, raha, rehefa).\n"
     "« No ho » = fampitahana na safidy.",
     "Asa iombonana", "Solaitrabe", ""),
    ("6. Fampiharana",
     "Rehefa inona hoe ny heviny dia ampiasaina ny « noho ny » ?\n"
     "Rehefa inona kosa hoe ny heviny dia ampiasaina ny « nony » ?\n"
     "Fenoy ny banga : « ………… niamboho Ranavalona reniny, dia nitsoka ny "
     "rivo-pahafahana. »",
     "V.A.: Ny antony.\n"
     "V.A.: Ny fotoana.\n"
     "V.A.: Nony.\n"
     "Mamaly",
     "Asa tsirairay", "Kahie", ""),
    ("III. Tombana (… min)",
     "Ampifandraiso amin'ny alalan'ny tsilo.",
     "Mamaly",
     "Asa tsirairay", "Kahie", ""),
]

# ------------------------------------------------------------------ LESONA
# ** ** = teny ilazavana voamarika ; « note » = note de bas de page (tsy anaty lahatsoratra)
LESONA = [
    ("h2", "Noho ny (Noho)"),
    ("p", "Ampiasaina mba hanehoana ny **antony** mahatonga ny zavatra iray (midika hoe "
          "« a cause de » na « en raison de » amin'ny teny frantsay). Manaraka an'io teny io "
          "foana ny **anarana** na **mpisolo anarana**."),
    ("ohatra", ["Tsy nivoaka izy **noho ny** ranonorana.",
                "Tafita izy **noho ny** fiezahany."]),
    ("p", "Amin'ny **fampitahana** zavatra roa koa dia ampiasaina ny « noho ny » (midika hoe "
          "« plus que » na « plutôt que » amin'ny teny frantsay)."),
    ("ohatra", ["Mamy ny akondro **noho ny** voasary.",
                "Ny fahasalamana dia ambony lavitra **noho ny** fananan-karena."]),
    ("p", "Ity « noho ny » ity dia ampiasaina amin'ny **fampitahana** ary koa ho an'ny "
          "« **azo an'ny** » (ppk. : Azon'ny, araka ny Rakibolana) : ny zavatra **nahazo** "
          "azy no lazao, fa tsy ny antony."),
    ("ohatra", ["Reraka izy **noho ny** ratra nahazo azy."]),
    ("p", "Misy koa ny « **noho** » (tsy misy « ny ») rehefa **mpisolo anarana** sy "
          "**matoanteny** no manaraka azy ; matetika ny hoe « dia » no mampifandray ny "
          "ampahany roa. Hoy ny Rakibolana : « Suivi immédiatement du sujet du verbe »."),
    ("ohatra", ["**Noho** ianao mividy boky betsaka, dia ahenako ny vidin'ny tsirairay."]),
    ("note", "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho : "
             "« p, mt.: Teny entina mampitaha zavatra roa » ; « ppt. Teh.: Enti-milaza antony "
             "anaovan-javatra, satria » ; « ppk.: Azon'ny » ; ary « Suivi immédiatement du "
             "sujet du verbe »."),
    ("note", "Rakibolana an-tserasera, « noho » — https://malagasyword.org/bins/teny2/noho : "
             "« à cause de ; plus que ; plutôt que »."),

    ("h2", "Nony"),
    ("p", "Teny **mpampiankina fehezankevitra** milaza **fotoana** ny « nony » (midika hoe "
          "« lorsque », « quand » na « dès que » amin'ny teny frantsay). Matetika izy io no "
          "arahina **matoanteny** ary ampiasaina rehefa mitantara zavatra efa lasa."),
    ("ohatra", ["**Nony** tonga tany an-trano izy, dia natory avy hatrany.",
                "**Nony** nahita ny reniny ny zaza, dia nitsiky."]),
    ("p", "Mety ho **solon'**ny « nony » ny hoe **fony**, **raha**, **rehefa** (analog "
          "nomen'ny Rakibolana) ; ny « nony » kosa no teny hita indrindra amin'ny tantara "
          "mitantara zavatra efa lasa."),
    ("ohatra", ["**Nony** lasa izy, dia nody izahay."]),
    ("note", "Rakibolana an-tserasera, « nony » (conjonction) — "
             "https://malagasyword.org/bins/teny2/nony : « Rehefa (raha milaza ny lasa ny "
             "matoanteny manaraka azy) » ; « Isaky ny (ankehitriny) » ; « Tamin' ny (ho avy "
             "ao anatin'ny tantara) » ; analog : fony, raha, rehefa. Ny teny "
             "ara-drafitra hoe « mpampiankina fehezankevitra » dia avy amin'ny pejy "
             "« Fehezanteny » — https://mg.wikipedia.org/wiki/Fehezanteny."),

    ("h2", "No ho"),
    ("p", "Tsy teny tokana mitambatra ity fa **roa teny miaraka** (Mpanoritra/Mpisolo « no » + "
          "Mpampitaha « ho »). Ampiasaina amin'ny fampitahana zavatra roa izy io, indrindra "
          "rehefa misy **finiavana** na **safidy** atao."),
    ("ohatra", ["Ny hianatra **no ho** ny hilalao no tsara.",
                "Andriamanitra **no ho** ny olombelona no tokony hoterena.",
                "Hovitaiko ity rahariva.  =  Rahariva ity **no** hovitaiko."]),
    ("p", "Misy ny « no ho » (roa teny) kosa ao amin'ny Rakibolana, ampiasaina aorian'ny "
          "« hatramin' » na « hatrany » : hatramin'ny isa na toerana iray **ka hatramin'ny** "
          "hafa (midika hoe « depuis… jusqu'à » amin'ny teny frantsay). Raha "
          "matoantenin'ny iharana misy tovana ny matoanteny kosa dia **mitovona ny ho**."),
    ("ohatra", ["Hatramin' ny folo **no ho** miakatra.",
                "Hatrany **no ho** mankaty."]),
    ("note", "Rakibolana an-tserasera, « noho », entrée 2 — "
             "https://malagasyword.org/bins/teny2/noho : « no ho, locution : marque un point "
             "de depart, et signifie ; depuis… jusqu'à : Hatramin' ny folo no ho miakatra ; "
             "Hatramin' ny folo no ho midina ; Hatrany no ho mankaty ». Ny hoe « plutôt que » "
             "dia avy amin'ny « noho », fa TSY avy amin'ny « no ho »."),
    ("p", "Rehefa miaraka ny mpisolo « **no** » sy ny mpamaritra « **ny** », dia ny « no » "
          "ihany no miseho : « I Soa no maditra », fa tsy hoe « I Soa no ny maditra »."),
    ("note", "Prof. Siméon Rajaona, « Ny Matoanteny eo amin'ny teny malagasy », Akademia "
             "Malagasy — https://teny-malagasy.akademia-malagasy.mg/matoanteny.php, §1.4.6 "
             "sy §1.4.7 (Fampiasana manokana ny kian-teny no) : « mifamaho sy "
             "mifaningotra ny kian-teny no sy ny mpamaritra ny, ka ny kian-teny no sisa "
             "miseho, nitelina ny mpanoritra ny »."),
    ("note", "Fanamarihana nomen'ny mpampianatra : raha matoantenin'ny iharana misy tovana, "
             "mitovona ny ho — « Hovitaiko ity rahariva » = « Rahariva ity no hovitaiko » ; "
             "« Ho tonga rahampitso izy » = « Rahampitso izy no ho tonga » ; « Ho vita ity "
             "rahariva » = « Rahariva no ho vita ity »."),
]

# ------------------------------------------------------- FANAZARAN-TENA
# Fehezanteny vaovao (tsy misy akory amin'ny lesona), fohy, voamarina ; mangina ny
# filaharana (ny `melange()` an'ny mpamorona no mandoko ny kolona ankavanana).
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["Ilaina noho ny volamena",
                "Noho ianao nandiso fotoana,",
                "Nony handeha indrindra",
                "Ampiasaina ny teny ho fitaovana"],
               ["ny vy.",
                "dia tsy hahazo valisoa ianao.",
                "izahay no avy ny orana.",
                "ianarana, ifandraisana ary anehoana hevitra."])},
    {"consigne": "Fenoy « noho ny » na « noho » na « nony » na « no » na « ho » ny banga.",
     "banga": "………………… midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny. Ny "
              "lahatsoratra ampiasaina dia mety …………………… lahatsoratra mitantara, "
              "manoritsoritra na mampahalala. Hatramin' ny folo …………………… midina. Ny teny "
              "mahery lava …………………… ny tanana."},
    {"consigne": "Mamorona fehezanteny roa ahitana ny hoe « noho ny » sy ny hoe « nony »."},
]

FANITSIANA = [
    {"tsilo": [("Ilaina noho ny volamena", "ny vy."),
               ("Noho ianao nandiso fotoana,", "dia tsy hahazo valisoa ianao."),
               ("Nony handeha indrindra", "izahay no avy ny orana."),
               ("Ampiasaina ny teny ho fitaovana", "ianarana, ifandraisana ary anehoana "
                                                   "hevitra.")]},
    {"banga": "[[Nony]] midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny. Ny "
              "lahatsoratra ampiasaina dia mety [[ho]] lahatsoratra mitantara, "
              "manoritsoritra na mampahalala. Hatramin' ny folo [[no ho]] midina. Ny teny "
              "mahery lava [[noho]] ny tanana."},
    {"ohatra": ["Ny zava-dehibe : anarana na mpisolo anarana no manaraka ny « noho ny » ; "
                "matoanteny no manaraka ny « nony » ; ary roa teny ny « no ho »."]},
]

LALANA = ("Lazao ny fampiasana ny « noho ny », ny « nony » ary ny « no ho » ao anaty "
          "fehezanteny.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="2", isan="2", sary=True,
              loharano=[
    "Rakibolana an-tserasera, « noho » — https://malagasyword.org/bins/teny2/noho : "
    "« Ilaina noho ny volamena ny vy » ; « Mamy ny akondro noho ny voasary » ; « Noho ianao "
    "nandiso fotoana, dia tsy hahazo valisoa ianao » ; « Nony handeha indrindra izahay no avy "
    "ny orana ». Pejy 2 : « no ho, locution — marque un point de depart, depuis… jusqu'a : "
    "Hatramin' ny folo no ho miakatra / midina ; Hatrany no ho mankaty ».",
    "PE T5, taranja Malagasy, p.18 (Fiasan'ny teny · Tsipelina) : « Fanoratana ny: "
    "samihafa/samy hafa, noho ny/nony/no ho ».",
    "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho : "
    "« Reraka izy noho ny ratra nahazo azy » (ppk. : Azon'ny) ; « Noho ianao mividy boky "
    "betsaka, dia ahenako ny vidin'ny tsirairay » ; « Suivi immédiatement du sujet du verbe ». "
    "Contenu non libre : citation courte avec URL, tsy misy dika amin'ny pejy manontolo.",
    "Rakibolana an-tserasera, « nony » — https://malagasyword.org/bins/teny2/nony : « Nony "
    "niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana » ; « Nony midona ny orana, "
    "velon-tsento i Sahondra mahatsiaro andreniny » ; « Nony lasa izy, dia nody izahay » ; "
    "analog : fony, raha, rehefa.",
    "Prof. Siméon Rajaona, « Ny Matoanteny eo amin'ny teny malagasy », Akademia Malagasy "
    "— https://teny-malagasy.akademia-malagasy.mg/matoanteny.php : « fotsy volo Rakoto noho "
    "ny ahiahy » (§2.1 sy ny fandinihana ny mpamari-toejavatra) ; « I Soa no maditra » "
    "(§1.4.7).",
    "Baiboly Malagasy (dika 1910), Matiteo 16,2 : « Nony hariva, dia hoy ianareo : Ho tsara "
    "ny andro, fa mena ny lanitra. » — tolo-tsoratra : "
    "https://nybaiboly.org/Concordance-malagasy/Bibliquest-Malagasy.bbq",
    "PROGRAMMES SCOLAIRES 8ème, Minisiteran'ny Fanabeazam-pirenena — "
    "https://www.education.gov.mg/wp-content/uploads/2016/10/PROGRAMMES-SCOLAIRES-8%C3%A8me.pdf : "
    "« Takela-teny fanonona na mitovitovy endrika : samy hafa, samihafa / noho ny, nony » ; "
    "« Fehezanteny banga » ; « solaitra ».",
    "Rakibolana Malagasy, « dia » — https://www.rakibolana.org/rakibolana/teny/dia : "
    "« Nony tonga izy dia niteny hoe.. » ; « Rakoto dia mpianatra mazoto ».",
    "Ohabolana : « Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » "
    "(ohabolana.org) ; « Ny teny mahery lava noho ny tanana. » (JICA/PAGEM, vakiteny modely).",
    "PE T5, p.9 : « Ny lahatsoratra ampiasaina dia mety ho lahatsoratra mitantara, "
    "manoritsoritra na mampahalala » ; « Ampiasaina ny teny ho fitaovana ianarana, "
    "ifandraisana ary anehoana hevitra ».",
    "Ohatra nomen'ny mpampianatra (2026-10-29), recopiées mot pour mot ao "
    "refs/rakibolana_noho.txt : « Tsy nivoaka izy noho ny ranonorana. » ; « Tafita izy noho "
    "ny fiezahany. » ; « Nony tonga tany an-trano izy, dia natory avy hatrany. » ; « Nony "
    "nahita ny reniny ny zaza, dia nitsiky. » ; « Ny hianatra no ho ny hilalao no tsara. » ; "
    "« Andriamanitra no ho ny olombelona no tokony hoterena. » ; « Hovitaiko ity rahariva = "
    "Rahariva ity no hovitaiko. »",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela")
