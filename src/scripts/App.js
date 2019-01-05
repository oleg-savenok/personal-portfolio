// Libraries
import $ from 'jquery';

// Router
import Router from './router/router';

// Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

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

        // Router
        this.router = new Router();

        // Pages
        this.home = new Home();
        this.about = new About();
        this.contact = new Contact();

        // Components
        this.cursor = new Cursor();
        this.preloader = new Preloader();

        this.consoleMessage = consoleMessage;
        this.visibilityTab = visibilityTab;
        this.preventDrag = preventDrag;

        this.pageName = '';
    }

    setTheme() {
        $('body').addClass(`theme--${this.options.theme}`);
    }

    initCursor() {
        if (!this.touch) {
            this.cursor.init();
        }
    }

    initPage() {
        this.pageName = $('body').attr('data-page-name');
        this[this.pageName].init();
    }

    render() {
        // Set color theme
        this.setTheme();

        // Init preloader for first page loading animation
        this.preloader.firstLoading(true);

        // Init magic cursor if the device is not touch
        this.initCursor();

        // Init change page title when changing tabs
        this.visibilityTab();

        // Prevent dragging links
        this.preventDrag();

        // Output copyright message in console
        this.consoleMessage();

        // Init page
        this.initPage();

        // Init router
        this.router.init();
    }
}
