(() => {
  const players = [
    {
      id: "hinata",
      name: "Shoyo Hinata",
      img: "img-char/hinataSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      position:"Middle Blocker",
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
      tags: ["Middle Blocker", "Karasuno", "SSR"]
    },
    {
      id: "hinata(Practice)",
      name: "Shoyo Hinata (Practice)",
      img: "img-char/hinataSR.png",
      school: "Karasuno",
      rarity: "SR",
      position:"Middle Blocker",
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
      tags: ["Middle Blocker", "Karasuno", "SR"]
    },
    {
      id: "kageyama(Practice)",
      name: "Tobio Kageyama (Practice)",
      img: "img-char/kageyamaSSR.png",
      school: "Karasuno",
      rarity: "SSR",
      position: "Setter",
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
      position:"Opposite Hitter",
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
      position:"Opposite Hitter",
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
      position:"Setter",
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
      position:"Wing Spiker",
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
      position:"Wing Spiker",
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
      position:"Libero",
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
      position:"Libero",
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
      position:"Wing Spiker",
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
      position:"Wing Spiker",
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
      position:"Middle Blocker",
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
      position:"Middle Blocker",
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
      position:"Middle Blocker",
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
      position:"Middle Blocker",
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
      position:"Wing Spiker",
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
      position:"Wing spiker",
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
      position:"Wing Spiker",
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
    {
      id: "kazuhito",
      name: "Kazuhito Narita",
      img: "img-char/naritaR.png",
      school: "Karasuno",
      rarity: "R",
      position:"Middle Blocker",
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
    {
      id: "toru(Practice)",
      name: "Toru Oikawa (Practice)",
      img: "img-char/oikawaSSR.png",
      school: "Aoba Johsai",
      rarity: "SSR",
      position:"Setter",
      stats: {
        lvl1: {
          Serve: 122,
          Power_Attack: 110,
          Set: 116,
          Receive: 98,
          Block: 109,
          Save: 92
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
      tags: ["Setter", "Aoba Johsai", "SSR"]
    },
    {
      id: "iwaizumi",
      name: "Hajime Iwaizumi",
      img: "img-char/iwaizumiSSR.png",
      school: "Aoba Johsai",
      rarity: "SSR",
      position:"Wing Spiker",
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
      tags: ["Wing Spiker", "Aoba Johsai", "SSR"]
    },
    {
      id: "iwaizumi(Practice)",
      name: "Hajime Iwaizumi (Practice)",
      img: "img-char/iwaizumiSR.png",
      school: "Aoba Johsai",
      rarity: "SSR",
      position:"Wing Spiker",
      stats: {
        lvl1: {
          Serve: 85,
          Power_Attack: 99,
          Set: 80,
          Receive: 94,
          Block: 89,
          Save: 81
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
      tags: ["Wing Spiker", "Aoba Johsai", "SR"]
    },
    {
      id: "matsukawa",
      name: "Issei Matsukawa",
      img: "img-char/matsukawaSSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 86,
          Quick_Attack: 93,
          Set: 81,
          Receive: 84,
          Block: 98,
          Save: 79
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
      tags: ["Middle Blocker", "Aoba Johsai", "SR"]
    },
    {
      id: "hanamaki",
      name: "Takahiro Hanamaki",
      img: "img-char/hanamakiSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Wing Spiker",
      stats: {
        lvl1: {
          Serve: 84,
          Power_Attack: 89,
          Set: 80,
          Receive: 98,
          Block: 89,
          Save: 84
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
      tags: ["Wing Spiker", "Aoba Johsai", "SR"]
    },
    {
      id: "yahaba",
      name: "Shigeru Yahaba",
      img: "img-char/yahabaSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Setter",
      stats: {
        lvl1: {
          Serve: 98,
          Power_Attack: 88,
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
      tags: ["Setter", "Aoba Johsai", "SR"]
    },
    {
      id: "watari",
      name: "Shinji Watari",
      img: "img-char/watariSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Libero",
      stats: {
        lvl1: {
          Serve: 81,
          Power_Attack: 81,
          Set: 89,
          Receive: 98,
          Block: 79,
          Save: 94
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
      tags: ["Libero", "Aoba Johsai", "SR"]
    },
    {
      id: "kindaichi",
      name: "Yutaro Kindaichi",
      img: "img-char/kindaichiSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 84,
          Quick_Attack: 99,
          Set: 79,
          Receive: 84,
          Block: 89,
          Save: 88
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
      tags: ["Middle Blocker", "Aoba Johsai", "SR"]
    },
    {
      id: "kunimi",
      name: "Akira Kunimi",
      img: "img-char/kunimiSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Opposite Hitter",
      stats: {
        lvl1: {
          Serve: 84,
          Power_Attack: 98,
          Set: 80,
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
      tags: ["Opposite Hitter", "Aoba Johsai", "SR"]
    },
    {
      id: "kyotani",
      name: "Kentaro Kyotani",
      img: "img-char/kyotaniSSR.png",
      school: "Aoba Johsai",
      rarity: "SSR",
      position:"Opposite Hitter",
      stats: {
        lvl1: {
          Serve: 116,
          Power_Attack: 121,
          Set: 97,
          Receive: 108,
          Block: 103,
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
      tags: ["Opposite Hitter", "Aoba Johsai", "SSR"]
    },
    {
      id: "kyotani(Practice)",
      name: "Kentaro Kyotani (Practice)",
      img: "img-char/kyotaniSR.png",
      school: "Aoba Johsai",
      rarity: "SR",
      position:"Opposite Hitter",
      stats: {
        lvl1: {
          Serve: 95,
          Power_Attack: 99,
          Set: 79,
          Receive: 88,
          Block: 84,
          Save: 79
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
      tags: ["Opposite Hitter", "Aoba Johsai", "SR"]
    },
    {
      id: "kenma",
      name: "Kenma Kozume",
      img: "img-char/kenmaSSR.png",
      school: "Nekoma",
      rarity: "SSR",
      position:"Setter",
      stats: {
        lvl1: {
          Serve: 104,
          Power_Attack: 114,
          Set: 122,
          Receive: 98,
          Block: 114,
          Save: 93
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
      tags: ["Setter", "Nekoma", "SSR"]
    },
    {
      id: "kenma(Practice)",
      name: "Kenma Kozume (Practice)",
      img: "img-char/kenmaSR.png",
      school: "Nekoma",
      rarity: "SR",
      position:"Setter",
      stats: {
        lvl1: {
          Serve: 85,
          Power_Attack: 93,
          Set: 99,
          Receive: 80,
          Block: 93,
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
      tags: ["Setter", "Nekoma", "SR"]
    },
    {
      id: "kuroo",
      name: "Tetsuro Kuroo",
      img: "img-char/kurooUR.png",
      school: "Nekoma",
      rarity: "UR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 123,
          Quick_Attack: 133,
          Set: 116,
          Receive: 119,
          Block: 140,
          Save: 113
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
      tags: ["Middle Blocker", "Nekoma", "UR"]
    },
    {
      id: "kuroo(Practice)",
      name: "Tetsuro Kuroo (Practice)",
      img: "img-char/kurooSSR.png",
      school: "Nekoma",
      rarity: "SSR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 107,
          Quick_Attack: 115,
          Set: 100,
          Receive: 104,
          Block: 122,
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
      tags: ["Middle Blocker", "Nekoma", "SSR"]
    },
    {
      id: "yaku(Practice)",
      name: "Morisuke Yaku (Practice)",
      img: "img-char/yakuSR.png",
      school: "Nekoma",
      rarity: "SR",
      position:"Libero",
      stats: {
        lvl1: {
          Serve: 81,
          Power_Attack: 81,
          Set: 90,
          Receive: 100,
          Block: 79,
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
      tags: ["Libero", "Nekoma", "SR"]
    },
    {
      id: "lev",
      name: "Lev Haiba",
      img: "img-char/levSSR.png",
      school: "Nekoma",
      rarity: "SSR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 106,
          Quick_Attack: 116,
          Set: 100,
          Receive: 102,
          Block: 121,
          Save: 96
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
      tags: ["Middle Blocker", "Nekoma", "SSR"]
    },
    {
      id: "kenma",
      name: "Lev Haiba (Practice)",
      img: "img-char/levSR.png",
      school: "Nekoma",
      rarity: "SR",
      position:"Middle Blocker",
      stats: {
        lvl1: {
          Serve: 86,
          Quick_Attack: 94,
          Set: 81,
          Receive: 84,
          Block: 99,
          Save: 79
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
      tags: ["Middle Blocker", "Nekoma", "SR"]
    },
  ];

  // add this to the class="stats" once the data is out \| ${stats.max[k]}
  const grid = document.getElementById("playerGrid");
  const filterSchool = document.getElementById("filterSchool");
  const filterRarity = document.getElementById("filterRarity");
  const filterPosition = document.getElementById("filterPosition");

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
    const position = filterPosition.value;

    const filtered = players.filter(p => {
      const matchSchool = school === "" || p.school === school;
      const matchRarity = rarity === "" || p.rarity === rarity;
      const matchPosition = position === "" || p.position === position;
      return matchSchool && matchRarity && matchPosition;
    });

    grid.innerHTML = filtered.map(cardTemplate).join("");
  }

  // Events
  filterSchool.addEventListener("change", renderFiltered);
  filterRarity.addEventListener("change", renderFiltered);
  filterPosition.addEventListener("change", renderFiltered);


  // Initial render
  renderFiltered();
})();
