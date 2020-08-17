console.log(`Write a program to print out`);
console.log(`A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user`);
let c = parseInt(prompt(`Please enter the starting number`));
let n = parseInt(prompt(`Please enter the ending number`));
let s = parseInt(prompt(`Please enter the stepping number`));
for (let i = c; i < n; i += s) {
    console.log(i);
}