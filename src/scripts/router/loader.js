import $ from 'jquery';

import routerCallback from '../routesCallback';

export default function routeLoading(data, back = false) {
    const { name, link, file } = data;
    const body = $('body');
    const page = $('#page');

    $.ajax({
        url: file,
        success: (response) => {
            // Loading page
            page.html(
                $(response)
                    .filter('#page')
                    .html()
            );

            // Set page name for body
            body.attr('id', name);

            // Push History if it`s not a back event
            if (!back) {
                history.pushState(data, '', link);
            }

            // Callback
            routerCallback(data);
        },
    });
}
