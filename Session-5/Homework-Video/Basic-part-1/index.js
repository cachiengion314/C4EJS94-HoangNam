// let num = Math.random();
// console.log(num);
///
// let arr = [2, 5, 6, 9, 0];
// let interger = Math.floor(Math.random() * arr.length);
// console.log(arr[interger]);
///
// let data = [
//     {
//         question: `How?`,
//         a: `this`,
//         b: `this`,
//         c: `this`,
//         d: `this`,
//         rightChoice:`a`,
//     },
//     {
//         question: `How?`,
//         a: `this`,
//         b: `this`,
//         c: `this`,
//         d: `this`,
//         rightChoice:`a`,
//     },
//     {
//         question: `How?`,
//         a: `this`,
//         b: `this`,
//         c: `this`,
//         d: `this`,
//         rightChoice:`a`,
//     },
// ]
/// 4
// let data = [
//     {
//         question: `Which fictional detective lived at 221b Baker Street?`,
//         one: `Watson`,
//         two: `Sam Spade`,
//         three: `Sherlock Holmes`,
//         four: `Scubidu`,
//         rightChoice: 3,
//     },
//     {
//         question: `What sweet food made by bees using nectar from flowers?`,
//         one: `Bread`,
//         two: `Hoeny`,
//         three: `Sugar`,
//         four: `Potent`,
//         rightChoice: 3,
//     },
//     {
//         question: `What is the name the most groos movie of all time?`,
//         one: `Titanic`,
//         two: `Avenger`,
//         three: `Ironman`,
//         four: `Tarzan`,
//         rightChoice: 2,
//     },
// ]
// let randomNum = Math.floor(Math.random() * data.length);
// let { one, two, three, four } = data[randomNum];
// prompt(`
// ${data[randomNum].question}
// ${Object.keys(data[randomNum])[1]}:  ${one}
// ${Object.keys(data[randomNum])[2]}:  ${two}
// ${Object.keys(data[randomNum])[3]}:  ${three}
// ${Object.keys(data[randomNum])[4]}:  ${four}
// `)
/// 5
// let data = [
//     {
//         question: `Which fictional detective lived at 221b Baker Street?`,
//         one: `Watson`,
//         two: `Sam Spade`,
//         three: `Sherlock Holmes`,
//         four: `Scubidu`,
//         rightChoice: 3,
//     },
//     {
//         question: `What sweet food made by bees using nectar from flowers?`,
//         one: `Bread`,
//         two: `Hoeny`,
//         three: `Sugar`,
//         four: `Potent`,
//         rightChoice: 3,
//     },
//     {
//         question: `What is the name the most groos movie of all time?`,
//         one: `Titanic`,
//         two: `Avenger`,
//         three: `Ironman`,
//         four: `Tarzan`,
//         rightChoice: 2,
//     },
// ]
// let randomNum = Math.floor(Math.random() * data.length);
// let { one, two, three, four } = data[randomNum];
// while (true) {
//     let answer = prompt(`
//     ${data[randomNum].question}
//     ${Object.keys(data[randomNum])[1]}:   ${one}
//     ${Object.keys(data[randomNum])[2]}:   ${two}
//     ${Object.keys(data[randomNum])[3]}:   ${three}
//     ${Object.keys(data[randomNum])[4]}:   ${four}
//     `);
//     if (answer == data[randomNum].rightChoice) {
//         alert(`Bravor!`);

//         break;
//     }else{
//         alert(`Good luck next time`);
//     }
// }
/// 6
// let data = [
//     {
//         question: `Which fictional detective lived at 221b Baker Street?`,
//         one: `Watson`,
//         two: `Sam Spade`,
//         three: `Sherlock Holmes`,
//         four: `Scubidu`,
//         rightChoice: 3,
//     },
//     {
//         question: `What sweet food made by bees using nectar from flowers?`,
//         one: `Bread`,
//         two: `Hoeny`,
//         three: `Sugar`,
//         four: `Potent`,
//         rightChoice: 3,
//     },
//     {
//         question: `What is the name the most groos movie of all time?`,
//         one: `Titanic`,
//         two: `Avenger`,
//         three: `Ironman`,
//         four: `Tarzan`,
//         rightChoice: 2,
//     },
// ]
// let randomNum = Math.floor(Math.random() * data.length);
// let { one, two, three, four } = data[randomNum];
// let randomArr = [];
// for (let i = 0; i < data.length; i++) {
//     randomArr.push(i);
// }
// let count = 0;
// while (count < data.length) {
//     let answer = prompt(`
//    ${data[randomNum].question}
//    1. ${Object.keys(data[randomNum])[1]}:   ${one}
//    2. ${Object.keys(data[randomNum])[2]}:   ${two}
//    3. ${Object.keys(data[randomNum])[3]}:   ${three}
//    4. ${Object.keys(data[randomNum])[4]}:   ${four}
//     `);
//     if (answer == data[randomNum].rightChoice) {
//         alert(`Bravor!`);

//         break;
//     } else {
//         alert(`Good luck next time`);
//     }
//     count++;
//     randomArr.splice(randomNum, 1);
//     randomNum = randomArr[Math.floor(Math.random() * randomArr.length)];
//     ({ one, two, three, four } = data[randomNum]);
// }
// alert(`We are out of question`);
/// 7
// let data = [
//     {
//         question: `Which fictional detective lived at 221b Baker Street?`,
//         one: `Watson`,
//         two: `Sam Spade`,
//         three: `Sherlock Holmes`,
//         four: `Scubidu`,
//         rightChoice: 3,
//     },
//     {
//         question: `What sweet food made by bees using nectar from flowers?`,
//         one: `Bread`,
//         two: `Hoeny`,
//         three: `Sugar`,
//         four: `Potent`,
//         rightChoice: 3,
//     },
//     {
//         question: `What is the name the most groos movie of all time?`,
//         one: `Titanic`,
//         two: `Avenger`,
//         three: `Ironman`,
//         four: `Tarzan`,
//         rightChoice: 2,
//     },
// ]
// let randomNum = Math.floor(Math.random() * data.length);
// let { one, two, three, four } = data[randomNum];
// let randomArr = [];
// for (let i = 0; i < data.length; i++) {
//     randomArr.push(i);
// }
// let count = 0;
// let scoreCount = 0;
// while (count < data.length) {
//     let answer = prompt(`
//    ${data[randomNum].question}
//    1. ${Object.keys(data[randomNum])[1]}:   ${one}
//    2. ${Object.keys(data[randomNum])[2]}:   ${two}
//    3. ${Object.keys(data[randomNum])[3]}:   ${three}
//    4. ${Object.keys(data[randomNum])[4]}:   ${four}
//     `);
//     if (answer == data[randomNum].rightChoice) {
//         alert(`Bravor!`);
//         scoreCount++;
//     } else {
//         alert(`Good luck next time`);
//     }
//     count++;
//     randomArr.splice(randomNum, 1);
//     randomNum = randomArr[Math.floor(Math.random() * randomArr.length)];
//     ({ one, two, three, four } = data[randomNum]);
// }
// alert(`We are out of question`);
// alert(`You answered correctly ${scoreCount} out of ${data.length + 1} question`);
/// 8
let data = [
    {
        question: `Which fictional detective lived at 221b Baker Street?`,
        one: `Watson`,
        two: `Sam Spade`,
        three: `Sherlock Holmes`,
        four: `Scubidu`,
        rightChoice: 3,
    },
    {
        question: `What sweet food made by bees using nectar from flowers?`,
        one: `Bread`,
        two: `Hoeny`,
        three: `Sugar`,
        four: `Potent`,
        rightChoice: 3,
    },
    {
        question: `What is the name the most groos movie of all time?`,
        one: `Titanic`,
        two: `Avenger`,
        three: `Ironman`,
        four: `Tarzan`,
        rightChoice: 2,
    },
    {
        question: `What is the meaning of soccer`,
        one: `Football`,
        two: `Basketball`,
        three: `Tennis`,
        four: `Ping-pong`,
        rightChoice: 1,
    },
    {
        question: `One plus one?`,
        one: `Nine`,
        two: `Eleven`,
        three: `Six`,
        four: `Two`,
        rightChoice: 4,
    }
]
let questionIndexArr = [];
for (let i = 0; i < data.length; i++) {
    questionIndexArr.push(i);
}
let count = 0;
let scoreCount = 0;
let randomIndexData = Math.floor(Math.random() * data.length);
let { one, two, three, four } = data[randomIndexData];
let propertyOfObjectOriginArr = [one, two, three, four];

while (count < data.length) {
    // random property value generator
    let propertyOfObjectArr = [one, two, three, four];
    let indexOfRightChoice = data[randomIndexData].rightChoice - 1;
    let rightChoiceProperty = propertyOfObjectArr[indexOfRightChoice];

    for (let i = 0; i < propertyOfObjectOriginArr.length; i++) {
        let randomIndexQuestion = Math.floor(Math.random() * propertyOfObjectArr.length);
        propertyOfObjectOriginArr[i] = propertyOfObjectArr[randomIndexQuestion];
        if (rightChoiceProperty == propertyOfObjectOriginArr[i]) {
            data[randomIndexData].rightChoice = i + 1;
        }
        propertyOfObjectArr.splice(randomIndexQuestion, 1);
    }
    //
    let answer = prompt(`
   ${data[randomIndexData].question}
   1.   ${propertyOfObjectOriginArr[0]}
   2.   ${propertyOfObjectOriginArr[1]}
   3.   ${propertyOfObjectOriginArr[2]}
   4.   ${propertyOfObjectOriginArr[3]}
    `);
    if (answer == data[randomIndexData].rightChoice) {
        alert(`Bravor!`);
        scoreCount++;
    } else {
        alert(`Wrong!`);
    }
    count++;
    let index = questionIndexArr.indexOf(randomIndexData);
    questionIndexArr.splice(index, 1);
    randomIndexData = questionIndexArr[Math.floor(Math.random() * questionIndexArr.length)];
    if(randomIndexData == undefined) break;

    ({ one, two, three, four } = data[randomIndexData]);
}
alert(`We are out of questions`);
alert(`You have answered correctly ${scoreCount} out of ${data.length} question`);

