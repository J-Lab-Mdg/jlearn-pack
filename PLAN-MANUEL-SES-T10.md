# Plan du manuel SES T10 — Programme d'Études (PE T10)

**Livrable final prévu :** `Manuel_SES_T10_JLearn.docx`
**Généré depuis :** `ses-t10-projet/` (Node.js + `docx`, Traitement C du skill v18)
**Livraison intermédiaire :** `ses-t10-projet/output/Manuel_SES_T10_V1_UNITE1.docx` (Unité I seule, à valider)

## Source

- `PE_T10.docx` : « PROGRAMME D'ÉTUDES — Classe de T10 », version expérimentale, DCRP.
- Section « Sciences Économiques et Sociales » extraite dans `PE-T10-SES-section.txt`.
- Volume horaire SES en T10 : **3 heures par semaine** → **76 heures** sur l'année (7 thématiques).

## Décisions validées (Étape 0 du skill)

| Point | Décision |
|---|---|
| Niveau / matière | T10 — Sciences Économiques et Sociales (discipline nouvelle, T10 → T12) |
| Point de départ | Cas C : création de zéro à partir du Programme d'Études |
| Skill | `jlearn-manuel-scolaire` **v18** (12 fichiers du zip, sans `svt.md`) |
| Langue | **Français uniquement** (pas de version malgache, pas d'encadré VOAMBOLANA) |
| Illustrations | **Mixte** : figures géométriques générées en script (Pillow) + scènes générées en style « manuel scolaire » |
| Structure | 7 unités = 7 thématiques · **1 révision + 1 sujet d'examen par unité** |
| Découpage | 1 séance de cours = **2 h**, 1 révision = **1 h**, 1 sujet d'examen = **1 h** → respect exact des 76 h du PE |
| Durée affichée | Oui : sur les 3 grandes étapes I/II/III et dans le champ « Durée » de la fiche |
| Corrigé | Rose bordeaux `#C2185B` (défaut du skill) |
| Rythme | **Bloc 1 = Unité I seule**, validation, puis blocs suivants |
| Interdits | Aucune mention du Ministère, aucun logo, aucune date calendaire, jamais « Oral » dans la colonne Support |

## Répartition horaire (contrôle : 76 h)

| Unité | Thématique PE | Heures PE | Séances de cours (2 h) | Révision (1 h) | Examen (1 h) | Total |
|---|---|---:|---:|:-:|:-:|---:|
| I | Orientation scolaire et professionnelle | 8 | 3 | 1 | 1 | 5 |
| II | Introduction à l'étude des SES | 6 | 2 | 1 | 1 | 4 |
| III | Entreprise et production | 16 | 7 | 1 | 1 | 9 |
| IV | Revenu et consommation | 14 | 6 | 1 | 1 | 8 |
| V | Marché et prix | 14 | 6 | 1 | 1 | 8 |
| VI | Individu et société | 10 | 4 | 1 | 1 | 6 |
| VII | Sciences politiques et droit | 8 | 3 | 1 | 1 | 5 |
| **Total** | | **76** | **31** | **7** | **7** | **45** |

Vérification : 31 × 2 h = 62 h + 7 h + 7 h = **76 h** ✓

## Découpage séance par séance

### Unité I — Orientation scolaire et professionnelle (8 h) — **BLOC 1, livré**
| N° | Titre | RAS | Durée |
|---|---|---|---|
| 1 | Le diplôme et l'emploi | Déterminer l'importance du diplôme par rapport à l'emploi | 2 h |
| 2 | Les séries du lycée et leurs débouchés | Analyser les spécificités de chaque série | 2 h |
| 3 | Construire son projet d'orientation | Étudier un projet d'orientation | 2 h |
| 4 | Révision — Unité I | — | 1 h |
| 5 | Sujet d'examen T10 — Unité I | — | 1 h |

### Unité II — Introduction à l'étude des SES (6 h)
| N° | Titre | Durée |
|---|---|---|
| 6 | Les concepts clés des sciences économiques et sociales | 2 h |
| 7 | Le fonctionnement de l'économie et de la société | 2 h |
| 8 | Révision — Unité II | 1 h |
| 9 | Sujet d'examen T10 — Unité II | 1 h |

### Unité III — Entreprise et production (16 h)
| N° | Titre | Durée |
|---|---|---|
| 10 | Les organisations productives : entreprises, administrations, économie sociale | 2 h |
| 11 | Biens et services : production marchande et non marchande | 2 h |
| 12 | Secteur formel et secteur informel | 2 h |
| 13 | Les facteurs de production et leurs combinaisons | 2 h |
| 14 | Productivité et progrès technique | 2 h |
| 15 | L'entrepreneur et la recherche du profit | 2 h |
| 16 | Mobiliser les ressources humaines, matérielles et financières | 2 h |
| 17 | Révision — Unité III | 1 h |
| 18 | Sujet d'examen T10 — Unité III | 1 h |

### Unité IV — Revenu et consommation (14 h)
| N° | Titre | Durée |
|---|---|---|
| 19 | Les revenus des ménages : revenus primaires et revenus de transfert | 2 h |
| 20 | L'utilisation du revenu disponible : consommation et épargne | 2 h |
| 21 | Les besoins et la pyramide de Maslow | 2 h |
| 22 | Les déterminants économiques de la consommation | 2 h |
| 23 | Les déterminants socioculturels de la consommation | 2 h |
| 24 | Effets de distinction et d'imitation | 2 h |
| 25 | Révision — Unité IV | 1 h |
| 26 | Sujet d'examen T10 — Unité IV | 1 h |

### Unité V — Marché et prix (14 h)
| N° | Titre | Durée |
|---|---|---|
| 27 | Le marché, l'offre et la demande | 2 h |
| 28 | La loi de l'offre et de la demande | 2 h |
| 29 | Le prix d'équilibre sur un marché concurrentiel *(graphique)* | 2 h |
| 30 | Le marché en concurrence pure et parfaite | 2 h |
| 31 | Monopole, duopole et oligopole | 2 h |
| 32 | L'entente entre les offreurs et ses conséquences | 2 h |
| 33 | Révision — Unité V | 1 h |
| 34 | Sujet d'examen T10 — Unité V | 1 h |

### Unité VI — Individu et société (10 h)
| N° | Titre | Durée |
|---|---|---|
| 35 | Les pratiques culturelles et les catégories socio-professionnelles | 2 h |
| 36 | Culture de masse et modes de vie | 2 h |
| 37 | La socialisation : normes, valeurs et société | 2 h |
| 38 | Les agents de socialisation et la socialisation différentielle | 2 h |
| 39 | Révision — Unité VI | 1 h |
| 40 | Sujet d'examen T10 — Unité VI | 1 h |

### Unité VII — Sciences politiques et droit (8 h)
| N° | Titre | Durée |
|---|---|---|
| 41 | Les éléments constitutifs du pouvoir politique : État, nation, territoire | 2 h |
| 42 | Légitimité et souveraineté de l'État | 2 h |
| 43 | Les fonctions du droit | 2 h |
| 44 | Révision — Unité VII | 1 h |
| 45 | Sujet d'examen T10 — Unité VII | 1 h |

## Contenu de chaque séance

1. **FICHE DE PRÉPARATION** — méta-table (Discipline, Thème, Titre, Objectif, Documentation, Support et matériel, Date vierge, Classe T10, Séance n° x/45, Durée, RAS, Valeurs) + tableau de déroulement 6 colonnes :
   - I. RÉVISION · II. NOUVELLE LEÇON (1. Mise en situation, 2. Présentation, 3. Observation, 4. Analyse, 5. Synthèse, 6. Application) · III. ÉVALUATION
   - Colonnes : Étapes | Enseignant / Apprenants | Technique et Stratégie | Support et Matériel | Observation
2. **LEÇON** — contenu réel, mots-clés en bleu, figure légendée quand elle existe
3. **EXERCICES** — notés sur barème (≥ 4 items par exercice, types variés, jamais nommés) + TOTAL
4. **CORRIGÉ** détaillé en rose bordeaux

## Annexes (un seul jeu, en fin de manuel)

Glossaire (18 termes pour l'Unité I, enrichi à chaque bloc) · Auto-évaluation (Acquis / En cours / À revoir) · Index interactif (mots-clés → séances) · Bibliographie et webographie · Table des illustrations

## Contrôles automatiques — Bloc 1 (tous OK)

| Contrôle | Attendu | Obtenu |
|---|---|---|
| « FICHE DE PRÉPARATION » | 3 (séances de cours) | 3 |
| « SÉANCE n / 45 » | 5 | 5 (1→5) |
| `<w:sectPr>` | 1 | 1 |
| Namespaces `ns0:` | 0 | 0 |
| Police Times New Roman | > 0 | 4 777 occurrences |
| Mention « Ministère » | 0 | 0 |
| « BEPC » | 0 | 0 |
| Support « Oral » | 0 | 0 |
| Dates calendaires | 0 | 0 |
| Images embarquées / liens internes / signets | — | 3 / 35 / 14 |

## Points encore à trancher

- Validation du gabarit sur l'Unité I (structure de la fiche, ton des leçons, volume d'exercices).
- Confirmation des durées affichées (2 h / 1 h / 1 h) ou passage à un champ Durée vierge.
- Confirmation des titres des séances 6 à 45 avant génération des blocs suivants.
