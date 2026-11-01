# T5 — fahatsiarovana : very ny V11 (2026-10-30)

Ny asa natao tamin'ny farin'ny 29-30/10 (**V11**) dia **tsy hita intsony** : tsy niditra tao
amin'ny commit `2c6a680` (ny hafatra no niditra, fa ny votoaty KOSA = V10), ary nasolany
tamim-piverenan'ny sandbox tamin'ny V10. Voamarina :
`output/Manuel_Malagasy_T5_TSIPELINA-S2_V1.docx` = **9 749** laharana / `TUATUA` **0** /
`havana` **0** (V10) fa tsy ny **9 923** / `TUATUA` 12 / 84 andalana (V11).

## Tokony hatao indray rehefa miverina amin'ny T5 (11 fanamboarina)
1. `mianjera` → `havana / manerintserana / voarary / mihaona` (avy amin'ny « Teny mitovy
   fanonona fa samy hafa hevitra » an'ny FRP 6ème, ohatra: `Tsy mba hahita havana
   manerintserana akory ianao`) + `voatelina` → `mihaona`; lahatsoratra feno ao anaty
   tsirinteny; `mianjera` → `mihaona` ao amin'ny FANAZARAN-TENA (sisa: `miandraiketra`).
2. `domane publico` → `tanana ambony ranomasina` (Rakibolana `domane`, misy
   `noho ny ranomasina`); `Wikibolana` → `Rakibolana` (+ `ohabolana.mamaloga.com`).
3. `V.A.: Ny soa.` → `V.A.: Ny ahiahy.` (roa toerana) — satria `noho ny` + za-matoanteny
   → **V.A. misy `ny`** (filazam-pihamarana); `fahatsiahivan-tsaina` →
   `fahatsiahivana tsaina`; fanamarihana `ny` voatelina aorian'ny `no`.
4. `Isan'ny seho` → `3`; `Daty` → `__________`; zana-tsipìka farany → `vono`.
5. Nom inséré : `src/fetch_police.py` (Tinos, licence OFL 1.1, `api.github.com/repos/google/fonts`)
   — tsy misongadina amin'ny takela.
6. Fikarohana fanampiny : http://www.tenymalagasy.gov.mg/?page_id=109 = **sitenasin'ny Akademia
   Malagasy** (faraja Rajaona, *Structure du malgache*, Ambozontany 1972 ; *Éléments de morphologie
   inflexionnelle*, 2004) → ho ampidirina amin'ny LOHARANON-KEVITRA; ny fanamarihana
   « Tsipelina » ao dia **tsy ampiasaina ho discovery** (milaza fa marina `hoy i Koto` ary
   fa tsy mety koa `hoy i Koto`).
7. Fitsipiky ny « hoy » (voamaritry ny mpanabe): `Hoy i Koto` ✓ · `Hoy Rakoto` ✓ ·
   `Hoy i Rakoto` ✗ — **roa mpanoritra** (`i` + `Ra-`) tsy azo ampifandimby.
Rehefa averina izany: `cd manuel-malagasy-t5 && ./run.sh src/sary_tsilo.py data_tsipelina_s2`
ary `./run.sh src/build_fiche.py data_tsipelina_s2 <sokajy_fara_tany>`, ary
`--fanamarinana` + `--rouge` + (tsy misy afa-tsy: `zipfile` hanamarinana ny footnotes).

---

## V12 (2026-10-31) — boky feno T5 : voafetra ireo fanamboarana 11

`output/Malagasy_T5_J-Learn.docx` : **33 firaketana** (20 lohahevitra + 13 Tsipelina/Fitsipika/Kabary),
**66 sary** (25 natao tamin'ny `src/sary_loha.py` + 41 avy amin'ny mpamokatra fiche),
2 892 paragrafy, 95 tabilao, 259 686 tsirairay, `controles` = **TUATUA**.

| # (lisitra ambony) | Toe-javana |
|---|---|
| 1 | `mianjera` ao amin'ny **loha1/loha3** : **tsy novaina** — andalana marina (`mianjera amin'ny hafa`, `ny tany mianjera`, `rano mianjera avy amin'ny rahona`) ; ny teny hoe `manasa nify` (14 toerana, loha1 ihany) no **ova** : `miborosy nify`, araka ny FRP 6e, LFK 1e : « Indroa isan'andro no miborosy nify » — loharano : `frp6_borosy_nify` ao amin'ny `src/sources.py`. |
| 2 | `domane publico` / `Wikibolana` : **tsy misy intsony** (0 hita) |
| 3 | `V.A.: Ny soa.` / `fahatsiahivan-tsaina` : **tsy misy intsony** (0 hita) |
| 4 | `Daty` : « … » (mangina) ; `Isan'ny seho` : 2-3 araka ny firaketana tsirairay (tsy nasiam-panova) |
| 5 | Polise : **Times New Roman 12** (fisoratan'ny mpampianatra) + Tinos ho an'ny contours anaty sary |
| 6 | `tenymalagasy.gov.mg` : tsy nampidirina ho discovery (araka ny didy taloha) |
| 7 | Fitsipika « hoy » : `Hoy i Koto` ✓ / `Hoy Rakoto` ✓ / `Hoy i Rakoto` ✗ — voatahiry ao amin'ny lesona |

Fanampiny : `ara-potoana` (tsy misy porotra) → `isan'andro` ao amin'ny « Ny teny vaovao » (loha1).
Fanamarihana : `src/build_manuel_t5.py` → `tatitra()` **mitazona ny forma voaràna** (defendus) ka tsy
mahay miverina intsony ny teny voaràna.
