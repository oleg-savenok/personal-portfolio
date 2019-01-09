// External libraries
import { TweenMax } from 'gsap';

// Options
import options from './options';

export default class Movement {
    constructor({ cursor, scrollTop, position, duration: { tick: tickDuration } } = options) {
        this.cursor = cursor;
        this.scrollTop = scrollTop;
        this.position = position;
        this.tickDuration = tickDuration;
        this.tickTweenDuration = 0;
        this.cursorHide = true;
    }

    getRealMousePosition(e) {
        this.position.x = e.pageX;
        this.position.y = e.pageY - this.scrollTop;
    }

    moveAnimation(duration) {
        TweenMax.to(this.cursor, duration, {
            x: this.position.x,
            y: this.position.y,
        });
    }

    showCursor() {
        TweenMax.to(this.cursor, 0.1, {
            alpha: 1,
            onComplete: () => {
                this.tickTweenDuration = this.tickDuration;
            },
        });

        this.cursorHide = false;
    }

    hideCursor() {
        TweenMax.set(this.cursor, { alpha: 0 });

        this.tickTweenDuration = 0;
        this.cursorHide = true;
    }

    init() {
        // Set ticker listener for change position of magic cursor
        TweenMax.ticker.addEventListener('tick', () => {
            this.moveAnimation(this.tickTweenDuration);
        });

        // If real cursor moving - change position of magic cursor
        document.addEventListener('mousemove', (e) => {
            this.getRealMousePosition(e);

            // Show magic cursor if hidden
            if (this.cursorHide) {
                this.showCursor();
            }
        });

        // If cursor enter document - show
        document.addEventListener('mouseenter', () => {
            this.showCursor();
        });

        // If cursor leave document - hide
        document.addEventListener('mouseleave', () => {
            this.hideCursor();
        });
    }
}
