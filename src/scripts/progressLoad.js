import $ from 'jquery';
import { TweenLite } from 'gsap';

export default function progressLoad() {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    let progress = 0;

    $('.projects__slider__item a').click(function(e) {
        while (progress < 60) {
            TweenLite.to('#progress', 0.5, {
                width: `${progress}%`,
                delay: progress / 25,
            });

            console.log(progress / 25);

            progress += getRandomNumber(1, 5);
            if (progress > 60) {
                TweenLite.to('#progress', 0.5, {
                    width: '100%',
                    ease: Power1.easeInOut,
                    delay: progress / 25,
                });
            }
        }
    });
}
