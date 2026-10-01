// lecons-v2/index.js — registre des leçons « nouvelle maquette lisible », clé = numéro de séance
const S4 = require("../data-temoin-s4");

const reg = {};
[
  require("./u1"),
  require("./u2"),
  require("./u3"),
  require("./u4"),
  require("./u5"),
].forEach(m => Object.assign(reg, m));

// La séance témoin 4 validée par l'utilisateur
reg[4] = {
  objectifs: S4.objectifs,
  motsCles: S4.motsCles,
  sections: S4.sections,
  experience: S4.experience,
  exercices: S4.exercices,
};

module.exports = reg;
