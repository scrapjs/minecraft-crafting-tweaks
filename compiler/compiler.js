
let usedModules = [
    "co-2x2-core", 
    "co-disable-default-slabs", 
    "co-disable-default-stairs", 
    "co-2x2-extra-cut-copper",
    "co-2x2-extra-log-crafts", 
    "co-2x2-items", 
    "co-2x1-slabs", 
    "co-2x2-stairs", 
    "co-2x2-extra-unpackable",
    "co-extra-better-dyeables",
    "vt-double-slabs",
    "vt-powder-to-glass", 
    "vt-slabs-stairs-to-block",
    "vt-straight-to-shapeless",
    "vt-more-stairs"
];

let usedMCVersion = "1_19";

let disallowedData = {
    "1_19": [],//["1_19", "1_18", "1_17", "1_16", "1_xx"],
    "1_18": ["1_19"],//["1_18", "1_17", "1_16", "1_xx"],
    "1_17": ["1_19", "1_18"],//["1_17", "1_16", "1_xx"],
    "1_16": ["1_19", "1_18", "1_17"],//["1_16", "1_xx"]
    "1_15": ["1_19", "1_18", "1_17", "1_16"],
    "1_xx": ["1_19", "1_18", "1_17", "1_16"]
};

let dataVersion = {
    "1_19": 10,
    "1_18": 9,
    "1_17": 8,
    "1_16": 7,
    "1_15": 6,
    "1_xx": 6
};

let mcVersionString = {
    "1_19": "1.19.x",
    "1_18": "1.18.x",
    "1_17": "1.17.x",
    "1_16": "1.16.x",
    "1_15": "1.15.x",
    "1_xx": "1.15.x"
};



let slabs = [
    {"source": "blackstone", "input": "blackstone_slab", "mc_version": "1_16", single: true},
    {"source": "crimson_planks", "input": "crimson_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "warped_planks", "input": "warped_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "polished_blackstone", "input": "polished_blackstone_slab", "mc_version": "1_16"},
    {"source": "polished_blackstone_bricks", "input": "polished_blackstone_brick_slab", "mc_version": "1_16", single: true},

    {"source": "cobbled_deepslate", "input": "cobbled_deepslate_slab", "mc_version": "1_17", single: true},
    {"source": "deepslate_bricks", "input": "deepslate_brick_slab", "mc_version": "1_17", single: true},
    {"source": "deepslate_tiles", "input": "deepslate_tile_slab", "mc_version": "1_17", single: true},
    {"source": "polished_deepslate", "input": "polished_deepslate_slab", "mc_version": "1_17", single: true},

    {"source": "cut_copper", "input": "cut_copper_slab", "mc_version": "1_17", from: ["copper_block"], single: true},
    {"source": "weathered_cut_copper", "input": "weathered_cut_copper_slab", "mc_version": "1_17", from: ["weathered_copper"], single: true},
    {"source": "exposed_cut_copper", "input": "exposed_cut_copper_slab", "mc_version": "1_17", from: ["exposed_copper"], single: true},
    {"source": "oxidized_cut_copper", "input": "oxidized_cut_copper_slab", "mc_version": "1_17", from: ["oxidized_copper"], single: true},

    {"source": "waxed_cut_copper", "input": "waxed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_cut_copper_slab", from: ["waxed_copper_block"], single: true},
    {"source": "waxed_weathered_cut_copper", "input": "waxed_weathered_cut_copper_slab", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_slab",from: ["waxed_weathered_copper"], single: true},
    {"source": "waxed_exposed_cut_copper", "input": "waxed_exposed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_slab",from: ["waxed_exposed_copper"], single: true},
    {"source": "waxed_oxidized_cut_copper", "input": "waxed_oxidized_cut_copper_slab", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_slab",from: ["waxed_oxidized_copper"], single: true},

    {"source": "mangrove_planks", "input": "mangrove_slab", "mc_version": "1_19", "group": "wooden_slab"},
    {"source": "mud_bricks", "input": "mud_brick_slab", "mc_version": "1_19", single: true},

    {"source": "acacia_planks", "input": "acacia_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "oak_planks", "input": "oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "dark_oak_planks", "input": "dark_oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "birch_planks", "input": "birch_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "spruce_planks", "input": "spruce_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "jungle_planks", "input": "jungle_slab", "mc_version": "1_xx", "group": "wooden_slab"},

    {"source": "bricks", "input": "brick_slab", "mc_version": "1_xx", single: true},

    {"source": "cobblestone", "input": "cobblestone_slab", "mc_version": "1_xx", single: true},
    {"source": "mossy_cobblestone", "input": "mossy_cobblestone_slab", "mc_version": "1_xx", single: true},

    {"source": "stone_bricks", "input": "stone_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "stone", "input": "stone_slab", "mc_version": "1_xx"},
    {"source": "mossy_stone_bricks", "input": "mossy_stone_brick_slab", "mc_version": "1_xx", single: true},

    {"source": "cut_red_sandstone", "input": "cut_red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "cut_sandstone", "input": "cut_sandstone_slab", "mc_version": "1_xx", single: true},

    {"source": "red_sandstone", "input": "red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "sandstone", "input": "sandstone_slab", "mc_version": "1_xx", single: true},

    {"source": "smooth_stone", "input": "smooth_stone_slab", "mc_version": "1_xx", single: true},
    {"source": "smooth_sandstone", "input": "smooth_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "smooth_red_sandstone", "input": "smooth_red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "smooth_quartz", "input": "smooth_quartz_slab", "mc_version": "1_xx", single: true},

    {"source": "red_nether_bricks", "input": "red_nether_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "nether_bricks", "input": "nether_brick_slab", "mc_version": "1_xx", single: true},

    {"source": "diorite", "input": "diorite_slab", "mc_version": "1_xx", single: true},
    {"source": "granite", "input": "granite_slab", "mc_version": "1_xx", single: true},
    {"source": "andesite", "input": "andesite_slab", "mc_version": "1_xx", single: true},

    {"source": "polished_diorite", "input": "polished_diorite_slab", "mc_version": "1_xx", single: true},
    {"source": "polished_granite", "input": "polished_granite_slab", "mc_version": "1_xx", single: true},
    {"source": "polished_andesite", "input": "polished_andesite_slab", "mc_version": "1_xx", single: true},

    {"source": "prismarine_bricks", "input": "prismarine_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "prismarine", "input": "prismarine_slab", "mc_version": "1_xx", single: true},
    {"source": "dark_prismarine", "input": "dark_prismarine_slab", "mc_version": "1_xx", single: true},

    {"source": "quartz_block", "input": "quartz_slab", "mc_version": "1_xx", single: true},
    {"source": "purpur_block", "input": "purpur_slab", "mc_version": "1_xx", single: true},
    {"source": "end_stone_bricks", "input": "end_stone_brick_slab", "mc_version": "1_xx", single: true}
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

//
let MergeTrees = require('merge-trees');
let fs = require('fs');
let fse = require('fs-extra');
let {crlf, LF, CRLF, CR} = require('crlf-normalize');

let templateShapelessSingle = (options, outCount)=>{
    let tags = [];
    for (let i=0;i<options.count;i++) {
        tags.push(`
        {"item": "minecraft:${options.input}"}`);
    }
    return crlf(`
{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${options.result}",
        "count": ${outCount}
    },
    "group": "stairs_to_blocks"
}`, CRLF);
};

// 
let templateStub = (options)=>{
    return crlf(`{
  "type": "minecraft:crafting_shaped",
  "group": "stub",
  "pattern": [],
  "key": {},
  "result": {
    "item": "minecraft:air",
    "count": 0
  }
}`, CRLF);
};

// TODO: add groups, such as `wooden_slab`, etc.
let templateShapedSingle = (options, pattern, outCount)=>{
    return crlf(`{
    "type": "crafting_shaped",
    "pattern": [${pattern}],
    "key": {
        "#": {"item": "minecraft:${options.input}"}
    },
    "result": {
        "item": "minecraft:${options.result}",
        "count": ${outCount}
    },
    "group": "${options.group}"
}`, CRLF);
};

let stairs3x3Pattern = `"#  ", "## ", "###"`;
let stairs2x2Pattern = `"# ", "##"`;
let slabs2x1Pattern = `"##"`;



let advancementTemplate = (options)=>{
    let criterias = [];
    let criteraNames = [];
    
    for (let key in options.criterias) {
        criteraNames.push(key);
        criterias.push(options.criterias[key]);
    };
    
    let criteriaStrings = [];
    for (let i=0;i<criterias.length;i++) {
        criteriaStrings.push(`
        "${criteraNames[i]}": ${JSON.stringify(criterias[i])}`);
    };
    
    return crlf(`{
    "parent": "minecraft:recipes/root",
    "criteria": {${criteriaStrings.join(",")},
        "has_the_recipe": {
            "trigger": "minecraft:recipe_unlocked",
            "conditions": {
                "recipe": "${options.recipeAddress}"
            }
        }
    },
    "requirements": [
        [${criteraNames.map((n)=>{return `"${n}"`;}).join(",")},"has_the_recipe"]
    ],
    "rewards": { "recipes": ["${options.recipeAddress}"] }
}`, CRLF);
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

    return crlf(`{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
        {"tag": "better_dyeables:dye/${options.color}"},${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${mcName}",
        "count": ${options.count}
    },
    "group": "${options.color}_${options.name}"
}`, CRLF);
};

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
    let rootDirAdv = `../wrapper/datapacks/co-extra-better-dyeables/data/better_dyeables/advancements/recipes/better_dyeables`;
    let rootDir = `../wrapper/datapacks/co-extra-better-dyeables/data/better_dyeables/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    
    names.forEach((name)=>{
        colors.forEach((color)=>{
            for (let i=1;i<=8;i++) {
                let rejectionCode = color != "default" ? `/not_${color}` : ``;
                let mcName = 
                    (name == "glass" || name == "glass_pane") && 
                        color != "default" ? 
                        `${color}_stained_${name}` : 
                            (color != "default" ? `${color}_${name}` : `${name}`);

                let criterias = {};
                criterias["has_dyeable"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"tag": `better_dyeables:dye/${color}`} ] } };
                criterias["has_dye"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"tag": `better_dyeables:${name}${rejectionCode}`} ] } };
                criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${mcName}`} ] } };

                fs.mkdirSync(`${rootDirAdv}/${name}/${color}`, { recursive: true });
                fs.writeFileSync(`${rootDirAdv}/${name}/${color}/${i}.json`, advancementTemplate({
                    criterias, 
                    recipeAddress: `better_dyeables:${name}/${color}/${i}`
                }), 'utf8');

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
    let rootDirAdv = `../wrapper/datapacks/co-2x2-slabs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-2x2-slabs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    slabs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks2x1`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks2x1/${obj.input}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/slabs/blocks2x1/${obj.input}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1/${obj.input}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "blocks_to_slabs"
            }, slabs2x1Pattern, 4), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("vt-double-slabs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/vt-double-slabs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/vt-double-slabs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    slabs.forEach((obj)=>{
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && obj.single) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks1x1`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks1x1/${obj.input}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/slabs/blocks1x1/${obj.input}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/slabs/blocks1x1`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/slabs/blocks1x1/${obj.input}.json`, templateShapelessSingle({
                input: obj.source,
                result: obj.input,
                count: 1,
                group: obj.group ? obj.group : "block_to_slabs"
            }, 2), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-2x2-stairs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-2x2-stairs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-2x2-stairs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    stairs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks2x2`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks2x2/${obj.input}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/stairs/blocks2x2/${obj.input}` 
            }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2/${obj.input}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "blocks_to_stairs"
            }, stairs2x2Pattern, 4), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("vt-more-stairs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/vt-more-stairs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/vt-more-stairs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    stairs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks3x3`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks3x3/${obj.input}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/stairs/blocks3x3/${obj.input}` 
            }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/stairs/blocks3x3`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/stairs/blocks3x3/${obj.input}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "blocks_to_stairs"
            }, stairs3x3Pattern, 8), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("vt-slabs-stairs-to-block") != -1) {
    let rootDirAdv = `../wrapper/datapacks/vt-slabs-stairs-to-block/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/vt-slabs-stairs-to-block/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    stairs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_stairs"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}` } ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/stairs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/stairs2x2/${obj.source}.json`, advancementTemplate({ criterias, recipeAddress: `crafting:${obj.mc_version}/blocks/stairs2x2/${obj.source}` }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/${obj.source}.json`, templateShapelessSingle({
                input: obj.input,
                result: obj.source,
                count: 4,
                group: obj.group ? obj.group : "stairs_to_blocks"
            }, 3), 'utf8');
        };
    });

    slabs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_slab"  ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.input}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${obj.source}` } ] } };

            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x2/`, { recursive: true });
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x1/`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x2/${obj.source}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/blocks/slabs2x2/${obj.source}` 
            }), 'utf8');
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x1/${obj.source}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/blocks/slabs2x1/${obj.source}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/`, { recursive: true });
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/${obj.source}.json`, templateShapedSingle({
                input: obj.input,
                result: obj.source,
                group: obj.group ? obj.group : "slabs_to_blocks"
            }, slabs2x1Pattern, 1), 'utf8');
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/${obj.source}.json`, templateShapelessSingle({
                input: obj.input,
                result: obj.source,
                count: 4,
                group: obj.group ? obj.group : "slabs_to_blocks"
            }, 2), 'utf8');
        };
    });
};

//
fs.rmSync(`../datapack/data`, { recursive: true, force: true });
fs.mkdirSync(`../datapack/data`, { recursive: true });
fs.writeFileSync(`../datapack/pack.mcmeta`, `{"pack":{"pack_format":${dataVersion[usedMCVersion]},"description":"Minecraft crafting recipes overhaul compiled for ${mcVersionString[usedMCVersion]}"}}`, 'utf8');

//
let mergeTrees = new MergeTrees( usedModules.map((M)=>{ return `../wrapper/datapacks/${M}/data`; }), '../datapack/data', { overwrite: true });
mergeTrees.merge();

// remove disallowed version data from "crafting"
let files = fs.readdirSync("../datapack/data/crafting/recipes");
files.forEach((filename)=>{
    if (disallowedData[usedMCVersion].indexOf(filename) != -1) {
        fs.rmSync(`../datapack/data/crafting/recipes/${filename}`, { recursive: true, force: true });
    };
});

// remove disallowed version data from "crafting"
files = fs.readdirSync("../datapack/data/crafting/advancements/recipes/crafting");
files.forEach((filename)=>{
    if (disallowedData[usedMCVersion].indexOf(filename) != -1) {
        fs.rmSync(`../datapack/data/crafting/advancements/recipes/crafting/${filename}`, { recursive: true, force: true });
    };
});

// copy required files
files = fs.readdirSync("./required");
files.forEach((filename)=>{
    fse.copySync(`./required/${filename}`, `../datapack/${filename}`);
});
