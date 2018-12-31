// Libraries
import $ from 'jquery';

// Components
import Cursor from './components/cursor/cursor';

// Styles
import '../styles/main.scss';

export default function App(options) {
    // Set theme
    $('body').addClass(`theme--${options.theme}`);

    const cursor = new Cursor();
    cursor.initialize();
}
