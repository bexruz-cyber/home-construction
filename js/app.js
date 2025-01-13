var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // Bir qatorga 3ta slayd ko'rsatish
  spaceBetween: 40, // Slaydlar orasidagi masofa
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination-california",
    clickable: true,
  },
  loop: true,
});

var swiperHero = new Swiper(".mySwiperHero", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000, // 1000 milliseconds = 1 second
    disableOnInteraction: false, // Autoplay continues after user interaction
  },
});

const button = document.getElementById("scrollBtn");
button.addEventListener("click", (e) => {
  e.preventDefault(); // Standart harakatni to'xtatadi
  document.querySelector("#section2").scrollIntoView({
    behavior: "smooth",
  });
});

AOS.init();
