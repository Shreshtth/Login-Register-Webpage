import React from "react"

import './editpopup.scss'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner">
                <button className="clsbtn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup