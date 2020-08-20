console.log(`5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
`);
let numbers = String(prompt(`Enter a sequence of Numbers, separated by commas`));
let arrNumbers = new Float32Array(numbers.split(`,`));
let sumNumbers = 0;
for (let i = 0; i < arrNumbers.length; i++) {
    sumNumbers += arrNumbers[i];
}
alert(`The sum of them is ${sumNumbers}`);