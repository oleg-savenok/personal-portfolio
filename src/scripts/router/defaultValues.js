import $ from 'jquery';

export default function setDefaultValues(routes) {
    // Set the correct values
    $.each(routes, function(index, value) {
        value.link = value.link || `/${value.name}`;
        value.file = value.file || `${value.name}.html`;
    });
}
