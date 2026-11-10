# -*- coding: utf-8 -*-
"""sary_holo.py — **ampifandraiso ny sary amin'ny lesona** ihany ao amin'ny « Malagasy T6 V1 ».

Azy ihany ny atao : **tsy misy** paragrafo faingana, **tsy misy** tabilao ovana, **tsy misy**
teny noveny ao amin'ny rakitry ny mpampianatra. Ireto no singa roa monja :

1. sary inline mitsangana + tarika fanazavana (légende) eo ambanin'ny sary — **ao anaty
   `LESONA :` ihany** (tsy ao amin'ny takela-panomanan-desona, tsy ao amin'ny
   `FANAZARAN-TENA` na `FANITSIANA`) ;
2. `<w:updateFields w:val="true"/>` ao amin'ny `word/settings.xml`, ka Word na LibreOffice
   **manavao ny isan'ny pejy amin'ny SOMMAIRE ho azy** rehefa misokatra ny rakitra.

Fomba fanasana
--------------
    ./run.sh src/sary_holo.py --andrera      # fijery ny toerana (tsy misy rakitra vaovao)
    ./run.sh src/sary_holo.py --prompts      # ny teny fanazavana (prompt) ambiko ho an'ny
                                             # sary TSY MBOLA misy (fanampiny isaky ny 10)
    ./run.sh src/sary_holo.py               # build : output/Malagasy_T6_V1_SARY_J-Learn.docx
    ./run.sh src/sary_holo.py --fikajy        # fanamarinana : ny V1 ao anaty rakitra vaovao
                                             # (tarika rehetra, filaharana), ny sary rehetra
                                             # ao anaty lesona, ny tabilao tsy niova
"""
import io
import os
import re
import sys
import zipfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx                                                  # noqa: E402
from docx.enum.text import WD_ALIGN_PARAGRAPH              # noqa: E402
from docx.oxml import OxmlElement                            # noqa: E402
from docx.oxml.ns import qn                                  # noqa: E402
from docx.shared import Cm, Pt, RGBColor                     # noqa: E402

from sary_analyse import atao_misy, RAKITRA                  # noqa: E402

DOS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))       # /…/manuel-malagasy-t6
FODY = os.path.join(DOS, "sary")                            # JPEG ho an'ny build
RAKITRA_VAOVAO = os.path.join(DOS, "output", "Malagasy_T6_V1_SARY_J-Learn.docx")
STYLE = ("Flat vector-style illustration, soft muted colours (ochre, terracotta, sage green, "
         "dusty blue), simple clean shapes, primary-school textbook illustration, no visible "
         "faces (people seen from behind or in silhouette), no text, no letters, no numbers, "
         "no writing anywhere, no flag, no emblem, no watermark, landscape format 4:3.")

# ---------------------------------------------------------------- ny sary 43
# (seho, regex mamaky ny lohateny/fizarana arahin'ny sary, légende, anarana rakitra, prompt)
SARY = [
 # --- ZANA-TARANJA I — KOLONTSAINA -------------------------------------------------
 (1, r"Ara-kevitra : Ny tanindrazana", "Madagasikara — ny tany "
     "nipoiran'ny Malagasy rehetra", "s01_1",
     "Malagasy highland landscape at golden hour: terraced rice paddies stepping down a valley, "
     "a small village of simple houses at the foot of rounded hills, a few zebu grazing, soft "
     "haze."),
 (1, r"^Ny foko dia vondron'olona mihevitra", "Ny tanindrazana : tany nipetrahan'ny razana "
     "niandohana ka lovain'ny taranaka", "s01_2",
     "A Malagasy ancestral village: elders and children walking on a path between rice fields "
     "toward old brick houses, an old tree at the village centre, warm afternoon light; land "
     "handed down from the ancestors."),
 (1, r"Ara-kevitra : Ny teny hoe firenena", "Firenena : vondron'olona iray monina "
     "amim-pitiavana sy firaisan-kina ao anatin'ny faritra iray", "s01_3",
     "A large group of Malagasy villagers of all ages standing close together in a village "
     "square, arms linked, unity and family feeling, seen from behind, simple houses and hills "
     "behind."),
 (2, r"Ara-kevitra : Ny tontolo iainana", "Sary maneho ny tontolo iainana : ala, rano, "
     "tany", "s02_1",
     "A healthy natural environment in Madagascar in one clear scene: dense green forest on a "
     "hillside, a clean river with rocks, rice fields in front, birds flying, a zebu, fruit "
     "trees."),
 (2, r"^Ny endrika isehoan'ny fahasimban'ny tontolo iainana", "Sary maneho ny "
     "fahasimban'ny tontolo iainana", "s02_2",
     "A damaged environment, quiet and sad, no people: a cut-down hillside with tree stumps, "
     "red soil eroded by deep rain-washed gullies, a muddy blocked stream, dry cracked ground, "
     "smoke haze far away."),
 (2, r"^Ny fambolen-kazo", "Ny fisorohana : fambolen-kazo sy fiarovana ny honko", "s02_3",
     "Protection of nature, hopeful: children seen from behind planting small tree seedlings on "
     "a bare slope, mangrove seedlings along a calm shore, a watering can, a blank wooden sign "
     "post."),
 # --- ZANA-TARANJA II — LITERATIORA ------------------------------------------------
 (3, r"^Ny literatiora am-bava", "Literatiora am-bava : angano sy ohabolana nolovaina "
     "tamin'ny Ntaolo", "s03_1",
     "A Malagasy grandmother telling a story in the evening inside a simple traditional house, "
     "children and adults sitting around her listening, seen from behind, an oil lamp casting "
     "warm light and shadows on the wall."),
 (3, r"^Ny literatiora an-tsoratra", "Literatiora an-tsoratra : boky sy tononkalo", "s03_2",
     "Written literature still life: an open notebook with blank ruled pages, a fountain pen, a "
     "small stack of old books, reading glasses, on a plain wooden table near a window with "
     "soft daylight."),
 (4, r"^Ny tononkalo dia ahitana andininy sy andalana", "Andininy sy andalana : ny "
     "faritra miverimberina amin'ny faran'ny andalana", "s04_1",
     "A poem page shown as pure geometry: on a sheet, two groups of short horizontal strokes "
     "(four, gap, four), each stroke ending with a small coloured dot, the first group of dots "
     "terracotta and the second sage, so the repeating end pattern is visible."),
 (4, r"^Ny Firafitry ny Tononkalo", "Firafitry ny tononkalo : ny andininy jejeina mafy",
     "s04_2",
     "A child sitting at a wooden desk seen from behind, reading aloud a small open booklet held "
     "in both hands, a window with hills outside, calm classroom."),
 (5, r"^Ny ngadona:$", "Gadona : ny vaninteny tsindrina mafy ; tsaikona : ny malefaka",
     "s05_1",
     "A traditional Malagasy long wooden drum (patady) lying horizontally, two hands striking "
     "it: one hitting firmly with a large bold sound arc, one tapping gently with a thin small "
     "arc; rhythm marks drawn as one filled and one hollow circle alternating above the drum."),
 (5, r"^Ny rima mifanjohy :$", "Rima mifanjohy : ny andalana mifanaraka ny feon'ny farany",
     "s05_2",
     "Two children standing face to face in a village yard, each with an open mouth reciting, a "
     "small coloured ball floating between them at the same height, matching colours marking the "
     "two ends that rhyme; both children seen in profile without drawn facial features."),
 (6, r"^Sarin-teny tamberin-drenifeo", "Tamberim-peo : ny feo miverimberina ao anaty "
     "fehezanteny", "s06_1",
     "A large simple human ear in profile beside three identical sound waves repeating to the "
     "left, each wave the same shape and size, one shape echoed again and again; a small "
     "highlighted identical element in each wave."),
 (6, r"^Sarin-teny tamberin-janapeo", "Tamberin-janapeo : ny zana-peo mifanakaiky "
     "fanonana", "s06_2",
     "A mouth in profile speaking, four floating round bubbles of the same size above it, each "
     "bubble containing one simple circle shape repeated, connected by a soft arc; no "
     "characters inside the bubbles, only circles."),
 (7, r"^Sekoly nandrantoany fahalalana$", "Sekoly taloha : ny nianaran'ny poety (taona "
     "1900)", "s07_1",
     "An early twentieth-century highland school building in stone and wood with tall shuttered "
     "windows, a flagpole without a flag, small children in hats walking up steps carrying "
     "wooden slates, seen from behind, bare trees, soft morning light."),
 (7, r"^Santionany", "« Voronkely anaty akany, taitran-javatra nandalo »",
     "s07_2",
     "A tiny bird crouching in a simple twig nest on a tree branch, watching a dark storm front "
     "roll in over hills, a few leaves lifted by the wind, waiting; the mood of anxious hope."),
 (8, r"^Santionany", "« Akanga saraky ny ala … Zanak'omby lavi-kijana »",
     "s08_1",
     "A lost hen wandering alone at the edge of a dark forest, and a young calf standing far "
     "from its herd in an open field, both thin and hungry looking, evening light, two small "
     "figures in one landscape."),
 (8, r"^Ny bokiny$", "« Kintan'ny mamatonalina »", "s08_2",
     "A single bright star low above misty highland hills at dusk, a calm layer of haze over "
     "valleys, a distant silhouette of a village, deep dusty blue sky fading to ochre at the "
     "horizon; quiet and melancholic."),
 (9, r"^Lasa nitsangantsangana Rabe sy Ikoto mianaka$", "Mianaka : olona roa miara-mily "
     "tanana", "s09_1",
     "Two children of clearly different heights walking hand in hand along a village path "
     "between rice fields, seen from behind, one carrying a small school satchel."),
 (9, r"^Andeha maka kifafa", "Mihanaka : ny rano nanerana ny trano", "s09_2",
     "Clean water spreading across the plank floor of a simple house, reaching every corner, a "
     "traditional broom made of twigs leaning against the wall, an overturned bucket, no people."),
 (9, r"^Zava-miseho indraindray", "Avana : ny andohalambo makadiry eo amin'ny habakabaka",
     "s09_3",
     "A soft double rainbow arcing over wet green rice fields just after a rain shower, low "
     "clouds on the hills, a few drops still shining, no people."),
 # --- ZANA-TARANJA III — TSIPELINA -------------------------------------------------
 (10, r"^Ny teny ary eto dia mpampitohy", "Ary : ny teny mifamatotra", "s10_1",
     "Two children seen from behind jumping one long skipping rope together, the rope forming "
     "one continuous arc linking them, a village yard, warm late afternoon light."),
 (11, r"^Amin'ny teny verindroa dia ny fototeny ihany", "Verindroa : ny fototeny miverina "
     "indroa", "s11_1",
     "A hillside landscape where one simple shouted shape leaves a mouth and returns as the same "
     "shape reversed between two hills, an echo made visible; two identical footprints in the "
     "dust in the foreground."),
 (11, r"^a\. Manalefaka$", "Manalefaka ny dikany : « somary mararirary kely ilay "
     "tsindromina »", "s11_2",
     "A hand pressing gently on a small soft cushion placed on a hard wooden stool, the cushion "
     "sinking a little, feathers barely moving; the contrast between soft and hard, still life, "
     "no face."),
 (12, r"^rano \+ maso = ranomaso$", "Rano + maso = ranomaso", "s12_1",
     "One large simple eye with a single clear water drop falling from its lower lid, a few "
     "small tears, plain background, gentle and sad but calm."),
 (12, r"^tsara \+ maso = tsaramaso$", "Tsara + maso = tsaramaso", "s12_2",
     "Fresh green beans in their pods, a few pods opened showing small round beans inside, a "
     "wooden bowl, plain kitchen table, still life."),
 (12, r"^solo \+ maso = solomaso$", "Solo + maso = solomaso", "s12_3",
     "A small snail with a spiral shell on a wet green leaf, its two eye stalks raised and "
     "clearly visible as tiny round eyes, soft shadow, plain background."),
 (13, r"^Ny tovona$", "Mibaby : ny zaza ampiasan-damosina", "s13_1",
     "A Malagasy woman seen from behind walking on a path with a small baby strapped high on "
     "her back in a wrapped cloth, carrying a basket on her head, rice fields around her."),
 (13, r"^Ny tsirinteny sara-droa$", "Hatevina : ny teny mampiseho ny toetra", "s13_2",
     "A child standing in early morning cold, arms wrapped around itself, shivering, tiny "
     "breath of mist in the air, a thin blanket over the shoulders, seen from three quarters "
     "behind so the face is not drawn."),
 (14, r"^MPANORITRA$", "Mpanoritra : ny teny mampahalala ny maha-olona an'ny anarana",
     "s14_1",
     "A family gathering in a simple house where an elderly woman holds a newborn aloft in a "
     "blessing gesture, everyone seen from behind, a low table with a bowl of water, morning "
     "light through shutters."),
 # --- ZANA-TARANJA IV — FITSIPIKY NY TENY ------------------------------------------
 (15, r"^1\. Mpamari-toetra foto-teny$", "Mpamari-toetra : kely sy lehibe", "s15_1",
     "Two houses of the same simple style side by side on flat ground, one clearly small and "
     "one clearly large, a small child standing next to the small one for scale, plain sky."),
 (15, r"^2\. Mpamari-toetra sampanteny$", "Mpamari-toetra : madio sy maloto", "s15_2",
     "Same corner of a classroom drawn twice in two panels side by side: left the floor swept "
     "clean with benches aligned and a full water jar, right the same corner untidy with "
     "scattered leaves and a tipped bucket; split by a thin vertical line, no people."),
 (16, r"^Misy karazany enina ny mpamaritra isa", "Mpamaritra isa : vondrona iray, roa, "
     "telo", "s16_1",
     "Small grey pebbles on sand arranged in four tidy groups of one, then two, then three, then "
     "four stones, each group separated by clear space, seen from above, no numerals, only the "
     "quantities."),
 (16, r"^Mpamaritra isa milaza ampahany", "Mpamaritra isa milaza ampahany : ny voazaraka",
     "s16_2",
     "A round cake on a wooden plate cut in half, then a quarter taken aside, and beside it a "
     "papaya halved with seeds visible; a knife, plain cloth, top view slightly tilted."),
 (17, r"^Fomba fandrasana teny$", "Fandrasan-teny : lasa, ankehitriny, ho avy", "s17_1",
     "A three-panel strip showing the same child with the same ball: left panel fallen dry "
     "leaves and a low sun, middle panel green grass and bright midday sun, right panel a bare "
     "branch with one tiny bud and a rising sun; each panel separated by a thin line, child "
     "seen from behind in all three."),
 (18, r"^ny matoantenin' ny iharana", "Fatorana ny omby", "s18_1",
     "A man seen from behind tying a rope around the neck of a humped zebu to a wooden post in a "
     "village yard, the rope clearly looping, dust on the ground, simple houses behind."),
 (18, r"^ny matoantenin' ny mpandray", "Velarana tsihy ny vahiny", "s18_2",
     "Two hands unrolling a woven straw mat in front of the low doorway of a traditional house, "
     "a guest's sandals already placed aside, warm light inside, only hands and mat visible."),
 (19, r"^Miasa ny olona\. Maninona", "« Miasa ny olona » : ny EM — izay manambara ny asa", "s19_1",
     "Village work in one scene: one person pounding rice in a wooden mortar, another carrying "
     "two water buckets on a shoulder pole, a third mending a net, all seen from behind, late "
     "afternoon."),
 (19, r"^Milalao baolina i Lita", "« Milalao baolina i Lita » sy « Lalaovin'i Lita ny "
     "baolina » : ny EM sy ny L", "s19_2",
     "A girl throwing a ball up in a school yard, the ball floating above her with two thin "
     "motion arcs, a zebu and a low wall behind, seen from three quarters behind so no face."),
 (20, r"^Atero ilay vola$", "« Aterina ilay vola » → « Atero ilay vola » : ny tovana "
     "filaza mandidy", "s20_1",
     "One hand clearly passing a few small coins into another open hand on a plain wooden "
     "counter, only the two hands and forearm visible, direct gesture, no faces."),
 (20, r"^Mianatra tsara sy miasa mafy ianao", "« Mianara tsara ary miasà mafy »", "s20_2",
     "A child bent over a small desk writing with a pencil by lamplight at night, an open "
     "notebook with blank ruled pages, seen from behind, a parent standing near the door with a "
     "hand raised in encouragement, no faces."),
 # --- ZANA-TARANJA V — ASA AN-TSORATRA ---------------------------------------------
 (21, r"^1\. Famaritana$", "Seho ho dirijina : tanimbary sy omby, tanàna, hazo", "s21_1",
     "A wide describable scene to write about: terraced rice fields with a zebu and a farmer, a "
     "small village of brick houses on a hill, a river glinting, tall trees at the edge, "
     "morning mist, layered foreground and background for detailed description."),
 (21, r"^3\. Ny mampiavaka azy$", "Soritsoritra ny zavatra hita", "s21_2",
     "A child seen from behind sitting under a tree, an open notebook on the knees, and above "
     "the head a large soft thought cloud containing the small scene being described: rice "
     "terrace, zebu, river, house; the cloud edge clear, no faces."),
]

assert len(SARY) == 43, "ny sary dia 43 : %d" % len(SARY)


# ---------------------------------------------------------------- ny fitandremana
def seho_pipar(d):
    """{seho: (paragrafo, §LESONA, §FANAZARAN-TENA)} — ny window raikitra."""
    P = d.paragraphs
    out = {}
    for i, p in enumerate(P):
        m = re.match(r"^SEHO (\d+) — ", p.text.strip())
        if m and i > 10:
            out.setdefault(int(m.group(1)), []).append(i)
    res = {}
    for n, its in sorted(out.items()):
        a = its[-1]                                   # ny taran-teny ao amin'ny votoatiny
        k = [j for j in range(a, len(P)) if P[j].text.strip() == "LESONA :"]
        f = [j for j in range(a, len(P)) if P[j].text.strip() == "FANAZARAN-TENA"]
        if k and f:
            res[n] = (P, k[0], f[0])
    return res


def mponina(d):
    """manamora ireo mpanolo-tsaina : {seho: [(anchor_idx, [row, …]), …]}"""
    win = seho_pipar(d)
    renke = {}
    for row in SARY:
        n = row[0]
        if n not in win:
            raise SystemExit("TSY HITATAO ny SEHO %d" % n)
        P, a, b = win[n]
        hit = [j for j in range(a, b) if re.search(row[1], P[j].text.strip())]
        if not hit:
            renke.setdefault(("TSY HITAFARANY", n), []).append(row)
            continue
        renke.setdefault(hit[-1], []).append(row)
    return renke


# ---------------------------------------------------------------- ny fanoratana
def fanampy_sary(P, anchor, row, d, hatelina=11.5):
    _, _, legende, anarana, _ = row
    sarina = os.path.join(FODY, anarana + ".jpg")
    p_img = d.add_paragraph()
    p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_img.paragraph_format.space_before = Pt(8)
    p_img.paragraph_format.space_after = Pt(0)
    r = p_img.add_run()
    r.add_picture(sarina, width=Cm(hatelina))
    p_cap = d.add_paragraph()
    p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_cap.paragraph_format.space_before = Pt(2)
    p_cap.paragraph_format.space_after = Pt(8)
    rc = p_cap.add_run("Sary : %s" % legende)
    rc.italic = True
    rc.font.size = Pt(9)
    rc.font.color.rgb = RGBColor(0x44, 0x44, 0x44)
    anchor._p.addnext(p_cap._p)                       # addnext = manaraka → ampiasaro
    anchor._p.addnext(p_img._p)                        # ny faharoa vao ny voalohana


def atao_sary(d):
    """ampahao ny sary rehetra efa misy ao amin'ny `sary/`."""
    renke = mponina(d)
    resaka = []
    voky = 0
    for anchor_idx in sorted((k for k in renke if isinstance(k, int)), reverse=True):
        for row in renke[anchor_idx][::-1]:
            if not os.path.exists(os.path.join(FODY, row[3] + ".jpg")):
                resaka.append("  (tsy mbola)  SEHO %2d  %s" % (row[0], row[3]))
                continue
            P = d.paragraphs
            fanampy_sary(P, P[anchor_idx], row, d)
            voky += 1
    tsy_hitafarany = [k for k in renke if isinstance(k, tuple)]
    for k in tsy_hitafarany:
        for row in renke[k]:
            resaka.append("  TSY HITAFARANY SEHO %2d  %s" % (row[0], row[1]))
    # ny settings : avereno ny sommaire
    seto = d.settings.element
    if seto.find(qn("w:updateFields")) is None:
        uf = OxmlElement("w:updateFields")
        uf.set(qn("w:val"), "true")
        seto.append(uf)
    return voky, resaka


# ---------------------------------------------------------------- ny fitarihana
def andrera():
    d = docx.Document(atao_misy())
    win = seho_pipar(d)
    P = d.paragraphs
    ok = 0
    for row in SARY:
        n, reg = row[0], row[1]
        a, b = win[n][1], win[n][2]
        hit = [j for j in range(a, b) if re.search(reg, P[j].text.strip())]
        mark = ("OK  §%-4d %s" % (hit[-1], P[hit[-1]].text.strip()[:44])) if hit else \
               "!!  TSY HITAFARANY"
        misy = "sary ✓" if os.path.exists(os.path.join(FODY, row[3] + ".jpg")) else "sy mbola"
        print("SEHO %2d %-8s %-8s %s   ← %s" % (n, row[3], misy, mark, reg[:34]))
        ok += bool(hit)
    print("\nankre hita : %d / %d   |   sary efa misy : %d / %d"
          % (ok, len(SARY), len([r for r in SARY if os.path.exists(
              os.path.join(FODY, r[3] + ".jpg"))]), len(SARY)))


def prompts():
    for row in SARY:
        chemin = os.path.join(FODY, row[3] + ".jpg")
        if os.path.exists(chemin):
            continue
        print("\n[%s] sary %s\n  %s  %s" % (row[0], row[3], row[4], STYLE))


def fikajy():
    """ny V1 dia hita ao amin'ny rakitra vaovao, **tanteraka sy araka ny filaharana** ; ny
    fanampiny rehetra dia tsy mety ho an'ny sary ihany (sary + « Sary : … »)."""
    fanaka = lambda x: re.sub(r"\s+", " ", x).strip()
    ancien = [fanaka(p.text) for p in docx.Document(atao_misy()).paragraphs if p.text.strip()]
    d = docx.Document(RAKITRA_VAOVAO)
    nouveau = [fanaka(p.text) for p in d.paragraphs if p.text.strip()]
    i, fanampiny = 0, []
    for ligne in ancien:
        while i < len(nouveau) and nouveau[i] != ligne:
            fanampiny.append(nouveau[i])
            i += 1
        if i >= len(nouveau):
            raise SystemExit("DIKA : very tao amin'ny rakitra vaovao : %r" % ligne[:70])
        i += 1
    fanampiny += nouveau[i:]
    tsy_azo_ekena = [x for x in fanampiny if not x.startswith("Sary : ")]
    win = seho_pipar(d)
    P = d.paragraphs
    anaty_lesona = 0
    for n, (pp, a, b) in win.items():
        for j in range(a, b):
            if pp[j]._p.findall(".//" + qn("w:drawing")):
                anaty_lesona += 1
    with zipfile.ZipFile(RAKITRA_VAOVAO) as z:
        media = [x for x in z.namelist() if x.startswith("word/media/")]
        seto = z.read("word/settings.xml").decode("utf-8")
    print("tarika amin'ny V1 : %d · voatazona rehetra, filaharana ihany ✓" % len(ancien))
    print("fanampiny : %d (légende %d + sary) · zavatra hafa : %d"
          % (len(fanampiny), len([x for x in fanampiny if x.startswith("Sary : ")]),
             len(tsy_azo_ekena)))
    print("sary anaty lesona ihany : %d · tabilao : %d (V1 : 55) · media : %d · "
          "updateFields : %s" % (anaty_lesona, len(d.tables), len(media),
                                 "updateFields" in seto))
    aloha = "\n".join(fanaka(c.text) for t in docx.Document(atao_misy()).tables for r in t.rows
                      for c in r.cells)
    ao_reto = "\n".join(fanaka(c.text) for t in d.tables for r in t.rows for c in r.cells)
    print("soratra anaty tabilao 55 : %s (%d karakterina)"
          % ("TSY NIOVA" if aloha == ao_reto else "DIOVA — DIKA LEHIBE !", len(ao_reto)))
    if aloha != ao_reto:
        raise SystemExit("DIKA : nisy tabilao novaina")
    if tsy_azo_ekena:
        raise SystemExit("DIKA : nisy nadika : %r" % tsy_azo_ekena[:3])
    if anaty_lesona != len([x for x in fanampiny if x.startswith("Sary : ")]):
        raise SystemExit("DIKA : isa tsy mitovy (sary / légende)")
    print("TUATUA")


def builder():
    d = docx.Document(atao_misy())
    voky, resaka = atao_sary(d)
    os.makedirs(os.path.dirname(RAKITRA_VAOVAO), exist_ok=True)
    d.save(RAKITRA_VAOVAO)
    for l in resaka:
        print(l)
    print("\necrit : %s  (%d sary ampiasaina / %d soasoa, %d mbola tokony hojerena)"
          % (RAKITRA_VAOVAO, voky, len(SARY), len(resaka)))
    with zipfile.ZipFile(RAKITRA_VAOVAO) as z:
        s = z.read("word/settings.xml").decode("utf-8")
    print("updateFields : %s · taille : %d o" % ("updateFields" in s,
                                                 os.path.getsize(RAKITRA_VAOVAO)))


if __name__ == "__main__":
    if "--andrera" in sys.argv:
        andrera()
    elif "--prompts" in sys.argv:
        prompts()
    elif "--fikajy" in sys.argv:
        fikajy()
    else:
        builder()
