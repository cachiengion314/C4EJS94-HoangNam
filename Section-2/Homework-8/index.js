console.log(`Write a script to check if a number is even (divisible by 2) or odd number`);
let checkNumber = parseInt(prompt(`Please enter the number you want to check`));
if (checkNumber % 2 == 0) {
    alert(`${checkNumber} is a even number`);
} else {
    alert(`${checkNumber} is a odd number`);
}