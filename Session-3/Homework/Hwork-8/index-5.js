console.log(`8.4 Hello! My name is Hoang Nam. This is my sheep size`);

let arrSheepSize = [5, 7, 300, 90, 24, 50, 75];
console.log(...arrSheepSize);
console.log(`Now my biggest sheep has size ${Math.max(...arrSheepSize)}, let's shave it
`);
console.log(`After shearing, here is my flock`);
let indexOfMaxSheepSize = arrSheepSize.indexOf(Math.max(...arrSheepSize));
arrSheepSize[indexOfMaxSheepSize] = 8;
console.log(...arrSheepSize);

for (let i = 0; i < 4; i++) {
    console.log(`MONTH ${i + 1}`);
    console.log(`One month has passed, my sheeps have grown, 
    here are there sizes`);
    let arrSheepSizeBig = arrSheepSize.map(item => item + 50 * (i + 1));
    console.log(...arrSheepSizeBig);
}
