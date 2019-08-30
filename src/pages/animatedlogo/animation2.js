import meImg from './me.png';
import React from "react";

export default class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 1000, height: 1000, last: Date.now(), lastBox: Date.now(), boxes: [{ x: 100, y: 100, velx: 80, vely: 20, w: 100, h: 80 }, { x: 200, y: 200, velx: 400, vely: 8, w: 140, h: 80 }] };
        this.updateAnimationState = this.updateAnimationState.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    spawnText(current) {
        if ((this.state.lastBox - current) / 1000 < -0.2) {
            if (this.state.boxes.length < 20) {
                this.state.boxes.push({ x: this.state.width / 2 - 420, y: this.state.height / 2, velx: 80 * Math.random(), vely: 60 + Math.random() * 40, w: Math.random() * 400 + 50, h: 80 });
                this.setState({ lastBox: Date.now() });
            }
        }
    }

    updateDimensions(dimensions) {
        this.setState({ width: dimensions.width, height: dimensions.height });
    }

    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    updateAnimationState() {
        let current = Date.now();
        let dt = this.state.last - current;
        let boxes = this.state.boxes || [];
        boxes.forEach(box => {
            box.x = box.x + box.velx * dt / 1000;
            box.y = box.y + box.vely * dt / 1000;
            box.vely -= 9.8;

            if (box.y < 0) {
                box.y = 0;
                box.vely = -box.vely;
            }
            if (box.x < 0) {
                box.x = 0;
                box.velx = -box.velx;
            }
            if (box.y + box.w > this.state.height) {
                box.y = this.state.height - box.w;
                box.vely = -box.vely;
            }
            if (box.x + box.w > this.state.width) {
                box.x = this.state.width - box.w;
                box.velx = -box.velx;
            }

            this.spawnText(current);
        });
        this.setState({ boxes: boxes, last: current });
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }

    render() {
        return (
            <Canvas boxes={this.state.boxes} updateDimensions={this.updateDimensions} />
        )
    }
}

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.bgColor = "blue";
        var img = new Image();
        this.state={img: null};
        let current = this;
        img.onload = function () {
            current.setState({ img });
        };
        img.src = meImg;

    }

    saveContext(ctx) {
        this.ctx = ctx;
    }

    componentDidUpdate() {
        const width = this.ctx.canvas.width;
        const height = this.ctx.canvas.height;

        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.fillStyle = "black";
        this.ctx.font = "80px Arial";


        if (this.props.boxes) {
            this.props.boxes.forEach(box => {
                // this.ctx.fillRect(box.x, box.y, box.w, box.h);
                // this.ctx.fillText("NATEWORLD.INFO", box.x, box.y + box.h);
                if(this.state.img){
                    this.ctx.drawImage(this.state.img, box.x, box.y, box.w, box.w);
                }
            }
            );
        }
    }

    render() {
        return <PureCanvas contextRef={this.saveContext} updateDimensions={this.props.updateDimensions}></PureCanvas>;
    }
}

class PureCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 }
    }
    // shouldComponentUpdate() { return false; }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize()
    }

    resize() {
        if (this.divElement) {
            let height = this.divElement.clientHeight - 40;
            let width = this.divElement.clientWidth;
            this.setState({ height, width });
            this.props.updateDimensions({ height, width });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    render() {
        return (
            <div ref={(divElement) => this.divElement = divElement} style={{ width: "100%", height: "100%" }}>
                <canvas style={{ width: "100%", height: "100%" }} width={this.state.width} height={this.state.height}
                    ref={node => node ? this.props.contextRef(node.getContext('2d')) : null}
                />
            </div>
        )
    }
}