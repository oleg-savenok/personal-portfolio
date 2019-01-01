// External libraries
import { TweenLite } from 'gsap';
import $ from 'jquery';

// Options
import options from './options';

// Movement module
import Movement from './_movement';

// State modules
import setCursorIcon from './_setCursorIcon';
import SetCursorDefault from './_setCursorDefault';

// Events modules
import EventHover from './_eventHover';
import EventCharacters from './_eventCharacters';
import EventSticky from './_eventSticky';

export default class Cursor {
    constructor({
        eventTargets: { characters: eventCharactersTarget, hover: eventHoverTarget, sticky: eventStickyTarget },
    } = options) {
        // Options
        this.projects = $('#projects');

        // Events targets
        this.eventCharactersTarget = eventCharactersTarget;
        this.eventHoverTarget = eventHoverTarget;
        this.eventStickyTarget = eventStickyTarget;

        // Movement
        this.movement = new Movement();

        // States
        this.setCursorDefault = new SetCursorDefault();

        // Events
        this.eventCharacters = new EventCharacters(this.eventCharactersTarget);
        this.eventSticky = new EventSticky();
        this.eventHover = new EventHover();
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

    init() {
        /* Init -----------------------------------------*/

        // default cursor
        this.setCursorDefault.init();

        // movement
        this.movement.init();

        // splitting links to single characters
        this.eventCharacters.init();

        /* Set Listeners --------------------------------*/

        // for characters event
        this.eventCharactersTarget.mouseenter((e) => {
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
            .mousemove((e) => {
                this.eventSticky.move(e);
            })
            .mouseleave((e) => {
                this.eventSticky.return(e);
            });

        // for projects
        //this.addProjectsListeners();
    }
}
