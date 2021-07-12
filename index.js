var elementsContainer = document.getElementById("mainMenu");
var elementsNo = elementsContainer.getElementsByClassName("nav-element").length;

for (let i = 0; i < elementsNo; i++) {
    document.querySelectorAll(".nav-element")[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("nav-active-element");
        current[0].className = current[0].className.replace(" nav-active-element", "");
        this.classList.add("nav-active-element");
    });
}

function checkNavClass() {
    var navHere = document.getElementById("mainNav");
    if (navHere.className === "main-nav") {
      navHere.className += " responsive";
    } else {
      navHere.className = "main-nav";
    }
}

/*

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

*/