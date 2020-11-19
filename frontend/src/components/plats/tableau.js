import React from 'react'
import Row from './row'
import './tableau.css'



export default function Tableau({ plats }) {
    return (
        <table className="grid">
            <tbody>
                <tr>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Prix</th>
                    <th> </th>
                    <th> </th>
                </tr>
                {plats && plats.map(e => (
                    <Row nom={e.nom} type={e.type} prix={e.prix} key={e.id} />
                ))}
            </tbody>
        </table>
    )
}