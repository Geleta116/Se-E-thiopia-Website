let humberger = document.querySelector(".header__humberger")
let navMenu =  document.querySelector(".nav-menu")

humberger.addEventListener("click", ()=>{
      humberger.classList.toggle("active");
      navMenu.classList.toggle("active")
}
)
document.querySelectorAll(".nav-menu__item--link").forEach(
      n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
}))


//This is the java script for the slider

const slidesContainer = document.getElementById("Quotes-container");
const slide = document.querySelector(".Quote");
const prevButton = document.getElementById("Quote-arrow-prev");
const nextButton = document.getElementById("Quote-arrow-next");

nextButton.addEventListener("click", (event) => {
      const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });
prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth;
    });