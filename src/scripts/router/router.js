// Libraries
import $ from 'jquery';

// Components
import Loading from './_loading';
import History from './_history';

export default class Router {
    constructor(pages, preloader) {
        // Current page name
        this.pageName = $('body').attr('data-page-name');
        // Pages array
        this.pages = pages;
        // Link to preloader module
        this.preloader = preloader;

        // Init router modules
        this.history = new History(pages);
        this.loading = new Loading(pages);
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
        const { pageName, history, loading } = this;

        window.onpopstate = (e) => {
            history.cleanUpTrash(pageName);
            loading.loadPage(e.state.link);
        };
    }

    initDefaultState(link) {
        const { history } = this;
        history.pushState(link);
    }

    init() {
        const { preloader, pages, pageName } = this;

        this.initDefaultState(pageName);
        this.initLinksEventListener(pageName);
        this.initPopEventListener();

        preloader.firstLoading(pages[pageName]);
    }
}
