let question = document.getElementById(`freaking_math_question`);
let barHead = document.getElementById(`freaking_math_time_bar_head`);
let scoreTag = document.getElementById(`freaking_math_score`);
let yesBtn = document.getElementById(`yes_button`);
let noBtn = document.getElementById(`no_button`);
let correctSound = document.getElementById(`corect_sound`);
let wrongSound = document.getElementById(`wrong_sound`);

let soundTick = document.getElementById(`setting_tick_sound_tick`);
let timerTick = document.getElementById(`setting_tick_timer_tick`);

var MAX_TIME = 500;
var miliSeconds = MAX_TIME;
var miliSecondIntervalFuncId;
var randomQuestionIndex, score = 0;
miliSecondInterval();

function onclickSoundTick() {
    if (soundTick.textContent == `X`) {
        soundTick.innerHTML = `&#10003;`;
    } else {
        soundTick.textContent = `X`;
    }
}

function onclickTimerTick() {
    if (timerTick.textContent == `X`) {
        timerTick.innerHTML = `&#10003;`;
        miliSecondInterval();
        // continue
    } else {
        timerTick.textContent = `X`;
        // stop
    }
}

function getRandomQuestion() {
    randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
    question.textContent = allQuestions[randomQuestionIndex].question;
    scoreTag.textContent = score;
}
getRandomQuestion();

function onclickYesButtonCallback() {
    if (allQuestions[randomQuestionIndex].answer) {
        score++;
        if (soundTick.textContent != `X`) {
            correctSound.play();
        }
        getRandomQuestion();
    } else {
        if (soundTick.textContent != `X`) {
            wrongSound.play();
        }
        score = 0;
        getRandomQuestion();
    }

    scoreTag.textContent = score;
    resetCountingTime();
}

yesBtn.addEventListener(`click`, onclickYesButtonCallback);

function onclickNoButtonCallback() {
    if (!allQuestions[randomQuestionIndex].answer) {
        score++;
        if (soundTick.textContent != `X`) {
            correctSound.play();
        }
        getRandomQuestion();
    } else {
        if (soundTick.textContent != `X`) {
            wrongSound.play();
        }
        score = 0;
        getRandomQuestion();
    }

    scoreTag.textContent = score;
    resetCountingTime();
}
noBtn.addEventListener(`click`, onclickNoButtonCallback);
// count time

function countDownFunc() {
    if (miliSeconds >= 0 && timerTick.textContent != `X`) {
        miliSeconds--;
        barHead.style.width = `${(miliSeconds/MAX_TIME * 100)}%`;
        miliSecondInterval();
    } else if (miliSeconds < 0 && timerTick.textContent != `X`) {
        resetCountingTime();
    } else if (timerTick.textContent == `X`) {
        clearTimeout(miliSecondIntervalFuncId);
    }
}

function miliSecondInterval() {
    miliSecondIntervalFuncId = setTimeout(countDownFunc, 1);
}

function resetCountingTime() {
    clearTimeout(miliSecondIntervalFuncId);
    miliSeconds = MAX_TIME;
    barHead.style.width = `${(miliSeconds/MAX_TIME * 100)}%`;
    miliSecondInterval();
    getRandomQuestion();
}