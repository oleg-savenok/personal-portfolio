// External libraries
import { TweenMax } from 'gsap';
import CustomEase from '../../assets/CustomEase';

// Options
import options from './options';

export default class Stickiness {
    constructor({
        cursor,
        cursorIcon,
        sticky: {
            degree,
            speed: { start: startSpeed, end: endSpeed },
        },
    } = options) {
        this.cursor = cursor;
        this.cursorIcon = cursorIcon;
        this.degree = degree;
        this.positionDifference = null;
        this.targetParam = null;
        this.scrollTop = 0;
        this.startSpeed = startSpeed;
        this.endSpeed = endSpeed;
    }

    hiddenIcon() {
        TweenMax.to(this.cursorIcon, 0.1, {
            alpha: 0,
        });
    }

    move(e) {
        this.targetParam = e.target.getBoundingClientRect();
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        this.positionDifference = {
            x: e.pageX - this.targetParam.left, // position difference between cursor and target element
            y: e.pageY - this.targetParam.top,
        };

        TweenMax.to(e.target, this.startSpeed, {
            x: ((this.positionDifference.x - this.targetParam.width / 2) / this.targetParam.width) * this.degree,
            y:
                ((this.positionDifference.y - this.targetParam.height / 2 - this.scrollTop) / this.targetParam.height) *
                this.degree,
            ease: Power2.easeOut,
        });

        this.hiddenIcon();
    }

    return(e) {
        TweenMax.to(e.target, this.endSpeed, {
            x: 0,
            y: 0,
            ease: CustomEase.create(
                'custom',
                'M0,0 C0.128,0.572 0.118,1.156 0.3,1.156 0.464,1.156 0.464,0.7 0.6,0.7 0.748,0.7 0.698,1 1,1'
            ),
        });
    }
}
