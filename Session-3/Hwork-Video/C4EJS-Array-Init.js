let movieArr = [`titanic`, `batman`, `wonder`, `amzing`, `tazan`];
// Array-Read All
// for (let i = 0; i < movieArr.length; i++) {
//     console.log(movieArr[i]);
// }
// for (let i = 0; i < Math.ceil(movieArr.length / 2); i++) {
//     console.log(`${i} ${movieArr[i]}`);
// }
for (let i = 0; i < Math.ceil(movieArr.length / 2); i++) {
    console.log(`${i} ${movieArr[i].toLocaleLowerCase()}`);
}
