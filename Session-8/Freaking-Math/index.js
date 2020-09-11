let question = document.getElementById(`question`);
let yesBtn = document.getElementById(`yes_button`);
let noBtn = document.getElementById(`no_button`);

var randomQuestionIndex, score = 0;

function getRandomQuestion() {
    randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
    question.textContent = allQuestions[randomQuestionIndex].question;
}
getRandomQuestion();

function onclickYesButtonCallback() {
    if (allQuestions[randomQuestionIndex].answer) {
        score++;
        console.log(`score: ${score}`);
        getRandomQuestion();
    } else {
        console.log(`score: ${score}`);
        getRandomQuestion();
    }
}

yesBtn.addEventListener(`click`, onclickYesButtonCallback);

function onclickNoButtonCallback() {
    if (!allQuestions[randomQuestionIndex].answer) {
        score++;
        console.log(`score: ${score}`);
        getRandomQuestion();
    } else {
        console.log(`score: ${score}`);
        getRandomQuestion();
    }
}
noBtn.addEventListener(`click`, onclickNoButtonCallback);