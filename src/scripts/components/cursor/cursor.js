// External libraries
import { TweenLite } from 'gsap';
import $ from 'jquery';

// Options
import options from './options';

// Mode modules
import setCursorIcon from './_setCursorIcon';
import SetCursorDefault from './_setCursorDefault';

// Events modules
import EventHover from './_eventHover';
import EventCharacters from './_eventCharacters';
import EventSticky from './_eventSticky';

export default class Cursor {
    constructor({
        cursor,
        cursorIcon,
        scrollTop,
        position,
        duration: { tick: tickDuration },
        eventTargets: { characters: eventCharactersTarget, hover: eventHoverTarget, sticky: eventStickyTarget },
    } = options) {
        // Options
        this.projects = $('#projects');
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.scrollTop = scrollTop;
        this.position = position;
        this.tickDuration = tickDuration;
        this.tickTweenDuration = 0;
        this.cursorHide = true;

        // Events targets
        this.eventCharactersTarget = eventCharactersTarget;
        this.eventHoverTarget = eventHoverTarget;
        this.eventStickyTarget = eventStickyTarget;

        // States
        this.setCursorDefault = new SetCursorDefault();

        // Events
        this.eventCharacters = new EventCharacters(this.eventCharactersTarget);
        this.eventSticky = new EventSticky();
        this.eventHover = new EventHover();
    }

    moveAnimation(duration) {
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

    getRealMousePosition(e) {
        this.position.x = e.pageX;
        this.position.y = e.pageY - this.scrollTop;
    }

    addProjectsListeners() {
        this.projects.on('mouseover', '#projectsSlider', (e) => {
            setCursorIcon(e);
        });

        this.projects.on('mouseout', '#projectsSlider', () => {
            this.setCursorDefault.apply();
        });
    }

    removeProjectsListeners() {
        this.projects.off('mouseover', '#projectsSlider');
        this.projects.off('mouseout', '#projectsSlider');
    }

    // -----------------------------------------------------------------------------------------------------------------

    init() {
        // Init default cursor
        this.setCursorDefault.init();

        // Init splitting links to single characters
        this.eventCharacters.init();

        // Set ticker listener for change magic cursor
        TweenLite.ticker.addEventListener('tick', () => {
            this.moveAnimation(this.tickTweenDuration);
        });

        // If real cursor moving - change position magic cursor
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

        // Set listener for characters event
        this.eventCharactersTarget.mouseenter((e) => {
            this.eventCharacters.animateLetters(e);
        });

        // Set listeners for hover event
        this.eventHoverTarget
            .on('mouseenter', () => {
                this.eventHover.hover();
            })
            .on('mouseleave', () => {
                this.eventHover.unhover();
            });

        // Set listeners for sticky event
        this.eventStickyTarget
            .mousemove((e) => {
                this.eventSticky.move(e);
            })
            .mouseleave((e) => {
                this.eventSticky.return(e);
            });

        //
        this.addProjectsListeners();
    }
}
