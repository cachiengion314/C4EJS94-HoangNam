// /// 1
// let wordArr = [`to`, `be`, `that`, `of`, `elon`, `to`,
//     `this`, `now`, `back`, `cool`,
//     `hey`, `love`, `of`, `life`, `that`,
//     `rain`, `summer`, `color`, `now`, `of`, `hat`, `late`,
//     `sorry`, `my`, `team`];
// console.log(`Write a program to count the occurrences of the words`);

// let ob = wordArr.reduce(function (acc, item) {
//     if (acc[item] == undefined) {
//         acc[item] = 1;
//     } else {
//         acc[item] += 1;
//     }
//     return acc;
// }, {}
// );
// console.log(ob);
// /// 1
// let valueDistinctArr = [];
// let wordDistinceArr = wordArr.reduce(
//     function (tempArr, item) {
//         if (!tempArr.includes(item)) {
//             tempArr.push(item);
//             valueDistinctArr.push(1);
//         } else {
//             let index = tempArr.indexOf(item);
//             valueDistinctArr[index]++;
//         }
//         return tempArr;
//     }, []
// );
// let wordOccurArr = [];
// for (let i = 0; i < valueDistinctArr.length; i++) {
//     wordOccurArr.push({
//         word: wordDistinceArr[i],
//         value: valueDistinctArr[i],
//     });
// }
// console.log(wordOccurArr);
/// 2
const inventory = [

    {

        name: `HP Envy 13aq`,

        price: 21000,

        brand: `HP`,

        quantity: 5,

    },

    {

        name: `Dell XPS 9370`,

        price: 30000,

        brand: `Dell`,

        quantity: 1,

    },

    {

        name: `Dell Inspiron 3567`,

        price: 9300,

        brand: `Dell`,

        quantity: 12,

    },

    {

        name: `Dell Latitude E5450`,

        price: 8600,

        brand: `Dell`,

        quantity: 2,

    },

    {

        name: `Asus Zenbook`,

        brand: `Asus`,

        price: 20000,

        quantity: 4,

    },

    {

        name: `HP Pavilion`,

        brand: `HP`,

        price: 14000,

        quantity: 7,

    },]
/// 3
// console.log(`
//     The above data is good to deal with all of the laptops equally, 
//     but when it comes to grouping the items by brand, 
//     it should be reshaped as below. Write a program 
//     to do the reshaping from inventory, from now, use the reshaped data to process
//     `);
// let brandObject = {
//     asus: [

//     ],
//     dell: [

//     ],
//     hp: [

//     ],
// }
// let { asus, dell, hp } = brandObject;

// inventory.map(function (item) {
//     if (item.brand == `HP`) {
//         hp.push(item);
//     } else if (item.brand == `Dell`) {
//         dell.push(item);
//     } else if (item.brand == `Asus`) {
//         asus.push(item);
//     }
// });
// (brandObject = { asus, dell, hp });
// console.log(brandObject);
/// 4
// let brandObject = {
//     asus: [

//     ],
//     dell: [

//     ],
//     hp: [

//     ],
// }
// let { asus, dell, hp } = brandObject;

// inventory.map(function (item) {
//     if (item.brand == `HP`) {
//         hp.push(item);
//     } else if (item.brand == `Dell`) {
//         dell.push(item);
//     } else if (item.brand == `Asus`) {
//         asus.push(item);
//     }
// });
// (brandObject = { asus, dell, hp });
// console.log(brandObject);

// let areStr = `are`;
// let brandNameArr = Object.keys(brandObject);
// let brandPropertyArr = [];
// for (let name in brandObject) {
//     let propertyVar = brandObject[name];
//     brandPropertyArr.push(propertyVar);
// }
// let brand = prompt(`Which brand?`).toLowerCase();
// if (brandNameArr.includes(brand)) {
//     let index = brandNameArr.indexOf(brand);
//     let numberOfGen = brandPropertyArr[index].length;
//     if (numberOfGen < 2) {
//         areStr = `is`;
//     }
//     alert(`
//   There ${areStr} ${numberOfGen} generations of ${brand.toUpperCase()}
//   in inventory
//   `);
// } else {
//     alert(`You type all wrong! The end!`);
// }
/// 5
// let brandObject = {
//     asus: [

//     ],
//     dell: [

//     ],
//     hp: [

//     ],
// }
// let { asus, dell, hp } = brandObject;

// inventory.map(function (item) {
//     if (item.brand == `HP`) {
//         hp.push(item);
//     } else if (item.brand == `Dell`) {
//         dell.push(item);
//     } else if (item.brand == `Asus`) {
//         asus.push(item);
//     }
// });
// (brandObject = { asus, dell, hp });

// let areStr = `are`;
// let brandNameArr = Object.keys(brandObject);

// let brand = prompt(`Which brand?`).toLowerCase();
// if (brandNameArr.includes(brand)) {

//     let numberOfGen = brandObject[brand].length;
//     if (numberOfGen < 2) {
//         areStr = `is`;
//     }
//     let messenger = ``;
//     for (let i = 0; i < brandObject[brand].length; i++) {
//         messenger += brandObject[brand][i].name + `\n`;
//     }
//     alert(`
//   There ${areStr} ${numberOfGen} generations of ${brand.toUpperCase()}
//   in inventory
// ${messenger}
//   `);
// } else {
//     alert(`You type all wrong! The end!`);
// }
/// 6
// let brandObject = {
//     asus: [

//     ],
//     dell: [

//     ],
//     hp: [

//     ],
// }
// let { asus, dell, hp } = brandObject;

// inventory.map(function (item) {
//     if (item.brand == `HP`) {
//         hp.push(item);
//     } else if (item.brand == `Dell`) {
//         dell.push(item);
//     } else if (item.brand == `Asus`) {
//         asus.push(item);
//     }
// });
// (brandObject = { asus, dell, hp });

// let areStr = `are`;
// let brandNameArr = Object.keys(brandObject);

// let brand = prompt(`Which brand?`).toLowerCase();
// if (brandNameArr.includes(brand)) {

//     let numberOfGen = brandObject[brand].length;
//     if (numberOfGen < 2) {
//         areStr = `is`;
//     }
//     let messenger = ``;
//     let sumup = 0;
//     for (let i = 0; i < brandObject[brand].length; i++) {
//         messenger += brandObject[brand][i].name + `\n`;
//         sumup += Number(
//             brandObject[brand][i].price * brandObject[brand][i].quantity
//             );
//     }
//     alert(`
//   There ${areStr} ${numberOfGen} generations of ${brand.toUpperCase()}
//   in inventory

// ${messenger}

// With total value: ${sumup} K
//   `);
// } else {
//     alert(`You type all wrong! The end!`);
// }
/// 7
let brandObject = {
    asus: [

    ],
    dell: [

    ],
    hp: [

    ],
}
let { asus, dell, hp } = brandObject;

inventory.map(function (item) {
    let brand = item.brand
    brandObject[brand.toLowerCase()].push(item);
});
console.log(brandObject);
(brandObject = { asus, dell, hp });

let areStr = `are`;
let brandNameArr = Object.keys(brandObject);

let brand = prompt(`Which brand?`).toLowerCase();
if (brandNameArr.includes(brand)) {

    let numberOfGen = brandObject[brand].length;
    if (numberOfGen < 2) {
        areStr = `is`;
    }
    let messenger = ``;
    let sumup = 0;
    for (let i = 0; i < brandObject[brand].length; i++) {
        messenger += brandObject[brand][i].name + `\n`;
        sumup += Number(
            brandObject[brand][i].price * brandObject[brand][i].quantity
        );
    }
    sumup *= 1000;
    alert(`
  There ${areStr} ${numberOfGen} generations of ${brand.toUpperCase()}
  in inventory

${messenger}

With total value: ${sumup.toLocaleString()} VND
  `);
} else {
    alert(`You type all wrong! The end!`);
}