import React from 'react'
import Item from './listItem'
import './list.css'

export default function List(props) {
    return (
        <div className="scroll">
            {
                props.items.map(e => <Item plat={e} model={props.model} key={e.idPlat} modifier={props.modifier} />)
            }
        </div>
    )
}