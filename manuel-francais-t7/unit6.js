// Français T7 — UNITÉ 6 — LA PÊCHE — STUB provisoire (séances 61 à 72)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "117864";
module.exports = function unit6() {
  const out = [unitBanner("UNITÉ 6 — LA PÊCHE", COLOR, "unit6"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 61; n <= 72; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 84", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
