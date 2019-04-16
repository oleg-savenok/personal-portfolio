export default function visibilityTab() {
    const defaultTitle = document.title;
    let referralChange = false;

    // Check by clicking on the referral link
    const links = document.querySelectorAll('a[href^="http"]');

    [].forEach.call(links, function(item) {
        item.addEventListener('click', () => (referralChange = true));
    });

    // Add event listener for visibility tab check
    document.addEventListener(
        'visibilitychange',
        () => {
            if (document.hidden === true) {
                document.title = referralChange ? '🙃 Look and go back!' : '😧 Hey, I Miss You!';
                referralChange = false; // Disable referral mode
            } else {
                document.title = defaultTitle;
            }
        },
        false
    );
}
