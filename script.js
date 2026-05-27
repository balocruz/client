document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".link");

    const toggleMenu = () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    navLink.forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop) {
                currentSectionId = section.getAttribute("id");
            }
        });
        navLink.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});
