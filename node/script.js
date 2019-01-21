// use builtin module (fs: filesystem)
// const c = require('fs');
// const h = require('http'); will use later for server

// import module from script2.js file
const script2 = require('./script2.js');
console.log(script2.largeNumber);

// import nodemon package from npm

const a = 5;
const b = 5;

console.log(a+b);

// run after 3 seconds
setTimeout(() => {
	console.log(a*b);
}, 3000);

// output current directory name
console.log(__dirname);