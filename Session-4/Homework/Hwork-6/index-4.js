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
        propertysArr.splice(pos, 1);
        propertysArr.push(title);
        learningTask[title] = false;
        console.log(learningTask);
        console.log(propertysArr);
    } else if (strCommand == `complete`) {
        let numCommandComplete = Number(prompt(`Please enter postion`));

    }
}
function renameKey(old_key,new_key){
    if (old_key !== new_key) {
        Object.defineProperty(o, new_key,
            Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
}