console.log(`1. Variable swap
Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
`);
let a = 1;
let b = 2;
console.log(`declare a varible a = ${a} and varible b = ${b} and using Destructuring assignment
`);
[a, b] = [b, a];
console.log(a, b);

let c = 4;
let d = 6;
console.log(`declare a varible c = ${c} and varible b = ${d} and using Temporary variable
`);
let temp;
temp = d;
d = c;
c = temp;
console.log(c, d);