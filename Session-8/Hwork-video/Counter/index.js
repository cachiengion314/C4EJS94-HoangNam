let plusBtn = document.getElementById(`button_plus`);
let minusBtn = document.getElementById(`button_minus`);
let pElement = document.getElementsByTagName(`P`)[0];

let currentNum = 0;
pElement.textContent = currentNum;

function clickPlusCallback() {
    currentNum++;
    pElement.textContent = currentNum;
}

function clickMinusCallback() {
    currentNum--;
    pElement.textContent = currentNum;
}

plusBtn.addEventListener(`click`, clickPlusCallback);
minusBtn.addEventListener(`click`, clickMinusCallback);