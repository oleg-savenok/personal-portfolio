import $ from 'jquery';
import { TweenLite, TimelineLite } from 'gsap';

import cursorOptions from '../cursor/cursorOptions';

export default function firstLoading(enable) {
    const header = $('#header');
    const footer = $('#footer');
    const projects = $('#projects');
    const preloader = $('#preloader');

    const headerTop = header.css('top');
    const footerBottom = footer.css('bottom');

    let { cursor } = cursorOptions;

    TweenLite.set(cursor, {
        opacity: 0,
        delay: 0.1,
    });

    if (enable) {
        TweenLite.set(header, {
            top: -15,
        });

        TweenLite.set(footer, {
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
        TweenLite.set([header, footer, projects], {
            clearProps: 'all',
        });
    }
}
