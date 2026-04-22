// TYPING ANIMATION (Hero) 
const text = "Hello, World!";
const typedEl = document.getElementById("typed");

let i = 0;
function typeEffect() {
  if (typedEl && i < text.length) {
    typedEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 90);
  }
}

window.addEventListener("DOMContentLoaded", typeEffect);


// SCROLL ANIMATIONS (fade + slide)
const animatedEls = document.querySelectorAll(
  ".section, .skill-card, .projeto-card, .contato-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.12 }
);

animatedEls.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// SMOOTH SCROLL (menu links)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Close mobile menu if open
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");
    if (navbar && navbar.classList.contains("open")) {
      navbar.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    }
  });
});

// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
}


// 3D TILT EFFECT (skill cards)
const cards = document.querySelectorAll(".skill-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * 14;
    const rotateY = (x / rect.width - 0.5) * -14;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// BACK TO TOP BUTTON
const btnTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (btnTop) {
    btnTop.classList.toggle("visible", window.scrollY > 300);
  }
});

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// HEADER SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 50) {
    header.style.background = "#200420ee";
    header.style.backdropFilter = "blur(8px)";
  } else {
    header.style.background = "#200420";
    header.style.backdropFilter = "none";
  }
});s
