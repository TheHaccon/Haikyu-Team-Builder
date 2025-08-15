const players = [
  {
    id: "hinata",
    name: "Shōyō Hinata",
    img: "/img-char/hinataSSR.png",
    stats: {
      Attack: 82,
      Block: 64,
      Defense: 71,
      Receive: 60,
      Speed: 92,
      Stamina: 84,
      Technique: 76,
    },
    tags: ["Wing Spiker", "Karasuno"],
  },
  {
    id: "kageyama",
    name: "Tobio Kageyama",
    img: "./assets/players/kageyama.png",
    stats: {
      Attack: 78,
      Block: 70,
      Defense: 69,
      Receive: 66,
      Speed: 80,
      Stamina: 83,
      Technique: 90,
    },
    tags: ["Setter", "Karasuno"],
  },
  {
    id: "tsukishima",
    name: "Kei Tsukishima",
    img: "./assets/players/tsukishima.png",
    stats: {
      Attack: 73,
      Block: 89,
      Defense: 72,
      Receive: 62,
      Speed: 68,
      Stamina: 79,
      Technique: 81,
    },
    tags: ["Middle Blocker", "Karasuno"],
  },
  //will add player
];

const grid = document.getElementById("playerGrid");

function statList(stats) {
  const entries = Object.entries(stats);
  return `
    <dl class="stats">
      ${entries
        .map(
          ([key, val]) => `
        <dt>${key}</dt>
        <dd>${val}</dd>
      `
        )
        .join("")}
    </dl>
  `;
}

function cardTemplate(p, index) {
  const detailsId = `details-${p.id || index}`;
  return `
    <section class="card" data-id="${p.id || index}">
      <button class="player-toggle" aria-expanded="false" aria-controls="${detailsId}">
        <span class="player-name">${p.name}</span>
        <span class="chev" aria-hidden="true">⌄</span>
      </button>
      <div id="${detailsId}" class="details" hidden>
        <div class="details-grid">
          <div>
            ${statList(p.stats)}
            ${
              p.tags?.length
                ? `<div class="badges">${p.tags
                    .map((t) => `<span class="badge">${t}</span>`)
                    .join("")}</div>`
                : ""
            }
          </div>
          <div class="img-wrap">
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x533?text=No+Image'">
          </div>
        </div>
      </div>
    </section>
  `;
}

function render() {
  grid.innerHTML = players.map(cardTemplate).join("");
}
render();

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".player-toggle");
  if (!btn) return;

  const card = btn.closest(".card");
  const details = card.querySelector(".details");
  const expanded = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", String(!expanded));
  details.hidden = expanded;
  if (!expanded) {
    card.setAttribute("open", "");
  } else {
    card.removeAttribute("open");
  }
});

