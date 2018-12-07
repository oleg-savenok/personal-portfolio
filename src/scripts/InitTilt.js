import $ from 'jquery';
import './tilt.js';

export default function InitTilt() {

    $('.projects__slider__item').tilt({
        maxTilt: 4,
    });
};