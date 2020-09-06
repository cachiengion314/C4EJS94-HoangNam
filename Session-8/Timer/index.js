let timerDisplay = document.getElementById(`timer_display`);
let numberInput = document.getElementById(`number_input`);
let stopBtn = document.getElementById(`stop_button`);
let startBtn = document.getElementById(`start_button`);
let seconds, oneSecondsCountFunc;

function timeOutCallback() {
    if (seconds >= 0) {
        timerDisplay.textContent = seconds--;
        oneSecondsCount();
    } else {
        timerDisplay.textContent = `The time is up`;
        stopBtn.disabled = true;
        startBtn.disabled = false;
    }
}

function oneSecondsCount() {
    oneSecondsCountFunc = setTimeout(timeOutCallback, 1000);
}

function startButtonCallback() {
    seconds = Number(numberInput.value);
    timerDisplay.textContent = seconds;
    seconds--;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    oneSecondsCount();
}
startBtn.addEventListener(`click`, startButtonCallback);

function stopButtonCallback() {
    clearTimeout(oneSecondsCountFunc);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
stopBtn.addEventListener(`click`, stopButtonCallback);