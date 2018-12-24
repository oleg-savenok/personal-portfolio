import $ from 'jquery';
import Typed from 'typed.js';
import Loading from './Loading';

export default function InitTyped(callback) {
    const typed = new Typed('#greeting span', {
        stringsElement: '#gretting',
        strings: [
            '',
            'Hello, my name is Oleg Savenok,<br> I am <u>ui designer</u>',
            'Hello, my name is Oleg Savenok,<br> I am <u>front-end developer</u> and <br> <u>ui designer</u> from Kiev, Ukraine.',
        ],
        //
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 0,
        startDelay: 0,
        //
        // typeSpeed: 25,
        // backSpeed: 20,
        // backDelay: 1000,
        // startDelay: 800,
        //
        smartBackspace: true,
        loop: false,
        onComplete: function() {
            setTimeout(function() {
                $('.typed-cursor').hide();
            }, 800);
            callback.finish();
        },
    });
}
