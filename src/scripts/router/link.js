import $ from 'jquery';

export default class Link {
    constructor() {
        this.body = $('body');
        this.page = $('#page');
    }

    loadPage(link) {
        $.ajax({
            url: `${link}.html`,
            success: (response) => {
                // Loading page
                this.page.html(
                    $(response)
                        .filter('#page')
                        .html()
                );

                // Set page name for body
                this.body.attr('data-page-name', link);

                // Push History if it`s not a back event
                // if (!back) {
                //     history.pushState(data, '', link);
                // }
            },
        });

        console.log(`It's router link: ${link}`);
    }
}
