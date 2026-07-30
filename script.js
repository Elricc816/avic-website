// Avic Website

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {
        nav.style.background = "rgba(10,10,10,.85)";
    } else {
        nav.style.background = "rgba(255,255,255,.04)";
    }

});
