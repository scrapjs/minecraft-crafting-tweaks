
let usedModules = [
    "co-2x2-core", 
    //"co-disable-default-slabs", // if you used Polymorph, you can disable it
    "co-disable-default-stairs", 
    //"co-disable-default-pressure-plates", // recommended for balance, if enabled "co-3x1-pressure-plates", required if you not used Polymorph mod
    "co-2x2-extra-cut-copper",
    "co-2x2-extra-log-crafts", 
    "co-2x2-items", 
    "co-2x1-slabs", 
    "co-1x1-slabs", // may require `allowVanillaRecipeConflicts` and Polymorph mod
    "co-2x2-stairs",
    "co-3x3-more-stairs",
    //"co-3x1-pressure-plates",
    "co-2x2-extra-unpackable",
    "co-2x2-more-bark",
    "co-2x2-extra-polymorph", // conflicts with modified 2x2 crafting recipes, required Polymorph mod for resolve it
    "co-extra-better-dyeables",
    "vt-powder-to-glass", 
    "vt-slabs-stairs-to-block", // may require `allowVanillaRecipeConflicts` and Polymorph mod
    "vt-straight-to-shapeless"
];

let mergeVersions = true; // currently, incompatible with most built-in advancements!
let allowVanillaRecipeConflicts = true; // required Polymorph mod!
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

let mcVersions = ["1_19", "1_18", "1_17", "1_16", "1_15", "1_14", "1_13", "1_xx"];

//
let path = require('path');
let fs = require('fs');
let fse = require('fs-extra');
let {crlf, LF, CRLF, CR} = require('crlf-normalize');

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Smart Merging Directories Library ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
const arrayMerge = (target, source) => {
    target = target || source || [];
    if (source.some(e => { if (e instanceof Object) { return true; } return false; })) {
        //return (target = recursiveMerge(target, source)); // unsupported dublicate detection
        return (target = source); // currently unmergable correctly, it's not object
    } else 
    if (source.some(e => { if (Array.isArray(e)) { return true; } return false; })) {
        return (target = recursiveMerge(target, source)); // try to merge two arrays manually, but there is no correct position detection
    } else {
        return (target = [...new Set([...target,...source])]);
    };
};

//
const objectMerge = (target, source) => {
    target = target || source || {};

    if (Array.isArray(target)) { target = arrayMerge( target, source); } else

    if (target instanceof Object) {
        recursiveMerge(target, source);
    };

    return target;
};

//
const recursiveMerge = (target, source) => {
    target = target || source || {};
    for (let key=0;key<target.length;key++) {
        if (Array.isArray(source[key])    && Array.isArray(target[key])   ) { target[key] =  arrayMerge(target[key], source[key]); } else
        if (source[key] instanceof Object && target[key] instanceof Object) { target[key] = objectMerge(target[key], source[key]); } else
        { target[key] = source[key]; };
    }
    return target;
};

// TODO: remake function
let copyFolderRecursiveSync = (src, dest) => {
    let exists = fs.existsSync(src);
    let stats = exists && fs.statSync(src);
    let isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(function(childItemName) {
            copyFolderRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        if (fs.existsSync(dest)) {
            let matched = src.match(/\.[0-9a-z]+$/i);
            if (matched && matched[0] == ".json") {
                console.log("merging JSON " + src + " to " + dest);
                let srcJson = JSON.parse(fs.readFileSync(src, "utf8"));
                let dstJson = JSON.parse(fs.readFileSync(dest, "utf8"));
                fs.writeFileSync(dest, JSON.stringify(objectMerge(dstJson, srcJson), null, 4), "utf8");
            } else {
                fs.copyFileSync(src, dest);
            }
        } else {
            fs.copyFileSync(src, dest);
        }
    }
};

let mergeDirectories = (inputs, target, options) => {
    Array.from(inputs).forEach((filename)=>{
        copyFolderRecursiveSync(filename, target);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// will used in future
let blocks = JSON.parse(fs.readFileSync("./blocks.json", "utf8"));

// 
let templateStub = (options)=>{
    return crlf(JSON.stringify({"type": "crafting_shaped","group": "stub","pattern": [],"key": {},"result": {"item": "minecraft:air","count": 0}}), CRLF);
};

// TODO: add groups, such as `wooden_slab`, etc.
let templateRecipeSingle = (options, outCount = 1, pattern = null)=>{
    let tags = [];
    for (let i=0;i<options.count;i++) {
        tags.push(`
        ${JSON.stringify(options.input)}`);
    };
    return crlf(pattern ? `{
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
}` : `{
    "type": "crafting_shapeless",
    "ingredients": [${tags.join(",")}
    ],
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

// TODO: shulker boxes support
if (usedModules.indexOf("co-extra-better-dyeables") != -1) {
    let rootDirAdv = `../wrapper/datapacks/co-extra-better-dyeables/data/better_dyeables/advancements/recipes/better_dyeables`;
    let rootDir = `../wrapper/datapacks/co-extra-better-dyeables/data/better_dyeables/recipes`;
    let rootDirMc = `../wrapper/datapacks/co-extra-better-dyeables/data/minecraft/recipes`;

    fs.rmSync(`${rootDirAdv}`, { recursive: true, force: true });
    fs.rmSync(`${rootDir}`, { recursive: true, force: true });

    names.forEach((name)=>{
        colors.forEach((color)=>{
            let rejectionCode = color != "default" ? `/not_${color}` : ``;
            let mcName = 
                (name == "glass" || name == "glass_pane") && 
                color != "default" ? 
                `${color}_stained_${name}` : 
                    (color != "default" ? `${color}_${name}` : `${name}`);
            
            // kill vanilla dyeing!
            if (color != "default" && name != "glazed_terracotta" && name != "concrete_powder" && name != "concrete" && name != "banner") {
                fs.mkdirSync(    `${rootDirMc}`, { recursive: true });
                
                if (name == "bed") {
                    if (color != "white") { fs.writeFileSync(`${rootDirMc}/${mcName}_from_white_${name}.json`, templateStub({}), 'utf8'); };
                } else
                if (name == "carpet") {
                    if (color != "white") { fs.writeFileSync(`${rootDirMc}/${mcName}_from_white_${name}.json`, templateStub({}), 'utf8'); };
                } else
                if (name == "glass_pane") {
                    if (color != "default") { fs.writeFileSync(`${rootDirMc}/${mcName}_from_${name}.json`, templateStub({}), 'utf8'); };
                } else
                if (name == "glass") {
                    if (color != "default") { fs.writeFileSync(`${rootDirMc}/${mcName}_from_${name}.json`, templateStub({}), 'utf8'); };
                } else
                {
                    fs.writeFileSync(`${rootDirMc}/${mcName}.json`, templateStub({}), 'utf8');
                }
            };
            
            //
            let maxCount = name != "bed" ? 8 : 1;
            for (let i=1;i<=maxCount;i++) {
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
        let outsource = options.type != "block" ? obj[options.type] : obj[options.from];
        
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && outsource && !outsource.extra && (options.single ? ((options.type != "block" ? obj[options.type] : obj)["single"] || allowVanillaRecipeConflicts) : true) && !obj.extra) {
            let criterias = {};
            criterias[`has_${options.type}`] = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj : obj[options.from])["source"] };
            criterias["has_result"]          = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj[options.type] : obj)["source"] };

            //
            let filename = (options.type != "block" ? obj[options.type] : obj)["filename"];
            let unversion = `${namings[options.type]}/${options.subdir||""}`;
            let directory = `${obj.mc_version}/${unversion}`;

            // advancements
            fs.mkdirSync(    `${rootDirAdv}/${directory}`, { recursive: true });
            fs.writeFileSync(`${rootDirAdv}/${directory}/${filename}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${mergeVersions ? unversion : directory}/${filename}` 
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
    let datapack = `../wrapper/datapacks/co-3x1-pressure-plates`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "pressure_plate",
        from: "block",
        subdir: "",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 3,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 1, PP3x1Pattern);
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

    let datapack = `../wrapper/datapacks/co-2x1-slabs`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "slab",
        from: "block",
        subdir: "blocks2x1",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 2,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 4, slabs2x1Pattern);
        }
    });

};

// TODO: multiple configurations
if (usedModules.indexOf("co-1x1-slabs") != -1) {
    let datapack = `../wrapper/datapacks/co-1x1-slabs`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "slab",
        from: "block",
        subdir: "blocks1x1",
        single: true,
        handler: (obj, options)=>{
            return templateRecipeSingle({
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
    let datapack = `../wrapper/datapacks/co-2x2-stairs`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "stairs",
        from: "block",
        subdir: "blocks2x2",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 1,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 4, stairs2x2Pattern);
        }
    });
};

// TODO: multiple configurations
if (usedModules.indexOf("co-3x3-more-stairs") != -1) {
    let datapack = `../wrapper/datapacks/co-3x3-more-stairs`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "stairs",
        from: "block",
        subdir: "blocks3x3",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 1,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 8, stairs3x3Pattern);
        }
    });
};

// TODO: multiple configurations support
if (usedModules.indexOf("vt-slabs-stairs-to-block") != -1) {
    let datapack = `../wrapper/datapacks/vt-slabs-stairs-to-block`;
    fs.rmSync(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
    fs.rmSync(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "block",
        from: "stairs",
        subdir: "stairs4x",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 4,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 3);
        }
    });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "block",
        from: "slab",
        subdir: allowVanillaRecipeConflicts ? "slabs2x" : "slabs2x1",
        handler: (obj, options)=>{
            return templateRecipeSingle({
                count: 2,
                input:  (options.type != "block" ? obj : obj[options.from])["source"],
                result: (options.type != "block" ? obj[options.type] : obj)["source"],
                group: obj.group ? obj.group : namings[options.type]
            }, 1, allowVanillaRecipeConflicts ? null : slabs2x1Pattern);
        }
    });

    generateModuleRecipes({
        datapack,
        blocks,
        type: "block",
        from: "slab",
        subdir: "slabs4x",
        handler: (obj, options)=>{
            return templateRecipeSingle({
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
mergeDirectories(usedModules.map((M)=>{ return `../wrapper/datapacks/${M}/data`; }), '../datapack/data', { overwrite: true });

let mergeVersionsFn = (directory = `../datapack/data/crafting/recipes`)=>{
    let outputs = {};
    let files = fs.readdirSync(`${directory}`);
    
    files.forEach((filename)=>{
        if (mcVersions.indexOf(filename) != -1) {
            let versioned = fs.readdirSync(`${directory}/${filename}`);
            versioned.forEach((fn)=>{
                outputs[`${directory}/${fn}`] = outputs[`${directory}/${fn}`] || [];
                outputs[`${directory}/${fn}`].push(`${directory}/${filename}/${fn}`);
            });
        };
    });

    for (let key in outputs) {
        mergeDirectories(outputs[key], key, { overwrite: true });
    };

    files.forEach((filename)=>{
        if (mcVersions.indexOf(filename) != -1 && mergeVersions) {
            fs.rmSync(`${directory}/${filename}`, { recursive: true, force: true });
        };
    });
};

let removeDisallowedFn = (directory = `../datapack/data/crafting/recipes`)=>{
    let files = fs.readdirSync(`${directory}`);
    files.forEach((filename)=>{
        if (disallowedData[usedMCVersion].indexOf(filename) != -1) {
            fs.rmSync(`${directory}/${filename}`, { recursive: true, force: true });
        }
    });
};

// remove disallowed version data from "crafting"
{
    removeDisallowedFn(`../datapack/data/crafting/recipes`);
    removeDisallowedFn(`../datapack/data/crafting/advancements/recipes/crafting`);
};

//
if (mergeVersions) {
    mergeVersionsFn(`../datapack/data/crafting/recipes`);
    mergeVersionsFn(`../datapack/data/crafting/advancements/recipes/crafting`);
};

// copy required files
{
    let files = fs.readdirSync("./required");
    files.forEach((filename)=>{
        fse.copySync(`./required/${filename}`, `../datapack/${filename}`);
    });
}
