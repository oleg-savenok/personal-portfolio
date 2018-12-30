import { TweenLite } from 'gsap';
import $ from 'jquery';

import cursorOptions from './cursorOptions';

import setCursorIcon from './setCursorIcon';
import setCursorDefault from './setCursorDefault';

export default class Cursor {
    constructor({ cursor, cursorIcon, scrollTop, position, duration: { tick: tickDuration } } = cursorOptions) {
        this.projects = $('#projects');
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.scrollTop = scrollTop;
        this.position = position;
        this.tickDuration = tickDuration;
        this.tickTweenDuration = 0;
        this.cursorHide = true;
    }

    // Cursor move animation
    cursorAnimation(duration) {
        TweenLite.to(this.cursor, duration, {
            x: this.position.x,
            y: this.position.y,
        });
    }

    showCursor() {
        TweenLite.to(this.cursor, 0.1, {
            alpha: 1,
            onComplete: () => {
                this.tickTweenDuration = this.tickDuration;
            },
        });

        this.cursorHide = false;
    }

    hideCursor() {
        TweenLite.set(this.cursor, { alpha: 0 });

        this.tickTweenDuration = 0;
        this.cursorHide = true;
    }

    // Get position of real cursor
    getMousePosition(e) {
        this.position.x = e.pageX;
        this.position.y = e.pageY - this.scrollTop;
    }

    addProjectsListeners() {
        this.projects.on('mouseover', '#projectsSlider', (e) => {
            setCursorIcon(e);
        });

        this.projects.on('mouseout', '#projectsSlider', () => {
            setCursorDefault();
        });
    }

    removeProjectsListeners() {
        this.projects.off('mouseover', '#projectsSlider');
        this.projects.off('mouseout', '#projectsSlider');
    }

    // -----------------------------------------------------------------------------------------------------------------

    init() {
        // Set translate center to cursor
        TweenLite.set([this.cursor, this.cursorIcon], {
            xPercent: -50,
            yPercent: -50,
        });

        TweenLite.ticker.addEventListener('tick', () => {
            this.cursorAnimation(this.tickTweenDuration);
        });

        document.addEventListener('mousemove', (e) => {
            this.getMousePosition(e);

            if (this.cursorHide) {
                this.showCursor();
            }
        });

        document.addEventListener('mouseenter', () => {
            this.showCursor();
        });

        document.addEventListener('mouseleave', () => {
            this.hideCursor();
        });

        setCursorDefault();
    }
}
