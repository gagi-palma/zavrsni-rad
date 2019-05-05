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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var captionText = document.getElementById("text");
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

    let x = document.getElementById(slideIndex).alt;
    captionText.innerHTML = x;
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