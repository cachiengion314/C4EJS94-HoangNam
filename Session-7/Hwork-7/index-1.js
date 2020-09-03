console.log(`7.1`);
let btn1 = document.getElementById(`button1`);
let btn2 = document.getElementById(`button2`);
btn1.addEventListener(`click`,
    (e) => {
        console.log(e.target);
    }
);
btn2.addEventListener(`click`,
    (e) => {
        console.log(e.target);
    }
)