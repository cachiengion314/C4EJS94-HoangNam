const oldData = {
    firedRice: {
        Price: 30,
        vnName: `Com rang dua bo`
    },
    noddle: {
        price: 20,
        vnName: `My tom chanh`
    },
    pho: {
        price: 35,
        vnName: `Pho bo tai chin`
    },
};
console.log(oldData);
console.log(`Delete a property using create new object`);
let newData = {
    firedRice: {
        Price: 30,
        vnName: `Com rang dua bo`
    },
    pho: {
        price: 35,
        vnName: `Pho bo tai chin`
    },
};
console.log(newData);
console.log(`Delete a property using delete func`);
delete oldData[`noddle`];
console.log(oldData);