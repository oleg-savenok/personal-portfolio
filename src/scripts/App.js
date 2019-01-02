// Libraries
import $ from 'jquery';

// Components
import Cursor from './components/cursor/cursor';
import Preloader from './components/preloader/preloader';

import consoleMessage from './components/consoleMessage/consoleMessage';
import visibilityTab from './components/visibilityTab/visibilityTab';
import preventDrag from './components/preventDrag/preventDrag';

// Pages
import Home from './pages/home/home';

// Styles
import '../styles/main.scss';

export default class App {
    constructor(options) {
        this.options = options;
        this.touch = 'ontouchstart' in document.documentElement;

        this.cursor = new Cursor();
        this.preloader = new Preloader();

        this.visibilityTab = visibilityTab;
        this.preventDrag = preventDrag;
        this.consoleMessage = consoleMessage;

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

        switch (this.pageName) {
            case 'home': {
                new Home().init();
                break;
            }
        }
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
    }
}
