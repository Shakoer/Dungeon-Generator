// data
const names = [
    "Arden", "Lyra", "Thorn", "Seraphine", "Eldrin", "Kaelen", "Isolde", "Fynn", "Cassandra", "Darius", "Rowan", "Astrid", "Gideon", "Maris", "Lorien", "Calista", "Theron", "Selene", "Bryn", "Eryndor", "Kaida", "Zarek", "Rhiannon", "Leif", "Anwen", "Tamsin", "Cairn", "Nyssa", "Malric", "Sylvara", "Taron", "Althea", "Dain", "Coraline", "Fenric", "Evandra", "Torin", "Iskander", "Veyra", "Quinn", "Lysandra", "Perrin", "Elowen", "Kieran", "Eira", "Draven", "Maelis", "Zyra", "Orin", "Vanya", "Cassian", "Riven", "Thalric", "Mira", "Kael", "Bastian", "Ysara", "Nerion", "Arabelle", "Cillian"
];

const loot = [
    "Silver Sword", "Healing Potion", "Bag of Gold", "Magic Scroll", "Gemstone", "Ancient Amulet", "Ring of Protection", "Enchanted Dagger", "Iron Shield", "Ruby Necklace", "Boots of Speed", "Wand of Fireballs", "Potion of Invisibility", "Golden Crown", "Spell Tome", "Dragon Tooth", "Bag of Holding", "Chalice of Eternal Life", "Mithril Armor", "Cursed Locket", "Staff of Lightning", "Elven Cloak", "Phoenix Feather", "Crystal Orb", "Dwarven Axe", "Potion of Strength", "Pearl of Wisdom", "Scroll of Teleportation", "Bloodstone Ring", "Emerald Circlet", "Sword of Flames", "Potion of Water Breathing", "Runed Gauntlets", "Shadow Cloak", "Amulet of Health", "Horn of Blasting", "Flameheart Gem", "Shield of the Moon", "Cloak of Shadows", "Potion of Luck", "Golden Compass", "Obsidian Dagger", "Dragon Scale Armor", "Orb of True Sight", "Scroll of Silence",
    "Necklace of Fire Resistance", "Cursed Blade", "Potion of Mana", "Crown of the Forgotten King", "Elixir of Agility", "Map to Hidden Treasure", "Ring of the Ancients", "Silver Arrow", "Potion of Healing", "Gem of Illusions", "Key to an Ancient Vault", "Dagger of Venom", "Helmet of Clarity", "Lantern of Eternal Light", "Golden Idol"
];

const creatures = [{
        name: "Goblin",
        difficulty: "easy"
    },
    {
        name: "Wolf",
        difficulty: "easy"
    },
    {
        name: "Kobold",
        difficulty: "easy"
    },
    {
        name: "Bandit",
        difficulty: "easy"
    },
    {
        name: "Zombie",
        difficulty: "easy"
    },
    {
        name: "Giant Rat",
        difficulty: "easy"
    },
    {
        name: "Skeleton Warrior",
        difficulty: "easy"
    },
    {
        name: "Giant Spider",
        difficulty: "easy"
    },
    {
        name: "Hobgoblin",
        difficulty: "easy"
    },
    {
        name: "Boar",
        difficulty: "easy"
    },
    {
        name: "Orc",
        difficulty: "medium"
    },
    {
        name: "Owlbear",
        difficulty: "medium"
    },
    {
        name: "Troll",
        difficulty: "medium"
    },
    {
        name: "Wight",
        difficulty: "medium"
    },
    {
        name: "Gnoll Pack Leader",
        difficulty: "medium"
    },
    {
        name: "Harpy",
        difficulty: "medium"
    },
    {
        name: "Basilisk",
        difficulty: "medium"
    },
    {
        name: "Warlock Acolyte",
        difficulty: "medium"
    },
    {
        name: "Giant Scorpion",
        difficulty: "medium"
    },
    {
        name: "Manticore",
        difficulty: "medium"
    },
    {
        name: "Dragon",
        difficulty: "hard"
    },
    {
        name: "Lich",
        difficulty: "hard"
    },
    {
        name: "Beholder",
        difficulty: "hard"
    },
    {
        name: "Balor Demon",
        difficulty: "hard"
    },
    {
        name: "Mind Flayer",
        difficulty: "hard"
    },
    {
        name: "Hydra",
        difficulty: "hard"
    },
    {
        name: "Frost Giant",
        difficulty: "hard"
    },
    {
        name: "Fire Elemental",
        difficulty: "hard"
    },
    {
        name: "Vampire Lord",
        difficulty: "hard"
    },
    {
        name: "Ancient Black Dragon",
        difficulty: "hard"
    }
];

const events = [
    "A sudden storm rolls in, obscuring vision and soaking the ground.", "A hidden trap is triggered, releasing a cloud of poison gas.", "A traveling merchant appears, offering rare and exotic items.", "The party stumbles upon an ancient ruin, its entrance sealed with magical wards.", "A mysterious map is discovered, leading to an unknown destination.", "An injured traveler begs for help, claiming to have been attacked by bandits.", "A pack of wild animals surrounds the camp at night, their glowing eyes piercing the dark.", "An earthquake splits the ground beneath your feet, revealing a hidden cavern.", "A ghostly figure appears, asking for help avenging its death.", "A festival is underway in a nearby village, but the locals seem tense and uneasy.", "A dying message is found on a blood-stained piece of parchment.",
    "A group of cultists performs a dark ritual in the distance.", "A magical portal opens, releasing a stream of strange creatures into the area.", "A treasure chest is discovered, but it’s guarded by a powerful spell.", "An ancient statue begins to move, speaking in a forgotten language.", "The group encounters a rival adventuring party, both sides claiming rights to the same treasure.", "A mysterious illness spreads through a nearby town, leaving people desperate for a cure.", "A fire breaks out, rapidly spreading through the surrounding area.", "A dragon flies overhead, its shadow passing ominously over the party.", "A lost child emerges from the woods, unable to explain how they got there.", "The party is ambushed by shadowy figures while traveling through a dense forest.", "An abandoned campsite is discovered, with signs of a violent struggle.", "A strange light flickers in the distance, leading to a long-forgotten temple.", "A noble offers a reward for the safe return of a stolen family heirloom.", "A strange fog descends, disorienting the party and making it difficult to navigate.", "A powerful storm washes away key supplies, leaving the party stranded.",
    "An ancient prophecy is revealed, with the party at the center of its prediction.",
    "A cursed item begins to cause chaos among the group.",
    "A sudden landslide changes the landscape, blocking the planned route.",
    "The party discovers an unmarked grave, its occupant restless and seeking revenge.",
    "A magical creature offers to aid the party, but for a mysterious price.",
    "A rare celestial event occurs, charging the air with magical energy.",
    "A village elder requests help locating a group of missing hunters.",
    "A powerful warlord sends an emissary, demanding tribute or surrender.",
    "A strange obelisk radiates energy, with carvings that shift when touched."
];

// difficulty slider
const difficultyMap = {
    1: "easy",
    2: "medium",
    3: "hard"
};

document.getElementById("difficultySlider").addEventListener("input", (e) => {
    const difficulty = difficultyMap[e.target.value];
    document.getElementById("difficultyLabel").textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
});

// random item
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// name generation
document.getElementById("charBtn").addEventListener("click", () => {
    document.getElementById("charOut").textContent = `"${getRandomItem(names)}"`;
});

// loot generation
document.getElementById("lootBtn").addEventListener("click", () => {
    document.getElementById("lootOut").textContent = `"${getRandomItem(loot)}"`;
});

// creature generation
document.getElementById("creatureBtn").addEventListener("click", () => {
    const creature = getRandomItem(creatures);
    document.getElementById("creatureOut").textContent = `"${creature.name} (${creature.difficulty})"`;
});

// encounter generation
document.getElementById("encounterBtn").addEventListener("click", () => {
    const partySize = parseInt(document.getElementById("partyIn").value) || 1;
    const difficulty = difficultyMap[document.getElementById("difficultySlider").value];

    // Filter
    const filteredCreatures = creatures.filter(c => c.difficulty === difficulty);

    // party size
    let encounter = [];
    for (let i = 0; i < partySize; i++) {
        encounter.push(getRandomItem(filteredCreatures).name);
    }

    document.getElementById("encounterOut").textContent = `"${encounter.join(", ")}"`;
});

// Event generation
document.getElementById("eventBtn").addEventListener("click", () => {
    document.getElementById("eventOut").textContent = `"${getRandomItem(events)}"`;
});