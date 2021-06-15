'use strict';

var renderProjects = function renderProjects() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Home Page'
        ),
        React.createElement(
            'button',
            null,
            'Add new Project'
        ),
        React.createElement(
            'p',
            null,
            'List of projects:'
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderProjects();
