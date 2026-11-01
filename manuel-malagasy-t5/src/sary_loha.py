# -*- coding: utf-8 -*-
"""sary_loha.py — sary ho an'ny firaketana T5 (lohahevitra 1-5).

Tsy misy hetra noforimbenina : ny lahatsoratra ao anaty sary dia **nalaina tsy niova**
avy amin'ny firaketana ihany (`lecon`, `retenir`, `fanazaran_tenay`, `tombana`).
Raha tsy azo sarahina ny lahatsoratra dia **tsy misy sary** (tsy mamorona zavatra).

Fikarohana ny endrika :
  * « Fanehoan-kevitra am-bava » -> dihy : (mpandray anjara : teny)
  * « Vakiteny »                 -> lahatsoratra voaisa ny fehezanteny
  * « Fiasan'ny teny »           -> teny <-> famaritana (ny teny vaovao)
  * « Asa an-tsoratra »          -> ny tsy maintsy tadiavina (retenir)
  * rantsana                     -> sary iray mamaritra ny lohahevitra (4 zana-taranja)

        ./run.sh src/sary_loha.py             -> mamorona ny sary rehetra
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import sary_tabalo as ST

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSSIER = os.path.join(RACINE, "output", "sary_loha")

LAVA = 480.0          # points : 16.9 cm (feno ny sakaivy ambony tabilao) -> 1:1
COL_G = 132.0         # kolona havia (mpandray anjara / isa / teny)
HAUT_L = 16.0         # points : halavan'ny andalana iray
TAILLE = 11.0
NOIR, GRE, VERT = "000000", "595959", "1E7B34"


def _sokajy(txt, dispo, pt=TAILLE):
    """Torpedo mba tsy haloaka ny sisin'ny kolona — misy sokajy araka ny teny."""
    txt = ST.retirer_marques(re.sub(r"\s+", " ", txt)).strip()
    teny = txt.split(" ")
    andalana, anc = [], ""
    for t in teny:
        try_ok = (anc + " " + t).strip()
        if anc and ST.largeur(try_ok, pt) > dispo:
            andalana.append(anc)
            anc = t
        else:
            anc = try_ok
    if anc:
        andalana.append(anc)
    return andalana or [""]


def kisary(gauche, droite, titre=None, pt=TAILLE, diso_g=COL_G):
    """(ops, habe, hatevina) — tabilao 2 kolona, misy sokajy ho azy, feno ny sakaivy."""
    """(ops, habe, hatevina) — tabiloro misy andalana maromaro isaky ny zana-dalana."""
    dispo_d = LAVA - diso_g - 16.0
    rows = []
    for g, d in zip(gauche, droite):
        gl, dl = _sokajy(g, diso_g - 8.0, pt), _sokajy(d, dispo_d, pt)
        rows.append((gl, dl))
    n = max(len(gl) for gl, dl in rows)
    hauts = [max(len(gl), len(dl)) for gl, dl in rows]
    h = 22.0 + sum(h * HAUT_L for h in hauts) + (0 if not titre else 20.0)
    ops, y = [], 0.0
    if titre:
        ops.append(("texte", 6.0, 15.0, titre, 12.0, True, False, NOIR))
        y = 22.0
    for yy in (y, h):                        # sisiny ambony sy ambany
        ops.append(("ligne", 0.0, yy, LAVA, yy, 0.8, "606060"))
    for x in (0.0, diso_g, LAVA):            # tsipika mitsangana
        ops.append(("ligne", x, y, x, h, 0.5, GRE))
    yc = y + 14.0
    for (gl, dl), nh in zip(rows, hauts):
        yo = yc
        for i, line in enumerate(gl):
            ops.append(("texte", 6.0, yc + 4.0 + i * HAUT_L, line, pt, True, False, NOIR))
        for i, line in enumerate(dl):
            ops.append(("texte", diso_g + 6.0, yc + 4.0 + i * HAUT_L, line, pt, False, False, NOIR))
        yc += nh * HAUT_L
        if (gl, dl) != rows[-1]:
            ops.append(("ligne", 0.0, yc, LAVA, yc, 0.4, "C0C0C0"))
    return ops, LAVA, h


def atao(ops, w, h, nom):
    """PNG (ho an'ny Word) + SVG (mangitra, tsy mila polise) -> output/sary_loha/."""
    if not os.path.isdir(DOSSIER):
        os.makedirs(DOSSIER)
    from PIL import Image
    import io as _io
    png = os.path.join(DOSSIER, nom + ".png")
    svg = os.path.join(DOSSIER, nom + ".svg")
    Image.open(_io.BytesIO(ST.png_de(ops, w, h, echelle=3.0))).save(png, optimize=True)
    with open(svg, "wb") as f:
        f.write(ST.svg_de(ops, w, h))
    return png


# ----------------------------------------------------------------- ny endrika
def _block(s, kind):
    for blk in s.get("lecon") or []:
        if blk[0] == kind:
            return blk[1]
    return None


def _dihy(s):
    lines = _block(s, "d")
    if not lines:
        return None
    g, d = [], []
    for ln in lines:
        if " : " in ln:
            a, b = ln.split(" : ", 1)
            g.append(a.strip())
            d.append(b.strip())
        else:
            g.append("\u2014")
            d.append(ln.strip())
    return (g, d, "Ny dihy : teny isaky ny mpandray anjara")


def _vakiteny(s):
    txt = " ".join(b[1] for b in (s.get("lecon") or []) if b[0] == "l")
    if not txt:
        p = _block(s, "p")
        txt = " ".join(p) if isinstance(p, list) else p
    if not txt:
        return None
    fehe = [f.strip() + "." for f in re.split(r"(?<=\.)\s+", ST.retirer_marques(txt)) if f.strip()]
    fehe = [f if f.endswith(".") else f for f in fehe][:12]
    g = ["%d." % i for i in range(1, len(fehe) + 1)]
    return (g, fehe, "Fehezanteny isan-dahary : voaisa amin'ny isa")


def _teny_vaovao(s):
    for blk in s.get("lecon") or []:
        if blk[0] not in ("p", "x"):
            continue
        txt = blk[1] if isinstance(blk[1], str) else " ".join(blk[1])
        pairs = re.findall(r"\*\*([^*]{2,60}?)\*\*\s*:\s*([^;]{4,180})", txt)
        if len(pairs) >= 2:
            return ([p[0].strip() for p in pairs], [p[1].strip().rstrip(".") + "." for p in pairs],
                    "Ny teny vaovao : teny sy famaritany")
    return None


def _retenir(s):
    lst = s.get("retenir") or []
    if not lst:
        return None
    return (["%d." % i for i in range(1, len(lst) + 1)], [t for t in lst],
            "Ny tsy maintsy tadiavina")


ENDRIKA = {
    "Fanehoan-kevitra": _dihy,
    "Vakiteny": _vakiteny,
    "Fiasan": _teny_vaovao,
    "Asa an-tsoratra": _retenir,
}


def rantsana(s, i):
    """Sary iray ho an'ny firaketana : (lohateny, habe) na (None, tsy misy)."""
    zt = s.get("zana_taranja") or ""
    candidats = []
    for cle, fn in ENDRIKA.items():
        if cle.lower() in zt.lower():
            candidats.append(fn)
    candidats += [_vakiteny, _teny_vaovao, _dihy, _retenir]
    for fn in candidats:
        out = fn(s)
        if not out:
            continue
        g, d, titre = out
        if len(g) < 2 or len(g) != len(d):
            continue
        ops, w, h = kisary(g, d, titre)
        if not (46 <= h <= 470):
            continue
        return atao(ops, w, h, "loha%d-%d" % (int(re.search(r"(\d+)", s["lohahevitra"]).group(1)), i))
    return None


def rantsana_lohahevitra(t, seances):
    """Sary mamaritra ny lohahevitra : ny zana-taranja efatra sy ny lohateny."""
    g = [s["zana_taranja"] for s in seances]
    d = [s["lohateny"] for s in seances]
    ops, w, h = kisary(g, d, "LOHAHEVITRA %d — %s" % (t, seances[0]["lohahevitra"].split(". ", 1)[-1]),
                       pt=10.0)
    return atao(ops, w, h, "loha%d-carte" % t)


def main():
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from builders import norm_all
    import importlib
    n_ok = n_skip = 0
    for t in range(1, 6):
        mod = importlib.import_module("data_loha%d" % t)
        S = norm_all(mod.SEANCES)
        try:
            rantsana_lohahevitra(t, S)
            n_ok += 1
        except Exception as e:
            print("  ! carte %d : %s" % (t, e))
        for i, s in enumerate(S, start=1):
            try:
                p = rantsana(s, i)
            except Exception as e:
                p, msg = None, repr(e)[:60]
            if p:
                n_ok += 1
                print("  ok  loha%d-%d  %-26s  %s" % (t, i, s["zana_taranja"][:24],
                                                        os.path.basename(p)))
            else:
                n_skip += 1
                print("  --  loha%d-%d  tsy misy sary (tsy azo sarahina ny lahatsoratra)" % (t, i))
    print("\nsary : %d natao, %d tsy natao  ->  %s" % (n_ok, n_skip, DOSSIER))


if __name__ == "__main__":
    main()
