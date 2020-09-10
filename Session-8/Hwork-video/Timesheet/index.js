console.log(`2 - RUECD-read-update-event-create-delete`);

let ts_tbody = document.getElementById(`ts_tbody`);
let allInputs = document.getElementsByTagName(`INPUT`);
let addBtn = document.getElementsByTagName(`BUTTON`)[0];
let clearBtn = document.getElementsByTagName(`BUTTON`)[1];
let enterProjectInput = allInputs[0];
let enterTaskInput = allInputs[1];
let timeSpentInput = allInputs[2];

function generateTable() {
    ts_tbody.innerHTML = ``;
    for (let i = 0; i < timeSheetData.length; i++) {
        let row =
            `<tr>
    <td>${timeSheetData[i].Project}</td>
    <td>${timeSheetData[i].Task}</td>
    <td>${timeSheetData[i].TimeSpent}</td>
    <td id="remove_update_${i}"></td>
    </tr>`;

        ts_tbody.insertAdjacentHTML(`beforeend`,
            `<tbody>
    ${row}
    </tbody>`);

        let remove_updateElement = document.getElementById(`remove_update_${i}`);
        let removeBtn = createButton(`Remove`, () => {
            timeSheetData.splice(i, 1);
            generateTable();
        });
        let updateBtn = createButton(`Update`, () => {
            enterProjectInput.value = timeSheetData[i].Project;
            enterTaskInput.value = timeSheetData[i].Task;
            timeSpentInput.value = timeSheetData[i].TimeSpent;
            // When click in row update btn, it will transform head addBtn into update button
            addBtn.textContent = `Update`;
            addBtn.onclick = () => {
                timeSheetData[i].Project = enterProjectInput.value;
                timeSheetData[i].Task = enterTaskInput.value;
                timeSheetData[i].TimeSpent = timeSpentInput.value;
                generateTable();
                addBtn.textContent = `Add`;
                clearButtonClickCallback();
                addBtn.onclick = addButtonClickCallback;
            }
        })
        remove_updateElement.appendChild(removeBtn);
        remove_updateElement.appendChild(updateBtn);
    }
}
generateTable();

function createButton(btnName, callback) {
    let button = document.createElement(`button`);
    let buttonContentText = document.createTextNode(btnName);
    button.appendChild(buttonContentText);
    button.addEventListener(`click`, callback);

    return button;
}

function addButtonClickCallback() {
    let dataObject = {
        Project: enterProjectInput.value,
        Task: enterTaskInput.value,
        TimeSpent: timeSpentInput.value,
    };

    timeSheetData.push(dataObject);
    clearButtonClickCallback();
    generateTable();
}

function clearButtonClickCallback() {
    enterProjectInput.value = null;
    enterTaskInput.value = null;
    timeSpentInput.value = null;
}
addBtn.onclick = addButtonClickCallback;
clearBtn.onclick = clearButtonClickCallback;