/* program: must allocate memory, parse and execute
	JS engine (V8 for Chrome) compiles JS code
	this engine has memory heap and call stack
	call stack is where program is read and executed
*/

const a = 1; // allocates memory; uses up some of memory heap

/* memory leak is important to be aware of 
   too many unused global variables can fill up memory heap and cause problems
*/

// call stack - reads and executes our scripts from the stack
console.log(1);
console.log(2);
console.log(3);

// more complex
const first = () => {
	const second = () => {
		console.log("hello");
	}
	two();
}

// the stack looks like
console.log("hello");
second();
first();

/* JavaScript is a single-threaded language that can be non-blocking (asynchronous)
	single-threaded: one call stack (FILO); one process at a time
		> this is example of synchronous programming
	multi-threaded languages have multiple call stacks; can have deadlocks
*/
// call stack overflows: Stack Overflow
// ex: recursion (fxn calls itself) with no end
function foo() {
	foo();
}
foo(); // result: Maximum call stack size exceeded

/* but synchronous JS is bad; this would result in large wait times depending on the 
size of the functions executing;
JS can be non-blocking though. Don't wait around for things that take time.
asynchronous programming helps (JS uses callback functions to do this). 
*/
// ex 
console.log(1);
setTimeout(() => {
	console.log(2);
}, 2000); // waits 2 seconds before executing
console.log(3); // executes before the 2

/* JS run-time environment included in the browsers. Includes JS engine, web apis,
event loops, and callback queues. setTimeout is a web API not JS. Web API is notified
so the setTimeout is popped from call stack. Web API starts the timer. Since call
stack is now empty, console.log(3) can execute. After timer is over, callback queue
is now contains console.log(2). Event loop notices callback queue is not empty, while
also noting that call stack is so it will put callback on call stack and execute the
console.log(2). Even if interval was 0, 3 executes before 2 because 2 goes through
web API and callback which opens up call stack to execute 3 before 2. 
*/

/* analogy: synchronous - call someone wait for response
			asynchronous - text someone, do something, get response later */