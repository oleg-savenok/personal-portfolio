import { TweenMax } from 'gsap';

import options from './options';

export default class EventDrag {
    constructor({ cursor, cursorIcon, size: { drug: sizeDrug } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.sizeDrug = sizeDrug;
    }

    drug() {
        TweenMax.to(this.cursor, 0.2, {
            scale: this.sizeDrug,
        });
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 0,
        });
    }

    undrug() {
        TweenMax.to(this.cursor, 0.2, {
            scale: 1,
        });
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 1,
        });
    }
}
