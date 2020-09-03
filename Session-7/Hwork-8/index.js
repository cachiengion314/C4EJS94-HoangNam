console.log(`
Write a function, using alert to show 
your name and one thing you wish to do this year
`);

function showMyName(name) {
    alert(`Hello people. I'm ${name}
One thing i wish to do this year is
completed my Web Development course`)
}

function keyDownEvent(e) {
    if (e.key == `f`) {
        showMyName(`Hoang Nam`);
    }
}
document.addEventListener(`keydown`, keyDownEvent);