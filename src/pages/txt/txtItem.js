import React from "react";

function txtItem(props) {
    return (
        <div style={{ zIndex: 10 }} className="txtWindow">
            <div className="txtWindowNav" onClick={props.closeWindow}>
                {props.file.name}
            </div>
            <div className="txtWindowtextarea">
                {props.file.text}
            </div>
        </div>
    )
}

export default txtItem;
