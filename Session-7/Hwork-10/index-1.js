console.log(`10`);
let userName = prompt(`Please enter your name`);
let userWish = prompt(`Please enter your wish this year`);

function showUserNameAndWish(name, wish) {
    if (wish == undefined || wish == null || wish == ``) {
        alert(`Hello, you are just ${name}`);
    } else {
        alert(`Hello, you are ${name}
        your wish this year is ${wish}`);
    }
}

function eventClick(event) {
    console.log(event.name);
    showUserNameAndWish(userName, userWish);
}

let btns = document.getElementsByClassName(`show`);
btns[0].addEventListener(`click`, eventClick);