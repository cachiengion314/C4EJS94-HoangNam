// im Hoang Nam
// this is the test of revert 2
// function helloWorld() {
//     console.log(`function is great`);
// }
// helloWorld();

// function hiNam() {
//     alert(`Hi Nam`);
//     alert(`Name `);
// }

function hi(name) {
    alert(`hello: ${name}`);
}
// let x = hi;
// x(`Nam`, `function is great`);

// function sayGoodBye(name) {
//     alert(`Goodbye ${name}`);
// }
let f = hi(`nam`);

function testSay(f) {
    alert(`Here I say`);
    f(name);
}

testSay(hi);