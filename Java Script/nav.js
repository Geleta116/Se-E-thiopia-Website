//THIS IS THE JAVA SCRIPT PART FOR THE HAMBERGER MENU

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





// THIS IS THE JAVA SCRIPT PART FOR THE CONTACT-PAGE FORM VALIDATION
let name = document.getElementById("name");
let email = document.getElementById("email");
let textarea = document.getElementById("ta");
let form = document.getElementById("form");
let displayed  = document.getElementById("error_display")

form.addEventListener('submit', (e) => {
      let show= []
      if (name.value === "" || name.value == null){
            show.push("Please Enter your name")
      }
      if (email.value === "" || email.value == null){
            show.push("Please Enter your email")
      }
      if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            show.push('please fill a proper email address')
        }
      if (ta.value === "" || ta.value == null){
            show.push("Please Enter your comments")
      }
      if (show.length> 0){
            e.preventDefault()
            displayed.innerText = show[0]
      }
})


// THIS IS THE JAVA SCRIPT PART FOR THE SLIDER


    




