// let promise = new Promise(function(resole, reject) {
//     setTimeout(() => resole(`done!`), 1000);
// });
// promise.then(
//     result => alert(result),
//     error => alert(error)
// );

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // reject runs the second function in .then
// promise.then(
//     result => alert(result), // doesn't run
//     error => alert(error) // shows "Error: Whoops!" after 1 second
// );

// new Promise((resolve, reject) => {
//         setTimeout(() => resolve("result"), 2000)
//     })
//     .finally(() => alert("Promise ready"))
//     .then(result => alert(result)); // <-- .then handles the result


// new Promise((resolve, reject) => {
//         throw new Error("error");
//     })
//     .finally(() => alert("Promise ready"))
//     .catch(err => alert(err)); // <-- .catch handles the error object

// let myFirstPromise = new Promise(function(resole, reject) {
//     setTimeout(
//         function() {
//             resole(`This string is all for load thing success!`);
//         }, 5000
//     )
// });

// function resoleCallback(resoleMessenger) {
//     alert(`Yay + ${resoleMessenger}`);
// }

// function rejectCallback() {
//     // do nothing
// }
// myFirstPromise.then(resoleCallback, rejectCallback);
// setTimeout(
//     () => { console.log(myFirstPromise); }, 1000
// );

console.log(`1. Create a Promise that resolve: return 
‘Promise is da best’ after 5 seconds. 
Take this Promise to test / consume in 2 ways`);

function promiseExecutor(resolveCallbackPreDefinedByJS, rejectCallbackPreDefinedByJS) {
    setTimeout(() => { resolveCallbackPreDefinedByJS(`Promise is da best`); }, 5000);
}
// the promiseExecutor is called automatically and immediately (by new Promise).
let myFirstEverPromise = new Promise(promiseExecutor);

// console.log(`2. Use await inside async function`);
// async function asyncCall() {
//     console.log(`calling`);
//     let result = await myFirstEverPromise;
//     console.log(result);
// }
// asyncCall();

console.log(`3. Use .then() function`);

function resolveCallback(result) {
    alert(`YAY! ${result}`);
}
myFirstEverPromise.then(resolveCallback);