import setDefaultValues from './defaultValues';
import setDefaultState from './defaultState';
import routeLoading from './loader';

import routerLink from './link';
import $ from 'jquery';

export default function router(data) {
    setDefaultValues(data);
    setDefaultState(data);

    window.onpopstate = function(e) {
        routeLoading(e.state, true);
    };

    $('[data-router]').click((e) => {
        routerLink(e, data);
    });
}
