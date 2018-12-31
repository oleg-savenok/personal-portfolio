// External libraries
import { TweenMax } from 'gsap';
import CustomEase from '../../easing/CustomEase';

// Options
import options from './options';

export default class EventSticky {
    constructor({
        sticky: {
            degree,
            positionDifference,
            targetParam,
            speed: { start: startSpeed, end: endSpeed },
        },
        scrollTop,
    } = options) {
        this.degree = degree;
        this.positionDifference = positionDifference;
        this.targetParam = targetParam;
        this.scrollTop = scrollTop;
        this.startSpeed = startSpeed;
        this.endSpeed = endSpeed;
    }

    move(e) {
        this.targetParam = e.target.getBoundingClientRect();

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
