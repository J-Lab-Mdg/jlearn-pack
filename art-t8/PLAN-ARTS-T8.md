# Arts T8 — plan du manuel et lot 1 (fiches pilotes)

**Statut : en attente de validation.** Aucun autre lot n'est produit tant que ce plan n'est pas validé.

Livrable du lot 1 : [`output/Art_T8_Pilote.docx`](output/Art_T8_Pilote.docx)

---

## 1. Périmètre verrouillé

| Décision | Valeur retenue |
|---|---|
| Source du volume horaire | **`PE RAPE/PE T8.pdf`** (version PDF) |
| Volume hebdomadaire | 2 h par semaine |
| Total Arts | **66 h** = 6 sous-disciplines × 11 h |
| Séances | **33 séances de 2 h** |
| Parties de leçon | **36** |
| Charnières | **S6, S17, S28** uniquement |
| Premier lot | Curriculum complet + sommaire + 1 fiche séance + 1 leçon/pratique |
| Médias | Réutiliser le T9 quand le contenu du PE correspond ; ne générer que le propre au T8 |
| Conventions | Identiques au manuel Arts T9 livré |

### Divergence de source écartée

Deux fichiers du PE T8 circulent dans le dépôt et ne donnent pas le même volume :

| Point | `PE T8.pdf` — **retenu** | `PE_T8.docx` — écarté |
|---|---|---|
| Volume hebdomadaire | 2 h (p. imprimée 214 **et** tableau p. 4) | 1 h 30 |
| Durée par sous-discipline | 11 h (six fois dans les tableaux Arts) | 13 h |
| Total Arts | **66 h** | 72 h |
| Compatible avec 33 séances de 2 h | oui | non |

La version PDF est confirmée deux fois dans le document ; c'est elle qui structure tout le manuel.

---

## 2. Architecture

Chaque sous-discipline occupe 5 séances pleines (10 h) plus une demi-séance (1 h) = 11 h.
Trois séances charnières, chacune coupée en deux blocs d'une heure.

| Sous-discipline | Séances / parties | Durée | Charnière | PE T8 (pages imprimées) |
|---|---|---|---|---|
| Dessin | S1–S5 + S6a | 11 h | S6a clôture | 216–218 |
| Peinture | S6b + S7–S11 | 11 h | S6b ouvre | 218–220 |
| Sculpture | S12–S16 + S17a | 11 h | S17a clôture | 221–222 |
| Musique | S17b + S18–S22 | 11 h | S17b ouvre | 223–225 |
| Danse | S23–S27 + S28a | 11 h | S28a clôture | 225–226 |
| Art dramatique | S28b + S29–S33 | 11 h | S28b ouvre | 226–228 |

**L'ordre des sous-disciplines suit les tableaux du PE T8** : dessin → peinture → sculpture.
Il diffère de l'ordre du T9 (dessin → sculpture → peinture) : ne pas recopier le T9 sur ce point.

Invariants contrôlés par `src/curriculum.js` : 36 parties, 3960 minutes, 660 min par domaine,
120 min par séance, charnières `[6, 17, 28]`, titres en majuscules au format `DOMAINE : OBJET`.

---

## 3. Les 36 parties

### Dessin — 11 h
| Séance | Titre |
|---|---|
| S1 | DESSIN : DE LA FORME À L'IMAGINATION |
| S2 | DESSIN : NUANCES ET TONS DE GRIS |
| S3 | DESSIN : PLACER DANS LA FEUILLE |
| S4 | DESSIN : LUMIÈRE ET OMBRE |
| S5 | DESSIN : UN PORTRAIT D'APRÈS MODÈLE |
| S6a | DESSIN : ANALYSER UNE ŒUVRE |

### Peinture — 11 h
| Séance | Titre |
|---|---|
| S6b | PEINTURE : PRÉPARER LES PRIMAIRES |
| S7 | PEINTURE : PRIMAIRES ET SECONDAIRES |
| S8 | PEINTURE : CHAUD, FROID, CLAIR, FONCÉ |
| S9 | PEINTURE : COLORIER À IMITER |
| S10 | PEINTURE : UN THÈME EN COULEURS |
| S11 | PEINTURE : PRÉSENTER ET RÉAJUSTER |

### Sculpture — 11 h
| Séance | Titre |
|---|---|
| S12 | SCULPTURE : DES OBJETS AUX INSTRUMENTS |
| S13 | SCULPTURE : CONCEVOIR UN INSTRUMENT |
| S14 | SCULPTURE : ASSEMBLER L'INSTRUMENT |
| S15 | SCULPTURE : DÉCORER EN BAS-RELIEF |
| S16 | SCULPTURE : JOUER ET AMÉLIORER |
| S17a | SCULPTURE : PRÉSENTER LES INSTRUMENTS |

### Musique — 11 h
| Séance | Titre |
|---|---|
| S17b | MUSIQUE : CLASSER LES INSTRUMENTS |
| S18 | MUSIQUE : INSTRUMENTS MALAGASY |
| S19 | MUSIQUE : MONOPHONIE ET POLYPHONIE |
| S20 | MUSIQUE : TEMPO ET RYTHME |
| S21 | MUSIQUE : DURÉE, INTENSITÉ, NUANCES |
| S22 | MUSIQUE : CHANTER ET INSTRUMENT À VENT |

### Danse — 11 h
| Séance | Titre |
|---|---|
| S23 | DANSE : BOUGER SUR LA PULSATION |
| S24 | DANSE : MOBILITÉ DU CORPS |
| S25 | DANSE : TRAJECTOIRES |
| S26 | DANSE : UNE SÉQUENCE URBAINE |
| S27 | DANSE : CRÉER UNE CHORÉGRAPHIE |
| S28a | DANSE : APPRÉCIER UNE DANSE |

### Art dramatique — 11 h
| Séance | Titre |
|---|---|
| S28b | ART DRAMATIQUE : ENTRER DANS LE JEU |
| S29 | ART DRAMATIQUE : UN PERSONNAGE DE CONTE |
| S30 | ART DRAMATIQUE : CORPS, VOIX, ÉMOTION |
| S31 | ART DRAMATIQUE : LIEUX ET OBJETS DE JEU |
| S32 | ART DRAMATIQUE : PRÉPARER LA MISE EN SCÈNE |
| S33 | ART DRAMATIQUE : JOUER DEVANT LA CLASSE |

---

## 4. Contenu du lot pilote

Partie retenue : **s01 — DESSIN : DE LA FORME À L'IMAGINATION**, séance 1, 120 min.

RAS du PE T8 (p. 216–217) : *« Réaliser l'imagination à l'aide des formes, en utilisant les nuances »*.
L'exemple donné par le PE — **cercle → ballon** — devient la tâche de transfert de la pratique.

Le document a été réordonné après retour de lecture : après la couverture, la leçon et la pratique commencent immédiatement. La fiche, le curriculum et les annexes viennent ensuite.

Le document contient :

1. Couverture J-Learn.
2. **Leçon s01** : scène, observation, préparation et quatre étapes a–d, avec consignes concises et schémas.
3. **Pratique s01** : séquence élève en phrases courtes, critères et bloc « Vidéos d’appoint » compact.
4. **Fiche séance 1, format A–E** : repères, matériel et sécurité, déroulement en un seul tableau, différenciation, erreurs et grille Acquis / En cours / À revoir.
5. Annexes après le contenu : droits, cadrage, répartition, sommaire interactif, curriculum des 36 parties, médias, progression, glossaire, sources et contrôle terrain.

Le pilote comporte quatre sections Word. Le sommaire interactif par signets est placé dans les annexes, pas avant la leçon.

---

## 5. Médias

### Réutilisation du T9 : 30 parties sur 36

Chaque réutilisation est justifiée par une correspondance de contenu du PE, dans `src/media_reuse.js`
et dans l'annexe « Réutilisation des médias » du document. Les fichiers T9 sont **référencés en place**,
sans duplication sur disque.

### Créations propres au T8 : 6 parties

| Partie | Pourquoi le T9 ne couvre pas |
|---|---|
| s01 | Dessin à partir de l'imagination ; le T9 partait de l'objet observé |
| s05 | Portrait d'après un modèle (RAS 2 du dessin T8) |
| s09 | Coloriage à imiter (RAS 2 de la peinture T8) |
| s19 | Monophonie / polyphonie : notion absente du T9 |
| s22 | Instrument à vent sodina / farara, explicite en T8 seulement |
| s26 | Danses urbaines ; le T9 traitait valse / cha-cha / samba |

### Produits dans ce lot

- **1 scène réaliste générée par IA** (`assets/scenes/s01.jpg`, 1100 × 734) : salle de classe malgache,
  trois élèves de T8, progression cercle → ballon → ballon en trois gris, enseignante qui guide.
  Style naturaliste aligné sur la séance 25 du T9. Ce n'est pas une photographie documentaire.
- **7 schémas explicatifs déterministes** (`assets/diagrams/s01_*.png` + `.svg`, 1400 × 920) :
  observation, préparation, étapes a–d, pratique. Gabarit T9 : bandeau titre, deux panneaux,
  cartouche explicatif. Produits par script, donc reproductibles.

Ce sont des schémas explicatifs, pas des scènes vectorielles : la scène d'ouverture reste une
illustration réaliste avec personnes, conformément à la demande.

### Réutilisation des scènes

Choix confirmé par l'utilisateur : **réutiliser une scène lorsqu'elle correspond au contenu**, même si une scène peut servir à plusieurs parties. Les scènes propres à des contenus non couverts restent à créer.

---

## 6. Écarts assumés dans ce lot

- **Audio absent du pilote, prévu au manuel complet** : un enregistrement par partie, liens et QR codes, hébergés sur Google Drive avec ZIP en un clic. Les audios T9 ne seront pas réutilisés pour les consignes T8.
- **Une seule partie entièrement rédigée.** Les 35 autres sont au stade curriculum ; c'est l'objet
  même de la validation demandée.
- **Pas de version élève séparée, pas de portfolio** : décisions T9 reconduites.

---

## 7. Contrôles exécutés

| Contrôle | Résultat |
|---|---|
| `node src/curriculum.js` | 36 parties / 33 séances / 66 h / 6 × 660 min / charnières 6-17-28 |
| `ped.validatePedagogy([s01])` | descripteurs = critères, flow 95 min, variantes présentes |
| `media.validate(parts)` | 30 réutilisées / 6 à créer, cohérence des tables |
| Existence des fichiers médias | tous présents (T8 neufs + T9 référencés) |
| `python src/validate_docx.py` | **PASS** — 4 sections, 10 médias, 50 signets, 48 ancres résolues, taille min 13 pt, Times New Roman unique |
| `python src/validate_xsd.py` | **0 erreur XSD** sur document, styles, en-têtes, pieds de page, notes, numérotation |
| `node src/validate_qr.js` | **PASS** — QR officiel lisible à 130 et 110 px ; seuil 80 px revérifié sur 6 QR T9 |
| python-docx | ouverture sans erreur |

Le contrôle XSD est celui qui avait révélé la cause du refus d'ouverture Word du manuel T9 V4
(texte brut dans `w:tc`). Le gabarit T8 reprend le correctif : cellules durcies, révision en
paragraphes, pieds de page à paragraphe terminal.

**Ces contrôles ne remplacent pas une ouverture réelle dans Word.** L'environnement de génération
ne dispose pas de moteur de rendu Word ; la checklist figure en annexe « Contrôle terrain ».

---

## 8. Reproduire

```bash
node art-t8/src/curriculum.js          # valide la répartition
node art-t8/src/manual_assets.js       # régénère les 7 schémas déterministes
node art-t8/src/build_pilot.js         # reconstruit le docx
python art-t8/src/validate_docx.py     # contrôles structurels et éditoriaux
python art-t8/src/validate_xsd.py      # validation XSD (schémas à cloner, voir docstring)
node art-t8/src/validate_qr.js         # QR du lot et seuil du gabarit audio
```

## 9. Fichiers

| Chemin | Rôle |
|---|---|
| `src/curriculum.js` | les 36 parties et la validation de la répartition |
| `src/titles_short.js`, `src/titles.json` | titres brefs en majuscules, source unique |
| `src/data_s01.js` | leçon et pratique pilotes |
| `src/pedagogy.js` | descripteurs, timing, kits, sécurité, variantes, différenciation, progression, glossaire |
| `src/media_reuse.js` | table de réutilisation T9 → T8 et liste des créations |
| `src/manual_assets.js` | générateur des schémas déterministes |
| `src/build_pilot.js` | construction du docx |
| `src/validate_docx.py`, `src/validate_xsd.py`, `src/validate_qr.js` | contrôles |
| `sources/NOTES-SOURCE.md` | dépouillement du PE T8 et du FRP T8, divergence, index des pages |
| `assets/scenes/`, `assets/diagrams/` | médias produits pour le lot |
