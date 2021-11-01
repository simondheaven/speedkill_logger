const axios = require("axios")
var fs = require('fs');

const bosses = [
  {
    id: 1,
   bossName: "Morchok",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=57771",
   image: "/img/morchok.png"
 },
 {
   id: 2,
   bossName: "Zon'ozz",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=55310",
   image: "/img/zonozz.png"
 },
 {
   id: 3,
   bossName: "Yor'sahj",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=55314",
   image: "/img/yorsaj.png"
 },
 {
   id: 4,
   bossName: "Hagara",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=57955",
   image: "/img/hagara.png"
 },
 {
   id: 5,
   bossName: "Ultraxion",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=56577",
   image: "/img/ultrax.png"
 },
 {
   id: 6,
   bossName: "Warmaster Blackhorn",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=57847",
   image: "/img/warmasterblackhorn.png"
 },
 {
   id: 7,
   bossName: "Madness of Deathwing",
   url: "https://cata-twinhead.twinstar.cz/?boss-kill-npc-top=58000",
   image: "/img/deathwing.png"
 }
]

const classSpecs = [

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
    id: 5,
    enum: "FERALDRUID",
    name: "Feral Druid",
    overallClass: "Druid",
    colour: "rgb(255,124,10)",
    secondColour: "rgb(88, 91, 110)",
    classImage:"/img/druid.png",
    specImage:"/img/bg-druid-cat.png",
    greetingSound:"/sounds/malfurion.ogg",
    bossKillUrlSuffix: "&class=11#class-6-feral-combat"
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
    bossKillUrlSuffix: "&class=3#class-6-beast-mastery"
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

]

const centerAlign = (text) => {
  let halfLength = text.length /2;
  let output = text;
  while(output.length - halfLength < 50){
    output = " "+output
  }
  while(output.length < 99){
    output += " ";
  }
  return "|"+output+"|"
}

function showTitle() {
  let hashes = "";
  for(var i=0; i< 99; i++){
    hashes += "#"
  }
  hashes = "|"+hashes+"|"
  console.clear();
  console.info(hashes)
  console.info(centerAlign("  "));
  console.info(centerAlign("S P E E D K I L L   L O G   G E N E R A T I O N   S C R I P T "));
  console.info(centerAlign("  "));
  console.info(centerAlign("v2.0"));
  console.info(centerAlign("  "));
  console.info(centerAlign("by Octavo"));
  console.info(centerAlign("  "));
  console.info(hashes)
  console.info("");
}

function showBossProgress(bossIndex,specIndex) {
  console.info((specIndex % 3 == 0 ? centerAlign(" - ") : specIndex % 2 == 0 ? centerAlign(" / ") : centerAlign(" \\ ")).replace("|", " ").replace("|", " "))
  console.info("");
  console.info("Scanning boss pages...");
  console.info("");
  if(bossIndex == 0){
    console.info("This may take a while, please be patient...")
  }
  if(bossIndex == 1){
    console.info("Go get a cup of tea or something...")
  }
  if(bossIndex == 2){
    console.info("Still going to be a while mate...")
  }
  if(bossIndex == 3){
    console.info("Seriously fam... this shit takes ages...")
  }
  if(bossIndex == 4){
    console.info("Are you even still here?")
  }
  if(bossIndex == 5){
    console.info("I hope the tea was nice. Maybe it's time for another?")
  }
  if(bossIndex > 5){
    console.info("Nearly there now!")
  }
  console.info("")
  let actionNumber = (bossIndex * classSpecs.length) + 1 + specIndex;
  let maxNumber = bosses.length * classSpecs.length;
  //console.info("Action "+actionNumber+" of "+(bosses.length * classSpecs.length))
  let percentage = (actionNumber / maxNumber) * 100;

  let spaces = ""

  let pbar = [];
  for(var i=0; i<99; i++){
    if(i < 48){
      spaces += " "
    }
    if(i < Math.floor(percentage)){
      pbar.push("=")
    } else if(i == Math.floor(percentage)){
      pbar.push(">")
    } else {
      pbar.push("-")
    }
  }
  console.info("|"+pbar.join("")+"|")
  console.info(spaces + ((Math.floor(percentage) < 10) ? "  " : (Math.floor(percentage)) < 100 ? " " : "") + Math.floor(percentage)+"%");

}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}


async function start() {
  showTitle();

  for(var i=0; i<bosses.length; i++){
  //  if(i > 0) continue;
    bosses[i].ranks = [];
    for(var x=0; x<classSpecs.length; x++){
      let data = await axios.get(bosses[i].url+classSpecs[x].bossKillUrlSuffix);
      var indices = getIndicesOf("Speedkill", data.data, true);
      if(indices.length > 0){
        for(var z=0; z<indices.length; z++){
          let indexOfCharName = indices[z]
          let temp = data.data.split("").reverse().join("");
          let reverseIndexOfObjectStart = temp.substr(temp.length - indexOfCharName).indexOf("{");
          let indexOfObjectStart = indexOfCharName - reverseIndexOfObjectStart -1;
          let indexOfObjectEnd = data.data.substr(indexOfObjectStart).indexOf("}") + 1;
          let rankOutput = JSON.parse(data.data.substr(indexOfObjectStart, indexOfObjectEnd));
          rankOutput.classID = classSpecs[x].id;
          rankOutput.bossID = bosses[i].id;
          bosses[i].ranks.push(rankOutput);
        }
      }
      showTitle();
      showBossProgress(i,x);
    }
  }
  //console.log(JSON.stringify(bosses))
  showTitle();
  console.info("Scraping complete, authoring data file and starting application.")
  fs.unlink('./src/generated/index.js', function (err) {
    if (err){
      //nada
    }
  });
  fs.appendFile('./src/generated/index.js', "export const generated = "+ JSON.stringify(bosses.map(boss => {return {bossID: boss.id, ranks: boss.ranks}})), function (err) {
    if (err) throw err;
    console.info('Html generated. Process complete. Launching interface.');
  });
}

start();
