//[NEW SECTION] What are Objects?

//An object is a collection of related data and/or functionality.

//ANALOGY:
//if CSS ===> everything is "BOX".
//JS ===> most things are "OBJECTS".

//EXAMPLE: "Cellphone" => is an object in the real-world.

//=> a cellphone being an object it has its own properties (color, weigth, unit model).
//also a cellphone also has its own functions (open, close, alarm, ring, send messages and many ...).

//[Lets convert the propeties of a cellphone into code].

//[Creating/instantiating an OBJECT IN JS].

//THERE ARE 2 WAYS TO DECLARE AN OBJECT IN JS.
//1. Curly braces
//	   let cellphone = {};
//2. Object constructor / Object initializer
//    let cellphone = Object()

//1.)
// let cellphone = {
// 		color: "white",
// 		weight: "115 grams",
// 		//an object call also contain functions.
// 		alarm: function() {
// 			console.log("Alarm is Buzzing");
// 		},
// 		ring: function() {
// 			console.log("Cellphone is Ringing");
// 		}
//     }

// console.log(cellphone);
//2.)
//let cellphone = Object(); //this will create an object.

//lets try to insert properties inside the created object via the constructor.
// cellphone.weight = "115 grams";
// cellphone.color = "white";
// cellphone.ring = function ringing() {
// 	console.log("cellphone is ringing");
// };

//[2nd approach using the Object constructor]
// let cellphone = Object({
// 	weight: "115 grams",
// 	color: "white",
// 	ring: function() {
// 		console.log("Cellphone is Ringing");
// 	}
// });

//Babel => is an example of a "Transpiler" => is used as a source to souce translator.this is a type of traslator that takes the source code of a program written in a specific programming language as its input and produces the equivalent source code in the same or different programming language that will become readable/ appropriate for the browser.
//NOTE: the process of the transpiler will become invisible to the naked eye.
//console.log(cellphone);

//[HOW TO CREATE AN OBJECT AS A BLUEPRINT?]
//=> We can create a reusable function that will create several objects that have the same Data structure.
//=> this APPROACH is very useful for creating multiple instances/duplicates/copies of THE SAME OBJECT.
//=> This will create a unique instance of the Desired object.

//this time im going to use another real life object, Laptop.

// SYNTAX:
//    function DesiredObjectName(arg1, arg2, argN) {
//    	 this.arg1 = valueNiArg1;
//    	 this.arg2 = valueNiArg2;
//    	 this.argN = valueNiArgN;
//    }
function Laptop(name, manufactureDate, color) {
	//this function will serve as an object constructor so YES Uppercase letter ang first character.
	//using an uppercase to identify a "Constructor" is the proper naming convention. because a constructor function will identify a new class in the script.
	this.kahitAno = name; //name ang magdedecide si dev.
	this.kahitAno2 = manufactureDate;
	this.kahitAno3 = color;
}

//"this" => keyword will allow you to assign a new objects property by associating them with the received values ftom the constructor function.
//"new" => is used to create an instance of a new OBJECT
let mx101010 = new Laptop("Lenovo", "2008", "black");
let mx101011 = new Laptop("Asus", "2015", "pink");

console.log(mx101010);
