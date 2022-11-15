
//BEST ITEM slide
var swiper = new Swiper('.swiper-container',{
  slidesPerView: 5,
  spaceBetween: 35,
  grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 3000,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    1024 : {
      slidesPerView: 4,
      spaceBetween:35
    }
  }
});