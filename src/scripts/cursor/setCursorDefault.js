import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function setCursorDefault() {
    let {
        cursorIcon,
        size: { basic: sizeBasic },
    } = cursorOptions;

    TweenMax.to(cursor, 0.2, {
        height: sizeBasic,
        width: sizeBasic,
        opacity: 0,
    });

    TweenMax.to(cursorIcon, 0.1, { opacity: 0 });
}
