import Cursor from './cursor/cursor';
import projectsSlider from './projectsSlider';

export default function routerCallback(data) {
    const cursor = new Cursor();

    // Define callbacks for all pages
    const callbacks = {
        home: () => {
            projectsSlider();
            cursor.addProjectsListeners();
        },
        about: () => {
            cursor.removeProjectsListeners();
        },
        contact: () => {
            cursor.removeProjectsListeners();
        },
    };

    // Call callback functions
    callbacks[data.name]();
}
