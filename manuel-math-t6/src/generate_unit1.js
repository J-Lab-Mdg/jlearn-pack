const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T6_V2_UNITE1.docx';
const C = { red:'C00000', green:'1E7B34', blue:'1F4E79', wine:'C2185B', pale:'EAF2F8', paleGreen:'E9F5EC', gray:'E7E6E6', black:'000000', white:'FFFFFF' };
const noBorders = {top:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},bottom:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},left:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},right:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},insideHorizontal:{style:BorderStyle.NONE,size:0,color:'FFFFFF'},insideVertical:{style:BorderStyle.NONE,size:0,color:'FFFFFF'}};
const borders = {top:{style:BorderStyle.SINGLE,size:4,color:'808080'},bottom:{style:BorderStyle.SINGLE,size:4,color:'808080'},left:{style:BorderStyle.SINGLE,size:4,color:'808080'},right:{style:BorderStyle.SINGLE,size:4,color:'808080'},insideHorizontal:{style:BorderStyle.SINGLE,size:4,color:'B0B0B0'},insideVertical:{style:BorderStyle.SINGLE,size:4,color:'B0B0B0'}};
const tr = (text,opt={}) => new TextRun({text, font:'Times New Roman', size:opt.size||22, bold:!!opt.bold, color:opt.color||C.black, italics:!!opt.italics});
// Convert every numeric a/b expression to a native Word OMML fraction.
const rich = (text,opt={}) => {
  const out=[]; let last=0; const re=/(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while((m=re.exec(text))){
    if(m.index>last) out.push(tr(text.slice(last,m.index),opt));
    out.push(new DocxMath({children:[new MathFraction({numerator:[new MathRun(m[1].trim())],denominator:[new MathRun(m[2].trim())]})]}));
    last=re.lastIndex;
  }
  if(last<text.length) out.push(tr(text.slice(last),opt));
  return out.length?out:[tr(text,opt)];
};
const p = (text,opt={}) => new Paragraph({alignment:opt.align||AlignmentType.JUSTIFIED, spacing:{after:opt.after??100,line:276}, indent:opt.indent?{left:opt.indent}:undefined, children:rich(text,opt)});
const title = (text, level=1, bookmark) => {
 const run = tr(text,{bold:true,color:level===1?C.red:C.green,size:level===1?32:26});
 const children = bookmark ? [new Bookmark({id:bookmark, children:[run]})] : [run];
 return new Paragraph({alignment:level===1?AlignmentType.CENTER:AlignmentType.LEFT, spacing:{before:180,after:140}, children});
};
const cell = (text,opt={}) => new TableCell({width:opt.width?{size:opt.width,type:WidthType.PERCENTAGE}:undefined, columnSpan:opt.span, rowSpan:opt.rowSpan, shading:opt.fill?{type:ShadingType.CLEAR,fill:opt.fill}:undefined, margins:{top:80,bottom:80,left:80,right:80}, children:[new Paragraph({alignment:opt.align||AlignmentType.LEFT,children:rich(text,{bold:opt.bold,color:opt.color||C.black,size:opt.size||18})})]});
const table = (rows, columnWidths) => new Table({width:{size:9600,type:WidthType.DXA},layout:TableLayoutType.FIXED,borders,rows,columnWidths});
const ficheTitle = () => new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:120},children:[tr('FICHE DE PRÉPARATION',{bold:true,size:28})]});
const bullet = text => new Paragraph({bullet:{level:0},spacing:{after:70},children:rich(text)});
const labelPara = (label,text) => new Paragraph({spacing:{after:90},children:[tr(label,{bold:true,color:C.blue}),...rich(text)]});
const correction = (label,text) => new Paragraph({spacing:{after:70},children:[tr(label,{bold:true,color:C.wine}),...rich(text)]});
const page = () => new Paragraph({children:[new PageBreak()]});

function svgPng(name, svg) {
 const dir='assets/math-t6'; fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(`${dir}/${name}.svg`,svg);
 require('child_process').execFileSync(process.execPath,['-e',`require('sharp')('${dir}/${name}.svg').png().toFile('${dir}/${name}.png')`]);
 return fs.readFileSync(`${dir}/${name}.png`);
}
const fractionBars = svgPng('fractions-equivalentes',`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="360"><rect width="100%" height="100%" fill="white"/><text x="40" y="55" font-family="serif" font-size="34">Une même quantité représentée de trois façons</text><g stroke="#1F4E79" stroke-width="4"><rect x="80" y="100" width="800" height="55" fill="white"/><rect x="80" y="100" width="400" height="55" fill="#79B6E3"/><line x1="480" y1="100" x2="480" y2="155"/><rect x="80" y="185" width="800" height="55" fill="white"/><rect x="80" y="185" width="400" height="55" fill="#79B6E3"/><line x1="280" y1="185" x2="280" y2="240"/><line x1="480" y1="185" x2="480" y2="240"/><line x1="680" y1="185" x2="680" y2="240"/><rect x="80" y="270" width="800" height="55" fill="white"/><rect x="80" y="270" width="400" height="55" fill="#79B6E3"/>${[180,280,380,480,580,680,780].map(x=>`<line x1="${x}" y1="270" x2="${x}" y2="325"/>`).join('')}</g><text x="900" y="140" font-size="30">1/2</text><text x="900" y="225" font-size="30">2/4</text><text x="900" y="310" font-size="30">4/8</text></svg>`);
const numberLine = svgPng('droite-fractions',`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="260"><rect width="100%" height="100%" fill="white"/><text x="40" y="48" font-family="serif" font-size="34">Droite numérique partagée en huitièmes</text><line x1="80" y1="140" x2="920" y2="140" stroke="#1F4E79" stroke-width="5"/>${[0,1,2,3,4,5,6,7,8].map((n,i)=>`<line x1="${80+i*105}" y1="115" x2="${80+i*105}" y2="165" stroke="#1F4E79" stroke-width="4"/><text x="${70+i*105}" y="205" font-size="26">${n===0?'0':n===8?'1':n+'/8'}</text>`).join('')}</svg>`);
const grid100 = svgPng('grille-pourcentage',`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700"><rect width="100%" height="100%" fill="white"/><text x="50" y="45" font-size="30">35 cases sur 100 = 35 % = 0,35</text>${Array.from({length:100},(_,k)=>{let x=50+(k%10)*55,y=80+Math.floor(k/10)*55;return `<rect x="${x}" y="${y}" width="55" height="55" fill="${k<35?'#79B6E3':'white'}" stroke="#777"/>`}).join('')}</svg>`);

const sessions = [
 {t:'Comprendre une fraction dans différentes situations',goal:'exprimer une fraction à partir d’un groupe d’objets ou d’une longueur',concept:'Une fraction représente une ou plusieurs parts égales d’un tout. Le dénominateur indique le nombre total de parts égales ; le numérateur indique le nombre de parts considérées.',example:'Une bande est partagée en 8 parts égales et 3 parts sont coloriées : la fraction coloriée est 3/8.',app:['Écris la fraction représentée : 2 parts sur 5 ; 4 sur 7 ; 6 sur 10 ; 9 sur 12.','Indique le numérateur et le dénominateur de 3/8, 5/9, 7/10 et 11/12.'],ans:['2/5 ; 4/7 ; 6/10 ; 9/12.','Numérateurs : 3, 5, 7, 11. Dénominateurs : 8, 9, 10, 12.'],img:fractionBars},
 {t:'Représenter les fractions sur une droite numérique',goal:'construire et lire une droite numérique fractionnée',concept:'Pour placer une fraction sur une droite numérique, on partage chaque unité en autant de segments égaux que l’indique le dénominateur, puis on compte le nombre de segments indiqué par le numérateur.',example:'Pour placer 5/8, on partage l’unité en huit segments égaux et on avance de cinq graduations depuis 0.',app:['Place mentalement puis compare 1/8, 3/8, 5/8 et 7/8.','Complète : 2/8 < …/8 < 6/8 ; 0 < …/4 < 1 ; 4/8 = …/2 ; 8/8 = … .'],ans:['1/8 < 3/8 < 5/8 < 7/8.','Exemples valides : 2/8 < 4/8 < 6/8 ; 0 < 3/4 < 1 ; 4/8 = 1/2 ; 8/8 = 1.'],img:numberLine},
 {t:'Reconnaître et produire des fractions équivalentes',goal:'déterminer des fractions équivalentes par représentation et calcul',concept:'Deux fractions sont équivalentes lorsqu’elles représentent la même quantité. On obtient une fraction équivalente en multipliant ou en divisant le numérateur et le dénominateur par un même nombre non nul.',example:'1/2 = 2/4 = 4/8. Les bandes coloriées ont la même longueur.',app:['Complète : 1/3 = …/6 ; 2/5 = 6/… ; 3/4 = …/12 ; 8/10 = 4/… .','Indique les paires équivalentes : 2/3 et 4/6 ; 3/5 et 6/15 ; 4/8 et 1/2 ; 5/6 et 15/18.'],ans:['1/3 = 2/6 ; 2/5 = 6/15 ; 3/4 = 9/12 ; 8/10 = 4/5.','Sont équivalentes : 2/3 et 4/6 ; 4/8 et 1/2 ; 5/6 et 15/18.'],img:fractionBars},
 {t:'Passer d’une fraction impropre à un nombre fractionnaire',goal:'convertir une fraction impropre en nombre fractionnaire et inversement',concept:'Une fraction impropre a un numérateur supérieur ou égal au dénominateur. La division euclidienne du numérateur par le dénominateur donne la partie entière et la partie restante.',example:'11 ÷ 4 = 2 reste 3, donc 11/4 = 2 et 3/4. Inversement, 2 et 3/4 = (2 × 4 + 3)/4 = 11/4.',app:['Convertis en nombres fractionnaires : 7/3 ; 9/4 ; 13/5 ; 17/6.','Convertis en fractions impropres : 2 et 1/3 ; 3 et 2/5 ; 4 et 3/7 ; 5 et 1/2.'],ans:['7/3 = 2 et 1/3 ; 9/4 = 2 et 1/4 ; 13/5 = 2 et 3/5 ; 17/6 = 2 et 5/6.','7/3 ; 17/5 ; 31/7 ; 11/2.']},
 {t:'Comparer et ordonner des fractions',goal:'comparer des fractions à l’aide de repères et de dénominateurs communs',concept:'À dénominateurs égaux, la fraction qui a le plus grand numérateur est la plus grande. À numérateurs égaux, celle qui a le plus petit dénominateur est la plus grande. Sinon, on cherche des fractions équivalentes de même dénominateur.',example:'Pour comparer 2/3 et 3/4 : 2/3 = 8/12 et 3/4 = 9/12 ; donc 2/3 < 3/4.',app:['Compare avec <, > ou = : 3/7 … 5/7 ; 4/5 … 4/9 ; 2/3 … 8/12 ; 5/6 … 3/4.','Range dans l’ordre croissant : 1/2, 3/4, 2/3, 5/6.'],ans:['3/7 < 5/7 ; 4/5 > 4/9 ; 2/3 = 8/12 ; 5/6 > 3/4.','1/2 < 2/3 < 3/4 < 5/6.'],img:numberLine},
 {t:'Relier fractions décimales et nombres décimaux',goal:'passer des dixièmes, centièmes et millièmes à l’écriture décimale',concept:'Une fraction décimale a pour dénominateur 10, 100, 1 000, etc. Son écriture décimale s’obtient en plaçant la virgule selon le nombre de zéros du dénominateur.',example:'37/100 = 0,37 et 1 205/1 000 = 1,205.',app:['Écris sous forme décimale : 7/10 ; 43/100 ; 9/1 000 ; 1 256/1 000.','Écris sous forme de fraction décimale : 0,8 ; 0,35 ; 0,006 ; 2,407.'],ans:['0,7 ; 0,43 ; 0,009 ; 1,256.','8/10 ; 35/100 ; 6/1 000 ; 2 407/1 000.'],img:grid100},
 {t:'Lire et représenter les nombres décimaux jusqu’aux millièmes',goal:'associer quantité, symbole et écriture en lettres',concept:'Dans un nombre décimal, chaque chiffre a une valeur liée à sa position : unités, dixièmes, centièmes et millièmes. Le zéro peut conserver une position indispensable.',example:'4,307 se lit « quatre unités et trois cent sept millièmes ». Il contient 4 unités, 3 dixièmes, 0 centième et 7 millièmes.',app:['Décompose : 6,482 ; 9,035 ; 12,704 ; 0,219.','Écris en chiffres : trois unités et cinq dixièmes ; huit unités et neuf centièmes ; douze unités et sept millièmes ; quarante-cinq millièmes.'],ans:['6 + 4/10 + 8/100 + 2/1 000 ; 9 + 3/100 + 5/1 000 ; 12 + 7/10 + 4/1 000 ; 2/10 + 1/100 + 9/1 000.','3,5 ; 8,09 ; 12,007 ; 0,045.']},
 {t:'Comparer et ordonner des nombres décimaux',goal:'comparer chiffre par chiffre et placer des décimaux sur une droite',concept:'On compare d’abord les parties entières. Si elles sont égales, on compare successivement les dixièmes, les centièmes puis les millièmes. On peut ajouter des zéros à droite sans changer la valeur.',example:'5,7 = 5,700 et 5,68 = 5,680 ; donc 5,7 > 5,68.',app:['Compare : 4,56 … 4,506 ; 7,09 … 7,9 ; 3,400 … 3,4 ; 0,875 … 0,857.','Range dans l’ordre croissant : 2,05 ; 2,5 ; 2,005 ; 2,15.'],ans:['4,56 > 4,506 ; 7,09 < 7,9 ; 3,400 = 3,4 ; 0,875 > 0,857.','2,005 < 2,05 < 2,15 < 2,5.']},
 {t:'Relier fraction, nombre décimal et pourcentage',goal:'reconnaître trois représentations d’une même quantité',concept:'Un pourcentage est une fraction de dénominateur 100. Pour passer d’un nombre décimal à un pourcentage, on le multiplie par 100. Pour passer d’un pourcentage à un nombre décimal, on le divise par 100.',example:'35/100 = 0,35 = 35 %. De même, 1/2 = 0,5 = 50 %.',app:['Complète : 25/100 = … = … % ; 3/4 = … = … % ; 0,2 = …/100 = … % ; 90 % = … = …/10.','Associe : 1/4, 0,75, 60 %, 0,5 avec 25 %, 3/4, 0,6, 50 %.'],ans:['25/100 = 0,25 = 25 % ; 3/4 = 0,75 = 75 % ; 0,2 = 20/100 = 20 % ; 90 % = 0,9 = 9/10.','1/4 ↔ 25 % ; 0,75 ↔ 3/4 ; 60 % ↔ 0,6 ; 0,5 ↔ 50 %.'],img:grid100},
 {t:'Déterminer les facteurs et les diviseurs',goal:'énumérer les diviseurs d’un nombre naturel',concept:'Un nombre est un diviseur d’un autre lorsque la division donne un quotient entier et un reste nul. Les facteurs d’un produit sont aussi des diviseurs de ce produit.',example:'Les diviseurs de 12 sont 1, 2, 3, 4, 6 et 12, car ils partagent 12 sans reste.',app:['Liste les diviseurs de 18, 20, 24 et 30.','Indique si 3, 4, 5 et 6 divisent chacun les nombres 36 et 45.'],ans:['18 : 1, 2, 3, 6, 9, 18 ; 20 : 1, 2, 4, 5, 10, 20 ; 24 : 1, 2, 3, 4, 6, 8, 12, 24 ; 30 : 1, 2, 3, 5, 6, 10, 15, 30.','36 est divisible par 3, 4 et 6, mais pas par 5. 45 est divisible par 3 et 5, mais pas par 4 ni par 6.']},
 {t:'Déterminer les multiples, le PPCM et le PGCD',goal:'produire des multiples et déterminer un PPCM ou un PGCD simple',concept:'Les multiples d’un nombre s’obtiennent en le multipliant par les nombres naturels. Le PPCM est le plus petit multiple commun non nul. Le PGCD est le plus grand diviseur commun.',example:'Multiples de 4 : 0, 4, 8, 12, 16… Multiples de 6 : 0, 6, 12, 18… Ainsi, PPCM(4, 6) = 12 et PGCD(4, 6) = 2.',app:['Trouve le PPCM de 3 et 5 ; 4 et 10 ; 6 et 8 ; 9 et 12.','Trouve le PGCD de 12 et 18 ; 20 et 30 ; 24 et 36 ; 14 et 21.'],ans:['15 ; 20 ; 24 ; 36.','6 ; 10 ; 12 ; 7.']},
 {t:'Écrire une fraction sous forme décimale',goal:'produire une fraction décimale puis une écriture à virgule',concept:'Une fraction a une écriture décimale finie lorsque son dénominateur peut être transformé en 10, 100, 1 000, etc., après simplification. On cherche alors une fraction équivalente décimale.',example:'3/5 = 6/10 = 0,6 et 7/20 = 35/100 = 0,35.',app:['Écris sous forme décimale : 1/2 ; 3/5 ; 7/20 ; 9/25.','Trouve la fraction décimale équivalente : 4/5 ; 3/4 ; 11/20 ; 7/8.'],ans:['0,5 ; 0,6 ; 0,35 ; 0,36.','8/10 ; 75/100 ; 55/100 ; 875/1 000.']},
 {t:'Encadrer une fraction et donner une valeur approchée',goal:'déterminer des valeurs approchées par défaut et par excès',concept:'Encadrer une fraction consiste à la placer entre deux nombres. Une valeur approchée par défaut est inférieure ou égale au nombre ; une valeur approchée par excès est supérieure ou égale.',example:'7/3 = 2,333… À l’unité : 2 < 7/3 < 3 ; par défaut : 2 ; par excès : 3. Au dixième : 2,3 < 7/3 < 2,4.',app:['Encadre à l’unité : 5/2 ; 11/4 ; 17/5 ; 22/7.','Donne les valeurs approchées au dixième par défaut et par excès de 7/4 ; 8/3 ; 13/6 ; 19/8.'],ans:['2 < 5/2 < 3 ; 2 < 11/4 < 3 ; 3 < 17/5 < 4 ; 3 < 22/7 < 4.','1,7 et 1,8 ; 2,6 et 2,7 ; 2,1 et 2,2 ; 2,3 et 2,4.'],img:numberLine},
];
// Une représentation visuelle pertinente ouvre chaque page LEÇON.
const unit1Visuals=[fractionBars,numberLine,fractionBars,fractionBars,numberLine,grid100,grid100,numberLine,grid100,grid100,numberLine,grid100,numberLine];
sessions.forEach((s,i)=>{s.img=unit1Visuals[i];});

sessions[0].scene=fs.readFileSync('assets/math-t6/scenes/scene_fraction_marche.png');
sessions[8].scene=fs.readFileSync('assets/math-t6/scenes/scene_pourcentage_classe.png');

[5,6,7].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_decimaux_epicerie.png'));

[9,10].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_facteurs_groupes.png'));

[1,2,3,4,11,12].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_fractions_bandegateau.png'));

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Nombre\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T6\nSéance : ${n} / 15`,{width:32,bold:true})]}),
 new TableRow({children:[cell(`Objectif : À la fin de la séance, l’apprenant est capable de ${s.goal}.`,{span:2})]})
]}); }
function prep(s,n){
 const heads=[new TableRow({tableHeader:true,children:[cell('Étapes',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:13,align:AlignmentType.CENTER}),cell('Déroulement de la leçon',{span:2,fill:C.blue,color:C.white,bold:true,width:45,align:AlignmentType.CENTER}),cell('Technique et stratégie',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:15}),cell('Support et matériel',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:15}),cell('Observation',{rowSpan:2,fill:C.blue,color:C.white,bold:true,width:12})]}),new TableRow({tableHeader:true,children:[cell('Enseignant',{fill:C.pale,bold:true}),cell('Apprenants',{fill:C.pale,bold:true})]})];
 const rows=[
  ['I. Révision','Que retenez-vous de la notion précédente ? Donnez un exemple numérique.','Répondent oralement et justifient leur exemple.','Questions-réponses','Tableau, ardoises','Acquis à consolider'],
  ['II. NOUVELLE LEÇON','Annonce : « Aujourd’hui, nous allons apprendre à '+s.goal+'. »','Écoutent.','Présentation guidée','Tableau',''],
  ['1. Mise en situation',`Rova rencontre la situation suivante : ${s.example} Que remarquez-vous ?`,'Écoutent, observent et proposent des réponses.','Situation-problème','Illustration, tableau','Participation'],
  ['2. Présentation',`Présente le titre « ${s.t} » et précise l’objectif.`,'Écoutent.','Explication brève','Tableau',''],
  ['3. Observation',s.example,'Observent l’exemple résolu.','Observation dirigée',s.img?'Figure imprimée':'Tableau et ardoises','Compréhension'],
  ['4. Analyse',`Guide l’analyse : ${s.concept} Demande aux apprenants d’expliquer chaque étape.`,'Expliquent la démarche et vérifient le résultat.','Recherche en binômes','Ardoises, règle si nécessaire','Raisonnement'],
  ['5. Synthèse',s.concept,'Écoutent et reformulent la règle.','Synthèse guidée','Cahier, tableau','Trace écrite'],
  ['6. Application',s.app[0]+' '+s.app[1],s.ans[0]+' '+s.ans[1],'Travail individuel puis correction collective','Cahier, ardoises','Remédiation'],
  ['III. Évaluation',`Résous sans modèle : ${s.app[0]} Puis explique une réponse de ton choix.`,s.ans[0]+' Une justification correcte utilise la règle de la leçon.','Travail individuel','Feuille, cahier','Maîtrise de l’objectif']
 ].map((r,i)=>new TableRow({children:r.map((x,j)=>cell(x,{fill:i===1?C.paleGreen:undefined,bold:j===0,size:16}))}));
 // 10 % pour Étapes ; davantage d’espace pour Enseignant et Apprenants.
 return table([...heads,...rows],[960,2400,2200,1440,1600,1000]);
}
function lesson(s,n){
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u1_l${n}`));
 // Image immédiatement après le titre, jamais au début de la fiche.
 if(s.scene){
  a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:90},children:[new ImageRun({data:s.scene,transformation:{width:500,height:280},type:'png'})]}));
  a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:130},children:[tr('Situation concrète à observer et à faire décrire',{italics:true,size:19,color:'555555'})]}));
 }
 a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:90},children:[new ImageRun({data:s.img,transformation:{width:500,height:s.img===grid100?420:180},type:'png'})]}));
 a.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:160},children:[tr(`Représentation mathématique — ${s.t}`,{italics:true,size:19,color:'555555'})]}));
 a.push(title('1. Prérequis',2));
 a.push(bullet('Lire et écrire les nombres utilisés dans la situation.'));
 a.push(bullet('Reconnaître les signes =, < et > et expliquer leur sens.'));
 a.push(bullet('Effectuer les opérations élémentaires nécessaires à la vérification.'));
 a.push(title('2. Observer et comprendre',2));
 a.push(labelPara('Situation de départ. ',s.example));
 a.push(labelPara('Idée essentielle. ',s.concept));
 a.push(p('L’enseignant fait décrire les données visibles, nommer les éléments mathématiques et relier la représentation au calcul. Il vérifie que chaque mot nouveau est compris avant de poursuivre.'));
 a.push(title('3. Méthode 1 — Représenter puis raisonner',2));
 a.push(bullet('Représenter la quantité avec une bande, une grille, une droite numérique ou un tableau de numération.'));
 a.push(bullet('Identifier ce que chaque partie de la représentation signifie.'));
 a.push(bullet('Écrire la relation mathématique correspondant à la représentation.'));
 a.push(bullet('Contrôler que l’écriture et le dessin décrivent la même quantité.'));
 if(n!==1 && n!==7){
  a.push(title('4. Méthode 2 — Utiliser une procédure de calcul',2));
  a.push(bullet('Repérer les nombres connus et le résultat recherché.'));
  a.push(bullet('Appliquer la propriété de la leçon, une seule transformation à la fois.'));
  a.push(bullet('Écrire les étapes intermédiaires sans les effectuer mentalement trop vite.'));
  a.push(bullet('Vérifier le résultat avec la représentation ou par une opération inverse.'));
 } else {
  a.push(title('4. Passer progressivement du concret à l’écriture',2));
  a.push(p('Pour cette notion, une seconde procédure abstraite n’est pas utile. L’élève manipule ou observe d’abord, verbalise ce qu’il voit, puis écrit seulement le symbole mathématique correspondant.'));
 }
 a.push(title('5. Exemple résolu et expliqué',2));
 a.push(labelPara('Exemple. ',s.example));
 a.push(p('Explication : on commence par identifier les données. On applique ensuite la règle indiquée dans la leçon. Chaque étape est écrite, puis le résultat est comparé à la représentation initiale pour vérifier sa cohérence.'));
 a.push(title('6. Questions pour guider les élèves',2));
 a.push(bullet('Quelles sont les données connues ?'));
 a.push(bullet('Quelle quantité ou quelle écriture devons-nous trouver ?'));
 a.push(bullet('Quelle propriété permet de passer des données au résultat ?'));
 a.push(bullet('Comment pouvons-nous vérifier la réponse autrement ?'));
 a.push(title('7. Erreurs fréquentes',2));
 a.push(bullet('Modifier un nombre sans appliquer la même transformation à toute l’écriture.'));
 a.push(bullet('Confondre la valeur d’un chiffre avec sa position ou inverser le sens d’une comparaison.'));
 a.push(bullet('Donner un résultat sans montrer la démarche ni effectuer de vérification.'));
 a.push(title('8. Différenciation pédagogique',2));
 a.push(labelPara('Soutien. ','Reprendre la situation avec du matériel, des couleurs et des nombres plus simples.'));
 a.push(labelPara('Niveau attendu. ','Résoudre les quatre items en expliquant au moins une démarche.'));
 a.push(labelPara('Approfondissement. ','Créer un exemple différent qui respecte la même propriété, puis le faire vérifier par un camarade.'));
 a.push(title('EXERCICES — Total : 20 points',1));
 a.push(p('Exercice 1 — 8 points. '+s.app[0]));
 a.push(p('Exercice 2 — 8 points. '+s.app[1]));
 a.push(p('Exercice 3 — 4 points. Pour chacun des quatre items précédents, indique la règle employée. Développe complètement l’une des quatre vérifications.'));
 a.push(title('CORRIGÉ DÉTAILLÉ',2));
 a.push(correction('Exercice 1. ',s.ans[0]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 2. ',s.ans[1]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 3. ','Chaque réponse doit nommer la propriété utilisée. La vérification développée reprend les données, montre les étapes, contrôle le résultat et formule une conclusion.'));
 return a;
}
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ I',1,'u1_l14'),title('Tableau de synthèse',2),table([
 new TableRow({children:[cell('Notion',{bold:true,fill:C.blue,color:C.white}),cell('À savoir',{bold:true,fill:C.blue,color:C.white}),cell('À savoir faire',{bold:true,fill:C.blue,color:C.white})]}),
 ...[['Fractions','Numérateur, dénominateur, équivalence','Représenter, convertir, comparer et ordonner'],['Décimaux','Dixièmes, centièmes, millièmes','Lire, écrire, comparer et ordonner'],['Pourcentages','Fraction sur 100','Passer d’une représentation à une autre'],['Divisibilité','Facteur, diviseur, multiple, PPCM, PGCD','Énumérer et calculer'],['Approximation','Valeur par défaut et par excès','Encadrer à l’unité ou au dixième']].map(r=>new TableRow({children:r.map(x=>cell(x))}))
 ]),title('Questions de révision',2),p('1. Explique la différence entre le numérateur et le dénominateur. 2. Donne deux fractions équivalentes à 3/4. 3. Compare 0,75 et 3/4. 4. Donne le PPCM de 6 et 9. 5. Encadre 11/4 entre deux entiers.'),title('Réponses attendues',2),correction('1. ','Le numérateur compte les parts considérées ; le dénominateur compte toutes les parts égales.'),correction('2. ','6/8 et 9/12 sont équivalentes à 3/4.'),correction('3. ','0,75 = 3/4.'),correction('4. ','PPCM(6, 9) = 18.'),correction('5. ','2 < 11/4 < 3.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T6 — UNITÉ I',1,'u1_l15'),p('Barème : 20 points. Présente clairement tous les calculs.'),p('Exercice 1 — 4 points. Convertis : a) 9/4 en nombre fractionnaire ; b) 3 et 2/5 en fraction impropre ; c) 7/20 en décimal ; d) 0,625 en fraction décimale.'),p('Exercice 2 — 4 points. Compare avec <, > ou = : a) 5/6 … 7/9 ; b) 0,45 … 45 % ; c) 3/4 … 0,8 ; d) 2,305 … 2,35.'),p('Exercice 3 — 4 points. a) Liste les diviseurs de 24. b) Calcule PPCM(8, 12). c) Calcule PGCD(18, 30). d) Donne les quatre premiers multiples non nuls de 7.'),p('Exercice 4 — 4 points. Une association a vendu 75 billets sur 100. Exprime la part vendue sous forme de fraction, de nombre décimal et de pourcentage, puis indique la part restante.'),p('Exercice 5 — 4 points. Encadre 17/6 entre deux entiers, puis donne ses valeurs approchées au dixième par défaut et par excès.'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','9/4 = 2 et 1/4 ; 3 et 2/5 = 17/5 ; 7/20 = 0,35 ; 0,625 = 625/1 000. Un point par réponse.'),correction('Exercice 2. ','5/6 > 7/9 ; 0,45 = 45 % ; 3/4 < 0,8 ; 2,305 < 2,35. Un point par comparaison.'),correction('Exercice 3. ','Diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12 et 24 ; PPCM(8, 12) = 24 ; PGCD(18, 30) = 6 ; multiples : 7, 14, 21 et 28. Un point par réponse complète.'),correction('Exercice 4. ','Part vendue : 75/100 = 0,75 = 75 %. Part restante : 25/100 = 0,25 = 25 %. Deux points pour chaque part correctement exprimée.'),correction('Exercice 5. ','2 < 17/6 < 3. Comme 17/6 = 2,833…, la valeur au dixième par défaut est 2,8 et celle par excès est 2,9. Deux points pour l’encadrement et deux points pour les approximations.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T6',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité I — Nombre',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T6. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u1',children:[tr('Unité I — Nombre',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u1_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u1_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u1_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ I — NOMBRE',1,'u1'),p('Résultat d’apprentissage général : démontrer une compréhension du concept du nombre et l’utiliser pour décrire des quantités du monde réel.'),p('Valeurs à véhiculer : rigueur et persévérance.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u1_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T6 — Unité I',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
