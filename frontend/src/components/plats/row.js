import React from 'react'
import './row.css'
import Delete from '../../assets/material-delete.svg'
import Pencil from '../../assets/awesome-pencil-alt.svg'

export default function Row(props) {
    return (
        <tr>
            <td><div className="texting">{props.nom}</div></td>
            <td><div className="texting">{props.type}</div></td>
            <td><div className="texting">{props.prix}</div></td>
            <td><button><img src={Pencil} alt="modifier" /></button></td>
            <td><button><img src={Delete} alt="supprimer" /></button></td>
        </tr>
    )
} 