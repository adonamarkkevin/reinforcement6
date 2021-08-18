// let cellphone = Object();

// cellphone.weight = "115 grams";
// cellphone.color = "white";
// cellphone.ring = function ringing() {
// 	console.log("cellphone is ringing");
// };

// console.log(cellphone);

let cellphone = Object({
	weight: "115g",
	color: "white",
});

// console.log(cellphone);

// function desiredObjectName(a1, a2, a3) {
// 	this.a1 = valueA1;
// 	this.a2 = valueA2;
// 	this.a3 = valueA3;
// }

function Laptop(name, manufactureDate, color) {
	this.name = name;
	this.manufactureDate = manufactureDate;
	this.color = color;
}
