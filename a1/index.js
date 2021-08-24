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
const Blastoise = new Pokemon("Blastoise", 2, "image", "image");

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
let c = (characters[2] = blastoise);

console.log(areas);
console.log(characters);

//function display interaction
function contestants(pokemon1, pokemon2) {
	//get the information about the players.
	let contestant1 = document.getElementById("healthIndicator1");
	let contestant2 = document.getElementById("healthIndicator2");
	//we will receive an object from the user.
	//How do we access a property of an object?
	//we want to get the following information about the pokemon
	//name,
	let name1 = pokemon1.name;
	let name2 = pokemon2.name;
	contestant1.innerHTML = `
   <div class="mt-2">
		 <h4>${name1}</h4>
   </div>
	`;
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
					<progress class="progress-bar w-50" id="health1"></progress>			
				</div>
			</div>
			<!-- healthbar p2 -->
			<div class="col">
				<div class="container" id="health2">
					<progress class="progress-bar w-50" id="health2"></progress>			
				</div>
			</div>
		</div>
	  `;

	//label the progress bars
	player1.innerHTML = `Player 1`;
	cp.innerHTML = `Computer`;
	contestants(contestant1, contestant2);
}

function play(player1, player2) {
	//so the players has to present/identifies before starting the game.

	//display to catalog of characters for user's to select
	//using the characters array display the names of the character.
	//how to display the contents of the array as a single element?
	let pokemon = characters.map(function (element) {
		//what if i want to place each element inside the array inside a html container?
		//lets try to remove the comma(,) which separates each element inside an array.
		for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount++) {
			return (game.innerHTML = `
				<h6>${element.name}</h6>
			`);
		}
	});

	pokemon = pokemon.join(" ");
	if (!player1 && !player2) {
		let game = document.getElementById("game");
		game.innerHTML = `Select Players! \n
		${pokemon} 
	`;
		//lets try to get the user's selection.
		let player1 = prompt("Select Player 1");
		//how do we convert a string data type into a variable.
		console.log(typeof player1);
		player1 = eval(player1);
		console.log(typeof player1);
		let pc = prompt("Select Oponent");
		battle(player1, pc);
	} else {
		battle();
	}
}

play(articuno, mewtwo);
