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
//         question: `What is the name the most gross movie of all time?`,
//         one: `Titanic`,
//         two: `Avenger`,
//         three: `Ironman`,
//         four: `Tarzan`,
//         rightChoice: 2,
//     },
//     {
//         question: `What is the meaning of soccer`,
//         one: `Football`,
//         two: `Basketball`,
//         three: `Tennis`,
//         four: `Ping-pong`,
//         rightChoice: 1,
//     },
//     {
//         question: `One plus one?`,
//         one: `Nine`,
//         two: `Eleven`,
//         three: `Six`,
//         four: `Two`,
//         rightChoice: 4,
//     }
// ]
// let questionIndexArr = [];
// for (let i = 0; i < data.length; i++) {
//     questionIndexArr.push(i);
// }
// let scoreCount = 0;
// let randomIndexData = Math.floor(Math.random() * data.length);
// let { one, two, three, four } = data[randomIndexData];
// let propertyOfObjectOriginArr = [one, two, three, four];

// while (true) {
//     // random property value generator
//     let propertyOfObjectArr = [one, two, three, four];
//     let indexOfRightChoice = data[randomIndexData].rightChoice - 1;
//     let rightChoiceProperty = propertyOfObjectArr[indexOfRightChoice];

//     for (let i = 0; i < propertyOfObjectOriginArr.length; i++) {
//         let randomIndexQuestion = Math.floor(Math.random() * propertyOfObjectArr.length);
//         propertyOfObjectOriginArr[i] = propertyOfObjectArr[randomIndexQuestion];
//         if (rightChoiceProperty == propertyOfObjectOriginArr[i]) {
//             data[randomIndexData].rightChoice = i + 1;
//         }
//         propertyOfObjectArr.splice(randomIndexQuestion, 1);
//     }
//     //
//     let answer = prompt(`
//    ${data[randomIndexData].question}
//    1.   ${propertyOfObjectOriginArr[0]}
//    2.   ${propertyOfObjectOriginArr[1]}
//    3.   ${propertyOfObjectOriginArr[2]}
//    4.   ${propertyOfObjectOriginArr[3]}
//     `);
//     if (answer == data[randomIndexData].rightChoice) {
//         alert(`Bravor!`);
//         scoreCount++;
//     } else {
//         alert(`Wrong!`);
//     }
 
//     let index = questionIndexArr.indexOf(randomIndexData);
//     questionIndexArr.splice(index, 1);
//     randomIndexData = questionIndexArr[Math.floor(Math.random() * questionIndexArr.length)];
//     if(randomIndexData == undefined) break;

//     ({ one, two, three, four } = data[randomIndexData]);
// }
// alert(`We are out of questions`);
// alert(`You have answered correctly ${scoreCount} out of ${data.length} question`);

/// 8- second method by Truong Huyen Dieu- modified by me

let array = [0, 1, 2, 3];
let arraytmp = [];
let count = 0;
while (arraytmp.length < 4) {
    let rand = array[Math.floor(Math.random() * array.length)];
    if (arraytmp.indexOf(rand) < 0) {
        arraytmp.push(rand);
    }
}

let obj1 = {
    title: 'How many leg do an optopus has?',
    array1: ['4 legs', 'no leg', '8 legs', '2 legs'],
    result: '3'
};

let obj2 = {
    title: 'Which country in home to the kangaroo?',
    array1: ['Australia', 'Autria', 'New Zealand', 'US'],
    result: '1'
};


let obj3 = {
    title: 'Which fictional detetive lived at 221b Baker Street?',
    array1: ['Waston', 'Sam Spade', 'Scupidu', 'Sherlock Home'],
    result: '4'
};


let obj4 = {
    title: 'What sweet food made by bees using necta from flowers?',
    array1: ['Bread', 'Honey', 'Sugar', 'Potent'],
    result: '2'
};
let scoreCount = 0;
let array2 = [obj1, obj2, obj3, obj4];
for (let i = 0; i < arraytmp.length; i++) {
    let vitriarray2 = arraytmp[i];
    let s = array2[vitriarray2].title + '\n';

    let arraytmp1 = [];

    while (arraytmp1.length < 4) {
        let rand = array[Math.floor(Math.random() * array.length)];
        if (arraytmp1.indexOf(rand) < 0) {
            arraytmp1.push(rand);
        }
    }
    let result = array2[vitriarray2].result;
    let rightAnswer = array2[vitriarray2].array1[result - 1];

    let answers = [];
    for (let ii = 0; ii < 4; ii++) {
        answers.push(array2[vitriarray2].array1[arraytmp1[ii]]);
        s += `${ii + 1}: ` + array2[vitriarray2].array1[arraytmp1[ii]] + '\n';
    }
    let answer = prompt(s);
    if (answers[answer - 1] == rightAnswer) {
        scoreCount++;
    }
}
alert(`you answered correctly ${scoreCount} of ${array2.length} questions`);