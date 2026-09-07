#!/usr/bin/env python3
"""Batterie de controle du manuel 6e. Verifie les regles critiques du skill."""
import re, sys, zipfile
from lxml import etree

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
def q(t): return W + t

path = sys.argv[1] if len(sys.argv) > 1 else \
    "telechargements/Manuel-Mathematiques-6e-JLearn-V1.docx"

z = zipfile.ZipFile(path)
xml = z.read("word/document.xml")
root = etree.fromstring(xml)
body = root.find(q("body"))
# Un saut de ligne entre paragraphes : sinon la fin d'un paragraphe se colle
# au debut du suivant et cree de faux positifs (ex. « ... 540.4. Encadrer »).
def para_text(p_):
    """Texte d'un paragraphe, en traitant <w:br/> comme un vrai saut de ligne."""
    buf = []
    for node in p_.iter(q("t"), q("br")):
        buf.append("\n" if node.tag == q("br") else (node.text or ""))
    return "".join(buf)

paras = [para_text(p_) for p_ in root.iter(q("p"))]
txt = "\n".join(paras)

res = []
def chk(label, val, ok):
    res.append((label, val, ok))

# 1. sectPr unique
chk("sectPr (attendu 1)", len(list(root.iter(q("sectPr")))),
    len(list(root.iter(q("sectPr")))) == 1)

# 2. namespaces
chk("namespaces ns0 (attendu 0)", xml.count(b"ns0:"), xml.count(b"ns0:") == 0)

# 3. aucune date calendaire (regle 11)
dates = re.findall(r"\b\d{2}/\d{2}/\d{2,4}\b", txt)
annees = re.findall(r"\b(?:rentr[ée]e|ann[ée]e scolaire)\s+20\d\d\b", txt, re.I)
chk("dates calendaires (attendu 0)", len(dates) + len(annees), not dates and not annees)

# 4. separateur decimal : jamais un point entre deux chiffres.
# On ecarte les contre-exemples explicites (« et non 1.250.000 »), qui montrent
# justement a l'eleve l'ecriture a proscrire.
pts = [m.group() for m in re.finditer(r"\d\.\d", txt)
       if "et non" not in txt[max(0, m.start() - 40):m.start()]]
chk("point decimal (attendu 0)", len(pts), not pts)

# 5. pas de VOAMBOLANA (interdit a partir de la 9e)
chk("VOAMBOLANA (attendu 0)", txt.count("VOAMBOLANA"), "VOAMBOLANA" not in txt)

# 6. terme incorrect "bareme(s)" conjugue
chk("'baremé' (attendu 0)", len(re.findall(r"barém[ée]", txt, re.I)),
    not re.findall(r"barém[ée]", txt, re.I))

# 7. grilles de deroulement : ligne 1 = 5 cellules dont un gridSpan=2 ; ligne 2 = 6
grilles = ok6 = 0
for tbl in body.iter(q("tbl")):
    trs = tbl.findall(q("tr"))
    if not trs: continue
    c0 = trs[0].findall(q("tc"))
    if len(c0) == 5 and any(
        tc.find(f"{q('tcPr')}/{q('gridSpan')}") is not None for tc in c0):
        grilles += 1
        if len(trs) > 1 and len(trs[1].findall(q("tc"))) == 6:
            ok6 += 1
chk("grilles de deroulement", grilles, grilles > 0)
chk("  dont en-tete 6 colonnes conforme", ok6, ok6 == grilles)

# 8. nom des types d'exercice jamais affiche
interdits = [t for t in ("QCM", "Texte à trous", "Vrai ou Faux", "Appariement")
             if re.search(r"^\s*%s\s*:" % re.escape(t), txt, re.M)]
chk("types d'exercice nommes (attendu 0)", len(interdits), not interdits)

# 9. presence des blocs attendus
for lib, motif in (("FICHE DE PRÉPARATION", "FICHE DE PRÉPARATION"),
                   ("LEÇON", "LEÇON"), ("EXERCICES", "EXERCICES"),
                   ("Corrigé", "Corrigé"), ("À retenir", "À retenir")):
    chk(f"bloc « {lib} »", txt.count(motif), txt.count(motif) > 0)

# 10. police unique
fonts = {f.get(q("ascii")) for f in root.iter(q("rFonts")) if f.get(q("ascii"))}
chk("polices utilisees", ",".join(sorted(fonts)) or "-",
    fonts <= {"Times New Roman"})

# 11. signets et liens internes coherents
marks = {b.get(q("name")) for b in root.iter(q("bookmarkStart"))}
links = {h.get(q("anchor")) for h in root.iter(q("hyperlink")) if h.get(q("anchor"))}
chk("signets", len(marks - {"_GoBack"}), True)
chk("liens internes orphelins (attendu 0)", len(links - marks), not (links - marks))

# 12. exercices : au moins 4 items -> approxime par le nombre d'exercices notes
chk("exercices notes", len(re.findall(r"Exercice \d+\.", txt)), True)
chk("baremes '(N points)'", len(re.findall(r"\(\d+ points?\)", txt)), True)

# 13. duree affichee seulement sur I / II / III
sous = re.findall(r"\n\s*[1-6]\.\s+\w[^\n]*\(\d+ min\)", txt)
chk("duree sur une sous-etape (attendu 0)", len(sous), not sous)

w = max(len(l) for l, _, _ in res)
print(f"\n  Controle — {path}\n")
bad = 0
for lib, val, ok in res:
    mark = "OK " if ok else "!! "
    if not ok: bad += 1
    print(f"  {mark} {lib.ljust(w)}  {val}")
print(f"\n  {len(res) - bad}/{len(res)} verifications passees\n")
sys.exit(1 if bad else 0)
