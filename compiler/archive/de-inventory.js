let fs = require("fs");

let files = fs.readdirSync("./");

function Stringify_WithSpaces(obj) {
	let result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents
	result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
	result = result.replace(/\n/g, ""); // remove line-breaks
	result = result.replace(/{ /g, "{").replace(/ }/g, "}"); // remove spaces between object-braces and first/last props
	result = result.replace(/\[ /g, "[").replace(/ \]/g, "]"); // remove spaces between array-brackets and first/last items
	return result;
}

files.forEach((filename)=>{
    if (filename.match(/\.[0-9a-z]+$/i)[0] == ".json") {
        let json = JSON.parse(fs.readFileSync(filename, "utf8"));
        json["container.inventory"] = "";
        fs.writeFileSync(filename, Stringify_WithSpaces(json), "utf8");
    }
});
