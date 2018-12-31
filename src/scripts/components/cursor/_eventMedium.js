import { TweenMax } from 'gsap';

import options from './options';

export default function eventMedium() {
    let {
        cursor,
        eventTargets: { medium: cursorEventMedium },
        size: { basic: sizeBasic, medium: sizeMedium },
    } = options;

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
