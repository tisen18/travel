document.addEventListener("DOMContentLoaded", () => {
  // ====== SWIPER INIT ======
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

  // ====== MOBILE MENU TOGGLE ======
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // ====== SIMPLE SLIDESHOW ======
  const slides = document.querySelectorAll("#slideshow .slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
  }

  setInterval(showNextSlide, 3000); // Ganti slide tiap 3 detik
});
