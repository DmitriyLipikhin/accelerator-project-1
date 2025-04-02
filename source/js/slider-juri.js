import Swiper from './vendor/swiper.min.mjs';
import Navigation from './vendor/modules/navigation.min.mjs';
import Mousewheel from './vendor/modules/mousewheel.min.mjs';

new Swiper('#juri-slider', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,

  navigation: {
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      allowTouchMove: true,
      initialSlide: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
