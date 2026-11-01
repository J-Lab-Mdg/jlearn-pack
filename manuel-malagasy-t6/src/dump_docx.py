# -*- coding: utf-8 -*-
"""Fandaharana fanonona ny rakitra .docx : paragrafo + DOANY AMIN'NY TABILAO,
ary ny mpanaraka typographique (loko, matora, sous-lignage, liste isan'ny).
Ilaina ity satria ny dika teksy nentina teo aloha (`refs/EXEMPLE_DU_MANUEL.txt`) dia
tsy nanao ny zavotra anaty takela — ko ny filaharana sy ny fisehon'ny takela no
noreferena amin'ny fahadisoana.

    # le modele n'est pas dans cette branche : on le sort de `main` sans le committer
    git show "origin/main:Nos manuels/EXEMPLE DE MALAGASY.docx" > refs/modele.docx
    ./run.sh src/dump_docx.py refs/modele.docx refs/EXEMPLE_DU_MANUEL.txt
    rm refs/modele.docx
"""
import sys
import zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def _texte(el):
    return "".join(t.text or "" for r in el.iter(W + "r") for t in r.findall(W + "t"))


def _props(par):
    pPr = par.find(W + "pPr")
    out = []
    if pPr is not None:
        for k in ("jc", "numPr", "spacing", "ind"):
            e = pPr.find(W + k)
            if e is not None:
                vals = ",".join("%s=%s" % (a.split("}")[-1], v) for a, v in e.attrib.items())
                out.append("%s(%s)" % (k, vals))
    for r in par.findall(W + "r"):
        rPr = r.find(W + "rPr")
        if rPr is None:
            continue
        st = [k for k in ("b", "i") if rPr.find(W + k) is not None]
        u = rPr.find(W + "u")
        if u is not None:
            st.append("u")
        c = rPr.find(W + "color")
        if c is not None:
            st.append(c.get(W + "val"))
        sz = rPr.find(W + "sz")
        if sz is not None:
            st.append("%spt" % (int(sz.get(W + "val")) / 2.0))
        if st:
            out.append("run:" + "|".join(st))
        break
    return " ".join(out)


def main():
    entree, sortie = sys.argv[1], sys.argv[2]
    z = zipfile.ZipFile(entree)
    body = ET.fromstring(z.read("word/document.xml")).find(W + "body")
    lignes = ["# dika feno ny %s — paragrafo sy tabilao ary ny mpanaraka" % entree,
              "# (ojaina amin'ny fandrindrana ny rakitra vaovao)", ""]
    ntab = 0
    for el in body:
        tag = el.tag.replace(W, "")
        if tag == "p":
            txt = _texte(el).strip()
            props = _props(el)
            if txt or props:
                lignes.append(("[p] " if txt else "[.] ") + (txt or "(banga)") +
                              ("   {" + props + "}" if props else ""))
        elif tag == "tbl":
            ntab += 1
            tblPr = el.find(W + "tblPr")
            style = tblPr.find(W + "tblStyle")
            w = tblPr.find(W + "tblW")
            grid = [g.get(W + "w") for g in el.find(W + "tblGrid")]
            lignes.append("")
            lignes.append("[TABILAO %d] style=%s w=%s kolona=%s" %
                          (ntab, style.get(W + "val") if style is not None else "-",
                           w.get(W + "w") if w is not None else "-", "/".join(grid)))
            for ri, tr in enumerate(el.findall(W + "tr")):
                for tc in tr.findall(W + "tc"):
                    parts = []
                    for par in tc.findall(W + "p"):
                        t = _texte(par).strip()
                        if t:
                            parts.append(t)
                    shd = tc.find(W + "tcPr/" + W + "shd")
                    span = tc.find(W + "tcPr/" + W + "gridSpan")
                    merge = tc.find(W + "tcPr/" + W + "vMerge")
                    marque = []
                    if shd is not None:
                        marque.append("fond=" + shd.get(W + "fill"))
                    if span is not None:
                        marque.append("etane-sur-" + span.get(W + "val"))
                    if merge is not None:
                        marque.append("fusion")
                    lignes.append("  <r%d c%d> %s%s" % (ri, tr.findall(W + "tc").index(tc),
                                                         " \\n ".join(parts) or "(banga)",
                                                         "  [" + " ".join(marque) + "]"
                                                         if marque else ""))
            lignes.append("")
    with open(sortie, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lignes) + "\n")
    print("ecrit :", sortie, len(lignes), "lignes,", ntab, "tabilao")


if __name__ == "__main__":
    main()
