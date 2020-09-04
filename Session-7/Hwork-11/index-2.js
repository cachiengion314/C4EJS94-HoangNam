let inputText = document.getElementById(`input_text`);
let upperBtn = document.getElementById(`upper_btn`);

function clickCallback() {
    console.log(inputText.value);
}
upperBtn.addEventListener(`click`, clickCallback);