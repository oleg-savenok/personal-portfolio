import { TweenMax } from 'gsap';
import $ from 'jquery';

export default function cursorMedium() {
    const cursor = $('#cursor');
    const cursorMedium = $('.cursor--medium');

    cursorMedium
        .on('mouseenter', () => {
            TweenMax.to(cursor, 0.2, {
                scale: 3,
            });
        })
        .on('mouseleave', () => {
            TweenMax.to(cursor, 0.2, {
                scale: 1,
            });
        });
}
