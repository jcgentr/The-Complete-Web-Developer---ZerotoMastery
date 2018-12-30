/*     Facebook     PRACTICE TIME                 */
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
	username: "jayrad",
	password: "hellothere"
};
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
	{
		username: "jayrad",
		password: "hellothere"
	},
	{
		username: "ingrid",
		password: "brainystuff"
	},
	{
		username: "harry",
		password: "pass123"
	},
	{
		username: "tim",
		password: "tom007"
	}
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "yoyo",
		timeline: "cool cool"
	},
	{
		username: "papa",
		timeline: "yeah yeah"
	},
	{
		username: "mama",
		timeline: "the best year ever!"
	}
];	

// check username and password
var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// check for valid user
function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if(username === database[i].username
		 && password === database[i].password) {
			return true;
		}
	}
	// no user with that username and password pair found
	return false;
}

// need signin function
function signIn(username, password) {
	// check entire database for valid user
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and/or password");
	}
}

signIn(usernamePrompt, passwordPrompt);