const players = [{
  id: "hinata",
  name: "Shoyo Hinata",
  img: "img-char/hinataSSR.png",
  card_g: "img-global/hinataSSR.png",
  card_j: "img-japan/hinataSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Middle Blocker",
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
  tags: ["Middle Blocker", "Karasuno", "SSR"],
  skills: [
    {
      name: "The Greatest Decoy",
      icon: "skills/hinataS1.png",
      tags: [
        "Passive", "Chance to trigger",
      ],
      description: "While Hinata is present, increases Power\/Quick Attack stat of players on your side by 7/10/13%"
    },
    {
      name: "Quick Duo",
      icon: "skills/hinataS2.png",
      tags: [
        "Passive", "Quick Spike Boost",
      ],
      description: "Hinata performs a Quick Spike and the setter is a Quick Attack-type player, increases this spike's power by 15/17/19% of that setter\'s Quick Attack stat."
    },
    {
      name: "On The Ball",
      icon: "skills/hinataS3.png",
      tags: [
        "Passive", "Chance to trigger",
      ],
      description: "Increases Hinata\'s Awareness by 6/7/7%, When Hinata lands a Critical hit, additionally increases Awareness by 4/4/5%, stacking up to 1 times."
    },
    {
      name: "Soaring Teen",
      icon: "skills/hinataS4.png",
      tags: [
        "Ultimate", "Active", "Quick Attack", "Critical Power Up"
      ],
      description: "Hinata performs a Quick Spike with 235/250/265/280/295% of his attack stat as power. If this spike is a Critical hit, increases its power by an additional 20% of his Quick Attack stat."
    },
  ],
},
{
  id: "hinata(Practice)",
  name: "Shoyo Hinata (Practice)",
  img: "img-char/hinataSR.png",
  card_g: "img-global/hinataSR.png",
  card_j: "img-japan/hinataSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "SR"],
  skills: [
    {
      name: "Relentless Runner",
      icon: "skills/hinata2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Hinata (Practice)\'s Quick Attack stat by 10/12/14%"
    },
    {
      name: "Undying Spirit",
      icon: "skills/hinata2S2.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "When Hinata (Practice) scores, players on your side receive \"Spike Intuition\" (lasts for 8 net crossings), increasing Spike power by 6/7.5/9% of the player\'s Power/Quick Attack stat"
    },
    {
      name: "Above The Block",
      icon: "skills/hinata2S3.png",
      tags: [
        "Passive", "Counter Block",
      ],
      description: "When  Hinata (Practice) performs a Quick Spike, reduces opponent\'s blocking power by 7/9.5/12% of the blocking player\'s Block stat"
    },
    {
      name: "Soaring Teen",
      icon: "skills/hinata2S4.png",
      tags: [
        "Ultimate", "Active", "Quick Attack", "Stat Bonus"
      ],
      description: " Hinata (Practice) performs a Quick Spike with 215/230/245/260/275% of Quick Attack stat as power; for this Spike, HINATA (Practice)\'s Strength increases by 10%"
    },
  ],
},
{
  id: "kageyama(Practice)",
  name: "Tobio Kageyama (Practice)",
  img: "img-char/kageyamaSSR.png",
  card_g: "img-global/tobioSSR.png",
  card_j: "img-global/tobioSSR.png",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Karasuno", "SSR"],
  skills: [
    {
      name: "Tricky Serve",
      icon: "skills/kageyamaS1.png",
      tags: [
        "Passive", "Serve",
      ],
      description: "Kageyama performs a Jump Serve with 120/135/150% of Serve stat as power"
    },
    {
      name: "Sharp Observer",
      icon: "skills/kageyamaS2.png",
      tags: [
        "Passive", "Set",
      ],
      description: "Kageyama performs a Set with 115/130/145% of Set stat as power;for this play, your side\'s spikers\' Strenght increases by 10%"
    },
    {
      name: "The King Awakens",
      icon: "skills/kageyamaS3.png",
      tags: [
        "Passive", "Awareness Up",
      ],
      description: "While Kageyama is present, increases your side\'s players' Awareness by 10% and increases Spike power by 6/8/10% of the player\'s Power/Quick Attack stat"
    },
    {
      name: "Surprise Dump",
      icon: "skills/kageyamaS4.png",
      tags: [
        "Ultimate", "Active", "Setter Dump", "Block Break"
      ],
      description: "Kageyama performs an unblockable Setter Dump with 225/240/255/270/285% of Set stat as power"
    },
  ],
},
{
  id: "daichi",
  name: "Daichi Sawamura",
  img: "img-char/daichiSSR.png",
  card_g: "img-global/daichiSSR.png",
  card_j: "img-japan/daichiSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Opposite Hitter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Karasuno", "SSR"],
  skills: [
    {
      name: "Steady Reception",
      icon: "skills/daichiS1.png",
      tags: [
        "Passive", "Restore Teammate's Stamina",
      ],
      description: "When Daichi Sawamura performs a Receive, restores 3/5/7 Stamina to the teammate with the lowest Stamina."
    },
    {
      name: "Sledgehammer Spike",
      icon: "skills/daichiS2.png",
      tags: [
        "Active", "Power Attack",
      ],
      description: "Daichi Sawamura performs a Power Spike with 120/135/150% of his Power Attack stat."
    },
    {
      name: "Team Backbone",
      icon: "skills/daichiS3.png",
      tags: [
        "Passive", "Receive Power Up",
      ],
      description: "While Daichi Sawamura is present, increases receive power of your side\'s back row players by 10/12/14% of their Receive stat."
    },
    {
      name: "Reliable Defense",
      icon: "skills/daichiS4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Power Attack Boost",
      ],
      description: "Daichi Sawamura performs a Receive with 220/235/250/265/280% of his Receive stat. If your side\’s next Spike is a Power Spike, increases that spike\'s power by 15% of the spiker\’s Power Attack stat."
    },
  ],
},
{
  id: "daichi(Practice)",
  name: "Daichi Sawamura (Practice)",
  img: "img-char/daichiSR.png",
  card_g: "img-global/daichiSR.png",
  card_j: "img-japan/daichiSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Opposite Hitter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Karasuno", "SR"],
  skills: [
    {
      name: "Solid Defense",
      icon: "skills/daichi2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Daichi Sawamura (Practice)'s Save and Receive stats by 10/12/14%."
    },
    {
      name: "Captain's Strength",
      icon: "skills/daichi2S2.png",
      tags: [
        "Active", "Power Attack",
      ],
      description: "Daichi Sawamura (Practice) performs a Power Spike with 120/135/150% of Power Attack stat as power."
    },
    {
      name: "Captain's Coverage",
      icon: "skills/daichi2S3.png",
      tags: [
        "Passive", "Restore Teammate's Stamina",
      ],
      description: "Daichi Sawamura (Practice) consumes 1 additional Stamina whenever he touches the ball. When your side scores, that player recovers 3 Stamina. While Sawamura is on the court, increases Receive power by 8/10/12% of the receiving player's Receive stat."
    },
    {
      name: "Precision Reception",
      icon: "skills/daichi2S4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Power Up",
      ],
      description: "Daichi Sawamura (Practice) performs a Receive with 215/230/245/260/275% of Receive stat as power; when your side's player next casts an attack skill, increases the power of this touch by 10% of the player's corresponding stat."
    },
  ],
},
{
  id: "koshi",
  name: "Koshi Sugawara",
  img: "img-char/sugawaraSR.png",
  card_g: "img-global/sugawaraSR.png",
  card_j: "img-japan/sugawaraSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Karasuno", "SR"],
  skills: [
    {
      name: "Senpai's Prowess",
      icon: "skills/sugawaraS1.png",
      tags: [
        "Passive", "Serve",
      ],
      description: "Koshi Sugawara performs an Overhand Serve with 120/135/150% of Serve stat as power."
    },
    {
      name: "Offensive Tactics",
      icon: "skills/sugawaraS2.png",
      tags: [
        "Passive", "Set", "Power Attack Boost",
      ],
      description: "Koshi Sugawara performs a Set with 115/130/145% of Set stat as power; while Koshi Sugawara is present, increases the power of Power Spike skills used by your Power-type players by 5% of their Power Attack stat."
    },
    {
      name: "Rallying Spirit",
      icon: "skills/sugawaraS3.png",
      tags: [
        "Passive", "Stamina",
      ],
      description: "While Koshi Sugawara is present, reduces your side's Power Spike skills' Stamina consumption by 20/30/40%."
    },
    {
      name: "Senpai's Worth",
      icon: "skills/sugawaraS4.png",
      tags: [
        "Ultimate", "Passive", "Set", "Enhance Team",
      ],
      description: "Koshi Sugawara performs a Set that increases your side's next spike power by 100/115/130/145/160% of his Power/Quick Attack stat; when performing a Power Spike, additionally increases this spike's power by 10/10/15/15/15% of his Power Attack stat."
    },
  ],
},
{
  id: "asahi",
  name: "Asahi Azumane",
  img: "img-char/asahiSSR.png",
  card_g: "img-global/asahiSSR.png",
  card_j: "img-japan/asahiSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spike", "Karasuno", "SSR"],
  skills: [
    {
      name: "Proficient Defense",
      icon: "skills/asahiS1.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Asahi Azumane performs a Receive with 120/135/150% of Receive stat as power."
    },
    {
      name: "Bullet Serve",
      icon: "skills/asahiS2.png",
      tags: [
        "Passive", "Serve",
      ],
      description: "Asahi Azumane performs a Jump Serve with 120/135/150% of Serve stat as power."
    },
    {
      name: "Ace's Aura",
      icon: "skills/asahiS3.png",
      tags: [
        "Passive", "Stamina",
      ],
      description: "When Asahi Azumane's Stamina is above 70, increases his Power Spike's power by 15/17.5/20% of Power Attack stat."
    },
    {
      name: "Charged Spike",
      icon: "skills/asahiS4.png",
      tags: [
        "Ultimate", "Active", "Power Attack", "Stamina Burst",
      ],
      description: "Asahi Azumane consumes 30 additional Stamina to perform a Power Spike with 235/250/265/280/295% of Power Attack stat as power, receives 1 stack of 'Power Charge'; when casting [Charged Spike] skill, each stack of 'Power Charge' increases Power Spike power by 50% of Power Attack stat."
    },
  ]
},
{
  id: "asahi(Practice)",
  name: "Asahi Azumane (Practice)",
  img: "img-char/asahiSR.png",
    card_g: "img-global/asahiSR.png",
  card_j: "img-japan/asahiSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "SR"],
  skills: [
    {
      name: "Cannon Spike",
      icon: "skills/asahi2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Asahi Azumane (Practice)'s Power Attack stat by 10/12/14%."
    },
    {
      name: "Pressure Field",
      icon: "skills/asahi2S2.png",
      tags: [
        "Passive", "Weaken Opponent",
      ],
      description: "When Asahi Azumane (Practice) scores with Power Spike, reduces opponent's receiving players' Receive stat by 7/9.5/12%, lasting for 4 net crossings."
    },
    {
      name: "Advantage Pressure",
      icon: "skills/asahi2S3.png",
      tags: [
        "Passive", "Power Attack Boost",
      ],
      description: "When your side is leading in points, increases Asahi Azumane (Practice)'s Power Spike power by 10/12.5/15% of Power Attack stat."
    },
    {
      name: "Exhaust Spike",
      icon: "skills/asahi2S4.png",
      tags: [
        "Ultimate", "Active", "Power Attack", "Stamina Burst",
      ],
      description: "Asahi Azumane (Practice) consumes 3 additional Stamina to perform a Power Spike with 225/240/255/270/285% of Power Attack stat as power."
    },
  ]
},
{
  id: "yu",
  name: "Yu Nishinoya",
  img: "img-char/nishinoyaSSR.png",
  card_g: "img-global/nishinoyaSSR.png",
  card_j: "img-japan/nishinoyaSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Libero",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Libero", "Karasuno", "SSR"],
  skills: [
    {
      name: "Guardian Deity",
      icon: "skills/nishinoyaS1.png",
      tags: [
        "Passive", "Power Attack Boost",
      ],
      description: "When Yu Nishinoya's Save result is not BAD, increases the power of the next Power Spike skill used by your Power-type player by 15% of his Power Attack stat."
    },
    {
      name: "Libero Supreme",
      icon: "skills/nishinoyaS2.png",
      tags: [
        "Passive", "Save",
      ],
      description: "Yu Nishinoya performs a Save with 120% of Save stat as power."
    },
    {
      name: "Inspire Morale",
      icon: "skills/nishinoyaS3.png",
      tags: [
        "Passive", "Team Morale",
      ],
      description: "When Yu Nishinoya enters the court, increases your Team Morale by 18."
    },
    {
      name: "Rolling Thunder",
      icon: "skills/nishinoyaS4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Power Attack Skill Cooldown Reduction",
      ],
      description: "Yu Nishinoya consumes 20 additional Stamina to perform a Receive with 220% of Receive stat power; if the Receive result is not BAD, reduces the cooldown of your side's next Power Spike skill by 6 net crossings."
    },
  ]
},
{
  id: "yu(Practice)",
  name: "Yu Nishinoya (Practice)",
  img: "img-char/nishinoyaSR.png",
  card_g: "img-global/nishinoyaSR.png",
  card_j: "img-japan/nishinoyaSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Libero",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Libero", "Karasuno", "SR"],
  skills: [
    {
      name: "Primal Instinct",
      icon: "skills/nishinoya2S1.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "When Yu Nishinoya (Practice)'s Save result is not BAD, increases your side's Spike power by 7/9.5/12% of the player's Power/Quick Attack stat."
    },
    {
      name: "Elite Libero",
      icon: "skills/nishinoya2S2.png",
      tags: [
        "Passive", "Save",
      ],
      description: "Yu Nishinoya (Practice) performs a Save with 120/135/150% of Save stat as power."
    },
    {
      name: "Team's Lifeblood",
      icon: "skills/nishinoya2S3.png",
      tags: [
        "Passive", "Team Morale",
      ],
      description: "Yu Nishinoya (Practice)'s Receive stat increases by 7/9.5/12%; when Yu Nishinoya (Practice)'s Receive result is not BAD, increases your Team Morale by 5."
    },
    {
      name: "Genius Defense",
      icon: "skills/nishinoya2S4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Counter Quick Attack",
      ],
      description: "Yu Nishinoya (Practice) performs a Receive with 215/230/245/260/275% of Receive stat as power; when receiving an opponent's Quick Spike, increases this receive's power by 8% of Receive stat."
    },
  ]
},
{
  id: "ryunosuke",
  name: "Ryunosuke Tanaka",
  img: "img-char/tanakaSSR.png",
  card_g: "img-global/tanakaSSR.png",
  card_j: "img-japan/tanakaSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "SSR"],
  skills: [
    {
      name: "The Ace Arrives",
      icon: "skills/tanakaS1.png",
      tags: [
        "Passive", "Power Attack Boost",
      ],
      description: "Increases the power of Ryunosuke Tanaka's 1st Power Spike in each match by 25/40/55% of Power Attack stat."
    },
    {
      name: "Tenacious Spirit",
      icon: "skills/tanakaS2.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Ryunosuke Tanaka performs a Receive with 115/130/145% of Receive stat as power; for this Receive, Tanaka's Reflex increases by 10%."
    },
    {
      name: "Burning Passion",
      icon: "skills/tanakaS3.png",
      tags: [
        "Passive", "Reduce Opponent's Stamina",
      ],
      description: "Increases Ryunosuke Tanaka's Power Spike power by 10/12/14% of Power Attack stat; his Power Spike reduces opponent's blocking and receiving players' Stamina by 5."
    },
    {
      name: "Super Inner Cross",
      icon: "skills/tanakaS4.png",
      tags: [
        "Ultimate", "Active", "Power Attack", "Power Up",
      ],
      description: "Ryunosuke Tanaka consumes 5 extra Stamina to perform a Short Diagonal Spike with 250/260/275/290/305% of Power Attack stat as power; when this is Tanaka's first spike in this set, increases spike power by an additional 30% of Tanaka's Power Attack stat."
    },
  ]
},
{
  id: "ryunosuke(Practice)",
  name: "Ryunosuke Tanaka (Practice)",
  img: "img-char/tanakaSR.png",
  card_g: "img-global/tanakaSR.png",
  card_j: "img-japan/tanakaSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "SR"],
  skills: [
    {
      name: "Saving Spirit",
      icon: "skills/tanaka2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Ryunosuke Tanaka (Practice)'s Save stat by 7/9.5/12%."
    },
    {
      name: "Provocative Nature",
      icon: "skills/tanaka2S2.png",
      tags: [
        "Active", "Power Attack", "Weaken Opponent's Receive",
      ],
      description: "Ryunosuke Tanaka (Practice) performs a Power Spike with 115/130/145% of Power Attack stat as power; applies [Taunt] Debuff to opponent's receiving player (lasts 2 net crossings), reducing their receive power by 3/4/5% of their Receive stat."
    },
    {
      name: "Continuous Growth",
      icon: "skills/tanaka2S3.png",
      tags: [
        "Passive", "Stat Bonus",
      ],
      description: "Ryunosuke Tanaka (Practice) receives 1 stack of 'Progress' after a Receive, each stack of 'Progress' increases Ryunosuke Tanaka (Practice)'s Receive stat by 4/5/6%, up to 3 stacks."
    },
    {
      name: "Stalwart Receive",
      icon: "skills/tanaka2S4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Counter Quick Attack",
      ],
      description: "Ryunosuke Tanaka (Practice) performs a Receive with 215/230/245/260/275% of Receive stat as power; when receiving an opponent's Quick Attack, Tanaka (Practice)'s Reflex increases by 5%."
    },
  ]
},
{
  id: "kei",
  name: "Kei Tsukishima",
  img: "img-char/tsukishimaSSR.png",
  card_g: "img-global/tsukishimaSSR.png",
  card_j: "img-japan/tsukishimaSSR.png",
  school: "Karasuno",
  rarity: "SSR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "SSR"],
  skills: [
    {
      name: "Karasuno's Composure",
      icon: "skills/tsukishimaS1.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "While Kei Tsukishima is on the court, increases the Strength of your Quick Attack-type players by 10/12.5/15%."
    },
    {
      name: "Tactical Quick Attack",
      icon: "skills/tsukishimaS2.png",
      tags: [
        "Active", "Quick Attack", "Enhance Team",
      ],
      description: "Kei Tsukishima performs a Quick Spike with 115/130/145% of his Quick Attack stat. The next time a teammate casts a Spike skill, their Awareness is increased by 5%."
    },
    {
      name: "Moonrise",
      icon: "skills/tsukishimaS3.png",
      tags: [
        "Passive", "Block Power Up",
      ],
      description: "While Kei Tsukishima is present, increases Block power of your side's front row players by 8/10/12% of their Block stat."
    },
    {
      name: "Kei's Retort",
      icon: "skills/tsukishimaS4.png",
      tags: [
        "Ultimate", "Active", "Block", "Apply Debuff",
      ],
      description: "Kei Tsukishima performs a Block with 195/210/225/240/255% of his Block stat as power. Applies the 'Enrage' debuff to the opposing spiker (reducing their Power/Quick Attack stats by 10%)."
    },
  ]
},
{
  id: "kei(Practice)",
  name: "Kei Tsukishima (Practice)",
  img: "img-char/tsukishimaSR.png",
  card_g: "img-global/tsukishimaSR.png",
  card_j: "img-japan/tsukishimaSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "SR"],
  skills: [
    {
      name: "Elevated Strike",
      icon: "skills/tsukishima2S1.png",
      tags: [
        "Active", "Quick Attack",
      ],
      description: "Kei Tsukishima (Practice) performs a Quick Spike with 110/120/140% of Quick Attack stat as power."
    },
    {
      name: "Block Tactician",
      icon: "skills/tsukishima2S2.png",
      tags: [
        "Passive",
      ],
      description: "Increases Kei Tsukishima (Practice)'s Block stat by 6/7.5/9%; when he performs a Block, increases his Reflex by 5%."
    },
    {
      name: "Quick Attack Strategy",
      icon: "skills/tsukishima2S3.png",
      tags: [
        "Passive",
      ],
      description: "Increases Kei Tsukishima (Practice)'s Quick Attack stat by 6/7.5/9%; when he performs a Quick Spike, increases his Awareness by 5%."
    },
    {
      name: "Delayed Block",
      icon: "skills/tsukishima2S4.png",
      tags: [
        "Ultimate", "Active", "Block",
      ],
      description: "Kei Tsukishima (Practice) performs a Block with 180/195/210/225/240% of Block stat as power."
    },
  ]
},
{
  id: "tadashi",
  name: "Tadashi Yamaguchi",
  img: "img-char/tadashiSR.png",
  card_g: "img-global/tadashiSR.png",
  card_j: "img-japan/tadashiSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "SR"],
  skills: [
    {
      name: "Serve Stability",
      icon: "skills/tadashiS1.png",
      tags: [
        "Passive", "Manual Serve",
      ],
      description: "When Tadashi Yamaguchi’s Serve results in a PERFECT, increases its power by 20/25/30% of his Serve stat. When it results in a BAD, reduces its power by 20/25/30% of his Serve stat."
    },
    {
      name: "Spotlight Serve",
      icon: "skills/tadashiS2.png",
      tags: [
        "Passive", "Awareness Up",
      ],
      description: "Increases the power of Tadashi Yamaguchi's 1st Serve in each match by 15/30/45% of his Serve stat. Also increases his Awareness by 15% for that serve."
    },
    {
      name: "Point by Point",
      icon: "skills/tadashiS3.png",
      tags: [
        "Passive",
      ],
      description: "Increases Tadashi Yamaguchi's Serve stat by 10/12/14%."
    },
    {
      name: "Defiant Float",
      icon: "skills/tadashiS4.png",
      tags: [
        "Ultimate", "Passive", "Serve",
      ],
      description: "Tadashi Yamaguchi performs a Jump Float Serve with 210/225/240/225/270% of his Serve stat as power. If your side is behind, this serve's power is additionally increased by 25% of his Serve stat."
    },
  ]
},
{
  id: "tadashi(Practice)",
  name: "Tadashi Yamaguchi (Practice)",
  img: "img-char/tadashiR.png",
  card_g: "img-global/tadashiR.png",
  card_j: "img-japan/tadashiR.png",
  school: "Karasuno",
  rarity: "R",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "R"],
  skills: [
    {
      name: "Practice Mastery",
      icon: "skills/tadashi2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Tadashi Yamaguchi (Practice)'s Serve stat by 7/9%."
    },
    {
      name: "Hard Work",
      icon: "skills/tadashi2S2.png",
      tags: [
        "Passive",
      ],
      description: "Increases Tadashi Yamaguchi (Practice)'s Receive stat by 7/9%."
    },
    {
      name: "Will and Power",
      icon: "skills/tadashi2S3.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Tadashi Yamaguchi (Practice) performs a Receive with 120/130% of Receive stat as power."
    },
    {
      name: "Signature Serve",
      icon: "skills/tadashi2S4.png",
      tags: [
        "Ultimate", "Passive", "Serve",
      ],
      description: "Tadashi Yamaguchi (Practice) performs a Jump Float Serve with 200/210/220% of Serve stat as power."
    },
  ]
},
{
  id: "chikara",
  name: "Chikara Ennoshita",
  img: "img-char/chikaraSR.png",
  card_g: "img-global/chikaraSR.png",
  card_j: "img-japan/chikaraSR.png",
  school: "Karasuno",
  rarity: "SR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "SR"],
  skills: [
    {
      name: "Forceful Spike",
      icon: "skills/chikaraS1.png",
      tags: [
        "Active", "Power Attack",
      ],
      description: "Chikara Ennoshita performs a Power Spike with 120/135/150% of his Power Attack stat."
    },
    {
      name: "Carry the Torch",
      icon: "skills/chikaraS2.png",
      tags: [
        "Passive", "Chance to Trigger",
      ],
      description: "While Chikara Ennoshita is present, at the end of each start of each turn, there is a 30/45/60% chance to remove 1 debuff(s) from players on your side."
    },
    {
      name: "Rising Leader",
      icon: "skills/chikaraS3.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "While Chikara Ennoshita is on the court, when your side loses a point, the next spike from your side gains additional power equal to 8/10/12% of the spiker’s Power/Quick Attack stat. If the spike is a Power Spike skill, its power increases further by 6% of the spiker’s Power Attack stat."
    },
    {
      name: "Fighting Spirit",
      icon: "skills/chikaraS4.png",
      tags: [
        "Ultimate", "Passive", "Receive",
      ],
      description: "Chikara Ennoshita performs a Receive with 220/235/250/265/280% of his Receive stat."
    },
  ]
},
{
  id: "chikara(Practice)",
  name: "Chikara Ennoshita (Practice)",
  img: "img-char/chikaraR.png",
  card_g: "img-global/chikaraR.png",
  card_j: "img-japan/chikaraR.png",
  school: "Karasuno",
  rarity: "R",
  position: "Wing spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "R"],
  skills: [
    {
      name: "Face Your Fears",
      icon: "skills/chikara2S1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Chikara Ennoshita (Practice)'s Power Attack stat by 7/9%."
    },
    {
      name: "Skilled Spike",
      icon: "skills/chikara2S2.png",
      tags: [
        "Active", "Power Attack",
      ],
      description: "Chikara Ennoshita (Practice) performs a Power Spike with 120/130% of Power Attack stat as power."
    },
    {
      name: "Defender's Duty",
      icon: "skills/chikara2S3.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Increases Chikara Ennoshita (Practice)'s Receive stat by 7/9%."
    },
    {
      name: "Tenacious Successor",
      icon: "skills/chikara2S4.png",
      tags: [
        "Ultimate", "Passive", "Receive",
      ],
      description: "Chikara Ennoshita (Practice) performs a Receive with 200/210/220% of Receive stat as power."
    },
  ]
},
{
  id: "hisashi",
  name: "Hisashi Kinoshita",
  img: "img-char/kinoshitaR.png",
  card_g: "img-global/hisashiR.png",
  card_j: "img-japan/hisashiR.png",
  school: "Karasuno",
  rarity: "R",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Karasuno", "R"],
  skills: [
    {
      name: "Sharp Focus",
      icon: "skills/hisashiS1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Hisashi Kinoshita's Serve stat by 7/9%."
    },
    {
      name: "Resolute Receive",
      icon: "skills/hisashiS2.png",
      tags: [
        "Passive",
      ],
      description: "Increases Hisashi Kinoshita's Receive stat by 7/9%."
    },
    {
      name: "Clutch Arrival",
      icon: "skills/hisashiS3.png",
      tags: [
        "Passive", "Team Morale",
      ],
      description: "When Hisashi Kinoshita enters the court for the 1st time in each match, increases your Team Morale by 5/7."
    },
    {
      name: "Tension Serve",
      icon: "skills/hisashiS4.png",
      tags: [
        "Ultimate", "Passive", "Serve",
      ],
      description: "Hisashi Kinoshita performs a Jump Float Serve with 200/210/220% of his Serve stat."
    },
  ]
},
{
  id: "kazuhito",
  name: "Kazuhito Narita",
  img: "img-char/naritaR.png",
  card_g: "img-global/kazuhitoR.png",
  card_j: "img-japan/kazuhitoR.png",
  school: "Karasuno",
  rarity: "R",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Karasuno", "R"],
  skills: [
    {
      name: "Basic Serve",
      icon: "skills/kazuhitoS1.png",
      tags: [
        "Passive", "Serve",
      ],
      description: "Increases Kazuhito Narita's Serve stat by 7/9%."
    },
    {
      name: "Basic Receive",
      icon: "skills/kazuhitoS2.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Increases Kazuhito Narita's Receive stat by 7/9%."
    },
    {
      name: "Basic Blocking",
      icon: "skills/kazuhitoS3.png",
      tags: [
        "Passive", "Block",
      ],
      description: "Increases Kazuhito Narita's Block stat by 7/9%."
    },
    {
      name: "Hearty Spike",
      icon: "skills/kazuhitoS4.png",
      tags: [
        "Ultimate", "Active", "Quick Attack",
      ],
      description: "Kazuhito Narita performs a Quick Spike with 200/210/220% of Quick Attack stat as power."
    },
  ]
},
{
  id: "toru(Practice)",
  name: "Toru Oikawa (Practice)",
  img: "img-char/oikawaSSR.png",
  card_g: "img-global/oikawaSSR.png",
  card_j: "img-japan/oikawaSSR.png",
  school: "Aoba Johsai",
  rarity: "SSR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Aoba Johsai", "SSR"],
  skills: [
    {
      name: "Court Vision",
      icon: "skills/oikawa2S1.png",
      tags: [
        "Passive", "Received 'Attack Tempo'",
      ],
      description: "Increases Toru Oikawa (Practice)'s Set stat by 10/12/14%. When your players cast a Spike skill, they gain 1 stack(s) of 'Attack Tempo'. Each stack increases your players’ Awareness by 1%, up to 10 stacks."
    },
    {
      name: "Game Changer",
      icon: "skills/oikawa2S2.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "While Toru Oikawa (Practice) is on the court, at the start of each turn, if your side is behind, increases all basic stats of your players by 6/9/12%, lasting for 8 net crossings."
    },
    {
      name: "Control Tower",
      icon: "skills/oikawa2S3.png",
      tags: [
        "Passive", "Awareness Up",
      ],
      description: "While Toru Oikawa (Practice) is on the court, increases your players’ Awareness by 6/9/12%. Each stack of 'Attack Tempo' provides an additional 1% Awareness."
    },
    {
      name: "Double-Edged Serve",
      icon: "skills/oikawa2S4.png",
      tags: [
        "Ultimate", "Passive", "Serve", "Awareness Up",
      ],
      description: "Toru Oikawa (Practice) performs a Power Jump Serve with 240/255/270/285/300% of his Serve stat. For this Serve, his Awareness increases by 15%. This Serve has a 5% chance to fail."
    },
  ]
},
{
  id: "iwaizumi",
  name: "Hajime Iwaizumi",
  img: "img-char/iwaizumiSSR.png",
  card_g: "img-global/iwaizumiSSR.png",
  card_j: "img-japan/iwaizumiSSR.png",
  school: "Aoba Johsai",
  rarity: "SSR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Aoba Johsai", "SSR"],
  skills: [
    {
      name: "Ace's Strength",
      icon: "skills/iwaizumiS1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Hajime Iwaizumi's Awareness by 5/5/8% and Strength by 10/15/15%."
    },
    {
      name: "Focused Defense",
      icon: "skills/iwaizumiS2.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Hajime Iwaizumi performs a Receive with 120/135/150% of Receive stat as power."
    },
    {
      name: "Vice-Captain's Rally",
      icon: "skills/iwaizumiS3.png",
      tags: [
        "Passive",
      ],
      description: "While Hajime Iwaizumi is present, increases Strength of players on your side by 6/8.5/11%."
    },
    {
      name: "Head-to-Head",
      icon: "skills/iwaizumiS4.png",
      tags: [
        "Ultimate", "Active", "Power Attack", "Critical Power Up",
      ],
      description: "Hajime Iwaizumi performs a Power Spike with 240/255/270/285/300% of Power Attack stat as power; when this spike achieves Critical result, increases its power by 15% of Power Attack stat."
    },
  ]
},
{
  id: "iwaizumi(Practice)",
  name: "Hajime Iwaizumi (Practice)",
  img: "img-char/iwaizumiSR.png",
  card_g: "img-global/iwaizumiSR.png",
  card_j: "img-japan/iwaizumiSR.png",
  school: "Aoba Johsai",
  rarity: "SSR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Burning Spike",
      icon: "skills/iwaizumi2S1.png",
      tags: [
        "Passive", "Power Attack",
      ],
      description: "Increases Hajime Iwaizumi (Practice)'s Power Attack stat by 10/12/14%."
    },
    {
      name: "Calm Receive",
      icon: "skills/iwaizumi2S2.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Hajime Iwaizumi (Practice) performs a Receive with 115/130/145% of Receive stat as power; for this Receive, Iwaizumi (Practice)'s Spirit increases by 8%."
    },
    {
      name: "Rising Spirit",
      icon: "skills/iwaizumi2S3.png",
      tags: [
        "Passive",
      ],
      description: "Increases Hajime Iwaizumi (Practice)'s Awareness and Reflex by 5/7.5/10%."
    },
    {
      name: "Unstoppable Spike",
      icon: "skills/iwaizumi2S4.png",
      tags: [
        "Ultimate", "Active", "Power Attack",
      ],
      description: "Hajime Iwaizumi (Practice) performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
    },
  ]
},
{
  id: "matsukawa",
  name: "Issei Matsukawa",
  img: "img-char/matsukawaSR.png",
  card_g: "img-global/matsukawaSR.png",
  card_j: "img-japan/matsukawaSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Perfect Touch",
      icon: "skills/matsukawaS1.png",
      tags: [
        "Passive", "Counter Quick Attack",
      ],
      description: "When Issei Matsukawa blocks an opponent's Quick Spike, increases blocking power by 11/13/15% of Block stat."
    },
    {
      name: "Overwhelming Spike",
      icon: "skills/matsukawaS2.png",
      tags: [
        "Active", "Quick Attack",
      ],
      description: "Issei Matsukawa performs a Quick Spike with 120/135/150% of Quick Attack stat as power."
    },
    {
      name: "Crushing Block",
      icon: "skills/matsukawaS3.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "Increases Issei Matsukawa's Block stat by 8/10.5/13%; when Matsukawa performs a PERFECT Block, increases your side's next spiker's Awareness by 4%."
    },
    {
      name: "Unbreakable Block",
      icon: "skills/matsukawaS4.png",
      tags: [
        "Ultimate", "Active", "Block",
      ],
      description: "Issei Matsukawa performs a Block with 180/195/210/225/240% of Block stat as power."
    },
  ]
},
{
  id: "hanamaki",
  name: "Takahiro Hanamaki",
  img: "img-char/hanamakiSR.png",
  card_g: "img-global/hanamakiSR.png",
  card_j: "img-japan/hanamakiSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Reliable Wing Spiker",
      icon: "skills/hanamakiS1.png",
      tags: [
        "Passive", "Counter Quick Attack",
      ],
      description: "Increases Takahiro Hanamaki's Awareness by 8/10/12%; when his Power Spike is Critical, reduces blocking players' Block stat by 5%."
    },
    {
      name: "Precise Spike",
      icon: "skills/hanamakiS2.png",
      tags: [
        "Active", "Power Attack", "Received 'Attack Tempo'",
      ],
      description: "Takahiro Hanamaki performs a Power Spike with 115/130/145% of Power Attack stat as power; receives 1 stack(s) of 'Attack Tempo', each stack increases the Awareness of players on your side by 1%, up to 10 stacks."
    },
    {
      name: "Perfect Defense",
      icon: "skills/hanamakiS3.png",
      tags: [
        "Passive", "Counter Quick Attack",
      ],
      description: "Increases Takahiro Hanamaki's Receive stat by 8/10/12%; when he receives an opponent's Quick Spike, increases receive power by 4% of Receive stat."
    },
    {
      name: "Perfect Read",
      icon: "skills/hanamakiS4.png",
      tags: [
        "Ultimate", "Passive", "Receive",
      ],
      description: "Takahiro Hanamaki performs a Receive with 220/235/250/265/280% of Receive stat as power."
    },
  ]
},
{
  id: "yahaba",
  name: "Shigeru Yahaba",
  img: "img-char/yahabaSR.png",
  card_g: "img-global/yahabaSR.png",
  card_j: "img-japan/yahabaSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "All-Out Set",
      icon: "skills/yahabaS1.png",
      tags: [
        "Passive", "Set",
      ],
      description: "Shigeru Yahaba performs a Set with 120/135/150% of Set stat as power."
    },
    {
      name: "Developing Setter",
      icon: "skills/yahabaS2.png",
      tags: [
        "Passive",
      ],
      description: "Increases Shigeru Yahaba's Serve and Set stats by 8/10/12%."
    },
    {
      name: "Pride Defense",
      icon: "skills/yahabaS3.png",
      tags: [
        "Passive", "Enhance Team",
      ],
      description: "Increases Shigeru Yahaba's Set stat by 4/6/8%; while Yahaba is present, increases Awareness and Reflex of players on your side by 8%."
    },
    {
      name: "Will to Score",
      icon: "skills/yahabaS4.png",
      tags: [
        "Ultimate", "Passive", "Serve",
      ],
      description: "Shigeru Yahaba performs a Jump Serve with 220/235/250/265/280% of Serve stat as power."
    },
  ]
},
{
  id: "watari",
  name: "Shinji Watari",
  img: "img-char/watariSR.png",
  card_g: "img-global/watariSR.png",
  card_j: "img-japan/watariSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Libero",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Libero", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Complete Defense",
      icon: "skills/watariS1.png",
      tags: [
        "Passive",
      ],
      description: "Increases Shinji Watari's Save and Receive stats by 8/10/12%."
    },
    {
      name: "Skilled Save",
      icon: "skills/watariS2.png",
      tags: [
        "Passive", "Save",
      ],
      description: "Shinji Watari performs a Save with 120/135/150% of Save stat as power."
    },
    {
      name: "Seamless Reception",
      icon: "skills/watariS3.png",
      tags: [
        "Passive", "Counter Quick Attack",
      ],
      description: "When receiving an opponent's Quick Spike, increases Shinji Watari's receive power by 20/35/50% of Receive stat."
    },
    {
      name: "Consistent Reception",
      icon: "skills/watariS4.png",
      tags: [
        "Ultimate", "Passive", "Receive", "Enhance Team",
      ],
      description: "Shinji Watari performs a Receive with 215/230/245/260/275% of Receive stat as power; when this Receive achieves a PERFECT result, increases your side's players' Strength by 10% when performing Power Spikes for 1 turn."
    },
  ]
},
{
  id: "kindaichi",
  name: "Yutaro Kindaichi",
  img: "img-char/kindaichiSR.png",
  card_g: "img-global/kindaichiSR.png",
  card_j: "img-japan/kindaichiSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Overhead Spike",
      icon: "skills/kindaichiS1.png",
      tags: [
        "Passive", "Counter Block",
      ],
      description: "When Yutaro Kindaichi performs a Quick Spike, reduces the opponent blocker's Block by 10/12/14% of their Block stat."
    },
    {
      name: "Elevated Block",
      icon: "skills/kindaichiS2.png",
      tags: [
        "Active", "Block",
      ],
      description: "Yutaro Kindaichi performs a Block with 105/120/135% of his Block stat."
    },
    {
      name: "Decisive Hit",
      icon: "skills/kindaichiS3.png",
      tags: [
        "Passive",
      ],
      description: "Increases Yutaro Kindaichi's Awareness by 8/10/12% and Strength by 8/10/12%."
    },
    {
      name: "Power C-Quick",
      icon: "skills/kindaichiS4.png",
      tags: [
        "Ultimate", "Active", "Quick Attack",
      ],
      description: "Yutaro Kindaichi performs a Quick Spike with 220/235/250/265/280% of Quick Attack stat as power."
    },
  ]
},
{
  id: "kunimi",
  name: "Akira Kunimi",
  img: "img-char/kunimiSR.png",
  card_g: "img-global/kunimiSR.png",
  card_j: "img-japan/kunimiSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Opposite Hitter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Efficient Spike",
      icon: "skills/kunimiS1.png",
      tags: [
        "Passive", "Power Attack",
      ],
      description: "Increases Akira Kunimi's Power Attack stat by 10/12/14%."
    },
    {
      name: "Effortless Reception",
      icon: "skills/kunimiS2.png",
      tags: [
        "Passive", "Receive",
      ],
      description: "Akira Kunimi performs a Receive with 120/135/150% of Receive stat as power."
    },
    {
      name: "Power Saving Mode",
      icon: "skills/kunimiS3.png",
      tags: [
        "Passive", "Stamina",
      ],
      description: "Reduces Akira Kunimi's Stamina consumption by 15/20/25%."
    },
    {
      name: "Focus Mode",
      icon: "skills/kunimiS4.png",
      tags: [
        "Ultimate", "Active", "Power Attack",
      ],
      description: "Akira Kunimi performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
    },
  ]
},
{
  id: "kyotani",
  name: "Kentaro Kyotani",
  img: "img-char/kyotaniSSR.png",
  card_g: "img-global/kyotaniSSR.png",
  card_j: "img-japan/kyotaniSSR.png",
  school: "Aoba Johsai",
  rarity: "SSR",
  position: "Opposite Hitter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Aoba Johsai", "SSR"],
  skills: [
    {
      name: "Fierce Attack",
      icon: "skills/kyotaniS1.png",
      tags: [
        "Passive", "Awareness", "Power Attack",
      ],
      description: "Increases Kentaro Kyotani's Awareness by 8/10/12% and Power Attack stat by 5/6/7%."
    },
    {
      name: "Mad Dog Serve",
      icon: "skills/kyotaniS2.png",
      tags: [
        "Passive", "Serve", "Awareness Up",
      ],
      description: "Kentaro Kyotani performs a Serve with 130/145/160% of his Serve stat. For this Serve, his Awareness increases by 15%, with a fixed 10% chance to fail."
    },
    {
      name: "Strength Burst",
      icon: "skills/kyotaniS3.png",
      tags: [
        "Passive", "Strength",
      ],
      description: "Increases Kentaro Kyotani's Strength by 18/22/26%."
    },
    {
      name: "Mad Dog's Fang",
      icon: "skills/kyotaniS4.png",
      tags: [
        "Ultimate", "Active", "Power Attack", "Reduce opponent's Stamina",
      ],
      description: "Kentaro Kyotani performs a Power Spike with 210/225/240/255/270% of his Power Attack stat, reducing the Stamina of the opponent’s blocking and receiving players by 10."
    },
  ]
},
{
  id: "kyotani(Practice)",
  name: "Kentaro Kyotani (Practice)",
  img: "img-char/kyotaniSR.png",
  card_g: "img-global/kyotaniSR.png",
  card_j: "img-japan/kyotaniSR.png",
  school: "Aoba Johsai",
  rarity: "SR",
  position: "Opposite Hitter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Aoba Johsai", "SR"],
  skills: [
    {
      name: "Predator Serve",
      icon: "skills/kyotani2S1.png",
      tags: [
        "Passive", "Serve"
      ],
      description: "Kentaro Kyotani (Practice) performs a Jump Serve with 120/135/150% of Serve stat as power."
    },
    {
      name: "Explosive Strength",
      icon: "skills/kyotani2S2.png",
      tags: [
        "Passive", "Stat Bonus"
      ],
      description: "When Kentaro Kyotani (Practice) performs a Power Spike, increases his Strength by 15/18/21% for this Spike."
    },
    {
      name: "Revving Up",
      icon: "skills/kyotani2S3.png",
      tags: [
        "Passive", "Stat Bonus"
      ],
      description: "Increases Kentaro Kyotani (Practice)'s Power Attack stat by 8/10/12%; when he performs a Power Spike, receives 1 stack of 'Heat Up', each stack increases Power Attack stat by 1%, up to 4 stacks."
    },
    {
      name: "Rampaging Offense",
      icon: "skills/kyotani2S4.png",
      tags: [
        "Ultimate", "Active", "Power Attack"
      ],
      description: "Kentaro Kyotani (Practice) performs a Power Spike with 220/235/250/265/280% of Power Attack stat as power."
    }
  ]
},
{
  id: "kenma",
  name: "Kenma Kozume",
  img: "img-char/kenmaSSR.png",
  card_g: "img-global/kenmaSSR.png",
  card_j: "img-japan/kenmaSSR.png",
  school: "Nekoma",
  rarity: "SSR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Nekoma", "SSR"]
},
{
  id: "kenma(Practice)",
  name: "Kenma Kozume (Practice)",
  img: "img-char/kenmaSR.png",
  card_g: "img-global/kenmaSR.png",
  card_j: "img-japan/kenmaSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Nekoma", "SR"]
},
{
  id: "kuroo",
  name: "Tetsuro Kuroo",
  img: "img-char/kurooUR.png",
    card_g: "img-global/kurooUR.png",
  card_j: "img-japan/kurooUR.png",
  school: "Nekoma",
  rarity: "UR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Nekoma", "UR"]
},
{
  id: "kuroo(Practice)",
  name: "Tetsuro Kuroo (Practice)",
  img: "img-char/kurooSSR.png",
  card_g: "img-global/kurooSSR.png",
  card_j: "img-japan/kurooSSR.png",
  school: "Nekoma",
  rarity: "SSR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Nekoma", "SSR"]
},
{
  id: "yaku(Practice)",
  name: "Morisuke Yaku (Practice)",
  img: "img-char/yakuSR.png",
  card_g: "img-global/yakuSR.png",
  card_j: "img-japan/yakuSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Libero",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Libero", "Nekoma", "SR"]
},
{
  id: "lev",
  name: "Lev Haiba",
  img: "img-char/levSSR.png",
  card_g: "img-global/levSSR.png",
  card_j: "img-japan/levSSR.png",
  school: "Nekoma",
  rarity: "SSR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Nekoma", "SSR"]
},
{
  id: "lev(Practice)",
  name: "Lev Haiba (Practice)",
  img: "img-char/levSR.png",
  card_g: "img-global/levSR.png",
  card_j: "img-japan/levSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Middle Blocker",
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
      Serve: "TBD",
      Quick_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Middle Blocker", "Nekoma", "SR"]
},
{
  id: "yamamoto",
  name: "Taketora Yamamoto",
  img: "img-char/yamamotoSR.png",
  card_g: "img-global/yamamotoSR.png",
  card_j: "img-japan/yamamotoSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Wing Spiker",
  stats: {
    lvl1: {
      Serve: 85,
      Power_Attack: 98,
      Set: 80,
      Receive: 94,
      Block: 89,
      Save: 80
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Nekoma", "SR"]
},
{
  id: "kai",
  name: "Nobuyuki Kai",
  img: "img-char/kaiSR.png",
  card_g: "img-global/kaiSR.png",
  card_j: "img-japan/kaiSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Opposite Hitter",
  stats: {
    lvl1: {
      Serve: 84,
      Power_Attack: 89,
      Set: 80,
      Receive: 98,
      Block: 89,
      Save: 85
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Nekoma", "SR"]
},
{
  id: "fukunaga",
  name: "Shohei Fukunaga",
  img: "img-char/fukunagaSR.png",
      card_g: "img-global/fukunagaSR.png",
  card_j: "img-japan/fukunagaSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Wing Spiker",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Nekoma", "SR"]
},
{
  id: "inuoka",
  name: "So Inuoka",
  img: "img-char/inuokaSR.png",
  card_g: "img-global/inuokaSR.png",
  card_j: "img-japan/inuokaSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 86,
      Quick_Attack: 94,
      Set: 82,
      Receive: 84,
      Block: 98,
      Save: 80
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
  tags: ["Middle Blocker", "Nekoma", "SR"]
},
{
  id: "teshiro",
  name: "Tamahiko Teshiro",
  img: "img-char/teshiroSR.png",
  card_g: "img-global/teshiroSR.png",
  card_j: "img-japan/teshiroSR.png",
  school: "Nekoma",
  rarity: "SR",
  position: "Setter",
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
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Nekoma", "SR"]
},
{
  id: "aone",
  name: "Takanobu Aone",
  img: "img-char/aoneSSR.png",
  card_g: "img-global/aoneSSR.png",
  card_j: "img-japan/aoneSSR.png",
  school: "Date Kogyo",
  rarity: "SSR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 107,
      Quick_Attack: 115,
      Set: 100,
      Receive: 103,
      Block: 122,
      Save: 97
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
  tags: ["Middle Blocker", "Date Kogyo", "SSR"]
},
{
  id: "aone(Practice)",
  name: "Takanobu Aone (Practice)",
  img: "img-char/aoneSR.png",
  card_g: "img-global/aoneSR.png",
  card_j: "img-japan/aoneSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 87,
      Quick_Attack: 94,
      Set: 82,
      Receive: 84,
      Block: 99,
      Save: 79
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
  tags: ["Middle Blocker", "Date Kogyo", "SR"]
},
{
  id: "kenji",
  name: "Kenji Futakuchi",
  img: "img-char/futakuchiSSR.png",
  card_g: "img-global/kenjiSSR.png",
  card_j: "img-japan/kenjiSSR.png",
  school: "Date Kogyo",
  rarity: "SSR",
  position: "Wing Spiker",
  stats: {
    lvl1: {
      Serve: 107,
      Power_Attack: 115,
      Set: 100,
      Receive: 104,
      Block: 121,
      Save: 98
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Date Kogyo", "SSR"]
},
{
  id: "kenji(Practice)",
  name: "Kenji Futakuchi (Practice)",
  img: "img-char/futakuchiSR.png",
  card_g: "img-global/kenjiSR.png",
  card_j: "img-japan/kenjiSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Wing Spiker",
  stats: {
    lvl1: {
      Serve: 87,
      Power_Attack: 94,
      Set: 82,
      Receive: 85,
      Block: 99,
      Save: 80
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Date Kogyo", "SR"]
},
{
  id: "Kanji",
  name: "Kanji Koganegawa",
  img: "img-char/kanjiSSR.png",
  card_g: "img-global/kanjiSSR.png",
  card_j: "img-japan/kanjiSSR.png",
  school: "Date Kogyo",
  rarity: "SSR",
  position: "Setter",
  stats: {
    lvl1: {
      Serve: 103,
      Power_Attack: 115,
      Set: 121,
      Receive: 97,
      Block: 116,
      Save: 91
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Date Kogyo", "SSR"]
},
{
  id: "Kanji(Practice)",
  name: "Kanji Koganegawa (Practice)",
  img: "img-char/kanjiSR.png",
  card_g: "img-global/kanjiSR.png",
  card_j: "img-japan/kanjiSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Setter",
  stats: {
    lvl1: {
      Serve: 84,
      Power_Attack: 94,
      Set: 99,
      Receive: 79,
      Block: 94,
      Save: 74
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Date Kogyo", "SR"]
},
{
  id: "sakunami",
  name: "Kosuke Sakunami",
  img: "img-char/sakunamiR.png",
  card_g: "img-global/sakunamiR.png",
  card_j: "img-japan/sakunamiR.png",
  school: "Date Kogyo",
  rarity: "R",
  position: "Libero",
  stats: {
    lvl1: {
      Serve: 74,
      Power_Attack: 74,
      Set: 81,
      Receive: 90,
      Block: 72,
      Save: 86
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Libero", "Date Kogyo", "R"]
},
{
  id: "kamasaki",
  name: "Yasushi kamasaki",
  img: "img-char/kamasakiSR.png",
  card_g: "img-global/kamasakiSR.png",
  card_j: "img-japan/kamasakiSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 87,
      Quick_Attack: 94,
      Set: 81,
      Receive: 84,
      Block: 98,
      Save: 80
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
  tags: ["Middle Blocker", "Date Kogyo", "SR"]
},
{
  id: "moniwa",
  name: "Kaname Moniwa",
  img: "img-char/moniwaSR.png",
  card_g: "img-global/kanameSR.png",
  card_j: "img-japan/kanameSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Setter",
  stats: {
    lvl1: {
      Serve: 93,
      Power_Attack: 88,
      Set: 98,
      Receive: 79,
      Block: 89,
      Save: 75
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Setter", "Date Kogyo", "SR"]
},
{
  id: "sasaya",
  name: "Takehito Sasaya",
  img: "img-char/sasayaSSR.png",
  card_g: "img-global/takehitoSSR.png",
  card_j: "img-japan/takehitoSSR.png",
  school: "Date Kogyo",
  rarity: "SSR",
  position: "Opposite Hitter",
  stats: {
    lvl1: {
      Serve: 104,
      Power_Attack: 121,
      Set: 98,
      Receive: 115,
      Block: 110,
      Save: 99
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Date Kogyo", "SSR"]
},
{
  id: "sasaya(Practice)",
  name: "Takehito Sasaya (Practice)",
  img: "img-char/sasayaPractice.png",
  card_g: "img-global/takehitoSR.png",
  card_j: "img-japan/takehitoSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Opposite Hitter",
  stats: {
    lvl1: {
      Serve: 85,
      Power_Attack: 99,
      Set: 80,
      Receive: 94,
      Block: 90,
      Save: 81
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Date Kogyo", "SR"]
},
{
  id: "obara",
  name: "Yutaka Obara",
  img: "img-char/obaraSR.png",
  card_g: "img-global/yutakaSR.png",
  card_j: "img-japan/yutakaSR.png",
  school: "Date Kogyo",
  rarity: "SR",
  position: "Wing Spiker",
  stats: {
    lvl1: {
      Serve: 84,
      Power_Attack: 98,
      Set: 79,
      Receive: 93,
      Block: 89,
      Save: 79
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Date Kogyo", "SR"]
},
{
  id: "onagawa",
  name: "Taro Onagawa",
  img: "img-char/onagawaR.png",
  card_g: "img-global/taroR.png",
  card_j: "img-japan/taroR.png",
  school: "Date Kogyo",
  rarity: "R",
  position: "Opposite Hitter",
  stats: {
    lvl1: {
      Serve: 77,
      Power_Attack: 90,
      Set: 73,
      Receive: 86,
      Block: 82,
      Save: 73
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Date Kogyo", "R"]
},
{
  id: "fukiage",
  name: "Jingo Fukiage",
  img: "img-char/fukiageR.png",
  card_g: "img-global/jingoR.png",
  card_j: "img-japan/jingoR.png",
  school: "Date Kogyo",
  rarity: "R",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 77,
      Quick_Attack: 90,
      Set: 73,
      Receive: 77,
      Block: 82,
      Save: 81
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
  tags: ["Middle Blocker", "Date Kogyo", "R"]
},
{
  id: "ushijima",
  name: "Wakatoshi Ushijima",
  img: "img-char/ushijimaUR.png",
  card_g: "img-global/ushijimaUR.png",
  card_j: "img-japan/ushijimaUR.png",
  school: "Shiratorizawa",
  rarity: "UR",
  position: "Opposite Hitter",
  stats: {
    lvl1: {
      Serve: 134,
      Power_Attack: 140,
      Set: 112,
      Receive: 126,
      Block: 120,
      Save: 112
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Opposite Hitter", "Shiratorizawa", "UR"]
},
{
  id: "tendo",
  name: "Satori Tendo",
  img: "img-char/tendoSSR.png",
  card_g: "img-global/tendoSSR.png",
  card_j: "img-japan/tendoSSR.png",
  school: "Shiratorizawa",
  rarity: "SSR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 106,
      Quick_Attack: 115,
      Set: 100,
      Receive: 103,
      Block: 122,
      Save: 96
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
  tags: ["Middle Blocker", "Shiratorizawa", "SSR"]
},
{
  id: "goshiki",
  name: "Tsutomu Goshiki",
  img: "img-char/goshikiSSR.png",
  card_g: "img-global/goshikiSSR.png",
  card_j: "img-japan/goshikiSSR.png",
  school: "Shiratorizawa",
  rarity: "SSR",
  position: "Wing Spiker",
  stats: {
    lvl1: {
      Serve: 104,
      Power_Attack: 121,
      Set: 98,
      Receive: 115,
      Block: 109,
      Save: 98
    },
    max: {
      Serve: "TBD",
      Power_Attack: "TBD",
      Set: "TBD",
      Receive: "TBD",
      Block: "TBD",
      Save: "TBD"
    },
  },
  tags: ["Wing Spiker", "Shiratorizawa", "SSR"]
},
{
  id: "kawanishi",
  name: "Taichi Kawanishi",
  img: "img-char/kawanishiSR.png",
  card_g: "img-global/kawanishiSR.png",
  card_j: "img-japan/kawanishiSR.png",
  school: "Shiratorizawa",
  rarity: "SR",
  position: "Middle Blocker",
  stats: {
    lvl1: {
      Serve: 87,
      Quick_Attack: 94,
      Set: 82,
      Receive: 84,
      Block: 99,
      Save: 79
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
  tags: ["Middle Blocker", "Shiratorizawa", "SR"]
},]