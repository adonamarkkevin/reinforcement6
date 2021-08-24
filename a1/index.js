//Create a template for each pokemon.
//[OJECT BLUEPRINT TEMPLATE]
function Pokemon(name, lvl, front, back) {
	this.name = name;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = "./images/" + front;
	this.imageBack = "./images/" + back;
}

//Create a template for each playing area.
function Battlefield(bg, name) {
	this.background = bg;
	this.name = name;
}

//List of playable characters.
const mewtwo = new Pokemon("Mewtwo", 2, "mewtwo.gif", "mewtwoBack.gif");
const articuno = new Pokemon("Articuno", 2, "articuno.gif", "articunoBack.gif");
const blastoise = new Pokemon(
	"Blastoise",
	2,
	"blastoise.gif",
	"blastoiseBack.gif"
);
const lugia = new Pokemon("Lugia", 2, "lugia.gif", "lugiaBack.gif");

//List of playing area.
const backyard = new Battlefield("image", "Backyard");
const volcano = new Battlefield("image", "Volcano");

//we need to store each object inside a container.
//we can use an Array() constructor
const areas = Array();
let x = (areas[0] = backyard);
let y = (areas[1] = volcano);

const characters = Array();
let a = (characters[0] = articuno);
let b = (characters[1] = mewtwo);
let c = (characters[2] = blastoise);

console.log(areas);
console.log(characters);
console.log(b);

//[CREATE] a new function that will display the interaction between the 2 characters.
function contestants(pokemon1, pokemon2) {
	//get the information about the players.
	let contestant1 = document.getElementById("healthIndicator1");
	let contestant2 = document.getElementById("healthIndicator2");
	//we will receive an object from the user.
	//How do we access a property of an object?
	//we want to get the following information about the pokemon
	//name,
	let name1 = pokemon1.name;
	let level1 = pokemon1.level;
	let hp1 = pokemon1.health;
	let name2 = pokemon2.name;
	let level2 = pokemon2.level;
	let hp2 = pokemon2.health;
	contestant1.innerHTML = `
     <div class="mt-2">
           <h4>${name1}</h4>
           <h5>Level: ${level1}</h5>
           <h5>${hp1 + "/" + hp1}</h5>
           <img height="380" src="${pokemon1.imageBack}" alt="Image not found">
     </div>
      `;
	contestant2.innerHTML = `
      <div class="mt-2">
            <h4>${name2}</h4>
            <h5>Level: ${level2}</h5>
            <h5>${hp2 + "/" + hp2}</h5>
            <img height="207" src="${
							pokemon2.imageFront
						}" alt="Image not found">
      </div>
       `;
	console.log(pokemon1.imageFront);
}

function battle(contestant1, contestant2) {
	let game = document.getElementById("game");
	let player1 = document.getElementById("healthIndicator1");
	let cp = document.getElementById("healthIndicator2");
	//[innerHTML] this refers to the property of the acquired section in the HTML document.
	game.innerHTML = `

        <div class="container mt-5 mb-2">
            <h5>Battle!</h5>
        </div>
        <div class="row">
        <!-- healthbar p1 -->
        <div class="col">
            <div class="container" id="health1">
                <h4>HP:<h4>
                <progress class="progress-bar w-50" id="health1"></progress>			
            </div>
        </div>
        <!-- healthbar p2 -->
        <div class="col">
            <div class="container" id="health2">
                <h4>HP:<h4>
                <progress class="progress-bar w-50" id="health2"></progress>			
            </div>
        </div>
        `;

	//label the progress bars
	player1.innerHTML = `Player 1`;
	cp.innerHTML = `Computer`;
	contestants(contestant1, contestant2);
}

function play(player1, player2) {
	let game = document.getElementById("game");
	// 	let pokemon = characters.map(function (element) {
	// 		//what if i want to place each element inside the array inside a html container?
	// 		//lets try to remove the comma(,) which separates each element inside an array.
	// 		for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount++) {
	// 			return (game.innerHTML = `
	//                    <h6>${element.name}</h6>
	//                `);
	// 		}
	// 	});
	// 	pokemon = pokemon.join(" ");
	// 	game.innerHTML = `Select Players! \n
	//        ${pokemon}
	//    `;
	// 	player1 = prompt("Select Player 1");
	// 	player2 = prompt("Select Player 2");
	// prompt("Select Player 1");
	if (!player1 && !player2) {
		//lets try to get the user's selection.
		//how do we convert a string data type into a variable.
		// console.log(typeof player1);
		// player1 = eval(player1);
		// console.log(typeof player1);
		// let pc = prompt("Select Oponent");
		//battle(player1, pc);
		play();
	} else {
		battle(player1, player2);
	}
}

play(blastoise, articuno);
