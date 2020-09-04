let inputText = document.getElementById(`input_text`);
let upperBtn = document.getElementById(`upper_btn`);

function clickCallback(e) {
    console.log(`Upper it!!!  just clicked`);
    // console.log(e.target);
    console.log(inputText);
    console.log(`user name: ${inputText.value}`);
}
upperBtn.addEventListener(`click`, clickCallback);