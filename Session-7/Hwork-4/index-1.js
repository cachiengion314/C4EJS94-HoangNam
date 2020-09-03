console.log(`4`);

function getElementsByTagNameFunc() {
    let allLi = document.getElementsByTagName(`li`);
    for (let i = 0; i < allLi.length; i++) {
        console.log(allLi[i].tagName);
        allLi[i].style.backgroundColor = `red`;
    }
}