import { TweenMax } from 'gsap';

export default class EventCharacters {
    constructor(targets) {
        this.targets = targets;
    }

    animateLetters(e) {
        const letters = Array.from(e.target.children);

        TweenMax.set(letters, { alpha: 0 });
        TweenMax.staggerTo(
            letters,
            1.5,
            {
                ease: Elastic.easeOut.config(1, 0.4),
                startAt: { y: '40%' },
                y: '0%',
                alpha: 1,
            },
            0.03
        );
    }

    init() {
        const targets = this.targets;

        targets.each((index) => {
            if (targets[index].dataset.cursorEvents.indexOf('characters') !== -1) {
                // Get all text from link
                const linkText = targets[index].innerText;

                // Empty link
                targets[index].innerHTML = null;

                for (let i = 0; i < linkText.length; i++) {
                    // Create span for adding character into link
                    const char = document.createElement('span');

                    // Add class name and content for span
                    char.className = 'character';
                    char.innerText = linkText.charAt(i);

                    // Finally append single character into link
                    targets[index].append(char);
                }
            }
        });
    }
}
