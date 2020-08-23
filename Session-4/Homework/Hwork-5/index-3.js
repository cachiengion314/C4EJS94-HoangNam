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
console.log(`5.3
Write a script printing/logging out the products based on category input by users
`);
let categoryStr = (prompt(`Enter the product category`));
for (let i = 0; i < productsObject.allProdects.length; i++) {
    if (productsObject.allProdects[i].category == categoryStr) {
        console.log(`---------------------------
        #${i + 1}. Name: ${productsObject.allProdects[i].name}
            Price: ${productsObject.allProdects[i].price} 
          `);
    }
}