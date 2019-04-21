var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteBtn = document.getElementsByClassName("delete");
var ul = document.querySelector("ul");
var list_items = document.querySelectorAll('li');

// return input length
function inputLength() {
	return input.value.length;
}

// to activate delete button
for (var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", removeSelectedItem);
}

// to remove selected item -- from stackoverflow
function removeSelectedItem(event) {
	event.target.removeEventListener("click", removeSelectedItem);
	event.target.parentNode.remove();
}

// to create li element -- from stackoverflow
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.onclick = removeSelectedItem;
	li.appendChild(button);
	li.addEventListener("click",toggle);
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for (var i = 0; i < list_items.length; i++) {
	list_items[i].addEventListener("click", toggle);
}

function toggle() {
	this.classList.toggle("done");
}