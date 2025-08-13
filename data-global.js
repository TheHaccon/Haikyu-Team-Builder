const characters = [
   { name: "Tanaka SSR", role: "WS", img: "img-global/tanakaSSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "Kiyoko's Knights"] },
   { name: "Nishinoya SSR", role: "L", img: "img-global/nishinoyaSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "Kiyoko's Knights"] },
   { name: "Chikara SR", role: "WS", img: "img-global/chikaraSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "KARASUNO's Pillar"] },
   { name: "Kageyama SSR", role: "S", img: "img-global/tobioSSR.png", school: "Karasuno", bonds: [] },
];

const synergyDescriptions = {
    "Karasuno": "Increases ALL players’ Power Attack and Quick Attack stats by 10%",
    "Nekoma": "Increases ALL players’ Receive stat by 15%",
    "Dateko": "Increases ALL players’ Block stat by 15%",
    "Aoba Johsai": "Increases ALL players’ Power Attack stat by 15%",
    "Shiratorizawa": "Increases ALL players’ Awareness and Strength stats by 10%",
    "Fukurodani": "Team Morale increases by 20",
    "Inarizaki": "Increases ALL players’ Strength and Defense stats by 5%",
    "Eccentric Duo": "Increases Hinata and Kageyama’s quick attack power and Awareness.",
    "Karasuno Geniuses": "Increases Nishinoya SP’s reflex and Receive. When Nishinoya uses his special move, Kageyama UR gains one stack of Competitive Spirit*. If his special is perfect, the first spike (Power or Quick Attack) after that play is increased by 20% of the attacker’s power.",
    "Cherry Blossom Viewing": "Increases Kenma SP’s Awareness. Increases Hinata SP’s Quick Attack if it is a perfect play.",
    "Sun vs Moon": "No info available.",
    "After School": "Increases Nishinoya SP’s reflex; further increased when stamina is low.",
    "Guardian God and Wing Spiker": "When Nishinoya SSR or Azumane SSR use a skill, both increase their Attack Technique and Defense Technique.",
    "Kiyoko Squad": "When scoring, increases Team Morale.",
    "Brain and Commander": "When Kenma SSR makes a pass, Kuro UR performs a strengthened Quick Attack.",
    "Educational Guidance": "Increases Yaku SSR’s Receive and Lev SSR’s Quick Attack.",
    "Swimming": "(Activates with 3 players) Increases team morale. When active, increases allies’ reflex in double or triple blocks.",
    "The Silent and the Sarcastic": "Allows Aone SSR and Futakuchi SSR to use the Double Block skill.",
    "The New Captain and the Tall Rookie": "Increases the Block of players in the front row.",
    "Perfect Harmony": "When Oikawa UR makes a pass, Iwaizumi SSR spikes with increased Power Attack. Gains 2 stacks of Attack Rhythm*, each increasing team Awareness by 1%, max 10 stacks.",
    "The Pack": "Increases Power Attack of Iwaizumi SSR and Kentaro SSR.",
    "Besties for Life": "Increases Ushijima UR’s Power Attack and Tendo SSR’s Defense Technique.",
    "Absolute Champion and Steady Setter": "When Shirabu SSR makes a pass, Ushijima UR spikes with 10% more power.",
    "Shiratorizawa’s WS": "Increases Power Attack of ALL players present.",
    "Miracle Ace and Caring Setter": "Bokuto UR recovers from depression. When Akaashi SSR makes a pass and Bokuto UR spikes, increases that spike’s Power Attack by 20% and raises team morale by 15.",
    "Ace Miraculous and Caring Setter": "Increases Akaashi SP’s Passing. When morale is active, increases Bokuto SP’s Power Attack by 18% and Akaashi SP’s Passing by 5%.",
    "Twin Power": "When Atsumu UR passes and Osamu UR does a Minus Tempo Quick Attack, increases that play’s Quick Attack and Attack Technique by 15%. Cannot be blocked.",
    "Twin Heads": "Increases Osamu UR’s Attack Technique and Kita SSR’s stats. Atsumu gains Perfect Hit stacks, each increasing Passing by 2% (max 10). Kita SSR gains Receive stacks (max 3). Twins’ first Quick Attack per set is increased by Quick Attack × 12%.",
    "Longtime Friends": "Increases Hoshiumi UR’s stats and front-row players’ Block. Grants Hoshiumi UR and Hirugami UR a buff (no info).",
    "Top Spiker and Top Libero": "Sakusa UR increases Power Attack. Komori UR increases Receive. Increases allies’ Receive by 20%.",
};

const synergyMeta = {
  "Karasuno": { category: "school", activation: { scope: "starters", min: 4 } },
  "Fukurodani": { category: "school", activation: { scope: "starters", min: 4 } },
  "Inarizaki": { category: "school", activation: { scope: "starters", min: 4 } },
  "Itachiyama": { category: "school", activation: { scope: "starters", min: 4 } },

  "Karasuno's sophomore": { category: "stats", activation: { scope: "any", min: 3 } },
  "Kiyoko's Knights": { category: "deploytment", activation: { scope: "any", min: 2 } },
  "Twin Power": { category: "stats", activation: { scope: "any", min: 2 } },
  "Twin Heads": { category: "stats", activation: { scope: "any", min: 2 } },
  "Top Spiker and Top Libero": { category: "stats", activation: { scope: "any", min: 2 } }
};

const synergyPairs = {
    "Karasuno's sophomore": [["Tanaka", "Nishinoya","Chikara"]],
    "Kiyoko's Knights":[["Tanaka", "Nishinoya"]],
};

window.characters = characters;
window.synergyDescriptions = synergyDescriptions;
window.synergyMeta = synergyMeta;
window.synergyPairs = synergyPairs;