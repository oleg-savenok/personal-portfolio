import { TweenMax } from 'gsap';

import options from './options';

export default class EventIcon {
    constructor({ cursor, cursorIcon, size: { icon: sizeIcon } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.iconName = '';
        this.sizeIcon = sizeIcon;
    }

    setIcon(e) {
        this.iconName = e.target.dataset.icon || e.currentTarget.dataset.icon;
        this.cursorIcon.html(this.iconName);

        if (this.iconName === 'unfold_more') {
            TweenMax.set(this.cursorIcon, { rotation: 90 });
        } else {
            TweenMax.set(this.cursorIcon, { rotation: 0 });
        }

        TweenMax.to(this.cursorIcon, 0.2, {
            alpha: 1,
        });
    }

    setMix() {
        TweenMax.set(this.cursor, {
            mixBlendMode: 'normal',
        });
    }

    setSize() {
        TweenMax.to(this.cursor, 0.2, {
            height: this.sizeIcon,
            width: this.sizeIcon,
            alpha: 1,
        });
    }

    start(e) {
        this.setIcon(e);
        this.setMix();
        this.setSize();
    }
}
