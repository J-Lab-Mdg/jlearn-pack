# Analyse préalable — création d'un **manuel malgache T5**

Audit des fichiers disponibles (dépôt `jlearn-pack` + Drive J-Lab) avant production.
But : identifier les manuels sources (Anglais, Tantara, Histoire, SVT, PC), les skills, et les documents officiels T5 (FRP, PE, RAPE), puis proposer les paramètres adaptés au T5.

---

## 1. Les skills `jlearn-manuel-scolaire` (4 états différents coexistent)

| Source | Version | Fichiers | Particularité |
|---|---|---|---|
| `skill v18.zip` (racine dépôt) | **v18** | 12 | `SKILL.md` 494 l., structure **I/II/III** obligatoire |
| `jlearn-manuel-scolaire-skill-v18v.zip` | **v18v** | 12 | idem, version « validée » partagée |
| patch `01a086c0` (racine dépôt) | **v18 + `svt.md`** | 13 | ajoute le module SVT (démarches scientifiques, distracteurs, valeurs du PE) |
| Drive `jlearn-manuel-scolaire-skill-v20.zip` | **v20** | n.c. | **la plus récente connue** — à récupérer avant de coder |
| Drive `maj-skill-jlearn-manuel-scolaire.md` | notes v18→v19+ | — | 12 règles ajoutées (voir §5) |

**Écart documenté à ne pas reproduire** (`Analyse-Skill-jlearn-v19.md`) : `vocabulaire-langues.md` est resté à l'**ancienne structure « 8 étapes à plat »** alors que `SKILL.md` impose 3 grandes étapes I/II/III + 6 sous-étapes. Comme le skill dit que **le gabarit MG/EN prime sur `design-fiche.md`**, un manuel malgache produit tel quel repartirait sur les 8 étapes plates. → À trancher avant la 1re fiche (question posée).

Autres modules disponibles : `mathematiques.md` (VOAMBOLANA, équations natives, vérif. numérique), `discipline-malagasy.md` (leçon de règle, minimums/notion), `fiabilite-malgache.md` (6 niveaux de sources, pièges), `illustrations.md` (SVG d'abord, nommage `_a`/`_b`), `manuel-structure.md`, `audit-conformite.md`, `continuite-multi-session.md`.

**Manque pour le T5** : aucun module `tantara.md` / `sciences-technologie.md` / `malagasy-T1-T5.md` — les spécificités « primaire » (30 min, oral massif, manipulable) ne sont couvertes nulle part. Proposition §6.

---

## 2. Manuels sources identifiés (par matière)

### Tantara — **il existe déjà un manuel T5 en malgache**
- Drive : `Takela_Panomanan_Desona_Tantara_T5_LIVRE.docx` (+ `-print.pdf`, `v2`, `v3`, `v3 (1)`) — **21 fiches**, 8 leçons / 47 séances, bilingue MG + FR dans les annexes.
- Drive : `Tantara_T5_Lesona1_v2.docx`, `tantara_T5.docx` (×2), `tantara_T5_v2_premium.docx` → contenu élève (leçons rédigées, schémas, sources citées) **sans** fiche de préparation.
- ⚠️ Ce manuel utilise **les 8 étapes à plat** (`Famerenana → Fitarihan-tsaina → Fanolorana → Fandinihana → Famakafakana → Famintinana → Fampiharana → Tombana`) → **non conforme** au skill v18+. C'est le point n°1 à corriger si on le reprend comme base.
- ⚠️ Il annonce « 21 fiches » et `TANJONA IRAY = SEHO IRAY`, mais le PE T5 en donne **48 séances de 30 min** → écart de cadrage à trancher (fusion de séances : autorisé par la convention `Isan'ny seho : X`).

### Anglais
- Drive : `Anglais_5e_ Lesson plan Lesson exercises answer key irregular verb .pdf` (dossier `3- Collège/5e/Anglais 5e`) + `Manuel_Anglais_5e_V1.docx`, `Manuel_Anglais_6e_JLearn[_corrige].docx`, `Manuel_Anglais_4e_JLearn_*`, `Manuel_Anglais_3eme_V1*`.
- Drive : dossiers audio **`J-Learn - Anglais T4 → T10 - Audio`** (≈ 20 mp3/niveau : dialogues, chants, vocabulaire) → modèle « manuel + audios » déjà industrialisé.
- Dépôt : `FRP_3eme_ANGLAIS.pdf`, `FRP_4eme_ANGLAIS.pdf`, `Programme-Scolaire-3eme anglais.docx`.
- Usage pour le T5 : **Gabarit EN + MP3** est la source d'inspiration pour la composante orale (le PE T5 « ANGLISY » = 1 h/semaine, 2 unités × 4 compétences).

### Histoire / HG-EC
- Dépôt : `Manuel_Histoire_3e_VF_V1.docx`, `Histoire_3e_.Fiche de préparation leçon sujet corrigé JLearn 0609.docx`, `Manuel_Geographie_3e_VF_V1.docx`, `Manuel_Geographie_1ereACD_V1_FINAL.docx`, `FRP_3eme_HISTOIRE.pdf`, `FRP_6eme_HISTOIRE.pdf`, `hg geo raps.docx`.
- Drive : `HISTO-GEO-EC_5e_V1-Fiche de préparation leçon sujet corrigé .pdf`, `Manuel_Histoire_TerminaleACD_JLearn.docx`, `Manuel Tantara 8ème.pdf/.mhtml`, `FRP T4/T5 FASCICULE` (géo).
- Usage : c'est la **meilleure matrice « fiches + leçon + exercices + corrigés »** pour une matière narrative (dates, faits, personnages) comme Tantara.

### SVT / Sciences & Technologie
- Dépôt : `svt-9e/` (**chaîne complète `src/build_b*.py` + `data_b*a/b.py` → 6 `.docx` produits**), `SVT-9e-Manuel-Complet.docx`, `Manuel-SVT-T9-complet (1).docx`, `Manuel_SVT-SciTech_6e_JLearn_v4_FINAL.docx`, `SVT T6/T7/T9 [PE] Fiche de préparation…`, `FRP_5eme_SVT.pdf` (couverture **T7**, voir §3), + ~30 PNG `svt9e_*` référencés dans `pack.json`.
- Drive : `SVT 7E_(CU T5_CM2) Fiche de préparation leçon sujet corrigé_JLearn_V2.pdf` ← **le seul document SVT/Sciences déjà au niveau T5/CM2**, `SVT_5eme SVT SCIENCE ET TECHNOLOGIE…V1-print.pdf`, `6ème-SVT-complet.docx`.
- Usage : `svt-9e/src` = **patron technique à copier** (data Python séparée + builder + assemblage), `AUDIT-images-pack.md`/`Anomalies-pack-illustrations.md` = retour d'expérience sur les images.

### PC (Physique-Chimie)
- Dépôt : `Manuel_Physique-Chimie_5e_JLearn_V1.docx` (+ `(3)`), `Manuel_Physique-Chimie_6e_JLearn_V1__4__[corrige_compatible|repaired].docx`, `Manuel_Physique_Chimie_6e_COMPLET_JLearn (1|2).docx`, `P.C-5-EME.pdf`, `PC 6e Fiche de préparation…pdf`, `FRP_5eme_PC.pdf`, `FRP_6eme_PC.pdf`, `FRP_4eme_PC.pdf`, `Manuel_Physique_Chimie_6e…`.
- Usage : `Manuel_Physique-Chimie_5e_JLearn_V1.docx` = référence de **ton et de densité** pour les matières expérimentales au collège ; le `.md` `prompt.txt` rappelle la leçon apprise : *schémas scolaires, pas photos réalistes* + *jamais la mention « Ministère de l'Éducation Nationale »*.

---

## 3. ⚠️ Piège n°1 du projet : **T5 ≠ 5ème**

Deux numérotations cohabitent dans les noms de fichiers du dépôt :

| Nouveau (PE/RAPE, T1→T12) | Ancien (FRP/Programmes) | Correspondance |
|---|---|---|
| **T5 = CM2** (fin du primaire) | **7ème** | `PE T5.pdf`, `FRP T5 FASCICULE 2.pdf`, `FRA et FRM/7ème/` |
| T6 | 6ème | `Manuel_Mathematiques_T6…`, `FRP_6eme_*` |
| **T7** | **5ème** | `FRP_5eme_SVT.pdf` porte la couverture **« TAONA FAHAFITO / T7 »** |

→ **Tous les fichiers `*_5eme_*` du dépôt (FRP_5eme_SVT/PC/FRS, `Manuel_Physique-Chimie_5e_JLearn_V1`, `Manuel_SVT_5eme_V1`, `RAPS-5ème`) sont du niveau T7 (5ème au collège), PAS du T5 (CM2).**
→ Un « manuel T5 » = **fin du primaire** : séances courtes (souvent 30 min), oral dominant, une grande partie des matières enseignées **en malgache**.

---

## 4. Documents officiels T5 réellement disponibles

| Doc | État | Ce qu'on y trouve |
|---|---|---|
| **PE T5** (`PE RAPE/PE T5.pdf`, 227 p.) | ✅ complet, **nouveau programme** | 10 matières : Malagasy (p.9), Français (22), **Anglisy (46)**, Maths (86), **Sciences & Technologie (105)**, **Tantara (134)**, Géo (155), FOV (170), Zavakanto (183), EPS (208). + RAT, valeurs, volumes horaires, VPA, tableaux Votoatiny |
| **FRP T5 FASCICULE 2** (134 p.) | ⚠️ partiel | Contient **Mathématiques (p.4), Sciences & Technologie (44), Géographie (81)** sous forme « RES 1 : support de cours » (texte élève + exemples). **Pas** Malagasy/Anglisy/Tantara/FOV/Zavakanto/EPS → fascicule 1 absent du dépôt **et** du Drive |
| **RAPE T5** | ❌ **introuvable** | Le Drive ne contient que `RAPE_T6_2025_2026.pdf`, `RAPE-T9`, `RAPE-T11`, `RAPE-T12`, + `4- RAPE.zip` à vérifier. Le dépôt a `RAPE-T7_2024_2025.pdf` |
| Répartition primaire (substitut du RAPE) | ✅ dans `FRA et FRM.zip/7ème/` | Paires **FRA** (français) / **FRM** (malgache) par matière : Tantara, Géographie, CU (sciences), Calcul, Malagasy, Français, HDM, Sary, Hetsika amantsapa, EPS, FFMOM. Format : « TAKELAKA FITSINJARANA… », `FAHARETAN'NY SEHO : 30 minitra`, `SEHO 2 ISAN-KERINANDRO`, tableau *Tanjona manokana / Vontoatiny / Isan'ny seho / Herinandro / Volana* |

### Paramètres T5 lus dans le PE (à utiliser, jamais supposés)
- **Malagasy** : `LANJAN'ORA` = 4 h/sem — Fanehoan-kevitra am-bava 3 × 20 min · Vakiteny 2 × 30 · Fiasan'ny teny 2 × 30 · Asa an-tsoratra 2 × 30 (FITAMBARANY 9 séances) ; **15 lohahevitra** ; 4 zana-taranja.
- **Anglisy** : 1 h/sem (`ora iray isan-kerinandro`).
- **Tantara** : 1 h/sem, **6 lohahevitra**, `Faharetany` par thème = *2h (4 seho × 30 mn) · 2h (4) · 3h (6) · 6h (12) · 7h (14) · 4h (8)* → **48 séances de 30 min** ; démarche imposée **ODAS** (fandinihana, fanoritsoritana, fanadihadiana, famintinana) + exploiter les **loharano ara-tantara voalohany** (sources primaires).
- **Géographie** : 5 thématiques, démarche ODAS aussi.
- **Zavakanto** : 1 h 20/sem ; **EPS** : intouchable (règle 2 du skill).

---

## 5. Règles déjà actées ailleurs qu'il faut respecter ici (sans les redemander)

Depuis `maj-skill-jlearn-manuel-scolaire.md` + `Message_pour_agent_Manuel_Malagasy_5e.md` :
1. **Échantillon d'abord** : 1 séance complète (fiche + leçon + exercices) validée **avant** toute génération en masse ; question fermée oui/non après l'échantillon.
2. **Découpage à partir du contenu réel**, pas du seul calendrier → puis **tableau récapitulatif à faire valider**.
3. Une matière = **un livre complet à la fois** (pas de fichier multi-matières fourre-tout).
4. Numérotation **continue** Séance 1 → N, **jamais de date calendaire** ni de repère de période imposé.
5. Colonne **Mpianatra** : un verbe d'action obligatoire à chaque ligne (`Mamaly. / Mihaino. / Mijery. / Mamaly.`…), la V.A. derrière.
6. **V.A. jamais en placeholder** : toujours des réponses concrètes attendues (sauf tâche vraiment ouverte/personnelle).
7. **`Isan'ny seho : X`** dans la méta-table, **`Faharetany` laissé vide** (décision utilisateur 6e — à confirmer pour le T5), `Kilasy : 5e` en chiffres, `Seho n/N`, `Fanovozan-kevitra` minimal (`RAPS 5e, PS 5e`).
8. **III. Tombana = questions-réponses simples**, sans étiquettes de type, sans barème dans la fiche (barème uniquement dans la section `FANAZARAN-TENA`).
9. Pas de fiche « leçon » pour les séances de production pure (`Famoronan-dahatsoratra`) → **demander** avant de trancher.
10. Jamais « Ministère de l'Éducation Nationale », jamais « BEPC » (→ `Lohahevitry ny fanadinana [niveau]`), jamais le mot « barémé », jamais « Oral » dans `Fitaovana`.
11. Génération par **script Python (`python-docx`)** + `builders.py` réutilisable + données découpées par thème (`data_part1.py`…) ; totaux calculés dynamiquement ; contrôle visuel par `soffice → pdf → image` avant livraison ; `grep` systématique d'un motif corrigé dans tout le projet.
12. Malgache : vérification en ligne systématique, règle du `-d` réservée aux noms en `Ra-`, pas d'exemple morphologique inventé (« trou visible > exemple faux »), poèmes recopiés à l'identique.

---

## 6. Proposition de configuration (paramètres adaptés au T5)

```yaml
projet: manuel-malagasy-t5
langue_redaction: malgache (100 % — pas de version FR en parallèle)
gabarits: vocabulaire-langues.md → section "Malgache" (à resynchroniser I/II/III)
titre_fiche: TAKELA-PANOMANAN-DESONA
niveau: T5 / 7e / CM2
matiere: A TRANCHER (voir questions)
duree_seance: 30 minitra   # lu dans le PE/la répartition 7e, jamais supposé
repartition_seance: I. Famerenana 5 min · II. Lesona vaovao 20 min (6 sous-etape, tsy misy durées) · III. Tombana 5 min
source_programme: PE T5 (nouveau)  [+ FRA/FRM 7eme pour la repartition et le vocabulaire officiel]
tableaux: 6 colonnes · 2 lignes d'en-tete · Times New Roman · meta-table sans bordures
lettrage_QCM: a b d e f g h i j k l m n o p r s t v z   # pas de C, Q, U, W, X
reponse_attendue: V.A. (Valiny Andrasana)
exercices: min. 4 items · 2 types differents par seance · rotation des types · jamais le nom du type affiche
couleurs: titre #C00000 · sous-titres #1E7B34 · mots-cles #1F4E79 · corriges #C2185B
illustrations: SVG first (geometrie/schemas), PNG via pack.json + CDN jsDelivr, marqueur [[IMG:id|legend|com.]]
livrable: Tantara_T5[_V1].docx via scripts/<projet>/ + output/
interdits: dates calendaires · mention Ministere · "Oral" en Fitaovana · seances d'evaluation enrichies · EPS/prescolaire
chaine: src/data_partN.py + builders.py + assemble.py -> output/*.docx -> pdf -> rendu PNG
```

**Estimation de volume** (Tantara T5 = 48 séances de 30 min, fusion en ~24 fiches de 2 séances) : ~24 fiches × (fiche 1 p. + leçon ~1,5 p. + exercices ~0,75 p.) ≈ **75–80 pages**, soit l'ordre de grandeur du manuel 6e déjà livré.

---

## 7. Manques à combler (à envoyer si tu les as)

1. `FRP T5 FASCICULE 1` (Malagasy, Anglisy, Tantara, FOV, Zavakanto) — seul le fascicule 2 est là.
2. `RAPE T5` (ou confirmation que la « répartition » du primaire = `FRA et FRM/7ème/` suffit).
3. ~~La version **v20** du skill (Drive)~~ → **fait** : `jlearn-manuel-scolaire/` = v18 dézippé +
   deltas v19/v20 (notes Drive) + conversion **v21** (structure I/II/III dans `vocabulaire-langues.md`,
   module `primaire.md` T1→T5, `svt.md`, `CHANGELOG.md`).
4. Le sujet exact de l'année (le PE T5 ne donne que les contenus ; si un manuel de l'élève T5 existe déjà pour la matière choisie, ça évite de réinventer le vocabulaire validé).
