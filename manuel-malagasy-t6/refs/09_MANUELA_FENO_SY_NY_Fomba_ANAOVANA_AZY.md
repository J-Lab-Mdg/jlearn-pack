# 09 · MANUELA FENO — ny 18 firaketana sy ny fomba famamboarana azy

**Livrable** : `output/Malagasy_T6_J-Learn.docx` — **1 256 282 octets** · **1 114** paragrafy · **71** tabilao · **120 060** tsirairay · **48** sary (96 rakitra : **48 SVG** + **48 PNG** ho fanohizana) · **41** note de bas de page.
`controles()` : **TUATUA**. Manomboka amin'ny fonony (cover) ny boky, ary misy **firaketana 18**.

## 1 · Lisitry ny firaketana 18 (araka ny `./run.sh src/data_manuel.py`)

| # | Faritana | LFK | Lohatenin'ny lesona | Blocs / exos |
|---|---|---|---|---|
| 1 | FARITANA I · TSIPELINA | LFK 1a·1b | Teny mitovy fanonona fa samy hafa hevitra sy ny teny | 17 / 3 |
| 2 | FARITANA I · TSIPELINA | LFK 1d | Ny teny verindroa | 22 / 7 |
| 3 | FARITANA I · TSIPELINA | LFK 1e | Fepetra amin'ny fanakambanan-teny | 21 / 4 |
| 4 | FARITANA II | LFK 2a | Tsirinteny : tovona, tovana, sara-droa, tsofoka | 17 / 5 |
| 5 | FARITANA II | LFK 2b | Sokajin-teny : ny mpanoritra | 9 / 4 |
| 6 | FARITANA II | LFK 2b | Sokajin-teny : ny mpamari-toetra | 11 / 4 |
| 7 | FARITANA II | LFK 2c | Sokajin-teny : ny mpamaritr'isa | 10 / 4 |
| 8 | FARITANA II | LFK 2d | Fandrasan-teny : ny marika « < » sy ny fandravan'ny teny | 7 / 4 |
| 9 | FARITANA II | LFK 2e | Anaran'ny tsirinteny (famaritana sy ôhatra) | 6 / 4 |
| 10 | FARITANA II | LFK 2f | Famadihana ny RF ho L (EM sy L) | 8 / 4 |
| 11 | FARITANA II | LFK 2g | Filaza mandidy | 8 / 4 |
| 12 | FARITANA III | LI 1a | Ny literatiora manoritsoritra | 12 / 4 |
| 13 | FARITANA III | LII 2a | Ny mpanoratra : Jean NARIVONY (1898-1980) | 17 / 4 |
| 14 | FARITANA III | LII 2b | Santionany amin'ny asa sorany | 15 / 4 |
| 15 | FARITANA III | LII 2d | Ny tononkalo : andininy, ngadona, rima | 12 / 4 |
| 16 | FARITANA IV | — | Fampidirana : ny boky, ny lesona 15, ny fepetra | 8 / 2 |
| 17 | FARITANA IV | — | Ireo lohahevitra an'ny taona sy ny FFLJ | 10 / 2 |
| 18 | FARITANA IV | — | Fomba fitrandrahana ny lesona sy ny Tombana | 11 / 2 |

Isaky ny firaketana : **TAKELA-PANOMANAN-DESONA** (grille dingana 6, `Daty` **mangina**, `Faharetany` ora 20, rima « Zavatra ilaina », « Laharana ao amin'ny FRP ») → **LESONA** (tabilao, ôhatra, sary) → **FANAZARAN-TENA** → **FANITSIANA** → **LOHARANON-KEVITRA**.

## 2 · Ny sary 48

Vokarin'ny **moteora `src/sary_fano.py`** (tsy misy soratra naty ilay atao sary : ny lahatsoratra rehetra dia vita an-tanana amin'ny alalan'ny `text` SVG, ary mamboarina amin'ny PNG mba hahitana azy any ambadiky ny Word). Ahitana azy : fonony, tabilao lehibe, sarin'ny fandravana teny, zana-tsipìka sy tsipi-panohizana, fitarihana ny tsirinteny, sary mpanoritra / mpamari-toetra / mpamaritr'isa, rf2l, filaza mandidy, andininy sy rima, sarin'ny andininy 4 — ambany.

## 3 · Dingana famamboarana indray

```bash
cd manuel-malagasy-t6
./run.sh src/sary_fano.py                                              # mamorona ny 48 sary
./run.sh src/data_manuel.py                                            # tabilao 18 firaketana
./run.sh src/build_fiche.py data_manuel Malagasy_T6_J-Learn            # ny docx
./run.sh src/dump_docx.py output/Malagasy_T6_J-Learn.docx /tmp/doc.txt # fanamarinana
JLEARN_TATITRA=manuel-malagasy-t6 ./run.sh ../fianarana-malagasy/fikarohana.py --rouge data_manuel
```

## 4 · Fitsipika narahina (araka ny nampandreteina)

1. **Tsy misy ref inline** amin'ny atiora lesona na amin'ny fanazaran-tena : `« (FRP T6, LFK 1d) », « (PE T6, p.21) », « (mémoire UA 2014, §1.1.1) »` → **voalarana**; ny loharano dia ao amin'ny **LOHARANON-KEVITRA** ihany (na anaty *note de bas de page*).
2. **Tsy misy teny frantsay** amin'ny atiora lesona : izany anga fa ny fanazavana ilaina dia mandeha anaty *note* ; ny tabilao sy ny ôhatra rehetra amin'ny teny malagasy.
3. **Tsy misy noforimbenina** : ôhatra, teny, tononkalo, daty mpanoratra — avy amin'ny **FRP T6 (éd. Okt. 2026)**, **RAPE T6 (sept. 2026)**, **PE T6**, na voamarina amin'ny **rakibolana** / **malagasyword.org**.
4. **Ny soratra nosoratan'i L2 (LFK 1d) dia tsy niovina akory** : io no modely.
5. Marika `*…*` / `**…**` **appariés sy tsy mifangaro** → `*` sisa tavela amin'ny docx : **0**.
6. `Daty` **mangina** (tsy misy daty voatonditra amin'ny taratasy ofisialy) ; ora 4/kerinandro, 5 andiany 7-7-7-6-6.

## 5 · Ireo mbola ilain'ny fanamarihana

- **N° 1 (TSIPELINA, LFK 1a·1b)** : lohateny hoe *Fikarohana fanamboarana ny takela-panomana ny lesona* — tsy misy ao amin'ny FRP, nampidirina teo amin'ny rima « Zavatra ilaina ».
- **`Faharetany`** : nangonina tamin'ny taratasy ofisialy izany (ora 20 isaky ny lesona araka ny tabilao 7-7-7-6-6) ; mety ho ovaina araka ny tokony ho izy.
- **L14 (Santionany amin'ny asa sorany)** : **0 sary** — ny santionany tononkalo / tantara dia navela ho anaty tabilao sy ny lahabaoza (`tononkalo`).
- Rakitra tsy mba voafaritra ara-potoana ao amin'ny FRP : misy lesona 3 (12→15) nampifandimbiasina amin'ny herinandro 1 (L12) satria literatiora ny atao hoe « faran'ny taona » araka ny fandaharana an'ny RAPE.

---

# V2 (2026-11-01) · Rafitra araka ny ZANA-TARANJA an'ny PE T6 + laharisa interactif

Ny mpitantana vaovao dia **`src/build_manuel_t6.py`** (tsy `build_fiche.py data_manuel` intsony) :

```bash
./run.sh src/sary_fano.py
./run.sh src/build_manuel_t6.py          # -> output/Malagasy_T6_J-Learn.docx
```

| ZANA-TARANJA | Anarana ara-PE | Ora PE | Firaketana ao amin'ny boky |
|---|---|---|---|
| I | MALAGASY, KOLONTSAINA ARY FIARAHAMONINA | 38 (20 + 18) | mbola ho soratana (tanindrazana sy firenena · olombelona sy tontolo iainana) |
| II | TONTOLON'NY LITERATIORA | 54 (14+14+12+14) | L12 literatiora · L13 Narivony · L14 santionany · L15 tononkalo/rima — **mbola : Sarin-teny, Rakotomalala** |
| III | Fepetra sy tekinika fitrandrahana ireo lohahevitra (Votoatiny) | — | laharisa + fandaharam-potoana + toro-lalana 3 (A0-A2) |
| IV | FIASAN'NY TENY - Tsipelina | 12 | L1 teny mitovy fanonona · L2 verindroa · L3 fanakambanan-teny |
| V | FIASAN'NY TENY - Fitsipiky ny teny | 20 | L4-L7 tsirinteny/sokajin-teny · L8-L11 fitsipika — **mbola : matoanteny** |
| VI | ASA AN-TSORATRA - Lahatsoratra manoritsoritra | 20 | mbola ho soratana (5 puce : famaritana, mari-pamantarana, endrika, firafitra, famoronana) |

- **Laharisa interactif** : tabilao misy rohy anatiny (`w:hyperlink w:anchor`) mankany amin'ny
  signets `bm_zt1..6` sy `bm_fiche1..18` + « ◄ Miverina amin'ny laharisa » isaky ny farany
  → **tsy mila `Update field`** (didin'ny mpampiasa : hyperlink ihany, fa tsy champ TOC).
- **Navigation** : style `Heading 1/2` + `w:outlineLvl` (35 lohateny) → miseho ao amin'ny
  « volet Navigation » an'ny Word.
- **Fizarana (section) 7** : en-tête miverimberina = « ZANA-TARANJA N · <anarana> » ;
  tongony = « Pajy PAGE / NUMPAGES » (champs calculés à l'ouverture).
- `src/pe_t6.py` : **ny Vontoatiny / Sahanasa / Tetika amam-paika / Fitaovana / Voka-pianarana**
  rehetra voasokajy **teny-teny** avy amin'ny PE (extrait : `refs/10_PE_T6_ZANATARANJA.txt`).
- `src/sortsy.py` : marika / rohy / titre / fizarana — rafitra ihany, tsy mikasika ny votoaty.
- Dernier build : **1 274 058 o · 1 340 par. · 71 tabilao · 134 190 car. · 48 sary · TUATUA**.

## V.2 — Ny firaketana vaovao ilain'ny rafitra ZANA-TARANJA (01/11/2026)

Nianarak-dalana ny « V.1 » : nitaky **6 firaketana** fanampiny ny fizarana ara-PE — natao daholo
ireo, ka **24 firaketana** no anisan'ny laharisa (18 + 6).

| Firaketana | ZANA-TARANJA | Faharetany ara-PE | Loharano |
|---|---|---|---|
| Ny tanindrazana sy ny firenena | I · 1 | ora 20 | PE ZT I + FRP LFK 6i sy tak. 33 |
| Ny olombelona sy ny tontolo iainana | I · 2 | ora 18 | PE ZT I + FRP LOHAHEVITRA IX (LFK 9, tak. 50) sy LFK 3b (tak. 23) |
| Sarin-teny tamberim-peo | II | ora 12 | PE ZT II + FRP tak. 63 · Programme 4e · Pôetawebs · ENS-CPN |
| Ny mpanoratra : RAKOTOMALALA Eric Fredy Jaofera | II | ora 14 | PE ZT II + Wikipedia/Pôetawebs/HAVATSA-UPEM (dinika 01/11/2026) |
| Ny matoanteny : fototeny sy sampan-teny | V | ampahany amin'ny ora 20 | PE ZT V + FRP LFK 2a-2d |
| Famoronana lahatsoratra manoritsoritra | VI | ora 20 | PE ZT VI + FRP tak. 63 |

Fitsipika notandrevina : **tsy misy dikany voforina** — ny « Vontoatiny/Sahanasa/Tetika/Fitaovana/
Tombana » rehetra dia **teny-teny** avy amin'ny PE ; ny fanononana ivelany dia voasoratra ao anaty
« » ary ny loharano misy ny **roa ambin'ny folo Novambra 2026**. Noho izany :

- **RAKOTOMALALA** : tsy misy ny tantarany ao amin'ny FRP T6 (LFK LII 2a = Jean NARIVONY ihany),
  ka ny Wikipedia malagasy sy ny tranonkala HAVATSA-UPEM Frantsa no natao loharano. Nohamarinina
  fa **mifangaro** ny lahatsoratra Wikipedia : ny taona 1938/1940/1943 sy ny mari-boninahitra dia
  an'i **Fredy Rajaofera (1902-1968)**, raibeny — voasoratra ao amin'ny « note » mba tsy
  ho diso fianarana. Tsy nisy fanamafisana ny **fahaterahana** (30 Avrily 1962 araka ny bilaogy
  *skyrock* an'ilay mpanoratra, fa tsy azo vakina intsony ilay pejy) — ka tsy nampidirina.
- **tamberin-drenifeo / tamberim-janapeo** : ny PE dia mamela ny anarany ihany ; ny
  fanazavana dia nalaina amin'ny **Programme 4e** sy amin'ny **Akademiam-Pirenena**
  (poetawebs), ary ny ôhatra dia tononkalo FRP tak. 33, ka **ny fiverenan'ny feo sy ny fototeny**
  ihany no namaritan-teny (tsy nisy fanapahan-kevitry ny siantsifika).
- `Faharetany` : **ora** an'ny PE (tsy intsony ny 7-7-7-6-6 natao teo) ; voafaritra indray ny
  takelaky ny lesona **A0** (tabilao ZANA-TARANJA, 144 ora = 36 kerinandro).

Voka : **24 signet · 58 rohy anatiny · 7 fizarana · 1 658 par. · 98 tabilao · 170 598 car. · 142
media (71 sary SVG) · TUATUA** — `output/Malagasy_T6_J-Learn.docx` (1 319 101 o).
