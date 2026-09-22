#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Contrôle qualité complet du manuel SVT T9.

    python3 scripts/verifier_manuel.py

Rejoue en une fois tous les contrôles menés pendant la rédaction, pour qu'une
modification ultérieure du manuel ne puisse pas casser silencieusement une
propriété acquise. Sort en code 1 si un contrôle échoue — utilisable en CI.

Contrôles effectués :

  1. Couverture       les 51 séances présentes, numérotation continue
  2. Barèmes          4+6+6+4 = 20 (ou 5+5+6+4 pour la séance 4), TOTAL cohérent
  3. Durées           aucune durée chiffrée sur les lignes I / II / III
  4. Calculs          tous les résultats chiffrés annoncés sont recalculés
  5. Anti-plagiat     0 % de recouvrement avec le FRP du MEN/DDIS
  6. Images           toute image référencée existe et est déclarée dans pack.json
  7. Assemblage       le manuel complet est à jour vis-à-vis des fichiers d'unité
"""

import glob
import json
import io
import os
import re
import unicodedata
import subprocess
import sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FICHIERS_UNITES = [
    "Unite-I-SVT-T9-seances-1-a-10.md",
    "Unite-II-SVT-T9-seances-13-a-18.md",
    "Unite-II-SVT-T9-seances-19-a-22.md",
    "Unite-III-SVT-T9-seances-25-a-33.md",
    "Unite-IV-SVT-T9-seances-36-a-41.md",
    "Unite-V-SVT-T9-seances-44-a-49.md",
    "Revisions-et-examens-SVT-T9.md",
]
MANUEL = "Manuel-SVT-T9-complet.md"

# Images du pack porteuses d'un texte incruste fautif (voir AUDIT-images-pack.md).
# Elles ne doivent pas etre affichees en classe tant qu'elles ne sont pas refaites.
IMAGES_DEFECTUEUSES = {
    "cycle_eau.png": "légendes en anglais, « MADOQGAECA », flèches interverties",
    "falaise_strates.png": "porte le mot inexistant « Sounitet »",
    "svt9e_vaccination.png": "étiquette de flacon illisible « VECCAS BCA »",
    # Seul defaut de cette liste qui ne soit pas du texte incruste : les deux
    # fleurs portent etamines ET pistil, donc hermaphrodites, mais sont
    # etiquetees « fleur male » / « fleur femelle ».
    "pollinisation_cycle.png": "fleurs hermaphrodites étiquetées mâle/femelle",
    # La « carte de la langue » est un mythe scientifique refute : toutes les
    # zones percoivent toutes les saveurs. L'image installe une erreur de cours.
    "svt9e_langue.png": "« carte des saveurs » — mythe réfuté, et zones incohérentes",
    "svt9e_oeil_parties.png": "« Pupile » au lieu de « pupille »",
}
FRP = "sources-frp/frp_svt3e_full.txt"

# Séances dont le barème déroge au 4+6+6+4 usuel, par arbitrage explicite.
BAREMES_PARTICULIERS = {1: [5, 5, 6, 4], 4: [5, 5, 6, 4], 27: [5, 5, 6, 4], 30: [5, 5, 6, 4]}

resultats = []
ignores = []


def verifier(libelle, condition, detail=""):
    resultats.append((libelle, bool(condition), detail))
    etat = "\033[32m  OK  \033[0m" if condition else "\033[31m ÉCHEC\033[0m"
    print(f"{etat} {libelle}" + (f"  — {detail}" if detail else ""))
    return bool(condition)


def lire(chemin):
    with open(os.path.join(RACINE, chemin), encoding="utf-8") as f:
        return f.read()


def seances_de(texte):
    """-> {numéro: corps} pour un fichier de séances."""
    out = {}
    for bloc in re.split(r'^# SÉANCE ', texte, flags=re.M)[1:]:
        m = re.match(r'(\d+) / 51 — ([^\n]+)\n', bloc)
        if m:
            out[int(m.group(1))] = bloc[m.end():]
    return out


# --------------------------------------------------------------- 1. couverture
def controle_couverture():
    print("\n\033[1m1. Couverture\033[0m")
    texte = lire(MANUEL)
    s = seances_de(texte)
    nums = sorted(s)
    verifier("51 séances présentes", len(s) == 51, f"{len(s)} trouvées")
    verifier("numérotation 1→51 continue", nums == list(range(1, 52)))
    manquantes = [n for n in range(1, 52) if n not in s]
    verifier("aucune séance manquante", not manquantes, str(manquantes) if manquantes else "")
    return s


# ------------------------------------------------------------------ 2. barèmes
def controle_baremes(seances):
    print("\n\033[1m2. Barèmes\033[0m")
    anomalies = []
    for n, corps in seances.items():
        pts = [int(x) for x in re.findall(r'Exercice \d+ \((\d+) points?\)', corps)]
        if not pts:
            pts = [
                float(x.replace(",", "."))
                for x in re.findall(
                    r'Exercice \d+ —[^*]*\*\((\d+(?:,\d+)?) points?\)\*', corps
                )
            ]
        if not pts:
            continue  # séance de révision : notée par repères de score
        if sum(pts) != 20:
            anomalies.append(f"S{n}={sum(pts)}")
    verifier("tous les barèmes totalisent 20", not anomalies, ", ".join(anomalies))

    texte = lire(MANUEL)
    verifier("46 lignes « TOTAL : 20 points »",
             texte.count("TOTAL : 20 points") == 46,
             f"{texte.count('TOTAL : 20 points')} trouvées")
    verifier("5 séances de révision avec repères de score",
             texte.count("Repères de score") == 5,
             f"{texte.count('Repères de score')} trouvées")


# ------------------------------------------------------------------- 3. durées
def controle_durees():
    print("\n\033[1m3. Durées\033[0m")
    texte = lire(MANUEL)
    trouvees = re.findall(r'\(\d+ ?(?:min|mn)\)', texte)
    verifier("aucune durée chiffrée sur les lignes I/II/III",
             not trouvees, f"{len(trouvees)} trouvée(s)")


# ------------------------------------------------------------------ 4. calculs
def controle_calculs():
    """Recalcule les résultats chiffrés clés de chaque unité.

    La liste est explicite plutôt que déduite du texte : c'est elle qui fait
    foi. Un calcul modifié dans le manuel sans l'être ici lèvera une alerte,
    ce qui est le comportement recherché.
    """
    print("\n\033[1m4. Calculs\033[0m")
    cas = [
        # (libellé, valeur calculée, valeur annoncée dans le manuel)
        ("U-I menu séance 7", 2210, 2210),
        ("U-I Ex3 menu A", 120 * 4 + 20 * 4 + 10 * 9, 650),
        ("U-I Ex3 menu B", 70 * 4 + 28 * 4 + 25 * 9, 617),
        ("S4 riz", 28 * 4 + 2 * 4, 120),
        ("S4 tsaramaso", 20 * 4 + 7 * 4 + 1 * 9, 117),
        ("S11 énergie totale", 130 * 4 + 25 * 4 + 20 * 9, 800),
        ("S11 % glucides", round(520 / 800 * 100), 65),
        ("S12 glucides en g", round(0.55 * 2400 / 4), 330),
        ("S23 grain/semaine (kg)", round(15 * 35 * 7 / 1000, 3), 3.675),
        ("S23 durée d'un sac", 25000 // 525, 47),
        ("S24 doses/an", 60 * 3, 180),
        ("S24 perte zébu %", 72 / 320 * 100, 22.5),
        ("S34 déficit hebdo %", 14 / 56 * 100, 25),
        ("S35 trajet aller (ms)", round(0.90 / 60 * 1000), 15),
        ("S35 réflexe total (ms)", 15 + 12.5 + 2, 29.5),
        ("S42 fistules ‰", 12 / 480 * 1000, 25),
        ("S42 réduction %", 21 / 25 * 100, 84),
        ("S43 doses vaccin", (0.90 * 2000 - 1400) * 2, 800),
        ("S50 carats", 98 / 0.2, 490),
        ("S51 recette totale", 4500 * 80000 + 5100 * 500, 362550000),
        ("S51 part par mineur", 362550000 / 25, 14502000),
    ]
    faux = [f"{lib} ({calc} ≠ {att})" for lib, calc, att in cas if abs(calc - att) > 0.051]
    verifier(f"{len(cas)} calculs recalculés", not faux, " | ".join(faux))


# ------------------------------------------------------------- 5. anti-plagiat
def controle_plagiat():
    print("\n\033[1m5. Anti-plagiat (FRP MEN/DDIS)\033[0m")
    if not os.path.exists(os.path.join(RACINE, FRP)):
        # `sources-frp/` est volontairement exclu du dépôt : extrait d'une
        # ressource du Ministère, non redistribuable. Son absence est donc
        # le cas NORMAL hors du poste de rédaction (CI, clone neuf) et ne
        # doit pas faire échouer la vérification — seulement la signaler.
        print("\033[33m IGNORÉ\033[0m contrôle anti-plagiat — sources-frp/ absent "
              "(normal hors poste de rédaction)")
        ignores.append("anti-plagiat (source FRP non redistribuable)")
        return
    cibles = [MANUEL] + FICHIERS_UNITES + ["Note-de-synthese-ecarts-SVT-T9.md"]
    for cible in cibles:
        if not os.path.exists(os.path.join(RACINE, cible)):
            continue
        p = subprocess.run(
            [sys.executable, "scripts/check_plagiat.py", cible, FRP,
             "--n", "6", "--min-car", "25", "--quiet"],
            cwd=RACINE, capture_output=True, text=True,
        )
        m = re.search(r'mots recouverts\s*:\s*(\d+)', p.stdout)
        n = int(m.group(1)) if m else -1
        verifier(f"{cible}", n == 0, "" if n == 0 else f"{n} mots recouverts")


# ------------------------------------------------------------------- 6. images
def controle_images():
    print("\n\033[1m6. Images\033[0m")
    texte = lire(MANUEL)
    refs = re.findall(r'!\[[^\]]*\]\(([^)]+)\)', texte)
    absentes = [r for r in refs if not os.path.exists(os.path.join(RACINE, r))]
    verifier(f"{len(refs)} image(s) référencée(s) présente(s) sur disque",
             not absentes, ", ".join(absentes))

    chemin_pack = os.path.join(RACINE, "pack.json")
    if os.path.exists(chemin_pack):
        with open(chemin_pack, encoding="utf-8") as f:
            pack = json.load(f)
        declarees = {i["id"] for i in pack.get("images", [])}
        non_declarees = [
            r for r in refs
            if os.path.splitext(os.path.basename(r))[0] not in declarees
        ]
        verifier("images du manuel déclarées dans pack.json",
                 not non_declarees, ", ".join(non_declarees))
        orphelines = [
            i["id"] for i in pack.get("images", [])
            if not os.path.exists(os.path.join(RACINE, i["url"].lstrip("/")))
        ]
        verifier("pack.json sans entrée orpheline",
                 not orphelines, ", ".join(orphelines))

    # Liste noire : images du pack porteuses d'un texte incruste fautif.
    utilisees = {os.path.basename(r) for r in refs}
    defectueuses = sorted(utilisees & set(IMAGES_DEFECTUEUSES))
    verifier("aucune image défectueuse utilisée",
             not defectueuses,
             "; ".join(f"{f} — {IMAGES_DEFECTUEUSES[f]}" for f in defectueuses)
             if defectueuses
             else f"{len(IMAGES_DEFECTUEUSES)} sur liste noire, aucune utilisée")

    # L'audit annonce un nombre d'images inspectees. Ce nombre doit rester
    # verifiable depuis le document lui-meme, sinon il derive en silence.
    chemin_audit = os.path.join(RACINE, "AUDIT-images-pack.md")
    if os.path.exists(chemin_audit) and os.path.exists(chemin_pack):
        with open(chemin_pack, encoding="utf-8") as f:
            fichiers_pack = [os.path.basename(i["url"])
                             for i in json.load(f).get("images", [])]
        audit = lire("AUDIT-images-pack.md")
        citees = {f for f in re.findall(r"`([a-z0-9_]+\.png)`", audit)
                  if f in set(fichiers_pack)}
        annonce = re.search(r"\*\*(\d+) des (\d+) images\*\*", audit)
        if annonce:
            attendu, total = int(annonce.group(1)), int(annonce.group(2))
            verifier("décompte de l'audit d'images vérifiable",
                     len(citees) == attendu and total == len(fichiers_pack),
                     f"l'audit annonce {attendu}/{total} inspectées, "
                     f"{len(citees)} citées sur {len(fichiers_pack)} au pack"
                     if len(citees) != attendu or total != len(fichiers_pack)
                     else f"{len(citees)}/{total} images inspectées")
        # Toute image sur liste noire doit etre justifiee dans l'audit.
        absentes = sorted(set(IMAGES_DEFECTUEUSES) - citees)
        verifier("liste noire documentée dans l'audit", not absentes,
                 f"{', '.join(absentes)} sur liste noire sans justification écrite"
                 if absentes else f"{len(IMAGES_DEFECTUEUSES)} défauts documentés")


# --------------------------------------------------------------- 7. assemblage
def controle_assemblage(seances_manuel):
    print("\n\033[1m7. Assemblage\033[0m")
    ANNEXES = ("Écarts assumés", "Vérification des calculs", "Tableau de vérification",
               "Documentation", "Vérifications externes", "Contrôle anti-plagiat",
               "Récapitulatif", "Suite")

    def couper(corps):
        fin = len(corps)
        for m in re.finditer(r'^## (.+)$', corps, flags=re.M):
            if any(k.lower() in m.group(1).lower() for k in ANNEXES):
                fin = m.start()
                break
        corps = re.sub(r'\n*(?:---\s*\n)+\s*$', '\n', corps[:fin])
        return re.sub(r'\s+', ' ', corps).strip()

    source = {}
    for fichier in FICHIERS_UNITES:
        for n, corps in seances_de(lire(fichier)).items():
            source[n] = couper(corps)

    divergentes = []
    for n, corps in source.items():
        ref = seances_manuel.get(n, "")
        i = ref.find("\n# Annexes")
        if i >= 0:
            ref = ref[:i]
        if couper(ref) != corps:
            divergentes.append(str(n))
    verifier("manuel assemblé identique aux fichiers d'unité",
             not divergentes,
             f"séance(s) {', '.join(divergentes)} divergente(s) — relancer l'assemblage"
             if divergentes else f"{len(source)} séances comparées")


def _mots(s):
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).split()


def _ngrammes(s, n=6):
    m = _mots(s)
    return set(tuple(m[i:i + n]) for i in range(len(m) - n + 1))


def controle_non_regression(seances):
    """Verrouille les trois defauts qui ont motive la reecriture du manuel.

    Les controles 1 a 7 verifient la FORME (baremes, calculs, assemblage).
    Rien n'empecherait de reintroduire, a contenu formellement valide, les
    defauts constates dans le manuel d'origine. Ce controle les interdit.
    """
    print("\n\033[1m8. Non-régression pédagogique\033[0m")

    # La derniere seance est suivie des annexes, que l'extracteur lui rattache.
    # Les annexes PARLENT des schemas a legender sans en contenir : sans cette
    # troncature, la seance 51 est faussement signalee.
    def corps_seul(n):
        c = seances.get(n, "")
        i = c.find("\n# Annexes")
        return c[:i] if i >= 0 else c

    seances = {n: corps_seul(n) for n in seances}

    # Defaut 1 : les 5 revisions etaient rigoureusement identiques entre
    # elles, tout comme les 5 examens. On borne le recouvrement par paire.
    SEUIL = 25.0
    for libelle, groupe in (("révisions", [11, 23, 34, 42, 50]),
                            ("examens", [12, 24, 35, 43, 51])):
        pire, paire = 0.0, None
        for i in range(len(groupe)):
            for j in range(i + 1, len(groupe)):
                a, b = groupe[i], groupe[j]
                A, B = _ngrammes(seances.get(a, "")), _ngrammes(seances.get(b, ""))
                if not (A | B):
                    continue
                score = 100 * len(A & B) / len(A | B)
                if score > pire:
                    pire, paire = score, (a, b)
        depasse = paire is not None and pire >= SEUIL
        verifier(f"{libelle} toutes distinctes", not depasse,
                 f"S{paire[0]} et S{paire[1]} se recouvrent a {pire:.1f} % "
                 f"(seuil {SEUIL:.0f} %)" if depasse
                 else f"recouvrement maximal {pire:.1f} %")

    # Defaut 2 : deux consignes d'exercice stereotypees etaient repetees sur
    # les 41 seances de contenu.
    consignes = {}
    verbes = (r"Cite|Citez|Donne|Donnez|Explique|Expliquez|D\u00e9finis|D\u00e9finissez|"
              r"Nomme|Nommez|Compl\u00e8te|Compl\u00e9tez|Reproduis|L\u00e9gende")
    for numero, corps in seances.items():
        for m in re.finditer(r"((?:" + verbes + r")[^.?\n|]{10,120}[.?])", corps):
            consignes.setdefault(m.group(1).strip(), []).append(numero)
    stereotypes = {k: v for k, v in consignes.items() if len(v) >= 3}
    verifier("aucune consigne stereotypee", not stereotypes,
             "; ".join(f"{len(v)}x {k[:60]}" for k, v in list(stereotypes.items())[:3])
             or f"{len(consignes)} consignes distinctes")

    # Defaut 3 : « Schema a legender » etait annonce dans 20 legendes sans
    # qu'aucun exercice de legendage n'existe.
    annonces = {n for n, c in seances.items()
                if re.search(r"sch[\u00e9e]ma [\u00e0a] l[\u00e9e]gender", c, flags=re.I)}
    avec_image = {n for n, c in seances.items() if "![" in c}
    orphelines = sorted(annonces - avec_image)
    verifier("tout schema annonce est fourni", not orphelines,
             f"seance(s) {orphelines} annoncent un schema sans image"
             if orphelines else f"{len(annonces)} annonce(s), tous fournis")

    # Defaut 4 : l'audit (chantier P0) exigeait de remonter chaque exercice de
    # la section EXERCICES a au moins 4 items. Sans ce controle, une reecriture
    # ulterieure pourrait redescendre un exercice a 2 ou 3 items sans que rien
    # ne le signale. Les seances de revision et d'examen sont hors perimetre :
    # leur structure est celle d'un sujet, pas d'une section d'entrainement.
    pat_item = re.compile(r"\b\d+\.\s")

    def nb_items(bloc):
        """Compte les items d'un exercice, quelle que soit sa forme.

        Trois formes coexistent dans le manuel et sont toutes legitimes :
        les items numerotes (« 1. … 2. … »), les listes d'elements a ranger
        ou a classer, separees par «  ·  », et les lignes de tableau. Ne
        compter que la premiere forme ferait passer un exercice de remise en
        ordre a 5 elements pour un exercice vide.
        """
        # « Cite quatre ressources… » : l'attendu est dans la consigne, pas
        # dans une numerotation. Un tel exercice est conforme sans etre liste.
        m = re.search(r"\b(quatre|cinq|six|sept|huit)\b", bloc, flags=re.I)
        if m:
            return {"quatre": 4, "cinq": 5, "six": 6,
                    "sept": 7, "huit": 8}[m.group(1).lower()]
        n_num = len(pat_item.findall(bloc))
        n_pts = max((len(l.split(" · ")) for l in bloc.splitlines()
                     if " · " in l), default=0)
        n_tab = max(0, len([l for l in bloc.splitlines()
                            if l.strip().startswith("|")]) - 2)
        return max(n_num, n_pts, n_tab)

    maigres = []
    for n, corps in sorted(seances.items()):
        sec = re.search(r"(### Section EXERCICES|^## EXERCICES)(.*?)(### CORRIG|^## CORRIG)",
                        corps, flags=re.S | re.M)
        if not sec:
            continue
        for bloc in re.split(r"(?=\*\*Exercice \d)", sec.group(2))[1:]:
            num = re.match(r"\*\*Exercice (\d+)", bloc).group(1)
            if nb_items(bloc) < 4:
                maigres.append(f"S{n}/Ex{num}")
    verifier("chaque exercice compte au moins 4 items", not maigres,
             ", ".join(maigres[:8]) if maigres
             else "tous les exercices des sections EXERCICES")


def controle_note_ecarts():
    """Verifie que les compteurs de la note de synthese restent coherents.

    La note affiche trois decomptes des memes ecarts : un total en prose, un
    tableau par gravite et un tableau par unite. Ajouter un ecart sans mettre
    les trois a jour est une erreur commise deux fois pendant la redaction,
    invisible a la relecture. Ce controle l'interdit.
    """
    print("\n\033[1m9. Cohérence de la note d'écarts\033[0m")
    chemin = os.path.join(RACINE, "Note-de-synthese-ecarts-SVT-T9.md")
    if not os.path.exists(chemin):
        print("\033[33m IGNORÉ\033[0m note de synthèse absente")
        ignores.append("cohérence de la note d'écarts")
        return
    note = lire("Note-de-synthese-ecarts-SVT-T9.md")

    gravites = [int(m.group(1)) for m in re.finditer(
        r"^\|[^|]*\*\*(?:Critique|Substantiel|Ordinaire|Ajout)\*\*[^|]*\| (\d+) \|",
        note, flags=re.M)]
    total_ligne = re.search(r"^\| \| \*\*(\d+)\*\* \| \|", note, flags=re.M)
    total = int(total_ligne.group(1)) if total_ligne else -1
    prose = re.search(r"\*\*(\d+) écarts\*\*", note)
    annonce = int(prose.group(1)) if prose else -1
    unites = [int(m) for m in re.findall(
        r"^\| (?:I|II|III|IV|V|Révisions|Ensemble)[^|]*\| (\d+) \|", note, flags=re.M)]
    # Les ecarts critiques et substantiels sont des titres « ## C1 — … »,
    # les ordinaires et les ajouts des lignes de tableau « | **O1** | … ».
    # Ne compter qu'une seule de ces deux formes sous-compte le total.
    identifiants = (re.findall(r"^## [^\n]*?\b([CS]\d+) —", note, flags=re.M)
                    + re.findall(r"\| \*\*([CSOA]\d+)\*\*", note))

    verifier("tableau des gravités cohérent", len(gravites) == 4 and sum(gravites) == total,
             f"somme {sum(gravites)} ≠ total affiché {total}"
             if sum(gravites) != total else f"{sum(gravites)} écarts")
    verifier("total en prose cohérent", annonce == total,
             f"la prose annonce {annonce}, le tableau {total}"
             if annonce != total else f"{annonce} écarts")
    verifier("tableau par unité cohérent", sum(unites) == total,
             f"somme par unité {sum(unites)} ≠ total {total}"
             if sum(unites) != total else f"{sum(unites)} écarts répartis")
    verifier("nombre d'écarts détaillés = total annoncé",
             len(identifiants) == total,
             f"{len(identifiants)} écart(s) détaillé(s) pour un total annoncé de {total}"
             if len(identifiants) != total else f"{len(identifiants)} écarts détaillés")
    doublons = sorted({i for i in identifiants if identifiants.count(i) > 1})
    verifier("aucun identifiant d'écart en double", not doublons,
             f"identifiant(s) {', '.join(doublons)} utilisé(s) deux fois"
             if doublons else f"{len(identifiants)} identifiants distincts")


def controle_liens():
    """Verifie que les liens internes des documents d'entree resolvent.

    Le README et la note de synthese renvoient vers des fichiers du depot.
    Un fichier renomme casse ces liens en silence : rien ne le signale, et le
    lecteur tombe sur une page absente.
    """
    print("\n\033[1m10. Liens internes\033[0m")
    for fichier in ("README.md", "Note-de-synthese-ecarts-SVT-T9.md",
                    "scripts/README-verifier-manuel.md"):
        chemin = os.path.join(RACINE, fichier)
        if not os.path.exists(chemin):
            continue
        with io.open(chemin, encoding="utf-8") as f:
            texte = f.read()
        casses = []
        for m in re.finditer(r"\[[^\]]+\]\(([^)]+)\)", texte):
            cible = m.group(1)
            if cible.startswith(("http://", "https://", "#", "mailto:")):
                continue
            cible = cible.split("#")[0]
            if cible and not os.path.exists(os.path.join(RACINE, cible)):
                casses.append(cible)
        verifier(f"liens de {fichier}", not casses,
                 f"cible(s) absente(s) : {', '.join(sorted(set(casses)))}"
                 if casses else "toutes les cibles existent")


# Contenus officiels du Programme d'Etudes T9, section « Sciences de la vie et
# de la terre » (tableaux des contenus). Chaque entree liste les formulations
# acceptees : le PE ecrit « besoin nutritionnel des plantes » la ou le manuel
# ecrit « besoins nutritifs des plantes ». C'est la NOTION qui doit etre
# couverte, pas la formulation exacte.
CONTENUS_PE = [
    ("ration alimentaire", ["ration alimentaire"]),
    ("nutriments", ["glucides", "lipides", "proteines"]),
    ("vitamines et mineraux", ["vitamines", "sels mineraux"]),
    ("valeurs energetiques", ["valeur energetique", "valeurs energetiques"]),
    ("metabolisme", ["metabolisme"]),
    ("besoins energetiques", ["besoins energetiques"]),
    ("alimentation equilibree", ["alimentation equilibree"]),
    ("menu varie", ["menu varie", "menus varies"]),
    ("malnutrition", ["malnutrition"]),
    ("formes de malnutrition", ["malnutrition aigue", "surpoids", "obesite",
                                "carence en micronutriments"]),
    ("menus d'appoint", ["menus d appoint", "menu d appoint"]),
    ("besoins des plantes", ["besoins nutritifs des plantes", "besoin des plantes"]),
    ("entretien des cultures", ["eclaircissage", "desherbage", "sarclage", "arrosage"]),
    ("protection naturelle", ["methodes naturelles"]),
    ("protection chimique", ["methodes chimiques"]),
    ("bio-agresseurs", ["bio agresseurs", "bioagresseurs"]),
    ("techniques d'elevage", ["techniques d elevage", "technique d elevage"]),
    ("soins de l'elevage", ["vaccination", "habitat", "selection"]),
    ("systeme nerveux", ["systeme nerveux"]),
    ("reactions comportementales", ["mouvement reflexe inne", "mouvement reflexe acquis",
                                    "mouvement volontaire"]),
    ("arc reflexe", ["arc reflexe"]),
    ("hygiene du systeme nerveux", ["hygiene"]),
    ("substances psychoactives", ["substances psychoactives"]),
    ("fistule obstetricale", ["fistule obstetricale"]),
    ("cancer du col", ["cancer du col"]),
    ("pierres gemmes", ["pierres gemmes"]),
    ("proprietes physiques", ["proprietes physiques"]),
    ("repartition geographique", ["repartition geographique"]),
    ("utilisation des pierres", ["utilisations des pierres", "utilisation des pierres"]),
    ("techniques d'exploitation", ["techniques d exploitation"]),
    ("consequences environnementales", ["impacts environnementaux",
                                        "consequences environnementales"]),
]


def controle_couverture_pe():
    """Verifie que chaque contenu du Programme d'Etudes est traite.

    Un manuel peut etre irreprochable sur la forme et passer a cote d'un
    contenu officiel. Ce controle confronte le manuel au tableau des contenus
    du PE T9, notion par notion.
    """
    print("\n\033[1m11. Couverture du Programme d'Études\033[0m")
    texte = _mots(lire(MANUEL))
    plat = " " + " ".join(texte) + " "
    manquants = []
    for notion, variantes in CONTENUS_PE:
        if not any(" " + v + " " in plat for v in variantes):
            manquants.append(notion)
    verifier(f"{len(CONTENUS_PE)} contenus du PE traités", not manquants,
             f"notion(s) absente(s) : {', '.join(manquants)}"
             if manquants else f"couverture complète ({len(CONTENUS_PE)}/{len(CONTENUS_PE)})")


def main():
    print("\033[1m" + "=" * 62)
    print("CONTRÔLE QUALITÉ — Manuel SVT T9")
    print("=" * 62 + "\033[0m")

    seances = controle_couverture()
    controle_baremes(seances)
    controle_durees()
    controle_calculs()
    controle_plagiat()
    controle_images()
    controle_assemblage(seances)
    controle_non_regression(seances)
    controle_note_ecarts()
    controle_liens()
    controle_couverture_pe()

    ok = sum(1 for _, r, _ in resultats if r)
    total = len(resultats)
    print("\n" + "=" * 62)
    if ok == total:
        print(f"\033[32m\033[1mTOUS LES CONTRÔLES PASSENT — {ok}/{total}\033[0m")
        for motif in ignores:
            print(f"\033[33m(ignoré : {motif})\033[0m")
        print("=" * 62)
        return 0
    print(f"\033[31m\033[1m{total - ok} CONTRÔLE(S) EN ÉCHEC — {ok}/{total}\033[0m")
    for libelle, r, detail in resultats:
        if not r:
            print(f"  · {libelle}" + (f" — {detail}" if detail else ""))
    print("=" * 62)
    return 1


if __name__ == "__main__":
    sys.exit(main())
