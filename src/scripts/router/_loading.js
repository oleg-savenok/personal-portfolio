import $ from 'jquery';

export default class Loading {
    constructor(pages, preloader) {
        this.pages = pages;
        this.preloader = preloader;
    }

    loadPage(link) {
        $.ajax({
            url: `${link}.html`,
            success: (response) => {
                // Loading page
                $('#page').html(
                    $(response)
                        .filter('#page')
                        .html()
                );

                // Set page name for body
                $('body').attr('data-page-name', link);

                // Init loaded page
                this.pages[link].render();
            },
        });
    }
}
