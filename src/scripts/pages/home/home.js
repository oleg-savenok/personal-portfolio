import $ from 'jquery';
import { TweenMax } from 'gsap';

import EventIcon from '../../components/cursor/_eventIcon';
import EventDrag from '../../components/cursor/_eventDrag';
import StateDefault from '../../components/cursor/_stateDefault';

import { Swiper } from 'swiper/dist/js/swiper.esm.js';
import 'swiper/dist/css/swiper.css';
import swiperOptions from './swiperOptions';

export default class Home {
    constructor() {
        // Cursor
        this.eventIcon = new EventIcon();
        this.eventDrag = new EventDrag();
        this.stateDefault = new StateDefault();

        // Swiper
        this.swiper = null;
        this.swiperOptions = swiperOptions;

        // Selectors
        this.projects = '#projects';
        this.swiperSelector = '#projectsSlider';
        this.swiperItems = '.projects__slider__item';
        this.swiperItemLink = '.projects__slider__item a';
    }

    addHoverListeners() {
        $(this.swiperSelector).on('mouseenter', this.swiperItemLink, (e) => {
            TweenMax.to(this.swiperItemLink, 0.4, {
                alpha: 0.3,
            });

            TweenMax.to(e.target, 0.4, {
                alpha: 1,
            });
        });

        $(this.swiperSelector).on('mouseleave', this.swiperItemLink, () => {
            TweenMax.to(this.swiperItemLink, 0.5, {
                alpha: 1,
            });
        });
    }

    addSwiperListeners() {
        this.swiper.on('touchMove', () => {
            TweenMax.to($(this.swiperItemLink), 0.5, {
                opacity: 1,
            });
            this.eventDrag.drag();
        });

        this.swiper.on('touchStart', () => {
            this.eventDrag.drag();
        });

        this.swiper.on('touchEnd', (e) => {
            this.eventDrag.undrag();
        });
    }

    addIconListeners() {
        $(this.projects).on('mouseover', '#projectsSlider', (e) => {
            this.eventIcon.start(e);
        });

        $(this.projects).on('mouseout', '#projectsSlider', () => {
            this.stateDefault.start();
        });
    }

    clearListeners() {
        $(this.swiperSelector)
            .off('mouseenter')
            .off('mouseleave')
            .off('mouseover')
            .off('mouseout');
    }

    initSwiper() {
        this.swiperSelector = '#projectsSlider';

        setTimeout(() => {
            $(this.swiperItems).each(function() {
                $(this).css('width', $(this).css('width'));
            });

            this.swiper = new Swiper($(this.swiperSelector), this.swiperOptions);

            this.addSwiperListeners();
            this.addHoverListeners();
            this.addIconListeners();
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
