const {svgPng, svgHead} = require('./lib');

/* ---- L1 : grandeurs mesurables et conversions ---- */
svgPng('t7u5s1_grandeurs', svgHead(1000,430,'Trois familles de grandeurs mesurables') + `
<g font-family="serif">
<rect x="50" y="100" width="280" height="250" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="190" y="145" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">Longueur</text>
<text x="190" y="190" font-size="21" text-anchor="middle" fill="#222">km — m — cm — mm</text>
<text x="190" y="230" font-size="19" text-anchor="middle" fill="#555">tissu, corde, champ,</text>
<text x="190" y="258" font-size="19" text-anchor="middle" fill="#555">distance entre villages</text>
<text x="190" y="312" font-size="20" text-anchor="middle" fill="#1F4E79" font-style="italic">règle, mètre, décamètre</text>
<rect x="360" y="100" width="280" height="250" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="145" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">Masse</text>
<text x="500" y="190" font-size="21" text-anchor="middle" fill="#222">t — kg — g</text>
<text x="500" y="230" font-size="19" text-anchor="middle" fill="#555">sac de riz, légumes,</text>
<text x="500" y="258" font-size="19" text-anchor="middle" fill="#555">poisson du marché</text>
<text x="500" y="312" font-size="20" text-anchor="middle" fill="#1E7B34" font-style="italic">balance, poids marqués</text>
<rect x="670" y="100" width="280" height="250" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="810" y="145" font-size="25" text-anchor="middle" fill="#C2185B" font-weight="bold">Contenance</text>
<text x="810" y="190" font-size="21" text-anchor="middle" fill="#222">L — dL — cL — mL</text>
<text x="810" y="230" font-size="19" text-anchor="middle" fill="#555">eau, huile, lait,</text>
<text x="810" y="258" font-size="19" text-anchor="middle" fill="#555">jerrican, bouteille</text>
<text x="810" y="312" font-size="20" text-anchor="middle" fill="#C2185B" font-style="italic">récipients gradués</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Chaque grandeur possède ses unités ; on choisit l’unité adaptée à l’objet mesuré.</text>
</g></svg>`);

svgPng('t7u5s1_escalier', svgHead(1000,430,'L’escalier des unités de longueur') + `
<g font-family="serif">
${['km','hm','dam','m','dm','cm','mm'].map((u,i)=>`<rect x="${90+i*118}" y="${110+i*30}" width="118" height="55" fill="${i%2?'#EAF2F8':'#FCE4D6'}" stroke="#1F4E79" stroke-width="2.5"/><text x="${149+i*118}" y="${145+i*30}" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">${u}</text>`).join('')}
${[0,1,2,3,4,5].map(i=>`<text x="${208+i*118}" y="${195+i*30}" font-size="21" text-anchor="middle" fill="#C2185B" font-weight="bold">×10</text>`).join('')}
<path d="M105 105 L 950 350" stroke="none" fill="none"/>
<text x="500" y="400" font-size="22" text-anchor="middle" fill="#333">Descendre d’une marche : multiplier par 10 ; monter : diviser par 10.</text>
</g></svg>`);

svgPng('t7u5s1_tableau', svgHead(1000,430,'Convertir : placer le nombre dans le tableau') + `
<g font-family="serif">
${['km','hm','dam','m','dm','cm','mm'].map((u,i)=>`<rect x="${80+i*120}" y="100" width="120" height="46" fill="#1F4E79"/><text x="${140+i*120}" y="131" font-size="22" text-anchor="middle" fill="white" font-weight="bold">${u}</text>`).join('')}
${[0,1,2,3,4,5,6].map(i=>`<rect x="${80+i*120}" y="146" width="120" height="52" fill="#F7F3EE" stroke="#9AB" stroke-width="1.5"/>`).join('')}
${[['2','80'],['5','200'],['0','320'],['0','440']].map(d=>`<text x="${+d[1]+60}" y="182" font-size="27" text-anchor="middle" fill="#C2185B" font-weight="bold">${d[0]}</text>`).join('')}
<text x="955" y="182" font-size="24" fill="#555" text-anchor="end">← virgule en m</text>
<rect x="230" y="235" width="540" height="70" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="279" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">2,5 km = 2 500 m</text>
<text x="500" y="335" font-size="21" text-anchor="middle" fill="#333">Les unités se posent sous l’unité donnée, puis on complète de zéros.</text>
<text x="500" y="385" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">Retenir : 1 km = 1 000 m ; 1 m = 100 cm ; 1 cm = 10 mm.</text>
</g></svg>`);

/* ---- L2 : calculer avec les grandeurs ---- */
svgPng('t7u5s2_regle', svgHead(1000,430,'La règle d’or : convertir AVANT de calculer') + `
<g font-family="serif">
<rect x="120" y="105" width="330" height="200" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="285" y="152" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">à ne jamais faire</text>
<text x="285" y="205" font-size="23" text-anchor="middle" fill="#222">1,2 km + 350 m</text>
<text x="285" y="252" font-size="23" text-anchor="middle" fill="#C00000" font-weight="bold">= 351,2 ???</text>
<text x="285" y="290" font-size="18" text-anchor="middle" fill="#777">unités différentes additionnées</text>
<path d="M480 205 L 540 205" stroke="#1E7B34" stroke-width="5"/>
<path d="M528 193 L 545 205 L 528 217" fill="none" stroke="#1E7B34" stroke-width="5"/>
<rect x="560" y="105" width="330" height="200" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="725" y="152" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">la bonne habitude</text>
<text x="725" y="205" font-size="23" text-anchor="middle" fill="#222">1,2 km = 1 200 m</text>
<text x="725" y="252" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">puis calculer en m</text>
<text x="500" y="380" font-size="23" text-anchor="middle" fill="#333">Une seule unité partout avant toute opération : c’est la première ligne du calcul.</text>
</g></svg>`);

svgPng('t7u5s2_somme', svgHead(1000,430,'Additionner deux longueurs') + `
<g font-family="serif">
<rect x="90" y="115" width="470" height="150" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="325" y="160" font-size="21" text-anchor="middle" fill="#1F4E79" font-weight="bold">ruban bleu : 1,2 km</text>
<text x="325" y="198" font-size="22" text-anchor="middle" fill="#222">conversion : 1,2 × 1 000</text>
<text x="325" y="240" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">= 1 200 m</text>
<rect x="590" y="115" width="320" height="150" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="750" y="160" font-size="21" text-anchor="middle" fill="#C2185B" font-weight="bold">ruban saumon : 350 m</text>
<text x="750" y="198" font-size="22" text-anchor="middle" fill="#222">déjà en mètres</text>
<text x="750" y="240" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">= 350 m</text>
<rect x="230" y="300" width="540" height="70" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="345" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">1 200 + 350 = 1 550 m = 1,55 km</text>
</g></svg>`);

svgPng('t7u5s2_balance', svgHead(1000,430,'Additionner deux masses') + `
<g font-family="serif">
<circle cx="300" cy="165" r="14" fill="#222"/>
<line x1="300" y1="179" x2="300" y2="300" stroke="#222" stroke-width="5"/>
<line x1="160" y1="200" x2="440" y2="200" stroke="#222" stroke-width="5"/>
<line x1="160" y1="200" x2="160" y2="260" stroke="#222" stroke-width="3"/>
<line x1="440" y1="200" x2="440" y2="260" stroke="#222" stroke-width="3"/>
<path d="M110 260 A 50 28 0 0 0 210 260" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<path d="M390 260 A 50 28 0 0 0 490 260" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="160" y="315" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">riz : 2,5 kg</text>
<text x="440" y="315" font-size="20" text-anchor="middle" fill="#C2185B" font-weight="bold">haricots : 750 g</text>
<rect x="560" y="110" width="380" height="215" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="750" y="152" font-size="20" text-anchor="middle" fill="#1E7B34" font-weight="bold">convertir en grammes</text>
<text x="750" y="195" font-size="22" text-anchor="middle" fill="#222">2,5 kg = 2 500 g</text>
<text x="750" y="238" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">2 500 + 750 = 3 250 g</text>
<text x="750" y="285" font-size="22" text-anchor="middle" fill="#222">= 3,25 kg</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Même unité sur les deux plateaux avant d’additionner.</text>
</g></svg>`);

/* ---- L3 : périmètres ---- */
svgPng('t7u5s3_somme', svgHead(1000,430,'Le périmètre : la somme des côtés') + `
<g font-family="serif">
<polygon points="150,330 450,330 320,140" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="142" y="368" font-size="23" fill="#222" font-weight="bold">A</text>
<text x="444" y="368" font-size="23" fill="#222" font-weight="bold">B</text>
<text x="320" y="130" font-size="23" fill="#222" font-weight="bold">C</text>
<text x="300" y="368" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">5 cm</text>
<text x="200" y="235" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">4 cm</text>
<text x="430" y="235" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">3 cm</text>
<rect x="580" y="120" width="360" height="200" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="760" y="165" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">P = AB + BC + CA</text>
<text x="760" y="212" font-size="24" text-anchor="middle" fill="#222">P = 5 + 3 + 4</text>
<text x="760" y="260" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">P = 12 cm</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Le périmètre est la longueur DU TOUR de la figure : on fait le tour en additionnant.</text>
</g></svg>`);

svgPng('t7u5s3_formules', svgHead(1000,430,'Deux formules à connaître') + `
<g font-family="serif">
<rect x="80" y="105" width="420" height="240" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<rect x="140" y="160" width="180" height="100" fill="#FAFCFD" stroke="#1F4E79" stroke-width="3"/>
<text x="230" y="150" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">L = 8 cm</text>
<text x="335" y="215" font-size="22" fill="#1F4E79" font-weight="bold">l = 5</text>
<text x="290" y="300" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">P = 2 × (L + l)</text>
<text x="290" y="332" font-size="21" text-anchor="middle" fill="#222">2 × (8 + 5) = 26 cm</text>
<rect x="530" y="105" width="420" height="240" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<rect x="620" y="140" width="110" height="110" fill="#FAFCFD" stroke="#C2185B" stroke-width="3"/>
<text x="675" y="132" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">c = 6 cm</text>
<text x="740" y="300" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">P = 4 × c</text>
<text x="740" y="332" font-size="21" text-anchor="middle" fill="#222">4 × 6 = 24 cm</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Rectangle : deux longueurs et deux largeurs. Carré : quatre fois le même côté.</text>
</g></svg>`);

svgPng('t7u5s3_cercle', svgHead(1000,430,'La circonférence du cercle') + `
<g font-family="serif">
<circle cx="250" cy="225" r="115" fill="#EAF2F8" stroke="#1F4E79" stroke-width="4"/>
<line x1="250" y1="225" x2="365" y2="225" stroke="#C2185B" stroke-width="4"/>
<circle cx="250" cy="225" r="6" fill="#222"/>
<text x="300" y="212" font-size="23" fill="#C2185B" font-weight="bold">R = 2 cm</text>
<text x="250" y="380" font-size="22" text-anchor="middle" fill="#1F4E79">tour complet ≈ 12,56 cm</text>
<rect x="520" y="110" width="420" height="235" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="730" y="152" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">C = 2 × π × R</text>
<text x="730" y="198" font-size="21" text-anchor="middle" fill="#222">π ≈ 3,14</text>
<text x="730" y="240" font-size="22" text-anchor="middle" fill="#222">C ≈ 2 × 3,14 × 2</text>
<text x="730" y="288" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">C ≈ 12,56 cm</text>
<text x="500" y="415" font-size="21" text-anchor="middle" fill="#333">En déroulant un fil autour du cercle, on mesure un peu plus de 3 fois le diamètre : c’est π.</text>
</g></svg>`);

/* ---- L4 : aires ---- */
svgPng('t7u5s4_rect', svgHead(1000,430,'L’aire du rectangle : compter les carreaux') + `
<g font-family="serif">
${(()=>{let r='';for(let i=0;i<8;i++)for(let j=0;j<5;j++){r+=`<rect x="${90+i*45}" y="${100+j*45}" width="45" height="45" fill="${(i+j)%2?'#EAF2F8':'#FAFCFD'}" stroke="#7A99AF" stroke-width="1.5"/>`;} return r;})()}
<rect x="90" y="100" width="360" height="225" fill="none" stroke="#1F4E79" stroke-width="4"/>
<text x="270" y="88" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">L = 8 carreaux</text>
<text x="475" y="218" font-size="23" fill="#1F4E79" font-weight="bold">l = 5</text>
<rect x="540" y="110" width="400" height="215" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="740" y="155" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">A = L × l</text>
<text x="740" y="203" font-size="23" text-anchor="middle" fill="#222">8 × 5 = 40</text>
<text x="740" y="252" font-size="25" text-anchor="middle" fill="#1F4E79" font-weight="bold">A = 40 cm²</text>
<text x="740" y="296" font-size="18" text-anchor="middle" fill="#555">si le carreau vaut 1 cm²</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">L’aire est le nombre de carreaux-unité : les rangées donnent la multiplication.</text>
</g></svg>`);

svgPng('t7u5s4_carre', svgHead(1000,430,'L’aire du carré : côté fois côté') + `
<g font-family="serif">
${(()=>{let r='';for(let i=0;i<6;i++)for(let j=0;j<6;j++){r+=`<rect x="${120+i*45}" y="${100+j*45}" width="45" height="45" fill="${(i+j)%2?'#FCE4D6':'#FAFCFD'}" stroke="#C28E96" stroke-width="1.5"/>`;} return r;})()}
<rect x="120" y="100" width="270" height="270" fill="none" stroke="#C2185B" stroke-width="4"/>
<text x="255" y="90" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">c = 6</text>
<rect x="480" y="110" width="420" height="210" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="690" y="155" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">A = c × c = c²</text>
<text x="690" y="205" font-size="23" text-anchor="middle" fill="#222">6 × 6 = 36</text>
<text x="690" y="256" font-size="25" text-anchor="middle" fill="#C2185B" font-weight="bold">A = 36 cm²</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">Six rangées de six carreaux : le carré du nombre de côtés.</text>
</g></svg>`);

svgPng('t7u5s4_triangle', svgHead(1000,430,'L’aire du triangle : la moitié du rectangle') + `
<g font-family="serif">
<rect x="90" y="110" width="270" height="180" fill="#EAF2F8" stroke="#7A99AF" stroke-width="2.5" stroke-dasharray="7 6"/>
<polygon points="90,290 360,290 360,110" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<line x1="90" y1="290" x2="360" y2="290" stroke="#1F4E79" stroke-width="3"/>
<line x1="360" y1="110" x2="360" y2="290" stroke="#1F4E79" stroke-width="3"/>
<text x="225" y="322" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">b = 6 cm</text>
<text x="390" y="205" font-size="23" fill="#1F4E79" font-weight="bold">h = 4</text>
<text x="215" y="210" font-size="24" fill="#C2185B" font-weight="bold">moitié</text>
<rect x="500" y="110" width="430" height="215" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="715" y="155" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">A = (b × h) : 2</text>
<text x="715" y="205" font-size="22" text-anchor="middle" fill="#222">(6 × 4) : 2 = 24 : 2</text>
<text x="715" y="256" font-size="25" text-anchor="middle" fill="#1E7B34" font-weight="bold">A = 12 cm²</text>
<text x="500" y="385" font-size="21" text-anchor="middle" fill="#333">Deux triangles identiques reforment le rectangle : chacun vaut la moitié.</text>
</g></svg>`);
