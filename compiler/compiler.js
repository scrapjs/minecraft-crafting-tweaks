let usedModules = [
    "co-2x2-core", 
    "co-2x2-extra-cut-copper", 
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

//
let MergeTrees = require('merge-trees');
let fs = require('fs');

//
fs.mkdirSync(`datapack/data`, { recursive: true });
fs.writeFileSync(`datapack/pack.mcmeta`, `{"pack":{"pack_format":10,"description":"Minecraft crafting recipes overhaul compiled for"}}`, 'utf8');

//
let mergeTrees = new MergeTrees( usedModules.map((M)=>{ return `../wrapper/datapacks/${M}/data`; }), 'datapack/data', { overwrite: true });
mergeTrees.merge();
