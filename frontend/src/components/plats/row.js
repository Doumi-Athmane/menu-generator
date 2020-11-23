import React from 'react'
import {supprimer} from '../../requests/plat'
import './row.css'
import Delete from '../../assets/material-delete.svg'
import Pencil from '../../assets/awesome-pencil-alt.svg'

export default function Row({plat, modifier}) {

    function onDelete() {
        supprimer({id:plat.idPlat})
        .then(e => {

        })
        .catch(e => {
            alert(e);
        })
    }
    return (
        <tr>
            <td><div className="texting">{plat.nom}</div></td>
            <td><div className="texting">{plat.type}</div></td>
            <td><div className="texting">{plat.prix}</div></td>
            <td><button onClick={e=>modifier(plat)}><img src={Pencil} alt="modifier" /></button></td>
            <td><button onClick={onDelete}><img src={Delete} alt="supprimer" /></button></td>
        </tr>
    )
} 