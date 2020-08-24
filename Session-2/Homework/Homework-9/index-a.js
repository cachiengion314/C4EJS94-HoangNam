console.log(`Write a program to print out`);
console.log(`6 L’s and H’s, half L’s, half H’s (L means low, H means high)
`);
for (let i = 0; i < 6; i++) {
    if (i < 6 / 2) {
        console.log(`L`);
    } else {
        console.log(`H`);
    }
}