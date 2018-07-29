import React, {Component} from 'react';
import {Power0, Power2, SlowMo, TimelineMax, TweenMax} from "gsap/all";
import $ from 'jquery';
import {Style} from './style';

const animationConfig = {
  opening: {
    duration: 3
  },
};

class Level8 extends Component {
    constructor() {
        super();

        this.opening = this.opening.bind(this);
        this.question1Opening = this.question1Opening.bind(this);
    }

    componentDidMount() {
        this.opening();
        // this.question1Opening();
    }
    opening() {
        const {opening} = animationConfig;

        var tl = new TimelineMax();

        TweenMax.to(this.square, opening.duration, {rotation: '-360', ease: SlowMo.easeInOut});
        TweenMax.to(this.cir, opening.duration, {rotation: '-360', ease: SlowMo.easeInOut});
        TweenMax.to(this.star, opening.duration, {rotation: '360', ease: SlowMo.easeInOut});

        TweenMax.to(this.cir, opening.duration/2, {css: {scale: 1.1}});
        TweenMax.to(this.cir, opening.duration/2, {css: {scale: 1}, delay: opening.duration/2});

        TweenMax.to(this.square, 0.5, {css: {scale: 12}, ease: Power2.easeInOut, delay: opening.duration+0.3});
        TweenMax.to(this.cir, 0.5, {css: {scale: 12}, ease: Power2.easeInOut, delay: opening.duration+0.6});
        TweenMax.to(this.star, 0.5, {css: {scale: 12}, ease: Power2.easeInOut, delay: opening.duration+0.9});
        TweenMax.to('.opening', 1.5, {opacity: 0, delay: opening.duration+1.5});
        TweenMax.to(this.titleBlock, 1.5, {opacity: 0, delay: opening.duration+1.8, onComplete: () => {
                $('.opening').remove();
                this.question1Opening();
            }});
    }
    question1Opening() {
        TweenMax.to('.question-1-wrap', 1, {className: '-=hide', ease: SlowMo.easeOut});
        TweenMax.from(".q1-section", 1, {opacity: 0, ease: SlowMo.easeIn, delay: 0.5});
        TweenMax.to('.q1-animation-section', 1, {css: {left: '60%'}, delay: 0.7, ease: SlowMo.easeInOut});

        TweenMax.to(this.q1Sq, 0.8, {css: {top: '90px'}, ease: SlowMo.easeInOut, delay: 2});
        TweenMax.to(this.q1Tri, 1, {css: {top: '300px'}, ease: SlowMo.easeInOut, delay: 2});
        TweenMax.to(this.q1Cir, 1, {css: {bottom: '-180px'}, ease: SlowMo.easeInOut, delay: 2});

        var config = { repeat: -1, delay: 1, repeatDelay: 0 };
        var tmax_tl = new TimelineMax(config);
        tmax_tl.add(
            TweenMax.to(this.q1Sq, 3, {
                rotation: 360,
                repeat: -1,
                ease: Power0.easeNone
            }),
            2
        ).add(
            TweenMax.to(this.q1Tri, 3, {
                rotation: -360,
                repeat: -1,
                ease: Power0.easeNone
            }),
            2
        ).add(
            TweenMax.from(this.q1Cir, 2, {
                scale: 0.9,
                repeat: -1,
                ease: Power0.easeNone,
                yoyo: true
            }),
            2
        );


        $('.q1-option > ul').click((e) => {
           const value = $(e.target).attr('data-value');
           console.log(value);
        });
    }

    render() {
        return <Style>
            <div className='opening'>
                <div className='star' ref={star => this.star = star}>
                    <div className='star-top'></div>
                    <div className='star-bottom'></div>
                </div>
                <div className='square' ref={sq => this.square = sq}></div>
                <div className='circle' ref={cir => this.cir = cir}></div>
                <div className='text-block' ref={tb => this.titleBlock = tb}>
                    <div className='title'>GEOMETRY PERSON</div>
                    <div className='description'>find your core personality type in shapes!</div>
                </div>
            </div>

            <div className='question-1-wrap hide'>
                <div className='q1-section'>
                    <div className='q1-number'>
                        Q1
                    </div>
                    <div className='q1-title'>
                        If one day you get a gift that can change the rule of the world, which ability will you choose?
                    </div>
                    <div className='q1-desc'>
                        Choose the answer appeared in your mind instantly
                    </div>
                    <div className='q1-option'>
                        <ul>
                            <li data-value="1">Destroy all humans in the world</li>
                            <li data-value="2">Make the war never happened</li>
                            <li data-value="3">You won’t get old and live forever</li>
                        </ul>
                    </div>
                </div>
                <div className='q1-animation-section'>
                    <div className='animation-square' ref={q1Sq => this.q1Sq = q1Sq}></div>
                    <div className='animation-tri' ref={q1Tri => this.q1Tri = q1Tri}></div>
                    <div className='animation-circle' ref={q1Cir => this.q1Cir = q1Cir}></div>
                </div>
            </div>


        </Style>
    }
}

export default Level8;

Level8.propTypes = {};




var tmax_options = {
    delay: 0,
    paused: false,
    onComplete: function() {console.log('animation is complete');},
    onCompleteScope: {},
    tweens: [],
    stagger: 0,
    align: 'normal',
    useFrames: false,
    onStart: function() { console.log('on start called'); },
    onStartScope: {},
    onUpdate: function() { console.log('on update called'); },
    onUpdateScope: {}, onRepeat: function() { console.log('on repeat called'); },
    onRepeatScope: {}, onReverseComplete: function() { console.log('on reverse complete'); },
    onReverseCompleteScope: {},
    autoRemoveChildren: false,
    smoothChildTiming: false,
    repeat: 0,
    repeatDelay: 0,
    yoyo: false,
    onCompleteParams: [],
    onReverseCompleteParams: [],
    onStartParams: [],
    onUpdateParams: [],
    onRepeatParams: []
};


// const enhance = compose(
//     withState('myCanvas', 'updateMyCanvas', ''),
//     withState('ww', 'windowWidth', window.innerWidth),
//     withState('wh', 'windowHeight', window.innerHeight),
//     withState('ship', 'updateShip', {
//         x: 0,
//         y: 0,
//         deg: 0
//     }),
//     withHandlers({
//         updateCanvas: ({myCanvas}) => () => {
//             const ctx = myCanvas.getContext('2d');
//
//             this.init();
//             let fps = 60;
//             setInterval(this.update, 1000/fps);
//             requestAnimationFrame(this.draw(ctx));
//         },
//         init: ({updateShip}) => () => {
//             updateShip({deg: 45});
//         },
//         update: ({updateShip, ww, wh}) => () => {
//             updateShip({x: Math.random()*ww});
//             updateShip({y: Math.random()*wh});
//         },
//         draw: ({ship, ww, wh}) => (ctx) => {
//             ctx.fillStyle='black';
//             ctx.fillRect(0, 0, ww, wh);
//
//             ctx.fillStyle='white';
//             ctx.fillRect(ship.x, ship.y, 50, 50);
//
//             requestAnimationFrame(this.draw(ctx));
//         }
//     }),
//     BaseComponent => class LifeCycle extends Component {
//         componentDidMount() {
//             const {updateCanvas=()=>{}} = this.props;
//             updateCanvas();
//         }
//
//         render() {
//             return <BaseComponent {...this.props} />
//         }
//     }
// );
//
// const BaseComponent = pure(({myCanvas}) => {
//    return <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight}>
//
//    </canvas>
// });
