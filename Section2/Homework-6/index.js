console.log(`Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range`);
let half = (9 / 2);
let x = parseInt(prompt(`Please enter a number from 0 to 9`));
if (x < half) {
    alert(`Lower half of 9`);
} else {
    alert(`Higher half of 9`);
}