console.log(`5.
Write a function with 2 parameters / arguments: a and b, return a random number from a to b, take it to the test
`);

function randomNumberFromAToB(a, b) {
    let randomRange = Math.floor(Math.random() * (b - a));
    return randomRange + a;
}

const x = randomNumberFromAToB(4, 16);
if (x < 4) {
    console.log(`Failed: the number is smaller than 4`);
} else if (x > 16) {
    console.log(`Failed: the number is bigger than 16`);
} else {
    console.log(`Passed, bravo`);
    console.log(x);
}