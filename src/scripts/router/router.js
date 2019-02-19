// Libraries
import $ from 'jquery';

// Components
import Link from './link';

export default class Router {
    constructor(pages, preloader) {
        this.linksTarget = $('[data-router-link]');
        this.pageName = $('body').attr('data-page-name');

        this.preloader = preloader;
        this.pages = pages;

        this.link = new Link(this.pages, this.preloader);
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

    firstLoading() {
        const { preloader, pages, pageName } = this;

        preloader.firstLoading(pages[pageName]);
    }

    init() {
        this.pushDefaultState();
        this.initPopEvent();
        this.initLinksEvent();
        this.firstLoading();
    }
}
