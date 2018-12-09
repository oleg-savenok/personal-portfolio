import $ from 'jquery';

import Loading from './Loading';
import InitCursor from './InitCursor';
import InitStickyLinks from './InitStickyLinks';
import InitProjectsSlider from './InitProjectsSlider';
import InitTyped from './InitTyped';
import displacement from './displacement';

$(document).ready(function() {
    displacement();
    //const loading = new Loading();
    //loading.init();
    InitCursor();
    InitStickyLinks();
    //InitFullPage();
    InitProjectsSlider();
    // setTimeout(function () {
    //     InitTyped(loading);
    // }, 100);

    const style = [
        'background: #fff',
        'color: #000',
        'padding: 10px 20px',
        'line-height: 35px',
        'border: 2px solid #000',
    ].join(';');
    console.log('%c Coded with ♥️ by Oleg Savenok', style);
});
