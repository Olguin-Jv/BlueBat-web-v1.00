
function toggleClass() {
    var button = document.getElementById("button");
    var menu = document.getElementById("menu");
    
    if (menu.classList.contains("menu-off")) {
        menu.style.opacity = "1";
        menu.classList.remove("menu-off");
        menu.classList.add("menu-on");
    } else if (menu.classList.contains("menu-on")){
        menu.classList.remove("menu-on");
        menu.classList.add("menu-off");
    }
    
}

var menuButton = document.getElementsByClassName("menu-button");
console.log(menuButton);

function menuButtons() {
    for (var i = 0; i < menuButton.length; i++) {
            menuButton[i].addEventListener("click", function(e){
            menu.classList.remove("menu-on");
            menu.classList.add("menu-off");
        })
    }
}

function hideMenu(){
    var ventana = window.outerWidth;
    if (ventana > 870){
        menu.classList.remove("menu-on");
        menu.classList.add("menu-off");
    }
}

window.onload = function(){
    menuButtons();
}


/*
REFACTORIZAR LUEGO:

- LUEGO DE CLICKEAR EN EL MENÚ
ACTIVAR EL eventListener DE LOS BOTONES DEL MENÚ
Y LUEGO DE HACER CLICK SOBRE ELLOS ELIMINE EL eventListener
*/