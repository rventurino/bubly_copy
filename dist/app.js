const navLinks = document.getElementById("navLinks");
const hero = document.getElementById("hero");
const navIcon = document.getElementById("nav-icon1");
const navBar = document.getElementById("topNav");
navLinks.style.left = "100vw";
hero.style.display = "flex";
navIcon.addEventListener("click", menu);

function menu(){
      
        if (navLinks.style.left === "100vw"){
          navLinks.style.left = "0";
          hero.style.display = "none";
          navBar.style.position = "fixed";
          navBar.style.color = "white";
          navBar.style.background ="#70c9dbff";
        } else{ 
          navBar.style.background ="white";        
          navBar.style.color = "#00a0deff";
          navBar.style.position = "relative";
          navLinks.style.left = "100vw";
          hero.style.display = "flex";
        }
}
//topNav.style.backgroundColor = "#00a0deff";
$(document).ready(function () {
  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    
  });
});


