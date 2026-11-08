# -*- coding: utf-8 -*-
"""data_seho1.py — ny **SEHO 1 « Ny tanindrazana sy ny firenena »** voarindra araka ny boky natao an-
tanan'ny mpampianatra.

Loharano : `origin/main` ⟶ « Nos manuels/Manuel de Malagasy - Classe de T6 (1).docx »,
SEHO 1 (n° 1/21) ; ny sisiny voasento : `refs/14_MANUELA-T6-TANANA.txt`.

**Zavatra noaovan'ny `src/gen_seho1.py`** ity rakitra ity : avereno amin'ny filaharana
ao ambadika raha miova ny boky, fa aza ovana an-tanana (ny index ao amin'ny boky no
mitanana ny fanonona, ka ny tsipelina iray anatin'ny boky dia tafiditra ato koa : « Ny 
fanevam-pirenana » (tsy « -pirenena »), « Ny hiram-pirenena ;. », « any an-tanin' olona »,« lova soan' ny », « tanindrazana ) », ny « Taiza », ary ny taran-teny
a) b) d) tsy misy c). Ny fizarana « Fanampiana » aorian'ny 5 ihany no an'ny
manuela J-Learn — voamarika ho azy ao amin'ny LOHARANON-KEVITRA.

`rafitra = "tanana"` : mamokatra lohateny hoe « SEHO 1 — … », marika « n° 1/21 » ary
« Isan'ny seho : 21 » ny mpamorina (`build_manuel_t6.fiche`).
"""

LT = 'Ny tanindrazana sy ny firenena'
SEHO = 1
ISAN = 21
TAKELO_NOTE = "n° 1/21"
ZANA_TARANJA = 'Kolontsaina'
LOHAHEVITRA = 'Kolontsaina'
VPM = 'Maneho ny maha Malagasy'
FITAOVANA = "Sarin-tanin'i Madagasikara, sainam-pirenena"
FANOVOZAN_KEVITRA = 'PE T6 : Ny tanindrazana sy ny firenena'

# ny dingana 6 + Famerenana + Tombana : teny-teny avy amin'ny tabilao 13r
GRILLE = [
    ['I. Famerenana (5 min)'],
    ['Famerenana', 'Taiza ianao no teraka ?', 'V.A. : Samy hafa ny valiny arakaraka ny mpianatra.', 'Fanontaniana sy Valiny (F/V)', 'Solaitrabe', '----'],
    ['II. LESONA VAOVAO (20 min)'],
    ['1. Fitarihan-tsaina', "Asehoy ny sarin-tanin'i Madagasikara sy ny sainam-pirenena.", 'Mijery, mihaino.', 'Brainstorming / Tosa-kevitra', '', ''],
    ['2. Fanolorana', "Soraty eo amin'ny solaitrabe ny lohateny : “Ny tanindrazana sy ny firenena”.\nLazao ny tanjona : “Androany dia hianatra ny tanindrazana sy ny firenena isika.”", "Mihaino, mandika ny lohateny ao amin'ny kahie.", 'Asa iombonana', 'Solaitrabe', ''],
    ['3. Fandinihana', "Soraty eo amin'ny solaitrabe :\nSarin-tanin'i Madagasikara\nSainam-pirenena malagasy", 'Mamaky mangina, avy eo mamaky mafy.', 'Asa tsirairay, avy eo asa iombonana', "Lahatsoratra / fehezanteny eo amin'ny solaitrabe", ''],
    ['4. Famakafakana', "1. Inona no hitanareo eo amin'ny sary voalohany ?\n2. Inona ny loko hita eo amin'ny sainam-pirenena ?\n3. Taiza no nipetrahan'ny razanareo taloha ?", "V.A. :\n1. Sarin-tanin'i Madagasikara.\n2. Mena, fotsy, maitso.\n3. Samy hafa ny valiny arakaraka ny mpianatra.", 'Fanontaniana sy Valiny (F/V), asa an-tarika', '', ''],
    ['5. Fandravonana', "Soraty eo amin'ny solaitrabe :\nNy tanindrazana dia tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara.\nNy firenena dia vondron'olona iray monina amim-pitiavana sy firaisan-kina ao anatin'ny faritra iray, mitovy fiteny, manaraka kolontsaina na fomban-drazana iraisana.", "Mandika ny fehin-kevitra ao amin'ny kahie.", 'Asa iombonana', 'Solaitrabe, kahie', ''],
    ['6. Fampiharana', "Fenoy :\n1. Ny tanindrazana dia ____ nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara.\n2. Ny firenena dia vondron'olona iray monina amim-pitiavana sy ____ ao anatin'ny faritra iray.", 'Miasa isan-dabilio.\nV.A. : 1. tany ; 2. firaisan-kina', 'Isan-dabilio / Isan-tarika', 'Kahie, solaitrabe', ''],
    ['III. Tombana (5 min)'],
    ['Tombana', "Avy amin'ny teny roa inona ny hoe tanindrazana ?", 'Mamaly an-tsoratra.\nV.A. : Tany ; razana.', 'Asa tsirairay', 'Kahie', ''],
]

# ny fizarana 1→5 an'ny boky, teny-teny (h2 = voalamina 1..5 ; bul = ny lisitry)
SESO_TANANA = [
    ['p', 'Ny tanindrazana'],
    ['h2', 'Famaritana'],
    ['p', 'a. Ny tanindrazana'],
    ['p', "- Ara-piforonan-teny : tany ; razana. Tanin-drazana, tanin'ny razana"],
    ['p', "- Ara-kevitra : Ny tanindrazana, amin'ny kolontsaina malagasy, dia tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara, mety ho toerana nahalatsahan'ny tavony, teorana misy fasan-drazana, tanàna na faritra na koa firenena izay niavin'ny loharano nipoirana na ny razana niharana."],
    ['p', 'b. Ny firenena'],
    ['p', '- Ara-piforonan-teny : fi+reny+ana ; fi-ren(y)-a(e)na'],
    ['p', "- Ara-kevitra : Ny teny hoe firenena dia vondron'olona iray monina amim-pitiavana sy firaisan-kina ao anatin'ny faritra iray, mitovy fiteny, manaraka kolontsaina na fomban-drazana iraisana, ary matetika mifamatotra amin'ny fanjakana na fitondram-panjakana tokana."],
    ['p', "Araka ny Rakibolana : « Vahoaka iray tany, teny sy fomba, ka miray monina amin'ny fanjakana iray »."],
    ['h2', 'Fomba hamantarana ny mpiray tanindrazana'],
    ['p', "Ny foko dia vondron'olona mihevitra ny tenany ho iray razana, iray tantara sy fedrà, iray kolontsaina, iray fiteny na fitenim-paritra, iray fomba fiainana."],
    ['h2', "Adidy tanterahin'ny olona tia tanindrazana"],
    ['p', "Toetra tokony hananan'ny tia tanindrazana :"],
    ['bul', ['Ny fanajana ny fitsipika sy ny lalàna mifehy ;', 'Ny fifankatiavana sy ny firaisankina ;', 'Ny fiarovana ny tany sy ny fikarakarana azy (ny tsy fivarotana tanindrazana ) ;', "Ny fahasahiana mitolona ho an'ny tanindrazana."]],
    ['p', "Araka ny fandaharam-pibeazana : fikarakarana ny lova navelan'ny razana ; fandraisana andraikitra sy adidy ; fanajana ny satam-pirenena."],
    ['h2', 'Maha firenena ny firenena'],
    ['bul', ['Ny tenim-pirenena ;', 'Ny hiram-pirenena ;.', 'Ny fanevam-pirenana ;', 'Ny filoham-pirenena na ny mpitondra ;', 'Ny kolontsaina ;', 'Ny mponina ;', 'Ny tany,', 'Ny hasin’ny tany na fady.']],
    ['h2', 'Ohabolana mahakasika ny tanindrazana'],
    ['tononkalo', [['“Izay mandoro tanety, mandoro tanindrazana.”', "“Aleo mahantra an-tanindrazana, toy izay malahelo any an-tanin' olona.”", "“Ny fitiavan-tanindrazana no lova soan' ny taranaka.”", '“Tsy misy hariana, fa ny iray hetra, ary ny iray tanindrazana.”']]],
]

# ny « Fanampiana » : an'ny manuela J-Learn, voamarika ho azy
ANAKO = [
    ['p', "Ny singa azo andimbana hoe *ara-piforonan-teny* dia voalaza amin'ny hoe : « *hilaza ny azo hamaritana ny tanindrazana miainga amin'ny fandravonana ny teny sy* *fandravonana ny hevitra* »."],
    ['p', "Ohatra avy amin'ny FRP : ny adidin'ny taranaka"],
    ['ohatra', ['« *Raha toa ka tsapanao ny jaly sy tomany* »', "« *Niainan-drazantsika tamin'ny fanjanahantany* »", '« *Dia ataovy an-tsaina tsara ny jaly farahidy* »', "« *Tratran'ny tsy fidiny fony tamin'izany.* »"]],
    ['note', "Ireo zana-dahatsoratra ireo dia voasoratra ao amin'ny FRP T6, LFK 6i, teo ambany lohateny hoe « NY ZO SY ADIDY ARY ANDRAIKITRA / Ny adidin'ny taranaka amin'ny tanindrazana ». Miverina indroa ao aminy ny teny hoe *jaly*."],
    ['p', "Ny PE dia manoro ny mpianatra : « *handrasa ny teny « firenena »* », « *hamaritra ny atao hoe « firenena » araka ny fahafantarany azy sy araka ny teny* *niaviany* », ary « *hitrandraka tahirin-kevitra hahafahana mamantatra ny tantaran'ny* *firenena, ny fanevany, ny teny ampiasaina ao amin'ny fireneny, ny hirany ary ny* *harenany* »."],
    ['ohatra', ['« *Mijoroa ianao fa tia tanindrazana* »', '« *Zo anao mantsy ny hifidy malalaka* »']],
    ['note', "Famaranana ny « Ny fitondran-tena mifandraika amin'ny fifidianana » an'ny FRP T6 : ireo teny roa ireo no teny farany amin'ireo andininy (tak. 33). Mampiseho ny *satam-pirenena* — izay anisan'ny adidy — ireo andalana ireo."],
    ['bul', ['*Tosa-kevitra* · *Famakiana lahatsoratra* · *Fijerena sary* · *Fifanakalozan-kevitra* · *Adihevitra*']],
]

LESONA = SESO_TANANA + [
    ['p', "Fanampiana : ny singa tandrefina an'ny PE sy ny ohatra an'ny FRP — tsy ampahany amin'ny lesona 1→5 io."],
] + ANAKO

# FANAZARAN-TENA : baiko 3 an'ny boky (teny-teny) + fanontaniana vaovao 1
EXOS = [
    {'consigne': 'Fenoy', 'banga': ["a) Ny tanindrazana dia ____ nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara.", "b) Ara-piforonan-teny, ny tanindrazana dia avy amin'ny teny ____ sy razana.", "d) Ny firenena dia vondron'olona iray monina amim-pitiavana sy ____ ao anatin'ny faritra iray."]},
    {'consigne': 'Ampifandraiso', 'tsilo': (['1. tanindrazana', '2. firenena'], ["a. vondron'olona iray monina amim-pitiavana sy firaisan-kina ao anatin'ny faritra iray", "b. tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara"])},
    {'consigne': "Soraty toetra roa tokony hananan'ny tia tanindrazana", 'banga': ['a) Toetra 1', 'b) Toetra 2']},
    {'consigne': 'Mamaly araka ny lesona ny fanontaniana manaraka :', 'banga': ['a) Inona no atao hoe tanindrazana ara-kevitra ?', "b) Inona avy ny toetra tokony hananan'ny olona tia tanindrazana ?", "c) Taiza no monina ny vondron'olona mampisy firenena ?"]},
]

# FANITSIANA : ny valiny, 1:1 amin'ny baiko (araka ny boky)
FANITSIANA = [
    {'banga': ['a) tany', 'b) tany', 'd) firaisan-kina']},
    {'tsilo': (['1. tanindrazana', '2. firenena'], ["a. vondron'olona iray monina amim-pitiavana sy firaisan-kina ao anatin'ny faritra iray", "b. tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara"])},
    {'banga': ['a) Ny fifankatiavana sy ny firaisankina', 'b) Ny fiarovana ny tany sy ny fikarakarana azy']},
    {'banga': ["a) Ny tanindrazana, amin'ny kolontsaina malagasy, dia tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara, mety ho toerana nahalatsahan'ny tavony, teorana misy fasan-drazana, tanàna na faritra na koa firenena izay niavin'ny loharano nipoirana na ny razana niharana.", "b) Ny fanajana ny fitsipika sy ny lalàna mifehy ; Ny fifankatiavana sy ny firaisankina ; Ny fiarovana ny tany sy ny fikarakarana azy (ny tsy fivarotana tanindrazana ) ; Ny fahasahiana mitolona ho an'ny tanindrazana.", "c) Ao anatin'ny faritra iray, amim-pitiavana sy firaisan-kina."]},
]

# LOHARANON-KEVITRA
LOHARANO_TANANAO = [
    'PE T6 (septambra 2026), ZANA-TARANJA I « MALAGASY, KOLONTSAINA ARY FIARAHAMONINA — Ny tanindrazana sy ny firenena » : Faharetany ora 20 ; Vontoatiny, Sahanasa, Tetika amam-paika, Fitaovana sy Tombana — extrait : refs/10_PE_T6_ZANATARANJA.txt.',
    "FRP T6 éd. Oktobra 2026, LFK 6i « Support de cours — NY ZO SY ADIDY ARY ANDRAIKITRA / Ny adidin'ny taranaka amin'ny tanindrazana ».",
    'FRP T6 éd. Oktobra 2026, « Manan-danja sy mahery ny safidinao » (tak. 33).',
]

LOHARANO = [
    "Boky natao an-tanana : « Manuel de Malagasy - Classe de T6 », SEHO 1 — Ny tanindrazana sy ny firenena (n° 1/21). Ny famaritana, ny adidy, ny maha firenena, ny ohabolana, ny dingana 6 an'ny takela, ny baiko fanazaran-tena sy ny valiny amin'ity lesona ity dia voakopi teny-teny avy amin'io boky io (sisiny voasento : refs/14_MANUELA-T6-TANANA.txt) ; ny « Fanampiana » aorian'ny fizarana 5 ihany no an'ny manuela J-Learn.",
] + LOHARANO_TANANAO
