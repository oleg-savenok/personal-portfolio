import $ from 'jquery';
//import Swiper from 'swiper';
import { TweenMax } from 'gsap';

export default function InitProjectsSlider() {
    $('.swiper-slide').each(function() {
        $(this).css('width', $(this).css('width'));
    });

    var swiper = new Swiper(document.getElementById('projectsSlider'), {
        containerModifierClass: 'projects__container-',
        wrapperClass: 'projects__slider',
        slideClass: 'projects__slider__item',
        spaceBetween: window.innerWidth / 8,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 3,
        //freeMode: true,
        pagination: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        centeredSlides: true,
        mousewheel: true,
        speed: 1000,
    });
}
