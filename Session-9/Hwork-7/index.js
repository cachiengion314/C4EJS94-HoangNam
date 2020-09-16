let quote = document.getElementById(`quote`);
let author = document.getElementById(`author`);

function getLink() {
    return `https://tobitheme.net/api/qod.json`;
}

function resolveCallback_linkPromise(rawData) {
    let jsonDataPromise = rawData.json();
    jsonDataPromise.then((jsonData) => {
        quote.textContent = jsonData.contents.quotes[0].quote;
        author.textContent = jsonData.contents.quotes[0].author;
    });
}

let linkPromise = fetch(getLink());
linkPromise.then(resolveCallback_linkPromise);