import $ from 'jquery';
import { TweenMax, TimelineLite } from 'gsap';

import EventLoader from '../cursor/_eventLoader';

export default class Preloader {
    constructor() {
        this.targets = {
            header: $('#header'),
            footer: $('#footer'),
            projects: $('#projects'),
            preloader: $('#preloader'),
            progress: $('#preloader .preloader__progress'),
        };

        this.showHeader = null;
        this.showFooter = null;

        this.eventLoader = new EventLoader();
    }

    defineTweens() {
        const { header, footer, preloader, progress } = this.targets;

        this.progressShow = new TimelineLite()
            .set(preloader, { pointerEvents: 'all' })
            .set(progress, { clearProps: 'top', bottom: 0 })
            .to(progress, 1.5, { height: '100%', ease: Power2.easeInOut }, 0)
            .to(progress, 0.75, { skewY: '1.5deg', ease: Power2.easeInOut }, 0)
            .to(progress, 0.75, { skewY: '0', ease: Power2.easeInOut }, 0.75)
            .eventCallback('onStart', () => {
                $(progress).css('transformOrigin', 'left bottom');
                this.eventLoader.start();
            });

        this.progressHide = new TimelineLite()
            .set(progress, { clearProps: 'bottom', top: 0, immediateRender: false })
            .to(progress, 1, { height: 0, ease: Power2.easeInOut })
            .to(progress, 0.5, { skewY: '2deg', ease: Power2.easeInOut }, 0)
            .to(progress, 0.5, { skewY: '0', ease: Power2.easeInOut }, 0.5)
            .set(preloader, { pointerEvents: 'none' }, '-=0.75')
            .eventCallback('onStart', () => {
                $(progress).css('transformOrigin', 'right top');
                this.eventLoader.end();
            });

        this.showHeader = new TimelineLite()
            .from(header, 1, {
                top: -15,
                ease: Power2.easeOut,
            })
            .to(
                header,
                1,
                {
                    alpha: 1,
                    ease: Power2.easeOut,
                },
                '0'
            );

        this.showFooter = new TimelineLite()
            .from(
                footer,
                1,
                {
                    bottom: -15,
                    ease: Power2.easeOut,
                },
                '0'
            )
            .to(
                footer,
                1,
                {
                    alpha: 1,
                    ease: Power2.easeOut,
                },
                '0'
            );
    }

    firstLoading(page) {
        this.defineTweens();

        new TimelineLite()
            .add(this.progressShow, '+=0.25')
            .add(this.progressHide)
            .add(this.showFooter, '-=1')
            .add(this.showHeader, '-=0.75')
            .add(page.showPageAnimation, '-=0.75');
    }

    show() {
        new TimelineLite().add(this.progressShow);
    }

    hide(page) {
        this.showPageAnimation = page.showPageAnimation;

        new TimelineLite().add(this.progressHide).add(this.showPageAnimation, '-=0.75');
    }
}
