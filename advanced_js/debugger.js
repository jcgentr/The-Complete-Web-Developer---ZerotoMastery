// debug this function two ways
const flatten = [[0,1], [2,3], [4,5]].reduce((acc, array) => {
	console.log('array', array);
	console.log('accumulator', acc);
	return acc.concat(array);
}, []);

// or use debugger JS keyword
const flatten = [[0,1], [2,3], [4,5]].reduce((acc, array) => {
	debugger;
	return acc.concat(array);
}, []);