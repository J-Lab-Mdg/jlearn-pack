/* ===== Bibliothèque partagée T7 — J-Learn ===== */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, HeadingLevel, PageBreak,
  ImageRun, InternalHyperlink, Bookmark, ShadingType, VerticalAlign
} = require('docx');

const C = {blue:'1F4E79', green:'1E7B34', wine:'8A1538', pink:'C2185B', red:'C00000',
           pale:'EAF2F8', paleGreen:'E9F5EC', salmon:'FCE4D6', rosepale:'FDE9E7', white:'FFFFFF'};

const noBorders = {top:{style:BorderStyle.NONE},bottom:{style:BorderStyle.NONE},
  left:{style:BorderStyle.NONE},right:{style:BorderStyle.NONE},
  insideHorizontal:{style:BorderStyle.NONE},insideVertical:{style:BorderStyle.NONE}};

/* ---------- Briques de base ---------- */
const tr = (text,opt={}) => new TextRun({text, font:'Georgia', size:opt.size?opt.size*2:22,
  bold:!!opt.bold, italics:!!opt.italics, color:opt.color||'222222'});

const p = text => new Paragraph({alignment:AlignmentType.JUSTIFIED,spacing:{after:110,line:276},children:[tr(text)]});

function title(text, lvl=1, anchor) {
  const opts = {size:lvl===1?15:13, bold:true, color:lvl===1?C.blue:C.pink};
  const run = tr(text.toUpperCase(), opts);
  const kids = anchor ? [new Bookmark({id:anchor, children:[run]})] : [run];
  return new Paragraph({spacing:{before:260,after:150},children:kids});
}

const cell = (text,opt={}) => new TableCell({
  width: opt.width?{size:opt.width,type:WidthType.PERCENTAGE}:undefined,
  columnSpan: opt.span, rowSpan: opt.rowSpan,
  shading: opt.fill?{type:ShadingType.CLEAR,fill:opt.fill}:undefined,
  verticalAlign: VerticalAlign.CENTER,
  children:[new Paragraph({alignment:opt.align||AlignmentType.LEFT,
    children:text.split('\n').flatMap((seg,i)=>i?[new TextRun({break:1}),tr(seg,opt)]:[tr(seg,opt)])})]
});

const table = (rows,widths) => new Table({
  width:{size:100,type:WidthType.PERCENTAGE},
  columnWidths: widths,
  borders:{top:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'},bottom:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'},
    left:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'},right:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'},
    insideHorizontal:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'},insideVertical:{style:BorderStyle.SINGLE,size:6,color:'9AB2C2'}},
  rows});

const ficheTitle = () => new Paragraph({spacing:{before:60,after:160},
  children:[tr('FICHE DE PRÉPARATION',{bold:true,size:16,color:C.blue})]});

/* ---------- Texte enrichi : mots-clés colorés + fractions oMath ---------- */
function rich(text,opt={}){
  const keys=/\b(partie entière|partie décimale|dixièmes|centièmes|millièmes|numérateur|dénominateur|produits en croix|fraction|fractions|équivalentes|équivalente|irréductible|PGCD|PPCM|décimal|décimaux|entier relatif|entiers relatifs|décimal relatif|décimaux relatifs|positif|positifs|négatif|négatifs|signe|origine|droite graduée|graduations|valeur absolue|abscisse|ordonnée|échelle|pourcentage|taux|rendement|puissance|exposant|base|distributivité|factorisation|facteur commun|expression littérale|variable|variables|équation|inconnue|substitution|réduction|développement|triangle rectangle|triangle isocèle|triangle équilatéral|triangle|isocèle|équilatéral|médiatrice|médiane|hauteur|bissectrice|angle|angles|polygones|polygone|périmètre|aire|aires|volume|capacité|contenance|conversion|fréquence|effectif|effectifs|moyenne|diagramme|probabilité|événement|comparaison|rang|virgule)\b/gi;
  const colors=['C00000','C2185B','E56B6F','1F4E79','1E7B34']; let out=[],last=0,k=0,m;
  while((m=keys.exec(text))){if(m.index>last)out.push(tr(text.slice(last,m.index),{italics:!!opt.italics}));out.push(tr(m[0],{bold:true,italics:!!opt.italics,color:colors[k++%colors.length]}));last=m.lastIndex;}
  if(last<text.length)out.push(tr(text.slice(last),{italics:!!opt.italics}));
  return out.length?out:[tr(text,{italics:!!opt.italics})];
}

const accentPara = text => new Paragraph({alignment:AlignmentType.JUSTIFIED,spacing:{after:110,line:276},
  shading:{type:ShadingType.CLEAR,fill:C.pale},children:rich(text)});

const examplePara = text => new Paragraph({alignment:AlignmentType.JUSTIFIED,spacing:{before:100,after:120},
  shading:{type:ShadingType.CLEAR,fill:'FCE4D6'},
  children:[tr('Exemple — ',{bold:true,italics:true,color:'C2185B'}),...rich(text,{italics:true,color:'9C3E4F'})]});

const errorPara = (error,fix) => new Paragraph({alignment:AlignmentType.JUSTIFIED,spacing:{before:90,after:120},
  shading:{type:ShadingType.CLEAR,fill:'FDE9E7'},
  children:[tr('Erreur à éviter — ',{bold:true,color:'C00000'}),tr(error+' ',{bold:true,color:'C00000'}),tr(fix,{italics:true,color:'C00000'})]});

const correction = (label,text) => new Paragraph({spacing:{after:70},
  children:[tr(label,{bold:true,color:C.wine}),...rich(text)]});

const page = () => new Paragraph({children:[new PageBreak()]});
const fig = (data,w,h) => new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:60},
  children:[new ImageRun({data,transformation:{width:w,height:h},type:'png'})]});
const figCaption = t => new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:140},
  children:[tr(t,{italics:true,size:18,color:'666666'})]});

/* ---------- Chargement des images ---------- */
const FIGDIR='assets/math-t7/figs', SCENEDIR='assets/math-t7/scenes';
const loadFig = name => fs.readFileSync(`${FIGDIR}/${name}.png`);
const loadScene = name => fs.readFileSync(`${SCENEDIR}/${name}.png`);

/* ---------- Génération SVG → PNG ---------- */
function svgPng(name, svg) {
  fs.mkdirSync(FIGDIR,{recursive:true});
  fs.writeFileSync(`${FIGDIR}/${name}.svg`,svg);
  require('child_process').execFileSync(process.execPath,['-e',`require('sharp')('${FIGDIR}/${name}.svg').png().toFile('${FIGDIR}/${name}.png')`]);
  return `${FIGDIR}/${name}.png`;
}
const svgHead = (w,h,t) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="white"/><text x="35" y="48" font-family="serif" font-size="30" font-weight="bold" fill="#1F4E79">${t}</text>`;

/* ---------- Fiche de préparation ---------- */
const prepHeads = () => ([
 new TableRow({tableHeader:true,children:[
   cell('Étapes',{rowSpan:2,fill:C.blue,color:C.white,bold:true,align:AlignmentType.CENTER}),
   cell('Déroulement de la leçon',{span:2,fill:C.blue,color:C.white,bold:true,align:AlignmentType.CENTER}),
   cell('Technique et stratégie',{rowSpan:2,fill:C.blue,color:C.white,bold:true,align:AlignmentType.CENTER}),
   cell('Support et matériel',{rowSpan:2,fill:C.blue,color:C.white,bold:true,align:AlignmentType.CENTER}),
   cell('Observation',{rowSpan:2,fill:C.blue,color:C.white,bold:true,align:AlignmentType.CENTER})]}),
 new TableRow({tableHeader:true,children:[
   cell('Enseignant',{fill:C.pale,bold:true}),
   cell('Apprenants',{fill:C.pale,bold:true})]})]);

function meta(s,u){
 return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
  new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : ${u.num} — ${u.title}\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${s.n} / ${u.plan.seances}`,{width:32,bold:true})]}),
  new TableRow({children:[cell(`Notion : ${s.notion}`,{span:2})]}),
  new TableRow({children:[cell(`Objectif : À la fin de la séance, l’apprenant est capable ${/^[aeiouyhàâéèêëîïôöùûü]/i.test(s.goal) ? 'd’' : 'de '}${s.goal}.`,{span:2})]})
 ]});
}
function prep(s){
 const rows=s.fiche.map((r,i)=>new TableRow({children:r.map((x,j)=>cell(x,{fill:i%2===1?C.paleGreen:undefined,bold:j===0,size:16}))}));
 return table([...prepHeads(),...rows],[960,2520,2280,1440,1680,720]);
}

/* ---------- Trace écrite ---------- */
function trace(s){
 const a=[];
 a.push(page());
 a.push(title(s.t.toUpperCase(),1));
 a.push(fig(s.scene,520,293));
 s.concept.forEach(t=>a.push(accentPara(t)));
 if(s.figs) s.figs.forEach(f=>{a.push(fig(f[0],f[1],f[2]));a.push(figCaption(f[3]));});
 if(s.method) a.push(title('Méthode',2),...s.method.map((x,i)=>p(`${i+1}. ${x}`)));
 a.push(examplePara(s.example+' '+s.worked));
 a.push(errorPara(s.error[0],s.error[1]));
 a.push(title('EXERCICES',1),p(`1. ${s.app[0]}`),p(`2. ${s.app[1]}`),p(`3. ${s.app[2]}`));
 a.push(title('CORRIGÉS',1),correction('1. ',s.ans[0]),correction('2. ',s.ans[1]),correction('3. ',s.ans[2]));
 return a;
}

/* ---------- Révision et examen ---------- */
function revisionSec(u){
 const r=u.revision;
 const rows=r.synth.map(x=>new TableRow({children:x.map(t=>cell(t))}));
 const a=[page(),title(`SÉANCE ${r.n} / ${u.plan.seances} — RÉVISION DE L’UNITÉ ${u.num}`,1,`${u.id}_rev`),
  title('Tableau de synthèse',2),
  table([new TableRow({children:[cell('Notion',{bold:true,fill:C.blue,color:C.white}),cell('À savoir',{bold:true,fill:C.blue,color:C.white}),cell('À savoir faire',{bold:true,fill:C.blue,color:C.white})]}),...rows],[3000,3300,3300]),
  title('Questions de révision',2),
  ...r.questions.map((t,i)=>p(`${i+1}. ${t}`)),
  title('Réponses attendues',2),
  ...r.reponses.map((t,i)=>correction(`${i+1}. `,t))];
 return a;
}
function examSec(u){
 const e=u.exam;
 return [page(),title(`SÉANCE ${e.n} / ${u.plan.seances} — SUJET D’EXAMEN — UNITÉ ${u.num}`,1,`${u.id}_ex`),
  p(e.bareme),
  ...e.exos.map((t,i)=>p(`Exercice ${i+1} — ${t}`)),
  title('CORRIGÉ ET BARÈME',2),
  ...e.corriges.map((t,i)=>correction(`Exercice ${i+1}. `,t))];
}
const link = (anchor,text) => new Paragraph({indent:{left:360},spacing:{after:60},
  children:[new InternalHyperlink({anchor,children:[tr(text,{color:C.blue})]})]});

/* ---------- Une unité complète ---------- */
function unitSection(u){
 const a=[];
 const seancesRevExe=u.plan.seances;
 a.push(page(),title(`UNITÉ ${u.num} — ${u.title.toUpperCase()}`,1,`${u.id}`),
  p(`Résultat d’apprentissage général : ${u.ragg}.`),
  p(`Valeurs à véhiculer : ${u.valeurs}.`),
  title('Tableau de bord',2),
  table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Leçons',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),
   new TableRow({children:[cell(`${seancesRevExe}`),cell(`${u.lecons.length}`),cell('1'),cell('1')]})],[2400,2400,2400,2400]),
  title('Sommaire de l’unité',2),
  ...u.lecons.map(l=>link(`${u.id}_s${l.n}`,`Séance ${l.n} — ${l.t}`)),
  link(`${u.id}_rev`,`Séance ${u.revision.n} — Révision de l’unité ${u.num}`),
  link(`${u.id}_ex`,`Séance ${u.exam.n} — Sujet d’examen`));
 for(const l of u.lecons){
  a.push(page(),title(`SÉANCE ${l.n} / ${u.plan.seances} — ${l.t.toUpperCase()}`,1,`${u.id}_s${l.n}`),ficheTitle(),meta(l,u),prep(l),...trace(l));
 }
 a.push(...revisionSec(u),...examSec(u));
 return a;
}

/* ---------- Document ---------- */
function buildDoc(units, opts){
 const children=[];
 children.push(
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:1600,after:240},
    children:[tr('MANUEL DE L’ENSEIGNANT',{bold:true,size:14,color:C.blue})]}),
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:200},
    children:[tr('MATHÉMATIQUES — CLASSE DE T7',{bold:true,size:20,color:C.blue})]}),
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:160,shading:{type:ShadingType.CLEAR,fill:C.pale}},
    children:[tr(opts.coverTitle,{bold:true,size:16,color:C.pink})]}),
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:480},
    children:[tr(opts.coverSub,{italics:true,size:12,color:'555555'})]}));
 if(opts.planAll){
  children.push(title('Progression annuelle du manuel',2),
   table([new TableRow({children:['Unité','Thème','Séances','Leçons'].map(t=>cell(t,{bold:true,fill:C.blue,color:C.white}))}),
    ...opts.planAll.map(r=>new TableRow({children:[cell(r.num),cell(r.title),cell(`${r.seances}`),cell(`${r.lecons}`)]}))],[1600,5200,1400,1400]));
  const ts=opts.planAll.reduce((a,r)=>a+r.seances,0), tl=opts.planAll.reduce((a,r)=>a+r.lecons,0);
  children.push(p(`Total : ${ts} séances, dont ${tl} leçons, 6 révisions et 6 examens. Chaque leçon suit la même organisation : fiche de préparation, trace écrite à recopier, méthode si nécessaire, exemple résolu, erreur à éviter, exercices et corrigés.`));
 }
 children.push(p(opts.header));
 for(const u of units) children.push(...unitSection(u));
 const doc=new Document({
  creator:'J-Learn', title:opts.coverTitle,
  sections:[{properties:{page:{margin:{top:1134,bottom:1134,left:1134,right:1134}}},children}]
 });
 return Packer.toBuffer(doc);
}

module.exports = { C, tr, rich, p, title, cell, table, ficheTitle, correction, accentPara,
  examplePara, errorPara, page, fig, figCaption, svgPng, svgHead, loadFig, loadScene, buildDoc };
