import { TweenMax } from 'gsap';

import options from './options';

export default class EventHover {
    constructor({ cursor, size: { basic: sizeBasic, hover: sizeHover } } = options) {
        this.cursor = cursor;
        this.sizeBasic = sizeBasic;
        this.sizeHover = sizeHover;
    }

    hover() {
        TweenMax.to(cursor, 0.2, {
            height: this.sizeHover,
            width: this.sizeHover,
        });
    }

    unhover() {
        TweenMax.to(cursor, 0.2, {
            height: this.sizeBasic,
            width: this.sizeBasic,
        });
    }
}
