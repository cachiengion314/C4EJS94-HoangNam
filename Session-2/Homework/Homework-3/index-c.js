console.log(`Write a program to print out`);
console.log(`A sequence of numbers, starting from 3, ending before n, n entered by user`);
let n = parseInt( prompt(`Please enter the max value number to count from 3`));
for (let i = 3; i < n; i++) {
    console.log(i);
}