# Projet — Manuel Français 10e (CP2) — Collection J-Learn

Traitement C (génération de zéro) selon le skill `jlearn-manuel-scolaire` v18.
Manuel existant de référence : PDF Drive « Francais_10e_.fiche de préparation leçon sujet corrigé JLearn_V2 »
(8 unités, 120 fiches, 3×30 min par fiche) — illisible au-delà des fiches 4.

## Décisions validées

- Niveau : **10ème (CP2 / T2)** — même série que Français 11e (CP1, terminé : 8 thèmes, 80 séances).
- Durée de séance : **30 minutes** (FRA 10ème) — répartition **3 min / 22 min / 5 min**
  (celle du manuel CP2 existant ; la répartition CP1 4/22/4 ne doit PAS être réutilisée).
- Barème : **20 points par séance, minimum 4 items par exercice** (convention de collection ;
  le manuel existant CP2 affichait /10 — uniformisé, à signaler à l'utilisateur).
- Sous-discipline **variable par séance** (Expression Orale / Lecture / Écriture) via la clé `sd`
  de chaque séance dans `data-themeN.js` (Unité 1 : EO s1-6, L s7-11, EE s12).
- Sources : PDF existant (fiches 1-4 = séances 1-12, reprises fidèlement) + FRA 10ème
  (`FRA et FRM.zip` → `10ème/français/FRA FRANCAIS 10ème.docx`, lisible via python-docx).

## État

| Bloc | Unité | Séances | État |
|---|---|---|---|
| 1 | Les formules de présentation (EO/L/EE) | 1-12 | ✅ Livré (`output/Manuel_Francais_10e_V1_BLOC1.docx`) |
| 2 | Les termes relatifs à la famille | 13-28 | ⏳ Prochain relais (semaines 4-7 T1, sons u puis eu) |
| 3-8 | Toilette (12), école (12), cadeaux/vêtements (13), marché (18), repas (16), ferme (21) | 29-120 | ⏳ À venir |

Volumétrie totale : 8 unités, 120 séances (≈ 40 fiches de 3 jours).

## Générer le manuel

```bash
npm install                       # package docx
python3 illus/generate_illus.py   # illustrations PNG dans assets/
node src/assemble-bloc1.js        # → output/Manuel_Francais_10e_V1_BLOC1.docx
python3 verify_docx.py output/Manuel_Francais_10e_V1_BLOC1.docx 12   # TOUT CONFORME attendu
```

## Architecture

```
src/builders.js       # design skill v18 — DURÉES CP2 : 3/22/5 (différent de CP1 4/22/4)
src/data-theme1.js    # CONTENU des 12 séances de l'Unité 1 (clé sd par séance)
src/assemble-bloc1.js # couverture + avant-propos + mode d'emploi + sommaire interactif
illus/generate_illus.py  # illustrations scolaires plates (perso, bulle, velo, tasse, fanions…)
assets/               # PNG ~1100px (cover_hero + 7 illustrations unité 1)
verify_docx.py        # 22 vérifications skill v18 (paramétrable : <file> <N>)
```

## Règles à ne pas oublier (rappel skill v18)

- Durées UNIQUEMENT sur I / II / III (3/22/5 pour CP2), jamais sur les sous-étapes 1-6.
- ≥ 4 items par exercice, barème total = 20 pts, ne jamais nommer le type d'exercice.
- Révision sans support consultable (« — ») ; Analyse : 1 ligne par couple question / R.A.
- Synthèse par « Donc : » ; 0 date calendaire ; 0 « ministère » ; Times New Roman seule.
- Guillemets droits " " interdits DANS les chaînes JS (utiliser « »).
- Vérifier chaque PNG par read_file avant livraison (défauts corrigés au Bloc 1 : bulles
  chevauchées s3, jambes traversant la comptine s6, bébé masqué s10).
- Continuité : voir `LETTRE-PASSATION-BLOC1.md` (relais n°1 du projet CP2).
