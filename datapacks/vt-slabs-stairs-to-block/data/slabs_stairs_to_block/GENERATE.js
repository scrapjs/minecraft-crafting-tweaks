let slabs = [
    {"source": "blackstone", "input": "blackstone_slab", "mc_version": "1_16"},
    {"source": "crimson_planks", "input": "crimson_slab", "mc_version": "1_16"},
    {"source": "warped_planks", "input": "warped_slab", "mc_version": "1_16"},
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

    {"source": "waxed_cut_copper", "input": "waxed_cut_copper_slab", "mc_version": "1_17", from: ["waxed_copper_block"]},
    {"source": "waxed_weathered_cut_copper", "input": "waxed_weathered_cut_copper_slab", "mc_version": "1_17", from: ["waxed_weathered_copper"]},
    {"source": "waxed_exposed_cut_copper", "input": "waxed_exposed_cut_copper_slab", "mc_version": "1_17", from: ["waxed_exposed_copper"]},
    {"source": "waxed_oxidized_cut_copper", "input": "waxed_oxidized_cut_copper_slab", "mc_version": "1_17", from: ["waxed_oxidized_copper"]},

    {"source": "mangrove_planks", "input": "mangrove_slab", "mc_version": "1_19"},
    {"source": "mud_bricks", "input": "mud_brick_slab", "mc_version": "1_19"},

    {"source": "acacia_planks", "input": "acacia_slab", "mc_version": "1_xx"},
    {"source": "oak_planks", "input": "oak_slab", "mc_version": "1_xx"},
    {"source": "dark_oak_planks", "input": "dark_oak_slab", "mc_version": "1_xx"},
    {"source": "birch_planks", "input": "birch_slab", "mc_version": "1_xx"},
    {"source": "spruce_planks", "input": "spruce_slab", "mc_version": "1_xx"},
    {"source": "jungle_planks", "input": "jungle_slab", "mc_version": "1_xx"},

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
    {"source": "crimson_planks", "input": "crimson_stairs", "mc_version": "1_16"},
    {"source": "warped_planks", "input": "warped_stairs", "mc_version": "1_16"},
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

    {"source": "waxed_cut_copper", "input": "waxed_cut_copper_stairs", "mc_version": "1_17", from: ["waxed_copper_block"]},
    {"source": "waxed_weathered_cut_copper", "input": "waxed_weathered_cut_copper_stairs", "mc_version": "1_17", from: ["waxed_weathered_copper"]},
    {"source": "waxed_exposed_cut_copper", "input": "waxed_exposed_cut_copper_stairs", "mc_version": "1_17", from: ["waxed_exposed_copper"]},
    {"source": "waxed_oxidized_cut_copper", "input": "waxed_oxidized_cut_copper_stairs", "mc_version": "1_17", from: ["waxed_oxidized_copper"]},

    {"source": "mangrove_planks", "input": "mangrove_stairs", "mc_version": "1_19"},
    {"source": "mud_bricks", "input": "mud_brick_stairs", "mc_version": "1_19"},

    {"source": "acacia_planks", "input": "acacia_stairs", "mc_version": "1_xx"},
    {"source": "oak_planks", "input": "oak_stairs", "mc_version": "1_xx"},
    {"source": "dark_oak_planks", "input": "dark_oak_stairs", "mc_version": "1_xx"},
    {"source": "birch_planks", "input": "birch_stairs", "mc_version": "1_xx"},
    {"source": "spruce_planks", "input": "spruce_stairs", "mc_version": "1_xx"},
    {"source": "jungle_planks", "input": "jungle_stairs", "mc_version": "1_xx"},

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


let templateSlab2x2 = (options)=>{
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


let templateStairs2x2 = (options)=>{
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


let templateSlab2x1 = (options)=>{
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


let fs = require('fs');





stairs.forEach((obj)=>{
    fs.mkdirSync(`recipes/stairs/${obj.mc_version}`, { recursive: true });
    fs.writeFileSync(`recipes/stairs/${obj.mc_version}/${obj.source}.json`, templateStairs2x2(obj), 'utf8');
});

slabs.forEach((obj)=>{
    fs.mkdirSync(`recipes/slabs/${obj.mc_version}`, { recursive: true });
    fs.writeFileSync(`recipes/slabs/${obj.mc_version}/${obj.source}.json`, templateSlab2x2(obj), 'utf8');

    fs.mkdirSync(`recipes/slabs2x/${obj.mc_version}`, { recursive: true });
    fs.writeFileSync(`recipes/slabs2x/${obj.mc_version}/${obj.source}.json`, templateSlab2x1(obj), 'utf8');
});
