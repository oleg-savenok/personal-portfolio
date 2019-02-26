// External libraries
import $ from 'jquery';

// Options
import options from './options';

// Movement module
import Movement from './_movement';

// State modules
import StateDefault from './_stateDefault';

// Events modules
import EventHover from './_eventHover';
import EventCharacters from './_eventCharacters';
import EventSticky from './_eventSticky';
import EventDrag from './_eventDrag';
import EventIcon from './_eventIcon';
import EventLoader from './_eventLoader';

export default class Cursor {
    constructor() {
        // Target
        this.eventsTarget = options.eventsTarget;

        // Movement
        this.movement = new Movement();

        // States
        this.states = {
            default: new StateDefault(),
        };

        // Events
        this.events = {
            characters: new EventCharacters(this.eventsTarget),
            loader: new EventLoader(),
            sticky: new EventSticky(),
            hover: new EventHover(),
            drag: new EventDrag(),
            icon: new EventIcon(),
        };
    }

    callEvent() {
        return this.events;
    }

    callState() {
        return this.states;
    }

    eventRouter(name, e) {
        const dataset = e.target.dataset.cursorEvents.split(' ');

        if (dataset.indexOf('hover') !== -1) {
            if (name === 'mouseenter') this.events.hover.hover();
            else if (name === 'mouseleave') this.events.hover.unhover();
        }

        if (dataset.indexOf('sticky') !== -1) {
            if (name === 'mousemove') this.events.sticky.move(e);
            else if (name === 'mouseleave') this.events.sticky.return(e);
            else if (name === 'click') this.events.sticky.return(e);
        }

        if (dataset.indexOf('characters') !== -1) {
            if (name === 'mouseenter') this.events.characters.animateLetters(e);
        }

        if (name === '') {
            console.log(e);
        }
    }

    init() {
        /* Init -----------------------------------------*/

        // default cursor
        this.states.default.init();

        // movement
        this.movement.init();

        // splitting links to single characters
        this.events.characters.init();

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
