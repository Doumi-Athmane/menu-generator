import React from 'react'
import Plat from './Plat'
import './ListePlat.css'

export default function ListPlat(props) {
    return (
        <div className='listePlats'>
            {
              props.plats &&  props.plats.map(e => <Plat nom={e.nom} prix={e.prix} key={e.idPlat} />)
            }
        </div>
    )
}