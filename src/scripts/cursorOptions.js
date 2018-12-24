import $ from 'jquery';

const cursorOptions = {
    cursor: $('#cursor'),
    cursorIcon: $('#cursorIcon'),
    eventTargets: {
        medium: $('.cursor--medium'),
        characters: $('.cursor--characters'),
        sticky: $('.cursor--sticky'),
    },
    iconName: '',
    position: { x: 0, y: 0 },
    scrollTop: 0,
    size: {
        basic: '0.2rem',
        medium: '0.6rem',
        icon: '0.8rem',
    },
    opacity: {
        basicMode: 0.25,
        iconMode: 1,
    },
    sticky: {
        degree: window.innerWidth / 28, // degree of stickiness
        targetParam: null,
        positionDifference: null,
        speed: {
            start: 3,
            end: 0.5,
        },
    },
};

export default cursorOptions;
