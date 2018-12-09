import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

export default function InitCursor() {
    const $document = $(document);
    const cursor = $('#cursor');
    const cursorIcon = $('.cursor__icon');
    const cursorDrugIcon = $('.cursor__icon--drag');
    const linksNormal = $('a.cursor-medium');
    const position = { x: 0, y: 0 };
    let scrollTop;
    let iconName;

    // Set translate center to cursor
    TweenMax.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    function getMousePosition(e) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        position.x = e.pageX;
        position.y = e.pageY - scrollTop;
    }

    function setIconCursor(e) {
        iconName = e.target.dataset.icon;
        cursorIcon.html(iconName);

        TweenMax.to(cursor, 0.2, {
            height: '.8rem',
            width: '.8rem',
            opacity: '1',
        });

        TweenMax.to(cursorDrugIcon, 0.2, { opacity: 0 });
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

    document.addEventListener('mousemove', (e) => {
        getMousePosition(e);
    });

    TweenMax.ticker.addEventListener('tick', () => {
        TweenMax.to(cursor, 0.1, {
            x: position.x,
            y: position.y,
        });
    });

    linksNormal
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

    $document.on('mouseenter', '[data-icon]', (e) => {
        setIconCursor(e);
    });

    $document.on('mouseleave', '[data-icon]', () => {
        setDefaultCursor();
    });
}
