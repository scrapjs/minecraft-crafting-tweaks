
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

//
let MergeTrees = require('merge-trees');
let fs = require('fs');
let fse = require('fs-extra');
let {crlf, LF, CRLF, CR} = require('crlf-normalize');

// will used in future
let blocks = JSON.parse(fs.readFileSync("./blocks.json", "utf8"));


let templateShapelessSingle = (options, outCount)=>{
    let tags = [];
    for (let i=0;i<options.count;i++) {
        tags.push(`
        ${JSON.stringify(options.input)}`);
    }
    return crlf(`
{
    "type": "crafting_shapeless",
    "ingredients": [${tags.join(",")}
    ],
    "result": {
        "item": "${options.result["item"]}",
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
        "#": ${JSON.stringify(options.input)}
    },
    "result": {
        "item": "${options.result["item"]}",
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
let namings = {
    "block": "blocks",
    "slab": "slabs",
    "stairs": "stairs",
    "pressure_plate": "pressure_plates",
    "stair": "stairs",
};

//
let generateModuleRecipes = (options)=>{
    let rootDirAdv = `${options.datapack}/data/crafting/advancements/recipes/crafting`;
    let rootDir = `${options.datapack}/data/crafting/recipes`;

    Array.from(Object.entries(options.blocks)).forEach(([key, obj])=>{
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && (options.type != "block" ? obj[options.type] : obj[options.from]) && (options.single ? (options.type != "block" ? obj[options.type] : obj)["single"] : true) && !obj.extra) {
            let criterias = {};
            criterias[`has_${options.type}`] = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj : obj[options.from])["source"] };
            criterias["has_result"]      = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj[options.type] : obj)["source"] };

            //
            let filename = (options.type != "block" ? obj[options.type] : obj)["filename"];
            let directory = `${obj.mc_version}/${namings[options.type]}/${options.subdir||""}`;

            // advancements
            fs.mkdirSync(    `${rootDirAdv}/${directory}`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${directory}/${filename}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${directory}/${filename}` 
            }), 'utf8');
            
            // crafting
            fs.mkdirSync(    `${rootDir}/${directory}`, { recursive: true });
            fs.writeFileSync(`${rootDir}/${directory}/${filename}.json`, options.handler(obj, options), 'utf8');
        };
    });
};

//
let generateVanillaStub = (options)=>{
    let rootDirMc = `${options.datapack}/data/minecraft/recipes`;

    Array.from(Object.entries(options.blocks)).forEach(([key, obj])=>{
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && (options.type != "block" ? obj[options.type] : obj[options.from])) {
            fs.mkdirSync(    `${rootDirMc}`, { recursive: true });
            fs.writeFileSync(`${rootDirMc}/${(options.type != "block" ? obj[options.type] : obj)["filename"]}.json`, templateStub({}), 'utf8');
        };
    });
};

/*
//
if (usedModules.indexOf("co-disable-default-slabs") != -1) {
    generateVanillaStub({
        datapack: `../wrapper/datapacks/co-disable-default-slabs`,
        blocks,
        type: "slab",
        from: "block"
    });
};

//
if (usedModules.indexOf("co-disable-default-stairs") != -1) {
    generateVanillaStub({
        datapack: `../wrapper/datapacks/co-disable-default-stairs`,
        blocks,
        type: "stairs",
        from: "block"
    });
};
*/

//
if (usedModules.indexOf("co-3x1-pressure-plates") != -1) {
    fs.rmSync(`${`../wrapper/datapacks/co-3x1-pressure-plates/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/co-3x1-pressure-plates/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/co-3x1-pressure-plates`,
        blocks,
        type: "pressure_plate",
        from: "block",
        subdir: "",
        handler: (obj, options)=>{
            return templateShapedSingle({
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, PP3x1Pattern, 1);
        }
    });
};

//
if (usedModules.indexOf("co-2x1-slabs") != -1) {
    /*
    generateVanillaStub({
        datapack: `../wrapper/datapacks/co-2x1-slabs`,
        blocks,
        type: "pressure_plate",
        from: "block"
    });*/

    fs.rmSync(`${`../wrapper/datapacks/co-2x1-slabs/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/co-2x1-slabs/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/co-2x1-slabs`,
        blocks,
        type: "slab",
        from: "block",
        subdir: "blocks2x1",
        handler: (obj, options)=>{
            return templateShapedSingle({
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, slabs2x1Pattern, 4);
        }
    });

};

// TODO: multiple configurations
if (usedModules.indexOf("co-1x1-slabs") != -1) {
    fs.rmSync(`${`../wrapper/datapacks/co-1x1-slabs/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/co-1x1-slabs/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/co-1x1-slabs`,
        blocks,
        type: "slab",
        from: "block",
        subdir: "blocks1x1",
        single: true,
        handler: (obj, options)=>{
            return templateShapelessSingle({
                count: 1,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 2);
        }
    });
};

// TODO: multiple configurations
if (usedModules.indexOf("co-2x2-stairs") != -1) {
    fs.rmSync(`${`../wrapper/datapacks/co-2x2-stairs/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/co-2x2-stairs/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/co-2x2-stairs`,
        blocks,
        type: "stairs",
        from: "block",
        subdir: "blocks2x2",
        handler: (obj, options)=>{
            return templateShapedSingle({
                count: 1,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, stairs2x2Pattern, 4);
        }
    });
};

// TODO: multiple configurations
if (usedModules.indexOf("co-3x3-more-stairs") != -1) {
    fs.rmSync(`${`../wrapper/datapacks/co-3x3-more-stairs/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/co-3x3-more-stairs/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/co-3x3-more-stairs`,
        blocks,
        type: "stairs",
        from: "block",
        subdir: "blocks3x3",
        handler: (obj, options)=>{
            return templateShapedSingle({
                count: 1,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, stairs3x3Pattern, 4);
        }
    });
};

// TODO: multiple configurations support
if (usedModules.indexOf("vt-slabs-stairs-to-block") != -1) {
    fs.rmSync(`${`../wrapper/datapacks/vt-slabs-stairs-to-block/data/crafting/advancements/recipes/crafting`}`, { recursive: true, force: true });
    fs.rmSync(`${`../wrapper/datapacks/vt-slabs-stairs-to-block/data/crafting/recipes`}`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/vt-slabs-stairs-to-block`,
        blocks,
        type: "block",
        from: "stairs",
        subdir: "stairs2x2",
        handler: (obj, options)=>{
            return templateShapelessSingle({
                count: 4,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, stairs3x3Pattern, 3);
        }
    });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/vt-slabs-stairs-to-block`,
        blocks,
        type: "block",
        from: "slab",
        subdir: "slabs2x1",
        handler: (obj, options)=>{
            return templateShapedSingle({
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, slabs2x1Pattern, 1);
        }
    });

    generateModuleRecipes({
        datapack: `../wrapper/datapacks/vt-slabs-stairs-to-block`,
        blocks,
        type: "block",
        from: "slab",
        subdir: "slabs2x2",
        handler: (obj, options)=>{
            return templateShapelessSingle({
                count: 4,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 2);
        }
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
