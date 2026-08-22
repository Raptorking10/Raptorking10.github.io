

const runAndBunTeam = [
  {
    name: "Urshifu (Rapid Strike)",
    sprite: "images/pokemon/run-and-bun/urshifurapidstrike.gif",
    types: ["water", "fighting"],
    level: 100,
    description: "For the Run and Bun League, a fighting type is essential, and Urshifu is always the top choice. Nearly all victors of Run and Bun have an Urshifu in their final team, regardless of form. \
    Both forms have their uses, but Jan got the Rapid Strike Form after evolving Kubfu. It was exceptional in dealing huge physical damage, clearing out run-ending dark types like Darkrai. \
    It also helped with dealing chip damage to E4 Drake's Suicune (and decreasing its defense with Rock smash), arguably one of the biggest threats in the League. \
    It clinched the kill on Champion Wallace's Mega Swampert with Aqua Jet before dying to his last Pokemon Palkia.",
    moves: [
      { name: "Surging Strikes", type: "water" },
      { name: "Aqua Jet", type: "water" },
      { name: "Close Combat", type: "fighting" },
      { name: "Rock Smash", type: "fighting" }
    ]
  },
  {
    name: "Dragapult",
    sprite: "images/pokemon/run-and-bun/dragapult.gif",
    types: ["dragon", "ghost"],
    level: 99,
    description: "Meet Amelia Earhart, Jan's Dragapult that carried his run to victory. \
    Dragapult has always been considered an S-Tier Pokemon in the Run and Bun community, due to its blazing speed, high offense, and good typing. \
    Amelia Earhart took out many threats, including E4 Drake's Suicune, Reshiram, Mega Salamence, as well as Champion Watson's Barraskewda, Hisuian Goodra and Palkia for the win. \
    She was truly the GOAT of the run.",
    moves: [
      { name: "Draco Meteor", type: "dragon" },
      { name: "Dragon Darts", type: "dragon" },
      { name: "Sucker Punch", type: "dark" },
      { name: "Curse", type: "ghost" }
    ]
  },
  {
    name: "Thundurus",
    sprite: "images/pokemon/run-and-bun/thundurus.gif",
    types: ["electric", "flying"],
    level: 99,
    description: "Being one of the best roamer legendaries because of its Prankster ability, Thundurus was able to simultaneously provide Thunder Wave support and deal damage. \
    Volt switch was essential for pivoting out. Its major contributions include slowing down E4 Drake's Mega Salamence and Champion Wallace's Barraskewda, as well as OHKOing his Primal Kyogre with Electric Gem. ",
    moves: [
      { name: "Thunder Wave", type: "electric" },
      { name: "Electroweb", type: "electric" },
      { name: "Thunder Punch", type: "electric" },
      { name: "Volt Switch", type: "electric" }
    ]
  },
  {
    name: "Absol",
    sprite: "images/pokemon/run-and-bun/absol.gif",
    types: ["dark"],
    level: 99,
    description: "Since Jan did not manage to encounter the S-Tier Dark Type Weavile, Absol was his next best option, even though the one Jan caught had terrible stats. \
    It had trash defenses, which actually proved useful for Protect baiting, especially in E4 Sidney's Double battle. \
    Unfortunately, it had to be sacrificed before the Champion battle.",
    mega: {
      name: "Mega Absol",
      sprite: "images/pokemon/run-and-bun/absol-mega.gif",
      types: ["dark"],
      description: "Mega Absol was crucial in E4 Phoebe's fight, doing most of the heavy lifting against her Ghost Types, able to cleanly win against her Hisuian Zoroark, Lunala and Mega Gengar. \
      It also promptly dealt with E4 Drake's Dragapult, doing chip damage to his Crawdaunt to break its Focus sash, before inevitably getting sacrificed to reset tempo in Jan's favor."
    },
    moves: [
      { name: "Sucker Punch", type: "dark" },
      { name: "Detect", type: "normal" },
      { name: "Rock Smash", type: "fighting" },
      { name: "Knock Off", type: "dark" }
    ]
  },
  {
    name: "Ursaluna",
    sprite: "images/pokemon/run-and-bun/ursaluna.gif",
    types: ["ground", "normal"],
    level: 100,
    description: "Although slow, Ursaluna was one of the best physical attackers in the game. With Flame Orb burn activating its Guts ability, \
    boosting its attack by 1.5x, and Facade which does double damage under a status condition, it could OHKO many threats while being bulky enough to absorb many hits. \
    Jan's had Fire punch for Coverage and Ice punch to mainly deal with E4 Drake's Zygarde.",
    moves: [
      { name: "Facade", type: "normal" },
      { name: "Earthquake", type: "ground" },
      { name: "Fire Punch", type: "fire" },
      { name: "Ice punch", type: "ice" }
    ]
  },
  {
    name: "Cresselia",
    sprite: "images/pokemon/run-and-bun/cresselia.gif",
    types: ["psychic"],
    level: 99,
    description: "In the community, there is a tradition for players to bring at least one new Pokemon to the League. \
    Jan brought the first ever Cresselia to the League in Run and Bun History. \
    People usually considered Cresselia to be the worst roamer Legendary, but Jan's Cresselia easily proved her worth throughout the E4. \
    During the final battle, Jan had run into many problems, and was about to lose. However Cresselia landed a clutch paralysis on Manaphy from Thunder \
    (after skill swapping its Hydration ability off) before dying to it, allowing his other Pokemon to clean up.",
    moves: [
      { name: "Skill Swap", type: "psychic" },
      { name: "Thunder", type: "electric" },
      { name: "Moonlight", type: "psychic" },
      { name: "Psycho Boost", type: "psychic" }
    ]
  }
];

const emeraldKaizoTeam = [
  {
    name: "Salamence",
    sprite: "images/pokemon/emerald-kaizo/salamence.gif",
    types: ["dragon", "flying"],
    level: 100,
    description: "Mailman the Salamence was engineered to have Maximum attack, allowing it to power through many threats such as E4 Sidney's Houndoom and Machamp. \
    It also had Intimidate, one of the best Pokemon abilities in history which crippled opposing physical attackers and in turn enabling other members of the team, allowing for easier strategizing.",
    moves: [
      { name: "Brick Break", type: "fighting" },
      { name: "Dragon Claw", type: "dragon" },
      { name: "Rock Slide", type: "rock" },
      { name: "Rock Tomb", type: "rock" }
    ]
  },
  {
    name: "Ludicolo",
    sprite: "images/pokemon/emerald-kaizo/ludicolo.gif",
    types: ["grass", "water"],
    level: 100,
    description: "It had abysmal stats so it couldn't reach its full potential, however it did provide crucial support using Fake Out to flinch, and Magical Leaf to sure hit opponents even through accuracy drops. \
    Unfortunately it died against Glacia's Swampert due to an unlucky critical hit (In one of Jan's previous failed runs, his Ludicolo also died to an unlucky critical hit from Glacia's Dewgong), making things much harder in the upcoming Drake fight.",
    moves: [
      { name: "Fake Out", type: "normal" },
      { name: "Giga Drain", type: "grass" },
      { name: "Ice Beam", type: "ice" },
      { name: "Magical Leaf", type: "grass" }
    ]
  },
  {
    name: "Slowbro",
    sprite: "images/pokemon/emerald-kaizo/slowbro.gif",
    types: ["water", "psychic"],
    level: 100,
    description: "Initially, Jan wanted to use Milotic instead for a safer E4 Drake battle. However, the one he caught had unsatisfactory stats, so he reverted to Slowbro and Wobbuffet. \
    Still, Slowbro was extremely useful throughout the whole run, having access to multiple support moves such as Disable, and can also serve as a stall heal bot by using Toxic and spamming Slack off. \ It also had access to Shell Armor in Emerald Kaizo, preventing crits altogether.",
    moves: [
      { name: "Surf", type: "water" },
      { name: "Flamethrower", type: "fire" },
      { name: "Slack Off", type: "normal" },
      { name: "Fire Blast", type: "fire" }
    ]
  },
  {
    name: "Relicanth",
    sprite: "images/pokemon/emerald-kaizo/relicanth.gif",
    types: ["water", "rock"],
    level: 100,
    description: "Historian the Relicanth had Swift swim, a crucial ability to help it stand against E4 Glacia, one of the hardest fights in Emerald Kaizo with permanent rain. \
    It was the perfect lead and took down two of the most threatening Pokemon on Glacia's team, Glalie and Regice. It also served as ground/rock coverage for other fights.",
    moves: [
      { name: "Head Smash", type: "rock" },
      { name: "Ancient Power", type: "rock" },
      { name: "Earthquake", type: "ground" },
      { name: "Ice Beam", type: "ice" }
    ]
  },
  {
    name: "Dusclops",
    sprite: "images/pokemon/emerald-kaizo/dusclops.gif",
    types: ["ghost"],
    level: 100,
    description: "Exorcist the Dusclops was a good ghost type, its Shadow ball into priority Shadow sneak combo guaranteeing massive damage. In Emerald Kaizo, it was also buffed to have +50 base HP and +30 base Attack, making it a fearsome Pokemon to face. \
    Standard Emerald Kaizo Elite 4 Teams almost always have a Dusclops, and Jan's was no exception. Exorcist also had Earthquake for needed additional ground coverage.",
    moves: [
      { name: "Ice Beam", type: "ice" },
      { name: "Shadow Sneak", type: "ghost" },
      { name: "Shadow Ball", type: "ghost" },
      { name: "Earthquake", type: "ground" }
    ]
  },
  {
    name: "Wobbuffet",
    sprite: "images/pokemon/emerald-kaizo/wobbuffet.gif",
    types: ["psychic"],
    level: 100,
    description: "Moderator the Wobuffet was built to be a full support Pokemon, able to dish out real damage through Mirror Coat/Counter, and locking opposing Pokemon into a move using Encore, allowing Jan to switch in other Pokemon safely. \
    Built on Maximum HP, Moderator was able to survive a devastating Draco Meteor from Drake's Latios, killing it with Mirror Coat.",
    moves: [
      { name: "Destiny Bond", type: "ghost" },
      { name: "Mirror Coat", type: "psychic" },
      { name: "Encore", type: "normal" },
      { name: "Counter", type: "fighting" }
    ]
  }
];

const radicalRedTeam = [
  {
    name: "Snorlax",
    sprite: "images/pokemon/radical-red/snorlax.gif",
    types: ["normal"],
    level: 86,
    description: "Jan's Snorlax had a more offensive setup, with Belly drum maxing attack in exchange for half of its HP, and Earthquake for ground coverage. \
    It used to have Facade, where it could deal extreme physical damage if hit with a status condition. Snorlax was helpful in the Elite 4, even 'Mega Evolving', but it wasn't needed in the Champion fight.",
    moves: [
      { name: "Belly Drum", type: "normal" },
      { name: "Protect", type: "normal" },
      { name: "Return", type: "normal" },
      { name: "Earthquake", type: "ground" }
    ]
  },
  {
    name: "Audino",
    sprite: "images/pokemon/radical-red/audino.gif",
    types: ["normal"],
    level: 86,
    description: "Audino boasted an impressive roster of moves to provide support and deal chip damage. \
    Jan switched between these moves throughout the Elite 4 and Champion fight, showing Audino's versatile role, even in double battles.",
    mega: {
      name: "Mega Audino",
      sprite: "images/pokemon/radical-red/audino-mega.gif",
      types: ["normal", "fairy"],
      description: "Mega Audino kept the Regenerator Ability, and together with its boosted defenses and healing, it was bulky and unkillable, easily taking a hit from Gary's Primordial Groudon. \
      Jan also used Mega Audino to PP stall against Gary's Choice Scarf Ditto, earning him the win."
    },
    moves: [
      { name: "Dazzling Gleam", type: "fairy" },
      { name: "Thunderbolt", type: "electric" },
      { name: "Wish", type: "normal" },
      { name: "Protect", type: "normal" }
    ]
  },
  {
    name: "Suicune",
    sprite: "images/pokemon/radical-red/suicune.gif",
    types: ["water"],
    level: 86,
    description: "For the champion fight, Suicune had its hidden ability Inner Focus, being immune to flinches from Gary's Serene Grace Togekiss. \
    Through Calm Mind/Rest/Sleep Talk setups, it proved itself a formidable ally, taking out Gary's Togekiss and Mega Blastoise, doing huge damage to Darkrai before eventually dying to it due to bad Sleep Talk RNG.",
    moves: [
      { name: "Ice Beam", type: "ice" },
      { name: "Calm Mind", type: "psychic" },
      { name: "Sleep Talk", type: "normal" },
      { name: "Rest", type: "psychic" }
    ]
  },
  {
    name: "Aegislash",
    sprite: "images/pokemon/radical-red/aegislash.gif",
    types: ["steel", "ghost"],
    level: 86,
    description: "A borderline overpowered Pokemon which has good defense in Shield form, and good offense in Blade form. \
    It could be used in Trick room setups, and King's shield was an insanely strong defensive move which not only serves as a better Protect, but also changes Aegislash into its bulkier Shield form to survive future hits. \
    Shadow sneak was also a good priority move, helping it to make up for its lack of speed.",
    moves: [
      { name: "Shadow Ball", type: "ghost" },
      { name: "Shadow Sneak", type: "ghost" },
      { name: "King's Shield", type: "steel" },
      { name: "Flash Cannon", type: "steel" }
    ]
  },
  {
    name: "Mandibuzz",
    sprite: "images/pokemon/radical-red/mandibuzz.gif",
    types: ["dark", "flying"],
    level: 86,
    description: "Mandibuzz was extremely defensive and helped to soak damage against many threats. For reference, it took barely any damage against Gary's Krookodile's Wicked Blow. \
    It served as a great pivot pokemon for Jan to get other frailer pokemon in safely. In addition it could also deal a surprising amount of damage through Foul play, depending on the opponent's Attack stat.",
    moves: [
      { name: "Protect", type: "normal" },
      { name: "Roost", type: "flying" },
      { name: "Foul Play", type: "dark" },
      { name: "U-turn", type: "bug" }
    ]
  },
  {
    name: "Latias",
    sprite: "images/pokemon/radical-red/latias.gif",
    types: ["dragon", "psychic"],
    level: 86,
    description: "Jan replaced her dragon moves with Thunderbolt and Calm mind for Latias to serve as a backup Special attack sweeper. (And also because Dragon pulse and Draco meteor weren't really useful in the final fight anyway.) \
    With Recover, Latias had constant sustain and could easily 1v1 Primal Groudon even without Calm mind boosts.",
    moves: [
      { name: "Recover", type: "normal" },
      { name: "Psychic", type: "psychic" },
      { name: "Thunderbolt", type: "electric" },
      { name: "Calm Mind", type: "psychic" }
    ]
  }
];
