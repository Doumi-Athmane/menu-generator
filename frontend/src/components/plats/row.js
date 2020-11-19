import React from 'react'
import './row.css'

export default function Row(props) {
    return (
        <tr>
            <td><div className="texting">{props.nom}</div></td>
            <td><div className="texting">{props.type}</div></td>
            <td><div className="texting">{props.prix}</div></td>
            <td><button></button></td>
            <td><button></button></td>
        </tr>
    )
} 