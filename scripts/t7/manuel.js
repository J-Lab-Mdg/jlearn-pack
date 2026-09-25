const fs = require('fs');
const { buildDoc } = require('./lib');
const {u:u1} = require('./u1');
const {u:u2} = require('./u2');
const {u:u3} = require('./u3');
const {u:u4} = require('./u4');
const {u:u5} = require('./u5');
const {u:u6} = require('./u6');

/* Contrôles de cohérence du plan annuel (carte PE T7 : 64 séances / 52 leçons) */
const units=[u1,u2,u3,u4,u5,u6];
const planAll=units.map(u=>({num:`Unité ${u.num}`, title:u.title, seances:u.plan.seances, lecons:u.lecons.length}));
const ts=planAll.reduce((a,r)=>a+r.seances,0), tl=planAll.reduce((a,r)=>a+r.lecons,0);
console.assert(ts===64,'total séances attendu 64, obtenu '+ts);
console.assert(tl===52,'total leçons attendu 52, obtenu '+tl);

const FILE='Manuel-Mathematiques-T7-COMPLET.docx';
(async ()=>{
 const buf = await buildDoc(units, {
  title:FILE,
  coverTitle:'MANUEL DE L’ENSEIGNANT — MATHÉMATIQUES T7 — OUVRAGE COMPLET',
  coverSub:'6 unités · 64 séances · 52 leçons · 6 révisions · 6 examens blancs — conforme au Programme d’Études (PE) T7',
  header:'Manuel complet de l’enseignant pour la classe de T7 : six unités conformes au PE T7 (Nombre, Opération, Algèbre, Géométrie, Mesure, Traitement de données). Chaque leçon suit la même organisation : fiche de préparation, trace écrite à recopier au tableau, méthode lorsque la procédure l’exige, exemple résolu, erreur à éviter, exercices et corrigés. Chaque unité se termine par une séance de révision et un examen blanc sur 20 points avec corrigé et barème.',
  planAll
 });
 fs.writeFileSync(FILE, buf);
 console.log('BUILD MANUEL COMPLET OK — '+FILE, buf.length, 'octets');
})();
