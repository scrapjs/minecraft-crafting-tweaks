
let usedModules = [
    "co-2x2-core", 
    "co-disable-default-slabs", 
    "co-disable-default-stairs", 
    "co-2x2-extra-cut-copper",
    "co-2x2-extra-log-crafts", 
    "co-2x2-items", 
    "co-2x1-slabs", 
    "co-1x1-slabs", 
    "co-2x2-stairs",
    "co-3x3-more-stairs",
    "co-3x1-pressure-plates",
    "co-2x2-extra-unpackable",
    "co-2x2-more-bark",
    "co-extra-better-dyeables",
    "vt-powder-to-glass", 
    "vt-slabs-stairs-to-block",
    "vt-straight-to-shapeless"
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
    {"source": "minecraft:blackstone", "input": "minecraft:blackstone_slab", "mc_version": "1_16", single: true},
    {"source": "minecraft:crimson_planks", "input": "minecraft:crimson_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "minecraft:warped_planks", "input": "minecraft:warped_slab", "mc_version": "1_16", "group": "wooden_slab"},
    {"source": "minecraft:polished_blackstone", "input": "minecraft:polished_blackstone_slab", "mc_version": "1_16"},
    {"source": "minecraft:polished_blackstone_bricks", "input": "minecraft:polished_blackstone_brick_slab", "mc_version": "1_16", single: true},

    {"source": "minecraft:cobbled_deepslate", "input": "minecraft:cobbled_deepslate_slab", "mc_version": "1_17", single: true},
    {"source": "minecraft:deepslate_bricks", "input": "minecraft:deepslate_brick_slab", "mc_version": "1_17", single: true},
    {"source": "minecraft:deepslate_tiles", "input": "minecraft:deepslate_tile_slab", "mc_version": "1_17", single: true},
    {"source": "minecraft:polished_deepslate", "input": "minecraft:polished_deepslate_slab", "mc_version": "1_17", single: true},

    {"source": "minecraft:cut_copper", "input": "minecraft:cut_copper_slab", "mc_version": "1_17", from: ["copper_block"], single: true},
    {"source": "minecraft:weathered_cut_copper", "input": "minecraft:weathered_cut_copper_slab", "mc_version": "1_17", from: ["weathered_copper"], single: true},
    {"source": "minecraft:exposed_cut_copper", "input": "minecraft:exposed_cut_copper_slab", "mc_version": "1_17", from: ["exposed_copper"], single: true},
    {"source": "minecraft:oxidized_cut_copper", "input": "minecraft:oxidized_cut_copper_slab", "mc_version": "1_17", from: ["oxidized_copper"], single: true},

    {"source": "minecraft:waxed_cut_copper", "input": "minecraft:waxed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_cut_copper_slab", from: ["waxed_copper_block"], single: true},
    {"source": "minecraft:waxed_weathered_cut_copper", "input": "minecraft:waxed_weathered_cut_copper_slab", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_slab",from: ["waxed_weathered_copper"], single: true},
    {"source": "minecraft:waxed_exposed_cut_copper", "input": "minecraft:waxed_exposed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_slab",from: ["waxed_exposed_copper"], single: true},
    {"source": "minecraft:waxed_oxidized_cut_copper", "input": "minecraft:waxed_oxidized_cut_copper_slab", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_slab",from: ["waxed_oxidized_copper"], single: true},

    {"source": "minecraft:mangrove_planks", "input": "minecraft:mangrove_slab", "mc_version": "1_19", "group": "wooden_slab"},
    {"source": "minecraft:mud_bricks", "input": "minecraft:mud_brick_slab", "mc_version": "1_19", single: true},

    {"source": "minecraft:acacia_planks", "input": "minecraft:acacia_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "minecraft:oak_planks", "input": "minecraft:oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "minecraft:dark_oak_planks", "input": "minecraft:dark_oak_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "minecraft:birch_planks", "input": "minecraft:birch_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "minecraft:spruce_planks", "input": "minecraft:spruce_slab", "mc_version": "1_xx", "group": "wooden_slab"},
    {"source": "minecraft:jungle_planks", "input": "minecraft:jungle_slab", "mc_version": "1_xx", "group": "wooden_slab"},

    {"source": "minecraft:bricks", "input": "minecraft:brick_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:cobblestone", "input": "minecraft:cobblestone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:mossy_cobblestone", "input": "minecraft:mossy_cobblestone_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:stone_bricks", "input": "minecraft:stone_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:stone", "input": "minecraft:stone_slab", "mc_version": "1_xx"},
    {"source": "minecraft:mossy_stone_bricks", "input": "minecraft:mossy_stone_brick_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:cut_red_sandstone", "input": "minecraft:cut_red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:cut_sandstone", "input": "minecraft:cut_sandstone_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:red_sandstone", "input": "minecraft:red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:sandstone", "input": "minecraft:sandstone_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:smooth_stone", "input": "minecraft:smooth_stone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:smooth_sandstone", "input": "minecraft:smooth_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:smooth_red_sandstone", "input": "minecraft:smooth_red_sandstone_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:smooth_quartz", "input": "minecraft:smooth_quartz_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:red_nether_bricks", "input": "minecraft:red_nether_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:nether_bricks", "input": "minecraft:nether_brick_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:diorite", "input": "minecraft:diorite_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:granite", "input": "minecraft:granite_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:andesite", "input": "minecraft:andesite_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:polished_diorite", "input": "minecraft:polished_diorite_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:polished_granite", "input": "minecraft:polished_granite_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:polished_andesite", "input": "minecraft:polished_andesite_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:prismarine_bricks", "input": "minecraft:prismarine_brick_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:prismarine", "input": "minecraft:prismarine_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:dark_prismarine", "input": "minecraft:dark_prismarine_slab", "mc_version": "1_xx", single: true},

    {"source": "minecraft:quartz_block", "input": "minecraft:quartz_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:purpur_block", "input": "minecraft:purpur_slab", "mc_version": "1_xx", single: true},
    {"source": "minecraft:end_stone_bricks", "input": "minecraft:end_stone_brick_slab", "mc_version": "1_xx", single: true}
];

let stairs = [
    {"source": "minecraft:blackstone", "input": "minecraft:blackstone_stairs", "mc_version": "1_16"},
    {"source": "minecraft:crimson_planks", "input": "minecraft:crimson_stairs", "group": "wooden_stairs", "mc_version": "1_16"},
    {"source": "minecraft:warped_planks", "input": "minecraft:warped_stairs", "group": "wooden_stairs", "mc_version": "1_16"},
    {"source": "minecraft:polished_blackstone", "input": "minecraft:polished_blackstone_stairs", "mc_version": "1_16"},
    {"source": "minecraft:polished_blackstone_bricks", "input": "minecraft:polished_blackstone_brick_stairs", "mc_version": "1_16"},

    {"source": "minecraft:cobbled_deepslate", "input": "minecraft:cobbled_deepslate_stairs", "mc_version": "1_17"},
    {"source": "minecraft:deepslate_bricks", "input": "minecraft:deepslate_brick_stairs", "mc_version": "1_17"},
    {"source": "minecraft:deepslate_tiles", "input": "minecraft:deepslate_tile_stairs", "mc_version": "1_17"},
    {"source": "minecraft:polished_deepslate", "input": "minecraft:polished_deepslate_stairs", "mc_version": "1_17"},

    {"source": "minecraft:cut_copper", "input": "minecraft:cut_copper_stairs", "mc_version": "1_17", from: ["copper_block"]},
    {"source": "minecraft:weathered_cut_copper", "input": "minecraft:weathered_cut_copper_stairs", "mc_version": "1_17", from: ["weathered_copper"]},
    {"source": "minecraft:exposed_cut_copper", "input": "minecraft:exposed_cut_copper_stairs", "mc_version": "1_17", from: ["exposed_copper"]},
    {"source": "minecraft:oxidized_cut_copper", "input": "minecraft:oxidized_cut_copper_stairs", "mc_version": "1_17", from: ["oxidized_copper"]},

    {"source": "minecraft:waxed_cut_copper", "input": "minecraft:waxed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_cut_copper_stairs", from: ["waxed_copper_block"]},
    {"source": "minecraft:waxed_weathered_cut_copper", "input": "minecraft:waxed_weathered_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_stairs", from: ["waxed_weathered_copper"]},
    {"source": "minecraft:waxed_exposed_cut_copper", "input": "minecraft:waxed_exposed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_stairs", from: ["waxed_exposed_copper"]},
    {"source": "minecraft:waxed_oxidized_cut_copper", "input": "minecraft:waxed_oxidized_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_stairs", from: ["waxed_oxidized_copper"]},

    {"source": "minecraft:mangrove_planks", "input": "minecraft:mangrove_stairs", "group": "wooden_stairs", "mc_version": "1_19"},
    {"source": "minecraft:mud_bricks", "input": "minecraft:mud_brick_stairs", "mc_version": "1_19"},

    {"source": "minecraft:acacia_planks", "input": "minecraft:acacia_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:oak_planks", "input": "minecraft:oak_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:dark_oak_planks", "input": "minecraft:dark_oak_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:birch_planks", "input": "minecraft:birch_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:spruce_planks", "input": "minecraft:spruce_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:jungle_planks", "input": "minecraft:jungle_stairs", "group": "wooden_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:bricks", "input": "minecraft:brick_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:cobblestone", "input": "minecraft:cobblestone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:mossy_cobblestone", "input": "minecraft:mossy_cobblestone_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:stone_bricks", "input": "minecraft:stone_brick_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:stone", "input": "minecraft:stone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:mossy_stone_bricks", "input": "minecraft:mossy_stone_brick_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:cut_red_sandstone", "input": "minecraft:cut_red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:cut_sandstone", "input": "minecraft:cut_sandstone_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:red_sandstone", "input": "minecraft:red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:sandstone", "input": "minecraft:sandstone_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:smooth_sandstone", "input": "minecraft:smooth_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:smooth_red_sandstone", "input": "minecraft:smooth_red_sandstone_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:smooth_quartz", "input": "minecraft:smooth_quartz_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:red_nether_bricks", "input": "minecraft:red_nether_brick_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:nether_bricks", "input": "minecraft:nether_brick_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:diorite", "input": "minecraft:diorite_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:granite", "input": "minecraft:granite_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:andesite", "input": "minecraft:andesite_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:polished_diorite", "input": "minecraft:polished_diorite_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:polished_granite", "input": "minecraft:polished_granite_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:polished_andesite", "input": "minecraft:polished_andesite_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:prismarine_bricks", "input": "minecraft:prismarine_brick_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:prismarine", "input": "minecraft:prismarine_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:dark_prismarine", "input": "minecraft:dark_prismarine_stairs", "mc_version": "1_xx"},

    {"source": "minecraft:quartz_block", "input": "minecraft:quartz_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:purpur_block", "input": "minecraft:purpur_stairs", "mc_version": "1_xx"},
    {"source": "minecraft:end_stone_bricks", "input": "minecraft:end_stone_brick_stairs", "mc_version": "1_xx"}
];

let pressure_plates = [
    {"source": "minecraft:mangrove_planks", "input": "minecraft:mangrove_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_19"},

    {"source": "minecraft:crimson_planks", "input": "minecraft:crimson_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_16"},
    {"source": "minecraft:warped_planks", "input": "minecraft:warped_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_16"},
    {"source": "minecraft:polished_blackstone", "input": "minecraft:polished_blackstone_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_16"},

    {"source": "minecraft:acacia_planks", "input": "minecraft:acacia_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:oak_planks", "input": "minecraft:oak_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:dark_oak_planks", "input": "minecraft:dark_oak_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:birch_planks", "input": "minecraft:birch_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:spruce_planks", "input": "minecraft:spruce_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:jungle_planks", "input": "minecraft:jungle_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:stone", "input": "minecraft:stone_pressure_plate", "group": "wooden_pressure_plate", "mc_version": "1_xx"},

    {"source": "minecraft:iron_ingot", "input": "minecraft:heavy_weighted_pressure_plate", "mc_version": "1_xx"},
    {"source": "minecraft:gold_ingot", "input": "minecraft:light_weighted_pressure_plate", "mc_version": "1_xx"}
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
        {"item": "${options.input}"}`);
    }
    return crlf(`
{
    "type": "crafting_shapeless",
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
    return crlf(JSON.stringify({"type": "crafting_shaped","group": "stub","pattern": [],"key": {},"result": {"item": "minecraft:air","count": 0}}), CRLF);
};

// TODO: add groups, such as `wooden_slab`, etc.
let templateShapedSingle = (options, pattern, outCount)=>{
    return crlf(`{
    "type": "crafting_shaped",
    "pattern": [${pattern}],
    "key": {
        "#": {"item": "${options.input}"}
    },
    "result": {
        "item": "${options.result}",
        "count": ${outCount}
    },
    "group": "${options.group}"
}`, CRLF);
};

let PP3x1Pattern = `"###"`;
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
    "type": "crafting_shapeless",
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
//
if (usedModules.indexOf("co-disable-default-slabs") != -1) {
    let rootDir = `../wrapper/datapacks/co-disable-default-slabs/data/minecraft/recipes`;

    //fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    slabs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.input.split(":")[1]}.json`, templateStub({}), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-disable-default-stairs") != -1) {
    let rootDir = `../wrapper/datapacks/co-disable-default-stairs/data/minecraft/recipes`;

    //fs.rmSync(`${rootDir}`, { recursive: true, force: true });
    stairs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDir}`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.input.split(":")[1]}.json`, templateStub({}), 'utf8');
        };
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
if (usedModules.indexOf("co-3x1-pressure-plates") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-3x1-pressure-plates/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-3x1-pressure-plates/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    pressure_plates.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/pressure_plates`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/pressure_plates/${obj.input.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/pressure_plates/${obj.input.split(":")[1]}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/pressure_plates`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/pressure_plates/${obj.input.split(":")[1]}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "pressure_plates"
            }, PP3x1Pattern, 1), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-2x1-slabs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-2x1-slabs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-2x1-slabs/data/crafting/recipes`;
    let rootDirMc = `../wrapper/datapacks/co-2x1-slabs/data/minecraft/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    /*
    pressure_plates.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            fs.mkdirSync(`${rootDirMc}`, { recursive: true });
            fs.writeFileSync(`${rootDirMc}/${obj.input.split(":")[1]}.json`, templateStub({}), 'utf8');
        };
    });*/

    slabs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks2x1`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks2x1/${obj.input.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/slabs/blocks2x1/${obj.input.split(":")[1]}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/slabs/blocks2x1/${obj.input.split(":")[1]}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "blocks_to_slabs"
            }, slabs2x1Pattern, 4), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-1x1-slabs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-1x1-slabs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-1x1-slabs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    slabs.forEach((obj)=>{
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && obj.single) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks1x1`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/slabs/blocks1x1/${obj.input.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/slabs/blocks1x1/${obj.input.split(":")[1]}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/slabs/blocks1x1`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/slabs/blocks1x1/${obj.input.split(":")[1]}.json`, templateShapelessSingle({
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
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks2x2`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks2x2/${obj.input.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/stairs/blocks2x2/${obj.input.split(":")[1]}` 
            }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/stairs/blocks2x2/${obj.input.split(":")[1]}.json`, templateShapedSingle({
                input: obj.source,
                result: obj.input,
                group: obj.group ? obj.group : "blocks_to_stairs"
            }, stairs2x2Pattern, 4), 'utf8');
        };
    });
};

//
if (usedModules.indexOf("co-3x3-more-stairs") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-3x3-more-stairs/data/crafting/advancements/recipes/crafting`;
    let rootDir = `../wrapper/datapacks/co-3x3-more-stairs/data/crafting/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    stairs.forEach((obj)=>{
        if (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) {
            let criterias = {};
            criterias["has_block" ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks3x3`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/stairs/blocks3x3/${obj.input.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/stairs/blocks3x3/${obj.input.split(":")[1]}` 
            }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/stairs/blocks3x3`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/stairs/blocks3x3/${obj.input.split(":")[1]}.json`, templateShapedSingle({
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
            criterias["has_stairs"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}` } ] } };
            
            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/stairs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/stairs2x2/${obj.source.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/blocks/stairs2x2/${obj.source.split(":")[1]}` 
            }), 'utf8');

            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/stairs2x2/${obj.source.split(":")[1]}.json`, templateShapelessSingle({
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
            criterias["has_slab"  ] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.input}`} ] } };
            criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `${obj.source}` } ] } };

            // advancements
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x2/`, { recursive: true });
            fs.mkdirSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x1/`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x2/${obj.source.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/blocks/slabs2x2/${obj.source.split(":")[1]}` 
            }), 'utf8');
            fs.writeFileSync(`${rootDirAdv}/${obj.mc_version}/blocks/slabs2x1/${obj.source.split(":")[1]}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${obj.mc_version}/blocks/slabs2x1/${obj.source.split(":")[1]}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/`, { recursive: true });
            fs.mkdirSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x1/${obj.source.split(":")[1]}.json`, templateShapedSingle({
                input: obj.input,
                result: obj.source,
                group: obj.group ? obj.group : "slabs_to_blocks"
            }, slabs2x1Pattern, 1), 'utf8');
            fs.writeFileSync(`${rootDir}/${obj.mc_version}/blocks/slabs2x2/${obj.source.split(":")[1]}.json`, templateShapelessSingle({
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
