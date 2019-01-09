import $ from 'jquery';

const options = {
    cursor: $('#cursor'),
    cursorIcon: $('#cursorIcon'),
    eventTargets: {
        hover: $('.cursor--hover'),
        characters: $('.cursor--characters'),
        sticky: $('.cursor--sticky'),
    },
    iconName: '',
    position: { x: 0, y: 0 },
    scrollTop: window.pageYOffset || document.documentElement.scrollTop,
    duration: {
        tick: 0.15,
    },
    size: {
        basic: '0.2rem',
        hover: '0.6rem',
        icon: '0.8rem',
        drag: '0.5',
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
