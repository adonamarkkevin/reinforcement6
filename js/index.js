//[OJECT BLUEPRINT TEMPLATE]

// const value for name, type, level, photo location, and button
const pokeName = document.querySelector("#nValue")
const pokeType = document.querySelector("#tValue")
const pokeLevel = document.querySelector("#lValue")
const pokePic = document.querySelector(".character-pic")
const cpuName = document.querySelector("#cpuName")
const cpuType = document.querySelector("#cpuType")
const cpuLevel = document.querySelector("#cpuLvl")
const cpuPic = document.querySelector(".opponent-pic")
const playerLockIn = document.querySelector("#heroSelected")
const cpuLockIn = document.querySelector("#opponentSelected")

//pokemon object constructor
function Pokemon(name, poketype, lvl, front, back) {
	this.name = name;
  this.type = poketype;
	this.level = lvl;
	this.health = 50 * lvl;
	this.imageFront = "./images/" + front;
	this.imageBack = "./images/" + back;
}

//Create a template for each playing area.
function Battlefield(bg, name) {
	this.name = name;
	this.background = "./images/" + bg;
}

//Create player's and CPU pokemon object constructor
pokeData = {
  step: 1,
  player: {},
  cpu: {},
}

//List of playable characters.
const mewtwo = new Pokemon("Mewtwo", "Psychic", 2, "mewtwo.gif", "mewtwoBack.gif");
const articuno = new Pokemon("Articuno", "Ice/Flying", 2, "articuno.gif", "articunoBack.gif");
const blastoise = new Pokemon(
	"Blastoise",
	"Water",
  2,
	"blastoise.gif",
	"blastoiseBack.gif"
);
const lugia = new Pokemon("Lugia", "Psychic/Flying", 2, "lugia.gif", "lugiaBack.gif");
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
// list of battlefield
const city = new Battlefield ("city", "city.jpg")

//loading screen
function loadingScreen() {
	setTimeout(showPage, 3500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

//select pokemon funtion
function selectPokemon(pokemon) {
  if(playerLockIn.hasAttribute('data-selected-pokemon') !== true) { //check the value of player lock in attribute
    var x = pokeName //placed on a variable the const value of pokeName
        y = pokeType //placed on a variable the const value of pokeType
        z = pokeLevel //placed on a variable the const value of pokeLevel
        p = pokePic //placed on a variable the const value of pokePic
        
  }
  else {
    var x = cpuName //placed on a variable the const value of cpuName
        y = cpuType //placed on a variable the const value of cpuType
        z = cpuLevel //placed on a variable the const value of cpuLevel
        p = cpuPic //placed on a variable the const value of cpuPic
  }
  //output for images, name, type and level
  p.src=pokemon["imageFront"];
  x.innerHTML = pokemon.name;
  y.innerHTML = pokemon.type;
  z.innerHTML = pokemon.level;
}

// function to get the value of player or CPU
function characterSelection (player) {
  if (player == "player1") {
    //onclick function to get the data attribute of player
    playerLockIn.setAttribute('data-selected-pokemon', pokeName.innerText);
    document.querySelector("#pick-message").innerHTML = "Select Your Opponent"
  } else {
    //onclick function to get the data attribute of player
    cpuLockIn.setAttribute('data-selected-pokemon', pokeName.innerText);
    document.querySelector("#pick-message").innerHTML = 'Please Click "Select Arena"'; 
  }
}
//end of pokemon choices
