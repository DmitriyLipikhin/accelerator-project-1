import Swiper from './vendor/swiper.min.mjs';
import Navigation from './vendor/modules/navigation.min.mjs';
import Mousewheel from './vendor/modules/mousewheel.min.mjs';

new Swiper('#reviews-slider', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  allowTouchMove: false,

  navigation: {
    nextEl:'#reviews-button-right',
    prevEl:'#reviews-button-left',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      allowTouchMove: true,
      initialSlide: 0
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 73
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 88
    }
  }
});
