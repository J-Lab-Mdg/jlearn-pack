# Lettre de passation — Projet SVT T7 (5e)

**Date :** 2026-09-09
**Projet :** Création du manuel `SVT T7 [PE] Fiche de preparation sujet corrigés J-Learn.docx`
**Niveau :** T7 = 5e
**Source :** `PE_T7.docx`
**Skill utilisé :** `jlearn-manuel-scolaire` **v18** (`illustrations.md`, `svt.md`)

## Objectif de la session

Continuer le travail effectué sur **SVT T6** dans cette même conversation, mais pour **SVT 5e (T7)**, avec les **5 thématiques** du PE T7 :

1. Santé et bien-être (appareil digestif) — 10 h
2. Reproduction humaine (puberté, cycle, fécondation, grossesse précoce) — 10 h
3. Maladies infectieuses (microorganismes, immunité, prévention, Madagascar) — 20 h
4. Organisation des êtres vivants (écosystèmes, chaînes alimentaires) — 16 h
5. Géologie (structure du globe, volcanisme, séismes, tectonique, érosion) — 10 h

## Ce qui existe dans le dépôt

| Fichier / dossier | Statut |
|---|---|
| `PE_T7.docx` | ✅ récupéré depuis GitHub (`main`) |
| `PE-T7-SVT-extrait.md` | ✅ extrait officiel SVT T7 |
| `ANALYSE-PE-T7-SVT-skill.md` | ✅ analyse skill v18 + programme |
| `PLAN-MANUEL-SVT-T7.md` | ✅ plan **37 séances** (27 cours + 5 révisions + 5 examens) |
| `svt7-projet/` | ✅ générateur complet (src + output) |
| `svt7-projet/output/SVT T7 [PE] ...docx` | ✅ manuel final généré (~3,4 Mo) |
| `svt6-projet/` | ✅ modèle T6 (référence) |

## Décisions utilisateur retenues

- **Feu vert** donné : « vas y ».
- **Périmètre** : SVT pur, les 5 thématiques du PE T7.
- **Durée** : non affichée (laissée à l'enseignant).
- **Langue** : français, contexte Madagascar prioritaire.
- **Illustrations** : style mixte — schémas scolaires + scènes Madagascar.
- **Emplacements** : leçons + exercices + corrigés + révisions + examens + annexes.
- **Schémas** : légendés, annotations à compléter par les élèves.
- **Volume** : maximale dans les marges de la structure T6.
- **Régénération** : `GEN_IMAGES=0` pour reconstruire le docx sans régénérer les schémas.

## État actuel

### Données
- Unité I : 4 cours (appareil digestif).
- Unité II : 5 cours (puberté, organes génitaux, cycle, fécondation, grossesse précoce).
- Unité III : 8 cours (microorganismes, bactéries, champignons, virus/parasites, infection/immunité, antisepsie/asepsie/antibiotiques/vaccins/sérums, prévention, maladies à Madagascar).
- Unité IV : 6 cours (écosystème, conditions, adaptation, interactions, chaîne alimentaire, extinction).
- Unité V : 4 cours (structure interne, activités internes/externes, volcan/séisme, tectonique/lavak).
- Révisions : 5. Examens : 5.

### Illustrations
- `schemas-new.js` : 32 schémas SVG → PNG.
- `image-mapping.js` : mapping `unité:index` → figures + scènes.
- `output/images/scenes/` : 8 scènes Madagascar (repas, adolescent, grossesse précoce, santé communautaire, forêt/riz/étang, déforestation, volcan, lavak), réduites à ~1100 px.

## Vérifications faites

- 37 séances (`SÉANCE n / 37`), signets `seance1..37`, 5 signets d'unité.
- 27 fiches de préparation (`FICHE DE PRÉPARATION`).
- 5 révisions + 5 sujets d'examen avec corrigé.
- Toutes les images référencées existent (aucune manquante).
- `T6` absent du texte ; classe = `T7`.

## Comment reconstruire

```bash
cd /home/user/jlearn-pack/svt7-projet
npm install
node src/images.js            # régénérer les schémas PNG (facultatif)
GEN_IMAGES=0 node src/generate.js   # reconstruire le .docx sans régénérer les schémas
```

## Prochaines étapes possibles

- Vérifier visuellement le rendu des pages et des figures dans Word / LibreOffice.
- Ajuster les légendes, couleurs ou scènes si l'utilisateur en demande.
- Commiter/pousser uniquement les sources (`output/` est ignoré).

## Sources de la passation

- `PE-T7-SVT-extrait.md`
- `ANALYSE-PE-T7-SVT-skill.md`
- `PLAN-MANUEL-SVT-T7.md`
- `svt7-projet/`
- `svt6-projet/` (modèle)
