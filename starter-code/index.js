const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");



// when someone clicks the hamburger button 
navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");
    // if menu is closed, open it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
    } else {
        nav.setAttribute("data-visible", false)

    }


    // if menu is opened, close it
})