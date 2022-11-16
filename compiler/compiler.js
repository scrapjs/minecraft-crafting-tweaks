
let usedModules = [
    "co-2x2-core", 
    "co-hardcraft",
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

//
let experimentalDatapacks = true; // required Fabric mod!
let mergeVersions = true; // currently, incompatible with most built-in advancements!
let allowVanillaRecipeConflicts = true; // required Polymorph mod!
let usedMCVersion = "1_19";

//
let srcDir = `../wrapper/datapacks/`;
let dstDir = `../src/main/resources/datapacks`;
let dataIdentifier = `crop`;

//
let disallowedData = {
    "1_20": [],
    "1_19": ["1.20"],//["1_19", "1_18", "1_17", "1_16", "1_xx"],
    "1_18": ["1.20", "1_19"],//["1_18", "1_17", "1_16", "1_xx"],
    "1_17": ["1.20", "1_19", "1_18"],//["1_17", "1_16", "1_xx"],
    "1_16": ["1.20", "1_19", "1_18", "1_17"],//["1_16", "1_xx"]
    "1_15": ["1.20", "1_19", "1_18", "1_17", "1_16"],
    "1_xx": ["1.20", "1_19", "1_18", "1_17", "1_16"]
};

let dataVersion = {
    "1_20": 10,
    "1_19": 10,
    "1_18": 9,
    "1_17": 8,
    "1_16": 7,
    "1_15": 6,
    "1_xx": 6
};

let mcVersionString = {
    "1_20": "1.20.x",
    "1_19": "1.19.x",
    "1_18": "1.18.x",
    "1_17": "1.17.x",
    "1_16": "1.16.x",
    "1_15": "1.15.x",
    "1_xx": "1.15.x"
};

// 
let mcVersions = ["1_20", "1_19", "1_18", "1_17", "1_16", "1_15", "1_14", "1_13", "1_xx"];

//
let path;
let fs;
let fse;
let crlf, LF, CRLF, CR;
let fsPromises;
let fsePromises;

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Smart Merging Directories Library ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
const checkFileExists = async path => !!(await fsPromises.stat(path).catch(e => false));

//
function isJsonString(str) {
    try {
        JSOX.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//
const arrayMerge = (target, source, options = {}) => {
    target = target || source || [];
    if (source.some(Array.isArray)) {
        return (target = recursiveMerge(target, source, options)); // try to merge two arrays manually, but there is no correct position detection
    } else 
    if (source.some(e => (typeof e == "object"))) {
        // merge only if dublicated as string
        /*return (target = Array.from(new Set([
            ...(target||[]).map((o,i)=>{ return (typeof o == "object") ? JSON.stringify(o) : o; }), 
            ...(source||[]).map((o,i)=>{ return (typeof o == "object") ? JSON.stringify(o) : o; }), 
        ])).map((o,i)=>{ return isJsonString(o) ? JSOX.parse(o) : o; }));*/
        return (target = recursiveMerge(target, source, options));
    } else 
    {
        return (target = Array.from(new Set([
            ...(target||[]), 
            ...(source||[])
        ])));
    };
};

//
const objectMerge = (target, source, options = {}) => {
    target = target || source || {};
    if (Array.isArray(source)) { target = arrayMerge( target, source, options); } else
    if (typeof source == "object") { target = recursiveMerge(target, source, options); } else
    { target = source; };
    return target;
};

//
const recursiveMerge = (target, source, options = {}) => {
    target = target || source || {};
    if (typeof source == "object") {
        for (let key in source) {
            target[key] = objectMerge(target[key], source[key], options);
        }
    } else 
    if (Array.isArray(source)) {
        for (let key = 0; key < source.length; key++) {
            target[key] = objectMerge(target[key], source[key], options);
        }
    }
    return target;
};

//
const propertiesToJson = require('properties-file').propertiesToJson;
const jsonToProperties = (obj)=>{
    let props = [];
    for (var el in obj) { props.push(el + " = " + obj[el]); }
    return props.join("\n");
}

// TODO: remake function
let copyFolderRecursive = async (src, dest, options = {}) => {
    let stats = await fsPromises.stat(src);
    let isDirectory = stats.isDirectory();
    let isFile = stats.isFile();
    
    if (isDirectory) {
        await fsPromises.mkdir(dest, { recursive: true });
        return await Promise.all(Array.from(await fsPromises.readdir(src)).map(async(childItemName) => {
            return await copyFolderRecursive(path.join(src, childItemName), path.join(dest, childItemName));
        }));
    } else 
    if (isFile) {
        if (await checkFileExists(dest)) {
            let dstMatched = dest.match(/\.[0-9a-z]+$/i);
            let srcMatched = src.match(/\.[0-9a-z]+$/i);
            if (dstMatched && srcMatched && srcMatched[0] == ".properties" && dstMatched[0] == ".properties") {
                //
                console.log("merging PROPERTIES " + src + " to " + dest);
                
                //
                let srcJsonRaw = propertiesToJson(await fsPromises.readFile(src, "utf8"));
                let dstJsonRaw = propertiesToJson(await fsPromises.readFile(dest, "utf8"));
                let srcJson = JSOX.parse(srcJsonRaw);
                let dstJson = JSOX.parse(dstJsonRaw);
                
                //
                console.log("SRC PROPERTIES: " + jsonToProperties(srcJsonRaw));
                console.log("DST PROPERTIES: " + jsonToProperties(dstJsonRaw));
                console.log("RESULT PROPERTIES: " + jsonToProperties(objectMerge(dstJson, srcJson)));
                
                //
                await fsPromises.rm(dest);
                return await fsPromises.writeFile(dest, jsonToProperties(objectMerge(dstJson, srcJson)));
            } else
            if (dstMatched && srcMatched && srcMatched[0] == ".json" && dstMatched[0] == ".json") {
                //
                //console.log("merging JSON " + src + " to " + dest);
                
                //
                let srcJsonRaw = (await fsPromises.readFile(src, "utf8")).trim();
                let dstJsonRaw = (await fsPromises.readFile(dest, "utf8")).trim();
                let srcJson = JSOX.parse(srcJsonRaw);
                let dstJson = JSOX.parse(dstJsonRaw);
                
                //
                //console.log("SRC JSON: " + JSON.stringify(srcJsonRaw));
                //console.log("DST JSON: " + JSON.stringify(dstJsonRaw));
                //console.log("RESULT JSON: " + JSON.stringify(objectMerge(dstJson, srcJson)));
                
                //
                await fsPromises.rm(dest);
                return await fsPromises.writeFile(dest, JSON.stringify(objectMerge(dstJson, srcJson), null, 4).trim());
            } else {
                return await fsPromises.copyFile(src, dest);
            }
        } else {
            return await fsPromises.copyFile(src, dest);
        }
    }
};

//
let mergeDirectories = async (inputs, target, options = {}) => {
    await Promise.all(Array.from(inputs).map(async(filename)=>{
        return await copyFolderRecursive(filename, target);
    }));
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// 
let templateStub = (options)=>{
    return crlf(JSON.stringify({
        "type": "crafting_shapeless",
        "ingredients": [{ "item": "minecraft:barrier" }],
        "result": { "item": "minecraft:barrier", "count": 1 }
    }), CRLF);
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

let JSOX = null;
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
let namings = {
    "block": "blocks",
    "slab": "slabs",
    "stairs": "stairs",
    "pressure_plate": "pressure_plates",
    "stair": "stairs",
};

//
let generateModuleRecipes = async (options)=>{
    let rootDirAdv = `${options.datapack}/data/crafting/advancements/recipes/crafting`;
    let rootDir = `${options.datapack}/data/crafting/recipes`;

    await Promise.all(Array.from(Object.entries(options.blocks)).map(async ([key, obj])=>{
        let outsource = options.type != "block" ? obj[options.type] : obj[options.from];
        if (outsource && (disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && !outsource.extra && (options.single ? ((options.type != "block" ? obj[options.type] : obj)["single"] || allowVanillaRecipeConflicts) : true) && !obj.extra) {
            let criterias = {};
            criterias[`has_${options.type}`] = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj : obj[options.from])["source"] };
            criterias["has_result"]          = { "trigger": "minecraft:inventory_changed", "conditions": (options.type != "block" ? obj[options.type] : obj)["source"] };

            //
            let filename = (options.type != "block" ? obj[options.type] : obj)["filename"];
            let unversion = `${namings[options.type]}/${options.subdir||""}`;
            let directory = `${obj.mc_version}/${unversion}`;

            // advancements
            await fsPromises.mkdir(    `${rootDirAdv}/${directory}`, { recursive: true });
            await fsPromises.writeFile(`${rootDirAdv}/${directory}/${filename}.json`, advancementTemplate({ 
                criterias, 
                recipeAddress: `crafting:${mergeVersions ? unversion : directory}/${filename}` 
            }), 'utf8');
            
            // crafting
            await fsPromises.mkdir(    `${rootDir}/${directory}`, { recursive: true });
            await fsPromises.writeFile(`${rootDir}/${directory}/${filename}.json`, options.handler(obj, options), 'utf8');
        };
    }));
};

//
let generateVanillaStub = async (options)=>{
    let rootDirMc = `${options.datapack}/data/minecraft/recipes`;

    await Promise.all(Array.from(Object.entries(options.blocks)).map(async([key, obj])=>{
        if ((disallowedData[usedMCVersion].indexOf(obj.mc_version) == -1 || !obj.mc_version) && (options.type != "block" ? obj[options.type] : obj[options.from])) {
            await fsPromises.mkdir(    `${rootDirMc}`, { recursive: true });
            await fsPromises.writeFile(`${rootDirMc}/${(options.type != "block" ? obj[options.type] : obj)["filename"]}.json`, templateStub({}), 'utf8');
        };
    }));
};

//
let mergeVersionsFn = async (directory, experimentalDatapacks = false)=>{
    let outputs = {};
    let files = await checkFileExists(`${directory}`) ? await fsPromises.readdir(`${directory}`) : [];
    
    await Promise.all(files.map(async (filename)=>{
        if (mcVersions.indexOf(filename) != -1) {
            let versioned = await fsPromises.readdir(`${directory}/${filename}`);
            versioned.forEach((fn)=>{
                outputs[`${directory}/${fn}/../`] = outputs[`${directory}/${fn}/../`] || [];
                outputs[`${directory}/${fn}/../`].push(`${directory}/${filename}`);
            });
        };
    }));

    await Promise.all(Array.from(Object.keys(outputs)).map(async (key)=>{
        await mergeDirectories(outputs[key], key, { overwrite: true });
    }));

    await Promise.all(files.map(async (filename)=>{
        if (mcVersions.indexOf(filename) != -1 && mergeVersions) {
            await fsPromises.rm(`${directory}/${filename}`, { recursive: true, force: true });
        };
    }));
};

let removeDisallowedFn = async (directory)=>{
    let files = await checkFileExists(`${directory}`) ? await fsPromises.readdir(`${directory}`) : [];
    await Promise.all(files.map(async (filename)=>{
        if (disallowedData[usedMCVersion].indexOf(filename) != -1) {
            return await fsPromises.rm(`${directory}/${filename}`, { recursive: true, force: true });
        }
        return null;
    }));
};

//
const MAIN = async ()=>{
    //
    path = await import('path');
    fs = await import('fs');
    fsPromises = fs.promises;
    fsePromises = await import('fs-extra');
    _normalize = await import('crlf-normalize');
    JSOX = (await import('jsox')).JSOX;
    
    //
    crlf = _normalize.crlf;
    LF   = _normalize.LF;
    CRLF = _normalize.CRLF;
    CR   = _normalize.CR;
    
    //
    let blocks = JSOX.parse(await fsPromises.readFile("./blocks.json5", "utf8"));
    
    // TODO: shulker boxes support
    if (usedModules.indexOf("co-extra-better-dyeables") != -1) {
        let rootDirAdv = `${srcDir}/co-extra-better-dyeables/data/better_dyeables/advancements/recipes/better_dyeables`;
        let rootDir = `${srcDir}/co-extra-better-dyeables/data/better_dyeables/recipes`;
        let rootDirMc = `${srcDir}/co-extra-better-dyeables/data/minecraft/recipes`;

        await fsPromises.rm(`${rootDirAdv}`, { recursive: true, force: true });
        await fsPromises.rm(`${rootDir}`, { recursive: true, force: true });

        await Promise.all(names.map(async (name)=>{
            await Promise.all(colors.map(async (color)=>{
                let rejectionCode = color != "default" ? `/not_${color}` : ``;
                let mcName = 
                    (name == "glass" || name == "glass_pane") && 
                    color != "default" ? 
                    `${color}_stained_${name}` : 
                        (color != "default" ? `${color}_${name}` : `${name}`);
                
                // kill vanilla dyeing!
                if (color != "default" && name != "glazed_terracotta" && name != "concrete_powder" && name != "concrete" && name != "banner") {
                    await fsPromises.mkdir(    `${rootDirMc}`, { recursive: true });
                    
                    if (name == "bed") {
                        if (color != "white") { await fsPromises.writeFile(`${rootDirMc}/${mcName}_from_white_${name}.json`, templateStub({}), 'utf8'); };
                    } else
                    if (name == "carpet") {
                        if (color != "white") { await fsPromises.writeFile(`${rootDirMc}/${mcName}_from_white_${name}.json`, templateStub({}), 'utf8'); };
                    } else
                    if (name == "glass_pane") {
                        if (color != "default") { await fsPromises.writeFile(`${rootDirMc}/${mcName}_from_${name}.json`, templateStub({}), 'utf8'); };
                    } else
                    if (name == "glass") {
                        if (color != "default") { await fsPromises.writeFile(`${rootDirMc}/${mcName}_from_${name}.json`, templateStub({}), 'utf8'); };
                    } else
                    {
                        await fsPromises.writeFile(`${rootDirMc}/${mcName}.json`, templateStub({}), 'utf8');
                    }
                };
                
                if (!(color == "default" && (name == "bed" || name == "wool" || name == "carpet" || name == "concrete_powder" || name == "concrete" || name == "banner" || name == "glazed_terracotta"))) {
                    let maxCount = name != "bed" ? 8 : 1;
                    await Promise.all(Array.from(Array(maxCount).keys()).map((m)=>(m+1)).map(async(i)=>{
                        let criterias = {};
                        criterias["has_dyeable"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"tag": `better_dyeables:dye/${color}`} ] } };
                        criterias["has_dye"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"tag": `better_dyeables:${name}${rejectionCode}`} ] } };
                        criterias["has_result"] = { "trigger": "minecraft:inventory_changed", "conditions": { "items": [ {"item": `minecraft:${mcName}`} ] } };

                        await fsPromises.mkdir(`${rootDirAdv}/${name}/${color}`, { recursive: true });
                        await fsPromises.writeFile(`${rootDirAdv}/${name}/${color}/${i}.json`, advancementTemplate({
                            criterias, 
                            recipeAddress: `better_dyeables:${name}/${color}/${i}`
                        }), 'utf8');

                        await fsPromises.mkdir(`${rootDir}/${name}/${color}`, { recursive: true });
                        await fsPromises.writeFile(`${rootDir}/${name}/${color}/${i}.json`, templateColors({
                            color, name, count: i
                        }), 'utf8');
                        
                    }));
                }
            }));
        }));
    };
    
    
    
    if (usedModules.indexOf("co-disable-default-slabs") != -1) {
        await generateVanillaStub({
            datapack: `${srcDir}/co-disable-default-slabs`,
            blocks,
            type: "slab",
            from: "block"
        });
    };

    //
    if (usedModules.indexOf("co-disable-default-stairs") != -1) {
        await generateVanillaStub({
            datapack: `${srcDir}/co-disable-default-stairs`,
            blocks,
            type: "stairs",
            from: "block"
        });
    };

    //
    if (usedModules.indexOf("co-disable-default-pressure-plates") != -1) {
        await generateVanillaStub({
            datapack: `${srcDir}/co-disable-default-pressure-plates`,
            blocks,
            type: "pressure_plate",
            from: "block"
        });
    };

    //
    if (usedModules.indexOf("co-3x1-pressure-plates") != -1) {
        let datapack = `${srcDir}/co-3x1-pressure-plates`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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
        await generateVanillaStub({
            datapack: `${srcDir}/co-2x1-slabs`,
            blocks,
            type: "pressure_plate",
            from: "block"
        });*/

        let datapack = `${srcDir}/co-2x1-slabs`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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
        let datapack = `${srcDir}/co-1x1-slabs`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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
        let datapack = `${srcDir}/co-2x2-stairs`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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
        let datapack = `${srcDir}/co-3x3-more-stairs`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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
        let datapack = `${srcDir}/vt-slabs-stairs-to-block`;
        await fsPromises.rm(`${datapack}/data/crafting/advancements/recipes/crafting`, { recursive: true, force: true });
        await fsPromises.rm(`${datapack}/data/crafting/recipes`, { recursive: true, force: true });

        await generateModuleRecipes({
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

        await generateModuleRecipes({
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

        await generateModuleRecipes({
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
    if (experimentalDatapacks) {
        await Promise.all(usedModules.map(async (M)=>{
            
            let FM_DIR = `${srcDir}/${M}`;
            let files = await fsPromises.readdir(`${FM_DIR}`);
            let names = await fsPromises.readdir(`${FM_DIR}/data`);
            await Promise.all(names.filter((s)=>s.indexOf(".")<0).map(async(F)=>{
                let DP_DIR = `${dstDir}/${M.replaceAll("-","_")}`;
                await fsPromises.mkdir(`${DP_DIR}`, { recursive: true });
                
                //
                await Promise.all(files.filter((s)=>s.indexOf(".")>=0).map(async(F)=>{
                    if (!(await checkFileExists(`${DP_DIR}/${F}`))) {
                        return await fsePromises.copy(`${FM_DIR}/${F}`, `${DP_DIR}/${F}`);
                    }
                    //await fsPromises.writeFile(`${DP_DIR}/${F}`, await fsPromises.readFile(`${FM_DIR}/${F}`));
                }));
                
                //await fsPromises.copyFile(`${srcDir}/${M}`, `${DP_DIR}`);
                //await mergeDirectories(names.map((N)=>`${FM_DIR}/data/${N}`), `${DP_DIR}/data/${F}`, { overwrite: true });
                await mergeDirectories([`${FM_DIR}/data/${F}`], `${DP_DIR}/data/${F}`, { overwrite: true });

                // remove disallowed version data from "crafting"
                
                {
                    //await removeDisallowedFn(`${DP_DIR}/data/${F}`);
                    await removeDisallowedFn(`${DP_DIR}/data/${F}/recipes`);
                    await removeDisallowedFn(`${DP_DIR}/data/${F}/advancements/recipes/crafting`);
                };

                //
                if (mergeVersions) {
                    //await mergeVersionsFn(`${DP_DIR}/data/${F}`);
                    await mergeVersionsFn(`${DP_DIR}/data/${F}/recipes`);
                    await mergeVersionsFn(`${DP_DIR}/data/${F}/advancements/recipes/crafting`);
                };
            }));
            
            /*
            //
            await removeDisallowedFn(`${FM_DIR}/data`);
            
            //
            if (mergeVersions) {
                await mergeVersionsFn(`${FM_DIR}/data`, experimentalDatapacks);
            }*/
            
            // copy required files
            {
                let files = await fsPromises.readdir("./required");
                await Promise.all(files.map(async(filename)=>{
                    if (!(await checkFileExists(`${dstDir}/../${filename}`))) {
                        return await fsePromises.copy(`./required/${filename}`, `${dstDir}/../${filename}`);
                    }
                }));
            }

            //
            {
                await fsPromises.mkdir(`../src/main/java/net/hydra2s/crop/generated`, { recursive: true });
                await fsPromises.writeFile(`../src/main/java/net/hydra2s/crop/generated/Modules.java`, `package net.hydra2s.crop.generated;
public class Modules {
    public static String[] moduleNames = new String[]{ ${usedModules.map((s)=>`"${s.replaceAll("-","_")}"`).join(",")} };
}
                `, 'utf8');
            }
        }));
    } else {
        //
        await fsPromises.rm(`${dstDir}/data`, { recursive: true, force: true });
        await fsPromises.mkdir(`${dstDir}/data`, { recursive: true });
        await fsPromises.writeFile(`${dstDir}/pack.mcmeta`, `{"pack":{"pack_format":${dataVersion[usedMCVersion]},"description":"Minecraft crafting recipes overhaul compiled for ${mcVersionString[usedMCVersion]}"}}`, 'utf8');
        
        //
        let DP_DIR = `${dstDir}/data`;
        await mergeDirectories(usedModules.map((M)=>{ return `${srcDir}/${M}/data`; }), `${DP_DIR}`, { overwrite: true });
        
        // remove disallowed version data from "crafting"
        {
            await removeDisallowedFn(`${DP_DIR}/crafting/recipes`);
            await removeDisallowedFn(`${DP_DIR}/crafting/advancements/recipes/crafting`);
        };

        //
        if (mergeVersions) {
            await mergeVersionsFn(`${DP_DIR}/crafting/recipes`);
            await mergeVersionsFn(`${DP_DIR}/crafting/advancements/recipes/crafting`);
        };
        
        // copy required files
        {
            let files = await fsPromises.readdir("./required");
            await Promise.all(files.map(async(filename)=>{
                return fsePromises.copy(`./required/${filename}`, `${dstDir}/${filename}`);
            }));
        }

        //
        {
            await fsPromises.mkdir(`../src/main/java/net/hydra2s/crop/generated`, { recursive: true });
            await fsPromises.writeFile(`../src/main/java/net/hydra2s/crop/generated/Modules.java`, `package net.hydra2s.crop.generated;
public class Modules {
    public static String[] moduleNames = new String[]{ ${usedModules.map((s)=>`"${s.replaceAll("-","_")}"`).join(",")} };
}
            `, 'utf8');
        }
    }


};

MAIN();
