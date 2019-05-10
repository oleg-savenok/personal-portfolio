import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
        },
    ],
});
