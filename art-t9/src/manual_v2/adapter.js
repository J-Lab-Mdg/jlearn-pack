const pilots = require('./validated_pilots.json');
const strip = s => String(s).replace(/^✔️\s*|^✗\s*/, '');
function fromPilot(id, overrides) {
  const p = pilots.find(x => x.id === id);
  if (!p) throw new Error('Pilote inconnu ' + id);
  const ans = x => typeof x === 'string' ? x : x.answer;
  return {
    id: overrides.id, session: overrides.session, part: overrides.part, minutes: overrides.minutes ?? 120,
    domain: overrides.domain, title: p.titre, theme: p.theme, pe: p.doc,
    objective: p.objectif, understand: p.comprendre, materials: p.materiel,
    scene: 'pilots/' + p.scene, audio: 'pilots/' + p.audio, visual: overrides.visual,
    review: p.revision.ens.map((q, i) => [q, ans(p.revision.app[i])]),
    situation: overrides.situation, situationAnswer: overrides.situationAnswer,
    observe: { title: p.obsTitle.replace(/^\d+\.\s*/, ''), phrase: p.obsPhrase, bullets: p.obsBullets, support: overrides.support || p.obsCaption, img: 'pilots/' + p.obsImg },
    prep: { title: p.prepTitle.replace(/^\d+\.\s*/, ''), phrase: p.prepPhrase, text: p.prepText.join(' '), img: 'pilots/' + p.prepImg },
    questions: overrides.questions,
    steps: p.prod.map(s => ({ title: s.title.replace(/^[a-d]\d?\.\s*/, ''), text: s.text, phrase: s.phrase, img: 'pilots/' + s.img })),
    practice: { title: p.pratiqueTitre, consigne: p.pratiqueConsigne, criteria: p.pratiqueBullets.map(strip), trace: p.trace, img: 'pilots/' + p.pratiqueImg },
    eval: p.eval.ens[0], errors: p.erreurs.map(r => r.map(strip)), videos: p.videos,
    keywords: overrides.keywords || [], safety: overrides.safety || 'Vérifier le matériel et l’espace avant l’activité.',
    ...overrides,
  };
}
module.exports = { fromPilot };
