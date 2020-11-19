import React from 'react'
import './listIngrediants.css'
import Ingrediant from './ingrediant'

export default function listIngrediants (props) {

    return(
        <div className='listtIngrediants'>

            {
                props.ingrediants.map(e => <Ingrediant nom={e.nom} />)
            }
        </div>

    )

}