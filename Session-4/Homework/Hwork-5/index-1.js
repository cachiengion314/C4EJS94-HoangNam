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
console.log(`5.1 
Print/log name and price of all the products out
`)
for (let i = 0; i < productsObject.allProdects.length; i++) {
    console.log(`---------------------------
    Name: ${productsObject.allProdects[i].name} \n
    Price: ${productsObject.allProdects[i].price} 
    `);
}