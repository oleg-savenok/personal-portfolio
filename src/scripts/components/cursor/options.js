import $ from 'jquery';

const options = {
    cursor: $('#cursor'),
    cursorIcon: $('#cursorIcon'),
    cursorSpiner: $('.cursor__spiner'),
    eventsTarget: $('[data-cursor-events]'),
    position: { x: 0, y: 0 },
    duration: {
        show: '0.2',
        hide: '0.1',
        tick: 0.1,
    },
    size: {
        basic: '0.2rem',
        hover: '0.6rem',
        icon: '0.8rem',
        drag: '0.4rem',
    },
    sticky: {
        degree: (window.innerWidth + window.innerHeight) / 2 / 20, // degree of stickiness
        targetParam: null,
        positionDifference: null,
        speed: {
            start: 3,
            end: 0.6,
        },
    },
};

export default options;
