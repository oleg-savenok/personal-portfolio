import $ from 'jquery';

export default class Link {
    constructor(pages) {
        this.pages = pages;
        this.body = $('body');
        this.page = $('#page');
    }

    removePage(page) {
        this.pages[page].remove();
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

                // Init loaded page
                this.pages[link].render();
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
        this.removePage(this.body.attr('data-page-name'));
        this.loadPage(link);
    }

    linkEvent(link) {
        if (this.body.attr('data-page-name') !== link) {
            this.removePage(this.body.attr('data-page-name'));
            this.loadPage(link);
            this.pushHistory(link);
        }
    }
}
