import $ from 'jquery';
import { TweenMax } from 'gsap';

export default function InitStickyLinks() {
    const stickyLink = $('.sticky-link');
    const degree = 75; // degree of stickiness
    let targetParam, positionDifference, scrollTop;

    stickyLink.each(function() {
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

    stickyLink.mousemove(function(e) {
        targetParam = this.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        positionDifference = {
            x: e.pageX - targetParam.left, // position difference between cursor and target element
            y: e.pageY - targetParam.top,
        };

        TweenMax.to(e.target, 3, {
            x:
                ((positionDifference.x - targetParam.width / 2) /
                    targetParam.width) *
                degree,
            y:
                ((positionDifference.y - targetParam.height / 2 - scrollTop) /
                    targetParam.height) *
                degree,
            ease: Power2.easeOut,
        });
    });

    stickyLink.mouseleave(function(e) {
        TweenMax.to(e.target, 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
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

    stickyLink.mouseenter(function(e) {
        let letters = Array.from(e.target.children);
        animateLetters(letters);
    });
}
