# -*- coding: utf-8 -*-
"""
Contrôle anti-plagiat par n-grammes — Collection J-Learn.

Compare un manuel .docx (ou .md) à une ou plusieurs sources externes
(FRP du MEN, manuel source fourni par l'utilisateur…) et signale toute
séquence de N mots consécutifs commune aux deux.

Applique la règle critique 15 du skill jlearn-manuel-scolaire v18 :
les faits sont reprenables, les formulations ne le sont pas.

Usage :
    python3 scripts/check_plagiat.py MANUEL.docx SOURCE1.txt [SOURCE2.txt ...]
    python3 scripts/check_plagiat.py MANUEL.docx SOURCE.txt --n 10 --json rapport.json

Options :
    --n N         longueur du n-gramme en mots (défaut 10)
    --min-car N   ignore les n-grammes de moins de N caractères (défaut 40)
    --json FIC    écrit le rapport détaillé en JSON
    --quiet       n'affiche que le résumé

Code de sortie : 0 si aucun recouvrement, 1 si au moins un est trouvé
(permet de l'utiliser comme garde-fou avant livraison).
"""
import argparse
import json
import os
import re
import sys
import unicodedata
import zipfile
from xml.etree import ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

# Formules de structure attendues dans toute fiche J-Learn : leur présence
# des deux côtés n'est pas du plagiat, c'est le gabarit officiel du skill.
BOILERPLATE = [
    "fiche de préparation",
    "déroulement de la leçon",
    "étapes et durée",
    "technique et stratégie",
    "support et matériel",
    "objectif spécifique",
    "résultat d'apprentissage spécifique",
    "aujourd'hui nous allons apprendre",
    "après cette séance vous serez capables",
    "regardez et observez bien",
    "les élèves écoutent",
    "les élèves observent silencieusement",
    "réponse attendue",
    "valeurs à véhiculer",
    "conseils et orientations pédagogiques",
    "les apprenants sont amenés à",
]

# Dénominations imposées : noms de maladies, d'organes et de notions que le
# Programme d'Études fixe en toutes lettres. On ne peut pas les reformuler sans
# cesser de nommer correctement la chose — et en sciences, mal nommer est une
# faute plus grave qu'une coïncidence de six mots.
#
# Le français élide beaucoup ("de l'utérus" = 3 tokens), si bien qu'un simple
# nom de maladie atteint le seuil de 6 mots à lui seul : « cancer du col de
# l'utérus » les épuise sans qu'aucune phrase n'ait été empruntée.
#
# Ces dénominations sont donc exemptées. Elles ne couvrent QUE le terme lui-même :
# dès qu'une formulation propre au FRP s'y ajoute, le passage redevient signalé.
TERMINOLOGIE = [
    "cancer du col de l'utérus",
    "le cancer du col de l'utérus",
    "du cancer du col de l'utérus",
    "et le cancer du col de l'utérus",
    "la prévention du cancer du col",
    "la prévention de la fistule obstétricale",
    "les causes de la fistule obstétricale",
    "l'âge de la première grossesse",
]


def lire_docx(chemin):
    """Extrait tout le texte d'un .docx (paragraphes + tableaux)."""
    with zipfile.ZipFile(chemin) as z:
        racine = ET.fromstring(z.read("word/document.xml"))
    morceaux = []
    for p in racine.iter(W + "p"):
        txt = "".join(n.text or "" for n in p.iter(W + "t"))
        if txt.strip():
            morceaux.append(txt.strip())
    return "\n".join(morceaux)


def lire_texte(chemin):
    if chemin.lower().endswith(".docx"):
        return lire_docx(chemin)
    with open(chemin, encoding="utf-8", errors="replace") as f:
        return f.read()


def normaliser(texte):
    """Minuscules, sans accents, ponctuation réduite — pour comparer le fond."""
    texte = texte.lower()
    texte = unicodedata.normalize("NFD", texte)
    texte = "".join(c for c in texte if unicodedata.category(c) != "Mn")
    texte = texte.replace("’", "'").replace("œ", "oe").replace("æ", "ae")
    texte = re.sub(r"[^a-z0-9'\s]", " ", texte)
    return re.sub(r"\s+", " ", texte).strip()


def mots_avec_position(texte):
    """Liste des mots normalisés + leur offset dans le texte d'origine."""
    resultat = []
    for m in re.finditer(r"\S+", texte):
        brut = m.group(0)
        net = normaliser(brut)
        if net:
            for mot in net.split():
                resultat.append((mot, m.start()))
    return resultat


def ngrammes(mots, n):
    """{ngramme: [positions]} sur une liste (mot, offset)."""
    index = {}
    for i in range(len(mots) - n + 1):
        cle = " ".join(m for m, _ in mots[i:i + n])
        index.setdefault(cle, []).append(i)
    return index


def est_boilerplate(ngramme):
    for b in BOILERPLATE:
        if normaliser(b) in ngramme:
            return True
    # Dénomination imposée : on exige l'égalité stricte, pas l'inclusion.
    # Le n-gramme doit être EXACTEMENT le terme officiel ; s'il déborde d'un
    # seul mot, c'est qu'une formulation l'entoure et le contrôle s'applique.
    for terme in TERMINOLOGIE:
        if normaliser(terme) == ngramme.strip():
            return True
    return False


def fusionner(positions, n):
    """Fusionne les n-grammes qui se chevauchent en un seul passage."""
    if not positions:
        return []
    positions = sorted(positions)
    blocs = [[positions[0], positions[0] + n]]
    for p in positions[1:]:
        if p <= blocs[-1][1]:
            blocs[-1][1] = max(blocs[-1][1], p + n)
        else:
            blocs.append([p, p + n])
    return blocs


def contexte(texte, mots, debut, fin, marge=60):
    """Restitue le passage tel qu'il apparaît dans le texte d'origine."""
    a = mots[debut][1]
    b = mots[min(fin, len(mots) - 1)][1]
    extrait = texte[a:b + 40].replace("\n", " ")
    avant = texte[max(0, a - marge):a].replace("\n", " ")
    return ("…" + avant if avant else "") + "⟦" + extrait.strip() + "⟧"


def analyser(manuel_txt, sources, n, min_car):
    mots_m = mots_avec_position(manuel_txt)
    idx_m = ngrammes(mots_m, n)
    rapport = []

    for nom, src_txt in sources:
        mots_s = mots_avec_position(src_txt)
        idx_s = ngrammes(mots_s, n)
        communs = set(idx_m) & set(idx_s)
        communs = {c for c in communs if len(c) >= min_car and not est_boilerplate(c)}

        positions = []
        for c in communs:
            positions.extend(idx_m[c])
        blocs = fusionner(positions, n)

        trouvailles = []
        for debut, fin in blocs:
            passage = " ".join(m for m, _ in mots_m[debut:fin])
            trouvailles.append({
                "mots": fin - debut,
                "passage": passage,
                "contexte_manuel": contexte(manuel_txt, mots_m, debut, fin),
            })
        trouvailles.sort(key=lambda x: -x["mots"])
        rapport.append({
            "source": nom,
            "ngrammes_communs": len(communs),
            "passages": trouvailles,
            "mots_recouverts": sum(t["mots"] for t in trouvailles),
        })
    return rapport, len(mots_m)


def main():
    ap = argparse.ArgumentParser(description="Contrôle anti-plagiat J-Learn")
    ap.add_argument("manuel")
    ap.add_argument("sources", nargs="+")
    ap.add_argument("--n", type=int, default=10)
    ap.add_argument("--min-car", type=int, default=40)
    ap.add_argument("--json")
    ap.add_argument("--quiet", action="store_true")
    a = ap.parse_args()

    if not os.path.exists(a.manuel):
        print(f"Introuvable : {a.manuel}", file=sys.stderr)
        return 2

    manuel_txt = lire_texte(a.manuel)
    sources = []
    for s in a.sources:
        if not os.path.exists(s):
            print(f"Source introuvable, ignorée : {s}", file=sys.stderr)
            continue
        sources.append((os.path.basename(s), lire_texte(s)))
    if not sources:
        print("Aucune source lisible.", file=sys.stderr)
        return 2

    rapport, total_mots = analyser(manuel_txt, sources, a.n, a.min_car)

    print("=" * 74)
    print(f"CONTRÔLE ANTI-PLAGIAT — n-grammes de {a.n} mots")
    print(f"Manuel : {os.path.basename(a.manuel)}  ({total_mots} mots)")
    print("=" * 74)

    total_alertes = 0
    for r in rapport:
        pct = r["mots_recouverts"] / total_mots * 100 if total_mots else 0
        etat = "OK" if not r["passages"] else "ALERTE"
        print(f"\n[{etat}] source : {r['source']}")
        print(f"  passages communs : {len(r['passages'])}")
        print(f"  mots recouverts  : {r['mots_recouverts']} ({pct:.2f} % du manuel)")
        total_alertes += len(r["passages"])
        if not a.quiet:
            for t in r["passages"][:15]:
                print(f"\n    • {t['mots']} mots consécutifs")
                print(f"      {t['contexte_manuel'][:300]}")
            if len(r["passages"]) > 15:
                print(f"\n    … et {len(r['passages']) - 15} autres passages")

    print("\n" + "=" * 74)
    if total_alertes == 0:
        print("RÉSULTAT : aucun recouvrement — conforme à la règle critique 15.")
    else:
        print(f"RÉSULTAT : {total_alertes} passage(s) à reformuler avant livraison.")
    print("=" * 74)

    if a.json:
        with open(a.json, "w", encoding="utf-8") as f:
            json.dump({"manuel": a.manuel, "n": a.n, "total_mots": total_mots,
                       "rapport": rapport}, f, ensure_ascii=False, indent=2)
        print(f"Rapport JSON : {a.json}")

    return 1 if total_alertes else 0


if __name__ == "__main__":
    sys.exit(main())
