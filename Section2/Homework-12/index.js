console.log(`Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
`);
let n = parseInt(prompt(`Please enter amount of edges`));
for (let i = 0; i < n; i++) {
    fd(3 * 100 / n);
    rt(180 - (180 * (n - 2) / n));
}