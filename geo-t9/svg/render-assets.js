const sharp=require('sharp'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..');
function esc(s){return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
function flow(title,steps,colors=['#1565C0','#00897B','#EF6C00','#7B1FA2']){
 const boxes=steps.map((s,i)=>{const x=35+i*285;const parts=s.split('|');return `<g><rect x="${x}" y="190" width="250" height="300" rx="24" fill="#fff" stroke="${colors[i]}" stroke-width="5"/><circle cx="${x+125}" cy="255" r="38" fill="${colors[i]}"/><text x="${x+125}" y="267" text-anchor="middle" font-family="Arial" font-size="32" font-weight="700" fill="#fff">${i+1}</text><text x="${x+125}" y="330" text-anchor="middle" font-family="Arial" font-size="26" font-weight="700" fill="#17324d">${esc(parts[0])}</text>${parts.slice(1).map((p,j)=>`<text x="${x+125}" y="${385+j*38}" text-anchor="middle" font-family="Arial" font-size="20" fill="#37474f">${esc(p)}</text>`).join('')}</g>${i<3?`<path d="M${x+255} 340H${x+280}" stroke="#607D8B" stroke-width="8" marker-end="url(#a)"/>`:''}`}).join('');
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650"><defs><linearGradient id="b" x2="1" y2="1"><stop stop-color="#E3F2FD"/><stop offset="1" stop-color="#FFF8E1"/></linearGradient><marker id="a" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#607D8B"/></marker></defs><rect width="1200" height="650" rx="28" fill="url(#b)"/><text x="600" y="80" text-anchor="middle" font-family="Arial" font-size="42" font-weight="800" fill="#123B5D">${esc(title)}</text><text x="600" y="125" text-anchor="middle" font-family="Arial" font-size="22" fill="#455A64">Fiche d’activité — Géographie T9</text>${boxes}<text x="600" y="585" text-anchor="middle" font-family="Arial" font-size="22" font-weight="700" fill="#264653">Observer • expliquer • organiser • vérifier</text></svg>`;
}
(async()=>{
 const copies={
 'geo9_relief_madagascar.png':'geo5_relief_formes.png','geo9_climats_vegetation.png':'geo5_zones_climatiques1.png','geo9_hydrographie.png':'geo5_fleuves1.png','geo9_regions_naturelles.png':'geo5_carte_regions.png','geo9_reseaux_economie.png':'geo6_transport.png','geo9_population.png':'geo6_repartition_population.png'};
 for(const [dst,src] of Object.entries(copies))fs.copyFileSync(path.join(root,src),path.join(root,dst));
 const extras={
  'geo9_devoir_compose.png':flow('Méthode du devoir composé',['Analyser|mots clés|limites|problématique','Introduire|phrase d’entrée|définitions|annonce du plan','Développer|arguments|faits précis|transitions','Conclure|réponse|synthèse|ouverture']),
  'geo9_projet_pme.png':flow('De la ressource à la petite entreprise',['Diagnostiquer|besoin local|ressources|partenaires','Étudier|clients|technique|impacts','Budgéter|coûts|recettes|financement','Présenter|maquette|emplois|suivi'],['#2E7D32','#0277BD','#F57C00','#6A1B9A'])};
 for(const [name,svg] of Object.entries(extras))await sharp(Buffer.from(svg)).png().toFile(path.join(root,name));
 const svgs=fs.readdirSync(__dirname).filter(f=>/^geo9_s\d\d\.svg$/.test(f));
 await Promise.all(svgs.map(f=>sharp(path.join(__dirname,f),{density:130}).png().toFile(path.join(root,f.replace('.svg','.png')))));
 console.log('Schémas rendus :',svgs.length,'; annexes :',Object.keys(copies).length+Object.keys(extras).length);
})().catch(e=>{console.error(e);process.exit(1)});
