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
console.log(`6.3`);
// let HTML, CSS, NodePackageManager, Git;
// ({ HTML, CSS, NodePackageManager, Git } = learningTask);
let propertysArr = [`HTML`, `CSS`, `BasicOfJavaScript`, `NodePackageManager`, `Git`];
if (true) {
    let strCommand = prompt(`Please enter your command(New, Delete, Update, Complete)`);
    if (strCommand == `new`) {
        let newObject = {};
        newObject[strContent] = "";
        newObject[`Complete`] = false;

        learningTask.task.push(newObject);
    }
    else if (strCommand == `update`) {
        let pos = prompt(`Enter position`);
        let title = prompt(`Enter new title`);

        delete learningTask.task[pos][propertysArr[pos]];
        propertysArr[pos] = title;
        learningTask.task[pos][title] = "";
    }
}
console.log(learningTask);