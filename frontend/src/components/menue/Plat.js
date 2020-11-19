import React from 'react';
import "./Plat.css"

export default function Plat(props) {
    return (
        <div className="plat">
            <p>{props.nom}...............{props.prix}</p>
            
        </div>
    )
}
