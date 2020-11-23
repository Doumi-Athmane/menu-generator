import React, {useState} from 'react'

export function Nom({ filter }) {
    const [_nom, setNom] = useState("")
    const [_order, setOrder] = useState("")

    function filtrer({nom, order})
    {
        nom && setNom(nom)
        order && setOrder(order)

        let obj = {}
        if (_nom !== "")obj.nom = _nom;
        if (_order !== "")obj.order = _order;

        console.log(obj)

        //filter(obj)
    }
    
    return (
        <div className="filter">
            <h6>filter</h6>
            <input type="text" placeholder="nom" onChange={e => filtrer({nom: e.target.value})} />
            <hr />
            <h6>order by</h6>
            <input type="checkbox" onChange={e => e.target.value?filtrer({order: "desc"}):filtrer({order: ""})} />
            <span>desc</span>
            <br />
            <input type="checkbox" onChange={e => e.target.value?filtrer({order: "asc"}):filtrer({order: ""})} />
            <span>asc</span>
        </div>
    )
}

export function Type() {
    return (
        <div className="filter">
            <h6>filter</h6>
            <select name="types">
                <option value="Entree">Entree</option>
                <option value="Principal">Principal</option>
                <option value="Dessert">Dessert</option>
            </select>
            <hr />
            <h6>order by</h6>
            <input type="checkbox" />
            <span>desc</span>
            <br />
            <input type="checkbox" />
            <span>asc</span>
        </div>
    )
}

export function Prix() {
    return (
        <div className="filter">
            <h6>order by</h6>
            <input type="checkbox" />
            <span>desc</span>
            <br />
            <input type="checkbox" />
            <span>asc</span>
        </div>
    )
}