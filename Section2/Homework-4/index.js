console.log(`Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user`);
let n = parseInt(prompt(`Please enter n number`));
let factorial = 1;
for (let i = 1; i < n + 1; i++) {
    factorial *= i;
}
alert(`The factorial of ${n} is ${factorial}`);