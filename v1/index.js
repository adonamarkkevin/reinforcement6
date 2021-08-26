function singlePlayerShow() {
	let single = document.getElementById("singlePlayer");
	let selectPlayer = document.getElementById("selectPlayer");

	if (single.style.display === "none") {
		single.style.display = "flex";
		selectPlayer.style.display = "none";
	} else {
		single.style.display = "none";
		selectPlayer.style.display = "flex";
	}
}

function selectPlayerShow() {
	let single = document.getElementById("singlePlayer");
	let selectPlayer = document.getElementById("selectPlayer");

	if (selectPlayer.style.display === "none") {
		selectPlayer.style.display = "flex";
		single.style.display = "none";
	} else {
		selectPlayer.style.display = "none";
		single.style.display = "flex";
	}
}

function selectPlayerShow() {
	let single = document.getElementById("singlePlayer");
	let selectPlayer = document.getElementById("selectPlayer");

	if (selectPlayer.style.display === "none") {
		selectPlayer.style.display = "flex";
		single.style.display = "none";
	} else {
		selectPlayer.style.display = "none";
		single.style.display = "flex";
	}
}

function selectCharShow() {
	let selectChar = document.getElementById("selectChar");
	let singlePlayer = document.getElementById("singlePlayer");

	if (selectChar.style.display === "none") {
		selectChar.style.display = "flex";
		singlePlayer.style.display = "none";
	} else {
		selectChar.style.display = "none";
		singlePlayer.style.display = "flex";
	}
}

function selectCharHide() {
	let selectChar = document.getElementById("selectChar");
	let singlePlayer = document.getElementById("singlePlayer");

	if (singlePlayer.style.display === "none") {
		singlePlayer.style.display = "flex";
		selectChar.style.display = "none";
	} else {
		singlePlayer.style.display = "none";
		selectChar.style.display = "flex";
	}
}

