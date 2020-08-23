let learningTask = {
    HTML: false,
    CSS: false,
    NodePackageManager: false,
    Git: false,
}
console.log(`6.3`);
// let HTML, CSS, NodePackageManager, Git;
// ({ HTML, CSS, NodePackageManager, Git } = learningTask);
let propertysArr = [`HTML`, `CSS`, `NodePackageManager`, `Git`];
if (true) {
    let strCommand = prompt(`Please enter your command(New, Delete, Update, Complete)`);

    if (strCommand == `new`) {
        let strContent = prompt(`Enter new task`);
        learningTask[strContent] = false;
    } else if (strCommand == `update`) {
        let pos = prompt(`Enter position`);
        let title = prompt(`Enter new title`);
        delete learningTask[propertysArr[pos]];
        learningTask[title] = false;
        console.log(learningTask);
    }
}