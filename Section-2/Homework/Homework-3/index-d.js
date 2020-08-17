console.log(`Write a program to print out`);
console.log(`A sequence of numbers, starting from c, ending before n, c and n entered by user`);
let c = parseInt( prompt(`Please enter starting number`));
let n = parseInt( prompt(`Please enter ending number`));
for (let i = c; i < n; i++) {
    console.log(i);
}