// express server; express is a library for node.js backend
// makes it easier to build servers in backend
// like React is for frontend JS
const express = require('express');
// need body-parser middle ware to parse post requests
const bodyParser = require('body-parser');

const app = express();

// Middleware
// app.use((req,res,next) => {
// 	console.log("<h1>HELLLOOOO</h1>");
// 	// needs to call next() to continue on down
// 	next();
// })
// many different types of data to parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// load static html file
app.use(express.static(__dirname + '/public'));

// routes (checks line by line)
// root path
app.get('/:id', (req, res) => {
	// req.query
	// req.body
	// req.header
	console.log(req.params);
	//res.send("<h1>hello WORLD</h1>");
	// const user = {
	// 	name: "Susy",
	// 	sport: "soccer"
	// };
	// res.send(user);
	res.status(404).send("not found");
});

// profile path
app.get('/profile', (req, res) => {
	res.send("getting profile page")
});

// POST request
app.post('/profile', (req,res) => {
	// bodyParser takes care of parsing post request
	console.log(req.body);
	// send a reponse after the post request
	res.send("Success");
});

// get, post, delete, put methods available (RESTful API)
// if path isn't listed using get method: 404 Error Page not found

app.listen(3000);