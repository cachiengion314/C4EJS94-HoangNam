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
        let posUpdate = prompt(`Enter position`);
        let title = prompt(`Enter new title`);
        delete learningTask.task[posUpdate][propertysArr[posUpdate]];
        propertysArr[posUpdate] = title;
        learningTask.task[posUpdate][title] = "";
    } else if (strCommand == `complete`) {
        let posComplete = prompt(`Enter position`);
        learningTask.task[posComplete].Complete = true;
    } else if (strCommand == `delete`) {
        let posDelete = prompt(`Enter position`);
        learningTask.task[posDelete][propertysArr[posDelete]] = `deleted`;
    }
}
console.log(learningTask);