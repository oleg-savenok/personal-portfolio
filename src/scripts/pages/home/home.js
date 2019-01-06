import $ from 'jquery';
import { TweenMax } from 'gsap';

import { Swiper } from 'swiper/dist/js/swiper.esm.js';
import 'swiper/dist/css/swiper.css';
import swiperOptions from './swiperOptions';

export default class Home {
    constructor() {
        this.swiper = null;
        this.swiperOptions = swiperOptions;
        this.swiperSelector = $('#projectsSlider');
        this.swiperItemLink = '.projects__slider__item a';
    }

    addHoverListeners() {
        this.swiperSelector.on('mouseenter', this.swiperItemLink, (e) => {
            TweenMax.to(this.swiperItemLink, 0.5, {
                alpha: 0.5,
            });

            TweenMax.to(e.target, 0.5, {
                alpha: 1,
            });
        });

        this.swiperSelector.on('mouseleave', this.swiperItemLink, () => {
            TweenMax.to(this.swiperItemLink, 0.5, {
                alpha: 1,
            });
        });
    }

    addSwiperListeners() {
        this.swiper.on('touchMove', () => {
            console.log('touchMove');
        });

        this.swiper.on('touchStart', () => {
            console.log('touchStart');
        });

        this.swiper.on('touchEnd', (e) => {
            console.log('touchEnd');
        });
    }

    clearListeners() {
        this.swiperSelector.off('mouseenter');
        this.swiperSelector.off('mouseleave');
    }

    initSwiper() {
        this.swiperSelector = $('#projectsSlider');

        setTimeout(() => {
            this.swiper = new Swiper(this.swiperSelector, this.swiperOptions);

            this.addSwiperListeners();
            this.addHoverListeners();
        }, 100);
    }

    remove() {
        this.swiper = null;
        this.clearListeners();
    }

    render() {
        this.initSwiper();
    }
}
