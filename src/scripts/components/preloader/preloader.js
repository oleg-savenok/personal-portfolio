import $ from 'jquery';
import { TweenMax, TimelineLite } from 'gsap';

export default class Preloader {
    constructor() {
        this.targets = {
            header: $('#header'),
            footer: $('#footer'),
            projects: $('#projects'),
            preloader: $('#preloader'),
        };

        this.positions = {
            headerTop: this.targets.header.css('top'),
            footerBottom: this.targets.footer.css('bottom'),
        };
    }

    firstLoading(enable) {
        const { header, footer, projects, preloader } = this.targets;
        const { headerTop, footerBottom } = this.positions;

        if (enable) {
            TweenMax.set(header, {
                top: -15,
            });

            TweenMax.set(footer, {
                bottom: -15,
            });

            let tl = new TimelineLite();

            tl.set(preloader, {
                clearProps: 'top',
                bottom: 0,
            })
                .to(preloader, 2, {
                    height: '100%',
                    delay: 1,
                })
                .set(preloader, {
                    clearProps: 'bottom',
                    top: 0,
                })
                .to(preloader, 1, {
                    height: 0,
                    ease: Power3.easeOut,
                })
                .to(
                    footer,
                    1,
                    {
                        alpha: 1,
                        bottom: footerBottom,
                        ease: Power2.easeOut,
                    },
                    '-=1'
                )
                .to(
                    header,
                    1,
                    {
                        alpha: 1,
                        top: headerTop,
                        ease: Power2.easeOut,
                    },
                    '=-0.75'
                );
        } else {
            TweenMax.set([header, footer, projects], {
                clearProps: 'all',
            });
        }
    }
}
