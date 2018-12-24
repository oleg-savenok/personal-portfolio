export default function visibilityTab() {
    const defaultTitle = document.title;

    document.addEventListener(
        'visibilitychange',
        () => {
            if (document.hidden === true) {
                document.title = '😧 Hey, I Miss You!';
            } else {
                document.title = defaultTitle;
            }
        },
        false
    );
}
