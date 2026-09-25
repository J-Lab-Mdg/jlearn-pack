const {svgPng, svgHead} = require('./lib');
const defs = (id,color)=>`<defs><marker id="${id}" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="${color}"/></marker></defs>`;

/* ---- L1 : illustration des triangles particuliers ---- */
svgPng('t7u4s1_trois', svgHead(1000,430,'Trois familles de triangles') + `
<g font-family="serif">
<polygon points="90,300 90,130 290,300" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<rect x="90" y="272" width="28" height="28" fill="none" stroke="#C00000" stroke-width="3"/>
<text x="190" y="350" font-size="24" text-anchor="middle" fill="#C00000" font-weight="bold">triangle rectangle</text>
<text x="190" y="385" font-size="20" text-anchor="middle" fill="#333">un angle droit (90°)</text>
<polygon points="420,300 560,120 700,300" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<line x1="488" y1="212" x2="492" y2="206" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="628" y1="212" x2="632" y2="206" stroke="#1F4E79" stroke-width="4.5"/>
<text x="560" y="350" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">triangle isocèle</text>
<text x="560" y="385" font-size="20" text-anchor="middle" fill="#333">deux côtés égaux</text>
<polygon points="740,310 850,120 960,310" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<line x1="793" y1="219" x2="798" y2="212" stroke="#1E7B34" stroke-width="4.5"/>
<line x1="902" y1="219" x2="907" y2="212" stroke="#1E7B34" stroke-width="4.5"/>
<line x1="846" y1="316" x2="854" y2="316" stroke="#1E7B34" stroke-width="4.5"/>
<text x="850" y="355" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">triangle équilatéral</text>
<text x="850" y="390" font-size="20" text-anchor="middle" fill="#333">trois côtés égaux</text>
</g></svg>`);

svgPng('t7u4s1_vocab', svgHead(1000,430,'Sommets, côtés et angles d’un triangle') + `
<g font-family="serif">
<polygon points="170,320 420,320 340,120" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="150" y="330" font-size="26" fill="#222" font-weight="bold">B</text>
<text x="428" y="330" font-size="26" fill="#222" font-weight="bold">C</text>
<text x="330" y="112" font-size="26" fill="#222" font-weight="bold">A</text>
<path d="M300 138 A 42 42 0 0 1 302 165" fill="none" stroke="#C00000" stroke-width="3.5"/>
<text x="240" y="120" font-size="22" fill="#C00000">angle</text>
<line x1="252" y1="132" x2="298" y2="148" stroke="#C00000" stroke-width="2" marker-end="url(#aj0)"/>
<text x="295" y="362" font-size="23" fill="#1F4E79">côté [BC]</text>
<text x="60" y="98" font-size="23" fill="#1E7B34">sommet A</text>
<line x1="145" y1="100" x2="320" y2="115" stroke="#1E7B34" stroke-width="2" marker-end="url(#aj0)"/>
<rect x="540" y="105" width="430" height="255" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="755" y="152" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">Trois impressions utiles</text>
<text x="755" y="200" font-size="23" text-anchor="middle" fill="#222">3 sommets : A, B, C</text>
<text x="755" y="246" font-size="23" text-anchor="middle" fill="#222">3 côtés : [AB], [BC], [CA]</text>
<text x="755" y="292" font-size="23" text-anchor="middle" fill="#222">3 angles Â, B̂, Ĉ</text>
<text x="755" y="335" font-size="21" text-anchor="middle" fill="#555">Une figure à trois côtés : un triangle.</text>
</g>${defs('aj0','#C00000')}</svg>`);

svgPng('t7u4s1_valide', svgHead(1000,430,'Propriétés lues sur les dessins') + `
<g font-family="serif">
<polygon points="70,210 70,290 250,290" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<rect x="70" y="268" width="22" height="22" fill="none" stroke="#C00000" stroke-width="2.5"/>
<text x="110" y="296" font-size="18" fill="#C00000">3 cm</text>
<text x="50" y="250" font-size="18" fill="#C00000">4 cm</text>
<text x="180" y="235" font-size="18" fill="#C00000" font-weight="bold">5 cm</text>
<text x="160" y="360" font-size="22" text-anchor="middle" fill="#C00000">hypoténuse : le plus long</text>
<polygon points="400,290 470,140 540,290" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<line x1="433" y1="212" x2="437" y2="206" stroke="#1F4E79" stroke-width="4"/>
<line x1="503" y1="212" x2="507" y2="206" stroke="#1F4E79" stroke-width="4"/>
<path d="M405 290 A 20 20 0 0 1 414 276" fill="none" stroke="#C2185B" stroke-width="3"/>
<path d="M535 290 A 20 20 0 0 0 526 276" fill="none" stroke="#C2185B" stroke-width="3"/>
<text x="470" y="360" font-size="22" text-anchor="middle" fill="#1F4E79">angles à la base égaux</text>
<polygon points="700,290 775,155 850,290" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<line x1="735" y1="226" x2="739" y2="220" stroke="#1E7B34" stroke-width="4"/>
<line x1="811" y1="226" x2="815" y2="220" stroke="#1E7B34" stroke-width="4"/>
<line x1="773" y1="297" x2="778" y2="297" stroke="#1E7B34" stroke-width="4"/>
<path d="M760 290 A 30 30 0 0 1 766 275" fill="none" stroke="#C2185B" stroke-width="3"/>
<path d="M790 290 A 30 30 0 0 0 800 275" fill="none" stroke="#C2185B" stroke-width="3"/>
<path d="M775 155 A 30 30 0 0 1 760 161" fill="none" stroke="#C2185B" stroke-width="3"/>
<text x="775" y="360" font-size="22" text-anchor="middle" fill="#1E7B34">trois angles égaux : 60°</text>
<text x="500" y="410" font-size="23" text-anchor="middle" fill="#333">Les marques identiques indiquent les mesures égales.</text>
</g></svg>`);

/* ---- L2 : construire les triangles particuliers ---- */
svgPng('t7u4s2_rect', svgHead(1000,430,'Construire un triangle rectangle (ABC, Â droit)') + `
<g font-family="serif">
<rect x="40" y="100" width="290" height="230" rx="10" fill="#FAFCFD" stroke="#1F4E79" stroke-width="2.5"/>
<text x="185" y="128" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">1. Tracer [AB]</text>
<line x1="90" y1="280" x2="280" y2="280" stroke="#222" stroke-width="4"/>
<text x="82" y="312" font-size="22" fill="#222">A</text>
<text x="285" y="312" font-size="22" fill="#222">B</text>
<rect x="355" y="100" width="290" height="230" rx="10" fill="#FAFCFD" stroke="#1F4E79" stroke-width="2.5"/>
<text x="500" y="128" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">2. Perpendiculaire en A</text>
<line x1="400" y1="280" x2="590" y2="280" stroke="#222" stroke-width="4"/>
<line x1="420" y1="280" x2="420" y2="190" stroke="#222" stroke-width="4"/>
<rect x="420" y="258" width="22" height="22" fill="none" stroke="#C00000" stroke-width="3"/>
<text x="412" y="312" font-size="22" fill="#222">A</text>
<text x="596" y="312" font-size="22" fill="#222">B</text>
<text x="428" y="182" font-size="22" fill="#222">C</text>
<rect x="670" y="100" width="290" height="230" rx="10" fill="#FAFCFD" stroke="#1E7B34" stroke-width="2.5"/>
<text x="815" y="128" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">3. Relier C et B</text>
<line x1="720" y1="280" x2="910" y2="280" stroke="#222" stroke-width="4"/>
<line x1="740" y1="280" x2="740" y2="190" stroke="#222" stroke-width="4"/>
<line x1="740" y1="190" x2="910" y2="280" stroke="#C2185B" stroke-width="4"/>
<rect x="740" y="258" width="22" height="22" fill="none" stroke="#C00000" stroke-width="3"/>
<text x="732" y="312" font-size="22" fill="#222">A</text>
<text x="915" y="312" font-size="22" fill="#222">B</text>
<text x="748" y="182" font-size="22" fill="#222">C</text>
<text x="500" y="390" font-size="23" text-anchor="middle" fill="#333">L’équerre donne l’angle droit ; le segment [CB] est l’hypoténuse.</text>
</g></svg>`);

svgPng('t7u4s2_iso', svgHead(1000,430,'Construire un triangle isocèle (AC = BC)') + `
<g font-family="serif">
<line x1="240" y1="330" x2="600" y2="330" stroke="#222" stroke-width="4"/>
<text x="230" y="368" font-size="24" fill="#222" font-weight="bold">A</text>
<text x="600" y="368" font-size="24" fill="#222" font-weight="bold">B</text>
<path d="M240 330 A 260 260 0 0 1 468 152" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M600 330 A 260 260 0 0 0 372 152" fill="none" stroke="#1E7B34" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="420" cy="152" r="8" fill="#C2185B"/>
<text x="430" y="145" font-size="24" fill="#C2185B" font-weight="bold">C</text>
<line x1="240" y1="330" x2="420" y2="152" stroke="#C2185B" stroke-width="3.5"/>
<line x1="420" y1="152" x2="600" y2="330" stroke="#C2185B" stroke-width="3.5"/>
<line x1="330" y1="238" x2="335" y2="232" stroke="#222" stroke-width="4"/>
<line x1="512" y1="238" x2="517" y2="232" stroke="#222" stroke-width="4"/>
<text x="780" y="180" font-size="24" text-anchor="middle" fill="#1F4E79">même rayon</text>
<text x="780" y="215" font-size="24" text-anchor="middle" fill="#1F4E79">au compas</text>
<text x="780" y="270" font-size="22" text-anchor="middle" fill="#333">les deux arcs se croisent</text>
<text x="780" y="302" font-size="22" text-anchor="middle" fill="#333">au sommet C</text>
<text x="500" y="410" font-size="23" text-anchor="middle" fill="#333">Même rayon depuis A et depuis B : CA = CB, le triangle est isocèle.</text>
</g></svg>`);

svgPng('t7u4s2_equi', svgHead(1000,430,'Construire un triangle équilatéral (CA = CB = AB)') + `
<g font-family="serif">
<line x1="230" y1="330" x2="610" y2="330" stroke="#222" stroke-width="4"/>
<text x="220" y="368" font-size="24" fill="#222" font-weight="bold">A</text>
<text x="610" y="368" font-size="24" fill="#222" font-weight="bold">B</text>
<path d="M230 330 A 380 380 0 0 1 468 100" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="8 6"/>
<path d="M610 330 A 380 380 0 0 0 372 100" fill="none" stroke="#1E7B34" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="420" cy="102" r="8" fill="#C2185B"/>
<text x="432" y="96" font-size="24" fill="#C2185B" font-weight="bold">C</text>
<line x1="230" y1="330" x2="420" y2="102" stroke="#C2185B" stroke-width="3.5"/>
<line x1="420" y1="102" x2="610" y2="330" stroke="#C2185B" stroke-width="3.5"/>
<line x1="322" y1="218" x2="327" y2="212" stroke="#222" stroke-width="4"/>
<line x1="513" y1="218" x2="518" y2="212" stroke="#222" stroke-width="4"/>
<line x1="417" y1="336" x2="424" y2="336" stroke="#222" stroke-width="4"/>
<text x="770" y="170" font-size="24" text-anchor="middle" fill="#1E7B34">rayon = AB</text>
<text x="770" y="208" font-size="24" text-anchor="middle" fill="#1E7B34">des deux côtés</text>
<text x="770" y="262" font-size="22" text-anchor="middle" fill="#333">CA = AB et CB = AB</text>
<text x="770" y="294" font-size="22" text-anchor="middle" fill="#333">donc CA = CB = AB</text>
<text x="500" y="410" font-size="23" text-anchor="middle" fill="#333">Rayon égal à AB des deux côtés : les trois côtés sont égaux.</text>
</g></svg>`);

/* ---- L3 : repérage sur une droite graduée ---- */
svgPng('t7u4s3_adj', svgHead(1000,430,'Une droite graduée : origine et unité') + `
<g font-family="serif">
${(()=>{const X=v=>100+(v+4)*100.5; let r=''; for(let v=-4;v<=3;v++){r+=`<line x1="${X(v)}" y1="205" x2="${X(v)}" y2="245" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="280" font-size="24" text-anchor="middle" fill="#333">${v<0?'−'+(-v):'+'+v}</text>`;} return r;})()}
<line x1="85" y1="225" x2="905" y2="225" stroke="#1F4E79" stroke-width="4" marker-end="url(#aj1)"/>
<line x1="100" y1="199" x2="100" y2="251" stroke="#C2185B" stroke-width="4"/>
<text x="100" y="190" font-size="24" text-anchor="middle" fill="#C2185B" font-weight="bold">O</text>
<path d="M100 310 Q 150 348 200 310" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<text x="150" y="360" font-size="22" text-anchor="middle" fill="#1E7B34">unité = 1 pas</text>
<circle cx="301" cy="225" r="9" fill="#C00000"/>
<text x="301" y="176" font-size="24" fill="#C00000" font-weight="bold">A (−2)</text>
<circle cx="602.5" cy="225" r="9" fill="#1E7B34"/>
<text x="602" y="176" font-size="24" fill="#1E7B34" font-weight="bold">B (+1)</text>
<text x="500" y="408" font-size="23" text-anchor="middle" fill="#333">O est l’origine ; chaque graduation vaut une unité ; le signe indique le sens.</text>
</g>${defs('aj1','#1F4E79')}</svg>`);

svgPng('t7u4s3_placer', svgHead(1000,430,'Placer un point : C d’abscisse −1,5') + `
<g font-family="serif">
${(()=>{const X=v=>130+(v+3)*120; let r=''; for(let v=-3;v<=3;v++){r+=`<line x1="${X(v)}" y1="195" x2="${X(v)}" y2="235" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="270" font-size="24" text-anchor="middle" fill="#333">${v<0?'−'+(-v):'+'+v}</text>`;} return r;})()}
${[(-2.5),(-1.5),(-0.5),(0.5),(1.5),(2.5)].map(v=>{const x=130+(v+3)*120;return `<line x1="${x}" y1="205" x2="${x}" y2="225" stroke="#7A99AF" stroke-width="2.5"/>`;}).join('')}
<line x1="115" y1="215" x2="875" y2="215" stroke="#1F4E79" stroke-width="4" marker-end="url(#aj2)"/>
<circle cx="310" cy="215" r="10" fill="#C00000"/>
<text x="310" y="160" font-size="26" fill="#C00000" font-weight="bold">C (−1,5)</text>
<path d="M250 305 Q 310 350 370 305" fill="none" stroke="#7A99AF" stroke-width="3"/>
<text x="310" y="360" font-size="21" text-anchor="middle" fill="#333">un pas coupé en deux</text>
<rect x="600" y="80" width="330" height="110" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="765" y="118" font-size="21" text-anchor="middle" fill="#1F4E79">1. Partir de l’origine O</text>
<text x="765" y="148" font-size="21" text-anchor="middle" fill="#1F4E79">2. Signe − : vers la gauche</text>
<text x="765" y="178" font-size="21" text-anchor="middle" fill="#1F4E79">3. Ajouter 0,5 au-delà de −1</text>
</g>${defs('aj2','#1F4E79')}</svg>`);

svgPng('t7u4s3_marche', svgHead(1000,430,'Départ et arrivée sur la ligne') + `
<g font-family="serif">
${(()=>{const X=v=>100+(v+5)*100; let r=''; for(let v=-5;v<=3;v++){r+=`<line x1="${X(v)}" y1="205" x2="${X(v)}" y2="245" stroke="#1F4E79" stroke-width="3.5"/><text x="${X(v)}" y="280" font-size="24" text-anchor="middle" fill="#333">${v<0?'−'+(-v):'+'+v}</text>`;} return r;})()}
<line x1="85" y1="225" x2="915" y2="225" stroke="#1F4E79" stroke-width="4" marker-end="url(#aj3)"/>
<circle cx="300" cy="225" r="10" fill="#1F4E79"/>
<text x="300" y="180" font-size="24" fill="#1F4E79" font-weight="bold">départ : −3</text>
<path d="M330 180 Q 500 75 675 178" fill="none" stroke="#1E7B34" stroke-width="4" marker-end="url(#aj4)"/>
<text x="500" y="115" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">+4 pas</text>
<circle cx="700" cy="225" r="10" fill="#C00000"/>
<text x="700" y="180" font-size="24" fill="#C00000" font-weight="bold">arrivée : +1</text>
<rect x="170" y="315" width="660" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="352" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">−3 + 4 = +1 : quatre pas vers la droite</text>
</g>${defs('aj3','#1F4E79')}${defs('aj4','#1E7B34')}</svg>`);

/* ---- L4 : repérage dans un repère orthogonal ---- */
svgPng('t7u4s4_repere', svgHead(1000,430,'Le repère orthogonal : deux axes perpendiculaires') + `
<g font-family="serif">
${[0,1,2,3,4,5,6].map(v=>`<line x1="${200+v*90}" y1="110" x2="${200+v*90}" y2="380" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
${[0,1,2,3].map(v=>`<line x1="200" y1="${380-v*90}" x2="740" y2="${380-v*90}" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
<line x1="200" y1="385" x2="750" y2="385" stroke="#222" stroke-width="4" marker-end="url(#aj5)"/>
<line x1="200" y1="390" x2="200" y2="100" stroke="#222" stroke-width="4" marker-end="url(#aj5)"/>
${[1,2,3,4,5].map(v=>`<text x="${200+v*90}" y="412" font-size="20" text-anchor="middle" fill="#333">${v}</text>`).join('')}
${[1,2].map(v=>`<text x="182" y="${386-v*90}" font-size="20" text-anchor="end" fill="#333">${v}</text>`).join('')}
<text x="178" y="412" font-size="22" fill="#222" font-weight="bold">O</text>
<text x="712" y="416" font-size="21" fill="#222">x</text>
<text x="178" y="98" font-size="21" fill="#222">y</text>
<circle cx="470" cy="200" r="10" fill="#C2185B"/>
<line x1="470" y1="385" x2="470" y2="200" stroke="#C2185B" stroke-width="2.5" stroke-dasharray="6 5"/>
<line x1="200" y1="200" x2="470" y2="200" stroke="#C2185B" stroke-width="2.5" stroke-dasharray="6 5"/>
<text x="482" y="196" font-size="26" fill="#C2185B" font-weight="bold">M (3 ; 2)</text>
<rect x="770" y="130" width="200" height="230" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="870" y="170" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">Point M :</text>
<text x="870" y="212" font-size="21" text-anchor="middle" fill="#222">3 → abscisse</text>
<text x="870" y="252" font-size="21" text-anchor="middle" fill="#222">2 → ordonnée</text>
<text x="870" y="300" font-size="19" text-anchor="middle" fill="#555">abscisse d’abord,</text>
<text x="870" y="326" font-size="19" text-anchor="middle" fill="#555">ordonnée ensuite</text>
</g>${defs('aj5','#222')}</svg>`);

svgPng('t7u4s4_lire', svgHead(1000,430,'Lire les coordonnées des points') + `
<g font-family="serif">
${[0,1,2,3,4,5].map(v=>`<line x1="${180+v*100}" y1="110" x2="${180+v*100}" y2="350" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
${[0,1,2].map(v=>`<line x1="180" y1="${350-v*100}" x2="680" y2="${350-v*100}" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
<line x1="180" y1="355" x2="695" y2="355" stroke="#222" stroke-width="3.5" marker-end="url(#aj6)"/>
<line x1="180" y1="360" x2="180" y2="100" stroke="#222" stroke-width="3.5" marker-end="url(#aj6)"/>
${[1,2,3,4].map(v=>`<text x="${180+v*100}" y="382" font-size="19" text-anchor="middle" fill="#333">${v}</text>`).join('')}
${[1,2].map(v=>`<text x="162" y="${356-v*100}" font-size="19" text-anchor="end" fill="#333">${v}</text>`).join('')}
<circle cx="380" cy="250" r="9" fill="#C00000"/>
<text x="392" y="242" font-size="24" fill="#C00000" font-weight="bold">A</text>
<circle cx="580" cy="350" r="9" fill="#1E7B34"/>
<text x="592" y="343" font-size="24" fill="#1E7B34" font-weight="bold">B</text>
<circle cx="280" cy="150" r="9" fill="#1F4E79"/>
<text x="292" y="142" font-size="24" fill="#1F4E79" font-weight="bold">C</text>
<rect x="750" y="130" width="210" height="200" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="855" y="175" font-size="23" text-anchor="middle" fill="#C00000" font-weight="bold">A (2 ; 1)</text>
<text x="855" y="230" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">B (4 ; 0)</text>
<text x="855" y="285" font-size="23" text-anchor="middle" fill="#1F4E79" font-weight="bold">C (1 ; 2)</text>
<text x="500" y="420" font-size="22" text-anchor="middle" fill="#333">On lit d’abord sur l’axe horizontal (x), puis sur l’axe vertical (y).</text>
</g>${defs('aj6','#222')}</svg>`);

svgPng('t7u4s4_placer', svgHead(1000,430,'Placer un point à coordonnées données : N (4 ; 2)') + `
<g font-family="serif">
${[0,1,2,3,4,5].map(v=>`<line x1="${180+v*100}" y1="130" x2="${180+v*100}" y2="380" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
${[0,1,2].map(v=>`<line x1="180" y1="${380-v*100}" x2="680" y2="${380-v*100}" stroke="#D5E1EA" stroke-width="1.5"/>`).join('')}
<line x1="180" y1="385" x2="695" y2="385" stroke="#222" stroke-width="3.5" marker-end="url(#aj7)"/>
<line x1="180" y1="390" x2="180" y2="120" stroke="#222" stroke-width="3.5" marker-end="url(#aj7)"/>
${[1,2,3,4].map(v=>`<text x="${180+v*100}" y="410" font-size="19" text-anchor="middle" fill="#333">${v}</text>`).join('')}
${[1,2].map(v=>`<text x="162" y="${386-v*100}" font-size="19" text-anchor="end" fill="#333">${v}</text>`).join('')}
<line x1="580" y1="385" x2="580" y2="180" stroke="#C2185B" stroke-width="3" stroke-dasharray="7 6"/>
<line x1="180" y1="180" x2="580" y2="180" stroke="#1E7B34" stroke-width="3" stroke-dasharray="7 6"/>
<circle cx="580" cy="180" r="10" fill="#C2185B"/>
<text x="592" y="172" font-size="26" fill="#C2185B" font-weight="bold">N</text>
<rect x="720" y="130" width="250" height="230" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="845" y="170" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">Étapes</text>
<text x="845" y="212" font-size="19" text-anchor="middle" fill="#222">1. Compter 4 sur (Ox)</text>
<text x="845" y="252" font-size="19" text-anchor="middle" fill="#222">2. Compter 2 sur (Oy)</text>
<text x="845" y="292" font-size="19" text-anchor="middle" fill="#222">3. N au croisement</text>
<text x="845" y="332" font-size="19" text-anchor="middle" fill="#555">des deux guides</text>
</g>${defs('aj7','#222')}</svg>`);

/* ---- L5 : les sortes d’angles ---- */
svgPng('t7u4s5_24', svgHead(1000,430,'Nul, droit, plat, plein') + `
<g font-family="serif">
<rect x="60" y="105" width="200" height="220" rx="12" fill="#FAFCFD" stroke="#1F4E79" stroke-width="2.5"/>
<line x1="160" y1="270" x2="240" y2="150" stroke="#C2185B" stroke-width="4"/>
<circle cx="160" cy="270" r="7" fill="#C2185B"/>
<text x="160" y="312" font-size="21" text-anchor="middle" fill="#1F4E79" font-weight="bold">angle nul : 0°</text>
<rect x="290" y="105" width="200" height="220" rx="12" fill="#FAFCFD" stroke="#1E7B34" stroke-width="2.5"/>
<line x1="390" y1="270" x2="390" y2="150" stroke="#222" stroke-width="4"/>
<line x1="390" y1="270" x2="470" y2="270" stroke="#222" stroke-width="4"/>
<rect x="390" y="248" width="22" height="22" fill="none" stroke="#1E7B34" stroke-width="3"/>
<circle cx="390" cy="270" r="7" fill="#1E7B34"/>
<text x="390" y="312" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">angle droit : 90°</text>
<rect x="520" y="105" width="200" height="220" rx="12" fill="#FAFCFD" stroke="#C00000" stroke-width="2.5"/>
<line x1="540" y1="270" x2="700" y2="270" stroke="#222" stroke-width="4"/>
<circle cx="620" cy="270" r="7" fill="#C00000"/>
<path d="M646 270 A 26 26 0 0 0 594 270" fill="none" stroke="#C00000" stroke-width="3.5"/>
<text x="620" y="312" font-size="21" text-anchor="middle" fill="#C00000" font-weight="bold">angle plat : 180°</text>
<rect x="750" y="105" width="200" height="220" rx="12" fill="#FAFCFD" stroke="#C2185B" stroke-width="2.5"/>
<circle cx="850" cy="220" r="62" fill="none" stroke="#C2185B" stroke-width="3.5" stroke-dasharray="5 5"/>
<circle cx="850" cy="270" r="7" fill="#C2185B"/>
<line x1="850" y1="270" x2="922" y2="220" stroke="#222" stroke-width="4"/>
<text x="850" y="312" font-size="18" text-anchor="middle" fill="#C2185B" font-weight="bold">angle plein : 360°</text>
<text x="500" y="380" font-size="23" text-anchor="middle" fill="#333">Quatre angles de référence : 0°, 90°, 180°, 360°.</text>
</g></svg>`);

svgPng('t7u4s5_occ', svgHead(1000,430,'Aigu, obtus, rentrant') + `
<g font-family="serif">
<rect x="70" y="105" width="270" height="245" rx="12" fill="#FAFCFD" stroke="#1E7B34" stroke-width="2.5"/>
<line x1="205" y1="270" x2="315" y2="270" stroke="#222" stroke-width="4"/>
<line x1="205" y1="270" x2="297" y2="160" stroke="#222" stroke-width="4"/>
<path d="M253 270 A 48 48 0 0 0 242 236" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<circle cx="205" cy="270" r="7" fill="#1E7B34"/>
<text x="205" y="314" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">aigu</text>
<text x="205" y="342" font-size="19" text-anchor="middle" fill="#333">entre 0° et 90°</text>
<rect x="370" y="105" width="270" height="245" rx="12" fill="#FAFCFD" stroke="#C00000" stroke-width="2.5"/>
<line x1="505" y1="270" x2="615" y2="270" stroke="#222" stroke-width="4"/>
<line x1="505" y1="270" x2="436" y2="153" stroke="#222" stroke-width="4"/>
<path d="M551 270 A 46 46 0 0 0 464 261" fill="none" stroke="#C00000" stroke-width="3.5"/>
<circle cx="505" cy="270" r="7" fill="#C00000"/>
<text x="505" y="314" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">obtus</text>
<text x="505" y="342" font-size="19" text-anchor="middle" fill="#333">entre 90° et 180°</text>
<rect x="670" y="105" width="270" height="245" rx="12" fill="#FAFCFD" stroke="#C2185B" stroke-width="2.5"/>
<line x1="815" y1="270" x2="925" y2="270" stroke="#222" stroke-width="4"/>
<line x1="815" y1="270" x2="815" y2="145" stroke="#222" stroke-width="4"/>
<path d="M870 270 A 55 55 0 1 0 815 215" fill="none" stroke="#C2185B" stroke-width="3.5"/>
<circle cx="815" cy="270" r="7" fill="#C2185B"/>
<text x="805" y="314" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">rentrant</text>
<text x="805" y="342" font-size="19" text-anchor="middle" fill="#333">entre 180° et 360°</text>
<text x="500" y="400" font-size="23" text-anchor="middle" fill="#333">On compare toujours avec l’angle droit de l’équerre.</text>
</g></svg>`);

svgPng('t7u4s5_mesure', svgHead(1000,430,'Mesurer un angle au rapporteur') + `
<g font-family="serif">
<rect x="90" y="105" width="400" height="235" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="290" y="152" font-size="24" text-anchor="middle" fill="#1F4E79" font-weight="bold">Angle à mesurer : 40°</text>
<line x1="150" y1="300" x2="430" y2="300" stroke="#222" stroke-width="4"/>
<line x1="290" y1="300" x2="402" y2="153" stroke="#222" stroke-width="4"/>
<path d="M346 300 A 56 56 0 0 0 333 264" fill="none" stroke="#C2185B" stroke-width="3.5"/>
<text x="362" y="255" font-size="22" fill="#C2185B" font-weight="bold">40°</text>
<circle cx="290" cy="300" r="7" fill="#222"/>
<rect x="540" y="105" width="400" height="235" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="740" y="152" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">Avec le rapporteur</text>
<text x="740" y="198" font-size="22" text-anchor="middle" fill="#222">1. Centre sur le sommet</text>
<text x="740" y="246" font-size="22" text-anchor="middle" fill="#222">2. Zéro sur un côté</text>
<text x="740" y="294" font-size="22" text-anchor="middle" fill="#222">3. Lire le nombre visé</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Unité de mesure : le degré, noté °.</text>
</g></svg>`);
