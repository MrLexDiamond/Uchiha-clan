let swiper = new Swiper("#gallery2", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  cssMode: true,
  centeredSlides: true,
  slideToClickedSlide: true,
});

let swiper2 = new Swiper("#gallery1", {
  loop: true,
  effect: 'fade',
  slidesPerView: 1,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  thumbs: {
    swiper: swiper,
  },
});
