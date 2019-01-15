// Libraries
import $ from 'jquery';

// Components
import Link from './link';

export default class Router {
    constructor(pages, preloader) {
        this.linksTarget = $('[data-router-link]');
        this.pageName = $('body').attr('data-page-name');

        this.link = new Link(pages, preloader);
    }

    pushDefaultState() {
        const historyURL = this.pageName !== 'index' ? this.pageName : '/';

        history.pushState(
            {
                link: this.pageName,
            },
            '',
            historyURL
        );
    }

    initPopEvent() {
        window.onpopstate = (e) => {
            this.link.popEvent(e.state.link);
        };
    }

    initLinksEvent() {
        this.linksTarget.click((e) => {
            e.preventDefault();

            this.link.linkEvent(e.target.dataset.routerLink);
        });
    }

    init() {
        this.pushDefaultState();
        this.initPopEvent();
        this.initLinksEvent();
    }
}
