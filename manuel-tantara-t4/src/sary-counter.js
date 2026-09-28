// Fanisana mandeha ho azy ny « Sary N » manerana ny boky
let n = 0;
const registre = [];

module.exports = {
  reset() { n = 0; registre.length = 0; },
  add(legende, anchor) {
    n += 1;
    registre.push({ num: n, legende, anchor });
    return n;
  },
  list() { return registre.slice(); },
};
