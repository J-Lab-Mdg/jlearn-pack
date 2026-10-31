(() => {
  "use strict";

  const state = {
    mode: "catalog", // "catalog" | "fulltext"
    category: "",
    format: "",
    downloadedOnly: false,
    favoritesOnly: false,
    query: "",
    categories: [],
    currentPub: null,
    currentChapterId: null,
    fontSizeRem: 1.05,
    nightMode: false,
    pollTimer: null,
    wasSyncRunning: false,
  };

  const el = (id) => document.getElementById(id);

  function fmtBytes(bytes) {
    const b = Number(bytes || 0);
    if (b <= 0) return "0 Mo";
    const gb = b / (1024 * 1024 * 1024);
    if (gb >= 1) return gb.toFixed(2) + " Go";
    const mb = b / (1024 * 1024);
    if (mb >= 1) return mb.toFixed(1) + " Mo";
    return Math.round(b / 1024) + " Ko";
  }

  function escHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function apiGet(url) {
    const r = await fetch(url);
    return r.json();
  }

  async function apiPost(url, body = {}) {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return r.json();
  }

  // -------------------------------------------------------
  // STATISTIQUES & CATÉGORIES
  // -------------------------------------------------------
  async function loadStats() {
    try {
      const st = await apiGet("/api/stats");
      state.categories = st.categories || [];

      const dlPubs = st.downloaded_pubs || 0;
      const totCat = st.total_catalog_pubs || 0;
      const totCh = st.total_chapters || 0;
      const dlSize = fmtBytes(st.total_downloaded_bytes || 0);
      const lastUpd = st.last_update_check ? ` · Maj : ${st.last_update_check}` : "";

      el("statsHeaderText").textContent =
        `${dlPubs} publication(s) sur disque (${dlSize}) · ${totCh} chapitres indexés · Catalogue MG : ${totCat}${lastUpd}`;
      el("countCatalog").textContent = totCat;
      el("countChapters").textContent = totCh;

      const freeStr = fmtBytes(st.disk_free_bytes || 0);
      el("diskBadge").textContent = `Libre : ${freeStr}`;
      el("lblDiskFree").textContent = freeStr;
      el("lblFilesDir").textContent = st.files_dir || "./fichiers";
      if (st.custom_files_dir && !el("inpCustomDir").value) {
        el("inpCustomDir").value = st.custom_files_dir;
      }

      renderCategoryPills(st.by_category || {});
      renderModalCategories(st.by_category || {});
      renderLanUrls(st.lan_urls || []);
      applySyncBanner(st.sync || {});
    } catch (err) {
      console.error("Erreur stats:", err);
    }
  }

  function renderCategoryPills(byCat) {
    const wrap = el("categoryPills");
    let html = `<button class="pill ${state.category === "" ? "active" : ""}" data-cat="">Tout</button>`;
    for (const c of state.categories) {
      const info = byCat[c.code] || { total: 0, downloaded: 0 };
      const cnt = state.downloadedOnly ? info.downloaded : info.total;
      const active = state.category === c.code ? "active" : "";
      html += `<button class="pill ${active}" data-cat="${escHtml(c.code)}">${escHtml(c.short)} (${cnt})</button>`;
    }
    wrap.innerHTML = html;
    wrap.querySelectorAll(".pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat || "";
        loadStats();
        refreshList();
      });
    });
  }

  function renderModalCategories(byCat) {
    const grid = el("modalCatChecks");
    if (grid.children.length > 0) return; // ne pas écraser les cases déjà cochées par l'utilisateur
    let html = "";
    for (const c of state.categories) {
      const info = byCat[c.code] || { total: 0, downloaded: 0 };
      html += `
        <label class="cat-chk-item">
          <input type="checkbox" class="cat-sync-chk" value="${escHtml(c.code)}" checked />
          <span><strong>${escHtml(c.label)}</strong> <small style="color:#64748b">(${info.downloaded}/${info.total})</small></span>
        </label>
      `;
    }
    grid.innerHTML = html;
  }

  function renderLanUrls(urls) {
    const box = el("lanUrlList");
    if (!urls || urls.length === 0) {
      box.innerHTML = `<span class="lan-chip">${escHtml(window.location.origin)}</span>`;
      return;
    }
    box.innerHTML = urls
      .map((u) => `<span class="lan-chip">${escHtml(u)}</span>`)
      .join("");
  }

  // -------------------------------------------------------
  // LISTE DES PUBLICATIONS OU RÉSULTATS PLEIN-TEXTE
  // -------------------------------------------------------
  async function refreshList() {
    const q = el("searchInput").value.trim();
    state.query = q;
    el("btnClearSearch").classList.toggle("hidden", !q);

    // Bascule automatique intelligente : si l'utilisateur tape une requête avec espaces ou ':' (ex: "Matio 24:14")
    // et qu'il y a des chapitres indexés, on reste dans le mode actif choisi ou on propose les chapitres.
    if (state.mode === "fulltext" && q) {
      await runFulltextSearch(q);
    } else {
      await loadCatalogList(q);
    }
  }

  async function loadCatalogList(q) {
    const params = new URLSearchParams({
      q: q || "",
      category: state.category,
      format: state.format,
      downloaded_only: state.downloadedOnly ? "1" : "0",
      favorites_only: state.favoritesOnly ? "1" : "0",
      limit: "100",
    });
    const res = await apiGet(`/api/publications?${params.toString()}`);
    const items = res.items || [];
    el("listSummaryText").textContent = `${res.total || 0} publication(s) trouvée(s)`;

    const container = el("cardsContainer");
    if (items.length === 0) {
      container.innerHTML = `
        <div style="padding:20px;text-align:center;color:#64748b;">
          Aucune publication ne correspond à ce filtre.<br/>
          ${q ? `<button class="btn btn-outline btn-sm" id="btnTryFulltext" style="margin-top:10px;color:#1e293b">🔍 Chercher « ${escHtml(q)} » à l'intérieur des chapitres</button>` : ""}
        </div>`;
      const btnTry = el("btnTryFulltext");
      if (btnTry) {
        btnTry.addEventListener("click", () => {
          setMode("fulltext");
        });
      }
      return;
    }

    container.innerHTML = items
      .map((p) => {
        const selected = state.currentPub && state.currentPub.id === p.id ? "selected" : "";
        const filesOnDisk = (p.files || []).filter((f) => f.on_disk);
        const fmtBadges = filesOnDisk
          .map((f) => `<span class="fmt-tag">✓ ${escHtml(f.file_format)} (${fmtBytes(f.file_size)})</span>`)
          .join("");
        const chapBadge =
          p.chapter_count > 0
            ? `<span class="fmt-tag chap-tag">📖 ${p.chapter_count} toko</span>`
            : "";
        const dlBtn =
          filesOnDisk.length < 3 && !p.is_demo
            ? `<button class="btn btn-outline btn-sm btn-dl-one" data-pubid="${p.id}" title="Télécharger cette publication maintenant (JWPUB + EPUB + PDF)">⬇ Télécharger</button>`
            : "";
        const yrStr = p.year > 0 ? ` · ${p.year}` : "";
        const symStr = p.issue ? `${p.pub_symbol}_${p.issue}` : p.pub_symbol;

        return `
          <div class="pub-card ${selected}" data-pubid="${p.id}">
            <div class="card-top">
              <span class="cat-badge">${escHtml(p.category_label)}${yrStr}</span>
              <div>
                <span class="sym-badge">${escHtml(symStr)}</span>
                <button class="btn-fav ${p.favorite ? "active" : ""}" data-favid="${p.id}" title="Favori">★</button>
              </div>
            </div>
            <h3 class="card-title">${escHtml(p.title)}</h3>
            <div class="card-footer">
              <div class="fmt-pills">
                ${chapBadge}
                ${fmtBadges || '<span style="font-size:0.75rem;color:#94a3b8;">Non téléchargé sur disque</span>'}
              </div>
              ${dlBtn}
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll(".pub-card").forEach((card) => {
      card.addEventListener("click", (ev) => {
        if (ev.target.closest(".btn-fav") || ev.target.closest(".btn-dl-one")) return;
        openPublication(Number(card.dataset.pubid));
      });
    });

    container.querySelectorAll(".btn-fav").forEach((btn) => {
      btn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const pid = Number(btn.dataset.favid);
        const r = await apiPost(`/api/favorite/${pid}`);
        btn.classList.toggle("active", Boolean(r.favorite));
      });
    });

    container.querySelectorAll(".btn-dl-one").forEach((btn) => {
      btn.addEventListener("click", async (ev) => {
        ev.stopPropagation();
        const pid = Number(btn.dataset.pubid);
        btn.disabled = true;
        btn.textContent = "⏳ En cours…";
        await apiPost("/api/sync/single", { pub_id: pid, formats: ["JWPUB", "EPUB", "PDF"] });
        startSyncPolling();
      });
    });
  }

  async function runFulltextSearch(q) {
    const params = new URLSearchParams({
      q,
      category: state.category,
      limit: "80",
    });
    const res = await apiGet(`/api/search?${params.toString()}`);
    const items = res.items || [];
    el("listSummaryText").textContent = `${items.length} chapitre(s) contenant « ${q} »`;

    const container = el("cardsContainer");
    if (items.length === 0) {
      container.innerHTML = `
        <div style="padding:22px;text-align:center;color:#64748b;">
          Aucun chapitre indexé ne contient « <strong>${escHtml(q)}</strong> ».<br/>
          <small>Astuce : téléchargez d'abord des publications au format <strong>EPUB</strong> ou <strong>PDF</strong> pour indexer tout leur texte malgache hors-ligne.</small>
        </div>`;
      return;
    }

    container.innerHTML = items
      .map(
        (it) => `
        <div class="pub-card" data-pubid="${it.pub_id}" data-chapid="${it.chapter_id}">
          <div class="card-top">
            <span class="cat-badge">${escHtml(it.category_label)}${it.year ? " · " + it.year : ""}</span>
            <span class="sym-badge">${escHtml(it.pub_title)}</span>
          </div>
          <h3 class="card-title">📖 ${escHtml(it.chapter_title)}</h3>
          <div class="card-snippet">${it.snippet_html || ""}</div>
        </div>
      `
      )
      .join("");

    container.querySelectorAll(".pub-card").forEach((card) => {
      card.addEventListener("click", () => {
        openPublication(Number(card.dataset.pubid), Number(card.dataset.chapid), q);
      });
    });
  }

  // -------------------------------------------------------
  // LECTEUR DE CHAPITRES EPUB & VISIONNEUSE PDF
  // -------------------------------------------------------
  async function openPublication(pubId, targetChapterId = null, highlightQuery = "") {
    const detail = await apiGet(`/api/publication/${pubId}`);
    if (detail.error) return;
    state.currentPub = detail;

    el("mainWorkspace").classList.add("reading-mobile");
    el("readerEmptyState").classList.add("hidden");
    el("readerActive").classList.remove("hidden");

    el("readerCatTag").textContent = detail.category_label || detail.category;
    el("readerPubTitle").textContent = detail.title;

    // Boutons d'accès direct aux fichiers JWPUB / PDF / EPUB
    const filesMap = {};
    (detail.files || []).forEach((f) => {
      if (f.on_disk) filesMap[f.file_format] = f;
    });

    let btnsHtml = "";
    if (filesMap.JWPUB) {
      btnsHtml += `<a class="btn btn-update btn-sm" href="/api/file/${detail.id}/JWPUB?dl=1" title="Télécharger / Ouvrir dans JW Library sur téléphone ou PC">📲 .JWPUB (JW Library)</a>`;
    }
    if (filesMap.PDF) {
      btnsHtml += `<button class="btn btn-outline btn-sm" id="btnShowPdf">📄 Lire PDF</button>`;
      btnsHtml += `<a class="btn btn-outline btn-sm" href="/api/file/${detail.id}/PDF?dl=1" title="Enregistrer le fichier PDF">⬇ PDF</a>`;
    }
    if (filesMap.EPUB) {
      btnsHtml += `<a class="btn btn-outline btn-sm" href="/api/file/${detail.id}/EPUB?dl=1" title="Enregistrer le fichier EPUB">📕 .EPUB</a>`;
    }
    if (!filesMap.JWPUB && !filesMap.PDF && !filesMap.EPUB && !detail.is_demo) {
      btnsHtml += `<button class="btn btn-primary btn-sm" id="btnReaderDlNow">⬇ Télécharger maintenant (MG)</button>`;
    }
    el("readerFileBtns").innerHTML = btnsHtml;

    const btnShowPdf = el("btnShowPdf");
    if (btnShowPdf) {
      btnShowPdf.addEventListener("click", () => showPdfViewer(detail.id));
    }
    const btnDlNow = el("btnReaderDlNow");
    if (btnDlNow) {
      btnDlNow.addEventListener("click", async () => {
        btnDlNow.disabled = true;
        btnDlNow.textContent = "⏳ Téléchargement…";
        await apiPost("/api/sync/single", { pub_id: detail.id, formats: ["JWPUB", "EPUB", "PDF"] });
        startSyncPolling();
      });
    }

    const chapters = detail.chapters || [];
    if (chapters.length > 0) {
      el("pdfViewerWrap").classList.add("hidden");
      el("chapterNavBar").classList.remove("hidden");
      el("chapterBody").classList.remove("hidden");

      const toc = el("selChapterToc");
      toc.innerHTML = chapters
        .map((c) => `<option value="${c.id}">${c.chapter_index}. ${escHtml(c.chapter_title)}</option>`)
        .join("");

      const chosenId = targetChapterId || chapters[0].id;
      await loadChapter(chosenId, highlightQuery);
    } else if (filesMap.PDF) {
      showPdfViewer(detail.id);
    } else {
      el("pdfViewerWrap").classList.add("hidden");
      el("chapterNavBar").classList.add("hidden");
      el("chapterBody").classList.remove("hidden");
      el("chapterBody").innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <h3>Publication pas encore téléchargée sur votre disque</h3>
          <p>Cliquez sur <strong>« ⬇ Télécharger maintenant (MG) »</strong> ci-dessus pour récupérer ses fichiers <code>.jwpub</code>, <code>.epub</code> et <code>.pdf</code> officiels et indexer tous ses chapitres hors-ligne.</p>
        </div>
      `;
    }
  }

  function showPdfViewer(pubId) {
    el("chapterNavBar").classList.add("hidden");
    el("chapterBody").classList.add("hidden");
    el("pdfViewerWrap").classList.remove("hidden");
    const pdfUrl = `/api/file/${pubId}/PDF`;
    el("pdfFrame").src = pdfUrl;
    el("linkOpenPdfTab").href = pdfUrl;
    el("btnBackToChapters").classList.toggle(
      "hidden",
      !(state.currentPub && state.currentPub.chapters && state.currentPub.chapters.length > 0)
    );
  }

  async function loadChapter(chapterId, highlightQuery = "") {
    const ch = await apiGet(`/api/chapter/${chapterId}`);
    if (ch.error) return;
    state.currentChapterId = ch.id;
    el("selChapterToc").value = String(ch.id);

    el("btnPrevChap").disabled = !ch.prev_chapter;
    el("btnPrevChap").onclick = ch.prev_chapter ? () => loadChapter(ch.prev_chapter.id, highlightQuery) : null;

    el("btnNextChap").disabled = !ch.next_chapter;
    el("btnNextChap").onclick = ch.next_chapter ? () => loadChapter(ch.next_chapter.id, highlightQuery) : null;

    let bodyHtml = ch.html_content || `<p>${escHtml(ch.text_content)}</p>`;
    const q = (highlightQuery || state.query || "").trim();
    if (q.length >= 2) {
      const words = q
        .split(/\s+/)
        .map((w) => w.replace(/[^0-9A-Za-zÀ-ÿ'-]/g, ""))
        .filter((w) => w.length >= 2)
        .slice(0, 5);
      if (words.length > 0) {
        const pattern = new RegExp(`(?![^<]*>)(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
        bodyHtml = bodyHtml.replace(pattern, '<mark class="hl">$1</mark>');
      }
    }

    const bodyEl = el("chapterBody");
    bodyEl.innerHTML = bodyHtml;
    bodyEl.scrollTop = 0;
    const firstMark = bodyEl.querySelector("mark.hl");
    if (firstMark) {
      firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // -------------------------------------------------------
  // SYNCHRONISATION & MISES À JOUR EN LIGNE
  // -------------------------------------------------------
  function applySyncBanner(sync) {
    const running = Boolean(sync && sync.running);
    const banner = el("syncBanner");
    if (running) {
      banner.classList.remove("hidden");
      el("syncBannerMsg").textContent = sync.message || "Synchronisation en cours…";
      if (!state.pollTimer) startSyncPolling();
    } else {
      if (state.wasSyncRunning) {
        // Rafraîchit la liste et le lecteur dès la fin d'un téléchargement !
        banner.classList.remove("hidden");
        el("syncBannerMsg").textContent = sync.message || "Synchronisation terminée.";
        setTimeout(() => {
          if (!state.wasSyncRunning) banner.classList.add("hidden");
        }, 6500);
        refreshList();
        if (state.currentPub) {
          openPublication(state.currentPub.id);
        }
      } else {
        banner.classList.add("hidden");
      }
    }
    state.wasSyncRunning = running;
  }

  function startSyncPolling() {
    if (state.pollTimer) clearInterval(state.pollTimer);
    state.pollTimer = setInterval(async () => {
      const sync = await apiGet("/api/sync/status");
      applySyncBanner(sync);
      if (!sync.running) {
        clearInterval(state.pollTimer);
        state.pollTimer = null;
        await loadStats();
      }
    }, 1500);
  }

  function getSelectedSyncOptions() {
    const fmts = Array.from(document.querySelectorAll(".fmt-chk:checked")).map((c) => c.value);
    const cats = Array.from(document.querySelectorAll(".cat-sync-chk:checked")).map((c) => c.value);
    const yearMin = Number(el("selSyncYearMin").value || 0);
    const maxPubs = Number(el("inpMaxPubs").value || 300);
    const syncFull = el("chkSyncFullCatalog").checked || yearMin < 2024;
    return { fmts, cats, yearMin, maxPubs, syncFull };
  }

  async function launchBatchSync(mode) {
    const opts = getSelectedSyncOptions();
    if (opts.fmts.length === 0) {
      alert("Veuillez cocher au moins un format (JWPUB, EPUB ou PDF).");
      return;
    }
    if (opts.cats.length === 0) {
      alert("Veuillez cocher au moins une catégorie.");
      return;
    }
    el("syncModal").classList.add("hidden");
    await apiPost("/api/sync/start", {
      categories: opts.cats,
      formats: opts.fmts,
      year_min: opts.yearMin,
      sync_full_catalog: mode === "update" ? true : opts.syncFull,
      max_publications: opts.maxPubs,
      mode,
    });
    await loadStats();
    startSyncPolling();
  }

  function setMode(newMode) {
    state.mode = newMode;
    el("tabModeCatalog").classList.toggle("active", newMode === "catalog");
    el("tabModeFulltext").classList.toggle("active", newMode === "fulltext");
    refreshList();
  }

  // -------------------------------------------------------
  // ÉVÉNEMENTS INTERFACE
  // -------------------------------------------------------
  function bindEvents() {
    el("tabModeCatalog").addEventListener("click", () => setMode("catalog"));
    el("tabModeFulltext").addEventListener("click", () => setMode("fulltext"));

    el("btnRunSearch").addEventListener("click", () => {
      const q = el("searchInput").value.trim();
      // Si l'utilisateur tape plusieurs mots ou un verset, bascule automatiquement en plein-texte s'il y a des chapitres
      if (q && (q.includes(" ") || q.includes(":")) && Number(el("countChapters").textContent) > 0) {
        setMode("fulltext");
      } else {
        refreshList();
      }
    });

    el("searchInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") el("btnRunSearch").click();
    });

    let debounceTimer = null;
    el("searchInput").addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => refreshList(), 280);
    });

    el("btnClearSearch").addEventListener("click", () => {
      el("searchInput").value = "";
      refreshList();
    });

    el("chkDownloadedOnly").addEventListener("change", (e) => {
      state.downloadedOnly = e.target.checked;
      loadStats();
      refreshList();
    });

    el("chkFavoritesOnly").addEventListener("change", (e) => {
      state.favoritesOnly = e.target.checked;
      refreshList();
    });

    el("selFormatFilter").addEventListener("change", (e) => {
      state.format = e.target.value;
      refreshList();
    });

    el("selChapterToc").addEventListener("change", (e) => {
      loadChapter(Number(e.target.value));
    });

    el("btnFontPlus").addEventListener("click", () => {
      state.fontSizeRem = Math.min(1.65, state.fontSizeRem + 0.1);
      el("chapterBody").style.fontSize = `${state.fontSizeRem}rem`;
    });

    el("btnFontMinus").addEventListener("click", () => {
      state.fontSizeRem = Math.max(0.85, state.fontSizeRem - 0.1);
      el("chapterBody").style.fontSize = `${state.fontSizeRem}rem`;
    });

    el("btnToggleNight").addEventListener("click", () => {
      state.nightMode = !state.nightMode;
      el("chapterBody").classList.toggle("night-mode", state.nightMode);
    });

    el("btnBackToChapters").addEventListener("click", () => {
      el("pdfViewerWrap").classList.add("hidden");
      el("chapterNavBar").classList.remove("hidden");
      el("chapterBody").classList.remove("hidden");
    });

    el("btnMobileBack").addEventListener("click", () => {
      el("mainWorkspace").classList.remove("reading-mobile");
    });

    // Modale téléchargement & mises à jour
    el("btnOpenSync").addEventListener("click", () => {
      loadStats();
      el("syncModal").classList.remove("hidden");
    });
    el("btnCloseSyncModal").addEventListener("click", () => el("syncModal").classList.add("hidden"));
    el("btnCancelSync").addEventListener("click", () => el("syncModal").classList.add("hidden"));

    el("btnCheckAllCats").addEventListener("click", () => {
      document.querySelectorAll(".cat-sync-chk").forEach((c) => (c.checked = true));
    });
    el("btnCheckBooksOnly").addEventListener("click", () => {
      const essentials = new Set(["baiboly", "fitaovana", "boky", "bokikely"]);
      document.querySelectorAll(".cat-sync-chk").forEach((c) => {
        c.checked = essentials.has(c.value);
      });
    });

    el("selSyncYearMin").addEventListener("change", (e) => {
      if (Number(e.target.value) < 2024) {
        el("chkSyncFullCatalog").checked = true;
      }
    });

    el("btnModalStartDownload").addEventListener("click", () => launchBatchSync("download"));
    el("btnModalRunUpdate").addEventListener("click", () => launchBatchSync("update"));

    el("btnQuickUpdate").addEventListener("click", async () => {
      if (confirm("Vérifier en ligne le catalogue officiel Malgache (MG) et télécharger uniquement les nouveautés et mises à jour ?")) {
        await apiPost("/api/sync/start", {
          categories: state.categories.map((c) => c.code),
          formats: ["JWPUB", "EPUB", "PDF"],
          year_min: 2024,
          sync_full_catalog: true,
          max_publications: 250,
          mode: "update",
        });
        await loadStats();
        startSyncPolling();
      }
    });

    el("btnBannerStop").addEventListener("click", async () => {
      await apiPost("/api/sync/stop");
    });

    el("btnSaveCustomDir").addEventListener("click", async () => {
      const val = el("inpCustomDir").value.trim();
      const res = await apiPost("/api/settings/files-dir", { files_dir: val });
      if (res.ok) {
        alert("Dossier de fichiers enregistré : " + res.files_dir);
        loadStats();
      } else {
        alert("Erreur : " + res.files_dir);
      }
    });

    el("btnScanLocalFolder").addEventListener("click", async () => {
      const btn = el("btnScanLocalFolder");
      btn.disabled = true;
      btn.textContent = "⏳ Analyse et indexation en cours…";
      const res = await apiPost("/api/sync/scan-local");
      btn.disabled = false;
      btn.textContent = "📂 Scanner et indexer les fichiers déjà copiés dans le dossier « fichiers/ »";
      alert(
        `Analyse terminée : ${res.found_files || 0} fichier(s) détecté(s), ${res.indexed_chapters || 0} chapitre(s) indexé(s).`
      );
      await loadStats();
      await refreshList();
    });

    // Modale téléphone & disque dur externe
    el("btnPhoneGuide").addEventListener("click", () => {
      loadStats();
      el("phoneModal").classList.remove("hidden");
    });
    el("btnClosePhoneModal").addEventListener("click", () => el("phoneModal").classList.add("hidden"));
    el("btnOkPhoneModal").addEventListener("click", () => el("phoneModal").classList.add("hidden"));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    bindEvents();
    await loadStats();
    await refreshList();
  });
})();
