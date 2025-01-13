// Toggle Button for Navigation
const togglebtn = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".newlinks");
let isToggling = false;

togglebtn.addEventListener("click", () => {
    if (isToggling) return;
    isToggling = true;
    navLinks.classList.toggle("open");
    setTimeout(() => isToggling = false, 300);
});

// Close menu when navigation item is clicked
const navItems = document.querySelectorAll(".newlinks li a");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Typed.js Initialization
const typed = new Typed(".input", {
    strings: ["Frontend Developer", "Backend Developer", "Java Developer", "Website Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true,
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
