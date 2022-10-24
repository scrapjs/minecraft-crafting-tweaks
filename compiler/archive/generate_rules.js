let fs = require("fs");

let nether_materials = ["warped", "crimson"];
let wood_materials = ["oak", "dark_oak", "spruce", "birch", "acacia", "jungle", "mangrove"];

let types = [
    {"suffix": "_planks", "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_stairs", "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_slab"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_wall"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    
    {"suffix": "_fence" , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_fence_gate", "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    
    {"suffix": "_boat"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_sign"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_door"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_trapdoor", "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    {"suffix": "_button"  , "prefix": "minecraft:", "materials": [...wood_materials, ...nether_materials]},
    
    {"suffix": "_log"   , "prefix": "minecraft:stripped_", "materials": [...wood_materials]},
    {"suffix": "_wood"  , "prefix": "minecraft:stripped_", "materials": [...wood_materials]},
    {"suffix": "_stem"  , "prefix": "minecraft:stripped_", "materials": [...nether_materials]},
    {"suffix": "_hyphae", "prefix": "minecraft:stripped_", "materials": [...nether_materials]},
    
    {"suffix": "_log"   , "prefix": "minecraft:"         , "materials": [...wood_materials]},
    {"suffix": "_wood"  , "prefix": "minecraft:"         , "materials": [...wood_materials]},
    {"suffix": "_stem"  , "prefix": "minecraft:"         , "materials": [...nether_materials]},
    {"suffix": "_hyphae", "prefix": "minecraft:"         , "materials": [...nether_materials]},
];

let json = JSON.parse(fs.readFileSync("./reasonable-sorting.json", "utf8"));

let materialed = {};
types.forEach((type)=>{
    type.materials.forEach((name)=>{
        materialed[name] = materialed[name] || [];
        materialed[name].push(type.prefix + name + type.suffix);
    });
});

json.customSortingRules = [];
for (let key in materialed) {
    json.customSortingRules.push(materialed[key].join(" "));
};

fs.writeFileSync("./reasonable-sorting.json", JSON.stringify(json, null, 2), "utf8");
