// console.log(`11.
// Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence
// `);
// let str = prompt(`Please enter a sequence of numbers, separated by commas`);
// let arrStrNumbers = str.split(`,`);
// let arrNumbers = arrStrNumbers.map(item => parseFloat(item));
// let strModified = `${str} => `;
// let arrOddNumbers = arrNumbers.filter(item => item % 2 != 0);
// for (let i = 0; i < arrOddNumbers.length; i++) {
//     if (i < arrOddNumbers.length - 1) {
//         strModified += arrOddNumbers[i] + `, `;
//     } else {
//         strModified += arrOddNumbers[i];
//     }
// }
// alert(strModified);
let arr = [1, 2, 3, 4, 5];
let func = (item1, item2) => { return item1 + item2; };
console.log(func(3, 4));
console.log(
    arr.reduce(
        (itemA, itemB) => { return itemA + itemB; },0
    )
);

function myConcat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
  }
  console.log(
       myConcat(', ', 'red', 'orange', 'blue'));