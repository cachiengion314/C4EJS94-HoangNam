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
let providersArr0 = [`Phukienzero`, `Dientuccc`];
let providersArr1 = [`Tgdd`, `Ddghn`, `VhStore`];
let providersArr2 = [`Tgdd`];
let providersArr3 = [`Tgdd`];
let providersArr = [providersArr0,
    providersArr1,
    providersArr2,
    providersArr3];
for (let i = 0; i < productsObject.allProdects.length; i++) {
    productsObject.allProdects[i][`Providers`] = providersArr[i];
}
console.log(`5.4`); 
let strProvider = prompt(`Enter the provider you want`);
for (let i = 0; i < productsObject.allProdects.length; i++) {
    if (productsObject.allProdects[i][`Providers`].indexOf(strProvider) != -1) {
        console.log(`
        #${i + 1}. Name: ${productsObject.allProdects[i].name}
        Price: ${productsObject.allProdects[i].price} 
        Providers: ${productsObject.allProdects[i][`Providers`]}
       `);
    }
}