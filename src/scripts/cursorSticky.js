import { TweenMax } from 'gsap';

import cursorOptions from './cursorOptions';

export default function cursorSticky() {
    let {
        eventTargets: { sticky: cursorEventSticky },
        sticky: { degree, positionDifference, targetParam },
        scrollTop,
    } = cursorOptions;

    cursorEventSticky.mousemove(function(e) {
        targetParam = this.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        positionDifference = {
            x: e.pageX - targetParam.left, // position difference between cursor and target element
            y: e.pageY - targetParam.top,
        };

        TweenMax.to(e.target, 3, {
            x: ((positionDifference.x - targetParam.width / 2) / targetParam.width) * degree,
            y: ((positionDifference.y - targetParam.height / 2 - scrollTop) / targetParam.height) * degree,
            ease: Power2.easeOut,
        });
    });

    cursorEventSticky.mouseleave(function(e) {
        TweenMax.to(e.target, 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
    });
}
