const promise = new Promise((resolve,reject) => {
	if(true){
		resolve("Stuff Worked");
	} else {
		reject("Error it broke");
	}
});

promise.then(result => console.log(result));

// chaining
promise.then(result => result + "!")
	.then(result2 => {
		throw Error;
		console.log(result2)})
	.catch(() => console.log("ERROR!")); // catches errors before it not after

promise.then(result => result + "!")
	.then(result2 => result2+"?")
	.catch(() => console.log("ERROR!"))
	.then(result3 => console.log(result3+"!"));

const promise1 = new Promise((resolve,reject) => {
	setTimeout(resolve, 500, "HELLO");
});
const promise2 = new Promise((resolve,reject) => {
	setTimeout(resolve, 1000, "OOOHHHHHO");
});
const promise3 = new Promise((resolve,reject) => {
	setTimeout(resolve, 2000, "END IT noO");
});
Promise.all([promise1, promise2, promise3])
	.then(values => console.log(values));
