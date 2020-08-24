console.log(`10.
Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework
`);
let str = prompt(`Please enter a sequence of names separated by commas.
`);
let arrayStr = str.split(`,`);
let arrayStrModified = arrayStr.map(item => `<${item}>`);
let strStrModified = `${str} => `;
for (let i = 0; i < arrayStrModified.length; i++) {
    strStrModified += arrayStrModified[i];
}
alert(strStrModified);