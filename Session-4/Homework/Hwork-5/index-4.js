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
let providersArr = [`Phukienzero Dientuccc`,
    `Tgdd Ddghn VhStore`,
    `Tgdd`,
    `Tgdd`];
for (let i = 0; i < productsObject.allProdects.length; i++) {
    productsObject.allProdects[i][`Providers`] = providersArr[i];
    console.log(`---------------------------
    #${i + 1}. Name: ${productsObject.allProdects[i].name}
        Price: ${productsObject.allProdects[i].price} 
        Providers: ${productsObject.allProdects[i][`Providers`]}
      `);
}