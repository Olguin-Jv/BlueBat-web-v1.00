var menuButtons = ['btn-nosotros', 'btn-servicios', 'btn-portfolio', 'btn-contacto'],
    btnSelected = '#475dfc',
    btnUnselected = '#4a4a4a';

function checkVisibleSection(elem) {

    var actualElement = document.getElementById(`mark-${elem}`),
        rect = actualElement.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    if (isVisible) {
        paintButton(`btn-${elem}`)
    }

}

function paintButton(elem) {
    for (var i = 0; i < menuButtons.length; i++) {
        if (menuButtons[i] == elem) {
            document.getElementById(menuButtons[i]).style.color = btnSelected;
        } else {
            document.getElementById(menuButtons[i]).style.color = btnUnselected;
        }
    }
}

function onScrollAction() {
    checkVisibleSection('nosotros');
    checkVisibleSection('servicios');
    checkVisibleSection('portfolio');
    checkVisibleSection('contacto');
}