const first = () => {
	const greet = "Hi";
	const second = () => {
		const name = "bobby";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures
// second fxn is stored in newFunc and greet (child scope) has access to parent
// scope which is in the first function

// Closures: the function ran and executed and will never run again, BUT it is
// going to remember that there are references to those variables so child scope
// has access to parent scope (parent scope does not have access to child scope: name)

// Currying
// convert fxn of multiple arguments to one at a time
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(2)(8); // 16
const multiplyby5 = curriedMultiply(5); // returns a fxn with one parameter needed
multiplyby5(5); // 25
multiplyby5(10); // 50

// Compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // 7


// Avoiding side effects and functional purity.
// side effects example: console.log() in a function
// side effects affect the 'outside world'; fxn is its own universe
var a =1;
function v(){
	a =2; // this is a side effect
}
// functional purity: eliminate side effects and always return a value
// fxn becomes deterministic: always returns same value depending on input values
// key principle in avoiding bugs