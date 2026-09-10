// ============================================================
// schemas-new.js — schémas scolaires SVG -> PNG pour SVT T7
// ============================================================
const W = 900, H = 640;
const FAM = "'DejaVu Sans', sans-serif";
function wrap(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>${inner}</svg>`;
}
function txt(x, y, s, o = {}) {
  const { size = 24, anchor = "middle", fill = "#000000", bold = false, italic = false } = o;
  return `<text x="${x}" y="${y}" font-family="${FAM}" font-size="${size}" text-anchor="${anchor}" fill="${fill}"${bold ? ' font-weight="bold"' : ""}${italic ? ' font-style="italic"' : ""}>${s}</text>`;
}
function title(s) {
  return txt(450, 52, s, { size: 32, bold: true, fill: "#1F4E79" });
}
function line(x1, y1, x2, y2, c = "#000", w = 3) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
}
function arrow(x1, y1, x2, y2, c = "#000", w = 3) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 15, d = 0.42;
  const p1 = [x2 + L * Math.cos(a + Math.PI - d), y2 + L * Math.sin(a + Math.PI - d)];
  const p2 = [x2 + L * Math.cos(a + Math.PI + d), y2 + L * Math.sin(a + Math.PI + d)];
  return line(x1, y1, x2, y2, c, w) + `<polyline points="${p1[0]},${p1[1]} ${x2},${y2} ${p2[0]},${p2[1]}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function rrect(x, y, w, h, fill, r = 12) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="#000" stroke-width="3"/>`;
}
function circle(x, y, r, fill, stroke = "#000", w = 3) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${w}"/>`;
}
function legend(items, opts = {}) {
  const { y0 = 520, cols = 2, size = 15, x0 = 70, x1 = 830 } = opts;
  const colW = (x1 - x0) / cols, lineH = 27;
  let s = "";
  items.forEach(([n, t], i) => {
    const c = i % cols, r = Math.floor(i / cols);
    const x = x0 + c * colW, y = y0 + r * lineH;
    s += `<circle cx="${x + 10}" cy="${y - 6}" r="11" fill="#1F4E79" stroke="#ffffff" stroke-width="2"/>` + txt(x + 10, y, "" + n, { size: 14, fill: "#ffffff", bold: true });
    s += txt(x + 28, y, t, { size, anchor: "start" });
  });
  return s;
}
function num(x, y, n, fill = "#1F4E79") {
  return `<circle cx="${x}" cy="${y}" r="15" fill="${fill}" stroke="#ffffff" stroke-width="2.5"/>` + txt(x, y + 6, "" + n, { size: 19, fill: "#ffffff", bold: true });
}

// ============ 1. Appareil digestif ============
const DIGESTIF = (() => {
  let s = title("L'appareil digestif");
  s += `<path d="M 230 410 L 230 130 Q 230 105 255 105 L 450 105 Q 475 105 475 130 L 475 410" fill="none" stroke="#000" stroke-width="3"/>`;
  s += `<ellipse cx="250" cy="130" rx="70" ry="35" fill="#f6a8c8" stroke="#000" stroke-width="3"/>`; // bouche
  s += `<path d="M 255 160 L 255 245" stroke="#000" stroke-width="12"/>`; // pharynx + oesophage
  s += `<ellipse cx="355" cy="275" rx="85" ry="55" fill="#e8a87c" stroke="#000" stroke-width="3"/>`; // estomac
  s += `<path d="M 355 330 L 355 440" stroke="#000" stroke-width="14"/>`; // intestin mince
  s += `<path d="M 300 455 Q 355 490 410 455 Q 460 425 500 455" fill="none" stroke="#000" stroke-width="18"/>`; // gros intestin
  s += `<path d="M 500 455 L 500 510" stroke="#000" stroke-width="10"/>`; // anus
  s += txt(250, 300, "glandes", { size: 19, fill: "#c62828" });
  s += txt(250, 330, "salivaires", { size: 19, fill: "#c62828" });
  s += `<rect x="610" y="210" width="120" height="60" rx="8" fill="#bbdefb"/>`; // foie
  s += `<rect x="700" y="290" width="90" height="45" rx="8" fill="#f3e5f5"/>`; // pancréas
  s += `<rect x="610" y="350" width="90" height="50" rx="8" fill="#d9ead3"/>`; // intestins
  s += txt(670, 237, "foie", { size: 20, bold: true }); s += txt(745, 312, "pancréas", { size: 16 });
  s += txt(655, 378, "glandes", { size: 16 }); s += txt(655, 398, "intestinales", { size: 16 });
  s += num(250, 108, 1); s += num(280, 205, 2); s += num(355, 275, 3); s += num(360, 390, 4); s += num(500, 455, 5); s += num(505, 530, 6);
  s += num(670, 180, 7); s += num(745, 285, 8);
  s += legend([
    [1, "bouche"], [2, "pharynx + œsophage"], [3, "estomac"],
    [4, "intestin grêle"], [5, "gros intestin"], [6, "anus"],
    [7, "foie (bile)"], [8, "pancréas (sucs)"],
  ], { y0: 535 });
  return wrap(s);
})();

// ============ 2. Rôles digestifs ============
const ROLES_DIG = (() => {
  const col = (x, t, items, fill) => {
    const w = 240, y = 120, h = 330;
    let s = rrect(x, y, w, h, fill);
    s += txt(x + w / 2, y + 50, t, { size: 22, bold: true, fill: "#1F4E79" });
    items.forEach((it, i) => s += txt(x + w / 2, y + 110 + i * 55, it, { size: 16 }));
    return s;
  };
  return wrap(title("Rôles du tube digestif et des glandes") +
    col(50, "TUBE DIGESTIF", ["bouche : broyer", "œsophage : transporter", "estomac : transformer", "intestin : absorber", "anus : évacuer"], "#fde9c8") +
    col(330, "GLANDES", ["salivaires : salive", "gastriques : suc gastrique", "foie : bile", "pancréas : sucs", "intestinales : sucs"], "#d9ead3") +
    col(610, "TRANSFORMATIONS", ["mécaniques : dents", "mécaniques : brassage", "chimiques : sucs", "chimiques : enzymes", "absorption : sang"], "#cfe2f3") +
    txt(450, 540, "La digestion transforme les aliments en substances simples absorbées par le sang.", { size: 20, italic: true, fill: "#546e7a" }));
})();

// ============ 3. Trajet des aliments ============
const TRAJET = (() => {
  const steps = ["Bouche", "Pharynx", "Œsophage", "Estomac", "Intestin grêle", "Gros intestin", "Anus"];
  const x0 = 75, gap = 115, y = 360;
  let s = title("Le trajet des aliments");
  steps.forEach((t, i) => {
    const cx = x0 + i * gap;
    s += circle(cx, y, 34, i % 2 ? "#cfe2f3" : "#d9ead3");
    s += txt(cx, y - 8, (i + 1), { size: 18, bold: true, fill: "#1F4E79" });
    s += txt(cx, y + 48, t, { size: 15 });
    if (i < steps.length - 1) s += arrow(cx + 42, y, cx + 68, y, "#546e7a", 3);
  });
  s += txt(450, 180, "Chemin parcouru par un aliment", { size: 22, bold: true, fill: "#1F4E79" });
  s += rrect(160, 205, 180, 70, "#fde9c8") + txt(250, 245, "bouche : broyage", { size: 16 });
  s += rrect(345, 205, 180, 70, "#ffcdd2") + txt(435, 245, "estomac : sucs", { size: 16 });
  s += rrect(530, 205, 210, 70, "#d9ead3") + txt(635, 245, "intestin : absorption", { size: 16 });
  s += txt(450, 540, "Les aliments sont transformés en substances simples qui passent dans le sang.", { size: 19, italic: true, fill: "#546e7a" });
  return wrap(s);
})();

// ============ 4. Digestion perturbée ============
const PERTURB = (() => {
  return wrap(title("Digestion perturbée et devenir des aliments") +
    rrect(90, 150, 330, 150, "#d9ead3") + txt(255, 200, "DIGESTION NORMALE", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(255, 235, "broyage, sucs, absorption", { size: 18 }) +
    rrect(480, 150, 330, 150, "#ffcdd2") + txt(645, 200, "DIGESTION PERTURBÉE", { size: 22, bold: true, fill: "#c62828" }) +
    txt(645, 235, "organe malade / détruit", { size: 18 }) +
    txt(255, 370, "→ substances simples", { size: 20, bold: true, fill: "#2e7d32" }) +
    txt(255, 410, "→ corps bien nourri", { size: 19 }) +
    txt(645, 370, "→ digestion incomplète", { size: 20, bold: true, fill: "#c62828" }) +
    txt(645, 410, "→ corps mal nourri", { size: 19 }) +
    txt(450, 530, "Chaque organe est indispensable à la digestion normale.", { size: 20, italic: true, fill: "#546e7a" }));
})();

// ============ 5. Puberté ============
const PUBERTE = (() => {
  return wrap(title("La puberté : changements") +
    rrect(70, 150, 340, 200, "#fce4ec") + txt(240, 195, "GARÇON", { size: 24, bold: true, fill: "#c62828" }) +
    txt(240, 235, "voix plus grave", { size: 18 }) + txt(240, 270, "corps grandit", { size: 18 }) + txt(240, 305, "pilosité", { size: 18 }) +
    txt(240, 335, "testicules → spermatozoïdes", { size: 17 }) +
    rrect(490, 150, 340, 200, "#e8eaf6") + txt(660, 195, "FILLE", { size: 24, bold: true, fill: "#283593" }) +
    txt(660, 235, "seins se développent", { size: 18 }) + txt(660, 270, "corps grandit", { size: 18 }) + txt(660, 305, "pilosité", { size: 18 }) +
    txt(660, 335, "ovaires → ovules + règles", { size: 16 }) +
    txt(450, 450, "La puberté prépare le corps à la reproduction.", { size: 23, bold: true, fill: "#1F4E79" }) +
    txt(450, 520, "Ces changements sont variables selon les personnes.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 6. Organes génitaux ============
const ORGANES = (() => {
  return wrap(title("Organes génitaux internes") +
    rrect(80, 150, 320, 220, "#fce4ec") + txt(240, 195, "MASCULIN", { size: 22, bold: true, fill: "#c62828" }) +
    txt(240, 240, "testicules", { size: 18 }) + txt(240, 275, "spermiductes", { size: 18 }) + txt(240, 310, "prostate / vésicules", { size: 16 }) + txt(240, 340, "urètre", { size: 17 }) +
    rrect(500, 150, 320, 220, "#e8eaf6") + txt(660, 195, "FÉMININ", { size: 22, bold: true, fill: "#283593" }) +
    txt(660, 240, "ovaires", { size: 18 }) + txt(660, 275, "trompes", { size: 18 }) + txt(660, 310, "utérus", { size: 18 }) + txt(660, 340, "vagin", { size: 16 }) +
    txt(450, 470, "Les gonades produisent les cellules reproductrices.", { size: 20, bold: true, fill: "#1F4E79" }) +
    txt(450, 520, "Les voies génitales les transportent et permettent le développement.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 7. Cycle menstruel ============
const CYCLE_M = (() => {
  const steps = ["Début des règles", "Muqueuse\nreconstruite", "Ovulation", "Période\nfécondité", "Fin de cycle"];
  let s = title("Le cycle menstruel (≈ 28 jours)");
  steps.forEach((t, i) => {
    const cx = 140 + i * 140, y = 320;
    s += circle(cx, y, 38, i === 2 ? "#ffcdd2" : "#cfe2f3");
    s += txt(cx, y - 6, "" + (i + 1), { size: 18, bold: true });
    s += txt(cx, y + 54, t.split("\n")[0], { size: 15 });
    if (t.includes("\n")) s += txt(cx, y + 76, t.split("\n")[1], { size: 14 });
    if (i < steps.length - 1) s += arrow(cx + 45, y, cx + 90, y, "#546e7a", 3);
  });
  s += txt(450, 470, "Les règles = élimination de la muqueuse utérine sans fécondation.", { size: 18, italic: true, fill: "#546e7a" });
  s += txt(450, 530, "La période de fécondité se situe autour de l'ovulation.", { size: 19, bold: true, fill: "#c62828" });
  return wrap(s);
})();

// ============ 8. Fécondation ============
const FECOND = (() => {
  return wrap(title("La fécondation et la grossesse précoce") +
    rrect(80, 160, 220, 120, "#fce4ec") + txt(190, 210, "Spermatozoïde", { size: 20, bold: true, fill: "#c62828" }) +
    txt(190, 240, "cellule mâle", { size: 16 }) +
    arrow(310, 220, 430, 220, "#546e7a", 4) +
    rrect(440, 160, 220, 120, "#e8eaf6") + txt(550, 210, "Ovule", { size: 20, bold: true, fill: "#283593" }) +
    txt(550, 240, "cellule femelle", { size: 16 }) +
    arrow(670, 220, 790, 220, "#546e7a", 4) +
    rrect(80, 330, 330, 130, "#d9ead3") + txt(245, 375, "→ CELLULE-ŒUF", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(245, 410, "formation d'un nouvel être", { size: 17 }) +
    rrect(490, 330, 330, 130, "#ffcdd2") + txt(655, 375, "GROSSESSE PRÉCOCE", { size: 20, bold: true, fill: "#c62828" }) +
    txt(655, 410, "risques : école, santé, famille", { size: 16 }) +
    txt(450, 540, "Conditions : ovulation + rencontre + milieu favorable.", { size: 19, italic: true, fill: "#546e7a" }));
})();

// ============ 9. Microorganismes ============
const MICRO = (() => {
  return wrap(title("Les quatre groupes de microorganismes") +
    rrect(60, 150, 170, 160, "#fce4ec") + txt(145, 200, "BACTÉRIES", { size: 20, bold: true, fill: "#c62828" }) +
    `<ellipse cx="145" cy="245" rx="45" ry="25" fill="#fde9c8" stroke="#000" stroke-width="3"/>` + txt(145, 250, "bâtonnet", { size: 14 }) +
    rrect(255, 150, 170, 160, "#d9ead3") + txt(340, 200, "CHAMPIGNONS", { size: 20, bold: true, fill: "#2e7d32" }) +
    `<ellipse cx="340" cy="245" rx="45" ry="25" fill="#f5f5dc" stroke="#000" stroke-width="3"/>` + txt(340, 250, "levure", { size: 14 }) +
    rrect(450, 150, 170, 160, "#e8eaf6") + txt(535, 200, "VIRUS", { size: 20, bold: true, fill: "#283593" }) +
    `<circle cx="535" cy="245" r="18" fill="#ef9a9a" stroke="#000" stroke-width="3"/>` + txt(535, 250, "petit", { size: 14 }) +
    rrect(645, 150, 170, 160, "#fff3e0") + txt(730, 200, "PARASITES", { size: 20, bold: true, fill: "#e65100" }) +
    `<path d="M 700 240 q 30 20 60 -5" fill="none" stroke="#6d4c41" stroke-width="5"/>` + txt(730, 275, "hôte", { size: 14 }) +
    txt(450, 390, "Certains sont utiles, d'autres pathogènes (nuisibles).", { size: 20, bold: true, fill: "#1F4E79" }) +
    txt(450, 460, "La plupart sont invisibles à l'œil nu.", { size: 19 }) +
    txt(450, 520, "On les observe au microscope.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 10. Bactéries ============
const BACTERIE = (() => {
  return wrap(title("Les bactéries") +
    `<ellipse cx="260" cy="260" rx="170" ry="100" fill="#fce4ec" stroke="#000" stroke-width="3"/>` +
    circle(260, 260, 18, "#ef5350") +
    `<path d="M 260 242 q -20 -22 6 -30 q 18 5 2 24z" fill="#f9d94e" stroke="#000" stroke-width="2"/>` +
    txt(260, 420, "cellule simple", { size: 22 }) +
    rrect(530, 190, 280, 220, "#d9ead3") + txt(670, 230, "REPRODUCTION", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(670, 280, "une cellule", { size: 18 }) + txt(670, 320, "→ deux cellules", { size: 18 }) +
    txt(670, 360, "(division)", { size: 18 }) +
    txt(450, 490, "Utiles : yaourt, fromage, déchets.", { size: 19, fill: "#2e7d32" }) +
    txt(450, 530, "Nuisibles : choléra, tuberculose.", { size: 19, fill: "#c62828" }));
})();

// ============ 11. Champignons ============
const CHAMP = (() => {
  return wrap(title("Les champignons microscopiques") +
    rrect(80, 160, 330, 240, "#d9ead3") + txt(245, 205, "LEVURE", { size: 22, bold: true, fill: "#2e7d32" }) +
    circle(180, 280, 42, "#f5f5dc") + circle(290, 280, 30, "#f5f5dc") +
    `<path d="M 200 270 q 50 -20 78 2" stroke="#000" stroke-width="4" fill="none"/>` +
    txt(245, 350, "bourgeonnement", { size: 17 }) +
    rrect(490, 160, 330, 240, "#e8eaf6") + txt(655, 205, "MOISISSURE", { size: 22, bold: true, fill: "#283593" }) +
    `<path d="M 560 280 L 620 290 L 680 270 L 740 285" stroke="#6d4c41" stroke-width="10" fill="none"/>` +
    circle(620, 290, 9, "#a1887f") + circle(680, 270, 9, "#a1887f") +
    txt(655, 350, "spores", { size: 17 }) +
    txt(450, 480, "Utiles : pain, fromage, vin.", { size: 18, fill: "#2e7d32" }) +
    txt(450, 530, "Nuisibles : mycoses, moisissures toxiques.", { size: 18, fill: "#c62828" }));
})();

// ============ 12. Virus et parasites ============
const VIRUS_PARA = (() => {
  return wrap(title("Les virus et les parasites") +
    rrect(80, 150, 340, 250, "#e8eaf6") + txt(250, 200, "VIRUS", { size: 24, bold: true, fill: "#283593" }) +
    `<circle cx="250" cy="275" r="35" fill="#ef9a9a" stroke="#000" stroke-width="3"/>` +
    txt(250, 330, "très petit ; se multiplie dans la cellule", { size: 16 }) +
    txt(250, 370, "grippe, rougeole, VIH", { size: 16 }) +
    rrect(480, 150, 340, 250, "#fff3e0") + txt(650, 200, "PARASITE", { size: 24, bold: true, fill: "#e65100" }) +
    `<path d="M 620 260 q 45 35 90 5" stroke="#6d4c41" stroke-width="8" fill="none"/>` +
    txt(650, 330, "vit aux dépens d'un hôte", { size: 17 }) +
    txt(650, 370, "paludisme, vers intestinaux", { size: 16 }) +
    txt(450, 470, "Différence : le virus n'est pas une cellule ; le parasite est un organisme.", { size: 19, italic: true, fill: "#546e7a" }) +
    txt(450, 530, "Tous deux peuvent provoquer des maladies.", { size: 18, bold: true, fill: "#c62828" }));
})();

// ============ 13. Infection et immunité ============
const IMMUNITE = (() => {
  const steps = ["Entrée du microbe", "Multiplication", "Réaction (fièvre)", "Défense (anticorps)"];
  let s = title("L'infection microbienne et l'immunité");
  steps.forEach((t, i) => {
    const cx = 150 + i * 180, y = 300;
    s += circle(cx, y, 42, i === 3 ? "#d9ead3" : "#fce4ec");
    s += txt(cx, y - 4, "" + (i + 1), { size: 18, bold: true });
    s += txt(cx, y + 63, t, { size: 15 });
    if (i < steps.length - 1) s += arrow(cx + 50, y, cx + 122, y, "#546e7a", 3);
  });
  s += rrect(150, 430, 620, 140, "#e8eaf6") + txt(460, 470, "Soi / non-soi", { size: 22, bold: true, fill: "#283593" }) +
    txt(460, 510, "le corps reconnaît ses cellules (soi) et les microbes (non-soi)", { size: 18 }) +
    txt(460, 545, "les cellules immunitaires et les anticorps détruisent les microbes", { size: 17 });
  return wrap(s);
})();

// ============ 14. Prévention soins ============
const PREVENTION = (() => {
  return wrap(title("Antisepsie · asepsie · vaccins · sérums") +
    rrect(70, 150, 220, 110, "#cfe2f3") + txt(180, 195, "ASEPSIE", { size: 22, bold: true, fill: "#01579b" }) + txt(180, 230, "éviter l'entrée des microbes", { size: 14 }) +
    rrect(330, 150, 220, 110, "#d9ead3") + txt(440, 195, "ANTISEPSIE", { size: 22, bold: true, fill: "#2e7d32" }) + txt(440, 230, "détruire sur la peau/plaie", { size: 14 }) +
    rrect(590, 150, 240, 110, "#fff3e0") + txt(710, 195, "ANTIBIOTIQUES", { size: 20, bold: true, fill: "#e65100" }) + txt(710, 230, "contre les bactéries", { size: 14 }) +
    rrect(70, 300, 220, 110, "#fce4ec") + txt(180, 345, "VACCIN", { size: 22, bold: true, fill: "#c62828" }) + txt(180, 380, "prépare l'immunité (longue)", { size: 14 }) +
    rrect(330, 300, 220, 110, "#e8eaf6") + txt(440, 345, "SÉRUM", { size: 22, bold: true, fill: "#283593" }) + txt(440, 380, "anticorps immédiats (courte)", { size: 13 }) +
    rrect(590, 300, 240, 110, "#f3e5f5") + txt(710, 345, "AUTRES", { size: 22, bold: true, fill: "#6a1b9a" }) + txt(710, 380, "antiparasitaire, antifongique", { size: 13 }) +
    txt(450, 480, "L'aspesie évite, l'antisepsie désinfecte.", { size: 18 }) +
    txt(450, 520, "Le vaccin prépare le corps ; le sérum apporte des anticorps.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 15. Mesures prévention ============
const MESURES = (() => {
  return wrap(title("Prévention et lutte contre les maladies infectieuses") +
    rrect(80, 130, 330, 150, "#cfe2f3") + txt(245, 175, "INDIVIDUELLES", { size: 22, bold: true, fill: "#01579b" }) +
    txt(245, 215, "se laver les mains", { size: 16 }) + txt(245, 250, "eau propre · cuisson · vaccination", { size: 14 }) +
    rrect(490, 130, 330, 150, "#d9ead3") + txt(655, 175, "COLLECTIVES", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(655, 215, "assainir l'eau", { size: 16 }) + txt(655, 250, "gérer les déchets · vacciner", { size: 14 }) +
    txt(450, 370, "En cas d'épidémie :", { size: 20, bold: true, fill: "#c62828" }) +
    txt(450, 410, "suivre les consignes, garder l'hygiène, signaler les cas.", { size: 18 }) +
    txt(450, 470, "→ Protéger son corps et la communauté.", { size: 19, italic: true, fill: "#546e7a" }));
})();

// ============ 16. Écosystème ============
const ECO = (() => {
  return wrap(title("Un écosystème") +
    `<path d="M 60 500 Q 450 400 840 500 L 840 200 Q 450 120 60 200 Z" fill="#e8f5e9" stroke="#000" stroke-width="3"/>` +
    `<path d="M 180 320 Q 190 250 220 220" stroke="#2e7d32" stroke-width="10" fill="none"/>` +
    `<path d="M 220 215 q -35 10 -30 45 q 32 -5 30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
    `<path d="M 220 235 q 35 10 30 45 q -32 -5 -30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
    `<path d="M 360 320 Q 370 260 400 230" stroke="#2e7d32" stroke-width="9" fill="none"/>` +
    `<path d="M 400 225 q -35 10 -30 45 q 32 -5 30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
    `<ellipse cx="580" cy="320" rx="42" ry="30" fill="#a1887f" stroke="#000" stroke-width="2"/>` +
    `<circle cx="600" cy="310" r="7" fill="#000"/>` + `<path d="M 585 342 l 18 25 l 18 -25" fill="#5d4037" stroke="#000" stroke-width="2"/>` +
    `<ellipse cx="720" cy="330" rx="48" ry="30" fill="#f9d94e" stroke="#000" stroke-width="2"/>` +
    `<path d="M 690 335 l 60 0" stroke="#5d4037" stroke-width="5"/>` +
    txt(450, 560, "Êtres vivants + milieu physique, avec leurs interactions", { size: 19, bold: true, fill: "#1F4E79" }));
})();

// ============ 17. Conditions du milieu ============
const CONDITIONS = (() => {
  return wrap(title("Les conditions physiques d'un milieu") +
    rrect(90, 140, 210, 120, "#cfe2f3") + txt(195, 190, "TEMPERATURE", { size: 20, bold: true, fill: "#01579b" }) + txt(195, 230, "chaude / tempérée / froide", { size: 14 }) +
    rrect(330, 140, 210, 120, "#d9ead3") + txt(435, 190, "HUMIDITÉ", { size: 20, bold: true, fill: "#2e7d32" }) + txt(435, 230, "humide / sec", { size: 16 }) +
    rrect(570, 140, 240, 120, "#fff3e0") + txt(690, 190, "LUMIÈRE", { size: 20, bold: true, fill: "#e65100" }) + txt(690, 230, "forte / faible", { size: 16 }) +
    rrect(90, 300, 210, 120, "#e8eaf6") + txt(195, 350, "SOL", { size: 20, bold: true, fill: "#283593" }) + txt(195, 390, "sableux / argileux", { size: 14 }) +
    rrect(330, 300, 210, 120, "#fce4ec") + txt(435, 350, "EAU", { size: 20, bold: true, fill: "#c62828" }) + txt(435, 390, "disponibilité", { size: 16 }) +
    rrect(570, 300, 240, 120, "#f3e5f5") + txt(690, 350, "ALTITUDE", { size: 20, bold: true, fill: "#6a1b9a" }) + txt(690, 390, "plaine / montagne", { size: 16 }) +
    txt(450, 490, "Chaque espèce est adaptée à un ensemble de conditions.", { size: 19 }) +
    txt(450, 540, "Le riz : milieu humide · le cactus : milieu sec.", { size: 17, italic: true, fill: "#546e7a" }));
})();

// ============ 18. Mode de vie ============
const MODE = (() => {
  return wrap(title("Modes de vie et adaptation") +
    rrect(80, 140, 240, 130, "#cfe2f3") + txt(200, 190, "DÉPLACEMENT", { size: 20, bold: true, fill: "#01579b" }) +
    txt(200, 230, "nager · voler · marcher", { size: 15 }) +
    rrect(350, 140, 240, 130, "#d9ead3") + txt(470, 190, "RESPIRATION", { size: 20, bold: true, fill: "#2e7d32" }) +
    txt(470, 230, "branchies · poumons · trachées", { size: 14 }) +
    rrect(620, 140, 210, 130, "#fff3e0") + txt(725, 190, "ADAPTATION", { size: 20, bold: true, fill: "#e65100" }) +
    txt(725, 230, "racines · feuilles · tiges", { size: 15 }) +
    `<path d="M 150 300 Q 160 260 185 250" stroke="#2e7d32" stroke-width="9"/>` +
    `<path d="M 185 250 q -25 8 -22 35 q 25 -5 22 -35z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
    `<ellipse cx="430" cy="320" rx="55" ry="45" fill="#ef9a9a" stroke="#000" stroke-width="3"/>` +
    `<path d="M 460 340 l 25 30" stroke="#000" stroke-width="4"/>` +
    txt(450, 470, "Chaque espèce est adaptée à son milieu pour vivre.", { size: 19 }) +
    txt(450, 520, "Exemple : caméléon (arbres) · poisson (eau).", { size: 17, italic: true, fill: "#546e7a" }));
})();

// ============ 19. Interactions ============
const INTERACTIONS = (() => {
  return wrap(title("Interactions entre les êtres vivants") +
    rrect(70, 140, 220, 110, "#ffcdd2") + txt(180, 185, "PRÉDATION", { size: 20, bold: true, fill: "#c62828" }) + txt(180, 220, "prédateur → proie", { size: 15 }) +
    rrect(330, 140, 220, 110, "#fff3e0") + txt(440, 185, "PARASITISME", { size: 20, bold: true, fill: "#e65100" }) + txt(440, 220, "parasite → hôte", { size: 15 }) +
    rrect(590, 140, 240, 110, "#d9ead3") + txt(710, 185, "MUTUALISME", { size: 20, bold: true, fill: "#2e7d32" }) + txt(710, 220, "les 2 profitent", { size: 15 }) +
    rrect(70, 290, 220, 110, "#e8eaf6") + txt(180, 335, "COMMENSALISME", { size: 19, bold: true, fill: "#283593" }) + txt(180, 370, "1 profite, 1 neutre", { size: 14 }) +
    rrect(330, 290, 220, 110, "#cfe2f3") + txt(440, 335, "SYMBIOSE", { size: 20, bold: true, fill: "#01579b" }) + txt(440, 370, "association étroite", { size: 15 }) +
    rrect(590, 290, 240, 110, "#f3e5f5") + txt(710, 335, "AUTRES", { size: 20, bold: true, fill: "#6a1b9a" }) + txt(710, 370, "habitat, dépendance", { size: 14 }) +
    txt(450, 450, "Ces liens maintiennent l'équilibre de l'écosystème.", { size: 19, bold: true, fill: "#1F4E79" }));
})();

// ============ 20. Chaîne alimentaire ============
const CHAINE = (() => {
  const items = ["Herbe", "Criquet", "Oiseau", "Serpent"];
  let s = title("La chaîne alimentaire");
  items.forEach((t, i) => {
    const cx = 150 + i * 180, y = 300;
    const fill = i === 0 ? "#a5d6a7" : i % 2 ? "#f9d94e" : "#bcaaa4";
    s += rrect(cx - 55, y - 45, 110, 90, fill);
    s += txt(cx, y + 5, t, { size: 18, bold: true });
    s += txt(cx, y - 65, i === 0 ? "PRODUCTEUR" : "CONSOMMATEUR", { size: 13, fill: i === 0 ? "#2e7d32" : "#37474f" });
    if (i < items.length - 1) s += arrow(cx + 60, y, cx + 115, y, "#546e7a", 4);
  });
  s += txt(450, 380, "→ l'énergie et la matière passent du producteur aux consommateurs.", { size: 18 }) +
    txt(450, 440, "les décomposeurs recyclent les déchets", { size: 17, italic: true, fill: "#546e7a" }) +
    txt(450, 500, "Exemple : riz → criquet → oiseau → serpent", { size: 19, bold: true, fill: "#1F4E79" });
  return wrap(s);
})();

// ============ 21. Extinction ============
const EXT = (() => {
  return wrap(title("Modification de l'environnement et extinction") +
    rrect(80, 140, 240, 130, "#ffcdd2") + txt(200, 185, "DÉFORESTATION", { size: 20, bold: true, fill: "#c62828" }) + txt(200, 225, "perte d'habitat", { size: 15 }) +
    rrect(360, 140, 240, 130, "#cfe2f3") + txt(480, 185, "POLLUTION", { size: 20, bold: true, fill: "#01579b" }) + txt(480, 225, "déséquilibre", { size: 15 }) +
    rrect(640, 140, 180, 130, "#fff3e0") + txt(730, 185, "SURPÊCHE", { size: 20, bold: true, fill: "#e65100" }) + txt(730, 225, "raréfaction", { size: 15 }) +
    `<path d="M 150 300 Q 180 250 210 280" stroke="#2e7d32" stroke-width="9"/>` +
    `<path d="M 210 280 q -30 8 -25 42 q 28 -6 25 -42z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
    `<circle cx="450" cy="315" r="40" fill="#9e9e9e" stroke="#000" stroke-width="3"/>` +
    `<path d="M 425 290 q 25 18 50 0" stroke="#000" stroke-width="3" fill="none"/>` +
    `<circle cx="440" cy="320" r="6" fill="#000"/>` + `<circle cx="462" cy="320" r="6" fill="#000"/>` +
    txt(450, 405, "espèce menacée", { size: 18 }) +
    txt(200, 450, "", {}) +
    txt(450, 500, "→ Préserver l'équilibre des écosystèmes, c'est protéger les espèces.", { size: 18, bold: true, fill: "#2e7d32" }));
})();

// ============ 22. Structure de la Terre ============
const TERRE = (() => {
  return wrap(title("La structure interne de la Terre") +
    circle(450, 310, 160, "#ffcdd2") +
    circle(450, 310, 110, "#fff3e0") +
    circle(450, 310, 60, "#e8eaf6") +
    txt(450, 160, "croûte", { size: 18, bold: true, fill: "#c62828" }) +
    txt(450, 445, "manteau", { size: 18, bold: true, fill: "#e65100" }) +
    txt(450, 335, "noyau", { size: 18, bold: true, fill: "#283593" }) +
    `<path d="M 450 150 L 450 470" stroke="#000" stroke-width="2" stroke-dasharray="8 8"/>` +
    txt(700, 210, "couches", { size: 19, fill: "#37474f" }) +
    txt(700, 250, "croûte", { size: 16 }) + txt(700, 290, "manteau", { size: 16 }) + txt(700, 330, "noyau", { size: 16 }) +
    txt(450, 540, "Plus on descend, plus la température et la pression augmentent.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 23. Activités de la Terre ============
const ACT_TERRE = (() => {
  return wrap(title("Activités internes et externes") +
    rrect(70, 140, 360, 130, "#ffcdd2") + txt(250, 185, "ACTIVITÉS INTERNES", { size: 21, bold: true, fill: "#c62828" }) +
    txt(250, 225, "convection · volcanisme · séismes · tectonique", { size: 15 }) +
    rrect(470, 140, 360, 130, "#cfe2f3") + txt(650, 185, "ACTIVITÉS EXTERNES", { size: 21, bold: true, fill: "#01579b" }) +
    txt(650, 225, "pluie · vent · température · érosion", { size: 15 }) +
    `<path d="M 120 300 Q 200 260 300 300" stroke="#e65100" stroke-width="5" fill="none"/>` +
    `<path d="M 120 330 Q 200 370 300 330" stroke="#e65100" stroke-width="5" fill="none"/>` +
    `<path d="M 540 330 Q 620 300 700 330" stroke="#039be5" stroke-width="5" fill="none"/>` +
    `<path d="M 540 300 Q 620 330 700 300" stroke="#039be5" stroke-width="5" fill="none"/>` +
    txt(450, 450, "→ Le paysage est modifié par ces deux types d'activités.", { size: 19, bold: true, fill: "#1F4E79" }) +
    txt(450, 500, "Exemple : volcan (interne) · rivière qui creuse (externe).", { size: 17, italic: true, fill: "#546e7a" }));
})();

// ============ 24. Volcan et séisme ============
const VOLCAN = (() => {
  return wrap(title("Volcanisme et séismes") +
    `<path d="M 120 440 L 200 260 L 280 440 Z" fill="#5d4037" stroke="#000" stroke-width="3"/>` +
    `<path d="M 260 440 L 320 290 L 380 440 Z" fill="#5d4037" stroke="#000" stroke-width="3"/>` +
    `<ellipse cx="260" cy="270" rx="95" ry="30" fill="#ef9a9a" stroke="#000" stroke-width="3"/>` +
    txt(260, 275, "magma", { size: 18, bold: true, fill: "#ffffff" }) +
    arrow(260, 240, 260, 190, "#c62828", 4) +
    txt(260, 165, "lave + cendres", { size: 17 }) +
    rrect(500, 300, 320, 120, "#e8eaf6") + txt(660, 345, "SÉISME", { size: 22, bold: true, fill: "#283593" }) +
    txt(660, 385, "secousses du sol, failles", { size: 16 }) +
    `<path d="M 560 440 L 760 440" stroke="#37474f" stroke-width="3" stroke-dasharray="10 8"/>` +
    `<path d="M 620 445 L 620 470" stroke="#000" stroke-width="3"/>` +
    txt(450, 490, "Volcans : développement du relief, mais risques. Séismes : dégâts et dangers.", { size: 18, italic: true, fill: "#546e7a" }) +
    txt(450, 530, "Prévention : construction adaptée, consignes de sécurité.", { size: 18, bold: true, fill: "#2e7d32" }));
})();

// ============ 25. Tectonique et érosion ============
const TECT = (() => {
  return wrap(title("Tectonique, montagnes, érosion et lavakisation") +
    rrect(70, 140, 360, 120, "#e8eaf6") + txt(250, 185, "TECTONIQUE", { size: 21, bold: true, fill: "#283593" }) +
    txt(250, 225, "subduction / collision → montagnes", { size: 15 }) +
    rrect(470, 140, 360, 120, "#fff3e0") + txt(650, 185, "ÉROSION", { size: 21, bold: true, fill: "#e65100" }) +
    txt(650, 225, "eau, vent → ravins, lavakas", { size: 15 }) +
    `<path d="M 150 320 L 260 280 L 370 320" fill="#90a4ae" stroke="#000" stroke-width="3"/>` +
    `<path d="M 350 320 Q 450 380 470 440" fill="none" stroke="#795548" stroke-width="6"/>` +
    `<path d="M 620 320 Q 700 300 760 330" stroke="#039be5" stroke-width="5" fill="none"/>` +
    `<path d="M 680 335 L 680 440" stroke="#795548" stroke-width="4"/>` +
    txt(650, 470, "ravin / lavaka", { size: 17 }) +
    txt(450, 530, "Le paysage change lentement au cours du temps.", { size: 18, italic: true, fill: "#546e7a" }));
})();

// ============ 26. Grossesse précoce ============
const GROSSESSE = (() => {
  return wrap(title("La grossesse précoce : causes, conséquences, prévention") +
    rrect(70, 140, 250, 130, "#fce4ec") + txt(195, 185, "CAUSES", { size: 22, bold: true, fill: "#c62828" }) +
    txt(195, 225, "ignorance · pression · absence", { size: 14 }) +
    txt(195, 250, "de dialogue · manque de protection", { size: 14 }) +
    rrect(340, 140, 250, 130, "#fff3e0") + txt(465, 185, "CONSÉQUENCES", { size: 20, bold: true, fill: "#e65100" }) +
    txt(465, 225, "abandon d'école · risques de santé", { size: 14 }) +
    txt(465, 250, "· charge familiale · isolement", { size: 14 }) +
    rrect(610, 140, 220, 130, "#d9ead3") + txt(720, 185, "PRÉVENTION", { size: 20, bold: true, fill: "#2e7d32" }) +
    txt(720, 225, "information · dialogue", { size: 14 }) +
    txt(720, 250, "· responsabilité · accompagnement", { size: 13 }) +
    arrow(195, 290, 195, 360, "#c62828", 4) + txt(195, 360, "grossesse", { size: 18 }) +
    arrow(465, 290, 465, 360, "#e65100", 4) + txt(465, 360, "précoce", { size: 18 }) +
    arrow(720, 290, 720, 360, "#2e7d32", 4) + txt(720, 360, "protéger", { size: 18 }) +
    txt(195, 410, "santé", { size: 18 }) + txt(465, 410, "avenir", { size: 18 }) + txt(720, 410, "l'adolescent(e)", { size: 16 }) +
    rrect(160, 450, 580, 100, "#e8eaf6") + txt(450, 485, "Message : attendre d'être prêt(e)", { size: 20, bold: true, fill: "#283593" }) +
    txt(450, 520, "en parler et se faire accompagner", { size: 16 }));
})();

// ============ 27. Maladies à Madagascar ============
const MALADIES_MADA = (() => {
  return wrap(title("Les principales maladies infectieuses à Madagascar") +
    rrect(70, 140, 190, 130, "#cfe2f3") + txt(165, 185, "PALUDISME", { size: 19, bold: true, fill: "#01579b" }) +
    txt(165, 225, "moustique → parasite", { size: 13 }) + txt(165, 250, "moustiquaire, eaux stagnantes", { size: 11 }) +
    rrect(285, 140, 190, 130, "#fce4ec") + txt(380, 185, "CHOLÉRA", { size: 19, bold: true, fill: "#c62828" }) +
    txt(380, 225, "eau / aliments souillés", { size: 13 }) + txt(380, 250, "eau propre, hygiène", { size: 12 }) +
    rrect(500, 140, 190, 130, "#e8eaf6") + txt(595, 185, "TUBERCULOSE", { size: 18, bold: true, fill: "#283593" }) +
    txt(595, 225, "toux → gouttelettes", { size: 13 }) + txt(595, 250, "vaccin BCG, traitement", { size: 12 }) +
    rrect(715, 140, 130, 130, "#fff3e0") + txt(780, 185, "VERS", { size: 19, bold: true, fill: "#e65100" }) +
    txt(780, 225, "eau souillée", { size: 13 }) + txt(780, 250, "hygiène", { size: 13 }) +
    rrect(70, 300, 760, 120, "#d9ead3") + txt(450, 340, "LUTTE COMMUNAUTAIRE", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(450, 380, "assainissement · eau propre · déchets · vaccination · dépistage · information", { size: 17 }) +
    txt(450, 470, "Prévenir tôt, consulter tôt, protéger la communauté.", { size: 20, bold: true, fill: "#c62828" }));
})();

// ============ Bilans ============
const BILAN_I = (() => {
  return wrap(title("Bilan — Unité I : Santé et bien-être") +
    rrect(80, 140, 360, 140, "#d9ead3") + txt(260, 185, "APPAREIL DIGESTIF", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(260, 225, "tube digestif + glandes digestives", { size: 16 }) +
    rrect(480, 140, 340, 140, "#cfe2f3") + txt(650, 185, "RÔLES", { size: 22, bold: true, fill: "#01579b" }) +
    txt(650, 225, "broyer · transporter · transformer · absorber", { size: 15 }) +
    rrect(80, 320, 360, 120, "#ffcdd2") + txt(260, 365, "TRANSFORMATIONS", { size: 20, bold: true, fill: "#c62828" }) +
    txt(260, 400, "mécaniques + chimiques", { size: 16 }) +
    rrect(480, 320, 340, 120, "#e8eaf6") + txt(650, 365, "DEVENIR", { size: 20, bold: true, fill: "#283593" }) +
    txt(650, 400, "nutriments → sang · déchets → anus", { size: 14 }) +
    txt(450, 490, "RAS : analyser le fonctionnement de l'appareil digestif.", { size: 18, italic: true, fill: "#546e7a" }));
})();

const BILAN_II = (() => {
  return wrap(title("Bilan — Unité II : Reproduction humaine") +
    rrect(80, 140, 240, 140, "#fce4ec") + txt(200, 185, "PUBERTÉ", { size: 22, bold: true, fill: "#c62828" }) +
    txt(200, 225, "capacité à se reproduire", { size: 15 }) +
    rrect(350, 140, 240, 140, "#e8eaf6") + txt(470, 185, "GONADES", { size: 22, bold: true, fill: "#283593" }) +
    txt(470, 225, "testicules · ovaires", { size: 16 }) +
    rrect(620, 140, 220, 140, "#cfe2f3") + txt(730, 185, "CYCLE", { size: 22, bold: true, fill: "#01579b" }) +
    txt(730, 225, "menstruel", { size: 15 }) +
    rrect(80, 320, 240, 120, "#d9ead3") + txt(200, 365, "FÉCONDATION", { size: 20, bold: true, fill: "#2e7d32" }) +
    txt(200, 405, "spermatozoïde + ovule", { size: 14 }) +
    rrect(350, 320, 240, 120, "#fff3e0") + txt(470, 365, "PRÉCOCE", { size: 20, bold: true, fill: "#e65100" }) +
    txt(470, 405, "grossesse à prévenir", { size: 13 }) +
    rrect(620, 320, 220, 120, "#f3e5f5") + txt(730, 365, "RESPONSABILITÉ", { size: 18, bold: true, fill: "#6a1b9a" }) +
    txt(730, 405, "dialogue · info", { size: 13 }) +
    txt(450, 490, "RAS : puberté, capacités reproductrices, grossesse précoce.", { size: 18, italic: true, fill: "#546e7a" }));
})();

const BILAN_III = (() => {
  return wrap(title("Bilan — Unité III : Maladies infectieuses") +
    rrect(80, 140, 220, 130, "#fce4ec") + txt(190, 185, "MICROBES", { size: 22, bold: true, fill: "#c62828" }) +
    txt(190, 225, "bactérie · champignon · virus · parasite", { size: 13 }) +
    rrect(330, 140, 240, 130, "#e8eaf6") + txt(450, 185, "INFECTION", { size: 22, bold: true, fill: "#283593" }) +
    txt(450, 225, "entrée → défense", { size: 16 }) +
    rrect(600, 140, 220, 130, "#d9ead3") + txt(710, 185, "IMMUNITÉ", { size: 22, bold: true, fill: "#2e7d32" }) +
    txt(710, 225, "soi / non-soi · anticorps", { size: 13 }) +
    rrect(80, 310, 220, 130, "#fff3e0") + txt(190, 355, "ASEPSIE", { size: 22, bold: true, fill: "#e65100" }) +
    txt(190, 395, "éviter l'entrée", { size: 16 }) +
    rrect(330, 310, 240, 130, "#cfe2f3") + txt(450, 355, "ANTISEPSIE", { size: 22, bold: true, fill: "#01579b" }) +
    txt(450, 395, "détruire sur peau/plaie", { size: 14 }) +
    rrect(600, 310, 220, 130, "#f3e5f5") + txt(710, 355, "VACCIN / SÉRUM", { size: 20, bold: true, fill: "#6a1b9a" }) +
    txt(710, 395, "immunité / anticorps", { size: 13 }) +
    txt(450, 490, "RAS : microorganismes et lutte contre les maladies infectieuses.", { size: 18, italic: true, fill: "#546e7a" }));
})();

const BILAN_IV = (() => {
  return wrap(title("Bilan — Unité IV : Organisation des êtres vivants") +
    rrect(80, 130, 240, 120, "#d9ead3") + txt(200, 170, "ÉCOSYSTÈME", { size: 20, bold: true, fill: "#2e7d32" }) +
    txt(200, 205, "vivants + milieu", { size: 15 }) +
    rrect(350, 130, 240, 120, "#cfe2f3") + txt(470, 170, "CONDITIONS", { size: 20, bold: true, fill: "#01579b" }) +
    txt(470, 205, "température, eau, lumière…", { size: 13 }) +
    rrect(620, 130, 220, 120, "#fff3e0") + txt(730, 170, "ADAPTATION", { size: 20, bold: true, fill: "#e65100" }) +
    txt(730, 205, "mode de vie", { size: 15 }) +
    rrect(80, 290, 240, 120, "#fce4ec") + txt(200, 330, "INTERACTIONS", { size: 18, bold: true, fill: "#c62828" }) +
    txt(200, 365, "prédation, parasitisme…", { size: 13 }) +
    rrect(350, 290, 240, 120, "#e8eaf6") + txt(470, 330, "CHAÎNE", { size: 20, bold: true, fill: "#283593" }) +
    txt(470, 365, "producteur → consommateur", { size: 13 }) +
    rrect(620, 290, 220, 120, "#f3e5f5") + txt(730, 330, "ÉQUILIBRE", { size: 18, bold: true, fill: "#6a1b9a" }) +
    txt(730, 365, "protéger les espèces", { size: 13 }) +
    txt(450, 480, "RAS : préserver chaque espèce et l'équilibre de l'écosystème.", { size: 18, italic: true, fill: "#546e7a" }));
})();

const BILAN_V = (() => {
  return wrap(title("Bilan — Unité V : Géologie") +
    rrect(80, 140, 240, 130, "#ffcdd2") + txt(200, 185, "STRUCTURE", { size: 22, bold: true, fill: "#c62828" }) +
    txt(200, 225, "croûte · manteau · noyau", { size: 15 }) +
    rrect(350, 140, 240, 130, "#cfe2f3") + txt(470, 185, "ACTIVITÉS", { size: 22, bold: true, fill: "#01579b" }) +
    txt(470, 225, "interne + externe", { size: 16 }) +
    rrect(620, 140, 220, 130, "#d9ead3") + txt(730, 185, "VOLCAN / SÉISME", { size: 18, bold: true, fill: "#2e7d32" }) +
    txt(730, 225, "manifestations", { size: 15 }) +
    rrect(80, 310, 240, 130, "#fff3e0") + txt(200, 355, "TECTONIQUE", { size: 22, bold: true, fill: "#e65100" }) +
    txt(200, 395, "subduction · collision", { size: 15 }) +
    rrect(350, 310, 240, 130, "#e8eaf6") + txt(470, 355, "ÉROSION", { size: 22, bold: true, fill: "#283593" }) +
    txt(470, 395, "lavakisation", { size: 16 }) +
    rrect(620, 310, 220, 130, "#f3e5f5") + txt(730, 355, "MONTAGNES", { size: 20, bold: true, fill: "#6a1b9a" }) +
    txt(730, 395, "paysage", { size: 15 }) +
    txt(450, 490, "RAS : analyser les modifications du paysage terrestre.", { size: 18, italic: true, fill: "#546e7a" }));
})();

const SCHEMAS_NEW = {
  "appareil-digestif.png": DIGESTIF,
  "roles-digestifs.png": ROLES_DIG,
  "trajet-aliments.png": TRAJET,
  "digestion-perturbee.png": PERTURB,
  "puberte.png": PUBERTE,
  "organes-genitaux.png": ORGANES,
  "cycle-menstruel.png": CYCLE_M,
  "fecondation.png": FECOND,
  "microorganismes.png": MICRO,
  "bacteries.png": BACTERIE,
  "champignons.png": CHAMP,
  "virus-parasites.png": VIRUS_PARA,
  "infection-immunite.png": IMMUNITE,
  "prevention-soins.png": PREVENTION,
  "mesures-prevention.png": MESURES,
  "ecosysteme.png": ECO,
  "conditions-milieu.png": CONDITIONS,
  "mode-vie.png": MODE,
  "interactions.png": INTERACTIONS,
  "chaine-alimentaire.png": CHAINE,
  "extinction.png": EXT,
  "structure-terre.png": TERRE,
  "activites-terre.png": ACT_TERRE,
  "volcan-seisme.png": VOLCAN,
  "tectonique-erosion.png": TECT,
  "grossesse-precoce.png": GROSSESSE,
  "maladies-madagascar.png": MALADIES_MADA,
  "bilan-unite-I.png": BILAN_I,
  "bilan-unite-II.png": BILAN_II,
  "bilan-unite-III.png": BILAN_III,
  "bilan-unite-IV.png": BILAN_IV,
  "bilan-unite-V.png": BILAN_V,
};

module.exports = { SCHEMAS_NEW };
