import { TweenMax } from 'gsap';

import options from './options';

export default function setCursorDefault() {
    let {
        cursorIcon,
        size: { basic: sizeBasic },
    } = options;

    TweenMax.set(cursor, {
        mixBlendMode: 'difference',
        //backgroundColor: '#fff',
    });

    TweenMax.to(cursor, 0.2, {
        height: sizeBasic,
        width: sizeBasic,
    });

    TweenMax.to(cursorIcon, 0.1, { alpha: 0 });
}
