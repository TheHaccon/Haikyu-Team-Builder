(() => {
  const grid = document.getElementById("playerGrid");
  const positionFilter = document.getElementById("positionFilter");
  const rarityFilter = document.getElementById("rarityFilter");
  const searchInput = document.getElementById("search");
  const toggleLevelBtn = document.getElementById("toggleLevel");
  const schoolFilter = document.getElementById("schoolFilter");
  const clearSearchBtn = document.getElementById("clearSearch");

  const POS_MAP = {
    "S": "Setter",
    "MB": "Middle Blocker",
    "WS": "Wing Spiker",
    "LI": "Libero",
    "OP": "Opposite Hitter",
  };

  function getQuery() {
    const el = document.getElementById("search");
    return (el?.value || "").trim().toLowerCase();
  }

  let showMax = false;
  let q = "";

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() !== "") {
      clearSearchBtn.classList.remove("hidden");
    } else {
      clearSearchBtn.classList.add("hidden");
    }
    renderFiltered();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    renderFiltered();
  });

  function statList(stats = {}) {
    const lvl1Keys = Object.keys(stats.lvl1 || {});
    const maxKeys = Object.keys(stats.max || {});
    const keys = lvl1Keys.length ? lvl1Keys : maxKeys;
    const values = key => {
      if (showMax && stats.max && key in stats.max) return stats.max[key];
      if (!showMax && stats.lvl1 && key in stats.lvl1) return stats.lvl1[key];
      if (showMax && stats.max && !(key in stats.max)) return "-";
      if (!showMax && stats.lvl1 && !(key in stats.lvl1)) return "-";
      return "-";
    };
    const title = showMax ? "Max" : "Level 1";
    return `
      <div class="stat-columns">
        <div class="stat-column">
          <h4>${title}</h4>
          <dl class="stats">
            ${keys.map(k => `<dt>${k.replaceAll("_", " ")}</dt><dd>${values(k)}</dd>`).join("")}
          </dl>
        </div>
      </div>
    `;
  }

  function cardTemplate(p, i) {
    const id = p.id || `p-${i}`;
    return `
    <section class="card" data-id="${id}" data-school="${p.school}" data-rarity="${p.rarity}">
      <span class="player-name">${p.name}</span>
      <div class="details-grid">
        <div>
          ${statList(p.stats)}
          ${Array.isArray(p.tags) && p.tags.length ? `
            <div class="badges">
              ${p.tags.map(t => `<span class="badge">${t}</span>`).join("")}
            </div>
            <p>Skills</p>` : ""}
          ${Array.isArray(p.skills) && p.skills.length ? `
            <div class="skills">
              ${p.skills.map((s, index) => `
                <div class="skill" data-skill-index="${index}">
                  <img src="${s.icon}" alt="${s.name}" title="${s.name}">
                  <div class="skill-detail hidden">
                    ${Array.isArray(s.tags) && s.tags.length ? `
                      <div class="skill-tags">
                        ${s.tags.map(tag => `<span class="skill-tag">${tag.label || tag}</span>`).join("")}
                      </div>` : ""}
                    <div class="skill-desc">${s.description || ""}</div>
                  </div>
                </div>
              `).join("")}
            </div>` : ""}
        </div>
        <div class="img-wrap">
          <img src="${p.img}" alt="${p.name}">
        </div>
      </div>
    </section>`;
  }

  function renderFiltered() {
    const posAbbr = positionFilter ? positionFilter.value : "";
    const rarity = rarityFilter ? rarityFilter.value : "";
    const school = schoolFilter ? schoolFilter.value : "";
    const posFull = posAbbr ? POS_MAP[posAbbr] : "";
    const q = getQuery();

    const filtered = players.filter(p => {
      const mPos = !posFull || p.position === posFull;
      const mRar = !rarity || p.rarity === rarity;
      const mSch = !school || p.school === school;

      const mQ = !q || (p.name || "").toLowerCase().includes(q);

      return mPos && mRar && mSch && mQ;
    });

    grid.innerHTML = filtered.map(cardTemplate).join("");
  }


  function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  const onSearch = debounce(() => {
    q = (searchInput?.value || "").trim().toLowerCase();
    renderFiltered();
  }, 180);

  positionFilter?.addEventListener("change", renderFiltered);
  rarityFilter?.addEventListener("change", renderFiltered);
  searchInput?.addEventListener("input", onSearch);
  schoolFilter?.addEventListener("change", renderFiltered);


  toggleLevelBtn?.addEventListener("click", () => {
    showMax = !showMax;
    toggleLevelBtn.textContent = showMax ? "Show Level 1" : "Show Max LVL";
    renderFiltered();
  });

  renderFiltered();
})();