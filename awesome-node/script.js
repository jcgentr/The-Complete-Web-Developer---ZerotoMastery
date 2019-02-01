// access computer's filesystem
const fs = require('fs'); // fs module comes with node

// readFile asynchronous (notice callback function)
fs.readFile('./hello.txt', (err,data) => {
    if(err) {
        console.log("ErRoR");
    }
    console.log('Async', data.toString('utf8'));
});

// readFile synchronous 
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// best to use asynchronous readFile on server; no waiting on readFile before moving on

// append text to hello.txt file
// fs.appendFile('./hello.txt', ' This is so cool, bro!', err => {
//     if(err) {
//         console.log(err);
//     }
// });

// WRITE
// fs.writeFile('goodbye.txt','So sad to see you go.', err => {
//     if(err) {
//         console.log(err);
//     }
// });

// DELETE
fs.unlink('goodbye.txt', err => {
    if(err) {
        console.log(err);
    }
    console.log("Bye bye goodbye.txt");
})