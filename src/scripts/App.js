// Libraries
import $ from 'jquery';

// Components
import Cursor from './components/cursor/cursor';

import projectLoading from './components/projectsLoading/projectLoading';
import consoleMessage from './components/consoleMessage/consoleMessage';
import visibilityTab from './components/visibilityTab/visibilityTab';
import preventDrag from './components/preventDrag/preventDrag';

/* -------------------------------------------- temporary */
import Preloader from './components/preloader/preloader';

// Styles
import '../styles/main.scss';

export default function App(options) {
    // Set color theme
    $('body').addClass(`theme--${options.theme}`);

    // Init magic cursor if the device is not touch
    const touch = 'ontouchstart' in document.documentElement;

    if (!touch) {
        new Cursor().init();
    }

    /* ------------------ temporary */
    new Preloader().firstLoading(true);

    // Init visibility tab module
    visibilityTab();

    // Prevent links draggable
    preventDrag();

    // Add projects loading line
    projectLoading();

    // Add copyright console message
    consoleMessage();
}
