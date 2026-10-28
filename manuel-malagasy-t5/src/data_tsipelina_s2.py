# -*- coding: utf-8 -*-
"""Fiche 2e seho — Tsipelina — « NOHO NY / NONY / NO HO »

V7 — fandaminana araka ny marinin'ny fichiermodele (XML ihany no natao pirinty, fa tsy ny
dika teksy : `refs/EXEMPLE_DU_MANUEL.txt` indro izao, sady misy ny takela, ny notes de bas
de page sy ny sary an-tanana (flèches) :

    * Times New Roman 12 pt (decision du maitre 2026-10-29) ;
    * lesona = **telo** (toy ny modele : isa iray isaky ny zavatra inarana),
      « Noho ny (Noho) » · « Nony » · « No ho » — ny tenin'ny mpampianatra ihany,
      naniana votoaty, naniana « Ohatra: », naniana **note en bas de page** ;
    * ny loharano (URL, PE, Rakibolana) dia lasa **notes de bas de page** (w:footnoteReference),
      tsy ao intsony anaty rivotan'ny lesona ;
    * `V. P. M` : misy appel de note ao amin'ny modele — « Voka-pianarana manokana » ;
    * FANAZARAN-TENA « Ampifandraiso amin'ny alalan'ny tsilo » : **mangina ny filaharana**
      (tsy mifandimby ny valiny) ary tsy misy flèche ; ny flèches (connecteur droit
      magenta FF00FF + pointe de flèche, `straightConnector1`) dia **ao amin'ny FANITSIANA**
      ihany, toy ny an'ny modele (6 traits) ;
    * tsy misy fehezanteny avy amin'ny lesona amin'ny fanazaran-tena ;
    * tsy misy teny na heverina invented : ohatra fohy ihany, voangana tamin'ny
      Rakibolana/malagasyword.org/PE T5 na nomen'ny mpampianatra.
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
     "Namaky fehezanteny roa i Ravao : « Tsy nivoaka izy noho ny ranonorana. » sy « Nony "
     "tonga tany an-trano izy, dia natory avy hatrany. » Sahiran-tsaina izy hoe tsy mitovy "
     "ny teny nampifandray ny ampahany roa amin'ireo fehezanteny ireo.",
     "Mihaino",
     "Asa iombonana", "", ""),
    ("2. Fanolorana",
     "Izay indrindra no ianarantsika androany, dia ny fomba fampiasana ny « noho ny », ny "
     "« nony » ary ny « no ho ». Ho hainareo amin'izay ny mampiasa ny fitsipi-panoratana "
     "an'ireo teny ireo.\n"
     "Soraty amin'ny tabilao ny fehezanteny : « Tafita izy noho ny fiezahany. »",
     "Mihaino.",
     "Asa iombonana", "Solaitrabe", ""),
    ("3. Fandinihana",
     "Diniho ity fehezanteny ity.\n"
     "Reraka izy noho ny ratra nahazo azy.\n"
     "Inona no antony, inona no voka ?",
     "Mijery.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana",
     "Asaintsika i Mora hamaky an'io fehezanteny io.\n"
     "Maninona hono no ampiasaina ny « noho ny » ?\n"
     "Inona no dikan'izany « noho ny » izany ?\n"
     "Fandravonana vonjimaika: Raha manana ny hevitra hoe « satria » ny fehezanteny, dia "
     "« noho ny » no ampiasaina.\n"
     "Fandinihana (tohiny): Diniho indray ity fehezanteny manaraka ity:\n"
     "Nony lasa izy, dia nody izahay.\n"
     "Raha ovaina amin'ny « rehefa » izany ilay hoe « Nony » dia lasa hoe ahoana ? Mbola "
     "marina ve izany fehezanteny izany ?",
     "Mamaky i Mora (na mpianatra hafa nananga-tanana)\n"
     "V.A.: Ny ranonorana.\n"
     "V.A.: Ny antony.\n"
     "Mihaino\n"
     "Mijery\n"
     "Mamaly\n"
     "V.A.: Eny.\n"
     "V.A.: Nody izahay, rehefa lasa izy.",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana",
     "« Noho ny » : teny entina hanehoana ny antony mahatonga ny zavatra iray, ka anarana na "
     "mpisolo anarana no manaraka azy.\n"
     "« Nony » : teny fampitohizana hanehoana fotoana, ka matoanteny no manaraka azy.\n"
     "« No ho » : tsy teny tokana fa roa teny miaraka, ampiasaina amin'ny fampitahana zavatra "
     "roa.",
     "Mihaino",
     "Asa iombonana", "Solaitrabe", ""),
    ("6. Fampiharana",
     "Rehefa inona hoe ny heviny dia ampiasaina ny « noho ny » ?\n"
     "Rehefa inona kosa hoe ny heviny dia ampiasaina ny « nony » ?\n"
     "Fenoy « noho ny » na « nony » na « no ho » ny banga : "
     "« ………… niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana. »",
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
                "Tafita izy **noho ny** fiezahany.",
                "Ny fahasalamana dia ambony lavitra **noho ny** fananan-karena."]),
    ("note", "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho : "
             "« Enti-milaza antony anaovan-javatra, satria » sy « Teny entina mampitaha zavatra "
             "roa » ; ohabolana : ohabolana.org."),
    ("h2", "Nony"),
    ("p", "Teny fampitohizana ampiasaina hanehoana **fotoana** (midika hoe « lorsque », "
          "« quand » na « dès que » amin'ny teny frantsay). Matetika izy io no arahina "
          "**matoanteny** ary ampiasaina rehefa mitantara zavatra efa lasa."),
    ("ohatra", ["**Nony** tonga tany an-trano izy, dia natory avy hatrany.",
                "**Nony** nahita ny reniny ny zaza, dia nitsiky."]),
    ("note", "Rakibolana an-tserasera, « nony » (conjonction) — "
             "https://malagasyword.org/bins/teny2/nony : « Rehefa (raha milaza ny lasa ny "
             "matoanteny manaraka azy) » ; analog : fony, raha, rehefa."),
    ("h2", "No ho"),
    ("p", "Tsy teny tokana mitambatra ity fa **roa teny miaraka** (Mpanoritra/Mpisolo « no » + "
          "Mpampitaha « ho »). Ampiasaina amin'ny fampitahana zavatra roa izy io, indrindra "
          "rehefa misy **finiavana** na **safidy** atao (midika hoe « plutôt que » amin'ny "
          "teny frantsay)."),
    ("ohatra", ["Ny hianatra **no ho** ny hilalao no tsara.",
                "Andriamanitra **no ho** ny olombelona no tokony hoterena.",
                "Hovitaiko ity rahariva.  =  Rahariva ity **no** hovitaiko."]),
    ("p", "Misy ny « no ho » (roa teny) kosa ao amin'ny Rakibolana, ampiasaina aorian'ny "
          "« hatramin' » na « hatrany » : hatramin'ny isa na toerana iray **ka hatramin'ny** "
          "hafa (midika hoe « depuis… jusqu'à » amin'ny teny frantsay). Raha "
          "matoantenin'ny iharana misy tovana ny matoanteny kosa dia **mitovona ny ho**."),
    ("ohatra", ["Hatramin' ny folo **no ho** miakatra.",
                "Hatramin' ny folo **no ho** midina.",
                "Hatrany **no ho** mankaty."]),
    ("note", "Rakibolana an-tserasera, « noho » — https://malagasyword.org/bins/teny2/noho : "
             "« à cause de ; plus que ; plutôt que » (sens 1 sy 2) ary, ho an'ny « no ho "
             "(locution) », « marque un point de depart, et signifie ; depuis… jusqu'à : "
             "Hatramin' ny folo no ho miakatra ». Ny hoe « plutôt que » dia avy amin'ny « noho », "
             "fa TSY avy amin'ny « no ho »."),
    ("note", "Fanamarihana nomen'ny mpampianatra : raha matoantenin'ny iharana misy tovana, "
             "mitovona ny ho — « Hovitaiko ity rahariva » = « Rahariva ity no hovitaiko » ; "
             "« Ho tonga rahampitso izy » = « Rahampitso izy no ho tonga » ; « Ho vita ity "
             "rahariva » = « Rahariva no ho vita ity »."),
]

# ------------------------------------------------------- FANAZARAN-TENA
# Fehezanteny vaovao, fohy, voamarina — ary ny filaharana dia mangina (tsy mifandimby ny valiny).
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["Reraka izy noho ny",
                "Mamy ny akondro noho ny",
                "Ilaina noho ny volamena",
                "Noho ianao nandiso fotoana,",
                "noho ny",
                "nony",
                "no ho"],
               # filaharana mifandimby eto : ny mpandrindra `melange()` no mandoko azy,
               # mba tsy hitan'ny mpianatra amin'ny andalana ihany ny valiny.
               ["ratra nahazo azy.",
                "voasary.",
                "ny vy.",
                "dia tsy hahazo valisoa ianao.",
                "antony",
                "rehefa",
                "safidy"])},
    {"consigne": "Fenoy « noho ny » na « noho » na « nony » na « no » na « ho » ny banga.",
     "banga": "………………… midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny. Ny "
              "lahatsoratra ampiasaina dia mety …………………… lahatsoratra mitantara, "
              "manoritsoritra na mampahalala. Ho vita ity rahariva. = Rahariva …………………… vita ity. "
              "………………… ianao "
              "mividy boky betsaka, dia ahenako ny vidin'ny tsirairay."},
    {"consigne": "Mamorona fehezanteny roa ahitana ny hoe « noho ny » sy ny hoe « nony »."},
]

FANITSIANA = [
    {"tsilo": [("Reraka izy noho ny", "ratra nahazo azy."),
               ("Mamy ny akondro noho ny", "voasary."),
               ("Ilaina noho ny volamena", "ny vy."),
               ("Noho ianao nandiso fotoana,", "dia tsy hahazo valisoa ianao."),
               ("noho ny", "antony"),
               ("nony", "rehefa"),
               ("no ho", "safidy")]},
    {"banga": "[[Nony]] midona ny orana, velon-tsento i Sahondra mahatsiaro andreniny. Ny "
              "lahatsoratra ampiasaina dia mety [[ho]] lahatsoratra mitantara, manoritsoritra "
              "na mampahalala. Ho vita ity rahariva. = Rahariva [[no ho]] vita ity. [[Noho]] ianao mividy boky "
              "betsaka, dia ahenako ny vidin'ny tsirairay."},
    {"ohatra": ["Ny zava-dehibe : anarana na mpisolo anarana no manaraka ny « noho ny » ; "
                "matoanteny no manaraka ny « nony » ; ary roa teny ny « no ho »."]},
]

LALANA = ("Lazao ny fampiasana ny « noho ny », ny « nony » ary ny « no ho » ao anaty "
          "fehezanteny.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="2", isan="2",
              loharano=[
    "Rakibolana an-tserasera, « noho » — https://malagasyword.org/bins/teny2/noho : "
    "« Ilaina noho ny volamena ny vy » ; « Mamy ny akondro noho ny voasary » ; « Noho ianao "
    "nandiso fotoana, dia tsy hahazo valisoa ianao ». Pejy 2 : « no ho, locution — marque un "
    "point de depart, depuis… jusqu'a : Hatramin' ny folo no ho miakatra ».",
    "PE T5, taranja Malagasy, p.18 (Fiasan'ny teny · Tsipelina) : « Fanoratana ny: "
    "samihafa/samy hafa, noho ny/nony/no ho ».",
    "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho : "
    "« Reraka izy noho ny ratra nahazo azy » ; « Noho ianao mividy boky betsaka, dia ahenako "
    "ny vidin'ny tsirairay ». Contenu non libre : citation courte avec URL, tsy misy dika "
    "amin'ny pejy manontolo.",
    "Rakibolana an-tserasera, « nony » — https://malagasyword.org/bins/teny2/nony : « Nony "
    "niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana » ; « Nony midona ny orana, "
    "velon-tsento i Sahondra mahatsiaro andreniny » ; « Nony handeha indrindra izahay no avy "
    "ny orana » ; « Nony lasa izy, dia nody izahay ».",
    "Ohabolana : « Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » "
    "(ohabolana.org) ; « Ny teny mahery lava noho ny tanana. » (JICA/PAGEM, vakiteny modely).",
    "PE T5, p.9 : « Ny lahatsoratra ampiasaina dia mety ho lahatsoratra mitantara, "
    "manoritsoritra na mampahalala » ; « ampiasaina ny teny ho fitaovana ianarana, "
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
