import React from 'react'

export function Nom() {
    return (
        <div className="filter">
            <h6>filter</h6>
            <input type="text" placeholder="nom" />
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