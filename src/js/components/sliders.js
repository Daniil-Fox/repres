import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Pagination, Navigation]);

new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: ".review-slider-prev",
    nextEl: ".review-slider-next",
  },
  pagination: {
    el: ".review-slider-pagination",
    type: "fraction",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
