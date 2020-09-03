function colorChange() {
    let tags = document.getElementsByClassName(`color_red`);
    for (let i = 0; i < tags.length; i++) {
        tags[i].style.backgroundColor = `red`;
    }
}

function getDiv() {
    let tags = document.getElementsByClassName(`singer`);
    console.log(tags[1]);
    for (let i = 0; i < tags.length; i++) {
        console.log(tags[i].className);
    }
}