function loadingScreen() {
	let loading = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}