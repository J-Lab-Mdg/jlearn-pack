// 01_corrige.js — Part du manuel original et corrige les incohérences
const AdmZip=require("adm-zip");
const fs=require("fs");

const SRC="../math8e-original.docx";
const OUT="output/01_corrige.docx";
fs.mkdirSync("output",{recursive:true});

let zip=new AdmZip(SRC);
let xml=zip.readAsText("word/document.xml");
let rels=zip.readAsText("word/_rels/document.xml.rels");
let c=0;

// 1. Trapèze : remplacer les 4 phrases "quadrilatère de longueur/largeur"
xml=xml.replace(/Calcule le périmètre d'un quadrilatère de longueur (\d+) cm et largeur (\d+) cm\./g,(m,b1,b2)=>{
  c++;
  const y=+b2;
  return `Calcule le périmètre d'un trapèze dont la grande base mesure ${b1} cm, la petite base ${b2} cm et les deux côtés obliques ${y+2} cm et ${y+4} cm.`;
});

// 2. Supprimer la référence "(pages 109 à 112)"
xml=xml.replace(/\(pages 109 à 112\)/g,()=>{c++;return "";});
xml=xml.replace(/pages 109 à 112/g,()=>{c++;return "";});

// 3. Convertir les points décimaux en virgules (protéger la déclaration XML)
const xmlDecl=xml.match(/^<\?xml[^?]*\?>/);
let body=xmlDecl?xml.slice(xmlDecl[0].length):xml;
body=body.replace(/(\d)\.(\d)/g,(m,a,b)=>{c++;return a+","+b;});
xml=(xmlDecl?xmlDecl[0]:"")+body;

// 4. Ajouter les namespaces a/pic/wp s'ils ne sont pas sur <w:document>
// (pour pouvoir injecter des images plus tard)
if(!xml.includes('xmlns:pic="')){
  xml=xml.replace("<w:document ",'<w:document xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" ');
  c++;
}

zip.updateFile("word/document.xml",Buffer.from(xml));
zip.writeZip(OUT);
console.log(c,"corrections appliquées →",OUT);
