import io, sys, re

BANNER_FN = '''// Bandeau de section genere (LECON, REVISION, EXAMEN)
function banner(text) {
  return p(text, { bold: true, size: 24, align: AlignmentType.CENTER, color: BLUE, spacingAfter: 60 });
}

'''

def patch_builders(path):
    s = io.open(path, encoding="utf-8").read()
    if "function banner(text)" not in s:
        s = s.replace("function leconBanner() {", BANNER_FN + "function leconBanner() {", 1)
    # leconBanner deleque a banner
    s = re.sub(
        r"function leconBanner\(\) \{\n.*?\n\}",
        "function leconBanner() {\n  return banner(\"LE\u00c7ON\");\n}",
        s, flags=re.S)
    if "leconBanner, leconSousTitre" in s and "banner, leconBanner" not in s:
        s = s.replace("leconTitre, leconBanner, leconSousTitre", "leconTitre, banner, leconBanner, leconSousTitre", 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("builders ok:", path)


def patch_assemble(path):
    s = io.open(path, encoding="utf-8").read()
    rev_old = '''  out.push(B.sectionHeading("S\u00c9ANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(rev.titre,'''
    rev_new = '''  out.push(B.sectionHeading("S\u00c9ANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.banner("R\u00c9VISION"));
  out.push(B.p(rev.titre,'''
    assert rev_old in s, "rev anchor missing in " + path
    s = s.replace(rev_old, rev_new, 1)

    ex_old = '''  out.push(B.sectionHeading("S\u00c9ANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(ex.titre,'''
    ex_new = '''  out.push(B.sectionHeading("S\u00c9ANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.banner("EXAMEN"));
  out.push(B.p(ex.titre,'''
    assert ex_old in s, "examen anchor missing in " + path
    s = s.replace(ex_old, ex_new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("assemble ok:", path)


def patch_lecon(path):
    s = io.open(path, encoding="utf-8").read()
    if "B.banner(\"LE\u00c7ON\")" in s:
        print("lecon deja ok:", path)
        return
    if "B.leconBanner();" in s:
        s = s.replace("B.leconBanner();", "B.banner(\"LE\u00c7ON\");", 1)
    else:
        old = '''  const out = [new B.Paragraph({ children: [new B.PageBreak()] })];
  out.push(B.leconTitre(topic.titre, anchor));'''
        new = '''  const out = [new B.Paragraph({ children: [new B.PageBreak()] })];
  out.push(B.banner("LE\u00c7ON"));
  out.push(B.leconTitre(topic.titre, anchor));'''
        assert old in s, "lecon anchor missing in " + path
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8").write(s)
    print("lecon ok:", path)


for proj in ("ses-t10-projet", "ses-t11-ose-projet", "ses-t12-ose-projet"):
    patch_builders(proj + "/src/builders.js")
    patch_lecon(proj + "/src/seance-generator.js")

for proj in ("ses-t11-ose-projet", "ses-t12-ose-projet"):
    patch_assemble(proj + "/src/assemble.js")
