console.log(`Write a program to print out`);
console.log(`n L’s and H’s in total, n entered by user`);

let n = parseInt(prompt(`Please enter n number`));
for (let i = 0; i < n; i++) {
    if (i < Math.ceil(n / 2)) {
        console.log(`L`);
    } else {
        console.log(`H`);
    }
}