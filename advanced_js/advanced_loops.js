const basket = ['apples', 'oranges', 'grapes'];

// 1. basic for loop
for(let i=0; i<basket.length; i++) {
	console.log(basket[i]);
}

// 2. forEach
basket.forEach(item => {
	console.log(item);
});

// for of (much like python)
// iterating over iterables - arrays, strings
for (item of basket) {
	console.log(item);
}

for (item of 'basket') {
	console.log(item);
}


// for in (works with objects) - iterate to see object's properties/keys
// this is not iterating but instead is enumerating
// object properties are enumerable
const detailedBasket = {
	apples: 5,
	oranges: 20,
	blueberries: 1001
}

for (item in detailedBasket) {
	console.log(item);
}

// for of is for arrays and strings
// for in is for objects
// will get TypeError if use object in for of
// but no error if array used in for in
// since array is an object with key being its indices
/* 
basket = {
	0: 'apples',
	1: 'oranges',
	2: 'grapes'
}
*/

/*   Exercises   */

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let max = 0;
	for(let i=0; i<arr.length; i++){
		if (arr[i]>max) { max = arr[i] };
	}
	return max;
}

function biggestNumberInArray2(arr) {
	let max = 0;
	arr.forEach(el => {
		max = el > max ? el : max;
	})
	return max;
}

function biggestNumberInArray3(arr) {
	let max = 0;
	for(el of arr){
		max = el > max ? el : max;
	}
	return max;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
	for(item in basket) {
		if (item === lookingFor) { return true; }
	}
	return false;
}