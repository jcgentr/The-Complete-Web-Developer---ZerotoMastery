// object (property: value,)
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abrakadabra", "shazam", "boo"], // array in an object
	shout: function() { // function in object: a method
		console.log("HEEEEEYYYYYY!!!!");
	}
};

// array (index: value,)
var list = ['apple', 'banana', 'orange'];

// add property to object
user.favoriteFood = "spinach";

// change value of property
user.isMarried = true;

// objects in an array
var usersList = [ 
	{
		username: "andy",
		password: "secre"
	},
	{
		username: "joe",
		password: "nooneknows"
	}
];

// properties can be added to empty arrays and objects
var emptyList = [];
var emptyObject = {};

// properties cannot be added to null arrays or objects
var nullObj = null;

// JS data types
// Number, string, boolean, undefined, null, symbol, object