var btn_1 = document.getElementById("button1");
btn_1.addEventListener("click", (e) => {
    alert(e.target);
});
console.log('e.target returns the element that triggered the event');

var ip = document.getElementById("input");
ip.addEventListener("keydown", (e) => {
    alert(e.key);
});
console.log('e.key returns the keyword of the pressed keyboard key');