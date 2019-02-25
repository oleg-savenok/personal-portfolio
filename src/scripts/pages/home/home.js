import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';

import EventIcon from '../../components/cursor/_eventIcon';
import EventDrag from '../../components/cursor/_eventDrag';
import StateDefault from '../../components/cursor/_stateDefault';

import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';
import swiperOptions from './swiperOptions';

import splitToCharacters from '../../functions/splitToCharacters';

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

    splitToCharacters() {
        $(this.projectsItems).each((index, item) => {
            const param = item.getBoundingClientRect();
            const leftSide = param.left;
            const rightSide = param.right;

            if ((leftSide > 0 && leftSide < window.innerWidth) || (rightSide > 0 && rightSide < window.innerWidth)) {
                $(item).addClass('is-characters');
                splitToCharacters($(item)[0].children[0]);
            }
        });
    }

    showPageAnimation() {
        this.projects = '#projects';
        const targets = '.is-characters';
        let letterIndex = 0;

        const animation = new TimelineMax();

        $(targets).each((index, item) => {
            const letters = Array.from($(item)[0].children[0].children);

            TweenMax.set(letters, {
                alpha: 0,
            });

            $(letters).each((index, item) => {
                animation.add(
                    TweenMax.to(item, 1, {
                        alpha: 1,
                        y: '0%',
                        startAt: { y: '60%' },
                        ease: Power3.easeOut,
                    }),
                    letterIndex * 0.015
                );

                letterIndex++;
            });
        });

        TweenMax.set(this.projects, {
            alpha: 1,
        });

        return animation;
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
            this.splitToCharacters();
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
