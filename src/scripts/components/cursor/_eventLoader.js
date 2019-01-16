import { TweenMax, TimelineLite } from 'gsap';

import options from './options';

export default class EventLoader {
    constructor({ cursor, cursorIcon, cursorSpiner, size: { basic: sizeBasic, hover: sizeHover } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.cursorSpiner = cursorSpiner;
        this.sizeBasic = sizeBasic;
    }

    hiddenIcon() {
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 0,
        });
    }

    start() {
        TweenMax.to(this.cursor, 0.2, {
            height: this.sizeBasic,
            width: this.sizeBasic,
        });

        TweenMax.to(this.cursorSpiner, 0.2, {
            alpha: 1,
            animationPlayState: 'running',
        });

        this.hiddenIcon();
    }

    end() {
        new TimelineLite()
            .to(this.cursorSpiner, 0.5, {
                alpha: 0,
            })
            .set(
                this.cursorSpiner,
                {
                    animationPlayState: 'paused',
                },
                '+=1'
            );
    }
}
