import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function setCursorDefault() {
    let {
        cursorIcon,
        size: { basic: sizeBasic },
    } = cursorOptions;

    TweenMax.set(cursor, {
        mixBlendMode: 'difference',
        backgroundColor: '#fff',
    });

    TweenMax.to(cursor, 0.2, {
        height: sizeBasic,
        width: sizeBasic,
    });

    TweenMax.to(cursorIcon, 0.1, { alpha: 0 });
}
