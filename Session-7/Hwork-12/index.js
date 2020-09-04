const items = [
    `Backpack`, `MiBand watch`, `Ring`
]
let itemsDivTag = [];
let allLITag = document.getElementsByTagName(`LI`);
let ulItems = document.getElementsByTagName(`UL`)[0];

console.log(`${ulItems.textContent}`);

for (let i = 0; i < allLITag.length; i++) {
    console.log(allLITag[i].textContent);
    allLITag[i].remove();
    i--;
}
// Create a remove button function
function createRemoveButton(callback) {
    let buttonElement = document.createElement(`button`);
    let buttonText = document.createTextNode(`remove`);
    buttonElement.appendChild(buttonText);

    buttonElement.addEventListener(`click`, callback);

    return buttonElement;
}
// Create a list of brand and make it the child of div
for (let i = 0; i < items.length; i++) {
    let liTag = document.createElement(`li`);
    let liTagText = document.createTextNode(items[i]);
    liTag.appendChild(liTagText);

    let divTag = document.createElement(`div`);
    divTag.appendChild(liTag);
    ulItems.appendChild(divTag);

    itemsDivTag.push(divTag);

    let buttonElement = createRemoveButton(
        () => {
            // divTag.remove();
            let index = itemsDivTag.indexOf(divTag);
            console.log(`index: ${index}`);
            itemsDivTag[index].remove();
            itemsDivTag.splice(index, 1);
            console.log(itemsDivTag);
        });

    divTag.appendChild(buttonElement);
}
// Get the add button
let addBtn = document.getElementsByTagName(`BUTTON`)[0];
let nameInput = document.getElementById(`name_input`);

function clickAddCallback() {
    console.log(`Button clicked!!!`);
    console.log(nameInput.value);
    items.push(nameInput.value);
    console.log(items);

    let newItemsElement = document.createElement(`LI`);
    let text = document.createTextNode(nameInput.value);
    newItemsElement.appendChild(text);

    let divTag = document.createElement(`div`);
    itemsDivTag.push(divTag);
    let removeButton = createRemoveButton(
        () => {
            // divTag.remove();
            let index = itemsDivTag.indexOf(divTag);
            console.log(`index: ${index}`);
            itemsDivTag[index].remove();
            itemsDivTag.splice(index, 1);
            console.log(itemsDivTag);
        }
    )
    divTag.appendChild(newItemsElement);
    divTag.appendChild(removeButton);
    ulItems.appendChild(divTag);

    nameInput.value = null;
}
addBtn.addEventListener(`click`, clickAddCallback);