// Français T7 — UNITÉ 7 — L'ENVIRONNEMENT — STUB provisoire (séances 73 à 84)
const B = require("./builders");
const { run, p, unitBanner, pageBreak } = B;
const COLOR = "1E8449";
module.exports = function unit7() {
  const out = [unitBanner("UNITÉ 7 — L'ENVIRONNEMENT", COLOR, "unit7"), p("", { after: 100 }),
    p([run("(Unité en cours de rédaction.)", { italic: true })], { center: true, after: 120 })];
  for (let n = 73; n <= 84; n++) {
    out.push(B.bookmarkTitle("s" + n, "SÉANCE " + n + " / 84", { bold: true, size: 28, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 60 }));
  }
  out.push(pageBreak());
  return out;
};
module.exports.COLOR = COLOR;
