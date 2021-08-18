function Pokemon(name, level, type) {
	this.pokemonName = name;
	this.pokemonLevel = level;
	this.pkemonHealth = 80 * level;
	this.pokemonType = type;
	this.attack = function (targetPokemon) {
		console.log(this.pokemonName + " attacked " + targetPokemon.pokemonName);
	};
}

let charmander = new Pokemon("Charmander", 8, "Fire");

console.log(charmander);
