console.log(`Check your username`);
while (true) {
    var x = String(prompt(`Please enter your username`));
    if (x.length > 15) {
        alert(`Your user name is too long \n
        Please write it again`);
    } else {
        alert(`Done!`);
        break;
    }
}