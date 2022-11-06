
//
let path = require('path');
let fs = require('fs');

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Smart Merging Directories Library ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
const arrayMerge = (target, source, options = {}) => {
    target = target || source || [];
    if (source.some(Array.isArray)) {
        return (target = recursiveMerge(target, source, options)); // try to merge two arrays manually, but there is no correct position detection
    } else 
    if (source.some(e => (typeof e == "object"))) {
        //return (target = recursiveMerge(target, source)); // unsupported dublicate detection
        return (target = source); // currently unmergable correctly, it's not object
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
            if (dstMatched && srcMatched && srcMatched[0] == ".json" && dstMatched[0] == ".json") {
                //console.log("merging JSON " + src + " to " + dest);
                let srcJson = JSON.parse(fs.readFileSync(src, "utf8").replaceAll("}{}", "}").replaceAll("}{","}"));
                let dstJson = JSON.parse(fs.readFileSync(dest, "utf8").replaceAll("}{}", "}").replaceAll("}{","}"));
                
                //console.log("SRC JSON: " + JSON.stringify(srcJson));
                //console.log("DST JSON: " + JSON.stringify(dstJson));
                //console.log("RESULT JSON: " + JSON.stringify(objectMerge(dstJson, srcJson)));
                
                fs.rmSync(dest);
                fs.writeFileSync(dest, JSON.stringify(objectMerge(dstJson, srcJson), null, 4).replaceAll("}{}", "}").replaceAll("}{","}"), "utf8");
            } else {
                fs.copyFileSync(src, dest);
            }
        } else {
            fs.copyFileSync(src, dest);
        }
    }
};

let mergeDirectories = (inputs, target, options = {}) => {
    Array.from(inputs).forEach((filename)=>{
        copyFolderRecursiveSync(filename, target);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//
if(fs.existsSync("./VanillaTweaked")) fs.rmSync("./VanillaTweaked", { recursive: true });
mergeDirectories(["./0", "./1", "./2", "./3", "./4", "./5", "./6", "./7", "./8", "./9", "./10", "./11", "./12", "./13", "./14", "./15", "./16", "./17"], "VanillaTweaked");
