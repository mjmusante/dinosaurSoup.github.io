let galIndex = 0;
galleryDisplay(galIndex);

function moveImage(n) {
    galleryDisplay(galIndex += n);
}

function currImg(n) {
    galleryDisplay(galIndex = n);
}

function galleryDisplay(n) {
    let i;
    let gallery = document.getElementsByClassName("gal-slide");
    let dots = document.getElementsByClassName("gal-dot");

    if (n >= gallery.length) {
        galIndex = 0;
    }

    if (n < 0) {
        galIndex = gallery.length - 1;
    }

    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    gallery[galIndex].style.display = "flex";
    dots[galIndex].className += " active";
} 