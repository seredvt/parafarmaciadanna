var menu="close";
var iconmenu= document.getElementById("iconmenu");
var mobile_menu= document.getElementById("mobile_menu");

function menumobile(){
 
  if(menu=="close"){
    mobile_menu.style.width = "95%";
    mobile_menu.style.height = "86%";
    menu="open";
    iconmenu.src="img/close.png";
  }
  else{ mobile_menu.style.width = "0%";
  mobile_menu.style.height = "0%";
  menu="close";
iconmenu.src="img/menu.png";
}
}






function active1() {
              var btn = document.getElementById("pannello1");
              var btn2 = document.getElementById("pannello2");
              var btn3 = document.getElementById("pannello3");
              var btn4 = document.getElementById("pannello4");
              var btn5 = document.getElementById("pannello5");
                btn.style.display = "flex";
                btn2.style.display = "none";
                btn3.style.display = "none";
                btn4.style.display = "none";
                btn5.style.display = "none";
}
function active2() {
       var btn = document.getElementById("pannello1");
       var btn2 = document.getElementById("pannello2");
       var btn3 = document.getElementById("pannello3");
       var btn4 = document.getElementById("pannello4");
       var btn5 = document.getElementById("pannello5");
         btn.style.display = "none";
         btn2.style.display = "flex";
         btn3.style.display = "none";
         btn4.style.display = "none";
         btn5.style.display = "none";
}
function active3() {
  var btn = document.getElementById("pannello1");
  var btn2 = document.getElementById("pannello2");
  var btn3 = document.getElementById("pannello3");
  var btn4 = document.getElementById("pannello4");
  var btn5 = document.getElementById("pannello5");
    btn.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "flex";
    btn4.style.display = "none";
    btn5.style.display = "none";
}
function active4() {
  var btn = document.getElementById("pannello1");
  var btn2 = document.getElementById("pannello2");
  var btn3 = document.getElementById("pannello3");
  var btn4 = document.getElementById("pannello4");
  var btn5 = document.getElementById("pannello5");
    btn.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "flex";
    btn5.style.display = "none";
}
function active5() {
  var btn = document.getElementById("pannello1");
  var btn2 = document.getElementById("pannello2");
  var btn3 = document.getElementById("pannello3");
  var btn4 = document.getElementById("pannello4");
  var btn5 = document.getElementById("pannello5");
    btn.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "flex";
}




