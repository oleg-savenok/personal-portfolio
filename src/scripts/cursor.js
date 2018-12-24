import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

export default function cursor() {
    const $document = $(document);
    const cursor = $('#cursor');
    const cursorIcon = $('.cursor__icon');
    const position = { x: 0, y: 0 };
    let scrollTop;
    let iconName;

    // Set translate center to cursor
    TweenMax.set([cursor, cursorIcon], {
        xPercent: -50,
        yPercent: -50,
    });

    function getMousePosition(e) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        position.x = e.pageX;
        position.y = e.pageY - scrollTop;
    }

    function setIconCursor(e) {
        iconName = e.target.dataset.icon || e.currentTarget.dataset.icon;
        if (iconName === 'unfold_more') {
            TweenMax.set(cursorIcon, {
                rotation: 90,
            });
        } else {
            TweenMax.set(cursorIcon, {
                rotation: 0
            });
        }
        cursorIcon.html(iconName);

        TweenMax.to(cursor, 0.2, {
            height: '.8rem',
            width: '.8rem',
            opacity: '1',
        });

        TweenMax.to(cursorIcon, 0.2, { opacity: 1 }, 0.2);
    }

    function setDefaultCursor() {
        TweenMax.to(cursor, 0.2, {
            height: '.2rem',
            width: '.2rem',
            opacity: 0.25,
        });

        TweenMax.to(cursorIcon, 0.1, { opacity: 0 });
    }

    setDefaultCursor();

    document.addEventListener('mousemove', (e) => {
        getMousePosition(e);
    });

    TweenMax.ticker.addEventListener('tick', () => {
        TweenMax.to(cursor, 0.1, {
            x: position.x,
            y: position.y,
        });
    });

    $document.on('mouseover', '#projectsSlider', (e) => {
        setIconCursor(e);
    });

    $document.on('mouseout', '#projectsSlider', (e) => {
        setDefaultCursor(e);
    });

    // $document.on('mouseover', '.projects__slider__item', (e) => {
    //     setDefaultCursor(e);
    // });
}
