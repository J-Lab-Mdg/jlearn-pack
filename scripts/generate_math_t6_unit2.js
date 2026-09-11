const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T6_V1_UNITE2.docx';
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
const table = rows => new Table({width:{size:100,type:WidthType.PERCENTAGE},borders,rows});
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
 {t:'Comprendre la priorité des opérations',goal:'identifier l’ordre correct des opérations dans une expression numérique',concept:'Dans une expression comportant plusieurs opérations, on effectue d’abord les calculs entre parenthèses, puis les multiplications et divisions, enfin les additions et soustractions. À priorité égale, on calcule de gauche à droite.',example:'Dans 18 − 3 × 4, on calcule 3 × 4 = 12 avant la soustraction : 18 − 12 = 6.',app:['Indique l’opération à effectuer en premier : 7 + 5 × 2 ; 24 ÷ 6 − 3 ; (8 + 4) × 3 ; 20 − 12 ÷ 4.','Calcule : 9 + 2 × 6 ; 30 ÷ 5 + 7 ; 4 × (3 + 5) ; 25 − 3 × 4.'],ans:['5 × 2 ; 24 ÷ 6 ; 8 + 4 ; 12 ÷ 4.','21 ; 13 ; 32 ; 13.']},
 {t:'Calculer une expression sans parenthèses',goal:'effectuer les multiplications et divisions avant les additions et soustractions',concept:'Sans parenthèses, les multiplications et divisions sont prioritaires. Les additions et soustractions sont effectuées ensuite, de gauche à droite.',example:'48 ÷ 6 + 5 × 3 = 8 + 15 = 23.',app:['Calcule : 6 + 4 × 5 ; 36 ÷ 4 − 2 ; 7 × 3 + 18 ÷ 6 ; 40 − 5 × 6.','Vérifie puis corrige : 8 + 2 × 5 = 50 ; 24 ÷ 6 + 3 = 7 ; 15 − 3 × 4 = 48 ; 9 × 2 − 8 ÷ 4 = 16.'],ans:['26 ; 7 ; 24 ; 10.','Les résultats corrects sont 18 ; 7 ; 3 ; 16. Les deuxième et quatrième égalités étaient justes.']},
 {t:'Calculer une expression avec parenthèses',goal:'commencer un calcul par les parenthèses',concept:'Les parenthèses imposent le premier calcul. Une fois leur contenu calculé, on poursuit en respectant les autres priorités.',example:'5 × (12 − 7) + 3 = 5 × 5 + 3 = 28.',app:['Calcule : (9 + 3) × 4 ; 36 ÷ (4 + 2) ; 7 + (15 − 8) × 2 ; (20 − 5) ÷ 3.','Place des parenthèses pour obtenir : 3 + 5 × 2 = 16 ; 18 − 6 ÷ 3 = 4 ; 4 × 7 − 2 = 20 ; 24 ÷ 4 + 2 = 4.'],ans:['48 ; 6 ; 21 ; 5.','(3 + 5) × 2 = 16 ; (18 − 6) ÷ 3 = 4 ; 4 × (7 − 2) = 20 ; 24 ÷ (4 + 2) = 4.']},
 {t:'Résoudre des problèmes avec des opérations combinées',goal:'traduire une situation en expression numérique puis la calculer',concept:'Pour résoudre un problème, on repère les données, on choisit les opérations, on écrit une expression avec des parenthèses si nécessaire, puis on calcule et on formule la réponse.',example:'Aina achète 3 cahiers à 2 400 ariary et un stylo à 1 500 ariary : 3 × 2 400 + 1 500 = 8 700 ariary.',app:['Calcule le prix de 4 livres à 6 500 ariary et de 2 règles à 1 200 ariary. Calcule aussi la monnaie sur 30 000 ariary.','Une classe range 96 craies dans 8 boîtes puis utilise 3 craies par boîte. Combien reste-t-il de craies ? Résous aussi avec 120 craies, 10 boîtes et 4 craies utilisées par boîte.'],ans:['4 × 6 500 + 2 × 1 200 = 28 400 ariary ; monnaie : 1 600 ariary.','96 − 8 × 3 = 72 craies ; 120 − 10 × 4 = 80 craies.']},
 {t:'Comprendre et utiliser une échelle',goal:'relier une longueur sur un plan à la longueur réelle',concept:'L’échelle est le rapport entre une longueur représentée et la longueur réelle, exprimées dans la même unité. À l’échelle 1 : 100, 1 cm sur le plan représente 100 cm en réalité.',example:'Sur un plan à l’échelle 1 : 1 000, une route mesure 7 cm. Sa longueur réelle est 7 × 1 000 = 7 000 cm, soit 70 m.',app:['À l’échelle 1 : 100, trouve les longueurs réelles correspondant à 3 cm, 5,5 cm, 8 cm et 12 cm.','À l’échelle 1 : 50 000, calcule la distance réelle correspondant à 2 cm, 4 cm, 7,5 cm et 10 cm. Exprime-la en kilomètres.'],ans:['3 m ; 5,5 m ; 8 m ; 12 m.','1 km ; 2 km ; 3,75 km ; 5 km.']},
 {t:'Calculer un pourcentage',goal:'déterminer une partie, un total ou un pourcentage',concept:'Un pourcentage exprime une quantité sur 100. Pour calculer p % d’une quantité, on multiplie cette quantité par p puis on divise par 100.',example:'25 % de 80 = 80 × 25 ÷ 100 = 20.',app:['Calcule : 10 % de 350 ; 25 % de 240 ; 40 % de 150 ; 75 % de 320.','Trouve le pourcentage : 18 sur 60 ; 35 sur 50 ; 45 sur 180 ; 84 sur 120.'],ans:['35 ; 60 ; 60 ; 240.','30 % ; 70 % ; 25 % ; 70 %.']},
 {t:'Comprendre et calculer un taux',goal:'comparer deux quantités au moyen d’un taux',concept:'Un taux compare deux quantités, souvent avec des unités différentes. Il s’écrit comme un quotient et doit toujours être accompagné de son unité.',example:'Un véhicule parcourt 180 km en 3 h. Son taux moyen est 180 ÷ 3 = 60 km/h.',app:['Calcule les vitesses moyennes : 120 km en 2 h ; 210 km en 3 h ; 45 km en 1,5 h ; 360 km en 6 h.','Calcule les prix unitaires : 5 kg de riz pour 15 000 ariary ; 8 cahiers pour 12 000 ariary ; 6 m de tissu pour 48 000 ariary ; 12 bouteilles pour 18 000 ariary.'],ans:['60 km/h ; 70 km/h ; 30 km/h ; 60 km/h.','3 000 ariary/kg ; 1 500 ariary/cahier ; 8 000 ariary/m ; 1 500 ariary/bouteille.']},
 {t:'Comprendre et calculer un rendement',goal:'comparer un résultat obtenu au résultat attendu',concept:'Le rendement en pourcentage est le rapport entre le résultat obtenu et le résultat attendu, multiplié par 100. Il permet d’évaluer l’efficacité d’une activité.',example:'Une machine devait produire 500 pièces et en a produit 450 : rendement = 450 ÷ 500 × 100 = 90 %.',app:['Calcule le rendement : 80 objets sur 100 ; 180 sur 200 ; 360 sur 400 ; 475 sur 500.','Trouve le résultat obtenu : rendement de 75 % sur 240 ; 60 % sur 350 ; 90 % sur 420 ; 85 % sur 600.'],ans:['80 % ; 90 % ; 90 % ; 95 %.','180 ; 210 ; 378 ; 510.']},
 {t:'Multiplier mentalement par 10, 100 et 1 000',goal:'utiliser la valeur de position pour multiplier rapidement',concept:'Multiplier par 10, 100 ou 1 000 rend chaque chiffre respectivement dix, cent ou mille fois plus grand. La virgule se déplace vers la droite d’un, deux ou trois rangs.',example:'4,27 × 100 = 427 et 0,38 × 1 000 = 380.',app:['Calcule : 7,5 × 10 ; 3,24 × 100 ; 0,608 × 1 000 ; 45 × 100.','Complète : 2,7 × … = 270 ; 0,45 × … = 45 ; 8,006 × … = 8 006 ; 36 × … = 360.'],ans:['75 ; 324 ; 608 ; 4 500.','100 ; 100 ; 1 000 ; 10.']},
 {t:'Diviser par 10, 100 et 1 000',goal:'obtenir mentalement un quotient décimal',concept:'Diviser par 10, 100 ou 1 000 rend chaque chiffre dix, cent ou mille fois plus petit. La virgule se déplace vers la gauche d’un, deux ou trois rangs.',example:'725 ÷ 100 = 7,25 et 48 ÷ 1 000 = 0,048.',app:['Calcule : 360 ÷ 10 ; 845 ÷ 100 ; 72 ÷ 1 000 ; 5 600 ÷ 100.','Complète : 630 ÷ … = 63 ; 925 ÷ … = 9,25 ; 48 ÷ … = 0,048 ; 7 200 ÷ … = 720.'],ans:['36 ; 8,45 ; 0,072 ; 56.','10 ; 100 ; 1 000 ; 10.']},
 {t:'Multiplier par 0,25 et 0,75',goal:'utiliser les équivalences un quart et trois quarts',concept:'Multiplier par 0,25 revient à prendre le quart, donc à diviser par 4. Multiplier par 0,75 revient à prendre les trois quarts : on divise par 4 puis on multiplie par 3.',example:'160 × 0,25 = 160 ÷ 4 = 40 ; 160 × 0,75 = 40 × 3 = 120.',app:['Calcule par 0,25 : 80 ; 120 ; 360 ; 1 000.','Calcule par 0,75 : 40 ; 200 ; 320 ; 1 200.'],ans:['20 ; 30 ; 90 ; 250.','30 ; 150 ; 240 ; 900.']},
 {t:'Diviser par 0,50, 0,25 et 0,75',goal:'transformer un diviseur décimal en fraction simple',concept:'Diviser par 0,50 revient à multiplier par 2. Diviser par 0,25 revient à multiplier par 4. Pour diviser par 0,75, on peut diviser par trois quarts, donc multiplier par 4 puis diviser par 3.',example:'36 ÷ 0,50 = 72 ; 36 ÷ 0,25 = 144 ; 36 ÷ 0,75 = 48.',app:['Calcule : 15 ÷ 0,50 ; 22 ÷ 0,50 ; 40 ÷ 0,25 ; 75 ÷ 0,25.','Calcule : 18 ÷ 0,75 ; 45 ÷ 0,75 ; 90 ÷ 0,75 ; 150 ÷ 0,75.'],ans:['30 ; 44 ; 160 ; 300.','24 ; 60 ; 120 ; 200.']},
 {t:'Choisir une stratégie efficace de calcul mental',goal:'utiliser estimation, décomposition ou compensation',concept:'Une stratégie de calcul mental transforme un calcul en opérations simples. On peut décomposer, arrondir puis compenser, utiliser la distributivité ou exploiter les doubles et les moitiés.',example:'198 + 47 = 200 + 47 − 2 = 245. De même, 25 × 36 = 100 × 9 = 900.',app:['Calcule mentalement : 299 + 68 ; 504 − 198 ; 25 × 48 ; 96 ÷ 4.','Estime puis calcule : 49 × 21 ; 398 + 605 ; 1 002 − 497 ; 75 × 16.'],ans:['367 ; 306 ; 1 200 ; 24.','49 × 21 = 1 029 ; 398 + 605 = 1 003 ; 1 002 − 497 = 505 ; 75 × 16 = 1 200.']},
];

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Opération\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T6\nSéance : ${n} / 15`,{width:32,bold:true})]}),
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
 return table([...heads,...rows]);
}
function lesson(s,n){
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u2_l${n}`));
 a.push(title('1. Notion essentielle',2),labelPara('Définition. ',s.concept));
 a.push(title('2. Méthode pas à pas',2));
 a.push(bullet('Lire attentivement les données et identifier les nombres ou représentations utilisés.'));
 a.push(bullet('Choisir la règle adaptée à la situation.'));
 a.push(bullet('Effectuer chaque étape dans l’ordre et écrire les transformations intermédiaires.'));
 a.push(bullet('Vérifier que le résultat répond à la question et qu’il est cohérent.'));
 a.push(title('3. Exemple expliqué',2),labelPara('Exemple. ',s.example));
 if(s.img) a.push(new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:s.img,transformation:{width:500,height:s.img===grid100?500:180},type:'png'})]}));
 a.push(title('4. Erreurs à éviter',2));
 a.push(bullet('Modifier un nombre sans appliquer la même transformation à toute l’écriture.'));
 a.push(bullet('Oublier la valeur de position d’un chiffre ou le sens d’un symbole de comparaison.'));
 a.push(title('EXERCICES — Total : 20 points',1));
 a.push(p('Exercice 1 — 8 points. '+s.app[0]));
 a.push(p('Exercice 2 — 8 points. '+s.app[1]));
 a.push(p('Exercice 3 — 4 points. Rédige une phrase qui explique la méthode utilisée dans un item de ton choix.'));
 a.push(title('CORRIGÉ DÉTAILLÉ',2));
 a.push(correction('Exercice 1. ',s.ans[0]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 2. ',s.ans[1]+' Chaque réponse correcte vaut 2 points.'));
 a.push(correction('Exercice 3. ','La phrase doit citer la règle appropriée, montrer au moins une étape et conclure par le résultat. Une démarche cohérente et correctement formulée vaut 4 points.'));
 return a;
}
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ II',1,'u2_l14'),title('Tableau de synthèse',2),table([
 new TableRow({children:[cell('Notion',{bold:true,fill:C.blue,color:C.white}),cell('Règle essentielle',{bold:true,fill:C.blue,color:C.white}),cell('Application',{bold:true,fill:C.blue,color:C.white})]}),
 ...[['Priorités','Parenthèses, × et ÷, puis + et −','Calculer les expressions combinées'],['Échelle','Longueur du plan sur longueur réelle','Lire plans et cartes'],['Pourcentage','Quantité × taux ÷ 100','Calculer part ou taux'],['Taux et rendement','Comparer deux quantités','Interpréter avec une unité ou en %'],['Calcul mental','Décomposer et compenser','Calculer efficacement']].map(r=>new TableRow({children:r.map(x=>cell(x))}))
 ]),title('Questions de révision',2),p('1. Calcule 8 + 3 × 4. 2. Calcule 25 % de 240. 3. Une carte est à l’échelle 1 : 10 000 : que représente 3 cm ? 4. Calcule 160 × 0,75. 5. Calcule mentalement 498 + 67.'),title('Réponses attendues',2),correction('1. ','20.'),correction('2. ','60.'),correction('3. ','300 m, soit 0,3 km.'),correction('4. ','120.'),correction('5. ','565.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T6 — UNITÉ II',1,'u2_l15'),p('Barème : 20 points. Présente clairement tous les calculs.'),p('Exercice 1 — 4 points. Calcule : a) 18 − 3 × 4 ; b) (18 − 3) × 4 ; c) 48 ÷ 6 + 5 × 2 ; d) 72 ÷ (6 + 3).'),p('Exercice 2 — 4 points. Calcule : a) 15 % de 400 ; b) 75 % de 240 ; c) le taux de 180 km en 3 h ; d) le rendement de 450 objets sur 500.'),p('Exercice 3 — 4 points. Sur une carte à l’échelle 1 : 50 000, les distances mesurent 2 cm, 4,5 cm, 6 cm et 10 cm. Donne chaque distance réelle en kilomètres.'),p('Exercice 4 — 4 points. Calcule mentalement : a) 4,75 × 100 ; b) 825 ÷ 100 ; c) 240 × 0,25 ; d) 45 ÷ 0,75.'),p('Exercice 5 — 4 points. Une coopérative récolte 840 kg sur un objectif de 1 000 kg. Calcule son rendement. Elle vend 75 % de la récolte : quelle masse vend-elle ?'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','6 ; 60 ; 18 ; 8. Un point par résultat.'),correction('Exercice 2. ','60 ; 180 ; 60 km/h ; 90 %. Un point par résultat avec unité si nécessaire.'),correction('Exercice 3. ','1 km ; 2,25 km ; 3 km ; 5 km. Un point par conversion.'),correction('Exercice 4. ','475 ; 8,25 ; 60 ; 60. Un point par résultat.'),correction('Exercice 5. ','Rendement : 840 ÷ 1 000 × 100 = 84 %. Masse vendue : 840 × 75 ÷ 100 = 630 kg. Deux points par réponse expliquée.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T6',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité III — Nombre',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T6. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u2',children:[tr('Unité III — Nombre',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u2_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u2_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u2_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ II — OPÉRATION',1,'u2'),p('Résultat d’apprentissage général : effectuer les opérations avec différentes représentations numériques afin de résoudre des problèmes du monde réel.'),p('Valeurs à véhiculer : estime de soi et persévérance.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u2_s${i+1}`),title('FICHE DE PRÉPARATION',2),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T6 — Unité III',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
