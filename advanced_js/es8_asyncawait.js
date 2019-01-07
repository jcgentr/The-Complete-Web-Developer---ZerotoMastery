// ASYNC AWAIT is just promises underneath the hood
// this new feature is considered syntactic sugar;
// makes code look more asynchronous than regular promise notation

// from this
fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(console.log);

// to now this
async function fetchUsers() {
	// any promise needs await before it
	const resp = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await resp.json();
	console.log(data);
}

// from this
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => 
	fetch(url).then(people => people.json())
)).then(peopleArray => {
	console.log("1", peopleArray[0]);
	console.log("2", peopleArray[1]);
	console.log("3", peopleArray[2]);
	console.log("4", peopleArray[3]);
}).catch(err => console.log("ERROR occurred:", err));

// to now this
const getData = async function() {
	try {
		// destructuring
		const [ person1, person2, person3, person4 ] = await Promise.all(urls.map(url => 
			fetch(url).then(people => people.json())
		));
		console.log("1", person1);
		console.log("2", person2);
		console.log("3", person3);
		console.log("4", person4);
	} catch(err) {
		console.log("Oops", err);
	}
}