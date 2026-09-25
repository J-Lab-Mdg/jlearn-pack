const {svgPng, svgHead} = require('./lib');

/* ---- L5 : aires d’assemblages ---- */
svgPng('t7u5s5_L', svgHead(1000,430,'Un terrain en L : découper en rectangles') + `
<g font-family="serif">
<polygon points="90,110 240,110 240,210 330,210 330,320 90,320" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<line x1="90" y1="210" x2="240" y2="210" stroke="#C2185B" stroke-width="3" stroke-dasharray="8 6"/>
<text x="165" y="166" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">① 5 × 3</text>
<text x="210" y="272" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">② 8 × 2</text>
<text x="165" y="345" font-size="21" text-anchor="middle" fill="#222">côtés en m</text>
<rect x="440" y="105" width="490" height="235" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="685" y="150" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">A = A₁ + A₂</text>
<text x="685" y="198" font-size="22" text-anchor="middle" fill="#222">A₁ = 5 × 3 = 15 ; A₂ = 8 × 2 = 16</text>
<text x="685" y="248" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">A = 15 + 16 = 31 m²</text>
<text x="685" y="298" font-size="18" text-anchor="middle" fill="#555">le découpage en pointillés ne change pas l’aire</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Un assemblage se découpe en figures connues : les aires s’ajoutent.</text>
</g></svg>`);

svgPng('t7u5s5_maison', svgHead(1000,430,'Un mur + un pignon : rectangle et triangle') + `
<g font-family="serif">
<rect x="110" y="190" width="230" height="130" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<polygon points="110,190 340,190 225,110" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="225" y="345" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">6 m</text>
<text x="360" y="262" font-size="22" fill="#1F4E79" font-weight="bold">4 m</text>
<text x="262" y="150" font-size="20" fill="#C2185B" font-weight="bold">h = 2</text>
<rect x="470" y="105" width="460" height="235" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="700" y="150" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">mur : 6 × 4 = 24 m²</text>
<text x="700" y="198" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">pignon : (6 × 2) : 2 = 6 m²</text>
<text x="700" y="252" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">facade : 24 + 6 = 30 m²</text>
<text x="500" y="395" text-anchor="middle" font-size="23" fill="#333">La façade entière = le rectangle + le triangle du pignon.</text>
</g></svg>`);

svgPng('t7u5s5_soustraire', svgHead(1000,430,'Un cadre : soustraire les aires') + `
<g font-family="serif">
<rect x="100" y="100" width="280" height="224" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<rect x="128" y="128" width="224" height="168" fill="white" stroke="#1F4E79" stroke-width="3"/>
<text x="240" y="218" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">photo 8 × 6</text>
<text x="240" y="345" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">cadre entier : 10 × 8</text>
<rect x="470" y="105" width="460" height="235" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="700" y="150" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">bord = grand − petit</text>
<text x="700" y="198" font-size="22" text-anchor="middle" fill="#222">10 × 8 = 80 ; 8 × 6 = 48</text>
<text x="700" y="252" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">80 − 48 = 32 cm²</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">La partie enlevée se soustrait : l’aire du bord est la différence des deux aires.</text>
</g></svg>`);

/* ---- L6 : unités de volume ---- */
svgPng('t7u5s6_unites', svgHead(1000,430,'Les unités de volume : marches de mille') + `
<g font-family="serif">
${['m³','dm³','cm³','mm³'].map((u,i)=>`<rect x="${160+i*190}" y="${110+i*50}" width="190" height="60" fill="${i%2?'#EAF2F8':'#FCE4D6'}" stroke="#1F4E79" stroke-width="2.5"/><text x="${255+i*190}" y="${150+i*50}" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">${u}</text>`).join('')}
${[0,1,2].map(i=>`<text x="${355+i*190}" y="${200+i*50}" font-size="21" text-anchor="middle" fill="#C2185B" font-weight="bold">×1000</text>`).join('')}
<rect x="200" y="315" width="600" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="353" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³</text>
<text x="500" y="410" font-size="21" text-anchor="middle" fill="#333">Attention : les volumes passent de mille en mille, pas de dix en dix.</text>
</g></svg>`);

svgPng('t7u5s6_cm3', svgHead(1000,430,'Compter les petits cubes') + `
<g font-family="serif">
<rect x="90" y="140" width="80" height="80" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="130" y="188" font-size="20" text-anchor="middle" fill="#C2185B" font-weight="bold">1 cm³</text>
<text x="130" y="252" font-size="19" text-anchor="middle" fill="#555">l’unité-cube</text>
${(()=>{let r='';for(let c=0;c<3;c++)for(let l=0;l<2;l++){r+=`<rect x="${300+c*85+(3-c)*0}" y="${180+l*70}" width="85" height="70" fill="${(c+l)%2?'#EAF2F8':'#DCE9F2'}" stroke="#1F4E79" stroke-width="2.5"/>`;} return r;})()}
${(()=>{let r='';for(let c=0;c<3;c++)for(let l=0;l<2;l++){r+=`<rect x="${300+c*85}" y="${110+l*70}" width="85" height="70" fill="${(c+l)%2?'#CFE0EC':'#EAF2F8'}" stroke="#1F4E79" stroke-width="2.5"/>`;} return r;})()}
<text x="428" y="345" font-size="21" text-anchor="middle" fill="#1F4E79">3 × 2 × 2 = 12 cubes</text>
<rect x="620" y="130" width="310" height="190" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="775" y="172" font-size="21" text-anchor="middle" fill="#1F4E79" font-weight="bold">le pavé contient</text>
<text x="775" y="220" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">12 cm³</text>
<text x="775" y="268" font-size="19" text-anchor="middle" fill="#555">4 couches de 6 ? Non :</text>
<text x="775" y="296" font-size="19" text-anchor="middle" fill="#555">2 couches de 6 cubes</text>
<text x="500" y="405" font-size="23" text-anchor="middle" fill="#333">Le volume se mesure en comptant les cubes-unité qu’il contient.</text>
</g></svg>`);

svgPng('t7u5s6_pave', svgHead(1000,430,'Le volume du pavé droit') + `
<g font-family="serif">
<rect x="110" y="170" width="220" height="140" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="330" y1="170" x2="410" y2="110" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="110" y1="170" x2="190" y2="110" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="190" y1="110" x2="410" y2="110" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="410" y1="110" x2="410" y2="250" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="330" y1="310" x2="410" y2="250" stroke="#1F4E79" stroke-width="3.5" stroke-dasharray="6 5"/>
<text x="220" y="340" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">L = 5 cm</text>
<text x="440" y="300" font-size="22" fill="#1F4E79" font-weight="bold">l = 3</text>
<text x="150" y="140" font-size="22" fill="#1F4E79" font-weight="bold">h = 2</text>
<rect x="540" y="120" width="380" height="210" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="730" y="165" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">V = L × l × h</text>
<text x="730" y="212" font-size="22" text-anchor="middle" fill="#222">5 × 3 × 2 = 30</text>
<text x="730" y="262" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">V = 30 cm³</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Longueur, largeur, hauteur : trois mesures pour un seul volume.</text>
</g></svg>`);

/* ---- L7 : correspondance volume ↔ contenance ---- */
svgPng('t7u5s7_corresp', svgHead(1000,430,'1 litre = 1 décimètre cube') + `
<g font-family="serif">
<rect x="110" y="140" width="160" height="160" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="270" y1="140" x2="320" y2="100" stroke="#1F4E79" stroke-width="3"/>
<line x1="110" y1="140" x2="160" y2="100" stroke="#1F4E79" stroke-width="3"/>
<line x1="160" y1="100" x2="320" y2="100" stroke="#1F4E79" stroke-width="3"/>
<line x1="320" y1="100" x2="320" y2="260" stroke="#1F4E79" stroke-width="3"/>
<line x1="270" y1="300" x2="320" y2="260" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<text x="215" y="230" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">1 dm³</text>
<text x="215" y="330" font-size="20" text-anchor="middle" fill="#555">cube de 1 dm d’arête</text>
<path d="M430 210 L 500 210" stroke="#1E7B34" stroke-width="5"/>
<path d="M487 198 L 505 210 L 487 222" fill="none" stroke="#1E7B34" stroke-width="5"/>
<path d="M620 140 L 620 300 L 695 300 L 695 140" fill="none" stroke="#C2185B" stroke-width="3.5"/>
<path d="M640 140 L 640 120 L 675 120 L 675 140" fill="none" stroke="#C2185B" stroke-width="3.5"/>
<path d="M620 168 L 695 168 L 695 300 L 620 300 Z" fill="#BFD7EA"/>
<text x="657" y="240" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">1 L</text>
<text x="657" y="330" font-size="20" text-anchor="middle" fill="#555">bouteille d’un litre</text>
<rect x="760" y="150" width="200" height="150" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="860" y="195" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">même quantité</text>
<text x="860" y="240" font-size="20" text-anchor="middle" fill="#222">le litre remplit</text>
<text x="860" y="270" font-size="20" text-anchor="middle" fill="#222">exactement le cube</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Un litre d’eau occupe exactement le volume d’un cube de 1 dm d’arête.</text>
</g></svg>`);

svgPng('t7u5s7_mille', svgHead(1000,430,'1 mètre cube = 1 000 litres') + `
<g font-family="serif">
<rect x="90" y="150" width="180" height="180" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="270" y1="150" x2="330" y2="105" stroke="#1F4E79" stroke-width="3"/>
<line x1="90" y1="150" x2="150" y2="105" stroke="#1F4E79" stroke-width="3"/>
<line x1="150" y1="105" x2="330" y2="105" stroke="#1F4E79" stroke-width="3"/>
<line x1="330" y1="105" x2="330" y2="285" stroke="#1F4E79" stroke-width="3"/>
<line x1="270" y1="330" x2="330" y2="285" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<text x="180" y="248" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">1 m³</text>
<text x="180" y="360" font-size="20" text-anchor="middle" fill="#555">grande citerne cubique</text>
${(()=>{let r='';for(let i=0;i<10;i++){r+=`<rect x="${430+(i%5)*46}" y="${140+((i/5)|0)*60}" width="42" height="54" fill="#FCE4D6" stroke="#C2185B" stroke-width="2"/><text x="${451+(i%5)*46}" y="${176+((i/5)|0)*60}" font-size="16" text-anchor="middle" fill="#C2185B" font-weight="bold">100 L</text>`;} return r;})()}
<text x="545" y="290" font-size="20" text-anchor="middle" fill="#C2185B" font-weight="bold">10 × 100 L…</text>
<rect x="730" y="140" width="230" height="190" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="845" y="182" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">1 m³ = 1 000 dm³</text>
<text x="845" y="228" font-size="22" text-anchor="middle" fill="#222">= 1 000 L</text>
<text x="845" y="280" font-size="19" text-anchor="middle" fill="#555">car 1 dm³ = 1 L</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Dans un mètre cube, il y a place pour exactement mille litres.</text>
</g></svg>`);

svgPng('t7u5s7_tableau', svgHead(1000,430,'Le tableau de correspondance') + `
<g font-family="serif">
<rect x="70" y="100" width="145" height="48" fill="#1F4E79"/><text x="142" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">m³</text>
<rect x="215" y="100" width="145" height="48" fill="#1F4E79"/><text x="287" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">dm³</text>
<rect x="360" y="100" width="145" height="48" fill="#1F4E79"/><text x="432" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">cm³</text>
<rect x="505" y="100" width="145" height="48" fill="#1E7B34"/><text x="577" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">L</text>
<rect x="650" y="100" width="145" height="48" fill="#1E7B34"/><text x="722" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">dL</text>
<rect x="795" y="100" width="145" height="48" fill="#1E7B34"/><text x="867" y="132" font-size="21" text-anchor="middle" fill="white" font-weight="bold">cL / mL</text>
<path d="M287 168 L 287 190" stroke="#C2185B" stroke-width="4"/>
<path d="M577 168 L 577 190" stroke="#C2185B" stroke-width="4"/>
<rect x="240" y="195" width="385" height="58" rx="10" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="432" y="233" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">dm³ et L sont en vis-à-vis</text>
${[['20 L = 20 dm³','390'],['250 mL = 250 cm³','465'],['2 m³ = 2 000 L','540']].map((ex,i)=>`<text x="${80+ (i)*0}" y="${310+i*36}" font-size="22" fill="#222">Exemple ${i+1} : ${ex[0]}</text>`).join('')}
<text x="500" y="130" font-size="0" fill="none">.</text>
</g></svg>`);

/* ---- L8 : problèmes de mesure (synthèse) ---- */
svgPng('t7u5s8_etapes', svgHead(1000,430,'Résoudre un problème de mesure : les trois étapes') + `
<g font-family="serif">
<rect x="60" y="105" width="270" height="225" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="195" y="150" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">1. Convertir</text>
<text x="195" y="195" font-size="20" text-anchor="middle" fill="#222">une seule unité partout</text>
<text x="195" y="235" font-size="20" text-anchor="middle" fill="#222">avant de calculer</text>
<text x="195" y="285" font-size="19" text-anchor="middle" fill="#555">escalier ou tableau</text>
<rect x="365" y="105" width="270" height="225" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="500" y="150" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">2. Calculer</text>
<text x="500" y="195" font-size="20" text-anchor="middle" fill="#222">opération ou formule :</text>
<text x="500" y="235" font-size="20" text-anchor="middle" fill="#222">P, A, V, +, −, ×, :</text>
<text x="500" y="285" font-size="19" text-anchor="middle" fill="#555">poser ligne par ligne</text>
<rect x="670" y="105" width="270" height="225" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="805" y="150" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">3. Conclure</text>
<text x="805" y="195" font-size="20" text-anchor="middle" fill="#222">réponse avec l’unité</text>
<text x="805" y="235" font-size="20" text-anchor="middle" fill="#222">demandée à la fin</text>
<text x="805" y="285" font-size="19" text-anchor="middle" fill="#555">phrase de conclusion</text>
<text x="500" y="390" font-size="23" text-anchor="middle" fill="#333">Convertir, calculer, conclure : toujours dans cet ordre.</text>
</g></svg>`);

svgPng('t7u5s8_exemple', svgHead(1000,430,'Exemple résolu : la clôture du champ') + `
<g font-family="serif">
<rect x="90" y="140" width="300" height="130" fill="none" stroke="#1F4E79" stroke-width="3.5"/>
<text x="240" y="128" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">45 m</text>
<text x="415" y="212" font-size="23" fill="#1F4E79" font-weight="bold">30 m</text>
<text x="240" y="212" font-size="21" text-anchor="middle" fill="#555">champ rectangulaire</text>
<rect x="480" y="95" width="450" height="285" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="705" y="137" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">solution rédigée</text>
<text x="705" y="180" font-size="21" text-anchor="middle" fill="#222">P = 2 × (45 + 30)</text>
<text x="705" y="222" font-size="21" text-anchor="middle" fill="#222">P = 2 × 75 = 150 m</text>
<text x="705" y="268" font-size="20" text-anchor="middle" fill="#222">150 × 12 = 1 800 m de fil (3 rangs)</text>
<text x="705" y="318" font-size="20" text-anchor="middle" fill="#555">Il faut 150 m de clôture, soit</text>
<text x="705" y="348" font-size="20" text-anchor="middle" fill="#555">1 800 m de fil pour trois rangs.</text>
</g></svg>`);

svgPng('t7u5s8_bilan', svgHead(1000,430,'Bilan de l’unité : ce que je sais mesurer') + `
<g font-family="serif">
<rect x="55" y="100" width="425" height="130" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="267" y="142" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">Périmètres</text>
<text x="267" y="182" font-size="20" text-anchor="middle" fill="#222">P = 2(L+l) ; P = 4c ; C = 2πR</text>
<text x="267" y="214" font-size="18" text-anchor="middle" fill="#555">longueur du tour, en m, cm…</text>
<rect x="520" y="100" width="425" height="130" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="732" y="142" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">Aires</text>
<text x="732" y="182" font-size="20" text-anchor="middle" fill="#222">A = L×l ; A = c² ; A = (b×h):2</text>
<text x="732" y="214" font-size="18" text-anchor="middle" fill="#555">surface, en m², cm² ; assemblages ±</text>
<rect x="55" y="250" width="425" height="130" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="267" y="292" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">Volumes</text>
<text x="267" y="332" font-size="20" text-anchor="middle" fill="#222">V = L×l×h</text>
<text x="267" y="364" font-size="18" text-anchor="middle" fill="#555">m³ ↔ dm³ ↔ cm³ : de mille en mille</text>
<rect x="520" y="250" width="425" height="130" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="732" y="292" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">Contenances</text>
<text x="732" y="332" font-size="20" text-anchor="middle" fill="#222">1 L = 1 dm³ ; 1 m³ = 1 000 L</text>
<text x="732" y="364" font-size="18" text-anchor="middle" fill="#555">litres, jerricans, citernes</text>
<text x="500" y="415" font-size="22" text-anchor="middle" fill="#333">Et toujours : convertir avant de calculer.</text>
</g></svg>`);
