const swiper = new Swiper('.vertical-swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 1,
  spaceBetween: 90,
  // autoplay: {
  // delay: 10000,
  // disableOnInteraction: false,
  // stopOnLastSlide: false,
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
