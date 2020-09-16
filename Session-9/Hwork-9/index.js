let h1TitleTag = document.getElementsByTagName(`H1`)[0];
let ulListTag = document.getElementById(`list_all_songs`)
let topTypeSelect = document.getElementById("top_type_select");
let topTypes = `topalbums`;
let numberOfSongSelect = document.getElementById("number_of_song_select");
let limitSongs = `limit=10`;

createAllHtmlElement(topTypes, limitSongs);

let albumsSongObject = {
    "Top albums": `topalbums`,
    "Top songs": `topsongs`,
}
let numberOrderObject = {
    "10": `limit=10`,
    "15": `limit=15`,
    "20": `limit=20`,
    "25": `limit=25`,
    "30": `limit=30`,
    "50": `limit=50`,
}
window.onload = function() {
    for (let itemName in albumsSongObject) {
        topTypeSelect.options[topTypeSelect.options.length] = new Option(itemName, itemName);
    }
    for (let itemName in numberOrderObject) {
        numberOfSongSelect.options[numberOfSongSelect.options.length] = new Option(itemName, itemName);
    }

    topTypeSelect.onchange = function() {
        console.log(topTypeSelect.value);
        topTypes = albumsSongObject[topTypeSelect.value];
        createAllHtmlElement(topTypes, limitSongs);
    }

    numberOfSongSelect.onchange = function() {
        console.log(numberOfSongSelect.value);
        limitSongs = numberOrderObject[numberOfSongSelect.value];
        createAllHtmlElement(topTypes, limitSongs);
    }
}

function getApi(type = `topalbums`, limit = `limit=10`) {
    return `https://itunes.apple.com/us/rss/${type}/all/${limit}/json`;
}

function getAllData(type = `topalbums`, limit = `limit=10`) {
    return axios.get(getApi(type, limit));
}

function createAllHtmlElement(type = `topalbums`, limit = `limit=10`) {
    ulListTag.innerHTML = "";
    getAllData(type, limit).then((rawData) => {
        h1TitleTag.textContent = rawData.data.feed.title.label;
        let songsDetailArr = rawData.data.feed.entry;

        for (let i = 0; i < songsDetailArr.length; i++) {
            let imageUrl = songsDetailArr[i]["im:image"][2].label;
            let titleName = songsDetailArr[i]["im:name"].label;
            let artistName = songsDetailArr[i]["im:artist"].label;
            let previewHref;
            if (topTypes == `topalbums`) {
                previewHref = songsDetailArr[i]["link"].attributes.href;
            } else {
                previewHref = songsDetailArr[i]["link"][1].attributes.href;
            }

            ulListTag.insertAdjacentHTML(`beforeend`, `
            <li class="one_song">
            <img src="${imageUrl}" alt="">
            <h4 class="text">${titleName}</h4>
            <div class="text">${artistName}</div>
            <a href="${previewHref}" target="_blank">Preview</a>
            </li>`)
        }
    });
}