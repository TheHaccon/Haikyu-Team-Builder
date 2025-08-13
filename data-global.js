// template: { name: "", role: "", img: "img-global/", school: "", bonds: [] },
const characters = [
    { name: "Hinata SSR", role: "MB", img: "img-global/hinataSSR.png", school: "Karasuno", bonds: [] },
    { name: "Hinata SR", role: "MB", img: "img-global/hinataSR.png", school: "Karasuno", bonds: [] },
    { name: "Kageyama SSR", role: "S", img: "img-global/tobioSSR.png", school: "Karasuno", bonds: [] },
    { name: "Daichi SSR", role: "OP", img: "img-global/daichiSSR.png", school: "Karasuno", bonds: [] },
    { name: "Daichi SR", role: "OP", img: "img-global/daichiSR.png", school: "Karasuno", bonds: [] },
    { name: "Sugawara SR", role: "S", img: "img-global/sugawaraSR.png", school: "Karasuno", bonds: [] },
    { name: "Asahi SSR", role: "WS", img: "img-global/asahiSSR.png", school: "Karasuno", bonds: [] },
    { name: "Asahi SR", role: "WS", img: "img-global/asahiSR.png", school: "Karasuno", bonds: [] },
    { name: "Nishinoya SSR", role: "Li", img: "img-global/nishinoyaSSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "Kiyoko's Knights"] },
    { name: "Nishinoya SR", role: "Li", img: "img-global/nishinoyaSR.png", school: "Karasuno", bonds: [] },
    { name: "Tanaka SSR", role: "WS", img: "img-global/tanakaSSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "Kiyoko's Knights"] },
    { name: "Tanaka SR", role: "WS", img: "img-global/tanakaSR.png", school: "Karasuno", bonds: [] },
    { name: "Tsukishima SSR", role: "MB", img: "img-global/tsukishimaSSR.png", school: "Karasuno", bonds: [] },
    { name: "Tsukishima SR", role: "MB", img: "img-global/tsukishimaSR.png", school: "Karasuno", bonds: [] },
    { name: "Tadashi SR", role: "MB", img: "img-global/tadashiSR.png", school: "Karasuno", bonds: [] },
    { name: "Tadashi R", role: "MB", img: "img-global/tadashiR.png", school: "Karasuno", bonds: [] },
    { name: "Chikara SR", role: "WS", img: "img-global/chikaraSR.png", school: "Karasuno", bonds: ["Karasuno's sophomore", "KARASUNO's Pillar"] },
    { name: "Chikara R", role: "WS", img: "img-global/chikaraR.png", school: "Karasuno", bonds: [] },
    { name: "Hisashi R", role: "WS", img: "img-global/HisashiR.png", school: "Karasuno", bonds: [] },
    { name: "Kazuhito R", role: "WS", img: "img-global/kazuhitoR.png", school: "Karasuno", bonds: [] },
    { name: "Kageyama SR", role: "S", img: "img-global/tobioSR.png", school: "Kitagawa", bonds: [] },

    { name: "Oikawa SSR", role: "S", img: "img-global/oikawaSSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Iwaizumi SSR", role: "MB", img: "img-global/iwaizumiSSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Iwaizumi SR", role: "MB", img: "img-global/iwaizumiSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Matsukawa SR", role: "MB", img: "img-global/matsukawaSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Hanamaki SR", role: "WS", img: "img-global/hanamakiSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Yahaba SR", role: "S", img: "img-global/yahabaSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Watari SR", role: "Li", img: "img-global/watariSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Kindaichi SR", role: "MB", img: "img-global/kindaichiSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Kunimi SR", role: "OP", img: "img-global/kunimiSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Mad Dog SSR", role: "OP", img: "img-global/kyotaniSSR.png", school: "Aoba Johsai", bonds: [] },
    { name: "Mad Dog SR", role: "OP", img: "img-global/kyotaniSR.png", school: "Aoba Johsai", bonds: [] },

    { name: "Kenma SR", role: "S", img: "img-global/kenmaSR.png", school: "Nekoma", bonds: [] },
    { name: "Kuroo SSR", role: "MB", img: "img-global/kurooSSR.png", school: "Nekoma", bonds: [] },
    { name: "Yaku SR", role: "Li", img: "img-global/yakuSR.png", school: "Nekoma", bonds: [] },
    { name: "Lev SSR", role: "MB", img: "img-global/levSSR.png", school: "Nekoma", bonds: [] },
    { name: "Lev SR", role: "MB", img: "img-global/levSR.png", school: "Nekoma", bonds: [] },
    { name: "Yamamoto SR", role: "WS", img: "img-global/yamamotoSR.png", school: "Nekoma", bonds: [] },
    { name: "Kai SR", role: "OP", img: "img-global/kaiSR.png", school: "Nekoma", bonds: [] },
    { name: "Fukunaga SR", role: "WS", img: "img-global/fukunagaSR.png", school: "Nekoma", bonds: [] },
    { name: "Inuoka SR", role: "MB", img: "img-global/inuokaSR.png", school: "Nekoma", bonds: [] },
    { name: "Teshiro SR", role: "S", img: "img-global/teshiroSR.png", school: "Nekoma", bonds: [] },
    
    { name: "Aone SSR", role: "MB", img: "img-global/aoneSSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Aone SR", role: "MB", img: "img-global/aoneSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kenji SSR", role: "WS", img: "img-global/kenjiSSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kenji SR", role: "WS", img: "img-global/kenjiSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kanji SSR", role: "S", img: "img-global/kanjiSSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kanji SR", role: "S", img: "img-global/KanjiSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Sakunami R", role: "Li", img: "img-global/sakunamiR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kamasaki SR", role: "MB", img: "img-global/kamasakiSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Kaname SR", role: "S", img: "img-global/kanameSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Sasaya SSR", role: "OP", img: "img-global/takehitoSSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Sasaya SR", role: "OP", img: "img-global/takehitoSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Yutaka SR", role: "WS", img: "img-global/yutakaSR.png", school: "Date Kogyo", bonds: [] },
    { name: "Jingo R", role: "MB", img: "img-global/jingoR.png", school: "Date Kogyo", bonds: [] },
    { name: "Taro R", role: "OP", img: "img-global/taroR.png", school: "Date Kogyo", bonds: [] },

    { name: "Ushijima UR", role: "OP", img: "img-global/ushijimaUR.png", school: "Shiratorizawa", bonds: [] },
    { name: "Taichi SR", role: "MB", img: "img-global/kawanishiSR.png", school: "Shiratorizawa", bonds: [] },
];
// tempalte: "": "",
const synergyDescriptions = {
    "Karasuno": "Increases Power Attack and Quick Attack stats of all players present by 10%",
    "Shiratorizawa": "Increases Awareness and Strength of all players present by 10%",
    "Aoba Johsai": "Increases Power Attack stats of all players present by 15%",
    "Nekoma": "Increases Receive stat of all players present by 15%",
    "Date Kogyo": "Increases Block stat of all players present by 15%",
    "Kiyoko's Knights":"When scoring, increases Team morale by 6/7/8/9/10",
    "Karasuno's sophomore":"epic"
};

//Lowkey just have to remeber that when a bond is create I put it here
//template: "": { category: "school| stats|deployement", activation: { scope: "starters|any", min:  } },
const synergyMeta = {
    "Karasuno": { category: "school", activation: { scope: "starters", min: 4 } },
    "Shiratorizawa": { category: "school", activation: { scope: "starters", min: 4 } },
    "Aoba Johsai": { category: "school", activation: { scope: "starters", min: 4 } },
    "Nekoma": { category: "school", activation: { scope: "starters", min: 4 } },
    "Date Kogyo": { category: "school", activation: { scope: "starters", min: 4 } },

    "Karasuno's sophomore": { category: "stats", activation: { scope: "any", min: 3 } },
    "Kiyoko's Knights": { category: "deployment", activation: { scope: "any", min: 2 } },
};

//put what player create the bond
const synergyPairs = {
    "Karasuno's sophomore": [["Tanaka", "Nishinoya", "Chikara"]],
    "Kiyoko's Knights": [["Tanaka", "Nishinoya"]],
};

window.characters = characters;
window.synergyDescriptions = synergyDescriptions;
window.synergyMeta = synergyMeta;
window.synergyPairs = synergyPairs;