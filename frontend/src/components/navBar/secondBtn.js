import React from "react";
import "./secondBtn.css"

export default function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            <span>
                <h6>{props.text}</h6>
            </span>
            <span>
                <img src={props.icon} alt={props.text} />
            </span>
        </button>
    )
}