import React from 'react'
import './plat.css'

function Plat({nom, type, prix, ingrediants}) {
    return (
        <div className="showPlat">
            <h3>Plat {nom}</h3>
            <p>type: {type}</p>
            <p>prix: {prix}</p>
            <p>ingrediants: </p>
            <div className="ingrs">
                {ingrediants && ingrediants.map(e => (<span>{e.nom}</span>))}
            </div>
        </div>
    )
}

export default Plat;