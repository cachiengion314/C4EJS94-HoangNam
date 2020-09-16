console.log(`4.
Write a function with no parameters / arguments, return a random number from 0 to 10, then take it to the test
`);

function randomNumberFunc() {
    return Math.floor(Math.random() * 10);
}

const x = randomNumberFunc();
if (x < 0) {
    console.log(`Failed: the number is smaller than 0`);
} else if (x > 10) {
    console.log(`Failed: the number is bigger than 10`);
} else {
    console.log(`Passed, bravo`);
}