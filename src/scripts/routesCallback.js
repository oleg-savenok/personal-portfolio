import cursor from './cursor/cursor';
import projectsSlider from './projectsSlider';

export default function routerCallback(data) {
    // Define callbacks for all pages
    const callbacks = {
        home: () => {
            projectsSlider();
        },
        about: () => {},
        contact: () => {},
    };

    // Call callback functions
    callbacks[data.name]();

    // Reload cursor
    cursor();
}
