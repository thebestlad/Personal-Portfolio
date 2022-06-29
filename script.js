const hamburger = document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")
const section=document.querySelector("section")

hamburger.addEventListener("click",mobileMenu);

function mobileMenu (){
hamburger.classList.toggle("active");        
navMenu.classList.toggle("active");
section.classList.toggle("blur")
console.log('It works.')
}


