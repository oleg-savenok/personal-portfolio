import router from './router/router';

export default function routerDefine() {
    // Define routers for all pages
    const routers = {
        home: {
            name: 'home',
            link: '/',
            file: 'index.html',
            callback: ['projectsSlider'],
        },
        about: {
            name: 'about',
        },
        contact: {
            name: 'contact',
        },
    };

    // Init call router
    router(routers);
}
