import {TweenMax} from 'gsap';
import $ from 'jquery';

export default function InitCursor() {

    const cursor = document.getElementById("cursor");
    const position = {x: 0, y: 0};
    let scrollTop;

    TweenMax.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    function setMousePosition(e) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        position.x = e.pageX;
        position.y = e.pageY - scrollTop;

        TweenMax.set(cursor, {
            opacity: 1,
        });
    }

    const mouseMoveEvent = new Event('mousemove');

    document.addEventListener("mousemove", function (e) {
        setMousePosition(e);
    });

    document.dispatchEvent(mouseMoveEvent);

    TweenMax.ticker.addEventListener("tick", function () {
        TweenMax.to(cursor, .1, {
            x: position.x,
            y: position.y,
        });
    });

    const linksNormal = $('a.cursor-medium');

    linksNormal.hover(function (e) {
        TweenMax.to(cursor, .2, {
            scale: 3
        });
    }, function () {
        TweenMax.to(cursor, .2, {
            scale: 1
        });
    });

    const linkIcon = $('[class^="cursor-icon"]');
    const cursorIcon = $('.cursor__icon');
    let iconArrayClass,iconName;

    linkIcon.hover(function (e) {
        iconArrayClass = e.target.classList[0].split('-');
        iconName = iconArrayClass[iconArrayClass.length - 1];
        cursorIcon.html(iconName);

        TweenMax.to(cursor, .2, { height: '.8rem', width: '.8rem', mixBlendMode: 'normal' });
        TweenMax.to(cursorIcon, .2, { opacity: 1 });
    }, function () {
        TweenMax.to(cursor, .2, { height: '.2rem', width: '.2rem', mixBlendMode: 'difference' });
        TweenMax.to(cursorIcon, .2, { opacity: 0 });
    });

};