
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
id = setInterval("plusslide(1);",5000);

var gnb = document.getElementsByClassName("wrapper_gnb");


//서브메뉴 숨기기
var submenu = document.getElementsByClassName("sub");
for(i=0; i<submenu.length; i++) {
submenu[i].style.display = "none";
}
function showmenu(no) {
    submenu[no-1].style.display = "block";
}
function hidemenu(no) {
    submenu[no-1].style.display = "none";
}


window.addEventListener("scroll",sticky);
function sticky() {
    var windowPageTop = window.pageYOffset;
    if(windowPageTop>gnb[0].offsetTop+50) {
        gnb[0].classList.add("sticky");
    }else{
        gnb[0].classList.remove("sticky");
    }
}
