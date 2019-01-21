// express server; express is a library for node.js backend
// makes it easier to build servers in backend
// like React is for frontend
const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
	//res.send("<h1>hello WORLD</h1>");
	const user = {
		name: "Susy",
		sport: "soccer"
	};
	res.send(user);
});

app.get('/profile', (req, res) => {
	res.send("getting profile page")
});

app.listen(3000);