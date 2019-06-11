// Components
import App from './App';

// Options
import options from './options';

// Initial App with options
new App(options).render();

// Webpack Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
