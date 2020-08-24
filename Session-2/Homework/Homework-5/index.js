console.log(`Write a program asking users their age, and then decide if they are old enough to view a 14+ content`);
let age = parseInt(prompt(`How old are you?`));
if (age > 13) {
    alert(`Enjoy the 14+ content`);
}else{
    alert(`You are not old enough view this content`);
}