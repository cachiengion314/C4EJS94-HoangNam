console.log(`6.
Write a function to calculate the 
distance between 2 points (x1, y1) and (x2, y2)
`);

function distanceFromAToB(x1, y1, x2, y2) {
    let brace1 = Math.pow((x1 - x2), 2);
    let brace2 = Math.pow((y1 - y2), 2);

    return Math.sqrt(brace1 + brace2)
}


const x = distanceFromAToB(3, 10, 0, 6);
if (x !== 5) {
    console.log(`Failed: the calculation is wrong`);
    console.log(x);
} else {
    console.log(`Passed, bravo`);
    console.log(x);
}