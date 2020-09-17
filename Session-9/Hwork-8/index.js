let valueInput = document.getElementById(`input`);
let addBtn = document.getElementById(`add_button`);
let list = document.getElementById(`list`);
let allXBtn = [];

function createHtmlItemList(listHtmlElement, index, item) {
    listHtmlElement.insertAdjacentHTML(`beforeend`, `
    <div id="pair_${index}" class="list_item">
    <li>${index + 1}. ${item.name}</li>
    <button id="button_${index}">X</button>
    </div>
    `);
    allXBtn.push(document.getElementById(`button_${index}`))
    allXBtn[index].addEventListener(`click`, () => {
        allXBtn.map(button => {
            button.disabled = true;
        });
        document.getElementById(`pair_${index}`).remove();
        deleteDataRow(item.name);
    })
}

function getApiLink(keyWord = "/") {
    return 'https://sheetdb.io/api/v1/meihr0al5kj1f' + keyWord;
}

function getAllData() {
    return axios.get(getApiLink());
}

function countAllDataRow() {
    return axios.get(getApiLink(`/count`));
}

function deleteDataRow(rowValue) {
    let itemNeedToDelete = `/name` + `/${rowValue}`;
    axios.delete(getApiLink(itemNeedToDelete))
        .then(rawData => {
            console.log(rawData.data);
            showAllDataRow();
        });
}

function findDataName(name) {
    let searchKeyword = `/search?name=*${name}*&casesensitive=false`;
    axios.get(getApiLink(searchKeyword))
        .then(searchData => {
            console.log(searchData.data);
            showSearchDataRow(searchData);
        });
}

function showSearchDataRow(searchData) {
    addBtn.disabled = false;
    allXBtn.map(button => {
        button.disabled = false;
    });
    allXBtn.splice(0, allXBtn.length);
    list.innerHTML = "";
    for (let i = 0; i < searchData.data.length; i++) {
        createHtmlItemList(list, i, searchData.data[i]);
    }
}

function showAllDataRow() {
    addBtn.disabled = false;
    allXBtn.map(button => {
        button.disabled = false;
    });
    allXBtn.splice(0, allXBtn.length);
    getAllData().then((allData) => {
        list.innerHTML = "";
        for (let i = 0; i < allData.data.length; i++) {
            createHtmlItemList(list, i, allData.data[i]);
        }
        console.log(`all done!`);
    });
}

function postDataRow(nameValue) {
    countAllDataRow().then((countData) => {
        let postPromise = axios.post(getApiLink(), {
            "data": {
                "id": "user" + (countData.data.rows + 1),
                "name": nameValue
            }
        });
        postPromise.then(() => {
            showAllDataRow();
        });
    })
}

valueInput.addEventListener(`change`, () => {
    findDataName(valueInput.value);
});

addBtn.onclick = () => {
    addBtn.disabled = true;
    postDataRow(valueInput.value);
    valueInput.value = null;
}

showAllDataRow();