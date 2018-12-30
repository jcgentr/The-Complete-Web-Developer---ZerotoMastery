// let and const 
// const: constant
// let: new scope whenever wrapped around by curly brackets
// let is new var; use let instead of var from now on
const player = "bobby"; // this variable cannot be change
let experience = 100;
let wizardLevel = false;

if (experience>90) {
	// let creates new scope inside if statement unlike var does
	let wizardLevel = true;
	console.log("inside if:", wizardLevel);
}

console.log("outside if:", wizardLevel);

// const function to prevent changing of a fxn
const a = function(){
	console.log("a");
}

// if value of variable will change use let
// if value of variable will not change use const
// const: cannot reassign variable 
   //***** but can change properties of object



// Destructuring
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// versus 

const { player, experience } = obj;
let { wizardLevel } = obj;

// dynamic Object properties
const name = 'john snow';
const obj = {
	[name]: "hello",
	[1+3]: "hihi"
};

const a="Simon";
const b=88;
const c=true;
const d={};

const obj={
	a,b,c,d
};


// Template strings
const name = "Sally";
const mood = "happy";
age = 45;

const greeting = "Hello " + name + " you seem to be " + mood + "!";
// versus
const greetingBest = `Hello ${name} you seem to be ${mood}! You look ${age-10}!`;

// Default arguments
function greet(name='', mood='angry', age=32, pet='cat') {
	return `Hello ${name}, you seem to be ${mood}! You look ${age-10}! I like your ${pet}.`;
}

// 7th data type of JS: Symbols (unique type)
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); // sym2 !== sym3


// Arrow functions
// new and quicker way to write functions with single return
function add1(a,b){
	return a+b;
}

// versus
const add2 = (a,b) => a+b; 