import React, { useState } from 'react';
import "./listItem.css"
import Stop from '../../assets/stop.svg'


export default function Item(props) {
    const [exclude, setExclude] = useState(false)

    function click() {
        props.model(props.plat);
    }
    function click2(e) {
        e.stopPropagation();
        setExclude(!exclude)
        if (!exclude) {
            props.modifier.addPlat(props.plat.idPlat)
        } else {
            props.modifier.delPlat(props.plat.idPlat)
        }
    }
    return (
        <div className={`item ${exclude}`} onClick={click}>
            <p>{props.plat.nom}</p>
            <button>
                <img src={Stop} alt="remove" onClick={click2} />
            </button>
        </div>
    )
}