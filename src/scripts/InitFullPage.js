import $ from 'jquery';
import { fullpage } from 'fullpage.js';

export default function InitFullPage() {
    $('#fullpage').fullpage({
        //options here
        sectionSelector: '.fullpage__section',
        anchors: ['hello', 'projects'],

        onLeave: function(origin, destination, direction) {
            if (destination === 2) {
                $('#footerEventButton').addClass('is-active-explore');
            } else {
                $('#footerEventButton').removeClass('is-active-explore');
            }
        },
    });

    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
}
