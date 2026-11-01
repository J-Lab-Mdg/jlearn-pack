# -*- coding: utf-8 -*-
"""T6 — **FARITANA III · TONONKALO sy MPANORATRA** (leçon L12-L15).

Votoatiny = **FRP Malagasy T6, éd. Oktobra 2026** : LI 1a « Ny sokajin-dahatsoratra / Ny
literatiora manoritsoritra » (p.62) · LII 2a « NY MPANORATRA / JEAN NARIVONY na RAJAONARIVONY
Jean (1898-1980) » (p.63-68) · LII 2b « Santionany amin'ny asa sorany » (p.68-71) · LII 2d
« Ny asa soratra kanto mampiavaka azy eo amin'ny tononkalo » (p.71-73).
Ny tononkalo rehetra dia **voasoro teny-teny** (tsy nabika, tsy nabobo) : *Iny Ankaratra iny*,
*Takariva*, *Ny Tenindrazako*, *Rajakom-bazaha* — ary voamarina tamin'ny loharano an-ty
evelona (*poetawebs.e-monsite.com*, *vetso.serasera.org*) : jereo `refs/08`.
**Tsy misy Baiboly** ; **tsy misy français** ao amin'ny lesona (footer ihany).
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_t6 import fiche_t6  # noqa: E402

ZT = "Fitsipika"
FAR = "FARITANA III · LITERATIORA sy MPANORATRA"
FITA = "Tononkalo voasoratra / solaitrabe"

# =========================================================== L12 · LI 1a
LESONA_12 = [
    ("h2", "1. Famaritana"),
    ("p", "« *Lahatsoratra mandoko zavatra iray ka manasongadina ny toetrany, ny endriny, ny "
          "fihetsiny, ny bikany, ary ny zavatra hita eo aminy ny lahatsoratra manoritsoritra.* » "
          "."),
    ("sary", "literatiora"),
    ("h2", "2. Ny firafiny"),
    ("ohatra", ["« *Misy lamina arahin'ny mpanoratra izay tsy mikorontana* »",
                "« *Misy fatra ataon'ny mpanoratra: habe, hafohy, halava, hakely* »",
                "« *Misy sehatra ifantohan'ny fijery sy ny fisainana* » — ôhatra ao amin'ny boky : "
                "*zavatra, bika, toetran'olona, toerana*"]),
    ("h2", "3. Ny mampiavaka azy"),
    ("p", "**Endrika ivelany** — « *Ahitana betsaka an'ireo* » :"),
    ("tabl", (["Endrika ivelany", "Votoatiny"],
              [["Filazam-potoana **ankehitriny** amin'ny matoanteny",
                "« *Toy ny mahita mivantana sy mahazo sary an-tsaina ny zavatra soritsoritana "
                "ny mpamaky.* »"],
               ["Mari-piatoana", "tsy misy mpandray anjara afa-tsy ny mpanoratra ihany"],
               ["Mpamari-toetra", "(jereo ny LFK 2b)"],
               ["Tambin-teny sy mpanampy", ""],
               ["Mpisolo isan-karazany", ""],
               ["Sarin-teny fampitahana, « *toy ny fanomezana aina ny tsy manana aina* »", ""],
               ["**Teny verindroa**", "(jereo ny LFK 1d sy 2b : *lavalava*, *menamena*, "
                "*lavidavitra*)"],
               ["Fehezanteny fohy", ""]],
              [5000, 4867])),
    ("note", "Tsy misy lahatsoratra feno aseho hoôhatra amin'ity LFK ity ao amin'ny FRP : ny "
             "famaritana + ny firafitra + ny marika 8 ihany no votoatiny. Noho izany dia ampiasaina "
             "amin'ny seho ny santionany *Iny Ankaratra iny* — izay hita ao amin'ny boky "
             "ihany koa."),
    ("h2", "Mpiara-mianatra : ny marika hita ao amin'ny tononkalo"),
    ("tononkalo", [["Iny Ankaratra iny mantsy,", "Raha tazanina maraina,",
                    "Toa manaitra sy mihantsy", "'Zany vetsovetson-tsaina.",
                    "Eny, mampamelovelo", "Ka mamoha alahelo."],
                   ["Iny Ankaratra iny lahy", "Raha atrehina atoandro,", "Mahavonto ny fanahy,",
                    "Sady mampihandrohandro"]]),
    ("p", "*Iny Ankaratra iny* — Jean NARIVONY. Ny lohateny feno : **INY "
          "ANKARATRA INY**."""),
]

EXOS_12 = [
    {"consigne": "Inona no atao hoe lahatsoratra manoritsoritra ? (Lazao teny-teny araka ny boky.)"},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny singa amin'ny firafitra sy ny "
                 "dikany.",
     "tsilo": (["**lamina**", "**fatra**", "**sehatra**"],
               ["habe, hafohy, halava, hakely", "ifantohan'ny fijery sy ny fisainana",
                "arahin'ny mpanoratra, tsy mikorontana"])},
    {"consigne": "Karohy ao amin'ireo andalana 10 ireto : (1) ny mpamari-toetra, (2) ny "
                 "filazam-potoana ankehitriny, (3) ny teny verindroa raha misy."},
    {"consigne": "Mamorona fehezanteny 3 « manoritsoritra » amin'ny teny iray : *haintany*, "
                 "*alan-*, *ranomasina*."},
]

FANITSIANA_12 = [
    {"note": "Teny amin'ny FRP : « *Lahatsoratra mandoko zavatra iray ka manasongadina ny "
             "toetrany, ny endriny, ny fihetsiny, ny bikany, ary ny zavatra hita eo aminy.* »"},
    {"tsilo": (["**lamina**", "**fatra**", "**sehatra**"],
               ["habe, hafohy, halava, hakely", "ifantohan'ny fijery sy ny fisainana",
                "arahin'ny mpanoratra, tsy mikorontana"])},
    {"note": "Mety : *mantsy*, *maraina*, *manaitra*, *mihantsy*, *vetsovetson-tsaina*, "
             "*mampamelovelo*, *alahelo*, *atoandro*, *mahavonto*, *mampihandrohandro* — ny "
             "isa sy ny karazana dia araka ny ezaka an-kilasy. Ny **teny verindroa** : *vetsovet"
             "son-tsaina* (*vetso* → *vetsovetsotra* toy izay ; hita ao amin'ny teny "
             "*vetsovetson-tsaina* ny fifindran'ny fototeny)."},
    {"note": "Tsy ilaina ny fanamafisana : ilay zava-dehibe dia ny **manasongadina** ny toetra "
             "sy ny bika (oh : *Mangwavity ny alan'i Andasibe* ; *Mavo sy mangina ny ranomasina "
             "maraina*) — toy ny voalaza amin'ny FRP : « *manasongadina ny toetrany, ny endriny…* »."},
]

LOHARANO_12 = [
    "FRP T6 éd. Oktobra 2026, p.62 : « LOHAHEVITRA I — NY SOKAJIN-DAHATSORATRA / LFK 1a : "
    "Lesona → Ny literatiora manoritsoritra » (Famaritana · Ny firafiny · Ny mampiavaka azy : "
    "endrika ivelany sy votoatiny).",
    "Ny santionany *Iny Ankaratra iny* : FRP p.68 (LFK 2b) — **2 andininy** voalohany ihany no "
    "nampidirina eto ; ny tononkalo feno (6 andininy) : poetawebs.e-monsite.com/pages/fakafaka/"
    "page-39.htm (Nangonin'i Toetra Ràja).",
    "RAPE T6 sept. 2026 : LI 1a → herinandro 1→7 sy 28→33 ; ora 4/kerinandro.",
]

# =========================================================== L13 · Jean Narivony
LESONA_13 = [
    ("h2", "Ny mpanoratra"),
    ("p", "« *Rajaonarivony no tena anaran'ny Poeta antsoina hoe JEAN NARIVONY. Teraka tao "
          "Andrefandrova Antananarivo izy tamin'ny 17 septambra 1898 ary maty tamin'ny 15 jona "
          "1980.* ». Poeta · mpanoratra · mpampianatra sy mpanabe · mpamoron-kira no "
          "lanjan'ny asany."""),
    ("sary", "narivony"),
    ("h2", "Ny fianakaviana sy ny fahazaza"),
    ("p", "« *Rajaonary James avy ao Masindray Ambohimanambola, atsinanan'Antananarivo, no rainy. "
          "Rasoarivony kosa no anaran'ny reniny, mpampianatra mpanabe. Rasoazananoro Marie-Cécile "
          "avy ao Fenoarivo, andrefan'ny renivohitr'i Madagasikara, no anaran'ny vadiny ka "
          "nahazoan'izy mivady zanaka dimy: roa lahy sy telo vavy. Mpanjaitra no asany.* » — "
          "Ary : « *Azo lazaina ho nilomano tao amparihin'ny literatiora izy hatramin'ny "
          "fahakeliny satria mpanoratra Rajaonary James rainy, namorona ireny hira protestanta "
          "ireny* » ; ny zokiny lahy **Jean Narisson** dia « *Poeta ihany koa* », ary "
          "**Ratsimiseta Jasmina** sy **Rodlish** dia « *samy dadatoany ary samy namoha ny "
          "aingam-panahiny* »."""),
    ("h2", "Sekoly nandratoany fahalalana"),
    ("ohatra", ["*Ecole supérieur indigène* Ambohijatovo Avaratra",
                "*Ecole régionale* Farafangana", "Sekoly Paul Minault Ambatonakanga",
                "*Ecole Normale Protestante* Ambavahadimitafo",
                "« *Manana ny mari-pahaizana CAE/EB i Jean Narivony* »"]),
    ("h2", "Ny asa aman-draharaha"),
    ("p", "« *Mpampianatra nandritra ny 35 taona i Jean Narivony ary nanomboka izany tao "
          "Ambohijatovo Avaratra Antananarivo nandritra ny 10 taona. Tamin'ny 1930 izy no voatendry "
          "hampianatra tany amin'ny MPF (Misiona Protestanta Frantsay) Fenoarivo Atsinanana. Izy "
          "irery no mpampianatra tany Fenoarivo Atsinanana nandritra ny 25 taona ka nitazonany ny "
          "kilasy CP1, CP2, CE1 ary ny CE2.* » — « *Raha 87 ny isan'ny mpianany tany am-piandohany "
          "dia tafakatra 252 izany tamin'ny 1955* ». Anisan'ny nampianarin'i : « *ny Pôêty "
          "Clarisse Ratsifandriahamanana* »."""),
    ("h2", "Ny sangan'asany"),
    ("p", "« *Nanomboka nanoratra izy tamin'ny 1918 ary voarakitra ao amin'ny gazety maro ireo "
          "asasorany : Ranovelona, Ny Fandrosoam-baovao, Ny Mpandinika…* ». Tafiditra tamin'ny "
          "bokim-pianarana ny tononkalony : *Fary Mamy* kilasy fahatelo (« Tebiteby », tak. 74) · "
          "*Lahatsoratra Voafantina* (« Ny diako » tak. 4 ; « Ny kipikipy zato sy ny voron-tsara "
          "dia » tak. 23 ; « Ny tananan tsika » tak. 46) · *Takelaka notsongaina I* (« Iny "
          "Ankaratra iny » tak. 68 ; « Ampamoizamaso » tak. 97 ; « Hariva » tak. 99 ; « Ato no "
          "mandry » tak. 135) · *Tononkalo sy Lahatsoratra, Amboara 2, Boky 1* (« izay ahitana "
          "tononkalo 26 »)."""),
    ("tabl", (["Taona", "Boky / asan-kanto", "Niarahany tamin'ny"],
              [["1920", "*Akon'Iarivo*", "Ny Avana Ramanantoanina sy Bolespara"],
               ["1920", "*Ny Mpandinika*", "Franco (tamin'ny gazety) — anarana diam-penina : "
                "**J. Venus**"],
               ["1926", "*Amboara voafantina* (bokim-poezia)", "Rodlish, dadatoany"],
               ["1926", "*Takariva Volafotsy*", "Lys Ber sy Ny Ando"],
               ["1929", "*Kalokalo tatsinanana* (bokin-tononkalo)", "Samuel Ratany, Ny Avana "
                "Ramanantoanina, Ignace Ratsimbazafy, J.J. Rabearivelo, Lusio B., Fredy Rajaofera, "
                "Meteora, Josefa Rajaonah, Elisa-Freda, Rafanoharana, Rodlish"],
               ["1929", "*Firaketana*", "Rajaonah"],
               ["1937", "*Feom-baliha*", "hira niventesana an-dRasalama Maritiora, fahazato "
                "taonany (14 Aogositra 1837-1937)"],
               ["1957", "*Ny protestantisma sy ny sekoly*", "ho an'ny jobilin'ny sekoly M.F.P. "
                "tao Fenoarivo Atsinanana 1907-1957"],
               ["1966", "***Amboaran-tononkalo***", "Antananarivo : Edisiona Salohy"],
               ["—", "*Kofehy volamena*", "—"],
               ["—", "*Andry boboka* · *Navoakan'ny fasana*", "tantara an-dampihazo"]],
              [900, 3400, 5567])),
    ("h2", "Ny finoana sy ny hira"),
    ("p", "« *Izy indrindra no namorona ilay hira protestanta fantatry ny maro hoe : « Endrey "
          "izany hafaliana ». Io hira ao amin'ny Fihirana FFPM faha 545 io dia nosoratany noho ny "
          "fankalazana ny faha 150 taona nidiran'ny Filazantsara teto Madagasikara* » ; ary « *Mbola "
          "izy ihany koa no namorona ny hira FFPM faha 213 « Ry Fanahy mangetaheta », hira "
          "fanevan'ny Fikambanana Mampiely Baiboly Malagasy (FMBM)* »."""),
    ("h2", "Tara-kevitra novoiziny"),
    ("p", "« *Mirakitra fananarana, hoy isika tetsy ambony, ny tononkalony, toy ireny fahita "
          "amin'ny sangan'asan'i Jean de la Fontaine ireny* » ; « *Ny fahafolahany ny teny frantsay "
          "moa no nahafahany nandika amin'ny teny malagasy ny sanganasan'i Molière hoe : « Le "
          "malade imaginaire »* ». Loenhahevitra taratra : alahelo noho ny fahabangana (*Ato no "
          "mandry*) · embona sy hanina (*Iny Ankaratra iny*) · hanina noho ny nahafoizana ny "
          "havana ilaozana (*Ampamoizamaso*) · fihaonana (*Ny tia sy ny manina*) · herim-po "
          "(*Mpiasa tany*) · olombelona (*Ny tanintsika ity*) · fitiavana (*Firaisana mampanahy*) · "
          "fomba amam-panao (*Rajakom-bazaha*) · tenindrazana (*Ny tenindrazako*) · zava-boahary "
          "(*Amoron-dranomasina*)."""),
    ("note", "Ny lohateny rehetra ao amin'ny « sangan'asa » dia an'ny FRP (p.65-67). Misy "
             "kôpi taloha 93 p. mitovy teny-teny. Nohamarinina koa tamin'ny sorapiainan'i Toetra "
             "Ràja (poetawebs.e-monsite.com, 15/06/2018) sy amin'ny takelaka "
             "vetso.serasera.org/mpanoratra/jean-narivony (13 tononkalo ao) — mitovy ny daty sy ny "
             "anisany ; ny fifanoherana kely dia voasoratra ao amin'ny *note* momba ny tononkalo."),
]

EXOS_13 = [
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny taona sy ny zava-niseho."},
    {"consigne": "Fenoy : teraka tao … i Jean Narivony tamin'ny … ; maty tamin'ny … ; nampianatra "
                 "nandritra ny … taona."},
    {"consigne": "Inona no anarana tena izy an'ny poeta ? Inona no anarana diam-penina nampiasainy?"},
    {"consigne": "Lazao ny boky roa natao ho an'ny ankizy sy ny tanora, ary ny tononkalo iray "
                 "mitsangana ho an'ny tenindrazana."},
]

FANITSIANA_13 = [
    {"note": "1898 → teraka tao Andrefandrova Antananarivo · 1918 → nanomboka nanoratra · 1930 → "
             "nampianatra tany Fenoarivo Atsinanana · 1955 → 252 mpianatra · 1966 → "
             "*Amboaran-tononkalo* · 1980 → maty 15 jona."},
    {"note": "tao **Andrefandrova Antananarivo**, tamin'ny **17 septambra 1898** ; maty tamin'ny "
             "**15 jona 1980** ; **35 taona** nampianatra."},
    {"note": "**Rajaonarivony** (na Rajaonarivony Jean) no tena anarana ; **J. Venus** no "
             "anarana diam-penina."},
    {"note": "*Fary Mamy* kilasy fahatelo (« Tebiteby », tak. 74) sy *Lahatsoratra Voafantina* ; "
             "ny tononkalo momba ny tenindrazana : ***Ny Tenindrazako***."},
]

LOHARANO_13 = [
    "FRP T6 éd. Oktobra 2026, p.63-68 : « LFK 2a : Lesona → NY MPANORATRA / JEAN NARIVONY na "
    "RAJAONARIVONY Jean (1898-1980) » — ny tantaran'ny fiainana rehetra sy ny lisitry ny "
    "sangan'asa, **Nangonin'i Toetra Ràja** (lazaina ao amin'ny boky).",
    "Nohamarinina tamin'ny : poetawebs.e-monsite.com/pages/sorapiainana/page-39-1.html sy "
    "vetso.serasera.org/mpanoratra/jean-narivony (01/11/2026).",
    "Ny « Fihirana FFPM faha 545 » sy « faha 213 » : FRP p.67.",
]

# =========================================================== L14 · santionany
LESONA_14 = [
    ("h2", "Santionany 1 — INY ANKARATRA INY"),
    ("tononkalo", [["Iny Ankaratra iny mantsy,", "Raha tazanina maraina,", "Toa manaitra sy "
                    "mihantsy", "'Zany vetsovetson-tsaina.", "Eny, mampamelovelo",
                    "Ka mamoha alahelo."],
                   ["Iny Ankaratra iny lahy", "Raha atrehina atoandro,", "Mahavonto ny fanahy,",
                    "Sady mampihandrohandro"]]),
    ("p", "Jean NARIVONY — FRP p.68 ; *Takelaka notsongaina I*, tak. 68. Loharano an-ty evelona : "
          "poetawebs.e-monsite.com/pages/fakafaka/page-39.htm (ny tononkalo feno = **6 andininy**)."),
    ("h2", "Santionany 2 — TAKARIVA"),
    ("tononkalo", [["Tazanina iry vodilanitra mavo,", "Zay hany tratry ny maso voafetra,",
                    "Jerena lavitra manjavozavo,", "Ka ory ny saina, ny vava mitsetra."],
                   ["Manidina irony tsiriry mihoatra,", "Mamela veloma ombieny ombieny:",
                    "Ny tany hodiany tsy fantatra loatra,", "Kanefa ny saiko dia lasan'ireny!"],
                   ["Ny raho-madinika miara-misosa", "Finaoky ny rivotra mamelovelo,",
                    "Manaitra ny fo ao anatiko kosa", "Hamoaka ny sento fambara alahelo."],
                   ["Ireo voronkely mamonjy fodiana", "Dia samy mikalo ny hirany mamy:",
                    "Izahoko irery no be fahoriana,", "Toa fendrofendroin'ity alina tamy."],
                   ["Ny masoko revo mitazana ihany", "Manitsy ilay toerana mbola hodiako,",
                    "Iarivo malala tsy roa aman-tany,", "'Lay tany fonenan'ny olona tiako !"],
                   ["Tandrifin' ireo foto-kazo maniry,", "Ambanin'ilay raho-mena miloko,",
                    "Ankoatr' iry dongona iray makadiry", "No misy ilay Jerosaleman'ny foko !"],
                   ["Iarivo nilaozana nefa tsaroana", "Ka dia mampanembona aty an-dakira,",
                    "No dia mampiloatra ny sentoko foana,",
                    "Dia sento mitambatra ho tononkira !"]]),
    ("p", "Jean NARIVONY — FRP p.68-69 ; loharano : vetso.serasera.org/tononkalo/jean-narivony/"
          "takariva (7 andininy × 4 andalana). *Tononkalo sy Lahatsoratra, Amboara 2, Boky 1*, "
          "tak. 7."""),
    ("note", "Fifanoherana kely eo amin'ireo kopi roa : « *Jerena lavitra* » / « *Jerena Lavitra* » (vetso) ; « *tononkira* » / « *tonon-kira* » (vetso) ; « *aty "
             "an-dakira* » / « *aty andakira* ». Amin'ny andininy farany dia voasoratra « *larivo* » "
             "ao amin'ireo loharano roa ireo — natao **Iarivo** eto sady misongadina amin'ny "
             "andininy fahadimy (*Iarivo malala…*)."),
    ("h2", "Santionany 3 — NY TENINDRAZAKO"),
    ("tononkalo", [["'Lay Teny, teny mamiko,", "Dia ahy tsy nindramiko,", "Nanavanana ny lelako",
                    "Ka ahy, tsy havelako."],
                   ["'Lay teny sarobidiko", "Mitana ny safidiko", "Dia tolotry ny Lanitra,",
                    "Avy amin'Andriamanitra."],
                   ["Fiteny ahombiazako", "'Lay Teny soan'ny razako;", "Nandamina ny fiainako,",
                    "Namboatra ny fisainako."],
                   ["Fa Teny firesahako", "Sy Teny fivavahako,", "Ka io no anatonako",
                    "Ny Tompo fiononako."],
                   ["Vao raisiko ny peniko", "Dia indro fa ny Teniko", "No avy hamborahako",
                    "Ny vetson'ny fanahiko."],
                   ["Ny teny ho fitandroko", "Manapitra ny androko,", "Tsy miova ilay voalazako:",
                    "Ny Teny...Tenin-drazako."],
                   ["Ny teny no fitandroko", "Manapitra ny androko,", "Tsy miova ilay voalazako:",
                    "Ny teny...Tenin-drazako."],
                   ["'Lay Teny mampitambatra", "Ho iray ny Nosy Sambatra", "Sy teny itenenany",
                    "Ny FAHALEOVANTENANY."]]),
    ("p", "Jean NARIVONY — FRP p.70-71 ; loharano : vetso.serasera.org."""),
    ("h2", "Santionany 4 — ny tononkalo momba ny fomba amam-panao"),
    ("tononkalo", [["Mba inona isika izay be fakan-tahaka,", "Mangilatra ivelany toa "
                    "voronkahaka?", "Fiteny sy fomba nadika avokoa", "Fa ny an' ny tena..."
                    "valalan'amboa!"],
                   ["- Aleoko manandratra izay nentin-drazana", "Na dia mavomavo sy vitsy "
                    "mpitazana,", "Toy izay kevokevoka maro mpizaha",
                    "Kanefa fosaina: Rajakom-bazaha."]]),
    ("p", "Faran'ny tononkalo **RAJAKOM-BAZAHA** — Jean NARIVONY (1898-1980), "
          "*Amboaran-tononkalo*, tak. 175."""),
    ("h2", "Ny teny sarotra — jereo ny takelaka manokana"),
    ("p", "Tsy misy dikany natao eto, satria ny fanazavana teny dia an'ny mpampianatra amin'ny "
          "fampiasana ny rakibolana (*Rakibolana* / *Malagasy Dictionary and Encyclopedia*). "
          "Ireto no teny ilazana ny toe-tsaina sy ny toerana ao amin'ireo santionany : "
          "*vetsovetson-tsaina* · *mampamelovelo* · *manjavozavo* · *raho-madinika* · "
          "*fendrofendro* · *makadiry* · *mavomavo* · *kevokevoka* · *mpizaha*."""),
]

EXOS_14 = [
    {"consigne": "Isahy ny andininy sy ny andalana amin'ireo santionany efatra. Manaraka ny "
                 "FRP : *andininy* = …, *andalana* = …"},
    {"consigne": "Ampifandraiso amin'ny alalan'ny tsilo : ny santionany sy ny lohahevitra "
                 "mampiavaka azy (araka ny « Tara-kevitra novoiziny »).",
     "tsilo": (["**Iny Ankaratra iny**", "**Takariva**", "**Ny Tenindrazako**",
                "**Rajakom-bazaha**"],
               ["embona sy hanina", "alahelo noho ny nilaozana", "tenindrazana",
                "fomba amam-panao"])},
    {"consigne": "Karohy ny mari-piatoana « ! » sy « ? » ao amin'ny *Takariva* : inona no "
                 "vokany amin'ny feehezan-tsaina?"},
    {"consigne": "Safidy andininy iray tianao, ary lazao ny antony (tsy amin'ny teny an-dalana : "
                 "ampio ny andalana ao amin'ny tononkalo)."},
]

FANITSIANA_14 = [
    {"note": "*Iny Ankaratra iny* = 2 andininy voasoro (6 + 4 andalana) ; *Takariva* = 7 andininy "
             "× 4 andalana = 28 ; *Ny Tenindrazako* = 8 × 4 = 32 ; *Rajakom-bazaha* (faran'ny) = "
             "2 × 4 = 8."},
    {"tsilo": (["**Iny Ankaratra iny**", "**Takariva**", "**Ny Tenindrazako**",
                "**Rajakom-bazaha**"],
               ["embona sy hanina", "alahelo noho ny nilaozana", "tenindrazana",
                "fomba amam-panao"])},
    {"note": "Ohatra : « *Kanefa ny saiko dia lasan'ireny!* » ary « *Iarivo malala tsy roa "
             "aman-tany,* » — ny « ! » dia manamafy ny toe-tsaina (alahelo, fahatezerana, "
             "fifaliana)."},
    {"note": "Tsindraindray ny valiny — ilay ilaina dia ny **fanambaran'ny andalana** voafidy sy "
             "ny firaisana amin'ny lohahevitra."},
]

LOHARANO_14 = [
    "FRP T6 éd. Oktobra 2026, p.68-71 : « LFK 2b : Lesona → NY MPANORATRA / Santionany amin'ny "
    "asa sorany » — ny tononkalo rehetra **teny-teny**.",
    "Loharano an-ty evelona : poetawebs.e-monsite.com/pages/fakafaka/page-39.htm (*Iny Ankaratra "
    "iny* feno, *Takariva*, *Ny diako*) · vetso.serasera.org (*Takariva*, *Ny Tenindrazako*, "
    "*Rajakom-bazaha* : 13 tononkalo an'ny poeta). Nohamarinina 01/11/2026.",
    "*Amboaran-tononkalo*, 1966, Antananarivo : Edisiona Salohy — tak. 175 ho an'ny "
    "*Rajakom-bazaha* (lazaina ao amin'ny FRP).",
]

# =========================================================== L15 · rima sy ngadona
LESONA_15 = [
    ("h2", "1. Ny andininy sy ny andalana · 2. Ny ngadona · 3. Ny rima"),
    ("p", "« *Ny fitovian'ny feo isan'andalana manomboka eo amin'ny ngadona farany ny atao hoe : Rima.* »"
          " — « *Zana-peo mitondra ny tsindrim-peo no atao hoe ny ngadona.* » — « *Antsoina hoe tsaikona "
          "kosa ireo zana-peo tsy mitondra ny tsindry. Ny fifandimbiasan'ireo no atao hoe ba.* »"
          "."),
    ("sary", "andininy"),
    ("h2", "Ny vanin'andalana"),
    ("tabl", (["Anarana", "Sary", "Famaritana"],
              [["**lila**", "**┴ U**", "*ngadona tsaikona*"],
               ["**ralila**", "**U ┴ U**", "*tsaikona ngadona tsaikona*"],
               ["**taralila**", "**UU ┴ U**", "*tsaikona tsaikona ngadona tsaikona*"]],
              [2400, 2400, 5067])),
    ("h2", "Ireo karazana rima"),
    ("p", "**a) Araka ny laharam-pisehoany** — telo karazana omen'ny boky ; **b) araka ny "
          "hafenoany** — efatra."),
    ("sary", "rima"),
    ("tabl", (["Karazana", "Marika", "Ôhatra ao amin'ny FRP"],
              [["**mifanjohy**", "aa bb", "*Tranobongon'olon-tiana* (a) / *Aono misy fifaliana* (a) / "
                "*Ao izay toy ny fahantrana* (b) / *Hasambarana mazàna*  (b)"],
               ["**mifaningotra**", "ab ab", "*Ry foko ô tsarovy* (a) / *Ny ivahiniana* (b) / "
                "*Tsy rano ray mitovy* (a) / *Fa soratra zandiana*  (b)"],
               ["**mifampisakambina**", "a bb a", "*Raha izany sombinaina* (a) / *Raha izany no "
                "niafaran'ireo nandrasana hijery* (b) / *Sy hitondra fanafody hanasitrana ny "
                "fery* (b) / *Iza indray no antenaina* (a)"],
               ["**feno mihoatra**", "…", "mitovy manomboka eo amin'ny zana-peo mitondra ny "
                "tsindrim-peo farany, miampy ny renintsoratra eo alohany : *tanteraka* / "
                "*niteraka*"],
               ["**feno**", "…", "mitovy avokoa ny feo manomboka eo amin'ny ngadona farany : "
                "*tomandavana* / *mavamavana*"],
               ["**zara fa feno**", "…", "mitovy ny feo saingy misy renifeo tsy itoviany : *aloa* "
                "/ *loha* · *matroka* / *vasoka*"],
               ["**sary rima**", "…", "ny zana-peo farany mitondra ny ngadona ihany no mitovy : "
                "*vonton-dr* / *lehilahy*"]],
              [2100, 1100, 6667])),
    ("note", "Mpanampiny ho an'ny mpampianatra : ao amin'ny *Ny fomba filazan-javatra ao amin'ny "
             "hira malagasy* (LOVASOA Antenanaina Ch., ENS-CPN, Oniversiten'Antananarivo, 2008) dia "
             "voalaza hoe ny vanin-teny mitondra ny tsindry = **ngadona** (tononina mafy) ary ny "
             "tsy mitondra = **tsaika** (tononina mora) — mitovy amin'ny « *tsaikona* » an'ny FRP. "
             "Tsy voalaza mazava ao amin'ny PDF an'ny FRP ny mifanohitra ny « ┴ » sy ny « U » amin'ny "
             "*lila/ralila/taralila*, ka tsy nampidirina dikany eto : ampiasaina toy izay ao amin'ny "
             "boky."),
    ("h2", "Rohy amin'ny santionany"),
    ("p", "Rehefa mamerina ny *Takariva* na ny *Ny Tenindrazako* (seho teo aloha) dia azo "
          "jerenana ihany koa ny **rin-drindra** : *mavo* / *manjavozavo* · *voafetra* / "
          "*mitsetra* — ireo andalana ivoahana amin'ny **andininy** iray dia misy feo mifanaraka, "
          "toy ny *rima mifaningotra* (a b a b)."),
]

EXOS_15 = [
    {"consigne": "Omeo marika ny rima (aa bb · ab ab · a bb a) :"},
    {"consigne": "Zarao amin'ny karazana **hafenoany** ireo ôhatra roa ireto : (1) *tomandavana / "
                 "mavamavana* ; (2) *aloa / loha* ; (3) *vonton-dr / lehilahy* ; (4) *tanteraka / "
                 "niteraka*."},
    {"consigne": "Inona no atao hoe ngadona ? Inona no atao hoe tsaikona ? Inona no *ba* ?"},
    {"consigne": "Soraty ny vanin'andalana (sary) : *ralila* · *lila* · *taralila*."},
]

FANITSIANA_15 = [
    {"note": "*Ry foko ô tsarovy / Ny ivahiniana / Tsy rano ray mitovy / Fa soratra zandiana* = "
             "**ab ab** (mifaningotra) ; *Tranobongon'olon-tiana / Aono misy fifaliana / Ao izay "
             "toy ny fahantrana / Hasambarana mazàna* = **aa bb** (mifanjohy) ; *Raha izany "
             "sombinaina / … hijery / … fery / Iza indray no antenaina* = **a bb a** "
             "(mifampisakambina)."},
    {"note": "(1) **feno** · (2) **zara fa feno** · (3) **sary rima** · (4) **feno mihoatra** — "
             "araka ny ôhatra ao amin'ny FRP."},
    {"note": "*Ngadona* = zana-peo mitondra ny tsindrim-peo ; *tsaikona* = zana-peo tsy mitondra "
             "ny tsindry ; *ba* = ny fifandimbiasan'ireo."},
    {"note": "*ralila* = **U ┴ U** · *lila* = **┴ U** · *taralila* = **UU ┴ U** (teny amin'ny "
             "FRP)."},
]

LOHARANO_15 = [
    "FRP T6 éd. Oktobra 2026, p.71-73 : « LFK 2d : Lesona → NY MPANORATRA / Ny asa soratra kanto "
    "mampiavaka azy eo amin'ny tononkalo » — 1. andininy sy andalana · 2. ngadona · 3. rima + ny "
    "ôhatra rehetra (mifanjohy, mifaningotra, mifampisakambina, feno mihoatra, feno, zara fa feno, "
    "sary rima).",
    "Nohamarinina amin'ny « Course: Tononkalo » : plateforme.education.mg/bibliotheque-numerique/"
    "course/view.php?id=80 (mitovy teny-teny ny famaritana ny rima sy ny lila/ralila/taralila).",
    "Momba ny tsaikona/tsaika sy ny « ba » : LOVASOA Antenanaina Ch., *Ny fomba filazan-javatra ao "
    "amin'ny hira malagasy sy ny fanabeazana azy amin'ny kilasy faha-6*, mémoire/ENS-CPN, "
    "Oniversiten'Antananarivo, 2008 (biblio.univ-antananarivo.mg).",
    "Ny santionany nohamarinina : *Takariva* sy *Ny Tenindrazako* (vetso.serasera.org) — hita "
    "amin'ny LFK 2b.",
]

FICHES = [
    fiche_t6(ZT, "Ny literatiora manoritsoritra", "LI 1a", "1→7 sy 28→33", 13,
             [("Mamaky ampahan-dahatsoratra misy sary-tsaina.", "Mamaky.", "Asan-tarika", FITA,
               "LFK 1e : *sarin-tany* (jereo ny L3)."),
              ("Lazao ny lohateny ary soraty ny famaritana.", "Mihaino, manoratra.",
               "Asa iombonana", "Solaitrabe", "FRP p.62."),
              ("Karohy ao amin'ny santionany ny marika 8 (endrika ivelany).", "Mamaly.",
               "Asa mifampiha", "Tabilao", ""),
              ("Zarao: *lamina* / *fatra* / *sehatra* — inona no ao amin'ny andininy roa?",
               "Mamaly.", "Asa samirery", "Kahie", "Azo atao amin'ny tabilao 3 kolona."),
              ("Famakafakana amin'ny alalan'ny sary (FANITSIANA).", "Mamaly.", "Asa iombonana",
               "Solaitrabe", ""),
              ("Mamorona 3 fehezanteny manoritsoritra.", "Mamorona.", "Asa samirery", "Kahie",
               "Tombana : LI 1a")],
             LESONA_12, EXOS_12, FANITSIANA_12, LOHARANO_12,
             faritana=FAR, faritana_sous="LI 1a · herinandro 1→7 sy 28→33 · ora 20",
             fitaovana=FITA),
    fiche_t6(ZT, "Ny mpanoratra : Jean NARIVONY (1898-1980)", "LII 2a", "22→27", 14,
             [("Inona no mpanoratra malagasy fantatrao ?", "Mamaly.", "Asan-tarika", "—", ""),
              ("Lazao ny lohateny + ny sary tantara (timeline).", "Mihaino.", "Asa iombonana",
               "Solaitrabe", "FRP p.63."),
              ("Mamaky ny tantana (fizarana 4) : inona no mifandray amin'ny fianakaviana, ny "
               "sekoly, ny asa, ny sangan'asa?", "Mamaky.", "Asa mifampiha", "Kahie", ""),
              ("Fenoy ny tabilao taona / boky.", "Mamaly.", "Asa samirery", "Tabilao", ""),
              ("Tsilo taona ↔ zava-niseho (FANITSIANA).", "Mamaly.", "Asa iombonana",
               "Solaitrabe", ""),
              ("Lazao amin'ny teninao ny antony iheverana azy ho mpanoratra ho an'ny ankizy.",
               "Mamaly.", "Asa samirery", "—", "Tombana : LII 2a")],
             LESONA_13, EXOS_13, FANITSIANA_13, LOHARANO_13,
             faritana=FAR, faritana_sous="LII 2a · herinandro 22→27 · ora 20",
             fitaovana="Soratra momba ny mpanoratra + sary"),
    fiche_t6(ZT, "Santionany amin'ny asa sorany", "LII 2b", "22→27", 15,
             [("Mamerina: iza i Jean Narivony? Inona no boky fantatra?", "Mamaly.",
               "Asan-tarika", "—", "LII 2a."),
              ("Mamaky ny santionany 4 (amin'ny feo mazava, amin'ny fihainoan'ny felam-ponina).",
               "Mamaky.", "Asa iombonana", "Solaitrabe", "FRP p.68-71."),
              ("Inona no lohahevitra ao amin'ny tononkalo tsirairay?", "Mamaly.", "Asa mifampiha",
               "Tabilao", ""),
              ("Karohy ny teny sarotra ary ampiasao amin'ny fehezanteny vaovao.", "Mamaly.",
               "Asa samirery", "Rakibolana", "Tsy misy dikany voforako : jereo ny *note*."),
              ("Isa ny andininy sy ny andalana (FANITSIANA).", "Mamaly.", "Asa iombonana",
               "Solaitrabe", ""),
              ("Safidio andininy iray hanolorana an-dReny sy namana.", "Mamorona.",
               "Asa samirery", "Kahie", "Tombana : LII 2b")],
             LESONA_14, EXOS_14, FANITSIANA_14, LOHARANO_14,
             faritana=FAR, faritana_sous="LII 2b · herinandro 22→27 · ora 20",
             fitaovana="Tononkalo voasoratra"),
    fiche_t6(ZT, "Ny tononkalo : andininy, ngadona, rima", "LII 2d", "8→14", 16,
             [("Mamerina ny *andininy* sy ny *andalana* (LII 2b).", "Mamaly.", "Asan-tarika",
               "—", "Santionany : 7 andininy ao amin'ny *Takariva*."),
              ("Lazao ny lohateny sy ny famaritana 3 (ngadona, tsaikona, ba).", "Mihaino.",
               "Asa iombonana", "Solaitrabe", "FRP p.71."),
              ("Jereo ny vanin'andalana : *lila*, *ralila*, *taralila* — inona no miova?",
               "Mamaly.", "Asa mifampiha", "Sary", ""),
              ("Zarao ny karazana rima (mifanjohy / mifaningotra / mifampisakambina).", "Mamaly.",
               "Asa samirery", "Kahie", ""),
              ("Mariky ny rima amin'ny santionany roa (FANITSIANA).", "Mamaly.", "Asa iombonana",
               "Solaitrabe", ""),
              ("Mamorona andininy iray (4 andalana) misy rima *aa bb*.", "Mamorona.",
               "Asa samirery", "Kahie", "Tombana : LII 2d")],
             LESONA_15, EXOS_15, FANITSIANA_15, LOHARANO_15,
             faritana=FAR, faritana_sous="LII 2d · herinandro 8→14 · ora 20",
             fitaovana="Tononkalo + sary rima"),
]

FICHE = {"FICHES": FICHES}
