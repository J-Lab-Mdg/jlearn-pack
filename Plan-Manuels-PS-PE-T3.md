# Deux manuels distincts — PS et PE (niveau T3 / 9e)

## 1. Les deux sources, et ce qui les distingue vraiment

| | **PS — Programme Scolaire** | **PE — Programme d'Étude** |
|---|---|---|
| Document | « Programmes scolaires, classe de 9ème, à partir de 2015‑2016 » (DCI) | « Fandaharam‑pibeazana T3 » (Direction des Curricula et des Recherches Pédagogiques) |
| Support | Scribd, 190 pages — `https://fr.scribd.com/document/506406946/Programmes-Scolaires-9eme` | `PE_T3.pdf`, 123 pages — déjà dans le dépôt (branche `main`) |
| Statut | Programme **en vigueur**, arrêté 2532/98 (MinESEB) | Programme **de la réforme en cours** |
| Pédagogie | **Pédagogie par Objectifs (PpO)** : objectifs spécifiques par trimestre | **Approche par les résultats d'apprentissage** : VPI → VPA → VPM |
| Langue du document | Français | Malgache (parties EPS et Français en français) |
| Granularité | Objectif spécifique par trimestre (répartition annuelle) | VPM + contenus + conseils pédagogiques + évaluation, par sous-domaine |

**Vocabulaire du PE** :
- **VPI** — *voka-pianarana iombonana* : résultats d'apprentissage transversaux à toutes les disciplines (4 domaines : communication, esprit critique/créativité, épanouissement social, épanouissement personnel).
- **VPA** — *voka-pianarana ankapobeny* : résultats d'apprentissage généraux, par discipline et pour l'année.
- **VPM** — *voka-pianarana manokana* : résultats d'apprentissage spécifiques (savoirs, savoir-faire, savoir-être).
- **Fahendrena voizina** : valeurs à véhiculer.
- **Tombana** : l'évaluation.
- **Torohevitra sy tari-dalana enti-mampianatra** : conseils et orientations pédagogiques (sahanasa = activités, tetika amam-paika = stratégies, fitaovana = matériel).

## 2. Décisions validées par l'utilisateur

1. **Niveau** : la classe de 9e correspond à **T3** dans le nouveau système → `PE_T3.pdf` est le bon référentiel PE.
2. **Périmètre** : **toutes les matières** du niveau, et non la seule géographie.
3. **Structure** : les deux manuels gardent la **même maquette** (fiche de préparation → leçon → cadre RÉSUMÉ → exercices notés → corrigé détaillé). Seul le contenu-programme change.
4. **Priorité** : le **manuel PE d'abord**, le manuel PS ensuite.

## 3. Contenu du PE_T3 (extrait et analysé)

Extraction complète : 123 pages, **164 719 caractères** → `sources-ps-pe/PE_T3.txt`.

| Discipline | Pages PE | Volume horaire | Sous-domaines repérés |
|---|---|---|---|
| **Malagasy** | 9‑29 | 9 h | Fanehoan-kevitra am-bava · Fahaiza-mihaino · Vakiteny (vakiteny misosa, fahazoan-dahatsoratra) · Fiasan'ny teny · Asa an-tsoratra · Graphie-phonie |
| **Français** (éveil à la langue et à la culture française) | 30‑44 | 1 h | Thèmes : LA FAMILLE ELARGIE, … · production de phrases simples |
| **FOV** (Fanabeazana ho olom-pirenena vanona) | 45‑61 | 2 h | Vivre ensemble, priorités de dépense, … |
| **Mathématiques** | 62‑89 | 7 h | Fianarana isa (nombres) · Rafidrefy (mesures : litre, dL, cL, mL) · … |
| **Zavakanto** (arts) | 90‑105 | 3 h | Hosodoko (peinture) · … |
| **EPS** | 106‑123 | 2 h | Habiletés motrices · APSA · Relation à soi et à autrui |

Total horaire : **24 h par semaine**.

Structure type d'une entrée du PE (tableau à 3 colonnes) :
`Voka-pianarana manokana | Votoatiny | Torohevitra sy tari-dalana enti-mampianatra`,
suivie d'un encadré **Tombana** (critères d'évaluation) et des **Fahendrena voizina**.

## 4. Ce que deviennent les deux manuels

| | Manuel **PE** (prioritaire) | Manuel **PS** |
|---|---|---|
| Source | `sources-ps-pe/PE_T3.txt` | Programme scolaire 9e (Scribd) |
| Disciplines | Malagasy, Français, FOV, Mathématiques, Zavakanto, EPS | à confirmer (Malagasy, Français, Mathématiques, Tantara, Géographie, SVT, EPS, …) |
| Découpage | un ou plusieurs VPM par séance | objectif spécifique par séance (comme les 87 séances de géo déjà produites) |
| Maquette | fiche 30 min (I. Révision 3 min · II. Nouvelle leçon 22 min · III. Évaluation 5 min) + leçon + RÉSUMÉ + exercices /20 + corrigé | identique |

## 5. Chaîne de production (outils réels de cet environnement)

```bash
pip install --break-system-packages pypdf     # OK : PyPI est joignable
git show origin/main:PE_T3.pdf > sources-ps-pe/PE_T3.pdf
python3 -c "..."                               # pypdf → sources-ps-pe/PE_T3.txt
```

Contraintes de l'environnement (inchangées) :
- **Pas d'accès réseau direct** (curl/wget vers Drive échouent). Seuls `fetch_page` (pages web, PDF ≤ 30 pages), `git` (GitHub) et **PyPI** fonctionnent.
- Pas de LibreOffice, pas de rasteriseur SVG : le corps des documents est écrit en OOXML avec
  `geographie-9e/tools/jlearn_docx.py`, les figures géométriques avec ImageMagick
  (`geographie-9e/tools/figures.py`).

## 6. Points ouverts à trancher avant la production de masse

1. **Langue de rédaction des manuels PE.** Le PE_T3 est rédigé en malgache. Faut-il :
   - (a) respecter la langue d'enseignement de chaque discipline — malgache pour Malagasy,
       Mathématiques, FOV, Zavakanto ; français pour Français et EPS ;
   - (b) tout rédiger en français, le malgache restant seulement la langue des énoncés de
       la discipline Malagasy ;
   - (c) bilingue : consignes en français, contenus disciplinaires en malgache ?
2. **Découpage horaire en séances.** Faut-il produire une séance par VPM, ou regrouper
   plusieurs VPM par séance selon le volume horaire (ex. Malagasy 9 h → combien de séances) ?
3. **Ordre de production des disciplines du manuel PE** : Malagasy d'abord (le plus gros),
   ou une discipline pilote courte (FOV ou EPS) pour valider la maquette ?
4. **Manuel PS** : confirmer la liste exacte des disciplines et la source la plus fiable
   (Scribd 190 pages, à extraire par tranches, contre les fichiers FRA/FRM déjà en local qui
   ne couvrent que la géographie).

## 7. État d'avancement

- ✅ `PE_T3.pdf` récupéré depuis `origin/main` et **extrait intégralement** (`PE_T3.txt`).
- ✅ Structure du PE analysée (6 disciplines, VPA/VPM/Tombana).
- ✅ Outil d'extraction PDF robuste : `pip install pypdf` (remplace `tools/pdf_cid.py`,
  qui échouait faute de tables ToUnicode exploitables).
- ⏳ Découpage T3 en séances, discipline par discipline.
- ⏳ Extraction du Programme Scolaire 9e depuis Scribd.

## 8. Blocage levé le 2026-09-09 : la Géographie est ABSENTE du PE_T3

Table des matières officielle du PE_T3 (page 8, *Fizahan-takila*), vérifiée :

```
MALAGASY ...........................  9
FRANÇAIS ........................... 22
FANABEAZANA HO OLOM-PIRENENA VANONA  45
MATEMATIKA ......................... 62
ZAVAKANTO .......................... 88
EDUCATION PHYSIQUE ET SPORTIVE ..... 106
```

**Aucune discipline « Géographie » (ni Histoire) au niveau T3.** Les occurrences de mots
géographiques dans le texte (`rano`, `toerana`, `lalana`…) sont incidentes : elles apparaissent
dans des contextes de Mathématiques ou de FOV, pas dans un programme de géographie.

Vérifié aussi, sans résultat : `PEC TeSI 2025 2026.docx`, `PEC_TeSI_2026_2027.docx`,
`PROGRAMME D'EMPLOI 2025 2026 TESI.docx`, `hg geo raps.docx` — aucun programme de géographie.

### Conséquence

La décision utilisateur est **« on crée la géographie, en français, en se concentrant sur le PE
d'abord »**. Or le PE du niveau retenu (T3) ne porte pas la géographie. Deux issues possibles :

1. **Le volume PE qui porte la géographie est un autre T** (T4, T5 ou un niveau de collège où
   l'on trouve « Tantara sy Jeografia »). Dans ce cas : déposer ce PDF dans le dépôt (comme
   `PE_T3.pdf`) ou en donner le lien Drive — l'extraction intégrale par `pypdf` fonctionne.
2. **Le nouveau programme ne porte pas la géographie à ce niveau** : le manuel « PE de
   géographie » serait alors construit en transposant le contenu du PS dans le cadre
   pédagogique du PE (VPM → Votoatiny → Torohevitra → Tombana, valeurs). Décision à valider.

### Ce qui reste disponible immédiatement

Le manuel **PS de géographie 9e** est entièrement sourcé (programme officiel + FRA-GEO-9e,
34 objectifs) : 21 séances sur 87 déjà produites dans
`geographie-9e/output/Manuel_Geographie_9e_V2_T1.docx`.

## 9. Décision du 2026-09-09 : on abandonne la Géographie PE

Le PE (nouveau programme) ne portant pas la géographie au niveau T3, l'utilisateur décide :

> « donc si le PE ne comporte pas de geographie, on va se concentrer sur le PS.
> laisson tomber Geo PE. ok? » — **réponse : oui, validé.**

Conséquences :

- **Manuel PS de Géographie 9e** : seul projet actif. Objectif : les 87 séances
  (81 de cours + 3 révisions + 3 sujets d'examen), en français.
- **Manuel PE de Géographie** : abandonné. Le dossier PE reste documenté (§1 à §8) si un
  volume PE portant la géographie est fourni plus tard ; les outils d'extraction
  (`pypdf`) et la source `sources-ps-pe/PE_T3.txt` sont conservés.
- Le manuel PS reste construit sur : programme officiel 9e (Scribd) + `FRA-GEO-9e.doc`
  (34 objectifs) + `plan-decoupage-GEO-9e.md` (87 séances).
