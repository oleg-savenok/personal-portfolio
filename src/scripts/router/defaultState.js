import $ from 'jquery';

export default function setDefaultState(routes) {
    // Get default state on current page
    const pageName = $('body').attr('id');
    const defaultState = routes[pageName];

    // Push default state to history
    history.pushState(defaultState, '', defaultState.link);
}
