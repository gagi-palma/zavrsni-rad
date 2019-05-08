async function renderInfoCards(URL, DIV) {
    let response = await fetch(`http://localhost:3000/${URL}`);
    let render = "";
    let info = await response.json();
    for (i = 0; i < info.length; i++) {
        render += `<a class="top" id="${info[i].id}"  href="secondPage.html?objekat=${URL}&id=${info[i].id}" target="_blank">
                    <div class="topContainer">
                        <div class="topImg">
                            <img src="${info[i].slikeGrada}" alt="${info[i].grad}">
                            <div class="topPrice">${info[i].cena}‎€</div>
                        </div>
                        <div class="topName">${info[i].grad}</div>
                        <div class="topSection">
                            <div class="topLeft">${info[i].brojDana}‎d/${info[i].brojNocenja}n</div>
                            <div class="topRight"><i class="fas fa-bus-alt"></i></div>
                        </div>
                    </div>
                </a>`
        $(`#${DIV}`).html(render);

    }
}

renderInfoCards("Evropski-gradovi", "topCity");
renderInfoCards("Grcka-more", "topSeaGreece");
renderInfoCards("Turska-more", "topSeaTurkey");


async function renderDropdown(URL, NavMenu, NavLeft) {
    let response = await fetch(`http://localhost:3000/${URL}`);
    let render = "";
    let info = await response.json();
    for (i = 0; i < info.length; i++) {
        render += `<a href="secondPage.html?objekat=${URL}&id=${info[i].id}" target="_blank">${info[i].grad}</a>`
        $(`#${NavMenu}`).html(render);
        $(`#${NavLeft}`).html(render);
    }
}
renderDropdown("Evropski-gradovi", "dropdownCity", "leftNavDropdownCity");
renderDropdown("Grcka-more", "dropdownGreece", "leftNavDropdownGreece");
renderDropdown("Turska-more", "dropdownTurkey", "leftNavDropdownTurkey");

function createDots() {
    let dot = "";
    for (let i = 1; i < 9; i++) {
        dot += `<span class="dot" onclick="currentSlide(${i})"></span>`
        $("#dots").html(dot);
    }
}
createDots();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

function openNav() {
    document.getElementById("navLeft").style.width = "40vw";
    document.getElementById("container").style.marginLeft = "40vw";
}

function closeNav() {
    document.getElementById("navLeft").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
}