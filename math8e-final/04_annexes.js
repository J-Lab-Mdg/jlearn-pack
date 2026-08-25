// 04_annexes.js — Ajoute les annexes (sujets examen)
const AdmZip=require("adm-zip");
const fs=require("fs");
const SRC="output/03_enrichi.docx";
const OUT="output/Manuel_Calcul_8e_JLearn_V2.docx";
let zip=new AdmZip(SRC);
let xml=zip.readAsText("word/document.xml");
let rels=zip.readAsText("word/_rels/document.xml.rels");

function P(text,o){o=o||{};
  return `<w:p><w:pPr>${o.align?`<w:jc w:val="${o.align}"/>`:""}<w:spacing w:after="${o.after||80}" w:before="${o.before||0}"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/>${o.bold?'<w:b/>':''}${o.color?`<w:color w:val="${o.color}"/>`:''}<w:sz w:val="${o.size||24}"/></w:rPr><w:t xml:space="preserve">${text}</w:t></w:r></w:p>`;
}
function H1(t){return P(t,{bold:true,size:40,color:"C00000",align:"center",after:200});}
function H2(t){return P("► "+t,{bold:true,size:28,color:"1A5276",before:200,after:100});}
function bullet(t){return P("• "+t,{after:40});}
function pb(){return `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`;}

const annexes=[];
annexes.push(pb());
annexes.push(H1("ANNEXES"));

// Sujets d'examen
for(const tri of [1,2,3]){
  annexes.push(H2(`Trimestre ${tri} — Sujet Opération (20 points, 45 min)`));
  if(tri===1){
    annexes.push(bullet("Effectue : 45 678 + 3 895 ; 8 000 − 3 456 ; 256 × 14"));
    annexes.push(bullet("Convertis : 3 km = … m ; 4 500 g = … kg ; 2 h 15 = … min"));
    annexes.push(bullet("Un commerçant achète 25 kg de riz à 2 400 Ar/kg et revend à 3 000 Ar/kg. Calcule son bénéfice."));
  } else if(tri===2){
    annexes.push(bullet("Effectue : 23,56 + 78,9 ; 100 − 45,67 ; 3/4 + 2/4"));
    annexes.push(bullet("Convertis : 250 cL = … L ; 0,75 kg = … g ; 1 m 45 cm = … cm"));
    annexes.push(bullet("Un commerçant achète un tissu à 12 000 Ar, paie 1 500 Ar de transport et revend à 18 000 Ar. Calcule son bénéfice."));
  } else {
    annexes.push(bullet("Effectue : 5/6 × 3/10 ; 2/3 ÷ 4/9 ; 12,5 × 0,4"));
    annexes.push(bullet("Convertis : 3,2 km = … m ; 2 h 30 = … min ; 500 cL = … L"));
    annexes.push(bullet("Un capital de 200 000 Ar est placé à 5 % pendant 3 ans. Calcule l'intérêt."));
  }
  annexes.push(H2(`Trimestre ${tri} — Sujet Problème (20 points, 45 min)`));
  if(tri===1){
    annexes.push(bullet("Une famille parcourt 180 km en 3 h. a) Quelle est sa vitesse moyenne ? b) Combien de temps pour 300 km ?"));
    annexes.push(bullet("Un champ rectangulaire mesure 45 m de long et 28 m de large. Calcule son périmètre, son aire, et la longueur de fil pour 3 rangées."));
  } else if(tri===2){
    annexes.push(bullet("Maman achète 3 bouteilles de 1,5 L. Combien de verres de 25 cL ? Coût total à 4 500 Ar la bouteille ?"));
    annexes.push(bullet("Un triangle de côtés 8, 12, 10 cm a une hauteur de 7 cm. Calcule périmètre et aire."));
  } else {
    annexes.push(bullet("Capital 200 000 Ar à 5 % pendant 3 ans. Calcule l'intérêt, la somme acquise, et le capital à placer pour gagner 30 000 Ar en 2 ans."));
    annexes.push(bullet("Cube de 6 cm d'arête. Calcule son volume et son aire totale. Empile 8 cubes : volume du grand cube ?"));
  }
  annexes.push(pb());
}

// Formules
annexes.push(H1("Formules et tables"));
annexes.push(H2("Périmètres et aires"));
annexes.push(bullet("Carré : P = 4c ; A = c²"));
annexes.push(bullet("Rectangle : P = 2(L+l) ; A = L × l"));
annexes.push(bullet("Triangle : P = a+b+c ; A = (b × h)/2"));
annexes.push(bullet("Cercle : P = 2πr ; A = πr²"));
annexes.push(H2("Volumes"));
annexes.push(bullet("Cube : V = c³"));
annexes.push(bullet("Pavé droit : V = L × l × h"));
annexes.push(H2("Conversions"));
annexes.push(bullet("Longueur : km — hm — dam — m — dm — cm — mm"));
annexes.push(bullet("Masse : t — q — kg — hg — dag — g — dg — cg — mg"));
annexes.push(bullet("Capacité : hL — daL — L — dL — cL — mL"));
annexes.push(bullet("Temps : 1 h = 60 min = 3 600 s"));

// Glossaire
annexes.push(pb());
annexes.push(H1("Glossaire"));
[
  ["Aire","Mesure de la surface d'une figure."],
  ["Bénéfice","Prix de vente − prix de revient."],
  ["Capacité","Volume d'un récipient, en L."],
  ["Décimal","Nombre à virgule."],
  ["Fraction","Rapport a/b de deux entiers."],
  ["Masse","Quantité de matière, en kg."],
  ["Périmètre","Longueur du contour d'une figure."],
  ["Proportionnalité","Relation où une grandeur est multiple de l'autre."],
  ["Volume","Place occupée par un corps, en m³ ou L."],
].forEach(([t,d])=>annexes.push(P(`<b>${t}</b> : ${d}`,{}).replace("<b>","").replace("</b>","")));

// Injection
const sectPr=xml.lastIndexOf("<w:sectPr");
let insertPos=xml.lastIndexOf("<w:p ",sectPr);
if(insertPos<0) insertPos=xml.lastIndexOf("<w:p>",sectPr);
xml=xml.slice(0,insertPos)+annexes.join("")+xml.slice(insertPos);

zip.updateFile("word/document.xml",Buffer.from(xml));
zip.updateFile("word/_rels/document.xml.rels",Buffer.from(rels));
zip.writeZip(OUT);
console.log("Manuel final →",OUT);
