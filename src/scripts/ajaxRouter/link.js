import routeLoading from './loader';

export default function routerLink(event, data) {
    event.preventDefault();

    const pageName = event.target.dataset.router;
    const state = data[pageName];

    if (!(history.state.name === pageName)) {
        routeLoading(state);
    }
}
