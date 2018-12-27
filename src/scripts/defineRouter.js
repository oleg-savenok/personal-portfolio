import router from './ajaxRouter/router';

export default function defineRouter() {
    const defineRouter = {
        home: {
            name: 'home',
            link: '/',
            file: 'index.html',
        },
        about: {
            name: 'about',
        },
        contact: {
            name: 'contact',
        },
    };

    router(defineRouter);
}
