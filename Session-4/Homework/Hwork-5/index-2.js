let productsObject = {
    allProdects:
        [
            {
                name: `Xiaomi portable charger 20000mah`,
                brand: `Xiaomi`,
                price: `428`,
                color: `White`,
                category: `Charger`,
            },
            {
                name: `VSmart Active 1`,
                brand: `VSmart`,
                price: `5487`,
                color: `Black`,
                category: `Phone`,
            },
            {
                name: `IPhone X`,
                brand: `Apple`,
                price: `21490`,
                color: `Gray`,
                category: `Phone`,
            },
            {
                name: `Samsung Galaxy A9`,
                brand: `Samsung`,
                price: `8490`,
                color: `Blue`,
                category: `Phone`,
            },
        ]
};
console.log(`5.2
Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
`);
for (let i = 0; i < productsObject.allProdects.length; i++) {
    console.log(`---------------------------
  #${i + 1}. Name: ${productsObject.allProdects[i].name}
      Price: ${productsObject.allProdects[i].price} 
    `);
}

let pos = Number(prompt(`Enter the product position`));
let { name, brand, price, color, category } = productsObject.allProdects[pos - 1];
console.log(` This is
Name: ${name}
Brand: ${brand} 
Price: ${price} 
Color: ${color}
Category: ${category}
`);