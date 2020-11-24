function switchVisibility(checkboxElem, className) {
    var elems = document.getElementsByClassName(className);
    for(var i = 0; i < elems.length; i++) {
        if(checkboxElem.checked) {
            elems[i].style.opacity = 'initial';
        } else {
            elems[i].style.opacity = "0.3";
        }
    }
}
