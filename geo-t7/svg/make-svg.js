// make-svg.js — 66 schémas pédagogiques originaux du manuel GEO T7
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { allTopics } = require("../src/curriculum");

const OUT = path.resolve(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const palettes = [
  ["#1565C0", "#E3F2FD", "#0D47A1"], ["#6A1B9A", "#F3E5F5", "#4A148C"],
  ["#2E7D32", "#E8F5E9", "#1B5E20"], ["#EF6C00", "#FFF3E0", "#E65100"],
  ["#00838F", "#E0F7FA", "#006064"], ["#AD1457", "#FCE4EC", "#880E4F"],
  ["#558B2F", "#F1F8E9", "#33691E"],
];
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function lines(text, max=39, limit=4) {
  const words=String(text).replace(/\.$/,"").split(/\s+/); const out=[]; let line="";
  for (const w of words) { const n=line?`${line} ${w}`:w; if(n.length>max&&line){out.push(line);line=w;}else line=n; }
  if(line)out.push(line); if(out.length>limit){out[limit-1]=out.slice(limit-1).join(" ");out.length=limit;}
  return out;
}
function textBlock(cx, cy, text, {size=22, color="#263238", bold=false, max=39, limit=4}={}) {
  const ls=lines(text,max,limit), step=size+7, start=cy-(ls.length-1)*step/2;
  return ls.map((l,i)=>`<text x="${cx}" y="${start+i*step}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size}" fill="${color}"${bold?' font-weight="700"':''}>${esc(l)}</text>`).join("\n");
}
function icon(unit, color) {
  if(unit===1) return `<path d="M75 560h85M118 518v85M88 532l60 56M148 532l-60 56" stroke="${color}" stroke-width="8" opacity=".18"/>`;
  if(unit===2) return `<circle cx="110" cy="555" r="40" fill="none" stroke="${color}" stroke-width="8" opacity=".18"/><ellipse cx="110" cy="555" rx="78" ry="22" fill="none" stroke="${color}" stroke-width="6" opacity=".18" transform="rotate(-18 110 555)"/>`;
  if(unit===3) return `<path d="M35 605l70-105 48 68 32-48 58 85z" fill="${color}" opacity=".13"/><path d="M175 525c35-42 84 3 50 28 47-4 52 54 7 54h-82c-46 0-42-62 2-57 1-10 9-20 23-25z" fill="${color}" opacity=".13"/>`;
  if(unit===4) return `<g fill="${color}" opacity=".15"><circle cx="80" cy="530" r="25"/><circle cx="150" cy="530" r="25"/><circle cx="115" cy="585" r="25"/><path d="M42 620c0-52 76-52 76 0M112 620c0-52 76-52 76 0M77 640c0-52 76-52 76 0"/></g>`;
  if(unit===5) return `<path d="M105 625V540M105 565c-55-5-60-55-50-70 42 2 59 28 50 70M105 580c58-6 66-55 55-73-44 1-64 30-55 73" fill="${color}" opacity=".14" stroke="${color}" stroke-width="6"/>`;
  if(unit===6) return `<path d="M40 620V535l70 38v-38l70 38v-70h55v117z" fill="${color}" opacity=".14"/><path d="M40 630h220" stroke="${color}" stroke-width="8" opacity=".18"/>`;
  return `<path d="M110 630c-60-82-50-140 0-170 50 30 60 88 0 170zM110 630c0-80 20-115 58-145" fill="${color}" opacity=".12" stroke="${color}" stroke-width="7"/>`;
}
function unitOf(n){ return n<=6?1:n<=16?2:n<=28?3:n<=36?4:n<=48?5:n<=54?6:7; }
function svg(topic){
  const u=unitOf(topic.numero), [main,bg,dark]=palettes[u-1];
  const boxes=[[50,125],[630,125],[50,400],[630,400]], centers=[[260,207],[840,207],[260,482],[840,482]];
  let boxSvg="";
  topic._points.slice(0,4).forEach((p,i)=>{const [x,y]=boxes[i], [cx,cy]=centers[i];boxSvg+=`<rect x="${x}" y="${y}" width="420" height="165" rx="24" fill="#FFFFFF" stroke="${main}" stroke-width="4"/>${textBlock(cx,cy,p,{size:20,max:40,limit:4})}`;});
  const links=centers.map(([x,y])=>`<line x1="550" y1="335" x2="${x}" y2="${y}" stroke="${main}" stroke-width="6" opacity=".45" marker-end="url(#a)"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 650"><defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${main}"/></marker></defs><rect width="1100" height="650" rx="28" fill="${bg}"/><rect x="18" y="18" width="1064" height="614" rx="24" fill="none" stroke="${main}" stroke-width="4"/>${icon(u,main)}${textBlock(550,60,topic.titre,{size:31,color:dark,bold:true,max:58,limit:2})}${links}${boxSvg}<circle cx="550" cy="335" r="112" fill="${main}" stroke="#FFFFFF" stroke-width="10"/>${textBlock(550,335,topic._terme,{size:25,color:"#FFFFFF",bold:true,max:21,limit:4})}<text x="1040" y="615" text-anchor="end" font-family="Arial" font-size="17" fill="${dark}">J-Learn · GEO T7 · S${String(topic.numero).padStart(2,"0")}</text></svg>`;
}
(async()=>{
  for(const t of allTopics){const id=`geo7_s${String(t.numero).padStart(2,"0")}`, data=svg(t);fs.writeFileSync(path.join(__dirname,`${id}.svg`),data);await sharp(Buffer.from(data)).resize({width:1100}).png().toFile(path.join(REPO,`${id}.png`));}
  console.log(`OK ${allTopics.length} schémas GEO T7`);
})().catch(e=>{console.error(e);process.exit(1)});
