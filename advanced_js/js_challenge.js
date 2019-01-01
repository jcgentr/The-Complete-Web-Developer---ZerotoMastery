/* Question 1: Clean the room function: given an input of 
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these 
into individual array that is ordered. For example answer(ArrayFromAbove) should 
return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it 
organizes strings differently from number types. i.e. [1, "2", "3", 2] should 
return [[1,2], ["2", "3"]] */
function organize(array) {
	// sort the array first
	array.sort(function(a, b){return a-b}); // JS sort does strings

	// FINISH THIS LATER
	
}




/* Question 2: Write a javascript function that takes an array of numbers and a 
target number. The function should find two different numbers in the array that, 
when added together, give the target number. For example: answer([1,2,3], 4)should 
return [1,3] */
function sumTarget(array, target) {
	for(num of array) {
		let complement = target - num;
		if(array.includes(complement)){
			return [num, complement];
		}
	}
}



/* Question 3: Write a function that converts HEX to RGB. Then Make that function
 auto-dect the formats so that if you enter HEX color format it returns RGB and if 
 you enter RGB color format it returns HEX. */
function convertHEX_RGB(str) {
	
	// hex to rgb
	if(str[0] === "#") {

		let rgb = "rgb(";
		for(let i=1; i<str.length; i+=2) {
			let hexNum = parseInt(str[i]+str[i+1], 16);
			rgb += hexNum + ",";
		}
		// take off last comma
		rgb = rgb.slice(0,-1) + ")";

		return rgb;

	} else { // rgb to hex
		let hex = "#";
		let split = str.split(",");
		let one = Number(split[0].slice(4, split[0].length)).toString(16);
		one = one.length===1 ? "0"+one : one;
		let two = Number(split[1]).toString(16);
		two = two.length===1 ? "0"+two : two;
		let three = Number(split[2].slice(0, -1)).toString(16);
		three = three.length===1 ? "0"+three : three;
		hex += one + two + three;
		return hex;
	}
}