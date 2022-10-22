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

    {"source": "minecraft:copper_block", "input": "minecraft:cut_copper_slab", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:weathered_copper", "input": "minecraft:weathered_cut_copper_slab", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:exposed_copper", "input": "minecraft:exposed_cut_copper_slab", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:oxidized_copper", "input": "minecraft:oxidized_cut_copper_slab", "mc_version": "1_17", "alternate": true, "extra": true},

    {"source": "minecraft:waxed_copper_block", "input": "minecraft:waxed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_cut_copper_slab", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_weathered_copper", "input": "minecraft:waxed_weathered_cut_copper_slab", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_slab", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_exposed_copper", "input": "minecraft:waxed_exposed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_slab", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_oxidized_copper", "input": "minecraft:waxed_oxidized_cut_copper_slab", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_slab", "alternate": true, "extra": true},

    {"source": "minecraft:cut_copper", "input": "minecraft:cut_copper_slab", "mc_version": "1_17", from: ["copper_block"], single: true},
    {"source": "minecraft:weathered_cut_copper", "input": "minecraft:weathered_cut_copper_slab", "mc_version": "1_17", single: true},
    {"source": "minecraft:exposed_cut_copper", "input": "minecraft:exposed_cut_copper_slab", "mc_version": "1_17", single: true},
    {"source": "minecraft:oxidized_cut_copper", "input": "minecraft:oxidized_cut_copper_slab", "mc_version": "1_17", single: true},

    {"source": "minecraft:waxed_cut_copper", "input": "minecraft:waxed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_cut_copper_slab", single: true},
    {"source": "minecraft:waxed_weathered_cut_copper", "input": "minecraft:waxed_weathered_cut_copper_slab", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_slab", single: true},
    {"source": "minecraft:waxed_exposed_cut_copper", "input": "minecraft:waxed_exposed_cut_copper_slab", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_slab", single: true},
    {"source": "minecraft:waxed_oxidized_cut_copper", "input": "minecraft:waxed_oxidized_cut_copper_slab", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_slab", single: true},

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

    {"source": "minecraft:copper_block", "input": "minecraft:cut_copper_stairs", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:weathered_copper", "input": "minecraft:weathered_cut_copper_stairs", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:exposed_copper", "input": "minecraft:exposed_cut_copper_stairs", "mc_version": "1_17", "alternate": true, "extra": true},
    {"source": "minecraft:oxidized_copper", "input": "minecraft:oxidized_cut_copper_stairs", "mc_version": "1_17", "alternate": true, "extra": true},

    {"source": "minecraft:waxed_copper_block", "input": "minecraft:waxed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_cut_copper_stairs", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_weathered_copper", "input": "minecraft:waxed_weathered_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_stairs", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_exposed_copper", "input": "minecraft:waxed_exposed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_stairs", "alternate": true, "extra": true},
    {"source": "minecraft:waxed_oxidized_copper", "input": "minecraft:waxed_oxidized_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_stairs", "alternate": true, "extra": true},

    {"source": "minecraft:cut_copper", "input": "minecraft:cut_copper_stairs", "mc_version": "1_17"},
    {"source": "minecraft:weathered_cut_copper", "input": "minecraft:weathered_cut_copper_stairs", "mc_version": "1_17"},
    {"source": "minecraft:exposed_cut_copper", "input": "minecraft:exposed_cut_copper_stairs", "mc_version": "1_17"},
    {"source": "minecraft:oxidized_cut_copper", "input": "minecraft:oxidized_cut_copper_stairs", "mc_version": "1_17"},

    {"source": "minecraft:waxed_cut_copper", "input": "minecraft:waxed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_cut_copper_stairs"},
    {"source": "minecraft:waxed_weathered_cut_copper", "input": "minecraft:waxed_weathered_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_weathered_cut_copper_stairs"},
    {"source": "minecraft:waxed_exposed_cut_copper", "input": "minecraft:waxed_exposed_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_exposed_cut_copper_stairs"},
    {"source": "minecraft:waxed_oxidized_cut_copper", "input": "minecraft:waxed_oxidized_cut_copper_stairs", "mc_version": "1_17", "group": "waxed_oxidized_cut_copper_stairs"},

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

let blocks = {};

slabs.forEach((obj)=>{
    blocks[obj.source] = Object.assign(blocks[obj.source] || {});
    blocks[obj.source].source = { "item": obj.source };
    blocks[obj.source].filename = obj.source.split(":")[1];
    blocks[obj.source].mc_version = blocks[obj.source].mc_version || obj.mc_version; // TODO: correct MC version
    blocks[obj.source].slab = {
        "filename": obj.alternate ? (obj.input.split(":")[1] + "_from_" + blocks[obj.source].filename) : obj.input.split(":")[1],
        "source": { "item": obj.input }, 
        "group": obj.group || "", 
        "mc_version": obj.mc_version, 
        "alternate": obj.alternate || false, 
        "single": obj.single || false,
        
        // balance options
        "balance": {
            "requiredCount": 1,
            "resultCount": 2
        }
    };
});

stairs.forEach((obj)=>{
    blocks[obj.source] = Object.assign(blocks[obj.source] || {});
    blocks[obj.source].source = { "item": obj.source };
    blocks[obj.source].filename = obj.source.split(":")[1];
    blocks[obj.source].mc_version = blocks[obj.source].mc_version || obj.mc_version; // TODO: correct MC version
    blocks[obj.source].stairs = {
        "filename": obj.alternate ? (obj.input.split(":")[1] + "_from_" + blocks[obj.source].filename) : obj.input.split(":")[1],
        "source": { "item": obj.input }, 
        "group": obj.group || "", 
        "mc_version": obj.mc_version, 
        "alternate": obj.alternate || false, 
        "single": obj.single || false,
        
        // balance options
        "balance": {
            "requiredCount": 3,
            "resultCount": 4
        }
    };
});

pressure_plates.forEach((obj)=>{
    blocks[obj.source] = Object.assign(blocks[obj.source] || {});
    blocks[obj.source].source = { "item": obj.source };
    blocks[obj.source].filename = obj.source.split(":")[1];
    blocks[obj.source].mc_version = blocks[obj.source].mc_version || obj.mc_version; // TODO: correct MC version
    blocks[obj.source].pressure_plate = {
        "filename": obj.alternate ? (obj.input.split(":")[1] + "_from_" + blocks[obj.source].filename) : obj.input.split(":")[1],
        "source": { "item": obj.input }, 
        "group": obj.group || "", 
        "mc_version": obj.mc_version, 
        "alternate": obj.alternate || false, 
        "single": obj.single || false,
        
        // balance options
        "balance": {
            "requiredCount": 3,
            "resultCount": 1
        }
    };
});

let fs = require("fs");
fs.writeFileSync("blocks.json", JSON.stringify(blocks, null, 4), "utf8");

