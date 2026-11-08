# -*- coding: utf-8 -*-
"""gen_seho1.py — mamoaka ny `src/data_seho1.py` avy amin'ny boky natao an-tanana (SEHO 1).

Fikasan-tanana, fa tsy fifindràna an-tanana : ny atiny an'ny mpampianatra dia **alaina amin'ny
laharana anaty** (index) avy amin'ny `word/document.xml` n'ny
« Nos manuels/Manuel de Malagasy - Classe de T6 (1).docx » (`origin/main`), ka tsy misy akony ny
fefy soratako : raha misy tsipelina tsy mety ao amin'ny boky (oh. « fanevam-pirenana ») dia
tazonina araka izany, fa tsy haverina amin'izay heverako.

    mkdir -p ~/.tanana && git show "origin/main:Nos manuels/Manuel de Malagasy - Classe de T6 (1).docx" > ~/.tanana/t6_main.docx
    ./run.sh src/gen_seho1.py

Ny « Fanampiana » aorian'ny fizarana 5 dia an'ny manuela J-Learn : alaina amin'ny
`data_zt16.py` (LESONA_A / LOHARANO_A) — na amin'ny `data_seho1.py` taloha raha efa misy, mba
ho idempotent ny fampiharana indray.
"""
import ast
import io
import os
import re
import sys
import zipfile

DOS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCX = os.environ.get("JLEARN_TANANA", "/home/user/.tanana/t6_main.docx")
sys.path.insert(0, os.path.join(DOS, "src"))

BAND = {"I": "I. Famerenana (5 min)", "II": "II. LESONA VAOVAO (20 min)",
        "III": "III. Tombana (5 min)"}


def paragrafo(frag):
    """iray andalana isaky ny paragrafo ao anaty singa XML"""
    out = []
    for m in re.finditer(r"<w:p[ >].*?</w:p>", frag, re.S):
        t = re.sub(r"\s+", " ", "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", m.group(0)))).strip()
        if t:
            out.append(t)
    return out


x = zipfile.ZipFile(DOCX).read("word/document.xml").decode("utf8")
seq = []
for b in re.split(r"(<w:tbl>.*?</w:tbl>)", x, flags=re.S):
    if b.startswith("<w:tbl>"):
        for r in re.findall(r"<w:tr[ >].*?</w:tr>", b, re.S):
            seq.append(("T", ["\n".join(paragrafo(c)) for c in
                               re.findall(r"<w:tc[ >].*?</w:tc>", r, re.S)]))
    else:
        for t in paragrafo(b):
            seq.append(("P", t))

i = [k for k, (kd, v) in enumerate(seq) if isinstance(v, str) and v.startswith("SEHO 1 —")][0]
j = [k for k, (kd, v) in enumerate(seq) if isinstance(v, str) and v.startswith("SEHO 2 —")][0]
bloc = seq[i:j]


def borne(txt):
    return [k for k, (kd, v) in enumerate(bloc) if kd == "P" and v == txt][0]


k_takela, k_lesona = borne("TAKELA-PANOMANAN-DESONA"), borne("LESONA :")
k_fz, k_fan = borne("FANAZARAN-TENA"), borne("FANITSIANA")
P = lambda a, b: [v for kd, v in bloc[a:b] if kd == "P"]
T = lambda a, b: [v for kd, v in bloc[a:b] if kd == "T"]

# ---------------------------------------------------------------- en-tête (tabilao 1r)
sela = T(k_takela, k_lesona)[0]


def etiquette(txt):
    return [dict(re.split(r" ?: ?", c, 1) for c in [x.strip() for x in txt.split("\n")])][0]


gauche_etiq, droite_etiq = [etiquette(c) for c in sela]
LT = gauche_etiq.get("Lohateny", "").strip() or "Ny tanindrazana sy ny firenena"
CHAMPS = {"zana": gauche_etiq.get("Zana-taranja", "Kolontsaina").strip(),
          "loha": (gauche_etiq.get("Lohahevitra") or "Kolontsaina").strip(),
          "vpm": gauche_etiq.get("V. P. M", "Maneho ny maha Malagasy").strip(),
          "fitao": gauche_etiq.get("Fitaovana", "").strip(),
          "fanozan": gauche_etiq.get("Fanovozan-kevitra", "").strip()}
print("en-tête :", gauche_etiq, droite_etiq)

# ---------------------------------------------------------------- ny lalana (tabilao 13r)
GRILLE = []
for row in T(k_takela, k_lesona)[1:]:
    cells = [c for c in row if c.strip()]
    if not cells or cells[0].startswith("Dingana") or cells[0] in ("", "Mpampianatra"):
        continue                                        # ny lohateny : atao amin'ny mpamorina
    m = re.match(r"^([IVX]+)\.\s", cells[0])
    if len(cells) == 1 and m:
        GRILLE.append((BAND.get(m.group(1), cells[0]),))
    elif len(cells) >= 2:
        GRILLE.append(tuple([cells[0]] + (cells[1:] + [""] * 5)[:5]))

# ---------------------------------------------------------------- ny LESONA (fizarana 1→5)
lesona = P(k_lesona + 1, k_fz)[1:]         # afaka ny lohateny lehibe


def ligne_liste(l):
    return (len(l) <= 95 and not re.match(r"^(\d+\.|- |Araka |Toetra |Ny foko|[a-e]\. )", l)
            and not l.endswith(":"))


LESONA = []
k = 0
while k < len(lesona):
    l = lesona[k]
    if ligne_liste(l):
        run = []
        while k < len(lesona) and ligne_liste(lesona[k]):
            run.append(lesona[k])
            k += 1
        if len(run) >= 3:
            LESONA.append(["bul", run])
            continue
        LESONA.extend([["p", r] for r in run])
        continue
    m = re.match(r"^(\d+)\.\s+(.*)$", l)
    if m:
        LESONA.append(["h2", m.group(2).strip()])
    else:
        LESONA.append(["p", l])          # « a. Ny tanindrazana » : tandrany ny taran-teny
    k += 1
# ny ohabolana (farany) = tononkalo, fa tsy lisitra
# ny ohabolana farany = tononkalo (andininy), fa tsy lisitra misy puce
if LESONA and LESONA[-1][0] in ("bul", "p") and str(LESONA[-1][1] if LESONA[-1][0] == "p"
                                                     else LESONA[-1][1][0]).startswith("“"):
    bloc_ohab = LESONA.pop()
    ohab = bloc_ohab[1] if bloc_ohab[0] == "bul" else [bloc_ohab[1]]
    while LESONA and (str(LESONA[-1][1] if LESONA[-1][0] == "p"
                             else LESONA[-1][1][-1]).startswith("“")):
        b = LESONA.pop()
        ohab = (b[1] if b[0] == "bul" else [b[1]]) + ohab
    LESONA.append(["tononkalo", [ohab]])


def iray(*mpizaraka):
    """tarika faharoa ao amin'ny LESONA izay misy ny teny rehetra voalaza"""
    f = [l for l in lesona if all(m.lower() in l.lower() for m in mpizaraka)]
    if len(f) != 1:
        raise SystemExit("ABSENT/AMBIGU : %r -> %d" % (mpizaraka, len(f)))
    return f[0]


# ---------------------------------------------------------------- ny anako : « Fanampiana »
# Alaina amin'ny lahatsoraran'ny `data_zt16.py` (famakiana `ast`, fa tsy `import` — mba tsy
# ho loharanon'ny tenany avokoa ny `data_seho1` noho izy).


def sokajy_anako(lahariny, anarana):
    """milahatra ny andian-tam-pikambana `ANARANA = [...]` ao amin'ny rakitra `lahariny`"""
    r = io.open(lahariny, encoding="utf-8").read()
    m = re.search(r"^%s = (\[.*?\n\])$" % anarana, r, re.M | re.S)
    return ast.literal_eval(m.group(1)) if m else []


DT = os.path.join(DOS, "src", "data_zt16.py")
try:
    import data_seho1 as anc                       # noqa: E402

    anako, loharano_anako = anc.ANAKO, anc.LOHARANO_TANANAO
except Exception:
    les_A = sokajy_anako(DT, "LESONA_A")
    anako = [list(["p" if b[0] == "h2" else b[0], b[1]]) for b in les_A
             if b[0] != "tabl" and not (b[0] == "p" and b[1].startswith("Araka ny PE T6"))
             and b[1] not in ("Ny tanindrazana", "Ny firenena")]  # mihoatra amin'ny lesona 1→5
    loharano_anako = list(sokajy_anako(DT, "LOHARANO_A"))

LESONA_REF = ("Lesona : « %s » — boky natao an-tanana, SEHO 1 (n° 1/21). Io lesona io no "
              "foto-kevitra : tsy averina ao amin'ity rakitra ity izy, fa ny takela-"
              "panomanan-desona sy ny fanazaran-tena no ataoko." % LT)


ko = lesona.index(iray("Toetra tokony"))
toetra = " ".join([l for l in lesona[ko + 1:] if not l.startswith("Araka ")][:4])

# ---------------------------------------------------------------- ny baiko fanampiko (ako)
# Karazana rehetra ilainy : 1 fanontaniana mivantana · 3 fenoy ny fafana [tabilao] ·
# 5 manomeza teny ahitana · 4 mamorona fehezanteny — ary ny valiny rehetra dia azo
# hamarinina ao amin'ny lesona (teny-teny na ampahany mety).
BAIKO_ANAKO = [
    {"consigne": "Mamaly araka ny lesona ny fanontaniana manaraka :",
     "banga": ["a) Inona no atao hoe tanindrazana ara-kevitra ?",
               "b) Inona avy ny toetra tokony hananan'ny olona tia tanindrazana ?",
               "c) Taiza no monina ny vondron'olona mampisy firenena ?",
               "d) Ahoana no ifandraisan'ny firenena sy ny fanjakana ?"]},
    {"consigne": "Fenoy ny fafana ao amin'ny tabilao araka ny lesona :",
     "fafana": (["Ny voalaza", "Ny singa maha firenena ny firenena"],
                [["Ny fitenin'ny firenena dia ____.", ""],
                 ["Ny hiran'ny firenena dia ____.", ""],
                 ["Ny marika (sary) famantarana ny firenena dia ____.", ""],
                 ["Ny olona monina ao amin'ny firenena dia ____.", ""],
                 ["Ny singa telo hafa mbola voalaza : ____.", ""]])},
    {"consigne": "Manomeza teny ahitana ireto ampahany teny ireto ao amin'ny lesona :",
     "banga": ["a) razana", "b) pirenena", "c) kolontsaina"]},
    {"consigne": "Mamorona fehezanteny ahitana an'ireto teny ireto, araka ny lesona :",
     "banga": ["a) firaisan-kina", "b) fedrà", "c) lovain'ny taranaka", "d) fady"]},
]

VALINY_ANAKO = [
    {"banga": ["a) Dia tany nipetrahan'ny razana niandohana ka lovain'ny taranaka aty afara.",
               "b) " + toetra,
               "c) Ao anatin'ny faritra iray.",
               "d) Matetika mifamatotra amin'ny fanjakana na fitondram-panjakana tokana."]},
    {"fafana": (["Ny voalaza", "Ny singa maha firenena ny firenena"],
                [["Ny fitenin'ny firenena dia ____.", "**tenim-pirenena**"],
                 ["Ny hiran'ny firenena dia ____.", "**hiram-pirenena**"],
                 ["Ny marika (sary) famantarana ny firenena dia ____.", "**fanevam-pirenana**"],
                 ["Ny olona monina ao amin'ny firenena dia ____.", "**ny mponina**"],
                 ["Ny singa telo hafa mbola voalaza : ____.",
                  "**ny filoham-pirenena na ny mpitondra** · **ny kolontsaina** · "
                  "**ny tany** · **ny hasin\u2019ny tany na fady**"]])},
    {"banga": ["a) tanindrazana · tanin-drazana · tanin'ny razana · fasan-drazana · "
               "razana niandohana",
               "b) tenim-pirenena · hiram-pirenena · fanevam-pirenana · sainam-pirenena "
               "(sainam-pirenena malagasy)",
               "c) kolontsaina malagasy · iray kolontsaina · manaraka kolontsaina na "
               "fomban-drazana iraisana"]},
    {"banga": ["Valiny ohatra (miova araka ny mpianatra, ny teny ao amin'ny lesona ihany no" 
                  " ampiasaina) :",
               "a) Ny firenena dia vondron'olona iray monina amim-pitiavana sy firaisan-kina "
               "ao anatin'ny faritra iray.",
               "b) Ny foko dia vondron'olona mihevitra ny tenany ho iray tantara sy fedrà.",
               "c) Ny tanindrazana dia tany nipetrahan'ny razana niandohana ka lovain'ny "
               "taranaka aty afara.",
               "d) Ny hasin\u2019ny tany na fady dia tokony ho voaaro."]},
]

# ---------------------------------------------------------------- FANAZARAN-TENA
exo = []
for kd, v in bloc[k_fz + 1:k_fan]:
    if kd == "T":                       # andalana iray = roa sela (ankavia / ankavanana)
        exo[-1].setdefault("_tab", []).append([c for c in v if c.strip()][:2])
    elif re.match(r"^\d+\.\s", v):
        exo.append({"consigne": re.sub(r"^\d+\.\s*", "", v).strip(), "banga": []})
    else:
        exo[-1]["banga"].append(v)

EXOS = []
for e in exo:
    if "_tab" in e:
        EXOS.append({"consigne": e["consigne"],
                     "tsilo": ([a for a, b in e["_tab"]], [b for a, b in e["_tab"]])})
    else:
        EXOS.append({"consigne": e["consigne"], "banga": e["banga"]})
# ny vaovao : karazana « fanontaniana mivantana » (tsy misy intsony : 0 amin'ny boky)
EXOS_TANANA = EXOS                      # ny 3 baiko soratan'ny mpampianatra
EXOS = EXOS_TANANA + BAIKO_ANAKO          # + ny 4 vaovao (karazana 1 · 3 · 5 · 4)

# ---------------------------------------------------------------- FANITSIANA (valiny 1:1)
bloc_valiny = []
for v in P(k_fan + 1, len(bloc)):
    if re.match(r"^\d+\.$", v.strip()):
        bloc_valiny.append([])
    else:
        bloc_valiny[-1].append(v)

FANITSIANA = []
for i, lignes in enumerate(bloc_valiny):
    if "tsilo" in EXOS[i]:
        FANITSIANA.append({"tsilo": EXOS[i]["tsilo"]})
    else:
        FANITSIANA.append({"banga": lignes})
FANITSIANA_TANANA = FANITSIANA             # ny 3 valiny an'ny boky
FANITSIANA = FANITSIANA_TANANA + VALINY_ANAKO
if len(FANITSIANA) != len(EXOS):
    raise SystemExit("TSY 1:1 ny valiny : %d baiko / %d valiny" % (len(EXOS), len(FANITSIANA)))

# ---------------------------------------------------------------- LOHARANON-KEVITRA
LOHARANO_TANANAO = loharano_anako
LOHARANO = [
            "Boky natao an-tanana : « Manuel de Malagasy - Classe de T6 », SEHO 1 — "
            "Ny tanindrazana sy ny firenena (n° 1/21). Tsy averina ao amin'ity "
            "rakitra ity ny soratra an'ny lesona : ny takela-panomanan-desona "
            "(Famerenana, dingana 6, Tombana), ny baiko fanazaran-tena ary ny valiny "
            "amin'ireo ihany no voarindra teny-teny araka ny boky (sisiny voasento : "
            "refs/14_MANUELA-T6-TANANA.txt). Ny baiko 4 sy ny valiny azy, izay "
            "nampiana mba hatanteraka ny karazana baiko rehefa 6 ampiasaina amin'ny "
            "boky, dia an'ny manuela J-Learn — fa ny teny sy ny hevitra ao amin'ny "
            "lesona ihany no nilohanana azy."
            ] + LOHARANO_TANANAO

# ---------------------------------------------------------------- ny soratana
o = io.StringIO()
o.write(u'# -*- coding: utf-8 -*-\n')
o.write(u'"""data_seho1.py — ny **SEHO 1 « %s »** voarindra araka ny boky natao an-\n' % LT)
o.write(u"tanan'ny mpampianatra.\n\n")
o.write(u"Loharano : `origin/main` ⟶ « Nos manuels/Manuel de Malagasy - Classe de T6 (1).docx »,\n")
o.write(u"SEHO 1 (n° 1/21) ; ny sisiny voasento : `refs/14_MANUELA-T6-TANANA.txt`.\n\n")
o.write(u"**Zavatra noaovan\'ny `src/gen_seho1.py`** ity rakitra ity : avereno amin\'ny filaharana\n")
o.write(u"ao ambadika raha miova ny boky, fa aza ovana an-tanana (ny index ao amin\'ny boky no\n")
o.write(u"mitanana ny fanonona, ka ny tsipelina iray anatin\'ny boky dia tafiditra ato koa : « Ny "\
        u"\nfanevam-pirenana » (tsy « -pirenena »), « Ny hiram-pirenena ;. », « any an-tanin\' "\
        u"olona »,« lova soan\' ny », « tanindrazana ) », ny « Taiza », ary ny taran-teny\n")
o.write(u"a) b) d) tsy misy c). Ny fizarana « Fanampiana » aorian\'ny 5 ihany no an\'ny\n")
o.write(u"manuela J-Learn — voamarika ho azy ao amin\'ny LOHARANON-KEVITRA.\n\n")
o.write(u'`rafitra = "tanana"` : mamokatra lohateny hoe « SEHO 1 — … », marika « n° 1/21 » ary\n')
o.write(u"« Isan\'ny seho : 21 » ny mpamorina (`build_manuel_t6.fiche`).\n")
o.write(u'"""\n\n')
o.write("LT = %r\nSEHO = 1\nISAN = 21\nTAKELO_NOTE = \"n° 1/21\"\n" % LT)
for k, anarana_ in (("zana", "ZANA_TARANJA"), ("loha", "LOHAHEVITRA"), ("vpm", "VPM"),
                    ("fitao", "FITAOVANA"), ("fanozan", "FANOVOZAN_KEVITRA")):
    o.write("%s = %r\n" % (anarana_, CHAMPS[k]))
o.write("\n# ny dingana 6 + Famerenana + Tombana : teny-teny avy amin'ny tabilao 13r\nGRILLE = [\n")
for row in GRILLE:
    o.write("    %r,\n" % (list(row),))
o.write("]\n\n# ny lesona dia AN'NY MPAMPIANATRA : tsy averina, tsy ovana, tsy ampidirina "
        "ao amin'ity\n# rakitra ity akory. `LESONA_REF` ihany no milaza azy (lohateny + "
        "SEHO n/21), ka ny takela-\n# panomanan-desona sy ny fanazaran-tena/valiny no "
        "atanako.\nLESONA = []\nANAKO = []\n\nLESONA_REF = %r\n\n" % LESONA_REF)
o.write("# FANAZARAN-TENA : baiko 3 an'ny boky (teny-teny) + 4 vaovao (karazana 1 . 3 . 5 . 4)\n"
"EXOS_TANANA = [\n")
for e in EXOS_TANANA:
    o.write("    %r,\n" % (e,))
o.write("]\n\nEXOS_ANAKO = [\n")
for e in BAIKO_ANAKO:
    o.write("    %r,\n" % (e,))
o.write("]\n\nEXOS = EXOS_TANANA + EXOS_ANAKO\n"
"ISAN_TANANA = len(EXOS_TANANA)\n\n# FANITSIANA : ny valiny, 1:1 amin'ny baiko\n"
"FANITSIANA_TANANA = [\n")
for e in FANITSIANA_TANANA:
    o.write("    %r,\n" % (e,))
o.write("]\n\nFANITSIANA_ANAKO = [\n")
for e in VALINY_ANAKO:
    o.write("    %r,\n" % (e,))
o.write("]\n\nFANITSIANA = FANITSIANA_TANANA + FANITSIANA_ANAKO\n\n")
o.write("# LOHARANON-KEVITRA\nLOHARANO_TANANAO = [\n")
for l in LOHARANO_TANANAO:
    o.write("    %r,\n" % (l,))
o.write("]\n\nLOHARANO = [\n    %r,\n] + LOHARANO_TANANAO\n" % LOHARANO[0])

chemin = os.path.join(DOS, "src", "data_seho1.py")
io.open(chemin, "w", encoding="utf-8").write(o.getvalue())
print("ecrit :", chemin, os.path.getsize(chemin), "o")
print("grille : %d andalana · lesona : %d (+%d anako) · exos : %d · fanitsiana : %d · loharano : %d"
      % (len(GRILLE), len(LESONA), len(anako), len(EXOS), len(FANITSIANA), len(LOHARANO)))
print("baiko 1 :", EXOS[0])
print("valiny 1 :", FANITSIANA[0])
print("toetra :", toetra[:90])
