import React from "react";
import './portrait.css';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.data){
            this.state = { bank: this.props.data.allFile.edges, active: 0 };
        }
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
        if (!this.props.data) { return null; }
        return (
            <div className="frame">
                <img src={this.state.bank[this.state.active].node.publicURL} alt="me" className="portraitIMG" onClick={()=>this.nextImage()}/>
            </div>
        )
    }
}