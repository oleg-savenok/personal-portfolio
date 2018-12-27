import $ from 'jquery';

export default function setDefaultState(routes) {
    const pageName = $('body').attr('id');
    const defaultState = routes[pageName];

    history.pushState(defaultState, '', defaultState.link);
}
