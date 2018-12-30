var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study JavaScript",
	"eat healthy"
];

// add ! to each todo
for(var i=0; i<todos.length; i++) {
	todos[i] += "!";
}

// remove (pop) all todos from array
// var todosLength = todos.length;
// for(var i=0; i<todosLength; i++) {
// 	todos.pop();
// }

// while loops
var countDown = 10;
while(countDown>10) {
	console.log("while", countDown);
	countDown--;
}

// do while loops
var cd2 = 10;
do {
	console.log("do while", countDown);
	cd2--;
} while(cd2 > 10);

// forEach loops (ECMAScript 5)
todos.forEach(function(todo, i) {
	console.log(todo, i);
});

// compare to for loop
for(var i=0; i<todos.length; i++) {
	console.log(todos[i], i);
}

// can call any function with forEach loop
function money(todo) {
	console.log("$$$$ " + todo + " $$$$");
}

todos.forEach(money); // pass in function definition; don't call fxn