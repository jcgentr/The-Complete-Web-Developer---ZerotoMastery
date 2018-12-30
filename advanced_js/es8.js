// new string methods
'turtle'.padStart(10);  // includes current characters in number
'turtle'.padEnd(10);

// ending comma now valid
const fun = (a,b,c,d,) => {
	console.log(a);
}

fun(1,2,3,4,);

// Object.values and Object.entries now with Object.keys
let obj = {
	username0: 'Santa',
	username1: 'Evil Elf',
	username2: 'The Grinch'
}

// makes keys into an array
Object.keys(obj).forEach( (key, index) => {
	console.log(key, obj[key]);
});

// loop through just values of object's keys
Object.values(obj).forEach(value => {
	console.log(value);
});

// entries does key,value inside own array
Object.entries(obj).forEach(entry => {
	console.log(entry);
});

// change the usernames
Object.entries(obj).map(entry => {
	return entry[1] + entry[0].replace('username', '');
});

// async await still to come in later video ... 

/*    Exercises   */

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // trim() method removes whitespace from both ends of a string
// padEnd() method pads the current string with a given string (default is "")
// first parameter is targetLength

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
let newString = "";
Object.entries(obj).forEach(entry => {
	newString += entry[0] + " " + entry[1] + " ";
});


// .join(separator) array method
Object.entries(obj).map(keyvalue => keyvalue.join(" ")).join(' ');