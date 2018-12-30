const array = [1,2,4,9];

const square = [];
const newArray = array.forEach((num) => {
	square.push(num**2);
}) 
// newArray is undefined
console.log(square);

// map, filter, reduce [useful array methods]
// unlike forEach, map has return values and can build new array
const mapArray = array.map((num) => {
	return num * 2;
});
console.log(mapArray); // creates new array; original array is not changed

// forEach can do multiple elements but map MUST have a return value
// map is better for single operation on elements in array
// map eliminates side effects; forEach could have many side effects
// map is deterministic; pure 

// can also do shorthand
const mapArray = array.map(num => num*2);
console.log('map:', mapArray); 

// filter (any conditional)
const filterArray = array.filter(num => num>3); // only grab elements > 3
console.log('filter:' filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
	// accumulator remembers previous returned value
	return accumulator + num;
}, 0); // accumulator starts at 0

console.log("reduce:", reduceArray);

// map, filter, and reduce are pure functions; remember these