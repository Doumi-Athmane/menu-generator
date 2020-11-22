import React from 'react'
import Item from './listItem'
import './list.css'

export default function List(props) {
    return (
        <div className="scroll">
            {
                props.items.map(e => <Item name={e.nom} model={props.model} key={e.idPlat} />)
            }
        </div>
    )
}