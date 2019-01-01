import { TweenMax } from 'gsap';

import options from './options';

export default class StateIcon {
    constructor({ cursor, cursorIcon, iconName, size: { icon: sizeIcon } } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.iconName = iconName;
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
            delay: 0.2,
        });
    }

    setColor() {
        TweenMax.to(this.cursor, {
            mixBlendMode: 'normal',
            //backgroundColor: '#101010',
        });
    }

    setSize() {
        TweenMax.to(this.cursor, 0.2, {
            height: this.sizeIcon,
            width: this.sizeIcon,
            alpha: 1,
        });
    }

    apply(e) {
        this.setIcon(e);
        this.setColor();
        this.setSize();
    }
}
