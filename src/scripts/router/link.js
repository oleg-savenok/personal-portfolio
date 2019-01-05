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
            },
        });
    }

    pushHistory(link) {
        const historyURL = link !== 'index' ? link : '/';

        history.pushState(
            {
                link: link,
            },
            '',
            historyURL
        );
    }

    popEvent(link) {
        this.loadPage(link);
    }

    linkEvent(link) {
        this.loadPage(link);
        this.pushHistory(link);
    }
}
