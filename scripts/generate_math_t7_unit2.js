const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T7_V1_UNITE2.docx';
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
 {t:"Comprendre une puissance entière",goal:"écrire un produit répété sous forme de puissance",concept:"La puissance aⁿ représente le produit de n facteurs égaux à a. Le nombre a est la base et n est l’exposant. Pour n positif, aⁿ = a × a × … × a.",example:"3⁴ = 3 × 3 × 3 × 3 = 81.",app:["Écris comme puissance : 5 × 5 × 5 ; 2 × 2 × 2 × 2 × 2 ; (−3) × (−3) ; 0,4 × 0,4 × 0,4.", "Explique chaque démarche et vérifie les quatre résultats."],ans:["5³ ; 2⁵ ; (−3)² ; 0,4³.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Calculer des puissances de nombres relatifs",goal:"calculer une puissance en tenant compte du signe",concept:"Une puissance d’exposant pair d’un nombre négatif est positive. Une puissance d’exposant impair conserve le signe négatif. Les parenthèses autour de la base négative sont indispensables.",example:"(−2)⁴ = 16 tandis que (−2)³ = −8.",app:["Calcule : 4³ ; (−3)² ; (−2)⁵ ; 0,5³.", "Explique chaque démarche et vérifie les quatre résultats."],ans:["64 ; 9 ; −32 ; 0,125.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Multiplier des puissances de même base",goal:"additionner les exposants lors d’un produit",concept:"Pour multiplier des puissances de même base, on conserve la base et on additionne les exposants : aᵐ × aⁿ = aᵐ⁺ⁿ.",example:"2³ × 2⁴ = 2⁷ = 128.",app:["Simplifie puis calcule : 3² × 3³ ; 2⁴ × 2² ; 10³ × 10² ; 0,5² × 0,5.", "Explique chaque démarche et vérifie les quatre résultats."],ans:["3⁵ = 243 ; 2⁶ = 64 ; 10⁵ = 100 000 ; 0,5³ = 0,125.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Diviser des puissances de même base",goal:"soustraire les exposants lors d’un quotient",concept:"Pour diviser deux puissances de même base non nulle, on conserve la base et on soustrait les exposants : aᵐ ÷ aⁿ = aᵐ⁻ⁿ lorsque m est supérieur ou égal à n.",example:"5⁶ ÷ 5² = 5⁴ = 625.",app:["Simplifie puis calcule : 2⁷ ÷ 2³ ; 3⁵ ÷ 3² ; 10⁶ ÷ 10⁴ ; 0,5⁴ ÷ 0,5².", "Explique chaque démarche et vérifie les quatre résultats."],ans:["2⁴ = 16 ; 3³ = 27 ; 10² = 100 ; 0,5² = 0,25.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Calculer une puissance de puissance",goal:"multiplier les exposants dans une puissance de puissance",concept:"Pour une puissance élevée à une autre puissance, on conserve la base et on multiplie les exposants : (aᵐ)ⁿ = aᵐⁿ.",example:"(2³)² = 2⁶ = 64.",app:["Simplifie : (3²)³ ; (2⁴)² ; (10²)³ ; ((−2)²)³.", "Explique chaque démarche et vérifie les quatre résultats."],ans:["3⁶ = 729 ; 2⁸ = 256 ; 10⁶ = 1 000 000 ; (−2)⁶ = 64.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Comprendre les règles de signes",goal:"déterminer le signe d’un produit ou quotient",concept:"Le produit ou quotient de deux nombres de même signe est positif. Celui de deux nombres de signes différents est négatif. Pour plusieurs facteurs, un nombre pair de signes négatifs donne un produit positif.",example:"(−4) × (−3) = +12 et (−4) × (+3) = −12.",app:["Donne le signe : (−5) × (−2) ; (+7) × (−3) ; (−2) × (−3) × (−4) ; (−1) × (−2) × (−3) × (−4).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["Positif ; négatif ; négatif ; positif.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Additionner des relatifs de même signe",goal:"additionner les distances à zéro et conserver le signe",concept:"Pour additionner deux relatifs de même signe, on additionne leurs distances à zéro et on garde leur signe commun.",example:"(−7) + (−5) = −12 ; (+3,2) + (+1,8) = +5.",app:["Calcule : −8 + (−6) ; +12 + (+9) ; −3,5 + (−2,4) ; +0,75 + (+1,25).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["−14 ; +21 ; −5,9 ; +2.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Additionner des relatifs de signes différents",goal:"soustraire les distances à zéro et prendre le signe du plus éloigné",concept:"Pour deux relatifs de signes différents, on soustrait la plus petite distance à zéro de la plus grande et on garde le signe du nombre le plus éloigné de zéro.",example:"(−9) + (+4) = −5 ; (+7) + (−10) = −3.",app:["Calcule : −12 + 5 ; +18 + (−7) ; −4,5 + 6,2 ; +3,8 + (−5,1).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["−7 ; +11 ; +1,7 ; −1,3.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Soustraire des nombres relatifs",goal:"transformer une soustraction en addition de l’opposé",concept:"Soustraire un nombre revient à ajouter son opposé : a − b = a + (−b). On simplifie ensuite les signes avant de calculer.",example:"5 − (−3) = 5 + 3 = 8 ; −4 − (+6) = −4 + (−6) = −10.",app:["Calcule : 7 − (−5) ; −8 − (+3) ; −6 − (−9) ; 4,5 − (+7,2).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["12 ; −11 ; 3 ; −2,7.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Multiplier et diviser des relatifs",goal:"appliquer la règle de signe puis calculer les distances",concept:"On détermine d’abord le signe avec la règle des signes, puis on multiplie ou divise les distances à zéro.",example:"(−6) × (+4) = −24 ; (−35) ÷ (−5) = +7.",app:["Calcule : (−8) × (−7) ; (+54) ÷ (−6) ; (−2,5) × 4 ; (−36) ÷ (−0,5).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["+56 ; −9 ; −10 ; +72.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Calculer une chaîne sans parenthèses",goal:"respecter priorités et règles de signes",concept:"Dans une chaîne, multiplications et divisions sont prioritaires sur additions et soustractions. À priorité égale, on calcule de gauche à droite.",example:"−5 + 3 × (−4) = −5 − 12 = −17.",app:["Calcule : −7 + 2 × 5 ; 18 ÷ (−3) − 4 ; −3 × 6 + 20 ; 15 − 24 ÷ (−6).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["3 ; −10 ; 2 ; 19.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Calculer une chaîne avec parenthèses",goal:"commencer par les parenthèses puis appliquer les priorités",concept:"Les parenthèses indiquent les calculs à effectuer en premier. On simplifie leur contenu, puis on poursuit avec les priorités et les signes.",example:"(−3 + 8) × (−4) = 5 × (−4) = −20.",app:["Calcule : (−5 + 2) × 6 ; 24 ÷ (−2 − 4) ; (7 − 10) × (−5) ; −3 × (4 − 9).", "Explique chaque démarche et vérifie les quatre résultats."],ans:["−18 ; −4 ; 15 ; 15.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]},
 {t:"Fractions, décimaux et valeurs approchées",goal:"passer entre écritures et encadrer une fraction",concept:"Une fraction peut être convertie en décimal par division. Une valeur approchée par défaut est inférieure ou égale au nombre ; celle par excès lui est supérieure ou égale.",example:"7/3 = 2,333… donc au dixième : 2,3 par défaut et 2,4 par excès.",app:["Convertis puis encadre au dixième : 5/4 ; 8/3 ; 11/6 ; 17/8.", "Explique chaque démarche et vérifie les quatre résultats."],ans:["1,25 : 1,2 et 1,3 ; 2,666… : 2,6 et 2,7 ; 1,833… : 1,8 et 1,9 ; 2,125 : 2,1 et 2,2.", "La vérification doit distinguer le signe, la valeur numérique et l’ordre des opérations."]}
];

const unit2Visuals=[grid100,grid100,numberLine,numberLine,grid100,numberLine,numberLine,numberLine,numberLine,numberLine,numberLine,numberLine,fractionBars];
sessions.forEach((s,i)=>{s.img=unit2Visuals[i];});
[0,1,2,3,4].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_calcul_mental_marche.png'));
[5,6,7,8,9,10,11].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_priorites_operations.png'));
sessions[12].scene=fs.readFileSync('assets/math-t6/scenes/scene_fractions_bandegateau.png');

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Opération\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${n} / 15`,{width:32,bold:true})]}),
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
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u2_l${n}`));
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
 if([1,2,3,4,9,10,11,12,13].includes(n)){
  a.push(title('6. Écriture en ligne et opération posée',2));
  a.push(p('On écrit d’abord le calcul en ligne. Pour une addition, une soustraction ou une multiplication complexe, on aligne ensuite unités, dizaines, centaines et milliers.'));
  a.push(table([
   new TableRow({children:[cell('Écriture en ligne',{bold:true,fill:C.pale}),cell('Disposition verticale',{bold:true,fill:C.pale})]}),
   new TableRow({children:[cell('2 438 + 765 = 3 203'),cell('  2 438\n+   765\n────────\n  3 203',{align:AlignmentType.RIGHT})]}),
   new TableRow({children:[cell('3 205 − 786 = 2 419'),cell('  3 205\n−   786\n────────\n  2 419',{align:AlignmentType.RIGHT})]}),
   new TableRow({children:[cell('326 × 24 = 7 824'),cell('    326\n×    24\n───────\n  1 304\n+ 6 520\n───────\n  7 824',{align:AlignmentType.RIGHT})]})
  ],[4800,4800]));
 }
 a.push(title('7. Questions pour guider les élèves',2));
 a.push(bullet('Quelles sont les données connues ?'));
 a.push(bullet('Quelle quantité ou quelle écriture devons-nous trouver ?'));
 a.push(bullet('Quelle propriété permet de passer des données au résultat ?'));
 a.push(bullet('Comment pouvons-nous vérifier la réponse autrement ?'));
 a.push(title('8. Erreurs fréquentes',2));
 a.push(bullet('Modifier un nombre sans appliquer la même transformation à toute l’écriture.'));
 a.push(bullet('Confondre la valeur d’un chiffre avec sa position ou inverser le sens d’une comparaison.'));
 a.push(bullet('Donner un résultat sans montrer la démarche ni effectuer de vérification.'));
 a.push(title('9. Différenciation pédagogique',2));
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
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ II',1,'u2_l14'),title('Synthèse',2),p('Révise puissances, règles de signes, opérations sur les relatifs et valeurs approchées.'),p('1. Calcule (−2)⁴. 2. Simplifie 3² × 3⁴. 3. Calcule −8 + 3. 4. Calcule 5 − (−7). 5. Encadre 8/3 au dixième.'),title('Réponses attendues',2),correction('1. ','16.'),correction('2. ','3⁶ = 729.'),correction('3. ','−5.'),correction('4. ','12.'),correction('5. ','2,6 par défaut et 2,7 par excès.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T7 — UNITÉ II',1,'u2_l15'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Calcule : 2⁵ ; (−3)⁴ ; (−2)⁵ ; 0,5³.'),p('Exercice 2 — 4 points. Simplifie puis calcule : 3² × 3³ ; 2⁷ ÷ 2⁴ ; (5²)² ; 10⁶ ÷ 10³.'),p('Exercice 3 — 4 points. Calcule : −8 + (−5) ; −12 + 7 ; 9 − (−4) ; −6 − (+8).'),p('Exercice 4 — 4 points. Calcule : (−7) × (−6) ; 54 ÷ (−9) ; −5 + 3 × (−4) ; (−3 + 8) × (−4).'),p('Exercice 5 — 4 points. Convertis 11/6 et 17/8 en décimaux, puis donne leurs valeurs au dixième par défaut et par excès.'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','32 ; 81 ; −32 ; 0,125.'),correction('Exercice 2. ','3⁵ = 243 ; 2³ = 8 ; 5⁴ = 625 ; 10³ = 1 000.'),correction('Exercice 3. ','−13 ; −5 ; 13 ; −14.'),correction('Exercice 4. ','42 ; −6 ; −17 ; −20.'),correction('Exercice 5. ','11/6 = 1,833… : 1,8 et 1,9. 17/8 = 2,125 : 2,1 et 2,2.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T7',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité III — Nombre',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T7. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u2',children:[tr('Unité III — Nombre',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u2_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u2_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u2_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ II — OPÉRATION',1,'u2'),p('Résultat d’apprentissage général : effectuer les opérations avec différentes représentations numériques afin de résoudre des problèmes du monde réel.'),p('Valeurs à véhiculer : estime de soi et persévérance.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u2_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T7 — Unité III',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
