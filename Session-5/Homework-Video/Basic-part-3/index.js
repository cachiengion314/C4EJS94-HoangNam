/// 1
let wordArr = [`to`, `be`, `that`, `of`, `elon`, `to`,
    `this`, `now`, `back`, `cool`,
    `hey`, `love`, `of`, `life`, `that`,
    `rain`, `summer`, `color`, `now`, `of`, `hat`, `late`,
    `sorry`, `my`, `team`];
console.log(`Write a program to count the occurrences of the words`);

let ob = wordArr.reduce(function (acc, item) {
    if (acc[item] == undefined) {
        acc[item] = 1;
    } else {
        acc[item] += 1;
    }
    return acc;
}, {}
);
console.log(ob);
/// 1
let indexDistinctArr = [];
let wordDistinceArr = wordArr.reduce(
    function (tempArr, item) {
        if (!tempArr.includes(item)) {
            tempArr.push(item);
            indexDistinctArr.push(1);
        } else {
            let index = tempArr.indexOf(item);
            indexDistinctArr[index]++;
        }
        return tempArr;
    }, []
);
let wordOccurArr = [];
for (let i = 0; i < indexDistinctArr.length; i++) {
    wordOccurArr.push({
        word: wordDistinceArr[i],
        value: indexDistinctArr[i],
    });
}
console.log(wordOccurArr);