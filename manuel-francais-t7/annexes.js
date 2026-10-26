// Français T7 — ANNEXES — STUB provisoire
const B = require("./builders");
const { run, p } = B;
module.exports = function annexes() {
  const out = [];
  for (let i = 1; i <= 6; i++) {
    out.push(B.bookmarkTitle("annex" + i, "ANNEXE " + i, { bold: true, size: 30, after: 60 }));
    out.push(p([run("(en préparation)", { italic: true })], { after: 80 }));
  }
  out.push(B.bookmarkTitle("final", "FÉLICITATIONS", { bold: true, size: 30, after: 60 }));
  return out;
};
