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
        opacity: { basicMode: opacityBasicMode },
    } = cursorOptions;

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

    setCursorDefault();

    document.addEventListener('mousemove', (e) => {
        getMousePosition(e);
    });

    // Set the position of the magic cursor when changing the position of the real cursor
    TweenMax.ticker.addEventListener('tick', () => {
        TweenMax.to(cursor, 0.1, {
            x: position.x,
            y: position.y,
        });
    });

    projects.on('mouseover', '#projectsSlider', (e) => {
        setCursorIcon(e);
    });

    projects.on('mouseout', '#projectsSlider', (e) => {
        setCursorDefault(e);
    });

    // -----------------------------------------------------------------------------------------------------------------

    $(document).mouseenter(() => {
        TweenMax.to(cursor, 0.1, { opacity: opacityBasicMode, delay: 0.1 });
    });

    $(document).mouseleave(() => {
        TweenMax.to(cursor, 0.1, { opacity: 0 });
    });
}
