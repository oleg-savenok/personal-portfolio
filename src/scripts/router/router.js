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
        $('[data-router-link]').on('click', (e) => {
            e.preventDefault();

            this.pageName = $('body').attr('data-page-name');
            const link = e.target.dataset.routerLink;

            if (this.pageName !== link) {
                this.history.cleanUpTrash(currentPage);
                console.log(e);
                this.loading.loadPage(link);
                this.history.pushState(link);
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
        const { loading, preloader, pages, pageName } = this;

        this.initDefaultState(pageName);
        this.initLinksEventListener(pageName);
        this.initPopEventListener();

        preloader.firstLoading(pages[pageName]);
        loading.initLoadingListener();
    }
}
