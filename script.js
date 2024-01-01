let typed = new Typed(".repeat-text", {
    strings: ["Frontend Junior Developer.", "WordPress Developer."],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});

let type  = new Typed(".repeat-texts", {
    strings: ["Frontend Junior Developer.", "WordPress Developer."],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});

// Hamburger Icon function
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}