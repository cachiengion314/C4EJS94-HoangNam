let inputText = document.getElementById(`input_text`);
let upperBtn = document.getElementById(`upper_btn`);

function clickCallback() {
    console.log(`Upper it!!!  just clicked`);
}
upperBtn.addEventListener(`click`, clickCallback);