// china-script.js

// ## 1. MENU MOBILE 

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
let hideTimer = null;

function openMenu() {
  navbar.classList.add("active");
  if (hideTimer) clearTimeout(hideTimer);
  // Menu tự đóng sau 2 giây nếu không có tương tác
  hideTimer = setTimeout(() => {
    navbar.classList.remove("active");
  }, 2000); 
}

menuToggle.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    if (hideTimer) clearTimeout(hideTimer); 
  } else {
    openMenu();
  }
});

navbar.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
        // Nếu click vào link, đóng menu ngay lập tức
        if (hideTimer) clearTimeout(hideTimer);
        navbar.classList.remove("active");
    } else {
        // Reset timer nếu click vào vùng menu
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            navbar.classList.remove("active");
        }, 2000);
    }
});


// ## 2. SCROLL REVEAL

const elementsToReveal = document.querySelectorAll(".allfoods, .card");

function reveal() {
  elementsToReveal.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    // Hiện phần tử khi nó cách đáy viewport khoảng 120px
    if (top < window.innerHeight - 120) {
      el.classList.add("reveal-visible");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();