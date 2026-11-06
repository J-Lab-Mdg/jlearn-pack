// J-Learn — logique partagée (catalogue des manuels + publications Facebook)
const FB_PAGE_URL = "https://www.facebook.com/profile.php?id=61575599505051"; // page Facebook J-Learn (ID 61575599505051)
const MESSENGER_URL = "https://m.me/61575599505051";            // Messenger de la page
const CONTACT_EMAIL = "j.lab.mdg@gmail.com";

async function loadJSON(url){
  const r = await fetch(url, {cache:"no-store"});
  if(!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
}

function fmtTaille(ko){
  if(ko >= 1024) return (ko/1024).toFixed(1).replace('.', ',') + " Mo";
  return ko + " Ko";
}

function esc(s){
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ---------- Page Manuels ---------- */
async function initManuels(){
  const data = await loadJSON("data/manuels.json");
  const selMatiere = document.getElementById("f-matiere");
  const selClasse = document.getElementById("f-classe");
  const selType = document.getElementById("f-type");
  const recherche = document.getElementById("f-q");
  const galerie = document.getElementById("galerie");
  const liste = document.getElementById("liste");
  const compteur = document.getElementById("compteur");

  data.matieres.forEach(m => selMatiere.add(new Option(m, m)));
  data.classes.forEach(c => selClasse.add(new Option(c, c)));
  [...new Set(data.manuels.map(m => m.type))].sort().forEach(t => selType.add(new Option(t, t)));

  function cartes(){
    const q = (recherche.value || "").toLowerCase();
    return data.manuels.filter(m =>
      (!selMatiere.value || m.matiere === selMatiere.value) &&
      (!selClasse.value || m.classe === selClasse.value) &&
      (!selType.value || m.type === selType.value) &&
      (!q || m.titre.toLowerCase().includes(q) || m.fichier.toLowerCase().includes(q))
    );
  }

  function render(){
    const items = cartes();
    compteur.textContent = items.length + " document" + (items.length > 1 ? "s" : "");
    galerie.innerHTML = items.slice(0, 24).map(m => `
      <a href="#liste" title="${esc(m.titre)}">
        <img src="${esc(m.couverture)}" alt="${esc(m.titre)}" loading="lazy" onerror="this.parentNode.style.display='none'">
        <div class="gcap">${esc(m.matiere)} · ${esc(m.classe)}</div>
      </a>`).join("");
    liste.innerHTML = items.map(m => {
      const sujet = encodeURIComponent(`Bonjour, je voudrais recevoir le document : ${m.titre} (${m.matiere}, ${m.classe})`);
      return `
      <article class="card">
        <div class="cover"><img src="${esc(m.couverture)}" alt="" loading="lazy" onerror="this.parentNode.style.display='none'"></div>
        <h3>${esc(m.titre)}</h3>
        <div class="meta">
          <span class="tag">${esc(m.matiere)}</span>
          <span class="tag m2">${esc(m.classe)}</span>
          <span class="tag m3">${esc(m.type)}</span>
        </div>
        <div class="taille">${esc(m.format)} · ${fmtTaille(m.taille_ko)} · ${esc(m.source)}</div>
        <div class="actions">
          <a class="btn btn-primary btn-sm" href="${MESSENGER_URL}?text=${sujet}" target="_blank" rel="noopener">💬 Recevoir par Messenger</a>
          <a class="btn btn-ghost btn-sm" href="mailto:${CONTACT_EMAIL}?subject=${sujet}&body=${sujet}">✉️ Recevoir par e-mail</a>
          <a class="btn btn-ghost btn-sm" href="${esc(m.url_cdn)}" target="_blank" rel="noopener">🔗 Voir le fichier</a>
        </div>
      </article>`;
    }).join("");
  }

  [selMatiere, selClasse, selType].forEach(s => s.addEventListener("change", render));
  recherche.addEventListener("input", render);
  render();
}

/* ---------- Page Publications ---------- */
async function initPublications(){
  const conteneur = document.getElementById("posts");
  const maj = document.getElementById("maj");
  try{
    const data = await loadJSON("data/posts.json");
    maj.textContent = data.genere_le ? ("Dernière synchronisation avec Facebook : " + data.genere_le) : "";
    if(!data.posts || !data.posts.length){
      conteneur.innerHTML = `<div class="notice">Aucune publication synchronisée pour le moment. Revenez bientôt — les nouveautés de la page Facebook apparaîtront ici automatiquement. <a href="${FB_PAGE_URL}" target="_blank" rel="noopener">Voir la page Facebook →</a></div>`;
      return;
    }
    conteneur.innerHTML = data.posts.map(p => {
      const imgs = (p.images || []).map(u => `<img src="${esc(u)}" alt="" loading="lazy">`).join("");
      return `
      <article class="post">
        <div class="pdate">🗓️ ${esc(p.date || "")}</div>
        <div class="pmsg">${esc(p.message || "(publication sans texte)")}</div>
        ${imgs ? `<div class="pimgs">${imgs}</div>` : ""}
        <div class="actions">
          <a class="btn btn-primary btn-sm" href="${esc(p.lien || FB_PAGE_URL)}" target="_blank" rel="noopener">Voir sur Facebook →</a>
        </div>
      </article>`;
    }).join("");
  }catch(e){
    conteneur.innerHTML = `<div class="notice">Impossible de charger les publications pour le moment. <a href="${FB_PAGE_URL}" target="_blank" rel="noopener">Voir la page Facebook →</a></div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("liste")) initManuels();
  if(document.getElementById("posts")) initPublications();
});
