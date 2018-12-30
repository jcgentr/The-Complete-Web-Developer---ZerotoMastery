// function declaration style
function sayHello() {
	console.log("Hello from the js file!");
}

// and call (or invoke) the function to execute it
sayHello();

// function expression style (uses an anonymous fxn)
var sayBye = function() {
	console.log("Bye!");
};  // notice the semicolon here

sayBye();

// Do not Repeat Yourself (DRY)
// use arguments
function sing(song) {
	console.log(song);
}

sing("I\'m singing. Yes I am singing.");
sing("Sing a song, song a sing.");

function multiply(a, b) {
	// exits on first return reached
	if (a>10 || b>10) {
		return "that's too hard";
	} else {
		return a*b;
	}
}

alert(multiply(7,6));

// parameters: two parameters a and b (variable in declaration of function)
// arguments: two arguments 7 and 6 (actual value passed to function)
// expression: something that produces a value
	// ex: 1+3; var a = 2; return true;

// method: a function inside an object