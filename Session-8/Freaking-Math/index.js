let question = document.getElementById(`question`);
let yesBtn = document.getElementById(`yes_button`);
let noBtn = document.getElementById(`no_button`);

var randomQuestionIndex = 0;

function getRandomQuestion() {
    randomQuestionIndex = Math.floor(Math.random() * allQuestions.length);
    question.textContent = allQuestions[randomQuestionIndex].question;
}
getRandomQuestion();

function yesOnclickFunc() {
    if (allQuestions[randomQuestionIndex].answer) {

    }
}
yesBtn.onclick = yesOnclickFunc;