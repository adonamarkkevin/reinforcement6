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
const chosenArena = document.querySelector("#pick-arena");
const playerOne = localStorage.getItem("pokePlayer");
const playerTwo = localStorage.getItem("pokeCPU");
const battleArena = localStorage.getItem("arena");
const exitBtn = document.querySelector("#exit-btn");

//pokemon object constructor
function Pokemon(name, poketype, lvl, front, back) {
	this.name = name;
	this.type = poketype;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = "./images/" + front;
	this.imageBack = "./images/" + back;
}

//List of playable characters.
const mewtwo = new Pokemon("Mewtwo", "Psychic", 2, "mewtwo.gif", "mtBack.gif");
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

//pokemon Array
const pokeArr = Array();
let a = (pokeArr[0] = articuno);
let b = (pokeArr[1] = blastoise);
let c = (pokeArr[2] = charizard);
let d = (pokeArr[3] = lugia);
let e = (pokeArr[4] = mewtwo);
let f = (pokeArr[5] = venusaur);

//pokemon array deconstructor
let p1 = pokeArr.find((obj) => {
	return obj.name === playerOne;
});

let p1Img = p1["imageBack"];

let p2 = pokeArr.find((obj) => {
	return obj.name === playerTwo;
});
let p2Img = p1["imageFront"];

//Create a template for each playing area.
function Battlefield(name, bg) {
	this.bgName = name;
	this.background = "./images/" + bg;
}

var battlefields = {
	cave: "cave.jpg",
	canyon: "canyon.jpg",
	city: "city.jpg",
	coast: "coast.jpg",
	glacier: "glacier.jpg",
	volcano: "volcano.jpg",
};

// list of battlefield
const arenaArr = Array();
for (var key in battlefields) {
	window[key] = new Battlefield(key, battlefields[key]);
	arenaArr[key] = window[key];
}

let bgImg = arenaArr[battleArena].background;

//loading screen
function loadingScreen() {
	setTimeout(showPage, 3500);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementsByClassName("before-load")[0].style.display = "flex";
}

//loading battle screen
function loadingScreenBattle() {
	document.getElementById("vsLoader").style.backgroundImage = `url('${bgImg}')`;
	document.getElementById("load-title").innerHTML = `${battleArena}`;
	setTimeout(showPageBattle, 6000);
}

function showPageBattle() {
	document.getElementById(
		"battleContainer"
	).style.backgroundImage = `url('${bgImg}')`;
	document.getElementById("player-avatar").src = p1["imageBack"];
	document.getElementById("p1-name").innerHTML = p1.name;
	document.getElementById("cpu-avatar").src = p2["imageFront"];
	document.getElementById("p2-name").innerHTML = p2.name;
	document.getElementById("vsLoader").style.display = "none";
	document.getElementById("battleContainer").style.display = "flex";
}

//localstorage for Player
const savePlayerToStorage = () => {
	localStorage.setItem("p1", pokeName.innerText);
};

//localstorage for CPU
const saveCpuToStorage = () => {
	localStorage.setItem("p2", cpuName.innerText);
};

//select pokemon funtion
function selectPokemon(pokemon) {
	// pokemon = Pokemon;pokemon
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
	localStorage.setItem("pokePlayer", pokeName.innerText);
	let player2Active = document
		.getElementById("player2Pokemon")
		.classList.contains("player2-active");
	localStorage.setItem("pokeCPU", cpuName.innerText);

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
			Swal.fire("Can't Proceed", "Please Select Player 2", "error");
			return;
		}
	} else {
		Swal.fire("Can't Proceed", "Please Select Player 1", "error");
		return;
	}
}

// choose bg funtion

function selectArena(arena) {
	chosenArena.innerHTML = arena.bgName;
	if (chosenArena.innerHTML !== "") {
		document
			.querySelector("#game-start")
			.setAttribute("style", "display:block");
	}
}

function gameStart() {
	localStorage.setItem("arena", chosenArena.innerHTML);
}

// function to remove data in localstorage via exit
function clearLocalStorage() {
	localStorage.removeItem("pokePlayer");
	localStorage.removeItem("pokeCPU");
	localStorage.removeItem("arena");
}
