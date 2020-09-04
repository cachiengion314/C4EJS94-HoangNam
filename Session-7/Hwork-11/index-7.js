let inputText = document.getElementById(`input_text`);
let upperBtn = document.getElementById(`upper_btn`);
let divTags = document.getElementsByTagName(`DIV`);

function clickCallback(e) {
    console.log(`Upper it!!!  just clicked`);
    // console.log(e.target);
    console.log(inputText);
    console.log(`user name: ${inputText.value}`);
    console.log(`user name: ${inputText.value.toUpperCase()}`);
    console.log(divTags[1]);
    divTags[1].textContent = inputText.value.toUpperCase();
}
upperBtn.addEventListener(`click`, clickCallback);