import $ from 'jquery';

// Modules
import firstLoading from './loading/firstLoading';
import Cursor from './cursor/cursor';
import cursorMedium from './cursor/cursorMedium';
import cursorSticky from './cursor/cursorSticky';
import cursorCharacters from './cursor/cursorCharacters';
import preventDrag from './preventDrag';
import projectsSlider from './projectsSlider';
import projectLoading from './projectLoading';
import visibilityTab from './visibilityTab';
import consoleMessage from './consoleMessage';
// Router
import routerDefine from './routerDefine';

// Styles
import '../styles/main.scss';

$(document).ready(function() {
    const pageName = $('body').attr('id');

    // Initial call
    firstLoading(false);

    const cursor = new Cursor();
    cursor.init();

    cursorMedium();
    cursorSticky();
    cursorCharacters();
    preventDrag();
    visibilityTab();
    projectLoading();

    // Initial router
    routerDefine();

    if (pageName === 'home') {
        projectsSlider();
        cursor.addProjectsListeners();
    }

    consoleMessage();
});

// Webpack Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
