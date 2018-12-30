// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclamArray = [];
array.forEach(obj => {
  exclamArray.push(obj.username+"!");
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapQarray = array.map(obj => `${obj.username}?`);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(obj => obj.team==="red");

//Find out the total score of all users using reduce
const reduceScore = array.reduce((accumulator, obj) => {
  return accumulator+obj.score;
}, 0);

// (1), what is the value of i? index of the element in the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const newArrayPure = arrayNum.map(num => num*2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newArrayOfUsers = array.map(obj => {
  obj.items = obj.items.map(item => item+"!");
  return obj;
});