console.log(`11.
Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence
`);
let str = prompt(`Please enter a sequence of numbers, separated by commas`);
let arrStrNumbers = str.split(`,`);
let arrNumbers = arrStrNumbers.map(item => parseFloat(item));
let strModified = `${str} => `;
let arrOddNumbers = arrNumbers.filter(item => item % 2 != 0);
for (let i = 0; i < arrOddNumbers.length; i++) {
    if (i < arrOddNumbers.length - 1) {
        strModified += arrOddNumbers[i] + `, `;
    } else {
        strModified += arrOddNumbers[i];
    }
}
alert(strModified);