export default class History {
    constructor(pages) {
        // Pages array
        this.pages = pages;
    }

    // Action for clean up trash after previous page
    cleanUpTrash(page) {
        this.pages[page].remove();
    }

    // Action for push new record to history
    pushState(link) {
        history.pushState({ link: link }, '', link !== 'index' ? link : '/');
    }
}
