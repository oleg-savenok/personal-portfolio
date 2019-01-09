import $ from 'jquery';
import { TweenMax } from 'gsap';

import options from './options';

export default class EventDrag {
    constructor({ cursor, cursorIcon, size: { icon: sizeIcon, drag: sizeDrag } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.sizeDrag = sizeDrag;
        this.sizeIcon = sizeIcon;
    }

    drag() {
        TweenMax.to(this.cursor, 0.2, {
            scale: this.sizeDrag,
            height: this.sizeIcon,
            width: this.sizeIcon,
        });
        TweenMax.to(this.cursorIcon, 0.01, {
            alpha: 0,
        });
        this.cursorIcon.html('');
    }

    undrag() {
        const hoverLink = $('.projects__slider__item a:hover');

        TweenMax.to(this.cursor, 0.2, {
            scale: 1,
        });

        TweenMax.to(this.cursorIcon, 0.01, {
            alpha: 1,
        });

        if (hoverLink.length) {
            this.cursorIcon.html(hoverLink.attr('data-icon'));
            TweenMax.set(this.cursorIcon, { rotation: 0 });
        } else {
            this.cursorIcon.html('unfold_more');
            TweenMax.set(this.cursorIcon, { rotation: 90 });
        }
    }
}
