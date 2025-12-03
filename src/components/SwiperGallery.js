import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function initSwiper(swiperId) {
  const el = document.getElementById(swiperId);
  if (!el || el.dataset.swiperInitialized === "true") return;

  el.dataset.swiperInitialized = "true";

  new Swiper(el, {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 2,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}
