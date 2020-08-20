console.log(`6. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
`);
let sequenceNumbers = prompt(`Enter a sequence of numbers`);
let arrNumbers = sequenceNumbers.split(`,`);
let smallestNum = 10000;
for (let i = 0; i < arrNumbers.length; i++) {
    arrNumbers[i] = parseFloat(arrNumbers[i]);
    if (arrNumbers[i] <= smallestNum) {
        smallestNum = arrNumbers[i];
    }
}
alert(`The smallest number is ${smallestNum}`);