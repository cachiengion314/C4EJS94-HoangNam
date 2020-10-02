// test includes and filter function
let arr = [1, 2, 3, 4, 5, 6, 7];
let str = `toi la nam`;

console.log(`includes: `, str.includes(`oi la na`));
console.log(`myOwnInclude: `, myOwnIncludes(str, `oi la na`));

function arrCallback(item) {
    return item > 3;
}

function myOwnIncludes(originStringArr, stringValueArr) {
    for (let i = 0; i < originStringArr.length; i++) {
        let index1 = 0;
        let index2 = i;
        if (stringValueArr[index1] == originStringArr[index2]) {
            index1++;
            index2++;
            while (index1 < stringValueArr.length && stringValueArr[index1] == originStringArr[index2]) {
                index1++;
                index2++;
            }
            if (index1 == stringValueArr.length) {
                return true;
            }
        }
    }
    return false;
}

function myOwnFilter(arr, callback) {
    let arrFinal = [];
    for (let i = 0; i < arr.length; i++) {
        let passItem = callback(arr[i]);
        if (passItem == true) {
            arrFinal.push(arr[i]);
        }
    }
    return arrFinal;
}
let arr2 = arr.filter(arrCallback);

console.log(`arr2: `, arr2);

console.log(`myOwnFilter: `, myOwnFilter(arr, arrCallback));