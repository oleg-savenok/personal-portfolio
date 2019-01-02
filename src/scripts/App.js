// Libraries
import $ from 'jquery';

// Components
import Cursor from './components/cursor/cursor';

// -----------------------------------------------
import firstLoading from './loading/firstLoading';

// Styles
import '../styles/main.scss';

export default function App(options) {
    // Set theme
    $('body').addClass(`theme--${options.theme}`);

    // Init magic cursor if the device is not touch
    const touch = 'ontouchstart' in document.documentElement;

    if (!touch) {
        new Cursor().init();
    }

    // -----------------
    firstLoading(true);
}
