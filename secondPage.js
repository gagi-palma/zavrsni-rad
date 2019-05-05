function openNav() {
    document.getElementById("navLeft").style.width = "40vw";
    document.getElementById("container").style.marginLeft = "40vw";
}

function closeNav() {
    document.getElementById("navLeft").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}