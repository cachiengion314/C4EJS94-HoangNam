console.log(`4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
`);
let customerOrder;
let arrayItems = [`Jeans`, `T-Shirt`, `Socks`];

while (true) {
    customerOrder = prompt(`Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?
    `);
    if (customerOrder == `c` || customerOrder == `d`
        || customerOrder == `r` || customerOrder == `u`) {

        if (customerOrder == `r`) {
            console.log(`The current items are: `);
            for (let i = 0; i < arrayItems.length; i++) {
                console.log(arrayItems[i]);
            }
            break;
        } else if (customerOrder == `c`) {
            let newItem = prompt(`Enter the name of new item`);
            if (newItem != undefined || newItem != null || newItem != "") {
                arrayItems.push(newItem);
                alert(`Done!`);
            }
        } else if (customerOrder == `u`) {
            let positionUpdate = Number(prompt(`Enter the position you want to update`));
            while (positionUpdate >= arrayItems.length) {
                positionUpdate = Number(prompt(`Enter the position you want to update`));
            }
            arrayItems[positionUpdate] = prompt(`Enter the new name`);
        } else if (customerOrder == `d`) {
            let positionDelete = prompt(`Enter the position you want to delete`);
            arrayItems.splice(positionDelete, 1);
            alert(`Done!`);
        }
    } else {
        alert(`This command is not support`);
    }
}

