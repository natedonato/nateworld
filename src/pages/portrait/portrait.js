import React from "react";
import nate from './nate.jpg';
import nate2 from './test.jpg';
import nate3 from './me3.jpg';
import './portrait.css';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bank: [nate2, nate, nate3], active: 0 };
        this.nextImage = this.nextImage.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextImage() {
        let nextActive = (this.state.active + 1) % this.state.bank.length;
        this.setState({ active: nextActive });
    }

    render() {
        return (
            <div className="frame">
                <img src={this.state.bank[this.state.active]} alt="me" className="portraitIMG" onClick={()=>this.nextImage()}/>
            </div>
        )
    }
}