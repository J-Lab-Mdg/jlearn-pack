// Titres brefs T8 en majuscules, format DOMAINE : OBJET (dérivés du curriculum, source unique).
const { parts } = require('./curriculum');
const shortTitles = Object.fromEntries(parts.map((p) => [p.id, p.short]));
module.exports = { shortTitles };
