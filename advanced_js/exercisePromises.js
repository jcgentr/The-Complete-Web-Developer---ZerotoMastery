// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, "SUCCESS");
});
//or
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("SUCCESS");
	}, 4000);
});

// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result));
//or
promise.then(console.log);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve("SUCCESS");
promise2.then(value => console.log(value));
// or with setTimeout added
const promise22 = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
		.catch(() => console.log("Ooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(people => people.json());
})).then(peopleArray => {
	console.log("1", peopleArray[0]);
	console.log("2", peopleArray[1]);
	console.log("3", peopleArray[2]);
	console.log("4", peopleArray[3]);
}).catch(err => console.log("ERROR occurred:", err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
// yes

