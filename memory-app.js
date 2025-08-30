const RARITY_ORDER = ["N", "R", "SR", "SP", "SSR", "UR"];
const rarityRank = (r) => RARITY_ORDER.indexOf((r || "N").toUpperCase());

let MEMORIES = window.MEMORIES || [];
if (!Array.isArray(MEMORIES)) MEMORIES = [];

const memBody = document.getElementById("memBody");
const positionFilter = document.getElementById("positionFilter");
const rarityFilter = document.getElementById("rarityFilter");
const searchInput = document.getElementById("search");
const sortPosTh = document.getElementById("sortPos");
const sortRarTh = document.getElementById("sortRar");
const toggleLevelBtn = document.getElementById("toggleLevel");

let sortState = { by: "rarity", dir: "desc" };
let showMax = false;

const normalize = (s) => (s || "").toLowerCase();
const getDesc = (m, useMax) => {
  if (typeof m.description === "object" && m.description) {
    return useMax ? (m.description.max || "") : (m.description.lvl1 || "");
  }
  return m.description || "";
};
const val = (v) => typeof v === "object" && v ? (showMax ? v.max : v.lvl1) : v;

function applyFilters(list) {
  const pos = positionFilter?.value || "";
  const rar = rarityFilter?.value || "";
  const q = normalize(searchInput?.value || "");
  return list.filter((m) => {
    const okPos = !pos || m.position === pos;
    const okRar = !rar || (m.rarity || "").toUpperCase() === rar.toUpperCase();
    const text = getDesc(m, showMax);
    const okQ = !q || normalize(m.name).includes(q) || normalize(text).includes(q);
    return okPos && okRar && okQ;
  });
}

function comparator(a, b) {
  if (sortState.by === "position") {
    const pa = a.position || "", pb = b.position || "";
    if (pa !== pb) return sortState.dir === "asc" ? pa.localeCompare(pb) : pb.localeCompare(pa);
    const rr = rarityRank(b.rarity) - rarityRank(a.rarity);
    if (rr !== 0) return rr;
    return a.name.localeCompare(b.name);
  } else {
    const diff = rarityRank(b.rarity) - rarityRank(a.rarity);
    if (diff !== 0) return sortState.dir === "asc" ? -diff : diff;
    const p = a.position.localeCompare(b.position);
    if (p !== 0) return p;
    return a.name.localeCompare(b.name);
  }
}

function renderStats(s) {
  if (!s) return "";
  const items = [
    ["Block", val(s.block)],
    ["Attack", val(s.power)],
    ["Serve", val(s.serve)],
    ["Receive", val(s.receive)],
    ["Save", val(s.save)],
    ["Set", val(s.set)]
  ].filter(([, v]) => v !== undefined && v !== null);
  if (!items.length) return "";
  return `<div class="stats">${items.map(([k, v], i) => `<div class="stat"><span class="stat-name">${k}</span><span class="stat-val">${v}</span></div>`).join("")
    }</div>`;
}

function render() {
  const data = applyFilters(MEMORIES).sort(comparator);
  memBody.innerHTML = "";
  for (const m of data) {
    const tr = document.createElement("tr");
    tr.className = "row";
    const desc = getDesc(m, showMax);
    tr.innerHTML = `
      <tr class="row">
  <td>
    <div class="mem">
      <img src="${m.image || ""}" alt="${m.name}" onerror="this.style.display='none'"/>
      <div><div class="name">${m.name}</div></div>
    </div>
  </td>
  <td colspan="2">
    <div class="meta">
      <span class="pill pos">${m.position}</span>
      <span class="pill rar rar-${(m.rarity || "N").toUpperCase()}">${m.rarity}</span>
      <p class="desc-mobile">${desc}</p>
    </div>
  </td>
  <td>${renderStats(m.stats)}</td>
  <td class="desc-desktop">${desc}</td>
  <td>
    <div class="actions">
      <span>Soon</span>
    </div>
  </td>
</tr>
    `;
    memBody.appendChild(tr);
  }
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.currentTarget.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(id);
        e.currentTarget.textContent = "Copied!";
        setTimeout(() => (e.currentTarget.textContent = "Copy ID"), 1000);
      } catch { }
    });
  });
}

positionFilter?.addEventListener("change", render);
rarityFilter?.addEventListener("change", render);
searchInput?.addEventListener("input", render);

function setSort(byKey) {
  if (sortState.by === byKey) {
    sortState.dir = sortState.dir === "asc" ? "desc" : "asc";
  } else {
    sortState.by = byKey;
    sortState.dir = byKey === "rarity" ? "desc" : "asc";
  }
  if (sortPosTh) {
    sortPosTh.classList.toggle("asc", sortState.by === "position" && sortState.dir === "asc");
    sortPosTh.classList.toggle("desc", sortState.by === "position" && sortState.dir === "desc");
    if (sortState.by !== "position") sortPosTh.classList.remove("asc", "desc");
  }
  if (sortRarTh) {
    sortRarTh.classList.toggle("asc", sortState.by === "rarity" && sortState.dir === "asc");
    sortRarTh.classList.toggle("desc", sortState.by === "rarity" && sortState.dir === "desc");
    if (sortState.by !== "rarity") sortRarTh.classList.remove("asc", "desc");
  }
  render();
}

sortPosTh?.addEventListener("click", () => setSort("position"));
sortRarTh?.addEventListener("click", () => setSort("rarity"));

toggleLevelBtn?.addEventListener("click", () => {
  showMax = !showMax;
  toggleLevelBtn.textContent = showMax ? "Show Lv.1" : "Show Max LVL";
  render();
});

render();
