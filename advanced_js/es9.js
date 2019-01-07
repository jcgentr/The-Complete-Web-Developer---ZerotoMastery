// ECMAscript 9 (2018)

// object spread operator
const animals = {
	dog: 11,
	cat: 2,
	whale: 1
}

const { dog, ...rest } = animals;

function objectSpread(p1,p2) {
	console.log(p1);
	console.log(p2);
}

objectSpread(dog, rest);

const array = [1,2,3,4];
function sum(a,b,c,d) {
	return a+b+c+d;
}

sum(...array); // returns 10


// finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(people => people.json());
})).then(peopleArray => {
	throw Error;
	console.log("1", peopleArray[0]);
	console.log("2", peopleArray[1]);
	console.log("3", peopleArray[2]);
	console.log("4", peopleArray[3]);
}).catch(err => console.log("ERROR occurred:", err))
  .finally(() => console.log("extra stuff"));


// for await of
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
const getData = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch(err) {
    console.log("oooops", err);
  }
}
// recall the for of loop
const loopthruURLs = urls => {
	for(url of urls) {
		console.log(url);
	}
}
// now the for await of loop
const getData2 = async function() {
	const arrayofPromises = urls.map(url => fetch(url));
	for await (let request of arrayofPromises) {
		const data = await request.json();
		console.log(data);
	}
	// In this case, for-await takes each item from the array and waits for it to resolve. 
	//You'll get the first response even if the second response isn't ready yet, 
	//but you'll always get the responses in the correct order.
}




