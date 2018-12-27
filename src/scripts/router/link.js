import $ from 'jquery';

import routeLoading from './loading';

export default function routerLink() {
    $('[data-ajax-link]').click((e) => {
        e.preventDefault();

        const link = e.target.dataset.ajaxLink;

        if (!(history.state.page === link)) {
            routeLoading(link, false);
        }
    });

    history.pushState({ page: 'index' }, '', '/');

    window.onpopstate = function(e) {
        routeLoading(e.state.page, true);
    };

    // Обработчик back/forward событий
}
