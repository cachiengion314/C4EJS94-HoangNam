console.log(`8.4 Hello! My name is Hoang Nam. This is my sheep size`);

let arrSheepSize = [5, 7, 300, 90, 24, 50, 75];
console.log(...arrSheepSize);
console.log(`Now my biggest sheep has size ${Math.max(...arrSheepSize)}, let's shave it
`);
console.log(`After shearing, here is my flock`);
let indexOfMaxSheepSize = arrSheepSize.indexOf(Math.max(...arrSheepSize));
arrSheepSize[indexOfMaxSheepSize] = 8;
console.log(...arrSheepSize);

let arrSheepSizeBig;
for (let i = 0; i < 4; i++) {
    console.log(`MONTH ${i + 1}`);
    console.log(`One month has passed, my sheeps have grown, 
    here are there sizes`);
    arrSheepSizeBig = arrSheepSize.map(item => item + 50 * (i + 1));
    console.log(...arrSheepSizeBig);
}

console.log(`
After day by day shearing sheep, you became bored. 
You want to sell your flock to travel the world. 
In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, 
before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
`);
let total = arrSheepSizeBig.reduce(function (item1, item2) {
    return item1 + item2
}, 0);
console.log(`My flock has size in total: ${total}`);