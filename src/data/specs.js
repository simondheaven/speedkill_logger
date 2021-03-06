
export const classSpecs = [
  {
    id: 1,
    enum: "BLOODDK",
    name: "Blood Death Knight",
    overallClass: "Death Knight",
    colour: "rgb(196,30,58)",
    secondColour: "rgb(145,1,1)",
    classImage: "/img/dk.png",
    specImage: "/img/talentframe-bg-deathknight-blood.png",
    greetingSound:"/sounds/dkgreeting.ogg",
    bossKillUrlSuffix: "&class=6#class-6-blood",
  },
  {
    id: 2,
    enum: "FROSTDK",
    name: "Frost Death Knight",
    overallClass: "Death Knight",
    colour: "rgb(115,10,10)",
    secondColour: "blue",
    classImage: "/img/dk.png",
    specImage: "/img/talentframe-bg-deathknight-frost.png",
    greetingSound:"/sounds/dkgreeting.ogg",
    bossKillUrlSuffix:"&class=6#class-6-frost"
  },
  {
    id: 3,
    enum: "UNHOLYDK",
    name: "Unholy Death Knight",
    overallClass: "Death Knight",
    colour: "rgb(196,30,58)",
    secondColour: "rgb(19, 163, 0)",
    classImage: "/img/dk.png",
    specImage: "/img/talentframe-bg-deathknight-unholy.png",
    greetingSound:"/sounds/dkgreeting.ogg",
    bossKillUrlSuffix:"&class=6#class-6-unholy"
  },
  {
    id: 4,
    enum: "BALANCEDRUID",
    name: "Balance Druid",
    overallClass: "Druid",
    colour: "rgb(255,124,10)",
    secondColour: "rgb(25, 53, 194)",
    classImage:"/img/druid.png",
    specImage:"/img/talentframe-bg-druid-balance.png",
    greetingSound:"/sounds/malfurion.ogg",
    bossKillUrlSuffix:"&class=11#class-6-balance",
  },
  {
    id: 5,
    enum: "FERALDRUID",
    name: "Feral Druid",
    overallClass: "Druid",
    colour: "rgb(255,124,10)",
    secondColour: "rgb(88, 91, 110)",
    classImage:"/img/druid.png",
    specImage:"/img/bg-druid-cat.png",
    greetingSound:"/sounds/malfurion.ogg",
    bossKillUrlSuffix: "&class=11#class-6-feral combat"
  },
  {
    id: 6,
    enum: "RESTODRUID",
    name: "Restoration Druid",
    overallClass: "Druid",
    colour: "rgb(255,124,10)",
    secondColour: "rgb(26, 117, 18)",
    classImage:"/img/druid.png",
    specImage:"/img/bg-druid-restoration.png",
    greetingSound:"/sounds/malfurion.ogg",
    bossKillUrlSuffix: "&class=11#class-6-restoration"
  },
  {
    id:7,
    enum: "BMHUNTER",
    name: "Beast Mastery Hunter",
    overallClass: "Hunter",
    colour:"rgb(170,211,114)",
    secondColour: "rgb(145, 139, 83)",
    classImage: "/img/hunter.png",
    specImage: "/img/bg-hunter-beastmaster.png",
    greetingSound: "/sounds/huntergreeting.ogg",
    bossKillUrlSuffix: "&class=3#class-6-beast mastery"
  },
  {
    id: 8,
    enum: "MMHUNTER",
    name: "Marksmanship Hunter",
    overallClass: "Hunter",
    colour:"rgb(170,211,114)",
    secondColour: "rgb(69, 69, 69)",
    classImage: "/img/hunter.png",
    specImage: "/img/bg-hunter-marksman.png",
    greetingSound: "/sounds/huntergreeting.ogg",
    bossKillUrlSuffix: "&class=3#class-6-marksmanship"
  },
  {
    id: 9,
    enum: "SURVIVALHUNTER",
    name: "Survival Hunter",
    overallClass: "Hunter",
    colour:"rgb(170,211,114)",
    secondColour: "rgb(69, 31, 71)",
    classImage: "/img/hunter.png",
    specImage: "/img/bg-hunter-survival.png",
    greetingSound: "/sounds/huntergreeting.ogg",
    bossKillUrlSuffix: "&class=3#class-6-survival"
  },
  {
    id: 10,
    enum: "ARCANEMAGE",
    name: "Arcane Mage",
    overallClass: "Mage",
    colour:"rgb(63,199,235)",
    secondColour: "rgb(204, 80, 177)",
    classImage: "/img/mage.png",
    specImage: "/img/bg-mage-arcane.png",
    greetingSound: "/sounds/magegreeting.ogg",
    bossKillUrlSuffix: "&class=8#class-6-arcane"
  },
  {
    id: 11,
    enum: "FIREMAGE",
    name: "Fire Mage",
    overallClass: "Mage",
    colour:"rgb(63,199,235)",
    secondColour: "rgb(207, 75, 4)",
    classImage: "/img/mage.png",
    specImage: "/img/bg-mage-fire.png",
    greetingSound: "/sounds/magegreeting.ogg",
    bossKillUrlSuffix: "&class=8#class-6-fire"
  },
  {
    id: 12,
    enum: "FROSTMAGE",
    name: "Frost Mage",
    overallClass: "Mage",
    colour:"rgb(63,199,235)",
    secondColour: "blue",
    classImage: "/img/mage.png",
    specImage: "/img/bg-mage-frost.png",
    greetingSound: "/sounds/magegreeting.ogg",
    bossKillUrlSuffix: "&class=8#class-6-frost"
  },
  {
    id: 13,
    enum: "HOLYPALADIN",
    name: "Holy Paladin",
    overallClass: "Paladin",
    colour:"rgb(244,140,186)",
    secondColour: "rgb(199, 179, 4)",
    classImage: "/img/pala.png",
    specImage: "/img/bg-paladin-holy.png",
    greetingSound: "/sounds/paladingreeting.ogg",
    bossKillUrlSuffix: "&class=2#class-6-holy"
  },
  {
    id: 14,
    enum: "PROTPALADIN",
    name: "Protection Paladin",
    overallClass: "Paladin",
    colour:"rgb(244,140,186)",
    secondColour: "rgb(42, 45, 66)",
    classImage: "/img/pala.png",
    specImage: "/img/bg-paladin-protection.png",
    greetingSound: "/sounds/paladingreeting.ogg",
    bossKillUrlSuffix: "&class=2#class-6-protection"
  },
  {
    id: 15,
    enum: "RETPALADIN",
    name: "Retribution Paladin",
    overallClass: "Paladin",
    colour:"rgb(244,140,186)",
    secondColour: "rgb(217, 115, 149)",
    classImage: "/img/pala.png",
    specImage: "/img/bg-paladin-retribution.png",
    greetingSound: "/sounds/paladingreeting.ogg",
    bossKillUrlSuffix: "&class=2#class-6-retribution"
  },
  {
    id: 16,
    enum: "DISCPRIEST",
    name: "Discipline Priest",
    overallClass: "Priest",
    colour:"white",
    secondColour: "rgb(30, 19, 51)",
    classImage: "/img/priest.png",
    specImage: "/img/bg-priest-discipline.png",
    greetingSound: "/sounds/priestgreeting.ogg",
    bossKillUrlSuffix: "&class=5#class-6-discipline"
  },
  {
    id: 17,
    enum: "HOLYPRIEST",
    name: "Holy Priest",
    overallClass: "Priest",
    colour:"white",
    secondColour: "rgb(112, 59, 212)",
    classImage: "/img/priest.png",
    specImage: "/img/bg-priest-holy.png",
    greetingSound: "/sounds/priestgreeting.ogg",
    bossKillUrlSuffix: "&class=5#class-6-holy"
  },
  {
    id: 18,
    enum: "SPRIEST",
    name: "Shadow Priest",
    overallClass: "Priest",
    colour:"white",
    secondColour: "black",
    classImage: "/img/priest.png",
    specImage: "/img/bg-priest-shadow.png",
    greetingSound: "/sounds/priestgreeting.ogg",
    bossKillUrlSuffix: "&class=5#class-6-shadow"
  },
  {
    id: 19,
    enum: "ASSAROGUE",
    name: "Assasination Rogue",
    overallClass: "Rogue",
    colour:"rgb(255,244,104)",
    secondColour: "black",
    classImage: "/img/rogue.png",
    specImage: "/img/bg-rogue-assassination.png",
    greetingSound: "/sounds/roguegreeting.ogg",
    bossKillUrlSuffix: "&class=4#class-6-assassination"
  },
  {
    id: 20,
    enum: "CROGUE",
    name: "Combat Rogue",
    overallClass: "Rogue",
    colour:"rgb(255,244,104)",
    secondColour: "rgb(129, 150, 99)",
    classImage: "/img/rogue.png",
    specImage: "/img/bg-rogue-combat.png",
    greetingSound: "/sounds/roguegreeting.ogg",
    bossKillUrlSuffix: "&class=4#class-6-combat"
  },
  {
    id: 21,
    enum: "SUBROGUE",
    name: "Subtlety Rogue",
    overallClass: "Rogue",
    colour:"rgb(255,244,104)",
    secondColour: "rgb(150, 66, 207)",
    classImage: "/img/rogue.png",
    specImage: "/img/bg-rogue-subtlety.png",
    greetingSound: "/sounds/roguegreeting.ogg",
    bossKillUrlSuffix: "&class=4#class-6-subtlety"
  },
  {
    id: 22,
    enum: "ELESHAM",
    name: "Elemental Shaman",
    overallClass: "Shaman",
    colour:"rgb(0,112,221)",
    secondColour: "rgb(214, 188, 232)",
    classImage: "/img/shaman.png",
    specImage: "/img/bg-shaman-elemental.png",
    greetingSound: "/sounds/shamangreeting.ogg",
    bossKillUrlSuffix: "&class=7#class-6-elemental",
  },
  {
    id: 23,
    enum: "ENHSHAM",
    name: "Enhancement Shaman",
    overallClass: "Shaman",
    colour:"rgb(0,112,221)",
    secondColour: "rgb(201, 107, 0)",
    classImage: "/img/shaman.png",
    specImage: "/img/bg-shaman-enhancement.png",
    greetingSound: "/sounds/shamangreeting.ogg",
    bossKillUrlSuffix: "&class=7#class-6-enhancement",
  },
  {
    id: 24,
    enum: "RESTOSHAM",
    name: "Restoration Shaman",
    overallClass: "Shaman",
    colour:"rgb(0,112,221)",
    secondColour: "rgb(59, 112, 16)",
    classImage: "/img/shaman.png",
    specImage: "/img/bg-shaman-restoration.png",
    greetingSound: "/sounds/shamangreeting.ogg",
    bossKillUrlSuffix: "&class=7#class-6-restoration",
  },
  {
    id: 25,
    enum: "AFFLOCK",
    name: "Affliction Warlock",
    overallClass: "Warlock",
    colour:"rgb(135,136,238)",
    secondColour: "rgb(44, 10, 61)",
    classImage: "/img/warlock.png",
    specImage: "/img/bg-warlock-affliction.png",
    greetingSound: "/sounds/warlockgreeting.ogg",
    bossKillUrlSuffix: "&class=9#class-6-affliction",
  },
  {
    id: 26,
    enum: "DEMOLOCK",
    name: "Demonology Warlock",
    overallClass: "Warlock",
    colour:"rgb(135,136,238)",
    secondColour: "rgb(214, 29, 0)",
    classImage: "/img/warlock.png",
    specImage: "/img/bg-warlock-demonology.png",
    greetingSound: "/sounds/warlockgreeting.ogg",
    bossKillUrlSuffix: "&class=9#class-6-demonology",
  },
  {
    id: 27,
    enum: "DESTROLOCK",
    name: "Destruction Warlock",
    overallClass: "Warlock",
    colour:"rgb(135,136,238)",
    secondColour: "rgb(235, 74, 0)",
    classImage: "/img/warlock.png",
    specImage: "/img/bg-warlock-destruction.png",
    greetingSound: "/sounds/warlockgreeting.ogg",
    bossKillUrlSuffix: "&class=9#class-6-destruction",
  },
  {
    id: 28,
    enum: "ARMSWARR",
    name: "Arms Warrior",
    overallClass: "Warrior",
    colour:"rgb(198,155,109)",
    secondColour: "rgb(117, 117, 117)",
    classImage: "/img/warrior.png",
    specImage: "/img/bg-warrior-arms.png",
    greetingSound: "/sounds/warriorgreeting.ogg",
    bossKillUrlSuffix: "&class=1#class-6-arms",
  },
  {
    id: 29,
    enum: "FURYWARR",
    name: "Fury Warrior",
    overallClass: "Warrior",
    colour:"rgb(198,155,109)",
    secondColour: "rgb(161, 6, 6)",
    classImage: "/img/warrior.png",
    specImage: "/img/bg-warrior-fury.png",
    greetingSound: "/sounds/warriorgreeting.ogg",
    bossKillUrlSuffix: "&class=1#class-6-fury",
  },
  {
    id: 30,
    enum: "PROTWARR",
    name: "Protection Warrior",
    overallClass: "Warrior",
    colour:"rgb(198,155,109)",
    secondColour: "rgb(235, 168, 0)",
    classImage: "/img/warrior.png",
    specImage: "/img/bg-warrior-protection.png",
    greetingSound: "/sounds/warriorgreeting.ogg",
    bossKillUrlSuffix: "&class=1#class-6-protection",
  },
]
