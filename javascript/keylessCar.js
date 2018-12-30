// Make a keyless car EVEN BETTER!
function checkDriverAge() {
	var age = Number(prompt("What is your age?"));

	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

var checkDriverAge2 = function() {
	var age = Number(prompt("What is your age?"));

	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (age > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (age === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

function checkDriverAgeFull(age) {
	if (age < 18) {
		return "Sorry, you are too young to drive this car. Powering off";
	} else if (age > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (age === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

checkDriverAge();
checkDriverAge2();
checkDriverAgeFull(18);