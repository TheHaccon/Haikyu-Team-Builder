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
  const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1415787104528760952/eSaZW8MSmrpQkP7epDlif2aL4be1kBvoqeocpNKLH1x52STwJWTZKyliAzqnHLdDyN3E";
  const YOUR_USER_ID = "192790568479358977";
  const EMAIL_TO = "matcote111@gmail.com";

  const GLOBAL_DATA = (typeof players !== "undefined" && Array.isArray(players)) ? players : [];
  let allPlayers = GLOBAL_DATA.slice();
  let selectingSlot = null;
  const selections = { A: null, B: null };
  let searchTerm = "";
  let activeTier = "lv1";
  let posFilter = "";
  let pickerInput = null;
  let pickerMode = false;


  const POS_MAP = {
    "Middle Blocker": "MB",
    "Wing Spiker": "WS",
    "Opposite Hitter": "OP",
    "Setter": "S",
    "Libero": "Li"
  };

  const STATS_FIELDS = [
    { label: "Serve", key: "serve" },
    { label: "Quick Attack", key: "quick_attack" },
    { label: "Set", key: "set" },
    { label: "Receive", key: "receive" },
    { label: "Block", key: "block" },
    { label: "Save", key: "save" },
  ];

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



  function insertMissingStatsUI() {
    const aside = document.getElementById("school-panel");
    if (!aside) { console.warn("Missing stats: #school-panel not found"); return; }

    const box = document.createElement("div");
    box.id = "missing-stats-box";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choose-btn";
    btn.id = "missingStatsBtn";
    btn.textContent = "Missing stats?";
    btn.addEventListener("click", () => {
      formWrap.hidden = !formWrap.hidden;
      if (!formWrap.hidden) playerInput.focus();
    });

    const formWrap = document.createElement("div");
    formWrap.hidden = true;

    const form = document.createElement("form");
    form.id = "missingStatsForm";

    const row = (labelText, el) => {
      const wrap = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = labelText;
      label.style.display = "block";
      label.style.margin = "8px 0 4px";
      wrap.appendChild(label);
      wrap.appendChild(el);
      return wrap;
    };

    const playerInput = document.createElement("input");
    playerInput.type = "text";
    playerInput.name = "player";
    playerInput.required = true;
    playerInput.readOnly = true;

    const firstPicked = [selections?.A, selections?.B].filter(Boolean)[0];
    if (firstPicked?.name) playerInput.value = firstPicked.name;

    const chooseBtn = document.createElement("button");
    chooseBtn.type = "button";
    chooseBtn.textContent = "Players";
    chooseBtn.className = "choose-btn";
    chooseBtn.addEventListener("click", () => {
      pickerInput = playerInput;
      pickerMode = true;
      openModal(null);
    });

    const playerRow = document.createElement("div");
    playerRow.classList.add("player-row");
    playerRow.appendChild(playerInput);
    playerRow.appendChild(chooseBtn);
    const tierSelect = document.createElement("select");
    tierSelect.name = "tier";
    tierSelect.innerHTML = `<option value="lv1">Lv.1</option><option value="max">Max</option>`;

    const statsHdr = document.createElement("div");
    statsHdr.textContent = "Stats";
    statsHdr.classList.add("stats-hdr")

    const statsGrid = document.createElement("div");
    statsGrid.classList.add("stats-grid");

    STATS_FIELDS.forEach(f => {
      const lab = document.createElement("div");
      lab.textContent = f.label;
      const inp = document.createElement("input");
      inp.type = "number";
      inp.name = `stat_${f.key}`;
      inp.min = "0"; inp.step = "1"; inp.inputMode = "numeric";
      statsGrid.appendChild(lab);
      statsGrid.appendChild(inp);
    });

    const notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.name = "notes";
    notesInput.placeholder = "Source / notes (optional)";

    const contactInput = document.createElement("input");
    contactInput.type = "text";
    contactInput.name = "contact";
    contactInput.placeholder = "Your Discord/email (optional)";

    const actions = document.createElement("div");
    actions.classList.add("actions");
    const sendBtn = document.createElement("button");
    sendBtn.type = "submit";
    sendBtn.textContent = "Send";
    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.textContent = "Clear";
    clearBtn.style.marginLeft = "8px";
    clearBtn.addEventListener("click", () => form.reset());
    actions.append(sendBtn, clearBtn);

    form.append(
      row("Player", playerRow),
      row("Tier", tierSelect),
      statsHdr,
      statsGrid,
      row("Notes", notesInput),
      row("Contact", contactInput),
      actions
    );

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      try {
        const fd = new FormData(form);
        const payload = {
          player: String(fd.get("player") || "").trim(),
          tier: String(fd.get("tier") || "lv1"),
          notes: String(fd.get("notes") || "").trim(),
          contact: String(fd.get("contact") || "").trim(),
          stats: Object.fromEntries([...fd.entries()]
            .filter(([k, v]) => k.startsWith("stat_") && String(v).trim() !== "")
            .map(([k, v]) => [k.replace("stat_", ""), Number(v)])
          ),
          time: new Date().toISOString()
        };

        let ok = false;
        try {
          ok = await trySendToDiscord(payload);
        } catch (err) {
          console.error("trySendToDiscord failed:", err);
        }

        if (!ok && USE_MAILTO_FALLBACK) {
          console.log("Discord failed → using mailto fallback (won't navigate current tab).");
          openMailto(payload);
        }

        alert("Thanks! Your stats were submitted.");
        form.reset();
        formWrap.hidden = true;
      } catch (err) {
        console.error("Submit handler error:", err);
      }
      return false;
    });


    formWrap.appendChild(form);
    box.append(btn, formWrap);
    aside.appendChild(box);
  }

  function formatPlainStructured(p) {
    const lines = [
      `Player: ${p.player}`,
      `Tier: ${p.tier}`,
      `Contact: ${p.contact || "-"}`,
      `Notes: ${p.notes || "-"}`,
      `Submitted: ${p.time}`,
      "",
      "Stats:"
    ];
    STATS_FIELDS.forEach(f => {
      const v = p.stats[f.key];
      if (v !== undefined) lines.push(`${f.label}: ${v}`);
    });
    if (lines[lines.length - 1] === "Stats:") lines.push("(none)");
    return lines.join("\n");
  }

  async function trySendToDiscord(p) {
    if (!DISCORD_WEBHOOK_URL) return false;
    const text = formatPlainStructured(p).slice(0, 1900);

    const body = {
      content: `<@${YOUR_USER_ID}>\n\`\`\`${text}\`\`\``,
      username: "Versus Missing Stats",
    };
    console.log("Sending to Discord:", body);

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      return res.ok;
    } catch (err) {
      console.error("Discord webhook failed:", err);
      return false;
    }
  }



  function openMailto(p) {
    if (!EMAIL_TO) return false;
    const subject = encodeURIComponent(`[Versus] Missing stats - ${p.player}`);
    const body = encodeURIComponent(formatPlainStructured(p));

    const url = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return true;
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

      const isTaken = !pickerMode && (exactTaken || variantTaken);

      const card = document.createElement("div");
      card.className = "card";
      if (isTaken) card.classList.add("is-disabled");

      if (pickerMode) {
        card.addEventListener("click", () => {
          if (pickerInput) {
            pickerInput.value = p.name;
            pickerInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
          pickerInput = null;
          pickerMode = false;
          closeModal();
        });
      } else if (!isTaken) {
        card.addEventListener("click", () => {
          if (!selectingSlot) return;
          selections[selectingSlot] = p;
          closeModal();
          renderSelectionUI();
        });
      }
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
          if (pickerMode && pickerInput) {
            pickerInput.value = p.name;
            pickerInput.dispatchEvent(new Event("input", { bubbles: true }));
            pickerInput = null;
            pickerMode = false;
            closeModal();
            return;
          }
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
    pickerInput = null;
    pickerMode = false;
    modalEl?.setAttribute("aria-hidden", "true");
    modalEl?.classList.remove("open");
  }

  slotA?.addEventListener("contextmenu", (e) => { e.preventDefault(); clearSlot("A"); });
  slotB?.addEventListener("contextmenu", (e) => { e.preventDefault(); clearSlot("B"); });

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
    insertMissingStatsUI();
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
