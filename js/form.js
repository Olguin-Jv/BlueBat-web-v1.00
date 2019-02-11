
// así se selecciona y se le da valor al checkbox
// document.getElementsByName('opt-website')[0].checked = true;

function markCheckbox(elem) {

    toggleClassName(elem, 'r-unselected', 'r-selected');
    
}

function toggleClassName(elem, opt1, opt2){
    if (elem.className == opt1){
        elem.className = opt2;
    } else {
        elem.className = opt1;
    }
}

var radioButtons = document.getElementsByClassName('radius');
for (var i = 0; i < radioButtons.length; i++) {
    var a = radioButtons[i];
    a.addEventListener('click', function () {
        markCheckbox(this.children[0]);
        var elem = document.getElementsByName(`opt-${this.dataset.id}`) ;
        elem[0].click();
    })
}