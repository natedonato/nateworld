import React from "react";
import './portrait.css';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.data){
            this.state = { bank: this.props.data.allFile.edges, active: 0, playing: true };
        }
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);

    }

    componentDidMount() {
        this.interval = setInterval(this.nextImage, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    togglePlay(){
        if(this.state.playing){
            clearInterval(this.interval);
            this.setState({ playing: false });  
        }else{
            this.nextImage();
            this.interval = setInterval(this.nextImage, 3000);
            this.setState({ playing: true });  
        }
    }

    pause(){
        clearInterval(this.interval);
        this.setState({playing: false});  
    }

    play(){
        this.interval = setInterval(this.nextImage, 3500);
        this.setState({ playing: true });  
    }

    nextImage() {
        let nextActive = (this.state.active + 1) % this.state.bank.length;
        this.setState({ active: nextActive });
    }

    previousImage(){
        let previousActive = (this.state.active - 1);
        if(previousActive < 0){
            previousActive = this.state.bank.length - 1;
        }
        this.setState({ active: previousActive });
    }

    render() {
        if (!this.props.data) { return null; }
        return (
            <div className="frame">
                <img src={"/nateworld/" + this.state.bank[this.state.active].node.publicURL} alt="me" className="portraitIMG" onClick={()=>this.nextImage()}/>
                {/* <img src={this.state.bank[this.state.active].node.publicURL} alt="me" className="portraitIMG" onClick={()=>this.nextImage()}/> */}
                <div className="controls">
                    <div className="material-icons" onClick={this.previousImage}> arrow_left </div>
                    <div className="material-icons" onClick={() => this.togglePlay()}> {this.state.playing ? "pause" : "play_arrow"} </div>
                    <div className="material-icons" onClick={this.nextImage}> arrow_right </div>
                </div>
            </div>
        )
    }
}