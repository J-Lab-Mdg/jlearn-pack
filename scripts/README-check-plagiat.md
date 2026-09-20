# `check_plagiat.py` — contrôle anti-plagiat par n-grammes

Garde-fou pour la **règle critique 15** du skill `jlearn-manuel-scolaire` v18 :
> les **faits** sont reprenables, les **formulations** ne le sont pas.

Détecte toute séquence de N mots consécutifs commune entre un manuel J-Learn et une source externe (FRP du MEN, manuel source fourni par l'utilisateur, etc.).

---

## Utilisation

```bash
# contrôle standard (séquences de 10 mots)
python3 scripts/check_plagiat.py MANUEL.docx source.txt

# contrôle strict, recommandé avant livraison
python3 scripts/check_plagiat.py MANUEL.docx source.txt --n 6 --min-car 25

# plusieurs sources d'un coup + rapport JSON
python3 scripts/check_plagiat.py MANUEL.docx frp.txt manuel_source.docx --json rapport.json
```

Accepte indifféremment des `.docx` (texte extrait automatiquement, tableaux compris) et des fichiers texte/Markdown.

**Code de sortie** : `0` si aucun recouvrement, `1` sinon — utilisable comme garde-fou automatique avant livraison.

---

## Choix du seuil `--n`

| `--n` | Usage |
|---|---|
| **10** | Contrôle de routine. Détecte la recopie franche. |
| **6** | **Recommandé avant livraison.** Détecte la recopie déguisée (mots changés en surface, structure identique). |
| 5 et moins | Génère des faux positifs sur les tournures scientifiques obligatoires. À réserver à une vérification ponctuelle. |

---

## Faux positifs déjà neutralisés

Le script ignore automatiquement les formules de gabarit J-Learn, qui sont **censées** être identiques d'un document à l'autre (elles viennent du skill, pas de la source) : « fiche de préparation », « déroulement de la leçon », « étapes et durée », « aujourd'hui nous allons apprendre », « les élèves observent silencieusement », « valeurs à véhiculer », etc.

Liste modifiable dans la constante `BOILERPLATE` en tête de script.

---

## Ce qu'une alerte veut dire — et ne veut pas dire

Une alerte **n'est pas** une accusation : c'est un passage à examiner.

1. **Est-ce un fait brut ?** (« 1 g de lipides apporte 9 kcal », une date, un nom d'organe)
   → Reprenable. Un fait ne se reformule pas indéfiniment. Ignorer l'alerte.
2. **Est-ce une formulation d'auteur ?** (une définition rédigée, une explication, un exemple narratif)
   → **À réécrire avec nos propres mots.**
3. **Est-ce un exemple pédagogique fictif ?** (prénoms, familles, villages inventés par la source)
   → À remplacer, puis vérifier les résidus — attention aux formes malgaches agglutinées (`-dRakoto`, `an-dRainikoto`) qu'un remplacement par limite de mot peut manquer.

---

## Cas réels mesurés sur ce dépôt

| Document testé | Source | `--n 10` | `--n 6` |
|---|---|---|---|
| Texte de test volontairement recopié | FRP SVT 3e | **94 % recouvert** ✅ détecté | — |
| `SVT T9 [PE] … (1).docx` (manuel actuel) | FRP SVT 3e | 0 % | — |
| `Proposition-correction-…-Seance4.md` (1re version) | FRP SVT 3e | 0 % | **9 mots** ⚠️ |
| `Proposition-correction-…-Seance4.md` (après reformulation) | FRP SVT 3e | 0 % | **0 %** ✅ |

Le cas de la séance 4 illustre l'intérêt du seuil strict : à `--n 10` la proposition passait, mais à `--n 6` le script a repéré une définition de 9 mots trop proche du fascicule (« la quantité d'énergie fournie à l'organisme »). Elle a été reformulée avant livraison.

Le manuel actuel est à 0 % : son problème n'est pas le plagiat, c'est l'absence de contenu (voir `Audit-SVT-T9-vs-skill-v18.md`).

---

## Préparer une source

Les PDF du FRP ne sont pas versionnés dans le dépôt (`sources-frp/` est dans `.gitignore`) : ce sont des documents tiers, conservés localement comme référence de travail.

Pour préparer un extrait exploitable, enregistrer le texte de la ressource dans un `.txt` UTF-8 sous `sources-frp/`, en conservant les titres `RES x.y` — ils facilitent la localisation d'un passage signalé.

## Exception de terminologie (ajoutée pour l'Unité IV)

Le contrôle exempte, en plus du gabarit J-Learn, une courte liste de
**dénominations imposées** : noms de maladies et d'organes que le Programme
d'Études fixe en toutes lettres (`TERMINOLOGIE` dans le script).

**Pourquoi.** Le français élide beaucoup : `cancer du col de l'utérus` compte
**six mots** pour l'outil. Nommer correctement la maladie suffisait donc à
déclencher une alerte, sans qu'aucune phrase du FRP n'ait été reprise. En
sciences, mal nommer une pathologie est une faute plus grave qu'une
coïncidence de six mots.

**Garde-fous.** L'exemption s'applique par **égalité stricte**, pas par
inclusion : dès qu'un seul mot de formulation entoure le terme, le passage est
de nouveau signalé. Contrôle de non-régression effectué après l'ajout :

| Vérification | Résultat |
|---|---|
| Recopie littérale d'un paragraphe du FRP | **99,55 %** détecté ✅ |
| Unités I, II (13-18), II (19-22), III, V | **0,00 %** inchangé ✅ |

À n'étendre qu'avec la même prudence, et jamais à une formulation.
