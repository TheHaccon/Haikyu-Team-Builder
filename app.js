const RARITIES = new Set(["UR","SSR","SR","SP","R","N"]);

const serverSelect = document.getElementById("serverSelect");
const benchRow = document.getElementById("bench-row");
const addBenchBtn = document.getElementById("addBench");
const schoolList = document.getElementById("school-list");
const deployList = document.getElementById("deploy-list");
const buffsList = document.getElementById("buffs-list");
const tabbar = document.getElementById("tabbar");
const tabDeploy = document.getElementById("tab-deploy");
const tabBuffs = document.getElementById("tab-buffs");
const modal = document.getElementById("modal");
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const closeModalBtn = document.getElementById("closeModal");

const MAX_BENCH_SLOTS = 6;

const state = {
  server: serverSelect ? serverSelect.value : "global",
  players: [],
  synergyDescriptions: {},
  synergyMeta: null,
  synergyPairs: null,
  starters: { S:null, MB1:null, WS1:null, L:null, WS2:null, MB2:null, OP:null },
  bench: [],
  ui: { activeSlotKey:null, targetBenchIndex:null, filterRole:null }
};

function baseName(name="") {
  const parts = String(name).trim().split(/\s+/);
  if (parts.length && RARITIES.has(parts[parts.length-1].toUpperCase())) parts.pop();
  return parts.join(" ").toLowerCase();
}

function benchSlots() {
  return Array.from(benchRow.querySelectorAll("[data-bench]"));
}

function getExpectedRole(slotKey) {
  if (!slotKey) return "";
  if (slotKey.startsWith("MB")) return "MB";
  if (slotKey.startsWith("WS")) return "WS";
  return slotKey;
}

async function loadDataset(server) {
  const path = server === "global" ? "data-global.js" : "data-japan.js";
  const text = await fetch(path).then(r=>r.text());
  const factory = new Function(`${text}; return {characters: typeof characters!=="undefined"?characters:[], synergyDescriptions: typeof synergyDescriptions!=="undefined"?synergyDescriptions:{}, synergyMeta: typeof synergyMeta!=="undefined"?synergyMeta:null, synergyPairs: typeof synergyPairs!=="undefined"?synergyPairs:null};`);
  const data = factory();
  const norm = data.characters.map(c=>({
    name: c.name,
    role: (c.role||"").toUpperCase(),
    img: c.img,
    school: c.school || "",
    bonds: Array.isArray(c.bonds) ? c.bonds.filter(Boolean) : Array.isArray(c.links) ? c.links.filter(Boolean) : []
  }));
  state.players = norm;
  state.synergyDescriptions = data.synergyDescriptions || {};
  state.synergyMeta = data.synergyMeta || null;
  state.synergyPairs = data.synergyPairs || null;
  Object.keys(state.starters).forEach(k=>state.starters[k]=null);
  state.bench = benchSlots().map(()=>null);
  renderBoard();
}

function renderTile(el, player) {
  el.innerHTML = player ? `<img src="${player.img}" alt="${player.name}">` : "";
  el.dataset.name = player?.name || "";
}

function renderBoard() {
  document.querySelectorAll(".hex[data-slot]").forEach(hex=>{
    const key = hex.dataset.slot;
    renderTile(hex, state.starters[key]);
  });
  benchSlots().forEach((b,i)=>renderTile(b, state.bench[i] || null));
  renderSynergies();
  syncAddBenchButton();
}

function openModalForRole(slotKey) {
  state.ui.activeSlotKey = slotKey;
  state.ui.targetBenchIndex = null;
  state.ui.filterRole = getExpectedRole(slotKey);
  searchInput.value = "";
  buildRoleGallery();
  modal.setAttribute("aria-hidden","false");
}

function openModalForBench(index) {
  state.ui.activeSlotKey = null;
  state.ui.targetBenchIndex = index;
  state.ui.filterRole = null;
  searchInput.value = "";
  buildBenchGallery(index);
  modal.setAttribute("aria-hidden","false");
}

function closeModal() {
  modal.setAttribute("aria-hidden","true");
  gallery.innerHTML = "";
  state.ui.activeSlotKey = null;
  state.ui.targetBenchIndex = null;
  state.ui.filterRole = null;
}

function getAllPicked() {
  return [...Object.values(state.starters).filter(Boolean), ...state.bench.filter(Boolean)];
}

function buildRoleGallery() {
  const role = state.ui.filterRole;
  const q = (searchInput.value || "").toLowerCase();
  let items = state.players.filter(p=>p.role===role);
  if (q) items = items.filter(p=>p.name.toLowerCase().includes(q) || (p.school||"").toLowerCase().includes(q));
  items.sort((a,b)=>a.name.localeCompare(b.name));
  const picked = getAllPicked();
  gallery.innerHTML = "";
  for (const p of items) {
    const exactTaken = picked.some(x=>x.name===p.name);
    const variantTaken = picked.some(x=>baseName(x.name)===baseName(p.name) && x.name!==p.name);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${p.img}" alt="${p.name}"><div class="name">${p.name}</div><div class="meta">${p.school ? p.school+" · " : ""}${p.role}</div>`;
    if (exactTaken || variantTaken) {
      card.style.opacity=".45";
      card.style.pointerEvents="none";
      card.title = exactTaken ? "Already selected" : "Another rarity selected";
    } else {
      card.addEventListener("click", ()=>assignToStarter(state.ui.activeSlotKey, p));
    }
    gallery.appendChild(card);
  }
}

function buildBenchGallery(targetIndex) {
  const q = (searchInput.value || "").toLowerCase();
  let items = state.players.slice();
  if (q) items = items.filter(p=>p.name.toLowerCase().includes(q) || (p.school||"").toLowerCase().includes(q));
  items.sort((a,b)=>a.name.localeCompare(b.name));
  const picked = getAllPicked();
  gallery.innerHTML = "";
  for (const p of items) {
    const exactTaken = picked.some(x=>x.name===p.name);
    const variantTaken = picked.some(x=>baseName(x.name)===baseName(p.name) && x.name!==p.name);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${p.img}" alt="${p.name}"><div class="name">${p.name}</div><div class="meta">${p.school ? p.school+" · " : ""}${p.role}</div>`;
    if (exactTaken || variantTaken) {
      card.style.opacity=".45";
      card.style.pointerEvents="none";
      card.title = exactTaken ? "Already selected" : "Another rarity selected";
    } else {
      card.addEventListener("click", ()=>{
        state.bench[targetIndex] = p;
        closeModal();
        renderBoard();
      });
    }
    gallery.appendChild(card);
  }
}

function assignToStarter(slotKey, player) {
  if (!slotKey) return;
  const expected = getExpectedRole(slotKey);
  if (player.role !== expected) { alert(`This slot expects role ${expected}.`); return; }
  const picked = getAllPicked();
  if (picked.some(x=>x.name===player.name)) { alert(`"${player.name}" is already selected.`); return; }
  if (picked.some(x=>baseName(x.name)===baseName(player.name) && x.name!==player.name)) { alert(`Another rarity of "${baseName(player.name)}" is already selected.`); return; }
  state.starters[slotKey] = player;
  closeModal();
  renderBoard();
}

function clearStarter(slotKey) {
  state.starters[slotKey] = null;
  renderBoard();
}

function clearBenchAt(index) {
  if (index < 0 || index >= state.bench.length) return;
  state.bench[index] = null;
  renderBoard();
}

function addBenchSlot() {
  if (benchSlots().length >= MAX_BENCH_SLOTS) return;
  const wrap = document.createElement("div");
  wrap.className = "slot";
  const slot = document.createElement("div");
  slot.className = "bench-slot";
  slot.setAttribute("data-bench","");
  const label = document.createElement("div");
  label.className = "label";
  label.innerHTML = `Bench <button class="remove-bench" type="button">Remove</button>`;
  wrap.appendChild(slot);
  wrap.appendChild(label);
  benchRow.insertBefore(wrap, addBenchBtn);
  state.bench.push(null);
  syncAddBenchButton();
}

function removeBenchSlotByButton(btn) {
  const slotEl = btn.closest(".slot");
  if (!slotEl) return;
  const all = benchSlots();
  const benchEl = slotEl.querySelector("[data-bench]");
  const idx = Array.from(all).indexOf(benchEl);
  if (idx >= 0) state.bench.splice(idx, 1);
  slotEl.remove();
  syncAddBenchButton();
  renderBoard();
}

function syncAddBenchButton() {
  addBenchBtn.disabled = benchSlots().length >= MAX_BENCH_SLOTS;
}

function pickedByBaseNameMap() {
  const map = new Map();
  for (const p of getAllPicked()) map.set(baseName(p.name), p);
  return map;
}

function renderSynergies() {
  const starters = Object.values(state.starters).filter(Boolean);
  const bench = state.bench.filter(Boolean);
  const schools = starters.reduce((acc,p)=>{ if(p.school){ acc[p.school]=(acc[p.school]||0)+1; } return acc; },{});
  const bonds = [...starters, ...bench].reduce((acc,p)=>{ (p.bonds||[]).forEach(b=>{ acc[b]=(acc[b]||0)+1; }); return acc; },{});

  schoolList.innerHTML = "";
  let anySchool = false;
  Object.entries(schools).forEach(([s,c])=>{
    const need = state.synergyMeta?.[s]?.activation?.min ?? 4;
    if (c>=need) {
      anySchool = true;
      const li = document.createElement("li");
      li.innerHTML = `<strong>${s}</strong> — ${state.synergyDescriptions[s]||""}`;
      schoolList.appendChild(li);
    }
  });
  if (!anySchool) schoolList.innerHTML = `<li>(no active school)</li>`;

  deployList.innerHTML = "";
  buffsList.innerHTML = "";
  let anyDeploy = false;

  const pickedMap = pickedByBaseNameMap();

  const bondNames = Object.keys(bonds);
  for (const b of bondNames) {
    const meta = state.synergyMeta ? state.synergyMeta[b] : null;
    const min = meta?.activation?.min || 2;
    const count = bonds[b] || 0;
    const isActive = count >= min;
    if (!isActive) continue;

    const cat = meta?.category || "deployment";
    if (cat === "deployment") {
      anyDeploy = true;
      const li = document.createElement("li");
      li.innerHTML = `<strong>${b}</strong> — ${state.synergyDescriptions[b]||""}`;
      deployList.appendChild(li);
    }

    if (cat === "stats") {
      const descObj = state.synergyDescriptions[b];
      let renderedAny = false;
      if (descObj && typeof descObj === "object") {
        const matchedPlayers = Object.keys(descObj)
          .map(name => state.players.find(p => p.name === name))
          .filter(p => p && pickedMap.has(baseName(p.name)));
        if (matchedPlayers.length >= 2) {
          renderedAny = true;
          const li = document.createElement("li");
          li.innerHTML = `
          <div style="font-weight:bold;margin-bottom:4px;text-decoration: underline;">${b}</div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          ${matchedPlayers.map(p => `
            <img src="${p.img}" alt="${p.name}" style="width:28px;height:28px;object-fit:cover;border-radius:4px;">
            <strong>${p.name}</strong>
          `).join('<span>×</span>')}
        </div>
        <div style="font-size:12px;margin-top:2px;color:#FFFFFF;">
          ${matchedPlayers.map(p => `
            <div><strong>${p.name}</strong>: ${descObj[p.name]}</div>
          `).join("")}
        </div>
      `;
          buffsList.appendChild(li);
        }
      }
      if (!renderedAny) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${b}</strong> — ${typeof state.synergyDescriptions[b] === "string" ? state.synergyDescriptions[b] : "(description missing)"}`;
        buffsList.appendChild(li);
      }
    }
  }

  Object.entries(schools).forEach(([s,c])=>{
    const need = state.synergyMeta?.[s]?.activation?.min ?? 4;
    if (c>=need && state.synergyDescriptions[s]) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>School: ${s}</strong> — ${state.synergyDescriptions[s]}`;
      buffsList.appendChild(li);
    }
  });

  if (!anyDeploy) deployList.innerHTML = `<li>(no active bonds)</li>`;
  if (!buffsList.children.length) buffsList.innerHTML = `<li>(no active buffs)</li>`;
}

function onHexClick(e) {
  const hex = e.currentTarget;
  openModalForRole(hex.dataset.slot);
}

function onHexContext(e) {
  e.preventDefault();
  const key = e.currentTarget.dataset.slot;
  clearStarter(key);
}

function onBenchClick(e) {
  const btn = e.target.closest(".remove-bench");
  if (btn) { removeBenchSlotByButton(btn); return; }
  const el = e.target.closest("[data-bench]");
  if (!el) return;
  const idx = Array.from(benchSlots()).indexOf(el);
  openModalForBench(idx);
}

function onBenchContext(e) {
  const el = e.target.closest("[data-bench]");
  if (!el) return;
  e.preventDefault();
  const idx = Array.from(benchSlots()).indexOf(el);
  clearBenchAt(idx);
}

function onSearchInput() {
  if (state.ui.filterRole) buildRoleGallery();
  else if (state.ui.targetBenchIndex!=null) buildBenchGallery(state.ui.targetBenchIndex);
}

function onTabClick(e) {
  const btn = e.target.closest(".tabbtn");
  if (!btn) return;
  Array.from(tabbar.querySelectorAll(".tabbtn")).forEach(b=>b.setAttribute("aria-selected", b===btn ? "true" : "false"));
  const tab = btn.dataset.tab;
  if (tab==="deploy") { tabDeploy.hidden=false; tabBuffs.hidden=true; }
  else { tabDeploy.hidden=true; tabBuffs.hidden=false; }
}

function wire() {
  document.querySelectorAll(".hex[data-slot]").forEach(hex=>{
    hex.addEventListener("click", onHexClick);
    hex.addEventListener("contextmenu", onHexContext);
  });
  benchRow.addEventListener("click", onBenchClick);
  benchRow.addEventListener("contextmenu", onBenchContext);
  addBenchBtn.addEventListener("click", addBenchSlot);
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e=>{ if (e.target===modal) closeModal(); });
  searchInput.addEventListener("input", onSearchInput);
  tabbar.addEventListener("click", onTabClick);
  if (serverSelect) serverSelect.addEventListener("change", ()=>loadDataset(serverSelect.value));
}

function init() {
  state.bench = benchSlots().map(()=>null);
  wire();
  loadDataset(state.server);
}

init();
