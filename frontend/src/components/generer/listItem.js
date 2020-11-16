import React from 'react';
import "./listItem.css"

export default function Item(props) {
    return (
        <div className="item">
            <p>{props.name}</p>
            <button>R</button>
        </div>
    )
}