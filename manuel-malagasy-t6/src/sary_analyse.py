# -*- coding: utf-8 -*-
"""sary_analyse.py — mpanamarika ny toerana hitoeran'ny sary **ao anaty lesona ihany**.

Mamaky ny rakitry ny mpampianatra (`~/.tanana/t6_v1.docx`), manamora ny paragrafon'ny
`LESONA :` isaky ny seho (elanelan'ny `LESONA :` sy ny `FANAZARAN-TENA`) ary mamerina ny
lohateny fizarana (ny toerana azon'ny sary arahina) miaraka amin'ny kaoperiny.

    ./run.sh src/sary_analyse.py            # tabilao
    ./run.sh src/sary_analyse.py --feno      # + lahatsoratra feno (letra 90)
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import docx                                                 # noqa: E402

LOHARANO_GIT = "origin/main:Nos manuels/Malagasy T6 V1.docx"
RAKITRA = os.environ.get("JLEARN_V1", os.path.expanduser("~/.tanana/t6_v1.docx"))


def atao_misy(chemin=RAKITRA, loharano=LOHARANO_GIT):
    """`~/.tanana` tsy ao amin'ny fitehirizana maharitra ny vatasampanana (fakan-tanana
    ny sandbox) : alaina avy amin'ny `git` indray rehefa tsy misy."""
    if os.path.exists(chemin):
        return chemin
    dos = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # /…/jlearn-pack
    os.makedirs(os.path.dirname(chemin), exist_ok=True)
    import subprocess
    r = subprocess.run(["git", "-C", dos, "show", loharano], stdout=subprocess.PIPE,
                       stderr=subprocess.PIPE)
    if r.returncode != 0:
        subprocess.run(["git", "-C", dos, "fetch", "-q", "origin", "main"], check=False)
        r = subprocess.run(["git", "-C", dos, "show", loharano], stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE)
        if r.returncode != 0:
            raise SystemExit("TSY AZO NALAINA : %s\n  %s" % (loharano, r.stderr.decode()[:200]))
    io.open(chemin, "wb").write(r.stdout)
    print("nalaina avy amin'ny git : %s (%d o)" % (chemin, len(r.stdout)))
    return chemin
FENO = "--feno" in sys.argv

# ny lohateny fizarana azon'ny sary arahina : « 1. Famaritana », « Ny ngadona: », « a. … »,
# « • … », na tarika fohy (<= 56) manomboka amin'ny majuskula
SOSO = re.compile(r"^(?:\d+[a-z]?\.\s|\(?[a-z]\)\s|[•-]\s|Ny |Ireo |Ahoana |Inona |Ohatra|Fanamarihana|Ny$)")


def isika():
    d = docx.Document(atao_misy())
    P = d.paragraphs
    heads = [(i, p.text.strip()) for i, p in enumerate(P)
             if re.match(r"^SEHO \d+ — ", p.text.strip()) and i > 10]
    for i, t in heads:
        n = int(re.match(r"^SEHO (\d+)", t).group(1))
        k = [j for j in range(i, len(P)) if P[j].text.strip() == "LESONA :"]
        f = [j for j in range(i, len(P)) if P[j].text.strip() == "FANAZARAN-TENA"]
        if not k or not f:
            print("!! SEHO %d : tsy feno ny boribory (LESONA=%s FANAZARAN-TENA=%s)"
                  % (n, bool(k), bool(f)))
            continue
        a, b = k[0], f[0]
        print("\n===== SEHO %d — %s   [§%d…§%d]" % (n, t.split("—")[1].strip()[:44], a, b))
        for j in range(a + 1, b):
            x = P[j].text.strip()
            if not x:
                continue
            lohateny = len(x) <= 56 and (SOSO.match(x) or x.endswith(":")
                                         or x == x.upper() and len(x) > 6)
            if lohateny or FENO:
                print("   %s§%-4d %s" % ("*" if lohateny else " ", j,
                                         x if FENO else x[:70]))
        print("   (ny baiko dia manomboka amin'ny §%d : TSY ATAFANA SARY)" % b)


if __name__ == "__main__":
    atao_misy()
    isika()
