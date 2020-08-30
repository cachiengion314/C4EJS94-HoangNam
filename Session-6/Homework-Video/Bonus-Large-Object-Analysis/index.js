const str = `bo em hut rat nhieu thuoc`;
let moviesGroupByGenre = [];
for(let i = 0; i< movies.length; i++){
    const movie = movies[i];
    const genre = movie.genre;
    moviesGroupByGenre[genre].push(movie);
}