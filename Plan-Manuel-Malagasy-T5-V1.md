# Plan & paramètres — **Manuel Malagasy T5 (V1)** — Traitement C

Décisions actées (réponses du 16/10) : **matière = taranja MALAGASY**, **niveau = T5 (7e / CM2)**,
**Traitement C** (génération de zéro par script), **sources = PE T5 + FRP**, **skill = v20 d'abord**.
Fichiers sources : voir `Analyse-preT5-Manuel-Malagasy.md`.

---

## 1. Paramètres adaptés au T5 ( lus dans le PE T5, jamais supposés )

```yaml
projet: manuel-malagasy-t5
matiere: MALAGASY            # Fiteny Malagasy, enseignée EN malgache
niveau: T5                   # = 7ème (ancien) = CM2   ⚠️ pas la 5ème collège (= T7)
langue_redaction: malgache intégral (100 %) — aucun parallèle FR, sauf annexes bilingues MG/FR
titre_document: TAKELA-PANOMANAN-DESONA
gabarit_etape3: >
  "Androany isika dia hianatra lesona vaovao hoe : « [lohateny] ».
   Aorian'ity seho ity ianareo dia ho afaka h[objectif]..."
source: "PE T5 (DCRP, nouveau programme) pp. 9-21 — FRP T5 (à fournir, voir §4)"
```

### Zana-taranja et rythme hebdomadaire (tableau `LANJAN’ORA` du PE, p.11)

| Zana-taranja | Isan'ny seho / herinandro | **Faharetan'ny seho** | Lanja / herinandro |
|---|---:|---:|---:|
| Fanehoan-kevitra am-bava | 3 | **20 minitra** | 60 min |
| Vakiteny | 2 | **30 minitra** | 60 min |
| Fiasan'ny teny | 2 | **30 minitra** | 60 min |
| Asa an-tsoratra | 2 | **30 minitra** | 60 min |
| **Isan'ny seho ankerinandro** | **9** | — | **240 min = 4 ora** |

### Répartition I / II / III recalculée par durée (règle : proportionnelle, jamais un gabarit figé)

| Durée réelle de la seho | I. Famerenana | II. Lesona vaovao (6 sous-étapes) | III. Tombana |
|---|---:|---:|---:|
| **20 min** (Fanehoan-kevitra am-bava) | 3 min | 14 min | 3 min |
| **30 min** (3 autres zana-taranja) | 5 min | 20 min | 5 min |

> À confirmer : dans la méta-table, `Faharetany` est **laissé vide** (convention validée pour le manuel 6e,
> cf. `Message_pour_agent_Manuel_Malagasy_5e.md` §3) — même si le PE donne 20/30 min ci-dessus.

### Invariants de forme (skill)
6 colonnes · 2 lignes d'en-tête (`Dingana sy Faharetany` | `Fizotry ny Lesona` → `Mpampianatra`/`Mpianatra` |
`Tetika Amam-paika` | `Fitaovana` | `Fanamarihana`) · Times New Roman · méta-table sans bordures ·
`Seho n° N / TOTAL` + `Isan'ny seho : X` · `Kilasy : 5e` · `Fanovozan-kevitra : PE 5e, FRP 5e` ·
lettrage QCM **a b d e f g h i j k l m n o p r s t v z** (pas de C/Q/U/W/X) · `V.A.` jamais en placeholder ·
min. 4 items/exercice, 2 types différents par seho, rotation des types, jamais le nom du type affiché ·
couleurs `#C00000` titre / `#1E7B34` sous-titres / `#1F4E79` mots-clés / `#C2185B` corrigés ·
barème uniquement dans `FANAZARAN-TENA` (jamais dans la fiche) · `Fanamarihana` = ce que l'élève remarque ·
`Fitaovana` : objet concret (jamais « am-bava » ; `----` aux étapes sans support, convention MG) ·
interdits : dates calendaires, mention d'un ministère, « BEPC », « barémé », sur-précision de l'implicite.

---

## 2. Les 15 LOHAHEVITRA (PE T5, p.11) — colonne vertébrale du manuel

1. Ny fitandroana ny fahasalamana
2. Ady amin'ny fanararaotana ara-nofo sy ny herisetra
3. Fanajana ny tontolo manodidina
4. Ady amin'ny fanavakavahana
5. Ny vahoaka sy ny mpitondra
6. Ny fifidianana
7. Ny karazam-pihariana : ny fambolena sy ny fiompiana ary ny jono
8. Ny karazam-pihariana : ny taozavatra, ny orinasa
9. Ny karazam-piharana : ny asa birao
10. Ny fandrosoan'ny teknôlôjia
11. Ny toe-tsaina siantifika
12. Ny fiovan'ny toetrandro
13. Ny finoana, ny karazam-pivavahana
14. Ny fivoaran'ny kolontsaina
15. Ady amin'ny kolikoly eo anivon'ny fiaraha-monina sy ny firenena

Chaque thème **alimente les 4 zana-taranja** (mêmes textes/vocabulaire, compétences différentes) :
c'est ce qui rend le manuel 6e gérable — on garde le même principe.

## 3. Votoatiny officiels par zana-taranja (PE T5 p.12-13) — base des fiches

- **Fanehoan-kevitra am-bava** → *Fanehoan-kevitra* (fepetra fototra, voambolana mifandraika amin'ny lohahevitra,
  mpanamarika fotoana, teny mpandamina, teny enti-manohana hevitra, rafitra sy fitsipika) ·
  *Fahaiza-mihaino* (lohateny/sary, teny mitovy-hevitra sy mifanohi-kevitra, andian-teny, ambaratongam-pitenenana,
  hevitra mivantana/takarina, hevi-dehibe, fanehoan-kevitra malalaka, hafatra/fahendrena) ·
  *Lahateny* (firafitra : fampidirana/famelabelarana/famaranana, endrika mampiavaka, fepetra mifehy ny fitenenana).
- **Vakiteny** → *Vakiteny miaina* (mari-piatoana : teboka, baraingo, tsoraka, faingo, teboka roa, teboka amam-paingo,
  farango sosona · lantom-peo) · *Fahazoan-dahatsoratra* (mari-pamantarana, teny mifanohitovy, hevitra takarina, fanohanana hevitra…).
- **Fiasan'ny teny** → *Tsipelina* (samihafa/samy hafa · noho ny/nony/no ho · teny misy « -n- » : inty/ity, mainka/maika,
  manantitra/manatitra, manantona/manatona · teny roa avahan'ny tendro : barika/barìka, tery/terý, ary/arý ·
  teny verindroa miafara amin'ny -ka/-tra/-na · kamban-teny + tsipi-panohizana) ·
  *Fitsipiky ny teny* (tsirinteny -in-/-if-/-amp- · filazam-potoana roa lafy ho avy/lasa · matoanteny ho-/ho ·
  filazam-potoana aorian'ny mpanampy azo / tsy azo / tsy maintsy / aoka / mba / mety · mpisolo tena tampisaka
  -ko/-nao/-ny/-ntsika/-nay/-nareo et -o/-ao/-tsika/-nay/-areo · renifameno/zana-pameno · rafi-fehezanteny
  « dia » vs « no » · filaza mandidy mandrara/mirary).
- **Asa an-tsoratra** → lahatsoratra 8-10 fehezanteny, firafitra fampidirana/votoatin-kevitra/famaranana,
  fanatsarana sy fanehoana ny asa (4 dingana : fandrafetana → vakiraoka → fanitsiana → fanehoana).

**Minimums par fiche (règle matière Malagasy, `discipline-malagasy.md`)** : 5 exemples · 3 erreurs/contre-exemples ·
3 exercices · 1 dialogue ( orally-based zana-taranja) · 1 note culturelle — variété : **malagasy ofisialy**.

---

## 4. ⚠️ Trous dans les sources (à trancher avant la 1re fiche)

| Manque | Conséquence | Issue possible |
|---|---|---|
| **FRP T5 fascicule 1** (le `FRP T5 FASCICULE 2.pdf` du dépôt ne contient que Mathématiques p.4, Sciences & Technologie p.44, Géographie p.81 — **aucun Malagasy**) | pas de `lahatsoratra`/textes supports officiels → il faut les écrire (risque : inventer) | fournir le fascicule 1, **ou** je m'appuie sur PE + corpus public fiable (angano, ohabolana, tononkalo) en citant tout dans `Loharanom-baovao` |
| **RAPE T5** (Drive : RAPE T6, T9, T11, T12 uniquement) | pas de découpage hebdo officiel | la répartition primaire existe déjà : `FRA et FRM.zip/7ème/` (30 min, 2 seho/andro, tableau `Isan'ny seho / Herinandro / Volana`) → utilisable comme calendrier, **en gardant le PE pour les contenus** |
| **Skill v20** (`jlearn-manuel-scolaire-skill-v20.zip`, 61 Ko sur Drive) | je ne peux lire un `.zip` du Drive qu'en base64 via mon contexte (~82 000 caractères) = gaspillage | voir question posée : soit tu déposes le `.zip` dans le dépôt/le chat, soit je pars de **v18 (déjà dans le dépôt) + les 2 deltas documentés** (v19 = resync `vocabulaire-langues.md` I/II/III ; v18+ = module `svt.md`) et j'applique moi-même la mise à jour |

## 5. Ce que dit déjà la note de mise à jour du skill (→ structure de la fiche)

`maj-skill-jlearn-manuel-scolaire.md` (v18 → v19+) acte pour tout manuel généré de zéro :
1. Structure **3 phases** par défaut : **I. RÉVISION** (1 ligne) · **II. NOUVELLE LEÇON** (ligne de section fusionnée
   fond grisé + sous-étapes *sans numérotation* : Mise en situation, Présentation, Observation, Analyse, Synthèse) ·
   **III. ÉVALUATION** (une ligne qui **fusionne** les anciennes Application **et** Évaluation).
   → **abandon de la numérotation plate 1→8** (c'est exactement ce qui pose problème dans le manuel Tantara T5 existant).
2. Après la leçon : **un seul titre `EXERCICES`** (pas « supplémentaires — Application/Évaluation »), numérotation
   continue des exercices, consigne directe à l'impératif.
3. Numérotation des séances **continue** sur tout le livre, sans repère de date/période.
4. Section finale **`Lohahevitry ny fanadinana`** (sujets + corrigés) : **un seul bloc en fin d'ouvrage**, calé sur le
   **format officiel de l'épreuve** du niveau (pour T5 : épreuve du **CEP/BEPC** — à confirmer ; jamais d'en-tête
   institutionnel), corrigés **rédigés comme une copie d'élève** (jamais de méta-description), pas d'étiquettes
   « Introduction/Développement/Conclusion », barème global.
5. `Teny fanolorana` : mention « 1re édition (V1), des erreurs peuvent subsister » + appel aux retours
   enseignants/élèves + remerciements.
6. Fichiers de référence fournis = **structure uniquement**, jamais de phrase copiée/reformulée de près.
7. Échantillon **d'une seule seho complète** validé avant toute génération en masse.

## 6. Chaîne de production proposée (identique à `svt-9e/src`, qui a fait ses preuves)

```
manuel-malagasy-t5/
├── src/
│   ├── builders.py          # table 6 colonnes, méta-table sans bordures, mots-clés colorés, sauts de ligne \n
│   ├── data_part1.py … part5.py   # 3 thèmes par fichier (15 thèmes) — chacun import-testable
│   ├── examens.py           # sujets + corrigés fin de manuel
│   └── build.py             # assemblage : couverture → Teny fanolorana → Ahoana ny fampiasana → sommaire
│                            #   (signets + liens internes) → fiches → tovana → Loharanom-baovao
├── output/Manuel_Malagasy_T5_JLearn_V1.docx
└── verify.py                # sectPr=1, ns0=0, gridCol=6, Times New Roman, zéro double espace, nb TAKELA = nb seho
```
Vérification visuelle avant livraison : `soffice --headless --convert-to pdf` → rendu PNG (couverture, 1 fiche
complète, dernière fiche). Images : SVG d'abord, puis `pack.json` + CDN (`[[IMG:id|légende|commentaire]]`).

### État réel de la chaîne (échantillon V1, 19/10) — `manuel-malagasy-t5/`

```
src/builders.py      # rich() lit **mots-clés** ; para()/cell_add(indent=) ; no_borders() ; shade() ;
                     # add_image() = pack J-Learn seulement, réduction 800 px + palette (cache .imgcache/)
                     # meta_table(doc, s, n, total) : 6×2 sans bordures, Faharetany vide, Isan'ny seho
                     # deroulement(doc, s, dI, dII, dIII) : 11×6, ligne 3 fusionnée gridSpan=6 + grisée
                     # seance_complet(doc, s, n, total, durees) : TAKELA + LESONA + FANAZARAN-TENA + VALINY
src/data_pilote.py   # 1 fiche = 1 dictionnaire (clés listées en tête de fichier)
src/build_pilote.py  # couverture + avant-propos + sommaire à liens internes + fiches
src/verify.py        # 69 invariants : python3 src/verify.py <docx> <nb_fiches>
output/Echantillon_Malagasy_T5_V1.docx   # ← l'échantillon soumis à validation (216 ko, 1 image)
```

`soffice` et `pandoc` n'existent pas dans ce sandbox : le contrôle visuel est **remplacé** par
`verify.py` (sectPr=1, ns0=0, gridCol 2+6 par fiche, 11 lignes, fusion+ombrage de la ligne II,
Times New Roman sur chaque run, `**` tous consommés, zéro double espace, zéro date calendaire,
zéro « BEPC » / « barémé » / « Ministère », un seul verbe d'action par cellule `Mpianatra`,
formules figées `Androany isika dia hianatra lesona vaovao hoe :` et `Koa, ` présentes).

## 7. Estimation du volume selon le périmètre retenu

| Périmètre | Fiches | Pages estimées | Commentaire |
|---|---:|---:|---|
| **A — pilote** : thèmes 1-5 × 4 zana-taranja | 20 | ~80 | comme le 6e : on fige les conventions, puis on étend |
| **B — moyen** : 15 thèmes × 2 fiches (oral+vakiteny / fiasan'ny teny+asa an-tsoratra) | 30 | ~120 | volume d'un vrai boky T5 |
| **C — complet** : 15 thèmes × 4 zana-taranja | 60 | ~240 | 1 fiche = 1 seho officielle (Isan'ny seho : 1), le plus fidèle au PE |

## 8. Référence structurelle malgache trouvée dans le dépôt

`FFMOM_10e_Takela_Panomanan_Desona_Livre.docx` (racine, ~161 000 caractères, 62-67 fiches) est le
modèle malgache le plus proche disponible. Il **confirme** : `TAKELA-PANOMANAN-DESONA`,
`Dingana sy Faharetany`, `Fizotry ny Lesona` (Mpampianatra / Mpianatra), `Tetika Amam-paika`,
`Fitaovana`, `Fanamarihana`, la mention `V.A.`, `----` pour l'absence de support, `Daty :` laissé
vide, et une **durée écrite sur la ligne de chaque grande étape** (ex. « 1. FAMERENANA 5 min »,
« 2. LESONA VAOVAO — 10 minitra », « 3. TOMBANA … »).

Il diffère sur l'habillage : numérotation `1. / 2.1 … 2.6 / 3.` au lieu de `I. / II. (1→6) / III.`
utilisée par le skill v21, et le `V.A.` est écrit dans la même cellule que l'action de l'élève
(`Mamaly. V.A. : …`). À trancher par le propriétaire du projet (goût éditorial, pas une faute).

Typographie relevée dans ce même document : espace française avant `:` (1042×) et avant `?` (257×)
→ le contrôle « pas d'espace avant ponctuation » de `verify.py` ne vérifie donc que ` . , !`.

### Décisions du 19/10 (après échantillon) — périmètre et mode de livraison

- **Images : aucune** dans le pilote (`add_image()` reste prêt ; pack J-Learn uniquement, 800 px).
- **Évaluations intermédiaires : aucune** non plus — le pilote = les fiches de seho seules.
- **Textes longs** : rédigés au niveau T5 quand aucun texte public-domaine ne convient (thème hygiène),
  avec citation des sources documentaires en fin de manuel ; ohabolana / angano / tononkalo = domaine
  public cité (ex. « Ny fahasalamana dia ambony lavitra noho ny fananan-karena », ohabolana.org).
- **Numérotation** : `I. / II. (1→6) / III.` du skill v21 (et non `1. / 2.1 / 3.` du modèle FFMOM).
- **Livraison : lohahevitra par lohahevitra** — un livrable = 4 fiches (les 4 zana-taranja du thème),
  relecture malagasy du propriétaire, correction propagée dans les données, puis thème suivant.
  Pilote = 5 livraisons de ce type (20 fiches).
- Dépendances hors dépôt : `python3 -m pip install --target /home/user/pydeps python-docx Pillow`,
  exécutées par `manuel-malagasy-t5/run.sh` (voir `manuel-malagasy-t5/README.md`).
