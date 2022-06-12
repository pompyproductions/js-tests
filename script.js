function addNewElement(tag, content="", parent=container, ...classes) {
    let newElement = document.createElement(tag);
    newElement.textContent = content;
    classes.forEach(element => {
        newElement.classList.add(element)
    });
    parent.appendChild(newElement);

}

const container = document.getElementById("output-box");

addNewElement("h1", "I'm a regular header!", container, "smaller");
addNewElement("h3", "I'm smaller but colored.", container, "smaller", "purple");
addNewElement("p", "This is a very long paragraph element where there are \
a lot of nice and long words. More than one sentence. I make good use \
of optional arguments.");
addNewElement("button", "Press me!");
