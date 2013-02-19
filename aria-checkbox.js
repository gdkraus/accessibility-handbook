function trapSpaceKey(t,e){
    if ( e.which == 32 ) {
        toggleCheckBox(t);
    }
}

function toggleCheckBox(t) {
    if(t.getAttribute("aria-checked")=="false") {
        t.style.backgroundImage = "url('checkbox-checked.gif')";
        t.setAttribute("aria-checked","true");
    } else {
        t.style.backgroundImage = "url('checkbox-unchecked.gif')";
        t.setAttribute("aria-checked","false");	
    }
    //t.focus();
}