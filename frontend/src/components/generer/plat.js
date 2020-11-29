import React, { useState, useEffect } from 'react'
import { ingrediants as getIngs } from '../../requests/plat'
import './plat.css'

function Plat({plat}) {
    
    const [ingrediants, setIngrediants] = useState([])

    useEffect(() => {
        async function fetchData() {
            const t = await getIngs(plat.idPlat);
            setIngrediants(t);
        }
        fetchData().catch(err => {
            console.log(err)
        })
    }, [plat])

    return (
        <div className="showPlat">
            <h3>Plat {plat.nom}</h3>
            <p>type: {plat.type? plat.type: plat.fixe? "fixe": "dessert"}</p>
            <p>prix: {plat.prix}DA</p>
            <p>ingrediants: </p>
            <div className="ingrs">
                {ingrediants.map(e => (<span>{e.nomIngrediant}</span>))}
            </div>
        </div>
    )
}

export default Plat;