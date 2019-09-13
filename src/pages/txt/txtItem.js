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

    downloadTxtFile(){
        const element = document.createElement("a");
        // const text = this.state.text;
        const file = new Blob([this.state.text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = this.props.file.node.frontmatter.title;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
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
                    <div className="menuBar">
                    <div className="file">
                    <span className="file fileButton" > File </span >
                        <div className="file-content">
                                <div onClick={() => this.downloadTxtFile()}>Save</div>
                                <div onClick={this.props.closeWindow}>Exit</div>
                    </div>
                    </div>
                    <span> Edit </span>
                    <span> Help </span>
                </div>
                <textarea spellcheck="false" className="txtWindowtextarea" 
                value={this.state.text} 
                onChange={(e) => this.handleChange(e)} />
                </div>
            </Draggable>
        )
        }
}

export default txtItem;
