// Arts T8 — curriculum aligné sur le PE T8 (version PDF « PE RAPE/PE T8.pdf », pages imprimées 213–229).
// Architecture retenue : 2 h/semaine, 6 sous-disciplines de 11 h = 66 h, 33 séances de 2 h,
// charnières S6 / S17 / S28 → 36 parties. Ordre des sous-disciplines = ordre des tableaux du PE T8.
// Ce fichier est le curriculum « niveau plan » : titre, objectif, contenus PE sourcés, durée, statut média.
// La pédagogie détaillée (déroulement, étapes a–d, grille) est produite par lot ; le lot 1 couvre s01.

const DOMAINS = ['Dessin', 'Peinture', 'Sculpture', 'Musique', 'Danse', 'Art dramatique'];

// pe : page imprimée du PE T8. rag : résultat d'apprentissage spécifique, formulation rapprochée du source.
const P = (o) => ({ minutes: 120, ...o });

const parts = [
  // ---------------- DESSIN — 11 h — PE T8 p. 216–218 ----------------
  P({ id: 's01', session: 1, domain: 'Dessin', title: 'Dessin à partir de l’imagination : de la forme à l’objet imaginé',
    short: 'DESSIN : DE LA FORME À L’IMAGINATION',
    theme: 'Formes arrondies et anguleuses ; premières nuances',
    pe: 'PE T8, Arts visuels / Dessin, p. 216–217',
    rag: 'Réaliser l’imagination à l’aide des formes, en utilisant les nuances.',
    objective: 'Partir d’une forme simple choisie, la transformer en un objet imaginé reconnaissable, puis donner du volume avec trois tons de gris.',
    contents: ['Dessin à partir de l’imagination', 'Formes arrondies (organiques)', 'Formes anguleuses (géométriques)', 'Nuances noir / blanc', 'Valeurs : tons de gris'],
    demarche: 'Démarche de création',
    media: 'new', mediaNote: 'Scène T8 à générer : élèves transformant un cercle en ballon. Schémas déterministes neufs.' }),

  P({ id: 's02', session: 2, domain: 'Dessin', title: 'Nuances et tons de gris : du plat au volume',
    short: 'DESSIN : NUANCES ET TONS DE GRIS',
    theme: 'Noir, blanc, gris ; modelé',
    pe: 'PE T8, Arts visuels / Dessin, p. 216–217',
    rag: 'Réaliser l’imagination à l’aide des formes, en utilisant les nuances.',
    objective: 'Construire un nuancier de gris et l’utiliser pour donner du volume à une forme imaginée, sans couleur.',
    contents: ['Nuances noir / blanc', 'Valeurs : tons de gris', 'Qualité des couleurs : très pâle'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's01', mediaNote: 'Technique identique au T9 s01 (modelé trois valeurs) : schémas de nuancier et de dégradé réemployés.' }),

  P({ id: 's03', session: 3, domain: 'Dessin', title: 'Gérer l’espace de la feuille : haut, bas, milieu, côté',
    short: 'DESSIN : PLACER DANS LA FEUILLE',
    theme: 'Gestion de l’espace',
    pe: 'PE T8, Arts visuels / Dessin, p. 216–217',
    rag: 'Réaliser l’imagination à l’aide des formes, en utilisant les nuances.',
    objective: 'Placer plusieurs éléments imaginés aux positions demandées (haut, bas, milieu, intérieur, côté) en gardant des distances lisibles.',
    contents: ['Gestion de l’espace : distance', 'En bas / en haut / inférieure', 'Au milieu / à l’intérieur / côté'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's02', mediaNote: 'Placement et repères = T9 s02 : schémas de zones et d’axes réemployés.' }),

  P({ id: 's04', session: 4, domain: 'Dessin', title: 'Lumière et ombre : rendre une image plus réelle',
    short: 'DESSIN : LUMIÈRE ET OMBRE',
    theme: 'Qualité des couleurs ; lumière et ombre',
    pe: 'PE T8, Arts visuels / Dessin, p. 217–218',
    rag: 'Utiliser les nuances pour rendre plus réel l’image.',
    objective: 'Relier une source de lumière unique à des valeurs cohérentes et à une ombre portée, sur un objet imaginé ou observé.',
    contents: ['Qualité des couleurs : très pâle', 'Lumière / ombre', 'Valeurs : tons de gris'],
    demarche: 'Démarche de création ; analyse d’une œuvre',
    media: 'reused', mediaFrom: 's01', mediaNote: 'Lumière / valeurs / ombre portée = T9 s01 : schémas réemployés.' }),

  P({ id: 's05', session: 5, domain: 'Dessin', title: 'Portrait à partir d’un modèle : repères et proportions',
    short: 'DESSIN : UN PORTRAIT D’APRÈS MODÈLE',
    theme: 'Portrait ; points de repère',
    pe: 'PE T8, Arts visuels / Dessin, p. 217–218',
    rag: 'Utiliser les nuances pour rendre plus réel l’image.',
    objective: 'Tracer des points de repère pour placer contour du visage, yeux, nez et bouche, puis esquisser un portrait d’après un modèle vivant ou reproduit.',
    contents: ['Portrait à partir d’un modèle', 'Points de repère', 'Espace entre les éléments : répétition, alternance, inversion', 'Formes arrondies ou anguleuses'],
    demarche: 'Analyse d’une œuvre ; démarche d’interprétation',
    media: 'new', mediaNote: 'Contenu propre au T8 : scène de portrait en binôme et schémas de repères du visage à créer.' }),

  P({ id: 's06a', session: 6, part: 'Première heure', domain: 'Dessin', minutes: 60, title: 'Analyser une œuvre : lignes, formes, espace, 2D et 3D',
    short: 'DESSIN : ANALYSER UNE ŒUVRE',
    theme: 'Caractéristiques d’une œuvre',
    pe: 'PE T8, Arts visuels / Dessin, p. 217–218',
    rag: 'Utiliser les nuances pour rendre plus réel l’image.',
    objective: 'Décrire une œuvre en insistant sur les formes, les couleurs et l’espace, puis appliquer une remarque reçue à son propre portrait.',
    contents: ['Caractéristiques d’une œuvre', 'Qualité des lignes : mince, épaisse, pâle, foncée', 'Deux dimensions et trois dimensions', 'Nettoyer les traits de construction'],
    demarche: 'Analyse d’une œuvre ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's06a', mediaNote: 'Apprécier / améliorer = T9 s06a : scène et grille de retouche réemployés.' }),

  // ---------------- PEINTURE — 11 h — PE T8 p. 218–220 ----------------
  P({ id: 's06b', session: 6, part: 'Seconde heure', domain: 'Peinture', minutes: 60, title: 'Préparer l’atelier couleur : primaires et matériel',
    short: 'PEINTURE : PRÉPARER LES PRIMAIRES',
    theme: 'Couleurs primaires ; objets et outils',
    pe: 'PE T8, Arts visuels / Peinture, p. 218–219',
    rag: 'Créer différentes couleurs.',
    objective: 'Identifier les trois primaires, préparer godets, pinceaux et papier de test, et poser les règles de propreté de l’atelier.',
    contents: ['Couleurs primaires : bleu, jaune, rouge', 'Objets et outils nécessaires', 'Récipient, pinceaux, échantillons'],
    demarche: 'Observation d’une œuvre',
    media: 'reused', mediaFrom: 's12', mediaNote: 'Atelier couleur = T9 s12 : scène et palette d’essai réemployées.' }),

  P({ id: 's07', session: 7, domain: 'Peinture', title: 'Mélanger primaires et secondaires : écrire les formules',
    short: 'PEINTURE : PRIMAIRES ET SECONDAIRES',
    theme: 'Mélanges et formules de couleurs',
    pe: 'PE T8, Arts visuels / Peinture, p. 218–219',
    rag: 'Créer différentes couleurs.',
    objective: 'Réaliser les mélanges deux à deux, identifier les secondaires obtenues et noter les formules dans un tableau de synthèse.',
    contents: ['Couleurs primaires / secondaires', 'Valeurs : teintes', 'Synthèse : formules de couleurs'],
    demarche: 'Observation d’une œuvre ; démarche de création',
    media: 'reused', mediaFrom: 's12', mediaNote: 'Mélanges = T9 s12 : scène, palette et vidéo ART EDUCATION réemployées.' }),

  P({ id: 's08', session: 8, domain: 'Peinture', title: 'Chaude, froide, claire, foncée : choisir une ambiance',
    short: 'PEINTURE : CHAUD, FROID, CLAIR, FONCÉ',
    theme: 'Familles et valeurs de couleurs',
    pe: 'PE T8, Arts visuels / Peinture, p. 218–219',
    rag: 'Créer différentes couleurs.',
    objective: 'Classer des couleurs en chaudes / froides, puis éclaircir et assombrir une teinte pour comparer deux ambiances.',
    contents: ['Couleurs chaudes et froides', 'Couleurs claires et foncées', 'Éclaircir / assombrir avec les primaires'],
    demarche: 'Observation d’une œuvre ; démarche de création',
    media: 'reused', mediaFrom: 's13', mediaNote: 'Chaud / froid = T9 s13 : scène, nuancier et vidéo Atelier René Milone réemployées.' }),

  P({ id: 's09', session: 9, domain: 'Peinture', title: 'Coloriage à imiter : retrouver les couleurs d’une œuvre',
    short: 'PEINTURE : COLORIER À IMITER',
    theme: 'Coloriage à imiter',
    pe: 'PE T8, Arts visuels / Peinture, p. 219–220',
    rag: 'Connaître les couleurs à mélanger pour avoir les couleurs requises.',
    objective: 'Décrire les couleurs d’une œuvre, supposer les mélanges nécessaires, les vérifier, puis colorier un dessin en respectant le modèle.',
    contents: ['Coloriage à imiter', 'Identifier les couleurs à mélanger', 'Vérifier la supposition', 'Améliorer selon les remarques'],
    demarche: 'Analyse d’une œuvre ; démarche de création',
    media: 'new', mediaNote: 'Coloriage à imiter est explicite en T8 : schéma « modèle / essai / coloriage » à créer.' }),

  P({ id: 's10', session: 10, domain: 'Peinture', title: 'Peinture à partir d’un thème : dessiner puis peindre',
    short: 'PEINTURE : UN THÈME EN COULEURS',
    theme: 'Peinture à partir d’un thème',
    pe: 'PE T8, Arts visuels / Peinture, p. 220',
    rag: 'Utiliser les peintures des différentes couleurs pour rendre réel l’image.',
    objective: 'Choisir une image représentant un thème donné, la dessiner en binôme, puis la peindre avec les couleurs requises.',
    contents: ['Peinture à partir d’un thème', 'Couleurs requises', 'Travail en paire ou en groupe'],
    demarche: 'Démarche de création ; démarche d’interprétation',
    media: 'reused', mediaFrom: 's14', mediaNote: 'Construction d’une image peinte = T9 s14 : scène et schéma grandes zones réemployés.' }),

  P({ id: 's11', session: 11, domain: 'Peinture', title: 'Présenter sa peinture et la réajuster',
    short: 'PEINTURE : PRÉSENTER ET RÉAJUSTER',
    theme: 'Présentation et réajustement',
    pe: 'PE T8, Arts visuels / Peinture, p. 220',
    rag: 'Utiliser les peintures des différentes couleurs pour rendre réel l’image.',
    objective: 'Présenter la peinture en citant toutes les couleurs utilisées, recevoir une remarque et appliquer un réajustement visible.',
    contents: ['Présenter et décrire la peinture', 'Citer les couleurs utilisées', 'Réajuster selon les remarques'],
    demarche: 'Démarche d’appréciation',
    media: 'reused', mediaFrom: 's17a', mediaNote: 'Présentation / retouche = T9 s17a : scène et grille de retouche réemployées.' }),

  // ---------------- SCULPTURE — 11 h — PE T8 p. 221–222 ----------------
  P({ id: 's12', session: 12, domain: 'Sculpture', title: 'Des objets recyclables aux instruments possibles',
    short: 'SCULPTURE : DES OBJETS AUX INSTRUMENTS',
    theme: 'Objets à utiliser ; mode de réalisation',
    pe: 'PE T8, Arts visuels / Sculpture, p. 221',
    rag: 'Identifier les instruments de musique réalisables à partir des objets recyclables.',
    objective: 'Observer des objets recyclables, citer les instruments réalisables et associer chaque instrument aux objets et au mode de réalisation.',
    contents: ['Objets à utiliser', 'Mode de réalisation', 'Amponga : gobelet, sachet, ruban, bâton, tissu', 'Répétition, alternance, inversion'],
    demarche: 'Observation directe ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's06b', mediaNote: 'Tri / conception d’instrument = T9 s06b : scène et plan réemployés.' }),

  P({ id: 's13', session: 13, domain: 'Sculpture', title: 'Concevoir un instrument : formes, dimensions, sécurité',
    short: 'SCULPTURE : CONCEVOIR UN INSTRUMENT',
    theme: 'Objets et outils nécessaires',
    pe: 'PE T8, Arts visuels / Sculpture, p. 222',
    rag: 'Créer des instruments musicaux à l’aide des objets recyclables.',
    objective: 'Choisir un instrument à réaliser en binôme, lister objets et matériaux, puis tracer un plan coté avec la zone sonore et la fixation.',
    contents: ['Objets et outils nécessaires', 'Formes', 'Dimensions', 'Espace : répétition, alternance, inversion'],
    demarche: 'Observation directe ; démarche de création',
    media: 'reused', mediaFrom: 's06b', mediaNote: 'Plan / sécurité = T9 s06b : schéma de plan réemployé.' }),

  P({ id: 's14', session: 14, domain: 'Sculpture', title: 'Réaliser les éléments et assembler l’instrument',
    short: 'SCULPTURE : ASSEMBLER L’INSTRUMENT',
    theme: 'Réalisation et assemblage',
    pe: 'PE T8, Arts visuels / Sculpture, p. 222',
    rag: 'Créer des instruments musicaux à l’aide des objets recyclables.',
    objective: 'Réaliser les éléments aux formes et dimensions prévues, puis assembler corps, membrane ou contenu sonore et ligature.',
    contents: ['Réaliser les éléments', 'Assembler les éléments', 'Outils et matériaux adéquats'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's07', mediaNote: 'Fabrication amponga = T9 s07 : scène pilote et vidéo « pot ballon » réemployées.' }),

  P({ id: 's15', session: 15, domain: 'Sculpture', title: 'Décorer en bas-relief sans étouffer le son',
    short: 'SCULPTURE : DÉCORER EN BAS-RELIEF',
    theme: 'Bas-relief et motifs',
    pe: 'PE T8, Arts visuels / Sculpture, p. 221–222',
    rag: 'Créer des instruments musicaux à l’aide des objets recyclables.',
    objective: 'Tracer des repères de bas-relief, décorer et colorier le corps de l’instrument en gardant la zone sonore libre.',
    contents: ['Tracer le bas-relief : points ou traits de repère', 'Décorer et colorier', 'Répétition, alternance, inversion'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's09', mediaNote: 'Décor en relief = T9 s09 : scène et schéma zone sonore libre réemployés.' }),

  P({ id: 's16', session: 16, domain: 'Sculpture', title: 'Jouer une séquence et améliorer l’instrument',
    short: 'SCULPTURE : JOUER ET AMÉLIORER',
    theme: 'Test sonore et amélioration',
    pe: 'PE T8, Arts visuels / Sculpture, p. 222',
    rag: 'Créer des instruments musicaux à l’aide des objets recyclables.',
    objective: 'Jouer une courte séquence pour démontrer la qualité de l’instrument, identifier un défaut et appliquer une amélioration sûre.',
    contents: ['Jouer une séquence', 'Améliorer selon les remarques', 'Vérifier la validité de l’objet recyclable'],
    demarche: 'Démarche de création ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's10', mediaNote: 'Tester / réparer = T9 s10 : scène et schéma avant-après réemployés.' }),

  P({ id: 's17a', session: 17, part: 'Première heure', domain: 'Sculpture', minutes: 60, title: 'Présenter les instruments fabriqués',
    short: 'SCULPTURE : PRÉSENTER LES INSTRUMENTS',
    theme: 'Mini-exposition sonore',
    pe: 'PE T8, Arts visuels / Sculpture, p. 221–222',
    rag: 'Créer des instruments musicaux à l’aide des objets recyclables.',
    objective: 'Présenter l’instrument, expliquer la source du son et un choix de matériau, puis recueillir une remarque fondée sur un critère.',
    contents: ['Présenter l’instrument', 'Expliquer les modes de réalisation', 'Apprécier avec des critères'],
    demarche: 'Démarche d’appréciation',
    media: 'reused', mediaFrom: 's11', mediaNote: 'Exposition sonore = T9 s11 : scène et grille de présentation réemployées.' }),

  // ---------------- MUSIQUE — 11 h — PE T8 p. 223–225 ----------------
  P({ id: 's17b', session: 17, part: 'Seconde heure', domain: 'Musique', minutes: 60, title: 'Classer les instruments par familles',
    short: 'MUSIQUE : CLASSER LES INSTRUMENTS',
    theme: 'Cordes, vents, percussions',
    pe: 'PE T8, Musique, p. 223',
    rag: 'Classer les instruments de musique selon leurs familles.',
    objective: 'Observer ou écouter trois instruments, montrer la partie qui produit le son et les classer en cordes, vents ou percussions.',
    contents: ['Familles d’instruments', 'À cordes : violon, guitare', 'À vent : flûte, saxophone', 'Percussions : xylophone, tambour, maracas'],
    demarche: 'Observation directe ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's17b', mediaNote: 'Familles d’instruments = T9 s17b : scène et vidéo Sarah Cyr réemployées.' }),

  P({ id: 's18', session: 18, domain: 'Musique', title: 'Instruments malagasy : matériaux, éléments, sons',
    short: 'MUSIQUE : INSTRUMENTS MALAGASY',
    theme: 'Patrimoine instrumental local',
    pe: 'PE T8, Musique, p. 223',
    rag: 'Classer les instruments de musique selon leurs familles.',
    objective: 'Décrire les particularités d’instruments malagasy (matériaux, éléments, mode d’utilisation, son) et les classer par famille.',
    contents: ['Instruments malagasy', 'Matériaux de fabrication', 'Éléments constitutifs', 'Modes d’utilisation et sons'],
    demarche: 'Observation directe ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's18', mediaNote: 'Scène T9 s18 réemployée pour la démarche ; ancrage local rétabli sur le FRP T8 : antsiva (conque) et Rakoto Frah (sodina), pas la liste du FRP T9.' }),

  P({ id: 's19', session: 19, domain: 'Musique', title: 'Monophonie et polyphonie : un son ou plusieurs',
    short: 'MUSIQUE : MONOPHONIE ET POLYPHONIE',
    theme: 'Instruments monophoniques et polyphoniques',
    pe: 'PE T8, Musique, p. 223–224',
    rag: 'Se familiariser avec les instruments monophoniques et polyphoniques.',
    objective: 'Identifier à l’écoute si un instrument produit un son à la fois ou plusieurs, puis classer des exemples et comparer les deux catégories.',
    contents: ['Monophonie : flûte, clarinette, trompette, saxophone, accordéon', 'Polyphonie : piano, orgue, harmonie, guitare, banjo', 'Hauteur : aigu, médium, grave'],
    demarche: 'Observation à partir d’une image ; démarche d’appréciation',
    media: 'new', mediaNote: 'Notion propre au T8 : scène d’écoute comparative et schéma « une ligne / plusieurs lignes » à créer.' }),

  P({ id: 's20', session: 20, domain: 'Musique', title: 'Tempo et rythme : lent, rapide, binaire, ternaire',
    short: 'MUSIQUE : TEMPO ET RYTHME',
    theme: 'Éléments de base musicale',
    pe: 'PE T8, Musique, p. 224–225',
    rag: 'Chanter en utilisant les instruments de musique à vent.',
    objective: 'Garder une pulsation stable en variant le tempo, puis grouper les temps par deux ou par trois et lire une mesure 12/8.',
    contents: ['Éléments de base musicale', 'Tempo : lent, rapide, saccadé', 'Rythme : binaire, ternaire, 12/8, mixte'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's19', mediaNote: 'Pulsation / binaire-ternaire = T9 s19 et s20 : scènes et vidéos solfège réemployées.' }),

  P({ id: 's21', session: 21, domain: 'Musique', title: 'Durée, intensité et nuances : long, court, silence, fort, doux',
    short: 'MUSIQUE : DURÉE, INTENSITÉ, NUANCES',
    theme: 'Éléments de base musicale',
    pe: 'PE T8, Musique, p. 225',
    rag: 'Chanter en utilisant les instruments de musique à vent.',
    objective: 'Distinguer son long, son court et silence, puis jouer fort / doux et montant / descendant sans perdre la pulsation.',
    contents: ['Durée du son : long, court, silence', 'Intensité : fort, doux', 'Nuance : montant ou descendant'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's21', mediaNote: 'Nuances = T9 s21 (et s20 pour les durées) : scènes et vidéo Hélène Claise réemployées.' }),

  P({ id: 's22', session: 22, domain: 'Musique', title: 'Chanter en groupe avec un instrument à vent',
    short: 'MUSIQUE : CHANTER ET INSTRUMENT À VENT',
    theme: 'Sodina, farara ; genre traditionnel malagasy',
    pe: 'PE T8, Musique, p. 224–225',
    rag: 'Chanter en utilisant les instruments de musique à vent.',
    objective: 'Réaliser ou réparer un petit instrument à vent, reproduire un extrait court, puis chanter en groupe en respectant les éléments de base musicale.',
    contents: ['Instrument à vent : flûte (sodina), harmonica (farara)', 'Reproduire un extrait', 'Chanter en groupe', 'Genre musical traditionnel malagasy', 'Musiciens malagasy reconnus'],
    demarche: 'Observation des instruments à vent ; démarche d’interprétation',
    media: 'new', mediaNote: 'Sodina / farara explicites en T8 : scène d’atelier vent à créer ; scène de chant T9 s22 réemployée en second visuel.' }),

  // ---------------- DANSE — 11 h — PE T8 p. 225–226 ----------------
  P({ id: 's23', session: 23, domain: 'Danse', title: 'Bouger sur la pulsation : tempo, durée, intensité',
    short: 'DANSE : BOUGER SUR LA PULSATION',
    theme: 'Éléments de base musicale et mouvement',
    pe: 'PE T8, Danse, p. 225–226',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Reproduire une séquence courte en respectant tempo, durée des sons et intensité, puis la répéter en binôme.',
    contents: ['Tempo : lent, rapide, saccadé', 'Rythme : binaire, ternaire, 12/8, mixte', 'Durée : long, court, silence', 'Intensité : fort, doux'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's23', mediaNote: 'Séquence comptée = T9 s23 : scène pilote réemployée ; genre musical remplacé par une musique urbaine.' }),

  P({ id: 's24', session: 24, domain: 'Danse', title: 'Mobilité du corps : rouler, ramper, rebondir, avancer, reculer',
    short: 'DANSE : MOBILITÉ DU CORPS',
    theme: 'Actions locomotrices et mobilité',
    pe: 'PE T8, Danse, p. 225',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Exécuter puis enchaîner des actions de mobilité dans un espace dégagé, en sécurité et sans contact.',
    contents: ['Rouler, ramper, gambader', 'Rebondir', 'Avancer, reculer, chuter (contrôlé)'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's26', mediaNote: 'Déplacements locomoteurs = T9 s26 : scène et vidéo PE Central réemployées.' }),

  P({ id: 's25', session: 25, domain: 'Danse', title: 'Trajectoires : droite, sinueuse, circulaire, zigzag',
    short: 'DANSE : TRAJECTOIRES',
    theme: 'Trajectoires et espace',
    pe: 'PE T8, Danse, p. 225–226',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Suivre puis inventer des trajectoires tracées au sol en gardant le compte et en variant les niveaux.',
    contents: ['Trajectoire : ligne droite', 'Sinueuse', 'Circulaire', 'Zigzag'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's25', mediaNote: 'Trajectoires au sol = T9 s25 : scène de référence et vidéo Elements of Dance réemployées.' }),

  P({ id: 's26', session: 26, domain: 'Danse', title: 'Danses urbaines : reproduire une séquence par séquence',
    short: 'DANSE : UNE SÉQUENCE URBAINE',
    theme: 'Hip-hop, afro dance, dance hall',
    pe: 'PE T8, Danse, p. 226',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Observer un modèle de danse urbaine, reproduire deux mouvements par séquence, puis les assembler en groupe.',
    contents: ['Genre musical : danses urbaines', 'Hip-hop, afro dance, dance hall', 'Répéter une séquence', 'Assembler en binôme ou groupe'],
    demarche: 'Observation directe des danses urbaines ; démarche d’interprétation',
    media: 'new', mediaNote: 'Danses urbaines propres au T8 (le T9 traitait valse / cha-cha / samba) : scène et vidéo modèle à chercher et vérifier.' }),

  P({ id: 's27', session: 27, domain: 'Danse', title: 'Inventer une chorégraphie sur une musique urbaine',
    short: 'DANSE : CRÉER UNE CHORÉGRAPHIE',
    theme: 'Création chorégraphique',
    pe: 'PE T8, Danse, p. 226',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Inventer une courte chorégraphie sur une musique urbaine choisie, en tenant compte des éléments de base musicale et de l’espace, puis raconter les difficultés de la création.',
    contents: ['Inventer des mouvements chorégraphiques', 'Musique urbaine au choix', 'Espace et éléments de base musicale', 'Raconter les épreuves de la création'],
    demarche: 'Démarche de création',
    media: 'reused', mediaFrom: 's27', mediaNote: 'Étapes de création = T9 s27 : scène et vidéo This Dancing Dude réemployées.' }),

  P({ id: 's28a', session: 28, part: 'Première heure', domain: 'Danse', minutes: 60, title: 'Apprécier une danse : décrire, ressentir, juger',
    short: 'DANSE : APPRÉCIER UNE DANSE',
    theme: 'Démarche d’appréciation',
    pe: 'PE T8, Danse, p. 225–226 ; annexe démarches p. 228–229',
    rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.',
    objective: 'Examiner une séquence dansée, relier ce qui est vu et ressenti, puis porter un jugement appuyé sur un critère visible.',
    contents: ['Examiner une œuvre chorégraphique', 'Relier ressenti et observé', 'Jugement critique ou esthétique'],
    demarche: 'Démarche d’appréciation',
    media: 'reused', mediaFrom: 's28a', mediaNote: 'Apprécier une danse = T9 s28a : scène et grille de critères réemployées.' }),

  // ---------------- ART DRAMATIQUE — 11 h — PE T8 p. 226–228 ----------------
  P({ id: 's28b', session: 28, part: 'Seconde heure', domain: 'Art dramatique', minutes: 60, title: 'Entrer dans le jeu : attitude, geste, mimique',
    short: 'ART DRAMATIQUE : ENTRER DANS LE JEU',
    theme: 'Moyens corporels',
    pe: 'PE T8, Art dramatique, p. 226',
    rag: 'Jouer un rôle en identifiant les moyens corporels, l’espace, les outils et objets requis.',
    objective: 'Explorer attitude, geste et mimique pour rendre un état visible, puis nommer le moyen corporel utilisé.',
    contents: ['Moyens corporels : attitude', 'Geste', 'Mimique', 'Mouvement'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's28b', mediaNote: 'Entrer dans le jeu = T9 s28b : scène et exercices réemployés.' }),

  P({ id: 's29', session: 29, domain: 'Art dramatique', title: 'Du conte au personnage : identifier et décrire',
    short: 'ART DRAMATIQUE : UN PERSONNAGE DE CONTE',
    theme: 'Conte, nouvelle, pièce théâtrale',
    pe: 'PE T8, Art dramatique, p. 226–227',
    rag: 'Jouer un rôle en identifiant les moyens corporels, l’espace, les outils et objets requis.',
    objective: 'Lire ou écouter un conte, identifier les personnages, leurs émotions, les lieux et les objets, puis décrire un personnage avec les moyens corporels.',
    contents: ['Lire un conte ou une nouvelle', 'Identifier les personnages', 'Identifier temps, lieux et espace', 'Identifier les émotions', 'Identifier outils et objets'],
    demarche: 'Lecture ou écoute ; travail en groupe ; démarche d’interprétation',
    media: 'reused', mediaFrom: 's29', mediaNote: 'Jouer un conte = T9 s29 : scène pilote et vidéo émotions réemployées.' }),

  P({ id: 's30', session: 30, domain: 'Art dramatique', title: 'Jouer un rôle : rythme, voix et émotion',
    short: 'ART DRAMATIQUE : CORPS, VOIX, ÉMOTION',
    theme: 'Moyens corporels et vocaux',
    pe: 'PE T8, Art dramatique, p. 226–227',
    rag: 'Jouer un rôle en identifiant les moyens corporels, l’espace, les outils et objets requis.',
    objective: 'Jouer un rôle court en appliquant attitude, geste, mimique, mouvement, rythme et voix, avec l’émotion du personnage.',
    contents: ['Rythme', 'Voix', 'Mouvement', 'Émotions du personnage'],
    demarche: 'Démarche d’interprétation',
    media: 'reused', mediaFrom: 's30', mediaNote: 'Voix et intention = T9 s30 : scène et vidéo articulation réemployées.' }),

  P({ id: 's31', session: 31, domain: 'Art dramatique', title: 'Lieux et objets de jeu : organiser l’espace',
    short: 'ART DRAMATIQUE : LIEUX ET OBJETS DE JEU',
    theme: 'Mise en scène : organiser les lieux',
    pe: 'PE T8, Art dramatique, p. 226–227',
    rag: 'Jouer un rôle en identifiant les moyens corporels, l’espace, les outils et objets requis.',
    objective: 'Organiser et utiliser les lieux de jeu, placer les objets nécessaires et respecter l’espace entre les personnages.',
    contents: ['Mise en scène : organiser et utiliser les lieux pour jouer', 'Outils et objets nécessaires', 'Espace'],
    demarche: 'Travail en groupe ; démarche d’interprétation',
    media: 'reused', mediaFrom: 's32', mediaNote: 'Organiser la scène = T9 s32 : scène et plan de scène réemployés.' }),

  P({ id: 's32', session: 32, domain: 'Art dramatique', title: 'Préparer la mise en scène d’une pièce',
    short: 'ART DRAMATIQUE : PRÉPARER LA MISE EN SCÈNE',
    theme: 'Pièce théâtrale ; répétition',
    pe: 'PE T8, Art dramatique, p. 227',
    rag: 'Préparer la mise en scène d’une pièce théâtrale.',
    objective: 'Répartir les rôles, objets et lieux dans le groupe, jouer son rôle avec émotion et respect de l’espace, puis s’entraîner en réajustant.',
    contents: ['S’organiser en groupe : rôles, outils, objets', 'Jouer son rôle', 'S’entraîner', 'Réajuster selon les remarques'],
    demarche: 'Exploitation d’une pièce ou d’un roman ; démarche d’interprétation',
    media: 'reused', mediaFrom: 's32', mediaNote: 'Mise en scène = T9 s32 : scène et vidéo Théâtre en l’Air réemployées.' }),

  P({ id: 's33', session: 33, domain: 'Art dramatique', title: 'Présenter sur scène et apprécier les rôles',
    short: 'ART DRAMATIQUE : JOUER DEVANT LA CLASSE',
    theme: 'Pièce théâtrale préparée',
    pe: 'PE T8, Art dramatique, p. 228',
    rag: 'Présenter sur scène une pièce théâtrale.',
    objective: 'Présenter tour à tour un extrait de pièce, puis apprécier la tenue des rôles à partir des moyens corporels, des émotions et de la gestion de l’espace.',
    contents: ['Pièce théâtrale préparée', 'Présenter tour à tour des extraits', 'Évaluer moyens corporels, émotions, espace'],
    demarche: 'Démarche d’interprétation ; démarche d’appréciation',
    media: 'reused', mediaFrom: 's33', mediaNote: 'Créer et jouer une scène = T9 s33 : scène et grille d’appréciation réemployées.' }),
].sort((a, b) => a.session - b.session || String(a.part || '').localeCompare(String(b.part || '')));

const sessions = [];
for (let s = 1; s <= 33; s++) sessions.push({ session: s, parts: parts.filter((p) => p.session === s) });

function validate() {
  const errors = [];
  if (parts.length !== 36) errors.push('36 parties attendues, trouvé ' + parts.length);
  const total = parts.reduce((s, x) => s + x.minutes, 0);
  if (total !== 3960) errors.push('Total minutes != 3960 (66 h), trouvé ' + total);
  for (const d of DOMAINS) {
    const min = parts.filter((x) => x.domain === d).reduce((s, x) => s + x.minutes, 0);
    if (min !== 660) errors.push(d + ' != 660 min (11 h), trouvé ' + min);
  }
  for (const s of sessions) {
    const min = s.parts.reduce((a, x) => a + x.minutes, 0);
    if (min !== 120) errors.push('Séance ' + s.session + ' != 120 min, trouvé ' + min);
  }
  const pivots = sessions.filter((s) => s.parts.length > 1).map((s) => s.session);
  if (JSON.stringify(pivots) !== JSON.stringify([6, 17, 28])) errors.push('Charnières != 6,17,28 : ' + JSON.stringify(pivots));
  const ids = new Set();
  for (const p of parts) {
    if (ids.has(p.id)) errors.push('id dupliqué ' + p.id);
    ids.add(p.id);
    for (const k of ['title', 'short', 'theme', 'pe', 'rag', 'objective', 'demarche', 'media', 'mediaNote']) {
      if (!p[k]) errors.push(p.id + ' champ manquant : ' + k);
    }
    if (!p.contents || p.contents.length < 3) errors.push(p.id + ' contenus PE < 3');
    if (!['new', 'reused'].includes(p.media)) errors.push(p.id + ' statut média invalide');
    if (p.media === 'reused' && !p.mediaFrom) errors.push(p.id + ' mediaFrom manquant');
    if (p.short !== p.short.toUpperCase()) errors.push(p.id + ' titre court non majuscule');
    if (!p.short.includes(' : ')) errors.push(p.id + ' titre court sans format DOMAINE : OBJET');
  }
  if (errors.length) throw new Error(errors.join('\n'));
  return { parts: parts.length, sessions: sessions.length, hours: total / 60, pivots, domains: DOMAINS.length };
}

module.exports = { parts, domains: DOMAINS, sessions, validate };

if (require.main === module) console.log('Curriculum T8 OK', validate());
