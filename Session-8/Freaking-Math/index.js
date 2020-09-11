let question = document.getElementById(`freaking_math_question`);
let barHead = document.getElementById(`freaking_math_time_bar_head`);
let scoreTag = document.getElementById(`freaking_math_score`);
let yesBtn = document.getElementById(`yes_button`);
let noBtn = document.getElementById(`no_button`);
let correctSound = document.getElementById(`corect_sound`);
let wrongSound = document.getElementById(`wrong_sound`);

var miliSeconds = 5000;
var miliSecondIntervalFunc;
var randomQuestionIndex, score = 0;
miliSecondInterval();

function getRandomQuestion() {
    randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
    question.textContent = allQuestions[randomQuestionIndex].question;
    scoreTag.textContent = score;
}
getRandomQuestion();

function onclickYesButtonCallback() {
    if (allQuestions[randomQuestionIndex].answer) {
        score++;
        correctSound.play();
        getRandomQuestion();
    } else {
        wrongSound.play();
        getRandomQuestion();
    }

    scoreTag.textContent = score;
    resetCountingTime();
}

yesBtn.addEventListener(`click`, onclickYesButtonCallback);

function onclickNoButtonCallback() {
    if (!allQuestions[randomQuestionIndex].answer) {
        score++;
        correctSound.play();
        getRandomQuestion();
    } else {
        wrongSound.play();
        getRandomQuestion();
    }

    scoreTag.textContent = score;
    resetCountingTime();
}
noBtn.addEventListener(`click`, onclickNoButtonCallback);
// count time

function countDownFunc() {
    if (miliSeconds >= 0) {
        miliSeconds--;
        barHead.style.width = `${(miliSeconds/5000 * 100)}%`;
        miliSecondInterval();
    } else {
        resetCountingTime();
    }
}

function miliSecondInterval() {
    miliSecondIntervalFunc = setTimeout(countDownFunc, 1);
}

function resetCountingTime() {
    clearTimeout(miliSecondIntervalFunc);
    miliSeconds = 5000;
    barHead.style.width = `${(miliSeconds/5000 * 100)}%`;
    miliSecondInterval();
    getRandomQuestion();
}