let grckaMore = "";
let turskaMore = "";
let evropskiGradovi = "";

async function renderEvropskiGradovi() {
    let response = await fetch('http://localhost:3000/Evropski-gradovi');
    let eg = await response.json();
    for (i = 0; i < eg.length; i++) {
        evropskiGradovi += `<div class="top" id="${eg[i].id}">
                    <div class="topContainer">
                        <div class="topImg">
                            <img src="${eg[i].slikeGrada}" alt="${eg[i].grad}">
                            <div class="topPrice">${eg[i].cena}‎€</div>
                        </div>
                        <div class="topName">${eg[i].grad}</div>
                        <div class="topSection">
                            <div class="topLeft">${eg[i].brojDana}‎d/${eg[i].brojNocenja}n</div>
                            <div class="topRight"><i class="fas fa-bus-alt"></i></div>
                        </div>
                    </div>
                </div>`
        $("#topCity").html(evropskiGradovi);
    }
}
async function renderGrckaMore() {
    let response = await fetch('http://localhost:3000/Grcka-more');
    let gm = await response.json();
    for (i = 0; i < gm.length; i++) {
        grckaMore += `<div class="top" id="${gm[i].id}">
                    <div class="topContainer">
                        <div class="topImg">
                            <img src="${gm[i].slikeGrada}" alt="${gm[i].grad}">
                            <div class="topPrice">${gm[i].cena}‎€</div>
                        </div>
                        <div class="topName">${gm[i].grad}</div>
                        <div class="topSection">
                            <div class="topLeft">${gm[i].brojDana}‎d/${gm[i].brojNocenja}n</div>
                            <div class="topRight"><i class="fas fa-bus-alt"></i></div>
                        </div>
                    </div>
                </div>`
        $("#topSeaGreece").html(grckaMore);
    }
}
async function renderTurskaMore() {
    let response = await fetch('http://localhost:3000/Turska-more');
    let tm = await response.json();
    for (i = 0; i < tm.length; i++) {
        turskaMore += `<div class="top" id="${tm[i].id}">
                    <div class="topContainer">
                        <div class="topImg">
                            <img src="${tm[i].slikeGrada}" alt="${tm[i].grad}">
                            <div class="topPrice">${tm[i].cena}‎€</div>
                        </div>
                        <div class="topName">${tm[i].grad}</div>
                        <div class="topSection">
                            <div class="topLeft">${tm[i].brojDana}‎d/${tm[i].brojNocenja}n</div>
                            <div class="topRight"><i class="fas fa-bus-alt"></i></div>
                        </div>
                    </div>
                </div>`
        $("#topSeaTurkey").html(turskaMore);
    }
}

$(document).ready(renderEvropskiGradovi(),renderGrckaMore(),renderTurskaMore());

async function renderDropdownCity() {
    let response = await fetch('http://localhost:3000/Evropski-gradovi');
    let euroCity = "";
    let eC = await response.json();
    for (i = 0; i < eC.length; i++) {
        euroCity += `<a href="secondPage.html" id="${eC[i].id}">${eC[i].grad}</a>`
        $("#dropdownCity").html(euroCity);
        $("#leftNavDropdownCity").html(euroCity);
    }
}
async function renderDropdownGreece() {
    let response = await fetch('http://localhost:3000/Grcka-more');
    let greekSea = "";
    let gm = await response.json();
    for (i = 0; i < gm.length; i++) {
        greekSea += `<a href="secondPage.html" id="${gm[i].id}">${gm[i].grad}</a>`
        $("#dropdownGreece").html(greekSea);
        $("#leftNavDropdownGreece").html(greekSea);
    }
}
async function renderDropdownTurkey() {
    let response = await fetch('http://localhost:3000/Turska-more');
    let tm = await response.json();
    let turkeySea ="";
    for (i = 0; i < tm.length; i++) {
        turkeySea += `<a href="secondPage.html" id="${tm[i].id}">${tm[i].grad}</a>`
        $("#dropdownTurkey").html(turkeySea);
        $("#leftNavDropdownTurkey").html(turkeySea);
    }
}
$(document).ready(renderDropdownCity(),renderDropdownGreece(),renderDropdownTurkey(),createDots());

function createDots() {
    let dot = "";
    for(var i = 1; i < 9; i++){
        dot +=`<span class="dot" onclick="currentSlide(${i})"></span>`
        $("#dots").html(dot);  
    }
}

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