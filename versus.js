/* Versus page logic */
(function () {
  const galleryEl = document.getElementById("gallery");
  const modalEl = document.getElementById("modal");
  const searchInput = document.getElementById("search");
  const closeModalBtn = document.getElementById("closeModal");
  const selectionList = document.getElementById("selectionList");
  const statsContainer = document.getElementById("statsTable");
  const metaPanel = document.getElementById("metaPanel");
  const tierRadios = document.querySelectorAll('input[name="tier"]');
  const slotA = document.querySelector('[data-vslot="A"]');
  const slotB = document.querySelector('[data-vslot="B"]');
  const nameA = slotA?.parentElement?.querySelector(".player-name");
  const nameB = slotB?.parentElement?.querySelector(".player-name");

  const GLOBAL_DATA = (typeof players !== "undefined" && Array.isArray(players)) ? players : [];
  let allPlayers = GLOBAL_DATA.slice();
  let selectingSlot = null;
  const selections = { A: null, B: null };
  let searchTerm = "";
  let activeTier = "lv1";
  let posFilter = ""; // "", "S", "MB", "WS", "OP", "Li"

  const POS_MAP = {
    "Middle Blocker": "MB",
    "Wing Spiker": "WS",
    "Opposite Hitter": "OP",
    "Setter": "S",
    "Libero": "Li"
  };

  const RARITIES = new Set(["UR", "SSR", "SR", "SP", "R", "N"]);

  function baseName(name = "") {
    const parts = String(name).trim().split(/\s+/);
    if (parts.length && RARITIES.has(parts[parts.length - 1].toUpperCase())) parts.pop();
    return parts.join(" ").toLowerCase();
  }

  function slug(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function pickImage(p) {
    if (p?.card_g) return p.card_g;
    const base = p?.id ? String(p.id) : slug(p?.name || "unknown");
    return `img-global/${base}.png`;
  }

  function getTierObject(player, tier) {
    if (!player?.stats) return null;
    const s = player.stats;
    if (tier === "lv1") return s.lvl1 || s.lv1 || s.base || s.level1 || s.Level1 || null;
    if (tier === "max") return s.max || s.lv80 || s.final || s.LevelMax || null;
    return null;
  }

  function statKeysIntersect(pA, pB, tier) {
    const a = Object.keys(getTierObject(pA, tier) || {});
    const b = Object.keys(getTierObject(pB, tier) || {});
    const set = new Set(a.filter(k => b.includes(k)));
    return [...set];
  }

  function numberOrNull(v) {
    if (v === null || v === undefined) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function initials(name) {
    const parts = String(name).split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map(s => s[0]?.toUpperCase()).join("");
  }

  function prettyKey(k) {
    return String(k).replace(/_/g, " ").replace(/\b([a-z])/g, (m, g1) => g1.toUpperCase());
  }

  function shortPos(p) {
    const raw = p.position || p.pos || "";
    return POS_MAP[raw] || raw;
  }

  function getPicked() {
    return [selections.A, selections.B].filter(Boolean);
  }

  function renderSelectionUI() {
    const items = [];
    if (selections.A) items.push(`A — ${selections.A.name}`);
    if (selections.B) items.push(`B — ${selections.B.name}`);

    selectionList.innerHTML = items.length
      ? items.map(t => `<li>${t}</li>`).join("")
      : `<li>(choose two players)</li>`;

    updateSlotCard(slotA, selections.A, nameA);
    updateSlotCard(slotB, selections.B, nameB);

    renderComparison();
    renderMeta();
  }

  function updateSlotCard(slotEl, player, nameEl) {
    if (!slotEl) return;
    slotEl.innerHTML = "";
    if (!player) {
      const ph = document.createElement("span");
      ph.className = "slot-placeholder";
      ph.textContent = slotEl.dataset.vslot === "A" ? "Player A" : "Player B";
      slotEl.appendChild(ph);
      if (nameEl) nameEl.textContent = "";
      return;
    }

    const img = document.createElement("img");
    img.src = pickImage(player);
    img.alt = player.name;
    img.className = "slot-img";
    img.referrerPolicy = "no-referrer";
    img.onerror = () => {
      slotEl.innerHTML = `<div class="slot-initials">${initials(player.name)}</div>`;
    };

    slotEl.appendChild(img);
    if (nameEl) nameEl.textContent = ` — ${player.name}`;
  }

  function renderComparison() {
    statsContainer.innerHTML = "";
    const pA = selections.A;
    const pB = selections.B;

    if (!pA || !pB) {
      statsContainer.innerHTML = `<div class="empty">Select two players to compare.</div>`;
      return;
    }

    const dataA = getTierObject(pA, activeTier) || {};
    const dataB = getTierObject(pB, activeTier) || {};
    const keys = statKeysIntersect(pA, pB, activeTier);

    if (keys.length === 0) {
      statsContainer.innerHTML = `<div class="empty">No comparable stats for this tier.</div>`;
      return;
    }

    const header = document.createElement("div");
    header.className = "stats-row head";
    header.innerHTML = `
      <div class="col stat-label">Stat</div>
      <div class="col">${escapeHtml(pA.name)}</div>
      <div class="col">${escapeHtml(pB.name)}</div>
    `;
    statsContainer.appendChild(header);

    for (const k of keys) {
      const a = numberOrNull(dataA[k]);
      const b = numberOrNull(dataB[k]);
      if (a === null && b === null) continue;

      const max = Math.max(a || 0, b || 0) || 1;
      const row = document.createElement("div");
      row.className = "stats-row";

      row.appendChild(cellLabel(prettyKey(k)));
      row.appendChild(cellBar(a, max, a));
      row.appendChild(cellBar(b, max, b));

      statsContainer.appendChild(row);
    }
  }

  function cellLabel(text) {
    const d = document.createElement("div");
    d.className = "col stat-label";
    d.textContent = text;
    return d;
  }

  function cellBar(value, max, labelValue) {
    const wrap = document.createElement("div");
    wrap.className = "col";
    if (value === null || value === undefined) {
      wrap.innerHTML = `<span class="dash">—</span>`;
      return wrap;
    }

    const pct = Math.max(2, Math.round((value / max) * 100));
    const bar = document.createElement("div");
    bar.className = "bar";

    const fill = document.createElement("div");
    fill.className = "bar__fill";
    fill.style.width = pct + "%";

    const label = document.createElement("div");
    label.className = "bar__label";
    label.textContent = String(labelValue);

    bar.appendChild(fill);
    bar.appendChild(label);
    wrap.appendChild(bar);
    return wrap;
  }

  function renderMeta() {
    metaPanel.innerHTML = "";
    const pA = selections.A;
    const pB = selections.B;

    if (!pA && !pB) {
      metaPanel.innerHTML = `<div class="empty">Select a player to view details.</div>`;
      return;
    }

    const wrap = document.createElement("div");
    wrap.className = "meta-grid";
    wrap.appendChild(metaCard("Player A", pA));
    wrap.appendChild(metaCard("Player B", pB));
    metaPanel.appendChild(wrap);
  }

  function metaCard(label, p) {
    const card = document.createElement("div");
    card.className = "meta-card";

    if (!p) {
      card.innerHTML = `<div><b>${label}</b>: (none)</div>`;
      return card;
    }

    const items = [
      ["Name", p.name],
      ["School", p.school || "—"],
      ["Position", p.position || p.pos || "—"],
      ["Rarity", p.rarity || "—"],
    ];

    card.innerHTML = `
      <div class="meta-title">${label}</div>
      <ul class="meta-list">
        ${items.map(([k, v]) => `<li><span class="dim">${escapeHtml(k)}:</span> ${escapeHtml(String(v))}</li>`).join("")}
      </ul>
    `;
    return card;
  }

  function getFilteredPlayers() {
    const q = (searchTerm || "").trim().toLowerCase();
    let list = allPlayers.slice();

    if (q) {
      list = list.filter((p) => {
        const hay = [
          p.name,
          p.school,
          p.position || p.pos,
          p.rarity,
          p.id
        ].filter(Boolean).join(" ").toLowerCase();
        return hay.includes(q);
      });
    }

    if (posFilter) {
      list = list.filter(p => shortPos(p) === posFilter);
    }

    return list;
  }

  function clearSlot(slotKey) {
    if (!slotKey) return;
    if (selections[slotKey]) {
      selections[slotKey] = null;
      renderSelectionUI();
    }
  }

  function renderGallery() {
    if (!galleryEl) return;
    const list = getFilteredPlayers();

    galleryEl.innerHTML = "";
    galleryEl.classList.add("gallery-grid");

    const bar = document.createElement("div");
    bar.className = "pos-filter-bar";
    const buttons = ["All", "S", "MB", "WS", "OP", "Li"];
    for (const label of buttons) {
      const val = label === "All" ? "" : label;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.setAttribute("aria-pressed", String(posFilter === val));
      btn.addEventListener("click", () => {
        posFilter = val;
        renderGallery();
      });
      bar.appendChild(btn);
    }
    galleryEl.appendChild(bar);

    if (!list || list.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty grid-full";
      empty.textContent = "No players match your search (or none loaded).";
      galleryEl.appendChild(empty);
      return;
    }

    const picked = getPicked();
    const frag = document.createDocumentFragment();

    for (const p of list) {
      const exactTaken = picked.some(x => x.name === p.name);
      const variantTaken = picked.some(x => baseName(x.name) === baseName(p.name) && x.name !== p.name);

      const card = document.createElement("div");
      card.className = "card";
      if (exactTaken || variantTaken) card.classList.add("is-disabled");

      const img = document.createElement("img");
      img.className = "card-img";
      img.src = pickImage(p);
      img.alt = p.name;
      img.referrerPolicy = "no-referrer";
      img.onerror = () => {
        const fb = document.createElement("div");
        fb.className = "card-fallback";
        fb.textContent = initials(p.name);
        img.replaceWith(fb);
      };

      const name = document.createElement("div");
      name.className = "name card-name";
      name.textContent = p.name;

      const meta = document.createElement("div");
      meta.className = "meta card-meta";
      meta.textContent = `${p.school ? p.school + " · " : ""}${shortPos(p)}`.trim();

      if (!(exactTaken || variantTaken)) {
        card.addEventListener("click", () => {
          if (!selectingSlot) return;
          selections[selectingSlot] = p;
          closeModal();
          renderSelectionUI();
        });
      }

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(meta);
      frag.appendChild(card);
    }

    galleryEl.appendChild(frag);
  }

  function openModal(slotKey) {
    selectingSlot = slotKey;
    renderGallery();
    modalEl?.setAttribute("aria-hidden", "false");
    modalEl?.classList.add("open");
    searchInput?.focus();
  }

  function closeModal() {
    selectingSlot = null;
    modalEl?.setAttribute("aria-hidden", "true");
    modalEl?.classList.remove("open");
  }

  // Clear on right-click
  slotA?.addEventListener("contextmenu", (e) => { e.preventDefault(); clearSlot("A"); });
  slotB?.addEventListener("contextmenu", (e) => { e.preventDefault(); clearSlot("B"); });

  // Shift+click to clear, normal click to open modal
  slotA?.addEventListener("click", (e) => { if (e.shiftKey) { clearSlot("A"); } else { openModal("A"); } });
  slotB?.addEventListener("click", (e) => { if (e.shiftKey) { clearSlot("B"); } else { openModal("B"); } });

  const tabButtons = document.querySelectorAll(".tabbtn");
  const tabContents = document.querySelectorAll(".tabcontent");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabButtons.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      tabContents.forEach((c) => {
        if (c.id === `tab-${tab}`) c.removeAttribute("hidden");
        else c.setAttribute("hidden", "true");
      });
    });
  });

  tierRadios.forEach((r) =>
    r.addEventListener("change", () => {
      const val = document.querySelector('input[name="tier"]:checked')?.value;
      activeTier = val === "max" ? "max" : "lv1";
      renderComparison();
    })
  );

  searchInput?.addEventListener("input", (e) => {
    searchTerm = e.target.value || "";
    renderGallery();
  });

  closeModalBtn?.addEventListener("click", closeModal);
  modalEl?.addEventListener("click", (e) => { if (e.target === modalEl) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && modalEl?.classList.contains("open")) closeModal(); });

  function init() {
    renderSelectionUI();
    renderGallery();
    document.querySelector('.tabbtn[data-tab="stats"]')?.click?.();
  }

  try { init(); }
  catch (e) {
    console.error("Versus init error:", e);
    setTimeout(() => {
      try { init(); }
      catch (err) {
        console.error("Versus second init failed:", err);
        if (galleryEl) galleryEl.innerHTML = `<div class="empty">Failed to load player data.</div>`;
      }
    }, 0);
  }
})();
