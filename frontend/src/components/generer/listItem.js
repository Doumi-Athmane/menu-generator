import React from 'react';
import "./listItem.css"
import Stop from '../../assets/stop.svg'


export default function Item(props) {
    function click() {
        props.model(true);
    }
    function click2(e) {
        e.stopPropagation();
        alert('yes')
    }
    return (
        <button className="item" onClick={click}>
            <p>{props.name}</p>
            <button>
                <img src={Stop} alt="fork" onClick={click2} />
            </button>
        </button>
    )
}