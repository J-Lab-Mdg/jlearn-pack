(function () {
  "use strict";

  const FAV_KEY = "mw_offline_favorites_v1";
  const THEME_KEY = "mw_offline_theme_v1";

  const state = {
    query: "",
    scope: "all",
    currentSlug: "",
    results: [],
    favorites: loadFavorites(),
    syncRunning: false,
    pollTimer: null,
  };

  // Références DOM
  const els = {
    statsPill: document.getElementById("statsPill"),
    demoBanner: document.getElementById("demoBanner"),
    searchInput: document.getElementById("searchInput"),
    btnClearSearch: document.getElementById("btnClearSearch"),
    scopeTabs: document.getElementById("scopeTabs"),
    resultsTitle: document.getElementById("resultsTitle"),
    resultsCount: document.getElementById("resultsCount"),
    resultsList: document.getElementById("resultsList"),
    detailPanel: document.getElementById("detailPanel"),
    btnRandom: document.getElementById("btnRandom"),
    btnTheme: document.getElementById("btnTheme"),
    brandHome: document.getElementById("brandHome"),
    btnOpenSync: document.getElementById("btnOpenSync"),
    btnBannerSync: document.getElementById("btnBannerSync"),
    syncModal: document.getElementById("syncModal"),
    btnCloseSync: document.getElementById("btnCloseSync"),
    btnStartSync: document.getElementById("btnStartSync"),
    btnStopSync: document.getElementById("btnStopSync"),
    selectMode: document.getElementById("selectMode"),
    selectSpeed: document.getElementById("selectSpeed"),
    syncDot: document.getElementById("syncDot"),
    syncBtnLabel: document.getElementById("syncBtnLabel"),
    syncAlertBox: document.getElementById("syncAlertBox"),
    st1Text: document.getElementById("st1Text"),
    st1Bar: document.getElementById("st1Bar"),
    st2Text: document.getElementById("st2Text"),
    st2Bar: document.getElementById("st2Bar"),
    st3Text: document.getElementById("st3Text"),
    st3Bar: document.getElementById("st3Bar"),
    syncPhaseText: document.getElementById("syncPhaseText"),
    syncMetricsText: document.getElementById("syncMetricsText"),
    syncRecentLog: document.getElementById("syncRecentLog"),
    lanHintBox: document.getElementById("lanHintBox"),
  };

  function escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatNum(n) {
    return Number(n || 0).toLocaleString("fr-FR");
  }

  function formatEta(sec) {
    if (!sec || sec <= 0) return "";
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    if (h > 0) return `${h} h ${String(m).padStart(2, "0")} min`;
    if (m > 0) return `${m} min ${String(s).padStart(2, "0")} s`;
    return `${s} s`;
  }

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
    } catch (_) {}
  }

  function isFavorite(slug) {
    return state.favorites.some((f) => f.slug === slug);
  }

  function toggleFavorite(wordObj) {
    const idx = state.favorites.findIndex((f) => f.slug === wordObj.slug);
    if (idx >= 0) {
      state.favorites.splice(idx, 1);
    } else {
      state.favorites.unshift({
        slug: wordObj.slug,
        word: wordObj.word,
        pos: wordObj.pos || "",
        preview_fr: wordObj.gloss_fr || (wordObj.entries && wordObj.entries[0] && wordObj.entries[0].defs_fr[0] ? wordObj.entries[0].defs_fr[0].text : ""),
      });
    }
    saveFavorites();
    if (state.scope === "favs") {
      runSearch();
    }
  }

  // Thème clair / sombre
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || (!saved && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  els.btnTheme.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (_) {}
  });

  // Statistiques globales
  async function refreshStats() {
    try {
      const res = await fetch("./api/stats");
      const st = await res.json();
      els.statsPill.textContent = `${formatNum(st.total_words)} mots · ${formatNum(st.full_words)} fiches · ${formatNum(st.total_proverbs)} proverbes (${st.db_size_mb} Mo)`;
      els.demoBanner.style.display = st.demo_only ? "block" : "none";
      if (st.lan_urls && st.lan_urls.length > 0) {
        els.lanHintBox.innerHTML =
          `📱 <strong>Astuce mobile sans data :</strong> sur le même Wi-Fi / partage de connexion local, ouvrez <code>${escHtml(st.lan_urls[0])}</code> sur votre téléphone.`;
      }
    } catch (_) {
      els.statsPill.textContent = "Mode hors-ligne local";
    }
  }

  // Recherche principale
  let searchDebounce = null;
  els.searchInput.addEventListener("input", () => {
    state.query = els.searchInput.value;
    els.btnClearSearch.style.display = state.query ? "inline-block" : "none";
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(runSearch, 110);
  });

  els.btnClearSearch.addEventListener("click", () => {
    els.searchInput.value = "";
    state.query = "";
    els.btnClearSearch.style.display = "none";
    els.searchInput.focus();
    runSearch();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== els.searchInput && !els.syncModal.classList.contains("open")) {
      e.preventDefault();
      els.searchInput.focus();
    }
    if (e.key === "Escape" && els.syncModal.classList.contains("open")) {
      closeSyncModal();
    }
  });

  els.scopeTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".scope-tab");
    if (!btn) return;
    document.querySelectorAll(".scope-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.scope = btn.dataset.scope;
    runSearch();
  });

  async function runSearch() {
    if (state.scope === "favs") {
      const q = state.query.trim().toLowerCase();
      const filtered = state.favorites.filter(
        (f) => !q || f.word.toLowerCase().includes(q) || (f.preview_fr || "").toLowerCase().includes(q)
      );
      els.resultsTitle.textContent = "Mes favoris ★";
      els.resultsCount.textContent = `${filtered.length}`;
      renderWordList(filtered.map((f) => ({ ...f, is_full: true })));
      return;
    }

    if (state.scope === "proverbs") {
      const res = await fetch(`./api/proverbs?q=${encodeURIComponent(state.query)}&limit=60`);
      const data = await res.json();
      els.resultsTitle.textContent = state.query ? `Proverbes pour « ${state.query} »` : "Proverbes malgaches (Ohabolana)";
      els.resultsCount.textContent = `${data.results.length}`;
      renderProverbsListAndDetail(data.results, state.query);
      return;
    }

    const res = await fetch(
      `./api/search?q=${encodeURIComponent(state.query)}&scope=${encodeURIComponent(state.scope)}&limit=60`
    );
    const data = await res.json();
    state.results = data.results || [];
    els.resultsTitle.textContent = state.query ? `Résultats pour « ${state.query} »` : "Entrées du dictionnaire";
    els.resultsCount.textContent = `${state.results.length}`;
    renderWordList(state.results);

    if (!state.currentSlug && state.results.length > 0) {
      openWord(state.results[0].slug, false);
    }
  }

  function renderWordList(items) {
    if (!items || items.length === 0) {
      els.resultsList.innerHTML = `<div class="empty-state" style="padding:28px 14px;">Aucun résultat trouvé dans la base locale.</div>`;
      return;
    }

    els.resultsList.innerHTML = items
      .map((it) => {
        const activeCls = it.slug === state.currentSlug ? "active" : "";
        const preview = it.preview_fr || it.preview_en || it.preview_mg || "";
        return `
          <div class="result-item ${activeCls}" data-slug="${escHtml(it.slug)}">
            <div class="ri-top">
              <span class="ri-word">${escHtml(it.word)}</span>
              <span class="ri-badges">
                ${it.is_root ? '<span class="badge badge-root" title="Radical / mot de base">fototeny</span>' : ""}
                ${it.pos ? `<span class="badge badge-pos">${escHtml(it.pos)}</span>` : ""}
                ${!it.is_full ? '<span class="badge" title="Indexé (fiche détaillée en attente)">index</span>' : ""}
              </span>
            </div>
            ${preview ? `<div class="ri-preview">${escHtml(preview)}</div>` : ""}
          </div>
        `;
      })
      .join("");
  }

  els.resultsList.addEventListener("click", (e) => {
    const item = e.target.closest(".result-item[data-slug]");
    if (!item) return;
    const slug = item.dataset.slug;
    window.location.hash = `#/mot/${encodeURIComponent(slug)}`;
  });

  function renderProverbsListAndDetail(proverbs, q) {
    if (!proverbs || proverbs.length === 0) {
      els.resultsList.innerHTML = `<div class="empty-state" style="padding:28px 14px;">Aucun proverbe correspondant.</div>`;
      els.detailPanel.innerHTML = `<div class="empty-state">Aucun proverbe trouvé pour « ${escHtml(q)} ».</div>`;
      return;
    }

    els.resultsList.innerHTML = proverbs
      .map(
        (p, idx) => `
        <div class="result-item" data-proverb-idx="${idx}">
          <div class="ri-word" style="font-size:14.5px;">${escHtml(p.text_mg.replace(/\[[^\]]*\]/g, "").trim())}</div>
          ${p.trans_fr && p.trans_fr[0] ? `<div class="ri-preview">${escHtml(p.trans_fr[0].text)}</div>` : ""}
        </div>
      `
      )
      .join("");

    els.detailPanel.innerHTML = `
      <div class="word-hero">
        <div>
          <h1 class="word-title">📜 Ohabolana — Proverbes malgaches</h1>
          <div class="word-meta-line">
            <span>${proverbs.length} proverbe(s) affiché(s)${q ? ` pour « ${escHtml(q)} »` : ""}</span>
          </div>
        </div>
      </div>
      <div>${proverbs.map(renderProverbCardHtml).join("")}</div>
    `;
  }

  function renderProverbCardHtml(p) {
    const variantsHtml =
      p.variants && p.variants.length > 0
        ? p.variants.map((v) => `<div>${v.html || escHtml(v.text)}</div>`).join("")
        : `<div>${p.html_mg || escHtml(p.text_mg)}</div>`;

    const blocks = [];
    if (p.interp_mg && p.interp_mg.length) {
      blocks.push(
        `<div class="proverb-sub"><strong>🇲🇬 Heviny :</strong>${p.interp_mg.map((x) => x.html || escHtml(x.text)).join("<br>")}</div>`
      );
    }
    if (p.trans_fr && p.trans_fr.length) {
      blocks.push(
        `<div class="proverb-sub"><strong>🇫🇷 Traduction :</strong>${p.trans_fr.map((x) => x.html || escHtml(x.text)).join("<br>")}</div>`
      );
    }
    if (p.interp_fr && p.interp_fr.length) {
      blocks.push(
        `<div class="proverb-sub"><strong>💡 Sens :</strong>${p.interp_fr.map((x) => x.html || escHtml(x.text)).join("<br>")}</div>`
      );
    }
    if (p.trans_en && p.trans_en.length) {
      blocks.push(
        `<div class="proverb-sub"><strong>🇬🇧 English :</strong>${p.trans_en.map((x) => x.html || escHtml(x.text)).join("<br>")}</div>`
      );
    }

    return `
      <article class="proverb-card">
        <div class="proverb-mg">${variantsHtml}</div>
        ${blocks.join("")}
      </article>
    `;
  }

  async function openWord(slug, updateHash = true) {
    if (!slug) return;
    state.currentSlug = slug;
    if (updateHash) {
      const targetHash = `#/mot/${encodeURIComponent(slug)}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
    }

    document.querySelectorAll(".result-item[data-slug]").forEach((el) => {
      el.classList.toggle("active", el.dataset.slug === slug);
    });

    const res = await fetch(`./api/word?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) {
      els.detailPanel.innerHTML = `
        <div class="empty-state">
          <h3 style="margin-bottom:8px;">Fiche « ${escHtml(slug)} » pas encore téléchargée</h3>
          <p style="margin-bottom:16px;">Ce mot n'est pas encore présent dans votre base locale.</p>
          <button class="btn btn-primary" id="btnFetchMissing" data-slug="${escHtml(slug)}">
            ⚡ Récupérer cette fiche maintenant (si connecté)
          </button>
        </div>
      `;
      bindFetchNowButton();
      return;
    }

    const w = await res.json();
    renderWordDetail(w);
  }

  async function openProverbsForSlug(slug) {
    const res = await fetch(`./api/word?slug=${encodeURIComponent(slug)}`);
    let proverbs = [];
    if (res.ok) {
      const w = await res.json();
      proverbs = w.proverbs || [];
    }
    if (!proverbs.length) {
      const r2 = await fetch(`./api/proverbs?q=${encodeURIComponent(slug)}&limit=60`);
      const d2 = await r2.json();
      proverbs = d2.results || [];
    }
    els.detailPanel.innerHTML = `
      <div class="word-hero">
        <div>
          <h1 class="word-title">📜 Proverbes autour de « ${escHtml(slug)} »</h1>
          <div class="word-meta-line">
            <a href="#/mot/${encodeURIComponent(slug)}" class="mw-link">← Retour à la fiche du mot ${escHtml(slug)}</a>
          </div>
        </div>
      </div>
      ${proverbs.length ? proverbs.map(renderProverbCardHtml).join("") : '<div class="empty-state">Aucun proverbe enregistré localement pour ce mot.</div>'}
    `;
  }

  function renderChips(items) {
    if (!items || !items.length) return "";
    return `
      <div class="chips-row">
        ${items
          .map((it) =>
            it.slug
              ? `<a href="#/mot/${encodeURIComponent(it.slug)}" class="word-chip">${escHtml(it.word)}</a>`
              : `<span class="word-chip">${escHtml(it.word)}</span>`
          )
          .join("")}
      </div>
    `;
  }

  function renderEntryCard(ent, idx, total) {
    const langFlags = { mg: "🇲🇬 Malagasy", fr: "🇫🇷 Français", en: "🇬🇧 English" };
    const badgeLabel = ent.badge || (total > 1 ? `${idx + 1}/${total}` : "");

    const rootsHtml =
      ent.roots && ent.roots.length
        ? `<span>Radical : ${ent.roots
            .map((r) =>
              r.slug
                ? `<a href="#/mot/${encodeURIComponent(r.slug)}" class="mw-link">${escHtml(r.word)}</a>`
                : `<strong>${escHtml(r.word)}</strong>`
            )
            .join(", ")}</span>`
        : "";

    const compsHtml =
      ent.components && ent.components.length
        ? `<span>Mots élémentaires : ${ent.components
            .map((c) => `<a href="#/mot/${encodeURIComponent(c.slug)}" class="mw-link">${escHtml(c.word)}</a>`)
            .join(" + ")}</span>`
        : "";

    const renderDefs = (title, list) => {
      if (!list || !list.length) return "";
      return `
        <div class="def-section">
          <div class="def-section-title">${title}</div>
          <ol class="def-list">
            ${list.map((d) => `<li>${d.html || escHtml(d.text)}</li>`).join("")}
          </ol>
        </div>
      `;
    };

    const examplesHtml =
      ent.examples && ent.examples.length
        ? `
          <div class="def-section">
            <div class="def-section-title">💬 Exemples d'usage</div>
            <div class="examples-box">
              <ul>${ent.examples.map((ex) => `<li>« ${ex.html || escHtml(ex.text)} »</li>`).join("")}</ul>
            </div>
          </div>
        `
        : "";

    const morphHtml =
      ent.morphology && ent.morphology.length
        ? `
          <div class="def-section">
            <div class="def-section-title">🧩 Morphologie</div>
            <div class="morph-grid">
              ${ent.morphology
                .map(
                  (m) => `
                  <div class="morph-item">
                    ${m.label ? `<b>${escHtml(m.label)}</b>` : ""}
                    <span>${m.html || escHtml(m.text)}</span>
                  </div>
                `
                )
                .join("")}
            </div>
          </div>
        `
        : "";

    const derivsHtml =
      ent.derivatives && ent.derivatives.length
        ? `
          <div class="def-section">
            <div class="def-section-title">🌿 Dérivés (Sampan-teny)</div>
            ${ent.derivatives
              .map(
                (grp) => `
                <div style="margin-top:6px;">
                  ${grp.label ? `<span style="font-size:12.5px; color:var(--text-muted); font-weight:600;">${escHtml(grp.label)} :</span>` : ""}
                  ${renderChips(grp.items)}
                </div>
              `
              )
              .join("")}
          </div>
        `
        : "";

    const relSections = [];
    if (ent.synonyms && ent.synonyms.length) {
      relSections.push(`<div class="def-section"><div class="def-section-title">Synonymes</div>${renderChips(ent.synonyms)}</div>`);
    }
    if (ent.antonyms && ent.antonyms.length) {
      relSections.push(`<div class="def-section"><div class="def-section-title">Antonymes</div>${renderChips(ent.antonyms)}</div>`);
    }
    if (ent.analogs && ent.analogs.length) {
      relSections.push(`<div class="def-section"><div class="def-section-title">Analogues &amp; mots proches</div>${renderChips(ent.analogs)}</div>`);
    }
    if (ent.other_spellings && ent.other_spellings.length) {
      relSections.push(`<div class="def-section"><div class="def-section-title">Autres graphies</div>${renderChips(ent.other_spellings)}</div>`);
    }
    if (ent.scientific_name && ent.scientific_name.length) {
      relSections.push(
        `<div class="def-section"><div class="def-section-title">🔬 Nom scientifique</div><p><em>${escHtml(ent.scientific_name.join(", "))}</em></p></div>`
      );
    }
    if (ent.extra_rows && ent.extra_rows.length) {
      ent.extra_rows.forEach((row) => {
        relSections.push(
          `<div class="def-section"><div class="def-section-title">${escHtml(row.label)}</div>${row.lines
            .map((l) => `<p style="font-size:14.5px; margin-bottom:4px;">${l.html || escHtml(l.text)}</p>`)
            .join("")}</div>`
        );
      });
    }

    return `
      <div class="entry-card">
        <div class="entry-card-header">
          ${badgeLabel ? `<span class="badge">Entrée ${escHtml(badgeLabel)}</span>` : ""}
          <span class="entry-headword">${escHtml(ent.headword)}</span>
          ${ent.pos ? `<span class="badge badge-pos">${escHtml(ent.pos)}</span>` : ""}
          <span class="badge">${langFlags[ent.lang] || "🇲🇬 Malagasy"}</span>
          ${ent.vocabulary && ent.vocabulary.length ? `<span class="badge">${escHtml(ent.vocabulary.join(", "))}</span>` : ""}
          ${rootsHtml}
          ${compsHtml}
        </div>
        ${renderDefs("🇲🇬 Explications en malgache", ent.defs_mg)}
        ${renderDefs("🇫🇷 Explications en français", ent.defs_fr)}
        ${renderDefs("🇬🇧 Explications en anglais", ent.defs_en)}
        ${examplesHtml}
        ${morphHtml}
        ${derivsHtml}
        ${relSections.join("")}
      </div>
    `;
  }

  function renderWordDetail(w) {
    const fav = isFavorite(w.slug);
    const hasEntries = w.entries && w.entries.length > 0;

    let bodyHtml = "";
    if (hasEntries) {
      bodyHtml = w.entries.map((ent, idx) => renderEntryCard(ent, idx, w.entries.length)).join("");
    } else {
      // Mot déjà indexé par l'Étape 1 mais dont la fiche complète Étape 3 est en attente
      bodyHtml = `
        <div class="entry-card">
          <div class="entry-card-header">
            <span class="badge">Index rapide (Étape 1)</span>
            ${w.root_word ? `<span>Radical : <a href="#/mot/${encodeURIComponent(w.root_slug || w.root_word)}" class="mw-link">${escHtml(w.root_word)}</a></span>` : ""}
          </div>
          ${w.gloss_fr ? `<div class="def-section"><div class="def-section-title">🇫🇷 Traductions françaises</div><p>${escHtml(w.gloss_fr)}</p></div>` : ""}
          ${w.gloss_en ? `<div class="def-section"><div class="def-section-title">🇬🇧 Traductions anglaises</div><p>${escHtml(w.gloss_en)}</p></div>` : ""}
          ${w.reverse_fr && w.reverse_fr.length ? `<div class="def-section"><div class="def-section-title">🇫🇷 Entrées associées</div><p>${escHtml(w.reverse_fr.join(", "))}</p></div>` : ""}
          <div style="margin-top:14px; padding-top:12px; border-top:1px dashed var(--border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
            <span style="font-size:13px; color:var(--text-muted);">La fiche encyclopédique complète sera enregistrée par l'Étape 3 (ou cliquez à droite si vous êtes en ligne).</span>
            <button class="btn btn-primary" id="btnFetchMissing" data-slug="${escHtml(w.slug)}">⚡ Charger la fiche complète</button>
          </div>
        </div>
      `;
    }

    const familyHtml =
      w.family_words && w.family_words.length
        ? `
          <div class="def-section" style="margin-top:18px;">
            <div class="def-section-title">🌳 Mots de la même famille dans la base (${w.family_words.length})</div>
            ${renderChips(w.family_words)}
          </div>
        `
        : "";

    const anagramsHtml =
      w.anagrams && w.anagrams.length
        ? `
          <div class="def-section" style="margin-top:14px;">
            <div class="def-section-title">🔀 Anagrammes</div>
            ${renderChips(w.anagrams)}
          </div>
        `
        : "";

    const proverbsHtml =
      w.proverbs && w.proverbs.length
        ? `
          <section class="proverbs-section">
            <h2 style="font-family:var(--font-serif); font-size:21px;">
              📜 Ohabolana — Proverbes citant « ${escHtml(w.word)} » (${w.proverbs.length})
            </h2>
            ${w.proverbs.map(renderProverbCardHtml).join("")}
          </section>
        `
        : "";

    els.detailPanel.innerHTML = `
      <div class="word-hero">
        <div>
          <h1 class="word-title">${escHtml(w.word)}</h1>
          <div class="word-meta-line">
            ${w.alt_words && w.alt_words.length ? `<span>Variantes : <strong>${escHtml(w.alt_words.join(", "))}</strong></span>` : ""}
            ${w.root_word ? `<span>· Radical : <a href="#/mot/${encodeURIComponent(w.root_slug || w.root_word)}" class="mw-link">${escHtml(w.root_word)}</a></span>` : ""}
            ${w.updated_date ? `<span>· Màj source : ${escHtml(w.updated_date)}</span>` : ""}
          </div>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <button class="btn" id="btnToggleFav" title="Ajouter / retirer des favoris hors-ligne">
            ${fav ? "★ Favori" : "☆ Favori"}
          </button>
          <a class="btn" href="https://motmalgache.org/bins/teny2/${encodeURIComponent(w.slug)}" target="_blank" rel="noopener" title="Voir la page originale sur motmalgache.org (si en ligne)">
            ↗ Source
          </a>
        </div>
      </div>
      ${bodyHtml}
      ${familyHtml}
      ${anagramsHtml}
      ${proverbsHtml}
    `;

    const btnFav = document.getElementById("btnToggleFav");
    if (btnFav) {
      btnFav.addEventListener("click", () => {
        toggleFavorite(w);
        renderWordDetail(w);
      });
    }
    bindFetchNowButton();
  }

  function bindFetchNowButton() {
    const btn = document.getElementById("btnFetchMissing");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const slug = btn.dataset.slug;
      btn.disabled = true;
      btn.textContent = "Téléchargement en cours…";
      try {
        const res = await fetch("./api/fetch-now", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });
        const data = await res.json();
        if (res.ok && data.ok && data.word) {
          renderWordDetail(data.word);
          refreshStats();
        } else {
          btn.textContent = "Hors-ligne (lancez la synchro sur votre PC)";
        }
      } catch (_) {
        btn.textContent = "Connexion indisponible";
      }
    });
  }

  // Bouton Découverte au hasard
  els.btnRandom.addEventListener("click", async () => {
    const res = await fetch("./api/random");
    const data = await res.json();
    if (data.word && data.word.slug) {
      window.location.hash = `#/mot/${encodeURIComponent(data.word.slug)}`;
    }
  });

  els.brandHome.addEventListener("click", () => {
    els.searchInput.value = "";
    state.query = "";
    els.btnClearSearch.style.display = "none";
    runSearch();
  });

  // Routage par hash (#/mot/<slug> ou #/proverbes/<slug>)
  function handleHashChange() {
    const h = window.location.hash || "";
    if (h.startsWith("#/mot/")) {
      const slug = decodeURIComponent(h.slice("#/mot/".length));
      if (slug) openWord(slug, false);
    } else if (h.startsWith("#/proverbes/")) {
      const slug = decodeURIComponent(h.slice("#/proverbes/".length));
      if (slug) openProverbsForSlug(slug);
    }
  }

  window.addEventListener("hashchange", handleHashChange);

  // Modale de Synchronisation Hors-Ligne
  function openSyncModal() {
    els.syncModal.classList.add("open");
    pollSyncStatus();
    ensurePolling(true);
  }

  function closeSyncModal() {
    els.syncModal.classList.remove("open");
    if (!state.syncRunning) {
      ensurePolling(false);
    }
  }

  els.btnOpenSync.addEventListener("click", openSyncModal);
  els.btnBannerSync.addEventListener("click", openSyncModal);
  els.btnCloseSync.addEventListener("click", closeSyncModal);
  els.syncModal.addEventListener("click", (e) => {
    if (e.target === els.syncModal) closeSyncModal();
  });

  els.btnStartSync.addEventListener("click", async () => {
    els.btnStartSync.disabled = true;
    try {
      const res = await fetch("./api/sync/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: els.selectMode.value,
          speed: els.selectSpeed.value,
        }),
      });
      const st = await res.json();
      applySyncStatus(st);
      if (st.running) {
        ensurePolling(true);
      }
    } finally {
      els.btnStartSync.disabled = false;
    }
  });

  els.btnStopSync.addEventListener("click", async () => {
    const res = await fetch("./api/sync/stop", { method: "POST" });
    const st = await res.json();
    applySyncStatus(st);
  });

  function ensurePolling(active) {
    if (active && !state.pollTimer) {
      state.pollTimer = setInterval(pollSyncStatus, 1400);
    } else if (!active && state.pollTimer) {
      clearInterval(state.pollTimer);
      state.pollTimer = null;
    }
  }

  async function pollSyncStatus() {
    try {
      const res = await fetch("./api/sync/status");
      const st = await res.json();
      applySyncStatus(st);
    } catch (_) {}
  }

  function applySyncStatus(st) {
    state.syncRunning = Boolean(st.running);
    els.syncDot.classList.toggle("active", state.syncRunning);
    els.syncBtnLabel.textContent = state.syncRunning ? "Synchro en cours…" : "Synchroniser (Hors-ligne)";
    els.btnStopSync.style.display = state.syncRunning ? "inline-flex" : "none";
    els.btnStartSync.style.display = state.syncRunning ? "none" : "inline-flex";

    const s1 = st.stages.stage1_index;
    const s2 = st.stages.stage2_proverbs;
    const s3 = st.stages.stage3_words;

    els.st1Text.textContent = `${formatNum(s1.done)} / ${formatNum(s1.total)} pages (${s1.percent}%)`;
    els.st1Bar.style.width = `${s1.percent}%`;

    els.st2Text.textContent = `${formatNum(s2.done)} / ${formatNum(s2.total)} pages (${formatNum(st.stats.total_proverbs)} proverbes)`;
    els.st2Bar.style.width = `${s2.percent}%`;

    els.st3Text.textContent = `${formatNum(s3.done)} / ${formatNum(s3.total)} fiches (${s3.percent}%)`;
    els.st3Bar.style.width = `${s3.percent}%`;

    const etaStr = formatEta(st.eta_seconds);
    els.syncPhaseText.textContent = `${st.phase_label}${st.rate_pages_per_sec ? ` · ${st.rate_pages_per_sec} p/s` : ""}${etaStr ? ` · Reste ~${etaStr}` : ""}`;
    els.syncMetricsText.textContent = `Base SQLite : ${st.stats.db_size_mb} Mo · ${formatNum(st.stats.total_words)} mots`;

    if (st.error_banner) {
      els.syncAlertBox.style.display = "block";
      els.syncAlertBox.innerHTML =
        `<div><strong>Information :</strong> ${escHtml(st.error_banner)}</div>` +
        (st.sandbox_blocked
          ? `<div style="margin-top:10px;"><a class="btn btn-primary" href="./download-pack">⬇ Télécharger malagasyword-offline.zip pour votre PC</a></div>`
          : "");
    } else {
      els.syncAlertBox.style.display = "none";
    }

    if (st.recent_items && st.recent_items.length) {
      els.syncRecentLog.innerHTML = st.recent_items.map((x) => `<div>✓ ${escHtml(x)}</div>`).join("");
    }

    if (st.stats) {
      els.statsPill.textContent = `${formatNum(st.stats.total_words)} mots · ${formatNum(st.stats.full_words)} fiches · ${formatNum(st.stats.total_proverbs)} proverbes (${st.stats.db_size_mb} Mo)`;
      els.demoBanner.style.display = st.stats.demo_only ? "block" : "none";
    }

    if (!state.syncRunning && !els.syncModal.classList.contains("open")) {
      ensurePolling(false);
    }
  }

  // Enregistrement du Service Worker PWA
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  // Initialisation
  initTheme();
  refreshStats();
  pollSyncStatus();
  runSearch().then(() => {
    if (window.location.hash) {
      handleHashChange();
    }
  });
})();
