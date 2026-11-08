// Réutilisation des médias T9 pour le manuel T8.
// Règle posée avec l'utilisateur : réutiliser un média T9 quand le contenu du PE correspond,
// ne générer que ce qui est propre au T8. Aucune copie physique : on référence le fichier T9 en place.
// Statut « verified » = correspondance de contenu contrôlée sur le PE T8 ; à revalider au lot de production.
const path = require('path');
const fs = require('fs');
const T9 = path.join(__dirname, '../../art-t9/assets');

// Table de correspondance pédagogique T8 <- T9 (justification courte, exigée pour toute réutilisation).
const reuse = {
  s02:  { from: 's01',  why: 'Modelé en trois valeurs : contenu « Valeurs : tons de gris » identique en T8 et T9.' },
  s03:  { from: 's02',  why: 'Repères de placement et espace entre les objets : « Gestion de l’espace » T8.' },
  s04:  { from: 's01',  why: 'Lumière, valeurs, ombre portée : « Qualité des couleurs / lumière ombre » T8.' },
  s06a: { from: 's06a', why: 'Apprécier une production et retoucher selon un critère : démarche d’appréciation T8.' },
  s06b: { from: 's12',  why: 'Atelier couleur et matériel : « Objets et outils nécessaires » T8.' },
  s07:  { from: 's12',  why: 'Mélanges primaires / secondaires et formules : contenu identique.' },
  s08:  { from: 's13',  why: 'Chaud / froid, clair / foncé : contenu identique.' },
  s10:  { from: 's14',  why: 'Construire une image peinte par grandes zones : « Peinture à partir d’un thème ».' },
  s11:  { from: 's17a', why: 'Présenter, citer les couleurs, réajuster : activité de présentation T8.' },
  s12:  { from: 's06b', why: 'Trier des objets recyclables et concevoir un instrument : RAS 1 sculpture T8.' },
  s13:  { from: 's06b', why: 'Plan, formes, dimensions, sécurité : « Objets et outils nécessaires » T8.' },
  s14:  { from: 's07',  why: 'Fabriquer un amponga recyclable : activité « assembler les éléments » T8.' },
  s15:  { from: 's09',  why: 'Décor en relief sans étouffer le son : « tracer le bas-relief, décorer » T8.' },
  s16:  { from: 's10',  why: 'Tester, diagnostiquer, améliorer : « jouer une séquence pour démontrer la qualité ».' },
  s17a: { from: 's11',  why: 'Présenter les instruments : démarche d’appréciation T8.' },
  s17b: { from: 's17b', why: 'Familles cordes / vents / percussions : contenu identique.' },
  s18:  { from: 's18',  why: 'Instruments et ancrage local : « citer les instruments malagasy et les classer ».' },
  s20:  { from: 's19',  why: 'Pulsation, binaire / ternaire : « Éléments de base musicale » T8.' },
  s21:  { from: 's21',  why: 'Fort / doux et nuances : « Intensité, Nuance » T8 (durées reprises de s20 T9).' },
  s23:  { from: 's23',  why: 'Séquence comptée sur la pulsation : le support musical change, la technique reste.' },
  s24:  { from: 's26',  why: 'Déplacements locomoteurs : « avancer, reculer » et mobilité du corps T8.' },
  s25:  { from: 's25',  why: 'Trajectoires au sol : droite, sinueuse, circulaire, zigzag — liste T8 complète.' },
  s27:  { from: 's27',  why: 'Étapes de création chorégraphique : « inventer des mouvements chorégraphiques ».' },
  s28a: { from: 's28a', why: 'Apprécier une danse : démarche d’appréciation identique.' },
  s28b: { from: 's28b', why: 'Attitude, geste, mimique : « Moyens corporels » T8.' },
  s29:  { from: 's29',  why: 'Jouer un conte : « lire un conte, identifier les personnages » T8.' },
  s30:  { from: 's30',  why: 'Voix et intention : « Rythme, Voix » T8.' },
  s31:  { from: 's32',  why: 'Organiser les lieux et les objets de jeu : « Mise en scène » T8.' },
  s32:  { from: 's32',  why: 'Répétition et mise en scène : RAS 2 art dramatique T8.' },
  s33:  { from: 's33',  why: 'Jouer puis apprécier : RAS 3 art dramatique T8.' },
};

// Contenus propres au T8 : médias à générer (scène réaliste) ou à composer (schémas déterministes).
const toCreate = {
  s01: 'Dessin à partir de l’imagination (cercle → ballon) : absent du T9, qui partait de l’objet observé.',
  s05: 'Portrait d’après un modèle : RAS 2 du dessin T8, absent du T9.',
  s09: 'Coloriage à imiter : RAS 2 de la peinture T8, absent du T9.',
  s19: 'Monophonie / polyphonie : notion propre au T8.',
  s22: 'Instrument à vent sodina / farara : explicite en T8 seulement.',
  s26: 'Danses urbaines (hip-hop, afro dance, dance hall) : le T9 traitait valse / cha-cha / samba.',
};

// Résolution : scène T9 existante pour les parties réutilisées ; asset T8 pour les parties neuves.
const sceneT9 = {
  s01: 'img_art_t9_s01_scene_scolaire_1100.jpg', s06b: 'pilots/sculpture_scene_scolaire_1100.jpg',
  s07: 'pilots/sculpture_scene_scolaire_1100.jpg', s12: 'pilots/peinture_scene_scolaire_1100.jpg',
  s16: 'pilots/peinture_scene_scolaire_1100.jpg', s17b: 'manual/scenes_v3/s17b.jpg',
  s22: 'pilots/musique_scene_scolaire_1100.jpg', s23: 'pilots/danse_scene_scolaire_1100.jpg',
  s28b: 'manual/scenes_v3/s28b.jpg', s29: 'pilots/dramatique_scene_scolaire_1100.jpg',
};
function t9Scene(id) {
  if (sceneT9[id]) return path.join(T9, sceneT9[id]);
  return path.join(T9, 'manual/scenes_v3', id + '.jpg');
}
function t9Diagram(id, stage) { return path.join(T9, 'manual/diagrams', `${id}_${stage}.png`); }

// Certaines parties T9 (s01, s07, s23, s29) n'utilisent pas manual/diagrams mais des assets racine
// déclarés par surcharge `.img`. On lit donc la source T9 réelle plutôt que de deviner un nom.
const t9Parts = (() => {
  const dir = path.join(__dirname, '../../art-t9/src/manual_v2');
  const out = {};
  for (const f of fs.readdirSync(dir).filter((x) => /^data_.*\.js$/.test(x))) {
    for (const p of require(path.join(dir, f))) out[p.id] = p;
  }
  return out;
})();
const stageKey = { observe: 'observe', prepare: 'prep', step_a: 0, step_b: 1, step_c: 2, step_d: 3, practice: 'practice' };
function t9StageFile(id, stage) {
  const p = t9Parts[id];
  const k = stageKey[stage];
  let rel = null;
  if (p) {
    if (stage === 'observe') rel = p.observe && p.observe.img;
    else if (stage === 'prepare') rel = p.prep && p.prep.img;
    else if (stage === 'practice') rel = p.practice && p.practice.img;
    else rel = p.steps && p.steps[k] && p.steps[k].img;
  }
  if (rel) { const abs = path.join(T9, rel); if (fs.existsSync(abs)) return abs; }
  const def = t9Diagram(id, stage);
  return fs.existsSync(def) ? def : null;
}

// Chemins T8 locaux (lot pilote : s01 uniquement).
const T8 = path.join(__dirname, '../assets');
function t8Scene(id) { return path.join(T8, 'scenes', `${id}.jpg`); }
function t8Diagram(id, stage) { return path.join(T8, 'diagrams', `${id}_${stage}.png`); }

const STAGES = ['observe', 'prepare', 'step_a', 'step_b', 'step_c', 'step_d', 'practice'];

// Résolution média d'une partie T8. Fallback schéma T9 seulement si le fichier existe réellement.
function resolveMedia(p) {
  const r = reuse[p.id];
  const out = { scene: null, diagrams: {}, origin: {} };
  if (p.media === 'new') {
    out.scene = t8Scene(p.id); out.origin.scene = 'T8';
    for (const st of STAGES) { out.diagrams[st] = t8Diagram(p.id, st); out.origin[st] = 'T8'; }
    return out;
  }
  out.scene = t9Scene(r.from); out.origin.scene = 'T9:' + r.from;
  for (const st of STAGES) {
    const f = t9StageFile(r.from, st);
    if (f) { out.diagrams[st] = f; out.origin[st] = 'T9:' + r.from; }
    else { out.diagrams[st] = t8Diagram(p.id, st); out.origin[st] = 'T8'; }
  }
  return out;
}

function validate(parts) {
  const errors = [];
  for (const p of parts) {
    if (p.media === 'reused') {
      if (!reuse[p.id]) errors.push(p.id + ' réutilisation sans justification');
      else if (reuse[p.id].from !== p.mediaFrom) errors.push(p.id + ' mediaFrom != table de réutilisation');
    } else if (!toCreate[p.id]) errors.push(p.id + ' média neuf sans justification');
  }
  const declaredNew = parts.filter((p) => p.media === 'new').map((p) => p.id).sort();
  const tableNew = Object.keys(toCreate).sort();
  if (JSON.stringify(declaredNew) !== JSON.stringify(tableNew)) errors.push('listes médias neufs incohérentes');
  if (errors.length) throw new Error(errors.join('\n'));
  return { reused: parts.length - declaredNew.length, created: declaredNew.length, newIds: declaredNew };
}

module.exports = { reuse, toCreate, resolveMedia, t9Scene, t9Diagram, t9StageFile, t8Scene, t8Diagram, STAGES, validate, T9, T8 };
