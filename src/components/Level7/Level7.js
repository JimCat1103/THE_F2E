import React, {Component} from 'react';
import {pure, withHandlers, withState, compose} from "recompose";
import PropTypes from "prop-types";

class Level7 extends Component {
    constructor() {
        super();
        this.state = {
            ww: window.innerWidth,
            wh: window.innerHeight,
            ship: {
                x: 0,
                y: 0,
                deg: 0
            },
            ctx: {}
        };
        this.init = this.init.bind(this);
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        const canvas = this.myCanvas;
        this.setState({ctx: canvas.getContext("2d")});

        this.init();
        let fps = 60;
        setInterval(this.update, 1000/fps);
        requestAnimationFrame(this.draw);
    }
    init() {
        const {ship, ww, wh} = this.state;
        this.setState({ship: {...ship, x: Math.random()*ww, y: Math.random()*wh, deg: 45}});
    }
    update() {
        const {ship} = this.state;
        const {x, y} = ship;
        this.setState({ship: {...ship, x: x+0.1, y: y+0.5}});
    }
    draw() {
        const {ctx, ship, ww, wh} = this.state;
        ctx.fillStyle='#001D2E';
        ctx.fillRect(0, 0, ww, wh);

        //line
        ctx.beginPath();
        let span = 50;
        for(let i=0; i< ww; i+=span){
            ctx.moveTo(i, 0);
            ctx.lineTo(i, wh);
        }
        for(let i=0; i< wh; i+=span){
            ctx.moveTo(0, i);
            ctx.lineTo(ww, i);
        }
        ctx.strokeStyle='rgba(255, 255, 255, 0.2';
        ctx.stroke();

        //ship
        ctx.fillStyle='white';
        ctx.fillRect(ship.x, ship.y, 50, 50);

        requestAnimationFrame(this.draw);
    }

    render() {
        return <canvas ref={canvas => this.myCanvas = canvas } width={window.innerWidth} height={window.innerHeight}>

        </canvas>
    }
}


export default Level7;

Level7.propTypes = {
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
