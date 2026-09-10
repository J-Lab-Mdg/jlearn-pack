# PLAN — Création des PE (Programme d'Emploi / Lamim-pandalamiana) 2026-2027
## Caisses : R.P.I (Etat) • F.C.E • V.O.I — FEFFI ANDRANOMAFANA (EPP ANDRANOMAFANA, CISCO ANOSIBE AN'ALA)

Date d'analyse : 2026-09-10 — session `arena/01a08995-jlearn-pack`.
Méthode : chaque fichier listé ci-dessous a été ouvert et vérifié (texte extrait des docx/pdf, photos lues).

---

## 1. FICHIERS NÉCESSAIRES (vérifiés)

### A. Sources des CHIFFRES 2026-2027 (nouvel exercice)
| Fichier | Contenu vérifié | Rôle |
|---|---|---|
| `20260908_165926_lmc_8.4.jpg` | Liste manuscrite **« RPI ETAT : 1 098 000 Ar »**, 35 postes (Frais 3 mandataires 30 000×3=90 000 ; Ciment 52 000×2=104 000 ; Sport scolaire 500×140=70 000 ; Craie couleur RAFAFA 6 000×10=60 000 ; Isorel 58 000×2=116 000 ; etc.) | **Données du PE RPI 2026-2027** |
| `20260908_165944_lmc_8.4.jpg` | Liste manuscrite **« FCE = 393 000 »**, 17 postes (Frais 3 mand. 20 000×3=60 000 ; Ardoisine GN 12 000×2=24 000 ; Craie couleur 60 000 ; Craie blanche 50 000 ; Ciment 52 000×1 ; Décamètre 20 m 18 000 ; etc.) | **Données du PE FCE 2026-2027** |
| `PEC_TeSI_2026_2027.docx` (+ `pec TESI 2026 2027.pdf`) | Doc global TeSI 2026-2027 déjà validé. Contient les montants VOI 2026-2027 : trano mpampianatra **1 857 000** (ciment/andry/chevron/tôles/pointes), karama **5 000 000** (4×1 250 000), JP/ST **730 000**, Pascoma **28 000** — plus sous-totaux RPI/FCE pour recoupement | **Données du PE VOI 2026-2027** + cohérence inter-caisses |

### B. Gabarits officiels VIERGES 2026-2027 (mise en page à reproduire)
| Fichier | Gabarit vérifié |
|---|---|
| `PEC TESI 2026-20274.jpg` | « LAMIM-PANDANIANA **CAISSE ECOLE ETAT** » — colonnes N° / KARAZANY / TETIBIDY (Vidin'ny iray, Isany, Totaly) / LOHARANO NIAVIAN'NY VOLA / FANAMARIHANA (PAS de colonne LAHASA) + « Pièces jointes : Photocopie CIN 3 mandataires » + « Visa du CHEF ZAP » |
| `PEC TESI 2026-20275.jpg` | « LAMIM-PANDANIANA **CAISSE ECOLE FCE** » — colonnes N° / LAHASA / KARAZANY / TETIBIDY / LOHARANO / FANAMARIHANA |
| `PEC TESI 2026-20273.jpg` | « LAMIM-PANDANIANA **VONDRON'OLONA IFOTONY** » (VOI) — mêmes colonnes que FCE |

### C. Références de mise en page / libellés (exercice 2025-2026)
| Fichier | Rôle |
|---|---|
| `PROGRAMME D’EMPLOI 2025 2026 RPI .docx` (+ .pdf) | Modèle rempli RPI : en-tête identité, catégories LAHASA, style tableau |
| `PROGRAMME D’EMPLOI 2025 2026 FCE.docx` (+ .pdf) | Modèle rempli FCE |
| `PROGRAMME D’EMPLOI 2025 2026 VOI.docx` (+ .pdf) | Modèle rempli VOI (karama, JP, pascoma…) |

### D. Bloc d'identité (commun aux 3 docs, extrait vérifié des modèles)
MINISTERAN'NY FANABEAZAM-PIRENENA • DREN : ALAOTRA-MANGORO • DISTRIA/CISCO : ANOSIBE AN'ALA •
COMMUNE/ZAP/FOKONTANY : TRATRAMARINA • EPP : ANDRANOMAFANA • CODE : 506 090 012 •
FEFFI : ANDRANOMAFANA • Taom-pianarana **2026-2027**

---

## 2. FICHIERS INUTILES POUR CE TRAVAIL (vérifiés)
- `1787465*.jpg`, `1787466*.jpg`, `1788854*.jpg` → illustrations pédagogiques de manuels (ex. fille jouant aux billes), sans rapport avec les PE.
- `PE_T3.pdf`, `PE_T6/T7/T10/T11/T12.docx` → **Programmes d'Études** officiels (classes T6→T12), pas des Programmes d'Emploi.
- `PEC TESI 2026-20271.jpg` / `…2.jpg` → gabarit TeSI + tatitra fivoriambe (déjà traités pour le TeSI).
- Manuels, fiches, zips, patches → autres projets.

---

## 3. RECOUPEMENTS DÉJÀ CONSTATÉS (à trancher à la fabrication)
- RPI : total manuscrit 1 098 000 Ar vs sous-totaux TeSI (335 500+122 000+422 000+70 000+90 000 = 1 039 500) → la liste manuscrite fait foi pour le PE RPI.
- FCE : total manuscrit 393 000 vs TeSI (170 800+52 000+110 200+4 000+60 000 = 397 000) → idem, liste manuscrite fait foi.
- VOI : pas de liste manuscrite trouvée → chiffres repris de `PEC_TeSI_2026_2027.docx` (total 7 615 000 Ar annoncé).

## 4. OUTILS PRÊTS
- `python-docx` + `Pillow` installés ; `node/npm` disponibles. Sorties prévues : 3 docx (+ pdf si demandé).
