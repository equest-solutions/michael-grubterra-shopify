var mySwiper = new Swiper('.announcement-bar-swiper', {
  slidesPerView: 4,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  } 
});


