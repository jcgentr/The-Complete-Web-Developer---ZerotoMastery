var css = document.querySelector("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('gradient');
var random = document.querySelector('button');

// DRY; do not repeat yourself
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value + ")";

	// output linear gradient value to h3
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
  	var color = '#'; 
  	for (var i = 0; i < 6; i++) {
  		// random index from 0 to 15
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

// on page load
setGradient();
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColors);