// ternary operator: condition ? expr1(true) : expr2(false); good if only have two possible outcomes
function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "you may enter" : "access denied";

var automatedAnswer = "your account # is " + ( isUserValid(false) ? "1234" : "not available");

// switch statement; cleaner than bunch of if else statements
function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encountered a demon";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "left":
			whatHappens = "you fell into a lake";
			break;
		case "right":
			whatHappens = "you got trapped in quicksand";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}

// window is root scope; window.moveCommand("forward")

/*          Exercises              */
//#1 change this function into a ternary and assign it to 
//variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// undefined
//#3 return value when moveCommand("back");
// you arrived home
//#4 return value when moveCommand("right");
// you found a river
//#5 return value when moveCommand("left");
// undefined

//BONUS: practice makes perfect. 
//Go and write your own switch function. It takes time to get used to the syntax!
function whatDidYouEat(food) {
    var outcome;
    switch (food) {
        case "beans":
            outcome = "gas attack";
            break;
        case "salad":
            outcome = "safe and sound";
            break;
        case "mexican":
            outcome = "diarrhea in 30 minutes"
            break;
        default:
            outcome = "please enter valid food";
    }
    return outcome;
}