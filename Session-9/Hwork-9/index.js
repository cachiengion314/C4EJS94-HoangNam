let h1TitleTag = document.getElementsByTagName(`H1`)[0];
let ulListTag = document.getElementById(`list_all_songs`)

let albumsSongObject = {
    "Top albums": `topalbums`,
    "Top songs": `topsongs`,
}
let numberOrderObject = {
    "10": `null`,
    "15": `null`,
    "20": `null`,
    "25": `null`,
    "30": `null`,
    "50": `null`,
}
window.onload = function() {
    createAllHtmlElement(`topalbums`, `limit=10`);

    var typeSelect = document.getElementById("type_select");
    for (let itemName in albumsSongObject) {
        typeSelect.options[typeSelect.options.length] = new Option(itemName, itemName);
    }
    typeSelect.onchange = function() {
        console.log(typeSelect.value);
        let selectType = albumsSongObject[typeSelect.value];
        createAllHtmlElement(selectType, `limit=15`);
    }

    var numberOfSongSelect = document.getElementById("number_of_song_select");
    for (let itemName in numberOrderObject) {
        numberOfSongSelect.options[numberOfSongSelect.options.length] = new Option(itemName, itemName);
    }
    numberOfSongSelect.onchange = function() {
        console.log(numberOfSongSelect.value);
    }
}

function getApi(type = `topsongs`, limit = `limit=15`) {
    return `https://itunes.apple.com/us/rss/${type}/all/${limit}/json`;
}

function getAllData() {
    return axios.get(getApi());
}

function createAllHtmlElement(type, limit) {
    ulListTag.innerHTML = "";
    getAllData(type, limit).then((rawData) => {
        h1TitleTag.textContent = rawData.data.feed.title.label;
        let songsDetailArr = rawData.data.feed.entry;
        for (let i = 0; i < songsDetailArr.length; i++) {
            ulListTag.insertAdjacentHTML(`beforeend`, `
            <li class="one_song">
            <img src="" alt="">
            <div>ten bai hat</div>
            <div>ten ca si</div>
            <div>Preview</div>
            </li>`)
        }

    });
}