// Components
import App from './App';

// Options
import options from './options';

// Initial App with options
App(options);

// Webpack Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
