// make-svg-annexes.js — 8 annexes pédagogiques du Manuel Géographie T4
// Toutes les cartes de Madagascar utilisent un contour géographique réaliste (lat/lon).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";
const W = 1000, HH = 660;

const H = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${HH}" font-family="${FONT}">`;
const title = (s) => `<text x="500" y="50" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${s}</text>`;
const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.z || 19}" fill="${o.c || "#263238"}"${o.b ? ' font-weight="bold"' : ""}${o.i ? ' font-style="italic"' : ""}>${s}</text>`;
const box = (x, y, w, h, f = "#F5F9FC") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${f}" stroke="#90A4AE" stroke-width="3"/>`;
const badge = (x, y, n, c = "#01579B", r = 12) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${c}" stroke="#FFF" stroke-width="2"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="${r >= 11 ? 14 : 12}" font-weight="bold" fill="#FFF">${n}</text>`;
const ligneLeg = (x, y, n, w = 180) => `${badge(x + 12, y, n)}<line x1="${x + 34}" y1="${y + 5}" x2="${x + w}" y2="${y + 5}" stroke="#78909C" stroke-width="2.5" stroke-dasharray="2 6" stroke-linecap="round"/>`;
const DEFS = `<defs><marker id="arrow" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1F4E79"/></marker></defs>`;

// ── Contour réaliste de Madagascar (coordonnées géographiques) ──────────
const LAT0 = -11.8, LAT1 = -25.7, LON0 = 43.0, LON1 = 50.6;
const REAL_COAST = [
  [-11.95, 49.26], [-12.28, 49.32], [-12.53, 49.45], [-13.65, 50.00], [-14.27, 50.03],
  [-14.88, 50.27], [-15.35, 50.50], [-15.98, 50.23], [-15.60, 49.75], [-16.17, 49.87],
  [-17.15, 49.44], [-18.15, 49.42], [-19.90, 48.81], [-21.23, 48.35], [-22.15, 48.02],
  [-22.79, 47.85], [-23.85, 47.55], [-25.03, 46.99], [-25.59, 45.16], [-24.68, 43.95],
  [-23.35, 43.67], [-21.75, 43.37], [-20.28, 44.28], [-19.45, 44.45], [-18.06, 44.03],
  [-17.00, 44.45], [-14.63, 47.76], [-13.68, 48.45], [-12.55, 49.05],
];
function madaProj(cx, cy, h) {
  const w = h / 1.93;
  return (lat, lon) => [
    cx + (lon - (LON0 + LON1) / 2) / (LON1 - LON0) * w,
    cy + (lat - (LAT0 + LAT1) / 2) / (LAT1 - LAT0) * h,
  ];
}
function madaD(cx, cy, h) {
  const P = madaProj(cx, cy, h);
  return REAL_COAST.map(([la, lo], i) => {
    const [x, y] = P(la, lo);
    return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";
}
function madaR(cx, cy, h, o = {}) {
  const P = madaProj(cx, cy, h), d = madaD(cx, cy, h);
  const f = o.f || "#F1F8E9", s = o.s || "#8D6E63";
  let out = `<path d="${d}" fill="${f}" stroke="${s}" stroke-width="${o.sw || 3}" stroke-linejoin="round"/>`;
  const [nbx, nby] = P(-13.32, 48.26), [smx, smy] = P(-16.9, 49.86);
  out += `<ellipse cx="${nbx.toFixed(1)}" cy="${nby.toFixed(1)}" rx="7" ry="5" fill="${f}" stroke="${s}" stroke-width="2"/>`;
  out += `<ellipse cx="${smx.toFixed(1)}" cy="${smy.toFixed(1)}" rx="3.5" ry="10" fill="${f}" stroke="${s}" stroke-width="2"/>`;
  return out;
}
const P0 = madaProj(300, 335, 470);
const point = (la, lo) => P0(la, lo).map(v => +v.toFixed(1));
const geoLine = (pts, color = "#0288D1", sw = 5, dash = "") => {
  const d = pts.map(([la, lo], i) => { const [x, y] = point(la, lo); return `${i ? "L" : "M"}${x} ${y}`; }).join(" ");
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ""} stroke-linecap="round" stroke-linejoin="round"/>`;
};
const star = (x, y, r = 13) => {
  const pts = Array.from({length: 10}, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .42 : r; return `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)}`; }).join(" ");
  return `<polygon points="${pts}" fill="#FFD54F" stroke="#C00000" stroke-width="3"/>`;
};

// Pictogrammes simples
const tree = (x, y, s = 1, c = "#2E7D32") => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-3" y="5" width="6" height="17" fill="#6D4C41"/><circle cx="0" cy="0" r="13" fill="${c}"/><circle cx="-9" cy="6" r="9" fill="${c}"/><circle cx="9" cy="6" r="9" fill="${c}"/></g>`;
const grass = (x, y, s = 1, c = "#7CB342") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 18 Q -2 0 -13 -10 M 0 18 Q 2 -2 13 -14 M 0 18 Q 0 -6 0 -18" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/></g>`;
const fish = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="17" ry="9" fill="#0288D1"/><path d="M 15 0 L 27 -9 L 27 9 Z" fill="#0288D1"/><circle cx="-9" cy="-2" r="2" fill="#FFF"/></g>`;
const zebu = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="21" ry="11" fill="#8D6E63"/><circle cx="22" cy="-8" r="7" fill="#8D6E63"/><path d="M 17 -13 L 22 -22 L 28 -13" fill="none" stroke="#5D4037" stroke-width="3"/><line x1="-11" y1="10" x2="-11" y2="21" stroke="#5D4037" stroke-width="3"/><line x1="9" y1="10" x2="9" y2="21" stroke="#5D4037" stroke-width="3"/></g>`;
const field = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-24" y="-15" width="48" height="30" fill="#AED581" stroke="#689F38" stroke-width="2"/><path d="M -24 -5 H 24 M -24 5 H 24 M -10 -15 V 15 M 8 -15 V 15" stroke="#689F38" stroke-width="2"/></g>`;
const factory = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -25 18 V -3 L -10 -13 V -3 L 6 -13 V -3 L 25 -3 V 18 Z" fill="#90A4AE" stroke="#455A64" stroke-width="2"/><rect x="14" y="-28" width="8" height="25" fill="#78909C"/></g>`;
const basket = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -18 -4 L 18 -4 L 13 18 L -13 18 Z" fill="#D7A86E" stroke="#8D6E63" stroke-width="2"/><path d="M -10 -4 Q 0 -22 10 -4" fill="none" stroke="#8D6E63" stroke-width="3"/><path d="M -10 3 H 10 M -8 10 H 8" stroke="#8D6E63" stroke-width="2"/></g>`;

// ── 1. Rose des vents ───────────────────────────────────────────────────
function roseVents() {
  const cx = 300, cy = 340, R = 190, R2 = 135;
  const dirs = [[0,"N",R],[45,"……",R2],[90,"……",R],[135,"……",R2],[180,"……",R],[225,"……",R2],[270,"……",R],[315,"……",R2]];
  const rays = dirs.map(([a, lab, r]) => {
    const rad=(a-90)*Math.PI/180, x2=cx+r*Math.cos(rad), y2=cy+r*Math.sin(rad), xl=cx+(r+38)*Math.cos(rad), yl=cy+(r+38)*Math.sin(rad);
    return `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${a===0?'#C00000':'#1F4E79'}" stroke-width="${a%90===0?7:4}" stroke-linecap="round"/><text x="${xl.toFixed(1)}" y="${(yl+8).toFixed(1)}" text-anchor="middle" font-size="${a===0?34:25}" font-weight="bold" fill="${a===0?'#C00000':'#1F4E79'}">${lab}</text>`;
  }).join("");
  return `${H()}${title("La rose des vents à compléter")}${rays}<circle cx="${cx}" cy="${cy}" r="24" fill="#FFF" stroke="#546E7A" stroke-width="4"/>
  ${box(545,115,410,330,"#FFF8E1")}${txt(750,155,"Consigne : écris les sept directions",{z:18,b:true,c:"#E65100"})}${txt(750,180,"qui manquent sur la rose des vents.",{z:18,b:true,c:"#E65100"})}
  ${txt(585,235,"Points cardinaux :",{a:"start",z:18,b:true})}${txt(585,270,"Nord — ………… — ………… — …………",{a:"start",z:17})}
  ${txt(585,330,"Directions intermédiaires :",{a:"start",z:18,b:true})}${txt(585,365,"NE — ………… — ………… — …………",{a:"start",z:17})}
  ${txt(750,600,"Aide-toi des séances 1 à 8.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 2. Orientation et capitale ──────────────────────────────────────────
function carteMada() {
  const [tx,ty]=point(-18.91,47.51);
  return `${H()}${DEFS}${title("Carte muette : s'orienter à Madagascar")}${madaR(300,335,470)}${star(tx,ty,14)}
  ${txt(300,82,"……",{z:27,b:true,c:"#1F4E79"})}${txt(300,625,"……",{z:27,b:true,c:"#1F4E79"})}${txt(145,345,"……",{z:27,b:true,c:"#1F4E79"})}${txt(455,345,"……",{z:27,b:true,c:"#1F4E79"})}
  ${box(520,105,430,365,"#FFF8E1")}${txt(735,145,"Consigne",{z:21,b:true,c:"#E65100"})}${txt(550,185,"1. Écris les quatre points cardinaux",{a:"start",z:18})}${txt(550,215,"autour de la carte.",{a:"start",z:18})}
  ${txt(550,270,"2. L'étoile marque la capitale :",{a:"start",z:18})}${txt(550,305,"son nom est ………………………………",{a:"start",z:18})}${txt(550,360,"3. Entoure l'île de Nosy Be et",{a:"start",z:18})}${txt(550,390,"souligne l'île Sainte-Marie.",{a:"start",z:18})}
  ${txt(735,600,"Aide-toi des séances 3 à 7.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 3. Reliefs ──────────────────────────────────────────────────────────
function reliefs() {
  const d=madaD(300,335,470), P=point;
  const marks=[[-18.9,47.1,1],[-18.0,49.1,2],[-18.0,44.8,3],[-23.3,45.5,4]].map(([la,lo,n])=>{const [x,y]=P(la,lo);return badge(x,y,n,"#6D4C41");}).join("");
  return `${H()}${title("Carte muette : les grands reliefs de Madagascar")}<defs><clipPath id="reliefClip"><path d="${d}"/></clipPath></defs>
  <path d="${d}" fill="#F5F5F5"/><g clip-path="url(#reliefClip)"><rect x="180" y="95" width="90" height="500" fill="#FFE0B2"/><rect x="270" y="95" width="65" height="500" fill="#BCAAA4"/><rect x="335" y="95" width="95" height="500" fill="#C8E6C9"/><rect x="210" y="475" width="190" height="125" fill="#FFCC80"/></g>${madaR(300,335,470,{f:"none"})}${marks}
  ${box(505,100,465,410)}${txt(737,140,"Consigne : nomme les quatre reliefs",{z:18,b:true,c:"#E65100"})}${txt(737,164,"repérés par les numéros.",{z:18,b:true,c:"#E65100"})}
  ${ligneLeg(545,225,1)}${ligneLeg(545,285,2)}${ligneLeg(545,345,3)}${ligneLeg(545,405,4)}
  ${txt(737,465,"Mots utiles : Hautes Terres — plaine",{z:16,c:"#546E7A"})}${txt(737,488,"côtière de l'Est — plaines de l'Ouest — Sud",{z:16,c:"#546E7A"})}
  ${txt(737,600,"Aide-toi de la séance 26.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 4. Cours d'eau et lacs ──────────────────────────────────────────────
function hydrographie() {
  const rivers=[
    [[-18.9,47.4],[-17.8,46.9],[-16.2,46.3]],
    [[-19.7,47.0],[-19.8,45.8],[-19.7,44.4]],
    [[-21.3,46.8],[-21.7,45.3],[-21.8,43.5]],
    [[-23.2,46.2],[-23.4,44.9],[-23.6,43.8]],
    [[-17.8,48.5],[-18.1,49.4]],
  ].map(p=>geoLine(p)).join("");
  const lakes=[[-17.5,48.5,5],[-19.1,46.8,6]].map(([la,lo,n])=>{const [x,y]=point(la,lo);return `<ellipse cx="${x}" cy="${y}" rx="9" ry="6" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>${badge(x+16,y-12,n)}`;}).join("");
  const starts=[[-16.2,46.3,1],[-19.7,44.4,2],[-21.8,43.5,3],[-23.6,43.8,4]].map(([la,lo,n])=>{const [x,y]=point(la,lo);return badge(x,y,n);}).join("");
  return `${H()}${title("Carte muette : cours d'eau et lacs de Madagascar")}${madaR(300,335,470)}${rivers}${lakes}${starts}
  ${box(500,100,470,420,"#EAF4FB")}${txt(735,140,"Consigne : identifie les éléments numérotés.",{z:18,b:true,c:"#E65100"})}${txt(735,166,"Écris « fleuve » ou « lac », puis leur nom.",{z:17,b:true,c:"#E65100"})}
  ${ligneLeg(535,225,1)}${ligneLeg(750,225,2)}${ligneLeg(535,285,3)}${ligneLeg(750,285,4)}${ligneLeg(535,345,5)}${ligneLeg(750,345,6)}
  ${txt(735,420,"Complète : un cours d'eau va de la",{z:17})}${txt(735,450,"…………………… à l'…………………… .",{z:17})}
  ${txt(735,600,"Aide-toi des séances 27 et 28.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 5. Climats ──────────────────────────────────────────────────────────
function climats() {
  const d=madaD(300,335,470);
  const pos=[[-18.8,47.2,1],[-17.8,49.2,2],[-18.3,44.8,3],[-24.0,45.2,4]].map(([la,lo,n])=>{const [x,y]=point(la,lo);return badge(x,y,n,"#455A64");}).join("");
  return `${H()}${title("Carte muette : les climats de Madagascar")}<defs><clipPath id="climatClip"><path d="${d}"/></clipPath></defs>
  <path d="${d}" fill="#F5F5F5"/><g clip-path="url(#climatClip)"><rect x="170" y="85" width="115" height="510" fill="#FFF59D"/><rect x="285" y="85" width="55" height="510" fill="#B3E5FC"/><rect x="340" y="85" width="105" height="510" fill="#A5D6A7"/><rect x="190" y="475" width="220" height="125" fill="#FFCC80"/></g>${madaR(300,335,470,{f:"none"})}${pos}
  ${box(500,100,470,420)}${txt(735,140,"Consigne : écris le nom des quatre",{z:18,b:true,c:"#E65100"})}${txt(735,164,"régions climatiques dans la légende.",{z:18,b:true,c:"#E65100"})}
  ${ligneLeg(540,225,1)}${ligneLeg(540,285,2)}${ligneLeg(540,345,3)}${ligneLeg(540,405,4)}
  ${txt(735,465,"Mots utiles : Hautes Terres — Est humide —",{z:16,c:"#546E7A"})}${txt(735,490,"Ouest chaud et sec — Grand Sud semi-aride",{z:16,c:"#546E7A"})}
  ${txt(735,600,"Aide-toi des séances 34 et 35.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 6. Végétation ───────────────────────────────────────────────────────
function vegetation() {
  const items=[[-16.6,49.3,1,'tree'],[-19.0,49.1,2,'tree'],[-18.0,44.8,3,'grass'],[-24.0,45.0,4,'grass']];
  let icons="";
  items.forEach(([la,lo,n,type])=>{const [x,y]=point(la,lo);icons+=(type==='tree'?tree(x,y,0.75):grass(x,y,0.9,type==='grass'&&n===4?'#A1887F':'#7CB342'))+badge(x+18,y-20,n,"#1E7B34");});
  return `${H()}${title("Carte muette : les grandes formations végétales")}${madaR(300,335,470)}${icons}
  ${box(500,100,470,420,"#F1F8E9")}${txt(735,140,"Consigne : nomme la végétation de chaque",{z:18,b:true,c:"#E65100"})}${txt(735,164,"zone et relie-la au climat correspondant.",{z:18,b:true,c:"#E65100"})}
  ${ligneLeg(540,225,1)}${ligneLeg(540,285,2)}${ligneLeg(540,345,3)}${ligneLeg(540,405,4)}
  ${txt(735,465,"Mots utiles : forêt humide — forêt littorale —",{z:16,c:"#546E7A"})}${txt(735,490,"savane — steppe épineuse",{z:16,c:"#546E7A"})}
  ${txt(735,600,"Aide-toi des séances 29 et 35.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 7. Population ───────────────────────────────────────────────────────
function population() {
  const dense=[[-18.91,47.51],[-19.2,47.3],[-19.6,47.1],[-19.87,47.03],[-20.53,47.24],[-21.44,47.09],[-18.15,49.42],[-17.6,48.2],[-17.05,49.43],[-15.72,46.32],[-12.28,49.29]];
  const sparse=[[-17.9,44.35],[-20.0,44.4],[-22.4,46.12],[-23.3,43.8],[-25.2,45.9],[-24.9,46.99]];
  let dots="";
  dense.forEach(([la,lo],i)=>{const [x,y]=point(la,lo);dots+=`<circle cx="${x}" cy="${y}" r="${i<6?4:3}" fill="#C00000"/>`;});
  sparse.forEach(([la,lo])=>{const [x,y]=point(la,lo);dots+=`<circle cx="${x}" cy="${y}" r="3" fill="#1E7B34"/>`;});
  const zones=[[-19.1,47.4,1],[-17.3,49.4,2],[-19.0,44.5,3],[-24.2,45.5,4]].map(([la,lo,n])=>{const [x,y]=point(la,lo);return badge(x,y,n);}).join("");
  return `${H()}${title("Carte muette : la répartition de la population")}${madaR(300,335,470)}${dots}${zones}
  ${box(500,100,470,430,"#FFF8E1")}${txt(735,140,"Points rouges : population nombreuse",{z:17,b:true,c:"#C00000"})}${txt(735,166,"Points verts : population moins nombreuse",{z:17,b:true,c:"#1E7B34"})}
  ${txt(535,215,"Consigne : décris chaque zone.",{a:"start",z:18,b:true,c:"#E65100"})}${ligneLeg(540,260,1)}${ligneLeg(540,315,2)}${ligneLeg(540,370,3)}${ligneLeg(540,425,4)}
  ${txt(535,480,"La population est répartie de façon",{a:"start",z:17})}${txt(535,508,"……………………………… sur le territoire.",{a:"start",z:17})}
  ${txt(735,600,"Aide-toi des séances 57 à 63.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

// ── 8. Activités quotidiennes ───────────────────────────────────────────
function activites() {
  const entries=[[-19.3,47.1,1,'field'],[-20.0,44.8,2,'zebu'],[-16.0,49.4,3,'fish'],[-21.4,47.1,4,'basket'],[-18.9,47.6,5,'factory'],[-15.7,46.3,6,'fish']];
  let icons="";
  entries.forEach(([la,lo,n,k])=>{const [x,y]=point(la,lo);const f={field,zebu,fish,basket,factory}[k];icons+=f(x,y,k==='factory'?.6:.72)+badge(x+20,y-20,n,"#C00000");});
  return `${H()}${title("Carte muette : les activités de la population")}${madaR(300,335,470)}${icons}
  ${box(500,95,470,440,"#F5F9FC")}${txt(735,135,"Consigne : nomme l'activité représentée",{z:18,b:true,c:"#E65100"})}${txt(735,160,"par chaque pictogramme numéroté.",{z:18,b:true,c:"#E65100"})}
  ${ligneLeg(535,220,1)}${ligneLeg(750,220,2)}${ligneLeg(535,280,3)}${ligneLeg(750,280,4)}${ligneLeg(535,340,5)}${ligneLeg(750,340,6)}
  ${txt(535,410,"Classe ensuite les activités :",{a:"start",z:18,b:true})}${txt(535,445,"activités de la terre : ………………………",{a:"start",z:17})}${txt(535,480,"activités de transformation : ……………",{a:"start",z:17})}${txt(535,515,"activités d'échange : ………………………",{a:"start",z:17})}
  ${txt(735,600,"Aide-toi des séances 67 à 74.",{z:18,i:true,c:"#546E7A"})}</svg>`;
}

const SVG = {
  geot4_rose_vents_vide: roseVents(),
  geot4_carte_muette_mada: carteMada(),
  geot4_carte_muette_reliefs: reliefs(),
  geot4_carte_muette_hydrographie: hydrographie(),
  geot4_carte_muette_climats: climats(),
  geot4_carte_muette_vegetation: vegetation(),
  geot4_carte_muette_population: population(),
  geot4_carte_muette_activites: activites(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    fs.writeFileSync(path.join(OUT, "svg", `${name}.svg`), svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(REPO, `${name}.png`));
    console.log(`OK ${name}.png`);
  }
})();
