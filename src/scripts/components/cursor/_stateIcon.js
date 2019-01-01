import { TweenMax } from 'gsap';

import options from './options';

export default class StateIcon {
    constructor({ cursorIcon, iconName, size: { icon: sizeIcon } } = options) {
        this.cursorIcon = cursorIcon;
        this.iconName = iconName;
        this.sizeIcon = sizeIcon;
    }

    apply(e) {
        this.iconName = e.target.dataset.icon || e.currentTarget.dataset.icon;

        if (this.iconName === 'unfold_more') {
            TweenMax.set(this.cursorIcon, {
                rotation: 90,
            });
        } else {
            TweenMax.set(this.cursorIcon, {
                rotation: 0,
            });
        }

        this.cursorIcon.html(this.iconName);

        TweenMax.set(cursor, {
            mixBlendMode: 'normal',
            //backgroundColor: '#101010',
        });

        TweenMax.to(cursor, 0.2, {
            height: this.sizeIcon,
            width: this.sizeIcon,
            alpha: 1,
        });

        TweenMax.to(this.cursorIcon, 0.2, { alpha: 1 }, 0.2);
    }
}
