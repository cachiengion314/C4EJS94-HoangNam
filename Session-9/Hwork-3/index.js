// import SheetDB from 'sheetdb-js'

console.log(`3.
Learn how to create a quick, free API using Google SpreadSheet and SheetsDB, register SheetsDB account and follow this tutorial. After successfully creating your API and testing it with a Rest Client such as Insomnia Rest Client, submit the API URL
`);
axios.get('https://sheetdb.io/api/v1/gnokf21h1axa0')
    .then(response => {
        console.log(response.data);
    });

// SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result) {
//     console.log(result);
// }, function(error) {
//     console.log(error);
// });