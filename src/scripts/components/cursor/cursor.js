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
    constructor({
        eventTargets: { characters: eventCharactersTarget, hover: eventHoverTarget, sticky: eventStickyTarget },
    } = options) {
        // Events targets
        this.eventCharactersTarget = eventCharactersTarget;
        this.eventHoverTarget = eventHoverTarget;
        this.eventStickyTarget = eventStickyTarget;

        // Movement
        this.movement = new Movement();

        // States
        this.stateDefault = new StateDefault();
        this.stateIcon = new StateIcon();

        // Events
        this.eventCharacters = new EventCharacters(this.eventCharactersTarget);
        this.eventSticky = new EventSticky();
        this.eventHover = new EventHover();
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

        // for characters event
        this.eventCharactersTarget.on('mouseenter', (e) => {
            this.eventCharacters.animateLetters(e);
        });

        // for hover event
        this.eventHoverTarget
            .on('mouseenter', () => {
                this.eventHover.hover();
            })
            .on('mouseleave', () => {
                this.eventHover.unhover();
            });

        // for sticky event
        this.eventStickyTarget
            .on('mousemove', (e) => {
                this.eventSticky.move(e);
            })
            .on('mouseleave', (e) => {
                this.eventSticky.return(e);
            });
    }
}
