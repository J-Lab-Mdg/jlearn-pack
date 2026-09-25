const {svgPng, svgHead} = require('./lib');

/* ---- L6 : complémentaires, supplémentaires, opposés ---- */
svgPng('t7u4s6_90', svgHead(1000,430,'Complémentaires : leur somme vaut 90°') + `
<g font-family="serif">
<line x1="200" y1="300" x2="200" y2="130" stroke="#222" stroke-width="4"/>
<line x1="200" y1="300" x2="430" y2="300" stroke="#222" stroke-width="4"/>
<line x1="200" y1="300" x2="368" y2="182" stroke="#C2185B" stroke-width="4"/>
<path d="M262 300 A 62 62 0 0 0 243 249" fill="none" stroke="#1F4E79" stroke-width="4"/>
<path d="M210 243 A 60 60 0 0 0 191 234" fill="none" stroke="#1E7B34" stroke-width="4"/>
<rect x="200" y="274" width="26" height="26" fill="none" stroke="#C00000" stroke-width="3.5"/>
<circle cx="200" cy="300" r="7" fill="#222"/>
<text x="300" y="272" font-size="24" fill="#1F4E79" font-weight="bold">35°</text>
<text x="232" y="222" font-size="24" fill="#1E7B34" font-weight="bold">55°</text>
<rect x="540" y="120" width="400" height="200" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="740" y="170" font-size="26" text-anchor="middle" fill="#222">35° + 55° = 90°</text>
<text x="740" y="218" font-size="23" text-anchor="middle" fill="#1E7B34" font-weight="bold">angles complémentaires</text>
<text x="740" y="262" font-size="21" text-anchor="middle" fill="#333">ensemble, ils forment le droit</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">La somme des deux angles forme un angle droit : 90°.</text>
</g></svg>`);

svgPng('t7u4s6_180', svgHead(1000,430,'Supplémentaires : leur somme vaut 180°') + `
<g font-family="serif">
<line x1="90" y1="280" x2="510" y2="280" stroke="#222" stroke-width="4"/>
<line x1="300" y1="280" x2="300" y2="140" stroke="#C2185B" stroke-width="4"/>
<circle cx="300" cy="280" r="7" fill="#222"/>
<path d="M448 280 A 148 148 0 0 0 300 132" fill="none" stroke="#1F4E79" stroke-width="4"/>
<path d="M300 164 A 116 116 0 0 0 168 248" fill="none" stroke="#1E7B34" stroke-width="4"/>
<text x="430" y="200" font-size="24" fill="#1F4E79" font-weight="bold">70°</text>
<text x="176" y="200" font-size="24" fill="#1E7B34" font-weight="bold">110°</text>
<rect x="570" y="110" width="370" height="200" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="755" y="160" font-size="26" text-anchor="middle" fill="#222">70° + 110° = 180°</text>
<text x="755" y="208" font-size="23" text-anchor="middle" fill="#C2185B" font-weight="bold">angles supplémentaires</text>
<text x="755" y="252" font-size="21" text-anchor="middle" fill="#333">ensemble, ils forment le plat</text>
<text x="500" y="385" font-size="23" text-anchor="middle" fill="#333">La somme fait une ligne droite : 180°.</text>
</g></svg>`);

svgPng('t7u4s6_opp', svgHead(1000,430,'Opposés par le sommet : ils sont égaux') + `
<g font-family="serif">
<line x1="150" y1="130" x2="600" y2="330" stroke="#222" stroke-width="4"/>
<line x1="600" y1="130" x2="150" y2="330" stroke="#222" stroke-width="4"/>
<circle cx="375" cy="230" r="7" fill="#222"/>
<path d="M470 214 A 100 100 0 0 1 478 160" fill="none" stroke="#C00000" stroke-width="4"/>
<path d="M280 246 A 100 100 0 0 1 272 300" fill="none" stroke="#C00000" stroke-width="4"/>
<text x="525" y="168" font-size="26" fill="#C00000" font-weight="bold">40°</text>
<text x="225" y="322" font-size="26" fill="#C00000" font-weight="bold">40°</text>
<path d="M276 160 A 100 100 0 0 1 280 214" fill="none" stroke="#1F4E79" stroke-width="4"/>
<path d="M474 300 A 100 100 0 0 1 470 246" fill="none" stroke="#1F4E79" stroke-width="4"/>
<text x="645" y="215" font-size="23" fill="#1F4E79">l’autre paire,</text>
<text x="645" y="300" font-size="23" fill="#1F4E79">égale aussi</text>
<rect x="620" y="90" width="330" height="80" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="785" y="138" font-size="24" text-anchor="middle" fill="#1E7B34" font-weight="bold">angles opposés : égaux</text>
<text x="500" y="395" font-size="23" text-anchor="middle" fill="#333">Et 40° + v + 40° + v = 360° : les plus grands valent 140° chacun.</text>
</g></svg>`);

/* ---- L7 : angles formés par une sécante ---- */
svgPng('t7u4s7_altint', svgHead(1000,430,'Les angles alternes−internes') + `
<g font-family="serif">
<line x1="120" y1="150" x2="880" y2="150" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="120" y1="310" x2="880" y2="310" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="280" y1="60" x2="680" y2="400" stroke="#C00000" stroke-width="4.5"/>
<path d="M432 182 A 60 60 0 0 0 462 146" fill="none" stroke="#1E7B34" stroke-width="4"/>
<path d="M468 276 A 60 60 0 0 0 438 314" fill="none" stroke="#1E7B34" stroke-width="4"/>
<text x="492" y="184" font-size="26" fill="#1E7B34" font-weight="bold">55°</text>
<text x="388" y="305" font-size="26" fill="#1E7B34" font-weight="bold">55°</text>
<text x="182" y="122" font-size="22" fill="#1F4E79">droite 1</text>
<text x="182" y="290" font-size="22" fill="#1F4E79">droite 2</text>
<text x="222" y="80" font-size="22" fill="#C00000">sécante</text>
<rect x="650" y="150" width="290" height="165" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="795" y="195" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">alternes−internes</text>
<text x="795" y="240" font-size="21" text-anchor="middle" fill="#222">à l’intérieur, en vis-à-vis</text>
<text x="795" y="278" font-size="21" text-anchor="middle" fill="#222">→ les deux sont égaux</text>
</g></svg>`);

svgPng('t7u4s7_corr', svgHead(1000,430,'Les angles correspondants') + `
<g font-family="serif">
<line x1="120" y1="150" x2="880" y2="150" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="120" y1="310" x2="880" y2="310" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="280" y1="60" x2="680" y2="400" stroke="#C00000" stroke-width="4.5"/>
<path d="M432 182 A 60 60 0 0 0 462 146" fill="none" stroke="#C2185B" stroke-width="4"/>
<path d="M502 262 A 60 60 0 0 0 532 226" fill="none" stroke="#C2185B" stroke-width="4"/>
<text x="490" y="180" font-size="26" fill="#C2185B" font-weight="bold">55°</text>
<text x="552" y="260" font-size="26" fill="#C2185B" font-weight="bold">55°</text>
<rect x="650" y="150" width="290" height="165" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="795" y="195" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">correspondants</text>
<text x="795" y="240" font-size="21" text-anchor="middle" fill="#222">même côté de la sécante,</text>
<text x="795" y="278" font-size="21" text-anchor="middle" fill="#222">même place → égaux</text>
</g></svg>`);

svgPng('t7u4s7_huit', svgHead(1000,430,'Les huit angles de deux droites et d’une sécante') + `
<g font-family="serif">
<line x1="140" y1="150" x2="860" y2="150" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="140" y1="300" x2="860" y2="300" stroke="#1F4E79" stroke-width="4.5"/>
<line x1="310" y1="60" x2="660" y2="385" stroke="#C00000" stroke-width="4.5"/>
<circle cx="452" cy="150" r="6" fill="#222"/>
<circle cx="548" cy="300" r="6" fill="#222"/>
<text x="420" y="132" font-size="21" fill="#1F4E79" font-weight="bold">1</text>
<text x="470" y="132" font-size="21" fill="#1F4E79" font-weight="bold">2</text>
<text x="420" y="185" font-size="21" fill="#1F4E79" font-weight="bold">4</text>
<text x="470" y="185" font-size="21" fill="#1F4E79" font-weight="bold">3</text>
<text x="516" y="282" font-size="21" fill="#1F4E79" font-weight="bold">5</text>
<text x="566" y="282" font-size="21" fill="#1F4E79" font-weight="bold">6</text>
<text x="516" y="335" font-size="21" fill="#1F4E79" font-weight="bold">8</text>
<text x="566" y="335" font-size="21" fill="#1F4E79" font-weight="bold">7</text>
<rect x="660" y="120" width="290" height="240" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="805" y="160" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">Paires égales</text>
<text x="805" y="200" font-size="20" text-anchor="middle" fill="#222">3 et 5 : alt. internes</text>
<text x="805" y="240" font-size="20" text-anchor="middle" fill="#222">2 et 6 : correspondants</text>
<text x="805" y="280" font-size="20" text-anchor="middle" fill="#222">4 et 6 : alt. internes</text>
<text x="805" y="320" font-size="20" text-anchor="middle" fill="#222">opposés au sommet</text>
<text x="805" y="352" font-size="18" text-anchor="middle" fill="#555">4 paires de chaque côté</text>
</g></svg>`);

/* ---- L8 : triangles et autres polygones ---- */
svgPng('t7u4s8_galerie', svgHead(1000,430,'Les polygones par leur nombre de côtés') + `
<g font-family="serif">
<rect x="50" y="100" width="215" height="255" rx="12" fill="#FAFCFD" stroke="#C2185B" stroke-width="2.5"/>
<polygon points="157,290 105,200 210,200" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="157" y="330" font-size="21" text-anchor="middle" fill="#C2185B" font-weight="bold">triangle — 3</text>
<rect x="285" y="100" width="215" height="255" rx="12" fill="#FAFCFD" stroke="#1F4E79" stroke-width="2.5"/>
<polygon points="330,290 450,290 450,195 330,195" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="392" y="330" font-size="21" text-anchor="middle" fill="#1F4E79" font-weight="bold">quadrilatère — 4</text>
<rect x="520" y="100" width="215" height="255" rx="12" fill="#FAFCFD" stroke="#1E7B34" stroke-width="2.5"/>
<polygon points="627,290 590,235 555,177 627,140 700,177 665,235" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="627" y="330" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">pentagone — 5</text>
<rect x="755" y="100" width="215" height="255" rx="12" fill="#FAFCFD" stroke="#C00000" stroke-width="2.5"/>
<polygon points="862,290 805,245 805,195 862,150 920,195 920,245" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<text x="862" y="330" font-size="21" text-anchor="middle" fill="#C00000" font-weight="bold">hexagone — 6</text>
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">Chaque côté est un segment ; le nombre de côtés donne le nom du polygone.</text>
</g></svg>`);

svgPng('t7u4s8_quadri', svgHead(1000,430,'Les quadrilatères de famille') + `
<g font-family="serif">
<rect x="30" y="100" width="172" height="210" rx="10" fill="#FAFCFD" stroke="#C2185B" stroke-width="2.5"/>
<rect x="64" y="150" width="104" height="104" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="116" y="292" font-size="20" text-anchor="middle" fill="#C2185B" font-weight="bold">carré</text>
<rect x="222" y="100" width="172" height="210" rx="10" fill="#FAFCFD" stroke="#1F4E79" stroke-width="2.5"/>
<rect x="244" y="170" width="128" height="84" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="308" y="292" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">rectangle</text>
<rect x="414" y="100" width="172" height="210" rx="10" fill="#FAFCFD" stroke="#1E7B34" stroke-width="2.5"/>
<polygon points="500,145 568,205 500,265 432,205" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="292" font-size="20" text-anchor="middle" fill="#1E7B34" font-weight="bold">losange</text>
<rect x="606" y="100" width="172" height="210" rx="10" fill="#FAFCFD" stroke="#C00000" stroke-width="2.5"/>
<polygon points="630,255 736,255 762,175 656,175" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<text x="692" y="292" font-size="17" text-anchor="middle" fill="#C00000" font-weight="bold">parallélogramme</text>
<rect x="798" y="100" width="172" height="210" rx="10" fill="#FAFCFD" stroke="#C2185B" stroke-width="2.5"/>
<polygon points="820,255 948,255 912,175 842,175" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="884" y="292" font-size="20" text-anchor="middle" fill="#C2185B" font-weight="bold">trapèze</text>
<text x="500" y="392" font-size="22" text-anchor="middle" fill="#333">Tous ont quatre côtés ; tailles et angles changent le nom.</text>
</g></svg>`);

svgPng('t7u4s8_props', svgHead(1000,430,'Tableau des particularités') + `
<g font-family="serif">
<rect x="70" y="100" width="200" height="50" fill="#1F4E79"/>
<rect x="270" y="100" width="290" height="50" fill="#1F4E79"/>
<rect x="560" y="100" width="370" height="50" fill="#1F4E79"/>
<text x="170" y="132" font-size="20" text-anchor="middle" fill="white" font-weight="bold">nom</text>
<text x="415" y="132" font-size="20" text-anchor="middle" fill="white" font-weight="bold">côtés</text>
<text x="745" y="132" font-size="20" text-anchor="middle" fill="white" font-weight="bold">angles</text>
${[['carré','4 égaux ♦','4 angles droits'],['rectangle','opposés égaux','4 angles droits'],['losange','4 égaux','angles droits souvent absents'],['parallélogramme','opposés égaux et parallèles','opposés égaux'],['trapèze','un seul couple parallèle','quelconques']].map((r,i)=>`<rect x="70" y="${150+i*46}" width="200" height="46" fill="${i%2?'#F4F8FB':'#EAF2F8'}" stroke="#9AB" stroke-width="1.5"/><rect x="270" y="${150+i*46}" width="290" height="46" fill="${i%2?'#F4F8FB':'#EAF2F8'}" stroke="#9AB" stroke-width="1.5"/><rect x="560" y="${150+i*46}" width="370" height="46" fill="${i%2?'#F4F8FB':'#EAF2F8'}" stroke="#9AB" stroke-width="1.5"/><text x="170" y="${180+i*46}" font-size="20" text-anchor="middle" fill="#222" font-weight="bold">${r[0]}</text><text x="415" y="${180+i*46}" font-size="19" text-anchor="middle" fill="#222">${r[1]}</text><text x="745" y="${180+i*46}" font-size="19" text-anchor="middle" fill="#222">${r[2]}</text>`).join('')}
<text x="500" y="416" font-size="21" text-anchor="middle" fill="#333">Le carré est un rectangle ET un losange à la fois.</text>
</g></svg>`);

/* ---- L9 : médiatrice et hauteur ---- */
svgPng('t7u4s9_med', svgHead(1000,430,'La médiatrice : perpendiculaire et milieu du segment') + `
<g font-family="serif">
<line x1="180" y1="300" x2="660" y2="300" stroke="#222" stroke-width="4.5"/>
<text x="168" y="338" font-size="24" fill="#222" font-weight="bold">A</text>
<text x="652" y="338" font-size="24" fill="#222" font-weight="bold">B</text>
<circle cx="420" cy="300" r="7" fill="#C2185B"/>
<text x="420" y="338" font-size="24" fill="#C2185B" font-weight="bold">M</text>
<line x1="295" y1="296" x2="295" y2="304" stroke="#C2185B" stroke-width="5"/>
<line x1="545" y1="296" x2="545" y2="304" stroke="#C2185B" stroke-width="5"/>
<line x1="420" y1="340" x2="420" y2="90" stroke="#1E7B34" stroke-width="4"/>
<rect x="420" y="274" width="26" height="26" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<text x="452" y="96" font-size="24" fill="#1E7B34" font-weight="bold">médiatrice (d)</text>
<circle cx="420" cy="150" r="8" fill="#1F4E79"/>
<text x="435" y="145" font-size="22" fill="#1F4E79">P</text>
<line x1="420" y1="150" x2="180" y2="300" stroke="#1F4E79" stroke-width="2.5" stroke-dasharray="6 5"/>
<line x1="420" y1="150" x2="660" y2="300" stroke="#1F4E79" stroke-width="2.5" stroke-dasharray="6 5"/>
<text x="500" y="398" font-size="23" text-anchor="middle" fill="#333">Tout point P de (d) est à égale distance de A et de B : PA = PB.</text>
</g></svg>`);

svgPng('t7u4s9_haut', svgHead(1000,430,'La hauteur : perpendiculaire issue d’un sommet') + `
<g font-family="serif">
<polygon points="180,320 660,320 470,110" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="168" y="356" font-size="24" fill="#222" font-weight="bold">A</text>
<text x="652" y="356" font-size="24" fill="#222" font-weight="bold">B</text>
<text x="470" y="100" font-size="24" fill="#222" font-weight="bold">C</text>
<line x1="470" y1="110" x2="470" y2="320" stroke="#1E7B34" stroke-width="4"/>
<rect x="470" y="294" width="26" height="26" fill="none" stroke="#1E7B34" stroke-width="3.5"/>
<circle cx="470" cy="320" r="6" fill="#1E7B34"/>
<text x="480" y="356" font-size="24" fill="#1E7B34" font-weight="bold">H</text>
<text x="510" y="212" font-size="23" fill="#1E7B34">hauteur [CH]</text>
<rect x="720" y="120" width="240" height="190" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="840" y="162" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">définition</text>
<text x="840" y="202" font-size="20" text-anchor="middle" fill="#222">perpendiculaire à (AB)</text>
<text x="840" y="240" font-size="20" text-anchor="middle" fill="#222">passant par C</text>
<text x="840" y="284" font-size="18" text-anchor="middle" fill="#555">pied H sur (AB)</text>
</g></svg>`);

svgPng('t7u4s9_trois', svgHead(1000,430,'Les trois hauteurs se rencontrent : l’orthocentre') + `
<g font-family="serif">
<polygon points="150,350 550,350 430,120" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="136" y="386" font-size="23" fill="#222" font-weight="bold">A</text>
<text x="544" y="386" font-size="23" fill="#222" font-weight="bold">B</text>
<text x="430" y="110" font-size="23" fill="#222" font-weight="bold">C</text>
<line x1="430" y1="120" x2="430" y2="350" stroke="#1E7B34" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="150" y1="350" x2="464" y2="186" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="550" y1="350" x2="389" y2="154" stroke="#C00000" stroke-width="3" stroke-dasharray="6 5"/>
<circle cx="430" cy="204" r="9" fill="#C2185B"/>
<text x="446" y="198" font-size="24" fill="#C2185B" font-weight="bold">H</text>
<rect x="660" y="130" width="300" height="200" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="810" y="170" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">orthocentre</text>
<text x="810" y="212" font-size="20" text-anchor="middle" fill="#222">point de rencontre des</text>
<text x="810" y="245" font-size="20" text-anchor="middle" fill="#222">trois hauteurs</text>
<text x="810" y="294" font-size="18" text-anchor="middle" fill="#555">chaque hauteur part</text>
<text x="810" y="320" font-size="18" text-anchor="middle" fill="#555">d’un sommet</text>
</g></svg>`);

/* ---- L10 : médiane et bissectrice ---- */
svgPng('t7u4s10_median', svgHead(1000,430,'La médiane rejoint le sommet et le milieu') + `
<g font-family="serif">
<polygon points="200,330 600,330 480,100" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="186" y="366" font-size="24" fill="#222" font-weight="bold">A</text>
<text x="592" y="366" font-size="24" fill="#222" font-weight="bold">B</text>
<text x="480" y="90" font-size="24" fill="#222" font-weight="bold">C</text>
<line x1="480" y1="100" x2="400" y2="330" stroke="#1E7B34" stroke-width="4"/>
<circle cx="400" cy="330" r="7" fill="#1E7B34"/>
<text x="396" y="366" font-size="24" fill="#1E7B34" font-weight="bold">M</text>
<line x1="298" y1="326" x2="298" y2="334" stroke="#C00000" stroke-width="5"/>
<line x1="502" y1="326" x2="502" y2="334" stroke="#C00000" stroke-width="5"/>
<rect x="680" y="130" width="280" height="190" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="820" y="172" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">définition</text>
<text x="820" y="212" font-size="20" text-anchor="middle" fill="#222">segment du sommet C</text>
<text x="820" y="250" font-size="20" text-anchor="middle" fill="#222">au milieu M de [AB]</text>
<text x="820" y="292" font-size="18" text-anchor="middle" fill="#555">AM = MB marqués</text>
</g></svg>`);

svgPng('t7u4s10_bissec', svgHead(1000,430,'La bissectrice partage l’angle en deux égaux') + `
<g font-family="serif">
<line x1="220" y1="330" x2="540" y2="330" stroke="#222" stroke-width="4"/>
<line x1="220" y1="330" x2="480" y2="110" stroke="#222" stroke-width="4"/>
<circle cx="220" cy="330" r="7" fill="#222"/>
<text x="206" y="368" font-size="24" fill="#222" font-weight="bold">A</text>
<line x1="220" y1="330" x2="600" y2="180" stroke="#1E7B34" stroke-width="4"/>
<path d="M320 330 A 100 100 0 0 0 295 268" fill="none" stroke="#C2185B" stroke-width="4"/>
<path d="M322 273 A 100 100 0 0 0 253 235" fill="none" stroke="#C2185B" stroke-width="4"/>
<text x="350" y="310" font-size="24" fill="#C2185B" font-weight="bold">x°</text>
<text x="272" y="242" font-size="24" fill="#C2185B" font-weight="bold">x°</text>
<text x="387" y="218" font-size="21" fill="#1E7B34" font-weight="bold">bissectrice</text>
<rect x="670" y="130" width="290" height="190" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="815" y="172" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">définition</text>
<text x="815" y="212" font-size="19" text-anchor="middle" fill="#222">coupe l’angle au sommet A</text>
<text x="815" y="250" font-size="19" text-anchor="middle" fill="#222">en deux angles identiques</text>
<text x="815" y="292" font-size="18" text-anchor="middle" fill="#555">mêmes arcs = angles égaux</text>
</g></svg>`);

svgPng('t7u4s10_trois', svgHead(1000,430,'Les trois médianes : le centre de gravité') + `
<g font-family="serif">
<polygon points="150,350 520,350 580,130" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<text x="136" y="386" font-size="23" fill="#222" font-weight="bold">A</text>
<text x="514" y="386" font-size="23" fill="#222" font-weight="bold">B</text>
<text x="580" y="120" font-size="23" fill="#222" font-weight="bold">C</text>
<line x1="580" y1="130" x2="335" y2="350" stroke="#1E7B34" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="150" y1="350" x2="550" y2="240" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<line x1="520" y1="350" x2="365" y2="240" stroke="#C00000" stroke-width="3" stroke-dasharray="6 5"/>
<circle cx="417" cy="277" r="10" fill="#C2185B"/>
<text x="432" y="267" font-size="25" fill="#C2185B" font-weight="bold">G</text>
<rect x="660" y="130" width="300" height="200" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="810" y="170" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">centre de gravité</text>
<text x="810" y="212" font-size="20" text-anchor="middle" fill="#222">rencontre des trois</text>
<text x="810" y="245" font-size="20" text-anchor="middle" fill="#222">médianes au point G</text>
<text x="810" y="294" font-size="18" text-anchor="middle" fill="#555">G est le centre de gravité</text>
<text x="810" y="320" font-size="18" text-anchor="middle" fill="#555">du triangle</text>
</g></svg>`);

/* ---- L11 : cercles associés au triangle ---- */
svgPng('t7u4s11_circ', svgHead(1000,430,'Le cercle circonscrit passe par les trois sommets') + `
<g font-family="serif">
<circle cx="450" cy="227" r="144" fill="none" stroke="#1E7B34" stroke-width="4"/>
<polygon points="340,320 560,320 470,85" fill="rgba(252,228,214,0.55)" stroke="#C2185B" stroke-width="3.5"/>
<text x="322" y="358" font-size="23" fill="#222" font-weight="bold">A</text>
<text x="562" y="358" font-size="23" fill="#222" font-weight="bold">B</text>
<text x="484" y="78" font-size="23" fill="#222" font-weight="bold">C</text>
<circle cx="450" cy="227" r="7" fill="#1F4E79"/>
<text x="461" y="223" font-size="23" fill="#1F4E79" font-weight="bold">O</text>
<rect x="670" y="135" width="290" height="195" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="815" y="176" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">centre O</text>
<text x="815" y="214" font-size="20" text-anchor="middle" fill="#222">rencontre des trois</text>
<text x="815" y="247" font-size="20" text-anchor="middle" fill="#222">médiatrices</text>
<text x="815" y="292" font-size="18" text-anchor="middle" fill="#555">OA = OB = OC = rayon</text>
</g></svg>`);

svgPng('t7u4s11_insc', svgHead(1000,430,'Le cercle inscrit touche les trois côtés') + `
<g font-family="serif">
<circle cx="486" cy="259" r="85" fill="none" stroke="#1E7B34" stroke-width="4"/>
<polygon points="330,345 660,345 480,110" fill="rgba(252,228,214,0.55)" stroke="#C2185B" stroke-width="3.5"/>
<text x="318" y="381" font-size="23" fill="#222" font-weight="bold">A</text>
<text x="656" y="381" font-size="23" fill="#222" font-weight="bold">B</text>
<text x="480" y="100" font-size="23" fill="#222" font-weight="bold">C</text>
<circle cx="486" cy="259" r="7" fill="#1F4E79"/>
<text x="497" y="255" font-size="23" fill="#1F4E79" font-weight="bold">I</text>
<line x1="486" y1="259" x2="486" y2="344" stroke="#1F4E79" stroke-width="2.5" stroke-dasharray="5 5"/>
<rect x="486" y="322" width="22" height="22" fill="none" stroke="#1F4E79" stroke-width="2.5"/>
<rect x="690" y="135" width="270" height="195" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="825" y="176" font-size="20" text-anchor="middle" fill="#1F4E79" font-weight="bold">centre I</text>
<text x="825" y="214" font-size="20" text-anchor="middle" fill="#222">rencontre des trois</text>
<text x="825" y="247" font-size="20" text-anchor="middle" fill="#222">bissectrices</text>
<text x="825" y="292" font-size="18" text-anchor="middle" fill="#555">rayon perpendiculaire</text>
<text x="825" y="318" font-size="18" text-anchor="middle" fill="#555">à chaque côté</text>
</g></svg>`);

svgPng('t7u4s11_bilan', svgHead(1000,430,'Bilan des droites remarquables') + `
<g font-family="serif">
<rect x="60" y="105" width="420" height="125" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="270" y="148" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">médiatrice (×3)</text>
<text x="270" y="188" font-size="20" text-anchor="middle" fill="#222">→ centre du cercle circonscrit</text>
<rect x="520" y="105" width="420" height="125" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="730" y="148" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">hauteur (×3)</text>
<text x="730" y="188" font-size="20" text-anchor="middle" fill="#222">→ orthocentre H</text>
<rect x="60" y="250" width="420" height="125" rx="12" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="270" y="293" font-size="22" text-anchor="middle" fill="#C2185B" font-weight="bold">médiane (×3)</text>
<text x="270" y="333" font-size="20" text-anchor="middle" fill="#222">→ centre de gravité G</text>
<rect x="520" y="250" width="420" height="125" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3.5"/>
<text x="730" y="293" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">bissectrice (×3)</text>
<text x="730" y="333" font-size="20" text-anchor="middle" fill="#222">→ centre du cercle inscrit</text>
</g></svg>`);
