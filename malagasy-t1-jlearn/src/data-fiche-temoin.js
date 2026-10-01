const B = require('./builders');

const { COLORS, correctedParagraph, p, text } = B;

const meta = {
  taranja: 'Malagasy',
  zanaTaranja: 'Fanehoan-kevitra am-bava — Fanehoan-kevitra',
  lohahevitra: 'Ny fampahafantarana ny tena sy ny hafa',
  lohateny: 'Mampahafantatra ny tena sy ny hafa',
  tanjona: 'mampahafantatra ny tenany amin\'ny fehezanteny feno sy manaja ny anjara fitenenana',
  fanovozanKevitra: 'MEN, Fandaharam-pibeazana T1, Malagasy, p. 9–17; MEN, RAPE T1, p. 6–8; Tenymalagasy, “anarana”, “i”, “teboka manontany”; Peace Corps, An Introduction to the Malagasy Language, Lesona 1.',
  fitaovana: 'Sary, karatra misy resaka, karatra misy fehezanteny.',
  kilasy: 'T1 / 11e / CP1',
  seho: '1 / 9',
  faharetany: '20 minitra',
};

function paraLines(lines, options = {}) {
  return lines.map((line) => p(line, { size: options.size || 15, after: options.after === undefined ? 35 : options.after, line: 215 }));
}

function answerLine(prefix, parts) {
  return correctedParagraph([
    { text: prefix },
    ...parts,
  ], { size: 15, after: 30 });
}

const revisionTeacher = paraLines([
  'Miarahaba ny mpianatra : “Manahoana, rankizy!”',
  'Mametraka ireto fanontaniana ireto :',
  '1. Iza no anaranao?',
  '2. Inona no ataonao rehefa te hiteny ao an-dakilasy?',
]);
const revisionLearner = paraLines([
  'Mamaly.',
  'V.A. 1 : Ohatra : “Soa no anarako.”',
  'V.A. 2 : “Manangan-tanana aho vao miteny.”',
]);

const warmupTeacher = paraLines([
  'Mitantara : “Tonga voalohany ao amin’ny kilasy T1 i Soa sy i Koto. Tsy mbola mifankahalala izy ireo.”',
  'Manontany : “Inona no fanontaniana tokony hapetrak’i Soa hahalalany ny anaran’i Koto?”',
]);
const warmupLearner = paraLines([
  'Mihaino. Mamaly.',
  'V.A. : “Iza no anaranao?”',
]);

const presentationTeacher = paraLines([
  'Milaza : “Androany isika dia hianatra lesona vaovao hoe : « Mampahafantatra ny tena sy ny hafa ». Aorian’ity seho ity ianareo dia ho afaka hampahafantatra ny tenanareo amin’ny fehezanteny feno sy manaja ny anjara fitenenana.”',
]);
const presentationLearner = paraLines(['Mihaino.']);

const observationTeacher = paraLines([
  'Mampiseho ny sary sy ireto karatra misy resaka ireto :',
  'Soa : “Manahoana! Iza no anaranao?”',
  'Koto : “Manahoana! Koto no anarako.”',
  'Milaza : “Jereo tsara ny sary sy ny resaka.”',
]);
const observationLearner = paraLines(['Mijery.']);

const analysisTeacher = paraLines([
  '1. Iza avy no hita eo amin’ny sary?',
  'V.A. : I Soa sy i Koto no hita eo amin’ny sary.',
  '2. Inona no fanontanian’i Soa?',
  'V.A. : “Iza no anaranao?” no fanontanian’i Soa.',
  '3. Inona no navalin’i Koto?',
  'V.A. : “Koto no anarako.” no navalin’i Koto.',
  '4. Inona no ataon’i Soa alohan’ny hitenenany?',
  'V.A. : Manangan-tanana i Soa alohan’ny hitenenany.',
  '5. Inona no ataon’i Koto rehefa miteny i Soa?',
  'V.A. : Mihaino an’i Soa hatramin’ny farany i Koto.',
]);
const analysisLearner = paraLines([
  'Mamaly.',
  'V.A. 1 : I Soa sy i Koto no hita eo amin’ny sary.',
  'V.A. 2 : “Iza no anaranao?”',
  'V.A. 3 : “Koto no anarako.”',
  'V.A. 4 : Manangan-tanana i Soa.',
  'V.A. 5 : Mihaino an’i Soa hatramin’ny farany i Koto.',
]);

const synthesisTeacher = paraLines([
  'Milaza : “Koa, rehefa mampahafantatra ny tena dia miarahaba, manontany hoe : « Iza no anaranao? », ary mamaly amin’ny fehezanteny feno hoe : « [Anarana] no anarako. » Manangan-tanana, miandry ny anjara fitenenana ary mihaino ny hafa hatramin’ny farany ny mpianatra.”',
]);
const synthesisLearner = paraLines(['Mihaino.']);

const applicationTeacher = paraLines([
  '1. Fenoy am-bava amin’ny teny mety ireto fehezanteny ireto :',
  'a. __________ no anarako.',
  'b. Iza no __________?',
  'd. __________ aho rehefa misy miteny.',
  'e. __________ aho vao miteny.',
  '2. Ampifandraiso amin’ny tsipika ny teny ao amin’ny vondrona voalohany sy ny valiny mifanaraka aminy ao amin’ny vondrona faharoa :',
  '1. Manahoana! — a. Mihaino aho.',
  '2. Iza no anaranao? — b. Misaotra.',
  '3. Faly mahalala anao. — d. Manahoana!',
  '4. Inona no ataonao rehefa misy miteny? — e. Soa no anarako.',
]);
const applicationLearner = [
  p('Manao fampiasana.', { size: 15, after: 35 }),
  answerLine('V.A. 1a : Ohatra : ', [{ text: '“Soa no anarako.”', answer: true }]),
  answerLine('V.A. 1b : Iza no ', [{ text: 'anaranao', answer: true }, { text: '?' }]),
  answerLine('V.A. 1d : ', [{ text: 'Mihaino', answer: true }, { text: ' aho rehefa misy miteny.' }]),
  answerLine('V.A. 1e : ', [{ text: 'Manangan-tanana', answer: true }, { text: ' aho vao miteny.' }]),
  answerLine('V.A. 2 : ', [{ text: '1–d; 2–e; 3–b; 4–a.', answer: true }]),
];

const evaluationTeacher = paraLines([
  '1. Valio am-bava amin’ny fehezanteny feno ireto fanontaniana ireto :',
  'a. Iza no anaranao?',
  'b. Inona no fanontaniana apetrakao hahalalana ny anaran’ny namanao?',
  'd. Inona no ataonao alohan’ny hitenenana?',
  'e. Inona no ataonao rehefa misy miteny?',
  '2. Lazao hoe “Marina” na “Diso”. Ahitsio ny fehezanteny diso :',
  'a. Manangan-tanana aho vao miteny.',
  'b. Rehefa miteny ny namako dia miteny miaraka aminy aho.',
  'd. Mihaino ny namako hatramin’ny farany aho.',
  'e. Mamaly amin’ny teny tokana aho hoe : “Soa.”',
]);
const evaluationLearner = [
  p('Mamaly. Asa tsirairay.', { size: 15, after: 35 }),
  answerLine('V.A. 1a : Ohatra : ', [{ text: '“Soa no anarako.”', answer: true }]),
  answerLine('V.A. 1b : ', [{ text: '“Iza no anaranao?”', answer: true }]),
  answerLine('V.A. 1d : ', [{ text: 'Manangan-tanana', answer: true }, { text: ' aho alohan’ny hitenenana.' }]),
  answerLine('V.A. 1e : ', [{ text: 'Mihaino', answer: true }, { text: ' ny olona miteny hatramin’ny farany aho.' }]),
  answerLine('V.A. 2a : ', [{ text: 'Marina.', answer: true }]),
  answerLine('V.A. 2b : ', [{ text: 'Diso.', answer: true }, { text: ' Miandry ny anjara fitenenako ary mihaino aho.' }]),
  answerLine('V.A. 2d : ', [{ text: 'Marina.', answer: true }]),
  answerLine('V.A. 2e : ', [{ text: 'Diso.', answer: true }, { text: ' Mamaly amin’ny fehezanteny feno aho hoe : “Soa no anarako.”' }]),
];

const steps = [
  B.stepRow({
    etape: 'I. FAMERENANA\n2 minitra',
    mpampianatra: revisionTeacher,
    mpianatra: revisionLearner,
    tetika: 'Asa tsirairay',
    fitaovana: '----',
  }),
  B.sectionRow('II. LESONA VAOVAO — 14 minitra'),
  B.stepRow({
    etape: '1. Fitarihan-tsaina',
    mpampianatra: warmupTeacher,
    mpianatra: warmupLearner,
    tetika: 'Asa iombonana',
    fitaovana: 'Sary',
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
    fitaovana: 'Sary sy karatra misy resaka',
  }),
  B.stepRow({
    etape: '4. Famakafakana',
    mpampianatra: analysisTeacher,
    mpianatra: analysisLearner,
    tetika: 'Tosa-kevitra sy asa iombonana',
    fitaovana: 'Sary sy karatra misy resaka',
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
    consigne: 'Fenoy am-bava amin’ny teny mety ireto fehezanteny ireto :',
    items: [
      'a. __________ no anarako.',
      'b. Iza no __________?',
      'd. __________ aho rehefa misy miteny.',
      'e. __________ aho vao miteny.',
    ],
    answers: [
      [{ text: 'a. Ohatra : ' }, { text: '“Soa no anarako.”', answer: true }],
      [{ text: 'b. Iza no ' }, { text: 'anaranao', answer: true }, { text: '?' }],
      [{ text: 'd. ' }, { text: 'Mihaino', answer: true }, { text: ' aho rehefa misy miteny.' }],
      [{ text: 'e. ' }, { text: 'Manangan-tanana', answer: true }, { text: ' aho vao miteny.' }],
    ],
  },
  {
    numero: 2,
    score: 4,
    consigne: 'Ampifandraiso amin’ny tsipika ny teny ao amin’ny vondrona voalohany sy ny valiny mifanaraka aminy ao amin’ny vondrona faharoa :',
    items: [
      '1. Manahoana! — a. Mihaino aho.',
      '2. Iza no anaranao? — b. Misaotra.',
      '3. Faly mahalala anao. — d. Manahoana!',
      '4. Inona no ataonao rehefa misy miteny? — e. Soa no anarako.',
    ],
    answers: [
      [{ text: '1. Manahoana! — ' }, { text: 'd. Manahoana!', answer: true }],
      [{ text: '2. Iza no anaranao? — ' }, { text: 'e. Soa no anarako.', answer: true }],
      [{ text: '3. Faly mahalala anao. — ' }, { text: 'b. Misaotra.', answer: true }],
      [{ text: '4. Inona no ataonao rehefa misy miteny? — ' }, { text: 'a. Mihaino aho.', answer: true }],
    ],
  },
  {
    numero: 3,
    score: 4,
    consigne: 'Valio am-bava amin’ny fehezanteny feno ireto fanontaniana ireto :',
    items: [
      'a. Iza no anaranao?',
      'b. Inona no fanontaniana apetrakao hahalalana ny anaran’ny namanao?',
      'd. Inona no ataonao alohan’ny hitenenana?',
      'e. Inona no ataonao rehefa misy miteny?',
    ],
    answers: [
      [{ text: 'a. Ohatra : ' }, { text: '“Soa no anarako.”', answer: true }],
      [{ text: 'b. ' }, { text: '“Iza no anaranao?”', answer: true }, { text: ' no fanontaniana apetrako.' }],
      [{ text: 'd. ' }, { text: 'Manangan-tanana', answer: true }, { text: ' aho alohan’ny hitenenana.' }],
      [{ text: 'e. ' }, { text: 'Mihaino', answer: true }, { text: ' ny olona miteny hatramin’ny farany aho.' }],
    ],
  },
  {
    numero: 4,
    score: 8,
    consigne: 'Lazao hoe “Marina” na “Diso”. Ahitsio ny fehezanteny diso :',
    items: [
      'a. Manangan-tanana aho vao miteny.',
      'b. Rehefa miteny ny namako dia miteny miaraka aminy aho.',
      'd. Mihaino ny namako hatramin’ny farany aho.',
      'e. Mamaly amin’ny teny tokana aho hoe : “Soa.”',
    ],
    answers: [
      [{ text: 'a. ' }, { text: 'Marina.', answer: true }],
      [{ text: 'b. ' }, { text: 'Diso.', answer: true }, { text: ' Miandry ny anjara fitenenako ary mihaino aho.' }],
      [{ text: 'd. ' }, { text: 'Marina.', answer: true }],
      [{ text: 'e. ' }, { text: 'Diso.', answer: true }, { text: ' Mamaly amin’ny fehezanteny feno aho hoe : “Soa no anarako.”' }],
    ],
  },
];

module.exports = {
  meta,
  steps,
  exercises,
};
