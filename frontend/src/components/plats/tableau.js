import React from 'react'
import Dropdown from './dropdown'
import {Nom, Prix, Type } from './filter'
import Row from './row'
import Arrow from '../../assets/arrow-down-sign.svg'
import './tableau.css'

export default function Tableau({ plats }) {

    return (
        <div className="grid">
            <table>
                <tbody>
                    <tr>
                        <th>
                            Nom 
                            <Dropdown >
                                <Nom />
                            </Dropdown>
                        </th>
                        <th>
                            Type 
                            <Dropdown >
                                <Type />
                            </Dropdown>
                        </th>
                        <th>
                            Prix 
                            <Dropdown >
                                <Prix />
                            </Dropdown>
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                    {plats && plats.map(e => (
                        <Row nom={e.nom} type={e.type} prix={e.prix} key={e.id} />
                    ))}
                </tbody>
            </table>
            <div className="paging">
                <button><img src={Arrow} alt="previous" /></button>
                1
                <button><img src={Arrow} alt="next" /></button>
            </div>
        </div>
    )
}