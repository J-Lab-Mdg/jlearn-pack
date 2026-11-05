// Prototype Arts T9 — Séance 1, version recentrée enseignant.
// Ordre demandé : FICHE DE PRÉPARATION complète (A-E) -> LEÇON illustrée étape par étape -> PRATIQUE sur un autre objet + vidéos.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ImageRun,
  ExternalHyperlink, PageBreak, ShadingType, VerticalAlign,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const A = f => path.join(ROOT, 'assets', f);
const OUT = path.join(ROOT, 'output', 'Art_T9_J-Learn_PROTOTYPE_S1_GUIDE_ENSEIGNANT.docx');
const MAN = JSON.parse(fs.readFileSync(A('s01-v2-image-manifest.json'), 'utf8'));
const C = { red: 'C00000', green: '1E7B34', blue: '1F4E79', rose: 'C2185B', grey: '595959', black: '000000' };
const FONT = 'Times New Roman';
const AUDIO_URL = 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/arena/3f402b0e-jlearn-pack/art-t9/assets/audio_art_t9_s01_consigne.mp3';
const VIDEOS = [
  { title: 'Comment dessiner les volumes de base — cube, cylindre, boule', url: 'https://www.youtube.com/watch?v=n-XXUXO4BOU', use: 'Voir comment un cylindre est construit puis ombré.' },
  { title: 'Ombres et lumières en dessin : faites les choses dans l’ordre', url: 'https://www.youtube.com/watch?v=AVdNEXSqRE4', use: 'Revoir la montée des valeurs et les gestes de hachures / dégradé.' },
  { title: 'Comment créer des volumes en 3D ? Bien placer les ombres et les lumières', url: 'https://www.youtube.com/watch?v=8v88okRGVt0', use: 'Vérifier le lien entre source lumineuse, partie sombre et ombre portée.' },
];

function run(text, o = {}) { return new TextRun({ text, font: FONT, size: o.size ?? 22, bold: o.bold, italics: o.italics, color: o.color ?? C.black, underline: o.underline }); }
function p(text, o = {}) { return new Paragraph({ alignment: o.align, spacing: { after: o.after ?? 100, before: o.before ?? 0, line: o.line ?? 260 }, children: [run(text, o)] }); }
function pRuns(children, o = {}) { return new Paragraph({ alignment: o.align, spacing: { after: o.after ?? 100, before: o.before ?? 0 }, children }); }
function h1(text, bookmarkId) { return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 240, after: 120 }, children: [run(text, { bold: true, color: C.blue, size: 30 })] }); }
function h2(text) { return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 100 }, children: [run(text, { bold: true, color: C.green, size: 26 })] }); }
function h3(text) { return new Paragraph({ spacing: { before: 160, after: 80 }, children: [run(text, { bold: true, size: 23 })] }); }
function bullet(text, o = {}) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 60 }, children: [run(text, { size: o.size ?? 22 })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }
function noBorders() { const n = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' }; return { top: n, bottom: n, left: n, right: n, insideHorizontal: n, insideVertical: n }; }
function thinBorders() { const b = { style: BorderStyle.SINGLE, size: 4, color: '999999' }; return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b }; }
function cell(children, o = {}) { return new TableCell({ columnSpan: o.colSpan, rowSpan: o.rowSpan, verticalAlign: o.vAlign ?? VerticalAlign.TOP, width: o.width ? { size: o.width, type: WidthType.DXA } : undefined, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined, margins: { top: 60, bottom: 60, left: 90, right: 90 }, children }); }
function img(file, w, caption) {
  const d = MAN[file]; if (!d) throw new Error('Missing manifest ' + file);
  const h = Math.round(w * d.height / d.width);
  const type = file.toLowerCase().endsWith('.jpg') ? 'jpg' : 'png';
  const out = [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: caption ? 40 : 120 }, children: [new ImageRun({ type, data: fs.readFileSync(A(file)), transformation: { width: w, height: h }, altText: { title: caption || file, description: caption || file, name: file } })] })];
  if (caption) out.push(p(caption, { align: AlignmentType.CENTER, italics: true, size: 18, color: C.grey, after: 140 }));
  return out;
}
function phrase(text) { return new Paragraph({ shading: { type: ShadingType.CLEAR, fill: 'EAF3EA' }, spacing: { before: 80, after: 80 }, indent: { left: 180, right: 180 }, children: [run('Phrase clé : ', { bold: true, color: C.green }), run('« ' + text + ' »', { italics: true })] }); }
function linkPara(url, label, o = {}) { return new Paragraph({ spacing: { after: o.after ?? 60 }, children: [new ExternalHyperlink({ link: url, children: [run(label, { color: C.blue, underline: {}, size: o.size ?? 22 })] })] }); }
function videoPara(v) { return new Paragraph({ spacing: { before: 80, after: 40 }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(A('s01_v2_icone_video.png')), transformation: { width: 26, height: 18 }, altText: { title: 'Vidéo', description: 'Icône vidéo', name: 'video' } }), run('  ', {}), new ExternalHyperlink({ link: v.url, children: [run(v.title, { color: C.blue, underline: {}, size: 22, bold: true })] })] }); }

// ----- Fiche : méta -----
function metaTable() {
  const L = (label, val) => pRuns([run(label + ' ', { bold: true, size: 20 }), run(val, { size: 20 })], { after: 50 });
  const left = [
    L('Discipline :', 'Arts'), L('Sous discipline :', 'Arts visuels — Dessin'),
    L('Thème :', 'Dessin à partir d’un objet : observer, esquisser, modeler'),
    L('Titre :', 'Du gobelet observé au dessin en volume'),
    L('Objectif spécifique :', 'À partir d’un gobelet éclairé latéralement, réaliser une esquisse proportionnée puis un modelé en trois valeurs avec une ombre portée cohérente.'),
    L('Documentation :', 'PE T9.pdf, Arts visuels / Dessin, p. imprimée 232 ; FRP_3eme_ARTS.pdf, p. 9-10 ; tutoriels vidéo en fin de pratique.'),
    L('Support et matériel :', 'Gobelet opaque, lumière latérale, papier, crayon graphite, gomme, nuancier à remplir, images d’étapes, boîte cylindrique, audio et vidéos.'),
  ];
  const right = [L('Date :', '_______'), L('Classe :', 'T9'), L('Séance n° :', '1 — prototype'), L('Durée :', '120 min')];
  return new Table({ borders: noBorders(), width: { size: 10200, type: WidthType.DXA }, columnWidths: [7000, 3200], rows: [new TableRow({ children: [cell(left, { width: 7000 }), cell(right, { width: 3200 })] })] });
}
const W = [1300, 3100, 3000, 1100, 1100, 600];
function cp(arr, size = 18) { return arr.map(t => typeof t === 'string' ? p(t, { size, after: 50, line: 220 }) : t); }
function tc(arr, w, fill) { return cell(cp(arr), { width: w, fill }); }
function headCell(text, o = {}) { return cell([p(text, { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { width: o.width, colSpan: o.colSpan, rowSpan: o.rowSpan, fill: 'DDEEFF', vAlign: VerticalAlign.CENTER }); }
function deroulementHeader() {
  return [
    new TableRow({ tableHeader: true, children: [headCell('Étapes et Durée', { width: W[0], rowSpan: 2 }), headCell('Déroulement de la leçon', { colSpan: 2 }), headCell('Technique et Stratégie', { width: W[3], rowSpan: 2 }), headCell('Support et Matériel', { width: W[4], rowSpan: 2 }), headCell('Observation', { width: W[5], rowSpan: 2 })] }),
    new TableRow({ tableHeader: true, children: [cell([p('Enseignant', { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { width: W[1], fill: 'F5F5F5', vAlign: VerticalAlign.CENTER }), cell([p('Apprenants', { bold: true, size: 18, align: AlignmentType.CENTER, after: 0 })], { width: W[2], fill: 'F5F5F5', vAlign: VerticalAlign.CENTER })] }),
  ];
}
function sectionRow(text) { return new TableRow({ children: [cell([p(text, { bold: true, size: 18, color: C.red, align: AlignmentType.CENTER, after: 0 })], { colSpan: 6, fill: 'FDE9E9' })] }); }
function stepRow(label, ens, app, tech, supp) { return new TableRow({ children: [tc(label.split('\n'), W[0], 'F2F2F2'), tc(ens, W[1]), tc(app, W[2]), tc(tech, W[3]), tc(supp, W[4]), tc([''], W[5])] }); }
function ra(text) { return pRuns([run('R.A. : ', { bold: true, size: 18, color: C.rose }), run(text, { size: 18 })], { after: 50 }); }
function ficheTable() {
  const rows = [...deroulementHeader()];
  rows.push(stepRow('I. Révision\n(10 min)',
    ['Quels objets de la classe ont une surface courbe ?', 'Que remarque-t-on quand la lumière vient d’un seul côté ?'],
    [ra('Gobelet, boîte cylindrique, bouteille.'), ra('Un côté est clair, l’autre est plus sombre.')],
    ['Questions orales'], ['—']));
  rows.push(sectionRow('II. NOUVELLE LEÇON (95 min)'));
  rows.push(stepRow('1. Mise en situation',
    ['Présenter un gobelet et un simple contour plat.', '« Rova a tracé ce gobelet, mais il paraît plat. Que manque-t-il pour qu’il paraisse rond ? »'],
    [ra('Il manque les gris / les ombres pour montrer le volume.'), 'Les élèves écoutent et répondent à l’oral.'],
    ['Problème visuel'], ['Gobelet, contour plat']));
  rows.push(stepRow('2. Présentation',
    ['« Aujourd’hui : Du gobelet observé au dessin en volume. Vous allez observer, essayer trois gris, faire une esquisse, puis modeler. »'],
    ['Les élèves écoutent.'], ['Annonce orale'], ['Tableau noir, cahier']));
  rows.push(stepRow('3. Observation',
    ['Placer le gobelet sous une lumière latérale.', '« Observez sans dessiner : la forme, l’ouverture, le côté clair, le côté sombre, l’ombre sur la table. »', 'Montrer ensuite l’image annotée.'],
    ['Les élèves observent silencieusement.'], ['Observation dirigée'], ['Gobelet, image annotée']));
  rows.push(stepRow('4. Analyse',
    ['Quelle forme a l’ouverture vue de dessus ?', 'D’où vient la lumière ?', 'Où est le côté clair ?', 'Où est le côté sombre ?', 'Le passage du clair au foncé est-il brusque ?', 'Où est l’ombre portée ?', 'Puis démontrer : nuancier, esquisse, modelé, ombre portée.'],
    [ra('Une ouverture ovale.'), ra('De la gauche.'), ra('Du côté gauche, vers la lumière.'), ra('Du côté droit, opposé à la lumière.'), ra('Non, il est progressif : c’est un dégradé.'), ra('Sur la table, du côté opposé à la lumière.'), 'Les élèves reproduisent les gestes sur leur feuille.'],
    ['Questions / réponses', 'Démonstration', 'Démarche d’interprétation'], ['Gobelet, nuancier, images d’étapes']));
  rows.push(stepRow('5. Synthèse',
    ['« Donc, on observe, on essaie trois gris, on trace une esquisse légère, on modèle avec les valeurs, on ajoute l’ombre portée, puis on ajuste. »'],
    ['Les élèves écoutent.'], ['Synthèse énoncée par l’enseignant'], ['Tableau noir']));
  rows.push(stepRow('6. Application — Pratique',
    ['Consigne : remplis le nuancier ; esquisse le gobelet ; modèle avec trois gris ; ajoute l’ombre portée ; puis transfère la méthode sur la boîte cylindrique.'],
    ['Production attendue : esquisse proportionnée, trois valeurs lisibles, ombre portée cohérente, puis dessin de la boîte.'],
    ['Travail individuel', 'Binôme pour ajuster'], ['Papier, crayon, gomme, gobelet, boîte ou image de boîte']));
  rows.push(stepRow('III. Évaluation\n(15 min)',
    ['« Présente ton dessin de boîte. Montre la lumière, les trois valeurs et l’ombre portée. Explique une amélioration. »', 'Observer avec la grille E.'],
    [ra('Le côté clair est vers la lumière ; le côté foncé est opposé ; l’ombre portée est sur la table, du côté opposé.'), ra('Trois gris sont visibles : clair, moyen, foncé.')],
    ['Production pratique', 'Appréciation orale'], ['Dessin de la boîte, grille E']));
  return new Table({ borders: thinBorders(), width: { size: 10200, type: WidthType.DXA }, columnWidths: W, rows });
}
function simpleTable(widths, rows, headerFill = 'D9E2F3') {
  return new Table({ borders: thinBorders(), width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, rows: rows.map((r, i) => new TableRow({ children: r.map((t, j) => cell([p(t, { size: 19, bold: i === 0, after: 0 })], { width: widths[j], fill: i === 0 ? headerFill : undefined })) })) });
}

function fiche() {
  return [
    p('FICHE DE PRÉPARATION', { bold: true, align: AlignmentType.CENTER, size: 28, after: 120 }),
    metaTable(),
    h2('A. Ce que l’enseignant doit comprendre'),
    bullet('Le but n’est pas de copier un dessin parfait, mais d’apprendre à observer puis à construire.'),
    bullet('La feuille reste plate (2D). Ce sont les valeurs de gris qui donnent l’impression de volume (3D) : c’est le modelé.'),
    bullet('Trois gris suffisent pour commencer : clair, moyen, foncé. La perfection du trait n’est pas prioritaire.'),
    h2('B. Ce qu’il faut préparer'),
    bullet('Un gobelet opaque sans motif, posé sur une table, éclairé par une fenêtre ou une lampe venant d’un côté.'),
    bullet('Papier, crayon graphite, gomme ; nuancier à remplir ou à recopier ; images d’étapes.'),
    bullet('Une boîte cylindrique réelle, ou son image, pour la pratique de transfert.'),
    bullet('Audio de consigne et tutoriels vidéo : les tester avant la classe si le matériel numérique est disponible.'),
    h2('C. Déroulement de la leçon'),
    ficheTable(),
    h2('D. Erreurs fréquentes et aides immédiates'),
    simpleTable([3000, 3300, 3900], [
      ['Erreur fréquente', 'Attendu', 'Aide simple pour l’enseignant'],
      ['✗ Ouverture en amande / avec pointes', '✔️ Ouverture ovale régulière', 'Faire tracer un rectangle léger puis inscrire l’ovale sans pointes.'],
      ['✗ Aplat gris uniforme', '✔️ Trois valeurs : clair, moyen, foncé', 'Demander : « Où est la lumière ? » puis placer le foncé du côté opposé.'],
      ['✗ Ombre portée du côté de la lumière', '✔️ Ombre portée du côté opposé', 'Montrer la lampe / la fenêtre avec le doigt, puis comparer avec l’objet.'],
      ['✗ Contour très noir qui écrase le volume', '✔️ Contour léger, valeurs progressives', 'Faire gommer légèrement le contour et renforcer les gris par petites touches.'],
    ]),
    h2('E. Évaluation de la production'),
    simpleTable([2600, 5000, 2600], [
      ['Critère', 'Ce que l’enseignant observe', 'Niveau'],
      ['Observation', 'La source lumineuse est identifiée ; le côté clair et le côté sombre sont nommés.', 'Acquis / En cours / À revoir'],
      ['Esquisse', 'Proportions lisibles ; ouverture ovale ; base courbe ; traits de construction légers.', 'Acquis / En cours / À revoir'],
      ['Valeurs', 'Trois gris sont utilisés : clair, moyen, foncé.', 'Acquis / En cours / À revoir'],
      ['Dégradé', 'Les passages entre valeurs sont progressifs, pas découpés en bandes dures.', 'Acquis / En cours / À revoir'],
      ['Ombre portée', 'Elle est sur la table, du côté opposé à la lumière, et aide à poser l’objet.', 'Acquis / En cours / À revoir'],
      ['Présentation', 'L’élève explique une réussite et une amélioration possible.', 'Acquis / En cours / À revoir'],
    ]),
    p('Pas de note chiffrée dans la fiche. L’évaluation sert à observer, encourager et faire ajuster.', { italics: true, size: 20 }),
  ];
}

function lecon() {
  const out = [pageBreak(), h1('LEÇON'), p('Du gobelet observé au dessin en volume', { bold: true, color: C.red, size: 28, after: 160 })];
  out.push(...img('img_art_t9_s01_scene_scolaire_1100.jpg', 620, 'En classe : observer un objet réel avant de le dessiner.'));
  out.push(p('Un dessin se fait sur une feuille plate : il est en deux dimensions (2D). Pour donner l’impression que l’objet est en trois dimensions (3D), on observe la lumière et on utilise des valeurs de gris. Cette séance montre comment passer de l’observation à l’esquisse, puis au modelé.'));
  out.push(p('Audio de consigne : écouter avant de commencer, ou pendant que les élèves préparent le matériel.', { bold: true }));
  out.push(linkPara(AUDIO_URL, 'Écouter / télécharger l’audio MP3 de la séance'));
  out.push(...img('qr_audio_art_t9_s01.png', 120, 'QR code vers l’audio.'));

  out.push(h2('1. Observation de l’objet'));
  out.push(...img('s01_v2_observation_annotee.png', 640, 'Les flèches montrent ce que les élèves doivent remarquer avant de tracer.'));
  out.push(phrase('Regardez d’où vient la lumière. Montrez le côté clair, le côté sombre, puis l’ombre portée sur la table.'));
  out.push(bullet('Forme générale : le gobelet est arrondi, proche d’un cylindre.'));
  out.push(bullet('Ouverture : vue légèrement de dessus, elle apparaît ovale.'));
  out.push(bullet('Lumière : le côté qui reçoit la lumière reste clair.'));
  out.push(bullet('Partie sombre : le côté opposé est plus foncé.'));
  out.push(bullet('Dégradé : le passage du clair au foncé est progressif.'));
  out.push(bullet('Ombre portée : elle est projetée sur la table, du côté opposé à la lumière.'));

  out.push(h2('2. Les nuances : essayer trois gris avant de dessiner'));
  out.push(...img('s01_v2_nuances_a_remplir.png', 640, 'Nuancier à remplir au crayon : clair, moyen, foncé.'));
  out.push(phrase('Avec le même crayon, remplis les trois cases : pression très légère, pression moyenne, puis traits plus serrés.'));
  out.push(p('Consigne élève : colorie d’abord les trois grandes cases. Garde une zone blanche pour comparer. Le gris clair n’est pas blanc pur ; le gris foncé n’est pas forcément noir total.'));
  out.push(p('Vocabulaire : une nuance, ou valeur, est un degré de gris entre le clair et le foncé. Pour commencer, trois valeurs suffisent : clair, moyen, foncé.'));

  out.push(h2('3. Le dessin de l’objet'));
  out.push(h3('a. L’esquisse : construire légèrement avant d’ombrer'));
  out.push(p('L’esquisse est le dessin de construction. Elle ne cherche pas encore le volume : elle place les formes, les proportions et les repères. Les traits doivent rester légers pour pouvoir être corrigés.'));
  out.push(h3('a1. Placer les repères'));
  out.push(...img('s01_v2_esquisse_1_reperes.png', 380, 'Repères légers : axe, hauteur, largeur.'));
  out.push(p('On commence par placer l’objet dans la feuille : un axe vertical léger, la hauteur totale, la largeur maximale. On ne dessine pas encore les détails.'));
  out.push(phrase('Trace doucement la hauteur et la largeur avant de fermer la forme.'));
  out.push(h3('a2. Tracer l’ouverture ovale'));
  out.push(...img('s01_v2_esquisse_2_ouverture.png', 380, 'L’ouverture est un ovale régulier, sans pointes.'));
  out.push(p('Pour ce gobelet vu légèrement de dessus, l’ouverture se dessine comme un ovale. Il ne faut pas faire une amande pointue ni un cercle parfait.'));
  out.push(phrase('L’ouverture est ovale : elle est régulière, sans pointes aux extrémités.'));
  out.push(h3('a3. Relier les côtés et tracer la base courbe'));
  out.push(...img('s01_v2_esquisse_3_cotes_base.png', 380, 'Les côtés descendent en se resserrant légèrement ; la base est courbe.'));
  out.push(p('On relie l’ouverture aux côtés. Pour ce gobelet, les côtés se resserrent légèrement vers le bas. La base n’est pas un trait droit : elle est courbe, comme un arc.'));
  out.push(phrase('Les côtés descendent doucement, et la base suit une courbe.'));
  out.push(h3('a4. Contrôler et alléger les repères'));
  out.push(...img('s01_v2_esquisse_4_controle.png', 380, 'Esquisse contrôlée : proportions lisibles, contour léger.'));
  out.push(p('On compare hauteur et largeur, on vérifie la symétrie, puis on gomme les repères devenus inutiles. Le contour reste léger : ce n’est pas lui qui portera le volume.'));

  out.push(h3('b. Le modelé : donner l’impression de volume'));
  out.push(p('La feuille reste en 2D. Le modelé consiste à passer progressivement du clair au foncé pour donner l’impression de 3D. On ne “met” pas réellement l’objet en 3D : on suggère son volume avec les valeurs.'));
  out.push(h3('b1. Repérer les zones de valeurs'));
  out.push(...img('s01_v2_modele_1_zones.png', 380, 'Repérer où seront le clair, le moyen et le foncé.'));
  out.push(p('D’après la lumière observée, on repère trois zones : claire du côté de la lumière, moyenne au passage, foncée du côté opposé. L’intérieur du gobelet peut aussi être plus sombre.'));
  out.push(phrase('Avant de griser, montre-moi où sera le clair, le moyen et le foncé.'));
  out.push(h3('b2. Poser les premières valeurs'));
  out.push(...img('s01_v2_modele_2_premieres_valeurs.png', 380, 'Premières valeurs : garder le clair, poser le moyen, commencer le foncé.'));
  out.push(p('On garde le côté éclairé très clair. On pose un gris moyen du côté qui commence à tourner, puis un gris plus foncé du côté opposé. On procède par petites touches, sans appuyer trop vite.'));
  out.push(phrase('Commence léger : il est plus facile d’ajouter du foncé que de l’enlever.'));
  out.push(h3('b3. Renforcer les sombres et adoucir les passages'));
  out.push(...img('s01_v2_modele_3_degrade.png', 380, 'Dégradé : les valeurs se suivent progressivement.'));
  out.push(p('On renforce le côté sombre, puis on adoucit les passages entre clair, moyen et foncé. Les traits peuvent être serrés et réguliers. Le volume vient du dégradé, pas d’une bande noire isolée.'));
  out.push(phrase('Le gris ne saute pas d’un coup : il passe du clair au moyen, puis au foncé.'));

  out.push(h3('c. L’ombre portée et les finitions'));
  out.push(...img('s01_v2_ombre_portee_finitions.png', 420, 'L’ombre portée est sur la table, du côté opposé à la lumière.'));
  out.push(p('L’ombre portée se place sur la table, du côté opposé à la lumière. Elle est souvent plus marquée près du contact avec l’objet, puis s’atténue. Elle aide à montrer que l’objet est posé.'));
  out.push(p('Finitions : vérifier que le contour n’est pas trop noir, que les trois valeurs se lisent, et que la feuille reste propre.'));

  out.push(h3('d. Comparer, expliquer, ajuster'));
  out.push(p('En binôme, un élève montre son dessin et explique où est la lumière. Le camarade donne une remarque bienveillante : une réussite, une amélioration possible. L’élève ajuste ensuite son dessin.'));
  out.push(phrase('Montre la lumière sur ton dessin, puis dis ce que tu vas améliorer.'));
  out.push(simpleTable([3200, 7000], [
    ['Je vérifie', 'Question à se poser'],
    ['La lumière', 'Mon côté clair est-il du côté de la lumière ?'],
    ['Les trois gris', 'Voit-on clair, moyen et foncé ?'],
    ['Le dégradé', 'Les passages sont-ils progressifs ?'],
    ['L’ombre portée', 'Est-elle sur la table, du côté opposé à la lumière ?'],
  ]));
  return out;
}

function pratique() {
  const out = [pageBreak(), h1('PRATIQUE'), p('Dessiner ceci : une boîte cylindrique', { bold: true, color: C.red, size: 26 })];
  out.push(...img('s01_v2_pratique_boite_1100.jpg', 580, 'Nouvel objet à dessiner : une boîte cylindrique avec couvercle.'));
  out.push(p('Consigne : observe la boîte. Réalise son esquisse, utilise trois gris, ajoute l’ombre portée, puis présente ton dessin. Tu ne copies pas le gobelet : tu transfères la méthode à un autre objet.'));
  out.push(bullet('Esquisse : ouverture / couvercle ovale, côtés, base courbe.'));
  out.push(bullet('Valeurs : côté clair vers la lumière, gris moyen, côté foncé opposé.'));
  out.push(bullet('Ombre portée : sur la table, du côté opposé à la lumière.'));
  out.push(bullet('Présentation : explique une réussite et une amélioration.'));
  out.push(p('Type de sujet d’examen : sujet pratique de production graphique. L’écrit n’est pas l’épreuve principale ; il sert seulement à expliquer les choix.', { italics: true }));
  out.push(h2('Tutoriels vidéo YouTube'));
  out.push(p('À visionner avant la classe pour préparer la démonstration, ou à montrer par courts extraits pendant la séance. Les vidéos ne remplacent pas l’observation de l’objet réel.'));
  for (const v of VIDEOS) { out.push(videoPara(v)); out.push(p(v.use, { size: 20, color: C.grey, after: 100 })); out.push(linkPara(v.url, v.url, { size: 18, after: 120 })); }
  out.push(h2('Courte trace élève'));
  out.push(p('Pour donner du volume à un objet, j’observe la lumière. Je fais une esquisse légère. J’utilise trois gris : clair, moyen, foncé. J’adoucis les passages. J’ajoute l’ombre portée du côté opposé à la lumière. Je compare et j’ajuste.'));
  return out;
}

const children = [...fiche(), ...lecon(), ...pratique()];
const doc = new Document({
  creator: 'J-Learn', title: 'Arts T9 — Prototype séance 1 — fiche, leçon illustrée, pratique', description: 'Prototype recentré enseignant : fiche de préparation complète, leçon pas à pas, pratique sur un autre objet et tutoriels vidéo.',
  styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{ properties: { page: { margin: { top: 850, bottom: 850, left: 850, right: 850 }, size: { width: 11906, height: 16838 } } }, children }],
});
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(OUT, buf); console.log('Écrit:', OUT, buf.length, 'octets'); }).catch(e => { console.error(e); process.exit(1); });
