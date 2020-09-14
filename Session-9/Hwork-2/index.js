console.log(`2.
Using fetch() to load data from an API, we can use 2 async/await to get the connection from fetch() and and the data from json() function, these 2 awaits can be replaced by 2 then() calls
`);
let someUrl = `https://tobitheme.net/api/qod.json?fbclid=IwAR1QLZ5wVUsd-NxUCqhpjgpyJs7Cn3w-3IkPpMTvVAUQHl0owqjogIiE0uA`;
let mySecondEverPromise = fetch(someUrl);

// using .then() function
// function rejectCallback(reject) {
//     // if load data successful, this callback will not invoke at all
//     console.log(`something went wrong!`);
// }

// function resolveCallback(resolve) {
//     console.log(`Connected`);
//     let jsonPromise = resolve.json();
//     console.log(jsonPromise);
// }

// mySecondEverPromise.then(resolveCallback, rejectCallback);
// console.log(`Conneting...`);

// using async function and await
async function loadDataAsync() {
    console.log(`Loading...`);
    let rawData = await mySecondEverPromise;
    let jsonData = rawData.json();
    console.log(`Loaded`);
    console.log(jsonData);
}
loadDataAsync();