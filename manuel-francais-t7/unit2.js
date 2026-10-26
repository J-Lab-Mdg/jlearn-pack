// Français T7 — UNITÉ 2 — LES TRADITIONS — STUB provisoire (séances 13 à 24)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "6C3483";
module.exports = function unit2() {
  const out = [unitBanner("UNITÉ 2 — LES TRADITIONS", COLOR, "unit2"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 13; n <= 24; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 72", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
