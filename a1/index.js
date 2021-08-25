// alert('pokemon')










function Pokemon(name, lvl,front,back,hp) {
    this.name = name;
    this.level = lvl;
    this.health = 50 * lvl;
    this.imageFront = `./images/` + front;
    this.imageBack = `./images/` + back;
}

//battle field

function Battlefield(bg, name){
    this.background = bg;
    this.name = name;
}

//characters
const mewtwo.ignoreCase() = new Pokemon("Mewtwo",2,'mewtwo.gif','mew2back.gif')
const articuno = new Pokemon('Articuno', 2, 'articuno.gif', 'articunoBack.gif');
const blastoise = new Pokemon ('Blastoise', 2, 'blastoise.gif','blastoiseBack.gif');
const pikachu = new Pokemon ("Pikachu", 2, "pikachuFront.gif", 'pikachuBack.gif')

// let message = "i just went to the salon said Jenny'
// area
const backyard = new Battlefield("image", 'backyard');
const volcano = new Battlefield('image', 'volcano');

//
const areas = Array();
let x = areas[0] = backyard;
let y = areas[1] = volcano;

const characters = Array();
let a = characters[0] = articuno;
let b = characters[1] = mewtwo;
let c = characters[2] = blastoise;

console.log(areas);
console.log(characters);
console.log(b);

// REVIEW
//FN created in the code
	// 1 CONTESTANTS
	// 2. BATTLE
	// 3. PLAY

function contestants (pokemon1, pokemon2) {
	// body...
	let contestant1 = document.getElementById('healthIndicator1');
	let contestant2 = document.getElementById('healthIndicator2');

	let name1 = pokemon1.name;
	let hp1 = pokemon1.health;
	let hp2 = pokemon2.health;
	let imageBack = pokemon1.imageBack;
	let imageFront = pokemon2.imageFront;
	let char1level = pokemon1.level;
	let name2 = pokemon2.name;
	let char2level = pokemon2.level;
	contestant1.innerHTML = `
	<div class= "mt-2">
		<h4>${name1}</h4>
		<h5>Level${char2level}</h5>
		<h5>${hp1 + '/' + hp1}</h5>
		<img height="350" src=${imageBack}>
	</div>
	`
	contestant2.innerHTML = `
	<div class= "mt-2">
		<h4>${name2}</h4>
		<h5>Level${char2level}</h5>
		<h5>${hp2 + '/' + hp2}</h5>
		<img height="170" src=${imageFront}>

	</div>
	`
}

//battle

function battle(contestant1,contestant2){
   let game = document.getElementById('game');
   let player1 = document.getElementById('healthIndicator1');	
   let cp = document.getElementById('healthIndicator2'); 

   
   		game.innerHTML = `
	
	   <div class="container mt-5 mb-2">
	   		<h5>Battle!</h5>
	   </div>
	   <div class="row">

	   		<div class="col">
	   			<h5>HP</h5>
	   			
				<div class="container" id= "health1">
					<progress class="progress-bar w-50" id="health1"></progress>
	   			</div>
	   		</div>

	   		<!--healthbar p2 -->
	   		<div class="col">
	   			<h5>HP</h5>
	   			
	   			<div class="container" id= "health2">
					<progress class="progress-bar w-50" id="health2"></progress>
				</div>
			</div>	   			
	   	</div>

`;
	   	// player1.innerHTML = 'Player1';
	   	// cp.innerHTML = 'Computer' ;
	   	contestants(contestant1,contestant2);

	
	}
	 function play(player1, player2) {
   	  
	         let game = document.getElementById('game');
	   	  let pokemon = characters.map(function(element) {
	   	  	
	   	  	for (pokemonCount = 0; pokemonCount < characters.length; pokemonCount++) {
	   	  		return game.innerHTML = `
	   	  			<h6>${element.name.toLowerCase()}</h6>
	   	  		`
	   	  	}
	   	  })
	   	  pokemon = pokemon.join(" ");
	         game.innerHTML = `Select Players! \n
	         	${pokemon} 
	        `;

	      player1 = prompt('Select Player 1');
	      player2 = prompt('Select Opponent');

	      console.log(player1);
	         player1 =eval(player1);
	         player2 =eval(player2);
	         console.log(typeof player1);
	         console.log(typeof player2);
   	  if (!player1 && !player2) {
         play();
         //lets try to get the user's selection. 
         
         player1 = (player1)
         console.log( player2); 
         let pc = prompt("Select Opponent");
         battle(player1, pc);   
   	  } else {
   	  	 battle(player1,player2); 
   	  }
   }

   play(); 
