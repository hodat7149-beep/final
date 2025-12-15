// MENU MOBILE
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.onclick = () => {
  menu.classList.toggle("active");
};

// SCROLL REVEAL
const sections = document.querySelectorAll(".section");

function reveal() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
