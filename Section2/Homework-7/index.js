console.log(`Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n`);
let n = parseInt(prompt(`Please enter n number`));
let half = n / 2;
let x = parseInt(prompt(`Please enter a number from 0 to ${n}`));
if (x < half) {
    alert(`Lower half of ${n}`);
} else {
    alert(`Higher half of ${n}`);
}