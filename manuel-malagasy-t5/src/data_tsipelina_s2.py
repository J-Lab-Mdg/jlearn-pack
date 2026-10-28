# -*- coding: utf-8 -*-
"""Fiche 2e seho — Tsipelina — « NOHO NY / NONY / NO HO »

V6 — fandrindrana araka ny fichiermodele (`Nos manuels/EXEMPLE DE MALAGASY.docx`),
nodianina tamin'ny dika feno vaovao (`refs/EXEMPLE_DU_MANUEL.txt`, natao tamin'ny
`src/dump_docx.py`, izay manaiky ny takela sy ny mpanaraka typographique):

    (1) 6 saha ambonin'ny takela : Taranja/Daty, Zana-taranja/Kilasy, Lohahevitra/Seho n°,
        Lohateny/Isan'ny seho, V. P. M: + Fitaovana:/Faharetany, Fanovozan-kevitra ;
    (2) takela feno : teny am-pampianarana sy featsiny, « V.A. : … » valiny atoky,
        Fanamarihana banga, « ---- » rehefa tsy misy fitaovana, ore-minitra « (…. min) » ;
    (3) FANAZARAN-TENA : 3 latihan-kianja (« Ampifandraiso amin'ny alalan'ny tsilo »,
        « Fenoy … ny banga », « Mamorona fehezanteny … ») ;
    (4) **fehezanteny VAOVAO** ao anaty fanazaran-tena : tsy misy akory ny ohatra
        voasoratra ao amin'ny lesona. Isaky ny fehezanteny nolavalina dia misy ny
        laharany ao `refs/rakibolana_noho.txt`.
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
     "Namaky ampahany amin'ny lahatsoratra momba ny rano i Ravao. Toy izao ny soratra teo : "
     "« Noho ny oksizena izay elektronegativa dia sintoniny manatona azy ny tambatra "
     "elektrona anankiroa izay eo amin'ny firaisany amin'ireo Hidrozena avy. » "
     "Sahiran-tsaina izy hoe ny « Noho ny » no nampifandray ny antony sy ny voka.",
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
     "Nony tonga tany an-trano izy, dia natory avy hatrany.\n"
     "Inona no nampifandray ny fotoana teo amin'ireo ampahany roa ?",
     "Mijery.",
     "Asa iombonana", "Fehezanteny\nSolaitrabe", ""),
    ("4. Famakafakana",
     "Asaintsika i Mora hamaky an'io fehezanteny io.\n"
     "Maninona hono no ampiasaina ny « nony » ?\n"
     "Inona no dikan'izany « nony » izany ?\n"
     "Fandravonana vonjimaika: Raha manana ny hevitra hoe « rehefa » ny fehezanteny, dia "
     "« nony » no ampiasaina.\n"
     "Raha ovaina amin'ny « raha » izany ilay hoe « nony » dia lasa hoe ahoana ? Mbola "
     "marina ve izany fehezanteny izany ?\n"
     "Manao ahoana ny fanoratra an'ilay « no ho » azo soloina hoe « noho » ?",
     "Mamaky i Mora (na mpianatra hafa nananga-tanana)\n"
     "V.A.: Ny fotoana.\n"
     "V.A.: « Rehefa ».\n"
     "Mihaino\n"
     "Mijery\n"
     "Mamaly\n"
     "V.A.: Eny.\n"
     "V.A.: Tsy marina, fa roa teny ny « no ho » : ny « no » sy ny « ho ».",
     "Asa tsirairay.", "Fehezanteny", ""),
    ("5. Fandravonana",
     "Rehefa milaza antony ny fehezanteny dia ampiasaina ny « noho ny », ka anarana no "
     "manaraka azy.\n"
     "Fa ny « nony » kosa dia manana ny hevitra hoe « rehefa », ka matoanteny no manaraka "
     "azy.\n"
     "Ny « no ho » dia ampiasaina rehefa mifandray amin'ny matoantenin'ny iharana ny ampahany "
     "voamarina.",
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
# ** ** = teny ilazavana voamarika (toy ny modele : « Mianatra taranja **samihafa** izahay. »)
LESONA = [
    ("h2", "Noho ny"),
    ("p", "Raha manana ny hevitra hoe « satria » na « antony » ny fehezanteny dia « noho ny » "
          "no ampiasaina, ka anarana na mpisolo anarana no manaraka azy."),
    ("ohatra", ["Tsy nivoaka izy **noho ny** ranonorana.",
                "Tafita izy **noho ny** fiezahany."]),
    ("note", "PE T5, Fiasan'ny teny · Tsipelina, p.18 : « Fanoratana ny: samihafa/samy hafa, "
             "noho ny/nony/no ho » ; Rakibolana, « noho » (ppk.) = « azon'ny, satria »."),
    ("h2", "Noho"),
    ("p", "« Teny entina mampitaha zavatra roa » koa ny **noho** ; rehefa fehezanteny kosa "
          "manaraka azy dia tsy misy ny « ny »."),
    ("ohatra", ["Ny fahasalamana dia ambony lavitra **noho** ny fananan-karena.",
                "**Noho** ianao mividy boky betsaka, dia ahenako ny vidin'ny tsirairay."]),
    ("note", "Rakibolana Malagasy, « noho » (p, mt. sy ppt. Teh.) ; ohabolana, ohabolana.org."),
    ("h2", "Nony"),
    ("p", "Raha manana ny hevitra hoe « rehefa » na « raha » ny fehezanteny — dia ny zavatra "
          "natao taorian'ny hafa — ampiasaina ny **nony**, ka matoanteny lasa no manaraka "
          "azy."),
    ("ohatra", ["**Nony** niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana.",
                "**Nony** handeha indrindra izahay no avy ny orana."]),
    ("note", "Rakibolana an-tserasera, « nony » (conjonction) — "
             "https://malagasyword.org/bins/teny2/nony ; analog : fony, raha, rehefa."),
    ("h2", "No ho"),
    ("p", "Matoantenin'ny iharana ny **no** ; rehefa misy tovana ny matoanteny dia "
          "**mitovona ny ho**, ka atao hoe **hovitaiko**, **ho tonga**."),
    ("ohatra", ["Ho tonga rahampitso izy.  =  Rahampitso izy **no ho** tonga.",
                "Hovitaiko ity rahariva.  =  Rahariva ity **no** hovitaiko."]),
    ("note", "Ohatra nomen'ny mpampianatra, recopies mot pour mot (refs/rakibolana_noho.txt)."),
    ("p", "Jerena tsara : roa teny ny **no ho** (ny « no » sy ny « ho »), teny iray kosa ny "
          "**noho**. Tsy azo ovaina ny iray ho ny iray."),
]

# ------------------------------------------------------- FANAZARAN-TENA
# Fehezanteny vaovao daholo eto : ny ohatra ao amin'ny lesona dia tsy miverina intsony.
EXOS = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo.",
     "tsilo": (["Reraka izy noho ny",
                "Nony lasa izy,",
                "Nony nahita ny reniny ny zaza,",
                "Ampiasaina ny teny",
                "noho ny",
                "nony",
                "no ho"],
               ["ratra nahazo azy.",
                "dia nody izahay.",
                "dia nitsiky.",
                "ho fitaovana ianarana, ifandraisana ary anehoana hevitra.",
                "antony",
                "rehefa",
                "matoantenin'ny iharana"])},
    {"consigne": "Fenoy « noho ny » na « noho » na « nony » na « no » na « ho » ny banga.",
     "banga": "Ny lahatsoratra ampiasaina dia mety …………………… lahatsoratra mitantara, "
              "manoritsoritra na mampahalala. …………………… midona ny orana, velon-tsento i "
              "Sahondra mahatsiaro andreniny. Ho vita ity rahariva. = Rahariva "
              "…………………… vita ity. Ny teny mahery lava …………………… ny tanana."},
    {"consigne": "Mamorona fehezanteny telo ahitana ny hoe « noho ny », « nony » sy "
                 "« no ho »."},
]

FANITSIANA = [
    {"tsilo": [("Reraka izy noho ny", "ratra nahazo azy."),
               ("Nony lasa izy,", "dia nody izahay."),
               ("Nony nahita ny reniny ny zaza,", "dia nitsiky."),
               ("Ampiasaina ny teny", "ho fitaovana ianarana, ifandraisana ary anehoana "
                                      "hevitra."),
               ("noho ny", "antony"),
               ("nony", "rehefa"),
               ("no ho", "matoantenin'ny iharana")]},
    {"banga": "Ny lahatsoratra ampiasaina dia mety [[ho]] lahatsoratra mitantara, "
              "manoritsoritra na mampahalala. [[Nony]] midona ny orana, velon-tsento i "
              "Sahondra mahatsiaro andreniny. Ho vita ity rahariva. = Rahariva [[no ho]] vita "
              "ity. Ny teny mahery lava [[noho]] ny tanana."},
    {"ohatra": ["Ny zava-dehibe : anarana no manaraka ny « noho ny » ; matoanteny lasa no "
                "manaraka ny « nony » ; ary rehefa misy tovana ny matoanteny dia mitovona ny "
                "« ho » ao anaty « no ho »."]},
]

LALANA = ("Lazao ny fampiasana ny « noho ny », ny « nony » ary ny « no ho » ao anaty "
          "fehezanteny.")

FICHE = fiche(ZT, LT, LESONA, EXOS, FANITSIANA, LALANA, seho="2", isan="2",
              loharano=[
    "PE T5, taranja Malagasy, p.18 (Fiasan'ny teny · Tsipelina) : « Fanoratana ny: "
    "samihafa/samy hafa, noho ny/nony/no ho » ; p.9 : « Ny lahatsoratra ampiasaina dia mety "
    "ho lahatsoratra mitantara, manoritsoritra na mampahalala » ; « ampiasaina ny teny ho "
    "fitaovana ianarana, ifandraisana ary anehoana hevitra ».",
    "PE T5, p.9 : « 1. Ny fitandroana ny fahasalamana » (lohahevitra voasoratra ao amin'ny "
    "takela).",
    "Rakibolana Malagasy, « noho » — https://www.rakibolana.org/rakibolana/teny/noho : "
    "« Reraka izy noho ny ratra nahazo azy » ; « Noho ianao mividy boky betsaka, dia ahenako "
    "ny vidin'ny tsirairay ». Contenu non libre : citation courte avec URL, tsy misy dika "
    "amin'ny pejy manontolo.",
    "Rakibolana an-tserasera, « nony » — https://malagasyword.org/bins/teny2/nony : « Nony "
    "niamboho Ranavalona reniny, dia nitsoka ny rivo-pahafahana » ; « Nony midona ny orana, "
    "velon-tsento i Sahondra mahatsiaro andreniny » ; « Nony handeha indrindra izahay no avy "
    "ny orana » ; analog : fony, raha, rehefa.",
    "Ohabolana : « Ny fahasalamana dia ambony lavitra noho ny fananan-karena. » "
    "(ohabolana.org, sources_web/02_ohab_fahasalamana.txt) ; « Ny teny mahery lava noho ny "
    "tanana. » (JICA/PAGEM, vakiteny modely, sources_web/04_jica_vakiteny.txt).",
    "mGWikipedia, pejy « Rano » (sources_web/full/mgwiki_rano.txt) : « Noho ny oksizena izay "
    "elektronegativa dia sintoniny manatona azy ny tambatra elektrona anankiroa izay eo "
    "amin'ny firaisany amin'ireo Hidrozena avy. » — Licence CC BY-SA 4.0.",
    "Ohatra nomen'ny mpampianatra (2026-10-29) : « Tsy nivoaka izy noho ny ranonorana. », "
    "« Tafita izy noho ny fiezahany. », « Nony tonga tany an-trano izy, dia natory avy "
    "hatrany. », « Nony nahita ny reniny ny zaza, dia nitsiky. », « Ho tonga rahampitso izy. "
    "= Rahampitso izy no ho tonga. », « Ho vita ity rahariva. = Rahariva no ho vita ity. », "
    "« Hovitaiko ity rahariva. = Rahariva ity no hovitaiko. » — voatahiry mot pour mot ao "
    "refs/rakibolana_noho.txt.",
])

FICHE["fields"] = FIELDS
FICHE["grille"] = GRILLE

if __name__ == "__main__":
    print(len(FICHE["lesona"]), "groupe lesona;", len(FICHE["exos"]), "fanazaran-tena;",
          len(FICHE["grille"]), "andiany takela")
