const fs = require('fs');

// advent of code 2015 day 1 (adventofcode.com/2015/day/1)
fs.readFile('santas_helper.txt', (err, data) => {
    console.time('FunChallenge');
    // my solution
    if(err) {
        console.log("ErRoR");
    }
    // Part one -- what floor does Santa end up on?
    const floors = data.toString('utf8');
    let curr_floor = 0;
    for(let i=0; i<floors.length; i++) {
        
        if(floors[i] === '(') { // ( -> santa goes up one floor
            curr_floor++;
        } else if(floors[i] === ')') { // ) -> santa goes down one floor
            curr_floor--;
        }

        // Part two -- what is position of character when Santa first reaches basement(-1)?
        if(curr_floor === -1) { // after finding the first position this is unnecessary
            console.log("Position:", i+1);
        }
    }
    console.log(curr_floor);
    console.timeEnd('FunChallenge');
});

// instructor's solution on Udemy
function question1(){
    fs.readFile('./santas_helper.txt', (err, data) => {
        console.time("instructor's part 1 solution");
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if(currentValue === '(') {
                return acc += 1;
            } else if(currentValue === ')') {
                return acc -= 1;
            }
        }, 0);
        console.log("floor:", answer);
        console.timeEnd("instructor's part 1 solution");
    });
}

function question2(){
    fs.readFile('./santas_helper.txt', (err, data) => {
        console.time("instructor's part 2 solution");
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if(currentItem === '(') {
                acc += 1;
            } else if(currentItem === ')') {
                acc -= 1;
            }
            counter++;
            return acc < 0;
        });
        console.log("basement entered at:", counter);
        console.timeEnd("instructor's part 2 solution");
    });
}

question1();
question2();