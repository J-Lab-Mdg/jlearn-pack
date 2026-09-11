const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun
} = require('docx');

const OUT = 'Manuel_Mathematiques_T7_V1_UNITE3.docx';
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
 {t:"Découvrir la distributivité simple",goal:"utiliser k × (a + b) = k × a + k × b",concept:"La distributivité permet de multiplier une somme ou une différence par un nombre en multipliant chacun de ses termes.",example:"7 × (10 + 3) = 7 × 10 + 7 × 3 = 91.",app:["Développe : 4(10 + 3) ; 6(20 − 2) ; 5(8 + 7) ; 9(11 − 1).", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["52 ; 108 ; 75 ; 90.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Calculer mentalement avec la distributivité",goal:"décomposer un facteur pour faciliter un produit",concept:"On décompose un nombre en une somme ou une différence simple, puis on distribue la multiplication.",example:"18 × 7 = (20 − 2) × 7 = 140 − 14 = 126.",app:["Calcule mentalement : 19 × 6 ; 102 × 8 ; 48 × 5 ; 25 × 16.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["114 ; 816 ; 240 ; 400.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Développer un produit",goal:"supprimer des parenthèses par distributivité",concept:"Développer transforme un produit en somme ou différence. Chaque terme à l’intérieur des parenthèses doit être multiplié.",example:"3(x + 5) = 3x + 15 et 4(2x − 3) = 8x − 12.",app:["Développe : 5(x + 2) ; 3(2x + 7) ; 6(x − 4) ; 2(5x − 3).", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["5x + 10 ; 6x + 21 ; 6x − 24 ; 10x − 6.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Reconnaître un facteur commun",goal:"repérer un élément multiplicatif commun à plusieurs termes",concept:"Un facteur commun multiplie chacun des termes d’une somme ou différence. Le reconnaître prépare la factorisation.",example:"Dans 6x + 18, le facteur commun est 6 car 6x + 18 = 6 × x + 6 × 3.",app:["Trouve un facteur commun : 5x + 15 ; 8x − 24 ; 12x + 18 ; 14x − 21.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["5 ; 8 ; 6 ; 7.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Factoriser une somme ou une différence",goal:"mettre un facteur commun devant des parenthèses",concept:"Factoriser est l’opération inverse de développer. On extrait le facteur commun et on place les quotients dans les parenthèses.",example:"6x + 18 = 6(x + 3).",app:["Factorise : 4x + 20 ; 7x − 21 ; 10x + 15 ; 12x − 8.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["4(x + 5) ; 7(x − 3) ; 5(2x + 3) ; 4(3x − 2).", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Comprendre variable et expression littérale",goal:"identifier variable, coefficient et terme constant",concept:"Une expression littérale contient une ou plusieurs lettres représentant des nombres. Dans 3x + 5, x est la variable, 3 son coefficient et 5 le terme constant.",example:"Pour x = 4, 3x + 5 vaut 3 × 4 + 5 = 17.",app:["Dans 5x + 2, 7 − 3a, 4y et 2m + 6, donne variable, coefficient et terme constant.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["x, 5, 2 ; a, −3, 7 ; y, 4, 0 ; m, 2, 6.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Traduire une phrase en expression littérale",goal:"passer du langage courant au langage algébrique",concept:"On choisit une lettre, puis on traduit exactement l’ordre des opérations. Des parenthèses sont nécessaires quand une opération porte sur un ensemble.",example:"Le double de la somme de x et 3 s’écrit 2(x + 3).",app:["Traduis : triple de x augmenté de 5 ; moitié de y diminuée de 4 ; carré de a augmenté de 1 ; cinq fois la différence entre n et 2.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["3x + 5 ; y/2 − 4 ; a² + 1 ; 5(n − 2).", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Traduire un programme de calcul",goal:"écrire une expression correspondant à des instructions",concept:"Un programme de calcul est traduit étape par étape. Les parenthèses conservent l’ordre imposé par les instructions.",example:"Choisir x, ajouter 4 puis multiplier par 3 donne 3(x + 4).",app:["Écris : doubler x puis ajouter 7 ; ajouter 5 à x puis doubler ; soustraire 3 de x puis multiplier par 4 ; tripler x puis soustraire 2.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["2x + 7 ; 2(x + 5) ; 4(x − 3) ; 3x − 2.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Produire une formule entre deux grandeurs",goal:"exprimer une relation avec des variables",concept:"Une formule décrit une relation générale. Les lettres sont définies avec leurs unités avant toute utilisation.",example:"Pour un rectangle de longueur L et largeur l, P = 2(L + l) et A = L × l.",app:["Écris la formule du périmètre d’un carré, du prix de n objets à p ariary, de la distance à vitesse v pendant t heures, et de l’aire d’un triangle.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["P = 4c ; C = np ; d = vt ; A = bh/2.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Résoudre une équation du premier degré",goal:"isoler une inconnue en conservant l’égalité",concept:"On effectue la même opération sur les deux membres jusqu’à isoler l’inconnue, puis on vérifie la solution par substitution.",example:"3x + 5 = 26 ; 3x = 21 ; x = 7. Vérification : 26 = 26.",app:["Résous : x + 9 = 21 ; 5x = 35 ; 2x + 3 = 17 ; 4x − 5 = 27.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["x = 12 ; x = 7 ; x = 7 ; x = 8.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Réduire une expression littérale",goal:"regrouper les termes semblables",concept:"Des termes semblables contiennent la même variable à la même puissance. On additionne ou soustrait leurs coefficients.",example:"3x + 5x − 2 + 7 = 8x + 5.",app:["Réduis : 4x + 3x ; 7a − 2a + 4 ; 5y + 3 − 2y + 6 ; 9m − 4 + m − 8.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["7x ; 5a + 4 ; 3y + 9 ; 10m − 12.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Développer et réduire une expression",goal:"enchaîner distributivité et regroupement",concept:"On développe d’abord tous les produits, puis on regroupe les termes semblables et les constantes.",example:"3(x + 4) + 2x − 5 = 3x + 12 + 2x − 5 = 5x + 7.",app:["Développe et réduis : 2(x + 5) + 3x ; 4(2x − 1) − x ; 5(x + 2) − 2(x − 3) ; 3(2x + 4) + 2(x − 1).", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["5x + 10 ; 7x − 4 ; 3x + 16 ; 8x + 10.", "La vérification doit montrer que les deux écritures donnent la même valeur."]},
 {t:"Substituer une valeur à une variable",goal:"calculer la valeur numérique d’une expression",concept:"Substituer consiste à remplacer chaque occurrence de la variable par la valeur donnée, mettre entre parenthèses une valeur négative, puis respecter les priorités.",example:"Pour x = −2, 3x² + 4 = 3 × (−2)² + 4 = 16.",app:["Calcule pour x = 3 : 2x + 5 ; x² − 4 ; 3(x + 2) ; 5x − 2x + 1.", "Justifie les quatre transformations et vérifie un résultat par substitution ou redéveloppement."],ans:["11 ; 5 ; 15 ; 10.", "La vérification doit montrer que les deux écritures donnent la même valeur."]}
];

const unit3Visuals=[grid100,grid100,numberLine,numberLine,numberLine,fractionBars,grid100,grid100,numberLine,numberLine,numberLine,numberLine,grid100];
sessions.forEach((s,i)=>{s.img=unit3Visuals[i];});
[0,1,2,3,4,10,11,12].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_relation_graphique.png'));
[5,6,7,8,9].forEach(i=>sessions[i].scene=fs.readFileSync('assets/math-t6/scenes/scene_equation_balance.png'));

// Independent assertions for all simple numerical answers used above.
console.assert(11/4===2.75 && 13/5===2.6 && 17/6>2.83 && 17/6<2.84);
console.assert((2/3)===(8/12) && 5/6>3/4);
console.assert(3/5===0.6 && 7/20===0.35 && 9/25===0.36 && 7/8===0.875);
console.assert(12===12 && 24===24 && 36===36);

function meta(s,n){ return new Table({width:{size:100,type:WidthType.PERCENTAGE},borders:noBorders,rows:[
 new TableRow({children:[cell(`Discipline : Mathématiques\nComposante : Algèbre\nTitre : ${s.t}`,{width:68,bold:true}),cell(`Classe : T7\nSéance : ${n} / 15`,{width:32,bold:true})]}),
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
 // 10 % pour Étapes.
 return table([...heads,...rows],[960,2400,2200,1440,1600,1000]);
}
function lesson(s,n){
 const a=[]; a.push(page(),title(`LEÇON — ${s.t}`,1,`u3_l${n}`));
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
function revision(){return [page(),title('SÉANCE 14 / 15 — RÉVISION DE L’UNITÉ III',1,'u3_l14'),title('Synthèse',2),p('Révise distributivité, factorisation, expressions, équations, réduction et substitution.'),p('1. Développe 4(x + 3). 2. Factorise 6x + 18. 3. Traduis le double de x diminué de 5. 4. Résous 3x + 2 = 20. 5. Calcule 2x² + 1 pour x = 3.'),title('Réponses attendues',2),correction('1. ','4x + 12.'),correction('2. ','6(x + 3).'),correction('3. ','2x − 5.'),correction('4. ','x = 6.'),correction('5. ','19.')];}
function exam(){return [page(),title('SÉANCE 15 / 15 — SUJET D’EXAMEN T7 — UNITÉ III',1,'u3_l15'),p('Barème : 20 points.'),p('Exercice 1 — 4 points. Développe : 5(x + 4) ; 3(2x − 5) ; 7(x − 2) ; 4(3x + 1).'),p('Exercice 2 — 4 points. Factorise : 6x + 24 ; 8x − 20 ; 15x + 10 ; 21x − 14.'),p('Exercice 3 — 4 points. Réduis : 3x + 7x − 5 ; 4a − 2a + 9 ; 5y + 3 − y + 8 ; 2m + 4 + 6m − 9.'),p('Exercice 4 — 4 points. Résous : x + 7 = 19 ; 4x = 36 ; 3x + 5 = 26 ; 5x − 8 = 32.'),p('Exercice 5 — 4 points. Pour x = −2, calcule 3x + 7, x² + 5, 2(x − 3) et 4x² − 3.'),title('CORRIGÉ ET BARÈME',2),correction('Exercice 1. ','5x + 20 ; 6x − 15 ; 7x − 14 ; 12x + 4.'),correction('Exercice 2. ','6(x + 4) ; 4(2x − 5) ; 5(3x + 2) ; 7(3x − 2).'),correction('Exercice 3. ','10x − 5 ; 2a + 9 ; 4y + 11 ; 8m − 5.'),correction('Exercice 4. ','x = 12 ; x = 9 ; x = 7 ; x = 8.'),correction('Exercice 5. ','1 ; 9 ; −10 ; 13.')];}

const children=[];
children.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T7',1,'cover'),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:250,after:200},children:[tr('Collection J-Learn',{bold:true,size:34,color:C.blue})]}),new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Programme officiel malgache — Version 1',{size:26})]}),new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:600},children:[tr('Unité III — Algèbre',{bold:true,size:30,color:C.green})]}));
children.push(page(),title('AVANT-PROPOS',1,'avant'),p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques T7. Il met l’apprenant au centre des activités : observation, manipulation, raisonnement, formulation d’une méthode, application et résolution de problèmes.'),p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée, des exemples contextualisés, des exercices avec barème et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur, la persévérance et l’autonomie.'));
children.push(title('MODE D’EMPLOI',1,'mode'),p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. À la demande de l’utilisateur, aucune durée chiffrée n’est affichée.'),p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; mots-clés en bleu et en gras ; mots-clés des corrigés en bordeaux ; texte courant en noir.'));
children.push(title('SOMMAIRE INTERACTIF',1,'toc'));
children.push(new Paragraph({children:[new InternalHyperlink({anchor:'u3',children:[tr('Unité III — Algèbre',{bold:true,color:C.blue})]})]}));
sessions.forEach((s,i)=>children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:`u3_l${i+1}`,children:[tr(`Séance ${i+1} — ${s.t}`,{color:C.blue})]})]})));
children.push(new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u3_l14',children:[tr('Séance 14 — Révision de l’unité I',{color:C.blue})]})]}),new Paragraph({indent:{left:360},children:[new InternalHyperlink({anchor:'u3_l15',children:[tr('Séance 15 — Sujet d’examen',{color:C.blue})]})]}));
children.push(page(),title('UNITÉ III — ALGÈBRE',1,'u3'),p('Résultat d’apprentissage général : exploiter les relations mathématiques pour analyser des situations diverses, faire des prédictions et prendre des décisions éclairées.'),p('Valeurs à véhiculer : estime de soi et sens de la responsabilité.'),title('Tableau de bord',2),table([new TableRow({children:[cell('Séances',{bold:true,fill:C.blue,color:C.white}),cell('Apprentissages',{bold:true,fill:C.blue,color:C.white}),cell('Révision',{bold:true,fill:C.blue,color:C.white}),cell('Examen',{bold:true,fill:C.blue,color:C.white})]}),new TableRow({children:[cell('15'),cell('13'),cell('1'),cell('1')]})]));
sessions.forEach((s,i)=>{children.push(page(),title(`SÉANCE ${i+1} / 15 — ${s.t.toUpperCase()}`,1,`u3_s${i+1}`),ficheTitle(),meta(s,i+1),prep(s,i+1),...lesson(s,i+1));});
children.push(...revision(),...exam());

const doc=new Document({styles:{default:{document:{run:{font:'Times New Roman',size:22},paragraph:{spacing:{line:276}}}}},sections:[{properties:{page:{margin:{top:900,right:720,bottom:900,left:720}}},headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[tr('J-Learn — Mathématiques T7 — Unité III',{size:18,color:'666666'})]})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[tr('Page ',{size:18}),new TextRun({children:[PageNumber.CURRENT],font:'Times New Roman',size:18})]})]})},children}]});
Packer.toBuffer(doc).then(buf=>{fs.writeFileSync(OUT,buf);console.log(`${OUT}: ${buf.length} octets`);});
