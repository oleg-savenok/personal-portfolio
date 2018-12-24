import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function cursorIcon(e) {
    let {
        cursorIcon,
        iconName,
        size: { icon: sizeIcon },
        opacity: { iconMode: opacityIconMode },
    } = cursorOptions;

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

    TweenMax.to(cursor, 0.2, {
        height: sizeIcon,
        width: sizeIcon,
        opacity: opacityIconMode,
    });

    TweenMax.to(cursorIcon, 0.2, { opacity: 1 }, 0.2);
}
