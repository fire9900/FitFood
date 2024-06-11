import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

var swiper = new Swiper('.juices-nav__slider', {
    slidesPerView: 5,
    // spaceBetween: 20,
    slidesPerGroup: 5,
    // loop: true,	
    // loopFillGroupWithBlank: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});