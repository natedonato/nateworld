import React from "react";

class txtItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: props.file.text};
    }

    componentDidUpdate(prevProps) {
        if(this.props.file.text !== prevProps.file.text)
        {
            this.setState({text: this.props.file.text});
        }
    } 

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render(){
        return (
            <div style={{ zIndex: 10 }} className="txtWindow">
                <div className="txtWindowNav" onClick={this.props.closeWindow}>
                    {this.props.file.name}
                </div>
                <textarea className="txtWindowtextarea" 
                value={this.state.text} 
                onChange={(e) => this.handleChange(e)} />
            </div>
        )
        }
}

export default txtItem;
