import $ from 'jquery';

//
import Link from './link';

export default class Router {
    constructor() {
        this.linksTarget = $('[data-router-link]');

        this.link = new Link();
    }

    initLinks() {
        // Set event listener for router links
        this.linksTarget.click((e) => {
            e.preventDefault();

            this.link.loadPage(e.target.dataset.routerLink);
        });
    }

    init() {
        this.initLinks();

        console.log('It`s router!');
    }
}
