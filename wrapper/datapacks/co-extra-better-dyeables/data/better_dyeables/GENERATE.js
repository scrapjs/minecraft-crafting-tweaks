let names = ["banner", "bed", "candle", "concrete", "carpet", "concrete_powder", "glass", "glass_pane", "glazed_terracotta", "terracotta", "wool"];
let colors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow", "default"];

let template = (options)=>{
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

    return `{
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
        {"tag": "better_dyeables:dye/${options.color}"},${tags.join(",")}
    ],
    "result": {
        "item": "minecraft:${mcName}",
        "count": ${options.count}
    },
    "group": "${options.color}_${options.name}"
}`;
};

let fs = require('fs');

names.forEach((name)=>{
    colors.forEach((color)=>{
        for (let i=1;i<=8;i++) {
            //fs.writeFileSync(`${name}/${color}/${i}.json`, whatReplace(name, color, fs.readFileSync(`${name}/${color}/${i}.json`, 'utf8')), 'utf8');
            fs.mkdirSync(`recipes/${name}/${color}`, { recursive: true });
            let content = template({
                color, name, count: i
            });
            if (content) {
                fs.writeFileSync(`recipes/${name}/${color}/${i}.json`, content, 'utf8');
            } else {
                throw "Unknown Error";
            }
        }
    });
});
