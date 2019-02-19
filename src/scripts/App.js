// Libraries
import $ from 'jquery';

// Router
import Router from './router/router';

// Pages
import Index from './pages/home/home';
import About from './pages/about';
import Contact from './pages/contact';

// Components
import Cursor from './components/cursor/cursor';
import Preloader from './components/preloader/preloader';

import consoleMessage from './components/consoleMessage/consoleMessage';
import visibilityTab from './components/visibilityTab/visibilityTab';
import preventDrag from './components/preventDrag/preventDrag';

// Styles
import '../styles/main.scss';

export default class App {
    constructor(options) {
        this.options = options;
        this.touch = 'ontouchstart' in document.documentElement;

        // Preloader
        this.preloader = new Preloader();

        // Cursor
        this.cursor = new Cursor();

        // Pages
        this.pages = {
            index: new Index(),
            about: new About(),
            contact: new Contact(),
        };

        // Router
        this.router = new Router(this.pages, this.preloader);

        // Components
        this.consoleMessage = consoleMessage;
        this.visibilityTab = visibilityTab;
        this.preventDrag = preventDrag;

        // Options
        this.pageName = $('body').attr('data-page-name');
    }

    setTheme() {
        $('body').addClass(`theme--${this.options.theme}`);
    }

    initCursor() {
        if (!this.touch) {
            this.cursor.init();
        }
    }

    render() {
        // Set color theme
        this.setTheme();

        // Init magic cursor if the device is not touch
        this.initCursor();

        // Init change page title when changing tabs
        this.visibilityTab();

        // Prevent dragging links
        this.preventDrag();

        // Output copyright message in console
        this.consoleMessage();

        // Init page
        this.pages[this.pageName].render();

        // Init router
        this.router.init();
    }
}
