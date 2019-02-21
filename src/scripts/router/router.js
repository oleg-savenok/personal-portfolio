// Libraries
import $ from 'jquery';

// Components
import Loading from './_loading';
import History from './_history';

export default class Router {
    constructor(pages, preloader) {
        this.pages = pages;
        this.preloader = preloader;
        this.page = $('#page');
        this.pageName = $('body').attr('data-page-name');

        this.preloader = preloader;
        this.pages = pages;

        this.history = new History(pages);
        this.loading = new Loading(pages, preloader);
    }

    initLinksEventListener(currentPage) {
        let { pageName } = this;
        const { history, loading } = this;

        $('[data-router-link]').on('click', (e) => {
            e.preventDefault();

            pageName = $('body').attr('data-page-name');
            const link = e.target.dataset.routerLink;

            if (pageName !== link) {
                history.cleanUpTrash(currentPage);
                loading.loadPage(link, history);
            }
        });
    }

    initPopEventListener() {
        window.onpopstate = (e) => {
            this.history.cleanUpTrash(this.pageName);
            this.loading.loadPage(e.state.link);
        };
    }

    initDefaultState(link) {
        this.history.pushState(link);
    }

    init() {
        const { preloader, pages, pageName } = this;

        this.initDefaultState(pageName);
        this.initLinksEventListener(pageName);
        this.initPopEventListener();

        preloader.firstLoading(pages[pageName]);
    }
}
