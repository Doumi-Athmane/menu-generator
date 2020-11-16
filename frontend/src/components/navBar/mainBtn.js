import React from "react";
import './mainBtn.css'

export default function User(props) {
    return (
        <div className="btn">
            <div>
                <div>
                    <img src={props.icon} alt={props.text} className="img" />
                </div>
                <div>
                    <h6 className="label">{props.text}</h6>
                </div>
            </div>
            <hr />
        </div>
    )
}