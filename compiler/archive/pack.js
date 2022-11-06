
//
let path = require('path');
let fs = require('fs');

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Smart Merging Directories Library ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
const stripComments = (data => data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m));

//
function isJsonString(str) {
    try {
        JSON.parse(str);
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
        //return (target = recursiveMerge(target, source)); // unsupported dublicate detection
        //return (target = source); // currently unmergable correctly, it's not object
        return (target = Array.from(new Set([
            ...(target||[]).map((o)=>{ return (typeof o == "object") ? JSON.stringify(o) : o; }), 
            ...(source||[]).map((o)=>{ return (typeof o == "object") ? JSON.stringify(o) : o; }), 
        ])).map((o)=>{ return isJsonString(o) ? JSON.parse(o) : o; }));
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
let copyFolderRecursiveSync = (src, dest, options = {}) => {
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
            let dstMatched = dest.match(/\.[0-9a-z]+$/i);
            let srcMatched = src.match(/\.[0-9a-z]+$/i);
            if (dstMatched && srcMatched && srcMatched[0] == ".properties" && dstMatched[0] == ".properties") {
                //
                console.log("merging PROPERTIES " + src + " to " + dest);
                
                //
                let srcJsonRaw = propertiesToJson(fs.readFileSync(src, "utf8"));
                let dstJsonRaw = propertiesToJson(fs.readFileSync(dest, "utf8"));
                let srcJson = JSON.parse(srcJsonRaw);
                let dstJson = JSON.parse(dstJsonRaw);
                
                //
                console.log("SRC PROPERTIES: " + jsonToProperties(srcJsonRaw));
                console.log("DST PROPERTIES: " + jsonToProperties(dstJsonRaw));
                console.log("RESULT PROPERTIES: " + jsonToProperties(objectMerge(dstJson, srcJson)));
                
                //
                fs.rmSync(dest);
                fs.writeFileSync(dest, jsonToProperties(objectMerge(dstJson, srcJson)));
            } else
            if (dstMatched && srcMatched && srcMatched[0] == ".json" && dstMatched[0] == ".json") {
                //
                //console.log("merging JSON " + src + " to " + dest);
                
                //
                let srcJsonRaw = stripComments(fs.readFileSync(src, "utf8")).replaceAll("}{}", "}").replaceAll("}{","}").trim();
                let dstJsonRaw = stripComments(fs.readFileSync(dest, "utf8")).replaceAll("}{}", "}").replaceAll("}{","}").trim();
                let srcJson = JSON.parse(srcJsonRaw);
                let dstJson = JSON.parse(dstJsonRaw);
                
                //
                //console.log("SRC JSON: " + JSON.stringify(srcJsonRaw));
                //console.log("DST JSON: " + JSON.stringify(dstJsonRaw));
                //console.log("RESULT JSON: " + JSON.stringify(objectMerge(dstJson, srcJson)));
                
                //
                fs.rmSync(dest);
                fs.writeFileSync(dest, stripComments(JSON.stringify(objectMerge(dstJson, srcJson), null, 4).replaceAll("}{}", "}").replaceAll("}{","}"), "utf8").trim());
            } else {
                fs.copyFileSync(src, dest);
            }
        } else {
            fs.copyFileSync(src, dest);
        }
    }
};

//
let mergeDirectories = (inputs, target, options = {}) => {
    Array.from(inputs).forEach((filename)=>{
        copyFolderRecursiveSync(filename, target);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
if(fs.existsSync("./DPX")) fs.rmSync("./DPX", { recursive: true });
if(fs.existsSync("./RPX")) fs.rmSync("./RPX", { recursive: true });
if(fs.existsSync("./VanillaTweaked")) fs.rmSync("./VanillaTweaked", { recursive: true });
mergeDirectories(["./RP/RP0", "./RP/RP1", "./RP/RP2", "./RP/RP3", "./RP/RP4", "./RP/RP5", "./RP/RP6", "./RP/RP7", "./RP/RP8", "./RP/RP9", "./RP/RP10", "./RP/RP11", "./RP/RP12", "./RP/RP13", "./RP/RP14", "./RP/RP15", "./RP/RP16", "./RP/RP17"], "RPX");
mergeDirectories(["./DP/DP0", "./DP/DP1", "./DP/DP2", "./DP/DP3", "./DP/DP4", "./DP/DP5"], "DPX");
mergeDirectories(["./RPX", "./DPX"], "VanillaTweaked");
