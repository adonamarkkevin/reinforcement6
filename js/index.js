//[OBJECT BLUEPRINT TEMPLATE]

// const value for name, type, level, photo location, and button
const pokeName = document.querySelector("#nValue");
const pokeType = document.querySelector("#tValue");
const pokeLevel = document.querySelector("#lValue");
const pokePic = document.querySelector(".character-pic");
const cpuName = document.querySelector("#cpuName");
const cpuType = document.querySelector("#cpuType");
const cpuLevel = document.querySelector("#cpuLvl");
const cpuPic = document.querySelector(".opponent-pic");
const playerLockIn = document.querySelector("#heroSelected");
const cpuLockIn = document.querySelector("#opponentSelected");
const arenaBg = document.querySelector("#arena-bg");

//pokemon object constructor
function Pokemon(name, poketype, lvl, front, back) {
	this.name = name;
	this.type = poketype;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = "./images/" + front;
	this.imageBack = "./images/" + back;
}

//Create player's and CPU pokemon object constructor
pokeData = {
	step: 1,
	player: {},
	cpu: {},
};

//List of playable characters.
const mewtwo = new Pokemon(
	"Mewtwo",
	"Psychic",
	2,
	"mewtwo.gif",
	"mewtwoBack.gif"
);
const articuno = new Pokemon(
	"Articuno",
	"Ice/Flying",
	2,
	"articuno.gif",
	"articunoBack.gif"
);
const blastoise = new Pokemon(
	"Blastoise",
	"Water",
	2,
	"blastoise.gif",
	"blastoiseBack.gif"
);
const lugia = new Pokemon(
	"Lugia",
	"Psychic/Flying",
	2,
	"lugia.gif",
	"lugiaBack.gif"
);
const charizard = new Pokemon(
	"Charizard",
	"Fire",
	2,
	"charizard.gif",
	"charizardBack.gif"
);
const venusaur = new Pokemon(
	"Venusaur",
	"Grass",
	2,
	"venusaurFront.gif",
	"venusaurBack.gif"
);

//Create a template for each playing area.
function Battlefield(name, bg) {
	this.bgName = name;
	this.background = "./images/" + bg;
}

// list of battlefield
const cave = new Battlefield("cave", "cave.jpg");
const canyon = new Battlefield("canyon", "canyon.jpg");
const city = new Battlefield("city", "city.jpg");
const coast = new Battlefield("coast", "coast.jpg");
const glacier = new Battlefield("glacier", "glacier.jpg");
const volcano = new Battlefield("volcano", "volcano.jpg");

// add img src to arena-image
document.querySelector("#cave-bg").src = cave["background"];
document.querySelector("#canyon-bg").src = canyon["background"];
document.querySelector("#city-bg").src = city["background"];
document.querySelector("#coast-bg").src = coast["background"];
document.querySelector("#glacier-bg").src = glacier["background"];
document.querySelector("#volcano-bg").src = volcano["background"];

//loading screen
function loadingScreen() {
	setTimeout(showPage, 3500);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("containerAfter").style.display = "flex";
}

//loading battle screen
function loadingScreenBattle() {
	setTimeout(showPageBattle, 6000);
}

function showPageBattle() {
	document.getElementById("vsLoader").style.display = "none";
	document.getElementById("battleContainer").style.display = "flex";
}
//select pokemon funtion
function selectPokemon(pokemon) {
	if (playerLockIn.hasAttribute("data-selected-pokemon") !== true) {
		//check the value of player lock in attribute
		var x = pokeName; //placed on a variable the const value of pokeName
		var y = pokeType; //placed on a variable the const value of pokeType
		var z = pokeLevel; //placed on a variable the const value of pokeLevel
		var p = pokePic; //placed on a variable the const value of pokePic
		document.getElementById("player1Pokemon").classList.add("player1-active");
	} else {
		var x = cpuName; //placed on a variable the const value of cpuName
		var y = cpuType; //placed on a variable the const value of cpuType
		var z = cpuLevel; //placed on a variable the const value of cpuLevel
		var p = cpuPic; //placed on a variable the const value of cpuPic
		document.getElementById("player2Pokemon").classList.add("player2-active");
	}
	//output for images, name, type and level

	x.innerHTML = pokemon.name;
	y.innerHTML = pokemon.type;
	z.innerHTML = pokemon.level;
	p.src = pokemon["imageFront"];
}

// function to get the value of player or CPU
function characterSelection(player) {
	//check if player selection is active
	let player1Active = document
		.getElementById("player1Pokemon")
		.classList.contains("player1-active");
	let player2Active = document
		.getElementById("player2Pokemon")
		.classList.contains("player2-active");

	if (player == "player1" && player1Active) {
		//onclick function to get the data attribute of player
		playerLockIn.setAttribute("data-selected-pokemon", pokeName.innerText);
		document
			.querySelector("#player1Pokemon .lockin")
			.setAttribute("style", "display:none");
		document.querySelector("#pick-message").innerHTML = "Select Your Opponent";
	} else if (player == "player2") {
		if (player2Active) {
			//onclick function to get the data attribute of player
			cpuLockIn.setAttribute("data-selected-pokemon", pokeName.innerText);
			document
				.querySelector("#player2Pokemon .lockin")
				.setAttribute("style", "display:none");
			document.querySelector("#pick-message").innerHTML =
				'Please Click "Select Arena"';
			document
				.getElementById("go-arena")
				.setAttribute("style", "display:block");
		} else {
			alert("Please select pokemon for player 2");
			return;
		}
	} else {
		alert("Please select pokemon for player 1");
		return;
	}
}
