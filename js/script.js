document.addEventListener("DOMContentLoaded", () => {
    // Menu Hamburguer para dispositivos móveis
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Submenu "Serviço"
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", (event) => {
            event.preventDefault();
            dropdownMenu.classList.toggle("show");
        });
    }

    // Botão de voltar ao topo
    const backToTopButton = document.getElementById("backToTop");
    window.onscroll = function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});