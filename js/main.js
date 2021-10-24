let button = document.querySelector(".menu-button");
let menu = document.querySelector(".dropdown-menu");
let menuStatus = false;

function menuOpen(){
    if (menuStatus == false){
        menu.style.right = "-2500px";
        menuStatus = true;
    }
    else if (menuStatus == true){
        menu.style.right = "0px";
        menuStatus = false;
    }
}

button.onclick = menuOpen;
