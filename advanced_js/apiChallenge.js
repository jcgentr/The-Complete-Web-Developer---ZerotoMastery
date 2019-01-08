const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4',
  'https://swapi.co/api/people/5',
  'https://swapi.co/api/people/6',
  'https://swapi.co/api/people/7'
];

const len = urls.length;

const getData = async function() {
	try {
		// destructuring
		const peopleArray = await Promise.all(urls.map(url => 
			fetch(url).then(person => person.json())
		));

		const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  		const photos = await resp.json();

		for(var i=0; i<len; i++) {
			document.write(`<img alt="Placeholder photo" src="${photos[i].url}" 
								height="100px" width="100px" >
							<h1>${peopleArray[i].name}</h1>
							<h3>Height: ${peopleArray[i].height}</h3>
							<h3>Gender: ${peopleArray[i].gender}</h3>
							<h3>Birth Year: ${peopleArray[i].birth_year}</h3>
							<br><br>`);
		}
	} catch(err) {
		console.log("Oops", err);
	}
}

getData();