import $ from 'jquery';
import { TweenMax } from 'gsap';

import EventIcon from '../../components/cursor/_eventIcon';
import EventDrag from '../../components/cursor/_eventDrag';
import StateDefault from '../../components/cursor/_stateDefault';

import Swiper from 'swiper/dist/js/swiper';
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
        this.projectsSwiper = '#projectsSwiper';
        this.projectsItems = '.projects__swiper__item';
        this.projectsItemLinks = '.projects__swiper__item a';
    }

    showPageAnimation() {
        this.projects = '#projects';

        return TweenMax.to(this.projects, 1, {
            alpha: 1,
        });
    }

    addHoverListeners() {
        $(this.projectsSwiper).on('mouseenter', this.projectsItemLinks, (e) => {
            TweenMax.to(this.projectsItemLinks, 0.4, {
                alpha: 0.3,
            });

            TweenMax.to(e.target, 0.4, {
                alpha: 1,
            });
        });

        $(this.projectsSwiper).on('mouseleave', this.projectsItemLinks, () => {
            TweenMax.to(this.projectsItemLinks, 0.5, {
                alpha: 1,
            });
        });
    }

    addSwiperListeners() {
        this.swiper.on('touchMove', () => {
            TweenMax.to($(this.projectsItemLinks), 0.5, {
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
        $(this.projects).on('mouseover', '#projectsSwiper', (e) => {
            this.eventIcon.start(e);
        });

        $(this.projects).on('mouseout', '#projectsSwiper', () => {
            this.stateDefault.start();
        });
    }

    clearListeners() {
        $(this.projectsSwiper)
            .off('mouseenter')
            .off('mouseleave')
            .off('mouseover')
            .off('mouseout');
    }

    initSwiper() {
        this.projectsSwiper = '#projectsSwiper';

        setTimeout(() => {
            $(this.projectsItems).each(function() {
                $(this).css('width', $(this).css('width'));
            });

            this.swiper = new Swiper($(this.projectsSwiper), this.swiperOptions);

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
