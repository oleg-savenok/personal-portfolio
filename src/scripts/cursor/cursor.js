import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

import cursorOptions from './cursorOptions';

import setCursorIcon from './setCursorIcon';
import setCursorDefault from './setCursorDefault';

export default function cursor() {
    const projects = $('#projects');

    let {
        cursor,
        cursorIcon,
        position,
        scrollTop,
        duration: { tick: tickDuration },
    } = cursorOptions;

    let tickTweenDuration = 0;

    function tickTween(duration) {
        TweenMax.to(cursor, duration, {
            x: position.x,
            y: position.y,
        }).eventCallback('onComplete', () => {
            if (tickTweenDuration === 0) {
                tickTweenDuration = tickDuration;
            }
        });
    }

    // Set translate center to cursor
    TweenMax.set([cursor, cursorIcon], {
        xPercent: -50,
        yPercent: -50,
    });

    // Get position of real cursor
    function getMousePosition(e) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        position.x = e.pageX;
        position.y = e.pageY - scrollTop;
    }

    setCursorDefault('init');

    document.addEventListener('mousemove', (e) => {
        getMousePosition(e);
    });

    // Set the position of the magic cursor when changing the position of the real cursor
    TweenMax.ticker.addEventListener('tick', () => {
        tickTween(tickTweenDuration);
    });

    projects.on('mouseover', '#projectsSlider', (e) => {
        setCursorIcon(e);
    });

    projects.on('mouseout', '#projectsSlider', () => {
        setCursorDefault();
    });

    // -----------------------------------------------------------------------------------------------------------------

    $(document).mouseenter(() => {
        TweenMax.set(cursor, { alpha: 1 });
        setTimeout(() => {
            tickTweenDuration = tickDuration;
        }, 100);
    });

    $(document).mouseleave(() => {
        TweenMax.set(cursor, { alpha: 0 });
        tickTweenDuration = 0;
    });
}
