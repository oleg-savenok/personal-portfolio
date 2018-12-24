export default function visibilityTab() {
    const defaultTitle = document.title;

    document.addEventListener(
        'visibilitychange',
        () => {
            console.log('working!');
        },
        false
    );
}
