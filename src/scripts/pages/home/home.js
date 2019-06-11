import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';

import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';
import options from './options';

import splitToCharacters from '../../functions/splitToCharacters';

export default class Home {
    constructor() {
        // Cursor
        this.cursor = null;

        // Swiper
        this.swiper = null;
        this.options = options;

        // Selectors
        this.projects = '#projects';
        this.projectsSwiper = '#projectsSwiper';
        this.projectsItems = '.projects__swiper__item';
        this.projectsItemLinks = '.projects__swiper__item a';

        // Bind
        this.showPageAnimation = this.showPageAnimation.bind(this);
    }

    addHoverListeners() {
        let { alpha, timeEnter, timeLeave } = this.options.transitions.swiperItem;

        $(this.projectsSwiper).on('mouseenter', this.projectsItemLinks, (e) => {
            TweenMax.to(this.projectsItemLinks, timeEnter, {
                alpha: alpha,
            });

            TweenMax.to(e.target, timeEnter, {
                alpha: 1,
            });
        });

        $(this.projectsSwiper).on('mouseleave', this.projectsItemLinks, () => {
            TweenMax.to(this.projectsItemLinks, timeLeave, {
                alpha: 1,
            });
        });
    }

    addSwiperListeners() {
        let { alpha, timeEnter, timeLeave } = this.options.transitions.swiperItem;

        this.swiper.on('touchMove', () => {
            TweenMax.to($(this.projectsItemLinks), timeLeave, {
                opacity: 1,
            });
            this.cursor.callEvent().drag.drag();
        });

        this.swiper.on('touchStart', () => {
            this.cursor.callEvent().drag.drag();
        });

        this.swiper.on('touchEnd', (e) => {
            this.cursor.callEvent().drag.undrag(e);

            if ($(e.target).hasClass('projects__swiper__item__link')) {
                this.cursor.callEvent().icon.start(e);

                TweenMax.to(this.projectsItemLinks, timeEnter, {
                    alpha: alpha,
                });

                TweenMax.to(e.target, timeEnter, {
                    alpha: 1,
                });
            }
        });
    }

    addIconListeners() {
        $(this.projects).on('mouseover', '#projectsSwiper', (e) => {
            this.cursor.callEvent().icon.start(e);
        });

        $(this.projects).on('mouseout', '#projectsSwiper', () => {
            this.cursor.callState().default.start();
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

        let { time, delay, degree, ease } = this.options.transitions.letters;

        const animation = new TimelineMax();

        $(targets).each((index, item) => {
            const letters = Array.from($(item)[0].children[0].children);

            TweenMax.set(letters, {
                alpha: 0,
            });

            $(letters).each((index, item) => {
                animation.add(
                    TweenMax.to(item, time, {
                        alpha: 1,
                        y: '0%',
                        startAt: { y: degree },
                        ease: ease,
                    }),
                    letterIndex * delay
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

            this.swiper = new Swiper($(this.projectsSwiper), this.options.swiper);

            if (this.cursor) {
                this.addSwiperListeners();
                this.addHoverListeners();
                this.addIconListeners();
            }

            this.splitToCharacters();
        }, 100);
    }

    remove() {
        this.swiper = null;
        this.clearListeners();
    }

    render(cursor) {
        this.initSwiper();
        this.cursor = cursor;
    }
}
