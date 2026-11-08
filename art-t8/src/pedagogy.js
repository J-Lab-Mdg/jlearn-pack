// Compléments pédagogiques T8 — lot pilote.
// Seule la partie s01 est instanciée dans ce lot ; les structures communes (kits, sécurité,
// profils de déroulement, différenciation) sont posées pour les 36 parties et seront
// complétées lot par lot. validatePedagogy() ne contrôle que les parties réellement fournies.
const checks = {
  s01: [
    'je nomme ma forme de départ et je la trace légèrement',
    'j’ajoute les lignes qui font reconnaître mon objet',
    'je pose trois gris : clair, moyen, foncé',
    'je place l’ombre portée du côté opposé à la lumière',
  ],
};
const transfer = {
  s01: 'En cinq minutes, transformer un triangle en un objet du quotidien et poser deux valeurs.',
};
const local = {
  s01: 'Objets ronds du quotidien malagasy : ballon, orange, pot en terre, roue de charrette ; objets anguleux : caisse de marché, cahier, toiture. Faire nommer l’objet en français et, si possible, en malgache.',
};

// Profils de déroulement « II. Nouvelle leçon » : 95 min (séance de 2 h) ou 45 min (charnière d’1 h).
// Ordre : mise en situation, objectif, observation/écoute, analyse/essai guidé, synthèse, application/transfert.
const profiles = {
  Dessin: [5, 3, 12, 20, 5, 50], Peinture: [5, 3, 12, 20, 5, 50], Sculpture: [5, 3, 10, 25, 5, 47],
  Musique: [5, 3, 12, 20, 5, 50], Danse: [5, 3, 10, 22, 5, 50], 'Art dramatique': [5, 3, 10, 22, 5, 50],
};
const pivotProfile = [3, 2, 8, 10, 2, 20];
const flowLabels = ['Mise en situation', 'Présentation de l’objectif', 'Observation / écoute', 'Analyse et essai guidé', 'Synthèse', 'Application / transfert'];
function flow(p) {
  const mins = p.minutes === 60 ? pivotProfile : profiles[p.domain];
  const appDetail = p.minutes === 60
    ? 'Micro-tâche de préparation ou d’appréciation ; pas de production complète supplémentaire.'
    : ({
      Dessin: 'Production de transfert sur feuille ; rangement et auto-vérification inclus.',
      Peinture: 'Production de transfert ; séchage, nettoyage et rangement inclus.',
      Sculpture: 'Fabrication ou ajustement ; test sonore, nettoyage et rangement inclus.',
      Musique: 'Essais en binômes puis petits groupes ; écoute et retour inclus.',
      Danse: 'Essais par petits groupes ; rotations, retour et étirement bref inclus.',
      'Art dramatique': 'Préparation, jeu court et retour du public inclus.',
    }[p.domain]);
  return flowLabels.map((label, i) => ({
    label, minutes: mins[i],
    detail: i === 5 ? appDetail
      : i === 3 ? 'Les quatre étapes a–d sont des essais guidés courts, pas la production finale.'
      : i === 2 ? 'Observer, écouter ou décrire avant de produire.'
      : i === 4 ? 'Faire reformuler la règle par un élève.'
      : i === 1 ? 'Annoncer la tâche et le critère prioritaire.'
      : 'Relier au vécu ou rappeler la séance précédente.',
  }));
}
function guidedMinutes(p) {
  const total = (p.minutes === 60 ? pivotProfile : profiles[p.domain])[3];
  const base = Math.floor(total / 4), rem = total % 4;
  return [0, 1, 2, 3].map((i) => base + (i < rem ? 1 : 0));
}
const kit = {
  Dessin: 'Par élève : 1 feuille brouillon + 1 feuille production, crayon, gomme. Pour 4–6 : 1 gabarit circulaire, 1 règle, 1 objet modèle, 1 chiffon.',
  Peinture: 'Pour 4–6 : pots jaune/rouge/bleu/blanc/noir, 1 pot d’eau, palette. Par élève : pinceau, chiffon. Zone de séchage.',
  Sculpture: 'Par binôme : 1 kit d’objets recyclables propres. Pour 4 : ciseaux à bouts ronds, colle, ruban/ficelle. Zone de test et sac déchets.',
  Musique: 'Par binôme : 1 objet sonore ou percussion simple. Espace en cercle, signes de main, comptage ; un instrument à vent si disponible.',
  Danse: 'Espace dégagé, repères au sol (droite, sinueuse, circulaire, zigzag), support sonore de musique urbaine. Distance bras écartés.',
  'Art dramatique': 'Espace de jeu dégagé, texte de conte ou extrait de pièce, cartes de rôles, 2–3 accessoires simples par groupe, plan d’espace au tableau.',
};
const safety = {
  Dessin: 'Objets et gabarits stables, sans bord coupant ; crayon non porté à la bouche ; lumière sans éblouir.',
  Peinture: 'Peinture non toxique, eau changée, sol non glissant, séchage à plat, pas de projection.',
  Sculpture: 'Objets propres, bords non coupants, fermeture solide, ciseaux à bouts ronds ; marteau, pince et clou réservés à l’enseignant.',
  Musique: 'Volume raisonnable ; instrument à vent personnel, embouchure nettoyée, pas d’échange d’instrument à bouche.',
  Danse: 'Échauffement bref, distance, sol dégagé, genoux souples ; « chuter » = descente contrôlée, jamais de chute réelle ni de porté.',
  'Art dramatique': 'Espace dégagé, accessoires souples, pas de contact imposé, voix sans cri forcé, droit de jouer en binôme ou en retrait.',
};
const variants = {
  1: [
    'Peu de matériel : un seul gabarit circulaire pour la classe, formes tracées à main levée, crayon ordinaire.',
    'Grand effectif : démonstration au tableau puis travail par îlots de six ; un rapporteur lit les critères à voix haute.',
    'Aller plus loin : imposer une forme anguleuse et deux objets possibles, puis justifier l’objet retenu.',
  ],
};
const differentiation = {
  soutien: 'Forme agrandie ou geste montré une fois ; une exigence prioritaire ; essai guidé avant la tâche complète.',
  standard: 'Consigne complète avec les critères de la séance ; entraide en binôme puis vérification individuelle.',
  defi: 'Changer un paramètre (forme imposée, position de la lumière, nombre de valeurs) et justifier le choix.',
  remediation: 'Reprendre un essai de cinq minutes sur le critère bloquant, avec un pair ou l’enseignant, puis refaire la tâche courte.',
};
const progression = [
  { domain: 'Dessin', pe: 'Programme d’Arts, dessin, p. 216–218', rag: 'Réaliser l’imagination à l’aide des formes avec les nuances ; utiliser les nuances pour rendre plus réel l’image.', sessions: 'S1–S5 ; S6a', evidence: 'Forme transformée en objet, trois valeurs, gestion de l’espace, portrait sur repères, analyse d’œuvre.' },
  { domain: 'Peinture', pe: 'Programme d’Arts, peinture, p. 218–220', rag: 'Créer différentes couleurs ; connaître les couleurs à mélanger ; utiliser les peintures pour rendre réel l’image.', sessions: 'S6b ; S7–S11', evidence: 'Formules de mélanges, ambiances, coloriage à imiter, peinture sur thème, présentation et réajustement.' },
  { domain: 'Sculpture', pe: 'Programme d’Arts, sculpture, p. 221–222', rag: 'Identifier les instruments réalisables avec des objets recyclables ; créer des instruments musicaux.', sessions: 'S12–S16 ; S17a', evidence: 'Objets associés aux instruments, plan coté, assemblage, bas-relief, séquence jouée, présentation.' },
  { domain: 'Musique', pe: 'Programme d’Arts, musique, p. 223–225', rag: 'Classer les instruments par familles ; se familiariser avec monophonie et polyphonie ; chanter avec un instrument à vent.', sessions: 'S17b ; S18–S22', evidence: 'Classement par famille et par son, instruments malagasy, tempo/rythme, durées et nuances, chant en groupe.' },
  { domain: 'Danse', pe: 'Programme d’Arts, danse, p. 225–226', rag: 'Créer des mouvements en tenant compte de l’espace et des éléments de base musicale.', sessions: 'S23–S27 ; S28a', evidence: 'Séquence sur pulsation, mobilité, quatre trajectoires, danse urbaine, chorégraphie créée et appréciée.' },
  { domain: 'Art dramatique', pe: 'Programme d’Arts, art dramatique, p. 226–228', rag: 'Jouer un rôle ; préparer la mise en scène ; présenter sur scène une pièce théâtrale.', sessions: 'S28b ; S29–S33', evidence: 'Moyens corporels, personnage de conte, voix et émotion, lieux et objets, répétition, présentation appréciée.' },
];
const glossary = [
  ['Forme arrondie', 'Forme organique tracée avec des courbes : cercle, ovale, contour libre.'],
  ['Forme anguleuse', 'Forme géométrique tracée avec des droites et des angles : carré, triangle, rectangle.'],
  ['Nuance', 'Variation d’une même couleur ou d’un gris, du plus clair au plus foncé.'],
  ['Valeur', 'Degré de clarté : clair, moyen, foncé.'],
  ['Ombre portée', 'Ombre projetée sur le support, du côté opposé à la lumière.'],
  ['Bas-relief', 'Décor en faible saillie sur une surface, tracé par points ou traits de repère.'],
  ['Amponga', 'Tambour malagasy ; ici, percussion fabriquée avec des objets recyclables.'],
  ['Monophonie', 'Instrument qui ne produit qu’un son à la fois : flûte, clarinette, trompette.'],
  ['Polyphonie', 'Instrument qui peut produire plusieurs sons à la fois : piano, guitare, orgue.'],
  ['Sodina', 'Flûte traditionnelle malagasy, instrument à vent ; le FRP T8 cite Rakoto Frah.'],
  ['Farara', 'Harmonica, instrument à vent.' ],
  ['Antsiva', 'Conque malgache percée d’un trou latéral, aérophone ; référent culturel du FRP T8. Antsiva lahy : plus petit et plus aigu ; antsiva vavy : plus grand et plus grave.'],
  ['Trajectoire', 'Chemin suivi par le corps dans l’espace : droite, sinueuse, circulaire, zigzag.'],
  ['Moyens corporels', 'Attitude, geste, mimique, mouvement, rythme et voix utilisés pour jouer un rôle.'],
  ['Tempo', 'Vitesse de la pulsation : lent, rapide, saccadé.'],
  ['12/8', 'Mesure où douze croches sont regroupées en quatre pulsations de trois subdivisions.'],
];
function validatePedagogy(parts) {
  const errors = [];
  for (const p of parts) {
    if (!checks[p.id] || checks[p.id].length !== p.practice.criteria.length) errors.push(p.id + ' descripteurs != critères');
    if (!transfer[p.id] || !local[p.id]) errors.push(p.id + ' complément manquant');
    const sum = flow(p).reduce((a, x) => a + x.minutes, 0);
    const expected = p.minutes === 60 ? 45 : 95;
    if (sum !== expected) errors.push(p.id + ' flow II ' + sum + ' != ' + expected);
    if (!kit[p.domain] || !safety[p.domain]) errors.push(p.id + ' kit/sécurité manquant');
    if (!variants[p.session] || variants[p.session].length < 2) errors.push('variantes séance ' + p.session);
  }
  for (const d of Object.keys(profiles)) {
    const s = profiles[d].reduce((a, b) => a + b, 0);
    if (s !== 95) errors.push('profil ' + d + ' != 95 min');
  }
  if (pivotProfile.reduce((a, b) => a + b, 0) !== 45) errors.push('profil charnière != 45 min');
  if (errors.length) throw new Error(errors.join('\n'));
  return { parts: parts.length, flowOrdinary: 95, flowPivot: 45 };
}
module.exports = { checks, transfer, local, flow, guidedMinutes, kit, safety, variants, differentiation, progression, glossary, validatePedagogy, profiles, pivotProfile };
