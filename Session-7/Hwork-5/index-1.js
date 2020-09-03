function colorChange() {
    let tags = document.getElementsByClassName(`color_red`);
    for (let i = 0; i < tags.length; i++) {
        tags[i].style.backgroundColor = `red`;
        console.log(tags[i].textContent);
    }
}

function getDiv() {
    let tagSingers = document.getElementsByClassName(`singer`);
    console.log(tagSingers[0].textContent);
    for (let i = 0; i < tagSingers.length; i++) {
        console.log(tagSingers[i].textContent);
    }
}