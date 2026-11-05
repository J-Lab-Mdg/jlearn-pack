/* Frontend SPA 100 % Hors-Ligne — Akademia Malagasy Offline (URLs relatives uniquement) */
(function () {
  "use strict";

  const state = {
    activeTab: "search",
    stats: null,
    vocab: {
      q: "",
      domain: "",
      direction: "",
      letter: "",
      limit: 90,
      offset: 0,
      total: 0,
      items: [],
      letters: [],
    },
    docs: {
      q: "",
      category: "",
      items: [],
      currentDoc: null,
      fontSize: 1.05,
    },
    pdfs: [],
    syncPollTimer: null,
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function apiGet(path) {
    const res = await fetch(path, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async function apiPost(path, body) {
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body || {}),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // ---------------- Navigation ----------------
  function switchTab(tab) {
    state.activeTab = tab;
    $$(".view").forEach((el) => el.classList.toggle("active", el.id === `view-${tab}`));
    $$(".tab-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
    $$(".mob-nav-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));

    if (tab === "vocab") loadVocab(true);
    if (tab === "docs") {
      loadDocsSidebar().then(() => {
        if (!state.docs.currentDoc && state.docs.items.length > 0) {
          openDocument(state.docs.items[0].slug);
        }
      });
    }
    if (tab === "pdfs") loadPdfs();
    if (tab === "favorites") loadFavorites();
  }

  // ---------------- Stats & Showcase ----------------
  async function refreshStats() {
    const stats = await apiGet("api/stats");
    state.stats = stats;

    $("#navVocabCount").textContent = stats.total_vocab.toLocaleString("fr-FR");
    $("#navDocsCount").textContent = stats.total_docs.toLocaleString("fr-FR");
    $("#navPdfCount").textContent = `${stats.downloaded_pdfs}/${stats.total_pdfs}`;
    $("#navFavCount").textContent = stats.favorites_count.toLocaleString("fr-FR");

    $("#statVocabTotal").textContent = stats.total_vocab.toLocaleString("fr-FR");
    $("#statVocabBreakdown").textContent = `MG→FR : ${stats.mg_fr_count.toLocaleString("fr-FR")} · FR→MG : ${stats.fr_mg_count.toLocaleString("fr-FR")}`;
    $("#statDocsTotal").textContent = stats.total_docs.toLocaleString("fr-FR");
    $("#statWordsTotal").textContent = `${stats.total_words.toLocaleString("fr-FR")} mots indexés FTS5`;
    $("#statPdfsTotal").textContent = `${stats.downloaded_pdfs} / ${stats.total_pdfs}`;
    $("#statSyncDate").textContent = stats.last_sync_at
      ? `Dernière synchro : ${stats.last_sync_at}`
      : "Base initiale intégrée (synchronisation complète disponible)";

    // Bandeau initial tant que la synchro complete n'a pas encore tourne
    $("#seedBanner").classList.toggle("hidden", Boolean(stats.sync_complete));

    // Remplir le selecteur de domaines du Voambolana
    const domSel = $("#vocabDomainSelect");
    const prevDom = state.vocab.domain;
    domSel.innerHTML = '<option value="">Tous les domaines</option>';
    (stats.domains || []).forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d.domain;
      opt.textContent = `${d.domain} (${d.count})`;
      domSel.appendChild(opt);
    });
    domSel.value = prevDom;

    // Remplir le selecteur de categories des traites
    const catSel = $("#docCategorySelect");
    const prevCat = state.docs.category;
    catSel.innerHTML = '<option value="">Toutes les rubriques</option>';
    (stats.categories || []).forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.category;
      opt.textContent = `${c.category} (${c.count})`;
      catSel.appendChild(opt);
    });
    catSel.value = prevCat;

    // URLs Wi-Fi LAN pour Android / iPhone
    const lanBox = $("#lanUrlsList");
    if (stats.lan_urls && stats.lan_urls.length > 0) {
      lanBox.innerHTML = stats.lan_urls.map((u) => `<div>${escapeHtml(u)}</div>`).join("");
    } else {
      lanBox.innerHTML = `<div>http://&lt;IP_WIFI_DU_PC&gt;:${stats.port || 8769}</div>`;
    }
  }

  async function loadHomeShowcase() {
    const data = await apiGet("api/documents");
    const grid = $("#homeDocGrid");
    grid.innerHTML = (data.items || [])
      .map((doc) => renderDocCard(doc))
      .join("");
    bindDocCardClicks(grid);
  }

  function renderDocCard(doc) {
    const seedBadge = doc.is_seed
      ? '<span class="seed-tag" title="Version initiale embarquée">Initial</span>'
      : "";
    return `
      <div class="doc-card" data-doc-slug="${escapeHtml(doc.slug)}">
        <div class="doc-card-top">
          <span class="cat-badge">${escapeHtml(doc.category)}</span>
          ${seedBadge}
        </div>
        <h4>${escapeHtml(doc.title)}</h4>
        ${doc.author ? `<div class="doc-card-author">${escapeHtml(doc.author)}</div>` : ""}
        ${
          doc.snippet
            ? `<p class="doc-card-snippet">${doc.snippet}</p>`
            : `<p class="doc-card-summary">${escapeHtml(doc.summary)}</p>`
        }
      </div>
    `;
  }

  function bindDocCardClicks(container) {
    container.querySelectorAll("[data-doc-slug]").forEach((card) => {
      card.addEventListener("click", () => {
        const slug = card.getAttribute("data-doc-slug");
        switchTab("docs");
        openDocument(slug);
      });
    });
  }

  function renderVocabCard(v) {
    const dirLabel = v.direction === "fr-mg" ? "FR → MG" : "MG → FR";
    const starCls = v.is_favorite ? "fav-star active" : "fav-star";
    const starChar = v.is_favorite ? "★" : "☆";
    return `
      <div class="vocab-card">
        <div class="vocab-head">
          <div class="vocab-term-wrap">
            <span class="vocab-term">${escapeHtml(v.term)}</span>
            ${v.sense_num ? `<span class="vocab-sense">(${escapeHtml(v.sense_num)})</span>` : ""}
            ${v.pos ? `<span class="vocab-pos">${escapeHtml(v.pos)}</span>` : ""}
          </div>
          <button class="${starCls}" data-fav-vocab="${v.id}" title="Favori">${starChar}</button>
        </div>
        ${v.definition ? `<p class="vocab-def">${escapeHtml(v.definition)}</p>` : ""}
        ${v.translation ? `<div class="vocab-trans">→ ${escapeHtml(v.translation)}</div>` : ""}
        <div class="vocab-foot">
          <span>${escapeHtml(v.domain)} · ${dirLabel}</span>
          <span>Lettre ${escapeHtml(v.letter)}</span>
        </div>
      </div>
    `;
  }

  function bindVocabFavClicks(container) {
    container.querySelectorAll("[data-fav-vocab]").forEach((btn) => {
      btn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const id = Number(btn.getAttribute("data-fav-vocab"));
        const res = await apiPost("api/favorite", { kind: "vocab", id });
        btn.classList.toggle("active", res.is_favorite);
        btn.textContent = res.is_favorite ? "★" : "☆";
        refreshStats();
      });
    });
  }

  // ---------------- Recherche Globale ----------------
  let globalDebounce = null;
  async function runGlobalSearch() {
    const q = $("#globalSearchInput").value.trim();
    $("#btnClearGlobal").classList.toggle("hidden", !q);

    if (!q) {
      $("#globalResultsWrap").classList.add("hidden");
      $("#homeShowcase").classList.remove("hidden");
      return;
    }

    const [vRes, dRes] = await Promise.all([
      apiGet(`api/vocab?q=${encodeURIComponent(q)}&limit=18`),
      apiGet(`api/documents?q=${encodeURIComponent(q)}`),
    ]);

    $("#homeShowcase").classList.add("hidden");
    $("#globalResultsWrap").classList.remove("hidden");

    $("#globalVocabHits").textContent = vRes.total;
    const vContainer = $("#globalVocabList");
    if (vRes.items.length === 0) {
      vContainer.innerHTML = '<p class="muted">Aucune entrée trouvée dans le Voambolana.</p>';
    } else {
      vContainer.innerHTML = vRes.items.map(renderVocabCard).join("");
      bindVocabFavClicks(vContainer);
    }

    $("#globalDocHits").textContent = dRes.total;
    const dContainer = $("#globalDocList");
    if (dRes.items.length === 0) {
      dContainer.innerHTML = '<p class="muted">Aucun traité ou règle ne correspond à cette recherche.</p>';
    } else {
      dContainer.innerHTML = dRes.items.map(renderDocCard).join("");
      bindDocCardClicks(dContainer);
    }
  }

  // ---------------- Voambolana ----------------
  async function loadVocab(resetOffset) {
    if (resetOffset) state.vocab.offset = 0;
    const params = new URLSearchParams({
      q: state.vocab.q,
      domain: state.vocab.domain,
      direction: state.vocab.direction,
      letter: state.vocab.letter,
      limit: String(state.vocab.limit),
      offset: String(state.vocab.offset),
    });
    const res = await apiGet(`api/vocab?${params.toString()}`);
    state.vocab.total = res.total;
    state.vocab.letters = res.letters || [];
    state.vocab.items = resetOffset ? res.items : state.vocab.items.concat(res.items);

    renderAlphaBar();

    const grid = $("#vocabEntriesGrid");
    if (state.vocab.items.length === 0) {
      grid.innerHTML = '<p class="muted">Aucune entrée ne correspond aux filtres sélectionnés.</p>';
    } else {
      grid.innerHTML = state.vocab.items.map(renderVocabCard).join("");
      bindVocabFavClicks(grid);
    }

    $("#vocabResultSummary").textContent = `${state.vocab.items.length} affichée(s) sur ${state.vocab.total.toLocaleString("fr-FR")} entrée(s)`;
    $("#btnLoadMoreVocab").classList.toggle("hidden", state.vocab.items.length >= state.vocab.total);
  }

  function renderAlphaBar() {
    const bar = $("#alphaBar");
    const allActive = state.vocab.letter === "" ? "active" : "";
    let html = `<button class="alpha-btn ${allActive}" data-letter="">Toutes</button>`;
    state.vocab.letters.forEach((row) => {
      const act = state.vocab.letter === row.letter ? "active" : "";
      html += `<button class="alpha-btn ${act}" data-letter="${escapeHtml(row.letter)}">${escapeHtml(row.letter)}<small>${row.count}</small></button>`;
    });
    bar.innerHTML = html;
    bar.querySelectorAll("[data-letter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.vocab.letter = btn.getAttribute("data-letter") || "";
        loadVocab(true);
      });
    });
  }

  // ---------------- Traites & Fitsipika ----------------
  async function loadDocsSidebar() {
    const params = new URLSearchParams({
      q: state.docs.q,
      category: state.docs.category,
    });
    const res = await apiGet(`api/documents?${params.toString()}`);
    state.docs.items = res.items || [];
    const list = $("#docsSidebarList");
    if (state.docs.items.length === 0) {
      list.innerHTML = '<p class="muted small">Aucun document trouvé.</p>';
      return;
    }
    list.innerHTML = state.docs.items
      .map((d) => {
        const act = state.docs.currentDoc && state.docs.currentDoc.slug === d.slug ? "active" : "";
        return `
          <button class="side-doc-item ${act}" data-side-slug="${escapeHtml(d.slug)}">
            <div class="side-doc-cat">${escapeHtml(d.category)}</div>
            <div class="side-doc-title">${escapeHtml(d.title)}</div>
          </button>
        `;
      })
      .join("");
    list.querySelectorAll("[data-side-slug]").forEach((btn) => {
      btn.addEventListener("click", () => openDocument(btn.getAttribute("data-side-slug")));
    });
  }

  async function openDocument(slug) {
    const doc = await apiGet(`api/document/${encodeURIComponent(slug)}`);
    state.docs.currentDoc = doc;

    $("#readerCategory").textContent = doc.category;
    $("#readerSeedBadge").classList.toggle("hidden", !doc.is_seed);
    $("#readerTitle").textContent = doc.title;
    $("#readerAuthor").textContent = doc.author || "Foibe momba ny Teny an'ny Akademia Malagasy";
    $("#btnFavDoc").textContent = doc.is_favorite ? "★ Favori" : "☆ Favori";

    const tocWrap = $("#readerTocWrap");
    const tocList = $("#readerTocList");
    if (doc.toc && doc.toc.length > 0) {
      tocWrap.classList.remove("hidden");
      tocList.innerHTML = doc.toc
        .map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.title)}</a></li>`)
        .join("");
    } else {
      tocWrap.classList.add("hidden");
      tocList.innerHTML = "";
    }

    $("#readerBody").innerHTML = doc.body_html;
    $$("[data-side-slug]").forEach((b) =>
      b.classList.toggle("active", b.getAttribute("data-side-slug") === doc.slug)
    );
  }

  // ---------------- PDFs ----------------
  async function loadPdfs() {
    const res = await apiGet("api/pdfs");
    state.pdfs = res.items || [];
    const grid = $("#pdfListGrid");
    if (state.pdfs.length === 0) {
      grid.innerHTML = '<p class="muted">Aucun PDF répertorié.</p>';
      return;
    }
    grid.innerHTML = state.pdfs
      .map((p) => {
        const sizeKb = p.file_size ? `${Math.max(1, Math.round(p.file_size / 1024))} Ko` : "À télécharger";
        return `
          <div class="pdf-card">
            <div>
              <span class="cat-badge">${p.downloaded ? "✓ Disponible hors-ligne" : "⏳ Non téléchargé"}</span>
              <h3 style="margin:0.55rem 0 0.35rem;font-size:1.03rem;">${escapeHtml(p.title)}</h3>
              <p class="muted small" style="margin:0;">${escapeHtml(p.description)}</p>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
              <span class="muted small">${sizeKb}</span>
              ${
                p.downloaded
                  ? `<button class="btn btn-primary btn-sm" data-open-pdf="${p.id}" data-pdf-title="${escapeHtml(p.title)}">📖 Lire le PDF hors-ligne</button>`
                  : `<button class="btn btn-sync btn-sm" data-sync-pdf="1">🔄 Télécharger via Synchroniser</button>`
              }
            </div>
          </div>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-open-pdf]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-open-pdf");
        const title = btn.getAttribute("data-pdf-title");
        const url = `api/pdf/${id}`;
        $("#pdfViewerTitle").textContent = title;
        $("#pdfDownloadLink").href = url;
        $("#pdfFrame").src = url;
        $("#pdfViewerWrap").classList.remove("hidden");
        $("#pdfViewerWrap").scrollIntoView({ behavior: "smooth" });
      });
    });

    grid.querySelectorAll("[data-sync-pdf]").forEach((btn) => {
      btn.addEventListener("click", openSyncModal);
    });
  }

  // ---------------- Favoris ----------------
  async function loadFavorites() {
    const [vRes, dRes] = await Promise.all([
      apiGet("api/vocab?favorites=1&limit=200"),
      apiGet("api/documents?favorites=1"),
    ]);
    const vList = $("#favVocabList");
    if (vRes.items.length === 0) {
      vList.innerHTML = '<p class="muted">Cliquez sur ☆ à côté d\'un mot du Voambolana pour l\'enregistrer ici.</p>';
    } else {
      vList.innerHTML = vRes.items.map(renderVocabCard).join("");
      bindVocabFavClicks(vList);
    }

    const dList = $("#favDocList");
    if (dRes.items.length === 0) {
      dList.innerHTML = '<p class="muted">Cliquez sur « ☆ Favori » dans le lecteur de traités pour l\'épingler ici.</p>';
    } else {
      dList.innerHTML = dRes.items.map(renderDocCard).join("");
      bindDocCardClicks(dList);
    }
  }

  // ---------------- Synchronisation ----------------
  function openSyncModal() {
    $("#syncModal").classList.remove("hidden");
    pollSyncStatusOnce();
  }

  function closeSyncModal() {
    $("#syncModal").classList.add("hidden");
  }

  async function pollSyncStatusOnce() {
    try {
      const st = await apiGet("api/sync/status");
      renderSyncStatus(st);
      if (st.running && !state.syncPollTimer) {
        state.syncPollTimer = setInterval(pollSyncStatusOnce, 900);
      } else if (!st.running && state.syncPollTimer) {
        clearInterval(state.syncPollTimer);
        state.syncPollTimer = null;
        await refreshStats();
        await loadHomeShowcase();
        if (state.activeTab === "vocab") loadVocab(true);
        if (state.activeTab === "docs") loadDocsSidebar();
        if (state.activeTab === "pdfs") loadPdfs();
      }
    } catch (_) {}
  }

  function renderSyncStatus(st) {
    const showBox = st.running || st.phase !== "idle";
    $("#syncProgressBox").classList.toggle("hidden", !showBox);
    $("#btnStartSync").classList.toggle("hidden", Boolean(st.running));
    $("#btnStopSync").classList.toggle("hidden", !st.running);

    $("#syncCurrentItem").textContent = st.current_item || (st.phase === "completed" ? "Synchronisation terminée !" : "Prêt");
    $("#syncPercent").textContent = `${st.percent || 0} %`;
    $("#syncBar").style.width = `${st.percent || 0}%`;
    $("#syncCounters").textContent = `Traités : ${st.docs_synced || 0} · Entrées Voambolana : ${st.vocab_synced || 0} · PDF : ${st.pdfs_synced || 0}`;

    const errBox = $("#syncErrorBox");
    if (st.error) {
      errBox.textContent = st.error;
      errBox.classList.remove("hidden");
    } else {
      errBox.classList.add("hidden");
    }

    const logsEl = $("#syncLogs");
    logsEl.textContent = (st.logs || []).join("\n");
    logsEl.scrollTop = logsEl.scrollHeight;
  }

  // ---------------- Initialisation & Evenements ----------------
  function initEvents() {
    $$(".tab-btn, .mob-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    $("#brandHome").addEventListener("click", () => switchTab("search"));

    $$("[data-goto]").forEach((card) => {
      card.addEventListener("click", () => switchTab(card.getAttribute("data-goto")));
    });

    $$("[data-switch-tab]").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.getAttribute("data-switch-tab")));
    });

    $$("[data-open-doc]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const slug = chip.getAttribute("data-open-doc");
        switchTab("docs");
        openDocument(slug);
      });
    });

    $$("[data-jump-vocab]").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.vocab.domain = chip.getAttribute("data-jump-vocab") || "";
        state.vocab.letter = "";
        $("#vocabDomainSelect").value = state.vocab.domain;
        switchTab("vocab");
      });
    });

    // Global search
    $("#globalSearchInput").addEventListener("input", () => {
      clearTimeout(globalDebounce);
      globalDebounce = setTimeout(runGlobalSearch, 160);
    });
    $("#btnClearGlobal").addEventListener("click", () => {
      $("#globalSearchInput").value = "";
      runGlobalSearch();
      $("#globalSearchInput").focus();
    });
    $("#btnSeeAllVocabHits").addEventListener("click", () => {
      state.vocab.q = $("#globalSearchInput").value.trim();
      $("#vocabSearchInput").value = state.vocab.q;
      switchTab("vocab");
    });

    // Vocab filters
    let vocabDebounce = null;
    $("#vocabSearchInput").addEventListener("input", (e) => {
      state.vocab.q = e.target.value.trim();
      clearTimeout(vocabDebounce);
      vocabDebounce = setTimeout(() => loadVocab(true), 180);
    });
    $("#vocabDomainSelect").addEventListener("change", (e) => {
      state.vocab.domain = e.target.value;
      state.vocab.letter = "";
      loadVocab(true);
    });
    $$(".seg-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".seg-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.vocab.direction = btn.getAttribute("data-dir") || "";
        state.vocab.letter = "";
        loadVocab(true);
      });
    });
    $("#btnLoadMoreVocab").addEventListener("click", () => {
      state.vocab.offset += state.vocab.limit;
      loadVocab(false);
    });

    // Docs sidebar filters & reader controls
    let docDebounce = null;
    $("#docFilterInput").addEventListener("input", (e) => {
      state.docs.q = e.target.value.trim();
      clearTimeout(docDebounce);
      docDebounce = setTimeout(loadDocsSidebar, 180);
    });
    $("#docCategorySelect").addEventListener("change", (e) => {
      state.docs.category = e.target.value;
      loadDocsSidebar();
    });
    $("#btnFontDec").addEventListener("click", () => {
      state.docs.fontSize = Math.max(0.85, state.docs.fontSize - 0.08);
      document.documentElement.style.setProperty("--reader-size", `${state.docs.fontSize}rem`);
    });
    $("#btnFontInc").addEventListener("click", () => {
      state.docs.fontSize = Math.min(1.5, state.docs.fontSize + 0.08);
      document.documentElement.style.setProperty("--reader-size", `${state.docs.fontSize}rem`);
    });
    $("#btnPrintDoc").addEventListener("click", () => window.print());
    $("#btnFavDoc").addEventListener("click", async () => {
      if (!state.docs.currentDoc) return;
      const res = await apiPost("api/favorite", { kind: "doc", id: state.docs.currentDoc.id });
      state.docs.currentDoc.is_favorite = res.is_favorite ? 1 : 0;
      $("#btnFavDoc").textContent = res.is_favorite ? "★ Favori" : "☆ Favori";
      refreshStats();
    });

    // PDF viewer close
    $("#btnClosePdfViewer").addEventListener("click", () => {
      $("#pdfFrame").src = "about:blank";
      $("#pdfViewerWrap").classList.add("hidden");
    });
    $("#btnSyncFromPdf").addEventListener("click", openSyncModal);

    // Modals
    $("#btnOpenSync").addEventListener("click", openSyncModal);
    $("#btnBannerSync").addEventListener("click", openSyncModal);
    $("#btnCloseSyncModal").addEventListener("click", closeSyncModal);
    $("#btnStartSync").addEventListener("click", async () => {
      await apiPost("api/sync/start", {
        include_vocab: $("#chkSyncVocab").checked,
        include_treatises: $("#chkSyncTreatises").checked,
        include_pdfs: $("#chkSyncPdfs").checked,
      });
      pollSyncStatusOnce();
    });
    $("#btnStopSync").addEventListener("click", async () => {
      await apiPost("api/sync/stop", {});
      pollSyncStatusOnce();
    });

    $("#btnOpenPhone").addEventListener("click", () => $("#phoneModal").classList.remove("hidden"));
    $("#btnClosePhoneModal").addEventListener("click", () => $("#phoneModal").classList.add("hidden"));

    // Theme
    if (localStorage.getItem("akademia_theme") === "dark") {
      document.body.classList.add("dark");
      $("#btnTheme").textContent = "☀️";
    }
    $("#btnTheme").addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      localStorage.setItem("akademia_theme", isDark ? "dark" : "light");
      $("#btnTheme").textContent = isDark ? "☀️" : "🌙";
    });

    // Service Worker PWA
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    initEvents();
    await refreshStats();
    await loadHomeShowcase();
  });
})();
