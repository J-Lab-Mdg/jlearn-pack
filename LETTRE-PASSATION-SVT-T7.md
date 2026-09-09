# Lettre de passation — Projet SVT T7 (5e)

**Date :** 2026-09-09
**Projet :** Création du manuel `SVT T7 [PE] Fiche de preparation sujet corrigés J-Learn.docx`
**Niveau :** T7 = 5e
**Source :** `PE_T7.docx`
**Skill utilisé :** `jlearn-manuel-scolaire` **v18** (`illustrations.md`, `svt.md`)

## Objectif de la session

Continuer le travail effectué sur **SVT T6** dans cette même conversation, mais pour **SVT 5e (T7)**, avec les **5 thématiques** du PE T7 :

1. Santé et bien-être (appareil digestif) — 10 h
2. Reproduction humaine (puberté, cycle, procréation, grossesse précoce) — 10 h
3. Maladies infectieuses (microorganismes, immunité, prévention) — 20 h
4. Organisation des êtres vivants (écosystèmes, chaînes alimentaires) — 16 h
5. Géologie (structure du globe, volcanisme, séismes, tectonique, érosion) — 10 h

## Ce qui existe déjà dans le dépôt

| Fichier | Statut |
|---|---|
| `PE_T7.docx` | ✅ récupéré depuis GitHub (`main`) |
| `PE-T7-SVT-extrait.md` | ✅ extrait officiel SVT T7 (créé) |
| `ANALYSE-PE-T7-SVT-skill.md` | ✅ analyse skill v18 + programme (créé) |
| `PLAN-MANUEL-SVT-T7.md` | ✅ plan de 35 séances (créé, à valider) |
| `svt6-projet/` | ✅ projet modèle T6 (générateur + illustrations) |
| `SVT T6 [PE] ...docx` | ✅ manuel T6 final (pour référence visuelle) |

## Étapes restantes

1. **Valider le plan** `PLAN-MANUEL-SVT-T7.md` (35 séances ou découpage proposé par l'utilisateur).
2. **Créer `svt7-projet/`** sur le modèle de `svt6-projet/` :
   - copier `builders.js`, `assemble.js`, `seance-generator.js`, `images.js`, `generate.js` ;
   - adapter classe / niveau (T7, classe 5e) ;
   - créer `data-unite1.js` … `data-unite5.js` et `data-evaluations.js`.
3. **Rédiger 25 leçons** depuis `PE-T7-SVT-extrait.md` (trajet digestif, puberté, microorganismes, écosystèmes, géologie).
4. **Illustrations** (schémas SVG→PNG + scènes style scolaire) :
   - appareil digestif, trajet des aliments, glandes digestives ;
   - puberté, organes génitaux internes, cycle menstruel, fécondation ;
   - microorganismes, immunité, antisepsie/vaccins/sérums ;
   - écosystème, chaîne alimentaire, habitats, extinction ;
   - structure du globe, volcan, séisme, tectonique, lavak.
5. **Assembler** `SVT T7 [PE] Fiche de preparation sujet corrigés J-Learn.docx`.
6. **Vérifier** : 1 `sectPr`, 0 `ns0`, Times New Roman, nombres de séances, signets interactifs, table des illustrations, aucune image manquante.

## Questions en attente pour l'utilisateur

1. **Le plan de 35 séances** est-il validé ?
2. **Durée** affichée ou laissée vierge ? (proposition : vierge)
3. **Périmètre** : SVT pur ?
4. **Langue** : français uniquement ?
5. **Illustrations** : schémas + scènes, contexte Madagascar ?
6. **Livrable** : `V1` ?
7. **Débuter tout de suite** après le feu vert ?

## Source de la passation

- `PE-T7-SVT-extrait.md`
- `ANALYSE-PE-T7-SVT-skill.md`
- `PLAN-MANUEL-SVT-T7.md`
- `svt6-projet/` (modèle opérationnel)
- `skill v18.zip` / `jlearn-manuel-scolaire-skill-v18v.zip`
