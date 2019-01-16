// External libraries
import $ from 'jquery';

// Options
import options from './options';

// Movement module
import Movement from './_movement';

// State modules
import StateDefault from './_stateDefault';
import StateIcon from './_eventIcon';

// Events modules
import EventHover from './_eventHover';
import EventCharacters from './_eventCharacters';
import EventSticky from './_eventSticky';

export default class Cursor {
    constructor() {
        // Target
        this.eventsTarget = options.eventsTarget;

        // Movement
        this.movement = new Movement();

        // States
        this.stateDefault = new StateDefault();

        // Events
        this.eventCharacters = new EventCharacters(this.eventsTarget);
        this.eventSticky = new EventSticky();
        this.eventHover = new EventHover();
    }

    eventRouter(name, e) {
        const dataset = e.target.dataset.cursorEvents.split(' ');

        if (dataset.indexOf('hover') !== -1) {
            if (name === 'mouseenter') this.eventHover.hover();
            else if (name === 'mouseleave') this.eventHover.unhover();
        }

        if (dataset.indexOf('sticky') !== -1) {
            if (name === 'mousemove') this.eventSticky.move(e);
            else if (name === 'mouseleave') this.eventSticky.return(e);
            else if (name === 'click') this.eventSticky.return(e);
        }

        if (dataset.indexOf('characters') !== -1) {
            if (name === 'mouseenter') this.eventCharacters.animateLetters(e);
        }
    }

    init() {
        /* Init -----------------------------------------*/

        // default cursor
        this.stateDefault.init();

        // movement
        this.movement.init();

        // splitting links to single characters
        this.eventCharacters.init();

        /* Set Listeners --------------------------------*/

        // for hover event
        this.eventsTarget
            .on('mouseenter', (e) => {
                this.eventRouter('mouseenter', e);
            })
            .on('mousemove', (e) => {
                this.eventRouter('mousemove', e);
            })
            .on('mouseleave', (e) => {
                this.eventRouter('mouseleave', e);
            })
            .on('click', (e) => {
                this.eventRouter('click', e);
            });
    }
}
