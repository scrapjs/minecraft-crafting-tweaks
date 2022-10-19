let names = ["banner", "bed", "candle", "concrete", "concrete_powder", "glass", "glass_pane", "glazed_terracotta", "terracotta", "wool"];
let colors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];

let whatReplace = (name, color, data) => {
    return data.replaceAll(new RegExp(`\"crafting\:${name}\/(.*?)\"`, "g"),`"crafting:${name}"`);
}

let fs = require('fs');

names.forEach((name)=>{
    colors.forEach((color)=>{
        for (let i=1;i<=8;i++) {
            fs.writeFileSync(`${name}/${color}/${i}.json`, whatReplace(name, color, fs.readFileSync(`${name}/${color}/${i}.json`, 'utf8')), 'utf8');
        }
    });
});
