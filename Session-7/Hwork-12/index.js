const items = [
    `Backpack`, `MiBand watch`, `Ring`
]
let allLITag = document.getElementsByTagName(`LI`);
let ulItems = document.getElementsByTagName(`UL`)[0];

console.log(`${ulItems.tagName}`);

for (let i = 0; i < allLITag.length; i++) {
    console.log(allLITag[i]);
}
for (let i = 0; i < items.length; i++) {
    let liTag = document.createElement(`li`);
    let text = document.createTextNode(items[i]);
    liTag.appendChild(text);

    let divTag = document.createElement(`div`);
    divTag.appendChild(liTag);
    ulItems.appendChild(divTag);
}
allLITag[0].remove();
allLITag[1].remove();
let addBtns = document.getElementsByTagName(`BUTTON`);
let nameInput = document.getElementById(`name_input`);

let addBtn = addBtns[0];

function createButtonElement(idNumber) {
    let buttonElement = document.createElement(`button`);
    let text = document.createTextNode(`remove`);
    buttonElement.appendChild(text);
    ulItems.appendChild(buttonElement);

    let divTag = document.createElement(`div`);
    divTag.appendChild(liTag);
    ulItems.appendChild(divTag);

    buttonElement.addEventListener(`click`,
        () => {
            allLITag[idNumber].remove();

        });
}

function clickCallback() {
    console.log(`Button clicked!!!`);
    console.log(nameInput.value);
    items.push(nameInput.value);
    console.log(items);
    let newItemsElement = document.createElement(`LI`);
    let text = document.createTextNode(nameInput.value);
    newItemsElement.appendChild(text);
    ulItems.appendChild(newItemsElement);

    createButtonElement(items.indexOf(nameInput.value));

    nameInput.value = null;
}
addBtn.addEventListener(`click`, clickCallback);