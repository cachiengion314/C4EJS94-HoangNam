// function alertDelay() {
//     setTimeout(
//         function nameThing() {
//             alert("Hello");
//         }, 3000
//     );
// }
console.log(`Instead of using setTimeOut to create a timer, we can use setInterval for shorter code
`);

function setIntervalFunc() {
    setInterval(
        function() {
            alert(`Hello`);
        }, 3000
    );
}