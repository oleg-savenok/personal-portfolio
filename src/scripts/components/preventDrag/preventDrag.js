import $ from 'jquery';

export default function preventDrag() {
    const links = $('a');
    links.attr('draggable', 'false');
    links.attr('ondragstart', 'return false;');
}
