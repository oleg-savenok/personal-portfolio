import $ from 'jquery';

//
import Link from './link';

export default class Router {
    constructor() {
        this.linksTarget = $('[data-router-link]');
        this.pageName = $('body').attr('data-page-name');

        this.link = new Link();
    }

    setDefaultHistory() {
        const historyURL = this.pageName !== 'index' ? this.pageName : '';

        history.pushState(
            {
                link: this.pageName,
            },
            '',
            historyURL
        );
    }

    initLinks() {
        // Set event listener for router links
        this.linksTarget.click((e) => {
            e.preventDefault();

            this.link.linkEvent(e.target.dataset.routerLink);
        });
    }

    init() {
        this.setDefaultHistory();

        window.onpopstate = (e) => {
            this.link.popEvent(e.state.link);
        };

        this.initLinks();

        console.log('It`s router!');
    }
}
