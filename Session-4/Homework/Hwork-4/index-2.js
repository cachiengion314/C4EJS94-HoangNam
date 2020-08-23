console.log(`4. 
Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table
`);
let dataDictionary = {
    debug: `
    The process of figuring out why your program has a certain error and how to fix it
    `,
    done: `
    When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)
    `,
    defect: `
    The formal word for ‘error’
    `,
    pm: `
    The short version  of Project Manager, the person in charge of the final result of a project
    `,
    uiux: `
    UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels
    `,
};
console.log(`4.2
Update your script so that it can let users contribute the explanation to the dictionary
`);
let debug, done, defect, pm, uiux;
({ debug, done, defect, pm, uiux } = dataDictionary);
let keywordArr = [debug, done, defect, pm, uiux];
let wordArr = [`debug`, `done`, `defect`, `pm`, `ui/ux`];
alert(`Hi there, this is dev dictionary`);
while (true) {
    let keyword = prompt(`Please enter a keyword`);
    if (wordArr.indexOf(keyword) != -1) {
        alert(keywordArr[wordArr.indexOf(keyword)]);
    } else {
        let newInfo = prompt(`We could not find your word: ${keyword}, 
        please give us info about it`);
        wordArr.push(keyword);
        dataDictionary[keyword] = newInfo;
        ({ [keyword]: key } = dataDictionary);
        keywordArr.push(key);
    }
}