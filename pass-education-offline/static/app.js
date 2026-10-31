(() => {
  "use strict";

  const state = {
    taxonomy: { cycles: [], classes: [], subjects: [], types: [] },
    query: "",
    classCode: "",
    subjectCode: "",
    typeCode: "",
    pdfFilter: "",
    offset: 0,
    limit: 60,
    total: 0,
    items: [],
    selectedId: null,
    selectedDetail: null,
    activeTab: "pdf",
    prefsLoaded: false,
    pollTimer: null,
  };

  const el = (id) => document.getElementById(id);

  async function apiGet(url) {
    const r = await fetch(url, { cache: "no-store" });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }

  async function apiPost(url, body = {}) {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok || data.error) {
      throw new Error(data.error || `Erreur HTTP ${r.status}`);
    }
    return data;
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatKbMb(bytes) {
    const n = Number(bytes || 0);
    if (!n) return "";
    if (n < 1024 * 1024) return `${Math.max(1, Math.round(n / 1024))} Ko`;
    return `${(n / (1024 * 1024)).toFixed(1)} Mo`;
  }

  function applyStatsToHeader(stats) {
    if (!stats) return;
    el("statResources").textContent = `${(stats.total_resources || 0).toLocaleString("fr-FR")} fiches`;
    el("statPdfs").textContent = `${(stats.downloaded_pdfs || 0).toLocaleString("fr-FR")} PDF sur PC`;
    el("statDisk").textContent = `${stats.total_disk_mb || 0} Mo`;
    el("demoNotice").classList.toggle("hidden", !stats.is_demo_only);

    if (stats.taxonomy && state.taxonomy.classes.length === 0) {
      state.taxonomy = stats.taxonomy;
      renderFilterControls();
      renderSyncCheckboxes();
    }
  }

  function renderFilterControls() {
    const chipsWrap = el("classChips");
    let html = `<button class="chip ${state.classCode === "" ? "active" : ""}" data-class="">Toutes classes</button>`;
    for (const c of state.taxonomy.classes) {
      const active = state.classCode === c.code ? "active" : "";
      html += `<button class="chip ${active}" data-class="${escapeHtml(c.code)}">${escapeHtml(c.short)}</button>`;
    }
    html += `<button class="chip ${state.classCode === "Perso" ? "active" : ""}" data-class="Perso">Mes PDF</button>`;
    chipsWrap.innerHTML = html;

    chipsWrap.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.classCode = btn.getAttribute("data-class") || "";
        chipsWrap.querySelectorAll(".chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        runSearch(true);
      });
    });

    const subjSel = el("subjectSelect");
    subjSel.innerHTML =
      `<option value="">📚 Toutes les matières</option>` +
      state.taxonomy.subjects
        .map((s) => `<option value="${escapeHtml(s.code)}">${escapeHtml(s.short)}</option>`)
        .join("");

    const typeSel = el("typeSelect");
    typeSel.innerHTML =
      `<option value="">🗂️ Tous les types</option>` +
      state.taxonomy.types
        .map((t) => `<option value="${escapeHtml(t.code)}">${escapeHtml(t.label)}</option>`)
        .join("");
  }

  function renderSyncCheckboxes() {
    const classGrid = el("syncClassGrid");
    classGrid.innerHTML = state.taxonomy.classes
      .map(
        (c) => `
      <label class="box-check">
        <input type="checkbox" name="syncClass" value="${escapeHtml(c.code)}" data-cycle="${escapeHtml(c.cycle)}" checked />
        <span><strong>${escapeHtml(c.short)}</strong></span>
      </label>`
      )
      .join("");

    const subjGrid = el("syncSubjectGrid");
    subjGrid.innerHTML = state.taxonomy.subjects
      .map(
        (s) => `
      <label class="box-check">
        <input type="checkbox" name="syncSubject" value="${escapeHtml(s.code)}" checked />
        <span>${escapeHtml(s.short)}</span>
      </label>`
      )
      .join("");
  }

  function populatePrefsInModal(prefs) {
    if (!prefs || state.prefsLoaded) return;
    state.prefsLoaded = true;
    const clsSet = new Set(prefs.classes || []);
    document.querySelectorAll('input[name="syncClass"]').forEach((inp) => {
      inp.checked = clsSet.size === 0 ? true : clsSet.has(inp.value);
    });
    const subjSet = new Set(prefs.subjects || []);
    document.querySelectorAll('input[name="syncSubject"]').forEach((inp) => {
      inp.checked = subjSet.size === 0 ? true : subjSet.has(inp.value);
    });
    el("chkDownloadPdfs").checked = prefs.download_pdfs !== false;
    el("chkOnlyWithPdf").checked = Boolean(prefs.only_with_pdf);
    el("inputMemberCookie").value = prefs.member_cookie || "";
  }

  function collectModalPrefs() {
    const classes = Array.from(document.querySelectorAll('input[name="syncClass"]:checked')).map((i) => i.value);
    const subjects = Array.from(document.querySelectorAll('input[name="syncSubject"]:checked')).map((i) => i.value);
    return {
      classes,
      subjects,
      download_pdfs: el("chkDownloadPdfs").checked,
      only_with_pdf: el("chkOnlyWithPdf").checked,
      member_cookie: el("inputMemberCookie").value.trim(),
    };
  }

  async function runSearch(reset = true) {
    if (reset) {
      state.offset = 0;
      state.items = [];
    }
    const params = new URLSearchParams({
      q: state.query,
      class: state.classCode,
      subject: state.subjectCode,
      type: state.typeCode,
      pdf_filter: state.pdfFilter,
      limit: String(state.limit),
      offset: String(state.offset),
    });
    const res = await apiGet(`/api/search?${params.toString()}`);
    state.total = res.total || 0;
    state.items = reset ? res.items || [] : state.items.concat(res.items || []);
    renderResultsList();

    if (reset && state.items.length > 0 && !state.selectedId) {
      selectResource(state.items[0].id);
    }
  }

  function renderResultsList() {
    el("resultsCountLabel").textContent = `${state.total.toLocaleString("fr-FR")} ressource${state.total > 1 ? "s" : ""}`;
    const listEl = el("resultsList");

    if (state.items.length === 0) {
      listEl.innerHTML = `
        <div style="padding:22px;text-align:center;color:#64748b;font-size:0.86rem;">
          Aucune ressource trouvée avec ces filtres.<br/>
          Cliquez sur <strong>« ⚡ Choisir Classes &amp; Télécharger »</strong> en haut à droite pour récupérer de nouvelles classes.
        </div>`;
      el("loadMoreWrap").classList.add("hidden");
      return;
    }

    listEl.innerHTML = state.items
      .map((item) => {
        const active = item.id === state.selectedId ? "active" : "";
        let pdfBadge = `<span class="badge badge-text-only">📝 Texte</span>`;
        if (item.pdf_status === "downloaded") {
          const sz = formatKbMb(item.pdf_size_bytes);
          pdfBadge = `<span class="badge badge-pdf-ok">📄 PDF Hors-Ligne${sz ? " · " + sz : ""}</span>`;
        } else if (item.pdf_url) {
          pdfBadge = `<span class="badge badge-pdf-cloud">☁️ PDF Gratuit</span>`;
        }
        return `
          <div class="res-card ${active}" data-id="${item.id}">
            <div class="res-card-top">
              <span class="badge badge-class">${escapeHtml(item.class_label)}</span>
              <span class="badge badge-subject">${escapeHtml(item.subject_label)}</span>
              ${pdfBadge}
            </div>
            <h3 class="res-title">${escapeHtml(item.title)}</h3>
            <p class="res-snippet">${item.snippet_html || ""}</p>
          </div>`;
      })
      .join("");

    listEl.querySelectorAll(".res-card").forEach((card) => {
      card.addEventListener("click", () => {
        selectResource(Number(card.getAttribute("data-id")));
      });
    });

    el("loadMoreWrap").classList.toggle("hidden", state.items.length >= state.total);
  }

  async function selectResource(resId) {
    state.selectedId = resId;
    document.querySelectorAll(".res-card").forEach((c) => {
      c.classList.toggle("active", Number(c.getAttribute("data-id")) === resId);
    });

    const det = await apiGet(`/api/resource?id=${resId}`);
    state.selectedDetail = det;
    renderDetailViewer(det);
  }

  function renderDetailViewer(det) {
    el("emptyViewer").classList.add("hidden");
    el("detailViewer").classList.remove("hidden");

    el("detClass").textContent = det.class_label || det.class_code;
    el("detSubject").textContent = det.subject_label || det.subject_code;
    el("detType").textContent = det.type_label || det.resource_type;
    el("detTitle").textContent = det.title;

    const hasLocalPdf = Boolean(det.local_pdf_exists);
    const hasRemotePdf = Boolean(det.pdf_url);

    const statusBadge = el("detPdfStatus");
    if (hasLocalPdf) {
      const pagesTxt = det.pdf_pages ? `${det.pdf_pages} p. · ` : "";
      statusBadge.className = "badge badge-pdf-ok";
      statusBadge.textContent = `✅ PDF sur disque (${pagesTxt}${formatKbMb(det.pdf_size_bytes)})`;
    } else if (hasRemotePdf) {
      statusBadge.className = "badge badge-pdf-cloud";
      statusBadge.textContent = "☁️ PDF gratuit prêt à télécharger";
    } else {
      statusBadge.className = "badge badge-text-only";
      statusBadge.textContent = "📝 Fiche texte hors-ligne";
    }

    const pdfUrlInline = `/api/pdf?id=${det.id}`;
    const pdfUrlDownload = `/api/pdf?id=${det.id}&download=1`;

    el("btnSavePdf").classList.toggle("hidden", !hasLocalPdf);
    el("btnSavePdf").href = pdfUrlDownload;
    el("btnPrintPdf").classList.toggle("hidden", !hasLocalPdf);
    el("btnShowInFolder").classList.toggle("hidden", !hasLocalPdf);
    el("btnDownloadSinglePdf").classList.toggle("hidden", hasLocalPdf || !hasRemotePdf);

    if (hasLocalPdf && det.local_pdf_relpath) {
      el("detPathBar").classList.remove("hidden");
      el("detPathBar").textContent = `Fichier local : pdfs/${det.local_pdf_relpath}`;
    } else {
      el("detPathBar").classList.add("hidden");
    }

    // Contenu PDF vs Absence de PDF
    const frame = el("pdfFrame");
    const noPdfBox = el("noPdfBox");
    if (hasLocalPdf) {
      frame.classList.remove("hidden");
      noPdfBox.classList.add("hidden");
      if (frame.getAttribute("data-loaded-id") !== String(det.id)) {
        frame.src = pdfUrlInline;
        frame.setAttribute("data-loaded-id", String(det.id));
      }
    } else {
      frame.classList.add("hidden");
      frame.removeAttribute("src");
      frame.removeAttribute("data-loaded-id");
      noPdfBox.classList.remove("hidden");
      el("btnTryFetchPdfNow").classList.toggle("hidden", !hasRemotePdf);
      el("noPdfMessage").textContent = hasRemotePdf
        ? "Ce cours dispose d'un vrai PDF gratuit public sur Pass-Éducation. Cliquez ci-dessous pour l'enregistrer immédiatement sur votre PC."
        : "Cette ressource n'a pas de fichier PDF gratuit public, mais son texte pédagogique est enregistré ci-contre dans l'onglet « Texte du cours ».";
    }

    // Contenu HTML
    const htmlContent = det.html_content || (det.text_content ? `<p>${escapeHtml(det.text_content).replace(/\n/g, "<br/>")}</p>` : "");
    el("detHtmlContent").innerHTML =
      htmlContent ||
      `<p class="muted">Aucun texte HTML séparé pour ce document — consultez directement le lecteur PDF ou l'onglet « Texte indexé du PDF ».</p>`;

    // Contenu texte extrait du PDF
    el("detPdfText").textContent =
      det.pdf_text || "Aucun texte extrait du PDF pour le moment (téléchargez d'abord le fichier PDF).";

    // Sélection intelligente d'onglet
    if (!hasLocalPdf && htmlContent && state.activeTab === "pdf" && !hasRemotePdf) {
      switchTab("html");
    } else {
      switchTab(state.activeTab);
    }
  }

  function switchTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    el("panelPdf").classList.toggle("hidden", tab !== "pdf");
    el("panelHtml").classList.toggle("hidden", tab !== "html");
    el("panelPdfText").classList.toggle("hidden", tab !== "pdftext");
  }

  async function downloadOnePdf(resId) {
    const btns = [el("btnDownloadSinglePdf"), el("btnTryFetchPdfNow")];
    btns.forEach((b) => {
      b.disabled = true;
      b.textContent = "⏳ Téléchargement…";
    });
    try {
      const resp = await apiPost("/api/download-one", { id: resId });
      if (resp.resource) {
        state.selectedDetail = resp.resource;
        state.activeTab = "pdf";
        renderDetailViewer(resp.resource);
        await runSearch(true);
        await pollSyncStatus();
      }
    } catch (err) {
      alert(err.message || "Impossible de récupérer ce PDF.");
    } finally {
      el("btnDownloadSinglePdf").disabled = false;
      el("btnDownloadSinglePdf").textContent = "⬇️ Télécharger ce PDF";
      el("btnTryFetchPdfNow").disabled = false;
      el("btnTryFetchPdfNow").textContent = "⬇️ Télécharger le PDF gratuit maintenant";
    }
  }

  async function pollSyncStatus() {
    try {
      const st = await apiGet("/api/sync/status");
      applyStatsToHeader(st.stats);
      populatePrefsInModal(st.prefs);

      const running = Boolean(st.running);
      el("liveSyncBanner").classList.toggle("hidden", !running);
      if (running) {
        el("liveStageLabel").textContent = st.stage_label || "Synchronisation…";
        el("liveCurrentItem").textContent = st.current_item ? `— ${st.current_item}` : "";
        el("liveSessionCount").textContent = `+${st.pdfs_downloaded_session || 0} PDF (${st.mb_downloaded_session || 0} Mo)`;
      }

      el("modalStageText").textContent = st.stage_label || "Prêt";
      el("modalSessionMb").textContent = `${st.pdfs_downloaded_session || 0} PDF · ${st.mb_downloaded_session || 0} Mo cette session`;
      el("modalCurrentItemText").textContent = st.current_item || "";

      const errEl = el("modalErrorText");
      if (st.last_error) {
        errEl.textContent = st.last_error;
        errEl.classList.remove("hidden");
      } else {
        errEl.classList.add("hidden");
      }

      el("btnModalStop").classList.toggle("hidden", !running);
      el("btnModalStart").disabled = running;
      el("btnModalStart").textContent = running
        ? "⏳ Synchronisation en cours…"
        : "🚀 Démarrer / Reprendre le téléchargement";

      clearTimeout(state.pollTimer);
      state.pollTimer = setTimeout(pollSyncStatus, running ? 1800 : 6000);
    } catch (_) {
      clearTimeout(state.pollTimer);
      state.pollTimer = setTimeout(pollSyncStatus, 5000);
    }
  }

  function bindEvents() {
    let debounceTimer = null;
    const sInput = el("searchInput");
    sInput.addEventListener("input", () => {
      state.query = sInput.value.trim();
      el("btnClearSearch").classList.toggle("hidden", !state.query);
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => runSearch(true), 220);
    });

    el("btnClearSearch").addEventListener("click", () => {
      sInput.value = "";
      state.query = "";
      el("btnClearSearch").classList.add("hidden");
      runSearch(true);
    });

    el("subjectSelect").addEventListener("change", (e) => {
      state.subjectCode = e.target.value;
      runSearch(true);
    });

    el("typeSelect").addEventListener("change", (e) => {
      state.typeCode = e.target.value;
      runSearch(true);
    });

    el("pdfFilterSelect").addEventListener("change", (e) => {
      state.pdfFilter = e.target.value;
      runSearch(true);
    });

    el("btnLoadMore").addEventListener("click", () => {
      state.offset += state.limit;
      runSearch(false);
    });

    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
    });

    el("btnSwitchToHtml").addEventListener("click", () => switchTab("html"));

    el("btnDownloadSinglePdf").addEventListener("click", () => {
      if (state.selectedId) downloadOnePdf(state.selectedId);
    });
    el("btnTryFetchPdfNow").addEventListener("click", () => {
      if (state.selectedId) downloadOnePdf(state.selectedId);
    });

    el("btnPrintPdf").addEventListener("click", () => {
      const frame = el("pdfFrame");
      if (frame && frame.contentWindow) {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      }
    });

    el("btnOpenFolder").addEventListener("click", async () => {
      const r = await apiPost("/api/open-folder", { id: 0 });
      if (r.note && r.path) alert(`Dossier PDF : ${r.path}`);
    });

    el("btnShowInFolder").addEventListener("click", async () => {
      if (!state.selectedId) return;
      await apiPost("/api/open-folder", { id: state.selectedId });
    });

    el("btnScanPersonal").addEventListener("click", async () => {
      const btn = el("btnScanPersonal");
      btn.disabled = true;
      btn.textContent = "⏳ Analyse…";
      try {
        const r = await apiPost("/api/scan-personal", {});
        applyStatsToHeader(r.stats);
        await runSearch(true);
        alert(
          r.imported > 0
            ? `${r.imported} fichier(s) PDF personnel(s) indexé(s) avec succès !`
            : "Aucun nouveau PDF trouvé dans pdfs/99_Import_Personnel/.\nGlissez vos fichiers .pdf dans ce dossier puis recliquez ici."
        );
      } catch (err) {
        alert(err.message);
      } finally {
        btn.disabled = false;
        btn.textContent = "📥 Indexer mes PDF";
      }
    });

    // Ouverture / Fermeture modale Sync
    const openModal = () => el("syncModal").classList.remove("hidden");
    const closeModal = () => el("syncModal").classList.add("hidden");
    el("btnOpenSync").addEventListener("click", openModal);
    el("btnEmptyOpenSync").addEventListener("click", openModal);
    el("btnBannerDetails").addEventListener("click", openModal);
    el("btnCloseModal").addEventListener("click", closeModal);
    el("syncModal").addEventListener("click", (e) => {
      if (e.target === el("syncModal")) closeModal();
    });

    // Presets Classes
    document.querySelectorAll("[data-preset-class]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-preset-class");
        document.querySelectorAll('input[name="syncClass"]').forEach((inp) => {
          if (mode === "all") inp.checked = true;
          else if (mode === "none") inp.checked = false;
          else inp.checked = inp.getAttribute("data-cycle") === mode;
        });
      });
    });

    // Presets Matières
    document.querySelectorAll("[data-preset-subj]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-preset-subj");
        document.querySelectorAll('input[name="syncSubject"]').forEach((inp) => {
          if (mode === "all") inp.checked = true;
          else if (mode === "none") inp.checked = false;
          else if (mode === "fr_math") inp.checked = inp.value === "francais" || inp.value === "mathematiques";
        });
      });
    });

    // Start / Stop Sync
    el("btnModalStart").addEventListener("click", async () => {
      try {
        const prefs = collectModalPrefs();
        await apiPost("/api/sync/start", prefs);
        await pollSyncStatus();
      } catch (err) {
        alert(err.message);
      }
    });

    const stopFn = async () => {
      await apiPost("/api/sync/stop", {});
      await pollSyncStatus();
      await runSearch(true);
    };
    el("btnModalStop").addEventListener("click", stopFn);
    el("btnBannerPause").addEventListener("click", stopFn);
  }

  async function init() {
    bindEvents();
    const stats = await apiGet("/api/stats");
    applyStatsToHeader(stats);
    await runSearch(true);
    await pollSyncStatus();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
  }

  init();
})();
