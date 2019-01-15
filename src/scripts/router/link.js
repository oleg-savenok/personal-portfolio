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
        this.preloader.show();

        $.ajax({
            url: `${link}.html`,
            success: (response) => {
                setTimeout(() => {
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
                }, 2000);

                setTimeout(() => this.preloader.hide(), 2500);
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
