import React from "react";
import './txt.css';
import txtImage from './txt.png';
import TxtItem from './txtItem';

class TxtIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: null,
            txts: [{ name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }, { name: "junkyard", text: "hey people" },
                { name: "THECAPS", text: "Hey there partner" }, { name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }, { name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }]
        };
    }

    toggleActive(file){
        this.setState({active: file});
    }

    closeWindow(){
        this.setState({active: null});
    }

    render(){
        console.log(this.state);
        return (
            <div className="iconContainer" >
                    {this.state.txts.map((file, index) => (
                        <div className="txtItem" key={index} tabIndex="0" onDoubleClick={()=> this.toggleActive(file)}>

                            <img src={txtImage} alt=""/>
                            <span>{file.name + ".txt"}</span>
                        </div>
                    ))}
                {this.state.active !== null ? <TxtItem file={this.state.active} closeWindow={this.closeWindow.bind(this)} /> : null}
            </div>
        )
    }
}

export default TxtIndex;