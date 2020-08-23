let learningTask = {
    HTML: false,
    CSS: false,
    NodePackageManager: false,
    Git: false,
}
console.log(`6.2`);
let strCommand = prompt(`Please enter your command(New, Delete, Update, Complete)`);
let strContent = prompt(`Enter new task`);
if (strCommand == `new`) {
    learningTask[strContent] = false;
}
console.log(learningTask);