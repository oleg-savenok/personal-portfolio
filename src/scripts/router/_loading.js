import $ from 'jquery';

export default class Loading {
    constructor(pages) {
        // Pages array
        this.pages = pages;
    }

    loadPage(link, history) {
        $.ajax({
            url: `${link}.html`,
            success: (res) => {
                // Loading page and replace
                // content on current page
                $('#page').html(
                    $(res)
                        .filter('#page')
                        .html()
                );

                // Change route in address bar
                history.pushState(link);

                // Init loaded page
                this.pages[link].render();

                // Set page name for body
                $('body').attr('data-page-name', link);
            },
            error: (res) => {
                console.error(
                    `Hmm, so weird, but the router confused, he's said: ${res.status} (${res.statusText})`,
                    res
                );
            },
        });
    }
}
