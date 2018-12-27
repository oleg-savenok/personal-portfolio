import routeLoading from './loader';

export default function routerLink(event, data) {
    // Prevent default behavior for link
    event.preventDefault();

    // Get state for current link
    const pageName = event.target.dataset.routerLink;
    const state = data[pageName];

    // Load page if you are not on it
    if (!(history.state.name === pageName)) {
        routeLoading(state);
    }
}
