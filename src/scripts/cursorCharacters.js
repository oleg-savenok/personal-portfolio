import $ from 'jquery';
import { TweenMax } from 'gsap';

export default function InitStickyLinks() {
    const cursorCharacters = $('.cursor--characters');

    cursorCharacters.each(function() {
        let text = $(this).text();
        for (var i = 0; i < text.length; i++) {
            if (i === 0) {
                $(this).html('');
            }
            $(this).append(
                '<span class="letter">' + text.charAt(i) + '</span>'
            );
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

    cursorCharacters.mouseenter(function(e) {
        let letters = Array.from(e.target.children);
        animateLetters(letters);
    });
}
