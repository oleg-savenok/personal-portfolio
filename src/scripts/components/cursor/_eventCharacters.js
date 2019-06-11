import { TweenMax } from 'gsap';

import splitToCharacters from '../../functions/splitToCharacters';

export default class EventCharacters {
    constructor(targets) {
        this.targets = targets;
    }

    animateLetters(e) {
        const letters = Array.from(e.target.children);

        TweenMax.set(letters, { alpha: 0 });
        TweenMax.staggerTo(
            letters,
            0.3,
            {
                alpha: 1,
                y: '0%',
                startAt: { y: '40%' },
                ease: Power2.easeOut,
            },
            0.04
        );
    }

    init() {
        this.targets.each((index, item) => {
            if (item.dataset.cursorEvents.indexOf('characters') !== -1) {
                splitToCharacters(item);
            }
        });
    }
}
