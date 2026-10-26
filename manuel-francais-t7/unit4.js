// Français T7 — UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE — STUB provisoire (séances 37 à 48)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "1F618D";
module.exports = function unit4() {
  const out = [unitBanner("UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE", COLOR, "unit4"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 37; n <= 48; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 72", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
