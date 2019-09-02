import React from "react";

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
            <div style={{ zIndex: 10 }} className="txtWindow">
                <div className="txtWindowNav" onClick={this.props.closeWindow}>
                    {this.props.file.node.frontmatter.title }
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
        )
        }
}

export default txtItem;
