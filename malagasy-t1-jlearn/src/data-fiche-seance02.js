const B = require('./builders');

const { correctedParagraph, p } = B;

const meta = {
  taranja: 'Malagasy',
  zanaTaranja: 'Fanehoan-kevitra am-bava — Fahaiza-mihaino',
  lohahevitra: 'Ny fampahafantarana ny tena sy ny hafa',
  lohateny: 'Mihaino resaka fampahafantarana',
  tanjona: 'maneho hevitra amin’ny fahazoana ny resaka nohenoina amin’ny alalan’ny lohateny, ny sary ary ny voambolana mahazatra',
  fanovozanKevitra: 'MEN, Fandaharam-pibeazana T1, Malagasy, p. 9–12; MEN, RAPE T1, p. 6–8; Tenymalagasy, “anarana”, “mihaino”, “mifankahalala”; Peace Corps, An Introduction to the Malagasy Language, Lesona 1.',
  fitaovana: 'Sary, karatra misy lohateny, karatra misy fehezanteny.',
  kilasy: 'T1 / 11e / CP1',
  seho: '2 / 9',
  faharetany: '20 minitra',
};

const listeningText = [
  'Ao an-dakilasy i Soa sy i Koto. Tsy mbola mifankahalala izy roa.',
  'Manangan-tanana i Soa ary miteny hoe : “Manahoana! Iza no anaranao?”',
  'Mamaly i Koto hoe : “Manahoana! Koto no anarako.”',
  'Hoy i Soa : “Soa no anarako. Faly mahalala anao.”',
  'Mamaly i Koto hoe : “Misaotra.”',
];

function paraLines(lines, options = {}) {
  return lines.map((line) => p(line, {
    size: options.size || 15,
    after: options.after === undefined ? 35 : options.after,
    line: 215,
  }));
}

function answerLine(prefix, parts) {
  return correctedParagraph([
    { text: prefix },
    ...parts,
  ], { size: 15, after: 30 });
}

const revisionTeacher = paraLines([
  'Miarahaba : “Manahoana, rankizy!”',
  'Manontany :',
  '1. Inona no fanontaniana apetraka hahalalana ny anaran’ny namana?',
  '2. Inona no ataonao rehefa misy miteny?',
]);
const revisionLearner = paraLines([
  'Mamaly.',
  'V.A. 1 : “Iza no anaranao?”',
  'V.A. 2 : “Mihaino tsara sy mangina aho.”',
]);

const warmupTeacher = paraLines([
  'Milaza : “Hihaino resaka ifanaovan’i Soa sy i Koto isika.”',
  'Manontany : “Araka ny hevitrareo, inona no mety horesahin’izy roa?”',
]);
const warmupLearner = paraLines([
  'Mihaino. Milaza ny vinavinany.',
  'V.A. : “Mety hifampahafantatra izy roa.”',
]);

const presentationTeacher = paraLines([
  'Milaza : “Androany isika dia hianatra lesona vaovao hoe : « Mihaino resaka fampahafantarana ». Aorian’ity seho ity ianareo dia ho afaka hilaza ny hevitra ao amin’ny resaka nohenoinareo amin’ny alalan’ny lohateny, ny sary ary ny voambolana mahazatra.”',
]);
const presentationLearner = paraLines(['Mihaino.']);

const observationTeacher = paraLines([
  'Mampiseho ny sary sy ny karatra misy ny lohateny hoe : “Soa sy Koto mifankahalala.”',
  'Milaza : “Jereo tsara ny sary sy ny lohateny.”',
]);
const observationLearner = paraLines(['Mijery.']);

const analysisTeacher = paraLines([
  'Mialohan’ny fihainoana :',
  '1. Iza avy no hita eo amin’ny sary?',
  'V.A. : I Soa sy i Koto ary ny mpampianatra sy ny mpianatra no hita eo amin’ny sary.',
  '2. Aiza izy ireo?',
  'V.A. : Ao an-dakilasy izy ireo.',
  '3. Araka ny sary sy ny lohateny, inona no mety horesahin’i Soa sy i Koto?',
  'V.A. : Mety hifampahafantatra izy roa.',
  'Mandritra ny fihainoana :',
  'Mamaky miadana indroa ilay resaka ny mpampianatra :',
  ...listeningText.map((line) => `“${line}”`),
  'Aorian’ny fihainoana :',
  '4. Marina ve ny vinavinantsika?',
  'V.A. : Eny, marina ny vinavinantsika satria mifampahafantatra i Soa sy i Koto.',
  '5. Inona no fanontanian’i Soa?',
  'V.A. : “Iza no anaranao?” no fanontanian’i Soa.',
  '6. Inona no navalin’i Koto?',
  'V.A. : “Koto no anarako.” no navalin’i Koto.',
  '7. Inona no teny nambaran’i Koto ho fisaorana?',
  'V.A. : “Misaotra.” no teny nambaran’i Koto.',
], { size: 14, after: 25 });
const analysisLearner = paraLines([
  'Mandinika ny sary sy ny lohateny. Mamaly ary milaza ny vinavinany.',
  'Mihaino tsara sy mangina rehefa vakina indroa ny resaka.',
  'Manamarina ny vinavinany. Mamaly amin’ny fehezanteny feno.',
  'V.A. 1 : I Soa sy i Koto ary ny mpampianatra sy ny mpianatra.',
  'V.A. 2 : Ao an-dakilasy izy ireo.',
  'V.A. 3 : Mety hifampahafantatra i Soa sy i Koto.',
  'V.A. 4 : Eny, marina ny vinavinantsika.',
  'V.A. 5 : “Iza no anaranao?”',
  'V.A. 6 : “Koto no anarako.”',
  'V.A. 7 : “Misaotra.”',
], { size: 14, after: 25 });

const synthesisTeacher = paraLines([
  'Milaza : “Koa, mialohan’ny fihainoana dia dinihina ny sary sy ny lohateny ary vinavinaina ny votoatin’ny resaka. Mandritra ny fihainoana dia mihaino tsara sy mangina. Aorian’ny fihainoana dia hamarinina ny vinavina ary lazaina ny hevitra mivantana sy ny voambolana re.”',
]);
const synthesisLearner = paraLines(['Mihaino.']);

const applicationTeacher = paraLines([
  '1. Lazao hoe “Marina” na “Diso” araka ny resaka nohenoina :',
  'a. Ao an-dakilasy i Soa sy i Koto.',
  'b. Efa nifankahalala i Soa sy i Koto.',
  'd. Nanontany ny anaran’i Koto i Soa.',
  'e. “Soa no anarako.” no navalin’i Koto.',
  '2. Fenoy am-bava amin’ny teny re tao amin’ny resaka :',
  'a. Ao __________ i Soa sy i Koto.',
  'b. Iza no __________?',
  'd. __________ no anarako, hoy i Koto.',
  'e. __________, hoy i Koto tamin’ny farany.',
]);
const applicationLearner = [
  p('Manao fampiasana. Asa tsiroaroa.', { size: 15, after: 35 }),
  answerLine('V.A. 1a : ', [{ text: 'Marina.', answer: true }]),
  answerLine('V.A. 1b : ', [{ text: 'Diso.', answer: true }, { text: ' Tsy mbola nifankahalala izy roa.' }]),
  answerLine('V.A. 1d : ', [{ text: 'Marina.', answer: true }]),
  answerLine('V.A. 1e : ', [{ text: 'Diso.', answer: true }, { text: ' “Koto no anarako.” no navalin’i Koto.' }]),
  answerLine('V.A. 2a : Ao ', [{ text: 'an-dakilasy', answer: true }, { text: ' i Soa sy i Koto.' }]),
  answerLine('V.A. 2b : Iza no ', [{ text: 'anaranao', answer: true }, { text: '?' }]),
  answerLine('V.A. 2d : ', [{ text: 'Koto', answer: true }, { text: ' no anarako, hoy i Koto.' }]),
  answerLine('V.A. 2e : ', [{ text: 'Misaotra', answer: true }, { text: ', hoy i Koto tamin’ny farany.' }]),
];

const evaluationTeacher = paraLines([
  '1. Valio am-bava amin’ny fehezanteny feno :',
  'a. Iza avy no mifampiresaka?',
  'b. Aiza i Soa sy i Koto?',
  'd. Inona no fanontanian’i Soa?',
  'e. Inona no navalin’i Koto?',
  '2. Alaharo araka ny filaharany ao amin’ny resaka ireto fehezanteny ireto :',
  'a. Koto no anarako.',
  'b. Faly mahalala anao.',
  'd. Manahoana! Iza no anaranao?',
  'e. Misaotra.',
]);
const evaluationLearner = [
  p('Mamaly. Asa tsirairay.', { size: 15, after: 35 }),
  answerLine('V.A. 1a : ', [{ text: 'I Soa sy i Koto', answer: true }, { text: ' no mifampiresaka.' }]),
  answerLine('V.A. 1b : ', [{ text: 'Ao an-dakilasy', answer: true }, { text: ' i Soa sy i Koto.' }]),
  answerLine('V.A. 1d : ', [{ text: '“Iza no anaranao?”', answer: true }, { text: ' no fanontanian’i Soa.' }]),
  answerLine('V.A. 1e : ', [{ text: '“Koto no anarako.”', answer: true }, { text: ' no navalin’i Koto.' }]),
  answerLine('V.A. 2 : ', [{ text: 'd – a – b – e.', answer: true }]),
];

const steps = [
  B.stepRow({
    etape: 'I. FAMERENANA\n2 minitra',
    mpampianatra: revisionTeacher,
    mpianatra: revisionLearner,
    tetika: 'Fanontaniana arahim-baliny',
    fitaovana: '----',
  }),
  B.sectionRow('II. LESONA VAOVAO — 14 minitra'),
  B.stepRow({
    etape: '1. Fitarihan-tsaina',
    mpampianatra: warmupTeacher,
    mpianatra: warmupLearner,
    tetika: 'Tosa-kevitra',
    fitaovana: '----',
  }),
  B.stepRow({
    etape: '2. Fanolorana',
    mpampianatra: presentationTeacher,
    mpianatra: presentationLearner,
    tetika: 'Asa iombonana',
    fitaovana: '----',
  }),
  B.stepRow({
    etape: '3. Fandinihana',
    mpampianatra: observationTeacher,
    mpianatra: observationLearner,
    tetika: 'Asa iombonana',
    fitaovana: 'Sary sy karatra misy lohateny',
  }),
  B.stepRow({
    etape: '4. Famakafakana',
    mpampianatra: analysisTeacher,
    mpianatra: analysisLearner,
    tetika: 'Fanontaniana arahim-baliny sy fifanakalozan-kevitra',
    fitaovana: 'Sary sy resaka vakina',
  }),
  B.stepRow({
    etape: '5. Fandravonana',
    mpampianatra: synthesisTeacher,
    mpianatra: synthesisLearner,
    tetika: 'Asa iombonana',
    fitaovana: '----',
  }),
  B.stepRow({
    etape: '6. Fampiharana',
    mpampianatra: applicationTeacher,
    mpianatra: applicationLearner,
    tetika: 'Asa tsiroaroa',
    fitaovana: 'Karatra misy fehezanteny',
  }),
  B.stepRow({
    etape: 'III. TOMBANA\n4 minitra',
    mpampianatra: evaluationTeacher,
    mpianatra: evaluationLearner,
    tetika: 'Asa tsirairay',
    fitaovana: 'Karatra misy fehezanteny',
  }),
];

const exercises = [
  {
    numero: 1,
    score: 4,
    consigne: 'Lazao hoe “Marina” na “Diso” araka ny resaka nohenoina :',
    items: [
      'a. Ao an-dakilasy i Soa sy i Koto.',
      'b. Efa nifankahalala i Soa sy i Koto.',
      'd. Nanontany ny anaran’i Koto i Soa.',
      'e. “Soa no anarako.” no navalin’i Koto.',
    ],
    answers: [
      [{ text: 'a. ' }, { text: 'Marina.', answer: true }],
      [{ text: 'b. ' }, { text: 'Diso.', answer: true }, { text: ' Tsy mbola nifankahalala izy roa.' }],
      [{ text: 'd. ' }, { text: 'Marina.', answer: true }],
      [{ text: 'e. ' }, { text: 'Diso.', answer: true }, { text: ' “Koto no anarako.” no navalin’i Koto.' }],
    ],
  },
  {
    numero: 2,
    score: 4,
    consigne: 'Fenoy am-bava amin’ny teny re tao amin’ny resaka :',
    items: [
      'a. Ao __________ i Soa sy i Koto.',
      'b. Iza no __________?',
      'd. __________ no anarako, hoy i Koto.',
      'e. __________, hoy i Koto tamin’ny farany.',
    ],
    answers: [
      [{ text: 'a. Ao ' }, { text: 'an-dakilasy', answer: true }, { text: ' i Soa sy i Koto.' }],
      [{ text: 'b. Iza no ' }, { text: 'anaranao', answer: true }, { text: '?' }],
      [{ text: 'd. ' }, { text: 'Koto', answer: true }, { text: ' no anarako, hoy i Koto.' }],
      [{ text: 'e. ' }, { text: 'Misaotra', answer: true }, { text: ', hoy i Koto tamin’ny farany.' }],
    ],
  },
  {
    numero: 3,
    score: 4,
    consigne: 'Valio am-bava amin’ny fehezanteny feno :',
    items: [
      'a. Iza avy no mifampiresaka?',
      'b. Aiza i Soa sy i Koto?',
      'd. Inona no fanontanian’i Soa?',
      'e. Inona no navalin’i Koto?',
    ],
    answers: [
      [{ text: 'a. ' }, { text: 'I Soa sy i Koto', answer: true }, { text: ' no mifampiresaka.' }],
      [{ text: 'b. ' }, { text: 'Ao an-dakilasy', answer: true }, { text: ' i Soa sy i Koto.' }],
      [{ text: 'd. ' }, { text: '“Iza no anaranao?”', answer: true }, { text: ' no fanontanian’i Soa.' }],
      [{ text: 'e. ' }, { text: '“Koto no anarako.”', answer: true }, { text: ' no navalin’i Koto.' }],
    ],
  },
  {
    numero: 4,
    score: 8,
    consigne: 'Alaharo araka ny filaharany ao amin’ny resaka ireto fehezanteny ireto :',
    items: [
      'a. Koto no anarako.',
      'b. Faly mahalala anao.',
      'd. Manahoana! Iza no anaranao?',
      'e. Misaotra.',
    ],
    answers: [
      [{ text: '1. ' }, { text: 'Manahoana! Iza no anaranao?', answer: true }],
      [{ text: '2. ' }, { text: 'Koto no anarako.', answer: true }],
      [{ text: '3. ' }, { text: 'Faly mahalala anao.', answer: true }],
      [{ text: '4. ' }, { text: 'Misaotra.', answer: true }],
    ],
  },
];

module.exports = {
  exercises,
  listeningText,
  meta,
  steps,
};
