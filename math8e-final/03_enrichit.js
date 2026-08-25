// 03_enrichit.js — Enrichit le manuel corrigé avec le contenu du guide officiel
const AdmZip=require("adm-zip");
const fs=require("fs"),path=require("path");
const SRC="output/02_avec_schemas.docx";
const OUT="output/03_enrichi.docx";
let zip=new AdmZip(SRC);
let xml=zip.readAsText("word/document.xml");
let rels=zip.readAsText("word/_rels/document.xml.rels");
let ctypes=zip.readAsText("[Content_Types].xml");
if(!ctypes.includes("svg+xml")) ctypes=ctypes.replace("</Types>",'<Default Extension="svg" ContentType="image/svg+xml"/></Types>');

function svg(w,h,b){return `<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Arial">${b}</svg>`;}

function addSVG(svgStr,wCm){
  wCm=wCm||12;
  const id=Math.floor(Math.random()*90000+10000);
  const cx=Math.round(wCm*360000),cy=Math.round(cx*0.85);
  const fname=`e_${id}.svg`;
  zip.addFile("word/media/"+fname,Buffer.from(svgStr));
  rels=rels.replace("</Relationships>",`<Relationship Id="rId${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fname}"/></Relationships>`);
  return `<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="${fname}"/><wp:cNvGraphicFramePr/><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="${fname}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rId${id}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

function insertAfter(text, content){
  const idx=xml.indexOf(text);
  if(idx<0) return false;
  const pEnd=xml.indexOf("</w:p>",idx)+6;
  xml=xml.slice(0,pEnd)+content+xml.slice(pEnd);
  return true;
}

function encadre(text, bg){
  bg=bg||"FFF9C4";
  return `<w:tbl><w:tblPr><w:jc w:val="center"/><w:tblBorders><w:top w:val="single" w:sz="10" w:color="2C3E50"/><w:left w:val="single" w:sz="10" w:color="2C3E50"/><w:bottom w:val="single" w:sz="10" w:color="2C3E50"/><w:right w:val="single" w:sz="10" w:color="2C3E50"/></w:tblBorders><w:tblW w:w="5000" w:type="pct"/></w:tblPr><w:tr><w:tc><w:tcPr><w:shd w:val="clear" w:fill="${bg}"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="24"/><w:rFonts w:ascii="Times New Roman"/></w:rPr><w:t xml:space="preserve">${text}</w:t></w:r></w:p></w:tc></w:tr></w:tbl>`;
}

// === FRACTIONS : schéma en cercles (méthode du guide) ===
function fractionsCercles(){
  let s="";
  const parts=[2,3,4,5,6,8];
  let x=40;
  parts.forEach(n=>{
    const cx=x+60, cy=100, r=45;
    s+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFF" stroke="#000" stroke-width="2"/>`;
    for(let i=0;i<n;i++){
      const a1=(i*360/n-90)*Math.PI/180;
      const a2=((i+1)*360/n-90)*Math.PI/180;
      const x1=cx+r*Math.cos(a1), y1=cy+r*Math.sin(a1);
      const x2=cx+r*Math.cos(a2), y2=cy+r*Math.sin(a2);
      s+=`<line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}" stroke="#000" stroke-width="1.5"/>`;
      if(i<Math.min(3,n/2)) s+=`<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="#85C1E9"/>`;
    }
    s+=`<text x="${cx}" y="180" text-anchor="middle" font-size="16">1/${n}</text>`;
    x+=140;
  });
  return svg(900,220,s);
}

// Schéma des quadrilatères (comme dans le guide)
function quadrilateres(){
  let s="";
  const figures=[
    {x:60,y:80,pts:"60,140 30,90 130,90 100,140",label:"trapèze"},
    {x:240,y:80,pts:"240,140 210,90 330,90 300,140",label:"parallélogramme"},
    {x:420,y:80,pts:"420,140 390,90 490,90 490,140",label:"rectangle"},
    {x:600,y:80,pts:"640,60 700,115 640,170 580,115",label:"losange"},
    {x:780,y:80,pts:"780,90 830,90 830,140 780,140",label:"carré"},
  ];
  figures.forEach(f=>{
    s+=`<polygon points="${f.pts}" fill="#FCF3CF" stroke="#000" stroke-width="2"/>`;
    s+=`<text x="${f.pts.split(',')[0]+f.pts.split(',')[0].length}" y="180" text-anchor="middle" font-size="14">${f.label}</text>`;
  });
  return svg(900,220,s);
}

let stats={fractions:0, quadrilateres:0, pieges:0};

// Injecter le schéma des fractions dans les séances 18, 24, 29, 34, 39
for(const n of [18,24,29,34,39]){
  const marker=`w:name="seance${n}"`;
  if(xml.includes(marker)){
    if(insertAfter(marker, addSVG(fractionsCercles(),14))) stats.fractions++;
  }
}

// Injecter le schéma des quadrilatères dans la séance 20
if(xml.includes('w:name="seance20"')){
  insertAfter('w:name="seance20"', addSVG(quadrilateres(),14));
  stats.quadrilateres++;
}

// Ajouter un encadré "Piège" dans les séances de problèmes additives/soustractifs
// Le guide mentionne : le verbe "vendre" ne veut pas dire soustraire ;
// "de moins" ne veut pas dire soustraction
const piegesAdditifs=[
  {seance:19, text:"⚠ Piège : le verbe « vendre » ne signifie pas toujours soustraire. Il faut bien comprendre la situation : si on cherche le total, on additionne."},
  {seance:25, text:"⚠ Piège : « de moins que » indique une comparaison, pas toujours une soustraction. Jean a 12 ans, il a 10 ans de moins que Jao → Jao a 22 ans (12 + 10)."},
];
for(const p of piegesAdditifs){
  const marker=`w:name="seance${p.seance}"`;
  if(xml.includes(marker)){
    insertAfter(marker, encadre(p.text,"FADBD8"));
    stats.pieges++;
  }
}

// Ajouter un encadré méthode dans la séance 35 (proportionnalité)
if(xml.includes('w:name="seance35"')){
  insertAfter('w:name="seance35"', encadre("Méthode : dans un tableau de proportionnalité, on peut multiplier/diviser une ligne par un même nombre, ou utiliser les produits en croix.","D6EAF8"));
  stats.pieges++;
}

console.log("Enrichissements:",JSON.stringify(stats));
zip.updateFile("word/document.xml",Buffer.from(xml));
zip.updateFile("word/_rels/document.xml.rels",Buffer.from(rels));
zip.updateFile("[Content_Types].xml",Buffer.from(ctypes));
zip.writeZip(OUT);
console.log("→",OUT);
