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
console.log(`
    The above data is good to deal with all of the laptops equally, 
    but when it comes to grouping the items by brand, 
    it should be reshaped as below. Write a program 
    to do the reshaping from inventory, from now, use the reshaped data to process
    `);
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
    if (item.brand == `HP`) {
        hp.push(item);
    } else if (item.brand == `Dell`) {
        dell.push(item);
    } else if (item.brand == `Asus`) {
        asus.push(item);
    }
});

(brandObject = { asus, dell, hp });
console.log(brandObject);

let arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
     item * 2;
    
});
console.log(arr);