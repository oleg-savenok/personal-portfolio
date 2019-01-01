import { TweenMax } from 'gsap';

import options from './options';

export default class StateDefault {
    constructor({ cursor, cursorIcon, size: { basic: sizeBasic } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.sizeBasic = sizeBasic;
    }

    setCenter() {
        TweenMax.set([this.cursor, this.cursorIcon], {
            xPercent: -50,
            yPercent: -50,
        });
    }

    setColor() {
        TweenMax.set(cursor, {
            mixBlendMode: 'difference',
        });
    }

    setSize() {
        TweenMax.to(cursor, 0.2, {
            height: this.sizeBasic,
            width: this.sizeBasic,
        });
    }

    disableIcon() {
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 0,
        });
    }

    apply() {
        this.setColor();
        this.setSize();
        this.disableIcon();
    }

    init() {
        this.setCenter();
        this.apply();
    }
}
