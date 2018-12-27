import $ from 'jquery';

export default function routeLoading(data, back = false) {
    const { name, link, file } = data;
    const body = $('body');
    const page = $('#page');

    $.ajax({
        url: file,
        success: (response) => {
            page.html(
                $(response)
                    .filter('#page')
                    .html()
            );

            body.attr('id', name);

            if (!back) {
                history.pushState(data, '', link);
            }
        },
    });
}
