function addNewElement(tag, content="", parent=container, ...classes) {
    let newElement = document.createElement(tag);
    newElement.textContent = content;
    classes.forEach(element => {
        newElement.classList.add(element)
    });
    newElement.classList.add("smaller");
    parent.appendChild(newElement);
}

function removeLast() {
    container.lastElementChild.remove();
}


const container = document.getElementById("output-box");

addNewElement("h1", "I'm a regular header!", container);
addNewElement("h3", "I'm smaller but colored.", container, "colored");
addNewElement("p", "This is a very long paragraph element where there are \
a lot of nice and long words. More than one sentence. I make good use \
of optional arguments.");
addNewElement("button", "Press me!");

const buttonSubmit = document.getElementById("form-submit");
const buttonRemove = document.getElementById("remove-element");
const contentText = document.getElementById("text-content");
const contentTag = document.getElementById("tags-dropdown");

buttonSubmit.addEventListener("click", 
() => addNewElement(contentTag.value, contentText.value));
buttonRemove.addEventListener("click", 
() => removeLast());