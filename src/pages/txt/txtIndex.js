import React from "react";
import './txt.css';
import txtImage from './txt.png';
import TxtItem from './txtItem';

export default class TxtIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: null
        };
    }

    toggleActive(file){
        this.setState({active: file});
    }

    closeWindow(){
        this.setState({active: null});
    }

    render(){
        if(!this.props.data){return null;}
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
