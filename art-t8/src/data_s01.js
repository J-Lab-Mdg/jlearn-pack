// Pilote T8 — partie s01 complète (leçon + pratique), alignée PE T8 p. imprimées 216–217.
// RAS : « Réaliser l’imagination à l’aide des formes, en utilisant les nuances ».
// Exemple de départ : cercle → ballon.
module.exports = {
  id: 's01', session: 1, domain: 'Dessin', minutes: 120,
  title: 'Dessin à partir de l’imagination : de la forme à l’objet imaginé',
  theme: 'Formes arrondies et anguleuses ; premières nuances',
  pe: 'PE T8, Arts visuels / Dessin, p. imprimées 216–217 (PDF « PE T8.pdf »).',
  objective: 'Partir d’une forme simple choisie, la transformer en un objet imaginé reconnaissable, puis donner du volume avec trois tons de gris.',
  understand: [
    'Le dessin part d’une forme simple tracée de mémoire, que l’imagination transforme en objet. Un cercle peut devenir un ballon.',
    'Une forme arrondie (organique) se trace avec des courbes ; une forme anguleuse (géométrique) se trace avec des droites et des angles. Le choix de la forme oriente déjà l’objet imaginé.',
    'Les nuances noir, blanc et tons de gris donnent du volume à chaque partie de la forme. Trois gris suffisent pour commencer : clair, moyen, foncé.',
  ],
  materials: 'Par élève : 2 feuilles (brouillon + production), crayon graphite, gomme. Pour 4–6 : 1 règle, 1 gabarit circulaire (couvercle), 1 objet rond local (ballon, orange, pot) pour vérifier l’imagination, 1 lampe ou une place près de la fenêtre.',
  safety: 'Gabarits et objets stables, sans bord coupant ; crayon non porté à la bouche ; ne pas diriger la lampe vers les yeux ; feuilles éloignées du bord de la table.',
  review: [
    ['Nomme une forme arrondie et une forme anguleuse.', 'Cercle ou ovale pour l’arrondie ; carré, triangle ou rectangle pour l’anguleuse.'],
    ['À quoi servent les tons de gris dans un dessin ?', 'Ils donnent du volume : une partie claire, une partie sombre, et un passage progressif entre les deux.'],
  ],
  situation: 'Faly trace un cercle sur sa feuille et dit : « Ce n’est qu’un rond, je ne sais pas quoi dessiner. » Sa voisine ajoute deux courbes et un peu de gris : le rond devient un ballon. Qu’a-t-elle ajouté pour que l’on reconnaisse un ballon ?',
  situationAnswer: 'Elle a ajouté les lignes qui appartiennent au ballon (les coutures), puis des nuances : un côté clair, un côté plus foncé, et une ombre sous le ballon.',
  observe: {
    title: 'Formes et objets imaginés',
    phrase: 'Regardez les deux familles de formes. Pour chaque forme, dites à voix haute un objet qu’elle pourrait devenir.',
    bullets: [
      'Formes arrondies (organiques) : cercle, ovale, courbe libre — ballon, orange, pot, roue.',
      'Formes anguleuses (géométriques) : carré, rectangle, triangle — maison, cahier, toit, voile.',
      'Une même forme peut donner plusieurs objets : c’est l’imagination qui choisit.',
      'Les lignes ajoutées doivent appartenir à l’objet, sinon il reste un simple rond.',
    ],
    support: 'Formes tracées au tableau et objet rond local',
  },
  prep: {
    title: 'Essai des trois gris',
    phrase: 'Sur le brouillon, trace la forme que tu as choisie, puis remplis trois cases : pression légère, moyenne, puis traits serrés.',
    text: 'L’élève choisit une seule forme de départ et la trace en traits légers. Il colorie ensuite son nuancier : le gris clair n’est pas le blanc du papier, le gris foncé n’est pas un aplat noir total. Ce nuancier servira de repère pendant toute la production.',
  },
  questions: [
    ['Quelle forme as-tu choisie, et pourquoi ?', 'Toute forme citée au PE convient ; l’élève justifie par l’objet qu’il veut obtenir.'],
    ['Quelles lignes faut-il ajouter pour que l’on reconnaisse ton objet ?', 'Les lignes caractéristiques de l’objet : coutures pour un ballon, anses pour un pot, arêtes pour une boîte.'],
    ['Où poser le gris le plus clair ?', 'Du côté qui reçoit la lumière.'],
    ['Où se place l’ombre portée ?', 'Sur le support, du côté opposé à la lumière.'],
  ],
  steps: [
    { title: 'Forme de départ', text: 'Choisir une forme arrondie ou anguleuse. La placer dans la feuille avec une marge autour, en traits légers. Vérifier la régularité : un cercle se construit dans un carré de repère, une forme anguleuse se trace à la règle.', phrase: 'Trace doucement : ta forme doit pouvoir être corrigée sans laisser de marque.' },
    { title: 'Transformation en objet', text: 'Ajouter seulement les lignes qui rendent l’objet reconnaissable. Pour le cercle devenu ballon : les coutures courbes. Pour un carré devenu maison : le toit, la porte, la fenêtre. S’arrêter avant de surcharger.', phrase: 'Demande-toi : sans le titre, est-ce qu’un camarade reconnaît mon objet ?' },
    { title: 'Nuances de gris', text: 'Décider d’où vient la lumière. Garder clair le côté éclairé, poser le gris moyen, renforcer le côté opposé avec le gris foncé, puis adoucir les passages pour obtenir un dégradé.', phrase: 'Commence léger : il est plus facile d’ajouter du foncé que de l’enlever.' },
    { title: 'Ombre et finition', text: 'Poser l’ombre sur le support, du côté opposé à la lumière. Effacer les traits de construction. Échanger avec un camarade : recevoir une remarque, puis appliquer une amélioration visible.', phrase: 'Montre la lumière sur ton dessin, puis dis ce que tu as amélioré.' },
  ],
  practice: {
    title: 'Une autre forme, un autre objet',
    consigne: 'Choisis une forme différente de celle de la leçon. Transforme-la en un objet imaginé de ton choix. Ajoute les lignes qui le rendent reconnaissable, pose trois tons de gris et une ombre portée, puis présente ton dessin.',
    criteria: [
      'Forme de départ identifiable : arrondie ou anguleuse.',
      'Objet imaginé reconnaissable grâce aux lignes ajoutées.',
      'Trois tons de gris lisibles : clair, moyen, foncé.',
      'Ombre portée du côté opposé à la lumière.',
    ],
    trace: 'Je choisis une forme. Je la trace légèrement. J’ajoute les lignes de mon objet. Je pose trois gris du côté clair vers le côté foncé. J’ajoute l’ombre portée, j’efface mes repères et j’améliore.',
  },
  eval: 'Présente ton dessin. Nomme ta forme de départ et ton objet, montre les trois gris et l’ombre portée, puis explique une amélioration apportée après la remarque d’un camarade.',
  errors: [
    ['Le dessin reste une forme vide', 'Objet imaginé reconnaissable', 'Demander : « quelles lignes appartiennent à cet objet ? » puis en ajouter deux seulement.'],
    ['Aplat gris uniforme sur toute la forme', 'Trois valeurs progressives', 'Refaire le nuancier, montrer la lumière, puis placer le foncé du côté opposé.'],
    ['Traits de construction trop appuyés', 'Repères légers puis effacés', 'Faire un essai au brouillon avec une pression très légère avant la feuille de production.'],
    ['Objet minuscule perdu dans la feuille', 'Forme placée avec une marge régulière', 'Tracer d’abord un cadre léger à un doigt du bord, puis inscrire la forme.'],
  ],
  videos: [
    { title: 'Comment dessiner les ombres et les lumières ? Tutoriel', url: 'https://www.youtube.com/watch?v=zGpOxaLjVDo', use: 'Revoir lumière, valeurs et ombre portée pour l’étape c.' },
    { title: 'Ombres et lumières en dessin : faites les choses dans l’ordre !', url: 'https://www.youtube.com/watch?v=AVdNEXSqRE4', use: 'Approfondissement : monter les valeurs dans l’ordre. Choisir un extrait.' },
  ],
  keywords: ['forme arrondie', 'forme anguleuse', 'imagination', 'nuance', 'tons de gris', 'ombre portée'],
  sceneAlt: 'Illustration générée par IA : dans une salle de classe malgache, trois élèves de T8 dessinent à crayon ; la première feuille porte un cercle, la deuxième le cercle devenu ballon, la troisième le ballon en trois tons de gris ; l’enseignante montre le dessin du milieu.',
};
