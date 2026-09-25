const {svgPng, svgHead} = require('./lib');

/* ---- L6 : factoriser une somme ---- */
svgPng('t7u3s6_commun', svgHead(1000,430,'Le 5 se cache dans chaque terme') + `
<g font-family="serif">
<text x="300" y="165" font-size="34" text-anchor="middle" fill="#1F4E79" font-weight="bold">5a + 15</text>
<text x="300" y="220" font-size="24" text-anchor="middle" fill="#333">= 5 × a + 5 × 3</text>
<rect x="255" y="130" width="60" height="40" rx="8" fill="none" stroke="#C2185B" stroke-width="3" stroke-dasharray="6 5"/>
<rect x="328" y="130" width="90" height="40" rx="8" fill="none" stroke="#C2185B" stroke-width="3" stroke-dasharray="6 5"/>
<text x="300" y="285" font-size="28" text-anchor="middle" fill="#C2185B" font-weight="bold">= 5(a + 3)</text>
<rect x="560" y="130" width="330" height="185" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="725" y="178" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">facteur commun : 5</text>
<text x="725" y="228" font-size="21" text-anchor="middle" fill="#222">il sort devant ;</text>
<text x="725" y="262" font-size="21" text-anchor="middle" fill="#222">le reste reste dedans</text>
<text x="500" y="380" font-size="22" text-anchor="middle" fill="#333">Factoriser = remonter la rivière du développement.</text>
</g></svg>`);

svgPng('t7u3s6_boite', svgHead(1000,430,'Sortir le plus grand facteur : 8x + 12') + `
<g font-family="serif">
<text x="270" y="155" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">8x + 12</text>
<text x="270" y="205" font-size="22" text-anchor="middle" fill="#333">= 4 × 2x + 4 × 3</text>
<rect x="150" y="240" width="240" height="60" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="270" y="279" font-size="26" text-anchor="middle" fill="#1E7B34" font-weight="bold">= 4(2x + 3)</text>
<rect x="480" y="120" width="450" height="230" rx="12" fill="#FDE9E7" stroke="#C00000" stroke-width="3"/>
<text x="705" y="162" font-size="22" text-anchor="middle" fill="#C00000" font-weight="bold">attention</text>
<text x="705" y="208" font-size="21" text-anchor="middle" fill="#222">2(4x + 6) n’est pas fini :</text>
<text x="705" y="242" font-size="21" text-anchor="middle" fill="#222">un 2 reste encore dedans</text>
<text x="705" y="292" font-size="21" text-anchor="middle" fill="#333">le plus grand facteur commun</text>
<text x="705" y="322" font-size="21" text-anchor="middle" fill="#333">sort en un seul geste : 4</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#333">Contrôle : redévelopper 4(2x + 3) doit redonner 8x + 12.</text>
</g></svg>`);

svgPng('t7u3s6_sens', svgHead(1000,430,'Les deux flèches') + `
<g font-family="serif">
<rect x="170" y="150" width="300" height="90" rx="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="320" y="205" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">4(2x + 3)</text>
<rect x="530" y="150" width="300" height="90" rx="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3.5"/>
<text x="680" y="205" font-size="30" text-anchor="middle" fill="#C2185B" font-weight="bold">8x + 12</text>
<path d="M480 175 L 520 175" stroke="#1E7B34" stroke-width="4" marker-end="url(#f1)"/>
<path d="M520 230 L 480 230" stroke="#C2185B" stroke-width="4" marker-end="url(#f2)"/>
<text x="500" y="158" font-size="19" text-anchor="middle" fill="#1E7B34" font-weight="bold">développer</text>
<text x="500" y="258" font-size="19" text-anchor="middle" fill="#C2185B" font-weight="bold">factoriser</text>
<text x="500" y="330" font-size="23" text-anchor="middle" fill="#333">produit ⇄ somme : les deux écritures disent la même chose</text>
<rect x="260" y="360" width="480" height="52" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="500" y="393" font-size="22" text-anchor="middle" fill="#1E7B34" font-weight="bold">on vérifie une factorisation en redéveloppant</text>
</g><defs><marker id="f1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1E7B34"/></marker><marker id="f2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

/* ---- L7 : propriétés de l’égalité ---- */
svgPng('t7u3s7_balance', svgHead(1000,430,'x + 2 = 10 sur la balance') + `
<g font-family="serif">
<line x1="500" y1="130" x2="500" y2="260" stroke="#222" stroke-width="5"/>
<line x1="430" y1="285" x2="570" y2="285" stroke="#222" stroke-width="5"/>
<line x1="460" y1="285" x2="500" y2="260" stroke="#222" stroke-width="4"/>
<line x1="540" y1="285" x2="500" y2="260" stroke="#222" stroke-width="4"/>
<line x1="300" y1="150" x2="700" y2="150" stroke="#222" stroke-width="5"/>
<line x1="330" y1="150" x2="310" y2="215" stroke="#7A99AF" stroke-width="3"/>
<line x1="370" y1="150" x2="390" y2="215" stroke="#7A99AF" stroke-width="3"/>
<ellipse cx="350" cy="222" rx="75" ry="14" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<rect x="300" y="175" width="50" height="40" rx="6" fill="#C2185B"/>
<text x="325" y="202" font-size="24" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
<rect x="360" y="185" width="35" height="30" rx="6" fill="#1F4E79"/>
<text x="377" y="207" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
<line x1="630" y1="150" x2="610" y2="215" stroke="#7A99AF" stroke-width="3"/>
<line x1="670" y1="150" x2="690" y2="215" stroke="#7A99AF" stroke-width="3"/>
<ellipse cx="650" cy="222" rx="75" ry="14" fill="#FCE4D6" stroke="#C2185B" stroke-width="3"/>
<rect x="625" y="170" width="50" height="45" rx="6" fill="#1E7B34"/>
<text x="650" y="199" font-size="19" text-anchor="middle" fill="#fff" font-weight="bold">10</text>
<text x="500" y="350" font-size="27" text-anchor="middle" fill="#1F4E79" font-weight="bold">l’équilibre : x + 2 = 10</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#333">Les deux plateaux gardent la même valeur.</text>
</g></svg>`);

svgPng('t7u3s7_retirer', svgHead(1000,430,'Retirer 2 des deux membres') + `
<g font-family="serif">
<text x="500" y="150" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">x + 2 = 10</text>
<text x="500" y="210" font-size="25" text-anchor="middle" fill="#222">x + 2 − 2 = 10 − 2</text>
<rect x="348" y="192" width="95" height="40" rx="8" fill="none" stroke="#C00000" stroke-width="3" stroke-dasharray="6 5"/>
<rect x="506" y="192" width="95" height="40" rx="8" fill="none" stroke="#C00000" stroke-width="3" stroke-dasharray="6 5"/>
<text x="675" y="222" font-size="21" fill="#C00000">même geste</text>
<text x="675" y="248" font-size="21" fill="#C00000">des deux côtés</text>
<rect x="350" y="290" width="300" height="65" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="332" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">x = 8</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">La balance reste à l’horizontale : l’égalité est conservée.</text>
</g></svg>`);

svgPng('t7u3s7_diviser', svgHead(1000,430,'Diviser les deux membres par 4') + `
<g font-family="serif">
<text x="500" y="150" font-size="30" text-anchor="middle" fill="#1F4E79" font-weight="bold">4x = 20</text>
<text x="500" y="212" font-size="26" text-anchor="middle" fill="#222">4x : 4 = 20 : 4</text>
<rect x="352" y="193" width="120" height="42" rx="8" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<rect x="506" y="193" width="130" height="42" rx="8" fill="none" stroke="#1F4E79" stroke-width="3" stroke-dasharray="6 5"/>
<rect x="350" y="290" width="300" height="65" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="332" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">x = 5</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Diviser par un nombre NON NUL conserve l’égalité.</text>
</g></svg>`);

/* ---- L8 : résoudre une équation ---- */
svgPng('t7u3s8_etapes', svgHead(1000,430,'3x + 4 = 19 : deux gestes') + `
<g font-family="serif">
<rect x="330" y="105" width="340" height="56" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="142" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">3x + 4 = 19</text>
<path d="M500 165 L 500 195" stroke="#C2185B" stroke-width="3.5" marker-end="url(#e1)"/>
<text x="640" y="192" font-size="21" text-anchor="middle" fill="#C2185B">on retire 4</text>
<text x="500" y="228" font-size="26" text-anchor="middle" fill="#222">3x = 15</text>
<path d="M500 240 L 500 270" stroke="#C2185B" stroke-width="3.5" marker-end="url(#e1)"/>
<text x="650" y="267" font-size="21" text-anchor="middle" fill="#C2185B">on divise par 3</text>
<rect x="380" y="285" width="240" height="62" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="325" font-size="30" text-anchor="middle" fill="#1E7B34" font-weight="bold">x = 5</text>
<text x="500" y="395" font-size="21" text-anchor="middle" fill="#333">On démonte la machine à l’envers : dernier posé, premier défait.</text>
</g><defs><marker id="e1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u3s8_membres', svgHead(1000,430,'Rassembler : 2x + 3 = x + 8') + `
<g font-family="serif">
<text x="500" y="140" font-size="28" text-anchor="middle" fill="#1F4E79" font-weight="bold">2x + 3 = x + 8</text>
<text x="500" y="198" font-size="24" text-anchor="middle" fill="#222">on retire x des deux côtés</text>
<path d="M500 212 L 500 242" stroke="#C2185B" stroke-width="3.5" marker-end="url(#g1)"/>
<text x="500" y="278" font-size="26" text-anchor="middle" fill="#222">x + 3 = 8</text>
<path d="M500 290 L 500 320" stroke="#C2185B" stroke-width="3.5" marker-end="url(#g1)"/>
<text x="500" y="356" font-size="26" text-anchor="middle" fill="#222">x = 5</text>
<rect x="610" y="290" width="300" height="90" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3"/>
<text x="760" y="325" font-size="21" text-anchor="middle" fill="#1E7B34" font-weight="bold">contrôle :</text>
<text x="760" y="355" font-size="21" text-anchor="middle" fill="#222">10 + 3 = 5 + 8 ✓</text>
<text x="500" y="405" font-size="20" text-anchor="middle" fill="#333">La lettre des deux côtés ? On la rassemble d’abord.</text>
</g><defs><marker id="g1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#C2185B"/></marker></defs></svg>`);

svgPng('t7u3s8_verifier', svgHead(1000,430,'La vérification est obligatoire') + `
<g font-family="serif">
<text x="500" y="150" font-size="27" text-anchor="middle" fill="#1F4E79" font-weight="bold">remplacer x par 5 dans 3x + 4 = 19</text>
<text x="500" y="215" font-size="26" text-anchor="middle" fill="#222">3 × 5 + 4 = 19</text>
<text x="500" y="272" font-size="26" text-anchor="middle" fill="#222">15 + 4 = 19</text>
<rect x="340" y="300" width="320" height="65" rx="12" fill="#E9F5EC" stroke="#1E7B34" stroke-width="3.5"/>
<text x="500" y="341" font-size="28" text-anchor="middle" fill="#1E7B34" font-weight="bold">19 = 19 ✓ équilibre</text>
<text x="500" y="402" font-size="21" text-anchor="middle" fill="#333">Sans cette dernière étape, la solution n’est qu’une hypothèse.</text>
</g></svg>`);

/* ---- L9 : traduire un problème ---- */
svgPng('t7u3s9_rectangle', svgHead(1000,430,'Le champ : largeur l, longueur l + 5') + `
<g font-family="serif">
<rect x="170" y="150" width="420" height="150" fill="#E9F5EC" stroke="#1E7B34" stroke-width="4"/>
<text x="380" y="136" font-size="26" text-anchor="middle" fill="#1F4E79" font-weight="bold">longueur : l + 5</text>
<text x="155" y="230" font-size="26" text-anchor="middle" fill="#C2185B" font-weight="bold">l</text>
<text x="380" y="240" font-size="24" text-anchor="middle" fill="#333">tour : 46 m</text>
<rect x="660" y="140" width="280" height="185" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3"/>
<text x="800" y="182" font-size="21" text-anchor="middle" fill="#1F4E79" font-weight="bold">inconnue nommée :</text>
<text x="800" y="220" font-size="22" text-anchor="middle" fill="#222">l = largeur (m)</text>
<text x="800" y="262" font-size="21" text-anchor="middle" fill="#333">« 5 de plus » → l + 5</text>
<text x="800" y="298" font-size="21" text-anchor="middle" fill="#333">tour → 2(L + l)</text>
<text x="500" y="398" font-size="21" text-anchor="middle" fill="#333">Chaque phrase de l’énoncé devient un morceau d’équation.</text>
</g></svg>`);

svgPng('t7u3s9_resolution', svgHead(1000,430,'2 × (2l + 5) = 46 : pas à pas') + `
<g font-family="serif">
${[['traduction','2 × (l + l + 5) = 46'],['on rassemble','2 × (2l + 5) = 46'],['on divise par 2','2l + 5 = 23'],['on retire 5','2l = 18'],['on divise par 2','l = 9']].map((r,i)=>`<rect x="120" y="${108+i*60}" width="300" height="50" rx="8" fill="#F7F3EE" stroke="#1F4E79" stroke-width="2.5"/><text x="270" y="${140+i*60}" font-size="21" text-anchor="middle" fill="#333">${r[0]}</text><rect x="450" y="${108+i*60}" width="420" height="50" rx="8" fill="${i===4?'#E9F5EC':'#fff'}" stroke="${i===4?'#1E7B34':'#C2185B'}" stroke-width="2.5"/><text x="660" y="${140+i*60}" font-size="23" text-anchor="middle" fill="${i===4?'#1E7B34':'#222'}" font-weight="bold">${r[1]}</text>`).join('')}
<text x="500" y="418" font-size="20" text-anchor="middle" fill="#333">Réponse : largeur 9 m, longueur 14 m — contrôle : 2 × 23 = 46 ✓</text>
</g></svg>`);

svgPng('t7u3s9_bilan', svgHead(1000,430,'Les quatre étapes') + `
<g font-family="serif">
${[['1','Choisir l’inconnue','lettre + ce qu’elle désigne'],['2','Traduire','chaque donnée → relation'],['3','Résoudre','propriétés de l’égalité'],['4','Vérifier','dans l’énoncé, phrase réponse']].map((r,i)=>`<circle cx="${150+i*235}" cy="175" r="34" fill="#1F4E79"/><text x="${150+i*235}" y="187" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">${r[0]}</text><text x="${150+i*235}" y="250" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">${r[1]}</text><text x="${150+i*235}" y="288" font-size="17" text-anchor="middle" fill="#333">${r[2]}</text>${i<3?`<path d="M${192+i*235} 175 L${212+i*235} 175" stroke="#C2185B" stroke-width="3.5"/>`:''}`).join('')}
<rect x="220" y="330" width="560" height="62" rx="12" fill="#EAF2F8" stroke="#1F4E79" stroke-width="3.5"/>
<text x="500" y="369" font-size="22" text-anchor="middle" fill="#1F4E79" font-weight="bold">une méthode, toujours la même, quel que soit le problème</text>
</g></svg>`);
