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
            1.5,
            {
                ease: Elastic.easeOut.config(1, 0.4),
                startAt: { y: '40%' },
                y: '0%',
                alpha: 1,
            },
            0.03
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
