import $ from 'jquery';

export default class Link {
    constructor(pages, preloader) {
        this.pages = pages;
        this.preloader = preloader;
        this.body = $('body');
        this.page = $('#page');
    }

    removePage(page) {
        this.pages[page].remove();
    }

    loadPage(link) {
        const { pages, preloader, body, page } = this;

        preloader.show();

        $.ajax({
            url: `${link}.html`,
            success: (response) => {
                setTimeout(() => {
                    // Loading page
                    page.html(
                        $(response)
                            .filter('#page')
                            .html()
                    );

                    // Set page name for body
                    body.attr('data-page-name', link);

                    // Init loaded page
                    pages[link].render();
                }, 2000);

                setTimeout(() => preloader.hide(pages[link]), 2500);
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
