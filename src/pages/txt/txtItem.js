import React from "react";
import Draggable from 'react-draggable';

class txtItem extends React.Component{
    constructor(props){
        super(props);
        if(this.props.file){
            this.state = { text: this.props.file.node.rawMarkdownBody };
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.file.node.id !== prevProps.file.node.id)
        {
            this.setState({text: this.props.file.node.rawMarkdownBody});
        }
    } 

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render(){
        if(!this.props.file){
            return null;
        }

        return (
            <Draggable
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div style={{ zIndex: 10 }} className="txtWindow">
                <div className="txtWindowNav handle">
                        <span>{this.props.file.node.frontmatter.title}</span>

                        <div onClick={this.props.closeWindow} className="closeButton"> x </div>
                </div>
                {/* <div className="menuBar">
                    <span> File </span>
                    <span> Edit </span>
                    <span> Help </span>
                </div> */}
                <textarea className="txtWindowtextarea" 
                value={this.state.text} 
                onChange={(e) => this.handleChange(e)} />
                </div>
            </Draggable>
        )
        }
}

export default txtItem;
