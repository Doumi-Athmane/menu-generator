import React from 'react'
import Ingrediant from './ingrediant'
import './ListePlat.css'

export default function ListPlat(props) {
    return (
        <div className='ingrediants'>
            {
                props.ingrediants.map(e => <Ingrediant nom={e.nom} />)
            }
        </div>
    )
}