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

        this.positions = {
            headerTop: this.targets.header.css('top'),
            footerBottom: this.targets.footer.css('bottom'),
        };

        this.showHeader = null;
        this.showFooter = null;

        this.eventLoader = new EventLoader();
    }

    defineTweens() {
        const { header, footer, preloader, progress } = this.targets;
        const { headerTop, footerBottom } = this.positions;

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

        this.showHeader = TweenMax.to(header, 1, {
            alpha: 1,
            top: headerTop,
            ease: Power2.easeOut,
        });

        this.showFooter = TweenMax.to(footer, 1, {
            alpha: 1,
            bottom: footerBottom,
            ease: Power2.easeOut,
        });
    }

    firstLoading(enable) {
        const { header, footer, projects } = this.targets;

        this.defineTweens();

        if (enable) {
            TweenMax.set(header, { top: -15 });
            TweenMax.set(footer, { bottom: -15 });

            new TimelineLite()
                .add(this.progressShow, '+=0.25')
                .add(this.progressHide)
                .add(this.showFooter, '-=1')
                .add(this.showHeader, '-=0.75');
        } else {
            TweenMax.set([header, footer, projects], {
                clearProps: 'all',
            });
        }
    }

    show() {
        new TimelineLite().add(this.progressShow);
    }

    hide() {
        new TimelineLite().add(this.progressHide);
    }
}
