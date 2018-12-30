var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
console.log(list[0]);

// array of arrays
var listoflist = [["tiger", "cat", "bear", "bird"],["dog", "fish", "goat", "sheep"]];
console.log(listoflist[1][2]); // goat

// array methods
// modify current list
list.shift(); // remove tiger
list.pop(); // remove bird
list.push("elephant"); // elephant pushed to end of array

// creates new list (returns a copy of array)
var newList = list.concat(["bee", "deer"]); // add bee and deer to list

list.push("zebra");
list.sort(); // sort list alphabetically

// Practice
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// 4. Remove "Apples" from the array.
array.splice(array.indexOf("Apples"), 1);
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges"
console.log(array2[1][1][0]);