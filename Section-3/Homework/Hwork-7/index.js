console.log(`7. Create an array containing at least 5 numbers, 
then ask users enter a number, perform a search to look for the number in the array, 
if the number is found, tell user that with the index of it in the array, if not, also tell them so
`);
const arrNumbers = [3, 4, 6, -9, 10, -88, 2, 0, 5, 3, -21];
let isFound = false;
let num = Number(prompt(`Enter a number`));
for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] == num) {
        alert(`${num} number is found in the array with the index of ${i}`);
        isFound = true;
        break;
    }
}
if(!isFound){
    alert(`${num} number is not found in the array`);
}