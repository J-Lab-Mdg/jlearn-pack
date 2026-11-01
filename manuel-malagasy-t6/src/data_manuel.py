# -*- coding: utf-8 -*-
"""Fikambanana ny **MANUELA MALAGASY T6 — FENO** : rakitra iray ihany
(`output/Malagasy_T6_J-Learn.docx`), araka ny didin'ny mpanabe.

    ./run.sh src/sary_fano.py                      # mamokatra sary ho an'ny mpijery (ao /tmp)
    ./run.sh src/build_fiche.py data_manuel Malagasy_T6_J-Learn
    ./run.sh src/dump_docx.py output/Malagasy_T6_J-Learn.docx /tmp/x.txt
    JLEARN_TATITRA=manuel-malagasy-t6 ./run.sh ../fianarana-malagasy/fikarohana.py --rouge data_tsipelina_s2

FANDRINDANA (FRP T6 éd. Oktobra 2026 · RAPE T6 sept. 2026, 4 ora/kerinandro · PE T6 p.13-26) :
  FARITANA I   TSIPELINA        L1 (LFK 1a+1b) · L2 (1d verindroa) · L3 (1e fanakambanan-teny)
  FARITANA II  FITSIPIKY NY TENY L4 (2a) · L5-L7 (2b, 2c) · L8-L11 (2d, 2e, 2f, 2g)
  FARITANA III LITERATIORA       L12 (LI 1a) · L13-L14 (LII 2a, 2b) · L15 (LII 2d)
  FARITANA IV  TORO-LALANA       A0 fampidirana · A1 lohahevitra sy FFLJ · A2 tombana
Ny lesona 1-3 dia **tsy niova** (L2 = tanoran'ny mpampianatra 01/11/2026, teny-teny) ; ny
`faritana` sy ny `lfk`/`heri` no ampiko fotsiny mba ho fotsiny ho fitarihana an-tsoratra.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import data_tsipelina_s1  # noqa: E402
import data_tsipelina_s2  # noqa: E402
import data_tsipelina_s3  # noqa: E402
import data_fitsipika  # noqa: E402
import data_fitsipika2  # noqa: E402
import data_literatiora  # noqa: E402
import data_toro_lalana  # noqa: E402
import data_zt16  # noqa: E402
import pe_t6  # noqa: E402

FAR_TSIPELINA = "FARITANA I · TSIPELINA"

_tsipelina = [
    (data_tsipelina_s1.FICHE, "LFK 1a · 1b", "1→7", "teny mitovy fanonona fa samy hafa hevitra · "
     "teny roa avahan'ny tendro"),
    (data_tsipelina_s2.FICHE, "LFK 1d", "1→7", "tanjony : manalefaka sy manamafy hevitra"),
    (data_tsipelina_s3.FICHE, "LFK 1e", "1→7", "fepetra amin'ny fanakambanan-teny"),
]

LESONS = []
for f, lfk, heri, sous in _tsipelina:
    f.setdefault("lfk", lfk)
    f.setdefault("heri", heri)
    f.setdefault("faritana", FAR_TSIPELINA)
    f.setdefault("faritana_sous", "%s · herinandro %s · ora 12" % (lfk, heri))
    LESONS.append(f)
LESONS += list(data_fitsipika.FICHES) + list(data_fitsipika2.FICHES) + \
    list(data_literatiora.FICHES)

for f in data_toro_lalana.FICHES:
    f["fields"]["Seho n°"] = "—"
LESONS += data_toro_lalana.FICHES
# ny firaketana ilain'ny rafitra ZANA-TARANJA an'ny PE (ZT I, II, V, VI)
LESONS += list(data_zt16.FICHES)

TONGOLO = {
    "titre": "MANUELA MALAGASY \u00b7 T6",
    "sots": "ZANA-TARANJA I-VI \u00b7 KOLONTSAINA \u00b7 LITERATIORA \u00b7 FIASAN'NY TENY \u00b7 "
            "ASA AN-TSORATRA",
    "lignes": ["%d firaketana feno miaraka amin'ny takela-panomanan-desa sy ny sary" % len(LESONS),
               "Voafaritra araka ny **ZANA-TARANJA 6** an'ny **PE T6** \u2014 ora %d feno"
               % pe_t6.total(),
               "Mifototra amin'ny **FRP Malagasy T6 \u2014 \u00c9DITION OCTOBRE 2026**",
               "sy ny **RAPE T6 septambra 2026** (4 ora isaky ny kerinandro)",
               "Kilasy T6 \u00b7 Zana-taranja : Malagasy \u00b7 Taona mpianatra 2026-2027",
               "J-Lab \u00b7 Antananarivo"],
    "farany": ["Ny votoatiny rehetra dia an'ny loharano voalaza ao amin'ny \u00ab LOHARANON-KEVITRA \u00bb "
               "isaky ny lesona.",
               "`Daty` : mangina (araka ny RAPE) \u00b7 `Isan'ny seho` : 2 \u00b7 `Faharetany` : araka ny "
               "ora lanin'ny PE isaky ny ZANA-TARANJA"],
}

SOMMAIRE_NOTES = [
    "Laharisa : ny lesona 15 + ny toro-lalana 3 ; « LFK » = laharan'ny votoaty ao amin'ny FRP T6 ; "
    "« herinandro » = ny fitsinjarana an'ny RAPE (4 ora/kerinandro).",
    "Mangina ny `Daty` : « Tsy ahitana daty na vanim-potoana mamaritra ny tetiandrom-pampianarana "
    "ny fitsinjarana » (RAPE T6 sept. 2026).",
]

FICHE = {
    "FICHES": LESONS,
    "tongolo": TONGOLO,
    "sommaire": True,
    "planning": "planning",
    "sommaire_notes": SOMMAIRE_NOTES,
}

if __name__ == "__main__":
    for i, f in enumerate(LESONS, start=1):
        print("%2d · %-14s · %-9s · %-52s · %d bloc lesona, %d exos, %d sary"
              % (i, f.get("faritana", "")[:14], f.get("lfk", "—"), f["lt"][:52], len(f["lesona"]),
                 len(f["exos"]), sum(1 for k, _ in f["lesona"] if k == "sary")))
