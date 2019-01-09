import $ from 'jquery';
import { TweenMax } from 'gsap';

export default class EventCharacters {
    constructor(targets) {
        this.targets = targets;
        this.letters = '';
    }

    animateLetters(e) {
        this.letters = Array.from(e.target.children);

        TweenMax.set(this.letters, { alpha: 0 });
        TweenMax.staggerTo(
            this.letters,
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

    // Split of word into characters
    init() {
        this.targets.each(function() {
            let text = $(this).text();
            for (let i = 0; i < text.length; i++) {
                if (i === 0) {
                    $(this).html('');
                }
                $(this).append(`<span class="character">${text.charAt(i)}</span>`);
            }
        });
    }
}
