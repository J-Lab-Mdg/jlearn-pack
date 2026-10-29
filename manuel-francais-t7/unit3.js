// Français T7 — UNITÉ 3 — LES MÉDIAS — STUB provisoire (séances 25 à 36)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "D35400";
module.exports = function unit3() {
  const out = [unitBanner("UNITÉ 3 — LES MÉDIAS", COLOR, "unit3"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 25; n <= 36; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 84", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
