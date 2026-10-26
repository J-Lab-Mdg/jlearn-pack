// Français T7 — UNITÉ 5 — LA PÊCHE — STUB provisoire (séances 49 à 60)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "117864";
module.exports = function unit5() {
  const out = [unitBanner("UNITÉ 5 — LA PÊCHE", COLOR, "unit5"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 49; n <= 60; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 72", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
