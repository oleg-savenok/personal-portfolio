import $ from 'jquery';
import { TweenMax } from 'gsap';

export default function cursorSticky() {
    const stickyLink = $('.cursor--sticky');
    const degree = window.innerWidth / 28; // degree of stickiness
    let targetParam, positionDifference, scrollTop;

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
}
