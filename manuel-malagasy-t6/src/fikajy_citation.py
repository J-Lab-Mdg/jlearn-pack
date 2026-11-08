# -*- coding: utf-8 -*-
"""fikajy_citation.py — ny **mpijinja fifanarahana** : misy atao roa.

1. `verbatim` : isaky ny teny voakopi eo anelanelan'ny `« … »` ao amin'ny docx, dia ilay
   mpanamarika ny loharano (FRP, PE, sy ny boky natao an-tanana). Tsy mety ho lasa teny
   natao ho azy ny teny voamarika — izay no nandresen'ny volamena 3 (R3).
2. `tanana` : ho an'ny firaketana `rafitra == "tanana"` — ny atiny rehetra avy amin'ny boky
   natao an-tanana dia ilaina **teny-teny**, ary ny an'ny manuela J-Learn (ANAKO, baiko
   vaovao) dia voamarika ho azy.

    ./run.sh src/fikajy_citation.py [output/Malagasy_T6_J-Learn.docx]
"""
import io
import os
import re
import sys
import zipfile

DOS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REFS = os.path.join(DOS, "refs")
# ny loharano ampiako amin'ny teny voakopi (R3 + ny boky natao an-tanana)
LOHARANO = ["FRP_6eme_MLG.txt", "PE_T6.txt", "10_PE_T6_ZANATARANJA.txt",
            "14_MANUELA-T6-TANANA.txt", "01_REHETRA-TSY-VERIFIKA.md", "04_FANONONAN-TENY.md",
            "05_FITSIPIKY-FANORATANA.md", "06_FIFANDRAISANA-FRP-PE.md", "08_OHABOLANA.md",
            "09_MANUELA_FENO_SY_LITERATIORA.md"]


def norm(t):
    """minuscules + alphanumérique ihany : ny tsiriry sy ny elanelana dia tsy atao amin'ny
    fifanarahana (mety ho « ’ » na « ' » ny boky), fa ny litera sy ny isa no fototra."""
    return re.sub(r"[^0-9a-zàèêô]", "", (t or "").lower())


def raki_loharano():
    t = []
    for nom in LOHARANO:
        try:
            t.append(io.open(os.path.join(REFS, nom), encoding="utf-8").read())
        except OSError:
            continue
    return norm(" ".join(t))


def soratra_docx(chemin):
    """andian-dahatsoratra : paragrafo + sela tabilao, amin'ny filaharan'ny boky"""
    x = zipfile.ZipFile(chemin).read("word/document.xml").decode("utf8")
    out = []
    for m in re.finditer(r"<w:p[ >].*?</w:p>", x, re.S):
        t = re.sub(r"\s+", " ", "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", m.group(0)))).strip()
        if t:
            out.append(t)
    return out


def fikitika(x):
    """singerina ny andian-tarika (bul / tononkalo) ka miverina lisitra takelaka ihany"""
    if isinstance(x, (list, tuple)):
        out = []
        for y in x:
            out += fikitika(y)
        return out
    return [x]


def verbatim(chemin):
    """isa ny teny voakopi ara-dalàna (FRP/PE/RAPE) — ny « … » rehetra ao amin'ny boky"""
    corpus = raki_loharano()
    lisitra = []
    for ligne in soratra_docx(chemin):
        for bloc in re.split(r"» ", ligne):
            for q in re.findall(r"« (.+?)[»”]", bloc):
                if len(norm(q)) >= 6:
                    lisitra.append((q, norm(q) in corpus))
    marina = [q for q, ok in lisitra if ok]
    hafa = [q for q, ok in lisitra if not ok]
    print("verbatim : %d teny voakopi · %d hita ao amin'ny loharano · %d mila jerena"
          % (len(lisitra), len(marina), len(hafa)))
    return lisitra, hafa


def _tsy_be(data):
    return None


def tanana(data, tesy_tanana):
    """isaky ny atiny an'ny boky natao an-tanana : teny-teny ve ?"""
    corpus = norm(tesy_tanana)
    ena, halavita = [], []
    # ny `LESONA_REF` : ahy izany, ka ny atao hoe : mila manonona ny lesona sy ny SEHO n/21
    ref = data.LESONA_REF
    if data.LT not in ref or ("SEHO" not in ref) or ("1/21" not in ref):
        raise SystemExit("SORO-TANANA TSY METY : tsy manonona ny lesona na ny SEHO n/21 : %r"
                         % ref[:80])
    def andy(e):
        ts = e.get("tsilo") or ((), ())
        return list(e.get("banga", [])) + list(ts[0]) + list(ts[1])

    n = getattr(data, "ISAN_TANANA", len(data.EXOS))
    for e in data.EXOS[:n]:                             # ny baiko soratan'ny boky ihany
        ena.append(("BAIKO", e["consigne"]))
        for l in andy(e):
            ena.append(("BAIKO/andy", l))
    for r in data.GRILLE:                              # ny dingana 6 + Famerenana + Tombana
        for c in r[1:]:
            for l in c.split("\n"):
                ena.append(("TAKELA", l))
    for e in data.FANITSIANA[:n]:                      # ny valiny voalaza ao aminy
        for l in andy(e):
            ena.append(("VALINY", l))
    for karazana, l in ena:
        if len(norm(l)) < 6 or norm(l) in corpus:
            continue
        halavita.append((karazana, l))
    print("tanana : %d singa natao teny-teny · %d tsy hita ao amin'ny boky"
          % (len(ena), len(halavita)))
    return len(ena), halavita


def tsy_misy_soratra_lesona(chemin, ref):
    """ho an'ny firaketana `rafitra == \"tanana\"` ihany : soro-tanana moneny no tina

    Ny lesona dia an'ny mpampianatra : tsy averina, tsy ovana, tsy ampidirina ao amin'ny
    rakitra ataoko. Angavana eto : eo miverina ny « LESONA: », dia ny soro-tanana (`ref`)
    manaraka azy no tokony ho tarika farany talahan'ny « FANAZARAN-TENA ».
    """
    lignes = soratra_docx(chemin)
    ref = ref.strip()
    fijerena = 0
    diso = []
    for k, l in enumerate(lignes):
        if not l.startswith(ref):
            continue
        fijerena += 1
        manaraka = [x for x in lignes[k + 1:k + 4] if x.strip()]
        if not (manaraka and manaraka[0].startswith("FANAZARAN-TENA")):
            diso.append(manaraka[0][:80] if manaraka else "(farany)")
    print("tsy_misy_soratra_lesona : %d seho « tanana » · %d misy soratra lesona aorian'ny "
          "soro-tanana" % (fijerena, len(diso)))
    for d in diso:
        print("   SORATRA LESONA NIANTSOA :", d)
    return len(diso)


def main():
    chemin = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        DOS, "output", "Malagasy_T6_J-Learn.docx")
    sys.path.insert(0, os.path.join(DOS, "src"))
    _, hafa = verbatim(chemin)
    import data_seho1                                  # noqa: E402

    tesy = io.open(os.path.join(REFS, "14_MANUELA-T6-TANANA.txt"), encoding="utf-8").read()
    n, halavita = tanana(data_seho1, tesy)
    if halavita:
        print("TSY TANY-TENY (mila jerena : na oaky amin'ny fanonona, na tsy an'ny boky) :")
        for k, l in halavita[:12]:
            print("   %-12s %s" % (k, l[:104]))
        return 1
    if not n:
        print("MANQUANT : tsy nisy atiny novokarina")
        return 1
    print("tanana : teny-teny rehetra ny takela sy ny fanazaran-tena avy amin'ny boky")
    # ny atiny an'ny boky ihany no ijery (LESONA_REF + GRILLE + EXOS + FANITSIANA)
    tsy = tsy_misy_soratra_lesona(chemin, data_seho1.LESONA_REF)
    if tsy:
        print("MANQUANT : nampidirina soratra lesona ao amin'ny seho « tanana »")
        return 1
    print("TSY MISY DIKA amin'ny SEHO 1")
    return 0


if __name__ == "__main__":
    sys.exit(main())
