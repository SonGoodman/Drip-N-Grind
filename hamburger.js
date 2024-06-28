/*javascript for hamburger menu*/
const hamburger = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelector(".nav-links").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));