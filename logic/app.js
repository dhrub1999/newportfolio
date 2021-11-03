const linkContainer = document.querySelector(".links-container");
const hamburger = document.querySelector(".hamburger-container");
const showLinks = document.querySelector(".show-links");

hamburger.addEventListener("click", ()=>{
    linkContainer.classList.toggle("show-links");
    hamburger.classList.toggle("cross");
});

