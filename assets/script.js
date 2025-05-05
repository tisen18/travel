window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add(
      "bg-gradient-to-b",
      "from-white/80",
      "to-white",
      "shadow-md",
      "text-gray-800"
    );
    header.classList.remove("bg-transparent", "text-white");
  } else {
    header.classList.remove(
      "bg-gradient-to-b",
      "from-white/80",
      "to-white",
      "shadow-md",
      "text-gray-800"
    );
    header.classList.add("bg-transparent", "text-white");
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
