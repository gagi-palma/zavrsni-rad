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