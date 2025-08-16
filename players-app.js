(() => {
  const players = [
    {
      id: "hinata",
      name: "Shoyo Hinata",
      img: "img-char/hinataSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 103,
          Quick_Attack: 121,
          Set: 98,
          Receive: 105,
          Block: 109,
          Save: 110
        },
        max: {
          Serve: "TBD",
          Quick_Attack: "TBD",
          Set: "TBD",
          Receive: "TBD",
          Block: "TBD",
          Save: "TBD"
        },
      },
      tags: ["Wing Spiker", "Karasuno", "SSR"]
    },
    {
      id: "hinata(Practice)",
      name: "Shoyo Hinata (Practice)",
      img: "img-char/hinataSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 83,
          Quick_Attack: 98,
          Set: 79,
          Receive: 84,
          Block: 88,
          Save: 89
        },
        max: {
          Attack: 95,
          Block: 75,
          Defense: 78,
          Receive: 66,
          Speed: 92,
          Stamina: 84,
          Technique: 76
        }
      },
      tags: ["Wing Spiker", "Karasuno", "SR"]
    },
    {
      id: "kageyama(Practice)",
      name: "Tobio Kageyama (Practice)",
      img: "img-char/kageyamaSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 115,
          Quick_Attack: 109,
          Set: 121,
          Receive: 98,
          Block: 109,
          Save: 92
        },
        max: {
          Attack: 90,
          Block: 70,
          Defense: 69,
          Receive: 66,
          Speed: 80,
          Stamina: 83,
          Technique: 90
        }
      },
      tags: ["Setter", "Karasuno", "SSR"]
    },
    {
      id: "daichi",
      name: "Daichi Sawamura",
      img: "img-char/daichiSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 103,
          Power_Attack: 109,
          Set: 98,
          Receive: 121,
          Block: 109,
          Save: 104
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Opposite Hitter", "Karasuno", "SSR"]
    },
    {
      id: "daichi(Practice)",
      name: "Daichi Sawamura (Practice)",
      img: "img-char/daichiSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 84,
          Power_Attack: 89,
          Set: 80,
          Receive: 99,
          Block: 95,
          Save: 85
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Opposite Hitter", "Karasuno", "SR"]
    },
    {
      id: "koshi",
      name: "Koshi Sugawara",
      img: "img-char/sugawaraSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 99,
          Power_Attack: 89,
          Set: 94,
          Receive: 79,
          Block: 88,
          Save: 75
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Setter", "Karasuno", "SR"]
    },
    {
      id: "asahi",
      name: "Asahi Azumane",
      img: "img-char/asahiSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 116,
          Power_Attack: 121,
          Set: 98,
          Receive: 110,
          Block: 104,
          Save: 98
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spike", "Karasuno", "SSR"]
    },
    {
      id: "asahi(Practice)",
      name: "Asahi Azumane (Practice)",
      img: "img-char/asahiSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 94,
          Power_Attack: 98,
          Set: 79,
          Receive: 89,
          Block: 84,
          Save: 80
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "SR"]
    },
    {
      id: "yu",
      name: "Yu Nishinoya",
      img: "img-char/nishinoyaSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 99,
          Power_Attack: 99,
          Set: 110,
          Receive: 122,
          Block: 96,
          Save: 116
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Libero", "Karasuno", "SSR"]
    },
    {
      id: "yu(Practice)",
      name: "Yu Nishinoya (Practice)",
      img: "img-char/nishinoyaSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 81,
          Power_Attack: 81,
          Set: 90,
          Receive: 100,
          Block: 109,
          Save: 95
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Libero", "Karasuno", "SR"]
    },
    {
      id: "ryunosuke",
      name: "Ryunosuke Tanaka",
      img: "img-char/tanakaSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 104,
          Power_Attack: 121,
          Set: 98,
          Receive: 115,
          Block: 109,
          Save: 99
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "SSR"]
    },
    {
      id: "ryunosuke(Practice)",
      name: "Ryunosuke Tanaka (Practice)",
      img: "img-char/TanakaSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 84,
          Power_Attack: 98,
          Set: 79,
          Receive: 94,
          Block: 89,
          Save: 80
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "SR"]
    },
    {
      id: "kei",
      name: "Kei Tsukishima",
      img: "img-char/tsukishimaSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      stats: {
        lvl1: {
          Serve: 106,
          Quick_Attack: 115,
          Set: 101,
          Receive: 103,
          Block: 122,
          Save: 97
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Middle Blocker", "Karasuno", "SSR"]
    },
    {
      id: "kei(Practice)",
      name: "Kei Tsukishima (Practice)",
      img: "img-char/tsukishimaSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 86,
          Quick_Attack: 94,
          Set: 82,
          Receive: 83,
          Block: 99,
          Save: 78
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Middle Blocker", "Karasuno", "SR"]
    },
    {
      id: "tadashi",
      name: "Tadashi Yamaguchi",
      img: "img-char/tadashiSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 99,
          Quick_Attack: 88,
          Set: 93,
          Receive: 80,
          Block: 88,
          Save: 75
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Middle Blocker", "Karasuno", "SR"]
    },
    {
      id: "tadashi(Practice)",
      name: "Tadashi Yamaguchi (Practice)",
      img: "img-char/tadashiR.png",
      school: "Karasuno",
      rarity: "R",
      stats: {
        lvl1: {
          Serve: 90,
          Quick_Attack: 81,
          Set: 85,
          Receive: 73,
          Block: 81,
          Save: 69
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Middle Blocker", "Karasuno", "R"]
    },
        {
      id: "chikara",
      name: "Chikara Ennoshita",
      img: "img-char/chikaraSR.png",
      school: "Karasuno",
      rarity: "SR",
      stats: {
        lvl1: {
          Serve: 84,
          Power_Attack: 89,
          Set: 79,
          Receive: 98,
          Block: 89,
          Save: 85
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "SR"]
    },
    {
      id: "chikara(Practice)",
      name: "Chikara Ennoshita (Practice)",
      img: "img-char/chikaraR.png",
      school: "Karasuno",
      rarity: "R",
      stats: {
        lvl1: {
          Serve: 77,
          Power_Attack: 81,
          Set: 72,
          Receive: 90,
          Block: 81,
          Save: 78
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "R"]
    },
    {
      id: "hisashi",
      name: "Hisashi Kinoshita",
      img: "img-char/kinoshitaR.png",
      school: "Karasuno",
      rarity: "R",
      stats: {
        lvl1: {
          Serve: 86,
          Power_Attack: 89,
          Set: 73,
          Receive: 81,
          Block: 77,
          Save: 73
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Wing Spiker", "Karasuno", "R"]
    },
    ,
    {
      id: "kazuhito",
      name: "Kazuhito Narita",
      img: "img-char/naritaR.png",
      school: "Karasuno",
      rarity: "R",
      stats: {
        lvl1: {
          Serve: 79,
          Quick_Attack: 86,
          Set: 75,
          Receive: 77,
          Block: 90,
          Save: 73
        },
        max: {
          Attack: 70,
          Block: 65,
          Defense: 67,
          Receive: 70,
          Speed: 75,
          Stamina: 78,
          Technique: 88
        }
      },
      tags: ["Middle Blocker", "Karasuno", "R"]
    },
  ];

  // add this to the class="stats" once the data is out \| ${stats.max[k]}
  const grid = document.getElementById("playerGrid");
  const filterSchool = document.getElementById("filterSchool");
  const filterRarity = document.getElementById("filterRarity");

  function statList(stats = {}) {
    const keys = Object.keys(stats.lvl1 || {});
    return `
      <div class="stat-columns">
        <div class="stat-column">
          <h4>Level 1</h4>
          <dl class="stats">
            ${keys.map(k => `<dt>${k}</dt><dd>${stats.lvl1[k]} </dd>`).join("")}
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
            ${Array.isArray(p.tags) && p.tags.length
        ? `<div class="badges">${p.tags.map(t => `<span class="badge">${t}</span>`).join("")}</div>`
        : ""}
          </div>
          <div class="img-wrap">
            <img src="${p.img}" alt="${p.name}">
          </div>
        </div>
      </section>
    `;
  }

  function renderFiltered() {
    const school = filterSchool.value;
    const rarity = filterRarity.value;

    const filtered = players.filter(p => {
      const matchSchool = school === "" || p.school === school;
      const matchRarity = rarity === "" || p.rarity === rarity;
      return matchSchool && matchRarity;
    });

    grid.innerHTML = filtered.map(cardTemplate).join("");
  }

  // Events
  filterSchool.addEventListener("change", renderFiltered);
  filterRarity.addEventListener("change", renderFiltered);

  // Initial render
  renderFiltered();
})();
