var slideIndex = 1;

classNames = ["honeymoonSlides"]
for (i = 0; i < classNames.length; i++) {
    showSlides(slideIndex, classNames[i]);
}

// Next/previous controls
function plusSlides(n, className) {
    showSlides(slideIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n, className) {
    showSlides(slideIndex = n, className);
}

function showSlides(n, className) {
    var i;
    var slides = document.getElementsByClassName(className);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}