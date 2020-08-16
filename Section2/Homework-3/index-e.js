console.log(`Write a program to print out`);
console.log(`A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user`);
let c = parseInt(prompt(`Please enter the starting number`));
let n = parseInt(prompt(`Please enter ending number`));
for (let i = c; i < n; i += 3) {
    console.log(i);
}