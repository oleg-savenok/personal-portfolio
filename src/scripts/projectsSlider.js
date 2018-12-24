import $ from 'jquery';
import { TweenMax } from 'gsap';

import cursorOptions from './cursor/cursorOptions';

import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.css';

export default function projectsSlider() {
    let { cursor, cursorIcon } = cursorOptions;

    function defaultProjectSlides() {
        TweenMax.to($('.projects__slider__item a'), 0.5, {
            opacity: 1,
        });
    }

    function setEmptyIcon() {
        cursorIcon.html('');
    }

    function setDragIcon() {
        cursorIcon.html('unfold_more');
        TweenMax.set(cursorIcon, {
            rotation: 90,
        });
    }

    // Set fixed width for each slide
    $('.projects__slider__item').each(function() {
        $(this).css('width', $(this).css('width'));
    });

    // Init swiper slider
    setTimeout(() => {
        const swiper = new Swiper(document.getElementById('projectsSlider'), {
            containerModifierClass: 'projects__container-',
            wrapperClass: 'projects__slider',
            slideClass: 'projects__slider__item',
            spaceBetween: window.innerWidth / 6,
            slidesPerView: 'auto',
            loop: true,
            loopedSlides: 5,
            //freeMode: true,
            pagination: false,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            centeredSlides: true,
            mousewheel: true,
            mousewheelControl: true,
            speed: 1000,
            on: {
                touchMove: () => {
                    defaultProjectSlides();
                    setEmptyIcon();
                },
                touchStart: () => {
                    TweenMax.to(cursor, 0.2, {
                        scale: 0.5,
                    });
                    setEmptyIcon();
                },
                touchEnd: (e) => {
                    TweenMax.to(cursor, 0.2, {
                        scale: 1,
                    });
                    if ($('.projects__slider__item a:hover').length) {
                        cursorIcon.html($('.projects__slider__item a:hover').attr('data-icon'));
                        TweenMax.set(cursorIcon, {
                            rotation: 0,
                        });
                    } else {
                        setDragIcon();
                    }
                },
            },
        });
    }, 100);

    $('.projects__slider').on('mouseenter', '.projects__slider__item a', (e) => {
        TweenMax.to($('.projects__slider__item a'), 0.5, {
            opacity: 0.5,
        });

        TweenMax.to(e.target, 0.5, {
            opacity: 1,
        });
    });

    $('.projects__slider').on('mouseleave', '.projects__slider__item a', () => {
        defaultProjectSlides();
    });
}
