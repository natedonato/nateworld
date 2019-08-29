import React from "react";
import './txt.css';
import txtImage from './txt.png';

class TxtIndex extends React.Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            txts: [{ name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }, { name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }, { name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }, { name: "junkyard", text: "hey people" },
                { name: "the_office", text: "yep this is a txt" }]
        };
    }

    render(){
        return (
            <div className="iconContainer" >
                    {this.state.txts.map((file, index) => (
                        <div className="txtItem" key={index} tabIndex="0" onDoubleClick={()=> alert("hey")}>
                            <img src={txtImage} alt=""/>
                            <span>{file.name + ".txt"}</span>
                        </div>
                    ))}
            </div>
        )
    }
}

export default TxtIndex;