console.log(`Write a program to print out`);
console.log(`n 1’s and 0’s in total, consecutively, n entered by user`);

let n = parseInt(prompt(`Please enter n number`));
for (let i = 0; i < n; i++) {
    console.log(i % 2);
}