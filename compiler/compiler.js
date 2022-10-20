let usedModules = [
    "co-2x2-core", 
    "co-2x2-extra-cut-copper", // WARNING: 1.17 and higher only
    "co-2x2-extra-log-crafts", 
    "co-2x2-items", 
    "co-disable-default-slabs", 
    "co-disable-default-stairs", 
    "co-2x2-slabs", 
    "co-2x2-stairs", 
    "co-extra-better-dyeables", 
    "vt-double-slabs",
    "vt-powder-to-glass", 
    "vt-slabs-stairs-to-block",
    "vt-straight-to-shapeless", 
    "vt-unpackable-wool"
];

let usedMCVersion = "1_19";



let allowedData = {
    "1_19": ["1_19", "1_18", "1_17", "1_16", "1_xx"],
    "1_18": ["1_18", "1_17", "1_16", "1_xx"],
    "1_17": ["1_17", "1_16", "1_xx"],
    "1_16": ["1_16", "1_xx"]
};

let dataVersion = {
    "1_19": 10,
    "1_18": 9,
    "1_17": 8,
    "1_16": 7
};



let slabs = [
    {"source": "blackstone", "input": "blackstone_slab", "mc_version": "1_16"},
    {"source": "crimson_planks", "input": "crimson_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "warped_planks", "input": "warped_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "polished_blackstone", "input": "polished_blackstone_slab", "mc_version": "1_16"},
    {"source": "polished_blackstone_bricks", "input": "polished_blackstone_brick_slab", "mc_version": "1_16"},

    {"source": "cobbled_deepslate", "input": "cobbled_deepslate_slab", "mc_version": "1_17"},
    {"source": "deepslate_bricks", "input": "deepslate_brick_slab", "mc_version": "1_17"},
    {"source": "deepslate_tiles", "input": "deepslate_tile_slab", "mc_version": "1_17"},
    {"source": "polished_deepslate", "input": "polished_deepslate_slab", "mc_version": "1_17"},

    {"source": "cut_copper", "input": "cut_copper_slab", "mc_version": "1_17", from: ["copper_block"]},
    {"source": "weathered_cut_copper", "input": "weathered_cut_copper_slab", "mc_version": "1_17", from: ["weathered_copper"]},
    {"source": "exposed_cut_copper", "input": "exposed_cut_copper_slab", "mc_version": "1_17", from: ["exposed_copper"]},
    {"source": "oxidized_cut_copper", "input": "oxidized_cut_copper_slab", "mc_version": "1_17", from: ["oxidized_copper"]},

    {"source": "waxed_cut_copper", "input": "waxed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_cut_copper_slab", from: ["waxed_copper_block"]},
    {"source": "waxed_weathered_cut_copper", "input": "waxed_weathered_cut_copper_slab", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_slab",from: ["waxed_weathered_copper"]},
    {"source": "waxed_exposed_cut_copper", "input": "waxed_exposed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_slab",from: ["waxed_exposed_copper"]},
    {"source": "waxed_oxidized_cut_copper", "input": "waxed_oxidized_cut_copper_slab", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_slab",from: ["waxed_oxidized_copper"]},

    {"source": "mangrove_planks", "input": "mangrove_slab", "mc_version": "1_19", "group": "wooden_slab"},
    {"source": "mud_bricks", "input": "mud_brick_slab", "mc_version": "1_19"},

    {"source": "acacia_planks", "input": "acacia_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "oak_planks", "input": "oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "dark_oak_planks", "input": "dark_oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "birch_planks", "input": "birch_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "spruce_planks", "input": "spruce_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "jungle_planks", "input": "jungle_slab", "mc_version": "1_xx", "group": "wooden_slab"},

    {"source": "bricks", "input": "brick_slab", "mc_version": "1_xx"},

    {"source": "cobblestone", "input": "cobblestone_slab", "mc_version": "1_xx"},
    {"source": "mossy_cobblestone", "input": "mossy_cobblestone_slab", "mc_version": "1_xx"},

    {"source": "stone_bricks", "input": "stone_brick_slab", "mc_version": "1_xx"},
    {"source": "stone", "input": "stone_slab", "mc_version": "1_xx"},
    {"source": "mossy_stone_bricks", "input": "mossy_stone_brick_slab", "mc_version": "1_xx"},

    {"source": "cut_red_sandstone", "input": "cut_red_sandstone_slab", "mc_version": "1_xx"},
    {"source": "cut_sandstone", "input": "cut_sandstone_slab", "mc_version": "1_xx"},

    {"source": "red_sandstone", "input": "red_sandstone_slab", "mc_version": "1_xx"},
    {"source": "sandstone", "input": "sandstone_slab", "mc_version": "1_xx"},

    {"source": "smooth_stone", "input": "smooth_stone_slab", "mc_version": "1_xx"},
    {"source": "smooth_sandstone", "input": "smooth_sandstone_slab", "mc_version": "1_xx"},
    {"source": "smooth_red_sandstone", "input": "smooth_red_sandstone_slab", "mc_version": "1_xx"},
    {"source": "smooth_quartz", "input": "smooth_quartz_slab", "mc_version": "1_xx"},

    {"source": "red_nether_bricks", "input": "red_nether_brick_slab", "mc_version": "1_xx"},
    {"source": "nether_bricks", "input": "nether_brick_slab", "mc_version": "1_xx"},

    {"source": "diorite", "input": "diorite_slab", "mc_version": "1_xx"},
    {"source": "granite", "input": "granite_slab", "mc_version": "1_xx"},
    {"source": "andesite", "input": "andesite_slab", "mc_version": "1_xx"},

    {"source": "polished_diorite", "input": "polished_diorite_slab", "mc_version": "1_xx"},
    {"source": "polished_granite", "input": "polished_granite_slab", "mc_version": "1_xx"},
    {"source": "polished_andesite", "input": "polished_andesite_slab", "mc_version": "1_xx"},

    {"source": "prismarine_bricks", "input": "prismarine_brick_slab", "mc_version": "1_xx"},
    {"source": "prismarine", "input": "prismarine_slab", "mc_version": "1_xx"},
    {"source": "dark_prismarine", "input": "dark_prismarine_slab", "mc_version": "1_xx"},

    {"source": "quartz_block", "input": "quartz_slab", "mc_version": "1_xx"},
    {"source": "purpur_block", "input": "purpur_slab", "mc_version": "1_xx"},
    {"source": "end_stone_bricks", "input": "end_stone_brick_slab", "mc_version": "1_xx"}
];

let stairs = [
    {"source": "blackstone", "input": "blackstone_stairs", "mc_version": "1_16"},
    {"source": "crimson_planks", "input": "crimson_stairs", "group": "wooden_stairs", "mc_version": "1_16"},
    {"source": "warped_planks", "input": "warped_stairs", "group": "wooden_stairs", "mc_version": "1_16"},
    {"source": "polished_blackstone", "input": "polished_blackstone_stairs", "mc_version": "1_16"},
    {"source": "polished_blackstone_bricks", "input": "polished_blackstone_brick_stairs", "mc_version": "1_16"},

    {"source": "cobbled_deepslate", "input": "cobbled_deepslate_stairs", "mc_version": "1_17"},
    {"source": "deepslate_bricks", "input": "deepslate_brick_stairs", "mc_version": "1_17"},
    {"source": "deepslate_tiles", "input": "deepslate_tile_stairs", "mc_version": "1_17"},
    {"source": "polished_deepslate", "input": "polished_deepslate_stairs", "mc_version": "1_17"},

    {"source": "cut_copper", "input": "cut_copper_stairs", "mc_version": "1_17", from: ["copper_block"]},
    {"source": "weathered_cut_copper", "input": "weathered_cut_copper_stairs", "mc_version": "1_17", from: ["weathered_copper"]},
    {"source": "exposed_cut_copper", "input": "exposed_cut_copper_stairs", "mc_version": "1_17", from: ["exposed_copper"]},
    {"source": "oxidized_cut_copper", "input": "oxidized_cut_copper_stairs", "mc_version": "1_17", from: ["oxidized_copper"]},

    {"source": "waxed_cut_copper", "input": "waxed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_cut_copper_stairs", from: ["waxed_copper_block"]},
    {"source": "waxed_weathered_cut_copper", "input": "waxed_weathered_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_stairs", from: ["waxed_weathered_copper"]},
    {"source": "waxed_exposed_cut_copper", "input": "waxed_exposed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_stairs", from: ["waxed_exposed_copper"]},
    {"source": "waxed_oxidized_cut_copper", "input": "waxed_oxidized_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_stairs", from: ["waxed_oxidized_copper"]},

    {"source": "mangrove_planks", "input": "mangrove_stairs", "group": "wooden_stairs", "mc_version": "1_19"},
    {"source": "mud_bricks", "input": "mud_brick_stairs", "mc_version": "1_19"},

    {"source": "acacia_planks", "input": "acacia_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "oak_planks", "input": "oak_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "dark_oak_planks", "input": "dark_oak_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "birch_planks", "input": "birch_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "spruce_planks", "input": "spruce_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "jungle_planks", "input": "jungle_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},

    {"source": "bricks", "input": "brick_stairs", "mc_version": "1_xx"},

    {"source": "cobblestone", "input": "cobblestone_stairs", "mc_version": "1_xx"},
    {"source": "mossy_cobblestone", "input": "mossy_cobblestone_stairs", "mc_version": "1_xx"},

    {"source": "stone_bricks", "input": "stone_brick_stairs", "mc_version": "1_xx"},
    {"source": "stone", "input": "stone_stairs", "mc_version": "1_xx"},
    {"source": "mossy_stone_bricks", "input": "mossy_stone_brick_stairs", "mc_version": "1_xx"},

    {"source": "cut_red_sandstone", "input": "cut_red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "cut_sandstone", "input": "cut_sandstone_stairs", "mc_version": "1_xx"},

    {"source": "red_sandstone", "input": "red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "sandstone", "input": "sandstone_stairs", "mc_version": "1_xx"},

    {"source": "smooth_sandstone", "input": "smooth_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "smooth_red_sandstone", "input": "smooth_red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "smooth_quartz", "input": "smooth_quartz_stairs", "mc_version": "1_xx"},

    {"source": "red_nether_bricks", "input": "red_nether_brick_stairs", "mc_version": "1_xx"},
    {"source": "nether_bricks", "input": "nether_brick_stairs", "mc_version": "1_xx"},

    {"source": "diorite", "input": "diorite_stairs", "mc_version": "1_xx"},
    {"source": "granite", "input": "granite_stairs", "mc_version": "1_xx"},
    {"source": "andesite", "input": "andesite_stairs", "mc_version": "1_xx"},

    {"source": "polished_diorite", "input": "polished_diorite_stairs", "mc_version": "1_xx"},
    {"source": "polished_granite", "input": "polished_granite_stairs", "mc_version": "1_xx"},
    {"source": "polished_andesite", "input": "polished_andesite_stairs", "mc_version": "1_xx"},

    {"source": "prismarine_bricks", "input": "prismarine_brick_stairs", "mc_version": "1_xx"},
    {"source": "prismarine", "input": "prismarine_stairs", "mc_version": "1_xx"},
    {"source": "dark_prismarine", "input": "dark_prismarine_stairs", "mc_version": "1_xx"},

    {"source": "quartz_block", "input": "quartz_stairs", "mc_version": "1_xx"},
    {"source": "purpur_block", "input": "purpur_stairs", "mc_version": "1_xx"},
    {"source": "end_stone_bricks", "input": "end_stone_brick_stairs", "mc_version": "1_xx"}
];




let templateSlab2x2Reverse = (options)=>{
    let tags = [];
    for (let i=0;i<4;i++) {
        tags.push(`
        {"item": "minecraft:${options.input}"}`);
    }
    return `
{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${options.source}",
        "count": 2
    },
    "group": "slabs_to_blocks"
}`;
};


let templateStairs2x2Reverse = (options)=>{
    let tags = [];
    for (let i=0;i<4;i++) {
        tags.push(`
        {"item": "minecraft:${options.input}"}`);
    }
    return `
{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${options.source}",
        "count": 3
    },
    "group": "stairs_to_blocks"
}`;
};


let templateSlab2x1Reverse = (options)=>{
    return `{
    "type": "crafting_shaped",
    "pattern": [
        "##"
    ],
    "key": {
        "#": {"item": "minecraft:${options.input}"}
    },
    "result": {
        "item": "minecraft:${options.source}",
        "count": 1
    },
    "group": "slabs_to_blocks"
}`
};

// 
let templateStub = (options)=>{
    return `{
  "type": "minecraft:crafting_shaped",
  "group": "stub",
  "pattern": [],
  "key": {},
  "result": {
    "item": "minecraft:air",
    "count": 0
  }
}`
};

// TODO: add groups, such as `wooden_slab`, etc.
let templateSlab2x1 = (options)=>{
    return `{
    "type": "crafting_shaped",
    "pattern": [
        "##"
    ],
    "key": {
        "#": {"item": "minecraft:${options.source}"}
    },
    "result": {
        "item": "minecraft:${options.input}",
        "count": 4
    },
    "group": "${options.group ? options.group : "blocks_to_slabs"}"
}`
};

// TODO: add groups, such as `wooden_slab`, etc.
let templateStairs2x2 = (options)=>{
    return `{
    "type": "crafting_shaped",
    "pattern": [
        "# "
        "##"
    ],
    "key": {
        "#": {"item": "minecraft:${options.source}"}
    },
    "result": {
        "item": "minecraft:${options.input}",
        "count": 4
    },
    "group": "${options.group ? options.group : "blocks_to_stairs"}"
}`
};

let names = ["banner", "bed", "candle", "concrete", "carpet", "concrete_powder", "glass", "glass_pane", "glazed_terracotta", "terracotta", "wool"];
let colors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow", "default"];

let templateColors = (options)=>{
    let tags = [];

    let rejectionCode = options.color != "default" ? `/not_${options.color}` : ``;

    for (let i=0;i<options.count;i++) {
        tags.push(`
        {"tag": "better_dyeables:${options.name}${rejectionCode}"}`);
    }
    
    let mcName = 
        (options.name == "glass" || options.name == "glass_pane") && 
         options.color != "default" ? 
            `${options.color}_stained_${options.name}` : 
              (options.color != "default" ? `${options.color}_${options.name}` : `${options.name}`);

    return `{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
        {"tag": "better_dyeables:dye/${options.color}"},${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${mcName}",
        "count": ${options.count}
    },
    "group": "${options.color}_${options.name}"
}`;
};



//
let MergeTrees = require('merge-trees');
let fs = require('fs');

/*
// NOT NEEDED!
//
if (usedModules.indexOf("co-disable-default-slabs") != -1) {
    let rootDir = `../wrapper/datapacks/co-disable-default-slabs/data/minecraft/recipes`;

    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    slabs.forEach((obj)=>{
        fs.mkdirSync(`${rootDir}`, { recursive: true });
        fs.writeFileSync(`${rootDir}/${obj.input}.json`, templateStub(obj), 'utf8');
    });
};

//
if (usedModules.indexOf("co-disable-default-stairs") != -1) {
    let rootDir = `../wrapper/datapacks/co-disable-default-stairs/data/minecraft/recipes`;

    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    stairs.forEach((obj)=>{
        fs.mkdirSync(`${rootDir}`, { recursive: true });
        fs.writeFileSync(`${rootDir}/${obj.input}.json`, templateStub(obj), 'utf8');
    });
};*/

//
if (usedModules.indexOf("co-extra-better-dyeables") != -1) {
    let rootDir = `../wrapper/datapacks/co-extra-better-dyeables/data/better_dyeables/recipes`;

    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    names.forEach((name)=>{
        colors.forEach((color)=>{
            for (let i=1;i<=8;i++) {
                //fs.writeFileSync(`${name}/${color}/${i}.json`, whatReplace(name, color, fs.readFileSync(`${name}/${color}/${i}.json`, 'utf8')), 'utf8');
                fs.mkdirSync(`${rootDir}/${name}/${color}`, { recursive: true });
                fs.writeFileSync(`${rootDir}/${name}/${color}/${i}.json`, templateColors({
                    color, name, count: i
                }), 'utf8');
            }
        });
    });
};

//
if (usedModules.indexOf("co-2x2-slabs") != -1) {
    let rootDir = `../wrapper/datapacks/co-2x2-slabs/data/crafting/recipes/`;

    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    slabs.forEach((obj)=>{
        if (allowedData[usedMCVersion].indexOf(obj.mc_version) != -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1/${obj.input}.json`, templateSlab2x1(obj), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-2x2-stairs") != -1) {
    let rootDir = `../wrapper/datapacks/co-2x2-stairs/data/crafting/recipes/`;

    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    stairs.forEach((obj)=>{
        if (allowedData[usedMCVersion].indexOf(obj.mc_version) != -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2/${obj.input}.json`, templateStairs2x2(obj), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("vt-slabs-stairs-to-block") != -1) {
    let rootDir = `../wrapper/datapacks/vt-slabs-stairs-to-block/data/crafting/recipes`;
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    stairs.forEach((obj)=>{
        if (allowedData[usedMCVersion].indexOf(obj.mc_version) != -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/${obj.source}.json`, templateStairs2x2Reverse(obj), 'utf8');
        };
    });

    slabs.forEach((obj)=>{
        if (allowedData[usedMCVersion].indexOf(obj.mc_version) != -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/${obj.source}.json`, templateSlab2x2Reverse(obj), 'utf8');
        };
    });

    slabs.forEach((obj)=>{
        if (allowedData[usedMCVersion].indexOf(obj.mc_version) != -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/${obj.source}.json`, templateSlab2x1Reverse(obj), 'utf8');
        };
    });
};

//
fs.rmSync(`../datapack/data`, { recursive: true, force: true });
fs.mkdirSync(`../datapack/data`, { recursive: true });
fs.writeFileSync(`../datapack/pack.mcmeta`, `{"pack":{"pack_format":${dataVersion[usedMCVersion]},"description":"Minecraft crafting recipes overhaul compiled for"}}`, 'utf8');

//
let mergeTrees = new MergeTrees( usedModules.map((M)=>{ return `../wrapper/datapacks/${M}/data`; }), '../datapack/data', { overwrite: true });
mergeTrees.merge();

// remove disallowed version data from "crafting"
let files = fs.readdirSync("../datapack/data/crafting/recipes");
files.forEach((filename)=>{
    if (allowedData[usedMCVersion].indexOf(filename) == -1) {
        fs.rmSync(`../datapack/data/crafting/recipes/${filename}`, { recursive: true, force: true });
    };
});
