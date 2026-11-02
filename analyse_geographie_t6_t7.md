# Analyse comparative et technique — Géographie T6 / T7

**Date de l’audit : 2 novembre 2026**  
**Dépôt audité :** `J-Lab-Mdg/jlearn-pack`  
**Référence Git du dépôt principal :** `origin/main` = `b1d130df8c738044b6d412190872de435e22dbd9`

## 1. Conclusion exécutive

- Le **manuel de Géographie T6** a été retrouvé exactement sous `origin/main:Geographie_T6_JLearn.docx`, à la racine du dépôt. Il s’agit bien d’un manuel complet et non d’un programme ou d’un FRP.
- Aucun fichier correspondant à un **manuel de Géographie T7** n’est présent dans l’arbre de `origin/main` : ni `Geographie_T7_JLearn.docx`, ni `Manuel_Geographie_T7*.docx`, ni autre DOCX explicitement identifié T7.
- Le dépôt contient bien les **références officielles T7** (`PE T7.pdf`, `PE_T7.docx`, `FRP_GEO_T7.pdf`), mais ces documents ne sont pas un manuel J-Learn T7.
- `Manuel_Geographie_3e_VF_V1.docx` ne peut pas être retenu comme T7 : sa page de titre indique explicitement **Classe de 3ème** ; dans la nomenclature scolaire malgache, cela correspond à T9, pas à T7.
- Aucun manuel n’a été modifié. Le présent diagnostic est un livrable séparé.

## 2. Inventaire des fichiers retrouvés

| Fichier | Emplacement / référence | Taille | Identification | Verdict |
|---|---|---:|---|---|
| `Geographie_T6_JLearn.docx` | `origin/main:/Geographie_T6_JLearn.docx` | 19 558 707 octets | Titre `GÉOGRAPHIE T6`; classe T6; 78 numéros | **Véritable manuel T6** |
| `Manuel_Geographie_1ereACD_V1_FINAL.docx` | racine locale et `origin/main:/Manuel_Geographie_1ereACD_V1_FINAL.docx` | 22 520 772 octets | `Classes de 1ère A, C, D`; 5 unités; 23 séances | Manuel lycée, **pas T7** |
| `Manuel_Geographie_3e_VF_V1.docx` | racine locale et `origin/main:/Manuel_Geographie_3e_VF_V1.docx` | 631 305 octets | `Classe de 3ème`; 18 séances | Manuel de 3ème/T9, **pas T7** |
| `hg geo raps.docx` | racine locale et `origin/main:/hg geo raps.docx` | 56 751 octets | Planning annuel Histoire/Géographie, dates 2020–2021, objectifs et semaines | Document de travail/planification, **pas un manuel** |
| `PE T6.pdf` | `origin/main:/PE RAPE/PE T6.pdf` | 4 425 991 octets | Programme d’études officiel, classe T6 | Référence normative T6 |
| `PE_T6.docx` | racine locale | — | Programme T6 en DOCX | Référence normative T6 |
| `FRP_GEOGRAPHIE_T6.pdf` | `origin/main:/PE RAPE/FRP_GEOGRAPHIE_T6.pdf` | 1 618 393 octets | Fascicule de ressources pédagogiques T6, 63 pages | Référence pédagogique T6 |
| `FRP_GEO_T7.pdf` | `origin/main:/PE RAPE/FRP_GEO_T7.pdf` | 2 197 519 octets | Fascicule de ressources pédagogiques T7, 72 pages | Référence pédagogique T7 |
| `PE T7.pdf` | `origin/main:/PE RAPE/PE T7.pdf` | 4 062 354 octets | Programme d’études officiel, classe T7 | Référence normative T7 |
| `PE_T7.docx` | racine locale | — | Programme T7 en DOCX | Référence normative T7 |

Le fichier T6 a été identifié dans le commit `b1d130df8c738044b6d412190872de435e22dbd9`, avec le blob `fcc064e4464a9776657e8d76f272df2b94d0673d`. Il n’est pas présent dans le checkout de la branche d’audit, mais son contenu a été lu directement par `git show origin/main:Geographie_T6_JLearn.docx`, sans le copier ni le modifier dans le dépôt de travail.

### Version interne du DOCX T6

Les propriétés OOXML indiquent :

- titre : `Manuel de Géographie T6 — J-Learn (édition complète)` ;
- créateur : `J-Lab — Collection J-Learn` ;
- dernier auteur indiqué : `Henintsoa Lamy Juno RANDRIANANTENAINA` ;
- révision Word : `2` ;
- création et dernière modification : `2026-10-30T06:08:00Z` ;
- description : 78 numéros, 66 leçons, 6 révisions, 6 sujets d’examen et annexes.

## 3. Pourquoi le T7 n’est pas un manuel

La recherche de l’arbre complet de `origin/main` ne renvoie qu’un programme et un FRP pour la Géographie T7. Le DOCX `PE_T7.docx` contient la section officielle Géographie, mais pas une succession de fiches de préparation, leçons, exercices et corrigés formant un manuel J-Learn.

Le FRP T7 est un document d’accompagnement ministériel : il expose des ressources par thématique, des textes, des précis et des guides d’exploitation. Il ne comporte pas la structure éditoriale d’un manuel élève/enseignant complet.

Le candidat le plus proche par matière, `Manuel_Geographie_3e_VF_V1.docx`, est explicitement hors niveau :

- page de titre : `Classe de 3ème` ;
- avant-propos : programme de Géographie de 3ème ;
- 18 séances ;
- sujets et corrigés de fin d’ouvrage.

Le fichier `hg geo raps.docx` est encore d’une autre nature : son contenu est organisé en tableaux `Objectifs spécifiques / Référence dans le programme / Nombre de séance / Semaine / Mois`, avec des dates de l’année scolaire 2020–2021. Il ne contient ni leçons rédigées ni exercices corrigés.

**Conclusion documentaire : le manuel Géographie T7 est absent du dépôt audité.** Il ne faut pas rebaptiser le manuel de 3ème pour combler cette absence.

## 4. Structure du manuel T6

Le T6 est un manuel complet organisé en six unités conformes aux six thématiques du programme officiel :

| Unité | Séances de leçon | Révision | Sujet d’examen | Contenu couvert |
|---|---:|---:|---:|---|
| 1. Les régions administratives de Madagascar | 1–8 | 9 | 10 | Régions, chefs-lieux, districts, communes, fokontany, délimitation, superficie |
| 2. L’utilisation des ressources naturelles | 11–24 | 25 | 26 | Ressources renouvelables/non renouvelables, usages, problèmes, solutions, mini-projet |
| 3. La population malgache | 27–36 | 37 | 38 | Répartition, densité, évolution, migrations, mouvement pendulaire, structure, développement |
| 4. L’exode rural à Madagascar | 39–48 | 49 | 50 | Notion, causes, conséquences rurales/urbaines, solutions |
| 5. Les grandes zones économiques et les activités économiques | 51–64 | 65 | 66 | Zones agricole, pêche, forestière, minière, artisanale, industrielle, touristique et activités associées |
| 6. Le village écologique | 67–76 | 77 | 78 | Organisation juridique et socioéconomique, habitat, architecture, infrastructures, sites et normes |

### Comptage éditorial

- 78 séances/numéros explicitement numérotés ;
- 66 séances de leçon ;
- 6 révisions, une par unité ;
- 6 sujets d’examen, un par unité ;
- 72 occurrences de fiche de préparation dans le corps du document : les 66 leçons et les 6 révisions ; les sujets d’examen ont un corrigé/barème mais pas de fiche de préparation complète ;
- 66 blocs `EXERCICES` pour les séances de leçon ;
- chaque séance de leçon suit la séquence fiche de préparation → leçon → exercices → corrigé ;
- les leçons sont ensuite reprises dans une partie consolidée `LEÇONS`, ce qui facilite la révision mais crée une duplication éditoriale importante.

Le manuel annonce 30 minutes par séance. Les 66 séances de contenu représentent donc 33 heures, exactement comme le total des durées thématiques du PE T6 : `4 + 7 + 5 + 5 + 7 + 5 = 33 heures`. Les 6 révisions et 6 examens ajoutent 6 heures éditoriales, soit 39 blocs de 30 minutes au total. Il est plus exact de qualifier les 78 numéros de **dispositif éditorial du manuel** que de dire qu’ils constituent à eux seuls le programme officiel.

### Exercices et corrigés

Les séances de leçon utilisent une trame stable de quatre types :

1. questions à réponse courte ;
2. vrai/faux ;
3. texte ou tableau à compléter ;
4. QCM.

Les items sont séparés sur des lignes distinctes et les corrigés reprennent les exercices avec un barème. Les sujets d’examen sont également structurés en quatre exercices de 5 points, pour un total de 20 points.

## 5. Comparaison avec le PE et le FRP officiels T6

### Correspondance globale

Le PE T6 définit six thématiques :

1. Les régions administratives de Madagascar ;
2. L’utilisation des ressources naturelles ;
3. La population malgache ;
4. L’exode rural à Madagascar ;
5. Les grandes zones économiques et les activités économiques ;
6. Le village écologique.

Le FRP `FRP_GEOGRAPHIE_T6.pdf` reprend les mêmes six thématiques. L’ordre, les intitulés généraux et la progression du manuel T6 correspondent donc très fortement aux références officielles.

| Référence officielle T6 | Présence dans le manuel | Évaluation |
|---|---|---|
| 24 régions, chefs-lieux, délimitation, superficie | Séances 1–8 ; synthèse des 24 régions et cartes muettes | Couverture explicite |
| Types et utilisations des ressources | Séances 11–18 | Couverture explicite |
| Déséquilibre population/ressources, surexploitation, espèces disparues, changement climatique | Séances 19–21 | Couverture explicite |
| Solutions : limitation des naissances, infrastructures sociales, pratiques modernes, cultures adaptées, exploitation rationnelle, reboisement | Séances 22–23 et activités associées | Couverture explicite, avec vocabulaire pédagogique simplifié |
| Mini-projet économique respectueux des ressources | Séance 24 et activités de synthèse | Couverture explicite |
| Répartition, évolution, migrations, croissance et structure de la population | Séances 27–36 | Couverture explicite |
| Exode rural : notion, causes, conséquences, solutions socio-économiques | Séances 39–48 | Couverture explicite |
| Zones économiques et activités : agriculture, élevage, pêche, forêt, mines, artisanat, industrie, tourisme, commerce, transport, nouvelles technologies | Séances 51–64 | Couverture explicite |
| Village écologique : organisation, structure, habitat, architecture, infrastructures, sites et normes | Séances 67–76 | Couverture explicite |

### Alignement pédagogique

Le PE T6 recommande une démarche centrée sur l’apprenant, l’observation, la description, l’analyse et la synthèse (ODAS), les représentations spatiales, les activités contextualisées et les travaux de groupe. Le manuel reprend une démarche scolaire régulière avec mise en situation, présentation, observation, analyse, synthèse, application et évaluation. Les scénarios locaux (taxi-brousse, village, marché, rizière, ressources de la région) vont dans le sens de la contextualisation recommandée.

À vérifier lors d’une relecture pédagogique finale :

- les tableaux de préparation doivent rendre suffisamment visible la **description**, et pas seulement l’observation et l’analyse ;
- les cartes et schémas doivent être exploités comme de véritables documents géographiques, avec titre, source, légende et consigne de lecture ;
- les formulations prescriptives sur les pratiques locales doivent être relues avec des enseignants et avec le contexte régional.

## 6. Points de cohérence et réserves sur le T6

### Niveau et matière

**Cohérent :** le titre, la classe, les unités, la durée annoncée et le contenu sont T6 Géographie. Les recherches textuelles n’ont pas relevé de mélange explicite avec T7, T8, T9, les mathématiques ou l’Histoire comme discipline. Le mot « histoire » apparaît seulement dans des contextes de tourisme culturel, de récit ou d’exemple local.

**Extension à documenter :** la séance 64 s’intitule `La nouvelle technologie et l’intelligence artificielle`. Le PE T6 mentionne `la nouvelle technologie`, mais pas explicitement l’intelligence artificielle. L’ajout peut être défendable comme actualisation, mais il doit être identifié comme extension et accompagné d’une source et d’objectifs adaptés au niveau T6.

### Terminologie et faits à vérifier

- Le manuel emploie `24 régions`, conformément au PE T6. Le FRP T6 contient toutefois des formulations internes contradictoires (`24 régions` dans une partie, `23 régions` dans un titre/tableau). Cette contradiction vient de la source officielle d’accompagnement et doit être résolue dans la fiche de référence avant impression.
- La liste utilisée par le manuel comprend `Ambatosoa`, `Vatovavy` et `Fitovinany`. Ces noms apparaissent également dans les données du FRP T6 ; ils ne doivent pas être supprimés sans vérification de l’édition administrative de référence.
- La phrase selon laquelle les habitants « élisent » le chef du fokontany mérite une vérification institutionnelle séparée : le PE demande l’organisation juridique du village écologique, mais ne fixe pas cette modalité élective.
- Les données chiffrées et les superlatifs (`premier port`, superficies, effectifs de districts/communes, chiffres démographiques) doivent être datés ou sourcés dans une édition destinée à durer. Le PE/FRP et les données administratives peuvent évoluer.
- Le vocabulaire `limitation des naissances` est repris du PE, mais appelle une formulation pédagogique et civique prudente, centrée sur la santé, les droits et la responsabilité, plutôt qu’une injonction brute.

### Sources éditoriales

La section `SOURCES` du DOCX T6 cite explicitement le PE T6, mais ne cite pas le FRP Géographie T6 comme référence distincte. Il n’y a pas de bibliographie par séance, ni de crédits visibles associés aux 143 médias intégrés. Pour un manuel publiable, il faut au minimum :

- ajouter le FRP T6 et les sources cartographiques/statistiques ;
- dater les statistiques ;
- créditer les cartes, photos, schémas et illustrations ;
- vérifier les droits de réutilisation, notamment pour toute image provenant d’une source web ;
- distinguer les contenus officiels, les adaptations pédagogiques et les extensions J-Learn.

## 7. Audit OOXML du DOCX T6

Audit réalisé sur `origin/main:Geographie_T6_JLearn.docx` sans conversion ni réenregistrement :

| Contrôle | Résultat |
|---|---:|
| Test ZIP (`ZipFile.testzip`) | OK (`None`) |
| Entrées de l’archive | 165 |
| Relations OOXML totales | 163 |
| Relations internes non résolues | 0 |
| Relations externes | 3, toutes vers la page Facebook J-Learn |
| XML parseable | 100 % des XML et `.rels` inspectés |
| Médias intégrés | 143 fichiers |
| Dessins/images référencés | 144, dont une image réutilisée |
| Formats images | 66 JPEG + 77 PNG |
| Images décodables | 143/143 |
| Signets début/fin | 97/97, aucun signet orphelin |
| Signets nommés distincts | 92 |
| Hyperliens internes | 158 |
| Hyperliens internes vers une cible inexistante | 2 |
| Sauts de page explicites | 163 |

### Défauts techniques relevés

Deux ancres internes sont appelées par la table des matières mais ne possèdent pas de signet correspondant :

- `autoevaluation` → `AUTO-ÉVALUATION` ;
- `illustrations` → `TABLE DES ILLUSTRATIONS`.

La navigation est donc largement fonctionnelle, mais ces deux entrées sont techniquement cassées ou incomplètes. Il faut soit créer les deux signets, soit supprimer/corriger les liens.

Autres observations techniques :

- les propriétés `docProps/app.xml` annoncent 639 pages et 1 628 paragraphes, alors que l’analyse de la structure donne 6 225 paragraphes de document et 153 tables ; ces propriétés Word sont vraisemblablement obsolètes ou calculées selon un autre modèle et doivent être régénérées ;
- les 144 objets `wp:docPr` n’ont ni `descr` ni `title` : les images n’ont pas de texte alternatif OOXML, ce qui constitue une faiblesse d’accessibilité ;
- les relations et les médias ne présentent pas d’orphelin technique détectable ;
- la seule destination externe est la page Facebook indiquée dans la page d’authenticité et les pieds de page ; aucune source pédagogique externe n’est encodée comme lien dans le document.

## 8. Audit synthétique des autres DOCX candidats

| Fichier | ZIP/XML | Médias | Navigation | Lecture du contenu |
|---|---|---:|---|---|
| `Manuel_Geographie_1ereACD_V1_FINAL.docx` | valide, relations internes résolues | 15 médias, 16 références d’image | 31 signets/liens internes, cibles résolues | Manuel de 1ère A/C/D, 23 séances, 5 unités |
| `Manuel_Geographie_3e_VF_V1.docx` | valide, relations internes résolues | 2 médias | aucun signet ni lien interne | Manuel de 3ème, 18 séances |
| `hg geo raps.docx` | valide, relations internes résolues | 6 médias, dont certains réutilisés | aucun signet ni hyperlien | Planning Histoire/Géographie, 8 tableaux, pas de leçons/corrigés |

Ces trois fichiers ne doivent pas être présentés comme un manuel T7.

## 9. Référentiel T7 disponible pour une future comparaison

Le PE T7 et le FRP `FRP_GEO_T7.pdf` définissent sept thématiques, qui devront structurer l’audit d’un futur manuel T7 :

1. **Initiation à l’étude de la Géographie** : 6 heures ;
2. **La planète Terre** : 10 heures ;
3. **Interrelation relief–climat–hydrographie–végétation** : 12 heures ;
4. **Caractéristiques de la population mondiale** : 8 heures ;
5. **Population face aux problèmes environnementaux** : 12 heures ;
6. **Activités économiques de la population mondiale** : 6 heures ;
7. **Gestion des ressources naturelles** : 12 heures.

Le total annoncé est de 66 heures. Un manuel T7 authentique devra donc notamment contenir l’initiation à la démarche géographique, les documents et coordonnées géographiques, le système Terre, le relief, le climat, l’hydrographie, la population mondiale, les problèmes environnementaux, les secteurs économiques, la mondialisation et la gestion durable des ressources. Ces thèmes ne sont pas ceux du manuel T6 et ne peuvent pas être remplacés par une simple copie ou un changement de couverture.

## 10. Recommandations sans modification des manuels

1. Conserver le diagnostic suivant dans la fiche de production : **T6 disponible ; T7 manuel absent**.
2. Ne pas renommer `Manuel_Geographie_3e_VF_V1.docx` en T7.
3. Corriger les deux ancres internes manquantes du T6 avant toute nouvelle exportation PDF.
4. Régénérer les propriétés Word et renseigner les textes alternatifs des images.
5. Compléter les sources du T6 avec le FRP, les données chiffrées et les crédits des images.
6. Vérifier les éléments administratifs sensibles : nombre de régions, chefs-lieux, superficies, districts, communes, statut du fokontany et formulation sur la limitation des naissances.
7. Pour T7, rechercher un fichier fourni séparément ou lancer une production dédiée alignée sur les sept thématiques officielles ; ne pas utiliser le manuel T6 comme substitut.
