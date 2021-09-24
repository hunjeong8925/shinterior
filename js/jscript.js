
slideIndex = 1;
showslides(slideIndex);
function showslides(n) {
    slides = document.getElementsByClassName("myslide");
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    if(n>slides.length) { slideIndex =1;}
    if(n<1) {slideIndex = slides.length;}
    slides[slideIndex-1].style.display="block";

    dots = document.getElementsByClassName("dot");
    for(i=0; i<dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex-1].classList.add("active");
}

function plusslide(n) {
    showslides(slideIndex+=n);
}

var gnb = document.getElementsByClassName("wrapper_gnb");


window.addEventListener("scroll",sticky);
function sticky() {
    var windowPageTop = window.pageYOffset;
    if(windowPageTop>gnb[0].offsetTop+50) {
        gnb[0].classList.add("sticky");
    }else{
        gnb[0].classList.remove("sticky");
    }
}