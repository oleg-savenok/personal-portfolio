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
            .to(progress, 2, { height: '100%' })
            .eventCallback('onStart', () => {
                this.eventLoader.start();
            });

        this.progressHide = new TimelineLite()
            .set(progress, { clearProps: 'bottom', top: 0, immediateRender: false })
            .to(progress, 1, { height: 0, ease: Power3.easeOut })
            .set(preloader, { pointerEvents: 'none' }, '-=0.75')
            .eventCallback('onStart', () => {
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
        //const { header, footer } = this.targets;
        this.showPageAnimation = page.showPageAnimation;

        this.defineTweens();

        //TweenMax.set(header, { top: -15 });
        //TweenMax.set(footer, { bottom: -15 });

        new TimelineLite()
            .add(this.progressShow, '+=0.25')
            .add(this.progressHide)
            .add(this.showFooter, '-=1')
            .add(this.showHeader, '-=0.75')
            .add(this.showPageAnimation, '-=1');
    }

    show() {
        new TimelineLite().add(this.progressShow);
    }

    hide(page) {
        this.showPageAnimation = page.showPageAnimation;

        new TimelineLite().add(this.progressHide).add(this.showPageAnimation, '-=0.75');
    }
}
