import $ from 'jquery';

export default function routeLoading(link, back) {
    if (!back) {
        console.log(`from-to: ${history.state.page} ------ ${link}`);
    }

    $.ajax({
        url: `${link}.html`,
        success: (response) => {
            $('#page').html(
                $(response)
                    .filter('#page')
                    .html()
            );

            $('body').attr('id', link);

            if (!back) {
                history.pushState({ page: link }, '', link);
            }
        },
    });
}
