let learningTask = {
    task:
        [
            {
                HTML: "",
                Complete: false,
            },
            {
                CSS: "",
                Complete: false,
            },
            {
                BasicOfJavaScript: "",
                Complete: false,
            },
            {
                NodePackageManager: "",
                Complete: false,
            },
            {
                Git: "",
                Complete: false,
            },
        ]
}
console.log(`6.2`);
let strCommand = prompt(`Please enter your command(New, Delete, Update, Complete)`);
let strContent = prompt(`Enter new task`);
if (strCommand == `new`) {
    let newObject = {};
    newObject[strContent] = "";
    newObject[`Complete`] = false;
    
    learningTask.task.push(newObject);
}
console.log(learningTask);