const http = require("http"); // grab http module

const server = http.createServer((request, response) => {
	//console.log("headers", request.headers);
	console.log("method", request.method);
	console.log("url", request.url);
	// response.setHeader('Content-Type', 'text/html');
	// response.end('<h1>Helloooo</h1>');
	const user = {
		name: 'Joe',
		hobby: 'Beekeeping'
	};
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));
});

server.listen(3000);