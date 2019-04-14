// External libraries
import { TweenMax } from 'gsap';

// Options
import options from './options';

export default class Movement {
    constructor({
        cursor,
        position,
        duration: { show: showDuration, hide: hideDuration, tick: tickDuration },
    } = options) {
        // Options
        this.cursor = cursor;
        this.scrollTop = 0;
        this.position = position;
        this.showDuration = showDuration;
        this.hideDuration = hideDuration;
        this.tickDuration = tickDuration;

        // Toggles
        this.cursorHide = true;
    }

    getScrollTopSize() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }

    moveAnimation(e) {
        this.position.x = e.pageX;
        this.position.y = e.pageY - this.scrollTop;

        TweenMax.to(this.cursor, this.cursorHide ? 0 : this.tickDuration, {
            x: this.position.x,
            y: this.position.y,
        });
    }

    hideCursor() {
        TweenMax.to(this.cursor, this.hideDuration, { alpha: 0 });

        this.cursorHide = true;
    }

    showCursor() {
        TweenMax.to(this.cursor, this.showDuration, {
            alpha: 1,
        });

        this.cursorHide = false;
    }

    init() {
        // If the real cursor moving - change position of the magic cursor
        document.addEventListener('mousemove', (e) => {
            this.moveAnimation(e);

            // Show the magic cursor if it is hidden
            if (this.cursorHide) {
                this.showCursor();
            }
        });

        // Hide the cursor if it is leave the document
        document.addEventListener('mouseleave', () => {
            this.hideCursor();
        });

        // Document scroll
        document.addEventListener('scroll', () => {
            this.getScrollTopSize();
        });
    }
}
