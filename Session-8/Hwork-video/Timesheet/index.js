console.log(`1`);
console.log(timeSheetData);
console.log(`2 - RUECD-read-update-event-create-delete`);
console.log(`3`);
let ts_tbody = document.getElementById(`ts_tbody`);
console.log(ts_tbody);
console.log(`4`);
ts_tbody.insertAdjacentHTML(`beforeend`, `<body>
<tr>
<td>Learn front-end</td>
<td>Learn HTML</td>
<td>6</td>
</tr>
</body>`);