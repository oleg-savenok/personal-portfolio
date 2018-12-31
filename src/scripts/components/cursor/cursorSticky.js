import { TweenMax } from 'gsap';
import CustomEase from '../../easing/CustomEase';

import cursorOptions from './cursorOptions';

export default function cursorSticky() {
    let {
        eventTargets: { sticky: cursorEventSticky },
        sticky: {
            degree,
            positionDifference,
            targetParam,
            speed: { start: startSpeed, end: endSpeed },
        },
        scrollTop,
    } = cursorOptions;

    cursorEventSticky.mousemove(function(e) {
        targetParam = this.getBoundingClientRect();
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        positionDifference = {
            x: e.pageX - targetParam.left, // position difference between cursor and target element
            y: e.pageY - targetParam.top,
        };

        TweenMax.to(e.target, startSpeed, {
            x: ((positionDifference.x - targetParam.width / 2) / targetParam.width) * degree,
            y: ((positionDifference.y - targetParam.height / 2 - scrollTop) / targetParam.height) * degree,
            ease: Power2.easeOut,
        });
    });

    cursorEventSticky.mouseleave(function(e) {
        TweenMax.to(e.target, endSpeed, {
            x: 0,
            y: 0,
            ease: CustomEase.create(
                'custom',
                'M0,0 C0.128,0.572 0.118,1.156 0.3,1.156 0.464,1.156 0.464,0.7 0.6,0.7 0.748,0.7 0.698,1 1,1'
            ),
        });
    });
}
