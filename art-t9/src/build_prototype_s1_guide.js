const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ImageRun,
  ExternalHyperlink, PageBreak, ShadingType
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const A = (f) => path.join(ROOT, 'assets', f);
const OUT = path.join(ROOT, 'output', 'Art_T9_J-Learn_PROTOTYPE_S1_GUIDE_ENSEIGNANT.docx');

const C = { red: 'C00000', green: '1E7B34', blue: '1F4E79', pink: 'C2185B', grey: '595959', light: 'F2F2F2' };
const FONT = 'Times New Roman';

function img(file, w, h, title) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 120 },
    children: [new ImageRun({ data: fs.readFileSync(A(file)), transformation: { width: w, height: h }, altText: { title: title || file, description: title || file, name: file } })]
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 120 },
    alignment: opts.align,
    children: [new TextRun({ text, bold: opts.bold, italics: opts.italics, color: opts.color, size: opts.size ?? 22, font: FONT })]
  });
}
function h1(text) { return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 240, after: 120 }, children: [new TextRun({ text, bold: true, color: C.blue, size: 30, font: FONT })] }); }
function h2(text) { return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, children: [new TextRun({ text, bold: true, color: C.pink, size: 26, font: FONT })] }); }
function bullet(text) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 60 }, children: [new TextRun({ text, size: 22, font: FONT })] }); }
function phrase(text) {
  return new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: 'EAF3EA' },
    spacing: { before: 80, after: 80 },
    indent: { left: 200, right: 200 },
    children: [new TextRun({ text: 'Phrase clé : ', bold: true, color: C.green, size: 22, font: FONT }), new TextRun({ text: '« ' + text + ' »', italics: true, size: 22, font: FONT })]
  });
}
function vigilance(text) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [new TextRun({ text: 'Vigilance : ', bold: true, color: C.red, size: 22, font: FONT }), new TextRun({ text, size: 22, font: FONT })]
  });
}
function cell(text, opts = {}) {
  return new TableCell({
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [new Paragraph({ children: [new TextRun({ text, bold: opts.bold, color: opts.color, size: opts.size ?? 20, font: FONT })] })]
  });
}
function table(widths, rows) {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({
    columnWidths: widths,
    width: { size: total, type: WidthType.DXA },
    rows: rows.map((r, i) => new TableRow({ children: r.map((t, j) => cell(t, { width: widths[j], bold: i === 0, fill: i === 0 ? 'D9E2F3' : undefined })) }))
  });
}
function step(num, title, duration, teacher, phraseText, students, watch) {
  return [
    h2(`${num}. ${title} — ${duration}`),
    p(`Enseignant : ${teacher}`),
    phrase(phraseText),
    p(`Élèves : ${students}`),
    vigilance(watch)
  ];
}

const children = [
  p('J-Learn — Arts T9', { bold: true, color: C.blue, size: 28, align: AlignmentType.CENTER }),
  p('Prototype — Séance 1', { bold: true, size: 26, align: AlignmentType.CENTER }),
  p('Dessiner un gobelet : trois gris pour donner du volume', { bold: true, color: C.pink, size: 30, align: AlignmentType.CENTER }),
  p('Guide enseignant : étapes + phrases clés', { italics: true, align: AlignmentType.CENTER }),
  p('Ce prototype montre le nouveau modèle : d’abord aider l’enseignant à savoir quoi faire, quoi dire et quoi observer ; ensuite seulement donner une courte trace à l’élève.', { after: 200 }),
  img('img_art_t9_s01_scene_scolaire_1100.jpg', 600, 400, 'Scène scolaire : observer un gobelet avant de le dessiner'),

  new Paragraph({ children: [new PageBreak()] }),
  h1('A. Fiche enseignant'),
  table([2600, 6800], [
    ['Élément', 'Contenu'],
    ['Classe / discipline', 'T9 — Arts'],
    ['Sous-discipline', 'Arts visuels — Dessin'],
    ['Durée', '2 heures'],
    ['Source PE', 'PE T9.pdf, Arts visuels / Dessin : réaliser un dessin à partir d’un objet'],
    ['Démarche PE', 'Interprétation : se familiariser, mémoriser, répéter, tenir compte des pairs, ajuster'],
    ['Production attendue', 'Un dessin d’objet simple avec formes/lignes, trois valeurs de gris et une ombre portée'],
    ['Type d’exercice', 'Production / interprétation'],
    ['Type de sujet d’examen', 'Sujet de production'],
  ]),
  h2('Ce que l’enseignant doit comprendre'),
  bullet('Le but n’est pas de faire un dessin parfait, mais de faire comprendre le volume.'),
  bullet('L’élève doit voir que la lumière crée des zones claires et sombres.'),
  bullet('Trois gris suffisent pour commencer : clair, moyen, foncé.'),
  bullet('Un trait tremblant ou une forme un peu déformée n’est pas grave si la lumière et l’ombre sont cohérentes.'),

  h1('B. Ce qu’il faut préparer'),
  table([2600, 3400, 3400], [
    ['Matériel', 'Pourquoi', 'Alternative locale'],
    ['Un objet simple : gobelet, bouteille, boîte', 'Servir de modèle à observer', 'Objet de la classe ou de la maison'],
    ['Papier + crayon + gomme', 'Tracer et corriger doucement', 'Papier ordinaire, crayon noir'],
    ['Une lumière latérale', 'Voir le côté clair et le côté sombre', 'Fenêtre, lampe, soleil indirect'],
    ['Affiche ou dessin des trois gris', 'Aider l’élève à comparer', 'Trois cases hachurées au crayon'],
  ]),
  p('Avant le cours : placer l’objet sur une table, vérifier que la lumière vient d’un côté, et tester que les élèves voient bien le côté clair et le côté sombre.'),
  img('img_art_t9_s01_objet_1100.png', 560, 373, 'Objet modèle : gobelet éclairé latéralement'),

  new Paragraph({ children: [new PageBreak()] }),
  h1('C. Déroulement pas à pas'),
  p('Durées indicatives : I. Révision / entrée 10 min ; II. Nouvelle leçon 95 min ; III. Évaluation / présentation 15 min.', { bold: true }),

  h2('I. Révision / entrée — 10 min'),
  ...step(1, 'Montrer l’objet et annoncer le défi', '10 min',
    'présente le gobelet et demande aux élèves ce qu’ils voient.',
    'Aujourd’hui, nous allons dessiner cet objet pour qu’il ait l’air rond, pas plat.',
    'nomment l’objet et disent ce qu’ils remarquent : côté clair, côté sombre, forme.',
    'ne pas commencer par une longue définition ; faire observer d’abord.'),

  h2('II. Nouvelle leçon — 95 min'),
  ...step(2, 'Se familiariser avec le modèle', '15 min',
    'fait observer l’objet sous la lumière et demande de montrer les zones.',
    'Montrez du doigt le côté éclairé et le côté sombre.',
    'observent, comparent et montrent la zone claire et la zone sombre.',
    'si la lumière est trop faible, déplacer l’objet ou utiliser une lampe.'),
  img('img_art_t9_s01_echelle.png', 600, 196, 'Échelle de trois gris'),
  ...step(3, 'Mémoriser les trois gris', '10 min',
    'montre l’échelle des trois gris et fait nommer chaque valeur.',
    'Nous avons trois gris : clair, moyen et foncé.',
    'répètent les noms et montrent les trois valeurs.',
    'ne pas demander beaucoup de nuances ; trois valeurs suffisent pour débuter.'),
  ...step(4, 'Répéter / pratiquer avec un essai guidé', '25 min',
    'montre comment tracer la forme puis placer les gris.',
    'Je trace d’abord la forme, puis je place le gris clair du côté de la lumière.',
    'font un petit essai au crayon en suivant la démonstration.',
    'corriger le geste sans faire le dessin à la place de l’élève.'),
  img('img_art_t9_s01_volume.png', 600, 338, 'Passer de la forme au volume'),
  ...step(5, 'Produire le dessin personnel', '30 min',
    'laisse les élèves produire leur dessin en circulant dans la classe.',
    'Commencez léger, puis ajoutez les gris petit à petit.',
    'dessinent l’objet, placent les trois gris et ajoutent l’ombre portée.',
    'encourager les élèves bloqués ; rappeler la lumière avant de corriger le trait.'),
  ...step(6, 'Tenir compte des pairs', '10 min',
    'organise un échange en binôme.',
    'Montre à ton camarade où est la lumière sur ton dessin.',
    'présentent leur dessin à un camarade et écoutent une remarque simple.',
    'les remarques doivent être bienveillantes : une chose réussie, une chose à améliorer.'),
  ...step(7, 'Ajuster sa production', '5 min',
    'invite les élèves à améliorer leur dessin après l’échange.',
    'Ajoute un gris foncé si ton objet paraît encore plat.',
    'ajoutent ou renforcent une valeur, puis préparent la présentation.',
    'ne pas viser la perfection ; viser un volume plus lisible.'),

  h2('III. Évaluation / présentation — 15 min'),
  p('Quelques élèves présentent leur dessin. L’enseignant observe la production et demande : « Où est la lumière ? Où est l’ombre ? »'),
  phrase('Ton objet a du volume parce qu’on voit le côté clair et le côté sombre.'),

  new Paragraph({ children: [new PageBreak()] }),
  h1('D. Erreurs fréquentes — seulement si utile'),
  p('On n’utilise pas de contre-exemple partout. Ici, deux erreurs sont probables quand on débute.'),
  table([3000, 3200, 3200], [
    ['Erreur fréquente', 'Attendu', 'Aide simple'],
    ['✗ Objet plat, un seul gris', '✔️ Trois valeurs : clair, moyen, foncé', 'Demander : « Où est la lumière ? » puis ajouter le gris foncé opposé.'],
    ['✗ Ombre du mauvais côté', '✔️ Ombre opposée à la lumière', 'Montrer la source lumineuse avec le doigt, puis comparer avec l’objet.'],
  ]),

  h1('E. Évaluation / observation'),
  table([3200, 4200, 2000], [
    ['Critère', 'Ce que l’enseignant observe', 'Niveau'],
    ['Forme', 'L’objet est reconnaissable.', 'Acquis / En cours / À revoir'],
    ['Valeurs', 'Trois gris sont utilisés.', 'Acquis / En cours / À revoir'],
    ['Lumière / ombre', 'Le côté clair et le côté sombre sont cohérents.', 'Acquis / En cours / À revoir'],
    ['Ombre portée', 'Une ombre est placée sur le support.', 'Acquis / En cours / À revoir'],
    ['Présentation', 'L’élève explique où est la lumière.', 'Acquis / En cours / À revoir'],
  ]),
  p('Pas de note chiffrée obligatoire dans la fiche. L’objectif est d’observer, d’encourager et de faire améliorer.', { italics: true }),

  new Paragraph({ children: [new PageBreak()] }),
  h1('F. Courte trace élève'),
  h2('Résumé'),
  p('Pour donner du volume à un objet, j’observe la lumière. J’utilise trois gris : clair, moyen et foncé. Le gris clair se place du côté de la lumière. Le gris foncé se place du côté opposé. J’ajoute une ombre portée sur la table.'),
  h2('Mots utiles'),
  bullet('Valeur'), bullet('Nuance'), bullet('Lumière'), bullet('Ombre'), bullet('Volume'),
  h2('Consigne'),
  p('Dessine un objet simple en utilisant trois gris et une ombre portée.'),
  img('img_art_t9_s01_exemple_1100.png', 560, 373, 'Exemple de production attendue'),

  h1('G. Ressources média'),
  h2('Audio de consigne'),
  p('Cet audio donne la consigne orale de la séance. Il peut être écouté en classe ou préparé par l’enseignant avant le cours.'),
  new Paragraph({
    children: [
      new ExternalHyperlink({ link: 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/arena/3f402b0e-jlearn-pack/art-t9/assets/audio_art_t9_s01_consigne.mp3', children: [new TextRun({ text: 'Télécharger / écouter l’audio MP3', color: C.blue, underline: {}, size: 22, font: FONT })] })
    ]
  }),
  img('qr_audio_art_t9_s01.png', 140, 140, 'QR code vers l’audio de la séance 1'),
  p('Vidéo tutoriel : non requise pour cette séance. Elle pourra être ajoutée si l’enseignant souhaite montrer un geste de dessin en vidéo.', { italics: true }),
];

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{ properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } }, children }]
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(OUT, buf); console.log('OK', OUT, buf.length); });
