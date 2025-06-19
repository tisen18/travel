// main.js
document.addEventListener("DOMContentLoaded", () => {
  /* ========= SWIPER ========= */
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
  });

  /* ========= MOBILE MENU ========= */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  menuBtn?.addEventListener("click", () =>
    mobileMenu?.classList.toggle("hidden")
  );

  /* ========= SIMPLE SLIDESHOW ========= */
  const slides = document.querySelectorAll("#slideshow .slide");
  let currentSlide = 0;
  const showNextSlide = () => {
    slides[currentSlide].classList.replace("opacity-100", "opacity-0");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.replace("opacity-0", "opacity-100");
  };
  setInterval(showNextSlide, 3000);

  /* ========= NAVBAR SCROLL ========= */
  const navbar = document.getElementById("navbar");
  const h1navbar = document.getElementById("h1navbar");
  const toggleNavBg = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add("bg-white", "shadow");
      navbar?.classList.remove("text-white");
      h1navbar?.classList.add("text-blue-600");
      h1navbar?.classList.remove("text-white");
    } else {
      navbar?.classList.remove("bg-white", "shadow");
      navbar?.classList.add("text-white");
      h1navbar?.classList.remove("text-blue-600");
      h1navbar?.classList.add("text-white");
    }
  };
  toggleNavBg();
  window.addEventListener("scroll", toggleNavBg);

  /* ========= SMOOTH SCROLL ========= */
  document.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(link.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    })
  );

  /* ========= AOS INIT ========= */
  AOS.init({ duration: 800 });
});

document.addEventListener("click", (e) => {
  const card = e.target.closest(".detail-card");
  if (!card) return; // klik bukan di card, skip
  window.location.href = `detail.html`;
});
