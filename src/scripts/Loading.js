import $ from 'jquery';
import { TweenLite, TimelineLite } from 'gsap';

export default class Loading {
    constructor() {
        this.preloader = $('#preloader');
        this.cursorSpiner = $('#cursor .cursor__spiner');
        this.greeting = $('#greeting');
        this.greetingText = $('#greetingText');
        this.header = $('#header');
        this.footer = $('#footer');
        this.helloBG = $('#helloBG');
        this.helloBGImage = $('#helloBG img');
        this.helloBGOriginalHeight = this.helloBG.css('height');
        this.$ = $;
        this.TweenLite = TweenLite;
    }

    init() {
        TweenLite.set([this.header, this.footer, this.greetingText], {
            opacity: 0,
        });
        TweenLite.set(this.header, { y: '-120px' });
        TweenLite.set(this.footer, { y: '120px' });
        TweenLite.set(this.helloBG, { height: 0 });
    }

    finish() {
        let endTimeline = new TimelineLite();

        endTimeline
            .set(this.preloader, {
                backgroundColor: 'none',
            })
            .set(this.greeting, {
                opacity: 0,
            })
            .set(this.greetingText, {
                opacity: 1,
            })
            .to(this.cursorSpiner, 0.2, {
                opacity: 0,
                animationPlayState: 'pause',
            })
            .to(
                this.header,
                1,
                {
                    y: 0,
                    opacity: 1,
                    ease: Power3.easeOut,
                },
                0.3
            )
            .to(
                this.footer,
                1,
                {
                    y: 0,
                    opacity: 1,
                    ease: Power3.easeOut,
                },
                0.3
            )
            .to(
                this.helloBG,
                1,
                {
                    height: this.helloBGOriginalHeight,
                    ease: Power3.easeOut,
                },
                1
            );

        // Enable fullpage scrolling
        this.$.fn.fullpage.setAllowScrolling(true);
        this.$.fn.fullpage.setKeyboardScrolling(true);
    }
}
