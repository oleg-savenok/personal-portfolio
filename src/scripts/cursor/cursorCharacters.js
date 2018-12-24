import $ from 'jquery';
import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function InitStickyLinks() {
    let {
        eventTargets: { characters: cursorEventCharacters },
    } = cursorOptions;

    // Split of word into characters
    cursorEventCharacters.each(function() {
        let text = $(this).text();
        for (let i = 0; i < text.length; i++) {
            if (i === 0) {
                $(this).html('');
            }
            $(this).append(`<span class="character">${text.charAt(i)}</span>`);
        }
    });

    function animateLetters(targets) {
        TweenMax.set(targets, { opacity: 0 });
        TweenMax.staggerTo(
            targets,
            1.5,
            {
                ease: Elastic.easeOut.config(1, 0.4),
                startAt: { y: '40%' },
                y: '0%',
                opacity: 1,
            },
            0.03
        );
    }

    cursorEventCharacters.mouseenter(function(e) {
        let letters = Array.from(e.target.children);
        animateLetters(letters);
    });
}
