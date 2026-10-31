# -*- coding: utf-8 -*-
"""`sary_fano.py` — sary sy graphique ho an'ny **manuela feno** (T6).

Miverina amin'ny fandrindrana iray ihany ny rehetra : `sary_tabalo.py` no mampiditra ny
soratra ho **contours** (tsy misy `<text>` ao amin'ny SVG → mety amin'ny Word sady tsy
mila polise) ary ny PNG fallback. Ny `ops` = lisitra ao anaty :

    ("ligne", x0, y0, x1, y1, epaisseur, couleur)
    ("poly", [(x, y), ...], couleur)
    ("texte", x, y, txt, pt, gras, italik, couleur)      # y = lafin'ny soratra (baseline)
    ("fleche", x0, y0, x1, y1, epaisseur, couleur)

Tarehimarika = **points** ; habe azo = 493 pt (pejy A4 − 2 × 1020 twips).
Ny loko : `C_*` = hexa tsy misy « # ».

    ./run.sh src/sary_fano.py            # mamokatra ny sary rehetra ao /tmp (nijery)
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import sary_tabalo as st                                  # noqa: E402

HAZO = 493.0                     # habe azo ao amin'ny pejy
C_NOIR = "000000"
C_BLEU = "1F4E79"
C_MAIVANA = "FFFFFF"
C_FOND = "EDF3F8"
C_FOND2 = "F2F7EE"
C_FOND3 = "FBF3E6"
C_MENA = "C00000"
C_LOBA = "1E7B34"
C_ORANGE = "E36C0A"
C_VITSY = "808080"
C_BATO = "D9D9D9"
TAILLE = 11.0


# ------------------------------------------------------------------- atao
def _t(ops, x, y, txt, pt=TAILLE, gras=False, italik=False, col=C_NOIR):
    ops.append(("texte", x, y, st.retirer_marques(txt), pt, gras, italik, col))


def _lavy(txt, pt=TAILLE, gras=False, italik=False):
    return st.largeur(st.retirer_marques(txt), pt, gras, italik)


def _fit(txt, dispo, pt=TAILLE, gras=False, italik=False, farany=7.0):
    txt = st.retirer_marques(txt)
    while pt > farany and _lavy(txt, pt, gras, italik) > dispo:
        pt -= 0.5
    return txt, pt


def _box(ops, x, y, w, h, fond=None, bord=C_VITSY, ep=0.7):
    if fond:
        ops.append(("poly", [(x, y), (x + w, y), (x + w, y + h), (x, y + h)], fond))
    if bord:
        for a, b, c, d in ((x, y, x + w, y), (x, y + h, x + w, y + h),
                           (x, y, x, y + h), (x + w, y, x + w, y + h)):
            ops.append(("ligne", a, b, c, d, ep, bord))


def _tsipika(ops, x0, y0, x1, y1, ep=0.7, col=C_VITSY):
    ops.append(("ligne", x0, y0, x1, y1, ep, col))


def _soratra_ao(ops, x, y, w, h, lignes, gras=False, italik=False, col=C_NOIR,
                pt=TAILLE, loko_farany=7.0, ankapoben=True):
    """Mamaritra ny toerana amin'ny `lignes` ao anatry ny boaty (x, y, w, h)."""
    pts, texts = [], []
    for ln in lignes:
        t, p = _fit(ln, w - 8.0, pt, gras, italik, loko_farany)
        texts.append(t)
        pts.append(p)
    hatrany = sum(pts) + 3.0 * (len(texts) - 1)
    y0 = y + (h - hatrany) / 2.0 if ankapoben else y + 4.0
    for i, (t, p) in enumerate(zip(texts, pts)):
        dx = (w - _lavy(t, p, gras, italik)) / 2.0 if ankapoben else 4.0
        y0 += p * 0.34
        _t(ops, x + max(dx, 2.0), y0, t, p, gras, italik, col)
        y0 += p * 0.85 + 3.0


# --------------------------------------------------------- 1. HAZATRAFIKA
def arbre(racine, branches, cols=None, sous_ligne=None, h_boite=None):
    """Sary hazatrafi ka : boaty lehibe ivoarany -> andalana boaty madinika.
    `branches` = [(lohateny, [soratra])] ; `sous_ligne` = [fanamarihana]."""
    n = len(branches)
    cols = cols or [HAZO / n] * n
    w = sum(cols)
    h_r = 26.0 + 12.0 * (len(racine) - 1)
    hb = h_boite or max(34.0, max(16.0 + 12.0 * len(b[1]) for b in branches))
    h = h_r + 20.0 + hb + (16.0 if sous_ligne else 6.0)
    ops = []
    x = 0.0
    for b in branches:
        ops.append(("ligne", x + cols[n // 2] / 2.0 if False else 0, 0, 0, 0, 0.1, C_BATO))
        break
    ops = []
    _box(ops, 0.0, 0.0, w, h, fond=None, bord=None)
    # ny boaty lehibe ivoarany
    bw_r = min(w * 0.62, max(150.0, _lavy(racine[0], 13.0, True) + 30))
    _box(ops, (w - bw_r) / 2.0, 6.0, bw_r, h_r, fond=C_FOND, bord=C_BLEU, ep=1.0)
    _soratra_ao(ops, (w - bw_r) / 2.0, 6.0, bw_r, h_r, racine, gras=True, pt=13.0, col=C_BLEU)
    yb = h_r + 20.0
    xb = []
    xx = 0.0
    for c in cols:
        xb.append(xx)
        xx += c
    yc = 6.0 + h_r
    _tsipika(ops, w / 2.0, yc, w / 2.0, yc + 9.0, 0.9, C_VITSY)
    _tsipika(ops, xb[0] + cols[0] / 2.0, yc + 9.0, xb[-1] + cols[-1] / 2.0, yc + 9.0, 0.9,
             C_VITSY)
    for i, (nom, lignes) in enumerate(branches):
        cx = xb[i] + 3.0
        cw = cols[i] - 6.0
        _tsipika(ops, xb[i] + cols[i] / 2.0, yc + 9.0, xb[i] + cols[i] / 2.0, yb, 0.9, C_VITSY)
        _box(ops, cx, yb, cw, hb, fond=C_FOND2, bord=C_LOBA, ep=0.8)
        _soratra_ao(ops, cx, yb, cw, hb, [nom] + lignes, pt=9.5, col=C_NOIR)
        if i:
            _tsipika(ops, xb[i] - 1.5, yb + 4.0, xb[i] - 1.5, yb + hb - 4.0, 0.5, C_BATO)
    if sous_ligne:
        ys = yb + hb + 13.0
        for i, s in enumerate(sous_ligne):
            if s:
                t, p = _fit(s, cols[i] - 8.0, 8.5, False, True)
                _t(ops, xb[i] + 4.0, ys, t, p, False, True, C_VITSY)
    return ops, w, h


# ------------------------------------------------- 2. FITAONANA (tsy misy)
def lisa(gauche, droite, rezo=None, tete=None, cols=None, haut=22.0, taille=12.0, puce=False):
    """Tabilao-sary misy tsilo (miverina amin'ny `st.tabalo`) + lohateny eo ambony."""
    cols = cols or (4400, 567, 4899)
    ops, w, h, avis = st.tabalo(gauche, droite, rezo=rezo or {}, cols=cols, haut=haut,
                                taille=taille, puce=puce)
    if tete:
        ops = _decale(ops, 16.0) + [("texte", 0.0, 12.0, st.retirer_marques(tete), 11.5, True,
                                     False, C_BLEU)]
        h += 16.0
    return ops, w, h, avis


def fandrasana(titre, andalana, h_per=64.0):
    """Andian'ny fandravan-teny : `andalana` = [(teny feno, [(ampahany, anarana)])].
    Isaky ny andalana dia misy ny teny voasaraka amin'ny « - » sy ny anaran'ny ampahany."""
    ops = []
    w = HAZO
    n = len(andalana)
    h = 16.0 + n * h_per + 6.0
    y = 0.0
    if titre:
        _t(ops, 0.0, 12.0, titre, 11.5, True, False, C_BLEU)
        y = 18.0
    for i, (teny, ampahany) in enumerate(andalana):
        yy = y + i * h_per
        lw = _lavy(teny, 13.0, True)
        _t(ops, 4.0, yy + 14.0, teny, 13.0, True, False, C_MENA)
        x = 4.0 + lw + 14.0
        _t(ops, x, yy + 14.0, "<", 13.0, True, False, C_NOIR)
        x += 20.0
        reste = w - x - 6.0
        large = [max(58.0, _lavy(a[0], 12.0, True) + 34.0) for a in ampahany]
        tot = sum(large)
        if tot > reste:
            large = [l * reste / tot for l in large]
        kofa = [0.0]
        for l in large:
            kofa.append(kofa[-1] + l)
        x0row = x + max(0.0, (reste - tot) / 2.0) if tot < reste else x
        for k, (seg, anarany) in enumerate(ampahany):
            bx = x0row + kofa[k]
            bw = large[k]
            _box(ops, bx, yy + 4.0, bw, 20.0, fond=C_FOND, bord=C_BLEU, ep=0.7)
            t, p = _fit(seg, bw - 8.0, 12.0, True)
            _soratra_ao(ops, bx, yy + 4.0, bw, 20.0, [t], gras=True, pt=p, col=C_NOIR)
            for j, ln in enumerate([u.strip() for u in anarany.split("|") if u.strip()]):
                tt, pp = _fit(ln, bw + 26.0, 8.0)
                _t(ops, bx + bw / 2.0 - _lavy(tt, pp) / 2.0, yy + 34.0 + j * 10.0, tt, pp,
                   False, False, C_VITSY)
        if i < n - 1:
            _tsipika(ops, 0.0, yy + h_per - 4.0, w, yy + h_per - 4.0, 0.4, C_BATO)
    return ops, w, h


# ------------------------------------------------- 3. TABILAO BOATY (lisa)
def boites(lignes, tete=None, cols=None, fond=C_FOND2, pt=9.5, loko=C_NOIR, h_rangee=None):
    """Tabilao natao ho sary : `lignes` = [[siratra isaky ny kolona]]. Misy sisiny sy
    tsipika manga — ho an'ireo izay tsy mety voasoratra tsara amin'ny tabilao Word."""
    n = len(lignes[0])
    cols = cols or [HAZO / n] * n
    w = sum(cols)
    h_r = h_rangee or max(20.0, 10.0 + 11.0 * max(len(r) if isinstance(r, list) else 1
                                                   for r in ([lignes[0]] if tete else [] ) or [1]))
    ops = []
    y = 0.0
    rows = ([tete] if tete else []) + list(lignes)
    heights = []
    for r in rows:
        cells = [c if isinstance(c, list) else [c] for c in r]
        heights.append(max(h_r, 10.0 + 10.5 * max(len(c) for c in cells)))
    h = sum(heights)
    for i, r in enumerate(rows):
        yy = sum(heights[:i])
        for j, c in enumerate(r):
            fx = fond if not (i == 0 and tete) else C_BLEU
            fc = C_MAIVANA if (i == 0 and tete) else loko
            _box(ops, sum(cols[:j]), yy, cols[j], heights[i], fond=fx, bord=C_BATO, ep=0.5)
            lignes_j = c if isinstance(c, list) else [c]
            _soratra_ao(ops, sum(cols[:j]), yy, cols[j], heights[i], lignes_j,
                        gras=bool(i == 0 and tete), pt=pt, col=fc)
    return ops, w, h


# -------------------------------------------------- 4. SARIN'NY FIFANOHANA
def _decale(ops, dy):
    out = []
    for op in ops:
        if op[0] in ("ligne", "fleche"):
            out.append((op[0], op[1], op[2] + dy, op[3], op[4] + dy) + op[5:])
        elif op[0] == "texte":
            out.append(("texte", op[1], op[2] + dy) + op[3:])
        elif op[0] == "poly":
            out.append(("poly", [(a, b + dy) for a, b in op[1]], op[2]))
        else:
            out.append(op)
    return out


def _tabalo_ops(gauche, droite, rezo, cols, haut, taille, puce):
    ops, _w, _h, _a = st.tabalo(gauche, droite, rezo=rezo or {}, cols=cols, haut=haut,
                                taille=taille, puce=puce)
    return ops


def _tabalo_h(gauche, haut):
    return len(gauche) * haut


def lisa_tsisy_tete(gauche, droite, rezo=None, cols=None, haut=22.0, taille=12.0, puce=False):
    return _tabalo_ops(gauche, droite, rezo, cols or (4400, 567, 4899), haut, taille, puce), \
        sum([(c * st.TW2PT) for c in (cols or (4400, 567, 4899))]), _tabalo_h(gauche, haut)


# ------------------------------------------------------- 5. RIMA / NGADONA
def rima(strophe, motif, titre=None, fanamarihana=None):
    """`strophe` = [(andalana, marika_rima)] ; `motif` = [(sary_fonosy, lohateny)]"""
    ops = []
    w = HAZO
    n = len(strophe)
    h_motif = 16.0 + 12.0 * len(motif)
    h = (14.0 if titre else 0.0) + 8.0 + n * 20.0 + 12.0 + h_motif + \
        (13.0 * len(fanamarihana) if fanamarihana else 0.0) + 8.0
    y = 0.0
    if titre:
        _t(ops, 0.0, 12.0, titre, 11.5, True, False, C_BLEU)
        y = 18.0
    for i, (verseau, marque) in enumerate(strophe):
        yy = y + i * 20.0
        t, p = _fit(verseau, w - 74.0, 11.5)
        _t(ops, 4.0, yy + 13.0, t, p, False, False, C_NOIR)
        bw, bh = 18.0, 15.0
        bx = w - bw - 30.0
        fond = C_FOND if marque == "a" else C_FOND3
        _box(ops, w - bw - 8.0, yy + 1.0, bw, bh, fond=fond, bord=C_MENA if marque == "a"
             else C_ORANGE, ep=0.8)
        _soratra_ao(ops, w - bw - 8.0, yy + 1.0, bw, bh, [marque], gras=True, pt=10.5,
                    col=C_NOIR)
        _t(ops, bx - 24.0, yy + 13.0, "|", 9.0, False, False, C_BATO)
    ym = y + n * 20.0 + 6.0
    _tsipika(ops, 0.0, ym - 4.0, w, ym - 4.0, 0.5, C_BATO)
    for k, (sary, lohateny) in enumerate(motif):
        xx = 4.0 + k * (w - 8.0) / max(len(motif), 1)
        _t(ops, xx, ym + 11.0, sary, 12.0, True, False, C_MENA)
        t, p = _fit(lohateny, (w - 8.0) / max(len(motif), 1) - 12.0, 8.5)
        _t(ops, xx, ym + 24.0, t, p, False, False, C_VITSY)
    if fanamarihana:
        for k, ln in enumerate(fanamarihana):
            t, p = _fit(ln, w - 4.0, 8.5, False, True)
            _t(ops, 2.0, h - 6.0 - 13.0 * (len(fanamarihana) - 1 - k), t, p, False, True, C_VITSY)
    return ops, w, h


# ------------------------------------------------------------- 6. TIMELINE
def timeline(titre, evenements, h_tot=104.0):
    """`evenements` = [(taona, soratra)] — taratasy fampisehoana ny tantaran'ny mpanoratra."""
    ops = []
    w = HAZO
    n = len(evenements)
    h = h_tot + (14.0 if titre else 0.0)
    y = 0.0
    if titre:
        _t(ops, 0.0, 12.0, titre, 11.5, True, False, C_BLEU)
        y = 18.0
    yt = y + h_tot * 0.52
    x0, x1 = 14.0, w - 14.0
    _tsipika(ops, x0, yt, x1, yt, 1.2, C_NOIR)
    for i, (annee, txt) in enumerate(evenements):
        xx = x0 + (x1 - x0) * (i + 0.5) / n
        _tsipika(ops, xx, yt - 3.5, xx, yt + 3.5, 1.0, C_NOIR)
        _t(ops, xx - _lavy(str(annee), 10.5, True) / 2.0, yt - 8.0, str(annee), 10.5, True,
           False, C_MENA)
        haut = i % 2 == 0
        lignes = txt if isinstance(txt, list) else [txt]
        bw = (x1 - x0) / n - 6.0
        bh = 10.0 + 10.0 * len(lignes)
        by = yt - 22.0 - bh if haut else yt + 12.0
        _box(ops, xx - bw / 2.0, by, bw, bh, fond=C_FOND2 if haut else C_FOND, bord=C_BATO,
             ep=0.5)
        _soratra_ao(ops, xx - bw / 2.0, by, bw, bh, lignes, pt=8.0, ankapoben=True)
        _tsipika(ops, xx, by + bh if haut else yt + 4.0, xx, yt - 4.0 if haut else by, 0.6,
                 C_VITSY)
    return ops, w, h


# --------------------------------------------------------------- 7. GANTT
def gantt(titre, rangees, n_semaines=33, legende=None):
    """`rangees` = [(anaran'ny lesona, herinandro voalohany, herinandro farany)] —
    sarintany fandrindrana araka ny RAPE (4 ora/kerinandro)."""
    ops = []
    col_nom = 190.0
    w = HAZO
    lab = (w - col_nom) / n_semaines
    h = 18.0 + 14.0 * len(rangees) + 14.0 + (12.0 if legende else 0.0) + 4.0
    _t(ops, 0.0, 12.0, titre, 11.5, True, False, C_BLEU)
    y0 = 20.0
    for s in range(0, n_semaines + 1, 5):
        xx = col_nom + s * lab
        _tsipika(ops, xx, y0 - 4.0, xx, y0 + 14.0 * len(rangees), 0.4,
                 C_BATO if s else C_NOIR)
        if s:
            _t(ops, xx - 8.0, y0 - 7.0, "H%d" % s, 8.0, False, False, C_VITSY)
    for i, (nom, a, b, *res) in enumerate(rangees):
        fond = res[0] if res else C_FOND
        yy = y0 + i * 14.0
        _t(ops, 2.0, yy + 10.0, nom, 8.5, i % 2 == 0, False, C_NOIR)
        xa, xb_ = col_nom + (a - 1) * lab, col_nom + b * lab
        _box(ops, xa, yy + 1.5, xb_ - xa, 10.5, fond=fond, bord=C_BLEU, ep=0.6)
    yh = y0 + 14.0 * len(rangees) + 6.0
    if legende:
        _t(ops, 2.0, yh + 6.0, legende, 8.0, False, True, C_VITSY)
    return ops, w, h


# ---------------------------------------------------------- 8. TOLO-TSARY
def tolo(tsary, hatao=150.0, titre=None):
    """Saribolana tsotra : `tsary` = [(anarana, isa, loko)] — ampiasaina ho « graphique »."""
    ops = []
    w = HAZO
    n = len(tsary)
    y = 14.0 if titre else 0.0
    if titre:
        _t(ops, 0.0, 11.0, titre, 11.5, True, False, C_BLEU)
    zone = hatao
    h = y + zone + 26.0
    max_ = max(v for _, v, _ in tsary) or 1
    bw = (w - 20.0) / n * 0.56
    pas = (w - 20.0) / n
    _tsipika(ops, 10.0, y + zone, w - 10.0, y + zone, 0.9, C_NOIR)
    for i, (nom, val, loko) in enumerate(tsary):
        bx = 10.0 + pas * i + (pas - bw) / 2.0
        bh = zone * val / max_
        _box(ops, bx, y + zone - bh, bw, bh, fond=loko, bord=C_VITSY, ep=0.5)
        _t(ops, bx + bw / 2.0 - _lavy(str(val), 10.0, True) / 2.0, y + zone - bh - 4.0, str(val),
           10.0, True, False, C_NOIR)
        t, p = _fit(nom, pas - 4.0, 8.0)
        _t(ops, 10.0 + pas * i + (pas - _lavy(t, p)) / 2.0, y + zone + 12.0, t, p, False, False,
           C_NOIR)
    return ops, w, h


# ------------------------------------------------------------ 9. SARY FONON
def tongolo():
    """Sary amin'ny fonon'ny boky : tendrombohitra + masoandro + vorona (tsy misy soratra)."""
    ops = []
    w, h = 493.0, 210.0
    ops.append(("poly", [(0, 150.0), (w, 150.0), (w, h), (0, h)], C_FOND2))       # tany
    ops.append(("poly", [(0, 150.0), (w, 150.0), (w, 0.0), (0, 0.0)], C_FOND3))   # lanitra
    # masoandro
    cx, cy, r = 372.0, 52.0, 26.0
    pts = [(cx + r * __import__("math").cos(2 * 3.14159 * i / 24),
             cy + r * __import__("math").sin(2 * 3.14159 * i / 24)) for i in range(24)]
    ops.append(("poly", pts, C_ORANGE))
    for i in range(12):
        a = 2 * 3.14159 * i / 12
        ops.append(("ligne", cx + (r + 5) * __import__("math").cos(a),
                    cy + (r + 5) * __import__("math").sin(a),
                    cx + (r + 13) * __import__("math").cos(a),
                    cy + (r + 13) * __import__("math").sin(a), 1.0, C_ORANGE))
    # tendrombohitra
    for pts, col in ((((0, 150), (86, 84), (150, 150)), "6E8C6A"),
                     (((70, 150), (196, 46), (330, 150)), "3F6B4B"),
                     (((250, 150), (382, 74), (493, 150)), "8AA98B")):
        ops.append(("poly", list(pts), col))
    # tsipika (onja)
    for k in range(3):
        y = 160.0 + k * 12.0
        for i in range(16):
            x = 6.0 + i * 30.0
            ops.append(("ligne", x, y, x + 15.0, y - 4.0 + k, 0.8, C_BLEU))
    # vorona
    for (vx, vy) in ((96, 46), (128, 62), (160, 40), (292, 58)):
        ops.append(("ligne", vx, vy, vx + 6, vy - 5, 0.9, C_NOIR))
        ops.append(("ligne", vx + 6, vy - 5, vx + 12, vy, 0.9, C_NOIR))
    return ops, w, h


def sokajy(racine, sokajy, ohatra=None, titre=None):
    """Sary boribory : `racine` eo afovoany, 3-5 boaty manodidina + ohatra ao anaty."""
    ops = []
    w, h = HAZO, 168.0
    y = 0.0
    if titre:
        _t(ops, 0.0, 12.0, titre, 11.5, True, False, C_BLEU)
        y = 18.0
    rw, rh = 150.0, 34.0
    rx, ry = (w - rw) / 2.0, y + 118.0
    _box(ops, rx, ry, rw, rh, fond=C_FOND, bord=C_BLEU, ep=1.0)
    _soratra_ao(ops, rx, ry, rw, rh, racine, gras=True, pt=10.5, col=C_BLEU)
    n = len(sokajy)
    bw = (w - 12.0 * (n - 1)) / n
    for i, (nom, lignes) in enumerate(sokajy):
        bx = i * (bw + 12.0)
        bh = 30.0 + 10.5 * max(0, len(lignes) - 1)
        _box(ops, bx, y + 6.0, bw, bh, fond=C_FOND2, bord=C_LOBA, ep=0.7)
        _soratra_ao(ops, bx, y + 6.0, bw, bh, [nom] + lignes, pt=8.5)
        xc = bx + bw / 2.0
        yc = y + 6.0 + bh
        _tsipika(ops, xc, yc, w / 2.0, ry, 0.7, C_VITSY)
    if ohatra:
        _t(ops, 6.0, h + y - 2.0, ohatra, 8.5, False, True, C_VITSY)
    return ops, w, h + y


# ------------------------------------------------------------------ lisitra
def _rima_s2():
    return rima([("Tranobongon'olon-tiana", "a"), ("Aono misy fifaliana", "a"),
                 ("Ao izay toy ny fahantrana", "b"), ("Hasambarana mazana", "b")],
                [("\u22A5 U", "lila = ngadona + tsaikona"), ("U \u22A5 U", "ralila"),
                 ("U U \u22A5 U", "taralila")],
                titre="Rima mifanjohy (aa bb) — ohatra ao amin'ny FRP, LII 2d",
                fanamarihana=["Ny feo mitovy amin'ny faran'ny andalana no lovana : "
                              "« -iana » (a) · « -ana » (b)"])


def _tsirinteny_s2():
    return arbre("TSIRINTENY", [("Tovona", ["mivaky (miova)", "tsy mivaky", "f-, mp-, ki-/ko-"]),
                                ("Tovana", ["-ana", "-ina"]),
                                ("Sara-droa", ["i-…-ana", "i-…-ina"]),
                                ("Tsofoka", ["-in-", "-al-", "-ol-"])],
                  sous_ligne=["m-, Φ-, a-, an-…", "a-, voa-, tafa-, ha-", "roa ampahany",
                              "manatevina fototeny"])


def _fandrasana_s2():
    return fandrasana("Fandravan-teny (FRP, LFK 2d) — ny marika « < » dia midika hoe « handrasa teny »",
                      [("nilalao", [("n-", "filazam-potoana lasa"), ("i-", "tovona vakiny tsy miova"),
                                   ("lalao", "fototeny")]),
                       ("hilalao", [("h-", "filazam-potoana ho avy"), ("i-", "tovona vakiny tsy miova"),
                                   ("lalao", "fototeny")]),
                       ("nilalaovana", [("n(o)-", "lasa"), ("i-", "tsy miova"), ("lalao", "fototeny"),
                                       ("-v-", "fanatsaram-peo"), ("-ana", "sara-droa")]),
                       ("filalaovana", [("f-", "tovona famoronana anarana"), ("i-", "tsy miova"),
                                        ("lalao", "fototeny"), ("-v-", "fanatsaram-peo"),
                                        ("-ana", "sara-droa")])])


def _narivony_s2():
    return timeline("Jean NARIVONY (1898-1980) — ny fiainany anaty tsipika",
                    [("1898", ["Teraka tao Andrefandrova", "Antananarivo, 17 sept."]),
                     ("1918", ["Nanomboka", "nanoratra"]),
                     ("1920", ["Akon'Iarivo ;", "Ny Mpandinika (J. Venus)"]),
                     ("1926", ["Amboara voafantina ;", "Takariva Volafotsy"]),
                     ("1930", ["Nampianatra tany", "Fenoarivo Atsinanana"]),
                     ("1937", ["Feom-baliha", "(Rasalama Maritiora)"]),
                     ("1955", ["252 mpianatra", "tany Fenoarivo"]),
                     ("1966", ["Amboaran-tononkalo", "(Edisiona Salohy)"]),
                     ("1980", ["Maty 15 jona", "1980"])])


def _planning_s2():
    return gantt("Fandrindrana ny 15 lesona amin'ny herinandro 33 (RAPE T6 : 4 ora/kerinandro)",
                 [("L1-L3 · Tsipelina", 1, 7, C_FOND2),
                  ("L15 · Tononkalo (rima)", 8, 14, C_FOND3),
                  ("L4 · Tsirinteny", 8, 14, C_FOND2),
                  ("L5-L7 · Sokajin-teny", 15, 21, C_FOND2),
                  ("L8-L11 · Fitsipika", 22, 27, C_FOND2),
                  ("L12-L14 · Literatiora", 22, 27, C_FOND3),
                  ("L12 · Asa an-tsoratra", 28, 33, C_FOND2),
                  ("Fanonerana / FLJ", 29, 33, C_BATO)])


def _isa_s2():
    return boites([["isa", "iray", "roa", "telo", "efatra", "dimy", "enina", "fito", "valo"],
                   ["laharana", "voalohany", "faharoa", "fahatelo", "fahefatra", "fahadimy",
                    "fahenina", "fafito", "fahavalo"],
                   ["ampahany", "ampahalonny", "ampaharua", "ampahatelony", "ampahafarony",
                    "ampahadimy", "ampahalenina", "ampahafito", "ampahavalo"],
                   ["fampitomboana", "indray", "indroa", "intelo", "impolo", "imidangy",
                    "inenina", "ifito", "ivalo"],
                   ["fe-potoana", "—", "—", "hateloana", "hefarana", "hadimiana", "henemana",
                    "hafitoana", "havaloana"]],
                   tete=["Karazana mpamaritr'isa (FRP, LFK 2c)", "", "", "", "", "", "", "", ""],
                   cols=[128.0] + [45.6] * 8, pt=8.0, h_rangee=16.0)


SARYS = {
    "tongolo": tongolo,
    "tsirinteny": _tsirinteny_s2,
    "fandrasana": _fandrasana_s2,
    "rima": _rima_s2,
    "narivony": _narivony_s2,
    "planning": _planning_s2,
    "isa": _isa_s2,
    "sokajin-teny": lambda: sokajy(
        ["SOKAJIN-TENY", "(FRP, LFK 2b)"],
        [("Mpanoritra", ["i · ny · ilay", "ry · Ra-/Re · Ikala"]),
         ("Mpamaritra", ["mpamari-toetra", "mpamaritr'isa"]),
         ("Hafa", ["anjara asa fototra", "sy fameno"])]),
    "mpanoritra": lambda: boites(
        [["i", "anaran'olona tsy misy Ra-", "Tonga i Naivo."],
         ["ny", "alohan'ny anarana sy ny karazan-teny rehetra", "ny tanindrazana, ny marina"],
         ["ilay", "zavatra tondroina mafimafy / efa noresahina", "Moa efa tonga teo ilay mpandrafitra ?"],
         ["ry", "anaran'olona maro miaraka", "Ho avy ry Rabe mianakavy."],
         ["Ra-/Re", "mitambatra amin'ny anarana mandrakariva", "Misaotra betsaka anao Ranaotra."],
         ["Ikala", "anaram-bosotra olona na biby vavy", "Vao nandatsaka Ikalamara…"]],
        tete=["Mpanoritra", "Fomba fampiasana azy (FRP, LFK 2b)", "Ôhatra"],
        cols=[70.0, 210.0, 213.0], pt=8.5, h_rangee=24.0),
    "mpamari-toetra": lambda: arbre(
        ["MPAMARI-TOETRA", "milaza endrika amam-bika, fihetsika, toetra"],
        [("foto-teny", ["tsy azo rasaina", "kely · faly · fohy", "miverin-droa : lavalava"]),
         ("aman-tovona", ["ma-dio", "maha-finaritra", "ka-hihitra · fa-rofy"]),
         ("aman-tovana", ["volo-ina", "nofo-s-ana", "vava-ana"]),
         ("aman-tsofoka", ["t-al-esaka", "b-il-itika", "s-ol-anga"]),
         ("aman-tsirinteny", ["ki-tratra-ina", "ka-ozatr(a)-ina", "ka-(ha)raka-ina"])],
        sous_ligne=["2.1", "2.2", "2.2", "2.2 · manamafy", "2.2"]),
    "rf-ho-l": lambda: boites(
        [["RF / Iharana", "Milalao baolina i Lita.", "Matoanteny + ENCY + Mpianao"],
         ["L / Iharana", "Baolina no lalaovin' i Lita.", "Lazaina + EM (misoratra)"],
         ["FKI mivany 2", "Lalaovina ny baolina.", "EM + L/Iharana"]],
        tete=["Famadihana ny RF ho L (FRP, LFK 2f)", "Ohatra", "Firafitry ny fehezanteny"],
        cols=[95.0, 220.0, 178.0], pt=9.0, h_rangee=24.0),
    "mandidy": lambda: boites(
        [["filaza tsotra", "Mividy fanafody ianao.", "misy ny mpisolo tena « ianao »"],
         ["filaza mandidy", "Mividiana fanafody.", "tsy hita intsony ny lazaina"],
         ["vakio", "Vakina > vakio", "filaza mandidy mahazitra"],
         ["soavà", "Soa > soa-v-a", "misy fanatsaram-peo « -v- »"]],
        tete=["Filaza mandidy (FRP, LFK 2g)", "Ohatra", "Fanamarihana"],
        cols=[100.0, 175.0, 218.0], pt=9.0, h_rangee=22.0),
    "literatiora": lambda: sokajy(
        ["LAHATSORATRA MANORITSORITRA", "(FRP, LI 1a)"],
        [("firafiny", ["lamina tsy mikorontana", "fatra : habe, hafohy,", "halava, hakely",
                       "sehatra ifantohan'ny", "fijery sy ny fisainana"]),
         ("endrika ivelany", ["filaza ankehitriny", "mari-piatoana betsy", "mpamari-toetra",
                              "teny verindroa", "fehezanteny fohy"]),
         ("votoatiny", ["toy ny mahita", "mivantana", "tsy misy mpandray", "anjara afa-tsy ny",
                        "mpanoratra ihany"])],
        titre="Ny mampiavaka ny lahatsoratra manoritsoritra"),
}


SARYS["karazana-tsirinteny"] = lambda: arbre(
    ["TSIRINTENY 4", "karazana (FRP, LFK 2e)"],
    [("Tovona", ["mivaky : *m-*", "tsy mivaky :", "*a-*, *voa-*,", "*tafa-*, *ha-*"]),
     ("Tovana", ["*-ana*", "*-ina*", "*nofosana* :", "*nofo-s-ana*"]),
     ("Sara-droa", ["roa ampahany", "*i-* + *-ana*", "*filalaovana*", "*f-i-lalao-v-ana*"]),
     ("Tsofoka", ["manatevina", "fototeny", "*s-in-aritra*", "*t-al-esaka*"])],
    sous_ligne=["1 · 2", "-ana na -ina", "tsy vakiny miova", "manamafy ny hevitra"])

SARYS["tovona-mivaky"] = lambda: lisa(
    ["*milalao*", "*nilalao*", "*hilalao*", "*mianaka*", "*mihanaka*", "*manantitra*",
     "*manatitra*"],
    ["*m-* + *Φ-* : ankehitriny", "*m-* → *n-* : lasa (n-i-lalao)",
     "*m-* → *h-* : ho avy (h-i-lalao)", "*m-* + *an-* + *anaka*", "*m-* + *ian-* + *anaka*",
     "*m-* + *an-* + *antitra*", "*m-* + *atitra* (manatona/manantona, FRP 1a)"],
    tete="Tovona mivaky + fototeny — araka ny FRP (LFK 2a sy 1a)",
    cols=(2600, 4000, 3267), haut=20.0, taille=10.5, puce=False)[0:3]

SARYS["andininy"] = lambda: boites(
    [["**andininy** (strophe)", "ampahany amin'ny tononkalo : andalana vitsivitsy miaraka",
      "*Iny Ankaratra iny* = 6 andininy"],
     ["**andalana** (vers)", "ireo teny manaraka ny tsipika iray", "4 andalana isaky ny andininy"],
     ["**zanapeo**", "ny ampahany amin'ny feo mitondra (na tsy mitondra) ny tsindry",
      "*ma*-di-ka ; *tsi*-ri-ry"],
     ["**ngadona**", "« *zanapeo mitondra ny tsindrim-peo* » — tononina mafy",
      "*la*-lao (ngadona + tsaikona)"],
     ["**tsaikona**", "« *zanapeo tsy mitondra ny tsindry* »", "—"],
     ["**ba**", "« *ny fifandimbiasan'ireo* » (ngadona sy tsaikona)", "*lila* · *ralila* · "
      "*taralila*"]],
    tete=["Singa (FRP, LII 2d)", "Ny atao hoe", "Ohatra"],
    cols=[110.0, 220.0, 163.0], pt=8.5, h_rangee=22.0)

SARYS["sokajin-dahatsoratra"] = lambda: sokajy(
    ["DAHATSORATRA", "araka ny votoatiny sy ny fomba fitononana"],
    [("manoritsoritra", ["mandoko zavatra iray", "manasongadina ny", "toetrany, ny endriny,",
                         "ny fihetsiny, ny bikany"]),
     ("tononkalo", ["misy ngadona sy", "rima", "*Iny Ankaratra iny*", "*Takariva*"]),
     ("tantara / hainteny", ["tsy voalaza ao", "amin'ity LFK ity", "(jereo ny LFK hafa)"])],
    titre="Ny sokajin-dahatsoratra (FRP, LI 1a) — ny an'ny tononkalo ihany no "
          "nohamboarina eto")


def sary(cle):
    f = SARYS.get(cle)
    if f is None:
        raise KeyError("tsy misy sary : " + cle)
    return f()


def main():
    out = "/tmp/sary_fano"
    os.makedirs(out, exist_ok=True)
    for cle in SARYS:
        try:
            ops, w, h = sary(cle)
        except Exception as e:                                     # noqa: BLE001
            print("HALAVO : %-18s %s" % (cle, e))
            continue
        io_ = st.svg_de(ops, w, h)
        png = st.png_de(ops, w, h, echelle=2.0)
        with open(os.path.join(out, cle + ".svg"), "wb") as f:
            f.write(io_)
        if png:
            with open(os.path.join(out, cle + ".png"), "wb") as f:
                f.write(png)
        print("ok  %-18s %6.1f × %6.1f pt  (%d ops)" % (cle, w, h, len(ops)))


if __name__ == "__main__":
    main()
