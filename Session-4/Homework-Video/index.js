// console.log(`Object - init Exercise`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
// }
//
//
// console.log(`Read Exercise - Object - Read(1)`);
// let movie = {
//         title: `The Dark knight rises`,
//         year: `2012`,
//         rate: 8.4,
//     }
// console.log(movie.title)
// console.log(movie.year)
// console.log(movie.rate)
// console.log(movie[`title`])
// console.log(movie[`year`])
// console.log(movie[`rate`])
// console.log(movie[`director`]);
//
// console.log(`Read Exercise - Object -Read`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
// }
// let str = prompt(`What you want tp know?`);
// while (movie[str] == null || movie[str] == undefined) {
//     alert(`This ${str} property doesnt exist in our data`);
//     str = prompt(`What you want to know?`);
// }
// alert(movie[str]);

// console.log(`Object - Update Exercise(1)`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
// };
// movie.rate = 8.7;
// movie.rate += .5;
// console.log(movie);
// console.log(`Object - Update exercise(2)`);
// let str = prompt(`What you want to update?`);

// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
// };

// while (movie[str] == null || movie[str] == undefined) {
//     alert(`This ${str} property doesnt exist in our data`);
//     str = prompt(`What you want to update?`);
// }
// let newUpdate = prompt(`What is the update?`);
// movie[str] = newUpdate;
// console.log(`title: ${movie[str]}` );

// console.log(`Object - Create Exercise`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
// };
// let str = prompt(`What do you want to update`);
// let checkProperty = movie[str];
// if (checkProperty == undefined || checkProperty == null) {
//     alert(`${str} doesn't exist in our data, we will add one`);
//     let newData = prompt(`Enter new data`);
//     movie[str] = newData;
// }
// console.log(movie);

// console.log(`Object - Array of Objects(1)`);
// ///
// let movies = [
//     {
//         title: `The Dark Knight Ries`,
//         year: 2012,
//         rate: 8.4,
//     },
//     {
//         title: `Human`,
//         year: 2022,
//         rate: 4.5,
//     },
//     {
//         title: `Tenet`,
//         year: 2020,
//         rate: 8.0,
//     }
// ]
// ///
// console.log(movies[0]);
// ///
// console.log(movies[movies.length - 1].title);
// ///
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }
// ///
// for (let i = 0; i < movies.length; i++) {
//     console.log(`--------------------------`);
//     console.log(`title: ${movies[i].title}`);

//     console.log(`year: ${movies[i].year}`);

//     console.log(`rate: ${movies[i].rate}`);
// }
// ///
// console.log(movies[movies.length - 1].rate += .7);
// console.log(`Object - Object containing array exercise`);
// console.log(`Object - Object containing array exercise(1)`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
//     characters: [`Batman`, `Bane`, `Talia`],
// };

// console.log(`Object - Object containing array exercise(2)`);
// console.log(`title: ${movie.title} \n
// year: ${movie.year} \n
// rate: ${movie.rate} \n
// characters: ${[movie.characters]}`);

// console.log(`Object - Object containing array exercise`);
// console.log(`Object - Object containing array exercise(3)`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
//     characters: [`Batman`, `Bane`, `Talia`],
// };

// console.log(`Object - Object containing array exercise(2)`);
// console.log(`title: ${movie.title} \n
// year: ${movie.year} \n
// rate: ${movie.rate} \n
// characters: ${movie.characters}`);

// movie.characters.push(`Catwoman`);
// console.log(`title: ${movie.title} \n
// year: ${movie.year} \n
// rate: ${movie.rate} \n
// characters: ${[...movie.characters]}`);
// console.log(`Object - Object containing array exercise`);
// console.log(`Object - Object containing array exercise(3)`);
// let movie = {
//     title: `The Dark knight rises`,
//     year: `2012`,
//     rate: 8.4,
//     characters: [`Batman`, `Bane`, `Talia`],
// };
///

// console.log(`Object and Array mix structure(1)`)
// let movie1 = {
//     title: `The Dark knight rises`,
//     year: 2012,
//     rate: 8.4,
//     characters: [`Batman`, `Bane`, `Talia`],
// };
// let movie2 = {
//     title: `The boys`,
//     year: 2019,
//     rate: 5.6,
//     characters: [`Superman`, `Fun`, `Crazy`],
// };
// let movie3 = {
//     title: `Titanic`,
//     year: 2012,
//     rate: 9.2,
//     characters: [`Newton`, `Trung`, `Throw`],
// };
// console.log(`Object - Object containing array exercise(2)`);
// console.log(`title: ${movie1.title} \n
// year: ${movie1.year} \n
// rate: ${movie1.rate} \n
// characters: ${movie1.characters}`);

// movie1.characters.push(`Catwoman`);
// console.log(`title: ${movie1.title} \n
// year: ${movie1.year} \n
// rate: ${movie1.rate} \n
// characters: ${[...movie1.characters]}`);
// let movies = [movie1, movie2, movie3];
// for (let i = 0; i < movies.length; i++) {
//     console.log(`------------------------`);
//     console.log(`title: ${movies[i].title} \n
//     year: ${movies[i].year} \n
//     rate: ${movies[i].rate} \n
//     characters: ${movies[i].characters} \n
//     `);
// }
