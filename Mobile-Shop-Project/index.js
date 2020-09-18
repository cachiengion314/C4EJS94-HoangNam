//// sidebar

function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "115px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


//// sign
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}