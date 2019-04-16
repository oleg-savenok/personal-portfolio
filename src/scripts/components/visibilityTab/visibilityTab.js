export default function visibilityTab() {
    const defaultTitle = document.title;
    let referralChange = false;

    const links = document.querySelectorAll('a[href^="http"]');

    [].forEach.call(links, function(item) {
        item.addEventListener('click', () => (referralChange = true));
    });

    document.addEventListener(
        'visibilitychange',
        () => {
            if (document.hidden === true) {
                document.title = referralChange ? '🙃 Look and go back!' : '😧 Hey, I Miss You!';
                referralChange = false;
            } else {
                document.title = defaultTitle;
            }
        },
        false
    );
}
