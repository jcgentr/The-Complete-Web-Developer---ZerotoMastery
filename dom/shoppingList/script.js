var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');
var delBtns = document.getElementsByClassName("del");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	delBtn.classList.add("del");
	delBtn.addEventListener("click", deleteListItem);

	var textnode = document.createTextNode(input.value);
	li.appendChild(textnode);
	li.appendChild(delBtn);
	li.addEventListener("click", toggleDoneClass);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneClass() {
	this.classList.toggle("done");
}

function deleteListItem() {
	// btn -> li -> ul; ul deletes current li
	this.parentNode.parentNode.removeChild(this.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(var i=0; i<li.length; i++) {
	li[i].addEventListener("click", toggleDoneClass);
}

for(var i=0; i<delBtns.length; i++) {
	delBtns[i].addEventListener("click", deleteListItem);
}