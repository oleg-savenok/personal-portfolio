import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function cursorMedium() {
    let {
        cursor,
        eventTargets: { medium: cursorEventMedium },
        size: { basic: sizeBasic, medium: sizeMedium },
    } = cursorOptions;

    cursorEventMedium
        .on('mouseenter', () => {
            TweenMax.to(cursor, 0.2, {
                height: sizeMedium,
                width: sizeMedium,
            });
        })
        .on('mouseleave', () => {
            TweenMax.to(cursor, 0.2, {
                height: sizeBasic,
                width: sizeBasic,
            });
        });
}
