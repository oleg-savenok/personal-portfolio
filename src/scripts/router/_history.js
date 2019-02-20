export default class History {
    constructor(pages) {
        this.pages = pages;
    }

    cleanUpTrash(page) {
        this.pages[page].remove();
    }

    pushState(link) {
        history.pushState({ link: link }, '', link !== 'index' ? link : '/');
    }
}
