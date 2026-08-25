const AdmZip=require("adm-zip");
const fs=require("fs"),path=require("path");
const SRC="output/01_corrige.docx";
const OUT="output/02_avec_schemas.docx";
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
  const fname=`s_${id}.svg`;
  zip.addFile("word/media/"+fname,Buffer.from(svgStr));
  rels=rels.replace("</Relationships>",`<Relationship Id="rId${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fname}"/></Relationships>`);
  return `<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:drawing xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="${fname}"/><wp:cNvGraphicFramePr/><a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="${fname}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rId${id}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}

function insertAt(text, svg, w){
  const idx=xml.indexOf(text);
  if(idx<0) return false;
  const pEnd=xml.indexOf("</w:p>",idx)+6;
  xml=xml.slice(0,pEnd)+addSVG(svg,w)+xml.slice(pEnd);
  return true;
}

// === Carré ===
const carre=(c)=>svg(500,460,`<rect x="120" y="60" width="260" height="260" fill="#D5F5E3" stroke="#000" stroke-width="4"/>
<line x1="120" y1="370" x2="380" y2="370" stroke="#C0392B" stroke-width="3"/>
<polygon points="380,365 395,370 380,375" fill="#C0392B"/><polygon points="120,365 105,370 120,375" fill="#C0392B"/>
<text x="250" y="362" text-anchor="middle" font-size="26" fill="#C0392B" font-weight="bold">${c||'c'}</text>`);
let n=0;
if(insertAt("LE CARRÉ",carre("c"),11))n++;
if(insertAt("Le carré",carre("c"),11))n++;
if(insertAt("carré et le carré",carre("c"),11))n++;

console.log(n,"schémas injectés");
zip.updateFile("word/document.xml",Buffer.from(xml));
zip.updateFile("word/_rels/document.xml.rels",Buffer.from(rels));
zip.updateFile("[Content_Types].xml",Buffer.from(ctypes));
zip.writeZip(OUT);
console.log("→",OUT);
