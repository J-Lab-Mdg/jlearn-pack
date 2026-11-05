(() => {
  "use strict";

  const state = {
    view: "feed", // "feed" | "photos" | "videos"
    postType: "",
    year: 0,
    favoritesOnly: false,
    query: "",
    offset: 0,
    limit: 30,
    pageName: "Ma Page Facebook",
    pollTimer: null,
    wasRunning: false,
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

  async function loadStats() {
    const st = await apiGet("/api/stats");
    state.pageName = st.page_name || "Ma Page Facebook (Hors-Ligne)";
    el("lblPageName").textContent = state.pageName;
    if (!el("inpPageTitle").value) el("inpPageTitle").value = state.pageName;

    const pCnt = st.total_posts || 0;
    const phCnt = st.photos_count || 0;
    const vCnt = st.videos_count || 0;
    const mSize = fmtBytes(st.media_bytes || 0);
    const freeSize = fmtBytes(st.disk_free_bytes || 0);
    const impDate = st.last_import ? ` · Dernier import : ${st.last_import}` : "";

    el("lblHeaderStats").textContent =
      `${pCnt} publication(s) · ${phCnt} photos · ${vCnt} vidéos (${mSize}) · Disque libre : ${freeSize}${impDate}`;
    el("cntPosts").textContent = pCnt;
    el("cntPhotos").textContent = phCnt;
    el("cntVideos").textContent = vCnt;
    el("lblImportsDir").textContent = st.imports_dir || "./imports";

    // Années disponibles
    const selYear = el("selYear");
    const curVal = selYear.value;
    let yHtml = `<option value="0">Toutes les années</option>`;
    for (const y of st.years || []) {
      yHtml += `<option value="${y.year}">${y.year} (${y.count})</option>`;
    }
    selYear.innerHTML = yHtml;
    selYear.value = curVal;

    // Fichiers .zip détectés dans imports/
    const zips = st.pending_zips || [];
    if (zips.length > 0) {
      el("pendingZipsBox").innerHTML =
        `<div style="color:#15803d;font-weight:600;">✓ ${zips.length} archive(s) prête(s) détectée(s) : ` +
        zips.map((z) => `${escHtml(z.name)} (${fmtBytes(z.size)})`).join(", ") +
        `</div>`;
    } else {
      el("pendingZipsBox").innerHTML =
        `<div class="small-muted">Aucun fichier .zip détecté dans ce dossier pour le moment.</div>`;
    }

    const urls = st.lan_urls || [];
    el("lanUrlsGuide").innerHTML = urls.length
      ? urls.map((u) => `<span class="lan-chip">${escHtml(u)}</span>`).join(" ")
      : `<span class="lan-chip">${escHtml(window.location.origin)}</span>`;

    applyImportBanner(st.import_status || {});
  }

  function applyImportBanner(imp) {
    const running = Boolean(imp && imp.running);
    const banner = el("importBanner");
    if (running) {
      banner.classList.remove("hidden");
      el("importBannerMsg").textContent = imp.message || "Importation en cours…";
      if (!state.pollTimer) startImportPolling();
    } else if (state.wasRunning) {
      banner.classList.remove("hidden");
      el("importBannerMsg").textContent = imp.message || "Import terminé !";
      setTimeout(() => {
        if (!state.wasRunning) banner.classList.add("hidden");
      }, 6000);
      reloadCurrentView(true);
    } else {
      banner.classList.add("hidden");
    }
    state.wasRunning = running;
  }

  function startImportPolling() {
    if (state.pollTimer) clearInterval(state.pollTimer);
    state.pollTimer = setInterval(async () => {
      const imp = await apiGet("/api/import/status");
      applyImportBanner(imp);
      if (!imp.running) {
        clearInterval(state.pollTimer);
        state.pollTimer = null;
        await loadStats();
      }
    }, 1200);
  }

  function highlightWords(text, query) {
    let safe = escHtml(text || "");
    const q = (query || "").trim();
    if (q.length >= 2) {
      const words = q
        .split(/\s+/)
        .map((w) => w.replace(/[^0-9A-Za-zÀ-ÿ'#_-]/g, ""))
        .filter((w) => w.length >= 2)
        .slice(0, 5);
      if (words.length) {
        const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
        safe = safe.replace(re, "<mark>$1</mark>");
      }
    }
    return safe;
  }

  async function reloadCurrentView(resetOffset = true) {
    if (resetOffset) state.offset = 0;
    state.query = el("inpSearch").value.trim();

    if (state.view === "feed") {
      el("feedContainer").classList.remove("hidden");
      el("galleryContainer").classList.add("hidden");
      el("typePills").classList.remove("hidden");
      el("searchBarRow").classList.remove("hidden");
      await loadFeed(resetOffset);
    } else {
      el("feedContainer").classList.add("hidden");
      el("galleryContainer").classList.remove("hidden");
      el("loadMoreWrap").classList.add("hidden");
      el("typePills").classList.add("hidden");
      await loadGallery(state.view === "videos" ? "video" : "photo");
    }
  }

  async function loadFeed(reset = true) {
    const params = new URLSearchParams({
      q: state.query,
      type: state.postType,
      year: String(state.year || 0),
      favorites_only: state.favoritesOnly ? "1" : "0",
      limit: String(state.limit),
      offset: String(state.offset),
    });
    const res = await apiGet(`/api/posts?${params.toString()}`);
    const items = res.items || [];
    const total = res.total || 0;
    const container = el("feedContainer");

    if (reset) container.innerHTML = "";

    if (items.length === 0 && reset) {
      container.innerHTML = `
        <div class="post-card" style="text-align:center;color:#65676b;padding:30px;">
          Aucune publication trouvée pour ce filtre.
        </div>`;
      el("loadMoreWrap").classList.add("hidden");
      return;
    }

    const initial = (state.pageName || "F").trim().charAt(0).toUpperCase();

    for (const p of items) {
      const card = document.createElement("article");
      card.className = "post-card";

      const mediaHtml = (p.media || [])
        .filter((m) => m.on_disk)
        .map((m) => {
          if (m.media_type === "video") {
            return `<video class="post-video" controls preload="metadata" src="/api/media/${m.id}"></video>`;
          }
          return `<img class="post-photo" loading="lazy" src="/api/media/${m.id}" data-full="/api/media/${m.id}" data-cap="${escHtml(m.caption || p.title)}" alt="Photo" />`;
        })
        .join("");

      const extHtml = p.external_url
        ? `<a class="post-ext-link" href="${escHtml(p.external_url)}" target="_blank" rel="noopener">🔗 ${escHtml(p.external_title || p.external_url)}</a>`
        : "";

      const headerSub = [p.date_str || "Sans date", p.album_name ? `Album : ${p.album_name}` : ""]
        .filter(Boolean)
        .join(" · ");

      card.innerHTML = `
        <div class="post-header">
          <div class="post-author">
            <div class="post-avatar">${escHtml(initial)}</div>
            <div>
              <div class="post-meta-title">${escHtml(p.title || state.pageName)}</div>
              <div class="post-date">${escHtml(headerSub)}</div>
            </div>
          </div>
          <button class="btn-star ${p.favorite ? "active" : ""}" data-pid="${p.id}" title="Favori">★</button>
        </div>
        ${p.content ? `<div class="post-text">${highlightWords(p.content, state.query)}</div>` : ""}
        ${extHtml}
        ${mediaHtml ? `<div class="post-media-grid">${mediaHtml}</div>` : ""}
      `;

      card.querySelector(".btn-star").addEventListener("click", async (ev) => {
        const btn = ev.currentTarget;
        const r = await apiPost(`/api/favorite/${p.id}`);
        btn.classList.toggle("active", Boolean(r.favorite));
      });

      card.querySelectorAll(".post-photo").forEach((img) => {
        img.addEventListener("click", () => openLightbox(img.dataset.full, img.dataset.cap));
      });

      container.appendChild(card);
    }

    state.offset += items.length;
    el("loadMoreWrap").classList.toggle("hidden", state.offset >= total);
  }

  async function loadGallery(mediaType) {
    const res = await apiGet(`/api/gallery?type=${encodeURIComponent(mediaType)}&year=${state.year || 0}`);
    const items = res.items || [];
    const grid = el("galleryContainer");

    if (items.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#65676b;padding:30px;">Aucun média ${mediaType === "video" ? "vidéo" : "photo"} importé pour le moment.</div>`;
      return;
    }

    grid.innerHTML = items
      .map((m) => {
        const cap = m.caption || m.post_content || m.date_str || "";
        if (mediaType === "video") {
          return `
            <div class="gallery-item">
              <video controls preload="metadata" src="/api/media/${m.id}"></video>
              <div class="gallery-cap">${escHtml(m.date_str || "")} — ${escHtml(cap.slice(0, 70))}</div>
            </div>`;
        }
        return `
          <div class="gallery-item">
            <img loading="lazy" src="/api/media/${m.id}" data-full="/api/media/${m.id}" data-cap="${escHtml(cap)}" alt="Photo" />
            <div class="gallery-cap">${escHtml(m.date_str || "")} ${cap ? "— " + escHtml(cap.slice(0, 60)) : ""}</div>
          </div>`;
      })
      .join("");

    grid.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", () => openLightbox(img.dataset.full, img.dataset.cap));
    });
  }

  function openLightbox(src, caption) {
    el("lightboxImg").src = src;
    el("lightboxCaption").textContent = caption || "";
    el("lightbox").classList.remove("hidden");
  }

  function bindEvents() {
    document.querySelectorAll(".vtab").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".vtab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.view = btn.dataset.view;
        reloadCurrentView(true);
      });
    });

    el("btnSearch").addEventListener("click", () => reloadCurrentView(true));
    el("inpSearch").addEventListener("keydown", (e) => {
      if (e.key === "Enter") reloadCurrentView(true);
    });

    let deb = null;
    el("inpSearch").addEventListener("input", () => {
      clearTimeout(deb);
      deb = setTimeout(() => reloadCurrentView(true), 280);
    });

    document.querySelectorAll("#typePills .pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#typePills .pill").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.postType = btn.dataset.type || "";
        reloadCurrentView(true);
      });
    });

    el("chkFavOnly").addEventListener("change", (e) => {
      state.favoritesOnly = e.target.checked;
      reloadCurrentView(true);
    });

    el("selYear").addEventListener("change", (e) => {
      state.year = Number(e.target.value || 0);
      reloadCurrentView(true);
    });

    el("btnLoadMore").addEventListener("click", () => loadFeed(false));

    el("btnCloseLightbox").addEventListener("click", () => el("lightbox").classList.add("hidden"));
    el("lightbox").addEventListener("click", (e) => {
      if (e.target === el("lightbox")) el("lightbox").classList.add("hidden");
    });

    // Modale Import
    el("btnOpenImport").addEventListener("click", async () => {
      await loadStats();
      el("importModal").classList.remove("hidden");
    });
    el("btnCloseImport").addEventListener("click", () => el("importModal").classList.add("hidden"));
    el("btnCancelImport").addEventListener("click", () => el("importModal").classList.add("hidden"));

    el("btnScanFolder").addEventListener("click", async () => {
      const delAfter = Boolean(el("chkDeleteZipsAfter") && el("chkDeleteZipsAfter").checked);
      el("importModal").classList.add("hidden");
      await apiPost("/api/import/scan", { delete_zips_after: delAfter });
      await loadStats();
      startImportPolling();
    });

    el("btnUploadZip").addEventListener("click", async () => {
      const fileInp = el("inpZipFile");
      if (!fileInp.files || fileInp.files.length === 0) {
        alert("Veuillez d'abord choisir un fichier .zip Facebook.");
        return;
      }
      const f = fileInp.files[0];
      el("btnUploadZip").disabled = true;
      el("uploadProgText").textContent = `Copie de « ${f.name} » (${fmtBytes(f.size)}) vers imports/…`;
      try {
        await fetch("/api/import/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "X-Filename": encodeURIComponent(f.name),
          },
          body: f,
        });
        el("uploadProgText").textContent = "";
        el("importModal").classList.add("hidden");
        await loadStats();
        startImportPolling();
      } catch (err) {
        alert("Erreur lors de l'envoi : " + err);
      } finally {
        el("btnUploadZip").disabled = false;
      }
    });

    el("btnSavePageTitle").addEventListener("click", async () => {
      const val = el("inpPageTitle").value.trim();
      await apiPost("/api/settings/page-name", { page_name: val });
      await loadStats();
      reloadCurrentView(true);
    });

    // Modale Guide
    el("btnGuide").addEventListener("click", async () => {
      await loadStats();
      el("guideModal").classList.remove("hidden");
    });
    el("btnCloseGuide").addEventListener("click", () => el("guideModal").classList.add("hidden"));
    el("btnOkGuide").addEventListener("click", () => el("guideModal").classList.add("hidden"));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    bindEvents();
    await loadStats();
    await reloadCurrentView(true);
  });
})();
