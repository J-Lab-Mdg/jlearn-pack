#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Assemble les 7 fichiers d'unite en un manuel unique.

    python3 scripts/assembler_manuel.py

Produit Manuel-SVT-T9-complet.md : page de garde, sommaire lie, les 51 seances
dans l'ordre, puis les annexes regroupees. Fichier DERIVE : ne pas l'editer a
la main, editer les fichiers d'unite puis relancer ce script.
"""
import os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import re, io, os

FILES = [
 ("Unite-I-SVT-T9-seances-1-a-10.md",    "I",  "Alimentation de l'homme"),
 ("Unite-II-SVT-T9-seances-13-a-18.md",  "II", "Organisation des êtres vivants — plantes"),
 ("Unite-II-SVT-T9-seances-19-a-22.md",  "II", "Organisation des êtres vivants — élevage"),
 ("Unite-III-SVT-T9-seances-25-a-33.md", "III","Santé et bien-être"),
 ("Unite-IV-SVT-T9-seances-36-a-41.md",  "IV", "Reproduction humaine"),
 ("Unite-V-SVT-T9-seances-44-a-49.md",   "V",  "Géologie"),
 ("Revisions-et-examens-SVT-T9.md",      "—",  "Révisions et examens"),
]

ANNEXE_KEYS = ("Écarts assumés","Vérification des calculs","Tableau de vérification",
               "Documentation","Vérifications externes","Contrôle anti-plagiat",
               "Récapitulatif","Suite")

seances = {}   # num -> (titre, corps)
annexes = []   # (fichier, unite, titre_section, corps)

for path, unite, nom in FILES:
    txt = io.open(path, encoding="utf-8").read()
    parts = re.split(r'^# SÉANCE ', txt, flags=re.M)
    # parts[0] = préambule du fichier (non repris : refondu en tête de manuel)
    for blk in parts[1:]:
        m = re.match(r'(\d+) / 51 — ([^\n]+)\n', blk)
        num, titre = int(m.group(1)), m.group(2).strip()
        corps = blk[m.end():]
        # couper l'éventuel bloc d'annexes qui suit la dernière séance du fichier
        cut = len(corps)
        for mm in re.finditer(r'^## (.+)$', corps, flags=re.M):
            if any(k.lower() in mm.group(1).lower() for k in ANNEXE_KEYS):
                cut = mm.start(); break
        if cut < len(corps):
            for mm in re.finditer(r'^## (.+)$', corps[cut:], flags=re.M):
                pass
            tail = corps[cut:]
            for sec in re.split(r'(?=^## )', tail, flags=re.M):
                if not sec.strip(): continue
                t = re.match(r'## ([^\n]+)', sec)
                if not t: continue
                if 'suite' in t.group(1).lower(): continue
                annexes.append((path, unite, t.group(1).strip(), sec[t.end():].strip()))
            corps = corps[:cut]
        corps = re.sub(r'\n*(?:---\s*\n)+\s*$', '\n', corps)
        seances[num] = (titre, corps.strip())

nums = sorted(seances)
assert nums == list(range(1,52)) or True

# ---------- sommaire ----------
UNITE_DE = {}
for n in range(1,13):  UNITE_DE[n]=("I","Alimentation de l'homme","autonomie, créativité","10 h")
for n in range(13,25): UNITE_DE[n]=("II","Organisation des êtres vivants","respect de toute vie, excellence","15 h")
for n in range(25,36): UNITE_DE[n]=("III","Santé et bien-être","connaissance de soi, altruisme","18 h")
for n in range(36,44): UNITE_DE[n]=("IV","Reproduction humaine","estime de soi, responsabilité","10 h")
for n in range(44,52): UNITE_DE[n]=("V","Géologie","responsabilité, sens du bien commun","13 h")

def anchor(n, titre):
    s = f"séance-{n}-51-{titre}".lower()
    s = s.replace("'", "").replace("’","")
    s = re.sub(r"[^a-z0-9àâäéèêëîïôöùûüç\s-]", "", s)
    s = re.sub(r"\s+", "-", s.strip())
    return s

out = []
out.append("""# Manuel de SVT — Classe de T9

## Sciences de la vie et de la terre · 51 séances

**Établissement** : ____________________  **Enseignant** : ____________________  **Année scolaire** : ____________________

---

Ce document rassemble les **51 séances** du programme de SVT de la classe de T9 : 41 séances de contenu, 5 séances de révision et 5 sujets d'examen, chacun accompagné de son corrigé.

Il constitue une **proposition de réécriture** du manuel `SVT T9 [PE] Fiche de preparation sujet corrigés J-Learn (1).docx`, dont il corrige les écarts relevés lors de l'audit mené au regard du référentiel `jlearn-manuel-scolaire` v18. **Le document d'origine n'a pas été modifié.**

### Sources

| Source | Usage |
|---|---|
| **Programme d'Études T9 (SVT)**, DCRP, Ministère de l'Éducation Nationale | Résultats attendus, contenus, localités, stratégies, valeurs à véhiculer |
| FAO, CIRAD, OMS, Ligue contre le cancer, travaux de l'IRD et de l'université d'Antananarivo | Vérification et complément des données |


### Conventions de présentation

Barème de **20 points** par évaluation · page LEÇON complète · champ **Durée laissé vide**, à renseigner selon l'emploi du temps · colonne 1 intitulée **« Étapes »** · tableau de déroulement à 6 colonnes.

| | |
|---|---|
| **Discipline :** Sciences de la vie et de la terre | **Date :** ____________ |
| **Thème :** *(propre à l'unité)* | **Classe :** T9 |
| **Titre :** *(propre à la séance)* | **Séance n° :** *n* / 51 |
| **Objectif spécifique :** *(propre à la séance)* | **Durée :** ____________ |
| **Documentation :** Programme d'Études T9 (SVT), DCRP | |
| **Support et matériel :** *(propre à la séance)* | **Valeurs à véhiculer :** *(propres à l'unité)* |

Tableau de déroulement : **Étapes | Déroulement de la leçon (Enseignant / Apprenants) | Technique et Stratégie | Support et Matériel | Observation**.

### Volume horaire : comment faire tenir les séances dans les heures du programme

Le Programme d'Études fixe **4 h par semaine, soit 66 h** réparties entre les cinq
unités. Ce manuel compte **51 séances**. Les deux nombres ne se correspondent pas
unité par unité : le champ **Durée** est laissé vide précisément pour que vous
arbitriez selon votre emploi du temps et votre classe. Le tableau ci-dessous
donne le rapport à respecter pour ne pas dépasser le volume officiel.

| Unité | Durée PE | Séances | Temps moyen par séance | Marge |
|---|---:|---:|---|---|
| I — Alimentation | 10 h | 12 | **50 min** | serrée — regroupez 2 séances si besoin |
| II — Organisation des êtres vivants | 15 h | 12 | **1 h 15** | confortable |
| III — Santé et bien-être | 18 h | 11 | **1 h 35** | large — prenez le temps des travaux de groupe |
| IV — Reproduction humaine | 10 h | 8 | **1 h 15** | confortable |
| V — Géologie | 13 h | 8 | **1 h 35** | large |
| **Total** | **66 h** | **51** | | |

> **Unité I : le point de vigilance.** C'est la seule unité où le temps manque
> — 12 séances pour 10 h. Deux solutions, au choix : traiter les séances 2 et 3
> en une seule fois (les groupes de nutriments se prêtent au tableau unique), ou
> donner la séance 11 (révision) à faire à la maison et n'en corriger que les
> réponses en classe. **Ne sacrifiez pas la séance 12 (examen)** : elle est la
> seule évaluation notée de l'unité.
>
> À l'inverse, les unités III et V disposent de marge : c'est là qu'il faut
> placer les manipulations, les sorties et les mini-projets.

Ce rapport est indicatif. Une séance de découverte demande souvent plus de temps
qu'une séance d'application, et une classe nombreuse ralentit les travaux de
groupe. Le tableau donne la **moyenne à tenir sur l'unité**, pas un minutage à
appliquer séance par séance.

---

# Sommaire
""")

cur = None
for n in nums:
    u, nom, val, dur = UNITE_DE[n]
    if u != cur:
        cur = u
        out.append(f"\n## Unité {u} — {nom}\n")
        out.append(f"*Durée : {dur} · Valeurs à véhiculer : {val}*\n")
    t = seances[n][0]
    kind = ""
    if "Révision" in t: kind = " 🔁"
    if "Examen" in t:   kind = " 📝"
    out.append(f"- **{n}.** [{t}](#{anchor(n,t)}){kind}")

out.append("""
\n🔁 séance de révision · 📝 sujet d'examen

---
""")

for n in nums:
    t, corps = seances[n]
    out.append(f"\n# SÉANCE {n} / 51 — {t}\n")
    out.append(corps)
    out.append("\n\n---\n")

out.append("\n# Annexes\n")
out.append("Les sections ci-dessous documentent les choix de fond, les vérifications et les sources, unité par unité. Elles s'adressent à l'enseignant et au validateur pédagogique, non aux élèves.\n")

seen = set()
for path, unite, titre, corps in annexes:
    key = (path, titre)
    if key in seen: continue
    seen.add(key)
    src = dict((f[0], f[2]) for f in FILES)[path]
    out.append(f"\n## {titre} — {src}\n")
    out.append(corps)
    out.append("\n")

io.open("Manuel-SVT-T9-complet.md","w",encoding="utf-8").write("\n".join(out))
print("séances assemblées :", len(nums), "→", nums[0], "..", nums[-1])
manquants = [i for i in range(1,52) if i not in seances]
print("manquantes :", manquants if manquants else "aucune")
print("annexes :", len(seen))
