console.log(`1`);
const product = {
    name: `Xiaomi rice cooker`,
    price: 1700,
    brand: `Xiaomi`,
    color: `white`
};

for (let x in product) {
    console.log(x);
}
console.log(`1.1 What does x receives from product`);
console.log(`The x receives from the product is the 
property of object product`);

console.log(`1.2 Use for loop to print/log out`);
for (let x in product) {
    console.log(`\n
 name: ${x.toString()} \n
 price: ${x} \n
 brand: ${x} \n
 color: ${x} \n
 `);
}
console.log(product.name);