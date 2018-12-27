import setDefaultValues from './defaultValues';
import setDefaultState from './defaultState';
import routeLoading from './loader';

import routerLink from './link';
import $ from 'jquery';

export default function router(data) {
    // Set correct values and state
    setDefaultValues(data);
    setDefaultState(data);

    // Set event listener for history navigation (back, forward)
    window.onpopstate = function(e) {
        routeLoading(e.state, true);
    };

    // Set event listener for router links
    $('[data-router-link]').click((e) => {
        routerLink(e, data);
    });
}
