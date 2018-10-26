var button = document.getElementById("burger");
var burgerTop = document.getElementById("burger-top");
var burgerMiddle = document.getElementById("burger-middle");
var burgerBottom = document.getElementById("burger-bottom");


function activateBurguer(){

    toggleBurgerClass(burgerTop, "top-animate", "top-deanimate");
    toggleBurgerClass(burgerMiddle, "middle-animate", "middle-deanimate");
    toggleBurgerClass(burgerBottom, "bottom-animate", "bottom-deanimate");

    button.classList.toggle("bounce");
    setTimeout(function(){backToDefault()}, 500);

}

function backToDefault(){
    button.classList.toggle("bounce");
}

///////////////////////
// ESTA FUNCIÓN SIRVE PARA TOGGLEAR CLASES A UN ELEMENTO DADO 
function toggleBurgerClass(part, class1, class2) {
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


//---------------------------------------

/*A PARTIR DE ACÁ SE CREA FUNCION PARA MOSTRAR EL BOTÓN DE MENÚ DE ACUERDO AL ANCHO DEL NAVEGADOR*/

function showBurger(){
    var anchoVentana = window.outerWidth;
    var menu = document.getElementById()
    if (anchoVentana < 711){
        menu.classList.remove("menu-off");
        menu.classList.add("menu-on");
    }
}

// function hideMenu(){
//     var ventana = window.outerWidth;
//     if (ventana > 870){
//         menu.classList.remove("menu-on");
//         menu.classList.add("menu-off");
//     }
// }