import { TweenMax } from 'gsap';

import options from './options';

export default class EventHover {
    constructor({ cursor, cursorIcon, size: { basic: sizeBasic, hover: sizeHover } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.sizeBasic = sizeBasic;
        this.sizeHover = sizeHover;
    }

    hiddenIcon() {
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 0,
        });
    }

    hover() {
        TweenMax.to(this.cursor, 0.2, {
            height: this.sizeHover,
            width: this.sizeHover,
        });

        this.hiddenIcon();
    }

    unhover() {
        TweenMax.to(this.cursor, 0.2, {
            height: this.sizeBasic,
            width: this.sizeBasic,
        });

        this.hiddenIcon();
    }
}
