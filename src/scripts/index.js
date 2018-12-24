import $ from 'jquery';

// Modules
import cursor from './cursor/cursor';
import cursorMedium from './cursor/cursorMedium';
import cursorSticky from './cursor/cursorSticky';
import cursorCharacters from './cursor/cursorCharacters';
import preventDrag from './preventDrag';
import projectsSlider from './projectsSlider';
import visibilityTab from './visibilityTab';
import consoleMessage from './consoleMessage';

// Styles
import '../styles/main.scss';

$(document).ready(function() {
    const pageName = $('body').attr('id');

    // Initial call
    cursor();
    cursorMedium();
    cursorSticky();
    cursorCharacters();
    preventDrag();
    visibilityTab();

    if (pageName === 'home-page') {
        projectsSlider();
    }

    consoleMessage();
});

// Webpack Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
