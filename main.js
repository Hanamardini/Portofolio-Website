// Toogle & Responsive Navigation
const navSlide = () => {
    const garis = document.querySelector(".garis");
    const navList = document.querySelector("nav");

    garis.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        garis.classList.toggle("toggle-garis");
    });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};