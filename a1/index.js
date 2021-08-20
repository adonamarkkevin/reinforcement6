//Template for each pokemon

//pokemon blueprint tempalte
function Pokemon(name, lvl, front, back) {
	this.name = name;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = front;
	this.imageBack = back;
}

//template for each paying area
function Battlefield(bg, name) {
	this.background = bg;
	this.name = name;
}

//list of playable pokemon
const mewtwo = new Pokemon("Mew Two", 2, "image", "image");
const articuno = new Pokemon("Articuno", 2, "image", "image");

//list of fields
const backyard = new Battlefield("image", "backyard");
const volcano = new Battlefield("image", "Volcano");

//Object Container

//battlefield container
const areas = Array();
let x = (areas[0] = backyard);
let y = (areas[1] = volcano);

//characters container
const characters = [];
let a = (characters[0] = articuno);
let b = (characters[1] = mewtwo);

console.log(areas);
console.log(characters);

//function display interaction
function battle() {
	console.log("battle");
}
