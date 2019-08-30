import React from "react";
import './txt.css';
import txtImage from './txt.png';
import TxtItem from './txtItem';

export default class TxtIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: null,
            txts: [{ name: "junkyard", text: "hey people" },
                { name: "the_office", text: "i went in once \nafter hours and\nshit on the carpet." }, { name: "junkyard", text: "nothing to see here" },
                { name: "THECAPS", text: "Hey there \n partner" }, { name: "junkyard", text: "hey people" },
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
        return (
            <div className="iconContainer" >
                {this.props.data.allMarkdownRemark.edges.map((file) => (
                        <div className="txtItem" key={file.node.id} tabIndex="0" onDoubleClick={()=> {this.closeWindow(); this.toggleActive(file)}}>

                            <img src={txtImage} alt=""/>
                            <span>{file.node.frontmatter.title + ".txt"}</span>
                        </div>
                    ))}
                {this.state.active !== null ? <TxtItem file={this.state.active} closeWindow={this.closeWindow.bind(this)} /> : null}
            </div>
        )
    }
}
