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