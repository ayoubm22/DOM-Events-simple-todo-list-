var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = ul.querySelectorAll("li");


function inputLength() {
    return input.value.length;
}

// create a new listElement After click or pressing Enter
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete Item"));
    li.appendChild(button);
    button.onclick = removeParent;
    // or button.addEventListener("click", removeParent);
    li.onclick = toggle;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {

    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// remove list item
function removeParent() {
    event.target.parentElement.remove();
    //or    event.target.parentNode.remove();
}

function toggle() {
    event.target.classList.toggle("done");
}

function listLength() {
    return listItems.length;
}

for (let i = 0; i < listLength(); i++) {
    listItems[i].onclick = toggle;
}

// adding buttons to original list items
function deleteButton() {
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete Item"));
    listItems[i].appendChild(button);
    button.onclick = removeParent;
}

for (var i = 0; i < listLength(); i++) {
    deleteButton();
}