const items = [
    `Backpack`, `MiBand watch`, `Ring`
]
let itemsList = document.getElementsByTagName(`LI`);
let listUl = document.getElementsByTagName(`UL`);
console.log(`${listUl[0].tagName}`);
for (let i = 0; i < itemsList.length; i++) {
    console.log(itemsList[i]);
}
for (let i = 0; i < items.length; i++) {
    let tag = document.createElement(`li`);
    let text = document.createTextNode(items[i]);
    tag.appendChild(text);

    listUl[0].appendChild(tag);
}
itemsList[0].remove();
itemsList[1].remove();