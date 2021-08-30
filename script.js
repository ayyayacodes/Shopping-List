var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('ul>li');


function inputLength() {
	return input.value.length;
}

function createListElement() {
  //Automatically creates the delete button next to the newly added list item, has to   be on the top, otherwise it doesn't work
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn");
  deleteButton.appendChild(document.createTextNode("Delete"));
  
  //Creating a new "li" element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li).addEventListener("click", toggleList); //append and toggle on and   off new list items
	input.value = "";
  
  //append "delete button" to newly added "li"
  ul>li.appendChild(deleteButton).addEventListener("click", removeItem);
  
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


//Toggle list item on and off when clicked on 
var list = document.querySelectorAll('ul>li');
for (var i = 0; i < list.length; i++) {
list[i].addEventListener("click", toggleList);
}
function toggleList() {
  this.classList.toggle("done");
 }

                      
//Delete list item by clicking on the delete button next to it
var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++){
  elements[i].addEventListener("click", removeItem);
}
  
function removeItem(){
this.parentNode.remove();
}       