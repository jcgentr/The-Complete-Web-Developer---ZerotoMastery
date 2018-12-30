// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// object1 === object2
// object1 or object2 != object3
// object1.value = 15 also changes object2 (shallow copy; a reference)
// primitive types: string, number, boolean, null, undefined
// reference type: objects (not defined by the programming language)
// remember arrays are objects {index:value}



// context vs scope
// new scope created upon new curly brackets
// context: where are we in the object
// this keyword refers to current object (what's to the left of the dot)
const object4 = {
	a: function() {
		console.log(this);
	}
}



// instantiation
// instances or multiple copies made of an object (a class)
class Player {
	constructor(name, type) {
		console.log('player:', this);
		this.name = name; // new object properties set by constructor
		this.type = type;
	}

	// new object method
	introduce() {
		console.log(`Hi I am ${this.name}. I'm a ${this.type}.`);
	}
}

// add on top of Player class; inherits Player class
class Wizard extends Player {
	// must call constructor
	constructor(name, type) {
		// must call constructor of Player class
		super(name, type);
		console.log('wizard:', this);
	}

	play() {
		console.log(`WEEEE I am a ${this.type}`);
	}
}

// wizards are a type of player
const wizard1 = new Wizard("Jim", "Healer");
const wizard2 = new Wizard("Sarah", "Black Mage");