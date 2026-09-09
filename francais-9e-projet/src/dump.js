// dump.js — exporte le contenu d'un manuel (PE/PS/ALL) en JSON pour build_docx.py.
const fs = require("fs");
const path = require("path");
const MODE = (process.argv[2] || "ALL").toUpperCase();
const mods = [1,2,3,4,5,6,7,8,9,10,11].map((n) => require("./data-theme" + n));
const EXTRA = require("./seances-lecture");
const EX2 = require("./seances-exercices");
let THEMES = mods.map((m) => ({
  t: m[Object.keys(m).find((k) => k.startsWith("theme"))],
  a: m[Object.keys(m).find((k) => k.startsWith("annexe"))],
}));
if (MODE === "PE") THEMES = [1,2,3,11,6,8].map((n) => THEMES.find((x) => x.t.numero === n));
if (MODE === "PS") THEMES = [4,5,7,9,10].map((n) => THEMES.find((x) => x.t.numero === n));
let SE = 0;
THEMES.forEach(({ t }) => { if (EXTRA[t.numero]) t.seances.push(...EXTRA[t.numero]); if (EX2[t.numero]) t.seances.push(EX2[t.numero]); });
THEMES.forEach(({ t }) => t.seances.forEach((s) => { s.n = ++SE; }));
fs.writeFileSync(path.join(__dirname, "..", "output", "dump_" + MODE + ".json"), JSON.stringify({ mode: MODE, total: SE, themes: THEMES }, null, 1));
console.log("dump", MODE, SE, "séances");
