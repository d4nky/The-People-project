let menuBtn = document.querySelector(".menu-button");
let menu = document.querySelector(".dropdown-menu");
let menuOpen = false;

function menuToggle(){
    if(menuOpen == false){
        menu.style.right = '-500px';
        menuOpen = true;
    }
    else if(menuOpen == true){
        menu.style.right = "0px";
        menuOpen = false;
    }
}


menuBtn.onclick = menuToggle;


