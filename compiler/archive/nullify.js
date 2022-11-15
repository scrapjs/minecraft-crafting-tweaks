let fs = require("fs");

let files = fs.readdirSync("./");

files.forEach((filename)=>{
    let matched = filename.match(/\.[0-9a-z]+$/i);
    if (matched && matched.length > 0 && matched[0] == ".json") {
        let json = JSON5.parse(fs.readFileSync(filename, "utf8"));
        json = {
            "type": "crafting_shapeless",
            "ingredients": [{ "item": "minecraft:barrier" }],
            "result": { "item": "minecraft:barrier", "count": 1 }
        };
        fs.writeFileSync(filename, JSON.stringify(json), "utf8");
    }
});
