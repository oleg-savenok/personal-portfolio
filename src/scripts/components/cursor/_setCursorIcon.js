import { TweenMax } from 'gsap';

import options from './options';

export default function setCursorIcon(e) {
    let {
        cursorIcon,
        iconName,
        size: { icon: sizeIcon },
    } = options;

    iconName = e.target.dataset.icon || e.currentTarget.dataset.icon;

    if (iconName === 'unfold_more') {
        TweenMax.set(cursorIcon, {
            rotation: 90,
        });
    } else {
        TweenMax.set(cursorIcon, {
            rotation: 0,
        });
    }

    cursorIcon.html(iconName);

    TweenMax.set(cursor, {
        mixBlendMode: 'normal',
        //backgroundColor: '#101010',
    });

    TweenMax.to(cursor, 0.2, {
        height: sizeIcon,
        width: sizeIcon,
        alpha: 1,
    });

    TweenMax.to(cursorIcon, 0.2, { alpha: 1 }, 0.2);
}
