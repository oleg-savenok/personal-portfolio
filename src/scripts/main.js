import $ from 'jquery';

import Loading from './Loading';
import InitCursor from './InitCursor';
import InitStickyLinks from './InitStickyLinks';
import InitFullPage from './InitFullPage';
import InitProjectsSlider from "./InitProjectsSlider";
import InitTyped from './InitTyped';
import InitTilt from './InitTilt'
import displacement from './displacement';

$(document).ready(function () {
    displacement();
    const loading = new Loading();
    loading.init();
    InitCursor();
    InitStickyLinks();
    InitFullPage();
    InitProjectsSlider();
    setTimeout(function () {
        InitTyped(loading);
    }, 100);
    //InitTilt();
});