var burgerMenu = document.getElementById("burger-button");
var burgerButton = document.getElementById("burger");
var burgerTop = document.getElementById("burger-top");
var burgerMiddle = document.getElementById("burger-middle");
var burgerBottom = document.getElementById("burger-bottom");
var burgerState = true;

//DESPLEGABLE
var menu = document.getElementById("menu");
var menuBackground = document.getElementById("menu-background");
var desplegable = document.getElementById("desplegable");
var menuLink = document.getElementsByClassName("menu-link");

function activateBurguer(){

    if (burgerState){
        burgerState = false;
    }
    else {
        burgerState = true;
    }

    toggleClass(burgerTop, "top-animate", "top-deanimate");
    toggleClass(burgerMiddle, "middle-animate", "middle-deanimate");
    toggleClass(burgerBottom, "bottom-animate", "bottom-deanimate");

    burgerButton.classList.toggle("bounce");
    setTimeout(function(){backToDefault()}, 500);

}

function fullMenu(){
    activateBurguer();
    toggleClass(menu, "menu-on", "menu-off");
    toggleClass(menuBackground, "background-button-on", "background-button-off");
    toggleClass(desplegable, "desplegable-in", "desplegable-out");
}

function backToDefault(){
    burgerButton.classList.toggle("bounce");
}

///////////////////////
// ESTA FUNCIÓN SIRVE PARA TOGGLEAR CLASES A UN ELEMENTO DADO 
function toggleClass(part, class1, class2) {
    if ( (part.classList.contains(class1) == false) &&  (part.classList.contains(class2) == false)) {
        part.classList.add(class1);
    } else if (part.classList.contains(class1)) {
        part.classList.remove(class1);
        part.classList.add(class2);
    } else {
        part.classList.remove(class2);
        part.classList.add(class1);
    }
}

//esta función sirve para devolver al menú hamburguesa a su estado original luego del resize//
function showBurger(){
    var anchoVentana = window.outerWidth;
    if (anchoVentana > 710 && burgerState == false){
            activateBurguer();
        if (!burgerState){
        }
    }
    else {
        
    }
}

function menuButtons() {
    for (var i = 0; i < menuLink.length; i++) {
            menuLink[i].addEventListener("click", function(e){
            fullMenu();
        })
    }
}

window.onload = function(){
    menuButtons();
}


// CREAR UNA FUNCION PARA OPTIMIZAR ESTA ACCIÓN DE ABAJO
/*
var a = document.getElementById("desplegable");

setTimeout(function(){ a.children[0].className="link-buttons-in"}, 500);
setTimeout(function(){ a.children[1].className="link-buttons-in"}, 1000);
setTimeout(function(){ a.children[2].className="link-buttons-in"}, 1500);
setTimeout(function(){ a.children[3].className="link-buttons-in"}, 2000);
*/