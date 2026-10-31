# -*- coding: utf-8 -*-
"""`fiche_t6.py` — mpanampy mamorona **takela-panomanan-desa + lesona** ho an'ny manuela feno.

Miverina amin'ny gabarit ôfisialy (`fiche_pe.py`) ny rakitra, ka ny lesona tsirairay dia
mamokatra :

    fields        6 andalana : Taranja|Daty · Zana-taranja|Kilasy · Lohahevitra|Seho n° ·
                  Lohateny|Isan'ny seho · V.P.M + Fitaovana|Faharetany · Fanovozan-kevitra
    grille        I. Famerenana · II. (bandeau) · 1..6 (min : 3-2-4-4-3-4) · III. Tombana
    lesona/exos/fanitsiana/loharano  = voalaza ao amin'ny rakitra data

Ny `etapes` = 6 andalana : `(teny atao amin'ny Mpampianatra, valin'ny Mpianatra (V.A.), firafitan'ny
asa, fitaovana)`. Ny `Faharetany` = araka ny PE T6 p.15-25 : **ora 20** ho an'ny
« FIASAN'NY TENY - Fitsipiky ny teny », **ora 12** ho an'ny Tsipelina.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fiche_pe import FITAOVANA  # noqa: E402

MIN = (3, 2, 4, 4, 3, 4)
TITRE = ["1. Fitarihan-tsaina", "2. Fanolorana", "3. Fandinihana", "4. Famakafakana",
         "5. Fandravonana", "6. Fampiharana"]


def champs_t6(zt, lt, lfk, heri, seho, isan, vpm, fitaovana, faharetany, fanovozan):
    return {
        "rangs": [("Taranja", "Daty"), ("Zana-taranja", "Kilasy"), ("Lohahevitra", "Seho n°"),
                  (["Lohateny", "Laharany ao amin'ny FRP"], "Isan'ny seho"),
                  ([["V. P. M", "Fitaovana"], "Faharetany"]), ("Fanovozan-kevitra", None)],
        "Taranja": "Malagasy",
        "Daty": "__________",
        "Zana-taranja": "Fiasan'ny teny · " + zt,
        "Kilasy": "T6",
        "Lohahevitra": "FIASAN'NY TENY - %s · %s" % (zt, lfk),
        "Seho n°": str(seho),
        "Lohateny": lt,
        "Laharany ao amin'ny FRP": lfk,
        "Isan'ny seho": str(isan),
        "V. P. M": vpm,
        "V. P. M note": "Voka-pianarana manokana (PE T6)",
        "Fitaovana": fitaovana,
        "Faharetany": faharetany,
        "Fanovozan-kevitra": fanovozan,
    }


def grille_t6(zt, lt, etapes, famerenana, tombana, fitaovana):
    rows = [("I. Famerenana (5 min)", famerenana[0], famerenana[1], famerenana[2], "----",
             famerenana[3])]
    rows.append(("II. LESONA VAOVAO (%d min)" % sum(MIN), "", "", "", "", ""))
    for i, (mp, mm, asa, fit, nota) in enumerate(etapes):
        rows.append(("%s (%d min)" % (TITRE[i], MIN[i]), mp, "V.A. : " + mm if mm else "", asa,
                     fit or fitaovana, nota))
    rows.append(("III. Tombana (5 min)", tombana[0], tombana[1], tombana[2], "----", tombana[3]))
    return rows


def fiche_t6(zt, lt, lfk, heri, seho, etapes, lesona, exos, fanitsiana, loharano, *,
             famerenana=None, tombana=None, isan=2,
             vpm="Mifehy ny fitsipi-panoratana sy ny fitsipiky ny teny malagasy",
             fitaovana=None, faharetany="ora 20", fanovozan=None, sary_tsilo=False,
             faritana=None, faritana_sous="", zt_note=""):
    fitaovana = fitaovana or FITAOVANA.get(zt, "Fehezanteny na lahatsoratra")
    fanovozan = fanovozan or ("FRP T6 — ÉDITION OCTOBRE 2026, %s · RAPE T6 sept. 2026, "
                              "herinandro %s" % (lfk, heri))
    famerenana = famerenana or ("Araka ny natao tamin'ny seho teo aloha : avereno voalaza ny "
                                "votoatiny teo aloha mifandray amin'ity lesona ity.",
                                "Mamerina.", "Asan-tarika", zt_note or "Mifototra amin'ny lesona "
                                "teo aloha")
    tombana = tombana or ("Manamarina ny fepetra natao tamin'ny seho araka ny « Tombana » an'ny "
                          "PE.", "Hilaza.", "Asa samirery",
                          "Mamorona fehezanteny manaraka ny fitsipika nofofanana ny mpianatra.")
    return {
        "sary_tsilo": sary_tsilo,
        "zt": zt,
        "zt_color": {"Tsipelina": "E36C0A", "Fitsipika": "365F91"}.get(zt, "365F91"),
        "lt": lt,
        "lfk": lfk,
        "heri": heri,
        "faritana": faritana or "",
        "faritana_sous": faritana_sous,
        "fields": champs_t6(zt, lt, lfk, heri, seho, isan, vpm, fitaovana, faharetany,
                            fanovozan),
        "grille": grille_t6(zt, lt, etapes, famerenana, tombana, fitaovana),
        "lesona": lesona,
        "exos": exos,
        "fanitsiana": fanitsiana,
        "loharano": loharano,
        "pages": [],
    }
