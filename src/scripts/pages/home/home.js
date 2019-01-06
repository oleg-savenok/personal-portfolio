import $ from 'jquery';
import { TweenMax } from 'gsap';

import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.css';
import swiperOptions from './swiperOptions';

export default class Home {
    constructor() {
        this.swiperOptions = swiperOptions;

        this.swiper = null;
    }

    addSwiperListeners() {
        this.swiper.on('touchMove', () => {
            console.log('touchMove');
        });

        this.swiper.on('touchStart', () => {
            console.log('touchStart');
        });

        this.swiper.on('touchEnd', (e) => {
            console.log('touchEnd');
        });
    }

    initSwiper() {
        setTimeout(() => {
            this.swiper = new Swiper(document.getElementById('projectsSlider'), this.swiperOptions);
            this.addSwiperListeners();
        }, 100);
    }

    remove() {
        console.log('Home page removing!!!');
    }

    render() {
        console.log('Home page working!!!');
        this.initSwiper();
    }
}
