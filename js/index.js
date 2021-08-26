//[OJECT BLUEPRINT TEMPLATE]
const myForm = document.querySelector(".form-group")
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
	this.background = bg;
	this.name = name;
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

//loading screen
function loadingScreen() {
	setTimeout(showPage, 3500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

//select pokemon funtion
function selectPokemon(pokemon) {
  if(playerLockIn.hasAttribute('data-selected-pokemon') != true) {
    var x = pokeName
        y = pokeType 
        z = pokeLevel 
        p = pokePic
  }
  else {
    var x = cpuName
        y = cpuType
        z = cpuLevel
        p = cpuPic
  }

  p.src=pokemon["imageFront"];
  x.innerHTML = pokemon.name;
  y.innerHTML = pokemon.type;
  z.innerHTML = pokemon.level;
}

function characterSelection (player) {
  if (player == "player1") {
    playerLockIn.setAttribute('data-selected-pokemon', pokeName.innerText)
  } else {
    opponentLockIn.setAttribute('data-selected-pokemon', pokeName.innerText)
  }
}
