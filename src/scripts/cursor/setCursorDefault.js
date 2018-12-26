import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function setCursorDefault() {
    let {
        cursorIcon,
        size: { basic: sizeBasic },
        opacity: { basicMode: opacityBasicMode },
    } = cursorOptions;

    TweenMax.to(cursor, 0.2, {
        height: sizeBasic,
        width: sizeBasic,
        opacity: opacityBasicMode,
    });

    TweenMax.to(cursorIcon, 0.1, { opacity: 0 });
}
