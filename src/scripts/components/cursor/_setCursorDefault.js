import { TweenMax } from 'gsap';

import options from './options';

export default class SetCursorDefault {
    constructor({ cursor, cursorIcon, size: { basic: sizeBasic } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.sizeBasic = sizeBasic;
    }

    apply() {
        // Set Color
        TweenMax.set(cursor, {
            mixBlendMode: 'difference',
            //backgroundColor: '#fff',
        });

        // Set Size
        TweenMax.to(cursor, 0.2, {
            height: this.sizeBasic,
            width: this.sizeBasic,
        });

        // Disable icon
        TweenMax.to(this.cursorIcon, 0.1, { alpha: 0 });
    }

    init() {
        // Set translate center to cursor
        TweenMax.set([this.cursor, this.cursorIcon], {
            xPercent: -50,
            yPercent: -50,
        });

        this.apply();
    }
}
